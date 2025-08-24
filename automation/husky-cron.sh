#!/usr/bin/env bash
set -euo pipefail

COMMAND="${1:-status}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CHECK_SCRIPT="$REPO_ROOT/scripts/husky-health-check.sh"
REPAIR_SCRIPT="$REPO_ROOT/scripts/husky-repair.sh"
LOG_DIR="$REPO_ROOT/.logs"
LOG_FILE="$LOG_DIR/husky-cron.log"
MARKER="# HUSKY_CRON_MARKER $REPO_ROOT"

mkdir -p "$LOG_DIR"

ensure_cron_installed() {
  command -v crontab >/dev/null 2>&1 || {
    echo "crontab command not available on this system.";
    exit 1;
  }
}

current_cron() { crontab -l 2>/dev/null || true; }

case "$COMMAND" in
  start)
    ensure_cron_installed
    LINE="*/5 * * * * cd $REPO_ROOT && bash $CHECK_SCRIPT || bash $REPAIR_SCRIPT >> $LOG_FILE 2>&1 $MARKER"
    if current_cron | grep -Fq "$MARKER"; then
      echo "Cron already installed"
      exit 0
    fi
    (current_cron; echo "$LINE") | crontab -
    echo "Cron installed: runs every 5 minutes"
    ;;
  stop)
    ensure_cron_installed
    TMP="$(mktemp)"
    current_cron | grep -Fv "$MARKER" > "$TMP"
    crontab "$TMP"
    rm -f "$TMP"
    echo "Cron entry removed"
    ;;
  status)
    if current_cron | grep -Fq "$MARKER"; then
      echo "Cron is installed"
      current_cron | grep -F "$MARKER"
    else
      echo "Cron is not installed"
    fi
    ;;
  run)
    (bash "$CHECK_SCRIPT" && echo "ok") || (echo "check failed; attempting repair"; bash "$REPAIR_SCRIPT")
    ;;
  *)
    echo "Usage: $0 {start|stop|status|run}"
    exit 2
    ;;

esac