import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Pages
import Home from "@/pages/home";
import Neighborhoods from "@/pages/neighborhoods";
import Schools from "@/pages/schools";
import CostOfLiving from "@/pages/cost-of-living";
import FranklinVsNashville from "@/pages/franklin-vs-nashville";
import ArticlePage from "@/pages/article";
import NewsIndex from "@/pages/news/index";
import NewsArticle from "@/pages/news/[slug]";
import About from "@/pages/about";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/neighborhoods" component={Neighborhoods} />
      <Route path="/schools" component={Schools} />
      <Route path="/cost-of-living" component={CostOfLiving} />
      <Route path="/franklin-vs-nashville" component={FranklinVsNashville} />
      <Route path="/about" component={About} />
      <Route path="/articles/:slug" component={ArticlePage} />
      <Route path="/news" component={NewsIndex} />
      <Route path="/news/:slug" component={NewsArticle} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
