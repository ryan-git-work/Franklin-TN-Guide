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
6. **About** — About the guide
7. **Articles** — Long-form guides (accessible via `/articles/<slug>`)

### Articles (Content)
All articles are stored in `src/lib/data.ts` with structure:
- `slug`, `title`, `metaTitle`, `metaDescription`, `keywords[]`
- `date`, `readTime`, `excerpt`, `content` (Markdown), `imageUrl`

**Current articles**:
1. **Why Move to Franklin, TN? 15 Reasons** (12 min, March 2025) — Reasons for relocation + context
2. **Best Neighborhoods in Franklin, TN** (14 min, March 2025) — Detailed neighborhood guides
3. **Williamson County Schools: Complete Guide** (11 min, March 22, 2025) — School district structure, high schools, programs, private options
4. **Cost of Living in Franklin, TN: What to Actually Expect** (10 min, March 22, 2025) — Housing, taxes, utilities, comparison to other metros

### SEO Setup
- **Sitemap**: Auto-generated via `scripts/generate-sitemap.ts` on every build (`pnpm run build` triggers it). Includes all 4 articles + 6 static pages (10 URLs total)
- **robots.txt**: Located at `/public/robots.txt`
- **Meta tags**: Rendered client-side via react-helmet-async (functional but not server-side rendering)
- **Canonical domain**: https://franklintnguide.com
- **Contact email**: hello@franklintnguide.com

### Build & Deploy
- **Development**: `pnpm run dev` from `artifacts/franklin-tn-guide`
- **Build**: `pnpm run build` — generates sitemap automatically
- **Deploy**: Ready for production deployment as an SPA

### To Add New Articles
1. Add entry to `articles` object in `src/lib/data.ts`
2. Include all fields: `slug`, `title`, `metaTitle`, `metaDescription`, `keywords`, `date`, `readTime`, `excerpt`, `content`, `imageUrl`
3. Run `pnpm run build` or `pnpm run generate-sitemap` to regenerate sitemap
4. Articles are immediately accessible at `/articles/<slug>`
