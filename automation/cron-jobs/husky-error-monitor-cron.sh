#!/bin/bash

# Husky Error Monitor Cron Job
# This script runs the Husky error detection and fixing system continuously

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_DIR="$AUTOMATION_DIR/pids"
REPORTS_DIR="$AUTOMATION_DIR/reports"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$REPORTS_DIR"

# Log file for this cron job
CRON_LOG="$LOG_DIR/husky-monitor-cron.log"
PID_FILE="$PID_DIR/husky-monitor-cron.pid"

# Function to log messages
log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] [HUSKY-MONITOR-CRON] $message" | tee -a "$CRON_LOG"
}

# Function to check if process is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0  # Process is running
        else
            # PID file exists but process is dead
            rm -f "$PID_FILE"
        fi
    fi
    return 1  # Process is not running
}

# Function to start the monitor
start_monitor() {
    log_message "INFO" "Starting Husky error monitor..."
    
    # Change to project directory
    cd "$PROJECT_ROOT" || {
        log_message "ERROR" "Failed to change to project directory"
        exit 1
    }
    
    # Check if Node.js is available
    if ! command -v node > /dev/null 2>&1; then
        log_message "ERROR" "Node.js is not available"
        exit 1
    fi
    
    # Check if the agent script exists
    AGENT_SCRIPT="$AUTOMATION_DIR/husky-error-detection-agent.js"
    if [ ! -f "$AGENT_SCRIPT" ]; then
        log_message "ERROR" "Husky error detection agent not found: $AGENT_SCRIPT"
        exit 1
    }
    
    # Run the agent
    log_message "INFO" "Running Husky error detection agent..."
    node "$AGENT_SCRIPT" >> "$CRON_LOG" 2>&1
    
    local exit_code=$?
    if [ $exit_code -eq 0 ]; then
        log_message "INFO" "Husky error detection completed successfully"
    else
        log_message "ERROR" "Husky error detection failed with exit code: $exit_code"
    fi
    
    return $exit_code
}

# Function to start the factory
start_factory() {
    log_message "INFO" "Starting Husky monitor factory..."
    
    # Change to project directory
    cd "$PROJECT_ROOT" || {
        log_message "ERROR" "Failed to change to project directory"
        exit 1
    }
    
    # Check if Node.js is available
    if ! command -v node > /dev/null 2>&1; then
        log_message "ERROR" "Node.js is not available"
        exit 1
    }
    
    # Check if the factory script exists
    FACTORY_SCRIPT="$AUTOMATION_DIR/husky-monitor-factory.js"
    if [ ! -f "$FACTORY_SCRIPT" ]; then
        log_message "ERROR" "Husky monitor factory not found: $FACTORY_SCRIPT"
        exit 1
    }
    
    # Run the factory in background
    log_message "INFO" "Running Husky monitor factory in background..."
    nohup node "$FACTORY_SCRIPT" >> "$CRON_LOG" 2>&1 &
    local factory_pid=$!
    
    # Save PID
    echo $factory_pid > "$PID_FILE"
    log_message "INFO" "Husky monitor factory started with PID: $factory_pid"
    
    return 0
}

# Function to stop the factory
stop_factory() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_message "INFO" "Stopping Husky monitor factory (PID: $pid)..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log_message "WARN" "Force killing Husky monitor factory (PID: $pid)..."
                kill -9 "$pid"
            fi
            
            rm -f "$PID_FILE"
            log_message "INFO" "Husky monitor factory stopped"
        else
            log_message "WARN" "Husky monitor factory process not found (PID: $pid)"
            rm -f "$PID_FILE"
        fi
    else
        log_message "INFO" "No PID file found for Husky monitor factory"
    fi
}

# Function to check system health
check_system_health() {
    log_message "INFO" "Checking system health..."
    
    # Check disk space
    local disk_usage=$(df "$PROJECT_ROOT" | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 90 ]; then
        log_message "WARN" "Disk usage is high: ${disk_usage}%"
    fi
    
    # Check memory usage
    local mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
    if [ "$mem_usage" -gt 90 ]; then
        log_message "WARN" "Memory usage is high: ${mem_usage}%"
    fi
    
    # Check log file size
    if [ -f "$CRON_LOG" ]; then
        local log_size=$(stat -c%s "$CRON_LOG" 2>/dev/null || echo 0)
        local log_size_mb=$((log_size / 1024 / 1024))
        if [ "$log_size_mb" -gt 100 ]; then
            log_message "WARN" "Log file is large: ${log_size_mb}MB"
            # Rotate log file
            mv "$CRON_LOG" "${CRON_LOG}.$(date +%Y%m%d-%H%M%S)"
            touch "$CRON_LOG"
        fi
    fi
}

# Function to generate status report
generate_status_report() {
    local report_file="$REPORTS_DIR/husky-monitor-status-$(date +%Y%m%d).json"
    
    local status_report=$(cat <<EOF
{
    "timestamp": "$(date -Iseconds)",
    "cron_job": "husky-error-monitor-cron",
    "status": {
        "factory_running": $(check_running && echo "true" || echo "false"),
        "pid_file_exists": $([ -f "$PID_FILE" ] && echo "true" || echo "false"),
        "log_file_exists": $([ -f "$CRON_LOG" ] && echo "true" || echo "false")
    },
    "system": {
        "disk_usage": "$(df "$PROJECT_ROOT" | tail -1 | awk '{print $5}')",
        "memory_usage": "$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')%",
        "uptime": "$(uptime -p 2>/dev/null || echo 'unknown')"
    },
    "files": {
        "log_file": "$CRON_LOG",
        "pid_file": "$PID_FILE",
        "reports_dir": "$REPORTS_DIR"
    }
}
EOF
)
    
    echo "$status_report" > "$report_file"
    log_message "INFO" "Status report generated: $report_file"
}

# Main execution
main() {
    local action="${1:-run}"
    
    case "$action" in
        "start")
            if check_running; then
                log_message "WARN" "Husky monitor factory is already running"
                exit 0
            fi
            start_factory
            ;;
        "stop")
            stop_factory
            ;;
        "restart")
            stop_factory
            sleep 2
            start_factory
            ;;
        "status")
            if check_running; then
                local pid=$(cat "$PID_FILE")
                log_message "INFO" "Husky monitor factory is running (PID: $pid)"
            else
                log_message "INFO" "Husky monitor factory is not running"
            fi
            generate_status_report
            ;;
        "run")
            # Single run mode - just run the agent once
            start_monitor
            ;;
        "health")
            check_system_health
            generate_status_report
            ;;
        *)
            log_message "ERROR" "Unknown action: $action"
            echo "Usage: $0 {start|stop|restart|status|run|health}"
            exit 1
            ;;
    esac
}

# Handle signals
trap 'log_message "INFO" "Received signal, shutting down..."; stop_factory; exit 0' SIGTERM SIGINT

# Run main function with all arguments
main "$@"
