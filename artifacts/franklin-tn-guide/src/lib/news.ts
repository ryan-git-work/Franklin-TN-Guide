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

// Import all markdown files
const modules = import.meta.glob('../content/news/*.md', { as: 'raw' });

function parseMarkdownFrontmatter(content: string): { metadata: NewsMetadata; content: string } | null {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatter = match[1];
  const markdown = match[2].trim();
  const metadata: any = {};

  const lines = frontmatter.split('\n');
  for (const line of lines) {
    const lineMatch = line.match(/^(\w+):\s*(.+)$/);
    if (lineMatch) {
      const key = lineMatch[1];
      let value = lineMatch[2].trim();

      // Remove quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      // Handle arrays
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

let cachedNews: NewsArticle[] | null = null;

export async function getAllNews(): Promise<NewsArticle[]> {
  if (cachedNews) return cachedNews;

  const articles: NewsArticle[] = [];

  for (const [path, loader] of Object.entries(modules)) {
    try {
      const content = await (loader as () => Promise<string>)();
      const parsed = parseMarkdownFrontmatter(content);
      if (parsed) {
        articles.push({
          ...parsed.metadata,
          content: parsed.content,
        });
      }
    } catch (error) {
      console.error(`Error loading ${path}:`, error);
    }
  }

  cachedNews = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return cachedNews;
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const allNews = await getAllNews();
  return allNews.find(article => article.slug === slug) || null;
}

export async function getNewsMetadata(): Promise<NewsMetadata[]> {
  const allNews = await getAllNews();
  return allNews.map(({ slug, title, metaTitle, metaDescription, date, keywords }) => ({
    slug,
    title,
    metaTitle,
    metaDescription,
    date,
    keywords,
  }));
}