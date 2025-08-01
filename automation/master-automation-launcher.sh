#!/bin/bash

# Master Automation Launcher for Zion Tech Group
# This script is called by launchd to start the autonomous system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$PID_DIR"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/launcher.log"
}

# Function to check if a process is running
is_process_running() {
    local pid_file="$1"
    if [[ -f "$pid_file" ]]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Function to start a process
start_process() {
    local name="$1"
    local command="$2"
    local pid_file="$PID_DIR/$name.pid"
    local log_file="$LOG_DIR/$name.log"
    
    if is_process_running "$pid_file"; then
        log "Process $name is already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    log "Starting $name..."
    cd "$PROJECT_ROOT"
    nohup $command > "$log_file" 2>&1 &
    local pid=$!
    echo $pid > "$pid_file"
    log "Started $name with PID $pid"
}

# Function to stop a process
stop_process() {
    local name="$1"
    local pid_file="$PID_DIR/$name.pid"
    
    if [[ -f "$pid_file" ]]; then
        local pid=$(cat "$pid_file")
        log "Stopping $name (PID: $pid)..."
        kill "$pid" 2>/dev/null || true
        rm -f "$pid_file"
        log "Stopped $name"
    else
        log "Process $name is not running"
    fi
}

# Main function
main() {
    local action="${1:-start}"
    
    log "Master Automation Launcher started with action: $action"
    
    case "$action" in
        "start")
            log "Starting autonomous system components..."
            
            # Start the enhanced autonomous system
            start_process "enhanced-autonomous-system" "node automation/launch-enhanced-autonomous-system.js"
            
            # Start the cron system
            start_process "enhanced-cron-system" "node automation/enhanced-cron-system.js"
            
            # Start the master orchestrator
            start_process "master-orchestrator" "node automation/autonomous-master-orchestrator.js"
            
            # Start the marketing automation
            start_process "marketing-automation" "node automation/launch-marketing-automation.js"
            
            # Start the autonomous agent orchestrator
            start_process "agent-orchestrator" "node automation/autonomous-agent-orchestrator.js"
            
            log "All autonomous system components started"
            ;;
            
        "stop")
            log "Stopping autonomous system components..."
            
            stop_process "enhanced-autonomous-system"
            stop_process "enhanced-cron-system"
            stop_process "master-orchestrator"
            stop_process "marketing-automation"
            stop_process "agent-orchestrator"
            
            log "All autonomous system components stopped"
            ;;
            
        "restart")
            log "Restarting autonomous system components..."
            main stop
            sleep 2
            main start
            ;;
            
        "status")
            log "Checking autonomous system status..."
            
            local processes=("enhanced-autonomous-system" "enhanced-cron-system" "master-orchestrator" "marketing-automation" "agent-orchestrator")
            
            for process in "${processes[@]}"; do
                local pid_file="$PID_DIR/$process.pid"
                if is_process_running "$pid_file"; then
                    log "✅ $process is running (PID: $(cat "$pid_file"))"
                else
                    log "❌ $process is not running"
                fi
            done
            ;;
            
        *)
            log "Unknown action: $action"
            log "Usage: $0 {start|stop|restart|status}"
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log "Received signal, shutting down..."; main stop; exit 0' SIGTERM SIGINT

# Run main function
main "$@" 