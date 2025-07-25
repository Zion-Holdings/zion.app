#!/bin/bash

# Enhanced Cursor Sync Backup Cleanup Script
# Cleans up old backups to prevent disk space issues

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
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

# Clean up old log files
cleanup_old_logs() {
    local log_dir="$AUTOMATION_DIR/logs"
    if [ ! -d "$log_dir" ]; then
        return 0
    fi
    
    # Remove log files older than 30 days
    local removed_logs=0
    find "$log_dir" -name "*.log" -mtime +30 | while read -r log_file; do
        echo "Removing old log: $(basename "$log_file")"
        rm -f "$log_file"
        ((removed_logs++))
    done
    
    if [ $removed_logs -gt 0 ]; then
        echo -e "${GREEN}✅ Removed $removed_logs old log files${NC}"
    else
        echo -e "${GREEN}✅ No old log files to remove${NC}"
    fi
}

# Clean up old metrics files
cleanup_old_metrics() {
    local metrics_dir="$AUTOMATION_DIR/metrics"
    if [ ! -d "$metrics_dir" ]; then
        return 0
    fi
    
    # Remove metrics files older than 60 days
    local removed_metrics=0
    find "$metrics_dir" -name "*.json" -mtime +60 | while read -r metric_file; do
        echo "Removing old metric: $(basename "$metric_file")"
        rm -f "$metric_file"
        ((removed_metrics++))
    done
    
    if [ $removed_metrics -gt 0 ]; then
        echo -e "${GREEN}✅ Removed $removed_metrics old metric files${NC}"
    else
        echo -e "${GREEN}✅ No old metric files to remove${NC}"
    fi
}

# Main cleanup function
main() {
    echo "Starting enhanced cursor sync cleanup..."
    echo ""
    
    cleanup_old_backups
    echo ""
    limit_backup_count
    echo ""
    cleanup_old_logs
    echo ""
    cleanup_old_metrics
    
    echo ""
    echo -e "${GREEN}✅ Enhanced cursor sync cleanup completed${NC}"
    
    # Show current disk usage
    echo ""
    echo "📊 Current disk usage:"
    if [ -d "$AUTOMATION_DIR/logs" ]; then
        local log_size=$(du -sh "$AUTOMATION_DIR/logs" 2>/dev/null | cut -f1)
        echo "  Logs: $log_size"
    fi
    
    if [ -d "$AUTOMATION_DIR/backups" ]; then
        local backup_size=$(du -sh "$AUTOMATION_DIR/backups" 2>/dev/null | cut -f1)
        echo "  Backups: $backup_size"
    fi
    
    if [ -d "$AUTOMATION_DIR/metrics" ]; then
        local metrics_size=$(du -sh "$AUTOMATION_DIR/metrics" 2>/dev/null | cut -f1)
        echo "  Metrics: $metrics_size"
    fi
}

main "$@" 