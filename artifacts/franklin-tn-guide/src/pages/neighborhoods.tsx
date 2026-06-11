import { PageWrapper } from "@/components/layout/page-wrapper";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Neighborhoods() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 2, name: "Neighborhoods", item: "https://franklintnguide.com/neighborhoods" },
    ],
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Franklin, Tennessee",
    description: "A historic city in Williamson County, Tennessee, consistently ranked among the best places to live in the United States.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Franklin",
      addressRegion: "TN",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "35.9251",
      longitude: "-86.8689",
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Williamson County",
    },
  };

  return (
    <PageWrapper
      title="Best Neighborhoods"
      description="Explore Franklin Tennessee's best neighborhoods , from the historic downtown to Westhaven, Berry Farms, Cool Springs, and Fieldstone Farms. Find the right fit for your lifestyle and budget."
      canonicalUrl="/neighborhoods"
      schema={[breadcrumbSchema, placeSchema]}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Franklin, TN Neighborhoods
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Find Your Perfect Community
          </p>
          <div className="mt-6 text-white/60 text-sm">
            By <Link href="/about/" className="text-[#2D6A4F] hover:text-[#1e4a36] font-semibold transition-colors">Franklin TN Guide</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="prose prose-lg max-w-none prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-a:text-[#2D6A4F] hover:prose-a:text-[#1e4a36]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Franklin, Tennessee doesn't have one kind of neighborhood , it has many. That's one of the things that makes it work for such a wide range of people. A retired couple downsizing from a large home in the Northeast and a young family relocating from California with three kids and a dog can both find exactly what they're looking for here, often within a few miles of each other.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            The tradeoff is that choosing the right neighborhood requires some real thought. Franklin's communities differ meaningfully in character, price, lifestyle, and commute dynamics. Getting that choice right from the start makes the whole transition smoother.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Here's an honest look at Franklin's most established neighborhoods , what makes each one distinctive, who it tends to suit, and what to weigh before you decide.
          </p>

          {/* Downtown Franklin */}
          <div className="mb-20 pb-12 border-b border-border">
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2 tracking-wide">Walkable · Historic · Vibrant · One-of-a-kind</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Downtown Franklin / Historic District</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Downtown Franklin is the city's soul. The 16-block historic district along Main Street features impeccably preserved Victorian and Craftsman architecture, brick sidewalks, and a genuine small-city energy that most suburbs spend millions trying to manufacture and never quite achieve. Acclaimed restaurants, independent boutiques, wine bars, and the beautifully restored Franklin Theatre are all within walking distance of most homes in the area.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Living here means being embedded in the city's cultural life in a way no other Franklin neighborhood offers. The Main Street Festival, Dickens of a Christmas, and year-round community events happen practically outside your door. The Factory at Franklin , a converted 19th-century stove plant now housing dozens of businesses, restaurants, and studios , is a short walk away.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">The Good</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Genuinely walkable , rare in Franklin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Irreplaceable architecture and neighborhood character</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Immediate access to the best dining and events in the city</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Worth Knowing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Premium pricing with limited inventory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Smaller lots and less yard space than suburban Franklin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Weekend tourist traffic on Main Street</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> Empty nesters, couples, professionals who prioritize walkability and character over square footage. Anyone who wants to feel like they live in Franklin rather than near it.</p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Price range:</span> $700,000–$2M+ for single-family; condos and townhomes from the mid-$400s</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold group">
              Read the full Downtown Franklin neighborhood guide 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Westhaven */}
          <div className="mb-20 pb-12 border-b border-border">
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2 tracking-wide">Master-planned · Resort-style · Family-centric · Self-contained</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Westhaven</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Westhaven is Franklin's most well-known neighborhood and its reputation holds up. Built around the principles of new urbanism , walkable streets, front porches, community-oriented design , it delivers on the promise of a neighborhood where people actually know their neighbors.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The amenity package is extensive: an 18-hole golf course, multiple resort-style pools, a clubhouse, tennis courts, miles of walking and biking trails, and a self-contained town center with a grocery store, restaurants, and medical offices. Community events are frequent and well-attended. The HOA is active and the architectural standards are enforced , which is either reassuring or constraining depending on your orientation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For families relocating from environments where nobody knows their neighbors, Westhaven tends to come as a genuine social revelation. The design works. People are outside. Kids ride bikes. It produces the community life it was designed to produce.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">The Good</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Unmatched amenity package in the Franklin market</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Exceptionally strong community culture and social infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Among the safest neighborhoods in an already-safe city</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Worth Knowing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>HOA fees reflect the amenity load , budget accordingly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Strict architectural guidelines govern exterior modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Sits further west, adding a few minutes to Nashville commutes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> Families with children who want community infrastructure delivered rather than built. Golf enthusiasts. Anyone who wants resort amenities without a resort zip code.</p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Price range:</span> $700,000–$1.8M+ for single-family; townhomes from the mid-$500s</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold group">
              Read the full Westhaven neighborhood guide 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Cool Springs */}
          <div className="mb-20 pb-12 border-b border-border">
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2 tracking-wide">Suburban · Convenient · Modern · Commercially vibrant</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Cool Springs</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cool Springs is less a traditional neighborhood and more a zone , a dense corridor of corporate campuses, retail, restaurants, hotels, and residential communities that has grown up along I-65 over the past 25 years. The CoolSprings Galleria anchors the commercial core. Major employers including Nissan North America, Community Health Systems, and dozens of others have significant operations here.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Residential communities within the Cool Springs area tend to be newer, well-maintained, and efficiently designed. You're trading the charm of downtown and the resort amenities of Westhaven for something different: a shorter commute, newer construction, and proximity to every commercial service you could need within a ten-minute drive.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For professionals who work in the Cool Springs corridor, this trade is often a straightforward win. The commute calculation that dominates Franklin real estate conversations largely disappears when you live where you work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">The Good</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Unbeatable proximity to Williamson County's major employers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Extensive dining, shopping, and services within minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Quick I-65 access for Nashville commutes</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Worth Knowing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Car-dependent , limited walkability outside specific pockets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Less neighborhood identity than Franklin's more character-driven communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Higher traffic density than quieter parts of Franklin</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> Professionals working in the Cool Springs corporate corridor. Newcomers to Franklin who want to rent before buying and need apartment inventory. Anyone for whom commute efficiency outweighs neighborhood character.</p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Price range:</span> $500,000–$1.2M for single-family; significant apartment and townhome inventory available</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold group">
              Read the full Cool Springs neighborhood guide 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Berry Farms */}
          <div className="mb-20 pb-12 border-b border-border">
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2 tracking-wide">Newer · Mixed-use · Walkable by design · Still growing</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Berry Farms</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Berry Farms is Franklin's most ambitious newer development , a mixed-use master-planned community in southern Franklin that combines residential neighborhoods with retail, restaurants, office space, and community programming. A walkable Publix-anchored retail village, a farmer's market, and a growing calendar of community events give it more daily-life texture than most new construction developments manage.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The homes feature traditional Southern architecture with modern interiors , the quality finishes and open floor plans that buyers coming from newer construction elsewhere will recognize. Because Berry Farms is newer than Westhaven, it has a slightly different energy: still becoming itself rather than fully formed. Trees are younger, retail is filling in, and the community culture is still being established.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For buyers who want the Westhaven model with fresher construction and a community they can help shape from its early years, Berry Farms is worth serious consideration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">The Good</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Brand new construction with modern specs and finishes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Walkable retail core including grocery, restaurants, and services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Strong community events calendar with genuine neighborhood energy</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Worth Knowing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Some phases still under active construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Younger landscaping , the mature tree canopy is still years away</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Sits further south, extending Nashville commute times modestly</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> Buyers who want new construction with walkable bones and don't mind being early to a community that's still maturing. Families who like the Westhaven concept but want something fresher.</p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Price range:</span> $600,000–$1.4M for single-family; townhomes from the mid-$400s</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold group">
              Read the full Berry Farms neighborhood guide 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Fieldstone Farms */}
          <div className="mb-20 pb-12 border-b border-border">
            <div className="mb-6">
              <p className="text-sm font-semibold text-secondary mb-2 tracking-wide">Established · Leafy · Community-focused · Best value in Franklin</p>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Fieldstone Farms</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Fieldstone Farms is one of Franklin's original large planned communities, and its age shows in the best possible way. Mature trees canopy the streets. Walking trails are well-worn and well-loved. The community pools and tennis courts have decades of neighborhood history behind them.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This is the Franklin neighborhood where families have lived for fifteen and twenty years. Where kids grew up and came back to raise their own children. Where neighbors have been watching each other's houses through multiple administrations. That kind of organic community cohesion can't be designed into a new development , it accumulates over time, and Fieldstone Farms has it.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The housing variety is genuine. Built out in phases over years, the neighborhood contains a real mix of more modest starter homes and larger executive-style houses on the same streets , making it one of the most accessible entry points into the Franklin market for buyers who want established quality without the premium of downtown or brand-new construction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-4">The Good</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Mature trees and established green spaces that newer communities won't have for decades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Most accessible price point among Franklin's established family neighborhoods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary mt-1.5">•</span>
                    <span>Genuine long-term community cohesion , neighbors who actually know each other</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-4">Worth Knowing</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Older homes typically require updating , budget accordingly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Architectural styles reflect the 1990s and early 2000s</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1.5">•</span>
                    <span>Slightly further from I-65 than some Franklin communities</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> First-time Franklin buyers who want established neighborhood character and strong schools without the top-of-market price tag. Families who value community roots over new construction finishes.</p>
            </div>

            <div className="mb-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground"><span className="font-semibold text-foreground">Price range:</span> $450,000–$850,000</p>
            </div>

            <a href="#" className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold group">
              Read the full Fieldstone Farms neighborhood guide 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Decision Framework */}
          <div className="bg-muted/50 p-8 rounded-2xl mb-16">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8">Not Sure Which Neighborhood Is Right for You?</h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The right Franklin neighborhood depends on factors that are genuinely personal , where you work, what stage of life you're in, how you want to spend your time, and what you're optimizing for in a home.
            </p>

            <p className="font-semibold text-foreground mb-6">A few questions that tend to clarify the decision quickly:</p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-secondary font-semibold">→</span>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Walkability matters most to you</span> → Downtown Franklin</p>
              </div>
              <div className="flex gap-4">
                <span className="text-secondary font-semibold">→</span>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">You want the full amenity and community package</span> → Westhaven</p>
              </div>
              <div className="flex gap-4">
                <span className="text-secondary font-semibold">→</span>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">Your commute is to Cool Springs or you want Nashville access without the drive</span> → Cool Springs</p>
              </div>
              <div className="flex gap-4">
                <span className="text-secondary font-semibold">→</span>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">You want new construction with a walkable design</span> → Berry Farms</p>
              </div>
              <div className="flex gap-4">
                <span className="text-secondary font-semibold">→</span>
                <p className="text-muted-foreground"><span className="font-semibold text-foreground">You want the best value and established neighborhood feel</span> → Fieldstone Farms</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mt-8">
              Still have questions? <a href="mailto:ryan@locheventures.com" className="text-secondary hover:text-secondary/80 font-semibold">Get in touch</a> , we've helped a lot of families think through this decision and are happy to talk through your specific situation.
            </p>
          </div>

          {/* Related Links */}
          <div className="border-t border-border pt-12">
            <h4 className="font-semibold text-foreground mb-6">Related Articles</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/articles/why-move-to-franklin-tn/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Why Move to Franklin, TN? 15 Reasons People Are Relocating Here
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/articles/ladd-park-franklin-tn/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Ladd Park Franklin TN: Complete Neighborhood Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/schools/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Williamson County Schools: Which Schools Serve Which Neighborhoods
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/cost-of-living/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Cost of Living in Franklin, TN: What to Actually Expect
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
