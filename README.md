# bolt.new.zion.app

![Automations: 5](https://img.shields.io/badge/Automations-5-informational) ![Pages: 10](https://img.shields.io/badge/Pages-10-success) ![Components: 1](https://img.shields.io/badge/Components-1-blue)

Autonomous, cloud‑native app with self‑running automations.

Home: https://github.com/Zion-Holdings/zion.app#readme

### Highlights
- **Autonomous cloud automations**: GitHub Actions run on schedules to maintain, audit, and improve the repo without human intervention.
- **Rapid sync**: A 1-minute cadence keeps branches synchronized.
- **Self-healing CI**: Automatic detection and PRs for fixes after failures.

### Key Directories
- `automation/`: Cloud automation scripts (content, SEO, security, sync).
- `scripts/`: Utility scripts (sitemap, SEO, radar, README generator).
- `pages/`: Next.js pages.
- `components/`: Reusable UI components.

### Routes
- /
- /_app
- /automation
- /front
- /main/front
- /newsroom
- /reports/ai-trends
- /reports/roadmap
- /reports/seo
- /site-health

### Automations
- homepage-auto-update.yml
- netlify-config.yml
- netlify-functions-trigger.yml
- readme-autogen.yml
- ultrafast-cloud-orchestrator.yml

### Local Development
1. Install Node 20+ and npm 10+.
2. Install deps: `npm ci`.
3. Run dev: `npm run dev`.

### Maintenance Commands
- `npm run git:sync` – Advanced git sync
- `npm run automation:cloud` – Run cloud orchestrator locally
- `npm run sitemap` – Regenerate sitemap
- `npm run readme:generate` – Refresh this README

---
This README is auto-generated. Do not edit manually.