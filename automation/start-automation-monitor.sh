#!/bin/bash

# Automation Monitor and Maintainer Startup Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "🚀 Starting Automation Monitor and Maintainer System..."

# Check if system is already running
if [ -f "$PROJECT_ROOT/automation-monitor.pid" ]; then
    PID=$(cat "$PROJECT_ROOT/automation-monitor.pid")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️ System is already running (PID: $PID)"
        exit 0
    else
        rm -f "$PROJECT_ROOT/automation-monitor.pid"
    fi
fi

# Start the system
cd "$PROJECT_ROOT"
node automation/launch-automation-monitor-and-maintainer.js start

if [ $? -eq 0 ]; then
    echo "✅ System started successfully"
else
    echo "❌ Failed to start system"
    exit 1
fi
