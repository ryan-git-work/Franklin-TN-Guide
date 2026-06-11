import { useRoute, Link } from 'wouter';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getNewsBySlugSync } from '@/lib/news';
import { absoluteCanonical } from '@/components/seo';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Franklin TN Guide',
  url: 'https://franklintnguide.com',
  logo: 'https://franklintnguide.com/images/hero-franklin.png',
  description: 'Your comprehensive relocation guide to Franklin, Tennessee, neighborhoods, schools, cost of living, and lifestyle.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'ryan@locheventures.com',
    contactType: 'General Inquiries',
  },
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Franklin TN Guide',
  url: 'https://franklintnguide.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://franklintnguide.com?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function NewsArticle() {
  const [, params] = useRoute('/news/:slug/');
  const slug = params?.slug ?? '';
  const article = getNewsBySlugSync(slug);

  if (!article) {
    return (
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif font-bold text-[#1B2A4A] mb-4">Article Not Found</h1>
          <p className="text-stone-600 mb-8">The news article you're looking for doesn't exist.</p>
          <Link href="/news/">
            <span className="inline-block text-[#2D6A4F] hover:text-[#1e4a36] font-semibold cursor-pointer">
              ← Back to News
            </span>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const canonicalUrl = absoluteCanonical(`/news/${article.slug}/`);
  const ogImage = 'https://franklintnguide.com/images/hero-franklin.png';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Organization', name: 'Franklin TN Guide' },
    publisher: {
      '@type': 'Organization',
      name: 'Franklin TN Guide',
      url: 'https://franklintnguide.com',
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    image: ogImage,
    url: canonicalUrl,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://franklintnguide.com/' },
      { '@type': 'ListItem', position: 2, name: 'News', item: 'https://franklintnguide.com/news/' },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonicalUrl },
    ],
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(siteSchema)}</script>
      </Helmet>

      <article className="pb-24">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto px-4 pt-8 mb-8">
          <Link href="/news/">
            <span className="text-[#2D6A4F] hover:text-[#1e4a36] text-sm font-medium cursor-pointer">
              ← Back to News
            </span>
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-5xl mx-auto px-4 mb-16">
          <div className="mb-6">
            <span className="inline-block bg-[#2D6A4F] text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
              News
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1B2A4A] mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-stone-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#2D6A4F]" />
              <time dateTime={article.date} className="text-lg">{formatDate(article.date)}</time>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span>By</span>
              <Link href="/about/" className="text-[#2D6A4F] hover:text-[#1e4a36] font-semibold transition-colors">
                Franklin TN Guide
              </Link>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 mb-24">
          <div className="prose prose-lg md:prose-xl prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-a:text-[#2D6A4F] hover:prose-a:text-[#1e4a36] prose-img:rounded-xl">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl shadow-stone-200/50 border border-stone-100 text-center">
            <div className="w-16 h-16 bg-[#1B2A4A] text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl font-bold">
              F
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1B2A4A] mb-4">
              Considering a move to Franklin?
            </h3>
            <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">
              Talk through the details with a Franklin resident. Free 30-minute call, no pitch.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact/"
                className="inline-block bg-[#2D6A4F] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4a36] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Book a free Franklin relocation call
              </a>
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
