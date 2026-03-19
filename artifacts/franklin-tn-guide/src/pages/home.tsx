import { Link } from "wouter";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { articles } from "@/lib/data";
import { MapPin, GraduationCap, Wallet, Building2, ArrowRight } from "lucide-react";

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Franklin TN Guide",
    "description": "Your comprehensive relocation guide to living in Franklin, Tennessee.",
    "url": "https://franklintnguide.com",
  };

  const articleList = Object.values(articles);

  return (
    <PageWrapper 
      title="Welcome to Franklin, Tennessee" 
      description="Whether you're relocating for a new career, seeking top-tier schools, or simply craving historic charm with modern luxury, your journey starts here."
      type="website"
      schema={homeSchema}
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000"
            alt="Downtown Franklin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-md mb-6 shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2"></span>
            Tennessee's Best Kept Secret
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Welcome to <br/><span className="italic">Franklin, Tennessee</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Whether you're relocating for a new career, seeking top-tier schools, or simply craving historic charm with modern luxury, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/neighborhoods" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-xl text-center">
              Explore Neighborhoods
            </Link>
            <a href="mailto:hello@franklintnguide.com" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all shadow-lg text-center">
              Speak to a Local Expert
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 -mt-16 relative z-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: "Neighborhoods", icon: MapPin, href: "/neighborhoods", desc: "Find your perfect community" },
              { title: "Schools", icon: GraduationCap, href: "/schools", desc: "Top-rated education" },
              { title: "Cost of Living", icon: Wallet, href: "/cost-of-living", desc: "Housing & expenses" },
              { title: "Franklin vs Nashville", icon: Building2, href: "/franklin-vs-nashville", desc: "Compare the cities" }
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group bg-card p-6 rounded-2xl shadow-lg border border-border/50 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Essential Reading</h2>
              <p className="text-muted-foreground max-w-2xl">Everything you need to know before making the move to Williamson County.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articleList.map((article) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group flex flex-col bg-card rounded-3xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-64 overflow-hidden relative">
                  {article.imageUrl && (
                    <img 
                      src={article.imageUrl.startsWith('http') ? article.imageUrl : `${import.meta.env.BASE_URL}${article.imageUrl}`}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
