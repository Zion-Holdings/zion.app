#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script manages the comprehensive redundancy automation system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-automation.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-automation.log"
NODE_SCRIPT="$SCRIPT_DIR/ultimate-redundancy-automation-system.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
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

# Check if the automation script exists
check_script() {
    if [ ! -f "$NODE_SCRIPT" ]; then
        log "ERROR" "Automation script not found: $NODE_SCRIPT"
        exit 1
    fi
    
    log "INFO" "Automation script found: $NODE_SCRIPT"
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

# Start the automation system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "System already running with PID $pid"
            return 1
        else
            log "INFO" "Removing stale PID file"
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the Node.js automation system
    nohup node "$NODE_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    log "INFO" "System started with PID $pid"
    
    # Wait a moment and check if it's still running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "System is running successfully"
        return 0
    else
        log "ERROR" "System failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the automation system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "No PID file found, system may not be running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Stopping process $pid"
        kill "$pid"
        
        # Wait for process to stop
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Process $pid did not stop gracefully, forcing termination"
            kill -9 "$pid"
        fi
        
        log "INFO" "System stopped"
    else
        log "WARN" "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
}

# Restart the automation system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    if [ ! -f "$PID_FILE" ]; then
        log "INFO" "System is not running (no PID file)"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "System is running with PID $pid"
        
        # Get detailed status from the Node.js system
        if [ -f "$NODE_SCRIPT" ]; then
            log "INFO" "Getting detailed system status..."
            node "$NODE_SCRIPT" status
        fi
        
        return 0
    else
        log "WARN" "System is not running (stale PID file)"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Show system logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing system logs (last 50 lines):"
        tail -n 50 "$LOG_FILE"
    else
        log "WARN" "No log file found"
    fi
}

# Generate system report
generate_report() {
    log "INFO" "Generating system report..."
    
    if [ -f "$NODE_SCRIPT" ]; then
        node "$NODE_SCRIPT" report
    else
        log "ERROR" "Automation script not found"
        return 1
    fi
}

# Run health check
run_health_check() {
    log "INFO" "Running health check..."
    
    if [ -f "$NODE_SCRIPT" ]; then
        node "$NODE_SCRIPT" health
        local exit_code=$?
        
        if [ $exit_code -eq 0 ]; then
            log "INFO" "Health check passed"
        else
            log "WARN" "Health check failed"
        fi
        
        return $exit_code
    else
        log "ERROR" "Automation script not found"
        return 1
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing Ultimate Redundancy Automation System..."
    
    # Check prerequisites
    check_node
    check_script
    check_workspace
    
    # Test health check
    if run_health_check; then
        log "INFO" "System test passed"
        return 0
    else
        log "ERROR" "System test failed"
        return 1
    fi
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        "start")
            check_node
            check_script
            check_workspace
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            check_node
            check_script
            check_workspace
            restart_system
            ;;
        "status")
            check_status
            ;;
        "logs")
            show_logs
            ;;
        "report")
            generate_report
            ;;
        "health")
            run_health_check
            ;;
        "test")
            test_system
            ;;
        *)
            echo "Usage: $0 [start|stop|restart|status|logs|report|health|test]"
            echo ""
            echo "Commands:"
            echo "  start   - Start the automation system"
            echo "  stop    - Stop the automation system"
            echo "  restart - Restart the automation system"
            echo "  status  - Check system status"
            echo "  logs    - Show system logs"
            echo "  report  - Generate system report"
            echo "  health  - Run health check"
            echo "  test    - Test the system"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"