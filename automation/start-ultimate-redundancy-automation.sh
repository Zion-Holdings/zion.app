#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script manages the new comprehensive redundancy automation system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-automation.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-automation.log"
SYSTEM_SCRIPT="ultimate-redundancy-automation-system.cjs"

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
            log "WARN" "PID file exists but process is not running, cleaning up"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start the system
start_system() {
    if is_running; then
        log "WARN" "Ultimate Redundancy Automation System is already running"
        return 1
    fi
    
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    cd "$SCRIPT_DIR"
    
    # Start the system in background
    nohup node "$SYSTEM_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        echo "$pid" > "$PID_FILE"
        log "INFO" "Ultimate Redundancy Automation System started successfully (PID: $pid)"
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy Automation System"
        return 1
    fi
}

# Stop the system
stop_system() {
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
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Force killing process (PID: $pid)"
            kill -KILL "$pid"
        fi
        
        rm -f "$PID_FILE"
        log "INFO" "Ultimate Redundancy Automation System stopped"
        return 0
    else
        log "WARN" "Process not running (PID: $pid), cleaning up"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Restart the system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Show system status
show_status() {
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

# Run one-time check
run_once() {
    log "INFO" "Running one-time redundancy check..."
    
    cd "$SCRIPT_DIR"
    if node "$SYSTEM_SCRIPT" once >/dev/null 2>&1; then
        log "INFO" "One-time check completed successfully"
    else
        log "ERROR" "One-time check failed"
        return 1
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing Ultimate Redundancy Automation System..."
    
    # Check if script can be loaded
    cd "$SCRIPT_DIR"
    if node -e "require('./$SYSTEM_SCRIPT'); console.log('Script loaded successfully')" >/dev/null 2>&1; then
        log "INFO" "✓ Script can be loaded"
    else
        log "ERROR" "✗ Script cannot be loaded"
        return 1
    fi
    
    # Check if script can show help
    if node "$SYSTEM_SCRIPT" >/dev/null 2>&1; then
        log "INFO" "✓ Script CLI interface works"
    else
        log "ERROR" "✗ Script CLI interface failed"
        return 1
    fi
    
    log "INFO" "✓ All tests passed"
}

# Main function
main() {
    local command="${1:-help}"
    
    case "$command" in
        "start")
            check_node
            check_system_script
            check_workspace
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            check_node
            check_system_script
            check_workspace
            restart_system
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs
            ;;
        "health")
            check_node
            check_system_script
            check_workspace
            run_health_check
            ;;
        "once")
            check_node
            check_system_script
            check_workspace
            run_once
            ;;
        "test")
            check_node
            check_system_script
            test_system
            ;;
        "help"|*)
            echo "Usage: $0 <command>"
            echo ""
            echo "Commands:"
            echo "  start     - Start the Ultimate Redundancy Automation System"
            echo "  stop      - Stop the Ultimate Redundancy Automation System"
            echo "  restart   - Restart the Ultimate Redundancy Automation System"
            echo "  status    - Show system status"
            echo "  logs      - Show system logs"
            echo "  health    - Run health check"
            echo "  once      - Run one-time redundancy check"
            echo "  test      - Test the system"
            echo "  help      - Show this help message"
            echo ""
            echo "Environment Variables:"
            echo "  REDUNDANCY_LOG_LEVEL - Log level (INFO, WARN, ERROR, DEBUG)"
            echo "  REDUNDANCY_CHECK_INTERVAL - Main check interval in ms (default: 30000)"
            echo "  REDUNDANCY_MAX_RETRIES - Maximum recovery attempts (default: 3)"
            echo "  REDUNDANCY_AUTO_RECOVERY - Enable auto-recovery (default: true)"
            echo "  HEALTH_CHECK_INTERVAL - Health check interval in ms (default: 60000)"
            ;;
    esac
}

# Run main function with all arguments
main "$@"