#!/bin/bash

# Persistent AI Communication Startup Script
# This script ensures continuous communication with the AI assistant

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/logs"
PID_FILE="$LOG_DIR/ai-communication.pid"
LOG_FILE="$LOG_DIR/ai-communication.log"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        fi
    fi
    return 1
}

# Function to start the communication system
start_communication() {
    log "🚀 Starting Persistent AI Communication System..."
    
    if is_running; then
        log "⚠️ Communication system is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    # Start the communication system in the background
    cd "$PROJECT_ROOT"
    nohup node scripts/persistent-ai-communication.cjs > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    log "✅ Communication system started with PID: $pid"
    log "📝 Logs are being written to: $LOG_FILE"
    
    # Wait a moment and check if it's still running
    sleep 2
    if is_running; then
        log "✅ Communication system is running successfully"
    else
        log "❌ Communication system failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the communication system
stop_communication() {
    log "🛑 Stopping Persistent AI Communication System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log "✅ Sent stop signal to PID: $pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "⚠️ Process didn't stop gracefully, force killing..."
                kill -9 "$pid"
            fi
        else
            log "⚠️ Process with PID $pid is not running"
        fi
        rm -f "$PID_FILE"
    else
        log "⚠️ No PID file found"
    fi
}

# Function to restart the communication system
restart_communication() {
    log "🔄 Restarting Persistent AI Communication System..."
    stop_communication
    sleep 2
    start_communication
}

# Function to check status
check_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "✅ Communication system is running (PID: $pid)"
        
        # Check if the local server is responding
        if curl -s http://localhost:3002/status > /dev/null 2>&1; then
            log "✅ Local server is responding"
        else
            log "⚠️ Local server is not responding"
        fi
    else
        log "❌ Communication system is not running"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        log "No log file found"
    fi
}

# Function to monitor and auto-restart
monitor_communication() {
    log "👁️ Starting monitoring mode..."
    
    while true; do
        if ! is_running; then
            log "⚠️ Communication system stopped, restarting..."
            start_communication
        fi
        
        # Check if local server is responding
        if ! curl -s http://localhost:3002/status > /dev/null 2>&1; then
            log "⚠️ Local server not responding, restarting..."
            restart_communication
        fi
        
        sleep 30
    done
}

# Main script logic
case "${1:-start}" in
    start)
        start_communication
        ;;
    stop)
        stop_communication
        ;;
    restart)
        restart_communication
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
        ;;
    monitor)
        monitor_communication
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|monitor}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the communication system"
        echo "  stop    - Stop the communication system"
        echo "  restart - Restart the communication system"
        echo "  status  - Check the status of the system"
        echo "  logs    - Show live logs"
        echo "  monitor - Monitor and auto-restart the system"
        exit 1
        ;;
esac 