# Zion — Autonomous Cloud Automations

This repository runs a fleet of autonomous, cloud‑native automations via Netlify Scheduled Functions. Changes are committed back to the repo automatically.

## New cloud automations

- Knowledge Pack Runner: `/.netlify/functions/knowledge-pack-runner` — generates `public/automation/knowledge-pack.json` every 10 minutes.
- Adaptive Orchestrator: `/.netlify/functions/adaptive-orchestrator` — selectively triggers relevant functions based on recent changes, then syncs.
- Tech Debt Heatmap: `/.netlify/functions/tech-debt-heatmap-runner` — scans repo for debt signals and publishes live reports.
- Revenue Ideas Runner: `/.netlify/functions/revenue-ideas-runner` — aggregates monetization proposals into public reports.
- Code Ownership Map: `/.netlify/functions/code-ownership-map-runner` — infers contributors per area and publishes a map.

See the homepage for links and live triggers.