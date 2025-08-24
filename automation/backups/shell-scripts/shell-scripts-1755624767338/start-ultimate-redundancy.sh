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
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
BACKUP_DIR="$PROJECT_ROOT/automation/backups"
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.ultimate-redundancy.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"
mkdir -p "$BACKUP_DIR"

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
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Check if PM2 is available
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
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if the ultimate redundancy system script exists
check_script() {
    local script_path="$PROJECT_ROOT/automation/ultimate-redundancy-system.cjs"
    if [[ ! -f "$script_path" ]]; then
        log "ERROR" "Ultimate redundancy system script not found: $script_path"
        exit 1
    fi
    log "INFO" "Ultimate redundancy system script found"
}

# Check if the ecosystem file exists
check_ecosystem() {
    if [[ ! -f "$ECOSYSTEM_FILE" ]]; then
        log "ERROR" "PM2 ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    log "INFO" "PM2 ecosystem file found"
}

# Stop any existing ultimate redundancy processes
stop_existing() {
    log "INFO" "Stopping any existing ultimate redundancy processes..."
    
    # Stop processes by name pattern
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            log "INFO" "Stopping process: $process"
            pm2 stop "$process" 2>/dev/null || true
            pm2 delete "$process" 2>/dev/null || true
        fi
    done
    
    log "INFO" "Existing processes stopped"
}

# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting ultimate redundancy system..."
    
    # Start the main system
    if pm2 start "$ECOSYSTEM_FILE"; then
        log "INFO" "Ultimate redundancy system started successfully"
    else
        log "ERROR" "Failed to start ultimate redundancy system"
        exit 1
    fi
    
    # Wait a moment for processes to start
    sleep 3
    
    # Check status
    log "INFO" "Checking system status..."
    pm2 list | grep "ultimate-redundancy" || log "WARN" "No ultimate redundancy processes found in PM2 list"
}

# Verify all processes are running
verify_processes() {
    log "INFO" "Verifying all processes are running..."
    
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    local all_running=true
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            log "INFO" "✓ Process $process is running"
        else
            log "ERROR" "✗ Process $process is not running"
            all_running=false
        fi
    done
    
    if [[ "$all_running" == true ]]; then
        log "INFO" "All ultimate redundancy processes are running successfully"
    else
        log "ERROR" "Some processes failed to start"
        exit 1
    fi
}

# Show system information
show_info() {
    log "INFO" "Ultimate Redundancy System Information:"
    log "INFO" "======================================"
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Script Directory: $SCRIPT_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    log "INFO" "Backup Directory: $BACKUP_DIR"
    log "INFO" "Ecosystem File: $ECOSYSTEM_FILE"
    log "INFO" "PM2 Status:"
    pm2 list | grep "ultimate-redundancy" || log "WARN" "No ultimate redundancy processes found"
    log "INFO" "======================================"
}

# Main execution
main() {
    log "INFO" "Starting Ultimate Redundancy System..."
    log "INFO" "======================================"
    
    # Change to project root
    cd "$PROJECT_ROOT"
    
    # Run checks
    check_pm2
    check_node
    check_script
    check_ecosystem
    
    # Stop existing processes
    stop_existing
    
    # Start the system
    start_system
    
    # Verify processes
    verify_processes
    
    # Show information
    show_info
    
    log "INFO" "Ultimate Redundancy System startup completed successfully!"
    log "INFO" "======================================"
    
    # Show helpful commands
    echo
    echo -e "${BLUE}Helpful Commands:${NC}"
    echo -e "  View logs: ${GREEN}pm2 logs ultimate-redundancy-system${NC}"
    echo -e "  Monitor status: ${GREEN}pm2 monit${NC}"
    echo -e "  Stop system: ${GREEN}pm2 stop ecosystem.ultimate-redundancy.cjs${NC}"
    echo -e "  Restart system: ${GREEN}pm2 restart ecosystem.ultimate-redundancy.cjs${NC}"
    echo -e "  View all processes: ${GREEN}pm2 list${NC}"
    echo
}

# Handle script interruption
trap 'log "WARN" "Script interrupted"; exit 1' INT TERM

# Run main function
main "$@"