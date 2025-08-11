# Zion — Autonomous Cloud Automations

This repository runs a fleet of autonomous, cloud‑native automations via Netlify Scheduled Functions. Changes are committed back to the repo automatically.

## New cloud automations

- Knowledge Pack Runner: `/.netlify/functions/knowledge-pack-runner` — generates `public/automation/knowledge-pack.json` every 10 minutes.
- Adaptive Orchestrator: `/.netlify/functions/adaptive-orchestrator` — selectively triggers relevant functions based on recent changes, then syncs.

See the homepage for links and live triggers.