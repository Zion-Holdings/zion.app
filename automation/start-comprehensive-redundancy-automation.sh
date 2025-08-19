#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script provides complete redundancy coverage for all PM2, GitHub Actions, and Netlify automations

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/comprehensive-redundancy-automation.pid"
STATUS_FILE="$WORKSPACE_DIR/automation/comprehensive-redundancy-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_DIR/comprehensive-redundancy-automation.log"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_DIR/comprehensive-redundancy-automation.log"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_DIR/comprehensive-redundancy-automation.log"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOG_DIR/comprehensive-redundancy-automation.log"
}

check_dependencies() {
    log "Checking dependencies..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        warn "PM2 is not installed or not in PATH"
    fi
    
    # Check if git is available
    if ! command -v git &> /dev/null; then
        warn "Git is not installed or not in PATH"
    fi
    
    log "Dependencies check completed"
}

start_system() {
    log "Starting Comprehensive Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            warn "System is already running with PID $pid"
            return 1
        else
            warn "Removing stale PID file"
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the system in background
    cd "$WORKSPACE_DIR"
    nohup node automation/comprehensive-redundancy-automation-system.cjs start > "$LOG_DIR/comprehensive-redundancy-automation.out" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    log "System started with PID $pid"
    
    # Wait a moment and check if it's running
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        log "System is running successfully"
        return 0
    else
        error "Failed to start system"
        rm -f "$PID_FILE"
        return 1
    fi
}

stop_system() {
    log "Stopping Comprehensive Redundancy Automation System..."
    
    if [ ! -f "$PID_FILE" ]; then
        warn "No PID file found - system may not be running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    if ps -p "$pid" > /dev/null 2>&1; then
        log "Stopping process $pid..."
        kill "$pid"
        
        # Wait for process to stop
        local count=0
        while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        if ps -p "$pid" > /dev/null 2>&1; then
            warn "Process did not stop gracefully, force killing..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        log "System stopped"
    else
        warn "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
}

restart_system() {
    log "Restarting Comprehensive Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

check_status() {
    log "Checking system status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "System is running with PID $pid"
            
            # Get detailed status
            cd "$WORKSPACE_DIR"
            if [ -f "$STATUS_FILE" ]; then
                log "Current status:"
                cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
            else
                warn "No status file found"
            fi
        else
            warn "PID file exists but process is not running"
            rm -f "$PID_FILE"
        fi
    else
        log "System is not running"
    fi
}

check_health() {
    log "Checking system health..."
    
    cd "$WORKSPACE_DIR"
    if command -v node &> /dev/null; then
        node automation/comprehensive-redundancy-automation-system.cjs health
    else
        error "Node.js not available for health check"
    fi
}

create_backup() {
    log "Creating redundancy backup..."
    
    cd "$WORKSPACE_DIR"
    if command -v node &> /dev/null; then
        node automation/comprehensive-redundancy-automation-system.cjs backup
    else
        error "Node.js not available for backup creation"
    fi
}

show_logs() {
    log "Showing recent logs..."
    
    if [ -f "$LOG_DIR/comprehensive-redundancy-automation.log" ]; then
        tail -n 100 "$LOG_DIR/comprehensive-redundancy-automation.log"
    else
        warn "No log file found"
    fi
}

show_help() {
    echo "Comprehensive Redundancy Automation System"
    echo ""
    echo "Usage: $0 <command>"
    echo ""
    echo "Commands:"
    echo "  start     - Start the redundancy automation system"
    echo "  stop      - Stop the redundancy automation system"
    echo "  restart   - Restart the redundancy automation system"
    echo "  status    - Show system status"
    echo "  health    - Check system health"
    echo "  backup    - Create redundancy backup"
    echo "  logs      - Show recent logs"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
}

# Main script logic
case "${1:-help}" in
    start)
        check_dependencies
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        check_dependencies
        restart_system
        ;;
    status)
        check_status
        ;;
    health)
        check_health
        ;;
    backup)
        create_backup
        ;;
    logs)
        show_logs
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac