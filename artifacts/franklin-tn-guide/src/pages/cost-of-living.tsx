import { PageWrapper } from "@/components/layout/page-wrapper";
import { Link } from "wouter";
import { ArrowRight, TrendingDown } from "lucide-react";

export default function CostOfLiving() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 2, name: "Cost of Living", item: "https://franklintnguide.com/cost-of-living" },
    ],
  };

  return (
    <PageWrapper
      title="Cost of Living"
      description="Is Franklin, TN expensive? Here's an honest breakdown of Franklin's cost of living — housing prices, rent, taxes, utilities, groceries, and how it compares to where you're moving from."
      canonicalUrl="/cost-of-living"
      schema={breadcrumbSchema}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Cost of Living in Franklin, TN
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            What to Actually Expect
          </p>
          <div className="mt-6 text-white/60 text-sm">
            By <Link href="/about" className="text-[#2D6A4F] hover:text-[#1e4a36] font-semibold transition-colors">Franklin TN Guide</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="prose prose-lg max-w-none prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-a:text-[#2D6A4F] hover:prose-a:text-[#1e4a36]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Let's be direct: Franklin, Tennessee is not cheap. If you've been reading relocation content that leans heavily on Tennessee's affordable reputation without acknowledging what Williamson County actually costs, this page will give you a more honest picture — including the context that makes Franklin's costs make sense for the people choosing to move here.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            The goal isn't to sell you on Franklin. It's to give you real numbers so you can make a clear-eyed decision.
          </p>

          <h2>The Headline Number</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin's overall cost of living index sits at approximately 130 against a national average of 100. That means day-to-day life in Franklin runs roughly 30% above the national average when you factor in housing, taxes, groceries, utilities, and transportation together.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Housing is the primary driver of that gap. Everything else — groceries, utilities, transportation — is closer to national norms. Tennessee's tax environment, particularly the absence of a state income tax, works meaningfully in the other direction.
          </p>

          <h2>Housing: The Biggest Line Item</h2>

          <h3>Buying</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Williamson County home prices have appreciated significantly over the past decade and remain well above both state and national medians.
          </p>

          <div className="bg-muted p-6 rounded-lg my-8 space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Median home price in Franklin</span>
              <span className="font-bold text-lg text-primary">$850,000+</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Entry-level single-family</span>
              <span className="font-bold text-lg text-primary">$450,000–$550,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Mid-range family home</span>
              <span className="font-bold text-lg text-primary">$600,000–$950,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Premium / luxury</span>
              <span className="font-bold text-lg text-primary">$1M–$3M+</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Downtown / historic district</span>
              <span className="font-bold text-lg text-primary">$700,000–$2M+</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Westhaven / master-planned</span>
              <span className="font-bold text-lg text-primary">$700,000–$1.8M+</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Prices have moderated from the peak frenzy of 2021–2022 but remain elevated by any historical Franklin standard. Inventory is limited in most neighborhoods, and well-priced homes still move quickly. This is not a buyer's market — but it's a more balanced one than it was three years ago.
          </p>

          <h3>Renting</h3>

          <div className="bg-muted p-6 rounded-lg my-8 space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">1-bedroom apartment</span>
              <span className="font-bold text-lg text-primary">$1,500–$2,200/month</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">2-bedroom apartment</span>
              <span className="font-bold text-lg text-primary">$1,900–$2,800/month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">3-bedroom single-family rental</span>
              <span className="font-bold text-lg text-primary">$2,800–$4,500/month</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The Cool Springs corridor has the highest concentration of apartment inventory in Franklin, making it the most practical landing zone for relocating renters who want to live in Franklin while searching for a home to buy.
          </p>

          <h2>The Context That Actually Matters</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin's housing prices need to be understood relative to where most people moving here are coming from — not relative to Tennessee's statewide median.
          </p>

          <div className="space-y-4 my-8">
            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-foreground mb-2">For buyers leaving California (Bay Area / LA):</p>
              <p className="text-muted-foreground">A home that costs $850,000 in Franklin would be $2.5M–$3.5M+ in most Bay Area submarkets. The value comparison is dramatic and it's the primary reason California leads Franklin's in-migration numbers.</p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-foreground mb-2">For buyers leaving Chicago:</p>
              <p className="text-muted-foreground">More comparable on price, but Franklin generally delivers better schools, lower crime, and no state income tax at equivalent price points.</p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-foreground mb-2">For buyers leaving New York / New Jersey:</p>
              <p className="text-muted-foreground">Meaningful savings, particularly when the full tax picture is factored in. What $850,000 buys in Franklin versus suburban New Jersey or Westchester County is not a close comparison.</p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <p className="font-semibold text-foreground mb-2">For buyers leaving Nashville proper:</p>
              <p className="text-muted-foreground">Franklin is comparable or slightly higher than Nashville's most desirable neighborhoods — but the school quality differential is significant enough that many families consider the premium worthwhile.</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed font-semibold bg-muted p-4 rounded-lg">
            The people who find Franklin's prices hardest to absorb are those benchmarking against Tennessee's statewide median rather than against their city of origin. Know which comparison is relevant for your situation.
          </p>

          <h2>Taxes: Tennessee's Most Significant Financial Advantage</h2>

          <h3>No State Income Tax</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Tennessee does not impose a state income tax on wages or salary. This is the single most important financial variable most people underestimate when evaluating Franklin's true cost of living.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            For a household earning $200,000 relocating from California, the absence of state income tax represents approximately $20,000–$25,000 in annual savings. At $300,000 household income, the figure is larger. Over a decade of living in Franklin, this compounds into a number that meaningfully changes the housing cost conversation.
          </p>

          <div className="bg-muted p-6 rounded-lg my-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left pb-3 font-semibold text-foreground">State you're leaving</th>
                  <th className="text-left pb-3 font-semibold text-foreground">Top marginal rate</th>
                  <th className="text-left pb-3 font-semibold text-foreground">Annual savings at $200K income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 text-muted-foreground">California</td>
                  <td className="py-3 text-muted-foreground">13.3%</td>
                  <td className="py-3 font-bold text-primary">~$22,000</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">New York</td>
                  <td className="py-3 text-muted-foreground">10.9%</td>
                  <td className="py-3 font-bold text-primary">~$18,000</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Illinois</td>
                  <td className="py-3 text-muted-foreground">4.95%</td>
                  <td className="py-3 font-bold text-primary">~$8,000</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground">Texas</td>
                  <td className="py-3 text-muted-foreground">0%</td>
                  <td className="py-3 font-bold text-primary">—</td>
                </tr>
                <tr>
                  <td className="py-3 text-muted-foreground font-semibold">Tennessee</td>
                  <td className="py-3 text-muted-foreground font-semibold">0%</td>
                  <td className="py-3 font-bold text-secondary">—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Property Taxes</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Williamson County's effective property tax rate runs approximately 0.55%–0.75% of assessed value annually — meaningfully lower than most Northeastern, Midwestern, and West Coast states.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            On an $850,000 home, expect annual property taxes in the range of $4,700–$6,400 depending on exact location and current assessed value. For comparison, the same home in many New Jersey counties would carry property taxes of $18,000–$25,000 annually.
          </p>

          <h3>Sales Tax</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Tennessee's combined state and local sales tax rate runs approximately 9.25%–9.75% in Williamson County — one of the higher rates in the country. This is the tax you'll notice in daily life. Groceries are taxed at a reduced rate of 4%; general retail purchases carry the full rate.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            For most households the sales tax is a manageable trade against the income tax savings. But it's worth factoring into your everyday spending budget rather than being surprised by it.
          </p>

          <h2>Everyday Expenses</h2>

          <h3>Groceries</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin's grocery landscape is well-developed. Publix, Kroger, Whole Foods, Fresh Market, Trader Joe's, and Costco all have locations in or near Franklin. Conventional grocery prices broadly track national averages. Specialty stores carry their usual premiums.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-semibold bg-muted p-4 rounded-lg">
            Realistic weekly grocery budget for a family of four: $200–$300 depending on dietary preferences and shopping habits.
          </p>

          <h3>Dining Out</h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Franklin's restaurant scene reflects an affluent, food-oriented community. Prices are Nashville-comparable:
          </p>

          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong>Casual dinner for two:</strong> $50–$80 before tip</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong>Mid-range restaurant:</strong> $80–$120 for two</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong>Fine dining:</strong> $150–$250+ for two</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong>Coffee shop:</strong> $6–$8 per drink</span>
            </li>
          </ul>

          <h3>Utilities</h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Middle Tennessee summers are hot and humid. Air conditioning costs are real June through September.
          </p>

          <div className="bg-muted p-6 rounded-lg my-8 space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Electric</span>
              <span className="font-bold text-lg text-primary">$150–$250/month</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Gas</span>
              <span className="font-bold text-lg text-primary">$60–$120/month</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Water/sewer</span>
              <span className="font-bold text-lg text-primary">$60–$100/month</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Internet</span>
              <span className="font-bold text-lg text-primary">$60–$100/month</span>
            </div>
            <div className="pt-3 border-t border-border mt-3 flex justify-between items-center font-semibold">
              <span className="text-foreground">Annual total estimate</span>
              <span className="text-primary">$4,500–$6,500/year</span>
            </div>
          </div>

          <h3>Transportation</h3>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Franklin is suburban and car-dependent outside of the downtown core and a few walkable communities. Most households operate two vehicles.
          </p>

          <ul className="space-y-2 text-muted-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span>Gas prices in Middle Tennessee typically run $0.10–$0.20 below the national average</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span>Vehicle insurance: $1,200–$2,000 per vehicle annually depending on coverage and history</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-secondary font-bold mt-1">•</span>
              <span>If you're relocating from a city where you didn't own a car, budget for at least one vehicle — two is the norm for families</span>
            </li>
          </ul>

          <h2>What It Actually Costs: Sample Annual Budgets</h2>

          <h3>Professional couple, renting, no children</h3>

          <div className="bg-muted p-6 rounded-lg my-6 space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Rent (2BR, Cool Springs)</span>
              <span className="font-bold text-primary">$28,800</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Utilities</span>
              <span className="font-bold text-primary">$3,600</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Groceries</span>
              <span className="font-bold text-primary">$8,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Transportation (2 vehicles)</span>
              <span className="font-bold text-primary">$12,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Dining and entertainment</span>
              <span className="font-bold text-primary">$10,000</span>
            </div>
            <div className="pt-3 border-t border-border mt-3 flex justify-between items-center font-semibold">
              <span className="text-foreground">Baseline total</span>
              <span className="text-primary">~$62,000/year</span>
            </div>
            <p className="text-sm text-muted-foreground pt-3">Before healthcare, savings, and discretionary spending</p>
          </div>

          <h3>Family of four, homeowners, $850K home</h3>

          <div className="bg-muted p-6 rounded-lg my-6 space-y-2">
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Mortgage (20% down, 6.5% rate)</span>
              <span className="font-bold text-primary">$51,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Property taxes</span>
              <span className="font-bold text-primary">$5,500</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Homeowner's insurance</span>
              <span className="font-bold text-primary">$2,600</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Utilities</span>
              <span className="font-bold text-primary">$5,500</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Groceries</span>
              <span className="font-bold text-primary">$14,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Transportation (2 vehicles)</span>
              <span className="font-bold text-primary">$14,000</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-border">
              <span className="text-muted-foreground">Children's activities / childcare</span>
              <span className="font-bold text-primary">$8,000–$15,000</span>
            </div>
            <div className="pt-3 border-t border-border mt-3 flex justify-between items-center font-semibold">
              <span className="text-foreground">Baseline total</span>
              <span className="text-primary">~$101,000–$108,000/year</span>
            </div>
            <p className="text-sm text-muted-foreground pt-3">Before healthcare, savings, and discretionary spending</p>
          </div>

          <h2>The Honest Bottom Line</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin is expensive relative to Tennessee's overall cost of living. It is considerably less expensive than the coastal and major metro markets most of its new residents are leaving. And when you run the full tax calculation — particularly for high-earning households — the total financial picture frequently looks better than the sticker price on homes suggests.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The quality of life Franklin delivers for that cost is the other side of the equation: nationally ranked public schools at no tuition cost, low crime, strong community infrastructure, and a standard of neighborhood life that most comparable markets charge significantly more to approximate.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-semibold bg-muted p-4 rounded-lg">
            It's an investment. The families who've made it consistently say it was the right one.
          </p>

          <div className="bg-muted/50 p-8 rounded-2xl mb-12 mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Want to talk through what Franklin living would actually cost for your specific situation? <a href="mailto:ryan@locheventures.com" className="text-secondary hover:text-secondary/80 font-semibold">Get in touch</a> — happy to run through the numbers with you.
            </p>
          </div>

          {/* Related Links */}
          <div className="border-t border-border pt-12">
            <h4 className="font-semibold text-foreground mb-6">Related Articles</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/articles/why-move-to-franklin-tn" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Why Move to Franklin, TN? 15 Reasons People Are Relocating Here
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Best Neighborhoods in Franklin, TN: A Complete Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/franklin-vs-nashville" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Franklin TN vs. Nashville: Which Is Right for You?
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Williamson County Schools: A Complete Guide for Families
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
