import { PageWrapper } from "@/components/layout/page-wrapper";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

export default function Schools() {
  return (
    <PageWrapper 
      title="Schools & Education" 
      description="Learn about Williamson County Schools, one of the top-rated public school districts in Tennessee, and private school options in Franklin."
      canonicalUrl="/schools"
    >
      <div className="relative pt-32 pb-20 px-4 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}images/schools-hero.png`}
            alt="Franklin TN Schools" 
            className="w-full h-full object-cover mix-blend-luminosity"
          />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6 shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Education in Franklin
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Home to Williamson County Schools, consistently ranked among the highest-performing public school districts in the state and the nation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 -mt-32 relative z-20">
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border text-center">
            <Award className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-primary mb-2">#1</h3>
            <p className="text-muted-foreground font-medium">Ranked District in TN</p>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border text-center">
            <BookOpen className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-primary mb-2">51</h3>
            <p className="text-muted-foreground font-medium">Public Schools</p>
          </div>
          <div className="bg-card p-8 rounded-2xl shadow-xl border border-border text-center">
            <Users className="w-10 h-10 text-secondary mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-primary mb-2">42k+</h3>
            <p className="text-muted-foreground font-medium">Students Enrolled</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
            <h2>Williamson County Public Schools (WCS)</h2>
            <p>
              The primary draw for many families relocating to Franklin is the Williamson County School district. It is a massive, high-performing district that covers the majority of the county outside the immediate boundaries of the Franklin Special School District.
            </p>
            <p>
              WCS students consistently score well above state and national averages on ACT and SAT tests. The district boasts numerous National Blue Ribbon Schools and offers extensive Advanced Placement (AP) and International Baccalaureate (IB) courses.
            </p>
            
            <div className="bg-accent/20 p-8 rounded-2xl border border-accent mt-8 not-prose">
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Notable High Schools</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">1</span>
                  <span className="font-medium text-foreground">Franklin High School</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">2</span>
                  <span className="font-medium text-foreground">Centennial High School</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">3</span>
                  <span className="font-medium text-foreground">Ravenwood High School</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">4</span>
                  <span className="font-medium text-foreground">Page High School</span>
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-border" />

          <section className="prose prose-lg prose-headings:font-serif prose-headings:text-primary max-w-none">
            <h2>Franklin Special School District (FSSD)</h2>
            <p>
              A unique feature of Franklin's educational landscape is the Franklin Special School District. This separate district serves students in Pre-K through 8th grade living within specific historic city limits. FSSD feeds into Williamson County Schools for high school. It is highly regarded for its smaller community feel, strong arts programs, and historic ties to the city.
            </p>
          </section>

          <section className="bg-primary text-white p-10 rounded-3xl mt-12">
            <h2 className="text-3xl font-serif font-bold mb-6">Private School Options</h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              In addition to exceptional public schools, Franklin and the surrounding Nashville area offer prestigious private education options, including classical, faith-based, and college-preparatory academies.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircleIcon /> <strong>Battle Ground Academy (BGA):</strong> A historic, independent college preparatory school (K-12).
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon /> <strong>Grace Christian Academy:</strong> A non-denominational Christian school offering rigorous academics (PreK-12).
              </li>
              <li className="flex items-center gap-3">
                <CheckCircleIcon /> <strong>Montessori School of Franklin:</strong> Offering authentic Montessori education for younger children.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}

function CheckCircleIcon() {
  return <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />;
}
import { CheckCircle2 } from "lucide-react";
