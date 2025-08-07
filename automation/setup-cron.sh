#!/bin/bash

# Setup script for Zion Tech Group Website Automation Cron Job

echo "🚀 Setting up Zion Tech Group Website Automation Cron Job"
echo "=================================================="

# Get the current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/cron-automation.sh"

# Make the cron script executable
chmod +x "$CRON_SCRIPT"

# Create the cron job entry (runs every 6 hours)
CRON_JOB="0 */6 * * * $CRON_SCRIPT"

# Check if cron job already exists
if crontab -l 2>/dev/null | grep -q "$CRON_SCRIPT"; then
    echo "ℹ️  Cron job already exists"
else
    # Add the cron job
    (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
    echo "✅ Cron job added successfully"
fi

# Display current cron jobs
echo ""
echo "📋 Current cron jobs:"
crontab -l

echo ""
echo "✅ Setup completed!"
echo "📝 The automation will run every 6 hours"
echo "📁 Logs will be saved to: $SCRIPT_DIR/logs/"
echo ""
echo "To manually run the automation:"
echo "  cd $PROJECT_DIR"
echo "  node automation/run-automation.js"
echo ""
echo "To stop the cron job:"
echo "  crontab -e"
echo "  (remove the line with $CRON_SCRIPT)" 