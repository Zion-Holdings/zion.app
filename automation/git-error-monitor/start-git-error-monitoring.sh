#!/bin/bash

# Git Error Monitoring System Startup Script
# This script starts all git error monitoring and fixing agents

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Starting Git Error Monitoring System..."

# Create necessary directories
mkdir -p logs reports fixes

# Function to check if a process is running
is_running() {
    local pid_file="$1"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Function to start an agent
start_agent() {
    local name="$1"
    local script="$2"
    local pid_file="$3"
    
    if is_running "$pid_file"; then
        echo "Agent $name is already running (PID: $(cat $pid_file))"
        return 0
    fi
    
    echo "Starting $name..."
    nohup node "$script" > "logs/${name}.log" 2>&1 &
    local pid=$!
    echo $pid > "$pid_file"
    echo "Started $name with PID: $pid"
}

# Start individual agents
echo "Starting individual git error monitoring agents..."

# Git Error Monitor
start_agent "git-error-monitor" "git-error-monitor.js" "git-error-monitor.pid"

# Git Error Fixer
start_agent "git-error-fixer" "git-error-fixer.js" "git-error-fixer.pid"

# Git Process Monitor
start_agent "git-process-monitor" "git-process-monitor.js" "git-process-monitor.pid"

# Git Lock Cleaner
start_agent "git-lock-cleaner" "git-lock-cleaner.js" "git-lock-cleaner.pid"

# Start the orchestrator
echo "Starting git error orchestrator..."
start_agent "git-error-orchestrator" "git-error-orchestrator.js" "git-error-orchestrator.pid"

echo "Git Error Monitoring System started successfully!"
echo "Check logs/ directory for individual agent logs"
echo "Check reports/ directory for monitoring reports"

# Display status
echo ""
echo "Current status:"
for pid_file in *.pid; do
    if [ -f "$pid_file" ]; then
        local name=$(basename "$pid_file" .pid)
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            echo "✓ $name: running (PID: $pid)"
        else
            echo "✗ $name: not running"
            rm -f "$pid_file"
        fi
    fi
done

echo ""
echo "To stop all agents, run: ./stop-git-error-monitoring.sh"
