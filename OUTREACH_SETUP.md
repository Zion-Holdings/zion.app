# Outreach Activation Setup

This repository already contains the live outreach automation. The only remaining blockers are configuration values, not code.

## 1. Google OAuth token

Place a valid user token at:

```
scripts/outreach_monitor/processed/gmail_token.json
```

Required scopes: `https://www.googleapis.com/auth/gmail.send`, `https://www.googleapis.com/auth/gmail.readonly`, `https://www.googleapis.com/auth/gmail.modify`.

You can generate a local token with the same OAuth client ID/secret already referenced in the outreach scripts.

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

## 3. Verify

```bash
HIGH_FREQ_INTERVAL_SECONDS=300 OUTREACH_DRY_RUN=1 python scripts/outreach/run_high_frequency_forever.py
```

Expected result:
- contacts discovered from `!!!hot-follow-up` across all folders
- no duplicate sends
- LLM tailoring used when secrets are present

## 4. Go live

Set `OUTREACH_DRY_RUN=0` in the workflow environment or runner to enable sending.

## Notes

- Exclusion list is enforced at `lead-crm/exclusion-list.json`.
- Sent ledger is at `scripts/outreach_monitor/processed/sent_ledger.jsonl` and `lead-crm/ceo_outreach_ledger.jsonl`.
- The active GitHub Actions schedule is every **5 minutes** in `.github/workflows/outreach-live-llm-tailoring.yml`.
