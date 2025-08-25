#!/bin/bash

# Zion.App Log Rotation Script
# Runs daily at 3 AM via cron

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
LOG_FILE="automation/logs/log-rotation.log"
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "Starting log rotation process..."

# Create logs archive directory
ARCHIVE_DIR="automation/logs/archive/$(date +%Y%m%d)"
mkdir -p "$ARCHIVE_DIR"

log "Archive directory created: $ARCHIVE_DIR"

# Rotate large log files (>10MB)
log "Checking for large log files..."
find automation/logs -name "*.log" -size +10M | while read -r logfile; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        archive_name="${filename%.log}.$(date +%Y%m%d_%H%M%S).log"
        
        log "Rotating large log file: $filename"
        mv "$logfile" "$ARCHIVE_DIR/$archive_name"
        touch "$logfile"
        
        # Compress archived log
        gzip "$ARCHIVE_DIR/$archive_name"
        log "Archived and compressed: $archive_name.gz"
    fi
done

# Rotate old log files (>7 days)
log "Checking for old log files..."
find automation/logs -name "*.log" -mtime +7 | while read -r logfile; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        archive_name="${filename%.log}.$(date +%Y%m%d_%H:%M:%S).log"
        
        log "Rotating old log file: $filename"
        mv "$logfile" "$ARCHIVE_DIR/$archive_name"
        touch "$logfile"
        
        # Compress archived log
        gzip "$ARCHIVE_DIR/$archive_name"
        log "Archived and compressed: $archive_name.gz"
    fi
done

# Rotate runtime logs that are too large
log "Checking runtime logs..."
find automation/logs -name "*.runtime.log" -size +5M | while read -r logfile; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        archive_name="${filename%.log}.$(date +%Y%m%d_%H%M%S).log"
        
        log "Rotating large runtime log: $filename"
        mv "$logfile" "$ARCHIVE_DIR/$archive_name"
        touch "$logfile"
        
        # Compress archived log
        gzip "$ARCHIVE_DIR/$archive_name"
        log "Archived and compressed: $archive_name.gz"
    fi
done

# Clean up old archives (>30 days)
log "Cleaning up old archives..."
find automation/logs/archive -name "*.gz" -mtime +30 -delete
find automation/logs/archive -type d -empty -delete

# Compress archive directory
log "Compressing archive directory..."
cd automation/logs
tar -czf "archive_$(date +%Y%m%d).tar.gz" "archive/$(date +%Y%m%d)"
rm -rf "archive/$(date +%Y%m%d)"

# Clean up old compressed archives (>7 days)
find . -name "archive_*.tar.gz" -mtime +7 -delete

# Update log rotation history
echo "$(date): Log rotation completed - archive_$(date +%Y%m%d).tar.gz" >> automation/logs/log-rotation-history.log

# Check disk usage after rotation
DISK_USAGE=$(df -h . | tail -1 | awk '{print $5}' | sed 's/%//')
log "Disk usage after rotation: ${DISK_USAGE}%"

# Generate rotation report
ROTATION_REPORT="automation/data/log-rotation-report.json"
cat > "$ROTATION_REPORT" << EOF
{
  "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "operation": "log_rotation",
  "archive_created": "archive_$(date +%Y%m%d).tar.gz",
  "disk_usage_after": "${DISK_USAGE}%",
  "status": "completed"
}
EOF

log "Log rotation report saved to $ROTATION_REPORT"
log "Log rotation process completed successfully"
