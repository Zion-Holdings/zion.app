#!/bin/bash

# Enhanced Cursor Sync Status Script
# Shows the current status of enhanced cursor sync automation

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo "🔄 Enhanced Cursor Sync Automation Status"
echo "========================================="
echo ""

# Check if cron jobs are installed
echo -e "${BLUE}📋 Cron Jobs:${NC}"
if crontab -l 2>/dev/null | grep -q "enhanced-cursor-sync"; then
    echo -e "${GREEN}✅ Enhanced cursor sync cron jobs are installed${NC}"
    crontab -l 2>/dev/null | grep "enhanced-cursor-sync" | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${RED}❌ Enhanced cursor sync cron jobs not found${NC}"
fi

echo ""

# Check last sync time
echo -e "${BLUE}⏰ Last Sync:${NC}"
local last_sync_file="$AUTOMATION_DIR/logs/last-sync-time.json"
if [ -f "$last_sync_file" ]; then
    local last_sync=$(jq -r '.lastSync' "$last_sync_file" 2>/dev/null)
    local computer_id=$(jq -r '.computerId' "$last_sync_file" 2>/dev/null)
    if [ "$last_sync" != "null" ] && [ -n "$last_sync" ]; then
        echo -e "${GREEN}✅ Last sync: $last_sync${NC}"
        echo -e "${GREEN}✅ Computer: $computer_id${NC}"
    else
        echo -e "${YELLOW}⚠️ No sync time recorded${NC}"
    fi
else
    echo -e "${RED}❌ No sync time file found${NC}"
fi

echo ""

# Check log files
echo -e "${BLUE}📄 Log Files:${NC}"
for log_file in "$AUTOMATION_DIR/logs"/enhanced-cursor-sync*.log; do
    if [ -f "$log_file" ]; then
        local filename=$(basename "$log_file")
        local last_modified=$(stat -f "%Sm" "$log_file" 2>/dev/null || stat -c "%y" "$log_file" 2>/dev/null)
        local size=$(du -h "$log_file" | cut -f1)
        echo "  $filename: $size, updated $last_modified"
    fi
done

echo ""

# Check metrics
echo -e "${BLUE}📊 Metrics:${NC}"
local metrics_file="$AUTOMATION_DIR/metrics/enhanced-sync-metrics.json"
if [ -f "$metrics_file" ]; then
    local total_syncs=$(jq -r '.totalSyncs' "$metrics_file" 2>/dev/null || echo "0")
    local successful_syncs=$(jq -r '.successfulSyncs' "$metrics_file" 2>/dev/null || echo "0")
    local failed_syncs=$(jq -r '.failedSyncs' "$metrics_file" 2>/dev/null || echo "0")
    local avg_duration=$(jq -r '.averageDuration' "$metrics_file" 2>/dev/null || echo "0")
    
    if [ "$total_syncs" -gt 0 ]; then
        local success_rate=$(echo "scale=2; $successful_syncs * 100 / $total_syncs" | bc 2>/dev/null || echo "0")
        echo -e "${GREEN}✅ Total syncs: $total_syncs${NC}"
        echo -e "${GREEN}✅ Successful: $successful_syncs${NC}"
        echo -e "${GREEN}✅ Failed: $failed_syncs${NC}"
        echo -e "${GREEN}✅ Success rate: ${success_rate}%${NC}"
        echo -e "${GREEN}✅ Average duration: ${avg_duration}ms${NC}"
    else
        echo -e "${YELLOW}⚠️ No sync metrics available${NC}"
    fi
else
    echo -e "${YELLOW}⚠️ No metrics file found${NC}"
fi

echo ""

# Check backups
echo -e "${BLUE}💾 Backups:${NC}"
local backup_dir="$AUTOMATION_DIR/backups"
if [ -d "$backup_dir" ]; then
    local backup_count=$(find "$backup_dir" -name "sync-backup-*" -type d | wc -l)
    echo -e "${GREEN}✅ Backup count: $backup_count${NC}"
else
    echo -e "${YELLOW}⚠️ No backup directory found${NC}"
fi

echo ""

# Check running processes
echo -e "${BLUE}🔄 Running Processes:${NC}"
local running_processes=$(ps aux | grep "enhanced-cursor-sync-automation" | grep -v grep | wc -l)
if [ "$running_processes" -gt 0 ]; then
    echo -e "${GREEN}✅ $running_processes enhanced cursor sync processes running${NC}"
    ps aux | grep "enhanced-cursor-sync-automation" | grep -v grep | while read -r line; do
        echo "  $line"
    done
else
    echo -e "${YELLOW}⚠️ No enhanced cursor sync processes running${NC}"
fi

echo ""

# Check configuration
echo -e "${BLUE}⚙️ Configuration:${NC}"
local config_file="$AUTOMATION_DIR/enhanced-cursor-sync-config.json"
if [ -f "$config_file" ]; then
    local enabled=$(jq -r '.enabled' "$config_file" 2>/dev/null || echo "unknown")
    local sync_interval=$(jq -r '.syncInterval' "$config_file" 2>/dev/null || echo "unknown")
    local branch=$(jq -r '.branch' "$config_file" 2>/dev/null || echo "unknown")
    
    echo -e "${GREEN}✅ Enabled: $enabled${NC}"
    echo -e "${GREEN}✅ Sync interval: ${sync_interval}ms${NC}"
    echo -e "${GREEN}✅ Branch: $branch${NC}"
else
    echo -e "${RED}❌ Configuration file not found${NC}"
fi

echo ""
echo "📁 Log Directory: $AUTOMATION_DIR/logs"
echo "📊 Metrics Directory: $AUTOMATION_DIR/metrics"
echo "💾 Backup Directory: $AUTOMATION_DIR/backups"
echo "⚙️ Config File: $AUTOMATION_DIR/enhanced-cursor-sync-config.json"
echo ""
echo "🛠️ Management Commands:"
echo "  • Start: bash automation/start-enhanced-cursor-sync.sh"
echo "  • Stop: bash automation/stop-enhanced-cursor-sync.sh"
echo "  • Health Check: bash automation/enhanced-cursor-sync-health-check.sh"
echo "  • Backup Cleanup: bash automation/enhanced-cursor-sync-backup-cleanup.sh" 