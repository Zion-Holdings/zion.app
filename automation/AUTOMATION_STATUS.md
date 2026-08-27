# Zion Tech Group — Operations & Automation Status
Last updated: 2026-07-16

## Current Status
- Site healthy and deployed on GitHub Pages.
- Canonical service path live: `/services/cloud-cost-optimization-platform/`
- Internal link audit: local runner verified (`broken_count=0`)

## Active Monitoring
- `ztg-internal-link-audit`: `ok`, using repo-local wrapper
- `zion-broken-links-check`: `ok`
- `zion-service-counts-check`: `ok`
- `ztg-link-audit`: `ok`
- `token-renewal-check`: `ok`
- `email-responder`: `ok`
- `health-check`: `ok`
- `pages-canonical-deploy-verifier`: `ok`

## Paused Jobs — Nous Rate Limit / 429
Paused because active provider token is `exhausted` with `HTTP 429`:
- `zion-email-intelligence-ceo-mode`
- `it-outreach-vendor-seed`
- `IT SMB Outreach Fast`
- `Zion Site Smoke Test`
- `zion-historical-miner`
- `zion-outreach-tailored`
- `Hot-followup watcher`
- `ztg-email-high-frequency-tailored-monitor`
- `Site health watchdog`
- `web-prospecting-it-services`

## Outstanding Blocker
- Need a clean-output LLM provider/model or Nous quota reset before re-enabling paused jobs.
- Outreach LLM tailoring remains in fallback/draft mode.
