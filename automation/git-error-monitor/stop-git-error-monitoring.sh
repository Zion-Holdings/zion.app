#!/bin/bash

# Git Error Monitoring System Stop Script
# This script stops all git error monitoring and fixing agents

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Stopping Git Error Monitoring System..."

# Function to stop an agent
stop_agent() {
    local name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            echo "Stopping $name (PID: $pid)..."
            kill -TERM "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if kill -0 "$pid" 2>/dev/null; then
                echo "Force killing $name..."
                kill -KILL "$pid"
            fi
            
            rm -f "$pid_file"
            echo "Stopped $name"
        else
            echo "$name is not running"
            rm -f "$pid_file"
        fi
    else
        echo "$name is not running (no PID file)"
    fi
}

# Stop agents in reverse order (orchestrator first)
echo "Stopping git error orchestrator..."
stop_agent "git-error-orchestrator" "git-error-orchestrator.pid"

echo "Stopping individual git error monitoring agents..."

# Git Lock Cleaner
stop_agent "git-lock-cleaner" "git-lock-cleaner.pid"

# Git Process Monitor
stop_agent "git-process-monitor" "git-process-monitor.pid"

# Git Error Fixer
stop_agent "git-error-fixer" "git-error-fixer.pid"

# Git Error Monitor
stop_agent "git-error-monitor" "git-error-monitor.pid"

echo "Git Error Monitoring System stopped successfully!"

# Clean up any remaining PID files
for pid_file in *.pid; do
    if [ -f "$pid_file" ]; then
        local name=$(basename "$pid_file" .pid)
        local pid=$(cat "$pid_file")
        if ! kill -0 "$pid" 2>/dev/null; then
            rm -f "$pid_file"
            echo "Cleaned up stale PID file for $name"
        fi
    fi
done

echo ""
echo "All git error monitoring agents have been stopped."
