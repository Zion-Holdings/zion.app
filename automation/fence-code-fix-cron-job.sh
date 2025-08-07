#!/bin/bash

# Fence Code Fix Cron Job
# Runs the fence code fix automation continuously

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_SCRIPT="$SCRIPT_DIR/fence-code-fix-automation-script.js"
LOG_DIR="$SCRIPT_DIR/fence-code-fix-logs"
PID_DIR="$SCRIPT_DIR/fence-code-fix-pids"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_DIR/cron-job.log"
}

error_log() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_DIR/cron-job-error.log"
}

# Get PID file path
get_pid_file() {
    echo "$PID_DIR/fence-code-fix-automation.pid"
}

# Check if automation is running
is_running() {
    local pid_file=$(get_pid_file)
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            # PID file exists but process is dead
            rm -f "$pid_file"
        fi
    fi
    return 1
}

# Start the automation
start_automation() {
    if is_running; then
        log "Automation is already running"
        return 0
    fi

    log "Starting fence code fix automation..."
    
    # Create PID file
    local pid_file=$(get_pid_file)
    
    # Start the automation in background
    nohup node "$AUTOMATION_SCRIPT" start > "$LOG_DIR/automation.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo $pid > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 3
    if ps -p "$pid" > /dev/null 2>&1; then
        log "Automation started successfully with PID: $pid"
        return 0
    else
        error_log "Failed to start automation"
        rm -f "$pid_file"
        return 1
    fi
}

# Stop the automation
stop_automation() {
    local pid_file=$(get_pid_file)
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "Stopping automation (PID: $pid)..."
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "Force killing automation..."
                kill -9 "$pid"
            fi
            
            rm -f "$pid_file"
            log "Automation stopped"
        else
            log "Automation is not running"
            rm -f "$pid_file"
        fi
    else
        log "No PID file found"
    fi
}

# Restart the automation
restart_automation() {
    log "Restarting automation..."
    stop_automation
    sleep 2
    start_automation
}

# Check automation status
status_automation() {
    if is_running; then
        local pid_file=$(get_pid_file)
        local pid=$(cat "$pid_file")
        log "Automation is running (PID: $pid)"
        
        # Show recent logs
        if [ -f "$LOG_DIR/automation.log" ]; then
            echo -e "${BLUE}Recent automation logs:${NC}"
            tail -n 10 "$LOG_DIR/automation.log"
        fi
        
        # Show stats
        if [ -f "$SCRIPT_DIR/fence-code-fix-status/automation-stats.json" ]; then
            echo -e "${BLUE}Current stats:${NC}"
            cat "$SCRIPT_DIR/fence-code-fix-status/automation-stats.json" | head -20
        fi
    else
        log "Automation is not running"
    fi
}

# Monitor automation health
monitor_automation() {
    while true; do
        if ! is_running; then
            error_log "Automation is not running, restarting..."
            start_automation
        fi
        
        # Check memory usage
        local pid_file=$(get_pid_file)
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ps -p "$pid" > /dev/null 2>&1; then
                local mem_usage=$(ps -o rss= -p "$pid" 2>/dev/null | awk '{print $1}')
                if [ -n "$mem_usage" ] && [ "$mem_usage" -gt 100000 ]; then
                    log "High memory usage detected (${mem_usage}KB), restarting automation..."
                    restart_automation
                fi
            fi
        fi
        
        sleep 60
    done
}

# Cleanup old logs
cleanup_logs() {
    log "Cleaning up old logs..."
    
    # Keep only last 7 days of logs
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Keep only last 30 days of backups
    find "$SCRIPT_DIR/fence-code-fix-backups" -name "*.backup" -mtime +30 -delete 2>/dev/null || true
    
    log "Log cleanup completed"
}

# Install cron job
install_cron() {
    log "Installing cron job..."
    
    # Create cron job entry - run every 5 minutes
    local cron_entry="*/5 * * * * $SCRIPT_DIR/fence-code-fix-cron-job.sh monitor > /dev/null 2>&1"
    
    # Check if cron job already exists
    if crontab -l 2>/dev/null | grep -q "fence-code-fix-cron-job.sh"; then
        log "Cron job already exists"
    else
        # Add to crontab
        (crontab -l 2>/dev/null; echo "$cron_entry") | crontab -
        log "Cron job installed successfully"
    fi
}

# Uninstall cron job
uninstall_cron() {
    log "Uninstalling cron job..."
    
    # Remove from crontab
    crontab -l 2>/dev/null | grep -v "fence-code-fix-cron-job.sh" | crontab -
    
    log "Cron job uninstalled"
}

# Run a single scan
run_scan() {
    log "Running single scan..."
    node "$AUTOMATION_SCRIPT" full-scan
}

# Run a single fix
run_fix() {
    local file="$1"
    if [ -z "$file" ]; then
        error_log "Please specify a file to fix"
        return 1
    fi
    
    log "Running fix for file: $file"
    node "$AUTOMATION_SCRIPT" fix "$file"
}

# Show help
show_help() {
    echo "Fence Code Fix Cron Job"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the automation"
    echo "  stop      - Stop the automation"
    echo "  restart   - Restart the automation"
    echo "  status    - Show automation status"
    echo "  monitor   - Monitor automation health (for cron)"
    echo "  scan      - Run a single scan"
    echo "  fix <file> - Fix errors in a specific file"
    echo "  install   - Install cron job"
    echo "  uninstall - Uninstall cron job"
    echo "  cleanup   - Cleanup old logs"
    echo "  help      - Show this help"
    echo ""
}

# Main execution
main() {
    case "${1:-help}" in
        start)
            start_automation
            ;;
        stop)
            stop_automation
            ;;
        restart)
            restart_automation
            ;;
        status)
            status_automation
            ;;
        monitor)
            monitor_automation
            ;;
        scan)
            run_scan
            ;;
        fix)
            run_fix "$2"
            ;;
        install)
            install_cron
            ;;
        uninstall)
            uninstall_cron
            ;;
        cleanup)
            cleanup_logs
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            error_log "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function
main "$@"
