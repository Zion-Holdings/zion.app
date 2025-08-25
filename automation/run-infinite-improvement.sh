#!/bin/bash

# Zion.App Infinite Improvement Script
# Runs every 15 minutes via cron

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
LOG_FILE="automation/logs/infinite-improvement.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting infinite improvement process..."

# Check if continuous improvement system is running
if ! pgrep -f "continuous-automation-improvement-system" > /dev/null; then
    log "Starting continuous automation improvement system..."
    node automation/continuous-automation-improvement-system.cjs >> "$LOG_FILE" 2>&1 &
    sleep 3
fi

# Check if master automation coordinator is running
if ! pgrep -f "master-automation-coordinator" > /dev/null; then
    log "Starting master automation coordinator..."
    node automation/master-automation-coordinator.cjs >> "$LOG_FILE" 2>&1 &
    sleep 3
fi

# Run automation improvement cycle
log "Running automation improvement cycle..."

# 1. Check for automation improvements
log "Checking for automation improvements..."
if [ -f "automation/continuous-automation-improvement-system.cjs" ]; then
    node automation/continuous-automation-improvement-system.cjs improve >> "$LOG_FILE" 2>&1
    log "Automation improvement cycle completed"
fi

# 2. Check for system optimizations
log "Checking for system optimizations..."
if [ -f "automation/master-automation-coordinator.cjs" ]; then
    node automation/master-automation-coordinator.cjs optimize >> "$LOG_FILE" 2>&1
    log "System optimization cycle completed"
fi

# 3. Check for performance improvements
log "Checking for performance improvements..."
if [ -f "automation/real-time-performance-monitor.cjs" ]; then
    node automation/real-time-performance-monitor.cjs analyze >> "$LOG_FILE" 2>&1
    log "Performance analysis completed"
fi

# 4. Check for link health improvements
log "Checking for link health improvements..."
if [ -f "automation/ml-link-intelligence.cjs" ]; then
    node automation/ml-link-intelligence.cjs improve >> "$LOG_FILE" 2>&1
    log "Link health improvement cycle completed"
fi

# 5. Generate improvement report
log "Generating improvement report..."
IMPROVEMENT_REPORT="automation/data/infinite-improvement-report.json"
cat > "$IMPROVEMENT_REPORT" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "operation": "infinite_improvement_cycle",
  "improvements_applied": [
    "automation_improvements",
    "system_optimizations",
    "performance_analysis",
    "link_health_improvements"
  ],
  "status": "completed",
  "next_run": "$(date -d '+15 minutes' -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF

log "Improvement report saved to $IMPROVEMENT_REPORT"

# 6. Check if any services need restarting after improvements
log "Checking if services need restarting after improvements..."
node automation/check-status.cjs | grep "🔴 Offline" | while read -r line; do
    service=$(echo "$line" | awk '{print $2}')
    log "Service $service is offline after improvements, restarting..."
    pkill -f "$service" || true
    sleep 2
    node "automation/$service.cjs" >> "$LOG_FILE" 2>&1 &
done

log "Infinite improvement process completed successfully"
