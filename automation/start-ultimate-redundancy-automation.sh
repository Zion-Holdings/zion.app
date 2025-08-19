#!/bin/bash

# Ultimate Redundancy Automation Master Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-automation.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-automation.log"
MASTER_SCRIPT="$WORKSPACE_DIR/automation/ultimate-redundancy-automation-master.cjs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Error handling
error_exit() {
    log "ERROR" "Script failed: $1"
    exit 1
}

# Check if script is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Ultimate redundancy automation master already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start the ultimate redundancy automation master
start_master() {
    log "INFO" "Starting Ultimate Redundancy Automation Master..."
    
    if [ ! -f "$MASTER_SCRIPT" ]; then
        error_exit "Master script not found: $MASTER_SCRIPT"
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed. Please install Node.js first."
    fi
    
    # Check if required dependencies are installed
    if [ ! -f "$WORKSPACE_DIR/node_modules/node-cron/package.json" ]; then
        log "WARN" "Installing required dependencies..."
        cd "$WORKSPACE_DIR" && npm install node-cron || log "WARN" "Failed to install node-cron"
    fi
    
    # Start the master process
    cd "$WORKSPACE_DIR"
    nohup node "$MASTER_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if process is running
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "Ultimate redundancy automation master started successfully (PID: $pid)"
        return 0
    else
        error_exit "Failed to start ultimate redundancy automation master"
    fi
}

# Stop the ultimate redundancy automation master
stop_master() {
    log "INFO" "Stopping Ultimate Redundancy Automation Master..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
            sleep 2
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -9 "$pid" 2>/dev/null || true
                log "WARN" "Force killed process $pid"
            fi
            
            log "INFO" "Ultimate redundancy automation master stopped"
        else
            log "WARN" "Process $pid not running"
        fi
        
        rm -f "$PID_FILE"
    else
        log "WARN" "No PID file found"
    fi
    
    # Also try to stop via the master script
    cd "$WORKSPACE_DIR"
    node "$MASTER_SCRIPT" stop 2>/dev/null || true
}

# Restart the ultimate redundancy automation master
restart_master() {
    log "INFO" "Restarting Ultimate Redundancy Automation Master..."
    stop_master
    sleep 2
    start_master
}

# Check status of the ultimate redundancy automation master
check_status() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate redundancy automation master is running (PID: $pid)"
            
            # Get detailed status from the master script
            if [ -f "$MASTER_SCRIPT" ]; then
                cd "$WORKSPACE_DIR"
                echo "=== Detailed Status ==="
                node "$MASTER_SCRIPT" status 2>/dev/null || echo "Failed to get detailed status"
                echo ""
            fi
            
            return 0
        else
            log "WARN" "PID file exists but process not running"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        log "INFO" "Ultimate redundancy automation master is not running"
        return 1
    fi
}

# Check health of all systems
check_health() {
    log "INFO" "Checking system health..."
    
    if [ -f "$MASTER_SCRIPT" ]; then
        cd "$WORKSPACE_DIR"
        echo "=== System Health Report ==="
        node "$MASTER_SCRIPT" health 2>/dev/null || echo "Failed to get health report"
        echo ""
    else
        log "ERROR" "Master script not found"
    fi
}

# Show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing recent logs..."
        tail -n 100 "$LOG_FILE"
    else
        log "WARN" "No log file found"
    fi
}

# Monitor the system
monitor_system() {
    log "INFO" "Starting system monitoring..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Monitoring ultimate redundancy automation master (PID: $pid)"
            
            # Monitor in real-time
            tail -f "$LOG_FILE" &
            local tail_pid=$!
            
            # Monitor process
            while ps -p "$pid" > /dev/null 2>&1; do
                sleep 10
                echo "=== Status Check $(date) ==="
                node "$MASTER_SCRIPT" status 2>/dev/null || echo "Status check failed"
                echo ""
            done
            
            kill "$tail_pid" 2>/dev/null || true
            log "INFO" "Monitoring stopped - process no longer running"
        else
            log "ERROR" "Process $pid not running"
        fi
    else
        log "ERROR" "No PID file found"
    fi
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            if check_running; then
                log "INFO" "System already running"
                exit 0
            fi
            start_master
            ;;
        stop)
            stop_master
            ;;
        restart)
            restart_master
            ;;
        status)
            check_status
            ;;
        health)
            check_health
            ;;
        logs)
            show_logs
            ;;
        monitor)
            monitor_system
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|logs|monitor}"
            echo ""
            echo "Commands:"
            echo "  start   - Start the ultimate redundancy automation master"
            echo "  stop    - Stop the ultimate redundancy automation master"
            echo "  restart - Restart the ultimate redundancy automation master"
            echo "  status  - Check status of the system"
            echo "  health  - Check health of all systems"
            echo "  logs    - Show recent logs"
            echo "  monitor - Monitor the system in real-time"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"