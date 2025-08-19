#!/bin/bash

# Comprehensive Redundancy Automation V2 Startup Script
# This script provides redundancy for all PM2 automations, GitHub Actions automations, and Netlify functions automations

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/comprehensive-redundancy-v2.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy-v2.log"

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
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%d-%m %H:%M:%S')] WARNING:${NC} $1"
}

print_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_status "Node.js version: $NODE_VERSION"
}

# Function to check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    PM2_VERSION=$(pm2 --version)
    print_status "PM2 version: $PM2_VERSION"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$WORKSPACE_DIR/automation/backups"
    
    print_success "Directories created"
}

# Function to backup existing configurations
backup_configurations() {
    print_status "Backing up existing configurations..."
    
    BACKUP_DIR="$WORKSPACE_DIR/automation/backups/$(date '+%Y%m%d_%H%M%S')"
    mkdir -p "$BACKUP_DIR"
    
    # Backup PM2 ecosystem files
    for file in ecosystem*.cjs; do
        if [ -f "$file" ]; then
            cp "$file" "$BACKUP_DIR/"
            print_status "Backed up: $file"
        fi
    done
    
    # Backup GitHub Actions workflows
    if [ -d ".github/workflows" ]; then
        cp -r ".github/workflows" "$BACKUP_DIR/"
        print_status "Backed up: .github/workflows"
    fi
    
    # Backup Netlify functions
    if [ -d "netlify/functions" ]; then
        cp -r "netlify/functions" "$BACKUP_DIR/"
        print_status "Backed up: netlify/functions"
    fi
    
    print_success "Configurations backed up to: $BACKUP_DIR"
}

# Function to start the redundancy system
start_redundancy() {
    print_status "Starting Comprehensive Redundancy Automation V2..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if already running
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_warning "Redundancy system is already running (PID: $PID)"
            return 0
        else
            print_warning "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the redundancy system
    nohup node automation/comprehensive-redundancy-automation-v2.cjs start > "$LOG_FILE" 2>&1 &
    REDUNDANCY_PID=$!
    
    # Save PID
    echo "$REDUNDANCY_PID" > "$PID_FILE"
    
    # Wait a moment for startup
    sleep 3
    
    # Check if started successfully
    if ps -p "$REDUNDANCY_PID" > /dev/null 2>&1; then
        print_success "Redundancy system started successfully (PID: $REDUNDANCY_PID)"
        print_status "Log file: $LOG_FILE"
        print_status "PID file: $PID_FILE"
    else
        print_error "Failed to start redundancy system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the redundancy system
stop_redundancy() {
    print_status "Stopping Comprehensive Redundancy Automation V2..."
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_status "Stopping process $PID..."
            kill "$PID"
            
            # Wait for graceful shutdown
            for i in {1..10}; do
                if ! ps -p "$PID" > /dev/null 2>&1; then
                    break
                fi
                sleep 1
            done
            
            # Force kill if still running
            if ps -p "$PID" > /dev/null 2>&1; then
                print_warning "Force killing process $PID..."
                kill -9 "$PID"
            fi
            
            print_success "Redundancy system stopped"
        else
            print_warning "Process $PID is not running"
        fi
        
        rm -f "$PID_FILE"
    else
        print_warning "No PID file found"
    fi
}

# Function to restart the redundancy system
restart_redundancy() {
    print_status "Restarting Comprehensive Redundancy Automation V2..."
    stop_redundancy
    sleep 2
    start_redundancy
}

# Function to check status
check_status() {
    print_status "Checking Comprehensive Redundancy Automation V2 status..."
    
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            print_success "Redundancy system is running (PID: $PID)"
            
            # Check health
            cd "$WORKSPACE_DIR"
            node automation/comprehensive-redundancy-automation-v2.cjs health
            
            # Show recent logs
            if [ -f "$LOG_FILE" ]; then
                print_status "Recent logs (last 10 lines):"
                tail -n 10 "$LOG_FILE"
            fi
        else
            print_error "Redundancy system is not running (stale PID file)"
            rm -f "$PID_FILE"
        fi
    else
        print_warning "Redundancy system is not running (no PID file)"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        print_status "Showing logs from: $LOG_FILE"
        tail -f "$LOG_FILE"
    else
        print_error "Log file not found: $LOG_FILE"
    fi
}

# Function to run health check
run_health_check() {
    print_status "Running comprehensive health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check PM2 status
    print_status "Checking PM2 status..."
    pm2 status
    
    # Check GitHub Actions workflows
    print_status "Checking GitHub Actions workflows..."
    if [ -d ".github/workflows" ]; then
        ls -la ".github/workflows/"
    else
        print_warning ".github/workflows directory not found"
    fi
    
    # Check Netlify functions
    print_status "Checking Netlify functions..."
    if [ -d "netlify/functions" ]; then
        ls -la "netlify/functions/"
    else
        print_warning "netlify/functions directory not found"
    fi
    
    # Run redundancy health check
    print_status "Running redundancy system health check..."
    node automation/comprehensive-redundancy-automation-v2.cjs health
    
    print_success "Health check completed"
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy Automation V2 Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the redundancy system"
    echo "  stop      Stop the redundancy system"
    echo "  restart   Restart the redundancy system"
    echo "  status    Check system status"
    echo "  logs      Show live logs"
    echo "  health    Run comprehensive health check"
    echo "  backup    Backup existing configurations"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
}

# Main script logic
main() {
    print_status "Comprehensive Redundancy Automation V2 Management Script"
    print_status "Workspace: $WORKSPACE_DIR"
    
    # Check prerequisites
    check_node
    check_pm2
    create_directories
    
    # Parse command
    case "${1:-help}" in
        start)
            backup_configurations
            start_redundancy
            ;;
        stop)
            stop_redundancy
            ;;
        restart)
            restart_redundancy
            ;;
        status)
            check_status
            ;;
        logs)
            show_logs
            ;;
        health)
            run_health_check
            ;;
        backup)
            backup_configurations
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