#!/bin/bash

# Backup System Script
# Creates backups of automation data and configurations

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Create backup
tar -czf "$BACKUP_DIR/automation-backup-$TIMESTAMP.tar.gz" \
    -C "$PROJECT_ROOT" \
    automation/data \
    automation/reports \
    automation/logs \
    automation/factories \
    automation/variations

# Keep only last 10 backups
ls -t "$BACKUP_DIR"/automation-backup-*.tar.gz | tail -n +11 | xargs -r rm

echo "Backup completed: automation-backup-$TIMESTAMP.tar.gz"
