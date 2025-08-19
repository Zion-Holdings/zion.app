#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy.pid"
CONFIG_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-config.json"

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
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy.log"
}

# Ensure log directory exists
ensure_log_directory() {
    if [[ ! -d "$LOG_DIR" ]]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check if system is already running
check_running() {
    if [[ -f "$PID_FILE" ]]; then
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

# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if check_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Ensure log directory exists
    ensure_log_directory
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the ultimate redundancy system
    log "INFO" "Launching ultimate redundancy automation system..."
    nohup node automation/ultimate-redundancy-automation-system.cjs start > "$LOG_DIR/ultimate-redundancy.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Ultimate redundancy system started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_DIR/ultimate-redundancy.log"
        return 0
    else
        log "ERROR" "Failed to start ultimate redundancy system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the ultimate redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if [[ ! -f "$PID_FILE" ]]; then
        log "WARN" "No PID file found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Stopping process $pid..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [[ $count -lt 30 ]]; do
            sleep 1
            ((count++))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Process did not stop gracefully, forcing termination..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        log "INFO" "System stopped successfully"
    else
        log "WARN" "Process $pid is not running"
    fi
    
    # Clean up PID file
    rm -f "$PID_FILE"
}

# Restart the ultimate redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    log "INFO" "Checking Ultimate Redundancy Automation System status..."
    
    if check_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "System is running (PID: $pid)"
        
        # Get detailed status from the system
        cd "$WORKSPACE_DIR"
        if command -v node >/dev/null 2>&1; then
            log "INFO" "Getting detailed system status..."
            node automation/ultimate-redundancy-automation-system.cjs status
        fi
        
        return 0
    else
        log "INFO" "System is not running"
        return 1
    fi
}

# Show system logs
show_logs() {
    log "INFO" "Showing Ultimate Redundancy Automation System logs..."
    
    if [[ -f "$LOG_DIR/ultimate-redundancy.log" ]]; then
        tail -f "$LOG_DIR/ultimate-redundancy.log"
    else
        log "WARN" "No log file found at: $LOG_DIR/ultimate-redundancy.log"
    fi
}

# Perform health check
health_check() {
    log "INFO" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs health
    else
        log "ERROR" "Node.js not found"
        return 1
    fi
}

# Perform comprehensive recovery
recover_system() {
    log "INFO" "Performing comprehensive system recovery..."
    
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs recover
    else
        log "ERROR" "Node.js not found"
        return 1
    fi
}

# Check individual component health
check_pm2() {
    log "INFO" "Checking PM2 health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs pm2
    fi
}

check_github() {
    log "INFO" "Checking GitHub Actions health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs github
    fi
}

check_netlify() {
    log "INFO" "Checking Netlify Functions health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs netlify
    fi
}

check_npm() {
    log "INFO" "Checking NPM scripts health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs npm
    fi
}

# Show help information
show_help() {
    cat << EOF
Ultimate Redundancy Automation System

Usage: $0 [COMMAND]

Commands:
    start       Start the ultimate redundancy automation system
    stop        Stop the ultimate redundancy automation system
    restart     Restart the ultimate redundancy automation system
    status      Check the status of the system
    logs        Show real-time logs
    health      Perform a comprehensive health check
    recover     Perform comprehensive system recovery
    pm2         Check PM2 automation health
    github      Check GitHub Actions health
    netlify     Check Netlify Functions health
    npm         Check NPM scripts health
    help        Show this help message

The Ultimate Redundancy Automation System provides comprehensive redundancy for:
- PM2 process automations
- GitHub Actions workflows
- Netlify Functions
- NPM script automations

All components are continuously monitored and automatically recovered when issues are detected.

EOF
}

# Main script logic
main() {
    local command="${1:-help}"
    
    case "$command" in
        "start")
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            restart_system
            ;;
        "status")
            check_status
            ;;
        "logs")
            show_logs
            ;;
        "health")
            health_check
            ;;
        "recover")
            recover_system
            ;;
        "pm2")
            check_pm2
            ;;
        "github")
            check_github
            ;;
        "netlify")
            check_netlify
            ;;
        "npm")
            check_npm
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