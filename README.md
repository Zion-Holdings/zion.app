# Zion — Autonomous Cloud Automations

This repository runs a fleet of autonomous, cloud‑native automations via Netlify Scheduled Functions. Changes are committed back to the repo automatically.

## New cloud automations

- Knowledge Pack Runner: `/.netlify/functions/knowledge-pack-runner` — generates `public/automation/knowledge-pack.json` every 10 minutes.
- Adaptive Orchestrator: `/.netlify/functions/adaptive-orchestrator` — selectively triggers relevant functions based on recent changes, then syncs.
- LLM Content Curator: `/.netlify/functions/llm-content-curator-runner` — curates content and promos with LLM; commits changes to main.
- Link Sentinel Aggregator: `/.netlify/functions/link-sentinel-aggregator-runner` — aggregates link integrity data and proposes fixes; auto-syncs.
- Site Promo Orchestrator: `/.netlify/functions/site-promo-orchestrator` — analyzes, generates and applies homepage/site promos automatically.
- Auto‑Discovery Orchestrator: `/.netlify/functions/auto-discovery-orchestrator` — discovers new automation ideas and runs the guardian; then syncs.

See the homepage for links and live triggers.