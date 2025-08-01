#!/bin/bash

# ChatGPT Analysis Cron Job
# Runs every 4 hours

# Set the working directory
cd "$(dirname "$0")"

# Create logs directory if it doesn't exist
mkdir -p logs

# Log file for this cron job
LOG_FILE="logs/chatgpt-cron-$(date +%Y%m%d).log"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
}

# Start the cron job
log_message "Starting ChatGPT Analysis Cron Job"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log_message "ERROR: Node.js is not installed or not in PATH"
    exit 1
fi

# Check if required files exist
if [ ! -f "launch-chatgpt-analysis.js" ]; then
    log_message "ERROR: launch-chatgpt-analysis.js not found"
    exit 1
fi

# Run the ChatGPT analysis
log_message "Executing ChatGPT analysis..."
node launch-chatgpt-analysis.js >> "$LOG_FILE" 2>&1

# Check exit status
if [ $? -eq 0 ]; then
    log_message "ChatGPT Analysis completed successfully"
else
    log_message "ERROR: ChatGPT Analysis failed with exit code $?"
fi

# Clean up old log files (keep last 7 days)
find logs -name "chatgpt-cron-*.log" -mtime +7 -delete

log_message "ChatGPT Analysis Cron Job completed" 