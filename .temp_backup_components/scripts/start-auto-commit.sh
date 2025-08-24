#!/bin/bash

# Auto-Commit Automation Startup Script
# This script starts the auto-commit automation in the background

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PID_FILE="$PROJECT_ROOT/logs/auto-commit.pid"
LOG_FILE="$PROJECT_ROOT/logs/auto-commit.log"

# Create logs directory if it doesn't exist
mkdir -p "$(dirname "$PID_FILE")"

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to start the automation
start_automation() {
    if is_running; then
        echo "Auto-commit automation is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi

    echo "Starting auto-commit automation..."
    
    # Start the Node.js script in the background
    cd "$PROJECT_ROOT"
    nohup node scripts/auto-commit-push-enhanced.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID to file
    echo "$pid" > "$PID_FILE"
    
    echo "Auto-commit automation started with PID: $pid"
    echo "Log file: $LOG_FILE"
    echo "PID file: $PID_FILE"
    
    return 0
}

# Function to stop the automation
stop_automation() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo "Stopping auto-commit automation (PID: $pid)..."
            kill "$pid"
            rm -f "$PID_FILE"
            echo "Auto-commit automation stopped"
        else
            echo "Auto-commit automation is not running"
            rm -f "$PID_FILE"
        fi
    else
        echo "Auto-commit automation is not running"
    fi
}

# Function to show status
show_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo "Auto-commit automation is running (PID: $pid)"
        echo "Log file: $LOG_FILE"
        echo "PID file: $PID_FILE"
        
        # Show recent logs
        if [ -f "$LOG_FILE" ]; then
            echo ""
            echo "Recent logs:"
            tail -10 "$LOG_FILE"
        fi
    else
        echo "Auto-commit automation is not running"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        echo "Log file not found: $LOG_FILE"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        start_automation
        ;;
    stop)
        stop_automation
        ;;
    restart)
        stop_automation
        sleep 2
        start_automation
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        echo ""
        echo "Commands:"
        echo "  start   - Start auto-commit automation"
        echo "  stop    - Stop auto-commit automation"
        echo "  restart - Restart auto-commit automation"
        echo "  status  - Show current status and recent logs"
        echo "  logs    - Show live logs"
        exit 1
        ;;
esac 