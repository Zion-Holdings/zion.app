# Zion Tech Group — Autonomous Improvement Checklist

Purpose: keep the live site improving without manual handoffs.
Last updated: 2026-07-04

## Deployed
- [x] Homepage “🚀 What’s New” section driven by `public/data/release_notes.json`
- [x] Release notes dataset validated: 6 entries with changelog summaries
- [x] Service detail pages emit `WebSite` JSON-LD in addition to `Service` + `BreadcrumbList`
- [x] Static export rebuilt (`out/index.html`, service pages, sitemap, `feed.xml`)
- [x] Contents deploy to `main` source branch for GitHub Pages at `ziontechgroup.com`
- [x] Continuous runner updated to combine build reuse + redeploy verification

## Continuous runner
- [x] `zion-build-deploy-runner` cron job: every 60m runs `node scripts/continuous-build-deploy.cjs`
- [x] Fallback logic: redeploy existing `out/` when build times out or is already valid
- [x] State file: `automation/reports/continuous-build-deploy-latest.json`
- [x] Build verification: `scripts/checks/build-and-verify.cjs`
- [x] Sitemap validation: `scripts/checks/sitemap-validate-check.cjs`

## Improvement queue
- [ ] Maintain `release_notes.json` weekly with new service launches
- [ ] Add BBB/Review structured data where applicable
- [ ] Improve service slug consistency if a future path change is introduced
