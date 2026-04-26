# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

## Franklin TN Guide

A comprehensive relocation guide website for Franklin, Tennessee — built as a React + Vite SPA.

**Artifact**: `artifacts/franklin-tn-guide`

### Stack
- React 19 + Vite (SPA, client-side routing)
- wouter for routing
- react-helmet-async for SEO (client-side meta tags)
- react-markdown for article rendering
- Tailwind CSS + @tailwindcss/typography for styling
- Warm professional design (navy #1B2A4A, Tennessee green #2D6A4F, warm white #FAF8F5)

### Pages
1. **Home** — Hero section, main value props
2. **Neighborhoods** — 5 neighborhoods with details (Downtown, Westhaven, Cool Springs, Berry Farms, Fieldstone Farms)
3. **Schools** — Overview of Williamson County Schools district
4. **Cost of Living** — Housing costs, taxes, utilities breakdown
5. **Franklin vs Nashville** — Side-by-side comparison
6. **News** — News index listing all news articles in reverse chronological order (`/news`)
7. **News Articles** — Individual news articles with markdown rendering (`/news/<slug>`)
8. **About** — About the guide
9. **Articles** — Long-form guides (accessible via `/articles/<slug>`)

### Articles (Content)
All long-form articles are stored in `src/lib/data.ts` with structure:
- `slug`, `title`, `metaTitle`, `metaDescription`, `keywords[]`
- `date`, `readTime`, `excerpt`, `content` (Markdown), `imageUrl` (required)

**46 long-form articles** — `imageUrl` is required on the `Article` type; TypeScript enforces coverage.

### Images
- **39 AI-generated article hero images** saved as `.png` files in `public/images/articles/`
- Each article's `imageUrl` points to its specific image (e.g. `/images/articles/retiring-in-franklin.png`)
- `og:image` in `src/pages/article.tsx` converts local paths to absolute URLs using `https://franklintnguide.com` as the base
- All 62 prerendered HTML files contain article-specific og:image tags

### News System (New)
News articles are stored as markdown files in `src/content/news/` with YAML frontmatter:
- `slug`, `title`, `metaTitle`, `metaDescription`, `keywords[]`, `date`
- Content rendered via `react-markdown`

**Utilities**: `src/lib/news.ts` — exports `getAllNews()`, `getNewsBySlug()`, `getNewsMetadata()`
- Uses Vite's `import.meta.glob` to dynamically load `.md` files at build time
- Parses YAML frontmatter and markdown content
- Results cached in memory

**Current news articles** (10 total):
1. In-N-Out Burger Opens in Franklin (Mar 1, 2026)
2. The Pearl Park Breaking Ground (Feb 28, 2026)
3. East McEwen Drive Widening (Feb 25, 2026)
4. Pelato Italian Restaurant Opening (Feb 20, 2026)
5. WCS Open Zoning 2026-27 (Feb 15, 2026)
6. WCS Innovation Center Opening (Feb 10, 2026)
7. Wyelea Luxury Development (Feb 5, 2026)
8. Carter House Visitor Center (Feb 1, 2026)
9. Culinary Dropout Coming (Jan 28, 2026)
10. Prickly Pear Coffee Co. Opens (Jan 25, 2026)

### SEO Setup
- **SSG (Static Site Generation)**: All 62 routes pre-render to content-complete HTML via `scripts/prerender.ts` (React SSR). Google can index every page without JavaScript.
- **Sitemap**: Auto-generated via `scripts/generate-sitemap.ts` on every build — covers all 46 article routes + 10 news routes + static pages
- **robots.txt**: Located at `/public/robots.txt`
- **Meta tags**: Injected into prerendered HTML via react-helmet-async SSR (each page has unique title, description, og:image, canonical)
- **Canonical domain**: https://franklintnguide.com
- **Contact email**: ryan@locheventures.com

### Build & Deploy
- **Development**: `pnpm run dev` from `artifacts/franklin-tn-guide`
- **Build**: `PORT=3000 BASE_PATH="/" pnpm run build` — generates sitemap → client build → SSR build → prerender all 62 routes → outputs to `dist/public/`
- **SSG bug fix**: Removed catch-all rewrite from `artifact.toml` so production static hosting serves per-route prerendered HTML correctly

### To Add New Long-Form Articles
1. Add entry to `articles` object in `src/lib/data.ts`
2. Include all fields: `slug`, `title`, `metaTitle`, `metaDescription`, `keywords`, `date`, `readTime`, `excerpt`, `content`, `imageUrl`
3. Run `pnpm run build` or `pnpm run generate-sitemap` to regenerate sitemap
4. Articles are immediately accessible at `/articles/<slug>`

### To Add News Articles
1. Create a new `.md` file in `src/content/news/` named `<slug>.md`
2. Add YAML frontmatter with: `slug`, `title`, `metaTitle`, `metaDescription`, `date`, `keywords`
3. Add markdown content after `---` separator
4. No build step required — articles load dynamically via Vite glob import
5. Accessible immediately at `/news/<slug>`
