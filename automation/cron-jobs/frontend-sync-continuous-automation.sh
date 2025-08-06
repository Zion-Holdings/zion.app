#!/bin/bash

# Frontend Sync Continuous Automation Cron Job
# This script runs continuously to ensure all frontend sync automations are working

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOG_DIR="$AUTOMATION_DIR/frontend-sync-logs"
PID_DIR="$AUTOMATION_DIR/frontend-sync-pids"
STATUS_DIR="$AUTOMATION_DIR/frontend-sync-status"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"

# Logging functions
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_DIR/continuous-automation.log"
}

error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1" | tee -a "$LOG_DIR/continuous-automation.log"
}

# PID file management
get_pid_file() {
    local name="$1"
    echo "$PID_DIR/${name}.pid"
}

is_running() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$pid_file"
        fi
    fi
    return 1
}

start_process() {
    local name="$1"
    local script="$2"
    local pid_file=$(get_pid_file "$name")
    
    if ! is_running "$pid_file"; then
        log "Starting $name..."
        cd "$PROJECT_ROOT"
        nohup node "$script" > "$LOG_DIR/${name}.log" 2>&1 &
        echo $! > "$pid_file"
        log "$name started with PID $(cat $pid_file)"
    else
        log "$name is already running with PID $(cat $pid_file)"
    fi
}

stop_process() {
    local name="$1"
    local pid_file=$(get_pid_file "$name")
    
    if is_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        log "Stopping $name (PID: $pid)..."
        kill "$pid" 2>/dev/null || true
        sleep 2
        if ps -p "$pid" > /dev/null 2>&1; then
            log "Force killing $name..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        rm -f "$pid_file"
        log "$name stopped"
    else
        log "$name is not running"
    fi
}

restart_process() {
    local name="$1"
    local script="$2"
    stop_process "$name"
    sleep 2
    start_process "$name" "$script"
}

# Health check function
check_health() {
    local name="$1"
    local pid_file=$(get_pid_file "$name")
    local status_file="$STATUS_DIR/${name}-status.json"
    
    if is_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        local memory=$(ps -o rss= -p "$pid" 2>/dev/null || echo "0")
        local cpu=$(ps -o %cpu= -p "$pid" 2>/dev/null || echo "0")
        
        # Create status JSON
        cat > "$status_file" << EOF
{
    "name": "$name",
    "status": "running",
    "pid": $pid,
    "memory_kb": $memory,
    "cpu_percent": $cpu,
    "last_check": "$(date -Iseconds)",
    "uptime": "$(ps -o etime= -p $pid 2>/dev/null || echo 'unknown')"
}
EOF
        return 0
    else
        # Create status JSON for stopped process
        cat > "$status_file" << EOF
{
    "name": "$name",
    "status": "stopped",
    "pid": null,
    "memory_kb": 0,
    "cpu_percent": 0,
    "last_check": "$(date -Iseconds)",
    "uptime": "0"
}
EOF
        return 1
    fi
}

# Main automation functions
start_frontend_sync_factory() {
    start_process "frontend-sync-factory" "$AUTOMATION_DIR/frontend-sync-autonomous-factory.js"
}

start_automation_orchestrator() {
    start_process "automation-orchestrator" "$AUTOMATION_DIR/frontend-sync-automation-orchestrator.js"
}

start_continuous_monitoring() {
    start_process "continuous-monitor" "$AUTOMATION_DIR/continuous-monitor.js"
}

# Performance monitoring
monitor_performance() {
    log "Monitoring performance..."
    
    local total_memory=0
    local total_cpu=0
    local process_count=0
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local name=$(basename "$pid_file" .pid)
            if is_running "$pid_file"; then
                local pid=$(cat "$pid_file")
                local memory=$(ps -o rss= -p "$pid" 2>/dev/null || echo "0")
                local cpu=$(ps -o %cpu= -p "$pid" 2>/dev/null || echo "0")
                
                total_memory=$((total_memory + memory))
                total_cpu=$(echo "$total_cpu + $cpu" | bc -l 2>/dev/null || echo "$total_cpu")
                process_count=$((process_count + 1))
                
                log "$name: Memory=${memory}KB, CPU=${cpu}%"
            fi
        fi
    done
    
    # Log total resource usage
    log "Total: $process_count processes, ${total_memory}KB memory, ${total_cpu}% CPU"
    
    # Check for resource issues
    if [ "$total_memory" -gt 1048576 ]; then  # 1GB
        error "High memory usage detected: ${total_memory}KB"
    fi
    
    if [ "$(echo "$total_cpu > 80" | bc -l 2>/dev/null || echo "0")" = "1" ]; then
        error "High CPU usage detected: ${total_cpu}%"
    fi
}

# Error recovery
recover_from_errors() {
    log "Checking for errors and recovering..."
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local name=$(basename "$pid_file" .pid)
            local status_file="$STATUS_DIR/${name}-status.json"
            
            if [ -f "$status_file" ]; then
                local last_error=$(jq -r '.last_error // empty' "$status_file" 2>/dev/null || echo "")
                if [ -n "$last_error" ]; then
                    log "Recovering $name from error: $last_error"
                    case "$name" in
                        "frontend-sync-factory")
                            restart_process "$name" "$AUTOMATION_DIR/frontend-sync-autonomous-factory.js"
                            ;;
                        "automation-orchestrator")
                            restart_process "$name" "$AUTOMATION_DIR/frontend-sync-automation-orchestrator.js"
                            ;;
                        *)
                            restart_process "$name" "$AUTOMATION_DIR/${name}.js"
                            ;;
                    esac
                fi
            fi
        fi
    done
}

# Cleanup function
cleanup() {
    log "Cleaning up old logs and temporary files..."
    
    # Clean up old log files (keep last 7 days)
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
    
    # Clean up old status files (keep last 3 days)
    find "$STATUS_DIR" -name "*-status.json" -mtime +3 -delete 2>/dev/null || true
    
    # Clean up old PID files for non-existent processes
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ! ps -p "$pid" > /dev/null 2>&1; then
                rm -f "$pid_file"
                log "Cleaned up stale PID file: $pid_file"
            fi
        fi
    done
}

# Main execution
main() {
    log "Starting Frontend Sync Continuous Automation..."
    
    # Ensure we're in the right directory
    cd "$PROJECT_ROOT"
    
    # Start core processes
    start_frontend_sync_factory
    start_automation_orchestrator
    
    # Wait a bit for processes to start
    sleep 5
    
    # Health check all processes
    log "Performing health checks..."
    check_health "frontend-sync-factory"
    check_health "automation-orchestrator"
    
    # Monitor performance
    monitor_performance
    
    # Recover from any errors
    recover_from_errors
    
    # Cleanup
    cleanup
    
    log "Frontend Sync Continuous Automation cycle completed"
}

# Continuous loop
run_continuously() {
    log "Starting continuous automation loop..."
    
    while true; do
        main
        
        # Wait before next cycle
        sleep 300  # 5 minutes
    done
}

# Command line interface
case "${1:-}" in
    "start")
        run_continuously
        ;;
    "stop")
        log "Stopping all frontend sync processes..."
        stop_process "frontend-sync-factory"
        stop_process "automation-orchestrator"
        stop_process "continuous-monitor"
        log "All processes stopped"
        ;;
    "restart")
        log "Restarting all frontend sync processes..."
        stop_process "frontend-sync-factory"
        stop_process "automation-orchestrator"
        stop_process "continuous-monitor"
        sleep 2
        start_frontend_sync_factory
        start_automation_orchestrator
        log "All processes restarted"
        ;;
    "status")
        log "Checking status of all processes..."
        for pid_file in "$PID_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                local name=$(basename "$pid_file" .pid)
                if is_running "$pid_file"; then
                    local pid=$(cat "$pid_file")
                    log "$name: RUNNING (PID: $pid)"
                else
                    log "$name: STOPPED"
                fi
            fi
        done
        ;;
    "health")
        log "Performing health checks..."
        for pid_file in "$PID_DIR"/*.pid; do
            if [ -f "$pid_file" ]; then
                local name=$(basename "$pid_file" .pid)
                check_health "$name"
            fi
        done
        ;;
    "monitor")
        monitor_performance
        ;;
    "cleanup")
        cleanup
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|monitor|cleanup}"
        echo ""
        echo "Commands:"
        echo "  start    - Start continuous automation loop"
        echo "  stop     - Stop all frontend sync processes"
        echo "  restart  - Restart all frontend sync processes"
        echo "  status   - Show status of all processes"
        echo "  health   - Perform health checks"
        echo "  monitor  - Monitor performance"
        echo "  cleanup  - Clean up old files"
        exit 1
        ;;
esac 