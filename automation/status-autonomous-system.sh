#!/bin/bash

# Autonomous Agent System Status Script

echo "📊 Autonomous Agent System Status"

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

# Navigate to the automation directory
cd "$(dirname "$0")"

echo ""

# Check if processes are running
print_status "Checking running processes..."

# Check for specific automation processes
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

# Check each automation process
check_process "agent-orchestrator" "agent-orchestrator.js"
check_process "enhanced-autonomous-system" "enhanced-autonomous-system.js"
check_process "enhanced-cron-system" "enhanced-cron-system.js"
check_process "marketing-automation" "marketing-automation.js"
check_process "master-orchestrator" "autonomous-master-orchestrator.js"
check_process "monitor" "monitor-automation.js"

echo ""

# Check system resources
print_status "System Resources:"
echo "CPU Usage: $(top -l 1 | grep "CPU usage" | awk '{print $3}' | cut -d'%' -f1)%"
echo "Memory Usage: $(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')"
echo "Disk Usage: $(df -h . | tail -1 | awk '{print $5}')"

echo ""

# Check recent logs
print_status "Recent Logs:"
if [ -d "logs" ]; then
    for log_file in logs/*.log; do
        if [ -f "$log_file" ]; then
            echo "$(basename "$log_file"): $(tail -1 "$log_file" 2>/dev/null || echo "No recent activity")"
        fi
    done
else
    print_warning "No logs directory found"
fi

echo ""

# Check configuration
print_status "Configuration:"
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
print_status "Use start-autonomous-system.sh to start the system"
print_status "Use stop-autonomous-system.sh to stop the system"
