#!/bin/bash

# Zion.App Error Recovery Script
# Runs every 2 minutes via cron

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
LOG_FILE="automation/logs/error-recovery.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting error recovery process..."

# Check for crashed processes and restart them
log "Checking for crashed automation processes..."

# Check autonomous system manager
if ! pgrep -f "autonomous-system-manager" > /dev/null; then
    log "Autonomous system manager crashed, restarting..."
    node automation/autonomous-system-manager.cjs start >> "$LOG_FILE" 2>&1 &
    sleep 3
fi

# Check other automation services
SERVICES=(
    "ml-link-intelligence"
    "link-health-scheduler"
    "real-time-performance-monitor"
)

for service in "${SERVICES[@]}"; do
    if ! pgrep -f "$service" > /dev/null; then
        log "Service $service crashed, restarting..."
        node "automation/$service.cjs" >> "$LOG_FILE" 2>&1 &
        sleep 2
    fi
done

# Check for high memory usage and restart if necessary
log "Checking memory usage..."
MEMORY_USAGE=$(ps aux | grep -E "(autonomous-system-manager|ml-link-intelligence|link-health-scheduler|real-time-performance-monitor)" | grep -v grep | awk '{sum+=$6} END {print sum/1024}')

if [ ! -z "$MEMORY_USAGE" ] && [ $(echo "$MEMORY_USAGE > 500" | bc -l 2>/dev/null || echo "0") -eq 1 ]; then
    log "High memory usage detected ($MEMORY_USAGE MB), restarting services..."
    pkill -f "autonomous-system-manager" || true
    pkill -f "ml-link-intelligence" || true
    pkill -f "link-health-scheduler" || true
    pkill -f "real-time-performance-monitor" || true
    
    sleep 5
    
    # Restart all services
    node automation/autonomous-system-manager.cjs start >> "$LOG_FILE" 2>&1 &
    sleep 3
    node automation/ml-link-intelligence.cjs >> "$LOG_FILE" 2>&1 &
    sleep 2
    node automation/link-health-scheduler.cjs >> "$LOG_FILE" 2>&1 &
    sleep 2
    node automation/real-time-performance-monitor.cjs >> "$LOG_FILE" 2>&1 &
fi

# Check log files for errors and rotate if too large
log "Checking log file sizes..."
for logfile in automation/logs/*.log; do
    if [ -f "$logfile" ]; then
        size=$(stat -f%z "$logfile" 2>/dev/null || echo "0")
        if [ "$size" -gt 10485760 ]; then  # 10MB
            log "Log file $logfile is too large ($size bytes), rotating..."
            mv "$logfile" "${logfile}.$(date +%Y%m%d_%H%M%S)"
            touch "$logfile"
        fi
    fi
done

log "Error recovery process completed"
