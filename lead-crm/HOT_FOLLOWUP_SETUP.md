# Zion Tech Group — Hot Follow-Up Responder Setup

## What this does
Searches Gmail label `!!!hot-follow-up` across all folders, generates a tailored CEO reply in Portuguese, sends a threaded reply, and labels the thread `!!!hot-followup-sent` to avoid duplicates.

## Required auth file
The responder needs Google OAuth tokens at `~/.openclaw/workspace/gog_tokens.json`.

If you only have `client_secret.json` from Google Cloud Console, run:
```
gog auth credentials <path-to-client_secret.json>
gog auth add kleber@ziontechgroup.com --services gmail
```

If you prefer this repo’s direct token path, populate `/Users/miami2/.openclaw/workspace/gog_tokens.json` with:
```json
{
  "client_id": "...",
  "client_secret": "...",
  "refresh_token": "...",
  "access_token": "...",
  "expiry": "2026-07-07T03:00:00+00:00"
}
```

## Run dry-run
```
DRY_RUN=true python3 lead-crm/hot_followup_responder.py
```

## Run live
```
python3 lead-crm/hot_followup_responder.py
```
