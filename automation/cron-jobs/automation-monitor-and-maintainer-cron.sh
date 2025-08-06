#!/bin/bash

# Automation Monitor and Maintainer Cron Job
# This script manages the automation monitoring and maintenance system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$(dirname "$SCRIPT_DIR")"
PROJECT_ROOT="$(dirname "$AUTOMATION_DIR")"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_DIR="$AUTOMATION_DIR/pids"
REPORT_DIR="$AUTOMATION_DIR/reports"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$REPORT_DIR"

# Configuration
LAUNCHER_SCRIPT="$AUTOMATION_DIR/launch-automation-monitor-and-maintainer.js"
FACTORY_SCRIPT="$AUTOMATION_DIR/automation-monitor-and-maintainer-factory.js"
PID_FILE="$PID_DIR/automation-monitor.pid"
LOG_FILE="$LOG_DIR/automation-monitor.log"
STATUS_FILE="$AUTOMATION_DIR/automation-monitor-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

error_log() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

success_log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOG_FILE"
}

warning_log() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        error_log "Node.js is not installed or not in PATH"
        exit 1
    fi
}

# Check if required files exist
check_files() {
    if [[ ! -f "$LAUNCHER_SCRIPT" ]]; then
        error_log "Launcher script not found: $LAUNCHER_SCRIPT"
        exit 1
    fi
    
    if [[ ! -f "$FACTORY_SCRIPT" ]]; then
        error_log "Factory script not found: $FACTORY_SCRIPT"
        exit 1
    fi
}

# Get process status
get_status() {
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "running"
        else
            echo "stopped"
        fi
    else
        echo "stopped"
    fi
}

# Start the automation monitor
start() {
    log "Starting Automation Monitor and Maintainer System..."
    
    check_node
    check_files
    
    local status=$(get_status)
    if [[ "$status" == "running" ]]; then
        warning_log "System is already running"
        return 0
    fi
    
    # Start the launcher
    cd "$AUTOMATION_DIR"
    nohup node "$LAUNCHER_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Wait a moment and check if it started successfully
    sleep 3
    if ps -p "$pid" > /dev/null 2>&1; then
        echo "$pid" > "$PID_FILE"
        success_log "Automation Monitor and Maintainer System started (PID: $pid)"
        
        # Update status file
        cat > "$STATUS_FILE" << EOF
{
    "status": "running",
    "pid": $pid,
    "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "launcher_script": "$LAUNCHER_SCRIPT",
    "factory_script": "$FACTORY_SCRIPT"
}
EOF
        return 0
    else
        error_log "Failed to start Automation Monitor and Maintainer System"
        return 1
    fi
}

# Stop the automation monitor
stop() {
    log "Stopping Automation Monitor and Maintainer System..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [[ $count -lt 30 ]]; do
                sleep 1
                ((count++))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -9 "$pid" 2>/dev/null
                warning_log "Force killed process $pid"
            fi
            
            rm -f "$PID_FILE"
            success_log "Automation Monitor and Maintainer System stopped"
            
            # Update status file
            cat > "$STATUS_FILE" << EOF
{
    "status": "stopped",
    "stopped_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
        else
            warning_log "Process not running (PID: $pid)"
            rm -f "$PID_FILE"
        fi
    else
        warning_log "No PID file found"
    fi
}

# Restart the automation monitor
restart() {
    log "Restarting Automation Monitor and Maintainer System..."
    stop
    sleep 2
    start
}

# Check system health
health() {
    log "Performing health check..."
    
    local status=$(get_status)
    if [[ "$status" != "running" ]]; then
        error_log "System is not running"
        return 1
    fi
    
    # Check if launcher is responding
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            # Try to get health status from launcher
            cd "$AUTOMATION_DIR"
            local health_output=$(timeout 10 node "$LAUNCHER_SCRIPT" health 2>/dev/null)
            if [[ $? -eq 0 ]]; then
                success_log "Health check completed successfully"
                echo "$health_output"
            else
                error_log "Health check failed"
                return 1
            fi
        else
            error_log "Process not running"
            return 1
        fi
    else
        error_log "No PID file found"
        return 1
    fi
}

# Generate system report
report() {
    log "Generating system report..."
    
    local status=$(get_status)
    if [[ "$status" != "running" ]]; then
        error_log "System is not running"
        return 1
    fi
    
    # Generate report from launcher
    cd "$AUTOMATION_DIR"
    local report_output=$(timeout 30 node "$LAUNCHER_SCRIPT" report 2>/dev/null)
    if [[ $? -eq 0 ]]; then
        success_log "System report generated successfully"
        echo "$report_output"
    else
        error_log "Failed to generate system report"
        return 1
    fi
}

# Monitor system status
monitor() {
    log "Monitoring system status..."
    
    local status=$(get_status)
    local report_file="$REPORT_DIR/monitor-report-$(date +%Y%m%d-%H%M%S).json"
    
    local monitor_data=$(cat << EOF
{
    "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "status": "$status",
    "pid_file": "$PID_FILE",
    "log_file": "$LOG_FILE",
    "launcher_script": "$LAUNCHER_SCRIPT",
    "factory_script": "$FACTORY_SCRIPT"
}
EOF
)
    
    echo "$monitor_data" > "$report_file"
    success_log "Monitor report saved to $report_file"
    echo "$monitor_data"
}

# Backup system
backup() {
    log "Creating system backup..."
    
    local backup_dir="$AUTOMATION_DIR/backups/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$backup_dir"
    
    # Backup automation files
    cp -r "$AUTOMATION_DIR"/*.js "$backup_dir/" 2>/dev/null
    cp -r "$AUTOMATION_DIR"/*.json "$backup_dir/" 2>/dev/null
    cp -r "$AUTOMATION_DIR"/*.sh "$backup_dir/" 2>/dev/null
    
    # Backup configuration
    if [[ -f "$AUTOMATION_DIR/automation-monitor-config.json" ]]; then
        cp "$AUTOMATION_DIR/automation-monitor-config.json" "$backup_dir/"
    fi
    
    # Backup logs
    if [[ -d "$LOG_DIR" ]]; then
        cp -r "$LOG_DIR" "$backup_dir/"
    fi
    
    success_log "Backup created: $backup_dir"
}

# Cleanup old files
cleanup() {
    log "Performing cleanup..."
    
    # Cleanup old log files (older than 7 days)
    if [[ -d "$LOG_DIR" ]]; then
        find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null
    fi
    
    # Cleanup old reports (older than 30 days)
    if [[ -d "$REPORT_DIR" ]]; then
        find "$REPORT_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null
    fi
    
    # Cleanup old backups (older than 60 days)
    if [[ -d "$AUTOMATION_DIR/backups" ]]; then
        find "$AUTOMATION_DIR/backups" -type d -mtime +60 -exec rm -rf {} + 2>/dev/null
    fi
    
    success_log "Cleanup completed"
}

# Show system status
status() {
    local status=$(get_status)
    local uptime=""
    local pid=""
    
    if [[ "$status" == "running" && -f "$PID_FILE" ]]; then
        pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            uptime=$(ps -o etime= -p "$pid" 2>/dev/null | xargs)
        fi
    fi
    
    cat << EOF
Automation Monitor and Maintainer System Status
===============================================
Status: $status
PID: ${pid:-N/A}
Uptime: ${uptime:-N/A}
PID File: $PID_FILE
Log File: $LOG_FILE
Launcher Script: $LAUNCHER_SCRIPT
Factory Script: $FACTORY_SCRIPT
EOF
    
    # Show recent log entries
    if [[ -f "$LOG_FILE" ]]; then
        echo ""
        echo "Recent Log Entries:"
        echo "==================="
        tail -n 10 "$LOG_FILE" 2>/dev/null || echo "No log entries found"
    fi
}

# Show help
help() {
    cat << EOF
Automation Monitor and Maintainer Cron Job

Usage: $0 {start|stop|restart|status|health|report|monitor|backup|cleanup|help}

Commands:
    start       Start the automation monitor and maintainer system
    stop        Stop the automation monitor and maintainer system
    restart     Restart the automation monitor and maintainer system
    status      Show current system status
    health      Perform health check
    report      Generate system report
    monitor     Monitor system status
    backup      Create system backup
    cleanup     Cleanup old files
    help        Show this help message

Examples:
    $0 start
    $0 status
    $0 health
    $0 report

Environment Variables:
    LOG_DIR      Directory for log files (default: automation/logs)
    PID_DIR      Directory for PID files (default: automation/pids)
    REPORT_DIR   Directory for report files (default: automation/reports)
EOF
}

# Main script logic
case "${1:-}" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    health)
        health
        ;;
    report)
        report
        ;;
    monitor)
        monitor
        ;;
    backup)
        backup
        ;;
    cleanup)
        cleanup
        ;;
    help|--help|-h)
        help
        ;;
    *)
        error_log "Unknown command: ${1:-}"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac

exit $?
