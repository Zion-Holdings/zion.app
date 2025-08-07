#!/bin/bash

# Syntax Error Detection and Fixing System Launcher
# This script launches the complete syntax automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"

# Create directories
mkdir -p "$LOG_DIR" "$PID_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Log function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error_log() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

success_log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

warning_log() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

# Function to check if a process is running
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

# Function to start a component
start_component() {
    local name="$1"
    local script="$2"
    local pid_file="$PID_DIR/${name}.pid"
    local log_file="$LOG_DIR/${name}.log"

    if is_running "$pid_file"; then
        warning_log "$name is already running (PID: $(cat "$pid_file"))"
        return 0
    fi

    log "Starting $name..."
    
    if [ -f "$script" ]; then
        nohup node "$script" > "$log_file" 2>&1 &
        local pid=$!
        echo $pid > "$pid_file"
        success_log "$name started (PID: $pid)"
        return 0
    else
        error_log "Script not found: $script"
        return 1
    fi
}

# Function to stop a component
stop_component() {
    local name="$1"
    local pid_file="$PID_DIR/${name}.pid"

    if is_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        log "Stopping $name (PID: $pid)..."
        kill "$pid" 2>/dev/null
        rm -f "$pid_file"
        success_log "$name stopped"
    else
        warning_log "$name is not running"
    fi
}

# Function to check component status
check_component() {
    local name="$1"
    local pid_file="$PID_DIR/${name}.pid"

    if is_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        success_log "$name is running (PID: $pid)"
        return 0
    else
        error_log "$name is not running"
        return 1
    fi
}

# Function to show system status
show_status() {
    log "=== Syntax System Status ==="
    
    local components=("detector" "fixer" "orchestrator" "monitor")
    local all_running=true
    
    for component in "${components[@]}"; do
        local pid_file="$PID_DIR/${component}.pid"
        if is_running "$pid_file"; then
            local pid=$(cat "$pid_file")
            success_log "$component: RUNNING (PID: $pid)"
        else
            error_log "$component: NOT RUNNING"
            all_running=false
        fi
    done
    
    if [ "$all_running" = true ]; then
        success_log "All components are running"
    else
        warning_log "Some components are not running"
    fi
}

# Function to start the complete system
start_system() {
    log "Starting Syntax Error Detection and Fixing System..."
    
    # Change to project directory
    cd "$PROJECT_ROOT" || {
        error_log "Failed to change to project directory"
        exit 1
    }
    
    # Start components in order
    local components=(
        "detector:../syntax-error-detector.cjs"
        "fixer:../syntax-error-fixer.cjs"
        "orchestrator:../syntax-automation-orchestrator.cjs"
        "monitor:monitoring/syntax-monitor.cjs"
    )
    
    local failed_components=()
    
    for component_info in "${components[@]}"; do
        IFS=':' read -r name script <<< "$component_info"
        if ! start_component "$name" "$SCRIPT_DIR/$script"; then
            failed_components+=("$name")
        fi
    done
    
    if [ ${#failed_components[@]} -eq 0 ]; then
        success_log "All components started successfully"
        show_status
    else
        error_log "Failed to start components: ${failed_components[*]}"
        return 1
    fi
}

# Function to stop the complete system
stop_system() {
    log "Stopping Syntax Error Detection and Fixing System..."
    
    local components=("detector" "fixer" "orchestrator" "monitor")
    
    for component in "${components[@]}"; do
        stop_component "$component"
    done
    
    success_log "All components stopped"
}

# Function to restart the system
restart_system() {
    log "Restarting Syntax Error Detection and Fixing System..."
    stop_system
    sleep 2
    start_system
}

# Function to run a single cycle
run_cycle() {
    log "Running single syntax automation cycle..."
    
    cd "$PROJECT_ROOT" || {
        error_log "Failed to change to project directory"
        exit 1
    }
    
    if node "$SCRIPT_DIR/syntax-automation-orchestrator.cjs" once; then
        success_log "Single cycle completed successfully"
    else
        error_log "Single cycle failed"
        return 1
    fi
}

# Function to run continuous mode
run_continuous() {
    log "Starting continuous syntax automation mode..."
    
    cd "$PROJECT_ROOT" || {
        error_log "Failed to change to project directory"
        exit 1
    }
    
    if node "$SCRIPT_DIR/syntax-automation-orchestrator.cjs" continuous; then
        success_log "Continuous mode completed"
    else
        error_log "Continuous mode failed"
        return 1
    fi
}

# Function to run health check
run_health_check() {
    log "Running system health check..."
    
    cd "$PROJECT_ROOT" || {
        error_log "Failed to change to project directory"
        exit 1
    }
    
    if node "$SCRIPT_DIR/monitoring/syntax-monitor.js" health; then
        success_log "Health check completed"
    else
        error_log "Health check failed"
        return 1
    fi
}

# Function to show logs
show_logs() {
    local component="$1"
    local log_file="$LOG_DIR/${component}.log"
    
    if [ -f "$log_file" ]; then
        log "Showing logs for $component:"
        tail -n 50 "$log_file"
    else
        error_log "No log file found for $component"
    fi
}

# Function to show help
show_help() {
    echo "Syntax Error Detection and Fixing System Launcher"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start the complete system"
    echo "  stop        Stop the complete system"
    echo "  restart     Restart the complete system"
    echo "  status      Show system status"
    echo "  cycle       Run a single automation cycle"
    echo "  continuous  Run continuous automation mode"
    echo "  health      Run system health check"
    echo "  logs [comp] Show logs for component (detector|fixer|orchestrator|monitor)"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 logs detector"
    echo "  $0 cycle"
}

# Main script logic
case "${1:-help}" in
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
    cycle)
        run_cycle
        ;;
    continuous)
        run_continuous
        ;;
    health)
        run_health_check
        ;;
    logs)
        show_logs "${2:-detector}"
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        error_log "Unknown command: $1"
        show_help
        exit 1
        ;;
esac
