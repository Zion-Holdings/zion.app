#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script manages all redundancy automations for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/comprehensive-redundancy-orchestrator.cjs"
PID_FILE="$LOG_DIR/comprehensive-redundancy.pid"

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
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy.log"
}

# Ensure log directory exists
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check if orchestrator script exists
check_orchestrator() {
    if [ ! -f "$ORCHESTRATOR_SCRIPT" ]; then
        log "ERROR" "Orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
    
    if [ ! -x "$ORCHESTRATOR_SCRIPT" ]; then
        chmod +x "$ORCHESTRATOR_SCRIPT"
        log "INFO" "Made orchestrator script executable"
    fi
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

# Start the comprehensive redundancy system
start() {
    log "INFO" "Starting Comprehensive Redundancy System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Check prerequisites
    check_orchestrator
    
    # Ensure PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed or not in PATH"
        exit 1
    fi
    
    # Ensure Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Start the orchestrator
    log "INFO" "Launching comprehensive redundancy orchestrator..."
    nohup node "$ORCHESTRATOR_SCRIPT" start > "$LOG_DIR/orchestrator.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Comprehensive Redundancy System started successfully (PID: $pid)"
        log "INFO" "Check status with: $0 status"
        log "INFO" "View logs with: $0 logs"
    else
        log "ERROR" "Failed to start Comprehensive Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the comprehensive redundancy system
stop() {
    log "INFO" "Stopping Comprehensive Redundancy System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "PID file not found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        # Send stop command to orchestrator
        if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
            log "INFO" "Sending stop command to orchestrator..."
            node "$ORCHESTRATOR_SCRIPT" stop || true
        fi
        
        # Kill the process
        log "INFO" "Terminating process (PID: $pid)..."
        kill "$pid"
        
        # Wait for process to terminate
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Process did not terminate gracefully, forcing kill..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        rm -f "$PID_FILE"
        log "INFO" "Comprehensive Redundancy System stopped"
    else
        log "WARN" "Process not running (PID: $pid)"
        rm -f "$PID_FILE"
    fi
}

# Restart the comprehensive redundancy system
restart() {
    log "INFO" "Restarting Comprehensive Redundancy System..."
    stop
    sleep 2
    start
}

# Check system status
status() {
    log "INFO" "Checking Comprehensive Redundancy System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "System is running (PID: $pid)"
        
        # Get detailed status from orchestrator
        if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
            log "INFO" "Getting detailed status..."
            node "$ORCHESTRATOR_SCRIPT" status
        fi
        
        # Check PM2 status
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon || true
        
        # Check GitHub Actions workflows
        log "INFO" "GitHub Actions Workflows:"
        if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
            ls -la "$WORKSPACE_DIR/.github/workflows/" || true
        fi
        
        # Check Netlify functions
        log "INFO" "Netlify Functions:"
        if [ -d "$WORKSPACE_DIR/netlify/functions" ]; then
            ls -la "$WORKSPACE_DIR/netlify/functions/" | head -20 || true
        fi
        
    else
        log "INFO" "System is not running"
    fi
}

# Check system health
health() {
    log "INFO" "Checking Comprehensive Redundancy System health..."
    
    if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
        node "$ORCHESTRATOR_SCRIPT" health
    else
        log "ERROR" "Orchestrator script not found"
        return 1
    fi
}

# Run health check once
once() {
    log "INFO" "Running comprehensive redundancy check once..."
    
    if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
        node "$ORCHESTRATOR_SCRIPT" once
    else
        log "ERROR" "Orchestrator script not found"
        return 1
    fi
}

# View logs
logs() {
    log "INFO" "Displaying Comprehensive Redundancy System logs..."
    
    if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
        tail -f "$LOG_DIR/comprehensive-redundancy.log"
    else
        log "WARN" "No log file found"
    fi
}

# Show system information
info() {
    log "INFO" "Comprehensive Redundancy System Information:"
    echo "  Workspace: $WORKSPACE_DIR"
    echo "  Script Directory: $SCRIPT_DIR"
    echo "  Log Directory: $LOG_DIR"
    echo "  Orchestrator: $ORCHESTRATOR_SCRIPT"
    echo "  PID File: $PID_FILE"
    echo ""
    
    # Check system requirements
    echo "System Requirements:"
    if command -v node &> /dev/null; then
        echo "  Node.js: $(node --version) ✓"
    else
        echo "  Node.js: Not found ✗"
    fi
    
    if command -v pm2 &> /dev/null; then
        echo "  PM2: $(pm2 --version) ✓"
    else
        echo "  PM2: Not found ✗"
    fi
    
    if command -v git &> /dev/null; then
        echo "  Git: $(git --version) ✓"
    else
        echo "  Git: Not found ✗"
    fi
    
    echo ""
    
    # Check configuration files
    echo "Configuration Files:"
    for ecosystem in ecosystem.pm2.cjs ecosystem.redundancy.cjs; do
        if [ -f "$WORKSPACE_DIR/$ecosystem" ]; then
            echo "  $ecosystem: ✓"
        else
            echo "  $ecosystem: ✗"
        fi
    done
    
    if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
        echo "  GitHub Workflows: ✓ ($(ls "$WORKSPACE_DIR/.github/workflows" | wc -l) workflows)"
    else
        echo "  GitHub Workflows: ✗"
    fi
    
    if [ -d "$WORKSPACE_DIR/netlify/functions" ]; then
        echo "  Netlify Functions: ✓ ($(ls "$WORKSPACE_DIR/netlify/functions" | wc -l) functions)"
    else
        echo "  Netlify Functions: ✗"
    fi
}

# Show help
show_help() {
    echo "Comprehensive Redundancy System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the comprehensive redundancy system"
    echo "  stop      Stop the comprehensive redundancy system"
    echo "  restart   Restart the comprehensive redundancy system"
    echo "  status    Show system status and health"
    echo "  health    Check system health"
    echo "  once      Run health check once"
    echo "  logs      View system logs (follow mode)"
    echo "  info      Show system information and requirements"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the system"
    echo "  $0 status         # Check status"
    echo "  $0 health         # Check health"
    echo "  $0 logs           # View logs"
    echo ""
    echo "The system provides redundancy for:"
    echo "  - PM2 process management"
    echo "  - GitHub Actions workflows"
    echo "  - Netlify functions"
    echo "  - Automated recovery and monitoring"
}

# Main script logic
main() {
    local command="${1:-help}"
    
    # Ensure log directory exists
    ensure_log_dir
    
    case "$command" in
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
        health)
            health
            ;;
        once)
            once
            ;;
        logs)
            logs
            ;;
        info)
            info
            ;;
        help|--help|-h)
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