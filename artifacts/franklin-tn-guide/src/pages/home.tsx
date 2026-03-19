import { Link } from "wouter";
import { ArrowRight, HomeIcon, GraduationCap, Wallet, Map } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { articles } from "@/lib/data";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Franklin TN Guide",
  "description": "Your comprehensive relocation guide to living in Franklin, Tennessee.",
  "url": "https://franklintnguide.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Franklin",
    "addressRegion": "TN",
    "addressCountry": "US"
  }
};

export default function Home() {
  const featuredArticles = Object.values(articles);

  return (
    <PageWrapper 
      title="Relocation Guide & Local Insights" 
      description="Thinking of moving to Franklin, Tennessee? Discover the best neighborhoods, schools, cost of living, and local insights in our comprehensive relocation guide."
      canonicalUrl="/"
      schema={localBusinessSchema}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* using the generated hero image */}
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-franklin.png`} 
            alt="Downtown Franklin Tennessee" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-medium mb-6 tracking-wide uppercase">
            Tennessee's Best Kept Secret
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
            Welcome to <br/><span className="text-accent italic">Franklin, Tennessee</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Whether you're relocating for a new career, seeking top-tier schools, or simply craving historic charm with modern luxury, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/neighborhoods" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Explore Neighborhoods
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Speak to a Local Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-background relative z-20 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Neighborhoods", icon: HomeIcon, href: "/neighborhoods", desc: "Find your perfect community." },
              { title: "Schools", icon: GraduationCap, href: "/schools", desc: "Top-rated education options." },
              { title: "Cost of Living", icon: Wallet, href: "/cost-of-living", desc: "Housing, taxes & expenses." },
              { title: "Vs. Nashville", icon: Map, href: "/franklin-vs-nashville", desc: "Which city is right for you?" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group">
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-secondary/30 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-1">
                  <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-secondary/10 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">Latest Insights</h2>
              <p className="text-muted-foreground text-lg">
                Expert advice, local news, and deep dives into what makes living in Williamson County so special.
              </p>
            </div>
            <Link href="/about" className="flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
                <article className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  <div className="h-64 bg-muted overflow-hidden relative">
                    {/* Unsplash abstract lifestyle images for articles */}
                    {/* abstract real estate lifestyle cozy home */}
                    <img 
                      src={article.slug.includes("why-move") 
                        ? "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80" 
                        : "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80"}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {article.readTime}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <span className="text-sm text-secondary font-semibold mb-3">{article.date}</span>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors mt-auto">
                      Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-serif font-bold mb-6">Ready to make the move?</h2>
          <p className="text-lg text-white/80 mb-10 font-light">
            Get personalized advice from a local real estate expert who knows Franklin inside and out. No pressure, just helpful guidance.
          </p>
          <a 
            href="mailto:hello@franklintnguide.com"
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-full font-semibold text-lg hover:bg-secondary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
