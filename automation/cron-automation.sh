#!/bin/bash

# Zion Tech Group Website Automation Cron Job
# This script runs the automation system every 6 hours

# Set the project directory
PROJECT_DIR="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
AUTOMATION_DIR="$PROJECT_DIR/automation"
LOG_DIR="$AUTOMATION_DIR/logs"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Set log file with timestamp
LOG_FILE="$LOG_DIR/automation-$(date +%Y%m%d-%H%M%S).log"

# Change to project directory
cd "$PROJECT_DIR"

# Log start time
echo "=== Zion Tech Group Website Automation Started ===" | tee -a "$LOG_FILE"
echo "Timestamp: $(date)" | tee -a "$LOG_FILE"
echo "Project Directory: $PROJECT_DIR" | tee -a "$LOG_FILE"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in PATH" | tee -a "$LOG_FILE"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed or not in PATH" | tee -a "$LOG_FILE"
    exit 1
fi

# Install dependencies if needed
echo "📦 Installing dependencies..." | tee -a "$LOG_FILE"
npm install >> "$LOG_FILE" 2>&1

# Run the automation system
echo "🚀 Starting automation system..." | tee -a "$LOG_FILE"
node "$AUTOMATION_DIR/run-automation.js" >> "$LOG_FILE" 2>&1

# Check exit status
if [ $? -eq 0 ]; then
    echo "✅ Automation completed successfully" | tee -a "$LOG_FILE"
else
    echo "❌ Automation failed with exit code $?" | tee -a "$LOG_FILE"
fi

echo "=== Automation Ended ===" | tee -a "$LOG_FILE"
echo "End Time: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE" 