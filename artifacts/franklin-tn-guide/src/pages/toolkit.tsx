import { PageWrapper } from "@/components/layout/page-wrapper";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

const SHOW_TOOLKIT_EMAIL_CAPTURE = false;

export default function Toolkit() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com/" },
      { "@type": "ListItem", position: 2, name: "Relocation Toolkit", item: "https://franklintnguide.com/toolkit/" },
    ],
  };

  return (
    <PageWrapper
      title="Franklin Relocation Toolkit"
      description="The Franklin Relocation Toolkit is in production. Contact Franklin TN Guide for relocation questions while the public toolkit is being prepared."
      canonicalUrl="/toolkit/"
      schema={breadcrumbSchema}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Franklin Relocation Toolkit
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            A practical relocation resource is in production for families comparing neighborhoods, schools, housing costs, and the details of moving to Franklin.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border mb-12 text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">
            Toolkit in Production
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            We're tightening this resource before publishing it publicly. For now, the best next step is a direct note with what you're trying to compare or decide.
          </p>
          {SHOW_TOOLKIT_EMAIL_CAPTURE ? null : (
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Franklin TN Guide
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
          {SHOW_TOOLKIT_EMAIL_CAPTURE && (
            <Link
              href="/contact/"
              aria-label="Request help with the Franklin relocation resource"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Franklin relocation help
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-bold text-primary mb-6">What's Inside</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Neighborhood comparison guide (Downtown, Westhaven, Berry Farms, Fieldstone Farms, Cool Springs)",
              "Williamson County Schools overview and zone map",
              "Cost of living breakdown: housing, taxes, utilities, insurance",
              "Franklin vs Nashville side-by-side comparison",
              "Pre-move checklist with timeline and action items",
              "Local contacts and resources for new residents",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-12">
          <h4 className="font-semibold text-foreground mb-6">Explore the Guide</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/articles/why-move-to-franklin-tn/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Why Move to Franklin, TN?
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/neighborhoods/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Best Neighborhoods in Franklin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/schools/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Williamson County Schools Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/cost-of-living/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Cost of Living in Franklin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Book a Free Relocation Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
