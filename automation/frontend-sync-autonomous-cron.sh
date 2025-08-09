#!/usr/bin/env bash

set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$DIR/logs"
LOG_FILE="$LOG_DIR/frontend-sync-autonomous-cron.log"

mkdir -p "$LOG_DIR"

echo "["$(date -u +%FT%TZ)"] Starting autonomous frontend sync cron run" | tee -a "$LOG_FILE"
node "$DIR/frontend-sync-autonomous-orchestrator.cjs" once 0 | tee -a "$LOG_FILE" || true

echo "["$(date -u +%FT%TZ)"] Completed autonomous frontend sync cron run" | tee -a "$LOG_FILE"