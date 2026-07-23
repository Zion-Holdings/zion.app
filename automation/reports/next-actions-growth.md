# Zion Tech Group — Next Actions for Exponential Autonomous Growth

## Completed This Cycle
- `outreach dry-run scan`: rebooted, dedupe active, 1 potential client, 0 sends.
- `site health check`: 200 OK coverage confirmed.
- `token renewal check`: scheduled every 6h with exact manual re-auth command.
- SEO pages added: 10 focused topic pages under `/app/seo/`.

## Unlock Live Outbound
1. Add one LLM secret to GitHub Actions: `ZION_LLM_API_KEY`.
2. Set `OUTREACH_DRY_RUN=0` in `.github/workflows/outreach-live-llm-tailoring.yml`.
3. If Gmail auth expires: `gog auth add kleber@ziontechgroup.com --services gmail`.
4. Re-enable paused jobs after provider quota reset.

## Next Revenue Levers
- Expand lead sources beyond GitHub user search: job boards, tech forums, SMB directories.
- Add `/mobile-app` and `/desktop-app` fallback info pages in `docs/`.
- Add `/plugin-marketplace` lead magnet and `/public-roadmap` trust page.
- Convert high-intent tool users to leads via embedded “Book intro” flows.

## Metrics To Watch
- outreach dry-run: `potentialClients` and `skippedDuplicateSuppression` per cycle.
- sent ledger: `outreach_monitor/processed/sent_ledger.jsonl`.
- site health: first-broken metric in `automation/verify_200.py`.
