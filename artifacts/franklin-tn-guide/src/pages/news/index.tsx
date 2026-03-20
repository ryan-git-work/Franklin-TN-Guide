import { useEffect, useState } from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { getAllNews } from '@/lib/news';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function NewsIndex() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const allNews = await getAllNews();
        setNews(
          allNews.map(article => ({
            slug: article.slug,
            title: article.title,
            date: article.date,
          }))
        );
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>Franklin News & Updates</title>
        <meta name="description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
        <meta name="og:title" content="Franklin News & Updates" />
        <meta name="og:description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
        <meta name="twitter:title" content="Franklin News & Updates" />
        <meta name="twitter:description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
      </Helmet>

      {/* Header */}
      <header className="mb-16 pt-8">
        <div className="max-w-5xl mx-auto px-4">
          <Link href="/" className="text-[#2D6A4F] hover:text-[#1e4a36] text-sm font-medium mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1B2A4A] mb-6">
            Franklin News & Updates
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
            Stay informed about what's happening in Franklin — from new restaurants and parks to school initiatives and community development.
          </p>
        </div>
      </header>

      {/* News List */}
      {loading ? (
        <div className="max-w-5xl mx-auto px-4 py-16 text-center text-stone-600">
          Loading news...
        </div>
      ) : news.length === 0 ? (
        <div className="max-w-5xl mx-auto px-4 py-16 text-center text-stone-600">
          No news articles found.
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 mb-24">
          <div className="space-y-8">
            {news.map((item) => (
              <article 
                key={item.slug} 
                className="bg-white rounded-2xl p-8 shadow-lg shadow-stone-100/50 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <time className="text-sm font-medium text-[#2D6A4F]">
                    {formatDate(item.date)}
                  </time>
                  <Link href={`/news/${item.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1B2A4A] hover:text-[#2D6A4F] transition-colors cursor-pointer">
                      {item.title}
                    </h2>
                  </Link>
                  {item.excerpt && (
                    <p className="text-lg text-stone-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  )}
                  <Link href={`/news/${item.slug}`}>
                    <span className="inline-block text-[#2D6A4F] hover:text-[#1e4a36] font-semibold mt-2 cursor-pointer">
                      Read more →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </PageWrapper>
  );
}