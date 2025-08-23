#!/bin/bash

# Ultimate Redundancy Automation Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
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
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if the system script exists
check_system_script() {
    if [ ! -f "$SCRIPT_DIR/$SYSTEM_SCRIPT" ]; then
        log "ERROR" "System script not found: $SYSTEM_SCRIPT"
        exit 1
    fi
    
    log "INFO" "System script found: $SYSTEM_SCRIPT"
}

# Check workspace status
check_workspace() {
    cd "$WORKSPACE_DIR"
    
    if [ ! -f "package.json" ]; then
        log "ERROR" "Not in a valid Node.js workspace (package.json not found)"
        exit 1
    fi
    
    if [ ! -d ".git" ]; then
        log "ERROR" "Not in a valid Git repository"
        exit 1
    fi
    
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Repository: $(git remote get-url origin 2>/dev/null || echo 'No remote')"
}

# Check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to start the automation
start() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    cd "$SCRIPT_DIR"
    
    # Start the system in background
    nohup node "$SYSTEM_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID to file
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        echo "$pid" > "$PID_FILE"
        log "INFO" "Ultimate Redundancy Automation System started successfully (PID: $pid)"
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
        log "WARN" "PID file not found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Stopping Ultimate Redundancy Automation System (PID: $pid)..."
        
        # Try graceful shutdown first
        kill -TERM "$pid"
        
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
        
        rm -f "$PID_FILE"
        log "INFO" "Ultimate Redundancy Automation System stopped"
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
        local uptime=$(ps -o etime= -p "$pid" 2>/dev/null || echo "unknown")
        
        log "INFO" "Ultimate Redundancy Automation System is running"
        log "INFO" "PID: $pid"
        log "INFO" "Uptime: $uptime"
        
        # Show detailed status if possible
        cd "$SCRIPT_DIR"
        if node "$SYSTEM_SCRIPT" status >/dev/null 2>&1; then
            log "INFO" "Detailed status:"
            node "$SYSTEM_SCRIPT" status | head -20
        fi
    else
        log "INFO" "Ultimate Redundancy Automation System is not running"
    fi
}

# Show system logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing recent logs (last 50 lines):"
        tail -50 "$LOG_FILE"
    else
        log "WARN" "Log file not found: $LOG_FILE"
    fi
}

# Run health check
run_health_check() {
    log "INFO" "Running health check..."
    
    cd "$SCRIPT_DIR"
    if node "$SYSTEM_SCRIPT" health >/dev/null 2>&1; then
        log "INFO" "Health check completed successfully"
        node "$SYSTEM_SCRIPT" health
    else
        log "ERROR" "Health check failed"
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
    
    cd "$SCRIPT_DIR"
    if node "$SYSTEM_SCRIPT" once >/dev/null 2>&1; then
        log "INFO" "One-time check completed successfully"
    else
        log "ERROR" "One-time check failed"
        return 1
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
