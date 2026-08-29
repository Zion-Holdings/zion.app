# Site Audit & Deploy Status

**Last updated:** 2026-08-29  
**Status:** BLOCKED — Pages workflow not completing

## What’s Working
- Local fixes committed to `main`: canonical link repairs, enriched fallbacks, sitemap sync
- `gh-pages` branch updated to match latest `main`
- GitHub Pages source re-pointed to `main`

## What’s Broken
- Core live routes still 404: `/`, `/careers/`, `/solutions/`, `/services/`, `/tools/`, `/blog/`, `/products/`, `/use-cases/`, `/about/`, `/faq/`, `/sla/`
- Latest Pages workflow runs are stuck `pending`/`in_progress`; earlier runs show `cancelled`
- No successful deploy artifact since source alignment

## Root Cause
- GitHub Actions `gh-pages.yml` runs are not reaching a terminal success state
- This is a CI/deploy blocker, not a content blocker

## Next Step
- Inspect the latest Pages workflow run details/jobs to find the actual failure mode
- Fix the workflow blocker, then trigger a new deploy

## Live Verification
```bash
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/careers/
curl -s -o /dev/null -w '%{http_code}' https://ziontechgroup.com/solutions/
```

## Credentials Status
- Google OAuth: expired, needs `gog login kleber@ziontechgroup.com`
- Resend SMTP: 403/1010, needs new API key
- CURSOR_API_KEY/OPENAI_API_KEY: missing
