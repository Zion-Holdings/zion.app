#!/bin/bash
# Auto Lead Discovery Cron Script
# Runs every 2 minutes to discover qualified leads

set -e

cd /Users/klebergarciaalcatrao

# Run lead discovery
python3 scripts/growth-automation/auto_lead_discovery.py --batch 100

# Log completion
echo "$(date -u '+%Y-%m-%d %H:%M:%S UTC') - Lead discovery cycle completed" >> outreach_monitor/processed/auto_lead_discovery_cron.log