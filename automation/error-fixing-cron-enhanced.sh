#!/bin/bash

# Enhanced Error Fixing Cron Job
# Runs every 5 minutes to check and fix errors automatically

PROJECT_ROOT="$PWD"
LOG_DIR="$PROJECT_ROOT/automation/error-fixing-logs"
PID_DIR="$PROJECT_ROOT/automation/error-fixing-pids"
STATUS_DIR="$PROJECT_ROOT/automation/error-fixing-status"

# Create directories if they don't exist
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_DIR/cron-enhanced.log"
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

# Function to start comprehensive error fixing
start_comprehensive_error_fixing() {
    log_message "Starting comprehensive error fixing..."
    
    # Run parsing error fixing agent
    if ! is_process_running "$PID_DIR/parsing-agent.pid"; then
        node "$PROJECT_ROOT/automation/parsing-error-fixing-agent.js" > "$LOG_DIR/parsing-agent.log" 2>&1 &
        echo $! > "$PID_DIR/parsing-agent.pid"
        log_message "Started parsing error fixing agent (PID: $!)"
    fi
    
    # Run syntax error fixing agent
    if ! is_process_running "$PID_DIR/syntax-agent.pid"; then
        node "$PROJECT_ROOT/automation/syntax-error-fixing-agent.js" > "$LOG_DIR/syntax-agent.log" 2>&1 &
        echo $! > "$PID_DIR/syntax-agent.pid"
        log_message "Started syntax error fixing agent (PID: $!)"
    fi
    
    # Run linting error fixing agent
    if ! is_process_running "$PID_DIR/linting-agent.pid"; then
        node "$PROJECT_ROOT/automation/linting-error-fixing-agent.js" > "$LOG_DIR/linting-agent.log" 2>&1 &
        echo $! > "$PID_DIR/linting-agent.pid"
        log_message "Started linting error fixing agent (PID: $!)"
    fi
    
    # Run comprehensive error fixing system
    if ! is_process_running "$PID_DIR/comprehensive-agent.pid"; then
        node "$PROJECT_ROOT/automation/comprehensive-error-fixing-system.js" > "$LOG_DIR/comprehensive-agent.log" 2>&1 &
        echo $! > "$PID_DIR/comprehensive-agent.pid"
        log_message "Started comprehensive error fixing system (PID: $!)"
    fi
}

# Function to check error status and trigger fixes
check_error_status_and_fix() {
    log_message "Checking for errors..."
    
    # Run linting check
    if npm run lint > "$LOG_DIR/lint-check.log" 2>&1; then
        log_message "No linting errors detected"
        echo "clean" > "$STATUS_DIR/error-status.json"
    else
        log_message "Linting errors detected, triggering comprehensive fix"
        echo "errors_detected" > "$STATUS_DIR/error-status.json"
        start_comprehensive_error_fixing
        
        # Wait a bit for agents to process
        sleep 30
        
        # Run comprehensive system
        node "$PROJECT_ROOT/automation/comprehensive-error-fixing-system.js" >> "$LOG_DIR/comprehensive-run.log" 2>&1
    fi
}

# Function to cleanup old logs and processes
cleanup_old_logs_and_processes() {
    log_message "Cleaning up old logs and processes..."
    
    # Clean up old log files (older than 7 days)
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete
    find "$LOG_DIR" -name "*.json" -mtime +7 -delete
    
    # Clean up zombie processes
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ! ps -p "$pid" > /dev/null 2>&1; then
                rm -f "$pid_file"
                log_message "Cleaned up zombie process PID file: $pid_file"
            fi
        fi
    done
}

# Function to generate status report
generate_status_report() {
    log_message "Generating status report..."
    
    # Run status agent
    node "$PROJECT_ROOT/automation/error-fixing-status-agent.js" > "$LOG_DIR/status-report.log" 2>&1
    
    # Check if comprehensive report exists
    if [ -f "$STATUS_DIR/comprehensive-error-report.json" ]; then
        log_message "Comprehensive error report generated"
    fi
}

# Function to restart failed agents
restart_failed_agents() {
    log_message "Checking for failed agents..."
    
    local agents=("parsing-agent" "syntax-agent" "linting-agent" "comprehensive-agent")
    
    for agent in "${agents[@]}"; do
        local pid_file="$PID_DIR/${agent}.pid"
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ! ps -p "$pid" > /dev/null 2>&1; then
                log_message "Agent $agent failed, restarting..."
                rm -f "$pid_file"
                
                case $agent in
                    "parsing-agent")
                        node "$PROJECT_ROOT/automation/parsing-error-fixing-agent.js" > "$LOG_DIR/parsing-agent.log" 2>&1 &
                        echo $! > "$pid_file"
                        ;;
                    "syntax-agent")
                        node "$PROJECT_ROOT/automation/syntax-error-fixing-agent.js" > "$LOG_DIR/syntax-agent.log" 2>&1 &
                        echo $! > "$pid_file"
                        ;;
                    "linting-agent")
                        node "$PROJECT_ROOT/automation/linting-error-fixing-agent.js" > "$LOG_DIR/linting-agent.log" 2>&1 &
                        echo $! > "$pid_file"
                        ;;
                    "comprehensive-agent")
                        node "$PROJECT_ROOT/automation/comprehensive-error-fixing-system.js" > "$LOG_DIR/comprehensive-agent.log" 2>&1 &
                        echo $! > "$pid_file"
                        ;;
                esac
                
                log_message "Restarted $agent (PID: $!)"
            fi
        fi
    done
}

# Main execution function
main() {
    log_message "Starting enhanced error fixing cron job"
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Cleanup old logs and processes
    cleanup_old_logs_and_processes
    
    # Check error status and trigger fixes
    check_error_status_and_fix
    
    # Restart failed agents
    restart_failed_agents
    
    # Generate status report
    generate_status_report
    
    log_message "Enhanced error fixing cron job completed"
}

# Run main function
main "$@"
