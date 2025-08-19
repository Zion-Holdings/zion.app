#!/bin/bash

# Enhanced Redundancy System Startup Script
# This script starts the complete redundancy automation system

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
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PM2_CONFIG="$WORKSPACE_DIR/ecosystem.enhanced-redundancy.cjs"

# Ensure we're in the right directory
cd "$WORKSPACE_DIR"

echo -e "${BLUE}🚀 Enhanced Redundancy System Startup${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""

# Function to log messages
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] $1${NC}"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING: $1${NC}"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2)
    REQUIRED_VERSION="20.0.0"
    
    if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
        warn "Node.js version $NODE_VERSION detected. Version $REQUIRED_VERSION or higher is recommended."
    else
        log "Node.js version $NODE_VERSION ✓"
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Please install it with: npm install -g pm2"
        exit 1
    fi
    
    log "PM2 ✓"
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        error "npm is not installed or not in PATH"
        exit 1
    fi
    
    log "npm ✓"
    
    # Check if git is available
    if ! command -v git &> /dev/null; then
        warn "git is not installed or not in PATH. Some features may not work."
    else
        log "git ✓"
    fi
}

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    # Create logs directory
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "Created logs directory: $LOG_DIR"
    fi
    
    # Create automation logs directory
    if [ ! -d "$WORKSPACE_DIR/automation/logs" ]; then
        mkdir -p "$WORKSPACE_DIR/automation/logs"
        log "Created automation logs directory"
    fi
}

# Install dependencies if needed
install_dependencies() {
    log "Checking dependencies..."
    
    if [ -f "package.json" ]; then
        if [ ! -d "node_modules" ]; then
            log "Installing npm dependencies..."
            npm install
        else
            log "Dependencies already installed ✓"
        fi
    else
        warn "No package.json found, skipping dependency installation"
    fi
}

# Check system status
check_system_status() {
    log "Checking current system status..."
    
    # Check if PM2 is running
    if pm2 ping &> /dev/null; then
        log "PM2 daemon is running ✓"
        
        # Check running processes
        RUNNING_PROCESSES=$(pm2 list --no-daemon | grep -c "online" || echo "0")
        log "Currently running processes: $RUNNING_PROCESSES"
        
        if [ "$RUNNING_PROCESSES" -gt 0 ]; then
            warn "Some processes are already running. Consider stopping them first."
            echo ""
            echo "Current PM2 processes:"
            pm2 list --no-daemon
            echo ""
        fi
    else
        log "PM2 daemon is not running"
    fi
}

# Start the enhanced redundancy system
start_redundancy_system() {
    log "Starting Enhanced Redundancy System..."
    
    # Check if ecosystem file exists
    if [ ! -f "$PM2_CONFIG" ]; then
        error "Ecosystem file not found: $PM2_CONFIG"
        exit 1
    fi
    
    # Start the system
    log "Starting PM2 processes from: $PM2_CONFIG"
    
    # Create logs directory first
    mkdir -p "$LOG_DIR"
    
    # Start the ecosystem
    pm2 start "$PM2_CONFIG" --update-env
    
    if [ $? -eq 0 ]; then
        log "Enhanced Redundancy System started successfully! ✓"
    else
        error "Failed to start Enhanced Redundancy System"
        exit 1
    fi
}

# Show system status
show_status() {
    log "System Status:"
    echo ""
    
    # Show PM2 status
    pm2 list --no-daemon
    
    echo ""
    log "Log files are located in: $LOG_DIR"
    echo ""
    
    # Show recent logs
    log "Recent logs (last 10 lines):"
    echo "----------------------------------------"
    
    # Check if any log files exist
    if [ -d "$LOG_DIR" ] && [ "$(ls -A "$LOG_DIR" 2>/dev/null)" ]; then
        # Show the most recent log file
        RECENT_LOG=$(find "$LOG_DIR" -name "*.log" -type f -printf '%T@ %p\n' | sort -n | tail -1 | cut -d' ' -f2-)
        if [ -n "$RECENT_LOG" ] && [ -f "$RECENT_LOG" ]; then
            tail -10 "$RECENT_LOG"
        fi
    else
        echo "No log files found yet."
    fi
}

# Show usage information
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  start       Start the enhanced redundancy system (default)"
    echo "  stop        Stop all PM2 processes"
    echo "  restart     Restart the enhanced redundancy system"
    echo "  status      Show system status"
    echo "  logs        Show recent logs"
    echo "  health      Perform health check"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the system"
    echo "  $0 status         # Check status"
    echo "  $0 logs           # View logs"
    echo "  $0 stop           # Stop all processes"
}

# Stop all processes
stop_system() {
    log "Stopping all PM2 processes..."
    pm2 kill
    log "All processes stopped ✓"
}

# Restart system
restart_system() {
    log "Restarting Enhanced Redundancy System..."
    stop_system
    sleep 2
    start_redundancy_system
}

# Show logs
show_logs() {
    log "Recent logs:"
    echo ""
    
    if [ -d "$LOG_DIR" ] && [ "$(ls -A "$LOG_DIR" 2>/dev/null)" ]; then
        # Show all log files with their sizes
        echo "Available log files:"
        echo "----------------------------------------"
        ls -lh "$LOG_DIR"/*.log 2>/dev/null | while read -r line; do
            echo "$line"
        done
        
        echo ""
        echo "To view a specific log file, use:"
        echo "  tail -f $LOG_DIR/[logfile].log"
    else
        echo "No log files found."
    fi
}

# Perform health check
perform_health_check() {
    log "Performing health check..."
    
    # Check if PM2 is running
    if ! pm2 ping &> /dev/null; then
        error "PM2 daemon is not running"
        return 1
    fi
    
    # Check running processes
    RUNNING_PROCESSES=$(pm2 list --no-daemon | grep -c "online" || echo "0")
    
    if [ "$RUNNING_PROCESSES" -eq 0 ]; then
        error "No processes are running"
        return 1
    fi
    
    log "Health check passed ✓"
    log "Running processes: $RUNNING_PROCESSES"
    
    return 0
}

# Main execution
main() {
    local action="${1:-start}"
    
    case "$action" in
        start)
            check_prerequisites
            create_directories
            install_dependencies
            check_system_status
            start_redundancy_system
            show_status
            ;;
        stop)
            stop_system
            ;;
        restart)
            restart_system
            show_status
            ;;
        status)
            show_status
            ;;
        logs)
            show_logs
            ;;
        health)
            perform_health_check
            ;;
        help|--help|-h)
            show_usage
            ;;
        *)
            error "Unknown action: $action"
            show_usage
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"