# bolt.new.zion.app

![Automations: 31](https://img.shields.io/badge/Automations-31-informational) ![Pages: 10](https://img.shields.io/badge/Pages-10-success) ![Components: 1](https://img.shields.io/badge/Components-1-blue)

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
- [actions-catalog.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/actions-catalog.yml)
- [auto-fix.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/auto-fix.yml)
- [automerge-main.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/automerge-main.yml)
- [autonomous-meta.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/autonomous-meta.yml)
- [ci-self-heal.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/ci-self-heal.yml)
- [ci.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/ci.yml)
- [cloud-maintenance.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/cloud-maintenance.yml)
- [cloud-marketing.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/cloud-marketing.yml)
- [continuous-improvement.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/continuous-improvement.yml)
- [cursor-rules-autoupdate.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/cursor-rules-autoupdate.yml)
- [dependency-maintenance.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/dependency-maintenance.yml)
- [diverse-agent-matrix.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/diverse-agent-matrix.yml)
- [frontend-sync-continuous.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/frontend-sync-continuous.yml)
- [git-health.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/git-health.yml)
- [infinite-improvement-loop.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/infinite-improvement-loop.yml)
- [instagram-six-hourly.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/instagram-six-hourly.yml)
- [labeler.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/labeler.yml)
- [marketing-daily.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/marketing-daily.yml)
- [merge-conflict-guard.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/merge-conflict-guard.yml)
- [monetization-continuous.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/monetization-continuous.yml)
- [monetization-daily.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/monetization-daily.yml)
- [netlify-config.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/netlify-config.yml)
- [netlify-functions-trigger.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/netlify-functions-trigger.yml)
- [netlify-monitor.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/netlify-monitor.yml)
- [performance-weekly.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/performance-weekly.yml)
- [rapid-sync.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/rapid-sync.yml)
- [release-drafter.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/release-drafter.yml)
- [revenue-ideas-daily.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/revenue-ideas-daily.yml)
- [sync-health.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/sync-health.yml)
- [ui-evolution-schedule.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/ui-evolution-schedule.yml)
- [ui-evolution-weekly-beautify.yml](https://github.com/Zion-Holdings/zion.app/actions/workflows/ui-evolution-weekly-beautify.yml)

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