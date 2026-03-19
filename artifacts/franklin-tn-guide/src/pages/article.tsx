import { useParams, Redirect } from "wouter";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { articles } from "@/lib/data";
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = params.slug ? articles[params.slug] : null;

  if (!article) {
    return <Redirect to="/not-found" />;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "datePublished": new Date(article.date).toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Franklin TN Guide"
    }
  };

  return (
    <PageWrapper 
      title={article.metaTitle || article.title} 
      description={article.metaDescription || article.excerpt}
      canonicalUrl={`/articles/${article.slug}`}
      type="article"
      schema={articleSchema}
    >
      <div className="bg-background pt-32 pb-12 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Main Article Content */}
          <div className="w-full lg:w-2/3">
            {/* Placeholder Hero Image for Article */}
            <div className="w-full h-[400px] bg-muted rounded-3xl overflow-hidden mb-12 shadow-sm border border-border">
                {/* using unsplash lifestyle image based on slug */}
                <img 
                  src={article.slug.includes("why-move") 
                    ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80" 
                    : "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
            </div>

            <article className="prose prose-lg prose-slate prose-headings:font-serif prose-headings:text-primary prose-a:text-secondary hover:prose-a:text-primary max-w-none">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </article>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 bg-card p-8 rounded-3xl shadow-xl border border-border">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-serif font-bold text-2xl">F</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                Thinking about moving to Franklin?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Relocating is a huge decision. Get paired with a local expert who can guide you through the neighborhoods, schools, and real estate market.
              </p>
              <a 
                href="mailto:hello@franklintnguide.com"
                className="block w-full text-center px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-secondary hover:shadow-lg transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
