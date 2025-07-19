#!/bin/bash

# Zion App Automation Status Script
# This script shows the status of all automation jobs

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🚀 Zion App Automation Status"
echo "=============================="
echo "Project: $PROJECT_PATH"
echo "Time: $(date)"
echo ""

# Check if cron jobs are installed
echo "📋 Cron Jobs Status:"
if crontab -l 2>/dev/null | grep -q "zion-app-automation"; then
    echo "✅ Automation cron jobs are installed"
    echo ""
    echo "📅 Scheduled Jobs:"
    crontab -l 2>/dev/null | grep -E "(zion-app-automation|master-automation)" | while read -r line; do
        echo "   $line"
    done
else
    echo "❌ Automation cron jobs are not installed"
fi

echo ""
echo "📊 Recent Logs:"
echo "==============="

# Check recent log files
for logfile in logs/cron-*.log; do
    if [ -f "$logfile" ]; then
        echo ""
        echo "📄 $(basename "$logfile"):"
        echo "   Last modified: $(stat -f "%Sm" "$logfile" 2>/dev/null || stat -c "%y" "$logfile" 2>/dev/null)"
        echo "   Size: $(du -h "$logfile" | cut -f1)"
        echo "   Last 3 lines:"
        tail -3 "$logfile" 2>/dev/null | sed 's/^/     /' || echo "     (empty or unreadable)"
    fi
done

echo ""
echo "🏥 Health Check:"
echo "================"

# Check if the app is running
if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ App is running and responding"
    HEALTH_RESPONSE=$(curl -s http://localhost:3001/api/health)
    echo "   Response: $HEALTH_RESPONSE"
else
    echo "❌ App is not responding"
fi

echo ""
echo "📈 Automation Summary:"
echo "======================"

# Check automation summary if it exists
if [ -f "automation/scheduler-summary.json" ]; then
    echo "✅ Automation summary available:"
    cat automation/scheduler-summary.json | jq -r '. | "   Total Cycles: \(.totalCycles)\n   Success Rate: \(.successRate)%\n   Last Run: \(.lastRun)\n   Next Run: \(.nextRun)"' 2>/dev/null || echo "   (summary file exists but cannot be parsed)"
else
    echo "❌ No automation summary available"
fi

# Check scheduler health if it exists
if [ -f "automation/scheduler-health.json" ]; then
    echo ""
    echo "🏥 Scheduler Health:"
    echo "==================="
    cat automation/scheduler-health.json | jq -r '. | "   Status: \(if .isRunning then "Running" else "Stopped" end)\n   Last Run: \(.lastRun)\n   Next Run: \(.nextRun)\n   Success Rate: \(.successRate)%"' 2>/dev/null || echo "   (health file exists but cannot be parsed)"
fi

echo ""
echo "🔧 Quick Commands:"
echo "=================="
echo "   View all logs: tail -f logs/cron-*.log"
echo "   Check cron jobs: crontab -l"
echo "   Remove automation jobs: ./scripts/remove-cron-automation.sh"
echo "   Start manual automation: ./scripts/start-master-automation.sh"
echo "   View master scheduler logs: tail -f logs/master-automation-scheduler.log" 