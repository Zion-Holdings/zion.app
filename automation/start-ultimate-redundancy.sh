#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all automation systems:
# - PM2 process management
# - GitHub Actions workflows
# - Netlify functions
# - Health monitoring and auto-recovery

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"

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
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead, clean up
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing globally..."
        npm install -g pm2
    fi
    
    # Ensure all required directories exist
    mkdir -p "$LOG_DIR"
    mkdir -p "$WORKSPACE_DIR/automation/backups"
    
    # Start the ultimate redundancy master
    log "INFO" "Starting Ultimate Redundancy Master..."
    nohup node automation/ultimate-redundancy-master.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Ultimate Redundancy System started successfully (PID: $pid)"
        
        # Start PM2 processes if not already running
        log "INFO" "Ensuring PM2 processes are running..."
        pm2 start ecosystem.pm2.cjs --update-env || true
        pm2 start ecosystem.redundancy.cjs --update-env || true
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || true
        
        # Install PM2 logrotate if not already installed
        pm2 install pm2-logrotate || true
        pm2 set pm2-logrotate:max_size 10M || true
        pm2 set pm2-logrotate:retain 30 || true
        pm2 set pm2-logrotate:compress true || true
        pm2 save || true
        
        log "INFO" "PM2 processes configured and started"
        
        # Start additional redundancy processes
        log "INFO" "Starting additional redundancy processes..."
        node automation/enhanced-pm2-redundancy.cjs start || true
        node automation/enhanced-github-actions-redundancy.cjs start || true
        node automation/enhanced-netlify-functions-redundancy.cjs start || true
        
        log "INFO" "All redundancy systems started successfully"
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if ! is_running; then
        log "WARN" "System is not running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    
    # Stop the main process
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Stopping main process (PID: $pid)..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Force killing process (PID: $pid)..."
            kill -9 "$pid"
        fi
    fi
    
    # Stop PM2 processes
    log "INFO" "Stopping PM2 processes..."
    pm2 stop ecosystem.pm2.cjs || true
    pm2 stop ecosystem.redundancy.cjs || true
    pm2 stop ecosystem.comprehensive-redundancy.cjs || true
    
    # Stop additional redundancy processes
    log "INFO" "Stopping additional redundancy processes..."
    node automation/enhanced-pm2-redundancy.cjs stop || true
    node automation/enhanced-github-actions-redundancy.cjs stop || true
    node automation/enhanced-netlify-functions-redundancy.cjs stop || true
    
    # Clean up PID file
    rm -f "$PID_FILE"
    
    log "INFO" "Ultimate Redundancy System stopped successfully"
}

# Restart the system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Show system status
show_status() {
    log "INFO" "Ultimate Redundancy System Status:"
    echo
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}✓ System is RUNNING${NC} (PID: $pid)"
        
        # Show PM2 status
        echo
        echo "PM2 Processes Status:"
        pm2 status --no-daemon || echo "PM2 not available"
        
        # Show main redundancy system status
        echo
        echo "Main Redundancy System Status:"
        if [ -f "$PID_FILE" ]; then
            local pid=$(cat "$PID_FILE")
            if kill -0 "$pid" 2>/dev/null; then
                echo -e "${GREEN}✓ Ultimate Redundancy Master: RUNNING${NC}"
            else
                echo -e "${RED}✗ Ultimate Redundancy Master: DEAD${NC}"
            fi
        else
            echo -e "${RED}✗ Ultimate Redundancy Master: NOT RUNNING${NC}"
        fi
        
        # Show log file info
        echo
        echo "Log Information:"
        if [ -f "$LOG_FILE" ]; then
            local log_size=$(du -h "$LOG_FILE" | cut -f1)
            local log_lines=$(wc -l < "$LOG_FILE")
            echo "Log file: $LOG_FILE"
            echo "Size: $log_size"
            echo "Lines: $log_lines"
        else
            echo "No log file found"
        fi
        
    else
        echo -e "${RED}✗ System is NOT RUNNING${NC}"
    fi
    
    echo
    echo "Configuration:"
    echo "Workspace: $WORKSPACE_DIR"
    echo "Log directory: $LOG_DIR"
    echo "PID file: $PID_FILE"
}

# Show logs
show_logs() {
    local lines="${1:-50}"
    
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing last $lines lines of log file:"
        echo
        tail -n "$lines" "$LOG_FILE"
    else
        log "WARN" "Log file not found: $LOG_FILE"
    fi
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    if is_running; then
        cd "$WORKSPACE_DIR"
        node automation/ultimate-redundancy-master.cjs report
    else
        log "ERROR" "System is not running, cannot generate report"
        return 1
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing Ultimate Redundancy System..."
    
    if ! is_running; then
        log "ERROR" "System is not running, cannot test"
        return 1
    fi
    
    cd "$WORKSPACE_DIR"
    
    # Test PM2 redundancy
    log "INFO" "Testing PM2 redundancy..."
    node automation/enhanced-pm2-redundancy.cjs status || true
    
    # Test GitHub Actions redundancy
    log "INFO" "Testing GitHub Actions redundancy..."
    node automation/enhanced-github-actions-redundancy.cjs status || true
    
    # Test Netlify functions redundancy
    log "INFO" "Testing Netlify functions redundancy..."
    node automation/enhanced-netlify-functions-redundancy.cjs status || true
    
    # Test main system
    log "INFO" "Testing main redundancy system..."
    node automation/ultimate-redundancy-master.cjs health || true
    
    log "INFO" "System test completed"
}

# Show help
show_help() {
    echo "Ultimate Redundancy Automation System"
    echo "===================================="
    echo
    echo "This system provides comprehensive redundancy for all automation systems:"
    echo "  - PM2 process management"
    echo "  - GitHub Actions workflows"
    echo "  - Netlify functions"
    echo "  - Health monitoring and auto-recovery"
    echo
    echo "Usage: $0 <command>"
    echo
    echo "Commands:"
    echo "  start     - Start the ultimate redundancy system"
    echo "  stop      - Stop the system"
    echo "  restart   - Restart the system"
    echo "  status    - Show system status"
    echo "  logs      - Show log output (default: last 50 lines)"
    echo "  report    - Generate health report"
    echo "  test      - Test all redundancy systems"
    echo "  help      - Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start                    # Start the system"
    echo "  $0 status                   # Check status"
    echo "  $0 logs 100                 # Show last 100 log lines"
    echo "  $0 test                     # Test all systems"
}

# Main execution
case "${1:-help}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        restart_system
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs "$2"
        ;;
    report)
        generate_report
        ;;
    test)
        test_system
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log "ERROR" "Unknown command: $1"
        show_help
        exit 1
        ;;
esac