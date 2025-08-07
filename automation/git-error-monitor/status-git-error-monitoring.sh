#!/bin/bash

# Git Error Monitoring System Status Script
# This script checks the status of all git error monitoring and fixing agents

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Git Error Monitoring System Status"
echo "=================================="
echo ""

# Function to check agent status
check_agent_status() {
    local name="$1"
    local pid_file="$2"
    local status_file="$3"
    
    echo "Agent: $name"
    echo "  PID File: $pid_file"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            echo "  Status: ✓ Running (PID: $pid)"
            
            # Check status file if it exists
            if [ -f "$status_file" ]; then
                local uptime=$(jq -r '.uptime // "unknown"' "$status_file" 2>/dev/null || echo "unknown")
                local last_check=$(jq -r '.lastCheck // "unknown"' "$status_file" 2>/dev/null || echo "unknown")
                echo "  Uptime: $uptime ms"
                echo "  Last Check: $last_check"
            fi
        else
            echo "  Status: ✗ Not running (stale PID file)"
            rm -f "$pid_file"
        fi
    else
        echo "  Status: ✗ Not running (no PID file)"
    fi
    
    echo ""
}

# Check each agent
echo "Individual Agents:"
echo "-----------------"

check_agent_status "git-error-monitor" "git-error-monitor.pid" "status.json"
check_agent_status "git-error-fixer" "git-error-fixer.pid" "fixer-status.json"
check_agent_status "git-process-monitor" "git-process-monitor.pid" "process-status.json"
check_agent_status "git-lock-cleaner" "git-lock-cleaner.pid" "lock-cleaner-status.json"

echo "Orchestrator:"
echo "-------------"
check_agent_status "git-error-orchestrator" "git-error-orchestrator.pid" "orchestrator-status.json"

# Check log files
echo "Recent Log Activity:"
echo "-------------------"
for log_file in logs/*.log; do
    if [ -f "$log_file" ]; then
        local name=$(basename "$log_file" .log)
        local last_line=$(tail -n 1 "$log_file" 2>/dev/null || echo "No log entries")
        echo "$name: $last_line"
    fi
done

echo ""

# Check report files
echo "Recent Reports:"
echo "--------------"
for report_file in reports/*.json; do
    if [ -f "$report_file" ]; then
        local name=$(basename "$report_file" .json)
        local timestamp=$(jq -r '.timestamp // "unknown"' "$report_file" 2>/dev/null || echo "unknown")
        echo "$name: $timestamp"
    fi
done

echo ""

# Summary
echo "Summary:"
echo "--------"
running_count=0
total_count=0

for pid_file in *.pid; do
    if [ -f "$pid_file" ]; then
        total_count=$((total_count + 1))
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            running_count=$((running_count + 1))
        fi
    fi
done

echo "Running agents: $running_count/$total_count"

if [ $running_count -eq $total_count ] && [ $total_count -gt 0 ]; then
    echo "Status: ✓ All agents running"
    exit 0
elif [ $running_count -gt 0 ]; then
    echo "Status: ⚠ Some agents not running"
    exit 1
else
    echo "Status: ✗ No agents running"
    exit 2
fi
