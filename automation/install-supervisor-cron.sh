#!/bin/bash
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
SUPERVISOR="$DIR/supervisor/supervisor-cron.sh"

if [ ! -f "$SUPERVISOR" ]; then
  echo "Error: supervisor cron script not found at $SUPERVISOR" >&2
  exit 1
fi

( crontab -l 2>/dev/null | grep -v "supervisor-cron.sh" ; echo "*/5 * * * * bash $SUPERVISOR run >> /workspace/automation/logs/supervisor-crontab.log 2>&1" ) | crontab -
echo "✅ Installed crontab to run supervisor every 5 minutes"