#!/bin/bash

# Cursor Sync Backup Script
# Creates backups of sync state and configuration

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
AUTOMATION_DIR="$PROJECT_DIR/automation"
BACKUP_DIR="$AUTOMATION_DIR/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Backup sync state files
if [ -f "$AUTOMATION_DIR/logs/sync-state.json" ]; then
    cp "$AUTOMATION_DIR/logs/sync-state.json" "$BACKUP_DIR/sync-state-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/logs/computer-registry.json" ]; then
    cp "$AUTOMATION_DIR/logs/computer-registry.json" "$BACKUP_DIR/computer-registry-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/logs/last-sync-time.json" ]; then
    cp "$AUTOMATION_DIR/logs/last-sync-time.json" "$BACKUP_DIR/last-sync-time-$DATE.json"
fi

# Backup configuration files
if [ -f "$AUTOMATION_DIR/cursor-sync-config.json" ]; then
    cp "$AUTOMATION_DIR/cursor-sync-config.json" "$BACKUP_DIR/cursor-sync-config-$DATE.json"
fi

if [ -f "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" ]; then
    cp "$AUTOMATION_DIR/cursor-sync-orchestrator-config.json" "$BACKUP_DIR/cursor-sync-orchestrator-config-$DATE.json"
fi

# Clean up old backups (keep last 30 days)
find "$BACKUP_DIR" -name "*.json" -mtime +30 -delete

echo "Backup completed: $DATE"
