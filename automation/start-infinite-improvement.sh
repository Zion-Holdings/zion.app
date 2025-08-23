#!/bin/bash

# Infinite Improvement Loop Startup Script
# This script starts the infinite improvement loop system with proper configuration

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/infinite-improvement.pid"
CONFIG_FILE="$SCRIPT_DIR/infinite-improvement-config.json"

# Create logs directory if it doesn't exist
mkdir -p "$LOG_DIR"

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
    esac
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/infinite-improvement.log"
}

# Check if Node.js is installed
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js to run the infinite improvement loop."
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if npm is installed
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed. Please install npm to run the infinite improvement loop."
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "INFO" "npm version: $npm_version"
}

# Check if required dependencies are installed
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        log "ERROR" "package.json not found in project root"
        exit 1
    fi
    
    # Check if node_modules exists
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "WARN" "node_modules not found. Installing dependencies..."
        cd "$PROJECT_ROOT"
        npm install
    fi
    
    log "INFO" "Dependencies check completed"
}

# Check if the system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Infinite improvement loop is already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found. Removing..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start the infinite improvement loop
start_system() {
    log "INFO" "Starting Infinite Improvement Loop System..."
    
    # Change to script directory
    cd "$SCRIPT_DIR"
    
    # Check if configuration file exists
    if [ ! -f "$CONFIG_FILE" ]; then
        log "WARN" "Configuration file not found. Using default configuration."
    else
        log "INFO" "Using configuration file: $CONFIG_FILE"
    fi
    
    # Start the system
    nohup node infinite-improvement-launcher.js --start > "$LOG_DIR/infinite-improvement.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo $pid > "$PID_FILE"
    
    log "INFO" "Infinite improvement loop started with PID: $pid"
    log "INFO" "Logs are being written to: $LOG_DIR/infinite-improvement.log"
    log "INFO" "Output is being written to: $LOG_DIR/infinite-improvement.out"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "System started successfully!"
        log "INFO" "Dashboard available at: http://localhost:3001"
        log "INFO" "Improvement monitor available at: http://localhost:3002"
    else
        log "ERROR" "Failed to start system. Check logs for details."
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Stop the infinite improvement loop
stop_system() {
    log "INFO" "Stopping Infinite Improvement Loop System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process with PID: $pid"
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Process did not stop gracefully. Force killing..."
                kill -9 "$pid"
            fi
            
            log "INFO" "System stopped successfully"
        else
            log "WARN" "Process with PID $pid is not running"
        fi
        
        rm -f "$PID_FILE"
    else
        log "WARN" "PID file not found. System may not be running."
    fi
}

# Restart the infinite improvement loop
restart_system() {
    log "INFO" "Restarting Infinite Improvement Loop System..."
    stop_system
    sleep 2
    start_system
}

# Show system status
show_status() {
    log "INFO" "Checking Infinite Improvement Loop System status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "System is running (PID: $pid)"
            
            # Show process info
            local process_info=$(ps -p "$pid" -o pid,ppid,cmd --no-headers)
            log "INFO" "Process info: $process_info"
            
            # Show port usage
            log "INFO" "Checking port usage..."
            if netstat -tuln 2>/dev/null | grep -q ":3001 "; then
                log "INFO" "Dashboard port 3001 is in use"
            fi
            if netstat -tuln 2>/dev/null | grep -q ":3002 "; then
                log "INFO" "Improvement monitor port 3002 is in use"
            fi
            
            return 0
        else
            log "WARN" "PID file exists but process is not running"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        log "INFO" "System is not running (no PID file found)"
        return 1
    fi
}

# Show logs
show_logs() {
    local lines=${1:-50}
    log "INFO" "Showing last $lines lines of logs..."
    echo "=== Infinite Improvement Loop Logs ==="
    tail -n "$lines" "$LOG_DIR/infinite-improvement.log"
}

# Show help
show_help() {
    echo "Infinite Improvement Loop Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the infinite improvement loop system"
    echo "  stop      Stop the infinite improvement loop system"
    echo "  restart   Restart the infinite improvement loop system"
    echo "  status    Show system status"
    echo "  logs      Show recent logs (default: 50 lines)"
    echo "  logs N    Show last N lines of logs"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs 100"
    echo ""
    echo "Configuration:"
    echo "  Config file: $CONFIG_FILE"
    echo "  Log directory: $LOG_DIR"
    echo "  PID file: $PID_FILE"
}

# Main script logic
main() {
    local command=${1:-help}
    
    case $command in
        "start")
            check_node
            check_npm
            check_dependencies
            if check_running; then
                log "INFO" "System is already running"
                exit 0
            fi
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            check_node
            check_npm
            check_dependencies
            restart_system
            ;;
        "status")
            show_status
            ;;
        "logs")
            local lines=${2:-50}
            show_logs "$lines"
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

# Handle script interruption
trap 'log "INFO" "Script interrupted"; exit 1' INT TERM

# Run main function with all arguments
main "$@"
