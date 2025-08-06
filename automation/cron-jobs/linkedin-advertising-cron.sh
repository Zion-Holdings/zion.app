#!/bin/bash

# LinkedIn Advertising Automation Cron Job
# This script manages the LinkedIn advertising automation system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LINKEDIN_LAUNCHER="$PROJECT_ROOT/automation/launch-linkedin-advertising.js"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/pids/linkedin-advertising.pid"
STATUS_FILE="$PROJECT_ROOT/automation/status/linkedin-advertising-status.json"

# Create necessary directories
mkdir -p "$LOG_DIR"
mkdir -p "$(dirname "$PID_FILE")"
mkdir -p "$(dirname "$STATUS_FILE")"

# Function to log messages
log_message() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" >> "$LOG_DIR/linkedin-advertising-cron.log"
}

# Function to check if process is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    else
        return 1
    fi
}

# Function to start the LinkedIn advertising system
start_linkedin_advertising() {
    log_message "Starting LinkedIn Advertising Automation System..."
    
    if is_running; then
        log_message "LinkedIn Advertising System is already running (PID: $(cat "$PID_FILE"))"
        return 0
    fi
    
    cd "$PROJECT_ROOT"
    
    # Start the system
    nohup node "$LINKEDIN_LAUNCHER" > "$LOG_DIR/linkedin-advertising.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 5
    
    if is_running; then
        log_message "LinkedIn Advertising System started successfully (PID: $pid)"
        
        # Update status
        cat > "$STATUS_FILE" << EOF
{
    "status": "running",
    "pid": $pid,
    "startTime": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "lastCheck": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "uptime": 0
}
EOF
        return 0
    else
        log_message "Failed to start LinkedIn Advertising System"
        return 1
    fi
}

# Function to stop the LinkedIn advertising system
stop_linkedin_advertising() {
    log_message "Stopping LinkedIn Advertising Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log_message "Force killing LinkedIn Advertising System (PID: $pid)"
                kill -9 "$pid"
            fi
        fi
        
        rm -f "$PID_FILE"
        log_message "LinkedIn Advertising System stopped"
        
        # Update status
        cat > "$STATUS_FILE" << EOF
{
    "status": "stopped",
    "pid": null,
    "stopTime": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "lastCheck": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
EOF
    else
        log_message "LinkedIn Advertising System is not running"
    fi
}

# Function to restart the LinkedIn advertising system
restart_linkedin_advertising() {
    log_message "Restarting LinkedIn Advertising Automation System..."
    stop_linkedin_advertising
    sleep 5
    start_linkedin_advertising
}

# Function to check system health
check_health() {
    log_message "Checking LinkedIn Advertising System health..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        local uptime=$(ps -o etime= -p "$pid" 2>/dev/null | tr -d ' ')
        
        # Update status with uptime
        cat > "$STATUS_FILE" << EOF
{
    "status": "running",
    "pid": $pid,
    "uptime": "$uptime",
    "lastCheck": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
    "health": "good"
}
EOF
        
        log_message "LinkedIn Advertising System is healthy (PID: $pid, Uptime: $uptime)"
        return 0
    else
        log_message "LinkedIn Advertising System is not running - attempting restart"
        start_linkedin_advertising
        return $?
    fi
}

# Function to generate performance report
generate_report() {
    log_message "Generating LinkedIn Advertising performance report..."
    
    if is_running; then
        # Check for recent performance reports
        local reports_dir="$PROJECT_ROOT/automation/reports/linkedin-performance"
        if [ -d "$reports_dir" ]; then
            local latest_report=$(find "$reports_dir" -name "performance-report-*.json" -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)
            
            if [ -n "$latest_report" ]; then
                log_message "Latest performance report: $latest_report"
                
                # Copy to a summary location
                cp "$latest_report" "$LOG_DIR/latest-linkedin-performance.json"
            fi
        fi
    fi
}

# Function to clean up old logs
cleanup_logs() {
    log_message "Cleaning up old LinkedIn Advertising logs..."
    
    # Remove logs older than 30 days
    find "$LOG_DIR" -name "linkedin-advertising*.log" -type f -mtime +30 -delete 2>/dev/null
    
    # Remove old performance reports (keep last 7 days)
    local reports_dir="$PROJECT_ROOT/automation/reports/linkedin-performance"
    if [ -d "$reports_dir" ]; then
        find "$reports_dir" -name "performance-report-*.json" -type f -mtime +7 -delete 2>/dev/null
    fi
    
    log_message "Log cleanup completed"
}

# Main execution based on command line argument
case "${1:-check}" in
    start)
        start_linkedin_advertising
        ;;
    stop)
        stop_linkedin_advertising
        ;;
    restart)
        restart_linkedin_advertising
        ;;
    status)
        if is_running; then
            local pid=$(cat "$PID_FILE")
            local uptime=$(ps -o etime= -p "$pid" 2>/dev/null | tr -d ' ')
            echo "LinkedIn Advertising System is running (PID: $pid, Uptime: $uptime)"
        else
            echo "LinkedIn Advertising System is not running"
        fi
        ;;
    health)
        check_health
        ;;
    report)
        generate_report
        ;;
    cleanup)
        cleanup_logs
        ;;
    check|*)
        check_health
        ;;
esac

exit $? 