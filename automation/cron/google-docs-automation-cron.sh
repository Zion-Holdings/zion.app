#!/bin/bash

# Google Docs Automation Cron Job
# This script runs the Google Docs automation system on a schedule

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs/google-docs-automation"
PID_DIR="$PROJECT_ROOT/automation/pids"
REPORTS_DIR="$PROJECT_ROOT/automation/reports/google-docs-automation"

# Ensure directories exist
mkdir -p "$LOG_DIR"
mkdir -p "$PID_DIR"
mkdir -p "$REPORTS_DIR"

# Log file
LOG_FILE="$LOG_DIR/cron.log"
PID_FILE="$PID_DIR/google-docs-automation.pid"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_FILE"
    echo "$1"
}

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to start the automation system
start_automation() {
    log_message "🚀 Starting Google Docs Automation System..."
    
    if is_running; then
        log_message "⚠️ System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    cd "$PROJECT_ROOT"
    
    # Start the automation system
    node automation/launch-google-docs-automation.js > "$LOG_DIR/system.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    log_message "✅ System started with PID: $pid"
    return 0
}

# Function to stop the automation system
stop_automation() {
    log_message "🛑 Stopping Google Docs Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log_message "✅ System stopped (PID: $pid)"
        else
            log_message "⚠️ Process not found (PID: $pid)"
        fi
        rm -f "$PID_FILE"
    else
        log_message "⚠️ No PID file found"
    fi
}

# Function to restart the automation system
restart_automation() {
    log_message "🔄 Restarting Google Docs Automation System..."
    stop_automation
    sleep 2
    start_automation
}

# Function to check system status
check_status() {
    log_message "🔍 Checking system status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log_message "✅ System is running (PID: $pid)"
        
        # Check system health
        cd "$PROJECT_ROOT"
        node automation/check-google-docs-status.js >> "$LOG_FILE" 2>&1
        
        return 0
    else
        log_message "❌ System is not running"
        return 1
    fi
}

# Function to generate report
generate_report() {
    log_message "📊 Generating system report..."
    
    cd "$PROJECT_ROOT"
    node automation/generate-google-docs-report.js >> "$LOG_FILE" 2>&1
    
    log_message "✅ Report generated"
}

# Function to run tests
run_tests() {
    log_message "🧪 Running system tests..."
    
    cd "$PROJECT_ROOT"
    node automation/test-google-docs-automation.js >> "$LOG_FILE" 2>&1
    
    if [ $? -eq 0 ]; then
        log_message "✅ Tests passed"
    else
        log_message "❌ Tests failed"
    fi
}

# Function to backup system data
backup_data() {
    log_message "💾 Creating system backup..."
    
    local backup_dir="$PROJECT_ROOT/automation/backups/google-docs-automation"
    local timestamp=$(date '+%Y%m%d_%H%M%S')
    local backup_name="backup_$timestamp"
    
    mkdir -p "$backup_dir"
    
    # Backup important directories
    if [ -d "$PROJECT_ROOT/automation/data/instructions" ]; then
        cp -r "$PROJECT_ROOT/automation/data/instructions" "$backup_dir/$backup_name/"
    fi
    
    if [ -d "$PROJECT_ROOT/automation/reports/google-docs-automation" ]; then
        cp -r "$PROJECT_ROOT/automation/reports/google-docs-automation" "$backup_dir/$backup_name/"
    fi
    
    log_message "✅ Backup created: $backup_dir/$backup_name"
}

# Function to clean old logs
clean_logs() {
    log_message "🧹 Cleaning old logs..."
    
    # Keep only last 7 days of logs
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null
    
    # Keep only last 30 days of reports
    find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null
    
    log_message "✅ Log cleanup completed"
}

# Main function
main() {
    local action="$1"
    
    case "$action" in
        "start")
            start_automation
            ;;
        "stop")
            stop_automation
            ;;
        "restart")
            restart_automation
            ;;
        "status")
            check_status
            ;;
        "report")
            generate_report
            ;;
        "test")
            run_tests
            ;;
        "backup")
            backup_data
            ;;
        "clean")
            clean_logs
            ;;
        "daily")
            # Daily maintenance routine
            log_message "📅 Running daily maintenance..."
            check_status
            generate_report
            clean_logs
            backup_data
            ;;
        "weekly")
            # Weekly maintenance routine
            log_message "📅 Running weekly maintenance..."
            run_tests
            check_status
            generate_report
            clean_logs
            backup_data
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|report|test|backup|clean|daily|weekly}"
            echo ""
            echo "Commands:"
            echo "  start   - Start the automation system"
            echo "  stop    - Stop the automation system"
            echo "  restart - Restart the automation system"
            echo "  status  - Check system status"
            echo "  report  - Generate system report"
            echo "  test    - Run system tests"
            echo "  backup  - Create system backup"
            echo "  clean   - Clean old logs"
            echo "  daily   - Run daily maintenance"
            echo "  weekly  - Run weekly maintenance"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"



