#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$DIR/../.." && pwd)"
LOG_DIR="$ROOT/automation/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/supervisor-cron.log"
PID_FILE="$LOG_DIR/supervisor-cron.pid"

run_once(){
  echo "[$(date -u +%FT%TZ)] 🔁 Supervisor cron tick" | tee -a "$LOG_FILE"
  node "$DIR/supervisor-orchestrator.cjs" run-once || true
}

case "${1:-start}" in
  start)
    echo "[$(date -u +%FT%TZ)] 🚀 Starting supervisor cron" | tee -a "$LOG_FILE"
    ( while true; do run_once; sleep 180; done ) & echo $! > "$PID_FILE"
    ;;
  stop)
    if [ -f "$PID_FILE" ]; then
      kill "$(cat "$PID_FILE")" || true
      rm -f "$PID_FILE"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ℹ️ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  status)
    if [ -f "$PID_FILE" ] && ps -p "$(cat "$PID_FILE")" >/dev/null 2>&1; then
      echo "[$(date -u +%FT%TZ)] ✅ Running (PID $(cat "$PID_FILE"))" | tee -a "$LOG_FILE"
    else
      echo "[$(date -u +%FT%TZ)] ❌ Not running" | tee -a "$LOG_FILE"
    fi
    ;;
  run)
    run_once ;;
  *)
    echo "Usage: $0 {start|stop|status|run}" ; exit 1 ;;

esac