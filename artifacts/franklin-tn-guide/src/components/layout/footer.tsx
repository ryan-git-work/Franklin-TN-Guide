import { Link } from "wouter";
import { MapPin, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-1.5 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">
                Franklin TN Guide
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              Your trusted, comprehensive guide to relocating, living, and thriving in historic Franklin, Tennessee.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/neighborhoods" className="text-primary-foreground/70 hover:text-white transition-colors">Neighborhoods</Link></li>
              <li><Link href="/schools" className="text-primary-foreground/70 hover:text-white transition-colors">Schools</Link></li>
              <li><Link href="/cost-of-living" className="text-primary-foreground/70 hover:text-white transition-colors">Cost of Living</Link></li>
              <li><Link href="/franklin-vs-nashville" className="text-primary-foreground/70 hover:text-white transition-colors">Vs. Nashville</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-white transition-colors">About Us</Link></li>
              <li>
                <a href="mailto:ryan@locheventures.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  ryan@locheventures.com
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Franklin TN Guide. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
