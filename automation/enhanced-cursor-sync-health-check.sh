#!/bin/bash

# Enhanced Cursor Sync Health Check Script
# Monitors enhanced cursor sync automation and sends alerts if needed

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if enhanced cursor sync is working properly
check_enhanced_cursor_sync_health() {
    local log_file="$AUTOMATION_DIR/logs/enhanced-cursor-sync-cron.log"
    local health_file="$AUTOMATION_DIR/logs/enhanced-cursor-sync-health.log"
    
    if [ ! -f "$log_file" ]; then
        echo -e "${RED}❌ Enhanced cursor sync log file not found${NC}"
        return 1
    fi
    
    # Check last sync time
    local last_sync_file="$AUTOMATION_DIR/logs/last-sync-time.json"
    if [ -f "$last_sync_file" ]; then
        local last_sync=$(jq -r '.lastSync' "$last_sync_file" 2>/dev/null)
        if [ "$last_sync" != "null" ] && [ -n "$last_sync" ]; then
            local last_sync_time=$(date -d "$last_sync" +%s 2>/dev/null || date -j -f "%Y-%m-%dT%H:%M:%S.%NZ" "$last_sync" +%s 2>/dev/null)
            local current_time=$(date +%s)
            local time_diff=$((current_time - last_sync_time))
            
            # Alert if last sync was more than 5 minutes ago
            if [ $time_diff -gt 300 ]; then
                echo -e "${YELLOW}⚠️ Last sync was $((time_diff / 60)) minutes ago${NC}"
                return 1
            else
                echo -e "${GREEN}✅ Last sync was $((time_diff / 60)) minutes ago${NC}"
            fi
        fi
    fi
    
    # Check for recent errors in log
    local recent_errors=$(tail -n 50 "$log_file" | grep -c "ERROR\|FAILED\|FAILURE" 2>/dev/null || echo "0")
    if [ "$recent_errors" -gt 0 ]; then
        echo -e "${YELLOW}⚠️ Found $recent_errors recent errors in enhanced cursor sync log${NC}"
        return 1
    fi
    
    # Check if git repository is in good state
    cd "$PROJECT_DIR"
    if ! git status --porcelain > /dev/null 2>&1; then
        echo -e "${RED}❌ Git repository is not in a clean state${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Enhanced cursor sync health check passed${NC}"
    return 0
}

# Check for stuck processes
check_stuck_processes() {
    local stuck_processes=$(ps aux | grep "enhanced-cursor-sync-automation" | grep -v grep | wc -l)
    if [ "$stuck_processes" -gt 1 ]; then
        echo -e "${YELLOW}⚠️ Found $stuck_processes enhanced cursor sync processes running${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ No stuck processes detected${NC}"
    return 0
}

# Check backup health
check_backup_health() {
    local backup_dir="$AUTOMATION_DIR/backups"
    if [ -d "$backup_dir" ]; then
        local backup_count=$(find "$backup_dir" -name "sync-backup-*" -type d | wc -l)
        if [ "$backup_count" -gt 20 ]; then
            echo -e "${YELLOW}⚠️ Too many backups ($backup_count), consider cleanup${NC}"
            return 1
        fi
    fi
    
    echo -e "${GREEN}✅ Backup health check passed${NC}"
    return 0
}

# Check disk space
check_disk_space() {
    local log_dir="$AUTOMATION_DIR/logs"
    local log_size=$(du -sh "$log_dir" 2>/dev/null | cut -f1)
    local log_size_mb=$(du -sm "$log_dir" 2>/dev/null | cut -f1)
    
    if [ "$log_size_mb" -gt 100 ]; then
        echo -e "${YELLOW}⚠️ Log directory size is large ($log_size), consider cleanup${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Disk space check passed (logs: $log_size)${NC}"
    return 0
}

# Check configuration
check_configuration() {
    local config_file="$AUTOMATION_DIR/enhanced-cursor-sync-config.json"
    if [ ! -f "$config_file" ]; then
        echo -e "${RED}❌ Configuration file not found${NC}"
        return 1
    fi
    
    if ! jq . "$config_file" > /dev/null 2>&1; then
        echo -e "${RED}❌ Configuration file is not valid JSON${NC}"
        return 1
    fi
    
    echo -e "${GREEN}✅ Configuration check passed${NC}"
    return 0
}

# Main health check function
main() {
    echo "=== Enhanced Cursor Sync Health Check ==="
    echo "Timestamp: $(date)"
    echo "Computer: $(hostname)"
    echo ""
    
    local health_status=0
    
    check_enhanced_cursor_sync_health || health_status=1
    echo ""
    check_stuck_processes || health_status=1
    echo ""
    check_backup_health || health_status=1
    echo ""
    check_disk_space || health_status=1
    echo ""
    check_configuration || health_status=1
    
    echo ""
    if [ $health_status -eq 0 ]; then
        echo -e "${GREEN}✅ All health checks passed${NC}"
    else
        echo -e "${RED}❌ Some health checks failed${NC}"
    fi
    
    return $health_status
}

main "$@" 