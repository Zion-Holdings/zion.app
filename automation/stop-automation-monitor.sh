#!/bin/bash

# Stop script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Stop the monitor
$CRON_SCRIPT stop

echo "Automation Monitor and Maintainer System stopped"
