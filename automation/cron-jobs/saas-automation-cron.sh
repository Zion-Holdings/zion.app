#!/bin/bash

# SaaS Automation Cron Job Script
# This script manages the continuous SaaS services creation and improvement automation

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_DIR="$AUTOMATION_DIR/pids"
DATA_DIR="$AUTOMATION_DIR/data"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$DATA_DIR"

# Configuration
ORCHESTRATOR_SCRIPT="$AUTOMATION_DIR/saas-automation-orchestrator.js"
FACTORY_SCRIPT="$AUTOMATION_DIR/saas-services-autonomous-factory.js"
AGENTS_DIR="$AUTOMATION_DIR/agents"

# Logging functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/saas-automation.log"
}

error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" | tee -a "$LOG_DIR/saas-automation-error.log"
}

# Check if orchestrator is running
is_orchestrator_running() {
    if [ -f "$PID_DIR/saas-orchestrator.pid" ]; then
        local pid=$(cat "$PID_DIR/saas-orchestrator.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_DIR/saas-orchestrator.pid"
        fi
    fi
    return 1
}

# Start the SaaS automation orchestrator
start_orchestrator() {
    log "Starting SaaS Automation Orchestrator..."
    
    if is_orchestrator_running; then
        log "Orchestrator is already running"
        return 0
    fi
    
    cd "$AUTOMATION_DIR"
    
    # Start the orchestrator
    nohup node "$ORCHESTRATOR_SCRIPT" > "$LOG_DIR/orchestrator.log" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_DIR/saas-orchestrator.pid"
    log "Orchestrator started with PID: $pid"
    
    # Wait a moment to ensure it started properly
    sleep 5
    
    if is_orchestrator_running; then
        log "Orchestrator started successfully"
        return 0
    else
        error "Failed to start orchestrator"
        return 1
    fi
}

# Stop the SaaS automation orchestrator
stop_orchestrator() {
    log "Stopping SaaS Automation Orchestrator..."
    
    if [ -f "$PID_DIR/saas-orchestrator.pid" ]; then
        local pid=$(cat "$PID_DIR/saas-orchestrator.pid")
        
        if ps -p "$pid" > /dev/null 2>&1; then
            kill -TERM "$pid"
            log "Sent TERM signal to orchestrator (PID: $pid)"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -KILL "$pid"
                log "Sent KILL signal to orchestrator (PID: $pid)"
            fi
        fi
        
        rm -f "$PID_DIR/saas-orchestrator.pid"
        log "Orchestrator stopped"
    else
        log "Orchestrator is not running"
    fi
}

# Restart the SaaS automation orchestrator
restart_orchestrator() {
    log "Restarting SaaS Automation Orchestrator..."
    stop_orchestrator
    sleep 2
    start_orchestrator
}

# Check system health
check_system_health() {
    log "Checking system health..."
    
    # Check orchestrator status
    if is_orchestrator_running; then
        log "✓ Orchestrator is running"
    else
        log "✗ Orchestrator is not running"
        return 1
    fi
    
    # Check log files
    if [ -f "$LOG_DIR/orchestrator.log" ]; then
        local log_size=$(stat -c%s "$LOG_DIR/orchestrator.log" 2>/dev/null || echo 0)
        if [ "$log_size" -gt 10485760 ]; then # 10MB
            log "Rotating orchestrator log file"
            mv "$LOG_DIR/orchestrator.log" "$LOG_DIR/orchestrator.log.$(date +%Y%m%d-%H%M%S)"
        fi
    fi
    
    # Check data directory
    if [ -d "$DATA_DIR" ]; then
        local data_files=$(find "$DATA_DIR" -name "*.json" | wc -l)
        log "Found $data_files data files"
    fi
    
    # Check available disk space
    local disk_usage=$(df "$AUTOMATION_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 90 ]; then
        error "Disk usage is high: ${disk_usage}%"
        return 1
    else
        log "✓ Disk usage: ${disk_usage}%"
    fi
    
    return 0
}

# Generate system report
generate_report() {
    log "Generating system report..."
    
    local report_file="$LOG_DIR/saas-system-report-$(date +%Y%m%d-%H%M%S).txt"
    
    {
        echo "SaaS Automation System Report"
        echo "Generated: $(date)"
        echo "=================================="
        echo ""
        
        echo "System Status:"
        if is_orchestrator_running; then
            echo "✓ Orchestrator: Running"
        else
            echo "✗ Orchestrator: Stopped"
        fi
        
        echo ""
        echo "Directory Structure:"
        echo "Automation Dir: $AUTOMATION_DIR"
        echo "Log Dir: $LOG_DIR"
        echo "PID Dir: $PID_DIR"
        echo "Data Dir: $DATA_DIR"
        
        echo ""
        echo "Recent Log Entries:"
        if [ -f "$LOG_DIR/saas-automation.log" ]; then
            tail -20 "$LOG_DIR/saas-automation.log"
        fi
        
        echo ""
        echo "Data Files:"
        if [ -d "$DATA_DIR" ]; then
            find "$DATA_DIR" -name "*.json" -exec ls -lh {} \;
        fi
        
        echo ""
        echo "System Resources:"
        echo "Disk Usage: $(df -h "$AUTOMATION_DIR" | tail -1)"
        echo "Memory Usage: $(free -h | grep Mem)"
        
    } > "$report_file"
    
    log "Report generated: $report_file"
}

# Cleanup old files
cleanup_old_files() {
    log "Cleaning up old files..."
    
    # Remove old log files (older than 30 days)
    find "$LOG_DIR" -name "*.log.*" -mtime +30 -delete 2>/dev/null
    
    # Remove old reports (older than 7 days)
    find "$LOG_DIR" -name "saas-system-report-*.txt" -mtime +7 -delete 2>/dev/null
    
    # Remove old PID files (older than 1 day)
    find "$PID_DIR" -name "*.pid" -mtime +1 -delete 2>/dev/null
    
    log "Cleanup completed"
}

# Main automation loop
automation_loop() {
    log "Starting SaaS automation loop..."
    
    while true; do
        # Check system health
        if ! check_system_health; then
            error "System health check failed, restarting orchestrator"
            restart_orchestrator
        fi
        
        # Generate periodic report
        if [ "$(date +%M)" = "00" ]; then
            generate_report
        fi
        
        # Cleanup old files (once per hour)
        if [ "$(date +%M)" = "30" ]; then
            cleanup_old_files
        fi
        
        # Sleep for 5 minutes
        sleep 300
    done
}

# Handle different commands
case "${1:-start}" in
    start)
        start_orchestrator
        ;;
    stop)
        stop_orchestrator
        ;;
    restart)
        restart_orchestrator
        ;;
    status)
        if is_orchestrator_running; then
            echo "Orchestrator is running"
            exit 0
        else
            echo "Orchestrator is not running"
            exit 1
        fi
        ;;
    health)
        if check_system_health; then
            echo "System is healthy"
            exit 0
        else
            echo "System health check failed"
            exit 1
        fi
        ;;
    report)
        generate_report
        ;;
    loop)
        automation_loop
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|report|loop}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the SaaS automation orchestrator"
        echo "  stop    - Stop the SaaS automation orchestrator"
        echo "  restart - Restart the SaaS automation orchestrator"
        echo "  status  - Check if orchestrator is running"
        echo "  health  - Check system health"
        echo "  report  - Generate system report"
        echo "  loop    - Run continuous automation loop"
        exit 1
        ;;
esac 