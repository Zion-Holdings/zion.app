#!/bin/bash

# System Health Check Script
# Performs comprehensive health checks on the automation system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$SCRIPT_DIR/logs/health-check.log"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "🏥 Starting system health check..."

# Check Node.js
if ! command -v node &> /dev/null; then
    log "❌ Node.js not found in PATH"
    exit 1
else
    log "✅ Node.js found: $(node --version)"
fi

# Check npm
if ! command -v npm &> /dev/null; then
    log "❌ npm not found in PATH"
    exit 1
else
    log "✅ npm found: $(npm --version)"
fi

# Check git
if ! command -v git &> /dev/null; then
    log "❌ git not found in PATH"
    exit 1
else
    log "✅ git found: $(git --version)"
fi

# Check disk space
DISK_USAGE=$(df . | awk 'NR==2 {print $5}' | sed 's/%//')
if [[ $DISK_USAGE -gt 90 ]]; then
    log "⚠️  High disk usage: ${DISK_USAGE}%"
else
    log "✅ Disk usage: ${DISK_USAGE}%"
fi

# Check memory usage
MEMORY_USAGE=$(ps -o %mem -p $$ | tail -1 | tr -d ' ' | sed 's/\.0//')
if [[ -z "$MEMORY_USAGE" ]] || [[ "$MEMORY_USAGE" == "0" ]]; then
    MEMORY_USAGE="0"
fi
if [[ $MEMORY_USAGE -gt 80 ]]; then
    log "⚠️  High memory usage: ${MEMORY_USAGE}%"
else
    log "✅ Memory usage: ${MEMORY_USAGE}%"
fi

# Check if automation processes are running
cd "$SCRIPT_DIR"
RUNNING_PROCESSES=0
EXPECTED_PROCESSES=("node" "npm" "git")

for process in "${EXPECTED_PROCESSES[@]}"; do
    if pgrep -f "$process" > /dev/null; then
        RUNNING_PROCESSES=$((RUNNING_PROCESSES + 1))
    fi
done

log "📊 Running processes: $RUNNING_PROCESSES/${#EXPECTED_PROCESSES[@]}"

# Check log files for recent errors
ERROR_COUNT=$(find logs/ -name "*.log" -mtime -1 -exec grep -l "ERROR\|error" {} \; | wc -l)
if [[ $ERROR_COUNT -gt 0 ]]; then
    log "⚠️  Found $ERROR_COUNT log files with recent errors"
else
    log "✅ No recent errors found in logs"
fi

# Check if cron jobs are properly configured
if crontab -l 2>/dev/null | grep -q "automation"; then
    log "✅ Cron jobs are configured"
else
    log "❌ Cron jobs not found"
fi

log "✅ System health check completed" 