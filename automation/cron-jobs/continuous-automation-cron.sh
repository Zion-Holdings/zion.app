#!/bin/bash

# Continuous Automation Cron Job
# This script runs the master responsive automation orchestrator continuously

# Set the working directory to the project root
cd /Users/miami2/Documents/GitHub/bolt.new.zion.app

# Log file for the automation
LOG_FILE="automation/logs/continuous-automation.log"
ERROR_LOG="automation/logs/continuous-automation-error.log"

# Create logs directory if it doesn't exist
mkdir -p automation/logs

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
}

# Function to log errors
log_error() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - ERROR: $1" >> "$ERROR_LOG"
}

# Start the master orchestrator
log_message "Starting Master Responsive Automation Orchestrator..."

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log_error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check if the orchestrator file exists
if [ ! -f "automation/launch-master-orchestrator.js" ]; then
    log_error "Master orchestrator file not found"
    exit 1
fi

# Start the orchestrator
log_message "Launching master orchestrator..."
node automation/launch-master-orchestrator.js >> "$LOG_FILE" 2>> "$ERROR_LOG" &

# Store the PID
ORCHESTRATOR_PID=$!
echo $ORCHESTRATOR_PID > automation/pids/master-orchestrator.pid

log_message "Master orchestrator started with PID: $ORCHESTRATOR_PID"

# Monitor the orchestrator
while kill -0 $ORCHESTRATOR_PID 2>/dev/null; do
    sleep 30
    log_message "Master orchestrator is running (PID: $ORCHESTRATOR_PID)"
done

log_message "Master orchestrator stopped" 