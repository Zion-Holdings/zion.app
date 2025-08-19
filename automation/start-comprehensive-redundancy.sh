#!/bin/bash

# Comprehensive Redundancy Automation Startup Script
# This script manages the comprehensive redundancy automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy.log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

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
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] $message${NC}"
}

# Function to check if the system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to start the system
start() {
    print_status "$BLUE" "Starting Comprehensive Redundancy Automation System..."
    
    if is_running; then
        print_status "$YELLOW" "System is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    cd "$WORKSPACE_DIR"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        print_status "$RED" "Error: Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if required dependencies are installed
    if [ ! -f "package.json" ]; then
        print_status "$RED" "Error: package.json not found. Are you in the correct directory?"
        return 1
    fi
    
    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
        print_status "$BLUE" "Installing dependencies..."
        npm install
    fi
    
    # Start the comprehensive redundancy system
    print_status "$BLUE" "Launching comprehensive redundancy automation..."
    
    # Start in background and capture PID
    nohup node automation/comprehensive-redundancy-automation.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID to file
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        print_status "$GREEN" "✅ Comprehensive Redundancy Automation System started successfully (PID: $pid)"
        print_status "$BLUE" "Logs are being written to: $LOG_FILE"
        print_status "$BLUE" "Use './automation/start-comprehensive-redundancy.sh status' to check status"
        print_status "$BLUE" "Use './automation/start-comprehensive-redundancy.sh logs' to view logs"
    else
        print_status "$RED" "❌ Failed to start Comprehensive Redundancy Automation System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the system
stop() {
    print_status "$BLUE" "Stopping Comprehensive Redundancy Automation System..."
    
    if ! is_running; then
        print_status "$YELLOW" "System is not running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    
    # Try graceful shutdown first
    print_status "$BLUE" "Sending graceful shutdown signal to PID $pid..."
    
    # Send SIGTERM
    kill -TERM "$pid" 2>/dev/null || true
    
    # Wait for graceful shutdown (up to 30 seconds)
    local count=0
    while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
        sleep 1
        count=$((count + 1))
    done
    
    # Force kill if still running
    if kill -0 "$pid" 2>/dev/null; then
        print_status "$YELLOW" "Force killing process $pid..."
        kill -KILL "$pid" 2>/dev/null || true
        sleep 1
    fi
    
    # Clean up PID file
    if [ -f "$PID_FILE" ]; then
        rm -f "$PID_FILE"
    fi
    
    print_status "$GREEN" "✅ Comprehensive Redundancy Automation System stopped"
}

# Function to restart the system
restart() {
    print_status "$BLUE" "Restarting Comprehensive Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Function to check status
status() {
    print_status "$BLUE" "Comprehensive Redundancy Automation System Status:"
    echo
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        print_status "$GREEN" "✅ System is RUNNING (PID: $pid)"
        
        # Check if the process is actually responding
        if command -v node &> /dev/null; then
            cd "$WORKSPACE_DIR"
            print_status "$BLUE" "Checking system health..."
            node automation/comprehensive-redundancy-automation.cjs status 2>/dev/null || {
                print_status "$YELLOW" "⚠️ System is running but health check failed"
            }
        fi
    else
        print_status "$RED" "❌ System is NOT RUNNING"
    fi
    
    echo
    print_status "$BLUE" "Log file: $LOG_FILE"
    print_status "$BLUE" "PID file: $PID_FILE"
}

# Function to show logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        print_status "$BLUE" "Showing recent logs from: $LOG_FILE"
        echo "----------------------------------------"
        tail -n 50 "$LOG_FILE"
        echo "----------------------------------------"
        print_status "$BLUE" "Use 'tail -f $LOG_FILE' to follow logs in real-time"
    else
        print_status "$YELLOW" "No log file found at: $LOG_FILE"
    fi
}

# Function to show real-time logs
follow_logs() {
    if [ -f "$LOG_FILE" ]; then
        print_status "$BLUE" "Following logs in real-time from: $LOG_FILE"
        print_status "$YELLOW" "Press Ctrl+C to stop following logs"
        tail -f "$LOG_FILE"
    else
        print_status "$YELLOW" "No log file found at: $LOG_FILE"
    fi
}

# Function to check system health
health() {
    print_status "$BLUE" "Checking Comprehensive Redundancy Automation System Health..."
    
    if ! is_running; then
        print_status "$RED" "❌ System is not running"
        return 1
    fi
    
    cd "$WORKSPACE_DIR"
    
    if command -v node &> /dev/null; then
        print_status "$BLUE" "Running health check..."
        node automation/comprehensive-redundancy-automation.cjs health
    else
        print_status "$RED" "❌ Node.js not available for health check"
        return 1
    fi
}

# Function to run build
build() {
    print_status "$BLUE" "Running build with Comprehensive Redundancy Automation..."
    
    if ! is_running; then
        print_status "$YELLOW" "System is not running, starting it first..."
        start
        sleep 3
    fi
    
    cd "$WORKSPACE_DIR"
    
    if command -v node &> /dev/null; then
        print_status "$BLUE" "Running build process..."
        node automation/comprehensive-redundancy-automation.cjs build
    else
        print_status "$RED" "❌ Node.js not available for build"
        return 1
    fi
}

# Function to run build with recovery
build_recovery() {
    print_status "$BLUE" "Running build with recovery using Comprehensive Redundancy Automation..."
    
    if ! is_running; then
        print_status "$YELLOW" "System is not running, starting it first..."
        start
        sleep 3
    fi
    
    cd "$WORKSPACE_DIR"
    
    if command -v node &> /dev/null; then
        print_status "$BLUE" "Running build with recovery..."
        node automation/comprehensive-redundancy-automation.cjs build:recovery
    else
        print_status "$RED" "❌ Node.js not available for build recovery"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy Automation System Management Script"
    echo
    echo "Usage: $0 {start|stop|restart|status|logs|follow-logs|health|build|build-recovery|help}"
    echo
    echo "Commands:"
    echo "  start           Start the comprehensive redundancy automation system"
    echo "  stop            Stop the comprehensive redundancy automation system"
    echo "  restart         Restart the comprehensive redundancy automation system"
    echo "  status          Show the current status of the system"
    echo "  logs            Show recent logs"
    echo "  follow-logs     Follow logs in real-time"
    echo "  health          Run a health check on the system"
    echo "  build           Run build process with redundancy monitoring"
    echo "  build-recovery  Run build with recovery using redundancy system"
    echo "  help            Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start        # Start the system"
    echo "  $0 status       # Check system status"
    echo "  $0 logs         # View recent logs"
    echo "  $0 build        # Run build with monitoring"
    echo
    echo "Log files:"
    echo "  Main log: $LOG_FILE"
    echo "  PID file: $PID_FILE"
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
    logs)
        logs
        ;;
    follow-logs)
        follow_logs
        ;;
    health)
        health
        ;;
    build)
        build
        ;;
    build-recovery)
        build_recovery
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_status "$RED" "Error: Unknown command '$1'"
        echo
        show_help
        exit 1
        ;;
esac

exit 0