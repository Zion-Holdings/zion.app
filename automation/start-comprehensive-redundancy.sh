#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script provides redundancy for all PM2, GitHub Actions, and Netlify Functions automations

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
REDUNDANCY_SYSTEM="$PROJECT_ROOT/automation/comprehensive-redundancy-system.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy.log"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check PM2 status
check_pm2_status() {
    if command_exists pm2; then
        pm2 status --no-daemon >/dev/null 2>&1
        return $?
    else
        return 1
    fi
}

# Function to start PM2 processes
start_pm2_processes() {
    log "INFO" "Starting PM2 processes..."
    
    cd "$PROJECT_ROOT"
    
    # Start main ecosystem
    if [ -f "ecosystem.pm2.cjs" ]; then
        log "INFO" "Starting main PM2 ecosystem..."
        pm2 start ecosystem.pm2.cjs --update-env
    fi
    
    # Start redundancy ecosystem
    if [ -f "ecosystem.redundancy.cjs" ]; then
        log "INFO" "Starting redundancy PM2 ecosystem..."
        pm2 start ecosystem.redundancy.cjs --update-env
    fi
    
    # Start enhanced redundancy ecosystem if exists
    if [ -f "ecosystem-redundancy.pm2.cjs" ]; then
        log "INFO" "Starting enhanced redundancy PM2 ecosystem..."
        pm2 start ecosystem-redundancy.pm2.cjs --update-env
    fi
    
    # Save PM2 configuration
    pm2 save
    
    log "SUCCESS" "PM2 processes started successfully"
}

# Function to check GitHub Actions workflows
check_github_workflows() {
    log "INFO" "Checking GitHub Actions workflows..."
    
    local workflows_dir="$PROJECT_ROOT/.github/workflows"
    local workflows=(
        "marketing-sync.yml"
        "sync-health.yml"
        "marketing-sync-backup.yml"
        "sync-health-backup.yml"
    )
    
    for workflow in "${workflows[@]}"; do
        if [ -f "$workflows_dir/$workflow" ]; then
            log "INFO" "✓ Found workflow: $workflow"
        else
            log "WARN" "⚠ Missing workflow: $workflow"
        fi
    done
}

# Function to check Netlify functions
check_netlify_functions() {
    log "INFO" "Checking Netlify functions..."
    
    local manifest_file="$PROJECT_ROOT/netlify/functions/functions-manifest.json"
    
    if [ -f "$manifest_file" ]; then
        local function_count=$(jq '.functions | length' "$manifest_file" 2>/dev/null || echo "0")
        log "INFO" "✓ Found $function_count Netlify functions"
    else
        log "WARN" "⚠ Netlify functions manifest not found"
    fi
}

# Function to check NPM scripts
check_npm_scripts() {
    log "INFO" "Checking NPM scripts..."
    
    cd "$PROJECT_ROOT"
    
    local critical_scripts=(
        "build"
        "build:health-check"
        "build:validate"
        "build:recovery"
        "lint"
        "type-check"
    )
    
    for script in "${critical_scripts[@]}"; do
        if npm run --silent "$script" --dry-run >/dev/null 2>&1; then
            log "INFO" "✓ Found script: $script"
        else
            log "WARN" "⚠ Missing script: $script"
        fi
    done
}

# Function to start the comprehensive redundancy system
start_redundancy_system() {
    log "INFO" "Starting comprehensive redundancy system..."
    
    if [ ! -f "$REDUNDANCY_SYSTEM" ]; then
        log "ERROR" "Comprehensive redundancy system not found: $REDUNDANCY_SYSTEM"
        return 1
    fi
    
    # Start the redundancy system in the background
    cd "$PROJECT_ROOT"
    nohup node "$REDUNDANCY_SYSTEM" start > "$LOG_DIR/redundancy-system.log" 2>&1 &
    local pid=$!
    
    # Wait a moment and check if it's running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Comprehensive redundancy system started with PID: $pid"
        echo "$pid" > "$LOG_DIR/redundancy-system.pid"
    else
        log "ERROR" "Failed to start comprehensive redundancy system"
        return 1
    fi
}

# Function to check system health
check_system_health() {
    log "INFO" "Performing comprehensive system health check..."
    
    # Check PM2
    if check_pm2_status; then
        log "SUCCESS" "✓ PM2 is running"
    else
        log "ERROR" "✗ PM2 is not running"
        return 1
    fi
    
    # Check GitHub Actions workflows
    check_github_workflows
    
    # Check Netlify functions
    check_netlify_functions
    
    # Check NPM scripts
    check_npm_scripts
    
    # Check if redundancy system is running
    if [ -f "$LOG_DIR/redundancy-system.pid" ]; then
        local pid=$(cat "$LOG_DIR/redundancy-system.pid")
        if kill -0 "$pid" 2>/dev/null; then
            log "SUCCESS" "✓ Comprehensive redundancy system is running (PID: $pid)"
        else
            log "ERROR" "✗ Comprehensive redundancy system is not running"
            return 1
        fi
    else
        log "ERROR" "✗ Comprehensive redundancy system PID file not found"
        return 1
    fi
    
    log "SUCCESS" "System health check completed successfully"
    return 0
}

# Function to stop the system
stop_system() {
    log "INFO" "Stopping comprehensive redundancy system..."
    
    # Stop redundancy system
    if [ -f "$LOG_DIR/redundancy-system.pid" ]; then
        local pid=$(cat "$LOG_DIR/redundancy-system.pid")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            log "INFO" "Stopped redundancy system (PID: $pid)"
        fi
        rm -f "$LOG_DIR/redundancy-system.pid"
    fi
    
    # Stop PM2 processes
    if command_exists pm2; then
        log "INFO" "Stopping PM2 processes..."
        pm2 stop all
        pm2 delete all
    fi
    
    log "SUCCESS" "System stopped successfully"
}

# Function to restart the system
restart_system() {
    log "INFO" "Restarting comprehensive redundancy system..."
    stop_system
    sleep 2
    start_system
}

# Function to show system status
show_status() {
    log "INFO" "Comprehensive Redundancy System Status"
    echo "=========================================="
    
    # PM2 status
    if command_exists pm2; then
        echo "PM2 Status:"
        pm2 status --no-daemon 2>/dev/null || echo "PM2 not running"
        echo
    fi
    
    # Redundancy system status
    if [ -f "$LOG_DIR/redundancy-system.pid" ]; then
        local pid=$(cat "$LOG_DIR/redundancy-system.pid")
        if kill -0 "$pid" 2>/dev/null; then
            echo "Redundancy System: Running (PID: $pid)"
        else
            echo "Redundancy System: Not running"
        fi
    else
        echo "Redundancy System: Not running"
    fi
    echo
    
    # Recent logs
    echo "Recent Logs:"
    tail -n 10 "$LOG_DIR/comprehensive-redundancy.log" 2>/dev/null || echo "No logs found"
}

# Function to show system health
show_health() {
    log "INFO" "Running system health check..."
    if check_system_health; then
        log "SUCCESS" "System is healthy"
    else
        log "ERROR" "System health check failed"
        exit 1
    fi
}

# Function to show logs
show_logs() {
    log "INFO" "Showing recent logs..."
    if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
        tail -n 50 "$LOG_DIR/comprehensive-redundancy.log"
    else
        echo "No logs found"
    fi
}

# Function to start the entire system
start_system() {
    log "INFO" "Starting comprehensive redundancy system..."
    
    # Check prerequisites
    if ! command_exists node; then
        log "ERROR" "Node.js is not installed"
        exit 1
    fi
    
    if ! command_exists npm; then
        log "ERROR" "NPM is not installed"
        exit 1
    fi
    
    if ! command_exists pm2; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2
    fi
    
    # Start PM2 processes
    start_pm2_processes
    
    # Check workflows and functions
    check_github_workflows
    check_netlify_functions
    check_npm_scripts
    
    # Start redundancy system
    start_redundancy_system
    
    # Wait for system to stabilize
    sleep 5
    
    # Perform health check
    if check_system_health; then
        log "SUCCESS" "Comprehensive redundancy system started successfully"
        log "INFO" "System is now monitoring all automations"
        log "INFO" "Use '$0 status' to check system status"
        log "INFO" "Use '$0 health' to run health check"
        log "INFO" "Use '$0 logs' to view logs"
    else
        log "ERROR" "System health check failed after startup"
        exit 1
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        start_system
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
    health)
        show_health
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|logs}"
        echo
        echo "Commands:"
        echo "  start   - Start the comprehensive redundancy system"
        echo "  stop    - Stop the comprehensive redundancy system"
        echo "  restart - Restart the comprehensive redundancy system"
        echo "  status  - Show system status"
        echo "  health  - Run system health check"
        echo "  logs    - Show recent logs"
        echo
        echo "This script provides redundancy for:"
        echo "  - PM2 process management"
        echo "  - GitHub Actions workflows"
        echo "  - Netlify functions"
        echo "  - NPM scripts and automation"
        exit 1
        ;;
esac