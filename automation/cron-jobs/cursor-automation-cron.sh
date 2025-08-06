#!/bin/bash

# Cursor Chat Automation Cron Job
# Runs the automation system every 5 minutes

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
AUTOMATION_SCRIPT="$PROJECT_DIR/cursor-chat-automation-system.js"

# Log file
LOG_FILE="$PROJECT_DIR/automation/cursor-chat-logs/cron.log"

# Create log directory if it doesn't exist
mkdir -p "$(dirname "$LOG_FILE")"

# Function to log messages
log_message() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_FILE"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log_message "ERROR: Node.js is not installed or not in PATH"
    exit 1
fi

# Check if automation script exists
if [ ! -f "$AUTOMATION_SCRIPT" ]; then
    log_message "ERROR: Automation script not found at $AUTOMATION_SCRIPT"
    exit 1
fi

# Change to project directory
cd "$PROJECT_DIR" || {
    log_message "ERROR: Could not change to project directory"
    exit 1
}

# Run the automation system
log_message "Starting Cursor Chat Automation System"
node "$AUTOMATION_SCRIPT" --continuous

# Log completion
log_message "Cursor Chat Automation System completed"
