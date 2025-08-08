#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/netlify-monitor.log"
PID_FILE="$LOG_DIR/netlify-monitor.pid"

INTERVAL_DEFAULT=60

run_once(){
  echo "[$(date -u +%FT%TZ)] 🔎 Netlify monitor tick" | tee -a "$LOG_FILE"
  node "$DIR/netlify-status-checker.cjs" || true
}

case "${1:-start}" in
  start)
    INTERVAL="${2:-$INTERVAL_DEFAULT}"
    echo "[$(date -u +%FT%TZ)] 🚀 Starting Netlify monitor every ${INTERVAL}s" | tee -a "$LOG_FILE"
    ( while true; do run_once; sleep "$INTERVAL"; done ) & echo $! > "$PID_FILE"
    ;;
  stop)
    if [ -f "$PID_FILE" ]; then
      kill "$(cat "$PID_FILE")" || true
      rm -f "$PID_FILE"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped Netlify monitor" | tee -a "$LOG_FILE"
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
    echo "Usage: $0 {start|stop|status|run} [interval_seconds]" ; exit 1 ;;
 esac