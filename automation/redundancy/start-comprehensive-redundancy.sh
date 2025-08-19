#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script starts the comprehensive redundancy system that covers all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$ROOT_DIR/automation/logs"
PID_FILE="$SCRIPT_DIR/comprehensive-redundancy.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy.log"

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

# Function to check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            print_warning "PID file exists but process is not running, cleaning up..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to create necessary directories
create_directories() {
    print_info "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$ROOT_DIR/netlify/functions/backup"
    mkdir -p "$ROOT_DIR/.github/workflows/backup"
    
    print_success "Directories created"
}

# Function to check dependencies
check_dependencies() {
    print_info "Checking dependencies..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local required_version="20.18.1"
    
    if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]; then
        print_warning "Node.js version $node_version is lower than recommended $required_version"
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed, installing..."
        npm install -g pm2
    fi
    
    # Check if node-cron is available
    if ! node -e "require('node-cron')" 2>/dev/null; then
        print_warning "node-cron not found, installing..."
        cd "$ROOT_DIR"
        npm install node-cron
    fi
    
    print_success "Dependencies checked"
}

# Function to start the comprehensive redundancy system
start_system() {
    print_info "Starting comprehensive redundancy system..."
    
    cd "$ROOT_DIR"
    
    # Start the comprehensive redundancy manager
    nohup node automation/redundancy/comprehensive-redundancy-manager.cjs > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        print_success "Comprehensive redundancy system started with PID $pid"
        print_info "Logs are being written to: $LOG_FILE"
        print_info "PID file: $PID_FILE"
    else
        print_error "Failed to start comprehensive redundancy system"
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Function to show status
show_status() {
    if check_running; then
        local pid=$(cat "$PID_FILE")
        print_success "Comprehensive redundancy system is running (PID: $pid)"
        
        # Show recent logs
        if [ -f "$LOG_FILE" ]; then
            print_info "Recent logs:"
            tail -n 20 "$LOG_FILE" | sed 's/^/  /'
        fi
        
        # Show system status
        print_info "System status:"
        cd "$ROOT_DIR"
        node automation/redundancy/comprehensive-redundancy-manager.cjs status 2>/dev/null || echo "  Status check not available"
        
    else
        print_warning "Comprehensive redundancy system is not running"
    fi
}

# Function to stop the system
stop_system() {
    if check_running; then
        local pid=$(cat "$PID_FILE")
        print_info "Stopping comprehensive redundancy system (PID: $pid)..."
        
        # Send SIGTERM
        kill -TERM "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            print_warning "Force killing process..."
            kill -KILL "$pid"
        fi
        
        rm -f "$PID_FILE"
        print_success "Comprehensive redundancy system stopped"
        
    else
        print_warning "Comprehensive redundancy system is not running"
    fi
}

# Function to restart the system
restart_system() {
    print_info "Restarting comprehensive redundancy system..."
    stop_system
    sleep 2
    start_system
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the comprehensive redundancy system"
    echo "  stop      Stop the comprehensive redundancy system"
    echo "  restart   Restart the comprehensive redundancy system"
    echo "  status    Show system status and recent logs"
    echo "  help      Show this help message"
    echo ""
    echo "The comprehensive redundancy system covers:"
    echo "  - PM2 automations (auto-sync, cron processes)"
    echo "  - GitHub Actions workflows (marketing-sync, sync-health)"
    echo "  - Netlify Functions (all automation functions)"
    echo "  - Cron scripts (git-sync-cron)"
    echo "  - Node scripts (marketing-sync, pm2-auto-sync)"
    echo ""
    echo "Each automation gets a backup version with enhanced error handling"
    echo "and automatic recovery capabilities."
}

# Main script logic
main() {
    # Ensure we're in the right directory
    cd "$SCRIPT_DIR"
    
    # Create necessary directories
    create_directories
    
    # Check dependencies
    check_dependencies
    
    case "${1:-start}" in
        start)
            if check_running; then
                print_warning "Comprehensive redundancy system is already running"
                show_status
            else
                start_system
            fi
            ;;
        stop)
            stop_system
            ;;
        restart)
            restart_system
            ;;
        status)
            show_status
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"