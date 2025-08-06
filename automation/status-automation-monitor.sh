#!/bin/bash

# Status script for Automation Monitor and Maintainer System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-cron.sh"

# Show status
$CRON_SCRIPT status
