#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/dependency-maintenance-cron.log"

echo "[$(date -u +%FT%TZ)] 🚀 Starting dependency maintenance cron" | tee -a "$LOG_FILE"
(
  while true; do
    echo "[$(date -u +%FT%TZ)] 🔁 Running dependency update orchestrator" | tee -a "$LOG_FILE"
    node "$DIR/dependency-update-orchestrator.cjs" || true
    sleep 86400
  done
) & echo $! > "$LOG_DIR/dependency-maintenance-cron.pid"

#!/bin/bash
echo 'placeholder cron for dependency-maintenance-cron.sh'
