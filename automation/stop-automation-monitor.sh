#!/bin/bash

# Automation Monitor and Maintainer Shutdown Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "🛑 Stopping Automation Monitor and Maintainer System..."

# Stop the system
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js stop

if [ $? -eq 0 ]; then
    echo "✅ System stopped successfully"
else
    echo "❌ Failed to stop system"
    exit 1
fi
