#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/alignment-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting alignment cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🔁 Alignment cycle" | tee -a "$LOG_FILE"
  node "$DIR/alignment-orchestrator.cjs" || true
  sleep 3600
done ) & echo $! > "$LOG_DIR/alignment-cron.pid"

