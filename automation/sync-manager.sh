#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$DIR/.." && pwd)"
LOG_DIR="$DIR/logs"
mkdir -p "$LOG_DIR"
LOG_FILE="$LOG_DIR/sync-manager.log"

log() { echo "[$(date -u +%FT%TZ)] $*" | tee -a "$LOG_FILE"; }

while true; do
  log "🚀 Sync cycle start"
  (
    cd "$REPO_ROOT"
    NODE_ENV=production node automation/git-pull-rebase.cjs | tee -a "$LOG_FILE" || true
    NODE_ENV=production node automation/frontend-sync-orchestrator.cjs once | tee -a "$LOG_FILE" || true
    NODE_ENV=production node automation/advanced-git-sync.cjs | tee -a "$LOG_FILE" || true
    NODE_ENV=production node automation/sync-health-check.cjs --fix | tee -a "$LOG_FILE" || true
  )
  log "✅ Sync cycle complete; sleeping 10m"
  sleep 600
done


