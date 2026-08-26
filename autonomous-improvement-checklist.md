# Zion Tech Group — Autonomous Improvement Checklist

Purpose: keep the live site improving without manual handoffs.
Last updated: 2026-07-04

## Deployed
- [x] Homepage "🚀 What’s New" section driven by `public/data/release_notes.json`
- [x] Service detail pages emit `WebSite` JSON-LD alongside `Service` + `BreadcrumbList`
- [x] Offline fallback page: `public/offline.html`
- [x] Service worker cache + offline fallback: `public/sw.js`
- [x] Service catalog loading skeleton: `app/components/Skeletons/ServiceGridSkeleton.tsx`
- [x] Static export rebuilt and verified (`out/index.html`, service pages, sitemap, `feed.xml`)
- [x] Contents deploy to `main` source branch for GitHub Pages at `ziontechgroup.com`

## Continuous runner
- [x] `zion-build-deploy-runner` cron job: every 60m
- [x] Build verification: `scripts/checks/build-and-verify.cjs`
- [x] Sitemap validation: `scripts/checks/sitemap-validate-check.cjs`
- [x] CI verify + dispatch: `scripts/checks/ci-verify-dispatch.cjs`

## Improvement queue
- [ ] Maintain `release_notes.json` weekly with new service launches
- [ ] Add review/BBB structured data where applicable
- [ ] Tighten canonical slugs if route conventions change
