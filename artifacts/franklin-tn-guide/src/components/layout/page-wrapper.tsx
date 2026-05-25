import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { SEO } from "../seo";

interface PageWrapperProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  schema?: Record<string, any> | Record<string, any>[];
  type?: 'website' | 'article';
  ogImage?: string;
}

export function PageWrapper({ children, title, description, canonicalUrl, schema, type, ogImage }: PageWrapperProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {title && description && (
        <SEO
          title={`${title} | Franklin TN Guide`}
          description={description}
          canonicalUrl={canonicalUrl}
          schema={schema}
          type={type}
          ogImage={ogImage}
        />
      )}
      <Navbar />
      <motion.main
        className="flex-grow flex flex-col"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
