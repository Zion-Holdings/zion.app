# Uninterrupted Autonomous SEO Content Loop
## GitHub Pages / Next.js Static Site — Best-Practice Plan (2026)

### Goals
- Run a non-destructive, cron-driven local automation that continuously grows deep static pages.
- Keep CI green; avoid mutating `servicesData.json` during content generation.
- Fix existing broken internal hrefs under `out/services/`.
- Scale to the full `app/data/servicesData.json` catalog (~1.3M lines) via batched generation.

### Recommended file structure
```
scripts/content-loop/
  orchestrator.cjs          # single entrypoint, calls steps 1–6 in order
  sitemap-first.cjs         # reads servicesData.json + existing docs/out/ routes; emits sitemap.xml + crawl frontier
  batch-generator.cjs       # consumes frontier, writes deep static pages (docs/ + out/) in batches
  topic-hub-builder.cjs     # creates hub pages + pillar→spoke relationship map
  internal-link-enricher.cjs# injects contextual internal links into generated pages
  link-repair.cjs           # repairs/reports broken internal hrefs in out/
  verification-gate.cjs     # post-generation checks: counts, duplicate slugs, sitemap parity, link health
```

### 6 concrete steps (actionable)

1. **Sitemap-first frontier generation**
   - Read `app/data/servicesData.json` and existing `docs/` + `out/` trees.
   - Compute the set of URLs that *should* exist (service pages, hub pages, blog pages).
   - Write `sitemap.xml` as the single source of truth for what to build next.
   - Output: frontier JSON (`content-loop/frontier.json`) with priority batches.
   - File: `scripts/content-loop/sitemap-first.cjs`

2. **Batch SEO post generation**
   - Process frontier in fixed-size batches (e.g., 50–200 pages per cycle).
   - For each service/slug: render a deep static page with unique metadata (`title`, `description`, canonical, OpenGraph, JSON-LD).
   - Write pages into `docs/<slug>/index.html` and/or `out/<slug>/index.html` depending on existing build conventions.
   - Keep payload deterministic so reruns are idempotent.
   - File: `scripts/content-loop/batch-generator.cjs`

3. **Topic hub & pillar-page construction**
   - Group services by industry/category (e.g., `ai-consulting-for-healthcare`, `managed-security-services`).
   - Generate hub index pages with:
     - unique hub metadata,
     - canonical hub URL,
     - ordered lists of linked child service pages.
   - Update `navigation.json` / nav stubs only if non-destructive append is possible.
   - File: `scripts/content-loop/topic-hub-builder.cjs`

4. **Internal-link enrichment**
   - For each newly generated page, insert 3–6 contextual internal links:
     - 1–2 links to parent topic hubs,
     - 1–2 links to sibling services in the same industry,
     - 1 link to a related solution/category page.
   - Use exact slug matching against the sitemap frontier to avoid broken hrefs.
   - Preserve existing HTML structure; only inject links into `<article>`/`<main>` content zones.
   - File: `scripts/content-loop/internal-link-enricher.cjs`

5. **Link repair**
   - Crawl `out/` HTML and extract all internal `href`s.
   - Cross-reference against the sitemap frontier and existing `docs/`/`out/` files.
   - For missing targets:
     - attempt lightweight repair by matching slugs case-insensitively,
     - otherwise write `broken-links-report.json` and stop the cycle.
   - Never delete pages automatically; only repair hrefs when confident.
   - File: `scripts/content-loop/link-repair.cjs`

6. **Verification gate + orchestrator**
   - After each cycle run: assert page count grew or stayed flat, sitemap is valid XML, no duplicate slugs, and broken link count did not increase.
   - If verification passes, commit and push to `gh-pages` branch.
   - If verification fails, emit a delta report and exit without push.
   - Orchestrator logs to `.content-loop.log` and exits non-zero only on verification failure.
   - Files: `scripts/content-loop/verification-gate.cjs`, `scripts/content-loop/orchestrator.cjs`

### Hermes Agent tooling patterns (2026)
- **Batch size**: 50–200 pages per cycle to stay under GitHub Pages CI limits.
- **Idempotency**: every script must be rerunnable without duplicating pages or corrupting `servicesData.json`.
- **Sitemap as contract**: generate sitemap first, then build pages that match it.
- **Topic hubs before leaf pages**: build pillars first so leaf pages always have valid hub targets to link to.
- **Link repair as a safety net**: run after every cycle; do not let broken hrefs accumulate.
- **Non-destructive reads**: read `servicesData.json` read-only; never edit it during content loops.

### Integration notes for this repo
- Reuse existing `build-wrapper.cjs` conventions for writing HTML.
- Respect `.github/workflows/gh-pages.yml` artifact assembly from `docs/ + out/`.
- Do not push from content-loop if CI is currently running; use local commits + manual push or GitHub CLI with lock checks.
