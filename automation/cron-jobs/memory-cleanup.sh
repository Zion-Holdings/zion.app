#!/bin/bash

# Memory Cleanup Script
# Cleans up old files and frees memory

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Remove old log files (keep last 7 days)
find "$PROJECT_ROOT/automation/logs" -name "*.log" -mtime +7 -delete 2>/dev/null

# Remove old reports (keep last 3 days)
find "$PROJECT_ROOT/automation/reports" -name "*.json" -mtime +3 -delete 2>/dev/null

# Remove old temporary files
find "$PROJECT_ROOT/automation" -name "*.tmp" -delete 2>/dev/null

# Clean up empty directories
find "$PROJECT_ROOT/automation" -type d -empty -delete 2>/dev/null

echo "Memory cleanup completed"
