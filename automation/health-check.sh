#!/bin/bash

# Zion.App Health Check Script
# Runs every 10 minutes via cron

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
LOG_FILE="automation/logs/health-check.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting health check process..."

# Check system resources
log "Checking system resources..."

# CPU usage
CPU_USAGE=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')
log "CPU usage: ${CPU_USAGE}%"

# Memory usage
MEMORY_INFO=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')
TOTAL_MEMORY=$(sysctl -n hw.memsize | awk '{print $1/1024/1024/1024}')
FREE_MEMORY=$(echo "scale=2; $MEMORY_INFO * 4096 / 1024 / 1024 / 1024" | bc -l 2>/dev/null || echo "0")
MEMORY_USAGE=$(echo "scale=2; (1 - $FREE_MEMORY / $TOTAL_MEMORY) * 100" | bc -l 2>/dev/null || echo "0")
log "Memory usage: ${MEMORY_USAGE}%"

# Disk usage
DISK_USAGE=$(df -h . | tail -1 | awk '{print $5}' | sed 's/%//')
log "Disk usage: ${DISK_USAGE}%"

# Check automation services health
log "Checking automation services health..."

# Run the Node.js health check
HEALTH_OUTPUT=$(node automation/check-status.cjs 2>&1)
echo "$HEALTH_OUTPUT" >> "$LOG_FILE"

# Check for offline services
OFFLINE_SERVICES=$(echo "$HEALTH_OUTPUT" | grep "🔴 Offline" | wc -l)
if [ "$OFFLINE_SERVICES" -gt 0 ]; then
    log "WARNING: $OFFLINE_SERVICES services are offline!"
    
    # Get list of offline services
    echo "$HEALTH_OUTPUT" | grep "🔴 Offline" | while read -r line; do
        service=$(echo "$line" | awk '{print $2}')
        log "Offline service detected: $service"
    done
    
    # Trigger recovery
    log "Triggering error recovery..."
    bash automation/error-recovery.sh >> "$LOG_FILE" 2>&1
fi

# Check process counts
log "Checking process counts..."
AUTONOMOUS_COUNT=$(pgrep -f "autonomous-system-manager" | wc -l || echo "0")
ML_COUNT=$(pgrep -f "ml-link-intelligence" | wc -l || echo "0")
LINK_COUNT=$(pgrep -f "link-health-scheduler" | wc -l || echo "0")
PERFORMANCE_COUNT=$(pgrep -f "real-time-performance-monitor" | wc -l || echo "0")

log "Process counts:"
log "  Autonomous System Manager: $AUTONOMOUS_COUNT"
log "  ML Link Intelligence: $ML_COUNT"
log "  Link Health Scheduler: $LINK_COUNT"
log "  Performance Monitor: $PERFORMANCE_COUNT"

# Check for zombie processes
ZOMBIE_COUNT=$(ps aux | grep -c "Z" 2>/dev/null || echo "0")
if [ "$ZOMBIE_COUNT" -gt 0 ]; then
    log "WARNING: $ZOMBIE_COUNT zombie processes detected!"
fi

# Check log file health
log "Checking log file health..."
for logfile in automation/logs/*.log; do
    if [ -f "$logfile" ]; then
        size=$(stat -f%z "$logfile" 2>/dev/null || echo "0")
        last_modified=$(stat -f%m "$logfile" 2>/dev/null || echo "0")
        current_time=$(date +%s)
        age=$((current_time - last_modified))
        
        if [ "$age" -gt 3600 ]; then  # Older than 1 hour
            log "WARNING: Log file $logfile is stale (age: ${age}s)"
        fi
        
        if [ "$size" -gt 52428800 ]; then  # Larger than 50MB
            log "WARNING: Log file $logfile is very large (${size} bytes)"
        fi
    fi
done

# Generate health report
HEALTH_REPORT="automation/data/health-report.json"
cat > "$HEALTH_REPORT" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "system": {
    "cpu_usage": "$CPU_USAGE%",
    "memory_usage": "$MEMORY_USAGE%",
    "disk_usage": "$DISK_USAGE%"
  },
  "services": {
    "autonomous_system_manager": $AUTONOMOUS_COUNT,
    "ml_link_intelligence": $ML_COUNT,
    "link_health_scheduler": $LINK_COUNT,
    "real_time_performance_monitor": $PERFORMANCE_COUNT
  },
  "alerts": {
    "offline_services": $OFFLINE_SERVICES,
    "zombie_processes": $ZOMBIE_COUNT
  }
}
EOF

log "Health report saved to $HEALTH_REPORT"
log "Health check process completed"
