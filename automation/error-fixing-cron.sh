#!/bin/bash

# Error Fixing Cron Job
# Runs every 10 minutes to check and fix errors

PROJECT_ROOT="$PWD"
LOG_DIR="$PROJECT_ROOT/automation/error-fixing-logs"
PID_DIR="$PROJECT_ROOT/automation/error-fixing-pids"
STATUS_DIR="$PROJECT_ROOT/automation/error-fixing-status"

# Create directories if they don't exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_DIR/cron-job.log"
}

# Function to check if process is running
is_process_running() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Function to start error fixing agents
start_error_fixing_agents() {
    log_message "Starting error fixing agents..."
    
    # Start syntax error fixing agent
    if ! is_process_running "$PID_DIR/syntax-agent.pid"; then
        node "$PROJECT_ROOT/automation/syntax-error-fixing-agent.js" > "$LOG_DIR/syntax-agent.log" 2>&1 &
        echo $! > "$PID_DIR/syntax-agent.pid"
        log_message "Started syntax error fixing agent (PID: $!)"
    fi
    
    # Start linting error fixing agent
    if ! is_process_running "$PID_DIR/linting-agent.pid"; then
        node "$PROJECT_ROOT/automation/linting-error-fixing-agent.js" > "$LOG_DIR/linting-agent.log" 2>&1 &
        echo $! > "$PID_DIR/linting-agent.pid"
        log_message "Started linting error fixing agent (PID: $!)"
    fi
}

# Function to check error status
check_error_status() {
    log_message "Checking for errors..."
    
    # Run linting check
    if npm run lint > "$LOG_DIR/lint-check.log" 2>&1; then
        log_message "No linting errors detected"
        echo "clean" > "$STATUS_DIR/error-status.json"
    else
        log_message "Linting errors detected, triggering fix agents"
        echo "errors_detected" > "$STATUS_DIR/error-status.json"
        start_error_fixing_agents
    fi
}

# Function to cleanup old logs
cleanup_old_logs() {
    log_message "Cleaning up old logs..."
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete
    find "$LOG_DIR" -name "*.json" -mtime +7 -delete
}

# Main execution
main() {
    log_message "Starting error fixing cron job"
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Check error status
    check_error_status
    
    # Cleanup old logs
    cleanup_old_logs
    
    log_message "Error fixing cron job completed"
}

# Run main function
main "$@"