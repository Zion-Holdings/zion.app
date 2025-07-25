#!/bin/bash

# Enhanced Cursor Sync Backup Cleanup Script
# Cleans up old backups to prevent disk space issues

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Load config
CONFIG_FILE="$AUTOMATION_DIR/enhanced-cursor-sync-config.json"
if [ -f "$CONFIG_FILE" ]; then
    MAX_BACKUPS=$(jq -r '.backup.maxBackups' "$CONFIG_FILE" 2>/dev/null || echo "10")
    RETENTION_DAYS=$(jq -r '.backup.retentionDays' "$CONFIG_FILE" 2>/dev/null || echo "7")
else
    MAX_BACKUPS=10
    RETENTION_DAYS=7
fi

echo "🧹 Enhanced Cursor Sync Backup Cleanup"
echo "====================================="
echo "Max backups: $MAX_BACKUPS"
echo "Retention days: $RETENTION_DAYS"
echo ""

# Clean up old backups
cleanup_old_backups() {
    local backup_dir="$AUTOMATION_DIR/backups"
    if [ ! -d "$backup_dir" ]; then
        echo -e "${GREEN}✅ No backup directory found${NC}"
        return 0
    fi
    
    # Remove backups older than retention days
    local removed_count=0
    find "$backup_dir" -name "sync-backup-*" -type d -mtime +$RETENTION_DAYS | while read -r backup; do
        echo "Removing old backup: $(basename "$backup")"
        rm -rf "$backup"
        ((removed_count++))
    done
    
    if [ $removed_count -gt 0 ]; then
        echo -e "${GREEN}✅ Removed $removed_count old backups${NC}"
    else
        echo -e "${GREEN}✅ No old backups to remove${NC}"
    fi
}

# Limit number of backups
limit_backup_count() {
    local backup_dir="$AUTOMATION_DIR/backups"
    if [ ! -d "$backup_dir" ]; then
        return 0
    fi
    
    local backup_count=$(find "$backup_dir" -name "sync-backup-*" -type d | wc -l)
    
    if [ "$backup_count" -gt "$MAX_BACKUPS" ]; then
        local to_remove=$((backup_count - MAX_BACKUPS))
        echo "Found $backup_count backups, removing $to_remove oldest..."
        
        find "$backup_dir" -name "sync-backup-*" -type d -printf '%T@ %p\n' | sort -n | head -n "$to_remove" | while read -r line; do
            local backup=$(echo "$line" | cut -d' ' -f2-)
            echo "Removing excess backup: $(basename "$backup")"
            rm -rf "$backup"
        done
        
        echo -e "${GREEN}✅ Limited backups to $MAX_BACKUPS${NC}"
    else
        echo -e "${GREEN}✅ Backup count ($backup_count) within limit ($MAX_BACKUPS)${NC}"
    fi
}

# Main cleanup function
main() {
    echo "Starting backup cleanup..."
    
    cleanup_old_backups
    echo ""
    limit_backup_count
    
    echo ""
    echo -e "${GREEN}✅ Backup cleanup completed${NC}"
}

main "$@"
