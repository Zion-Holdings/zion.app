#!/bin/bash

# Fence Code Fix Continuous Automation Cron
# Continuously runs the fence code fix autonomous agents factory

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FACTORY_SCRIPT="$SCRIPT_DIR/fence-code-fix-autonomous-agents-factory.js"
LOG_DIR="$SCRIPT_DIR/fence-code-fix-logs"
PID_DIR="$SCRIPT_DIR/fence-code-fix-pids"
STATUS_DIR="$SCRIPT_DIR/fence-code-fix-status"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_DIR/cron.log"
}

error_log() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_DIR/cron-error.log"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        error_log "Node.js is not installed or not in PATH"
        exit 1
    fi
}

# Check if factory script exists
check_factory() {
    if [ ! -f "$FACTORY_SCRIPT" ]; then
        error_log "Factory script not found: $FACTORY_SCRIPT"
        exit 1
    fi
}

# Get PID file path
get_pid_file() {
    echo "$PID_DIR/fence-code-fix-factory.pid"
}

# Check if factory is running
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

# Start the factory
start_factory() {
    if is_running; then
        log "Factory is already running"
        return 0
    fi

    log "Starting fence code fix autonomous agents factory..."
    
    # Create PID file
    local pid_file=$(get_pid_file)
    
    # Start the factory in background
    nohup node "$FACTORY_SCRIPT" > "$LOG_DIR/factory.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo $pid > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        log "Factory started successfully with PID: $pid"
        return 0
    else
        error_log "Failed to start factory"
        rm -f "$pid_file"
        return 1
    fi
}

# Stop the factory
stop_factory() {
    local pid_file=$(get_pid_file)
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "Stopping factory (PID: $pid)..."
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "Force killing factory..."
                kill -9 "$pid"
            fi
            
            rm -f "$pid_file"
            log "Factory stopped"
        else
            log "Factory is not running"
            rm -f "$pid_file"
        fi
    else
        log "No PID file found"
    fi
}

# Restart the factory
restart_factory() {
    log "Restarting factory..."
    stop_factory
    sleep 2
    start_factory
}

# Check factory status
status_factory() {
    if is_running; then
        local pid_file=$(get_pid_file)
        local pid=$(cat "$pid_file")
        log "Factory is running (PID: $pid)"
        
        # Show recent logs
        if [ -f "$LOG_DIR/factory.log" ]; then
            echo -e "${BLUE}Recent factory logs:${NC}"
            tail -n 10 "$LOG_DIR/factory.log"
        fi
    else
        log "Factory is not running"
    fi
}

# Monitor factory health
monitor_factory() {
    while true; do
        if ! is_running; then
            error_log "Factory is not running, restarting..."
            start_factory
        fi
        
        # Check memory usage
        local pid_file=$(get_pid_file)
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ps -p "$pid" > /dev/null 2>&1; then
                local mem_usage=$(ps -o rss= -p "$pid" 2>/dev/null | awk '{print $1}')
                if [ -n "$mem_usage" ] && [ "$mem_usage" -gt 100000 ]; then
                    log "High memory usage detected (${mem_usage}KB), restarting factory..."
                    restart_factory
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
    
    # Create cron job entry
    local cron_entry="*/5 * * * * $SCRIPT_DIR/fence-code-fix-continuous-automation-cron.sh monitor > /dev/null 2>&1"
    
    # Check if cron job already exists
    if crontab -l 2>/dev/null | grep -q "fence-code-fix-continuous-automation-cron.sh"; then
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
    crontab -l 2>/dev/null | grep -v "fence-code-fix-continuous-automation-cron.sh" | crontab -
    
    log "Cron job uninstalled"
}

# Show help
show_help() {
    echo "Fence Code Fix Continuous Automation Cron"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the factory"
    echo "  stop      - Stop the factory"
    echo "  restart   - Restart the factory"
    echo "  status    - Show factory status"
    echo "  monitor   - Monitor factory health (for cron)"
    echo "  install   - Install cron job"
    echo "  uninstall - Uninstall cron job"
    echo "  cleanup   - Cleanup old logs"
    echo "  help      - Show this help"
    echo ""
}

# Main execution
main() {
    # Check prerequisites
    check_node
    check_factory
    
    case "${1:-help}" in
        start)
            start_factory
            ;;
        stop)
            stop_factory
            ;;
        restart)
            restart_factory
            ;;
        status)
            status_factory
            ;;
        monitor)
            monitor_factory
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
