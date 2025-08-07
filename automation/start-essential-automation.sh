#!/bin/bash

# Essential Automation System Startup Script
# This script starts the core automation components

set -e

echo "🚀 Starting Essential Automation System..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
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

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Navigate to the automation directory
cd "$(dirname "$0")"

# Load environment
print_status "Loading environment..."
source ./load-env.sh

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Create necessary directories
mkdir -p pids logs generated-content analytics

# Clean up any stale PID files
rm -f pids/*.pid

# Function to start a process
start_process() {
    local script_name=$1
    local log_file=$2
    local pid_file=$3
    local description=$4
    
    print_status "Starting $description..."
    
    if [ -f "$script_name" ]; then
        nohup node "$script_name" > "logs/$log_file" 2>&1 &
        local pid=$!
        echo $pid > "pids/$pid_file"
        print_success "$description started (PID: $pid)"
    else
        print_warning "$script_name not found, skipping $description"
    fi
}

# Start essential automation components
print_status "Starting essential automation components..."

# 1. Master Orchestrator (main coordinator)
start_process "autonomous-master-orchestrator.js" "master-orchestrator.log" "master-orchestrator.pid" "Master Orchestrator"

# 2. Monitor System
start_process "monitor-automation.js" "monitor.log" "monitor.pid" "System Monitor"

# 3. Performance Monitor
start_process "performance-monitor.js" "performance-monitor.log" "performance-monitor.pid" "Performance Monitor"

# 4. Content Generation System
start_process "enhanced-content-generator.js" "content-generation.log" "content-generator.pid" "Content Generator"

# 5. Website Analyzer
start_process "enhanced-website-analyzer-agent.js" "website-analyzer.log" "website-analyzer.pid" "Website Analyzer"

print_status "Waiting for processes to start..."
sleep 10

# Check status
print_status "Checking system status..."
running_count=0
total_count=0

for pid_file in pids/*.pid; do
    if [ -f "$pid_file" ]; then
        total_count=$((total_count + 1))
        pid=$(cat "$pid_file")
        process_name=$(basename "$pid_file" .pid)
        
        if kill -0 "$pid" 2>/dev/null; then
            print_success "$process_name is running (PID: $pid)"
            running_count=$((running_count + 1))
        else
            print_error "$process_name is not running"
        fi
    fi
done

echo ""
print_status "System Status Summary:"
echo "  Running processes: $running_count/$total_count"
echo "  Log directory: logs/"
echo "  PID directory: pids/"

if [ $running_count -gt 0 ]; then
    print_success "Essential automation components started!"
else
    print_error "No components started successfully"
fi

print_status "Use ./status-autonomous-system.sh to check system status"
print_status "Use ./stop-autonomous-system.sh to stop the system" 