# Zion Tech Group — Operations & Automation Status
Last updated: 2026-07-22

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

## Active Jobs — Live via `gog`
- `run_outreach_scan.py`: `ok`, scans `in:anywhere` every few minutes with duplicate suppression.
- `token-renewal-watchdog`: `ok`, proactive refresh with Telegram/Discord alert hooks available.
- `health-check`: `ok`, 8 live route diagnostics on `/tools/health-check/`.
- Hot followup: one targeted CEO reply sent to Solyssey RFQ789 thread `19f7db816c0eee81`; tracked in `hot-followup-sent.json`.

## Notes
- Gmail tokens are renewing from `~/.openclaw/workspace/gog_tokens.json` via watchdog scripts.
- Hot-followup dedupe ledger restored from backup: `scripts/outreach_monitor/processed/hot_followup_reply_ledger.jsonl`.
