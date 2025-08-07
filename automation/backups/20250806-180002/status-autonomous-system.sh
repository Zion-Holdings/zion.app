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

if [ -d "pids" ]; then
    for pid_file in pids/*.pid; do
        if [ -f "$pid_file" ]; then
            pid=$(cat "$pid_file")
            process_name=$(basename "$pid_file" .pid)
            
            if kill -0 "$pid" 2>/dev/null; then
                print_success "$process_name is running (PID: $pid)"
            else
                print_error "$process_name is not running"
            fi
        fi
    done
else
    print_warning "No PID files found"
fi

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
