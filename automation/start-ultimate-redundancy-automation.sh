#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive control over the redundancy automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-automation.pid"
STATUS_FILE="$WORKSPACE_DIR/ultimate-redundancy-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to create log directory
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        print_status "$BLUE" "Created log directory: $LOG_DIR"
    fi
}

# Function to start the system
start_system() {
    if is_running; then
        print_status "$YELLOW" "Ultimate Redundancy Automation System is already running (PID: $(cat $PID_FILE))"
        return 0
    fi

    print_status "$BLUE" "Starting Ultimate Redundancy Automation System..."
    
    ensure_log_dir
    
    cd "$WORKSPACE_DIR"
    
    # Start the system in background
    nohup node automation/ultimate-redundancy-automation-system.cjs start > "$LOG_DIR/ultimate-redundancy-automation.out" 2> "$LOG_DIR/ultimate-redundancy-automation.err" &
    
    local pid=$!
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if is_running; then
        print_status "$GREEN" "Ultimate Redundancy Automation System started successfully (PID: $pid)"
        print_status "$BLUE" "Logs: $LOG_DIR/ultimate-redundancy-automation.out"
        print_status "$BLUE" "Errors: $LOG_DIR/ultimate-redundancy-automation.err"
        return 0
    else
        print_status "$RED" "Failed to start Ultimate Redundancy Automation System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the system
stop_system() {
    if ! is_running; then
        print_status "$YELLOW" "Ultimate Redundancy Automation System is not running"
        return 0
    fi

    local pid=$(cat "$PID_FILE")
    print_status "$BLUE" "Stopping Ultimate Redundancy Automation System (PID: $pid)..."
    
    # Try graceful shutdown first
    if kill -TERM "$pid" 2>/dev/null; then
        # Wait for graceful shutdown
        local count=0
        while [ $count -lt 10 ] && is_running; do
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if is_running; then
            print_status "$YELLOW" "Force killing process..."
            kill -KILL "$pid" 2>/dev/null || true
        fi
    fi
    
    rm -f "$PID_FILE"
    print_status "$GREEN" "Ultimate Redundancy Automation System stopped"
}

# Function to restart the system
restart_system() {
    print_status "$BLUE" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        print_status "$GREEN" "Ultimate Redundancy Automation System is running (PID: $pid)"
        
        # Show system status if available
        if [ -f "$STATUS_FILE" ]; then
            print_status "$BLUE" "System Status:"
            cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
        fi
        
        # Show PM2 status
        if command -v pm2 >/dev/null 2>&1; then
            print_status "$BLUE" "PM2 Status:"
            pm2 status --no-daemon 2>/dev/null || echo "PM2 not available"
        fi
        
        return 0
    else
        print_status "$RED" "Ultimate Redundancy Automation System is not running"
        return 1
    fi
}

# Function to show logs
show_logs() {
    ensure_log_dir
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.out" ]; then
        print_status "$BLUE" "=== System Output Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.out"
        echo
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.err" ]; then
        print_status "$BLUE" "=== System Error Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.err"
        echo
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.log" ]; then
        print_status "$BLUE" "=== System Application Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.log"
        echo
    fi
}

# Function to perform health check
health_check() {
    if ! is_running; then
        print_status "$RED" "System is not running - cannot perform health check"
        return 1
    fi
    
    print_status "$BLUE" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    node automation/ultimate-redundancy-automation-system.cjs health
    
    if [ $? -eq 0 ]; then
        print_status "$GREEN" "Health check completed successfully"
    else
        print_status "$RED" "Health check failed"
        return 1
    fi
}

# Function to show system information
show_info() {
    print_status "$BLUE" "=== Ultimate Redundancy Automation System Information ==="
    echo "Workspace: $WORKSPACE_DIR"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "PID File: $PID_FILE"
    echo "Status File: $STATUS_FILE"
    echo
    
    # Check dependencies
    print_status "$BLUE" "=== Dependency Check ==="
    
    if command -v node >/dev/null 2>&1; then
        echo "Node.js: $(node --version) ✓"
    else
        echo "Node.js: Not installed ✗"
    fi
    
    if command -v npm >/dev/null 2>&1; then
        echo "npm: $(npm --version) ✓"
    else
        echo "npm: Not installed ✗"
    fi
    
    if command -v pm2 >/dev/null 2>&1; then
        echo "PM2: $(pm2 --version) ✓"
    else
        echo "PM2: Not installed ✗"
    fi
    
    if command -v git >/dev/null 2>&1; then
        echo "Git: $(git --version) ✓"
    else
        echo "Git: Not installed ✗"
    fi
    
    echo
    
    # Check system resources
    print_status "$BLUE" "=== System Resources ==="
    echo "CPU Usage: $(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1)%"
    echo "Memory Usage: $(free | grep Mem | awk '{printf "%.1f%%", $3/$2 * 100.0}')"
    echo "Disk Usage: $(df / | tail -1 | awk '{print $5}')"
    echo
    
    # Check automation files
    print_status "$BLUE" "=== Automation Files ==="
    if [ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-automation-system.cjs" ]; then
        echo "Main System: ✓"
    else
        echo "Main System: ✗"
    fi
    
    if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
        echo "GitHub Workflows: ✓ ($(ls -1 $WORKSPACE_DIR/.github/workflows/*.yml 2>/dev/null | wc -l) workflows)"
    else
        echo "GitHub Workflows: ✗"
    fi
    
    if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
        echo "Netlify Functions: ✓"
    else
        echo "Netlify Functions: ✗"
    fi
}

# Function to cleanup
cleanup() {
    print_status "$BLUE" "Cleaning up..."
    
    # Stop system if running
    if is_running; then
        stop_system
    fi
    
    # Clean old log files (keep last 10)
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.out" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.err" -type f -mtime +7 -delete 2>/dev/null || true
    fi
    
    print_status "$GREEN" "Cleanup completed"
}

# Function to show help
show_help() {
    echo "Ultimate Redundancy Automation System Control Script"
    echo
    echo "Usage: $0 [COMMAND]"
    echo
    echo "Commands:"
    echo "  start       Start the redundancy automation system"
    echo "  stop        Stop the redundancy automation system"
    echo "  restart     Restart the redundancy automation system"
    echo "  status      Show system status and information"
    echo "  logs        Show recent logs"
    echo "  health      Perform health check"
    echo "  info        Show system information and dependencies"
    echo "  cleanup     Clean up old files and logs"
    echo "  help        Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start          # Start the system"
    echo "  $0 status         # Check system status"
    echo "  $0 logs           # View recent logs"
    echo "  $0 health         # Run health check"
}

# Main script logic
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
        check_status
        ;;
    logs)
        show_logs
        ;;
    health)
        health_check
        ;;
    info)
        show_info
        ;;
    cleanup)
        cleanup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_status "$RED" "Unknown command: $1"
        echo
        show_help
        exit 1
        ;;
esac

exit 0