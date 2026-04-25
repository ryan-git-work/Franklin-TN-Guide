import { useRoute } from "wouter";
import { Helmet } from "react-helmet-async";
import ReactMarkdown from "react-markdown";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { articles } from "@/lib/data";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import NotFound from "@/pages/not-found";

const getImageUrl = (url?: string) => {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return `${import.meta.env.BASE_URL}${url.replace(/^\//, "")}`;
};

const convertDateToISO = (dateStr: string): string => {
  const months: Record<string, string> = {
    January: "01", February: "02", March: "03", April: "04",
    May: "05", June: "06", July: "07", August: "08",
    September: "09", October: "10", November: "11", December: "12",
  };
  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const [month, day, year] = parts;
    return `${year}-${months[month] || "01"}-${day.replace(",", "").padStart(2, "0")}`;
  }
  return new Date().toISOString().split("T")[0];
};

export default function ArticlePage() {
  const [, params] = useRoute("/articles/:slug");
  const slug = params?.slug;
  const article = slug ? articles[slug] : null;

  if (!article) {
    return <NotFound />;
  }

  const canonicalUrl = `https://franklintnguide.com/articles/${article.slug}`;
  const ogImage = article.imageUrl?.startsWith("http")
    ? article.imageUrl
    : "https://franklintnguide.com/images/hero-franklin.png";
  const isoDate = convertDateToISO(article.date);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    author: { "@type": "Organization", name: "Franklin TN Guide" },
    publisher: {
      "@type": "Organization",
      name: "Franklin TN Guide",
      url: "https://franklintnguide.com",
    },
    datePublished: isoDate,
    dateModified: isoDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    image: ogImage,
    url: canonicalUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
    ],
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{article.metaTitle || article.title}</title>
        <meta name="description" content={article.metaDescription || article.excerpt || ""} />
        {article.keywords && (
          <meta name="keywords" content={article.keywords.join(", ")} />
        )}
        <link rel="canonical" href={canonicalUrl} />

        <meta property="og:title" content={article.metaTitle || article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt || ""} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Franklin TN Guide" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle || article.title} />
        <meta name="twitter:description" content={article.metaDescription || article.excerpt || ""} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <article className="min-h-screen bg-[#FAF8F5] pb-24">
        {/* Article Header */}
        <header className="pt-32 pb-12 px-4 bg-white border-b border-stone-200">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-stone-500 hover:text-[#1B2A4A] transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1B2A4A] leading-tight mb-8">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-stone-500 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#2D6A4F]" />
                <time dateTime={isoDate}>{article.date}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#2D6A4F]" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Image Hero */}
        {article.imageUrl && (
          <div className="w-full max-w-5xl mx-auto px-4 -mt-12 mb-16 relative z-10">
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/10 border-4 border-white">
              <img
                src={getImageUrl(article.imageUrl)}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="max-w-3xl mx-auto px-4 mt-16">
          <div className="prose prose-lg md:prose-xl prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-a:text-[#2D6A4F] hover:prose-a:text-[#1e4a36] prose-img:rounded-xl">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="max-w-3xl mx-auto px-4 mt-24">
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
