#!/bin/bash

# Start Redundancy System Script
# This script starts the complete redundancy automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$PROJECT_ROOT/automation/logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_status "Using Node.js version: $NODE_VERSION"
}

# Function to check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    PM2_VERSION=$(pm2 --version)
    print_status "Using PM2 version: $PM2_VERSION"
}

# Function to check if required packages are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    cd "$PROJECT_ROOT"
    
    if [ ! -f "package-lock.json" ]; then
        print_warning "package-lock.json not found, installing dependencies..."
        npm install
    fi
    
    # Check if node-cron is available
    if ! node -e "require('node-cron')" 2>/dev/null; then
        print_warning "node-cron not found, installing..."
        npm install node-cron
    fi
    
    print_success "Dependencies check completed"
}

# Function to create log directory
setup_logs() {
    print_status "Setting up log directory..."
    
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        print_status "Created log directory: $LOG_DIR"
    fi
    
    print_success "Log directory ready"
}

# Function to start individual managers
start_pm2_manager() {
    print_status "Starting PM2 Redundancy Manager..."
    
    cd "$SCRIPT_DIR"
    node pm2-redundancy-manager.cjs start > "$LOG_DIR/pm2-redundancy-startup.log" 2>&1 &
    PM2_PID=$!
    echo $PM2_PID > "$LOG_DIR/pm2-redundancy.pid"
    
    print_success "PM2 Redundancy Manager started (PID: $PM2_PID)"
}

start_github_manager() {
    print_status "Starting GitHub Actions Redundancy Manager..."
    
    cd "$SCRIPT_DIR"
    node github-actions-redundancy-manager.cjs start > "$LOG_DIR/github-redundancy-startup.log" 2>&1 &
    GITHUB_PID=$!
    echo $GITHUB_PID > "$LOG_DIR/github-redundancy.pid"
    
    print_success "GitHub Actions Redundancy Manager started (PID: $GITHUB_PID)"
}

start_netlify_manager() {
    print_status "Starting Netlify Functions Redundancy Manager..."
    
    cd "$SCRIPT_DIR"
    node netlify-functions-redundancy-manager.cjs start > "$LOG_DIR/netlify-redundancy-startup.log" 2>&1 &
    NETLIFY_PID=$!
    echo $NETLIFY_PID > "$LOG_DIR/netlify-redundancy.pid"
    
    print_success "Netlify Functions Redundancy Manager started (PID: $NETLIFY_PID)"
}

start_master_orchestrator() {
    print_status "Starting Master Redundancy Orchestrator..."
    
    cd "$SCRIPT_DIR"
    node master-redundancy-orchestrator.cjs start > "$LOG_DIR/master-redundancy-startup.log" 2>&1 &
    MASTER_PID=$!
    echo $MASTER_PID > "$LOG_DIR/master-redundancy.pid"
    
    print_success "Master Redundancy Orchestrator started (PID: $MASTER_PID)"
}

# Function to wait for managers to be ready
wait_for_managers() {
    print_status "Waiting for managers to be ready..."
    
    local max_wait=60
    local wait_time=0
    
    while [ $wait_time -lt $max_wait ]; do
        if [ -f "$LOG_DIR/pm2-redundancy.pid" ] && \
           [ -f "$LOG_DIR/github-redundancy.pid" ] && \
           [ -f "$LOG_DIR/netlify-redundancy.pid" ] && \
           [ -f "$LOG_DIR/master-redundancy.pid" ]; then
            
            print_success "All managers are ready"
            return 0
        fi
        
        sleep 2
        wait_time=$((wait_time + 2))
        print_status "Waiting... ($wait_time/$max_wait seconds)"
    done
    
    print_warning "Timeout waiting for managers to be ready"
    return 1
}

# Function to show status
show_status() {
    print_status "Redundancy System Status:"
    echo "----------------------------------------"
    
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "PM2 Manager: Running (PID: $pid)"
        else
            print_error "PM2 Manager: Not running (stale PID file)"
        fi
    else
        print_error "PM2 Manager: Not started"
    fi
    
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "GitHub Manager: Running (PID: $pid)"
        else
            print_error "GitHub Manager: Not running (stale PID file)"
        fi
    else
        print_error "GitHub Manager: Not started"
    fi
    
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "Netlify Manager: Running (PID: $pid)"
        else
            print_error "Netlify Manager: Not running (stale PID file)"
        fi
    else
        print_error "Netlify Manager: Not started"
    fi
    
    if [ -f "$LOG_DIR/master-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/master-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "Master Orchestrator: Running (PID: $pid)"
        else
            print_error "Master Orchestrator: Not running (stale PID file)"
        fi
    else
        print_error "Master Orchestrator: Not started"
    fi
    
    echo "----------------------------------------"
}

# Main execution
main() {
    print_status "Starting Redundancy Automation System..."
    echo "================================================"
    
    # Change to project root
    cd "$PROJECT_ROOT"
    
    # Run checks
    check_node
    check_pm2
    check_dependencies
    setup_logs
    
    # Start managers
    start_pm2_manager
    start_github_manager
    start_netlify_manager
    
    # Wait a moment for individual managers
    sleep 5
    
    # Start master orchestrator
    start_master_orchestrator
    
    # Wait for all managers to be ready
    if wait_for_managers; then
        print_success "Redundancy system started successfully!"
        echo ""
        show_status
        echo ""
        print_status "Logs are available in: $LOG_DIR"
        print_status "Use './stop-redundancy-system.sh' to stop the system"
    else
        print_error "Failed to start redundancy system properly"
        exit 1
    fi
}

# Handle command line arguments
case "${1:-start}" in
    start)
        main
        ;;
    status)
        show_status
        ;;
    *)
        echo "Usage: $0 [start|status]"
        echo "  start  - Start the redundancy system (default)"
        echo "  status - Show current status"
        exit 1
        ;;
esac