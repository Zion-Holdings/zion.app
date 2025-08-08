#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/spec-dev-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting spec-dev cron" | tee -a "$LOG_FILE"
( while true; do
  echo "[$(date -u +%FT%TZ)] 🧩 Spec-dev cycle" | tee -a "$LOG_FILE"
  node "$DIR/spec-dev-orchestrator.cjs" || true
  sleep 7200
done ) & echo $! > "$LOG_DIR/spec-dev-cron.pid"

