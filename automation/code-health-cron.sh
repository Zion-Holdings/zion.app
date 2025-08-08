#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/code-health-cron.log"

run_once(){
  echo "[$(date -u +%FT%TZ)] 🔁 Code health cron tick" | tee -a "$LOG_FILE"
  node "$DIR/code-health-orchestrator.cjs" check --build || node "$DIR/code-health-orchestrator.cjs" fix || true
}

case "${1:-start}" in
  start)
    echo "[$(date -u +%FT%TZ)] 🚀 Starting code-health cron" | tee -a "$LOG_FILE"
    ( while true; do run_once; sleep "${CODE_HEALTH_CRON_INTERVAL_SECONDS:-600}"; done ) & echo $! > "$LOG_DIR/code-health-cron.pid"
    ;;
  stop)
    if [ -f "$LOG_DIR/code-health-cron.pid" ]; then
      kill "$(cat "$LOG_DIR/code-health-cron.pid")" || true
      rm -f "$LOG_DIR/code-health-cron.pid"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ℹ️ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  status)
    if [ -f "$LOG_DIR/code-health-cron.pid" ] && ps -p "$(cat "$LOG_DIR/code-health-cron.pid")" >/dev/null 2>&1; then
      echo "[$(date -u +%FT%TZ)] ✅ Running (PID $(cat "$LOG_DIR/code-health-cron.pid"))" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ❌ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  run)
    run_once ;;
  *)
    echo "Usage: $0 {start|stop|status|run}" ; exit 1 ;;

esac