# Agent Coordination — Key Contacts & Escalation Paths
# Created 2026-08-21 from active deployment session

## Human Operators
- **Kleber Garcia Alcatrão** — CEO, Zion Tech Group
  - Telegram: @KleberGarciaAlcatrao (DM chat ID `8435383377`)
  - Email: kleber@ziontechgroup.com
  - WhatsApp: +1 302 464 0950
  - Role: Final escalation, strategic decisions, outreach approval

## Active Agent Profiles (Hermes)
- `agent-grower` — Growth outreach, lead generation, market expansion
- `agent-researcher` — Deep research, market analysis, competitor intelligence
- `agent-writer` — Content and communication
- `agent-dev` — Software development, deploys, infrastructure
- `agent-orchestrator` — Task decomposition, routing, coordination (conductor role)

## Telegram Group
- **@ZIONTECHGROUP_AGENTS** / `t.me/ziontechgroup_agents`
- Chat ID: `-1003886112318`
- Purpose: Coordination hub for all agents + human operators
- Note: Telegram Bot API `sendMessage` to this chat ID returns `404` from agent context — agents must deliver coordination messages via the human operator (Kleber) pasting them manually

## Key Repos & Paths
- Canonical site repo: `/Users/miami2/zion-support.github.io` (also accessible as `~/zion-support.github.io`)
- GitHub: `github.com/Zion-support/zion-support.github.io`
- Live site: `https://ziontechgroup.com`

## Escalation Rules
- P0 with no pickup in 15 min → @mention Kleber in group
- P1 stalled >30 min → re-dispatch with `@TargetAgent ❌ STALLED`
- Any agent blocked → post BLOCKER immediately, do not wait
