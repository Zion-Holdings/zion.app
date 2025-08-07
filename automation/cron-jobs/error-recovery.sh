#!/bin/bash

# Error Recovery Script
# Monitors and recovers from automation errors

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_ROOT/automation/logs/error-recovery.log"

# Check for failed factories and restart them
find "$PROJECT_ROOT/automation/factories" -name "*.pid" -mmin +5 | while read pid_file; do
    factory_id=$(basename "$pid_file" .pid)
    echo "Restarting failed factory: $factory_id"
    node "$PROJECT_ROOT/automation/automation-orchestrator.js" restart "$factory_id"
done

# Check for orphaned processes
ps aux | grep "automation-factory-" | grep -v grep | while read line; do
    pid=$(echo $line | awk '{print $2}')
    if [ ! -f "/proc/$pid" ] 2>/dev/null; then
        echo "Cleaning up orphaned process: $pid"
        kill -9 "$pid" 2>/dev/null
    fi
done
