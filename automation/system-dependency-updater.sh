#!/bin/bash

# System Dependency Updater Script
# Updates npm dependencies and checks for security vulnerabilities

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$SCRIPT_DIR/logs/dependency-updater.log"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "📦 Starting system dependency updater..."

# Check if we're in the project directory
if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
    log "❌ Error: Not in project root directory"
    exit 1
fi

cd "$PROJECT_ROOT"

# Check for outdated packages
log "🔍 Checking for outdated packages..."
OUTDATED_COUNT=$(npm outdated --json 2>/dev/null | jq 'length' 2>/dev/null || echo "0")

if [[ $OUTDATED_COUNT -gt 0 ]]; then
    log "📋 Found $OUTDATED_COUNT outdated packages"
    
    # Update packages
    log "🔄 Updating packages..."
    npm update
    
    # Check for security vulnerabilities
    log "🔒 Checking for security vulnerabilities..."
    npm audit --audit-level moderate
    
    # Install any missing dependencies
    log "📥 Installing dependencies..."
    npm install
    
    log "✅ Dependencies updated successfully"
else
    log "✅ All packages are up to date"
fi

# Clean npm cache if it's getting large
CACHE_SIZE=$(du -sh ~/.npm 2>/dev/null | cut -f1 | sed 's/[^0-9]//g')
if [[ $CACHE_SIZE -gt 100 ]]; then
    log "🧹 Cleaning npm cache..."
    npm cache clean --force
    log "✅ Cache cleaned"
fi

log "✅ System dependency updater completed" 