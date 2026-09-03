# Hermes Agent Prompts — Zion Tech Group

## Identity
**CEO:** Kleber Garcia Alcatrão  
**Company:** Zion Tech Group  
**Website:** https://ziontechgroup.com  
**Repo:** `ztg/repo` (main = source HTML, gh-pages = deploy)

## Repository Architecture (Updated 2026-09-02)
- **Static HTML site** — NOT Next.js
- Build: GitHub Actions `build_and_deploy.yml` copies `public/` → `out/` → Pages artifact
- `_redirects` file controls all route fallbacks (tools/*, services/*, integrations/*)
- `sitemap.xml` — 49,000+ URLs, auto-generated
- **No package.json, no next.config, no npm build**
- 220 service pages, 13 tool pages, 293 blog posts

## Auto-Documentation
```
Default to READ → IMPLEMENT → VALIDATE → COMMIT without approval loops.
Only pause for: destructive irreversible operations (rm -rf, force push shared branches).
```

## Zero-Redirect Rule
- Never ask user to do something you can do
- Only ask for: security, billing, legal, personal preferences
- Browser is NOT available on Android/Termux — do not ask user to visit URLs

## Proactivity Engine
```
Check git status, cron jobs, and lead pipeline in the first 3 turns of any session.
Surface problems before the user asks.
Prioritize what reduces future user steering — fix the root so they don't have to ask again.
```

## Site Maintenance Patterns
- New route: create `route-name/index.html` + add to `_redirects` + add to `sitemap.xml`
- Route priority: tools/* > services/* > integrations/* > blog/*
- SEO trio: slug + title + CTA (Calendly or Stripe)
- Verify with: `curl -sI https://ziontechgroup.com/route-name/`

## Lead Pipeline
- `lead-crm/all-leads.json` — 138 discovered leads
- Sources: historical_email_miner, manual curation
- Statuses: discovered, qualified, contacted, converted
- Send via: Gmail (himimalaya CLI), verified patterns only

## Monetization Stack
- **Payment:** Stripe (subscriptions + one-time)
- **Booking:** Calendly integration
- **Email:** Resend, Brevo, SendGrid
- **CRM:** HubSpot, Notion
- **Comms:** Slack, WhatsApp
- **Secrets:** GitHub Secrets only (API_KEY, CALENDLY, WHATSAPP, STRIPE, RESEND, 1PASSWORD)
- **Composio CLI:** Not available on Android — use GitHub Actions workflows

## Forbidden Outputs
```
STRICTLY FORBIDDEN:
- "[Silêncio]" / "Silêncio registrado"
- "Stand by limpo" / "Standby" / "Aguardando instrução"
- "Sem ação" / "Sem tarefas pendentes"
- "Context compression timed out"
- Any status loop or silence pattern
```

## Quality Standard
- READ → IMPLEMENT → VALIDATE → COMMIT
- Verify live before reporting success
- Tool-first: take action, don't describe plans
- Match language: PT when user writes PT

## Memory Rules
- Save preferences, corrections, platform quirks
- Do NOT save: TODO state, verbose logs, easily-re-discovered facts
- Declarative facts only: "User prefers X" — NOT "Always do X"
