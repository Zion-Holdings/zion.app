#!/bin/bash

# Start Autonomous Error Monitoring Systems
# This script launches all autonomous error monitoring and fixing systems

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/autonomous-monitoring-logs"
PID_DIR="$SCRIPT_DIR/autonomous-monitoring-pids"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$PID_DIR"

log() {
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$LOG_DIR/startup.log"
}

check_pid() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$pid_file"
        fi
    fi
    return 1
}

start_system() {
    local name="$1"
    local script="$2"
    local pid_file="$PID_DIR/${name}.pid"
    
    log "Starting $name..."
    
    if check_pid "$pid_file"; then
        log "⚠️ $name is already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    if [ -f "$script" ]; then
        nohup "$script" > "$LOG_DIR/${name}.log" 2>&1 &
        echo $! > "$pid_file"
        log "✅ $name started (PID: $!)"
    else
        log "❌ Script not found: $script"
        return 1
    fi
}

stop_system() {
    local name="$1"
    local pid_file="$PID_DIR/${name}.pid"
    
    log "Stopping $name..."
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            rm -f "$pid_file"
            log "✅ $name stopped (PID: $pid)"
        else
            rm -f "$pid_file"
            log "ℹ️ $name was not running"
        fi
    else
        log "ℹ️ $name was not running"
    fi
}

status_system() {
    local name="$1"
    local pid_file="$PID_DIR/${name}.pid"
    
    if check_pid "$pid_file"; then
        local pid=$(cat "$pid_file")
        log "✅ $name is running (PID: $pid)"
        return 0
    else
        log "❌ $name is not running"
        return 1
    fi
}

start_all_systems() {
    log "🚀 Starting all autonomous error monitoring systems..."
    
    # Start the autonomous error monitor factory
    start_system "autonomous-error-monitor-factory" "$SCRIPT_DIR/autonomous-error-monitor-factory.js"
    
    # Start the continuous error detection cron
    start_system "continuous-error-detection-cron" "$SCRIPT_DIR/continuous-error-detection-cron.sh"
    
    # Start the automation error monitor cron
    start_system "automation-error-monitor-cron" "$SCRIPT_DIR/automation-error-monitor-cron.js"
    
    # Start the autonomous error fixing agent factory
    start_system "autonomous-error-fixing-agent-factory" "$SCRIPT_DIR/autonomous-error-fixing-agent-factory.js"
    
    log "✅ All autonomous error monitoring systems started"
}

stop_all_systems() {
    log "🛑 Stopping all autonomous error monitoring systems..."
    
    stop_system "autonomous-error-monitor-factory"
    stop_system "continuous-error-detection-cron"
    stop_system "automation-error-monitor-cron"
    stop_system "autonomous-error-fixing-agent-factory"
    
    log "✅ All autonomous error monitoring systems stopped"
}

status_all_systems() {
    log "📊 Status of autonomous error monitoring systems:"
    
    local all_running=true
    
    status_system "autonomous-error-monitor-factory" || all_running=false
    status_system "continuous-error-detection-cron" || all_running=false
    status_system "automation-error-monitor-cron" || all_running=false
    status_system "autonomous-error-fixing-agent-factory" || all_running=false
    
    if [ "$all_running" = true ]; then
        log "✅ All systems are running"
    else
        log "⚠️ Some systems are not running"
        return 1
    fi
}

restart_all_systems() {
    log "🔄 Restarting all autonomous error monitoring systems..."
    stop_all_systems
    sleep 2
    start_all_systems
}

show_help() {
    echo "Usage: $0 {start|stop|restart|status|help}"
    echo ""
    echo "Commands:"
    echo "  start   - Start all autonomous error monitoring systems"
    echo "  stop    - Stop all autonomous error monitoring systems"
    echo "  restart - Restart all autonomous error monitoring systems"
    echo "  status  - Show status of all systems"
    echo "  help    - Show this help message"
    echo ""
    echo "Systems:"
    echo "  - Autonomous Error Monitor Factory"
    echo "  - Continuous Error Detection Cron"
    echo "  - Automation Error Monitor Cron"
    echo "  - Autonomous Error Fixing Agent Factory"
}

case "$1" in
    start)
        start_all_systems
        ;;
    stop)
        stop_all_systems
        ;;
    restart)
        restart_all_systems
        ;;
    status)
        status_all_systems
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
