#!/bin/bash

# Ultimate Redundancy V2 Master Startup Script
# Comprehensive coverage for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-v2.pid"
STATUS_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-v2-status.json"
MASTER_SCRIPT="$WORKSPACE_DIR/automation/ultimate-redundancy-v2-master.cjs"

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
            echo -e "${BLUE}[${timestamp}] [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[${timestamp}] [SUCCESS]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[${timestamp}] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[${timestamp}] [ERROR]${NC} $message"
            ;;
    esac
    
    # Also write to log file
    echo "[${timestamp}] [${level}] $message" >> "$LOG_DIR/ultimate-redundancy-v2.log"
}

# Ensure log directory exists
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
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

# Start the Ultimate Redundancy V2 system
start() {
    log "INFO" "Starting Ultimate Redundancy V2 system..."
    
    if is_running; then
        log "WARN" "Ultimate Redundancy V2 system is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Ensure log directory exists
    ensure_log_dir
    
    # Check if master script exists
    if [ ! -f "$MASTER_SCRIPT" ]; then
        log "ERROR" "Master script not found: $MASTER_SCRIPT"
        return 1
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, some features may not work"
    fi
    
    # Start the master system in background
    log "INFO" "Launching Ultimate Redundancy V2 master..."
    nohup node "$MASTER_SCRIPT" start > "$LOG_DIR/ultimate-redundancy-v2-master.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Ultimate Redundancy V2 system started successfully (PID: $pid)"
        
        # Run initial health check
        log "INFO" "Running initial health check..."
        node "$MASTER_SCRIPT" check
        
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy V2 system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the Ultimate Redundancy V2 system
stop() {
    log "INFO" "Stopping Ultimate Redundancy V2 system..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "PID file not found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Sending stop signal to process $pid..."
        
        # Try graceful stop first
        if node "$MASTER_SCRIPT" stop 2>/dev/null; then
            log "SUCCESS" "Ultimate Redundancy V2 system stopped gracefully"
        else
            # Force kill if graceful stop fails
            log "WARN" "Graceful stop failed, force killing process $pid..."
            kill -9 "$pid" 2>/dev/null || true
            log "SUCCESS" "Process $pid force killed"
        fi
        
        rm -f "$PID_FILE"
        return 0
    else
        log "WARN" "Process $pid is not running"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Restart the Ultimate Redundancy V2 system
restart() {
    log "INFO" "Restarting Ultimate Redundancy V2 system..."
    
    stop
    sleep 2
    start
}

# Check system status
status() {
    log "INFO" "Checking Ultimate Redundancy V2 system status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Ultimate Redundancy V2 system is running (PID: $pid)"
        
        # Get detailed status from master script
        if [ -f "$MASTER_SCRIPT" ]; then
            log "INFO" "Detailed status:"
            node "$MASTER_SCRIPT" status
        fi
        
        return 0
    else
        log "WARN" "Ultimate Redundancy V2 system is not running"
        return 1
    fi
}

# Check system health
health() {
    log "INFO" "Checking Ultimate Redundancy V2 system health..."
    
    if [ ! -f "$MASTER_SCRIPT" ]; then
        log "ERROR" "Master script not found: $MASTER_SCRIPT"
        return 1
    fi
    
    # Run health check
    node "$MASTER_SCRIPT" check
    
    # Show status
    if [ -f "$STATUS_FILE" ]; then
        log "INFO" "Current health status:"
        cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
    fi
}

# Monitor system in real-time
monitor() {
    log "INFO" "Starting real-time monitoring..."
    
    if [ ! -f "$MASTER_SCRIPT" ]; then
        log "ERROR" "Master script not found: $MASTER_SCRIPT"
        return 1
    fi
    
    # Start monitoring mode
    node "$MASTER_SCRIPT" start
}

# Show logs
logs() {
    log "INFO" "Showing Ultimate Redundancy V2 logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        tail -f "$LOG_DIR/ultimate-redundancy-v2.log"
    else
        log "WARN" "No log file found"
    fi
}

# Run recovery procedures
recover() {
    log "INFO" "Running recovery procedures..."
    
    if [ ! -f "$MASTER_SCRIPT" ]; then
        log "ERROR" "Master script not found: $MASTER_SCRIPT"
        return 1
    fi
    
    # Run recovery
    node "$MASTER_SCRIPT" recover
}

# Check specific component health
check_component() {
    local component="$1"
    
    if [ ! -f "$MASTER_SCRIPT" ]; then
        log "ERROR" "Master script not found: $MASTER_SCRIPT"
        return 1
    fi
    
    case "$component" in
        "pm2")
            log "INFO" "Checking PM2 health..."
            node "$MASTER_SCRIPT" pm2
            ;;
        "github")
            log "INFO" "Checking GitHub Actions health..."
            node "$MASTER_SCRIPT" github
            ;;
        "netlify")
            log "INFO" "Checking Netlify Functions health..."
            node "$MASTER_SCRIPT" netlify
            ;;
        *)
            log "ERROR" "Unknown component: $component. Available: pm2, github, netlify"
            return 1
            ;;
    esac
}

# Show help
show_help() {
    echo "Ultimate Redundancy V2 Master Control Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|health|monitor|logs|recover|check <component>}"
    echo ""
    echo "Commands:"
    echo "  start                    Start the Ultimate Redundancy V2 system"
    echo "  stop                     Stop the Ultimate Redundancy V2 system"
    echo "  restart                  Restart the Ultimate Redundancy V2 system"
    echo "  status                   Show system status"
    echo "  health                   Check system health"
    echo "  monitor                  Start real-time monitoring"
    echo "  logs                     Show system logs"
    echo "  recover                  Run recovery procedures"
    echo "  check <component>        Check specific component health (pm2|github|netlify)"
    echo ""
    echo "Examples:"
    echo "  $0 start                 # Start the system"
    echo "  $0 check pm2             # Check PM2 health"
    echo "  $0 check github          # Check GitHub Actions health"
    echo "  $0 check netlify         # Check Netlify Functions health"
    echo ""
}

# Main script logic
main() {
    local command="$1"
    local component="$2"
    
    # Ensure we're in the right directory
    cd "$WORKSPACE_DIR"
    
    case "$command" in
        "start")
            start
            ;;
        "stop")
            stop
            ;;
        "restart")
            restart
            ;;
        "status")
            status
            ;;
        "health")
            health
            ;;
        "monitor")
            monitor
            ;;
        "logs")
            logs
            ;;
        "recover")
            recover
            ;;
        "check")
            if [ -z "$component" ]; then
                log "ERROR" "Component not specified for check command"
                show_help
                exit 1
            fi
            check_component "$component"
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        "")
            show_help
            exit 1
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