#!/bin/bash

# Autonomous Git Automation Startup Script
# This script starts the autonomous git automation system with proper monitoring

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/.autonomous-git.pid"
STATUS_FILE="$SCRIPT_DIR/.autonomous-git-status.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "${BLUE}[$timestamp] INFO:${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] SUCCESS:${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] WARN:${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] ERROR:${NC} $message"
            ;;
    esac
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/autonomous-git.log"
}

# Function to check if process is running
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

# Function to start the autonomous git system
start_autonomous_git() {
    log "INFO" "Starting Autonomous Git Automation System..."
    
    # Check if already running
    if is_running; then
        log "WARN" "Autonomous git system is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if required files exist
    if [ ! -f "$SCRIPT_DIR/autonomous-git-manager.js" ]; then
        log "ERROR" "autonomous-git-manager.js not found"
        return 1
    fi
    
    # Start the autonomous git manager in watch mode
    log "INFO" "Launching autonomous git manager in watch mode..."
    
    nohup node "$SCRIPT_DIR/autonomous-git-manager.js" watch > "$LOG_DIR/autonomous-git-output.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if process started successfully
    sleep 2
    
    if is_running; then
        log "SUCCESS" "Autonomous git system started successfully (PID: $pid)"
        
        # Create status file
        cat > "$STATUS_FILE" << EOF
{
  "status": "running",
  "pid": $pid,
  "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "log_file": "$LOG_DIR/autonomous-git.log",
  "output_file": "$LOG_DIR/autonomous-git-output.log"
}
EOF
        
        return 0
    else
        log "ERROR" "Failed to start autonomous git system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the autonomous git system
stop_autonomous_git() {
    log "INFO" "Stopping Autonomous Git Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Sending SIGTERM to process $pid..."
            kill "$pid"
            
            # Wait for process to terminate
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                ((count++))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Process $pid still running, sending SIGKILL..."
                kill -9 "$pid"
            fi
            
            log "SUCCESS" "Autonomous git system stopped"
        else
            log "WARN" "Process $pid not found"
        fi
        
        rm -f "$PID_FILE"
        
        # Update status file
        if [ -f "$STATUS_FILE" ]; then
            cat > "$STATUS_FILE" << EOF
{
  "status": "stopped",
  "stopped_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
        fi
    else
        log "WARN" "No PID file found"
    fi
}

# Function to restart the autonomous git system
restart_autonomous_git() {
    log "INFO" "Restarting Autonomous Git Automation System..."
    stop_autonomous_git
    sleep 2
    start_autonomous_git
}

# Function to show status
show_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "Autonomous git system is running (PID: $pid)"
        
        if [ -f "$STATUS_FILE" ]; then
            echo "Status details:"
            cat "$STATUS_FILE" | python3 -m json.tool 2>/dev/null || cat "$STATUS_FILE"
        fi
        
        # Show recent log entries
        echo ""
        echo "Recent log entries:"
        tail -n 10 "$LOG_DIR/autonomous-git.log" 2>/dev/null || echo "No log file found"
    else
        log "INFO" "Autonomous git system is not running"
    fi
}

# Function to show logs
show_logs() {
    local lines=${1:-50}
    
    if [ -f "$LOG_DIR/autonomous-git.log" ]; then
        echo "Last $lines log entries:"
        tail -n "$lines" "$LOG_DIR/autonomous-git.log"
    else
        log "WARN" "No log file found"
    fi
}

# Function to show help
show_help() {
    echo "Autonomous Git Automation System"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  start     - Start the autonomous git system"
    echo "  stop      - Stop the autonomous git system"
    echo "  restart   - Restart the autonomous git system"
    echo "  status    - Show current status"
    echo "  logs      - Show recent logs (default: 50 lines)"
    echo "  logs N    - Show last N log entries"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs 100"
}

# Main script logic
case "${1:-help}" in
    "start")
        start_autonomous_git
        ;;
    "stop")
        stop_autonomous_git
        ;;
    "restart")
        restart_autonomous_git
        ;;
    "status")
        show_status
        ;;
    "logs")
        show_logs "$2"
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        log "ERROR" "Unknown command: $1"
        show_help
        exit 1
        ;;
esac 