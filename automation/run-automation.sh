#!/bin/bash

# Zion.App Main Automation Runner
# Runs every 5 minutes via cron

set -e

# Set environment
export NODE_ENV=production
export PATH="/Users/klebergarciaalcatrao/.nvm/versions/node/v22.16.0/bin:$PATH"
export NVM_DIR="/Users/klebergarciaalcatrao/.nvm"

# Source NVM
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Change to project directory
cd "/Users/klebergarciaalcatrao/Desktop/ZION_APP_AUG_25_25/zion.app"

# Log file
LOG_FILE="automation/logs/run-automation.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting main automation runner..."

# Check if automation systems are running
if ! pgrep -f "autonomous-system-manager" > /dev/null; then
    log "Starting autonomous system manager..."
    node automation/autonomous-system-manager.cjs start >> "$LOG_FILE" 2>&1 &
    sleep 5
fi

# Check and start other automation services
SERVICES=(
    "ml-link-intelligence"
    "link-health-scheduler"
    "real-time-performance-monitor"
)

for service in "${SERVICES[@]}"; do
    if ! pgrep -f "$service" > /dev/null; then
        log "Starting $service..."
        node "automation/$service.cjs" >> "$LOG_FILE" 2>&1 &
        sleep 2
    else
        log "$service is already running"
    fi
done

# Run health check
log "Running health check..."
node automation/check-status.cjs >> "$LOG_FILE" 2>&1

# Check for any failed services and restart them
log "Checking for failed services..."
node automation/check-status.cjs | grep "🔴 Offline" | while read -r line; do
    service=$(echo "$line" | awk '{print $2}')
    log "Service $service is offline, attempting restart..."
    pkill -f "$service" || true
    sleep 2
    node "automation/$service.cjs" >> "$LOG_FILE" 2>&1 &
done

log "Main automation runner completed"
