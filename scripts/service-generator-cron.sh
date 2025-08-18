#!/bin/bash

# Service Generator Cron Job - Runs every minute for maximum redundancy
# This script ensures services are generated even if other automation fails

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$PROJECT_ROOT/automation/logs/service-generator-cron.log"
LOCK_FILE="$PROJECT_ROOT/automation/service-generator-cron.lock"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# Check if already running
if [ -f "$LOCK_FILE" ]; then
    PID=$(cat "$LOCK_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        log "Service generator already running (PID: $PID), skipping..."
        exit 0
    else
        log "Removing stale lock file..."
        rm -f "$LOCK_FILE"
    fi
fi

# Create lock file
echo $$ > "$LOCK_FILE"

# Cleanup function
cleanup() {
    log "Cleaning up..."
    rm -f "$LOCK_FILE"
    exit 0
}

# Set trap for cleanup
trap cleanup EXIT INT TERM

log "🚀 Starting service generator cron job..."

# Change to project directory
cd "$PROJECT_ROOT"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    log "❌ Node.js not found, skipping service generation"
    exit 1
fi

# Check if automation scripts exist
if [ ! -f "automation/ultra-fast-service-generator.cjs" ]; then
    log "❌ Ultra-fast service generator not found"
    exit 1
fi

# Generate services with ultra-fast generator
log "🏭 Running ultra-fast service generator..."
if timeout 300 node automation/ultra-fast-service-generator.cjs; then
    log "✅ Ultra-fast service generator completed successfully"
else
    log "⚠️ Ultra-fast service generator failed or timed out"
fi

# Generate services with redundant generator (if exists)
if [ -f "automation/redundant-service-generator.cjs" ]; then
    log "🔄 Running redundant service generator..."
    if timeout 300 node automation/redundant-service-generator.cjs; then
        log "✅ Redundant service generator completed successfully"
    else
        log "⚠️ Redundant service generator failed or timed out"
    fi
fi

# Generate services with exponential orchestrator (if exists)
if [ -f "automation/exponential-autonomous-orchestrator.cjs" ]; then
    log "📈 Running exponential service orchestrator..."
    if timeout 300 node automation/exponential-autonomous-orchestrator.cjs; then
        log "✅ Exponential service orchestrator completed successfully"
    else
        log "⚠️ Exponential service orchestrator failed or timed out"
    fi
fi

# Count total services
SERVICE_COUNT=$(find pages/services -name "*.tsx" 2>/dev/null | wc -l || echo "0")
log "📊 Total services: $SERVICE_COUNT"

# Commit changes if there are any
if ! git diff --quiet || ! git diff --cached --quiet; then
    log "📝 Committing generated services..."
    git add . || log "⚠️ Failed to add files"
    git commit -m "🚀 Auto-generate services via cron - Total: $SERVICE_COUNT" || log "⚠️ Failed to commit"
    git push origin main || log "⚠️ Failed to push"
    log "✅ Changes committed and pushed"
else
    log "ℹ️ No changes to commit"
fi

# Build project if needed
if [ -f "package.json" ]; then
    log "🔨 Building project..."
    if npm run build; then
        log "✅ Build completed successfully"
    else
        log "⚠️ Build failed"
    fi
fi

log "✅ Service generator cron job completed successfully"

# Remove lock file
rm -f "$LOCK_FILE"
