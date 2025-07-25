#!/bin/bash

# Enhanced Cursor Sync Automation Cron Setup Script
# Sets up cron jobs to run enhanced cursor sync automation every minute

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Get the project directory
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

log "Setting up Enhanced Cursor sync automation cron jobs..."

# Check if we're in the right directory
if [ ! -f "$PROJECT_DIR/package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Create cron job entries for enhanced cursor sync
create_enhanced_cursor_sync_cron_jobs() {
    local cron_file="/tmp/enhanced_cursor_sync_cron_$$"
    
    # Remove existing cursor sync cron jobs
    (crontab -l 2>/dev/null | grep -v "enhanced-cursor-sync") > "$cron_file" || true
    
    # Add new enhanced cursor sync cron jobs
    cat >> "$cron_file" << EOF

# Enhanced Cursor Sync Automation Cron Jobs
# Enhanced Cursor Sync - Every minute
* * * * * cd "$PROJECT_DIR" && node automation/enhanced-cursor-sync-automation.js --once >> automation/logs/enhanced-cursor-sync-cron.log 2>&1

# Enhanced Cursor Sync Health Check - Every 5 minutes
*/5 * * * * cd "$PROJECT_DIR" && bash automation/enhanced-cursor-sync-health-check.sh >> automation/logs/enhanced-cursor-sync-health.log 2>&1

# Enhanced Cursor Sync Log Rotation - Daily at 2 AM
0 2 * * * cd "$PROJECT_DIR" && find automation/logs -name "enhanced-cursor-sync*.log" -mtime +7 -delete >> automation/logs/enhanced-cursor-sync-cleanup.log 2>&1

# Enhanced Cursor Sync Metrics Collection - Every 10 minutes
*/10 * * * * cd "$PROJECT_DIR" && node automation/enhanced-cursor-sync-metrics.js >> automation/logs/enhanced-cursor-sync-metrics.log 2>&1

# Enhanced Cursor Sync Backup Cleanup - Daily at 3 AM
0 3 * * * cd "$PROJECT_DIR" && bash automation/enhanced-cursor-sync-backup-cleanup.sh >> automation/logs/enhanced-cursor-sync-backup-cleanup.log 2>&1

# Enhanced Cursor Sync Status Report - Every 30 minutes
*/30 * * * * cd "$PROJECT_DIR" && bash automation/enhanced-cursor-sync-status.sh >> automation/logs/enhanced-cursor-sync-status.log 2>&1

EOF

    # Install the new cron jobs
    crontab "$cron_file"
    rm "$cron_file"
    
    log "✅ Enhanced cursor sync cron jobs installed successfully"
}

# Create log directories
create_log_directories() {
    log "Creating log directories..."
    
    mkdir -p "$AUTOMATION_DIR/logs"
    mkdir -p "$AUTOMATION_DIR/reports"
    mkdir -p "$AUTOMATION_DIR/backups"
    mkdir -p "$AUTOMATION_DIR/metrics"
    
    # Create initial log files
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-cron.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-health.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-cleanup.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-metrics.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-backup-cleanup.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync-status.log"
    touch "$AUTOMATION_DIR/logs/enhanced-cursor-sync.log"
    
    log "✅ Log directories created"
}

# Create health check script
create_health_check_script() {
    log "Creating enhanced health check script..."
    
    cat > "$AUTOMATION_DIR/enhanced-cursor-sync-health-check.sh" << 'EOF'
#!/bin/bash

# Enhanced Cursor Sync Health Check Script
# Monitors enhanced cursor sync automation and sends alerts if needed

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
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

# Main health check function
main() {
    echo "=== Enhanced Cursor Sync Health Check ==="
    echo "Timestamp: $(date)"
    echo ""
    
    local health_status=0
    
    check_enhanced_cursor_sync_health || health_status=1
    echo ""
    check_stuck_processes || health_status=1
    echo ""
    check_backup_health || health_status=1
    
    if [ $health_status -eq 0 ]; then
        echo -e "\n${GREEN}✅ All health checks passed${NC}"
    else
        echo -e "\n${RED}❌ Some health checks failed${NC}"
    fi
    
    return $health_status
}

main "$@"
EOF

    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-health-check.sh"
    log "✅ Enhanced health check script created"
}

# Create backup cleanup script
create_backup_cleanup_script() {
    log "Creating backup cleanup script..."
    
    cat > "$AUTOMATION_DIR/enhanced-cursor-sync-backup-cleanup.sh" << 'EOF'
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
EOF

    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-backup-cleanup.sh"
    log "✅ Backup cleanup script created"
}

# Create status script
create_status_script() {
    log "Creating enhanced status script..."
    
    cat > "$AUTOMATION_DIR/enhanced-cursor-sync-status.sh" << 'EOF'
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
echo "📁 Log Directory: $AUTOMATION_DIR/logs"
echo "📊 Metrics Directory: $AUTOMATION_DIR/metrics"
echo "💾 Backup Directory: $AUTOMATION_DIR/backups"
echo "⚙️ Config File: $AUTOMATION_DIR/enhanced-cursor-sync-config.json"
EOF

    chmod +x "$AUTOMATION_DIR/enhanced-cursor-sync-status.sh"
    log "✅ Enhanced status script created"
}

# Main setup function
main() {
    log "🚀 Setting up Enhanced Cursor sync automation cron jobs..."
    
    # Create directories and scripts
    create_log_directories
    create_health_check_script
    create_backup_cleanup_script
    create_status_script
    
    # Install cron jobs
    create_enhanced_cursor_sync_cron_jobs
    
    log "✅ Enhanced Cursor sync automation setup completed!"
    log ""
    log "📋 Installed cron jobs:"
    log "  • Enhanced Cursor Sync: Every minute"
    log "  • Health Check: Every 5 minutes"
    log "  • Metrics Collection: Every 10 minutes"
    log "  • Log Rotation: Daily at 2 AM"
    log "  • Backup Cleanup: Daily at 3 AM"
    log "  • Status Report: Every 30 minutes"
    log ""
    log "📊 Management:"
    log "  • Check status: $AUTOMATION_DIR/enhanced-cursor-sync-status.sh"
    log "  • Health check: $AUTOMATION_DIR/enhanced-cursor-sync-health-check.sh"
    log "  • Backup cleanup: $AUTOMATION_DIR/enhanced-cursor-sync-backup-cleanup.sh"
    log ""
    log "📁 Logs and Metrics:"
    log "  • Logs: $AUTOMATION_DIR/logs/"
    log "  • Metrics: $AUTOMATION_DIR/metrics/"
    log "  • Backups: $AUTOMATION_DIR/backups/"
    log "  • Config: $AUTOMATION_DIR/enhanced-cursor-sync-config.json"
    log ""
    log "🔧 To remove cron jobs, run: crontab -e"
}

# Check if running as root (needed for crontab)
if [ "$EUID" -eq 0 ]; then
    error "This script should not be run as root"
    exit 1
fi

# Run main function
main "$@" 