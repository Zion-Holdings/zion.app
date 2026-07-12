# Outreach Setup

This file documents the exact steps to activate live LLM-tailored outreach sends.

## 1. Gmail API token

Place a valid Google OAuth user token at:

```
scripts/outreach_monitor/processed/gmail_token.json
```

Required scopes:
- `https://www.googleapis.com/auth/gmail.send`
- `https://www.googleapis.com/auth/gmail.readonly`
- `https://www.googleapis.com/auth/gmail.labels`

## 2. LLM provider secrets

Add one of the following sets to **GitHub → Settings → Secrets → Actions**.

### Option A: Direct LLM
- `ZION_LLM_API_ENDPOINT`
- `ZION_LLM_API_KEY`
- `ZION_LLM_MODEL`

### Option B: OpenRouter
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`

### Option C: Groq
- `GROQ_API_KEY`
- `GROQ_MODEL`

### Option D: Gemini
- `GEMINI_API_KEY`
- `GEMINI_MODEL`

## 3. Verify

After adding the above, run:

```
python scripts/outreach/outreach_worker_automation.py --dry-run
```

Expected result:
- Discovers `!!!hot-follow-up` threads across all folders
- Generates CEO-signed replies in the thread language
- No duplicate sends
- No sends to addresses in `lead-crm/exclusion-list.json`

## 4. Continuous run

GitHub Actions workflow:
`.github/workflows/outreach-live-llm-tailoring.yml`
Schedule: `*/5 * * * *` (every 5 minutes)

Local runner:
```
python scripts/outreach/run_high_frequency_forever.py
```

## 5. Checklist
- [ ] `gmail_token.json` placed
- [ ] LLM secrets added to GitHub
- [ ] Dry run passes without duplicate or exclusion errors
- [ ] Workflow run succeeds in Actions history
