import { PageWrapper } from "@/components/layout/page-wrapper";
import { TrendingUp, Home, Receipt, Calculator } from "lucide-react";

export default function CostOfLiving() {
  return (
    <PageWrapper 
      title="Cost of Living" 
      description="Understand the cost of living in Franklin, Tennessee, including median home prices, property taxes, and daily expenses."
      canonicalUrl="/cost-of-living"
    >
      <div className="bg-background pt-32 pb-16 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Cost of Living
          </h1>
          <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Franklin offers a premium lifestyle. While housing costs reflect its desirability, the lack of state income tax helps balance the equation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Housing Market</h3>
              <p className="text-muted-foreground mb-6">Housing is the largest factor in Franklin's cost of living index, sitting significantly above the national average due to high demand and exceptional schools.</p>
              <div className="bg-accent/20 p-4 rounded-xl border border-accent/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Median Home Price</span>
                  <span className="font-bold text-xl text-primary">$850,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Average 2BR Rent</span>
                  <span className="font-bold text-xl text-primary">$2,200/mo</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Receipt className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-2">Taxes in TN</h3>
              <p className="text-muted-foreground mb-6">Tennessee is a highly tax-friendly state, which draws many high-earners from states like California, New York, and Illinois.</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg leading-none">✓</span>
                  <div>
                    <span className="font-bold text-foreground block">0% State Income Tax</span>
                    <span className="text-sm text-muted-foreground">Keep more of what you earn.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-lg leading-none">✓</span>
                  <div>
                    <span className="font-bold text-foreground block">Low Property Taxes</span>
                    <span className="text-sm text-muted-foreground">Williamson County property tax rates are historically very competitive compared to national averages.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Calculator className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-serif font-bold mb-4">The Verdict</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Living in Franklin is an investment. The upfront cost of real estate is high, but residents consistently report that the quality of life, safety, top-tier free public education, and lack of state income tax make it incredibly worthwhile for the long term.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <TrendingUp className="w-5 h-5 text-secondary" />
                <span className="font-medium">Overall Cost of Living Index: ~130 (National Avg = 100)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
