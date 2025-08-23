#!/bin/bash

# Automation System Startup Script
# This script starts the comprehensive automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date +'%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date +'%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

info() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')] INFO: $1${NC}"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    error "Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

log "Starting Automation System..."

# Create necessary directories
log "Creating directories..."
mkdir -p automation/logs
mkdir -p automation/reports
mkdir -p automation/backups

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    warn "node_modules not found. Installing dependencies..."
    npm install
fi

# Check if automation dependencies are installed
if [ ! -f "automation/node_modules/.bin/express" ]; then
    warn "Automation dependencies not found. Installing..."
    cd automation
    npm install express socket.io
    cd ..
fi

# Start the automation system
log "Starting automation orchestrator..."
node automation/index.js &

# Wait a moment for the orchestrator to start
sleep 3

# Check if orchestrator is running
if curl -s http://localhost:3001/health > /dev/null; then
    log "✅ Automation orchestrator is running on http://localhost:3001"
else
    error "❌ Automation orchestrator failed to start"
    exit 1
fi

# Start the scheduler
log "Starting automation scheduler..."
node automation/automation-scheduler.js --start &

# Wait a moment for the scheduler to start
sleep 2

log "✅ Automation system started successfully!"
log "📊 Dashboard: http://localhost:3001"
log "📋 Health check: http://localhost:3001/health"
log "📄 Logs: automation/logs/"

# Keep the script running
log "Press Ctrl+C to stop the automation system"
trap 'log "Stopping automation system..."; pkill -f "node automation"; exit 0' INT TERM

# Wait indefinitely
while true; do
    sleep 1
done 