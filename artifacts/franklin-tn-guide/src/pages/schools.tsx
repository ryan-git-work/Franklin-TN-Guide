import { PageWrapper } from "@/components/layout/page-wrapper";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

export default function Schools() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 2, name: "Schools", item: "https://franklintnguide.com/schools" },
    ],
  };

  return (
    <PageWrapper
      title="Schools & Education"
      description="Everything families need to know about Franklin TN schools — Williamson County Schools, Franklin Special School District, top high schools, and private school options. One of the best school districts in the nation."
      canonicalUrl="/schools"
      schema={breadcrumbSchema}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Schools in Franklin, TN
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            A Complete Guide for Relocating Families
          </p>
          <div className="mt-6 text-white/60 text-sm">
            By <Link href="/about/" className="text-[#2D6A4F] hover:text-[#1e4a36] font-semibold transition-colors">Franklin TN Guide</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="prose prose-lg max-w-none prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A] prose-a:text-[#2D6A4F] hover:prose-a:text-[#1e4a36]">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            For most families moving to Franklin, the schools aren't just a checkbox — they're the reason Franklin made the list in the first place. Williamson County's public school system is genuinely one of the strongest in the country, and it's a primary driver of the area's sustained in-migration from higher-cost markets across the country.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            This page gives you a clear picture of how Franklin's educational landscape is structured, which schools serve which parts of the city, what makes the district exceptional, and what private options exist for families who want them.
          </p>

          {/* Stats Section */}
          <div className="bg-muted/50 p-8 rounded-2xl mb-12 not-prose">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6">The Numbers at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">State ranking</p>
                <p className="text-2xl font-bold text-primary">#1</p>
                <p className="text-sm text-muted-foreground">public school district in Tennessee</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Public schools</p>
                <p className="text-2xl font-bold text-primary">51</p>
                <p className="text-sm text-muted-foreground">across the county</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Students enrolled</p>
                <p className="text-2xl font-bold text-primary">42,000+</p>
                <p className="text-sm text-muted-foreground">across all schools</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Graduation rate</p>
                <p className="text-2xl font-bold text-primary">~97%</p>
                <p className="text-sm text-muted-foreground">well above national average</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">ACT scores</p>
                <p className="text-2xl font-bold text-primary">Above State</p>
                <p className="text-sm text-muted-foreground">and national averages</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Blue Ribbon Schools</p>
                <p className="text-2xl font-bold text-primary">Multiple</p>
                <p className="text-sm text-muted-foreground">national designations</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6 mb-0">
              These aren't marketing numbers — they reflect a district that has invested consistently in teacher quality, facilities, curriculum breadth, and student outcomes over decades.
            </p>
          </div>

          <h2>Understanding Franklin's Two Public School Districts</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            This is the part that surprises most people researching Franklin schools — and it's important to understand before you buy. Franklin is served by two separate public school districts, not one. Which district your child attends depends entirely on your home's address.
          </p>

          <h3>Williamson County Schools (WCS)</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Williamson County Schools is the primary public school district serving the greater Franklin area and all of Williamson County. It is the largest district in the county and the one most families moving to Franklin will interact with.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            WCS students consistently score well above state and national averages on ACT, SAT, and state assessments across every grade level and subject area. The district has earned multiple National Blue Ribbon School designations, offers extensive Advanced Placement and dual enrollment programs at every high school, and maintains one of the highest graduation rates in Tennessee.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            What the numbers don't fully capture: the culture of academic expectation that runs through the district. Teachers are well-compensated by Tennessee standards, turnover is lower than comparable districts nationally, and parent involvement is high across most schools. These are the conditions that produce sustained academic outcomes — and they don't happen by accident.
          </p>

          <h4>WCS High Schools Serving Franklin</h4>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-secondary pl-6">
              <h5 className="text-xl font-semibold text-foreground mb-2">Franklin High School</h5>
              <p className="text-muted-foreground">
                One of the oldest and most established schools in the county, Franklin High serves much of central and eastern Franklin. Strong AP offerings, competitive athletics, and deep institutional roots give it the energy of a school with real history. The performing arts programs — particularly theater and band — are well-regarded across the district.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h5 className="text-xl font-semibold text-foreground mb-2">Ravenwood High School</h5>
              <p className="text-muted-foreground">
                Serving the northern Franklin and Cool Springs corridor, Ravenwood is consistently cited as one of the top public high schools in Tennessee. AP enrollment rates are among the highest in the district, and Ravenwood graduates are well-represented at selective universities nationally. Academically competitive, athletically strong.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h5 className="text-xl font-semibold text-foreground mb-2">Independence High School</h5>
              <p className="text-muted-foreground">
                Located in southern Franklin near the Westhaven and Berry Farms communities, Independence has quickly built a strong reputation since opening. Serves many of Franklin's newer planned communities. Academic performance metrics are consistently strong, athletics are competitive across multiple sports, and the parent community is deeply engaged.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h5 className="text-xl font-semibold text-foreground mb-2">Page High School</h5>
              <p className="text-muted-foreground">
                Serving portions of southern and western Franklin and the Spring Hill corridor, Page High rounds out Franklin's major public high school options. Strong academics and athletics, with a growing profile as southern Franklin development has expanded the school's community base.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h5 className="text-xl font-semibold text-foreground mb-2">Centennial High School</h5>
              <p className="text-muted-foreground">
                Serving parts of Franklin and the broader Cool Springs area, Centennial offers strong academics and a well-rounded extracurricular program. A good option for families in the northern Franklin and Brentwood border zone.
              </p>
            </div>
          </div>

          <h4>A Note on Middle and Elementary Schools</h4>

          <p className="text-lg text-muted-foreground leading-relaxed">
            WCS operates multiple middle and elementary schools throughout Franklin, each assigned by residential address. School quality across the district is consistently strong, though individual schools have their own culture and character worth researching for your specific situation.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Notable middle schools serving Franklin families include Freedom Middle, Grassland Middle, and Legacy Middle — each feeding into different high schools based on location.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed font-semibold bg-muted p-4 rounded-lg">
            Practical advice: Always verify the exact school zone for any specific address using the WCS school locator tool before finalizing a home purchase. Zone boundaries shift as the district manages enrollment growth, and the school assignment for a given address today may change after a future rezoning.
          </p>

          <h3>Franklin Special School District (FSSD)</h3>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The Franklin Special School District is one of the more distinctive features of Franklin's educational landscape — and one that many people researching a move here don't know exists until they're well into the process.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            FSSD is a separate, independent public school district serving students in Pre-K through 8th grade who live within specific historic Franklin city limits. It is not part of Williamson County Schools. After 8th grade, FSSD students feed into WCS high schools — primarily Franklin High School.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The district is small by design. That smaller scale produces a genuinely different school experience: stronger teacher-student relationships, deeper community ties between the school and its neighborhood, and an institutional character that reflects Franklin's historic identity.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            FSSD is particularly well-regarded for its arts programming, its community feel, and the cohesion of its parent community. Families whose addresses fall within the FSSD zone frequently cite it as one of the unexpected highlights of living in historic Franklin.
          </p>

          <div className="bg-muted p-6 rounded-lg my-6">
            <p className="font-semibold text-foreground mb-4">Key things to know about FSSD:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Serves Pre-K through 8th grade only — high school is through WCS</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Coverage is limited to specific historic city limits, not all of Franklin</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Smaller class sizes and stronger community character than larger WCS elementary and middle schools</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Highly regarded academically and particularly strong in the arts</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span>Whether your address falls in FSSD or WCS depends entirely on your specific location — verify before buying</span>
              </li>
            </ul>
          </div>

          <h2>Private School Options in Franklin</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            For families who prefer private education or want options outside the public system, Franklin and the greater Nashville area offer strong independent school choices across multiple educational philosophies.
          </p>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Battle Ground Academy (BGA)</h4>
              <p className="text-muted-foreground">
                Franklin's most prominent independent school, BGA is a college-preparatory institution serving grades K–12 with a history stretching back to 1889. It draws students from across Williamson County and is considered one of the top independent schools in Tennessee. Strong academics, competitive athletics, and a well-established alumni network make it the most visible private option for Franklin families. Admission is selective.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Grace Christian Academy</h4>
              <p className="text-muted-foreground">
                A non-denominational Christian school offering rigorous academics from PreK through 12th grade. Grace Christian has a strong reputation in the Franklin faith community and draws families seeking both academic quality and a values-aligned educational environment.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Montessori School of Franklin</h4>
              <p className="text-muted-foreground">
                Offering authentic Montessori education for younger children, the Montessori School of Franklin serves families who want a child-directed learning environment grounded in the Montessori philosophy. A well-regarded option for early childhood and elementary-age students.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">Franklin Christian Academy</h4>
              <p className="text-muted-foreground">
                A long-standing faith-based option in the Franklin community, offering K–12 education in a Christian environment.
              </p>
            </div>
          </div>

          <h4>Other Area Options Worth Noting</h4>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Families committed to private education and willing to drive into the Nashville area have access to several nationally recognized independent schools including Montgomery Bell Academy, Harpeth Hall School, and Ensworth — all highly regarded college-preparatory institutions with strong reputations that extend well beyond Tennessee.
          </p>

          <h2>What Relocating Families Consistently Say About Franklin Schools</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The patterns that emerge when you talk to families who've moved here from other parts of the country are consistent enough to be worth sharing honestly.
          </p>

          <div className="bg-muted p-6 rounded-lg my-6 space-y-4">
            <div>
              <p className="font-semibold text-foreground mb-2">The level of parent involvement is higher than most families are used to.</p>
              <p className="text-muted-foreground text-sm">PTO organizations are active, school events are well-attended, and there's a broad community orientation toward educational outcomes that some families find energizing and others find intense. It's worth knowing what you're entering.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">The academic expectations are real.</p>
              <p className="text-muted-foreground text-sm">Kids coming from lower-performing districts occasionally need time to adjust to the pace and expectation level. This is almost always described as a short-term transition challenge rather than a lasting problem — but it's worth preparing children for, particularly at the middle and high school level.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">The extracurricular culture is serious.</p>
              <p className="text-muted-foreground text-sm">Sports, performing arts, and academic competitions are genuine commitments. For motivated kids, this environment is a feature. For families who want a more relaxed pace of life outside school hours, it's a cultural reality worth factoring in.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-2">The schools deliver.</p>
              <p className="text-muted-foreground text-sm">Beneath all the caveats, the fundamental thing families say is that the schools work — that their kids are learning, growing, and being prepared. That's the part that matters, and it's what keeps families choosing Franklin even at premium price points.</p>
            </div>
          </div>

          <h2>School Research Checklist for Franklin Buyers</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Before finalizing any home purchase in Franklin, work through this list:
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Confirm whether the address falls in WCS or FSSD using the respective district's address lookup tool</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Identify the specific elementary, middle, and high school assigned to the address</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Research those specific schools — district-wide averages are strong, but individual schools vary</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">Ask about recent or pending rezoning in the area — boundaries shift as the district manages growth</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">If private school is a priority, research admission timelines — BGA and other selective schools have application windows that may affect your moving timeline</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">If your child has an IEP or 504 plan, contact the specific school directly to discuss service availability before committing to a neighborhood</span>
            </div>
          </div>

          <div className="bg-muted/50 p-8 rounded-2xl mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about which Franklin neighborhoods feed into the strongest school zones? <a href="mailto:ryan@locheventures.com" className="text-secondary hover:text-secondary/80 font-semibold">Get in touch</a> — we're happy to walk through the specifics.
            </p>
          </div>

          {/* Related Links */}
          <div className="border-t border-border pt-12">
            <h4 className="font-semibold text-foreground mb-6">Related Articles</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/neighborhoods/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Best Neighborhoods in Franklin, TN: A Complete Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/articles/why-move-to-franklin-tn/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Why Move to Franklin, TN? 15 Reasons People Are Relocating Here
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/cost-of-living/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Cost of Living in Franklin, TN: What to Actually Expect
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </li>
              <li>
                <Link href="/franklin-vs-nashville/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                  Franklin TN vs. Nashville: Which Is Right for You?
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
