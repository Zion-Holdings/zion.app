#!/bin/bash

# Startup script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Start the monitor
$CRON_SCRIPT start

# Show status
$CRON_SCRIPT status
