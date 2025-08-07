#!/bin/bash

# Log Rotation Script
# Rotates and compresses log files

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOGS_DIR="$PROJECT_ROOT/automation/logs"

# Rotate log files
for log_file in "$LOGS_DIR"/*.log; do
    if [ -f "$log_file" ]; then
        # Check if log file is larger than 10MB
        if [ $(stat -f%z "$log_file" 2>/dev/null || echo 0) -gt 10485760 ]; then
            mv "$log_file" "$log_file.$(date +%Y%m%d-%H%M%S)"
            gzip "$log_file.$(date +%Y%m%d-%H%M%S)" &
        fi
    fi
done

# Keep only last 30 days of compressed logs
find "$LOGS_DIR" -name "*.gz" -mtime +30 -delete 2>/dev/null

echo "Log rotation completed"
