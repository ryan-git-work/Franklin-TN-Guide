import { PageWrapper } from '@/components/layout/page-wrapper';
import { Helmet } from 'react-helmet-async';
import { Link } from 'wouter';
import { getAllNewsSync } from '@/lib/news';

const news = getAllNewsSync();

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export default function NewsIndex() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Franklin TN News &amp; Updates | Franklin TN Guide</title>
        <meta name="description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
        <link rel="canonical" href="https://franklintnguide.com/news" />
        <meta property="og:title" content="Franklin TN News &amp; Updates" />
        <meta property="og:description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://franklintnguide.com/news" />
        <meta property="og:image" content="https://franklintnguide.com/images/hero-franklin.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Franklin TN News &amp; Updates" />
        <meta name="twitter:description" content="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community." />
        <meta name="twitter:image" content="https://franklintnguide.com/images/hero-franklin.png" />
      </Helmet>

      {/* Header */}
      <header className="mb-16 pt-8">
        <div className="max-w-5xl mx-auto px-4">
          <Link href="/" className="text-[#2D6A4F] hover:text-[#1e4a36] text-sm font-medium mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1B2A4A] mb-6">
            Franklin News &amp; Updates
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
            Stay informed about what's happening in Franklin — from new restaurants and parks to school initiatives and community development.
          </p>
        </div>
      </header>

      {/* News List */}
      {news.length === 0 ? (
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
