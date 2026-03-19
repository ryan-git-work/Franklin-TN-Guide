import { PageWrapper } from "@/components/layout/page-wrapper";
import { neighborhoods } from "@/lib/data";
import { MapPin, CheckCircle2, XCircle } from "lucide-react";

export default function Neighborhoods() {
  return (
    <PageWrapper 
      title="Best Neighborhoods" 
      description="Explore the best neighborhoods in Franklin, TN including Westhaven, Cool Springs, Downtown, and Berry Farms."
      canonicalUrl="/neighborhoods"
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Franklin Neighborhoods
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            From historic avenues with century-old trees to master-planned resort communities, find the perfect place to call home.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-16 max-w-5xl mx-auto">
          {neighborhoods.map((hood, index) => (
            <div key={hood.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}>
              <div className="w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={hood.imageUrl} 
                    alt={`${hood.name} neighborhood in Franklin TN`} 
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-semibold text-lg">{hood.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{hood.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {hood.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secondary" /> The Good
                    </h4>
                    <ul className="space-y-2">
                      {hood.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-destructive" /> To Consider
                    </h4>
                    <ul className="space-y-2">
                      {hood.cons.map((con, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 flex-shrink-0"></span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
