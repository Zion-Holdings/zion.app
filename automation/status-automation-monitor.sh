#!/bin/bash

# Automation Monitor and Maintainer Status Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "📊 Automation Monitor and Maintainer System Status"
echo "=================================================="

# Check system status
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js status

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ System is running"
else
    echo ""
    echo "❌ System is not running"
fi
