#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides complete redundancy coverage for all PM2, GitHub Actions, and Netlify functions automations

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
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.ultimate-redundancy.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[${timestamp}] [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[${timestamp}] [SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[${timestamp}] [WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[${timestamp}] [ERROR]${NC} $message"
            ;;
    esac
    
    # Also log to file
    echo "[${timestamp}] [${level}] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "INFO" "PM2 is available"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    log "INFO" "Node.js is available: $(node --version)"
}

# Function to check if required files exist
check_required_files() {
    local missing_files=()
    
    # Check ecosystem file
    if [[ ! -f "$ECOSYSTEM_FILE" ]]; then
        missing_files+=("$ECOSYSTEM_FILE")
    fi
    
    # Check automation scripts
    local required_scripts=(
        "ultimate-redundancy-automation-system.cjs"
        "enhanced-pm2-redundancy.cjs"
        "enhanced-github-actions-redundancy.cjs"
        "enhanced-netlify-functions-redundancy.cjs"
        "master-redundancy-orchestrator.cjs"
        "comprehensive-redundancy-system.cjs"
        "redundancy-health-monitor.cjs"
        "redundancy-git-sync.cjs"
        "redundancy-build-monitor.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [[ ! -f "$SCRIPT_DIR/$script" ]]; then
            missing_files+=("$script")
        fi
    done
    
    if [[ ${#missing_files[@]} -gt 0 ]]; then
        log "ERROR" "Missing required files:"
        for file in "${missing_files[@]}"; do
            log "ERROR" "  - $file"
        done
        exit 1
    fi
    
    log "SUCCESS" "All required files are present"
}

# Function to start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    # Stop any existing processes first
    log "INFO" "Stopping existing PM2 processes..."
    pm2 stop ecosystem.ultimate-redundancy.cjs 2>/dev/null || true
    pm2 delete ecosystem.ultimate-redundancy.cjs 2>/dev/null || true
    
    # Start the new ecosystem
    log "INFO" "Starting ultimate redundancy ecosystem..."
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    # Save PM2 configuration
    pm2 save
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check status
    log "INFO" "Checking system status..."
    pm2 status
    
    log "SUCCESS" "Ultimate Redundancy Automation System started successfully"
}

# Function to stop the system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    pm2 stop ecosystem.ultimate-redundancy.cjs 2>/dev/null || true
    pm2 delete ecosystem.ultimate-redundancy.cjs 2>/dev/null || true
    pm2 save
    
    log "SUCCESS" "Ultimate Redundancy Automation System stopped"
}

# Function to restart the system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Function to show system status
show_status() {
    log "INFO" "Ultimate Redundancy Automation System Status:"
    echo ""
    
    if pm2 list | grep -q "ecosystem.ultimate-redundancy.cjs"; then
        pm2 status
    else
        log "WARNING" "No ultimate redundancy ecosystem running"
    fi
    
    echo ""
    log "INFO" "Recent logs:"
    pm2 logs --lines 20 2>/dev/null || log "WARNING" "No logs available"
}

# Function to show logs
show_logs() {
    local lines="${1:-50}"
    log "INFO" "Showing last $lines lines of logs:"
    pm2 logs --lines "$lines" 2>/dev/null || log "WARNING" "No logs available"
}

# Function to run health check
run_health_check() {
    log "INFO" "Running ultimate health check..."
    
    if [[ -f "$SCRIPT_DIR/ultimate-redundancy-automation-system.cjs" ]]; then
        cd "$PROJECT_ROOT"
        node "$SCRIPT_DIR/ultimate-redundancy-automation-system.cjs" health
    else
        log "ERROR" "Health check script not found"
    fi
}

# Function to test the system
test_system() {
    log "INFO" "Running ultimate redundancy system tests..."
    
    if [[ -f "$SCRIPT_DIR/ultimate-redundancy-automation-system.cjs" ]]; then
        cd "$PROJECT_ROOT"
        node "$SCRIPT_DIR/ultimate-redundancy-automation-system.cjs" test
    else
        log "ERROR" "Test script not found"
    fi
}

# Function to show help
show_help() {
    echo "Ultimate Redundancy Automation System"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the ultimate redundancy automation system"
    echo "  stop      Stop the ultimate redundancy automation system"
    echo "  restart   Restart the ultimate redundancy automation system"
    echo "  status    Show system status and process information"
    echo "  logs      Show recent logs (default: 50 lines)"
    echo "  health    Run a health check on all systems"
    echo "  test      Run system tests"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the system"
    echo "  $0 status                   # Show status"
    echo "  $0 logs 100                 # Show last 100 lines of logs"
    echo "  $0 health                   # Run health check"
    echo ""
}

# Main script logic
main() {
    local command="${1:-start}"
    
    log "INFO" "Ultimate Redundancy Automation System Startup Script"
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Script Directory: $SCRIPT_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    
    # Check prerequisites
    check_pm2
    check_node
    check_required_files
    
    case "$command" in
        "start")
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            restart_system
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "health")
            run_health_check
            ;;
        "test")
            test_system
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"