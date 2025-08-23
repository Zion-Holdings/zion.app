#!/bin/bash

# Comprehensive Redundancy Automation V2 Startup Script
# This script provides redundancy for all PM2, GitHub Actions, Netlify Functions, and automation scripts

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
REDUNDANCY_SCRIPT="$WORKSPACE_DIR/automation/comprehensive-redundancy-automation-v2.cjs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v2.pid"
STATUS_FILE="$LOG_DIR/comprehensive-redundancy-v2-status.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy-v2-startup.log"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Function to check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "INFO" "npm version: $npm_version"
}

# Function to check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, attempting to install..."
        npm install -g pm2 || {
            log "ERROR" "Failed to install PM2"
            exit 1
        }
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
}

# Function to check dependencies
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    # Check if package.json exists
    if [[ ! -f "$WORKSPACE_DIR/package.json" ]]; then
        log "ERROR" "package.json not found in workspace"
        exit 1
    fi
    
    # Check if redundancy script exists
    if [[ ! -f "$REDUNDANCY_SCRIPT" ]]; then
        log "ERROR" "Redundancy script not found: $REDUNDANCY_SCRIPT"
        exit 1
    fi
    
    log "SUCCESS" "Dependencies check passed"
}

# Function to start the redundancy system
start_redundancy() {
    log "INFO" "Starting Comprehensive Redundancy Automation V2..."
    
    # Check if already running
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Redundancy system already running with PID $pid"
            return 0
        else
            log "WARN" "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the redundancy system
    cd "$WORKSPACE_DIR"
    
    # Run the redundancy script in the background
    nohup node "$REDUNDANCY_SCRIPT" start > "$LOG_DIR/comprehensive-redundancy-v2.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 3
    
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Redundancy system started with PID $pid"
        
        # Update status
        update_status "running" "$pid"
        
        return 0
    else
        log "ERROR" "Failed to start redundancy system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the redundancy system
stop_redundancy() {
    log "INFO" "Stopping Comprehensive Redundancy Automation V2..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping process with PID $pid..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while kill -0 "$pid" 2>/dev/null && [[ $count -lt 10 ]]; do
                sleep 1
                ((count++))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Process did not stop gracefully, force killing..."
                kill -9 "$pid"
            fi
            
            log "SUCCESS" "Redundancy system stopped"
        else
            log "WARN" "Process with PID $pid is not running"
        fi
        
        rm -f "$PID_FILE"
        update_status "stopped"
    else
        log "WARN" "No PID file found, system may not be running"
    fi
}

# Function to restart the redundancy system
restart_redundancy() {
    log "INFO" "Restarting Comprehensive Redundancy Automation V2..."
    stop_redundancy
    sleep 2
    start_redundancy
}

# Function to check status
check_status() {
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "SUCCESS" "Redundancy system is running with PID $pid"
            
            # Get detailed status from the script
            if [[ -f "$REDUNDANCY_SCRIPT" ]]; then
                cd "$WORKSPACE_DIR"
                node "$REDUNDANCY_SCRIPT" status 2>/dev/null || log "WARN" "Could not get detailed status"
            fi
            
            return 0
        else
            log "ERROR" "PID file exists but process is not running"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        log "INFO" "Redundancy system is not running"
        return 1
    fi
}

# Function to check health
check_health() {
    log "INFO" "Checking redundancy system health..."
    
    if [[ -f "$REDUNDANCY_SCRIPT" ]]; then
        cd "$WORKSPACE_DIR"
        node "$REDUNDANCY_SCRIPT" health 2>/dev/null || log "WARN" "Could not get health status"
    else
        log "ERROR" "Redundancy script not found"
    fi
}

# Function to show logs
show_logs() {
    log "INFO" "Showing redundancy system logs..."
    
    if [[ -f "$LOG_DIR/comprehensive-redundancy-v2.log" ]]; then
        tail -n 50 "$LOG_DIR/comprehensive-redundancy-v2.log"
    else
        log "WARN" "No log file found"
    fi
    
    if [[ -f "$LOG_DIR/comprehensive-redundancy-v2.out" ]]; then
        echo ""
        log "INFO" "Output log:"
        tail -n 20 "$LOG_DIR/comprehensive-redundancy-v2.out"
    fi
}

# Function to update status file
update_status() {
    local status="$1"
    local pid="${2:-}"
    
    cat > "$STATUS_FILE" << EOF
{
  "status": "$status",
  "pid": "$pid",
  "lastUpdated": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "workspace": "$WORKSPACE_DIR"
}
EOF
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy Automation V2 Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the redundancy system"
    echo "  stop      Stop the redundancy system"
    echo "  restart   Restart the redundancy system"
    echo "  status    Check if the system is running"
    echo "  health    Check system health"
    echo "  logs      Show recent logs"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
}

# Main execution
main() {
    local command="${1:-start}"
    
    log "INFO" "Comprehensive Redundancy Automation V2 Management Script"
    log "INFO" "Workspace: $WORKSPACE_DIR"
    
    case "$command" in
        "start")
            check_node
            check_npm
            check_pm2
            check_dependencies
            start_redundancy
            ;;
        "stop")
            stop_redundancy
            ;;
        "restart")
            check_node
            check_npm
            check_pm2
            check_dependencies
            restart_redundancy
            ;;
        "status")
            check_status
            ;;
        "health")
            check_health
            ;;
        "logs")
            show_logs
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"