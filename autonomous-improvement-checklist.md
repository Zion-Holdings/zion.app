# Zion Tech Group — Autonomous Improvement Checklist

Purpose: keep the live site improving without manual handoffs.
Last updated: 2026-07-04

## Deployed
- [x] Homepage “🚀 What’s New” section driven by `public/data/release_notes.json`
- [x] Release notes dataset expanded/validated: 6 entries with changelog summaries
- [x] Service detail pages emit `WebSite` JSON-LD in addition to `Service` + `BreadcrumbList`
- [x] Static export rebuilt (`out/index.html`, service pages, sitemap, feed)
- [x] Contents deploy to `main` source branch for GitHub Pages at `ziontechgroup.com`

## Continuous runner
- [x] `zion-build-deploy-runner` cron job: every 60m runs `node scripts/continuous-build-deploy.cjs`
- [x] Fallback logic: redeploy existing `out/` if build-times-out; build only if artifacts are missing
- [x] State file: `automation/reports/continuous-build-deploy-latest.json`

## Improvement queue
- [ ] Maintain `release_notes.json` weekly with new service launches
- [ ] Add BBB/Review/Google Maps structured data where applicable
- [ ] Improve service slug consistency if a future script introduces canonical `/services/ai-xxx` routes
- [ ] Use `autonomous-improvement-checklist.md` as the single source of truth for deployed vs planned work

## Verification
- [ ] Confirm homepage “What’s New” cards render in production
- [ ] Confirm service pages include all three JSON-LD scripts
- [ ] Confirm sitemap + feed regenerate after content changes
- [ ] Confirm `main` remains GitHub Pages source branch for live updates
