#!/bin/bash

# Comprehensive Automation Restart Script
# This script stops all automation processes and restarts them properly

set -e

echo "🔄 Restarting Comprehensive Automation System..."

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

# Stop all existing processes
print_status "Stopping existing processes..."

# Kill all Node.js processes related to automation
pkill -f "autonomous-master-orchestrator.js" || true
pkill -f "monitor-automation.js" || true
pkill -f "performance-monitor.js" || true
pkill -f "enhanced-content-generator.js" || true
pkill -f "enhanced-website-analyzer-agent.js" || true
pkill -f "agent-orchestrator.js" || true
pkill -f "autonomous-marketing-orchestrator.js" || true
pkill -f "security-scan.js" || true
pkill -f "backup-system.js" || true
pkill -f "error-monitor-daemon.js" || true

# Clean up PID files
rm -f pids/*.pid

print_success "All processes stopped"

# Wait a moment
sleep 2

# Create necessary directories
mkdir -p pids logs generated-content analytics

# Function to start a process with proper error handling
start_process() {
    local script_name=$1
    local log_file=$2
    local pid_file=$3
    local description=$4
    
    print_status "Starting $description..."
    
    if [ -f "$script_name" ]; then
        # Start the process in background
        nohup node "$script_name" > "logs/$log_file" 2>&1 &
        local pid=$!
        echo $pid > "pids/$pid_file"
        
        # Wait a moment and check if it's still running
        sleep 3
        if kill -0 $pid 2>/dev/null; then
            print_success "$description started successfully (PID: $pid)"
            return 0
        else
            print_error "$description failed to start"
            return 1
        fi
    else
        print_warning "$script_name not found, skipping $description"
        return 1
    fi
}

# Start core automation components
print_status "Starting automation components..."

# 1. Master Orchestrator (main coordinator)
start_process "autonomous-master-orchestrator.js" "master-orchestrator.log" "master-orchestrator.pid" "Master Orchestrator"

# Wait a moment for master orchestrator to initialize
sleep 5

# 2. Monitor System
start_process "monitor-automation.js" "monitor.log" "monitor.pid" "System Monitor"

# 3. Performance Monitor
start_process "performance-monitor.js" "performance-monitor.log" "performance-monitor.pid" "Performance Monitor"

# 4. Content Generation System
start_process "enhanced-content-generator.js" "content-generation.log" "content-generator.pid" "Content Generator"

# 5. Website Analyzer
start_process "enhanced-website-analyzer-agent.js" "website-analyzer.log" "website-analyzer.pid" "Website Analyzer"

# 6. Agent Orchestrator
start_process "agent-orchestrator.js" "agent-orchestrator.log" "agent-orchestrator.pid" "Agent Orchestrator"

# 7. Marketing Automation
start_process "autonomous-marketing-orchestrator.js" "marketing-automation.log" "marketing-automation.pid" "Marketing Automation"

# 8. Security Monitor
start_process "security-scan.js" "security-monitor.log" "security-monitor.pid" "Security Monitor"

# 9. Backup System
start_process "backup-system.js" "backup-agent.log" "backup-agent.pid" "Backup Agent"

# 10. Error Monitor
start_process "error-monitor-daemon.js" "error-monitor.log" "error-monitor.pid" "Error Monitor"

print_status "Waiting for all processes to stabilize..."
sleep 10

# Check final status
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
    print_success "Automation system restarted successfully!"
    print_status "Core components are running and generating content"
else
    print_error "No components started successfully"
fi

print_status "Use ./status-autonomous-system.sh to check system status"
print_status "Use ./stop-autonomous-system.sh to stop the system"

# Show recent activity
echo ""
print_status "Recent activity from logs:"
if [ -f "logs/master-orchestrator.log" ]; then
    echo "Master Orchestrator:"
    tail -3 logs/master-orchestrator.log
fi

if [ -f "logs/content-generation.log" ]; then
    echo "Content Generator:"
    tail -3 logs/content-generation.log
fi 