#!/bin/bash

# Design Improvement Automation Cron Job
# This script runs the design improvement automation system on a schedule

# Configuration
PROJECT_ROOT="/Users/miami2/Documents/GitHub/bolt.new.zion.app"
LOG_DIR="$PROJECT_ROOT/automation/design-improvement-logs"
PID_FILE="$PROJECT_ROOT/automation/design-improvement-pid.txt"
NODE_PATH="/usr/local/bin/node"
SCRIPT_PATH="$PROJECT_ROOT/automation/launch-design-improvement-automation.js"

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> "$LOG_DIR/cron.log"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Check if process is already running
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

# Start the design improvement system
start_system() {
    log "Starting design improvement automation system..."
    
    if check_running; then
        log "System is already running (PID: $(cat $PID_FILE))"
        return 1
    fi
    
    cd "$PROJECT_ROOT"
    
    # Start the system in background
    nohup "$NODE_PATH" "$SCRIPT_PATH" start > "$LOG_DIR/system.log" 2>&1 &
    
    # Save PID
    echo $! > "$PID_FILE"
    
    log "System started with PID: $!"
    return 0
}

# Stop the design improvement system
stop_system() {
    log "Stopping design improvement automation system..."
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            kill "$PID"
            log "Sent SIGTERM to PID: $PID"
            
            # Wait for graceful shutdown
            sleep 5
            
            if ps -p "$PID" > /dev/null 2>&1; then
                kill -9 "$PID"
                log "Sent SIGKILL to PID: $PID"
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    log "System stopped"
}

# Run a single improvement cycle
run_cycle() {
    log "Running design improvement cycle..."
    
    cd "$PROJECT_ROOT"
    "$NODE_PATH" "$SCRIPT_PATH" cycle >> "$LOG_DIR/cycle.log" 2>&1
    
    if [ $? -eq 0 ]; then
        log "Improvement cycle completed successfully"
    else
        log "Improvement cycle failed"
    fi
}

# Run specific improvement
run_improvement() {
    local improvement_type="$1"
    log "Running $improvement_type improvement..."
    
    cd "$PROJECT_ROOT"
    "$NODE_PATH" "$SCRIPT_PATH" "$improvement_type" >> "$LOG_DIR/${improvement_type}.log" 2>&1
    
    if [ $? -eq 0 ]; then
        log "$improvement_type improvement completed successfully"
    else
        log "$improvement_type improvement failed"
    fi
}

# Get system status
get_status() {
    log "Checking system status..."
    
    if check_running; then
        PID=$(cat "$PID_FILE")
        log "System is running (PID: $PID)"
        
        # Get memory usage
        if command -v ps > /dev/null 2>&1; then
            MEMORY=$(ps -o rss= -p "$PID" 2>/dev/null | awk '{print $1/1024 " MB"}')
            log "Memory usage: $MEMORY"
        fi
        
        # Get uptime
        if [ -f "$PID_FILE" ]; then
            START_TIME=$(stat -f "%m" "$PID_FILE" 2>/dev/null || stat -c "%Y" "$PID_FILE" 2>/dev/null)
            if [ -n "$START_TIME" ]; then
                UPTIME=$(( $(date +%s) - START_TIME ))
                UPTIME_DAYS=$(( UPTIME / 86400 ))
                UPTIME_HOURS=$(( (UPTIME % 86400) / 3600 ))
                UPTIME_MINUTES=$(( (UPTIME % 3600) / 60 ))
                log "Uptime: ${UPTIME_DAYS}d ${UPTIME_HOURS}h ${UPTIME_MINUTES}m"
            fi
        fi
    else
        log "System is not running"
    fi
}

# Clean up old logs
cleanup_logs() {
    log "Cleaning up old logs..."
    
    # Remove logs older than 30 days
    find "$LOG_DIR" -name "*.log" -mtime +30 -delete 2>/dev/null
    find "$LOG_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null
    
    log "Log cleanup completed"
}

# Main function
main() {
    local command="$1"
    
    case "$command" in
        "start")
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            stop_system
            sleep 2
            start_system
            ;;
        "cycle")
            run_cycle
            ;;
        "layout")
            run_improvement "layout"
            ;;
        "navigation")
            run_improvement "navigation"
            ;;
        "visual-design")
            run_improvement "visual-design"
            ;;
        "status")
            get_status
            ;;
        "cleanup")
            cleanup_logs
            ;;
        "health-check")
            get_status
            if ! check_running; then
                log "System is down, attempting restart..."
                start_system
            fi
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|cycle|layout|navigation|visual-design|status|cleanup|health-check}"
            echo ""
            echo "Commands:"
            echo "  start           Start the continuous improvement system"
            echo "  stop            Stop the system"
            echo "  restart         Restart the system"
            echo "  cycle           Run a single improvement cycle"
            echo "  layout          Run layout optimization"
            echo "  navigation      Run navigation enhancement"
            echo "  visual-design   Run visual design enhancement"
            echo "  status          Get system status"
            echo "  cleanup         Clean up old logs"
            echo "  health-check    Check system health and restart if needed"
            echo ""
            echo "Cron Examples:"
            echo "  # Run every 30 minutes"
            echo "  */30 * * * * $0 cycle"
            echo ""
            echo "  # Run layout optimization daily at 2 AM"
            echo "  0 2 * * * $0 layout"
            echo ""
            echo "  # Health check every hour"
            echo "  0 * * * * $0 health-check"
            echo ""
            echo "  # Cleanup logs weekly"
            echo "  0 3 * * 0 $0 cleanup"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
