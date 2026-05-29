import { PageWrapper } from "@/components/layout/page-wrapper";
import { Mail, Send, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://franklintnguide.com/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://franklintnguide.com/contact/" },
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
      title="Contact"
      description="Considering a move to Franklin? Talk through the details with a Franklin resident. Free 30-minute call, no pitch."
      canonicalUrl="/contact/"
      schema={breadcrumbSchema}
    >
      <div className="bg-primary pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Book a Free Franklin Relocation Call
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            Considering a move to Franklin? Talk through the details with a Franklin resident. Free 30-minute call, no pitch.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-20">
        <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border mb-12">
          <h2 className="text-2xl font-serif font-bold text-primary mb-2">Send a Message</h2>
          <p className="text-muted-foreground mb-8">Have questions about moving to Franklin? Send us a message and we'll get back to you.</p>

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
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
}
