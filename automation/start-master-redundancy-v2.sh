#!/bin/bash

# Master Redundancy Orchestrator V2 - Complete Automation Coverage
# This script provides comprehensive redundancy for ALL PM2 automations, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/master-redundancy-v2.pid"
LOG_FILE="$LOG_DIR/master-redundancy-v2.log"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/master-redundancy-orchestrator-v2.cjs"

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

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed or not in PATH"
        exit 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
}

# Check if orchestrator script exists
check_orchestrator() {
    if [[ ! -f "$ORCHESTRATOR_SCRIPT" ]]; then
        log "ERROR" "Orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
    
    log "INFO" "Orchestrator script found: $ORCHESTRATOR_SCRIPT"
}

# Start the redundancy system
start() {
    log "INFO" "Starting Master Redundancy Orchestrator V2..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Redundancy system already running with PID $pid"
            return 0
        else
            log "INFO" "Removing stale PID file"
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the orchestrator
    log "INFO" "Launching orchestrator..."
    nohup node "$ORCHESTRATOR_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    echo "$pid" > "$PID_FILE"
    
    log "INFO" "Master Redundancy Orchestrator V2 started with PID $pid"
    log "INFO" "Log file: $LOG_FILE"
    
    # Wait a moment and check status
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "System startup successful"
        show_status
    else
        log "ERROR" "System startup failed"
        exit 1
    fi
}

# Stop the redundancy system
stop() {
    log "INFO" "Stopping Master Redundancy Orchestrator V2..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process $pid"
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [[ $count -lt 10 ]]; do
                sleep 1
                ((count++))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Process did not stop gracefully, force killing"
                kill -9 "$pid"
            fi
        fi
        
        rm -f "$PID_FILE"
        log "INFO" "System stopped"
    else
        log "INFO" "No PID file found, system may not be running"
    fi
    
    # Stop all PM2 processes
    log "INFO" "Stopping all PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "INFO" "All redundancy systems stopped"
}

# Restart the redundancy system
restart() {
    log "INFO" "Restarting Master Redundancy Orchestrator V2..."
    stop
    sleep 2
    start
}

# Show system status
show_status() {
    log "INFO" "Checking system status..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Orchestrator running with PID $pid"
        else
            log "WARN" "PID file exists but process not running"
        fi
    else
        log "INFO" "No PID file found"
    fi
    
    # Check PM2 status
    log "INFO" "PM2 Status:"
    pm2 status 2>/dev/null || log "INFO" "No PM2 processes running"
    
    # Check orchestrator status
    if [[ -f "$ORCHESTRATOR_SCRIPT" ]]; then
        log "INFO" "Getting detailed status from orchestrator..."
        node "$ORCHESTRATOR_SCRIPT" status 2>/dev/null || log "WARN" "Failed to get orchestrator status"
    fi
}

# Show system health
show_health() {
    log "INFO" "Checking system health..."
    
    if [[ -f "$ORCHESTRATOR_SCRIPT" ]]; then
        node "$ORCHESTRATOR_SCRIPT" report 2>/dev/null || log "WARN" "Failed to get health report"
    else
        log "ERROR" "Orchestrator script not found"
    fi
}

# Start monitoring mode
start_monitor() {
    log "INFO" "Starting monitoring mode..."
    
    if [[ -f "$ORCHESTRATOR_SCRIPT" ]]; then
        log "INFO" "Launching orchestrator in monitor mode..."
        node "$ORCHESTRATOR_SCRIPT" monitor
    else
        log "ERROR" "Orchestrator script not found"
    fi
}

# Show logs
show_logs() {
    if [[ -f "$LOG_FILE" ]]; then
        log "INFO" "Showing recent logs (last 50 lines):"
        tail -n 50 "$LOG_FILE"
    else
        log "INFO" "No log file found"
    fi
}

# Check system
check_system() {
    log "INFO" "Performing system check..."
    
    check_node
    check_pm2
    check_orchestrator
    
    log "INFO" "System check completed successfully"
}

# Main function
main() {
    local command="${1:-status}"
    
    case "$command" in
        start)
            check_system
            start
            ;;
        stop)
            stop
            ;;
        restart)
            check_system
            restart
            ;;
        status)
            show_status
            ;;
        health)
            show_health
            ;;
        monitor)
            check_system
            start_monitor
            ;;
        logs)
            show_logs
            ;;
        check)
            check_system
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|monitor|logs|check}"
            echo ""
            echo "Commands:"
            echo "  start     - Start the redundancy system"
            echo "  stop      - Stop the redundancy system"
            echo "  restart   - Restart the redundancy system"
            echo "  status    - Show system status"
            echo "  health    - Show system health report"
            echo "  monitor   - Start continuous monitoring"
            echo "  logs      - Show recent logs"
            echo "  check     - Perform system check"
            echo ""
            echo "This system provides comprehensive redundancy for:"
            echo "  - All PM2 automations and ecosystems"
            echo "  - All GitHub Actions workflows"
            echo "  - All Netlify Functions"
            echo "  - All package.json scripts"
            exit 1
            ;;
    esac
}

# Handle script arguments
if [[ $# -eq 0 ]]; then
    main "status"
else
    main "$@"
fi