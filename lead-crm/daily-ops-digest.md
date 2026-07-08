# Zion Tech Group — Daily Ops Digest
Generated: 2026-07-08

## Site
- Homepage: HTTP 200
- Blog routing: 124 blog post directories with page.tsx
- Internal link map: app/data/blog_internal_links.json

## Miner
- Queries per tick: 32
- Latest queries per second: ~0.21
- Average query duration: ~4.7s
- Max query duration: ~6.6s
- Latest contacts_found: 0
- Latest new_leads_added: 0
- Status: ok
- Health file: lead-crm/miner_health.json
- Rolling history: lead-crm/miner_health_history.json

## Lead Quality
- Total leads: 618
- High-signal leads: 270
- Medium-signal leads: 6
- Low-signal leads: 342
- Outreach queue ready: 25
- Top prospects enriched: 5

## LLM Tailoring
- Path: lead-crm/tailor_ready_with_llm.py
- Coverage measured in metrics_tailor_coverage.json
- Latest behavior: used_llm=true when timeout allows
- Per-call timeout: 20s
- Retries: 3
- Retry backoff: 2s
- Max tailored per cycle: ZT_MAX_TAILOR=10

## Outreach
- King templates: lead-crm/drafts/ceo-new-lead-template.md
- Past-client template: lead-crm/drafts/ceo-mutual-benefit-template.md
- Hot-followup template: lead-crm/drafts/ceo-hot-followup-template.md
- Top 5 drafts: lead-crm/drafts/hot_ready_outreach_pack_20260708
- Gmail monitor: ztg-gmail-monitor cron every 15m
- HOT=0, NEW2H=0

## Remote Sync
- Local ahead: 1
- Remote synced commit: 42c786b89
- Latest merge/push: ecbe1bb

## Next Actions
1. Review/approve top 5 CEO drafts
2. Diagnose provider quota/latency
3. External workflow/site verification
