# Deploy Verification and Continuous Monitoring Checklist

Use this checklist to verify production deployment and sustain continuous site health monitoring.

## Deploy Verification

1. Confirm `main` is synced with remote after repair commits.
2. Verify GitHub Actions run history shows a successful deploy workflow after account/billing unlock.
3. Check live `/api/automation-health.json` timestamp updates after Pages rebuild.
4. Spot-check routes:
   - `/services/ai-data-lakehouse-pipelines` → 200
   - `/blog/free-ai-readiness-audit-checklist-for-it-managers-2026` → 200
   - `/` → 200

## Continuous Monitoring

1. Confirm cron regenerates `public/api/automation-health.json` on schedule.
2. Confirm Telegram health monitor reports build/deploy/pages status.
3. Review `lead-crm/outreach_monitor_latest.json` for invalid domains before any campaign.
4. Scan sitemap for 404s at least once every 24h.

## Known Repo Fixes Already Applied

- Calendly URL canonicalized to https://calendly.com/kleber-ziontechgroup
- Missing health freshness checker restored at `scripts/automation/check-automation-health-static-freshness.cjs`
- GitHub Pages deploy trigger restored in `ai-content-ideas-and-evolution-deploy.yml`
- DNS 404 routes restored: `/services/ai-data-lakehouse-pipelines` and `/blog/free-ai-readiness-audit-checklist-for-it-managers-2026`
- Local outreach state cleaned: 12 invalid/self-addressed recipients removed

## Blockers Requiring External Action

- Google Workspace auth token required for email triage and sending.
- GitHub billing/account-lock resolution or `gh` CLI/`GH_TOKEN` access required for Actions and Pages deploy trigger.
- `ZION_LLM_API_ENDPOINT` + `KEY` + `MODEL` required for LLM-driven repairs and outreach negotiation advances.
