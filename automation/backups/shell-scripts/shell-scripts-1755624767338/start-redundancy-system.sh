#!/bin/bash

# Redundancy Automation System Startup Script
# This script starts all redundancy automation components

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PM2_ECOSYSTEM="$PROJECT_ROOT/ecosystem.redundancy.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/redundancy-startup.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "INFO" "PM2 is available"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "INFO" "npm version: $npm_version"
}

# Check project dependencies
check_dependencies() {
    log "INFO" "Checking project dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        log "ERROR" "package.json not found in project root"
        exit 1
    fi
    
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "WARN" "node_modules not found, installing dependencies..."
        cd "$PROJECT_ROOT"
        npm install
        if [ $? -ne 0 ]; then
            log "ERROR" "Failed to install dependencies"
            exit 1
        fi
        log "INFO" "Dependencies installed successfully"
    else
        log "INFO" "Dependencies are available"
    fi
}

# Check redundancy scripts
check_scripts() {
    log "INFO" "Checking redundancy automation scripts..."
    
    local required_scripts=(
        "redundancy-automation-system.cjs"
        "redundancy-health-monitor.cjs"
        "redundancy-git-sync.cjs"
        "redundancy-build-monitor.cjs"
    )
    
    local missing_scripts=()
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$SCRIPT_DIR/$script" ]; then
            missing_scripts+=("$script")
        fi
    done
    
    if [ ${#missing_scripts[@]} -gt 0 ]; then
        log "ERROR" "Missing required scripts: ${missing_scripts[*]}"
        exit 1
    fi
    
    log "INFO" "All required scripts are available"
}

# Stop existing PM2 processes
stop_existing_processes() {
    log "INFO" "Stopping existing PM2 processes..."
    
    # Stop redundancy processes if they exist
    local redundancy_processes=(
        "redundancy-automation-system"
        "redundancy-health-monitor"
        "redundancy-git-sync"
        "redundancy-build-monitor"
    )
    
    for process in "${redundancy_processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            log "INFO" "Stopping existing process: $process"
            pm2 stop "$process" 2>/dev/null || true
            pm2 delete "$process" 2>/dev/null || true
        fi
    done
    
    log "INFO" "Existing processes stopped"
}

# Start redundancy system
start_redundancy_system() {
    log "INFO" "Starting redundancy automation system..."
    
    if [ ! -f "$PM2_ECOSYSTEM" ]; then
        log "ERROR" "PM2 ecosystem file not found: $PM2_ECOSYSTEM"
        exit 1
    fi
    
    # Start all processes
    cd "$PROJECT_ROOT"
    pm2 start "$PM2_ECOSYSTEM" --update-env
    
    if [ $? -eq 0 ]; then
        log "INFO" "Redundancy system started successfully"
    else
        log "ERROR" "Failed to start redundancy system"
        exit 1
    fi
}

# Verify system status
verify_system() {
    log "INFO" "Verifying system status..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    local status_output=$(pm2 status)
    log "DEBUG" "PM2 Status:\n$status_output"
    
    # Check if all processes are running
    local redundancy_processes=(
        "redundancy-automation-system"
        "redundancy-health-monitor"
        "redundancy-git-sync"
        "redundancy-build-monitor"
    )
    
    local running_count=0
    for process in "${redundancy_processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            running_count=$((running_count + 1))
            log "INFO" "Process $process is running"
        else
            log "WARN" "Process $process is not running"
        fi
    done
    
    if [ $running_count -eq ${#redundancy_processes[@]} ]; then
        log "INFO" "All redundancy processes are running successfully"
    else
        log "WARN" "Some processes may not be running properly"
    fi
}

# Setup PM2 log rotation
setup_log_rotation() {
    log "INFO" "Setting up PM2 log rotation..."
    
    # Install PM2 logrotate if not already installed
    pm2 install pm2-logrotate 2>/dev/null || true
    
    # Configure log rotation
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    log "INFO" "PM2 log rotation configured"
}

# Save PM2 configuration
save_pm2_config() {
    log "INFO" "Saving PM2 configuration..."
    
    pm2 save
    
    if [ $? -eq 0 ]; then
        log "INFO" "PM2 configuration saved"
    else
        log "WARN" "Failed to save PM2 configuration"
    fi
}

# Display system information
display_system_info() {
    log "INFO" "=== Redundancy Automation System Information ==="
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Scripts Directory: $SCRIPT_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    log "INFO" "PM2 Ecosystem: $PM2_ECOSYSTEM"
    log "INFO" "Node.js: $(node --version)"
    log "INFO" "npm: $(npm --version)"
    log "INFO" "PM2: $(pm2 --version)"
    log "INFO" "================================================"
}

# Main execution
main() {
    log "INFO" "Starting redundancy automation system initialization..."
    
    # Display system information
    display_system_info
    
    # Pre-flight checks
    check_pm2
    check_node
    check_npm
    check_dependencies
    check_scripts
    
    # Setup and start
    stop_existing_processes
    setup_log_rotation
    start_redundancy_system
    verify_system
    save_pm2_config
    
    log "INFO" "Redundancy automation system initialization completed successfully!"
    log "INFO" "Use 'pm2 status' to check system status"
    log "INFO" "Use 'pm2 logs' to view system logs"
    log "INFO" "Use 'pm2 restart ecosystem.redundancy.cjs' to restart the system"
}

# Handle script arguments
case "${1:-}" in
    "stop")
        log "INFO" "Stopping redundancy automation system..."
        stop_existing_processes
        log "INFO" "System stopped"
        ;;
    "restart")
        log "INFO" "Restarting redundancy automation system..."
        stop_existing_processes
        sleep 2
        start_redundancy_system
        verify_system
        log "INFO" "System restarted"
        ;;
    "status")
        log "INFO" "Checking system status..."
        pm2 status
        ;;
    "logs")
        log "INFO" "Showing system logs..."
        pm2 logs --lines 50
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [command]"
        echo ""
        echo "Commands:"
        echo "  start   - Start the redundancy automation system (default)"
        echo "  stop    - Stop the redundancy automation system"
        echo "  restart - Restart the redundancy automation system"
        echo "  status  - Show system status"
        echo "  logs    - Show system logs"
        echo "  help    - Show this help message"
        echo ""
        echo "Examples:"
        echo "  $0              # Start the system"
        echo "  $0 stop         # Stop the system"
        echo "  $0 restart      # Restart the system"
        echo "  $0 status       # Check system status"
        ;;
    *)
        main
        ;;
esac