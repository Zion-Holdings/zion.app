#!/bin/bash

# Check Project Development Automation System Status

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "📊 Project Development Automation System Status:"
echo "================================================"

# Check if factory is running
if pgrep -f "project-development-autonomous-factory.js" > /dev/null; then
    echo "✅ Factory: Running"
else
    echo "❌ Factory: Not running"
fi

# Check cron job status
./cron-jobs/project-development-automation-cron.sh status

echo ""
echo "📈 Recent Activity:"
echo "=================="
tail -10 "$SCRIPT_DIR/project-development-logs/project-development.log" 2>/dev/null || echo "No logs found"

echo ""
echo "📊 System Health:"
echo "================"
echo "CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}')"
echo "Memory Usage: $(top -l 1 | grep "PhysMem" | awk '{print $2}')"
echo "Disk Usage: $(df -h . | tail -1 | awk '{print $5}')"
