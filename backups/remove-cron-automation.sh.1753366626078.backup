#!/bin/bash

# Remove Cron Automation Script
# This script removes all Zion app automation cron jobs

set -e

echo "🛑 Removing Zion App automation cron jobs..."

# Get current cron jobs excluding our automation jobs
TEMP_CRON=$(mktemp)
crontab -l 2>/dev/null | grep -v "zion-app-automation" | grep -v "master-automation" | grep -v "rotate-automation-logs" > "$TEMP_CRON" || true

# Install the filtered cron jobs
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

echo "✅ Automation cron jobs removed successfully"
echo "📋 Remaining cron jobs:"
crontab -l 2>/dev/null || echo "   (no cron jobs)"
