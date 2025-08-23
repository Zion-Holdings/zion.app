#!/usr/bin/env bash
# Auto-Ops Cron Manager
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
NODE_CMD="node $PROJECT_ROOT/automation/auto-ops/orchestrator.cjs >> $PROJECT_ROOT/automation/auto-ops/cron.log 2>&1"
CRON_LINE="*/30 * * * * cd $PROJECT_ROOT && CI=1 $NODE_CMD"

ensure_cron() {
  mkdir -p "$PROJECT_ROOT/automation/auto-ops"
  touch "$PROJECT_ROOT/automation/auto-ops/cron.log"
}

case "${1:-}" in
  start)
    ensure_cron
    # Install or update cron entry
    (crontab -l 2>/dev/null | grep -v -F "$NODE_CMD"; echo "$CRON_LINE") | crontab -
    echo "Auto-Ops cron installed to run every 30 minutes."
    ;;
  stop)
    # Remove cron entry
    (crontab -l 2>/dev/null | grep -v -F "$NODE_CMD") | crontab - || true
    echo "Auto-Ops cron removed."
    ;;
  status)
    echo "Current crontab:" && crontab -l 2>/dev/null | cat || echo "(no crontab)"
    ;;
  run)
    ensure_cron
    bash -lc "$CRON_LINE" &
    echo "Auto-Ops orchestrator started once in background."
    ;;
  *)
    echo "Usage: $0 {start|stop|status|run}"
    exit 1
    ;;
 esac