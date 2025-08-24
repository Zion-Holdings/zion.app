#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/blog-automation-cron.log"
PID_FILE="$LOG_DIR/blog-automation-cron.pid"

case "${1:-run}" in
  start)
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      echo "Blog automation cron already running (PID $(cat "$PID_FILE"))"
      exit 0
    fi
    echo "[$(date -u +%FT%TZ)] 🚀 Starting blog automation cron" | tee -a "$LOG_FILE"
    (
      while true; do
        echo "[$(date -u +%FT%TZ)] ✍️  Generating weekly blog + newsletter" | tee -a "$LOG_FILE"
        node "$DIR/blog-automation-orchestrator.cjs" || true
        # Weekly cadence (7 days)
        sleep $((7*24*60*60))
      done
    ) & echo $! > "$PID_FILE"
    ;;
  stop)
    if [ -f "$PID_FILE" ]; then
      kill "$(cat "$PID_FILE")" 2>/dev/null || true
      rm -f "$PID_FILE"
      echo "Stopped blog automation cron"
    else
      echo "No blog automation cron PID file found"
    fi
    ;;
  status)
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      echo "Blog automation cron running (PID $(cat "$PID_FILE"))"
    else
      echo "Blog automation cron not running"
    fi
    ;;
  run)
    node "$DIR/blog-automation-orchestrator.cjs"
    ;;
  *)
    echo "Usage: $0 {start|stop|status|run}"
    exit 1
    ;;

esac