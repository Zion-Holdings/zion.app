#!/bin/bash

# Continuous Automation Factory Generator Cron Job
# This script runs every 5 minutes to generate new automation factories

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_ROOT/automation/logs/continuous-automation-cron.log"

# Create log directory if it doesn't exist
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting Continuous Automation Factory Generator Cron Job"

# Change to project directory
cd "$PROJECT_ROOT"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log "ERROR: Node.js is not installed or not in PATH"
    exit 1
fi

# Check if the automation factory generator exists
FACTORY_GENERATOR="$PROJECT_ROOT/automation/continuous-automation-factory-generator.js"
if [ ! -f "$FACTORY_GENERATOR" ]; then
    log "ERROR: Factory generator not found at $FACTORY_GENERATOR"
    exit 1
fi

# Run the factory generator
log "Executing factory generator..."
node "$FACTORY_GENERATOR" >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "Factory generator executed successfully"
else
    log "ERROR: Factory generator failed with exit code $?"
fi

# Generate new content variations
log "Generating content variations..."
node "$PROJECT_ROOT/automation/variation-content-agents-factory.js" >> "$LOG_FILE" 2>&1

if [ $? -eq 0 ]; then
    log "Content variations generated successfully"
else
    log "ERROR: Content variations generation failed"
fi

# Clean up old factories (keep only last 50)
log "Cleaning up old factories..."
find "$PROJECT_ROOT/automation/factories" -maxdepth 1 -type d -name "automation-factory-*" | sort | head -n -50 | xargs -r rm -rf

# Clean up old variations (keep only last 100)
log "Cleaning up old variations..."
find "$PROJECT_ROOT/automation/variations" -maxdepth 1 -type d -name "content-variation-*" | sort | head -n -100 | xargs -r rm -rf

log "Continuous Automation Factory Generator Cron Job completed" 