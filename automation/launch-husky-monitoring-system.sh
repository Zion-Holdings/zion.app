#!/bin/bash

# Husky Error Monitoring System Launcher
# This script launches the complete Husky error detection and fixing system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOG_DIR="$AUTOMATION_DIR/logs"
PID_DIR="$AUTOMATION_DIR/pids"
REPORTS_DIR="$AUTOMATION_DIR/reports"

# Ensure directories exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$REPORTS_DIR"

# Log file for this launcher
LAUNCHER_LOG="$LOG_DIR/husky-launcher.log"
PID_FILE="$PID_DIR/husky-launcher.pid"

# Function to log messages
log_message() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] [$level] [HUSKY-LAUNCHER] $message" | tee -a "$LAUNCHER_LOG"
}

# Function to check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0  # System is running
        else
            # PID file exists but process is dead
            rm -f "$PID_FILE"
        fi
    fi
    return 1  # System is not running
}

# Function to check prerequisites
check_prerequisites() {
    log_message "INFO" "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node > /dev/null 2>&1; then
        log_message "ERROR" "Node.js is not available"
        return 1
    fi
    
    # Check if npm is available
    if ! command -v npm > /dev/null 2>&1; then
        log_message "ERROR" "npm is not available"
        return 1
    fi
    
    # Check if git is available
    if ! command -v git > /dev/null 2>&1; then
        log_message "ERROR" "git is not available"
        return 1
    fi
    
    # Check if required scripts exist
    local required_scripts=(
        "$AUTOMATION_DIR/husky-error-detection-agent.js"
        "$AUTOMATION_DIR/husky-monitor-factory.js"
        "$AUTOMATION_DIR/husky-automation-orchestrator.js"
        "$AUTOMATION_DIR/cron-jobs/husky-error-monitor-cron.sh"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$script" ]; then
            log_message "ERROR" "Required script not found: $script"
            return 1
        fi
    done
    
    # Make shell scripts executable
    chmod +x "$AUTOMATION_DIR/cron-jobs/husky-error-monitor-cron.sh"
    
    log_message "INFO" "All prerequisites satisfied"
    return 0
}

# Function to start the monitoring system
start_system() {
    log_message "INFO" "Starting Husky Error Monitoring System..."
    
    # Change to project directory
    cd "$PROJECT_ROOT" || {
        log_message "ERROR" "Failed to change to project directory"
        return 1
    }
    
    # Check prerequisites
    if ! check_prerequisites; then
        log_message "ERROR" "Prerequisites check failed"
        return 1
    fi
    
    # Start the orchestrator
    log_message "INFO" "Starting Husky Automation Orchestrator..."
    nohup node "$AUTOMATION_DIR/husky-automation-orchestrator.js" >> "$LAUNCHER_LOG" 2>&1 &
    local orchestrator_pid=$!
    
    # Save PID
    echo $orchestrator_pid > "$PID_FILE"
    log_message "INFO" "Husky Error Monitoring System started with PID: $orchestrator_pid"
    
    # Wait a moment for the system to initialize
    sleep 5
    
    # Check if the system is running
    if ps -p $orchestrator_pid > /dev/null 2>&1; then
        log_message "INFO" "System is running successfully"
        return 0
    else
        log_message "ERROR" "System failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the monitoring system
stop_system() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_message "INFO" "Stopping Husky Error Monitoring System (PID: $pid)..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log_message "WARN" "Force killing system (PID: $pid)..."
                kill -9 "$pid"
            fi
            
            rm -f "$PID_FILE"
            log_message "INFO" "Husky Error Monitoring System stopped"
        else
            log_message "WARN" "System process not found (PID: $pid)"
            rm -f "$PID_FILE"
        fi
    else
        log_message "INFO" "No PID file found for Husky Error Monitoring System"
    fi
}

# Function to restart the monitoring system
restart_system() {
    log_message "INFO" "Restarting Husky Error Monitoring System..."
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    if check_running; then
        local pid=$(cat "$PID_FILE")
        log_message "INFO" "Husky Error Monitoring System is running (PID: $pid)"
        
        # Check system health
        log_message "INFO" "Checking system health..."
        
        # Check disk space
        local disk_usage=$(df "$PROJECT_ROOT" | tail -1 | awk '{print $5}' | sed 's/%//')
        if [ "$disk_usage" -gt 90 ]; then
            log_message "WARN" "Disk usage is high: ${disk_usage}%"
        else
            log_message "INFO" "Disk usage: ${disk_usage}%"
        fi
        
        # Check memory usage
        local mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
        if [ "$mem_usage" -gt 90 ]; then
            log_message "WARN" "Memory usage is high: ${mem_usage}%"
        else
            log_message "INFO" "Memory usage: ${mem_usage}%"
        fi
        
        # Check log files
        if [ -f "$LAUNCHER_LOG" ]; then
            local log_size=$(stat -c%s "$LAUNCHER_LOG" 2>/dev/null || echo 0)
            local log_size_mb=$((log_size / 1024 / 1024))
            log_message "INFO" "Log file size: ${log_size_mb}MB"
        fi
        
        # Check recent reports
        local recent_reports=$(find "$REPORTS_DIR" -name "*.json" -mtime -1 2>/dev/null | wc -l)
        log_message "INFO" "Recent reports (last 24h): $recent_reports"
        
    else
        log_message "INFO" "Husky Error Monitoring System is not running"
    fi
}

# Function to show system logs
show_logs() {
    local lines="${1:-50}"
    log_message "INFO" "Showing last $lines lines of system logs..."
    
    if [ -f "$LAUNCHER_LOG" ]; then
        tail -n "$lines" "$LAUNCHER_LOG"
    else
        log_message "WARN" "No log file found"
    fi
}

# Function to show recent reports
show_reports() {
    log_message "INFO" "Showing recent reports..."
    
    local recent_reports=$(find "$REPORTS_DIR" -name "*.json" -mtime -1 2>/dev/null | head -10)
    
    if [ -n "$recent_reports" ]; then
        for report in $recent_reports; do
            log_message "INFO" "Report: $report"
            echo "=== $(basename "$report") ==="
            cat "$report" | jq '.' 2>/dev/null || cat "$report"
            echo ""
        done
    else
        log_message "INFO" "No recent reports found"
    fi
}

# Function to run a single test
run_test() {
    log_message "INFO" "Running single Husky error detection test..."
    
    # Change to project directory
    cd "$PROJECT_ROOT" || {
        log_message "ERROR" "Failed to change to project directory"
        return 1
    }
    
    # Run the agent directly
    if node "$AUTOMATION_DIR/husky-error-detection-agent.js"; then
        log_message "INFO" "Test completed successfully"
        return 0
    else
        log_message "ERROR" "Test failed"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Husky Error Monitoring System Launcher"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|reports|test|help}"
    echo ""
    echo "Commands:"
    echo "  start   - Start the Husky error monitoring system"
    echo "  stop    - Stop the Husky error monitoring system"
    echo "  restart - Restart the Husky error monitoring system"
    echo "  status  - Check the status of the system"
    echo "  logs    - Show recent system logs"
    echo "  reports - Show recent system reports"
    echo "  test    - Run a single Husky error detection test"
    echo "  help    - Show this help message"
    echo ""
    echo "The system includes:"
    echo "  - Husky Error Detection Agent"
    echo "  - Husky Monitor Factory"
    echo "  - Husky Automation Orchestrator"
    echo "  - Cron Jobs for continuous monitoring"
    echo ""
}

# Main execution
main() {
    local action="${1:-help}"
    
    case "$action" in
        "start")
            if check_running; then
                log_message "WARN" "Husky Error Monitoring System is already running"
                exit 0
            fi
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            restart_system
            ;;
        "status")
            check_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "reports")
            show_reports
            ;;
        "test")
            run_test
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# Handle signals
trap 'log_message "INFO" "Received signal, shutting down..."; stop_system; exit 0' SIGTERM SIGINT

# Run main function with all arguments
main "$@"
