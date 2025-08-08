#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/site-maintenance-cron.log"

run_once() {
  echo "[$(date -u +%FT%TZ)] 🔧 Site maintenance cron tick" | tee -a "$LOG_FILE"
  node "$DIR/site-maintenance-orchestrator.cjs" || true
}

case "${1:-start}" in
  start)
    echo "[$(date -u +%FT%TZ)] 🚀 Starting site maintenance cron" | tee -a "$LOG_FILE"
    (
      while true; do
        run_once
        # default cadence: every 6 hours
        sleep 21600
      done
    ) & echo $! > "$LOG_DIR/site-maintenance-cron.pid"
    ;;
  stop)
    if [ -f "$LOG_DIR/site-maintenance-cron.pid" ]; then
      kill "$(cat "$LOG_DIR/site-maintenance-cron.pid")" || true
      rm -f "$LOG_DIR/site-maintenance-cron.pid"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ℹ️ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  status)
    if [ -f "$LOG_DIR/site-maintenance-cron.pid" ] && ps -p "$(cat "$LOG_DIR/site-maintenance-cron.pid")" >/dev/null 2>&1; then
      echo "[$(date -u +%FT%TZ)] ✅ Running (PID $(cat "$LOG_DIR/site-maintenance-cron.pid"))" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ❌ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  run)
    run_once ;;
  *)
    echo "Usage: $0 {start|stop|status|run}" ; exit 1 ;;
esac


