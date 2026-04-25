import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dir = dirname(__filename);

async function prerender() {
  // Read routes from sitemap.xml
  const sitemapPath = resolve(__dir, '../public/sitemap.xml');
  const sitemap = readFileSync(sitemapPath, 'utf-8');

  const routes: string[] = [];
  const locRegex = /<loc>https:\/\/franklintnguide\.com(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(sitemap)) !== null) {
    const path = match[1] || '/';
    routes.push(path === '' ? '/' : path);
  }

  console.log(`Found ${routes.length} routes to pre-render`);

  // Read the built client HTML template
  const templatePath = resolve(__dir, '../dist/public/index.html');
  const template = readFileSync(templatePath, 'utf-8');

  // Import the SSR bundle (built by vite --ssr)
  const ssrBundlePath = resolve(__dir, '../dist/server/entry-server.js');
  const { render } = (await import(ssrBundlePath)) as {
    render: (url: string) => { html: string; head: string };
  };

  let successCount = 0;
  let failCount = 0;
  const failures: string[] = [];

  for (const route of routes) {
    try {
      const { html, head } = render(route);

      // Strip the default <title> from the template (Helmet provides the correct per-page title)
      const templateWithoutTitle = template.replace(/<title>[^<]*<\/title>/, '');

      // Inject pre-rendered head tags and HTML content into template
      const fullHtml = templateWithoutTitle
        .replace('</head>', `  ${head}\n</head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

      // Determine output path
      const normalizedRoute = route === '/' ? '' : route;
      const outputPath = resolve(__dir, `../dist/public${normalizedRoute}/index.html`);

      mkdirSync(dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, fullHtml, 'utf-8');

      console.log(`✓ ${route}`);
      successCount++;
    } catch (err) {
      console.error(`✗ Failed: ${route}`, err instanceof Error ? err.message : err);
      failCount++;
      failures.push(route);
    }
  }

  console.log(`\n📄 Pre-rendering complete:`);
  console.log(`   ✓ ${successCount} succeeded`);
  if (failCount > 0) {
    console.log(`   ✗ ${failCount} failed: ${failures.join(', ')}`);
  }
  console.log(`   Total HTML files: ${successCount} routes → dist/public/`);
}

prerender().catch(err => {
  console.error('Pre-rendering failed:', err);
  process.exit(1);
});
