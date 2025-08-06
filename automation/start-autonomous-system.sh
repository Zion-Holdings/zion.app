#!/bin/bash

# Autonomous Agent System Startup Script

set -e

echo "🚀 Starting Autonomous Agent System..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create PID directory
mkdir -p pids

# Start the master orchestrator
print_status "Starting master orchestrator..."
nohup node autonomous-master-orchestrator.js > logs/master-orchestrator.log 2>&1 &
echo $! > pids/master-orchestrator.pid

# Start monitoring
print_status "Starting monitoring..."
nohup node monitor-automation.js > logs/monitor.log 2>&1 &
echo $! > pids/monitor.pid

print_success "Autonomous Agent System started successfully"
print_status "Check logs/ directory for detailed logs"
print_status "Use stop-autonomous-system.sh to stop the system"
