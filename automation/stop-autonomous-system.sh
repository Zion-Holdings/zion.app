#!/bin/bash

# Autonomous Agent System Stop Script

echo "🛑 Stopping Autonomous Agent System..."

# Colors for output
RED='\033[0;31m'
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

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Stop processes by PID
if [ -d "pids" ]; then
    for pid_file in pids/*.pid; do
        if [ -f "$pid_file" ]; then
            pid=$(cat "$pid_file")
            process_name=$(basename "$pid_file" .pid)
            
            if kill -0 "$pid" 2>/dev/null; then
                print_status "Stopping $process_name (PID: $pid)..."
                kill "$pid"
                rm "$pid_file"
                print_success "$process_name stopped"
            else
                print_status "$process_name is not running"
                rm "$pid_file"
            fi
        fi
    done
fi

# Kill any remaining node processes related to our system
pkill -f "autonomous-master-orchestrator.js" || true
pkill -f "monitor-automation.js" || true

print_success "Autonomous Agent System stopped successfully"
