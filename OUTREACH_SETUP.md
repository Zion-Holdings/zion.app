# Outreach Activation Setup

This repository already contains the live outreach automation. The only remaining blockers are configuration values, not code.

## 1. Google OAuth token

Place a valid user token at:

```
scripts/outreach_monitor/processed/gmail_token.json
```

Required scopes: `https://www.googleapis.com/auth/gmail.send`, `https://www.googleapis.com/auth/gmail.readonly`, `https://www.googleapis.com/auth/gmail.modify`.

## 2. LLM provider secrets

Add these in **GitHub → Settings → Secrets → Actions**:

| Secret | Purpose |
|---|---|
| `ZION_LLM_API_ENDPOINT` | Base URL for the chat completions endpoint |
| `ZION_LLM_API_KEY` | API key for that endpoint |
| `ZION_LLM_MODEL` | Model identifier to query |
| `OPENROUTER_API_KEY` | Optional alternate provider key |
| `GROQ_API_KEY` | Optional alternate provider key |
| `GEMINI_API_KEY` | Optional alternate provider key |

The sender auto-selects an available backend from `openai_compat`, `unified`, `utils_llm_query`, then falls back to `template`.

## 3. Verify dry-run

```bash
HIGH_FREQ_INTERVAL_SECONDS=300 OUTREACH_DRY_RUN=1 python scripts/outreach/run_high_frequency_forever.py
```

Expected result:
- contacts discovered from `!!!hot-follow-up` across all folders
- no duplicate sends
- LLM tailoring used when secrets are present

## 4. Enable sending in CI

Set `OUTREACH_DRY_RUN=0` in the workflow environment for `.github/workflows/outreach-live-llm-tailoring.yml`.

## Notes

- Exclusion list is enforced at `lead-crm/exclusion-list.json`.
- Sent ledgers are at `scripts/outreach_monitor/processed/sent_ledger.jsonl` and `lead-crm/ceo_outreach_ledger.jsonl`.
- Continuous monitor is active via the `site-health-monitor` cron job.
