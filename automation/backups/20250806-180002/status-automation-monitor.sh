#!/bin/bash

# Automation Monitor and Maintainer Status Script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CRON_SCRIPT="$SCRIPT_DIR/cron-jobs/automation-monitor-and-maintainer-cron.sh"

echo "Automation Monitor and Maintainer System Status"
echo "=============================================="

$CRON_SCRIPT status

echo ""
echo "Recent Health Reports:"
echo "====================="
if [[ -d "$SCRIPT_DIR/health-reports" ]]; then
    ls -la "$SCRIPT_DIR/health-reports" | tail -5
else
    echo "No health reports found"
fi

echo ""
echo "Recent Error Logs:"
echo "================="
if [[ -d "$SCRIPT_DIR/error-logs" ]]; then
    ls -la "$SCRIPT_DIR/error-logs" | tail -5
else
    echo "No error logs found"
fi
