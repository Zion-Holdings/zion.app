#!/bin/bash

# Start Comprehensive Redundancy System Script
# This script starts the complete redundancy automation system including the new comprehensive manager

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

start_comprehensive_manager() {
    print_status "Starting Comprehensive Redundancy Manager..."
    
    cd "$SCRIPT_DIR"
    node comprehensive-redundancy-manager.cjs start > "$LOG_DIR/comprehensive-redundancy-startup.log" 2>&1 &
    COMPREHENSIVE_PID=$!
    echo $COMPREHENSIVE_PID > "$LOG_DIR/comprehensive-redundancy.pid"
    
    print_success "Comprehensive Redundancy Manager started (PID: $COMPREHENSIVE_PID)"
}

# Function to check if managers are running
check_manager_status() {
    print_status "Checking manager status..."
    
    local all_running=true
    
    # Check PM2 manager
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "PM2 Redundancy Manager: RUNNING (PID: $pid)"
        else
            print_warning "PM2 Redundancy Manager: NOT RUNNING"
            all_running=false
        fi
    else
        print_warning "PM2 Redundancy Manager: PID file not found"
        all_running=false
    fi
    
    # Check GitHub manager
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "GitHub Actions Redundancy Manager: RUNNING (PID: $pid)"
        else
            print_warning "GitHub Actions Redundancy Manager: NOT RUNNING"
            all_running=false
        fi
    else
        print_warning "GitHub Actions Redundancy Manager: PID file not found"
        all_running=false
    fi
    
    # Check Netlify manager
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "Netlify Functions Redundancy Manager: RUNNING (PID: $pid)"
        else
            print_warning "Netlify Functions Redundancy Manager: NOT RUNNING"
            all_running=false
        fi
    else
        print_warning "Netlify Functions Redundancy Manager: PID file not found"
        all_running=false
    fi
    
    # Check Master orchestrator
    if [ -f "$LOG_DIR/master-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/master-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "Master Redundancy Orchestrator: RUNNING (PID: $pid)"
        else
            print_warning "Master Redundancy Orchestrator: NOT RUNNING"
            all_running=false
        fi
    else
        print_warning "Master Redundancy Orchestrator: PID file not found"
        all_running=false
    fi
    
    # Check Comprehensive manager
    if [ -f "$LOG_DIR/comprehensive-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/comprehensive-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_success "Comprehensive Redundancy Manager: RUNNING (PID: $pid)"
        else
            print_warning "Comprehensive Redundancy Manager: NOT RUNNING"
            all_running=false
        fi
    else
        print_warning "Comprehensive Redundancy Manager: PID file not found"
        all_running=false
    fi
    
    if [ "$all_running" = true ]; then
        print_success "All redundancy managers are running!"
    else
        print_warning "Some redundancy managers are not running"
    fi
}

# Function to start all managers
start_all_managers() {
    print_header "Starting Comprehensive Redundancy System"
    
    # Start managers with delays to ensure proper initialization
    start_pm2_manager
    sleep 2
    
    start_github_manager
    sleep 2
    
    start_netlify_manager
    sleep 2
    
    start_master_orchestrator
    sleep 3
    
    start_comprehensive_manager
    sleep 2
    
    print_success "All redundancy managers started!"
    
    # Wait a moment and check status
    sleep 5
    check_manager_status
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [start|status|stop|restart|health|report]"
    echo ""
    echo "Commands:"
    echo "  start     - Start all redundancy managers"
    echo "  status    - Check status of all managers"
    echo "  stop      - Stop all redundancy managers"
    echo "  restart   - Restart all redundancy managers"
    echo "  health    - Run health check on all components"
    echo "  report    - Generate comprehensive redundancy report"
    echo ""
    echo "Examples:"
    echo "  $0 start      # Start the system"
    echo "  $0 status     # Check system status"
    echo "  $0 health     # Run health check"
}

# Function to run health check
run_health_check() {
    print_header "Running Comprehensive Health Check"
    
    cd "$SCRIPT_DIR"
    
    print_status "Running PM2 health check..."
    node pm2-redundancy-manager.cjs health > "$LOG_DIR/pm2-health.log" 2>&1
    
    print_status "Running GitHub Actions health check..."
    node github-actions-redundancy-manager.cjs health > "$LOG_DIR/github-health.log" 2>&1
    
    print_status "Running Netlify Functions health check..."
    node netlify-functions-redundancy-manager.cjs health > "$LOG_DIR/netlify-health.log" 2>&1
    
    print_status "Running Master Orchestrator health check..."
    node master-redundancy-orchestrator.cjs health > "$LOG_DIR/master-health.log" 2>&1
    
    print_status "Running Comprehensive Manager health check..."
    node comprehensive-redundancy-manager.cjs health > "$LOG_DIR/comprehensive-health.log" 2>&1
    
    print_success "Health check completed! Check logs in $LOG_DIR"
}

# Function to generate report
generate_report() {
    print_header "Generating Comprehensive Redundancy Report"
    
    cd "$SCRIPT_DIR"
    
    print_status "Generating PM2 redundancy report..."
    node pm2-redundancy-manager.cjs report > "$LOG_DIR/pm2-report.log" 2>&1
    
    print_status "Generating GitHub Actions redundancy report..."
    node github-actions-redundancy-manager.cjs report > "$LOG_DIR/github-report.log" 2>&1
    
    print_status "Generating Netlify Functions redundancy report..."
    node netlify-functions-redundancy-manager.cjs report > "$LOG_DIR/netlify-report.log" 2>&1
    
    print_status "Generating Master Orchestrator report..."
    node master-redundancy-orchestrator.cjs report > "$LOG_DIR/master-report.log" 2>&1
    
    print_status "Generating Comprehensive Manager report..."
    node comprehensive-redundancy-manager.cjs report > "$LOG_DIR/comprehensive-report.log" 2>&1
    
    print_success "All reports generated! Check logs in $LOG_DIR"
}

# Main script logic
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            check_node
            check_pm2
            check_dependencies
            setup_logs
            start_all_managers
            ;;
        status)
            check_manager_status
            ;;
        stop)
            print_info "Use './stop-redundancy-system.sh' to stop the system"
            ;;
        restart)
            print_info "Use './stop-redundancy-system.sh' then run this script again"
            ;;
        health)
            run_health_check
            ;;
        report)
            generate_report
            ;;
        *)
            show_usage
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"