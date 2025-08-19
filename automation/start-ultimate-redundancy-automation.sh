#!/bin/bash

# Ultimate Redundancy Automation Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-automation.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-automation.log"
AUTOMATION_SCRIPT="$SCRIPT_DIR/ultimate-redundancy-automation.cjs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[$timestamp] [WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Function to check if automation is running
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

# Function to start the automation
start() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARNING" "Automation is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if the automation script exists
    if [ ! -f "$AUTOMATION_SCRIPT" ]; then
        log "ERROR" "Automation script not found: $AUTOMATION_SCRIPT"
        return 1
    fi
    
    # Start the automation in the background
    cd "$PROJECT_ROOT"
    nohup node "$AUTOMATION_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID to file
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Ultimate Redundancy Automation started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_FILE"
        return 0
    else
        log "ERROR" "Failed to start automation"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the automation
stop() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARNING" "No PID file found. Automation may not be running."
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Sending SIGTERM to process $pid..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log "WARNING" "Process did not stop gracefully, sending SIGKILL..."
            kill -9 "$pid"
        fi
        
        log "SUCCESS" "Automation stopped successfully"
    else
        log "WARNING" "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
    return 0
}

# Function to restart the automation
restart() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Function to check status
status() {
    log "INFO" "Checking Ultimate Redundancy Automation System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Automation is running (PID: $pid)"
        
        # Check process details
        if command -v ps &> /dev/null; then
            echo ""
            echo "Process Details:"
            ps -p "$pid" -o pid,ppid,cmd,etime,pcpu,pmem 2>/dev/null || true
        fi
        
        # Check recent logs
        if [ -f "$LOG_FILE" ]; then
            echo ""
            echo "Recent Logs (last 10 lines):"
            tail -n 10 "$LOG_FILE" 2>/dev/null || true
        fi
        
        return 0
    else
        log "WARNING" "Automation is not running"
        return 1
    fi
}

# Function to show logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        if [ "$1" = "follow" ]; then
            log "INFO" "Following logs (Ctrl+C to stop)..."
            tail -f "$LOG_FILE"
        else
            log "INFO" "Showing recent logs..."
            tail -n 50 "$LOG_FILE"
        fi
    else
        log "WARNING" "No log file found: $LOG_FILE"
        return 1
    fi
}

# Function to check health
health() {
    log "INFO" "Checking system health..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        cd "$PROJECT_ROOT"
        
        # Run health check
        if node "$AUTOMATION_SCRIPT" health; then
            log "SUCCESS" "System health check completed successfully"
        else
            log "WARNING" "System health check completed with warnings"
        fi
    else
        log "ERROR" "Cannot check health - automation is not running"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Ultimate Redundancy Automation Management Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|health|help}"
    echo ""
    echo "Commands:"
    echo "  start     Start the ultimate redundancy automation system"
    echo "  stop      Stop the automation system"
    echo "  restart   Restart the automation system"
    echo "  status    Show current status and process information"
    echo "  logs      Show recent logs (use 'logs follow' to follow logs)"
    echo "  health    Run a comprehensive health check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the automation"
    echo "  $0 status                   # Check status"
    echo "  $0 logs follow              # Follow logs in real-time"
    echo "  $0 health                   # Run health check"
    echo ""
    echo "Logs: $LOG_FILE"
    echo "PID File: $PID_FILE"
}

# Function to perform comprehensive system check
system_check() {
    log "INFO" "Performing comprehensive system check..."
    
    echo ""
    echo "=== System Information ==="
    echo "Project Root: $PROJECT_ROOT"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "Automation Script: $AUTOMATION_SCRIPT"
    
    echo ""
    echo "=== Dependencies Check ==="
    
    # Check Node.js
    if command -v node &> /dev/null; then
        local node_version=$(node --version)
        log "SUCCESS" "Node.js: $node_version"
    else
        log "ERROR" "Node.js: Not installed"
    fi
    
    # Check PM2
    if command -v pm2 &> /dev/null; then
        local pm2_version=$(pm2 --version)
        log "SUCCESS" "PM2: $pm2_version"
    else
        log "WARNING" "PM2: Not installed"
    fi
    
    # Check Git
    if command -v git &> /dev/null; then
        local git_version=$(git --version)
        log "SUCCESS" "Git: $git_version"
    else
        log "ERROR" "Git: Not installed"
    fi
    
    echo ""
    echo "=== File System Check ==="
    
    # Check automation script
    if [ -f "$AUTOMATION_SCRIPT" ]; then
        log "SUCCESS" "Automation script exists"
    else
        log "ERROR" "Automation script missing: $AUTOMATION_SCRIPT"
    fi
    
    # Check log directory
    if [ -d "$LOG_DIR" ]; then
        log "SUCCESS" "Log directory exists"
    else
        log "WARNING" "Log directory missing: $LOG_DIR"
    fi
    
    # Check ecosystem files
    local ecosystem_files=("ecosystem.pm2.cjs" "ecosystem.comprehensive-redundancy.cjs")
    for file in "${ecosystem_files[@]}"; do
        if [ -f "$PROJECT_ROOT/$file" ]; then
            log "SUCCESS" "Ecosystem file exists: $file"
        else
            log "WARNING" "Ecosystem file missing: $file"
        fi
    done
    
    # Check GitHub Actions workflows
    local workflow_dir="$PROJECT_ROOT/.github/workflows"
    if [ -d "$workflow_dir" ]; then
        local workflow_count=$(find "$workflow_dir" -name "*.yml" | wc -l)
        log "SUCCESS" "GitHub Actions workflows: $workflow_count found"
    else
        log "WARNING" "GitHub Actions workflows directory missing"
    fi
    
    # Check Netlify functions
    local netlify_dir="$PROJECT_ROOT/netlify/functions"
    if [ -d "$netlify_dir" ]; then
        if [ -f "$netlify_dir/functions-manifest.json" ]; then
            log "SUCCESS" "Netlify functions manifest exists"
        else
            log "WARNING" "Netlify functions manifest missing"
        fi
    else
        log "WARNING" "Netlify functions directory missing"
    fi
    
    echo ""
    echo "=== Current Status ==="
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Automation is running (PID: $pid)"
    else
        log "WARNING" "Automation is not running"
    fi
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
    logs)
        logs "$2"
        ;;
    health)
        health
        ;;
    check)
        system_check
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

exit $?