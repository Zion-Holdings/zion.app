#!/bin/bash

# Syntax Error Detection and Fixing Cron Job
# This script runs the syntax automation system on a schedule

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/cron-job.pid"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/cron-job.log"
}

# Check if already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        log "Cron job already running with PID $PID"
        exit 0
    else
        log "Removing stale PID file"
        rm -f "$PID_FILE"
    fi
fi

# Write current PID
echo $$ > "$PID_FILE"

# Function to cleanup
cleanup() {
    log "Cleaning up..."
    rm -f "$PID_FILE"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Change to project directory
cd "$PROJECT_ROOT" || {
    log "ERROR: Failed to change to project directory"
    exit 1
}

# Check if Node.js is available
if ! command -v node > /dev/null 2>&1; then
    log "ERROR: Node.js is not available"
    exit 1
}

# Run the orchestrator
log "Starting syntax automation cycle..."

# Run detection first
log "Running syntax error detection..."
if node "$SCRIPT_DIR/syntax-error-detector.js"; then
    log "Syntax detection completed successfully"
else
    log "ERROR: Syntax detection failed"
    cleanup
    exit 1
fi

# Check if errors were found and run fixing if needed
log "Checking for syntax errors..."
if node "$SCRIPT_DIR/syntax-error-fixer.js"; then
    log "Syntax fixing completed successfully"
else
    log "WARNING: Syntax fixing had issues"
fi

# Run orchestrator for full cycle
log "Running full automation cycle..."
if node "$SCRIPT_DIR/syntax-automation-orchestrator.js" once; then
    log "Full automation cycle completed successfully"
else
    log "ERROR: Full automation cycle failed"
    cleanup
    exit 1
fi

log "Cron job completed successfully"
cleanup
