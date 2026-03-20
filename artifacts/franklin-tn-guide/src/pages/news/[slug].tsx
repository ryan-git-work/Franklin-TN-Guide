import { useRoute, Link } from 'wouter';
import { useEffect, useState } from 'react';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getNewsBySlug } from '@/lib/news';

interface NewsArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  content: string;
}

export default function NewsArticle() {
  const [match, params] = useRoute('/news/:slug');
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = async () => {
      if (!params?.slug) return;
      try {
        const data = await getNewsBySlug(params.slug);
        if (data) {
          setArticle(data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Failed to load article:', error);
        setNotFound(true);
      }
    };

    loadArticle();
  }, [params?.slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (notFound) {
    return (
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-serif font-bold text-[#1B2A4A] mb-4">Article Not Found</h1>
          <p className="text-stone-600 mb-8">The news article you're looking for doesn't exist.</p>
          <Link href="/news">
            <span className="inline-block text-[#2D6A4F] hover:text-[#1e4a36] font-semibold cursor-pointer">
              ← Back to News
            </span>
          </Link>
        </div>
      </PageWrapper>
    );
  }

  if (!article) {
    return (
      <PageWrapper>
        <div className="max-w-5xl mx-auto px-4 py-16 text-center text-stone-600">
          Loading...
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="og:title" content={article.metaTitle} />
        <meta name="og:description" content={article.metaDescription} />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
      </Helmet>

      <article className="pb-24">
        {/* Navigation */}
        <div className="max-w-5xl mx-auto px-4 pt-8 mb-8">
          <Link href="/news">
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
              <span className="text-lg">{formatDate(article.date)}</span>
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
              Thinking about moving to Franklin?
            </h3>
            <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">
              Relocating is a huge decision. Get in touch with a local expert who can give you the honest, unfiltered truth about living here.
            </p>
            <a 
              href="mailto:ryan@locheventures.com"
              className="inline-block bg-[#2D6A4F] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1e4a36] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Speak to a Local Expert
            </a>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}