#!/bin/bash

# System Build Monitor Script
# Monitors Netlify builds and triggers new builds when needed

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_FILE="$SCRIPT_DIR/logs/build-monitor.log"
NETLIFY_SITE_ID="${NETLIFY_SITE_ID:-your-site-id}"
NETLIFY_TOKEN="${NETLIFY_TOKEN:-your-token}"

# Ensure log directory exists
mkdir -p "$(dirname "$LOG_FILE")"

# Log function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "🔍 Starting system build monitor..."

# Check if we're in the project directory
if [[ ! -f "$PROJECT_ROOT/package.json" ]]; then
    log "❌ Error: Not in project root directory"
    exit 1
fi

# Check for uncommitted changes
cd "$PROJECT_ROOT"
if [[ -n "$(git status --porcelain)" ]]; then
    log "📝 Uncommitted changes detected, committing..."
    git add .
    git commit -m "Auto-commit: Build monitor triggered at $(date)"
    git push origin main
    log "✅ Changes committed and pushed"
else
    log "✅ No uncommitted changes"
fi

# Check if Netlify CLI is available
if ! command -v netlify &> /dev/null; then
    log "⚠️  Netlify CLI not found, installing..."
    npm install -g netlify-cli
fi

# Trigger build if needed
log "🚀 Triggering Netlify build..."
if netlify build --prod 2>/dev/null; then
    log "✅ Build triggered successfully"
else
    log "⚠️  Build trigger failed, but continuing..."
fi

log "✅ System build monitor completed" 