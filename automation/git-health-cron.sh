#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
LOG_DIR="$REPO_ROOT/automation_logs"
LOCK_FILE="$REPO_ROOT/.git/.git-health-cron.lock"
LOG_FILE="$LOG_DIR/git-health-cron.log"

mkdir -p "$LOG_DIR"

now() { date -Is; }

# Prevent overlapping runs (stale after 10 minutes)
if [[ -f "$LOCK_FILE" ]]; then
  age=$(( $(date +%s) - $(date +%s -r "$LOCK_FILE") )) || age=0
  if [[ $age -lt 600 ]]; then
    echo "[git-health-cron $(now)] lock present, skipping" >> "$LOG_FILE"
    exit 0
  else
    rm -f "$LOCK_FILE" || true
  fi
fi

trap 'rm -f "$LOCK_FILE"' EXIT
printf "%s" "$$" > "$LOCK_FILE"

(
  echo "[git-health-cron $(now)] running fast health check"
  node "$REPO_ROOT/automation/git-health.cjs" --fast --fix || true
) >> "$LOG_FILE" 2>&1