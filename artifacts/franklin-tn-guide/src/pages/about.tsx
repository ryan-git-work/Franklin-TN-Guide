import { PageWrapper } from "@/components/layout/page-wrapper";
import { Mail, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function About() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://franklintnguide.com/about" },
    ],
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      const formData = new FormData(e.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      const subject = encodeURIComponent(`Inquiry from ${name} via Franklin TN Guide`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

      window.location.href = `mailto:ryan@locheventures.com?subject=${subject}&body=${body}`;

      toast({
        title: "Opening mail client...",
        description: "Your message is ready to send from your default email app.",
      });

      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <PageWrapper
      title="About Franklin TN Guide"
      description="Franklin TN Guide is a local resource for anyone moving to or living in Franklin, Tennessee. Honest guides on neighborhoods, schools, restaurants, things to do, and everything in between."
      canonicalUrl="/about"
      schema={breadcrumbSchema}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Your Local Guide to Life in Franklin, TN
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed">
            Franklin TN Guide was built by someone who actually lives here.
          </p>
          <div className="mt-6 text-white/60 text-sm">
            Created by <span className="font-semibold text-white/80">Franklin TN Guide</span> &middot; <a href="mailto:ryan@locheventures.com" className="hover:text-white transition-colors">ryan@locheventures.com</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="prose prose-lg max-w-none prose-stone prose-headings:font-serif prose-headings:text-[#1B2A4A]">

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Not a national real estate portal. Not a marketing agency in another state that scraped together a few facts about Williamson County. Someone who knows which neighborhoods have the best walking trails, which restaurants are worth the wait on a Friday night, which school zones the families on their street chose and why, and what it actually feels like to put down roots in this city.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            That local perspective is the whole point.
          </p>

          <h2>What This Site Is</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin TN Guide is a comprehensive local resource for anyone considering a move to Franklin — or anyone already here who wants to get more out of living in one of the best cities in the South.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6">You'll find honest, detailed guides on:</p>

          <ul className="space-y-3 mb-8 not-prose">
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">Neighborhoods</strong> — what each community is really like, who it suits, and what to weigh before you decide</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">Schools</strong> — how Williamson County Schools works, which schools serve which areas, and what relocating families consistently say after their kids have been through the system</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">Cost of living</strong> — real numbers, not glossy marketing figures</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">Things to do</strong> — the restaurants, parks, trails, festivals, and local spots worth knowing about</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">Family life</strong> — where kids play, where families gather, what weekends look like here</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="text-secondary font-bold mt-1">•</span>
              <span><strong className="text-foreground">The Franklin vs. Nashville question</strong> — answered honestly, for different kinds of people</span>
            </li>
          </ul>

          <p className="text-lg text-muted-foreground leading-relaxed">
            The goal is to give you the information you'd get from a friend who lives here — specific, candid, and actually useful.
          </p>

          <h2>A Little About Franklin</h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Franklin has a way of exceeding expectations. People research it because of the schools or the job market or the proximity to Nashville, and then they visit and realize there's something harder to quantify going on — a quality of daily life that feels increasingly rare.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Downtown is genuinely walkable and genuinely charming. The restaurant scene punches well above the city's size. The parks and trail systems are excellent. The community calendar is full. The neighbors introduce themselves.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            It's the kind of place where people plan to stay a few years and end up raising their families. That's not an accident — and it's what this site is ultimately trying to help you understand before you make the decision.
          </p>

          <h2>Ready to Make the Move?</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            When you're ready to start seriously exploring a move to Franklin, we're happy to connect you with trusted local resources — real estate professionals, neighborhood specialists, and people who know this market at the street level. No pressure, no sales pitch. Just a conversation about whether Franklin is the right fit for your family and what that next step might look like.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border mb-20">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">Have questions about moving to Franklin? Send us a message.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl bg-background border-2 border-border text-foreground focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all duration-200 resize-none"
                placeholder="I'm planning to move to Franklin next summer and looking for info on..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Preparing message..." : (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
              <Mail className="w-4 h-4" />
              ryan@locheventures.com
            </div>
          </form>
        </div>

        {/* Explore the Guide */}
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
              <Link href="/franklin-vs-nashville/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Franklin vs. Nashville
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
            <li>
              <Link href="/articles/things-to-do-in-franklin-tn/" className="text-secondary hover:text-secondary/80 flex items-center gap-2 font-semibold group">
                Things to Do in Franklin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
