# Activation Checklist

Live outreach is fully coded. It needs exactly these config items to send.

## Required
1. GitHub Secrets
   - Go to https://github.com/Zion-support/zion-support.github.io/settings/secrets/actions
   - Add one of these groups:
     - `ZION_LLM_API_ENDPOINT`, `ZION_LLM_API_KEY`, `ZION_LLM_MODEL`, or
     - `OPENROUTER_API_KEY`, or `GROQ_API_KEY`, or `GEMINI_API_KEY`

2. Gmail OAuth Token
   - Save a valid token to: `outreach_monitor/processed/gmail_token.json`

3. Enable sending
   - In the workflow/repl script, set `OUTREACH_DRY_RUN=0`

## Live now without extra config
- All-folder `!!!hot-follow-up` discovery
- High-frequency continuous runner
- LLM-tailored CEO replies with Calendly + website + free-tools CTA
- Dedup across ledgers
- Site deep crawl + monitor with Telegram alerts

Once #1 and #2 are in place, say "go live" and I'll do a final activation validation.
