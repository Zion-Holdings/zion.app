# Gmail OAuth Token Setup

Live sends are blocked until these one-time steps are completed.

## Prerequisites
- Google Cloud project with Gmail API enabled
- OAuth 2.0 Desktop-app client credentials downloaded
- Redirect URI `http://localhost:8080/` authorized in Google Cloud Console

## Run the helper
```bash
cd C:/Users/Zion/tmp/zion-clone-test2
python scripts/gmail_token_helper.py
```

## When prompted
1. Paste the Desktop-app `client_id`
2. Paste the Desktop-app `client_secret`
3. Save the generated values when prompted

## Required saved values
Save these as environment variables or in `~/.openclaw/workspace/gog_tokens.json`:
- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`

Optional:
- `GOOGLE_GMAIL_TOKEN_PATH` → custom token file path

## Verify
```bash
cd C:/Users/Zion/tmp/zion-clone-test2
OUTREACH_DRY_RUN=1 OUTREACH_REQUIRES_APPROVAL=0 python scripts/outreach/outreach_worker_automation.py
```
Discovery should return threads from `!!!hot-follow-up` and outreach queries instead of 0.
