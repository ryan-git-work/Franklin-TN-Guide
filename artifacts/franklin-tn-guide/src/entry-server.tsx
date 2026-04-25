import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Switch, Route, Router } from "wouter";

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

export interface RenderResult {
  html: string;
  head: string;
}

export function render(url: string): RenderResult {
  const helmetContext: { helmet?: any } = {};
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          {/* wouter v3 SSR: use ssrPath prop to set the current path server-side */}
          <Router ssrPath={url}>
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
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const headParts = [
    helmet?.title?.toString() ?? "",
    helmet?.meta?.toString() ?? "",
    helmet?.link?.toString() ?? "",
    helmet?.script?.toString() ?? "",
  ].filter(s => s.trim().length > 0);

  return { html, head: headParts.join("\n  ") };
}
