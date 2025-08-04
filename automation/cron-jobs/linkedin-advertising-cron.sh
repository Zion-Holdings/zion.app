#!/bin/bash

# LinkedIn Advertising Automation Cron Job
# This script manages the LinkedIn advertising automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_DIR/logs/linkedin-advertising"
PID_FILE="$PROJECT_DIR/pids/linkedin-advertising.pid"

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$(dirname "$PID_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/cron.log"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start LinkedIn advertising system
start_system() {
    log "Starting LinkedIn Advertising Automation System..."
    
    if check_running; then
        log "System is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    cd "$PROJECT_DIR"
    node automation/launch-linkedin-advertising.js > "$LOG_DIR/system.log" 2>&1 &
    echo $! > "$PID_FILE"
    
    log "LinkedIn Advertising System started (PID: $(cat "$PID_FILE"))"
}

# Stop LinkedIn advertising system
stop_system() {
    log "Stopping LinkedIn Advertising Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            kill "$PID"
            rm -f "$PID_FILE"
            log "System stopped"
        else
            log "System not running"
            rm -f "$PID_FILE"
        fi
    else
        log "No PID file found"
    fi
}

# Restart LinkedIn advertising system
restart_system() {
    log "Restarting LinkedIn Advertising Automation System..."
    stop_system
    sleep 5
    start_system
}

# Check system health
check_health() {
    log "Checking LinkedIn Advertising System health..."
    
    if check_running; then
        PID=$(cat "$PID_FILE")
        log "System is running (PID: $PID)"
        
        # Check log files for errors
        if [ -f "$LOG_DIR/system.log" ]; then
            ERROR_COUNT=$(grep -c "ERROR\|FAILED" "$LOG_DIR/system.log" 2>/dev/null || echo "0")
            if [ "$ERROR_COUNT" -gt 0 ]; then
                log "WARNING: Found $ERROR_COUNT errors in system log"
            fi
        fi
        
        # Check disk space
        DISK_USAGE=$(df "$PROJECT_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
        if [ "$DISK_USAGE" -gt 90 ]; then
            log "WARNING: High disk usage ($DISK_USAGE%)"
        fi
        
        # Check memory usage
        if command -v free > /dev/null 2>&1; then
            MEMORY_USAGE=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
            if [ "$MEMORY_USAGE" -gt 90 ]; then
                log "WARNING: High memory usage ($MEMORY_USAGE%)"
            fi
        fi
        
    else
        log "System is not running"
        start_system
    fi
}

# Generate status report
generate_report() {
    log "Generating LinkedIn Advertising System report..."
    
    REPORT_FILE="$LOG_DIR/status-report-$(date +%Y%m%d-%H%M%S).json"
    
    cat > "$REPORT_FILE" << EOF
{
    "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "system_status": "$(check_running && echo "running" || echo "stopped")",
    "pid": "$(cat "$PID_FILE" 2>/dev/null || echo "null")",
    "disk_usage": "$(df "$PROJECT_DIR" | tail -1 | awk '{print $5}')",
    "memory_usage": "$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}' 2>/dev/null || echo "unknown")",
    "log_size": "$(du -h "$LOG_DIR" 2>/dev/null | tail -1 | awk '{print $1}' || echo "unknown")",
    "last_error": "$(grep "ERROR\|FAILED" "$LOG_DIR/system.log" 2>/dev/null | tail -1 || echo "none")"
}
EOF
    
    log "Report generated: $REPORT_FILE"
}

# Clean up old logs
cleanup_logs() {
    log "Cleaning up old logs..."
    
    # Remove logs older than 30 days
    find "$LOG_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null
    find "$LOG_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null
    
    log "Log cleanup completed"
}

# Main execution
case "$1" in
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
        if check_running; then
            echo "LinkedIn Advertising System is running (PID: $(cat "$PID_FILE"))"
        else
            echo "LinkedIn Advertising System is not running"
        fi
        ;;
    health)
        check_health
        ;;
    report)
        generate_report
        ;;
    cleanup)
        cleanup_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|report|cleanup}"
        exit 1
        ;;
esac

exit 0 