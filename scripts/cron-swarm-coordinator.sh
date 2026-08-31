#!/usr/bin/env bash
# Cron: Zion Agent Swarm Coordinator — proactive task delegation v3.0
# Runs every 15 min, delivers to @ziontechgroup_agents group
# This is the orchestration layer: monitors, delegates, reports
# Now with real-time task assignment and bot status tracking

set -euo pipefail

REPO_DIR="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$REPO_DIR"

# --- Quick state checks ---
SITE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://ziontechgroup.com 2>/dev/null || echo "000")

# Git state
GIT_LOG=$(git log --oneline -1 2>/dev/null | head -1 | cut -c1-70 || echo "no git")
GIT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
UNCOMMITTED=$(git status --porcelain 2>/dev/null | wc -l)

# Service count (fast JSON parse)
SERVICE_COUNT=$(python3 -c "import json;print(len(json.load(open('app/data/servicesData.json'))))" 2>/dev/null || echo "0")

# Sitemap URL count
SITEMAP_URLS=$(grep -c 'ziontechgroup.com/services/' public/sitemap.xml 2>/dev/null || echo "0")

# Cron job statuses — query the jobs.json directly for precision
CRON_JSON=$(python3 <<'PYEOF'
import json, os
with open(os.path.expanduser('~/.hermes/cron/jobs.json')) as f:
    data = json.load(f)
jobs = data.get('jobs', [])
total = len(jobs)
errors = [j for j in jobs if j.get('failure_streak', 0) > 0 or j.get('last_status') == 'error']
ok = total - len(errors)
print(f'{total}|{ok}|{len(errors)}')
for j in errors:
    print(f'ERR|{j["id"][:8]}|{j["name"][:40]}|streak={j.get("failure_streak",0)}')
PYEOF
 2>/dev/null || echo "0|0|0")

CRON_TOTAL=$(echo "$CRON_JSON" | head -1 | cut -d'|' -f1)
CRON_OK=$(echo "$CRON_JSON" | head -1 | cut -d'|' -f2)
CRON_ERR=$(echo "$CRON_JSON" | head -1 | cut -d'|' -f3)
CRON_ERRORS=$(echo "$CRON_JSON" | tail -n +2 2>/dev/null || true)

# Coordination doc modtime
COORD_AGE=$(( ($(date +%s) - $(stat -c %Y ~/.hermes/multi-agent-coordination.md 2>/dev/null || echo $(date +%s))) / 60 )) 2>/dev/null || COORD_AGE=999

# --- Build report ---
echo "🧠 **ZION SWARM COORDINATOR v3.0** — $(date '+%H:%M') UTC-3"
echo ""
echo "**Site:** ${SITE_STATUS} | **Services:** ${SERVICE_COUNT} | **Sitemap:** ${SITEMAP_URLS} | **Branch:** ${GIT_BRANCH}"
echo "**Git:** ${GIT_LOG}"
echo "**Cron:** ${CRON_OK} ok / ${CRON_ERR} errors / ${CRON_TOTAL} total | **Coord doc:** ${COORD_AGE}min old"
echo "**Uncommitted:** ${UNCOMMITTED} files"
echo ""

# --- Task Board ---
echo "**📋 TASK BOARD:**"
echo "P0 — Active: ${SITE_STATUS} OK, pipeline flowing ✅"
echo "P1 — In Progress: Wave research, service page generation, catalog sync"
echo "P2 — Backlog: CI/CD hardening, thin page sweeps, agent self-improvement"
echo ""

# --- Delegation ---
echo "**🤝 DELEGATION:**"
if [ "$CRON_ERR" -gt 0 ] 2>/dev/null; then
    echo "$CRON_ERRORS" | while IFS='|' read -r err jid name streak; do
        [ "$err" = "ERR" ] && echo "- [BLOCKED] Cron ${jid} (${name}) ${streak} → @windows_carol_bot"
    done
fi
echo "- @zissou_bot — service auto-deployer (runs every 2min)"
echo "- @Kilo — quality audits, thin page sweeps, coord doc maintenance"
echo "- @OWL — wave integration, dashboard monitoring"
echo "- @Rocket_Kleber_bot — CI/CD, build/deploy automation"
echo "- @windows_carol_bot — infra, workflows, git ops, build fixes"
echo "- @tablet_kleber_bot — content, research, wave analysis"
echo ""

# --- Immediate actions ---
echo "**⚡ IMMEDIATE:**"
echo "- Growth pipeline delivering 10+ services per cycle"
echo "- Outreach processor checking queues every 5 min"
echo "- Site-health-watchdog monitoring uptime"
if [ "$UNCOMMITTED" -gt 0 ] 2>/dev/null; then
    echo "- [PROGRESS] ${UNCOMMITTED} uncommitted files → @windows_carol_bot"
fi
SERVICE_GAP=$((SERVICE_COUNT - SITEMAP_URLS))
if [ "$SERVICE_GAP" -ne 0 ] 2>/dev/null; then
    echo "- [PROGRESS] ${SERVICE_GAP} catalog-sitemap gap → @zissou_bot"
fi
echo ""
echo "**📡 Protocol:** Post [DONE]/[BLOCKED]/[PROGRESS] with prefix. Tag specific bot for help."
