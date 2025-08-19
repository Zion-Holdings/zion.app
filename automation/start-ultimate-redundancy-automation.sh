#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides redundancy for all PM2, GitHub Actions, and Netlify Functions automations

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
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy-automation.pid"
LOCK_FILE="$PROJECT_ROOT/automation/ultimate-redundancy-automation.lock"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
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
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-automation.log"
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
            return 1
        fi
    fi
    return 1
}

# Check if lock file exists
is_locked() {
    [ -f "$LOCK_FILE" ]
}

# Create lock file
create_lock() {
    echo "$$" > "$LOCK_FILE"
}

# Remove lock file
remove_lock() {
    rm -f "$LOCK_FILE"
}

# Cleanup function
cleanup() {
    log "INFO" "Cleaning up..."
    remove_lock
    rm -f "$PID_FILE"
}

# Signal handlers
trap cleanup EXIT
trap 'log "INFO" "Received SIGINT, shutting down..."; exit 0' INT
trap 'log "INFO" "Received SIGTERM, shutting down..."; exit 0' TERM

# Function to start the system
start_system() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    if is_locked; then
        log "ERROR" "System is locked, another instance may be starting"
        return 1
    fi
    
    create_lock
    
    # Check prerequisites
    log "INFO" "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        remove_lock
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, some features may not work"
    fi
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        remove_lock
        return 1
    fi
    
    # Check if required files exist
    local required_files=(
        "automation/ultimate-redundancy-automation-system.cjs"
        "package.json"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$PROJECT_ROOT/$file" ]; then
            log "ERROR" "Required file not found: $file"
            remove_lock
            return 1
        fi
    done
    
    log "INFO" "Prerequisites check passed"
    
    # Start the ultimate redundancy system
    log "INFO" "Starting ultimate redundancy automation system..."
    
    cd "$PROJECT_ROOT"
    
    # Start the system in background
    nohup node automation/ultimate-redundancy-automation-system.cjs > "$LOG_DIR/ultimate-redundancy-automation.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "✅ Ultimate Redundancy Automation System started successfully (PID: $pid)"
        
        # Start additional redundancy processes
        start_additional_redundancy
        
        # Start monitoring
        start_monitoring
        
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy Automation System"
        rm -f "$PID_FILE"
        remove_lock
        return 1
    fi
}

# Function to start additional redundancy processes
start_additional_redundancy() {
    log "INFO" "🔄 Starting additional redundancy processes..."
    
    # Start PM2 redundancy
    if command -v pm2 &> /dev/null; then
        log "INFO" "Starting PM2 redundancy..."
        pm2 start ecosystem.ultimate-redundancy.cjs --update-env || log "WARN" "PM2 redundancy start failed"
    fi
    
    # Start comprehensive redundancy
    log "INFO" "Starting comprehensive redundancy..."
    npm run redundancy:comprehensive:start || log "WARN" "Comprehensive redundancy start failed"
    
    # Start GitHub Actions redundancy
    log "INFO" "Starting GitHub Actions redundancy..."
    npm run redundancy:github:backup || log "WARN" "GitHub Actions redundancy start failed"
    
    # Start Netlify Functions redundancy
    log "INFO" "Starting Netlify Functions redundancy..."
    npm run redundancy:netlify:scan || log "WARN" "Netlify Functions redundancy start failed"
    
    log "INFO" "✅ Additional redundancy processes started"
}

# Function to start monitoring
start_monitoring() {
    log "INFO" "📊 Starting monitoring processes..."
    
    # Start health monitoring
    (
        while true; do
            sleep 60
            if is_running; then
                log "INFO" "System health check..."
                # Add health check logic here
            else
                log "WARN" "System not running, exiting monitor"
                break
            fi
        done
    ) &
    
    log "INFO" "✅ Monitoring started"
}

# Function to stop the system
stop_system() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Sending SIGTERM to process $pid..."
            kill -TERM "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Process not responding to SIGTERM, sending SIGKILL..."
                kill -KILL "$pid"
            fi
        fi
        
        rm -f "$PID_FILE"
    fi
    
    # Stop additional redundancy processes
    stop_additional_redundancy
    
    # Stop monitoring
    pkill -f "ultimate-redundancy-automation" || true
    
    log "INFO" "✅ Ultimate Redundancy Automation System stopped"
}

# Function to stop additional redundancy processes
stop_additional_redundancy() {
    log "INFO" "🔄 Stopping additional redundancy processes..."
    
    # Stop PM2 redundancy
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping PM2 redundancy..."
        pm2 stop ecosystem.ultimate-redundancy.cjs || log "WARN" "PM2 redundancy stop failed"
    fi
    
    # Stop comprehensive redundancy
    log "INFO" "Stopping comprehensive redundancy..."
    npm run redundancy:comprehensive:stop || log "WARN" "Comprehensive redundancy stop failed"
    
    log "INFO" "✅ Additional redundancy processes stopped"
}

# Function to restart the system
restart_system() {
    log "INFO" "🔄 Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    log "INFO" "📊 Checking Ultimate Redundancy Automation System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "✅ System is running (PID: $pid)"
        
        # Check process details
        if command -v ps &> /dev/null; then
            ps -p "$pid" -o pid,ppid,cmd,etime 2>/dev/null || log "WARN" "Could not get process details"
        fi
        
        # Check PM2 status
        if command -v pm2 &> /dev/null; then
            log "INFO" "PM2 Status:"
            pm2 status --no-daemon | head -20 || log "WARN" "Could not get PM2 status"
        fi
        
        # Check log files
        log "INFO" "Recent log entries:"
        tail -10 "$LOG_DIR/ultimate-redundancy-automation.log" 2>/dev/null || log "WARN" "Could not read log file"
        
    else
        log "INFO" "❌ System is not running"
        
        # Check if there are any orphaned processes
        local orphaned=$(pgrep -f "ultimate-redundancy-automation" || true)
        if [ -n "$orphaned" ]; then
            log "WARN" "Found orphaned processes: $orphaned"
        fi
    fi
}

# Function to show logs
show_logs() {
    log "INFO" "📋 Showing Ultimate Redundancy Automation System logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.log" ]; then
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.log"
    else
        log "WARN" "No log file found"
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.out" ]; then
        log "INFO" "Output log:"
        tail -20 "$LOG_DIR/ultimate-redundancy-automation.out"
    fi
}

# Function to show help
show_help() {
    echo "Ultimate Redundancy Automation System Management Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|help}"
    echo ""
    echo "Commands:"
    echo "  start     Start the Ultimate Redundancy Automation System"
    echo "  stop      Stop the Ultimate Redundancy Automation System"
    echo "  restart   Restart the Ultimate Redundancy Automation System"
    echo "  status    Show system status and health information"
    echo "  logs      Show recent log entries"
    echo "  help      Show this help message"
    echo ""
    echo "This system provides redundancy for:"
    echo "  - PM2 process automations"
    echo "  - GitHub Actions workflows"
    echo "  - Netlify Functions"
    echo "  - All automation scripts"
    echo ""
}

# Main script logic
case "${1:-help}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        restart_system
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
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

exit 0