#!/bin/bash

# Ultimate Redundancy System V3 Startup Script
# Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-v3.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-v3.log"
SYSTEM_SCRIPT="$SCRIPT_DIR/ultimate-redundancy-v3-system.cjs"

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
    if [ ! -f "$SYSTEM_SCRIPT" ]; then
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
            log "WARN" "PID file exists but process is not running, cleaning up..."
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy System V3..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Start the system in background
    nohup node "$SYSTEM_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Wait a moment for the system to start
    sleep 2
    
    # Check if it started successfully
    if kill -0 "$pid" 2>/dev/null; then
        echo "$pid" > "$PID_FILE"
        log "INFO" "System started successfully (PID: $pid)"
        return 0
    else
        log "ERROR" "Failed to start system"
        return 1
    fi
}

# Stop the redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy System V3..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "PID file not found, system may not be running"
        return 0
    fi
    
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
            log "WARN" "Process did not terminate gracefully, forcing..."
            kill -KILL "$pid"
        fi
        
        log "INFO" "System stopped"
    else
        log "WARN" "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
}

# Restart the redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy System V3..."
    stop_system
    sleep 2
    start_system
}

# Get system status
get_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "System is running (PID: $pid)"
        
        # Get detailed status from the system
        if command -v node &> /dev/null; then
            echo "=== System Status ==="
            node "$SYSTEM_SCRIPT" status 2>/dev/null || echo "Could not get detailed status"
        fi
    else
        log "INFO" "System is not running"
    fi
    
    # Show log file info
    if [ -f "$LOG_FILE" ]; then
        echo "=== Recent Logs ==="
        tail -20 "$LOG_FILE" 2>/dev/null || echo "Could not read log file"
    fi
}

# Get system health
get_health() {
    if is_running; then
        log "INFO" "Checking system health..."
        if command -v node &> /dev/null; then
            node "$SYSTEM_SCRIPT" health
        fi
    else
        log "WARN" "System is not running, cannot check health"
    fi
}

# Generate system report
generate_report() {
    if is_running; then
        log "INFO" "Generating system report..."
        if command -v node &> /dev/null; then
            node "$SYSTEM_SCRIPT" report
        fi
    else
        log "WARN" "System is not running, cannot generate report"
    fi
}

# Show system logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing system logs..."
        tail -f "$LOG_FILE"
    else
        log "WARN" "Log file not found: $LOG_FILE"
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing Ultimate Redundancy System V3..."
    
    # Check if system script is valid
    if ! node -c "$SYSTEM_SCRIPT" 2>/dev/null; then
        log "ERROR" "System script has syntax errors"
        return 1
    fi
    
    # Test health check
    if command -v node &> /dev/null; then
        log "INFO" "Running health check test..."
        if node "$SYSTEM_SCRIPT" health > /dev/null 2>&1; then
            log "INFO" "Health check test passed"
        else
            log "WARN" "Health check test failed"
        fi
    fi
    
    log "INFO" "System test completed"
}

# Main function
main() {
    local command="${1:-status}"
    
    # Ensure we're in the right directory
    cd "$WORKSPACE_DIR"
    
    # Check prerequisites
    check_node
    check_system_script
    check_workspace
    
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
            get_status
            ;;
        "health")
            get_health
            ;;
        "report")
            generate_report
            ;;
        "logs")
            show_logs
            ;;
        "test")
            test_system
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|report|logs|test}"
            echo ""
            echo "Commands:"
            echo "  start   - Start the redundancy system"
            echo "  stop    - Stop the redundancy system"
            echo "  restart - Restart the redundancy system"
            echo "  status  - Show system status"
            echo "  health  - Check system health"
            echo "  report  - Generate system report"
            echo "  logs    - Show system logs"
            echo "  test    - Test the system"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"