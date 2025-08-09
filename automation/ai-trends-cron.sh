#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/ai-trends-cron.log"

run_cycle() {
  echo "[$(date -u +%FT%TZ)] 🔎 Running AI trends researcher" | tee -a "$LOG_FILE"
  node "$DIR/ai-trends-researcher.cjs" || true
  echo "[$(date -u +%FT%TZ)] 🧪 Generating innovation agents" | tee -a "$LOG_FILE"
  node "$DIR/innovation-orchestrator.cjs" || true
}

case "${1:-start}" in
  start)
    echo "[$(date -u +%FT%TZ)] 🚀 Starting AI trends cron" | tee -a "$LOG_FILE"
    (
      while true; do
        run_cycle
        sleep 1800
      done
    ) & echo $! > "$LOG_DIR/ai-trends-cron.pid"
    ;;
  run)
    run_cycle
    ;;
  stop)
    if [ -f "$LOG_DIR/ai-trends-cron.pid" ]; then
      kill "$(cat "$LOG_DIR/ai-trends-cron.pid")" || true
      rm -f "$LOG_DIR/ai-trends-cron.pid"
      echo "[$(date -u +%FT%TZ)] 🛑 Stopped AI trends cron" | tee -a "$LOG_FILE"
    else
      echo "No PID found"
    fi
    ;;
  status)
    if [ -f "$LOG_DIR/ai-trends-cron.pid" ]; then
      echo "Running with PID $(cat "$LOG_DIR/ai-trends-cron.pid")"
    else
      echo "Not running"
    fi
    ;;
  *)
    echo "Usage: $0 {start|run|stop|status}"
    exit 1
    ;;

esac