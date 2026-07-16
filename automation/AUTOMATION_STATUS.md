# Zion Tech Group — Operations & Automation Status
Last updated: 2026-07-16

## Current Status
- Site healthy and deployed on GitHub Pages.
- Canonical service path live: `/services/cloud-cost-optimization-platform/`.
- Outreach automation is running with deterministic fallback templates only; live LLM tailoring is blocked because the configured model (`stepfun/step-3.7-flash:free`) returns empty user-facing completions.
- Interest/hot-followup candidates are queued as `ready_to_review` drafts only; no blind auto-send is active.
- Continuous monitoring jobs are scheduled in Hermes cron.

## Verified Details
- Live site: https://ziontechgroup.com
- Contact path: https://ziontechgroup.com/contact
- Calendly: https://calendly.com/kleber-ziontechgroup
- Google Meet backup: https://meet.google.com/ouu-khao-kuy
- LinkedIn: https://www.linkedin.com/company/ziontechgroup
- X/Twitter: https://x.com/ziontechgroup

## Recent Commits
- `85a18cebb` — `chore(outreach): automated outreach cycle`
- `c220e32d4` — `chore(outreach): automated outreach cycle`
- `f7e88833e` — `docs: refresh external link status in automation report`
- `f01f4bea4` — `docs: refresh automation status after verified deploy/fix review`
- `07e937ff4` — `fix: canonical cloud-cost link in homepage service cards`

## Cron / Continuous Jobs
- `zion-outreach-tailored`: every 15m
- `zion-historical-miner`: every 10m
- `email-responder`: every 30m
- `token-renewal-check`: every 15m
- `web-prospecting-it-services`: every 15m
- `Zion Site Smoke Test`: every 90m
- `Site health watchdog`: every 15m
- `ztg-internal-link-audit`: every 30m
- `ztg-link-audit`: weekly
- `pages-canonical-deploy-verifier`: weekly
- `zion-broken-links-check`: weekly
- `twinsburg-hire-daily-nudge`: daily
- High-frequency tailored Gmail monitor: every 15m

These jobs verify site integrity, auth/token health, outreach mining, and draft generation on a continuous basis.

## Operational Guidance
- Do not enable automated LLM tailoring or live sends until a clean-output provider/model is confirmed.
- Review `outreach_monitor/processed/monitor_report.jsonl` and `ready_to_review` interest drafts before any send.
