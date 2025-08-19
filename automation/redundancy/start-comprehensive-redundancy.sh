#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script starts the complete redundancy automation system with enhanced coverage

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$PROJECT_ROOT/automation/logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
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

print_info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}================================${NC}"
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

# Function to start Enhanced Redundancy Coverage Manager
start_enhanced_coverage() {
    print_header "Starting Enhanced Redundancy Coverage Manager"
    
    cd "$SCRIPT_DIR"
    
    if [ ! -f "enhanced-redundancy-coverage.cjs" ]; then
        print_error "Enhanced redundancy coverage script not found"
        return 1
    fi
    
    print_status "Starting Enhanced Redundancy Coverage Manager..."
    
    node enhanced-redundancy-coverage.cjs start > "$LOG_DIR/enhanced-coverage-startup.log" 2>&1 &
    ENHANCED_PID=$!
    echo $ENHANCED_PID > "$LOG_DIR/enhanced-coverage.pid"
    
    print_success "Enhanced Redundancy Coverage Manager started (PID: $ENHANCED_PID)"
    
    # Wait a moment for it to initialize
    sleep 3
    
    # Check if it's running
    if kill -0 $ENHANCED_PID 2>/dev/null; then
        print_success "Enhanced Coverage Manager is running successfully"
    else
        print_warning "Enhanced Coverage Manager may have stopped, checking logs..."
        if [ -f "$LOG_DIR/enhanced-coverage-startup.log" ]; then
            tail -n 10 "$LOG_DIR/enhanced-coverage-startup.log"
        fi
    fi
}

# Function to start PM2 Redundancy Manager
start_pm2_manager() {
    print_header "Starting PM2 Redundancy Manager"
    
    cd "$SCRIPT_DIR"
    
    if [ ! -f "pm2-redundancy-manager.cjs" ]; then
        print_error "PM2 redundancy manager script not found"
        return 1
    fi
    
    print_status "Starting PM2 Redundancy Manager..."
    
    node pm2-redundancy-manager.cjs start > "$LOG_DIR/pm2-redundancy-startup.log" 2>&1 &
    PM2_PID=$!
    echo $PM2_PID > "$LOG_DIR/pm2-redundancy.pid"
    
    print_success "PM2 Redundancy Manager started (PID: $PM2_PID)"
    
    # Wait a moment for it to initialize
    sleep 3
    
    # Check if it's running
    if kill -0 $PM2_PID 2>/dev/null; then
        print_success "PM2 Redundancy Manager is running successfully"
    else
        print_warning "PM2 Redundancy Manager may have stopped, checking logs..."
        if [ -f "$LOG_DIR/pm2-redundancy-startup.log" ]; then
            tail -n 10 "$LOG_DIR/pm2-redundancy-startup.log"
        fi
    fi
}

# Function to start GitHub Actions Redundancy Manager
start_github_manager() {
    print_header "Starting GitHub Actions Redundancy Manager"
    
    cd "$SCRIPT_DIR"
    
    if [ ! -f "github-actions-redundancy-manager.cjs" ]; then
        print_error "GitHub Actions redundancy manager script not found"
        return 1
    fi
    
    print_status "Starting GitHub Actions Redundancy Manager..."
    
    node github-actions-redundancy-manager.cjs start > "$LOG_DIR/github-redundancy-startup.log" 2>&1 &
    GITHUB_PID=$!
    echo $GITHUB_PID > "$LOG_DIR/github-redundancy.pid"
    
    print_success "GitHub Actions Redundancy Manager started (PID: $GITHUB_PID)"
    
    # Wait a moment for it to initialize
    sleep 3
    
    # Check if it's running
    if kill -0 $GITHUB_PID 2>/dev/null; then
        print_success "GitHub Actions Redundancy Manager is running successfully"
    else
        print_warning "GitHub Actions Redundancy Manager may have stopped, checking logs..."
        if [ -f "$LOG_DIR/github-redundancy-startup.log" ]; then
            tail -n 10 "$LOG_DIR/github-redundancy-startup.log"
        fi
    fi
}

# Function to start Netlify Functions Redundancy Manager
start_netlify_manager() {
    print_header "Starting Netlify Functions Redundancy Manager"
    
    cd "$SCRIPT_DIR"
    
    if [ ! -f "netlify-functions-redundancy-manager.cjs" ]; then
        print_error "Netlify Functions redundancy manager script not found"
        return 1
    fi
    
    print_status "Starting Netlify Functions Redundancy Manager..."
    
    node netlify-functions-redundancy-manager.cjs start > "$LOG_DIR/netlify-redundancy-startup.log" 2>&1 &
    NETLIFY_PID=$!
    echo $NETLIFY_PID > "$LOG_DIR/netlify-redundancy.pid"
    
    print_success "Netlify Functions Redundancy Manager started (PID: $NETLIFY_PID)"
    
    # Wait a moment for it to initialize
    sleep 3
    
    # Check if it's running
    if kill -0 $NETLIFY_PID 2>/dev/null; then
        print_success "Netlify Functions Redundancy Manager is running successfully"
    else
        print_warning "Netlify Functions Redundancy Manager may have stopped, checking logs..."
        if [ -f "$LOG_DIR/netlify-redundancy-startup.log" ]; then
            tail -n 10 "$LOG_DIR/netlify-redundancy-startup.log"
        fi
    fi
}

# Function to start Master Redundancy Orchestrator
start_master_orchestrator() {
    print_header "Starting Master Redundancy Orchestrator"
    
    cd "$SCRIPT_DIR"
    
    if [ ! -f "master-redundancy-orchestrator.cjs" ]; then
        print_error "Master redundancy orchestrator script not found"
        return 1
    fi
    
    print_status "Starting Master Redundancy Orchestrator..."
    
    node master-redundancy-orchestrator.cjs start > "$LOG_DIR/master-redundancy-startup.log" 2>&1 &
    MASTER_PID=$!
    echo $MASTER_PID > "$LOG_DIR/master-redundancy.pid"
    
    print_success "Master Redundancy Orchestrator started (PID: $MASTER_PID)"
    
    # Wait a moment for it to initialize
    sleep 3
    
    # Check if it's running
    if kill -0 $MASTER_PID 2>/dev/null; then
        print_success "Master Redundancy Orchestrator is running successfully"
    else
        print_warning "Master Redundancy Orchestrator may have stopped, checking logs..."
        if [ -f "$LOG_DIR/master-redundancy-startup.log" ]; then
            tail -n 10 "$LOG_DIR/master-redundancy-startup.log"
        fi
    fi
}

# Function to check system status
check_system_status() {
    print_header "Checking System Status"
    
    local all_running=true
    
    # Check Enhanced Coverage Manager
    if [ -f "$LOG_DIR/enhanced-coverage.pid" ]; then
        local pid=$(cat "$LOG_DIR/enhanced-coverage.pid")
        if kill -0 $pid 2>/dev/null; then
            print_success "Enhanced Coverage Manager: Running (PID: $pid)"
        else
            print_error "Enhanced Coverage Manager: Not running (stale PID file)"
            all_running=false
        fi
    else
        print_error "Enhanced Coverage Manager: Not started"
        all_running=false
    fi
    
    # Check PM2 Manager
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_success "PM2 Manager: Running (PID: $pid)"
        else
            print_error "PM2 Manager: Not running (stale PID file)"
            all_running=false
        fi
    else
        print_error "PM2 Manager: Not started"
        all_running=false
    fi
    
    # Check GitHub Manager
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_success "GitHub Manager: Running (PID: $pid)"
        else
            print_error "GitHub Manager: Not running (stale PID file)"
            all_running=false
        fi
    else
        print_error "GitHub Manager: Not started"
        all_running=false
    fi
    
    # Check Netlify Manager
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_success "Netlify Manager: Running (PID: $pid)"
        else
            print_error "Netlify Manager: Not running (stale PID file)"
            all_running=false
        fi
    else
        print_error "Netlify Manager: Not started"
        all_running=false
    fi
    
    # Check Master Orchestrator
    if [ -f "$LOG_DIR/master-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/master-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_success "Master Orchestrator: Running (PID: $pid)"
        else
            print_error "Master Orchestrator: Not running (stale PID file)"
            all_running=false
        fi
    else
        print_error "Master Orchestrator: Not started"
        all_running=false
    fi
    
    if [ "$all_running" = true ]; then
        print_success "All redundancy managers are running successfully!"
    else
        print_warning "Some redundancy managers are not running properly"
    fi
}

# Function to generate comprehensive report
generate_report() {
    print_header "Generating Comprehensive Report"
    
    cd "$SCRIPT_DIR"
    
    if [ -f "enhanced-redundancy-coverage.cjs" ]; then
        print_status "Generating enhanced coverage report..."
        node enhanced-redundancy-coverage.cjs report > "$LOG_DIR/enhanced-coverage-report.log" 2>&1
        print_success "Enhanced coverage report generated"
    fi
    
    # Generate individual manager reports
    if [ -f "pm2-redundancy-manager.cjs" ]; then
        print_status "Generating PM2 redundancy report..."
        node pm2-redundancy-manager.cjs report > "$LOG_DIR/pm2-redundancy-report.log" 2>&1
        print_success "PM2 redundancy report generated"
    fi
    
    if [ -f "github-actions-redundancy-manager.cjs" ]; then
        print_status "Generating GitHub Actions redundancy report..."
        node github-actions-redundancy-manager.cjs report > "$LOG_DIR/github-redundancy-report.log" 2>&1
        print_success "GitHub Actions redundancy report generated"
    fi
    
    if [ -f "netlify-functions-redundancy-manager.cjs" ]; then
        print_status "Generating Netlify Functions redundancy report..."
        node netlify-functions-redundancy-manager.cjs report > "$LOG_DIR/netlify-redundancy-report.log" 2>&1
        print_success "Netlify Functions redundancy report generated"
    fi
    
    if [ -f "master-redundancy-orchestrator.cjs" ]; then
        print_status "Generating master orchestrator report..."
        node master-redundancy-orchestrator.cjs report > "$LOG_DIR/master-redundancy-report.log" 2>&1
        print_success "Master orchestrator report generated"
    fi
    
    print_success "All reports generated successfully"
    print_info "Reports available in: $LOG_DIR"
}

# Main execution
main() {
    print_header "Comprehensive Redundancy System Startup"
    
    # Check prerequisites
    check_node
    check_pm2
    check_dependencies
    setup_logs
    
    # Start all managers
    start_enhanced_coverage
    start_pm2_manager
    start_github_manager
    start_netlify_manager
    start_master_orchestrator
    
    # Wait for all managers to initialize
    print_status "Waiting for all managers to initialize..."
    sleep 5
    
    # Check system status
    check_system_status
    
    # Generate comprehensive report
    generate_report
    
    print_header "Startup Complete"
    print_success "Comprehensive redundancy system is now running!"
    print_info "Use './start-comprehensive-redundancy.sh status' to check status"
    print_info "Use './start-comprehensive-redundancy.sh report' to generate reports"
    print_info "Logs available in: $LOG_DIR"
}

# Handle command line arguments
case "${1:-start}" in
    start)
        main
        ;;
    status)
        check_system_status
        ;;
    report)
        generate_report
        ;;
    *)
        echo "Usage: $0 [start|status|report]"
        echo "  start  - Start the comprehensive redundancy system (default)"
        echo "  status - Check the status of all redundancy managers"
        echo "  report - Generate comprehensive reports"
        exit 1
        ;;
esac