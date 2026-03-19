import { writeFileSync } from 'fs';
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
  { path: '/about', changefreq: 'monthly', priority: 0.7, lastmod: '2024-03-19' },
];

// Generate article URLs from data.ts
const articleUrls = Object.values(articles).map(article => ({
  path: `/articles/${article.slug}`,
  changefreq: 'never',
  priority: 0.8,
  lastmod: convertDateFormat(article.date), // Convert "March 10, 2024" to "2024-03-10"
}));

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

// Combine all URLs
const allUrls = [...staticPages, ...articleUrls];

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
