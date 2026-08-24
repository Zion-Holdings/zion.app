# Hermes Agent — Route Fix Plan

## Current broken live Hermes routes
- /hermes-agents/ -> 404
- /hermes-agents-services/ -> 404
- /services/hermes-agent/ -> 404
- /services/hermes-ai-agent-platform/ -> 404
- /services/hermes-agent-training/ -> 404
- /services/hermes-agent-growth-knowledge-hub/ -> 404
- /services/hermes-autonomous-workflow-agents/ -> 404
- /services/hermes-multi-agent-orchestration/ -> 404
- /services/hermes-growth-engine-agent/ -> 404
- /services/hermes-it-field-technician-sourcing/ -> 404
- /docs/hermes-agent-skills/ -> 404
- /docs/hermes-agent-architecture/ -> 404
- /docs/hermes-agent-profiles/ -> 404
- /docs/hermes-agent-mcp-integration/ -> 404
- /docs/hermes-agent-installation/ -> 404
- /blog/hermes-agent-self-improving-ai-platform/ -> 404
- /blog/hermes-agent-mcp-integration/ -> 404
- /blog/hermes-agent-multi-agent-swarm-orchestration/ -> 404
- /blog/hermes-agent-skills-system-deep-dive/ -> 404
- /blog/hermes-agents-complete-guide/ -> 404
- /blog/hermes-agents-vs-competitors-2026/ -> 404
- /case-studies/hermes-agent-fleet/ -> 404

## Fix plan
1. Confirm git commit includes all Hermes pages.
2. Trigger Pages deploy after backoff.
3. Re-crawl these routes and expect 200.
4. If still 404, inspect artifact/pages branch mismatch.

## Verification command
python3 -c "import requests; [print(p, requests.get('https://ziontechgroup.com'+p).status_code) for p in ['/hermes-agents/','/services/hermes-agent/','/docs/hermes-agent-skills/']]"
