#!/bin/bash

# Ultimate Redundancy System Startup Script
# This script starts the comprehensive redundancy automation system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/automation/logs"
PM2_ECOSYSTEM="ecosystem-ultimate-redundancy.pm2.cjs"

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

# Function to check system requirements
check_requirements() {
    print_status "Checking system requirements..."
    
    # Check if Node.js is installed
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js 20+ first."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        print_error "Node.js version 20+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    # Check if npm is installed
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command_exists pm2; then
        print_warning "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check if git is installed
    if ! command_exists git; then
        print_error "Git is not installed. Please install Git first."
        exit 1
    fi
    
    print_success "System requirements check passed"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    # Create logs directory
    mkdir -p "$LOG_DIR"
    
    # Create automation logs directory
    mkdir -p "$SCRIPT_DIR/automation/logs"
    
    print_success "Directories created successfully"
}

# Function to install dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if [ -f "package.json" ]; then
        npm install
        print_success "Dependencies installed successfully"
    else
        print_warning "No package.json found, skipping dependency installation"
    fi
}

# Function to check if PM2 ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$PM2_ECOSYSTEM" ]; then
        print_error "PM2 ecosystem file $PM2_ECOSYSTEM not found!"
        exit 1
    fi
    
    print_success "PM2 ecosystem file found: $PM2_ECOSYSTEM"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    
    # Delete all processes
    pm2 delete all 2>/dev/null || true
    
    # Save PM2 configuration
    pm2 save 2>/dev/null || true
    
    print_success "Existing PM2 processes stopped and cleaned up"
}

# Function to start the ultimate redundancy system
start_ultimate_redundancy() {
    print_status "Starting Ultimate Redundancy System..."
    
    # Start the ecosystem
    pm2 start "$PM2_ECOSYSTEM" --update-env
    
    # Save PM2 configuration
    pm2 save
    
    # Set up PM2 startup script
    pm2 startup 2>/dev/null || true
    
    print_success "Ultimate Redundancy System started successfully"
}

# Function to verify system status
verify_system_status() {
    print_status "Verifying system status..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    print_status "PM2 Process Status:"
    pm2 status
    
    # Check if critical processes are running
    CRITICAL_PROCESSES=(
        "ultimate-redundancy-monitor"
        "ultimate-redundancy-orchestrator"
        "ultimate-build-guardian"
        "ultimate-git-sync"
        "ultimate-netlify-healer"
    )
    
    for process in "${CRITICAL_PROCESSES[@]}"; do
        if pm2 describe "$process" >/dev/null 2>&1; then
            print_success "Process $process is running"
        else
            print_warning "Process $process is not running"
        fi
    done
    
    print_success "System status verification completed"
}

# Function to display system information
display_system_info() {
    print_status "Ultimate Redundancy System Information:"
    echo "================================================"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "PM2 Ecosystem: $PM2_ECOSYSTEM"
    echo "Node.js Version: $(node --version)"
    echo "npm Version: $(npm --version)"
    echo "PM2 Version: $(pm2 --version)"
    echo "Git Version: $(git --version)"
    echo "================================================"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -h, --help          Show this help message"
    echo "  -s, --status        Show system status"
    echo "  -r, --restart       Restart the system"
    echo "  -l, --logs          Show system logs"
    echo "  -c, --clean         Clean up and restart"
    echo ""
    echo "Examples:"
    echo "  $0                  Start the system"
    echo "  $0 --status         Show system status"
    echo "  $0 --restart        Restart the system"
    echo "  $0 --logs           Show system logs"
}

# Function to show system status
show_system_status() {
    print_status "Ultimate Redundancy System Status:"
    pm2 status
    
    print_status "Recent Logs:"
    pm2 logs --lines 20
}

# Function to show system logs
show_system_logs() {
    print_status "Showing system logs..."
    
    if [ -d "$LOG_DIR" ]; then
        echo "=== Recent Log Files ==="
        find "$LOG_DIR" -name "*.log" -type f -exec ls -la {} \;
        
        echo ""
        echo "=== Ultimate Redundancy System Log ==="
        if [ -f "$LOG_DIR/ultimate-redundancy-system.log" ]; then
            tail -50 "$LOG_DIR/ultimate-redundancy-system.log"
        else
            print_warning "No ultimate redundancy system log found"
        fi
    else
        print_warning "Log directory not found"
    fi
}

# Function to restart the system
restart_system() {
    print_status "Restarting Ultimate Redundancy System..."
    
    # Stop existing processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the system again
    start_ultimate_redundancy
    
    # Verify status
    verify_system_status
}

# Function to clean up and restart
clean_and_restart() {
    print_status "Performing clean restart..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Clear PM2 logs
    pm2 flush 2>/dev/null || true
    
    # Clear local logs
    if [ -d "$LOG_DIR" ]; then
        rm -rf "$LOG_DIR"/*
        print_status "Local logs cleared"
    fi
    
    # Start fresh
    start_ultimate_redundancy
    verify_system_status
}

# Main execution
main() {
    # Parse command line arguments
    case "${1:-}" in
        -h|--help)
            show_usage
            exit 0
            ;;
        -s|--status)
            show_system_status
            exit 0
            ;;
        -l|--logs)
            show_system_logs
            exit 0
            ;;
        -r|--restart)
            restart_system
            exit 0
            ;;
        -c|--clean)
            clean_and_restart
            exit 0
            ;;
        "")
            # No arguments, start the system
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
    
    # Display banner
    echo "================================================"
    echo "    Ultimate Redundancy System Startup"
    echo "================================================"
    echo ""
    
    # Display system information
    display_system_info
    echo ""
    
    # Check requirements
    check_requirements
    echo ""
    
    # Create directories
    create_directories
    echo ""
    
    # Install dependencies
    install_dependencies
    echo ""
    
    # Check ecosystem file
    check_ecosystem_file
    echo ""
    
    # Stop existing processes
    stop_existing_processes
    echo ""
    
    # Start the system
    start_ultimate_redundancy
    echo ""
    
    # Verify system status
    verify_system_status
    echo ""
    
    # Display final status
    print_success "Ultimate Redundancy System is now running!"
    echo ""
    echo "Useful commands:"
    echo "  $0 --status     - Show system status"
    echo "  $0 --logs       - Show system logs"
    echo "  $0 --restart    - Restart the system"
    echo "  pm2 status      - Show PM2 status"
    echo "  pm2 logs        - Show PM2 logs"
    echo ""
    echo "Log files are located in: $LOG_DIR"
    echo "================================================"
}

# Run main function with all arguments
main "$@"