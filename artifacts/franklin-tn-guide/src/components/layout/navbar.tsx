import { Link, useLocation } from "wouter";
import { Menu, X, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/schools", label: "Schools" },
  { href: "/cost-of-living", label: "Cost of Living" },
  { href: "/franklin-vs-nashville", label: "Franklin vs Nashville" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-secondary transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${
              scrolled || isOpen ? "text-primary" : "text-primary md:text-white"
            } md:text-primary`}>
              Franklin TN Guide
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location === link.href 
                    ? "text-secondary border-b-2 border-secondary pb-1" 
                    : scrolled ? "text-foreground" : "text-foreground md:text-white/90 md:hover:text-white"
                } md:text-foreground`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/about" 
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-secondary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-md ${scrolled || isOpen ? 'text-primary' : 'text-primary'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-lg font-serif ${
                    location === link.href ? "text-secondary font-bold" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
