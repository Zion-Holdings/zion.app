#!/bin/bash

# Enhanced Infinite Improvement Loop Starter Script
# 
# This script provides a comprehensive way to start, monitor, and manage
# the enhanced infinite improvement loop system with proper error handling,
# logging, and recovery mechanisms.

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$SCRIPT_DIR"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_FILE="$AUTOMATION_DIR/infinite-improvement.pid"
STATUS_FILE="$AUTOMATION_DIR/infinite-improvement-status.json"
LAUNCHER_SCRIPT="$AUTOMATION_DIR/enhanced-infinite-improvement-launcher.js"
ERROR_FIXER_SCRIPT="$AUTOMATION_DIR/scripts/fix-automation-errors.js"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
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
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
}

# Check if Node.js is installed
check_nodejs() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js to continue."
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed. Please install npm to continue."
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "INFO" "npm version: $npm_version"
}

# Create necessary directories
create_directories() {
    log "INFO" "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$AUTOMATION_DIR/utils"
    mkdir -p "$AUTOMATION_DIR/backups"
    
    log "SUCCESS" "Directories created successfully"
}

# Check if the infinite improvement loop is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Infinite improvement loop is already running (PID: $pid)"
            return 0
        else
            log "WARN" "PID file exists but process is not running. Cleaning up..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Fix automation errors before starting
fix_automation_errors() {
    log "INFO" "Running automation error fixer..."
    
    if [ -f "$ERROR_FIXER_SCRIPT" ]; then
        cd "$AUTOMATION_DIR"
        if node "$ERROR_FIXER_SCRIPT"; then
            log "SUCCESS" "Automation errors fixed successfully"
        else
            log "WARN" "Some automation errors could not be fixed"
        fi
    else
        log "WARN" "Error fixer script not found: $ERROR_FIXER_SCRIPT"
    fi
}

# Install dependencies if needed
install_dependencies() {
    log "INFO" "Checking dependencies..."
    
    cd "$AUTOMATION_DIR"
    
    if [ -f "package.json" ]; then
        log "INFO" "Installing npm dependencies..."
        npm install --silent
        log "SUCCESS" "Dependencies installed successfully"
    else
        log "WARN" "No package.json found, skipping dependency installation"
    fi
}

# Start the infinite improvement loop
start_infinite_improvement() {
    log "INFO" "Starting Enhanced Infinite Improvement Loop..."
    
    cd "$AUTOMATION_DIR"
    
    # Start the launcher
    nohup node "$LAUNCHER_SCRIPT" start > "$LOG_DIR/infinite-improvement.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment for the process to start
    sleep 2
    
    # Check if the process is still running
    if ps -p "$pid" > /dev/null 2>&1; then
        log "SUCCESS" "Enhanced Infinite Improvement Loop started successfully (PID: $pid)"
        log "INFO" "Log file: $LOG_DIR/infinite-improvement.log"
        log "INFO" "Status file: $STATUS_FILE"
        return 0
    else
        log "ERROR" "Failed to start infinite improvement loop"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Monitor the infinite improvement loop
monitor_loop() {
    log "INFO" "Starting monitoring..."
    
    local pid=$(cat "$PID_FILE")
    local monitor_count=0
    local max_monitor_count=30  # Monitor for 5 minutes (30 * 10 seconds)
    
    while [ $monitor_count -lt $max_monitor_count ]; do
        if ! ps -p "$pid" > /dev/null 2>&1; then
            log "ERROR" "Infinite improvement loop process stopped unexpectedly"
            rm -f "$PID_FILE"
            return 1
        fi
        
        # Check log file for errors
        if [ -f "$LOG_DIR/infinite-improvement.log" ]; then
            local error_count=$(tail -n 50 "$LOG_DIR/infinite-improvement.log" | grep -c "ERROR\|Error" || true)
            if [ "$error_count" -gt 5 ]; then
                log "WARN" "High error count detected in logs"
            fi
        fi
        
        # Check status file
        if [ -f "$STATUS_FILE" ]; then
            local health=$(jq -r '.health // "unknown"' "$STATUS_FILE" 2>/dev/null || echo "unknown")
            if [ "$health" = "unhealthy" ]; then
                log "WARN" "System health is unhealthy"
            elif [ "$health" = "healthy" ]; then
                log "SUCCESS" "System health is healthy"
            fi
        fi
        
        sleep 10
        monitor_count=$((monitor_count + 1))
    done
    
    log "INFO" "Monitoring completed. Infinite improvement loop is running in background."
}

# Show status
show_status() {
    log "INFO" "Checking infinite improvement loop status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "SUCCESS" "Infinite improvement loop is running (PID: $pid)"
            
            # Show process info
            local process_info=$(ps -p "$pid" -o pid,ppid,cmd --no-headers 2>/dev/null || echo "Process info unavailable")
            log "INFO" "Process info: $process_info"
            
            # Show recent logs
            if [ -f "$LOG_DIR/infinite-improvement.log" ]; then
                log "INFO" "Recent logs:"
                tail -n 5 "$LOG_DIR/infinite-improvement.log" | while read -r line; do
                    echo "  $line"
                done
            fi
            
            # Show status file
            if [ -f "$STATUS_FILE" ]; then
                log "INFO" "Status:"
                cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
            fi
        else
            log "ERROR" "PID file exists but process is not running"
            rm -f "$PID_FILE"
        fi
    else
        log "WARN" "Infinite improvement loop is not running"
    fi
}

# Stop the infinite improvement loop
stop_loop() {
    log "INFO" "Stopping infinite improvement loop..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            # Try graceful shutdown first
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Force killing process..."
                kill -9 "$pid"
            fi
            
            rm -f "$PID_FILE"
            log "SUCCESS" "Infinite improvement loop stopped"
        else
            log "WARN" "Process not running, cleaning up PID file"
            rm -f "$PID_FILE"
        fi
    else
        log "WARN" "PID file not found"
    fi
}

# Restart the infinite improvement loop
restart_loop() {
    log "INFO" "Restarting infinite improvement loop..."
    
    stop_loop
    sleep 2
    start_infinite_improvement
}

# Generate report
generate_report() {
    log "INFO" "Generating infinite improvement loop report..."
    
    cd "$AUTOMATION_DIR"
    
    if [ -f "$LAUNCHER_SCRIPT" ]; then
        if node "$LAUNCHER_SCRIPT" report; then
            log "SUCCESS" "Report generated successfully"
        else
            log "ERROR" "Failed to generate report"
        fi
    else
        log "ERROR" "Launcher script not found: $LAUNCHER_SCRIPT"
    fi
}

# Cleanup function
cleanup() {
    log "INFO" "Performing cleanup..."
    
    cd "$AUTOMATION_DIR"
    
    if [ -f "$LAUNCHER_SCRIPT" ]; then
        if node "$LAUNCHER_SCRIPT" cleanup; then
            log "SUCCESS" "Cleanup completed successfully"
        else
            log "ERROR" "Cleanup failed"
        fi
    else
        log "ERROR" "Launcher script not found: $LAUNCHER_SCRIPT"
    fi
}

# Show help
show_help() {
    echo -e "${CYAN}Enhanced Infinite Improvement Loop Starter Script${NC}"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the infinite improvement loop"
    echo "  stop      Stop the infinite improvement loop"
    echo "  restart   Restart the infinite improvement loop"
    echo "  status    Show current status"
    echo "  monitor   Start and monitor the loop"
    echo "  report    Generate a detailed report"
    echo "  cleanup   Clean up all files and stop the loop"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 monitor"
    echo ""
}

# Main function
main() {
    local command="${1:-start}"
    
    # Ensure we're in the right directory
    cd "$SCRIPT_DIR"
    
    case $command in
        "start")
            check_nodejs
            check_npm
            create_directories
            install_dependencies
            fix_automation_errors
            
            if check_running; then
                log "WARN" "Infinite improvement loop is already running"
                exit 0
            fi
            
            if start_infinite_improvement; then
                log "SUCCESS" "Enhanced Infinite Improvement Loop started successfully"
            else
                log "ERROR" "Failed to start infinite improvement loop"
                exit 1
            fi
            ;;
            
        "stop")
            stop_loop
            ;;
            
        "restart")
            check_nodejs
            check_npm
            restart_loop
            ;;
            
        "status")
            show_status
            ;;
            
        "monitor")
            check_nodejs
            check_npm
            create_directories
            install_dependencies
            fix_automation_errors
            
            if check_running; then
                log "WARN" "Infinite improvement loop is already running"
                show_status
                exit 0
            fi
            
            if start_infinite_improvement; then
                monitor_loop
            else
                log "ERROR" "Failed to start infinite improvement loop"
                exit 1
            fi
            ;;
            
        "report")
            generate_report
            ;;
            
        "cleanup")
            cleanup
            ;;
            
        "help"|"-h"|"--help")
            show_help
            ;;
            
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'log "WARN" "Script interrupted"; exit 1' INT TERM

# Run main function with all arguments
main "$@" 