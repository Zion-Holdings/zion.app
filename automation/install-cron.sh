#!/usr/bin/env bash
set -euo pipefail

CMD=${1:-install}
PROJECT_ROOT="$(cd "$(dirname "$0")"/.. && pwd)"
NODE_BIN="$(command -v node)"
LOGS_DIR="$PROJECT_ROOT/automation/logs"
TAG="# zion.app-automation"

mkdir -p "$LOGS_DIR"

function cron_current() { crontab -l 2>/dev/null || true; }

function install() {
  local tmp
  tmp=$(mktemp)
  cron_current | grep -v "$TAG" > "$tmp"

  # Every 15 minutes: scan logs and remediate
  echo "*/15 * * * * cd $PROJECT_ROOT && $NODE_BIN automation/log-monitor.cjs >> $LOGS_DIR/cron.log 2>&1 $TAG" >> "$tmp"

  # Every hour: run auto-health monitor once
  echo "0 * * * * cd $PROJECT_ROOT && $NODE_BIN automation/auto-health-monitor/index.mjs >> $LOGS_DIR/auto-health-cron.log 2>&1 $TAG" >> "$tmp"

  crontab "$tmp"
  rm -f "$tmp"
  echo "Cron jobs installed."
}

function remove() {
  local tmp
  tmp=$(mktemp)
  cron_current | grep -v "$TAG" > "$tmp"
  crontab "$tmp"
  rm -f "$tmp"
  echo "Cron jobs removed."
}

function status() {
  echo "Current crontab:"
  cron_current | sed -e "s|$PROJECT_ROOT|<PROJECT_ROOT>|g" | cat
}

case "$CMD" in
  install) install ;;
  remove) remove ;;
  status) status ;;
  *) echo "Usage: $0 {install|remove|status}"; exit 1 ;;
esac