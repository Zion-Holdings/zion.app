#!/bin/bash
# High-frequency scanner cron job
# Runs every 5 minutes to scan all folders for hot follow-up threads

cd /Users/klebergarciaalcatrao/zion-techgroup
export PATH="/Users/klebergarciaalcatrao/.hermes/hermes-agent/venv/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

/Users/klebergarciaalcatrao/.hermes/hermes-agent/venv/bin/python3 scripts/outreach/high_frequency_scanner.py >> outreach_monitor/logs/high_freq_scanner.log 2>&1