#!/bin/bash

# 🚀 Exponential Autonomous Orchestrator Startup Script
# This script starts the exponential autonomous development system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/exponential-autonomous-orchestrator.cjs"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/exponential-orchestrator.pid"
CONFIG_DIR="$SCRIPT_DIR/config"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${CYAN}================================${NC}"
    echo -e "${CYAN}🚀 Exponential Autonomous Orchestrator${NC}"
    echo -e "${CYAN}================================${NC}"
}

# Function to check if orchestrator is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_warning "Exponential Autonomous Orchestrator is already running (PID: $PID)"
            return 0
        else
            print_warning "PID file exists but process is not running. Removing stale PID file."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to start the orchestrator
start_orchestrator() {
    print_status "Starting Exponential Autonomous Orchestrator..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed or not in PATH"
        print_status "Please install Node.js to run the orchestrator"
        exit 1
    fi
    
    # Check if the orchestrator script exists
    if [ ! -f "$ORCHESTRATOR_SCRIPT" ]; then
        print_error "Orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
    
    # Start the orchestrator in the background
    print_status "Launching orchestrator in background..."
    
    nohup node "$ORCHESTRATOR_SCRIPT" > "$LOG_DIR/exponential-orchestrator.log" 2>&1 &
    ORCHESTRATOR_PID=$!
    
    # Save PID to file
    echo "$ORCHESTRATOR_PID" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if ps -p "$ORCHESTRATOR_PID" > /dev/null 2>&1; then
        print_status "✅ Exponential Autonomous Orchestrator started successfully (PID: $ORCHESTRATOR_PID)"
        print_status "📊 Logs are being written to: $LOG_DIR/exponential-orchestrator.log"
        print_status "🔍 Monitor the process with: tail -f $LOG_DIR/exponential-orchestrator.log"
        print_status "🛑 Stop with: $0 stop"
    else
        print_error "❌ Failed to start Exponential Autonomous Orchestrator"
        print_status "Check logs at: $LOG_DIR/exponential-orchestrator.log"
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Function to stop the orchestrator
stop_orchestrator() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_status "Stopping Exponential Autonomous Orchestrator (PID: $PID)..."
            kill "$PID"
            
            # Wait for graceful shutdown
            for i in {1..10}; do
                if ! ps -p "$PID" > /dev/null 2>&1; then
                    print_status "✅ Exponential Autonomous Orchestrator stopped successfully"
                    rm -f "$PID_FILE"
                    return 0
                fi
                sleep 1
            done
            
            # Force kill if graceful shutdown failed
            print_warning "Graceful shutdown failed, force killing process..."
            kill -9 "$PID" 2>/dev/null || true
            rm -f "$PID_FILE"
            print_status "✅ Exponential Autonomous Orchestrator force stopped"
        else
            print_warning "Process not running, removing stale PID file"
            rm -f "$PID_FILE"
        fi
    else
        print_warning "No PID file found. Orchestrator may not be running."
    fi
}

# Function to restart the orchestrator
restart_orchestrator() {
    print_status "Restarting Exponential Autonomous Orchestrator..."
    stop_orchestrator
    sleep 2
    start_orchestrator
}

# Function to check status
check_status() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_status "✅ Exponential Autonomous Orchestrator is running (PID: $PID)"
            print_status "📊 Log file: $LOG_DIR/exponential-orchestrator.log"
            
            # Show recent log entries
            if [ -f "$LOG_DIR/exponential-orchestrator.log" ]; then
                echo ""
                print_status "Recent log entries:"
                echo "----------------------------------------"
                tail -n 10 "$LOG_DIR/exponential-orchestrator.log" 2>/dev/null || echo "No logs available"
                echo "----------------------------------------"
            fi
        else
            print_warning "❌ PID file exists but process is not running"
            print_status "Removing stale PID file..."
            rm -f "$PID_FILE"
        fi
    else
        print_warning "❌ Exponential Autonomous Orchestrator is not running"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_DIR/exponential-orchestrator.log" ]; then
        print_status "Showing logs (press Ctrl+C to exit):"
        tail -f "$LOG_DIR/exponential-orchestrator.log"
    else
        print_warning "No log file found"
    fi
}

# Function to show configuration
show_config() {
    if [ -f "$SCRIPT_DIR/exponential-config.json" ]; then
        print_status "Current configuration:"
        cat "$SCRIPT_DIR/exponential-config.json" | jq . 2>/dev/null || cat "$SCRIPT_DIR/exponential-config.json"
    else
        print_warning "No configuration file found"
    fi
}

# Function to show help
show_help() {
    echo "Usage: $0 {start|stop|restart|status|logs|config|help}"
    echo ""
    echo "Commands:"
    echo "  start     Start the Exponential Autonomous Orchestrator"
    echo "  stop      Stop the Exponential Autonomous Orchestrator"
    echo "  restart   Restart the Exponential Autonomous Orchestrator"
    echo "  status    Show current status and recent logs"
    echo "  logs      Show live logs (follow mode)"
    echo "  config    Show current configuration"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the orchestrator"
    echo "  $0 status         # Check status"
    echo "  $0 logs           # Follow logs in real-time"
    echo "  $0 stop           # Stop the orchestrator"
}

# Main script logic
case "${1:-start}" in
    start)
        print_header
        if check_running; then
            exit 0
        fi
        start_orchestrator
        ;;
    stop)
        print_header
        stop_orchestrator
        ;;
    restart)
        print_header
        restart_orchestrator
        ;;
    status)
        print_header
        check_status
        ;;
    logs)
        show_logs
        ;;
    config)
        show_config
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac

exit 0
