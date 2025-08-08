#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/linkedin-pro-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting LinkedIn Pro cron" | tee -a "$LOG_FILE"
(
  while true; do
    echo "[$(date -u +%FT%TZ)] 📣 LinkedIn Pro marketing cycle" | tee -a "$LOG_FILE"
    node "$DIR/linkedin-pro-orchestrator.cjs" || true
    sleep 21600
  done
) & echo $! > "$LOG_DIR/linkedin-pro-cron.pid"

echo "[$(date -u +%FT%TZ)] ✅ LinkedIn Pro cron running (PID $(cat "$LOG_DIR/linkedin-pro-cron.pid"))" | tee -a "$LOG_FILE"


