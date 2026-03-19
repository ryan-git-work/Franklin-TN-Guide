import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { PageWrapper } from "@/components/layout/page-wrapper";

export default function NotFound() {
  return (
    <PageWrapper 
      title="Page Not Found" 
      description="The page you are looking for does not exist."
    >
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-card rounded-3xl shadow-xl border border-border max-w-md w-full mx-4">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-destructive" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-primary mb-4">404 Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It might have been moved or deleted.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors duration-200 w-full"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
