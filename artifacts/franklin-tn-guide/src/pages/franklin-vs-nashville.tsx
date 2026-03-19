import { PageWrapper } from "@/components/layout/page-wrapper";
import { Map, Zap, Coffee, Shield } from "lucide-react";

export default function FranklinVsNashville() {
  return (
    <PageWrapper 
      title="Franklin vs Nashville" 
      description="Comparing Franklin, TN to Nashville. Find out which city fits your lifestyle, budget, and family needs better."
      canonicalUrl="/franklin-vs-nashville"
    >
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 flex">
          {/* Split screen background */}
          <div className="w-1/2 h-full bg-primary relative">
             <img 
                src={`${import.meta.env.BASE_URL}images/hero-franklin.png`} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
             />
          </div>
          <div className="w-1/2 h-full bg-black relative">
              <img 
                src={`${import.meta.env.BASE_URL}images/nashville-skyline.png`} 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
             />
          </div>
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
              Franklin <span className="text-secondary font-sans italic px-2">vs</span> Nashville
            </h1>
            <p className="text-white/90 text-lg">Choosing the right side of the county line.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed">
              They are only 20 miles apart, but Franklin and Nashville offer vastly different lifestyles. Many people move to the area for Nashville, but end up settling in Franklin. Here is a breakdown of why.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden mb-20">
            <div className="grid grid-cols-3 border-b border-border bg-muted/50">
              <div className="p-6"></div>
              <div className="p-6 text-center border-l border-border">
                <h3 className="font-serif text-2xl font-bold text-primary">Franklin</h3>
                <span className="text-sm text-muted-foreground">The Upscale Suburb</span>
              </div>
              <div className="p-6 text-center border-l border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground">Nashville</h3>
                <span className="text-sm text-muted-foreground">The Urban Core</span>
              </div>
            </div>

            {[
              { label: "Vibe", icon: Coffee, f: "Charming, historic, quiet, family-centric", n: "Vibrant, musical, energetic, bustling" },
              { label: "Schools (Public)", icon: Zap, f: "Exceptional (Top in state)", n: "Varies wildly by zone/magnet status" },
              { label: "Pace of Life", icon: Map, f: "Slower, relaxed", n: "Fast-paced, city living" },
              { label: "Safety", icon: Shield, f: "Very High", n: "Moderate (Typical city metrics)" },
              { label: "Cost to Buy", icon: Map, f: "Very High (Premium)", n: "High (But more diverse inventory)" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-muted/10'}`}>
                <div className="p-6 flex items-center gap-3 font-semibold text-primary">
                  <row.icon className="w-5 h-5 text-secondary" />
                  {row.label}
                </div>
                <div className="p-6 text-center border-l border-border flex items-center justify-center text-muted-foreground">
                  {row.f}
                </div>
                <div className="p-6 text-center border-l border-border flex items-center justify-center text-muted-foreground">
                  {row.n}
                </div>
              </div>
            ))}
          </div>

          {/* Summaries */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Choose Franklin If...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-foreground"><span className="text-secondary font-bold">✓</span> You prioritize top-tier public schools.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-secondary font-bold">✓</span> You want a large, safe suburban home with a yard.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-secondary font-bold">✓</span> You prefer a quieter, family-oriented lifestyle.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-secondary font-bold">✓</span> You love historic downtown charm over skyscrapers.</li>
              </ul>
            </div>
            
            <div className="bg-muted p-8 rounded-3xl border border-border">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Choose Nashville If...</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-foreground"><span className="text-foreground font-bold">✓</span> You want to be able to walk to nightlife and major concerts.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-foreground font-bold">✓</span> You are a young professional without school-age kids.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-foreground font-bold">✓</span> You prefer modern high-rise condos or urban historic neighborhoods.</li>
                <li className="flex items-start gap-2 text-foreground"><span className="text-foreground font-bold">✓</span> You want a shorter commute if your job is in the city center.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
