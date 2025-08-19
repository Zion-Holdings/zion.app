#!/bin/bash

# Comprehensive Redundancy V3 Startup Script
# This script provides redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v3.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy-v3.log"

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
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            # Remove stale PID file
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to start the redundancy system
start() {
    print_status "Starting Comprehensive Redundancy V3..."
    
    if is_running; then
        print_warning "Comprehensive Redundancy V3 is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Check if Node.js is available
    if ! command -v node > /dev/null 2>&1; then
        print_error "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 > /dev/null 2>&1; then
        print_warning "PM2 is not installed. Some redundancy features may not work properly."
    fi
    
    # Start the redundancy system
    cd "$WORKSPACE_DIR"
    nohup node automation/comprehensive-redundancy-v3.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        print_success "Comprehensive Redundancy V3 started successfully (PID: $pid)"
        print_status "Logs are being written to: $LOG_FILE"
        return 0
    else
        print_error "Failed to start Comprehensive Redundancy V3"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the redundancy system
stop() {
    print_status "Stopping Comprehensive Redundancy V3..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            print_status "Sending SIGTERM to process $pid..."
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                print_warning "Process did not stop gracefully, force killing..."
                kill -9 "$pid"
            fi
            
            rm -f "$PID_FILE"
            print_success "Comprehensive Redundancy V3 stopped"
            return 0
        else
            print_warning "Process not running, removing stale PID file"
            rm -f "$PID_FILE"
            return 0
        fi
    else
        print_warning "No PID file found, process may not be running"
        return 0
    fi
}

# Function to restart the redundancy system
restart() {
    print_status "Restarting Comprehensive Redundancy V3..."
    stop
    sleep 2
    start
}

# Function to check status
status() {
    print_status "Comprehensive Redundancy V3 Status:"
    echo "----------------------------------------"
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        print_success "Status: RUNNING (PID: $pid)"
        echo "Uptime: $(ps -o etime= -p "$pid" 2>/dev/null || echo "Unknown")"
        echo "Log file: $LOG_FILE"
        echo "PID file: $PID_FILE"
        
        # Check system resources
        if command -v pm2 > /dev/null 2>&1; then
            echo ""
            echo "PM2 Status:"
            pm2 status --no-daemon 2>/dev/null || echo "PM2 not accessible"
        fi
        
        # Check GitHub Actions workflows
        if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
            echo ""
            echo "GitHub Actions Workflows:"
            ls -la "$WORKSPACE_DIR/.github/workflows/"*.yml 2>/dev/null | wc -l | xargs echo "Total workflows:"
        fi
        
        # Check Netlify Functions
        if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
            echo ""
            echo "Netlify Functions:"
            local func_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
            echo "Total functions: $func_count"
        fi
        
    else
        print_error "Status: NOT RUNNING"
        echo "PID file: $PID_FILE (not found or stale)"
        echo "Log file: $LOG_FILE"
    fi
}

# Function to check health
health() {
    print_status "Checking Comprehensive Redundancy V3 health..."
    
    if ! is_running; then
        print_error "System is not running"
        return 1
    fi
    
    cd "$WORKSPACE_DIR"
    
    # Run health check
    if node automation/comprehensive-redundancy-v3.cjs health > /dev/null 2>&1; then
        print_success "Health check completed successfully"
        
        # Display health report if available
        local health_report="$LOG_DIR/comprehensive-redundancy-v3-report.json"
        if [ -f "$health_report" ]; then
            echo ""
            echo "Latest Health Report:"
            echo "---------------------"
            jq '.' "$health_report" 2>/dev/null || cat "$health_report"
        fi
    else
        print_error "Health check failed"
        return 1
    fi
}

# Function to show logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        print_status "Showing Comprehensive Redundancy V3 logs (last 50 lines):"
        echo "----------------------------------------"
        tail -n 50 "$LOG_FILE"
    else
        print_warning "No log file found: $LOG_FILE"
    fi
}

# Function to monitor in real-time
monitor() {
    print_status "Starting real-time monitoring (Ctrl+C to stop)..."
    
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        print_warning "No log file found: $LOG_FILE"
        print_status "Waiting for logs to be created..."
        while [ ! -f "$LOG_FILE" ]; do
            sleep 1
        done
        tail -f "$LOG_FILE"
    fi
}

# Function to run a quick check
check() {
    print_status "Running quick health check..."
    
    cd "$WORKSPACE_DIR"
    
    if node automation/comprehensive-redundancy-v3.cjs check > /dev/null 2>&1; then
        print_success "Quick check completed successfully"
        
        # Display status
        echo ""
        echo "Current Status:"
        echo "---------------"
        node automation/comprehensive-redundancy-v3.cjs status | jq '.' 2>/dev/null || node automation/comprehensive-redundancy-v3.cjs status
    else
        print_error "Quick check failed"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy V3 Management Script"
    echo "============================================"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the redundancy system"
    echo "  stop      Stop the redundancy system"
    echo "  restart   Restart the redundancy system"
    echo "  status    Show current status"
    echo "  health    Run health check"
    echo "  logs      Show recent logs"
    echo "  monitor   Monitor logs in real-time"
    echo "  check     Run quick health check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
    echo ""
}

# Main script logic
case "${1:-help}" in
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
    logs)
        logs
        ;;
    monitor)
        monitor
        ;;
    check)
        check
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac