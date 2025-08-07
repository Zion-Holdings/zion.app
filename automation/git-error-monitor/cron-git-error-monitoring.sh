#!/bin/bash

# Git Error Monitoring System Cron Job
# This script is designed to be run by cron to ensure the git error monitoring system is running

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Log file for cron job
CRON_LOG="$SCRIPT_DIR/logs/cron-git-error-monitoring.log"

# Function to log messages
log_message() {
    local message="$1"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $message" | tee -a "$CRON_LOG"
}

# Ensure log directory exists
mkdir -p "$(dirname "$CRON_LOG")"

log_message "Cron job started - checking git error monitoring system"

# Function to check if orchestrator is running
is_orchestrator_running() {
    if [ -f "git-error-orchestrator.pid" ]; then
        local pid=$(cat "git-error-orchestrator.pid")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "git-error-orchestrator.pid"
            return 1
        fi
    fi
    return 1
}

# Function to check if individual agents are running
check_agent() {
    local name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            log_message "Agent $name is running (PID: $pid)"
            return 0
        else
            log_message "Agent $name is not running (stale PID file)"
            rm -f "$pid_file"
            return 1
        fi
    else
        log_message "Agent $name is not running (no PID file)"
        return 1
    fi
}

# Check if orchestrator is running
if is_orchestrator_running; then
    log_message "Git error orchestrator is running"
else
    log_message "Git error orchestrator is not running - starting it"
    ./start-git-error-monitoring.sh >> "$CRON_LOG" 2>&1
fi

# Check individual agents
agents=(
    "git-error-monitor:git-error-monitor.pid"
    "git-error-fixer:git-error-fixer.pid"
    "git-process-monitor:git-process-monitor.pid"
    "git-lock-cleaner:git-lock-cleaner.pid"
)

all_running=true
for agent_info in "${agents[@]}"; do
    IFS=':' read -r name pid_file <<< "$agent_info"
    if ! check_agent "$name" "$pid_file"; then
        all_running=false
    fi
done

# If any agents are not running, restart the entire system
if [ "$all_running" = false ]; then
    log_message "Some agents are not running - restarting entire system"
    ./stop-git-error-monitoring.sh >> "$CRON_LOG" 2>&1
    sleep 5
    ./start-git-error-monitoring.sh >> "$CRON_LOG" 2>&1
fi

# Clean up old log files (keep last 7 days)
find "$SCRIPT_DIR/logs" -name "*.log" -mtime +7 -delete 2>/dev/null || true

# Clean up old report files (keep last 30 days)
find "$SCRIPT_DIR/reports" -name "*.json" -mtime +30 -delete 2>/dev/null || true

log_message "Cron job completed"

# Exit with success
exit 0
