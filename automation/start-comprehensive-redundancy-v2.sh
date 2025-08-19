#!/bin/bash

# Comprehensive Redundancy V2 System Startup Script
# This script provides redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v2.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

check_dependencies() {
    log "Checking dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log_error "npm is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log_warning "PM2 is not installed, installing..."
        npm install -g pm2
    fi
    
    log_success "All dependencies are available"
}

start_system() {
    log "Starting Comprehensive Redundancy V2 System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_warning "System is already running with PID $pid"
            return
        else
            log_warning "Removing stale PID file"
            rm -f "$PID_FILE"
        fi
    fi
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the redundancy system
    nohup node automation/comprehensive-redundancy-v2.cjs start > "$LOG_DIR/comprehensive-redundancy-v2.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment for startup
    sleep 2
    
    # Check if process is running
    if ps -p "$pid" > /dev/null 2>&1; then
        log_success "Comprehensive Redundancy V2 System started with PID $pid"
        log "Logs: $LOG_DIR/comprehensive-redundancy-v2.out"
        log "PID: $PID_FILE"
    else
        log_error "Failed to start system"
        rm -f "$PID_FILE"
        exit 1
    fi
}

stop_system() {
    log "Stopping Comprehensive Redundancy V2 System..."
    
    if [ -f "$PID_FILE" ]; then
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
                log_warning "Process did not stop gracefully, forcing termination"
                kill -9 "$pid" 2>/dev/null || true
            fi
            
            log_success "System stopped"
        else
            log_warning "Process $pid is not running"
        fi
        
        rm -f "$PID_FILE"
    else
        log_warning "No PID file found, system may not be running"
    fi
    
    # Stop all PM2 processes
    log "Stopping all PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
}

restart_system() {
    log "Restarting Comprehensive Redundancy V2 System..."
    stop_system
    sleep 2
    start_system
}

get_status() {
    log "Getting system status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_success "System is running with PID $pid"
            
            # Get detailed status
            if [ -f "$WORKSPACE_DIR/automation/comprehensive-redundancy-v2.cjs" ]; then
                cd "$WORKSPACE_DIR"
                node automation/comprehensive-redundancy-v2.cjs status
            fi
        else
            log_warning "PID file exists but process is not running"
            rm -f "$PID_FILE"
        fi
    else
        log_warning "System is not running"
    fi
    
    # Show PM2 status
    log "PM2 Status:"
    pm2 status 2>/dev/null || log_warning "PM2 not available"
}

get_health() {
    log "Getting system health..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            cd "$WORKSPACE_DIR"
            node automation/comprehensive-redundancy-v2.cjs health
        else
            log_error "System is not running"
        fi
    else
        log_error "System is not running"
    fi
}

get_logs() {
    log "Getting system logs..."
    
    if [ -f "$LOG_DIR/comprehensive-redundancy-v2.out" ]; then
        echo "=== Comprehensive Redundancy V2 System Logs ==="
        tail -n 100 "$LOG_DIR/comprehensive-redundancy-v2.out"
    else
        log_warning "No log file found"
    fi
    
    if [ -f "$LOG_DIR/comprehensive-redundancy-v2.log" ]; then
        echo -e "\n=== Comprehensive Redundancy V2 System Internal Logs ==="
        tail -n 100 "$LOG_DIR/comprehensive-redundancy-v2.log"
    fi
}

test_system() {
    log "Testing Comprehensive Redundancy V2 System..."
    
    # Test PM2
    log "Testing PM2..."
    if command -v pm2 &> /dev/null; then
        pm2 --version
        log_success "PM2 is working"
    else
        log_error "PM2 is not working"
    fi
    
    # Test Node.js
    log "Testing Node.js..."
    if command -v node &> /dev/null; then
        node --version
        log_success "Node.js is working"
    else
        log_error "Node.js is not working"
    fi
    
    # Test the redundancy script
    log "Testing redundancy script..."
    if [ -f "$WORKSPACE_DIR/automation/comprehensive-redundancy-v2.cjs" ]; then
        cd "$WORKSPACE_DIR"
        node automation/comprehensive-redundancy-v2.cjs status
        log_success "Redundancy script is working"
    else
        log_error "Redundancy script not found"
    fi
}

show_help() {
    echo "Comprehensive Redundancy V2 System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the redundancy system"
    echo "  stop      Stop the redundancy system"
    echo "  restart   Restart the redundancy system"
    echo "  status    Show system status"
    echo "  health    Show system health"
    echo "  logs      Show system logs"
    echo "  test      Test system components"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs"
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
        get_status
        ;;
    health)
        get_health
        ;;
    logs)
        get_logs
        ;;
    test)
        test_system
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac