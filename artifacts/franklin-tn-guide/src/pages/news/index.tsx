import { PageWrapper } from '@/components/layout/page-wrapper';
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
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://franklintnguide.com' },
      { '@type': 'ListItem', position: 2, name: 'News', item: 'https://franklintnguide.com/news' },
    ],
  };

  return (
    <PageWrapper
      title="Franklin TN News & Updates"
      description="Latest news and updates about Franklin, TN — restaurants, events, development, schools, and community."
      canonicalUrl="/news"
      schema={breadcrumbSchema}
    >

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
                  <div className="flex items-center gap-3 text-sm text-stone-500">
                    <time className="font-medium text-[#2D6A4F]">
                      {formatDate(item.date)}
                    </time>
                    <span>&middot;</span>
                    <span>By <Link href="/about" className="text-[#2D6A4F] hover:text-[#1e4a36] font-medium transition-colors">Franklin TN Guide</Link></span>
                  </div>
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
