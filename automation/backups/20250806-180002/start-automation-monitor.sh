#!/bin/bash

# Automation Monitor and Maintainer Startup Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Starting Automation Monitor and Maintainer System..."

# Check if system is already running
if $CRON_SCRIPT status | grep -q "running"; then
    echo "System is already running"
    exit 0
fi

# Start the system
$CRON_SCRIPT start

# Wait a moment and check status
sleep 5
$CRON_SCRIPT status
