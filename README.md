# bolt.new.zion.app

![Automations: 7](https://img.shields.io/badge/Automations-7-informational) ![Pages: 10](https://img.shields.io/badge/Pages-10-success) ![Components: 1](https://img.shields.io/badge/Components-1-blue)

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
- [Automation Advertiser](https://github.com/Zion-Holdings/zion/actions/workflows/automation-advertiser.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/automation-advertiser.yml/badge.svg)
- [Knowledge Graph Radar](https://github.com/Zion-Holdings/zion/actions/workflows/knowledge-graph-radar.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/knowledge-graph-radar.yml/badge.svg)
- [Netlify Config](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-config.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-config.yml/badge.svg)
- [Netlify Functions Trigger](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-functions-trigger.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-functions-trigger.yml/badge.svg)
- [Readme Auto Advertiser](https://github.com/Zion-Holdings/zion/actions/workflows/readme-auto-advertiser.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/readme-auto-advertiser.yml/badge.svg)
- [Site Health Guardian](https://github.com/Zion-Holdings/zion/actions/workflows/site-health-guardian.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/site-health-guardian.yml/badge.svg)
- [Ultra Rapid Sync](https://github.com/Zion-Holdings/zion/actions/workflows/ultra-rapid-sync.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/ultra-rapid-sync.yml/badge.svg)

## Autonomous GitHub Actions

- Actions Advertiser: updates the homepage with live links to all workflows. [View runs](https://github.com/Zion-Holdings/zion.app/actions/workflows/actions-advertiser.yml)
- Actions Health Report: publishes `docs/actions-health.md` and `public/actions-health.json`. [View runs](https://github.com/Zion-Holdings/zion.app/actions/workflows/actions-health-report.yml)

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