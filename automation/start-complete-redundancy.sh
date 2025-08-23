#!/bin/bash

# Complete Redundancy System Startup Script
# This script provides comprehensive redundancy for all PM2 automations, GitHub Actions automations, and Netlify functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/complete-redundancy.pid"
STATUS_FILE="$WORKSPACE_DIR/automation/complete-redundancy-status.json"

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
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/complete-redundancy.log"
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
            # PID file exists but process is dead, clean it up
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the complete redundancy system
start() {
    log "INFO" "Starting Complete Redundancy System..."
    
    if is_running; then
        log "WARN" "Complete Redundancy System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    ensure_log_dir
    
    # Start the master redundancy system
    log "INFO" "Starting Complete Redundancy Master..."
    cd "$WORKSPACE_DIR"
    
    # Start PM2 redundancy systems
    log "INFO" "Starting PM2 redundancy systems..."
    npm run redundancy:pm2:manager || log "WARN" "PM2 redundancy manager failed to start"
    
    # Start GitHub Actions redundancy systems
    log "INFO" "Starting GitHub Actions redundancy systems..."
    npm run redundancy:github:manager || log "WARN" "GitHub Actions redundancy manager failed to start"
    
    # Start Netlify Functions redundancy systems
    log "INFO" "Starting Netlify Functions redundancy systems..."
    npm run redundancy:netlify:manager || log "WARN" "Netlify Functions redundancy manager failed to start"
    
    # Start the complete redundancy master
    log "INFO" "Starting Complete Redundancy Master..."
    node automation/complete-redundancy-master.cjs start &
    local master_pid=$!
    
    # Save PID
    echo "$master_pid" > "$PID_FILE"
    
    # Wait a moment to ensure it started
    sleep 2
    
    if kill -0 "$master_pid" 2>/dev/null; then
        log "SUCCESS" "Complete Redundancy System started successfully (PID: $master_pid)"
        
        # Start continuous monitoring
        log "INFO" "Starting continuous monitoring..."
        node automation/complete-redundancy-master.cjs monitor &
        local monitor_pid=$!
        echo "$monitor_pid" >> "$PID_FILE"
        
        log "SUCCESS" "Complete Redundancy System with monitoring started (Master PID: $master_pid, Monitor PID: $monitor_pid)"
    else
        log "ERROR" "Failed to start Complete Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the complete redundancy system
stop() {
    log "INFO" "Stopping Complete Redundancy System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "No PID file found. System may not be running."
        return 1
    fi
    
    # Read PIDs and stop processes
    while IFS= read -r pid; do
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping process with PID: $pid"
            kill "$pid" 2>/dev/null || true
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Force killing process with PID: $pid"
                kill -9 "$pid" 2>/dev/null || true
            fi
        fi
    done < "$PID_FILE"
    
    # Clean up PID file
    rm -f "$PID_FILE"
    
    # Stop PM2 redundancy systems
    log "INFO" "Stopping PM2 redundancy systems..."
    npm run redundancy:pm2:stop || log "WARN" "Failed to stop PM2 redundancy"
    
    # Stop GitHub Actions redundancy systems
    log "INFO" "Stopping GitHub Actions redundancy systems..."
    pm2 stop github-actions-redundancy-manager 2>/dev/null || log "WARN" "Failed to stop GitHub Actions redundancy"
    
    # Stop Netlify Functions redundancy systems
    log "INFO" "Stopping Netlify Functions redundancy systems..."
    pm2 stop netlify-functions-redundancy-manager 2>/dev/null || log "WARN" "Failed to stop Netlify Functions redundancy"
    
    log "SUCCESS" "Complete Redundancy System stopped"
}

# Restart the complete redundancy system
restart() {
    log "INFO" "Restarting Complete Redundancy System..."
    stop
    sleep 2
    start
}

# Check status of the complete redundancy system
status() {
    log "INFO" "Checking Complete Redundancy System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Complete Redundancy System is running (PID: $pid)"
        
        # Show detailed status
        echo ""
        echo "=== Complete Redundancy System Status ==="
        echo "PID File: $PID_FILE"
        echo "Log Directory: $LOG_DIR"
        echo "Status File: $STATUS_FILE"
        echo ""
        
        # Show PM2 status
        echo "=== PM2 Status ==="
        pm2 status 2>/dev/null || echo "PM2 not available or no processes running"
        echo ""
        
        # Show health status
        if [ -f "$STATUS_FILE" ]; then
            echo "=== Health Status ==="
            cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
        else
            echo "=== Health Status ==="
            echo "No status file found"
        fi
        
    else
        log "WARN" "Complete Redundancy System is not running"
        return 1
    fi
}

# Show health information
health() {
    log "INFO" "Checking system health..."
    
    if [ -f "$STATUS_FILE" ]; then
        local health_score=$(cat "$STATUS_FILE" | jq -r '.healthScore // "unknown"' 2>/dev/null || echo "unknown")
        log "INFO" "Current health score: $health_score/100"
        
        # Show detailed health report
        echo ""
        echo "=== Health Report ==="
        cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
        
    else
        log "WARN" "No status file found. Run status check first."
        return 1
    fi
}

# Show logs
logs() {
    log "INFO" "Showing recent logs..."
    
    if [ -f "$LOG_DIR/complete-redundancy.log" ]; then
        echo "=== Recent Complete Redundancy Logs ==="
        tail -n 50 "$LOG_DIR/complete-redundancy.log"
    else
        log "WARN" "No log file found"
    fi
    
    echo ""
    echo "=== PM2 Logs ==="
    pm2 logs --lines 20 2>/dev/null || echo "PM2 logs not available"
}

# Run health check
check() {
    log "INFO" "Running comprehensive health check..."
    
    cd "$WORKSPACE_DIR"
    node automation/complete-redundancy-master.cjs health
}

# Generate report
report() {
    log "INFO" "Generating comprehensive report..."
    
    cd "$WORKSPACE_DIR"
    node automation/complete-redundancy-master.cjs report
}

# Start continuous monitoring
monitor() {
    log "INFO" "Starting continuous monitoring..."
    
    if is_running; then
        log "WARN" "System is already running with monitoring"
        return 1
    fi
    
    ensure_log_dir
    
    # Start monitoring in background
    cd "$WORKSPACE_DIR"
    node automation/complete-redundancy-master.cjs monitor &
    local monitor_pid=$!
    
    # Save PID
    echo "$monitor_pid" > "$PID_FILE"
    
    log "SUCCESS" "Continuous monitoring started (PID: $monitor_pid)"
}

# Attempt auto-recovery
recovery() {
    log "INFO" "Attempting auto-recovery..."
    
    cd "$WORKSPACE_DIR"
    node automation/complete-redundancy-master.cjs recovery
}

# Show help
show_help() {
    echo "Complete Redundancy System Management Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|health|logs|check|report|monitor|recovery}"
    echo ""
    echo "Commands:"
    echo "  start     - Start the complete redundancy system"
    echo "  stop      - Stop the complete redundancy system"
    echo "  restart   - Restart the complete redundancy system"
    echo "  status    - Show system status and detailed information"
    echo "  health    - Show health information and score"
    echo "  logs      - Show recent logs"
    echo "  check     - Run comprehensive health check"
    echo "  report    - Generate detailed report"
    echo "  monitor   - Start continuous monitoring"
    echo "  recovery  - Attempt auto-recovery"
    echo "  help      - Show this help message"
    echo ""
    echo "This script provides comprehensive redundancy for:"
    echo "  - All PM2 automations"
    echo "  - All GitHub Actions automations"
    echo "  - All Netlify functions automations"
    echo "  - All npm script automations"
    echo ""
    echo "Logs are stored in: $LOG_DIR"
    echo "Status information in: $STATUS_FILE"
}

# Main script logic
case "${1:-help}" in
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
    logs)
        logs
        ;;
    check)
        check
        ;;
    report)
        report
        ;;
    monitor)
        monitor
        ;;
    recovery)
        recovery
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log "ERROR" "Unknown command: $1"
        show_help
        exit 1
        ;;
esac

exit 0