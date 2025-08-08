#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
NODE_BIN="$(command -v node || true)"

if [[ -z "$NODE_BIN" ]]; then
  echo "Node.js is required. Please install Node.js >= 20."
  exit 1
fi

RUN_CMD="$NODE_BIN $PROJECT_ROOT/automation/infinite-improvement-runner.cjs >> $PROJECT_ROOT/automation/logs/infinite.log 2>&1"

case "${1:-install}" in
  install)
    tmpfile=$(mktemp)
    crontab -l > "$tmpfile" 2>/dev/null || true
    # Remove existing lines for this project
    sed -i "/infinite-improvement-runner.cjs/d" "$tmpfile"
    # Every 30 minutes
    echo "*/30 * * * * cd $PROJECT_ROOT && $RUN_CMD" >> "$tmpfile"
    crontab "$tmpfile"
    rm -f "$tmpfile"
    echo "Installed cron: runs every 30 minutes."
    ;;
  remove)
    tmpfile=$(mktemp)
    crontab -l > "$tmpfile" 2>/dev/null || true
    sed -i "/infinite-improvement-runner.cjs/d" "$tmpfile"
    crontab "$tmpfile"
    rm -f "$tmpfile"
    echo "Removed cron entry."
    ;;
  run)
    eval "$RUN_CMD"
    ;;
  *)
    echo "Usage: $0 [install|remove|run]"
    exit 2
    ;;

esac