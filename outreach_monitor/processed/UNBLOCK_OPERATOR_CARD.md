# Outreach Unblock Operator Card
Safe progression for `!!!hot-follow-up` and cross-folder high-frequency outreach.

## Current State
- `pending_outreach_queue.jsonl` contains CEO drafts for alive thread candidates.
- `OUTREACH_DRY_RUN=1` emits structured records to `dry_run_report.jsonl` without sending.
- LLM tailoring activates when all three env vars are present.

## How to Advance from Dry-Run to Live
1. Provide ONE of:
   - `ZION_LLM_API_ENDPOINT`
   - `ZION_LLM_API_KEY`
   - `ZION_LLM_API_MODEL`
2. Disable dry-run:
   - `set OUTREACH_DRY_RUN=0  # Windows cmd`
   - or unset `OUTREACH_DRY_RUN`
3. Trigger worker once:
   - `python scripts/outreach/outreach_worker_automation.py`
4. Observe:
   - `outreach_monitor/processed/sent_ledger.jsonl`
   - `outreach_monitor/processed/dry_run_report.jsonl`

## Queue Format
Each line is JSON with:
- `to_email`, `to_name`, `subject`, `language`
- `thread_id`, `message_id`
- `body`, `llm_tailored`, `status` in `pending|sent|skipped`

## Safety Gates
- No send unless thread probed alive.
- No duplicates checked by contact + subject + 24h cooldown.
- Invalid/bounce domains excluded.

## Calendly / Website
- Calendly: https://calendly.com/kleber-ziontechgroup
- Website: https://ziontechgroup.com
