import { PageWrapper } from "@/components/layout/page-wrapper";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay since we don't have a real backend,
    // then open mailto client as requested in instructions
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
      title="About Us" 
      description="Learn more about Franklin TN Guide, your trusted local resource for real estate and relocation information in Williamson County."
      canonicalUrl="/about"
    >
      <div className="container mx-auto px-4 py-32 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Your Guide to Life in Franklin
            </h1>
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>
                The <strong>Franklin TN Guide</strong> was created to help individuals and families navigate the exciting, but often overwhelming, process of relocating to Middle Tennessee.
              </p>
              <p>
                We understand that moving isn't just about buying a house; it's about finding a community. Our mission is to provide you with honest, comprehensive, and up-to-date information about everything from school districts to property taxes.
              </p>
              <p>
                We partner with the top local real estate professionals to ensure that when you are ready to make the move, you have expert boots on the ground to guide you home.
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-primary font-medium bg-accent/20 p-4 rounded-2xl border border-accent inline-flex">
              <Mail className="w-5 h-5 text-secondary" />
              ryan@locheventures.com
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl border border-border">
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
              </form>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
