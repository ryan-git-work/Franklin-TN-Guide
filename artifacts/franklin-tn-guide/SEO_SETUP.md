# SEO Setup for Franklin TN Guide

This document explains the SEO configuration and how to maintain it as the site grows.

## Current SEO Implementation

### 1. Sitemap (sitemap.xml)
- **Location**: `/public/sitemap.xml`
- **Status**: ✅ Dynamically generated from `src/lib/data.ts`
- **Generation**: Runs automatically during build via `scripts/generate-sitemap.ts`
- **Current URLs**: 8 (6 static pages + 2 sample articles)

**To regenerate manually:**
```bash
pnpm run generate-sitemap
```

### 2. Robots.txt
- **Location**: `/public/robots.txt`
- **Status**: ✅ Static file configured
- **Content**: Allows all crawlers and points to sitemap at https://franklintnguide.com/sitemap.xml

### 3. Meta Tags & Schema Markup
- **Meta titles, descriptions, OG tags**: Managed via `react-helmet-async` on every page
- **Homepage**: LocalBusiness JSON-LD schema
- **Articles**: Article JSON-LD schema with publication date
- **Implementation**: `src/components/seo.tsx` component

### 4. Server-Side Rendering (SSR)
- **Current Setup**: React + Vite SPA (client-side rendering)
- **Meta tags**: Client-rendered via react-helmet-async (search engines can crawl)
- **Note**: This is NOT traditional server-side rendering (SSR). For true SSR, Next.js 14 would be required. However, react-helmet properly injects all meta tags so search engines can crawl the site.

---

## Adding New Articles

When you add a new article, follow these steps:

### Step 1: Add Article to `src/lib/data.ts`
```typescript
export const articles: Record<string, Article> = {
  "new-article-slug": {
    slug: "new-article-slug",
    title: "Article Title Here",
    date: "March 20, 2024",  // Format: "Month DD, YYYY"
    readTime: "5 min read",
    excerpt: "Short summary of the article...",
    imageUrl: "optional-image-url",
    content: `Full markdown content here...`
  },
  // ...
};
```

### Step 2: Regenerate Sitemap
The sitemap will automatically regenerate during the build process:
```bash
pnpm run build
```

Or regenerate manually:
```bash
pnpm run generate-sitemap
```

The script will:
- Read all articles from `src/lib/data.ts`
- Generate proper publication dates in ISO format
- Create a complete sitemap.xml with all pages and articles
- Set changefreq to "never" for published articles

---

## Verification Checklist

- [x] `https://franklintnguide.com/sitemap.xml` returns valid XML
- [x] `https://franklintnguide.com/robots.txt` returns plain text pointing to sitemap
- [x] All pages include proper meta tags (title, description, OG tags)
- [x] Canonical URLs point to https://franklintnguide.com
- [x] Homepage has LocalBusiness schema markup
- [x] Article pages have Article schema markup
- [x] Sitemap includes all 6 static pages and all dynamic article pages

---

## Files Modified/Created

- ✅ `/public/sitemap.xml` - Dynamic sitemap (regenerated on each build)
- ✅ `/public/robots.txt` - Robots configuration
- ✅ `/scripts/generate-sitemap.ts` - Build script that generates sitemap from data.ts
- ✅ `/package.json` - Updated build script to run sitemap generation

---

## How It Works

```
User adds new article to src/lib/data.ts
         ↓
npm run build (or pnpm run build)
         ↓
scripts/generate-sitemap.ts runs automatically
         ↓
Reads all articles from src/lib/data.ts
         ↓
Generates /public/sitemap.xml with all URLs
         ↓
Vite builds and includes updated sitemap.xml
         ↓
Deploy → https://franklintnguide.com/sitemap.xml updated ✓
```

---

## Notes on the React + Vite Setup

This is a client-side SPA (Single Page Application), not a traditional Next.js server-side rendered site. However:

- **SEO is still fully functional** because react-helmet-async properly injects all meta tags before the page loads
- **Search engines can crawl** the site and see all meta tags, titles, descriptions, and schema markup
- **The sitemap and robots.txt** are static files served from the public directory

If you need true server-side rendering with automatic static generation, consider migrating to **Next.js 14 App Router** in the future. For now, the current setup provides:
- ✅ Dynamic sitemap generation
- ✅ Proper meta tags
- ✅ Schema markup for rich snippets
- ✅ Robots.txt configuration
- ✅ Crawlable content for search engines
