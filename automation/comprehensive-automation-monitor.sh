#!/bin/bash

# Comprehensive Automation System Monitor
# This script monitors all automation processes and restarts missing ones

echo "🔍 Comprehensive Automation System Monitor"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
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

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Navigate to automation directory
cd "$(dirname "$0")"

# Load environment variables
print_status "Loading environment variables..."
source ../.env 2>/dev/null || print_warning "Could not load ../.env"
source .env.automation 2>/dev/null || print_warning "Could not load .env.automation"

# Function to check if a process is running
check_process() {
    local process_name=$1
    local script_name=$2
    
    if pgrep -f "$script_name" > /dev/null; then
        local pid=$(pgrep -f "$script_name" | head -1)
        print_success "$process_name is running (PID: $pid)"
        return 0
    else
        print_error "$process_name is not running"
        return 1
    fi
}

# Function to start a process
start_process() {
    local process_name=$1
    local script_name=$2
    
    print_status "Starting $process_name..."
    nohup node "$script_name" > "logs/${process_name}.log" 2>&1 &
    local pid=$!
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        print_success "$process_name started successfully (PID: $pid)"
        return 0
    else
        print_error "$process_name failed to start"
        return 1
    fi
}

echo ""
print_status "Checking automation processes..."

# Check and start key automation processes
declare -A processes=(
    ["master-orchestrator"]="autonomous-master-orchestrator.js"
    ["enhanced-content-generator"]="enhanced-content-generator.js"
    ["performance-monitor"]="performance-monitor.js"
    ["website-analyzer"]="enhanced-website-analyzer-agent.js"
    ["agent-orchestrator"]="agent-orchestrator.js"
    ["enhanced-autonomous-system"]="enhanced-autonomous-system.js"
    ["enhanced-cron-system"]="enhanced-cron-system.js"
    ["marketing-automation"]="marketing-automation.js"
    ["monitor-automation"]="monitor-automation.js"
)

# Check each process
for process_name in "${!processes[@]}"; do
    script_name="${processes[$process_name]}"
    if ! check_process "$process_name" "$script_name"; then
        if [ -f "$script_name" ]; then
            start_process "$process_name" "$script_name"
        else
            print_warning "$script_name not found"
        fi
    fi
done

echo ""
print_status "Checking cron jobs..."

# Check if cron jobs are properly configured
cron_count=$(crontab -l 2>/dev/null | grep -E "(automation|orchestrator)" | wc -l)
if [ "$cron_count" -gt 0 ]; then
    print_success "Found $cron_count automation cron jobs configured"
else
    print_warning "No automation cron jobs found"
fi

echo ""
print_status "Checking system resources..."

# Check system resources
cpu_usage=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | cut -d'%' -f1)
memory_usage=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')
disk_usage=$(df -h . | tail -1 | awk '{print $5}')

echo "CPU Usage: ${cpu_usage}%"
echo "Memory Usage: ${memory_usage}"
echo "Disk Usage: ${disk_usage}"

echo ""
print_status "Checking recent logs..."

# Check recent log activity
if [ -d "logs" ]; then
    recent_logs=$(find logs -name "*.log" -mtime -1 2>/dev/null | wc -l)
    print_success "Found $recent_logs log files with recent activity"
    
    # Show recent errors if any
    error_count=$(find logs -name "*.log" -exec grep -l "ERROR\|error" {} \; 2>/dev/null | wc -l)
    if [ "$error_count" -gt 0 ]; then
        print_warning "Found $error_count log files with errors"
    fi
else
    print_error "No logs directory found"
fi

echo ""
print_status "Checking configuration files..."

# Check configuration files
if [ -f "config.json" ]; then
    print_success "Configuration file exists"
else
    print_error "Configuration file missing"
fi

if [ -f "cron-config.json" ]; then
    print_success "Cron configuration exists"
else
    print_error "Cron configuration missing"
fi

echo ""
print_status "Automation System Summary:"

# Count running processes
total_processes=$(ps aux | grep -E "(node.*automation|node.*orchestrator)" | grep -v grep | wc -l)
print_success "Total automation processes running: $total_processes"

# Check if key processes are running
key_processes=("autonomous-master-orchestrator.js" "enhanced-content-generator.js" "performance-monitor.js")
running_key_processes=0

for process in "${key_processes[@]}"; do
    if pgrep -f "$process" > /dev/null; then
        ((running_key_processes++))
    fi
done

if [ "$running_key_processes" -eq "${#key_processes[@]}" ]; then
    print_success "All key automation processes are running"
else
    print_warning "Only $running_key_processes/${#key_processes[@]} key processes are running"
fi

echo ""
print_status "Use ./comprehensive-automation-monitor.sh to run this check again"
print_status "Use ./restart-automation.sh to restart all automation systems" 