#!/bin/bash

# Enhanced Redundancy Automation System Startup Script
# This script initializes and starts all redundancy automation systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
NODE_VERSION="20"

# Function to print colored output
print_status() {
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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check Node.js version
check_node_version() {
    if ! command_exists node; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2)
    local major_version=$(echo "$node_version" | cut -d'.' -f1)
    
    if [ "$major_version" -lt "$NODE_VERSION" ]; then
        print_error "Node.js version $node_version is too old. Required: v$NODE_VERSION+"
        exit 1
    fi
    
    print_success "Node.js version $node_version is compatible"
}

# Function to check PM2 installation
check_pm2() {
    if ! command_exists pm2; then
        print_warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        
        if [ $? -eq 0 ]; then
            print_success "PM2 installed successfully"
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    else
        print_success "PM2 is already installed"
    fi
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$WORKSPACE_DIR/logs"
    
    print_success "Directories created"
}

# Function to check and install dependencies
check_dependencies() {
    print_status "Checking project dependencies..."
    
    if [ -f "$WORKSPACE_DIR/package.json" ]; then
        cd "$WORKSPACE_DIR"
        
        if [ ! -d "node_modules" ]; then
            print_status "Installing project dependencies..."
            npm install
            
            if [ $? -eq 0 ]; then
                print_success "Project dependencies installed"
            else
                print_error "Failed to install project dependencies"
                exit 1
            fi
        else
            print_success "Project dependencies already installed"
        fi
    else
        print_warning "No package.json found, skipping dependency installation"
    fi
}

# Function to start PM2 processes
start_pm2_processes() {
    print_status "Starting PM2 processes..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the main redundancy ecosystem
    if [ -f "ecosystem.redundancy.cjs" ]; then
        print_status "Starting redundancy ecosystem..."
        pm2 start ecosystem.redundancy.cjs --update-env
        
        if [ $? -eq 0 ]; then
            print_success "Redundancy ecosystem started"
        else
            print_warning "Failed to start redundancy ecosystem, trying individual processes..."
            start_individual_pm2_processes
        fi
    else
        print_warning "ecosystem.redundancy.cjs not found, starting individual processes..."
        start_individual_pm2_processes
    fi
}

# Function to start individual PM2 processes
start_individual_pm2_processes() {
    print_status "Starting individual PM2 processes..."
    
    cd "$SCRIPT_DIR"
    
    # Start enhanced PM2 redundancy
    if [ -f "enhanced-pm2-redundancy.cjs" ]; then
        print_status "Starting enhanced PM2 redundancy..."
        pm2 start enhanced-pm2-redundancy.cjs --name "enhanced-pm2-redundancy" --interpreter node --cwd "$WORKSPACE_DIR"
    fi
    
    # Start enhanced GitHub Actions redundancy
    if [ -f "enhanced-github-actions-redundancy.cjs" ]; then
        print_status "Starting enhanced GitHub Actions redundancy..."
        pm2 start enhanced-github-actions-redundancy.cjs --name "enhanced-github-actions-redundancy" --interpreter node --cwd "$WORKSPACE_DIR"
    fi
    
    # Start enhanced Netlify Functions redundancy
    if [ -f "enhanced-netlify-functions-redundancy.cjs" ]; then
        print_status "Starting enhanced Netlify Functions redundancy..."
        pm2 start enhanced-netlify-functions-redundancy.cjs --name "enhanced-netlify-functions-redundancy" --interpreter node --cwd "$WORKSPACE_DIR"
    fi
    
    # Start master orchestrator
    if [ -f "master-redundancy-orchestrator.cjs" ]; then
        print_status "Starting master redundancy orchestrator..."
        pm2 start master-redundancy-orchestrator.cjs --name "master-redundancy-orchestrator" --interpreter node --cwd "$WORKSPACE_DIR"
    fi
    
    print_success "Individual PM2 processes started"
}

# Function to start the master orchestrator
start_master_orchestrator() {
    print_status "Starting master redundancy orchestrator..."
    
    cd "$SCRIPT_DIR"
    
    if [ -f "master-redundancy-orchestrator.cjs" ]; then
        # Start the orchestrator in the background
        nohup node master-redundancy-orchestrator.cjs start > "$LOG_DIR/master-orchestrator.log" 2>&1 &
        local orchestrator_pid=$!
        
        # Wait a moment for it to start
        sleep 3
        
        # Check if it's running
        if kill -0 "$orchestrator_pid" 2>/dev/null; then
            print_success "Master orchestrator started with PID $orchestrator_pid"
            echo "$orchestrator_pid" > "$LOG_DIR/master-orchestrator.pid"
        else
            print_error "Failed to start master orchestrator"
            return 1
        fi
    else
        print_error "Master orchestrator script not found"
        return 1
    fi
}

# Function to verify system status
verify_system_status() {
    print_status "Verifying system status..."
    
    cd "$WORKSPACE_DIR"
    
    # Check PM2 status
    if command_exists pm2; then
        print_status "PM2 Status:"
        pm2 status --no-daemon || true
    fi
    
    # Check if master orchestrator is running
    if [ -f "$LOG_DIR/master-orchestrator.pid" ]; then
        local orchestrator_pid=$(cat "$LOG_DIR/master-orchestrator.pid")
        if kill -0 "$orchestrator_pid" 2>/dev/null; then
            print_success "Master orchestrator is running (PID: $orchestrator_pid)"
        else
            print_warning "Master orchestrator PID file exists but process is not running"
        fi
    fi
    
    # Check log files
    if [ -d "$LOG_DIR" ]; then
        print_status "Recent log files:"
        ls -la "$LOG_DIR"/*.log 2>/dev/null | head -5 || print_warning "No log files found"
    fi
}

# Function to display usage information
show_usage() {
    echo "Enhanced Redundancy Automation System Startup Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  start       Start the entire redundancy system (default)"
    echo "  stop        Stop all redundancy processes"
    echo "  restart     Restart all redundancy processes"
    echo "  status      Show system status"
    echo "  logs        Show recent logs"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start    # Start the system"
    echo "  $0 status   # Check system status"
    echo "  $0 stop     # Stop all processes"
}

# Function to stop all processes
stop_all_processes() {
    print_status "Stopping all redundancy processes..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop PM2 processes
    if command_exists pm2; then
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
        print_success "PM2 processes stopped"
    fi
    
    # Stop master orchestrator
    if [ -f "$LOG_DIR/master-orchestrator.pid" ]; then
        local orchestrator_pid=$(cat "$LOG_DIR/master-orchestrator.pid")
        if kill -0 "$orchestrator_pid" 2>/dev/null; then
            kill "$orchestrator_pid" 2>/dev/null || true
            print_success "Master orchestrator stopped"
        fi
        rm -f "$LOG_DIR/master-orchestrator.pid"
    fi
    
    print_success "All processes stopped"
}

# Function to show logs
show_logs() {
    print_status "Recent logs:"
    
    if [ -d "$LOG_DIR" ]; then
        for log_file in "$LOG_DIR"/*.log; do
            if [ -f "$log_file" ]; then
                echo ""
                echo "=== $(basename "$log_file") ==="
                tail -20 "$log_file" 2>/dev/null || echo "Unable to read log file"
            fi
        done
    else
        print_warning "No log directory found"
    fi
}

# Main execution
main() {
    local action="${1:-start}"
    
    case "$action" in
        start)
            print_status "Starting Enhanced Redundancy Automation System..."
            
            # Pre-flight checks
            check_node_version
            check_pm2
            create_directories
            check_dependencies
            
            # Start the system
            start_pm2_processes
            start_master_orchestrator
            
            # Verify status
            verify_system_status
            
            print_success "Enhanced Redundancy Automation System started successfully!"
            print_status "Use '$0 status' to check system status"
            print_status "Use '$0 logs' to view recent logs"
            ;;
        stop)
            stop_all_processes
            ;;
        restart)
            print_status "Restarting Enhanced Redundancy Automation System..."
            stop_all_processes
            sleep 2
            "$0" start
            ;;
        status)
            verify_system_status
            ;;
        logs)
            show_logs
            ;;
        help|--help|-h)
            show_usage
            ;;
        *)
            print_error "Unknown action: $action"
            show_usage
            exit 1
            ;;
    esac
}

# Trap signals for clean shutdown
trap 'print_status "Received interrupt signal, cleaning up..."; stop_all_processes; exit 0' INT TERM

# Run main function
main "$@"