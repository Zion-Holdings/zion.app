#!/bin/bash

# Automation Monitor and Maintainer Shutdown Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Stopping Automation Monitor and Maintainer System..."

# Stop the system
$CRON_SCRIPT stop

# Wait a moment and check status
sleep 3
$CRON_SCRIPT status
