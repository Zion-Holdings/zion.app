#!/usr/bin/env bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/husky-health-cron.log"

run_once(){
  echo "[$(date -u +%FT%TZ)] 🔁 Husky health tick" | tee -a "$LOG_FILE"
  bash "$DIR/../scripts/husky-health-check.sh" | tee -a "$LOG_FILE" || true
}

case "${1:-start}" in
  start)
    echo "[$(date -u +%FT%TZ)] 🚀 Starting husky health cron" | tee -a "$LOG_FILE"
    ( while true; do run_once; sleep 3600; done ) & echo $! > "$LOG_DIR/husky-health-cron.pid"
    ;;
  stop)
    if [ -f "$LOG_DIR/husky-health-cron.pid" ]; then
      kill "$(cat "$LOG_DIR/husky-health-cron.pid")" || true
      rm -f "$LOG_DIR/husky-health-cron.pid"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ℹ️ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  status)
    if [ -f "$LOG_DIR/husky-health-cron.pid" ] && ps -p "$(cat "$LOG_DIR/husky-health-cron.pid")" >/dev/null 2>&1; then
      echo "[$(date -u +%FT%TZ)] ✅ Running (PID $(cat "$LOG_DIR/husky-health-cron.pid"))" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ❌ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  run)
    run_once ;;
  *)
    echo "Usage: $0 {start|stop|status|run}" ; exit 1 ;;
 esac