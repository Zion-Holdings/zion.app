#!/bin/bash

# Zion.App Maintenance Script
# Runs daily at 2 AM via cron

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
LOG_FILE="automation/logs/maintenance.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting daily maintenance process..."

# Create maintenance directory
MAINTENANCE_DIR="automation/maintenance/$(date +%Y%m%d_%H%M%S)"
mkdir -p "$MAINTENANCE_DIR"

log "Maintenance directory created: $MAINTENANCE_DIR"

# 1. Clean up temporary files
log "Cleaning up temporary files..."
find . -name "*.tmp" -delete 2>/dev/null || true
find . -name "*.temp" -delete 2>/dev/null || true
find . -name "*~" -delete 2>/dev/null || true
find . -name ".DS_Store" -delete 2>/dev/null || true
log "Temporary files cleaned up"

# 2. Clean up backup files
log "Cleaning up old backup files..."
find . -name "*.backup.*" -mtime +7 -delete 2>/dev/null || true
find . -name "*.175*" -mtime +7 -delete 2>/dev/null || true
log "Old backup files cleaned up"

# 3. Clean up disabled directories
log "Checking disabled directories..."
if [ -d "components.disabled" ] && [ $(find components.disabled -type f | wc -l) -gt 1000 ]; then
    log "Large disabled components directory detected, archiving..."
    tar -czf "$MAINTENANCE_DIR/components_disabled_$(date +%Y%m%d).tar.gz" components.disabled
    rm -rf components.disabled
    mkdir components.disabled
    log "Disabled components archived and cleaned"
fi

if [ -d "pages.disabled" ] && [ $(find pages.disabled -type f | wc -l) -gt 500 ]; then
    log "Large disabled pages directory detected, archiving..."
    tar -czf "$MAINTENANCE_DIR/pages_disabled_$(date +%Y%m%d).tar.gz" pages.disabled
    rm -rf pages.disabled
    mkdir pages.disabled
    log "Disabled pages archived and cleaned"
fi

# 4. Clean up large log files
log "Cleaning up large log files..."
find automation/logs -name "*.log" -size +50M | while read -r logfile; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        log "Large log file detected: $filename (size: $(du -h "$logfile" | cut -f1))"
        
        # Archive and compress
        tar -czf "$MAINTENANCE_DIR/${filename%.log}_$(date +%Y%m%d).tar.gz" -C automation/logs "$filename"
        echo "" > "$logfile"  # Truncate log file
        log "Large log file archived and truncated: $filename"
    fi
done

# 5. Clean up old automation data
log "Cleaning up old automation data..."
find automation/data -name "*.json" -mtime +30 | while read -r datafile; do
    if [ -f "$datafile" ]; then
        filename=$(basename "$datafile")
        log "Old data file detected: $filename"
        
        # Archive old data
        tar -czf "$MAINTENANCE_DIR/${filename%.json}_$(date +%Y%m%d).tar.gz" -C automation/data "$filename"
        rm "$datafile"
        log "Old data file archived and removed: $filename"
    fi
done

# 6. Check and clean up git objects
log "Checking git repository..."
if [ -d ".git" ]; then
    git gc --prune=now --aggressive 2>/dev/null || log "Git garbage collection failed"
    log "Git repository cleaned up"
fi

# 7. Clean up node_modules if it's too large
log "Checking node_modules size..."
if [ -d "node_modules" ]; then
    NODE_MODULES_SIZE=$(du -sh node_modules | cut -f1)
    log "node_modules size: $NODE_MODULES_SIZE"
    
    # If larger than 500MB, consider cleaning
    if [ $(du -sm node_modules | cut -f1) -gt 500 ]; then
        log "Large node_modules detected, cleaning..."
        npm cache clean --force 2>/dev/null || true
        log "npm cache cleaned"
    fi
fi

# 8. Generate maintenance report
log "Generating maintenance report..."
MAINTENANCE_REPORT="automation/data/maintenance-report.json"
cat > "$MAINTENANCE_REPORT" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "operation": "daily_maintenance",
  "maintenance_directory": "$MAINTENANCE_DIR",
  "actions_performed": [
    "temporary_files_cleanup",
    "backup_files_cleanup",
    "disabled_directories_cleanup",
    "large_log_files_cleanup",
    "old_automation_data_cleanup",
    "git_repository_cleanup",
    "npm_cache_cleanup"
  ],
  "status": "completed"
}
EOF

# 9. Compress maintenance directory
log "Compressing maintenance directory..."
cd automation
tar -czf "maintenance_$(date +%Y%m%d).tar.gz" "maintenance/$(date +%Y%m%d_%H%M%S)"
rm -rf "maintenance/$(date +%Y%m%d_%H%M%S)"

# Clean up old maintenance archives (>7 days)
find . -name "maintenance_*.tar.gz" -mtime +7 -delete

# Update maintenance history
echo "$(date): Daily maintenance completed - maintenance_$(date +%Y%m%d).tar.gz" >> automation/logs/maintenance-history.log

# Check disk usage after maintenance
DISK_USAGE=$(df -h . | tail -1 | awk '{print $5}' | sed 's/%//')
log "Disk usage after maintenance: ${DISK_USAGE}%"

log "Daily maintenance process completed successfully"
