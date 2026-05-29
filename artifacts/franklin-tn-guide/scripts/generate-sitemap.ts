import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/lib/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TODAY = '2026-05-29';

// Articles that will be 301'd to section pages — exclude from sitemap
const REDIRECTED_ARTICLES = new Set([
  'cost-of-living-franklin-tn',
  'williamson-county-schools-guide',
  'franklin-tn-vs-nashville',
  'best-neighborhoods-in-franklin-tn',
]);

const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0', lastmod: TODAY },
  { path: '/neighborhoods/', changefreq: 'monthly', priority: '1.0', lastmod: '2026-03-20' },
  { path: '/schools/', changefreq: 'monthly', priority: '1.0', lastmod: '2026-03-22' },
  { path: '/cost-of-living/', changefreq: 'monthly', priority: '1.0', lastmod: '2026-03-22' },
  { path: '/franklin-vs-nashville/', changefreq: 'monthly', priority: '1.0', lastmod: '2026-03-22' },
  { path: '/news/', changefreq: 'weekly', priority: '0.9', lastmod: TODAY },
  { path: '/about/', changefreq: 'yearly', priority: '0.5', lastmod: TODAY },
  { path: '/contact/', changefreq: 'monthly', priority: '0.8', lastmod: TODAY },
  { path: '/toolkit/', changefreq: 'monthly', priority: '0.8', lastmod: TODAY },
];

function convertDateFormat(dateStr: string): string {
  const months: Record<string, string> = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12',
  };
  const parts = dateStr.split(' ');
  if (parts.length === 3) {
    const [month, day, year] = parts;
    const cleanDay = day.replace(',', '');
    return `${year}-${months[month] || '01'}-${cleanDay.padStart(2, '0')}`;
  }
  return dateStr;
}

function normalizeISODate(dateStr: string): string {
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  return convertDateFormat(dateStr);
}

// Generate article URLs — skip the 4 that are 301'd
const articleUrls = Object.values(articles)
  .filter(article => !REDIRECTED_ARTICLES.has(article.slug))
  .map(article => ({
    path: `/articles/${article.slug}/`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: normalizeISODate(article.date),
  }));

// Generate news URLs from markdown files
function generateNewsUrls() {
  const newsDir = resolve(__dirname, '../src/content/news');
  const urls = [];

  try {
    const files = readdirSync(newsDir).filter(f => f.endsWith('.md'));

    for (const file of files) {
      const filePath = resolve(newsDir, file);
      const content = readFileSync(filePath, 'utf-8');
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (match) {
        const frontmatter = match[1];
        const slugMatch = frontmatter.match(/^slug:\s*(.+?)$/m);
        const dateMatch = frontmatter.match(/^date:\s*(.+?)$/m);
        const slug = slugMatch ? slugMatch[1].trim() : '';
        const date = dateMatch ? dateMatch[1].trim() : '';
        if (slug && date) {
          urls.push({
            path: `/news/${slug}/`,
            changefreq: 'weekly',
            priority: '0.9',
            lastmod: normalizeISODate(date),
          });
        }
      }
    }
  } catch (error) {
    console.warn('Warning: Could not read news directory:', error);
  }

  return urls;
}

const newsUrls = generateNewsUrls();
const allUrls = [...staticPages, ...articleUrls, ...newsUrls];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>https://franklintnguide.com${url.path}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, sitemapXml);
console.log(`✓ Generated sitemap.xml with ${allUrls.length} URLs`);
console.log(`  (excluded ${REDIRECTED_ARTICLES.size} redirected articles from sitemap)`);
