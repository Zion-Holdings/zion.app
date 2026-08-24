---
name: hermes-agent-site-operations
description: "Operational playbook for Zion Tech Group's Hermes Agent integration — plugins, cron, Bot Mode, A2A protocol, and site deployment."
---
# Hermes Agent Site Operations

**Domain:** `ziontechgroup.com` via `Zion-support/zion-support.github.io`
**Maintainer:** Zion Tech Group Engineering

## Overview

This skill covers the full lifecycle of operating Hermes Agent within the Zion Tech Group site repo — from plugin development and Bot Mode team deployment to cron automation, A2A protocol integration, and Next.js static export deployment.

## Current State

- **16,355 services** in `servicesData.json` (including 6 Hermes-specific services)
- **4,072 blog posts** in `blogPosts.json` (including 22 Hermes-related posts)
- **409 GitHub Actions workflows** (393 fixed 2026-08-12, 16 disabled)
- **13 cron jobs** delivering to `@ziontechgroup_agents` Telegram group
- **7 profiles**: `default`, `commercial_director`, `content_creator`, `marketing_director`, `service-validator`, `services_director`, `zion_ceo`
- Plugins enabled: `browser/browser_use`, `browser/firecrawl`, `cron_providers/chronos`, `disk-cleanup`, `google_meet`, `image_gen/fal`, `image_gen/openai`, `image_gen/openrouter`, `observability/langfuse`

## Plugin Development

### Creating a Plugin

```bash
mkdir -p ~/.hermes/plugins/my-plugin/
touch ~/.hermes/plugins/my-plugin/plugin.yaml
touch ~/.hermes/plugins/my-plugin/__init__.py
```

**plugin.yaml:**
```yaml
name: my-plugin
version: "1.0"
description: My custom Hermes plugin
requires_env:
  - MY_API_KEY
```

**__init__.py:**
```python
import json

def register(ctx):
    schema = {
        "name": "my_tool",
        "description": "What the tool does",
        "parameters": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search term"}
            }
        }
    }

    def handler(params, **kwargs):
        query = params.get("query", "")
        result = my_logic(query)
        return json.dumps({"success": True, "result": result})

    ctx.register_tool(
        name="my_tool",
        toolset="my_tools",
        schema=schema,
        handler=handler
    )
```

### Built-in Plugin Catalog

| Plugin | Type | Enable Command |
|--------|------|---------------|
| `browser/browser_use` | Browser automation | `hermes plugins enable browser/browser_use` |
| `browser/firecrawl` | Web scraping/API | `hermes plugins enable browser/firecrawl` |
| `cron_providers/chronos` | Cron scheduler | `hermes plugins enable cron_providers/chronos` |
| `disk-cleanup` | Temp file cleanup | `hermes plugins enable disk-cleanup` |
| `google_meet` | Meeting transcription | `hermes plugins enable google_meet` |
| `image_gen/fal` | FLUX image gen | `hermes plugins enable image_gen/fal` |
| `image_gen/openai` | DALL·E image gen | `hermes plugins enable image_gen/openai` |
| `observability/langfuse` | LLM observability | `hermes plugins enable observability/langfuse` |

## Bot Mode Operations

### Creating a Bot

1. Open Hermes Desktop → Bots pane → "New Agent"
2. Name, Title, Description (quick path)
3. Advanced: Clone from profile, model pin, custom SOUL.md, per-skill/per-toolset enablement

### Bot-to-Bot Messaging

```bash
# @mention in any chat
@researcher summarize latest findings

# Direct bot DM via CLI
hermes -p researcher chat --in ~ -c "Bot Chat" --create-if-missing -Q --query-file /tmp/dm.txt

# Cross-machine peer
hermes peer add spark --url http://spark.lan:8377 --key <API_SERVER_KEY>
hermes peer dm spark < /tmp/dm.txt
```

### Bot Routines

Routines are cron jobs namespaced `[bot:<name>] <routine>`. They appear in `hermes cron list` and land in the Bot's own chat history.

## A2A Protocol Integration

The Agent-to-Agent (A2A) v1.0 plugin enables:
- Agent discovery via Agent Cards
- Bidirectional A2A communication
- Cross-network agent bridging (Tailscale, VPN, LAN)
- Langfuse observability for A2A conversations

## Zion Tech Plugin

The `zion-tech-platform` plugin (`.hermes/plugins/zion-tech-platform/`) provides:

| Tool | Description |
|------|-------------|
| `zion_service_lookup` | Query the 16K+ service catalog |
| `zion_blog_lookup` | Search 4K+ blog posts |
| `zion_check_routes` | Verify sitemap.xml routes |

## Cron Jobs

All 13 cron jobs deliver to `@ziontechgroup_agents` (Telegram: `-1003886112318`).

**Key job:** `0bb7904cc483` — `agent-task-delegator.py` with `no_agent=true`, delivers to `@ziontechgroup_agents`.

Configuration: `no_agent=true` + `monitor_script` for state-change-only alerting prevents 90s timeouts.

## Build & Deployment

### Next.js Static Export

```bash
npm run build    # Uses NEXT_TURBOPACK_USE_WORKER=0 + 8GB NODE_OPTIONS
npm run generate-sitemap
```

**Known issue:** 16K+ service directories + 18MB `servicesData.json` causes OOM. Fixes:
- `dynamicParams: false` in route.ts
- Limit `generateStaticParams` to 200
- Use trimmed JSON (`servicesData_trimmed.json`)
- `output: 'export'` in next.config.mjs

### GitHub Actions

- 409 workflows total, 410th being added
- 393 fixed 2026-08-12 with `dynamicParams:false + 8GB + 60min timeout`
- Auto-commit to main via background process (`ziggy`) — always `git fetch + rebase` before push

## Quick Commands

```bash
# Check config
hermes config check && hermes config migrate

# List jobs
hermes cron list

# Run job now
hermes cron run <job_id>

# Verify services
python3 scripts/_svc_test.py

# Regenerate sitemap
npm run generate-sitemap

# Type-check
npm run type-check

# Build
npm run build
```
