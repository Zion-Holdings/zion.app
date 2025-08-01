#!/bin/bash

# Setup Cron Jobs for Autonomous Agent System

echo "⏰ Setting up cron jobs for Autonomous Agent System..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Get the current directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Create cron job entries
CRON_JOBS=(
    "# Autonomous Agent System Cron Jobs"
    "# Market Research - Every 6 hours"
    "0 */6 * * * cd $SCRIPT_DIR && node autonomous-market-research-agent.js >> logs/market-research.log 2>&1"
    ""
    "# Solution Creation - Every 12 hours"
    "0 */12 * * * cd $SCRIPT_DIR && node autonomous-solution-creator-agent.js >> logs/solution-creation.log 2>&1"
    ""
    "# Sales Campaign - Every 8 hours"
    "0 */8 * * * cd $SCRIPT_DIR && node autonomous-sales-agent.js >> logs/sales-campaign.log 2>&1"
    ""
    "# Agent Creation - Weekly"
    "0 0 * * 0 cd $SCRIPT_DIR && node continuous-agent-creator.js >> logs/agent-creation.log 2>&1"
    ""
    "# Master Orchestrator - Every 4 hours"
    "0 */4 * * * cd $SCRIPT_DIR && node autonomous-master-orchestrator.js >> logs/master-orchestrator.log 2>&1"
    ""
    "# Monitoring - Every 30 minutes"
    "*/30 * * * * cd $SCRIPT_DIR && node monitor-automation.js >> logs/monitoring.log 2>&1"
    ""
    "# Backup - Daily at 2 AM"
    "0 2 * * * cd $SCRIPT_DIR && ./backup-autonomous-system.sh >> logs/backup.log 2>&1"
)

# Create temporary cron file
TEMP_CRON=$(mktemp)

# Add existing cron jobs
crontab -l 2>/dev/null | grep -v "Autonomous Agent System" > "$TEMP_CRON" || true

# Add new cron jobs
for job in "${CRON_JOBS[@]}"; do
    echo "$job" >> "$TEMP_CRON"
done

# Install new cron jobs
crontab "$TEMP_CRON"

# Clean up
rm "$TEMP_CRON"

print_success "Cron jobs installed successfully"
print_status "Current cron jobs:"
crontab -l | grep -A 20 "Autonomous Agent System"
