interface NewsMetadata {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  keywords: string[];
}

interface NewsArticle extends NewsMetadata {
  content: string;
}

// Eager import: all markdown loaded at build time (enables SSR + sync access)
const rawModules = import.meta.glob('../content/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseMarkdownFrontmatter(content: string): { metadata: NewsMetadata; content: string } | null {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatter = match[1];
  const markdown = match[2].trim();
  const metadata: Record<string, string> = {};

  const lines = frontmatter.split('\n');
  for (const line of lines) {
    const lineMatch = line.match(/^(\w+):\s*(.+)$/);
    if (lineMatch) {
      const key = lineMatch[1];
      let value = lineMatch[2].trim();

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      if (value.startsWith('[') && value.endsWith(']')) {
        value = value
          .slice(1, -1)
          .split(',')
          .map(v => v.trim())
          .join(',');
      }

      metadata[key] = value;
    }
  }

  return {
    metadata: {
      slug: metadata.slug || '',
      title: metadata.title || '',
      metaTitle: metadata.metaTitle || metadata.title || '',
      metaDescription: metadata.metaDescription || '',
      date: metadata.date || new Date().toISOString().split('T')[0],
      keywords: metadata.keywords ? metadata.keywords.split(',').map((k: string) => k.trim()) : [],
    },
    content: markdown,
  };
}

// Build synchronous cache at module load time (works for SSR + client)
let syncCache: NewsArticle[] | null = null;

function getSyncCache(): NewsArticle[] {
  if (syncCache) return syncCache;

  const articles: NewsArticle[] = [];
  for (const [, raw] of Object.entries(rawModules)) {
    const parsed = parseMarkdownFrontmatter(raw as string);
    if (parsed) {
      articles.push({ ...parsed.metadata, content: parsed.content });
    }
  }

  syncCache = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return syncCache;
}

// Synchronous API (works in SSR renderToString)
export function getAllNewsSync(): NewsArticle[] {
  return getSyncCache();
}

export function getNewsBySlugSync(slug: string): NewsArticle | null {
  return getSyncCache().find(a => a.slug === slug) || null;
}

// Async API (backward-compatible)
export async function getAllNews(): Promise<NewsArticle[]> {
  return getAllNewsSync();
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  return getNewsBySlugSync(slug);
}

export async function getNewsMetadata(): Promise<NewsMetadata[]> {
  const allNews = getAllNewsSync();
  return allNews.map(({ slug, title, metaTitle, metaDescription, date, keywords }) => ({
    slug,
    title,
    metaTitle,
    metaDescription,
    date,
    keywords,
  }));
}
