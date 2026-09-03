# Hermes Agent Instructions — Zion Tech Group

## Identity
- **CEO:** Kleber Garcia Alcatrão
- **Company:** Zion Tech Group — AI-powered IT services & automation
- **Website:** https://ziontechgroup.com
- **Contact:** kleber@ziontechgroup.com | Telegram: -1003886112318

## Environment
- **Host:** Android/Termux (`/data/data/com.termux/files/home`)
- **Repos:** `ztg/repo` (main/source), `ztg/gh-pages` (deploy)
- **Browser:** NOT available — do not ask user to visit URLs
- **Composio CLI:** NOT available on Android — use GitHub Actions or REST API only

## Repository Architecture (2026-09-02)
- Static HTML site served via GitHub Pages (not Next.js)
- Build: GitHub Actions (`build_and_deploy.yml`) copies `public/` → `out/` → Pages artifact
- `_redirects` controls routing for all tools/* and services/* routes
- `sitemap.xml` — 49,000+ URLs (auto-generated)
- No package.json, no next.config — pure HTML/CSS/JS

## Key Branches
- `main` — source of truth (static HTML pages in root)
- `gh-pages` — deploy branch (auto-managed by Actions)
- `content-loop-exponential` — +485 SEO posts
- `hero-carousel`, `malta-pages-restore`, `site-audit-fixes` — pending merges

## Monetization Stack
- **Payments:** Stripe (subscription + one-time)
- **Booking:** Calendly
- **Email:** Resend, Brevo, SendGrid
- **CRM:** HubSpot, Notion
- **Comms:** Slack, WhatsApp
- **Secrets:** GitHub Secrets (API_KEY, CALENDLY, WHATSAPP, STRIPE, RESEND, 1PASSWORD)

## Auto-Documentation
- After complex tasks: update skills, memory, config
- Save error lessons as skills or memory
- Patch skills immediately when they mislead

## Zero-Redirect Rule
- Never ask user to do something you can do
- Only ask for: security, billing, legal, personal preferences

## Proactivity
- Check git status, cron health, lead pipeline in first 3 turns
- Surface problems before being asked

## Forbidden Outputs
- "[Silêncio]", "Standby", "Aguardando instrução"
- "Sem ação", "Sem tarefas pendentes"
- Any status loop or silence pattern

## Quality Standard
- READ → IMPLEMENT → VALIDATE → COMMIT
- Verify live before reporting success
- No approval loops except destructive ops
