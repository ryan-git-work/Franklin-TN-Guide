# Franklin TN Guide — 10 New Articles, Manifest & Publishing Notes

Generated: 2026-04-25
Author: Franklin TN Guide Editorial Team
Updated: 2026-05-29 by Claude to match the Codex/Replit article spec
Total articles: 10
Total word count: ~22,500 words
Average article length: 9–12 minute read

## What's in this set

These 10 articles fill specific gaps in your existing content while targeting high-intent, lower-competition long-tail queries that should produce real referral leads once the site is rendered server-side.

| # | Slug | Primary Keyword | Category | Length |
|---|------|-----------------|----------|--------|
| 1 | `moving-to-franklin-tn-from-atlanta` | moving to franklin tn from atlanta | Relocation | ~2,000 words |
| 2 | `moving-to-franklin-tn-from-boston` | moving to franklin tn from boston | Relocation | ~2,100 words |
| 3 | `franklin-tn-vs-spring-hill` | franklin tn vs spring hill | Comparison | ~2,200 words |
| 4 | `franklin-tn-vs-nolensville` | franklin tn vs nolensville | Comparison | ~2,200 words |
| 5 | `laurelbrooke-franklin-tn` | laurelbrooke franklin tn | Neighborhood | ~2,000 words |
| 6 | `mckays-mill-franklin-tn` | mckays mill franklin tn | Neighborhood | ~2,100 words |
| 7 | `retiring-in-franklin-tn` | retiring in franklin tn | Relocation/Demographic | ~2,400 words |
| 8 | `new-construction-homes-franklin-tn` | new construction homes franklin tn | Buying | ~2,300 words |
| 9 | `franklin-tn-property-taxes` | franklin tn property taxes | Buying/Financial | ~2,000 words |
| 10 | `remote-work-franklin-tn` | remote work franklin tn | Lifestyle | ~2,200 words |

## Why these 10

Each was chosen for one of three reasons:

1. **High commercial intent for real estate referrals** (relocation, buyer guides, neighborhood deep-dives). These are the queries made by people actively researching a Franklin home purchase in the next 0–18 months.

2. **Lower competition than head terms.** "Best things to do in Franklin TN" is owned by Tripadvisor and Visit Franklin. "Laurelbrooke Franklin TN" is owned by whoever writes the best 2,000 words about it — and most realtor blogs don't bother.

3. **Topical authority + internal linking.** These articles cross-link heavily to your existing content, deepening your topic clusters around relocation, neighborhoods, and buying — which lifts the head terms over time.

## Sitemap.xml additions

Add these `<url>` entries to `public/sitemap.xml`:

```xml
<url>
  <loc>https://franklintnguide.com/articles/moving-to-franklin-tn-from-atlanta/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/moving-to-franklin-tn-from-boston/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/franklin-tn-vs-spring-hill/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/franklin-tn-vs-nolensville/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/laurelbrooke-franklin-tn/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/mckays-mill-franklin-tn/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/retiring-in-franklin-tn/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/new-construction-homes-franklin-tn/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/franklin-tn-property-taxes/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://franklintnguide.com/articles/remote-work-franklin-tn/</loc>
  <lastmod>2026-05-29</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## How to add these to the site

Each article is a markdown file with YAML frontmatter. Depending on your existing content pipeline, integration is one of:

**Option A — If your site already parses markdown content:**
Drop the 10 `.md` files into your articles content directory. The frontmatter matches what your existing articles likely use (title, slug, date, author, etc.).

**Option B — If your articles are defined in code/JSON:**
Use the frontmatter fields to populate your article schema, and use the body (markdown) as the rendered content. Most React markdown renderers (`react-markdown`, MDX, etc.) handle this directly.

**Option C — Hand to Replit Agent:**
After Replit finishes the SSG migration, paste the markdown files into your content directory and ask Replit to add them to the article index/list page. The frontmatter is self-describing — Replit Agent will figure out the wiring.

## Internal linking map

These articles link heavily to your existing content. Make sure these target URLs exist and resolve correctly:

**Heavily-linked existing articles and canonical section pages (verify they're in production):**
- `/articles/moving-to-franklin-tn-from-california/`
- `/articles/moving-to-franklin-tn-from-new-york/`
- `/cost-of-living/`
- `/schools/`
- `/franklin-vs-nashville/`
- `/neighborhoods/`
- `/articles/best-neighborhoods-franklin-tn-families/`
- `/articles/franklin-tn-real-estate-market-2026/`
- `/articles/franklin-tn-job-market/`
- `/articles/why-move-to-franklin-tn/`
- `/articles/westhaven-franklin-tn/`
- `/articles/berry-farms-franklin-tn/`
- `/articles/fieldstone-farms-franklin-tn/`
- `/articles/brentwood-vs-franklin-tn/`
- `/articles/best-places-to-live-near-nashville/`
- `/articles/is-franklin-tn-safe/`
- `/articles/pros-cons-living-franklin-tn/`

**Cross-links between the new 10 articles:**
- `/articles/franklin-tn-vs-spring-hill/` ↔ `/articles/franklin-tn-vs-nolensville/`
- `/articles/laurelbrooke-franklin-tn/` ↔ `/articles/westhaven-franklin-tn/` (existing)
- `/articles/mckays-mill-franklin-tn/` ↔ `/articles/fieldstone-farms-franklin-tn/` (existing)
- `/articles/franklin-tn-property-taxes/` ↔ `/articles/retiring-in-franklin-tn/`
- `/articles/remote-work-franklin-tn/` ↔ `/articles/franklin-tn-job-market/` (existing)
- `/articles/new-construction-homes-franklin-tn/` ↔ `/articles/franklin-tn-real-estate-market-2026/` (existing)

**Reverse links — go back and add these to the existing articles** (improves cluster strength):
- Add link to `/articles/franklin-tn-vs-spring-hill/` from `/franklin-vs-nashville/`
- Add link to `/articles/franklin-tn-vs-nolensville/` from `/articles/brentwood-vs-franklin-tn/`
- Add link to `/articles/laurelbrooke-franklin-tn/` from `/neighborhoods/`
- Add link to `/articles/mckays-mill-franklin-tn/` from `/articles/best-neighborhoods-franklin-tn-families/`
- Add link to `/articles/retiring-in-franklin-tn/` from `/articles/why-move-to-franklin-tn/`
- Add link to `/articles/new-construction-homes-franklin-tn/` from `/articles/franklin-tn-real-estate-market-2026/`
- Add link to `/articles/franklin-tn-property-taxes/` from `/cost-of-living/`
- Add link to `/articles/remote-work-franklin-tn/` from `/articles/franklin-tn-job-market/`

## Editorial review checklist (before publishing)

Each article ends with an editor's note flagging specific data points to verify. Top items across the set:

- **Tax rates** (state and local, year-specific) — Williamson County, City of Franklin, comparison states
- **Median home prices** — refresh from current MLS data
- **School zone assignments** — Williamson County reviews boundaries periodically
- **Population numbers** for Franklin, Spring Hill, Nolensville (high-growth markets, change annually)
- **HOA dues** for Laurelbrooke and McKays Mill (verify with current management)
- **BNA flight network details** — direct flights, route count
- **Builder roster** for the new construction article — verify current active builders in each community

A 30-minute pass with current data sources before publishing will materially improve quality.

## Author/E-E-A-T setup (do this once, applies to all 10)

The schema in each article now references `Franklin TN Guide Editorial Team` as the author organization. Make sure your site has:

- An `/about/` page that explains the publication, editorial standards, Williamson County connection, and referral disclosure.
- A visible Ryan Loche bio section on `/about/` once the real bio and credentials are ready.
- Any brokerage / referral structure clearly disclosed before lead capture goes live.

This is critical. Google heavily weights author credibility on YMYL-adjacent content (real estate, financial, demographic). The articles are written to support strong E-E-A-T; the page setup needs to back them up.

## Lead-capture CTA setup (do this once, applies to all 10)

Each article ends with two CTAs:

1. `[Book a free Franklin relocation call](/contact/)`
2. `[Download the free Franklin Relocation Toolkit](/toolkit/)`

These resolve to:

- `/contact/` — your contact form or Calendly link. Should capture name, email, current location, target Franklin neighborhood, timeline. This is your primary lead capture.
- `/toolkit/` — a landing page for a downloadable PDF (Franklin Relocation Toolkit), gated behind email. This is your top-of-funnel lead magnet.

If neither exists yet, build both. The PDF can be a 10–15 page repackaging of your best content (relocation checklist + neighborhood matrix + cost-of-living calculator). I can draft it as a follow-up.

## Suggested publish order

If you don't want to ship all 10 at once, here's a sequenced rollout that maximizes early SEO value and lets each piece earn some link equity before the next:

**Week 1:** Articles 9 (property taxes), 7 (retiring) — strongest E-E-A-T anchors, evergreen content
**Week 2:** Articles 1 (Atlanta), 2 (Boston) — relocation content with high commercial intent
**Week 3:** Articles 3 (vs Spring Hill), 4 (vs Nolensville) — comparison content
**Week 4:** Articles 5 (Laurelbrooke), 6 (McKays Mill) — neighborhood deep-dives
**Week 5:** Articles 8 (new construction), 10 (remote work) — buyer-intent + lifestyle

Submit each batch to Google Search Console for indexing as soon as it ships.

## Post-publish: 30-day verification

After all 10 are deployed (and the SSG fix is live):

1. Run `site:franklintnguide.com` in Google after 7 days. You should see 30+ pages indexed (vs. the current 2).
2. Check `curl -s` on each new article URL and verify the `<title>`, `<meta description>`, and body content are all in the initial HTML response.
3. Submit the updated sitemap.xml to GSC.
4. Watch GSC's Performance report at 14 and 30 days. You should see impression growth across new long-tail queries.
5. Watch GSC's Coverage report. Any pages stuck in "Discovered — not indexed" or "Crawled — not indexed" need attention.

If after 30 days you're not seeing meaningful indexing improvement, the rendering fix likely isn't fully working — go back to the technical pass.
