import { writeFileSync, readdirSync, readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { articles } from '../src/lib/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Static pages that are always included
const staticPages = [
  { path: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2024-03-19' },
  { path: '/neighborhoods', changefreq: 'monthly', priority: 0.8, lastmod: '2024-03-19' },
  { path: '/schools', changefreq: 'monthly', priority: 0.8, lastmod: '2024-03-19' },
  { path: '/cost-of-living', changefreq: 'monthly', priority: 0.8, lastmod: '2024-03-19' },
  { path: '/franklin-vs-nashville', changefreq: 'monthly', priority: 0.8, lastmod: '2024-03-19' },
  { path: '/news', changefreq: 'weekly', priority: 0.9, lastmod: '2026-03-01' },
  { path: '/about', changefreq: 'monthly', priority: 0.7, lastmod: '2024-03-19' },
];

// Generate article URLs from data.ts
const articleUrls = Object.values(articles).map(article => ({
  path: `/articles/${article.slug}`,
  changefreq: 'never',
  priority: 0.8,
  lastmod: convertDateFormat(article.date), // Convert "March 10, 2024" to "2024-03-10"
}));

// Generate news URLs from markdown files in /content/news/
const newsUrls = generateNewsUrls();

// Helper to convert date format "March 10, 2024" -> "2024-03-10"
function convertDateFormat(dateStr: string): string {
  const months: Record<string, string> = {
    'January': '01', 'February': '02', 'March': '03', 'April': '04',
    'May': '05', 'June': '06', 'July': '07', 'August': '08',
    'September': '09', 'October': '10', 'November': '11', 'December': '12',
  };
  const [month, day, year] = dateStr.split(' ');
  const cleanDay = day.replace(',', ''); // Remove comma from "10,"
  return `${year}-${months[month]}-${cleanDay.padStart(2, '0')}`;
}

// Helper to convert ISO date format "2026-03-01" -> "2026-03-01"
function normalizeISODate(dateStr: string): string {
  // Already in ISO format
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }
  // Convert "March 1, 2026" to "2026-03-01"
  return convertDateFormat(dateStr);
}

// Read and parse news markdown files
function generateNewsUrls() {
  const newsDir = resolve(__dirname, '../src/content/news');
  const urls = [];
  
  try {
    const files = readdirSync(newsDir).filter(f => f.endsWith('.md'));
    
    for (const file of files) {
      const filePath = resolve(newsDir, file);
      const content = readFileSync(filePath, 'utf-8');
      
      // Parse frontmatter
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (match) {
        const frontmatter = match[1];
        let slug = '';
        let date = '';
        
        // Extract slug and date from frontmatter
        const slugMatch = frontmatter.match(/^slug:\s*(.+?)$/m);
        const dateMatch = frontmatter.match(/^date:\s*(.+?)$/m);
        
        if (slugMatch) slug = slugMatch[1].trim();
        if (dateMatch) date = dateMatch[1].trim();
        
        if (slug && date) {
          urls.push({
            path: `/news/${slug}`,
            changefreq: 'never',
            priority: 0.8,
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

// Combine all URLs
const allUrls = [...staticPages, ...articleUrls, ...newsUrls];

// Generate XML
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>https://franklintnguide.com${url.path}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write to public/sitemap.xml
const sitemapPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(sitemapPath, sitemapXml);
console.log(`✓ Generated sitemap.xml with ${allUrls.length} URLs`);
