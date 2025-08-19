#!/bin/bash

# Comprehensive Redundancy V2 Startup Script
# Provides complete redundancy coverage for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v2.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy-v2.log"
NODE_SCRIPT="$SCRIPT_DIR/comprehensive-redundancy-v2-system.cjs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Start the system
start_system() {
    log "INFO" "Starting Comprehensive Redundancy V2 System..."
    
    # Check if Node.js script exists
    if [ ! -f "$NODE_SCRIPT" ]; then
        log "ERROR" "Node.js script not found: $NODE_SCRIPT"
        exit 1
    fi
    
    # Start the system in background
    nohup node "$NODE_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    echo "$pid" > "$PID_FILE"
    
    log "INFO" "Comprehensive Redundancy V2 System started (PID: $pid)"
}

# Stop the system
stop_system() {
    log "INFO" "Stopping Comprehensive Redundancy V2 System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        kill "$pid" || true
        rm -f "$PID_FILE"
        log "INFO" "System stopped"
    fi
}

# Check status
check_status() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "System is running (PID: $pid)"
            node "$NODE_SCRIPT" status
        else
            log "WARN" "PID file exists but process not running"
            rm -f "$PID_FILE"
        fi
    else
        log "INFO" "System is not running"
    fi
}

# Main logic
case "${1:-}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    status)
        check_status
        ;;
    *)
        echo "Usage: $0 [start|stop|status]"
        exit 1
        ;;
esac