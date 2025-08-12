# bolt.new.zion.app

![Automations: 13](https://img.shields.io/badge/Automations-13-informational) ![Pages: 10](https://img.shields.io/badge/Pages-10-success) ![Components: 1](https://img.shields.io/badge/Components-1-blue)

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
- [Ai Trends Radar](https://github.com/Zion-Holdings/zion/actions/workflows/ai-trends-radar.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/ai-trends-radar.yml/badge.svg)
- [Automation Advertiser](https://github.com/Zion-Holdings/zion/actions/workflows/automation-advertiser.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/automation-advertiser.yml/badge.svg)
- [Cloud Autonomous Orchestrator](https://github.com/Zion-Holdings/zion/actions/workflows/cloud-autonomous-orchestrator.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/cloud-autonomous-orchestrator.yml/badge.svg)
- [Docs Intelligence](https://github.com/Zion-Holdings/zion/actions/workflows/docs-intelligence.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/docs-intelligence.yml/badge.svg)
- [Knowledge Graph Radar](https://github.com/Zion-Holdings/zion/actions/workflows/knowledge-graph-radar.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/knowledge-graph-radar.yml/badge.svg)
- [Media Optimizer](https://github.com/Zion-Holdings/zion/actions/workflows/media-optimizer.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/media-optimizer.yml/badge.svg)
- [Netlify Config](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-config.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-config.yml/badge.svg)
- [Netlify Functions Trigger](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-functions-trigger.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/netlify-functions-trigger.yml/badge.svg)
- [Readme Auto Advertiser](https://github.com/Zion-Holdings/zion/actions/workflows/readme-auto-advertiser.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/readme-auto-advertiser.yml/badge.svg)
- [Security Auto Heal](https://github.com/Zion-Holdings/zion/actions/workflows/security-auto-heal.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/security-auto-heal.yml/badge.svg)
- [Site Health Guardian](https://github.com/Zion-Holdings/zion/actions/workflows/site-health-guardian.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/site-health-guardian.yml/badge.svg)
- [Topics And Clusters](https://github.com/Zion-Holdings/zion/actions/workflows/topics-and-clusters.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/topics-and-clusters.yml/badge.svg)
- [Ultra Rapid Sync](https://github.com/Zion-Holdings/zion/actions/workflows/ultra-rapid-sync.yml) ![status](https://github.com/Zion-Holdings/zion/actions/workflows/ultra-rapid-sync.yml/badge.svg)

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

## New Cloud Cron Automations

- Intelligent Orchestrator (1m): /.netlify/functions/intelligent-orchestrator
- Anomaly Watchdog (10m): /.netlify/functions/anomaly-watchdog
- Pulse Sync (1m): /.netlify/functions/pulse-sync