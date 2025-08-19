#!/bin/bash

# Ultimate Redundancy System Startup Script
# Provides comprehensive backup coverage for all automation systems:
# - PM2 automations
# - GitHub Actions automations
# - Netlify Functions automations
# - Local cron jobs
# - Health monitoring
# - Auto-recovery

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/ultimate-redundancy.pid"
LOCK_FILE="$SCRIPT_DIR/ultimate-redundancy.lock"
SYSTEM_SCRIPT="$SCRIPT_DIR/ultimate-redundancy-system.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging functions
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
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy.log"
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

# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    if is_locked; then
        log "ERROR" "System is locked, another process may be starting/stopping"
        return 1
    fi
    
    create_lock
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        remove_lock
        return 1
    fi
    
    # Check if the system script exists
    if [ ! -f "$SYSTEM_SCRIPT" ]; then
        log "ERROR" "System script not found: $SYSTEM_SCRIPT"
        remove_lock
        return 1
    fi
    
    # Start the system in background
    log "INFO" "Launching Ultimate Redundancy System..."
    nohup node "$SYSTEM_SCRIPT" start > "$LOG_DIR/startup.log" 2>&1 &
    local pid=$!
    
    # Wait a moment for startup
    sleep 3
    
    # Check if process is still running
    if kill -0 "$pid" 2>/dev/null; then
        echo "$pid" > "$PID_FILE"
        log "SUCCESS" "Ultimate Redundancy System started successfully (PID: $pid)"
        remove_lock
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy System"
        remove_lock
        return 1
    fi
}

# Stop the ultimate redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy System..."
    
    if ! is_running; then
        log "WARN" "System is not running"
        return 0
    fi
    
    if is_locked; then
        log "ERROR" "System is locked, another process may be starting/stopping"
        return 1
    fi
    
    create_lock
    
    local pid=$(cat "$PID_FILE")
    log "INFO" "Stopping process (PID: $pid)..."
    
    # Send SIGTERM first
    kill -TERM "$pid" 2>/dev/null || true
    
    # Wait for graceful shutdown
    local count=0
    while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
        sleep 1
        count=$((count + 1))
    done
    
    # Force kill if still running
    if kill -0 "$pid" 2>/dev/null; then
        log "WARN" "Force killing process (PID: $pid)..."
        kill -KILL "$pid" 2>/dev/null || true
    fi
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    log "SUCCESS" "Ultimate Redundancy System stopped successfully"
    remove_lock
    return 0
}

# Restart the ultimate redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy System..."
    
    stop_system
    sleep 2
    start_system
}

# Show system status
show_status() {
    log "INFO" "Ultimate Redundancy System Status:"
    echo
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}✓ System is RUNNING${NC}"
        echo "  PID: $pid"
        echo "  Started: $(ps -o lstart= -p "$pid" 2>/dev/null || echo 'Unknown')"
        echo "  Uptime: $(ps -o etime= -p "$pid" 2>/dev/null || echo 'Unknown')"
        
        # Show process info
        echo
        echo "Process Information:"
        ps -f -p "$pid" 2>/dev/null || echo "Process not found"
        
        # Show recent logs
        echo
        echo "Recent Logs (last 10 lines):"
        if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
            tail -n 10 "$LOG_DIR/ultimate-redundancy.log"
        else
            echo "No log file found"
        fi
        
    else
        echo -e "${RED}✗ System is NOT RUNNING${NC}"
    fi
    
    echo
    echo "Configuration:"
    echo "  Script: $SYSTEM_SCRIPT"
    echo "  Logs: $LOG_DIR"
    echo "  PID File: $PID_FILE"
    echo "  Lock File: $LOCK_FILE"
}

# Show system health
show_health() {
    log "INFO" "Checking Ultimate Redundancy System Health..."
    
    if ! is_running; then
        log "ERROR" "System is not running"
        return 1
    fi
    
    # Use the system's health check command
    if [ -f "$SYSTEM_SCRIPT" ]; then
        node "$SYSTEM_SCRIPT" health
    else
        log "ERROR" "System script not found"
        return 1
    fi
}

# Show system logs
show_logs() {
    local lines="${1:-50}"
    
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        log "INFO" "Showing last $lines lines of system logs:"
        echo
        tail -n "$lines" "$LOG_DIR/ultimate-redundancy.log"
    else
        log "WARN" "No log file found"
    fi
}

# Monitor system in real-time
monitor_system() {
    log "INFO" "Starting real-time monitoring (Ctrl+C to stop)..."
    
    if ! is_running; then
        log "ERROR" "System is not running"
        return 1
    fi
    
    # Monitor logs in real-time
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        tail -f "$LOG_DIR/ultimate-redundancy.log"
    else
        log "ERROR" "No log file found"
        return 1
    fi
}

# Clean up system
cleanup_system() {
    log "INFO" "Cleaning up Ultimate Redundancy System..."
    
    # Stop if running
    if is_running; then
        stop_system
    fi
    
    # Remove PID and lock files
    rm -f "$PID_FILE" "$LOCK_FILE"
    
    # Clean old logs (keep last 1000 lines)
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        local temp_log="$LOG_DIR/ultimate-redundancy.tmp"
        tail -n 1000 "$LOG_DIR/ultimate-redundancy.log" > "$temp_log"
        mv "$temp_log" "$LOG_DIR/ultimate-redundancy.log"
        log "INFO" "Cleaned up old logs"
    fi
    
    log "SUCCESS" "Cleanup completed"
}

# Show help
show_help() {
    echo "Ultimate Redundancy System Management Script"
    echo
    echo "Usage: $0 [COMMAND]"
    echo
    echo "Commands:"
    echo "  start     Start the Ultimate Redundancy System"
    echo "  stop      Stop the Ultimate Redundancy System"
    echo "  restart   Restart the Ultimate Redundancy System"
    echo "  status    Show system status and information"
    echo "  health    Check system health"
    echo "  logs      Show recent logs (default: 50 lines)"
    echo "  monitor   Monitor system logs in real-time"
    echo "  cleanup   Clean up system files and logs"
    echo "  help      Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start                    # Start the system"
    echo "  $0 status                   # Show status"
    echo "  $0 logs 100                 # Show last 100 log lines"
    echo "  $0 monitor                  # Monitor in real-time"
    echo
    echo "The Ultimate Redundancy System provides comprehensive backup coverage for:"
    echo "  • PM2 automations"
    echo "  • GitHub Actions automations"
    echo "  • Netlify Functions automations"
    echo "  • Local cron jobs"
    echo "  • Health monitoring"
    echo "  • Auto-recovery"
}

# Main execution
main() {
    local command="${1:-help}"
    
    case "$command" in
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
            show_status
            ;;
        health)
            show_health
            ;;
        logs)
            show_logs "$2"
            ;;
        monitor)
            monitor_system
            ;;
        cleanup)
            cleanup_system
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

# Handle script interruption
trap 'log "WARN" "Script interrupted"; remove_lock; exit 1' INT TERM

# Run main function
main "$@"