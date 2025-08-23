#!/bin/bash

# Comprehensive Automation Coverage Startup Script
# This script starts all redundancy and coverage systems for complete automation protection

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$ROOT_DIR/automation"
LOGS_DIR="$AUTOMATION_DIR/logs"

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
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

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if a process is running
is_process_running() {
    pgrep -f "$1" >/dev/null 2>&1
}

# Function to wait for a process to start
wait_for_process() {
    local process_name="$1"
    local max_wait=30
    local wait_time=0
    
    print_info "Waiting for $process_name to start..."
    
    while [ $wait_time -lt $max_wait ]; do
        if is_process_running "$process_name"; then
            print_success "$process_name is running"
            return 0
        fi
        
        sleep 2
        wait_time=$((wait_time + 2))
    done
    
    print_warning "$process_name may not have started properly"
    return 1
}

# Function to create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    
    mkdir -p "$LOGS_DIR"
    mkdir -p "$AUTOMATION_DIR/redundancy/backup"
    
    print_success "Directories created"
}

# Function to check dependencies
check_dependencies() {
    print_info "Checking dependencies..."
    
    # Check Node.js
    if ! command_exists node; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command_exists npm; then
        print_error "npm is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command_exists pm2; then
        print_warning "PM2 not found, installing..."
        npm install -g pm2
    fi
    
    # Check node-cron
    if ! node -e "require('node-cron')" 2>/dev/null; then
        print_warning "node-cron not found, installing..."
        npm install node-cron
    fi
    
    print_success "All dependencies are available"
}

# Function to stop existing processes
stop_existing_processes() {
    print_info "Stopping existing processes..."
    
    # Stop existing PM2 processes
    if command_exists pm2; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Stop any running coverage processes
    pkill -f "comprehensive-automation-coverage" 2>/dev/null || true
    pkill -f "enhanced-coverage-manager" 2>/dev/null || true
    
    print_success "Existing processes stopped"
}

# Function to start PM2 ecosystem
start_pm2_ecosystem() {
    print_info "Starting PM2 ecosystem..."
    
    if [ -f "$ROOT_DIR/ecosystem.pm2.cjs" ]; then
        cd "$ROOT_DIR"
        pm2 start ecosystem.pm2.cjs
        print_success "PM2 ecosystem started"
    else
        print_warning "No PM2 ecosystem file found"
    fi
}

# Function to start comprehensive coverage system
start_comprehensive_coverage() {
    print_info "Starting comprehensive automation coverage system..."
    
    cd "$AUTOMATION_DIR/redundancy"
    
    # Start the comprehensive coverage system
    if node comprehensive-automation-coverage.cjs start; then
        print_success "Comprehensive coverage system started"
        
        # Wait for it to be fully operational
        sleep 5
        
        # Check status
        if node comprehensive-automation-coverage.cjs status >/dev/null 2>&1; then
            print_success "Coverage system is operational"
        else
            print_warning "Coverage system status check failed"
        fi
    else
        print_error "Failed to start comprehensive coverage system"
        return 1
    fi
}

# Function to start individual redundancy managers
start_individual_managers() {
    print_info "Starting individual redundancy managers..."
    
    cd "$AUTOMATION_DIR/redundancy"
    
    # Start PM2 redundancy manager
    print_info "Starting PM2 redundancy manager..."
    if node pm2-redundancy-manager.cjs start; then
        print_success "PM2 redundancy manager started"
    else
        print_warning "PM2 redundancy manager failed to start"
    fi
    
    # Start GitHub Actions redundancy manager
    print_info "Starting GitHub Actions redundancy manager..."
    if node github-actions-redundancy-manager.cjs start; then
        print_success "GitHub Actions redundancy manager started"
    else
        print_warning "GitHub Actions redundancy manager failed to start"
    fi
    
    # Start Netlify Functions redundancy manager
    print_info "Starting Netlify Functions redundancy manager..."
    if node netlify-functions-redundancy-manager.cjs start; then
        print_success "Netlify Functions redundancy manager started"
    else
        print_warning "Netlify Functions redundancy manager failed to start"
    fi
    
    # Start enhanced coverage manager
    print_info "Starting enhanced coverage manager..."
    if node enhanced-coverage-manager.cjs start; then
        print_success "Enhanced coverage manager started"
    else
        print_warning "Enhanced coverage manager failed to start"
    fi
}

# Function to start monitoring
start_monitoring() {
    print_info "Starting monitoring systems..."
    
    cd "$AUTOMATION_DIR/redundancy"
    
    # Start health monitoring
    print_info "Starting health monitoring..."
    nohup node comprehensive-automation-coverage.cjs health > "$LOGS_DIR/health-monitor.log" 2>&1 &
    
    # Start coverage monitoring
    print_info "Starting coverage monitoring..."
    nohup node enhanced-coverage-manager.cjs monitor > "$LOGS_DIR/coverage-monitor.log" 2>&1 &
    
    print_success "Monitoring systems started"
}

# Function to generate initial report
generate_initial_report() {
    print_info "Generating initial coverage report..."
    
    cd "$AUTOMATION_DIR/redundancy"
    
    if node comprehensive-automation-coverage.cjs report; then
        print_success "Initial report generated"
    else
        print_warning "Failed to generate initial report"
    fi
}

# Function to show status
show_status() {
    print_info "Current system status:"
    
    echo
    echo "=== PM2 Processes ==="
    if command_exists pm2; then
        pm2 list 2>/dev/null || echo "No PM2 processes running"
    else
        echo "PM2 not available"
    fi
    
    echo
    echo "=== Coverage System Status ==="
    cd "$AUTOMATION_DIR/redundancy"
    if node comprehensive-automation-coverage.cjs status 2>/dev/null; then
        echo "Coverage system is running"
    else
        echo "Coverage system status unknown"
    fi
    
    echo
    echo "=== Log Files ==="
    if [ -d "$LOGS_DIR" ]; then
        ls -la "$LOGS_DIR"/*.log 2>/dev/null || echo "No log files found"
    else
        echo "Logs directory not found"
    fi
}

# Function to cleanup on exit
cleanup() {
    print_info "Cleaning up..."
    
    # Stop background processes
    pkill -f "comprehensive-automation-coverage" 2>/dev/null || true
    pkill -f "enhanced-coverage-manager" 2>/dev/null || true
    
    print_info "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Main execution
main() {
    print_info "Starting Comprehensive Automation Coverage System"
    print_info "Root directory: $ROOT_DIR"
    print_info "Automation directory: $AUTOMATION_DIR"
    
    # Check if we're in the right directory
    if [ ! -f "$AUTOMATION_DIR/redundancy/comprehensive-automation-coverage.cjs" ]; then
        print_error "Comprehensive coverage system not found in $AUTOMATION_DIR/redundancy/"
        exit 1
    fi
    
    # Create directories
    create_directories
    
    # Check dependencies
    check_dependencies
    
    # Stop existing processes
    stop_existing_processes
    
    # Start PM2 ecosystem
    start_pm2_ecosystem
    
    # Start comprehensive coverage system
    if start_comprehensive_coverage; then
        # Start individual managers as backup
        start_individual_managers
        
        # Start monitoring
        start_monitoring
        
        # Generate initial report
        generate_initial_report
        
        # Show final status
        echo
        print_success "Comprehensive automation coverage system started successfully!"
        echo
        show_status
        
        print_info "System is now monitoring and protecting all automations"
        print_info "Check logs in: $LOGS_DIR"
        print_info "Use 'node automation/redundancy/comprehensive-automation-coverage.cjs status' to check status"
        
    else
        print_error "Failed to start comprehensive coverage system"
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
    stop)
        print_info "Stopping all coverage systems..."
        cd "$AUTOMATION_DIR/redundancy"
        node comprehensive-automation-coverage.cjs stop
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        print_success "All systems stopped"
        ;;
    restart)
        print_info "Restarting coverage systems..."
        "$0" stop
        sleep 2
        "$0" start
        ;;
    *)
        echo "Usage: $0 [start|status|stop|restart]"
        echo "  start   - Start all coverage systems (default)"
        echo "  status  - Show current system status"
        echo "  stop    - Stop all coverage systems"
        echo "  restart - Restart all coverage systems"
        exit 1
        ;;
esac