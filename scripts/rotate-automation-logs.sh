#!/bin/bash

# Log Rotation Script for Zion App Automation
# This script rotates automation logs to prevent disk space issues

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOGS_DIR="$PROJECT_PATH/logs"
BACKUP_DIR="$PROJECT_PATH/logs/backup"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Get current date for backup
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)

echo "🔄 Rotating automation logs..."

# Rotate log files
for logfile in "$LOGS_DIR"/cron-*.log; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        backup_file="$BACKUP_DIR/${filename%.log}_${BACKUP_DATE}.log"
        
        # Move current log to backup
        mv "$logfile" "$backup_file"
        
        # Create new empty log file
        touch "$logfile"
        
        echo "   Rotated: $filename -> $(basename "$backup_file")"
    fi
done

# Keep only last 7 days of backups
find "$BACKUP_DIR" -name "cron-*.log" -mtime +7 -delete 2>/dev/null || true

echo "✅ Log rotation completed"
echo "📁 Backup location: $BACKUP_DIR"
