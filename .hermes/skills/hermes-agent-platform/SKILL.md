---
name: hermes-agent-platform
description: "Hermes Agent platform specialist: configure, extend, and operate Hermes Agent instances, skills, cron, providers, and site integrations for ziontechgroup.com."
---

# Hermes Agent Platform Specialist

Use when operating Hermes Agent itself: setup, skills, cron, providers, site content, and multi-agent coordination.

## Triggers
- Configure Hermes Agent
- Create/update Hermes skills
- Manage Hermes cron jobs
- Operate ziontechgroup.com Hermes sections
- Coordinate @ziontechgroup_agents

## Core Loop
1. Read ~/.hermes/config.yaml and current cron jobs
2. Verify skill directory contents
3. Check provider auth state
4. Run required site/cron checks
5. Fix or extend platform
6. Document changes in docs/HERMES-AGENT-INSTRUCTIONS.md

## Site Integration
- Ensure /hermes-agents/, /services/hermes-*, /docs/hermes-agent-* are live
- Verify JSON-LD + canonical on every Hermes page
- Update public/sitemap.xml after structural changes
- Fix broken Hermes routes immediately

## Quality Gates
- No broken Hermes routes (200 only)
- All skills loadable via skill_view
- All cron jobs enabled or explicitly paused
- All provider refs valid in config.yaml
