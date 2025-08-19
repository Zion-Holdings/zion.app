#!/bin/bash

# Enhanced Redundancy System Startup Script
# This script starts the comprehensive redundancy automation system
# Created by Enhanced Master Redundancy Orchestrator

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/enhanced-master-redundancy-orchestrator.cjs"

# Function to print colored output
print_status() {
    local level=$1
    local message=$2
    case $level in
        "INFO")
            echo -e "${BLUE}[INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[ERROR]${NC} $message"
            ;;
        *)
            echo "[$level] $message"
            ;;
    esac
}

# Function to check prerequisites
check_prerequisites() {
    print_status "INFO" "Checking prerequisites..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        print_status "ERROR" "Node.js is not installed. Please install Node.js 20.18.1 or higher."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    REQUIRED_VERSION="20.18.1"
    
    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
        print_status "WARNING" "Node.js version $NODE_VERSION detected. Version $REQUIRED_VERSION or higher is recommended."
    else
        print_status "SUCCESS" "Node.js version $NODE_VERSION is compatible."
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        print_status "ERROR" "npm is not installed. Please install npm."
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        print_status "WARNING" "PM2 is not installed. Installing PM2..."
        npm install -g pm2
        if [ $? -eq 0 ]; then
            print_status "SUCCESS" "PM2 installed successfully."
        else
            print_status "ERROR" "Failed to install PM2."
            exit 1
        fi
    else
        print_status "SUCCESS" "PM2 is already installed."
    fi
    
    # Check if required npm packages are installed
    if [ ! -f "$WORKSPACE_DIR/node_modules/node-cron/package.json" ]; then
        print_status "WARNING" "node-cron package not found. Installing dependencies..."
        cd "$WORKSPACE_DIR"
        npm install node-cron
        if [ $? -eq 0 ]; then
            print_status "SUCCESS" "Dependencies installed successfully."
        else
            print_status "ERROR" "Failed to install dependencies."
            exit 1
        fi
    fi
    
    print_status "SUCCESS" "All prerequisites are satisfied."
}

# Function to create necessary directories
create_directories() {
    print_status "INFO" "Creating necessary directories..."
    
    # Create logs directory
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        print_status "SUCCESS" "Created logs directory: $LOG_DIR"
    else
        print_status "INFO" "Logs directory already exists: $LOG_DIR"
    fi
    
    # Create automation logs directory
    AUTOMATION_LOG_DIR="$WORKSPACE_DIR/automation/logs"
    if [ ! -d "$AUTOMATION_LOG_DIR" ]; then
        mkdir -p "$AUTOMATION_LOG_DIR"
        print_status "SUCCESS" "Created automation logs directory: $AUTOMATION_LOG_DIR"
    fi
    
    print_status "SUCCESS" "All necessary directories are ready."
}

# Function to check if system is already running
check_system_status() {
    print_status "INFO" "Checking system status..."
    
    # Check if orchestrator is already running
    if pgrep -f "enhanced-master-redundancy-orchestrator" > /dev/null; then
        print_status "WARNING" "Enhanced redundancy system appears to be already running."
        read -p "Do you want to continue anyway? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "INFO" "Startup cancelled by user."
            exit 0
        fi
    fi
    
    # Check PM2 processes
    if command -v pm2 &> /dev/null; then
        PM2_PROCESSES=$(pm2 list | grep -c "enhanced-backup" || true)
        if [ "$PM2_PROCESSES" -gt 0 ]; then
            print_status "WARNING" "Found $PM2_PROCESSES existing enhanced backup PM2 processes."
            read -p "Do you want to stop them and start fresh? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                print_status "INFO" "Stopping existing PM2 processes..."
                pm2 stop all 2>/dev/null || true
                pm2 delete all 2>/dev/null || true
                print_status "SUCCESS" "Existing PM2 processes stopped."
            fi
        fi
    fi
    
    print_status "SUCCESS" "System status check completed."
}

# Function to start the enhanced redundancy system
start_system() {
    print_status "INFO" "Starting enhanced redundancy system..."
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the enhanced master orchestrator
    if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
        print_status "INFO" "Starting enhanced master redundancy orchestrator..."
        
        # Start the orchestrator in the background
        nohup node "$ORCHESTRATOR_SCRIPT" start > "$LOG_DIR/enhanced-orchestrator-startup.log" 2>&1 &
        ORCHESTRATOR_PID=$!
        
        # Wait a moment for startup
        sleep 5
        
        # Check if orchestrator started successfully
        if kill -0 $ORCHESTRATOR_PID 2>/dev/null; then
            print_status "SUCCESS" "Enhanced master redundancy orchestrator started with PID: $ORCHESTRATOR_PID"
            
            # Save PID to file for later use
            echo $ORCHESTRATOR_PID > "$LOG_DIR/enhanced-orchestrator.pid"
            
            # Wait a bit more for full initialization
            sleep 10
            
            # Check system status
            print_status "INFO" "Checking system status..."
            if node "$ORCHESTRATOR_SCRIPT" status > /dev/null 2>&1; then
                print_status "SUCCESS" "Enhanced redundancy system is running successfully."
                
                # Display status summary
                print_status "INFO" "System status summary:"
                node "$ORCHESTRATOR_SCRIPT" status | jq '.' 2>/dev/null || node "$ORCHESTRATOR_SCRIPT" status
                
            else
                print_status "WARNING" "System status check failed, but orchestrator is running."
            fi
            
        else
            print_status "ERROR" "Failed to start enhanced master redundancy orchestrator."
            exit 1
        fi
        
    else
        print_status "ERROR" "Enhanced master redundancy orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
}

# Function to display startup information
display_startup_info() {
    print_status "INFO" "Enhanced redundancy system startup completed."
    print_status "INFO" "System components:"
    print_status "INFO" "  - Enhanced PM2 Redundancy Manager"
    print_status "INFO" "  - Enhanced GitHub Actions Redundancy Manager"
    print_status "INFO" "  - Enhanced Netlify Functions Redundancy Manager"
    print_status "INFO" "  - Enhanced Master Redundancy Orchestrator"
    
    print_status "INFO" "Log files location: $LOG_DIR"
    print_status "INFO" "Orchestrator PID file: $LOG_DIR/enhanced-orchestrator.pid"
    
    print_status "INFO" "Useful commands:"
    print_status "INFO" "  - Check status: node $ORCHESTRATOR_SCRIPT status"
    print_status "INFO" "  - Generate report: node $ORCHESTRATOR_SCRIPT report"
    print_status "INFO" "  - Stop system: $SCRIPT_DIR/stop-enhanced-redundancy-system.sh"
    
    print_status "SUCCESS" "Enhanced redundancy system is now operational!"
}

# Function to handle startup errors
handle_startup_error() {
    local error_code=$1
    local error_message=$2
    
    print_status "ERROR" "Startup failed: $error_message"
    print_status "ERROR" "Error code: $error_code"
    
    # Cleanup any partially started processes
    if [ -f "$LOG_DIR/enhanced-orchestrator.pid" ]; then
        local pid=$(cat "$LOG_DIR/enhanced-orchestrator.pid")
        if kill -0 $pid 2>/dev/null; then
            print_status "INFO" "Cleaning up orchestrator process (PID: $pid)..."
            kill $pid 2>/dev/null || true
        fi
        rm -f "$LOG_DIR/enhanced-orchestrator.pid"
    fi
    
    # Stop any PM2 processes that might have been started
    if command -v pm2 &> /dev/null; then
        print_status "INFO" "Cleaning up PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    print_status "ERROR" "Startup cleanup completed. Please check logs and try again."
    exit $error_code
}

# Main execution
main() {
    print_status "INFO" "Starting Enhanced Redundancy System..."
    print_status "INFO" "Script directory: $SCRIPT_DIR"
    print_status "INFO" "Workspace directory: $WORKSPACE_DIR"
    print_status "INFO" "Log directory: $LOG_DIR"
    
    # Set up error handling
    trap 'handle_startup_error $? "Unexpected error occurred"' ERR
    
    # Execute startup steps
    check_prerequisites
    create_directories
    check_system_status
    start_system
    display_startup_info
    
    print_status "SUCCESS" "Enhanced redundancy system startup completed successfully!"
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    # Script is being executed
    main "$@"
else
    # Script is being sourced
    print_status "INFO" "Enhanced redundancy startup script sourced. Use main function to start the system."
fi