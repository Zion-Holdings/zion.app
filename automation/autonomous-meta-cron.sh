#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/autonomous-meta-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting Autonomous Meta cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] ♻️ Meta cycle" | tee -a "$LOG_FILE"
  node "$DIR/autonomous-meta-orchestrator.cjs" once || true
  sleep 900
done ) & echo $! > "$LOG_DIR/autonomous-meta-cron.pid"