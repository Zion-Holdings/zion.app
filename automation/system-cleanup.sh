#!/bin/bash

# System Cleanup Script
# Cleans up old logs, temporary files, and optimizes the system

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$SCRIPT_DIR/logs/cleanup.log"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "🧹 Starting system cleanup..."

# Clean old log files (older than 30 days)
log "🗑️  Cleaning old log files..."
find "$SCRIPT_DIR/logs" -name "*.log" -mtime +30 -delete 2>/dev/null || true
log "✅ Old log files cleaned"

# Clean temporary files
log "🗑️  Cleaning temporary files..."
find "$PROJECT_ROOT" -name "*.tmp" -delete 2>/dev/null || true
find "$PROJECT_ROOT" -name "*.temp" -delete 2>/dev/null || true
log "✅ Temporary files cleaned"

# Clean node_modules cache
if [[ -d "$PROJECT_ROOT/node_modules/.cache" ]]; then
    log "🗑️  Cleaning node_modules cache..."
    rm -rf "$PROJECT_ROOT/node_modules/.cache"
    log "✅ Node modules cache cleaned"
fi

# Clean .next build cache if it's too large
if [[ -d "$PROJECT_ROOT/.next" ]]; then
    NEXT_SIZE=$(du -sh "$PROJECT_ROOT/.next" | cut -f1 | sed 's/[^0-9]//g')
    if [[ $NEXT_SIZE -gt 500 ]]; then
        log "🗑️  Cleaning .next build cache..."
        rm -rf "$PROJECT_ROOT/.next"
        log "✅ .next cache cleaned"
    fi
fi

# Clean git garbage
log "🗑️  Cleaning git garbage..."
cd "$PROJECT_ROOT"
git gc --prune=now --aggressive 2>/dev/null || true
log "✅ Git garbage cleaned"

# Clean npm cache if it's large
CACHE_SIZE=$(du -sh ~/.npm 2>/dev/null | cut -f1 | sed 's/[^0-9]//g')
if [[ $CACHE_SIZE -gt 200 ]]; then
    log "🗑️  Cleaning npm cache..."
    npm cache clean --force
    log "✅ NPM cache cleaned"
fi

# Remove old backup files (older than 7 days)
log "🗑️  Cleaning old backup files..."
find "$SCRIPT_DIR/backups" -name "*.tar.gz" -mtime +7 -delete 2>/dev/null || true
log "✅ Old backup files cleaned"

# Clean empty directories
log "🗑️  Cleaning empty directories..."
find "$PROJECT_ROOT" -type d -empty -delete 2>/dev/null || true
log "✅ Empty directories cleaned"

log "✅ System cleanup completed" 