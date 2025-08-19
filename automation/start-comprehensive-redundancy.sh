#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script launches the entire redundancy automation system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/redundancy-system.pid"
LOCK_FILE="$SCRIPT_DIR/redundancy-system.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/startup.log"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Redundancy system already running with PID $pid"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    
    if [ -f "$LOCK_FILE" ]; then
        log "WARN" "Lock file found, checking if stale"
        local lock_age=$(($(date +%s) - $(stat -c %Y "$LOCK_FILE" 2>/dev/null || echo 0)))
        if [ $lock_age -gt 300 ]; then # 5 minutes
            log "WARN" "Stale lock file found, removing"
            rm -f "$LOCK_FILE"
        else
            log "ERROR" "System appears to be running (lock file exists)"
            return 1
        fi
    fi
    
    return 1
}

# Create necessary directories
setup_directories() {
    log "INFO" "Setting up directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$SCRIPT_DIR/backup"
    
    log "INFO" "Directories created successfully"
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed or not in PATH"
        return 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
    
    # Check if we're in the right directory
    if [ ! -f "$WORKSPACE_DIR/package.json" ]; then
        log "ERROR" "package.json not found in workspace directory"
        return 1
    fi
    
    log "INFO" "System requirements check passed"
    return 0
}

# Install dependencies if needed
install_dependencies() {
    log "INFO" "Checking dependencies..."
    
    if [ ! -d "$WORKSPACE_DIR/node_modules" ]; then
        log "INFO" "Installing dependencies..."
        cd "$WORKSPACE_DIR"
        npm install
        log "INFO" "Dependencies installed successfully"
    else
        log "INFO" "Dependencies already installed"
    fi
}

# Start the redundancy system
start_system() {
    log "INFO" "Starting comprehensive redundancy system..."
    
    # Create lock file
    echo "$$" > "$LOCK_FILE"
    
    # Start the master orchestrator
    cd "$SCRIPT_DIR"
    nohup node master-redundancy-orchestrator.cjs > "$LOG_DIR/orchestrator.log" 2>&1 &
    local orchestrator_pid=$!
    
    # Save PID
    echo "$orchestrator_pid" > "$PID_FILE"
    
    # Wait a moment for startup
    sleep 5
    
    # Check if orchestrator is running
    if kill -0 "$orchestrator_pid" 2>/dev/null; then
        log "INFO" "Master orchestrator started with PID $orchestrator_pid"
        
        # Start individual systems if needed
        start_individual_systems
        
        # Remove lock file
        rm -f "$LOCK_FILE"
        
        log "INFO" "Comprehensive redundancy system started successfully"
        log "INFO" "System PID: $orchestrator_pid"
        log "INFO" "Logs: $LOG_DIR"
        
        return 0
    else
        log "ERROR" "Failed to start master orchestrator"
        rm -f "$PID_FILE" "$LOCK_FILE"
        return 1
    fi
}

# Start individual redundancy systems
start_individual_systems() {
    log "INFO" "Starting individual redundancy systems..."
    
    # Start PM2 redundancy system
    if [ -f "$SCRIPT_DIR/enhanced-pm2-redundancy.cjs" ]; then
        log "INFO" "Starting PM2 redundancy system..."
        nohup node enhanced-pm2-redundancy.cjs > "$LOG_DIR/pm2-redundancy.log" 2>&1 &
        local pm2_pid=$!
        echo "$pm2_pid" > "$SCRIPT_DIR/pm2-redundancy.pid"
        log "INFO" "PM2 redundancy system started with PID $pm2_pid"
    fi
    
    # Start GitHub Actions redundancy system
    if [ -f "$SCRIPT_DIR/enhanced-github-actions-redundancy.cjs" ]; then
        log "INFO" "Starting GitHub Actions redundancy system..."
        nohup node enhanced-github-actions-redundancy.cjs > "$LOG_DIR/github-actions-redundancy.log" 2>&1 &
        local github_pid=$!
        echo "$github_pid" > "$SCRIPT_DIR/github-actions-redundancy.pid"
        log "INFO" "GitHub Actions redundancy system started with PID $github_pid"
    fi
    
    # Start Netlify functions redundancy system
    if [ -f "$SCRIPT_DIR/enhanced-netlify-functions-redundancy.cjs" ]; then
        log "INFO" "Starting Netlify functions redundancy system..."
        nohup node enhanced-netlify-functions-redundancy.cjs > "$LOG_DIR/netlify-functions-redundancy.log" 2>&1 &
        local netlify_pid=$!
        echo "$netlify_pid" > "$SCRIPT_DIR/netlify-functions-redundancy.pid"
        log "INFO" "Netlify functions redundancy system started with PID $netlify_pid"
    fi
}

# Stop the redundancy system
stop_system() {
    log "INFO" "Stopping redundancy system..."
    
    # Stop master orchestrator
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping master orchestrator (PID: $pid)..."
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Force killing orchestrator..."
                kill -9 "$pid"
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop individual systems
    stop_individual_systems
    
    # Remove lock file
    rm -f "$LOCK_FILE"
    
    log "INFO" "Redundancy system stopped"
}

# Stop individual redundancy systems
stop_individual_systems() {
    log "INFO" "Stopping individual redundancy systems..."
    
    # Stop PM2 redundancy system
    if [ -f "$SCRIPT_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/pm2-redundancy.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping PM2 redundancy system (PID: $pid)..."
            kill "$pid"
        fi
        rm -f "$SCRIPT_DIR/pm2-redundancy.pid"
    fi
    
    # Stop GitHub Actions redundancy system
    if [ -f "$SCRIPT_DIR/github-actions-redundancy.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/github-actions-redundancy.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping GitHub Actions redundancy system (PID: $pid)..."
            kill "$pid"
        fi
        rm -f "$SCRIPT_DIR/github-actions-redundancy.pid"
    fi
    
    # Stop Netlify functions redundancy system
    if [ -f "$SCRIPT_DIR/netlify-functions-redundancy.pid" ]; then
        local pid=$(cat "$SCRIPT_DIR/netlify-functions-redundancy.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping Netlify functions redundancy system (PID: $pid)..."
            kill "$pid"
        fi
        rm -f "$SCRIPT_DIR/netlify-functions-redundancy.pid"
    fi
}

# Check system status
check_status() {
    log "INFO" "Checking system status..."
    
    local all_running=true
    
    # Check master orchestrator
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Master orchestrator: RUNNING (PID: $pid)"
        else
            log "WARN" "Master orchestrator: NOT RUNNING (stale PID file)"
            all_running=false
        fi
    else
        log "WARN" "Master orchestrator: NOT RUNNING (no PID file)"
        all_running=false
    fi
    
    # Check individual systems
    check_individual_status "PM2" "$SCRIPT_DIR/pm2-redundancy.pid"
    check_individual_status "GitHub Actions" "$SCRIPT_DIR/github-actions-redundancy.pid"
    check_individual_status "Netlify Functions" "$SCRIPT_DIR/netlify-functions-redundancy.pid"
    
    if [ "$all_running" = true ]; then
        log "INFO" "All systems are running"
        return 0
    else
        log "WARN" "Some systems are not running"
        return 1
    fi
}

# Check individual system status
check_individual_status() {
    local system_name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "$system_name redundancy: RUNNING (PID: $pid)"
        else
            log "WARN" "$system_name redundancy: NOT RUNNING (stale PID file)"
        fi
    else
        log "WARN" "$system_name redundancy: NOT RUNNING (no PID file)"
    fi
}

# Show usage
show_usage() {
    echo "Usage: $0 {start|stop|restart|status|check}"
    echo ""
    echo "Commands:"
    echo "  start   - Start the comprehensive redundancy system"
    echo "  stop    - Stop the comprehensive redundancy system"
    echo "  restart - Restart the comprehensive redundancy system"
    echo "  status  - Check the status of all systems"
    echo "  check   - Perform a health check on all systems"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 stop"
}

# Main function
main() {
    local command="$1"
    
    case "$command" in
        start)
            if check_running; then
                log "INFO" "System is already running"
                exit 0
            fi
            
            setup_directories
            check_requirements || exit 1
            install_dependencies
            start_system || exit 1
            ;;
        stop)
            stop_system
            ;;
        restart)
            log "INFO" "Restarting redundancy system..."
            stop_system
            sleep 2
            start_system || exit 1
            ;;
        status)
            check_status
            ;;
        check)
            log "INFO" "Performing health check..."
            if [ -f "$PID_FILE" ]; then
                local pid=$(cat "$PID_FILE")
                if kill -0 "$pid" 2>/dev/null; then
                    # Send health check signal
                    kill -USR1 "$pid" 2>/dev/null || log "WARN" "Could not send health check signal"
                    log "INFO" "Health check signal sent to orchestrator (PID: $pid)"
                else
                    log "ERROR" "Orchestrator is not running"
                    exit 1
                fi
            else
                log "ERROR" "No PID file found - system not running"
                exit 1
            fi
            ;;
        *)
            show_usage
            exit 1
            ;;
    esac
}

# Trap signals for cleanup
trap 'log "WARN" "Received interrupt signal, cleaning up..."; stop_system; exit 1' INT TERM

# Run main function
main "$@"