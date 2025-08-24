#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script starts all redundancy automation systems for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
WORKSPACE="${PWD}"
LOG_DIR="${WORKSPACE}/automation/logs"
PID_FILE="${LOG_DIR}/redundancy-system.pid"
LOCK_FILE="${LOG_DIR}/redundancy-system.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Error logging function
error_log() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

# Success logging function
success_log() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Warning logging function
warning_log() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Info logging function
info_log() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Check if script is already running
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local pid=$(cat "$LOCK_FILE" 2>/dev/null)
        if ps -p "$pid" > /dev/null 2>&1; then
            error_log "Redundancy system is already running with PID $pid"
            exit 1
        else
            warning_log "Removing stale lock file"
            rm -f "$LOCK_FILE"
        fi
    fi
}

# Create lock file
create_lock() {
    echo $$ > "$LOCK_FILE"
    trap 'cleanup_lock' EXIT
}

# Cleanup lock file
cleanup_lock() {
    rm -f "$LOCK_FILE"
}

# Ensure log directory exists
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        info_log "Creating log directory: $LOG_DIR"
        mkdir -p "$LOG_DIR"
    fi
}

# Check prerequisites
check_prerequisites() {
    info_log "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error_log "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 16 ]; then
        error_log "Node.js version 16 or higher is required (found: $(node --version))"
        exit 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        warning_log "PM2 is not installed. Some redundancy features may not work properly."
    fi
    
    # Check if required scripts exist
    local required_scripts=(
        "automation/comprehensive-redundancy-system.cjs"
        "automation/enhanced-pm2-redundancy.cjs"
        "automation/enhanced-github-actions-redundancy.cjs"
        "automation/enhanced-netlify-functions-redundancy.cjs"
        "automation/master-redundancy-orchestrator.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$script" ]; then
            error_log "Required script not found: $script"
            exit 1
        fi
    done
    
    success_log "All prerequisites satisfied"
}

# Start individual redundancy systems
start_individual_systems() {
    info_log "Starting individual redundancy systems..."
    
    # Start comprehensive redundancy system
    info_log "Starting comprehensive redundancy system..."
    nohup node automation/comprehensive-redundancy-system.cjs > "$LOG_DIR/comprehensive-redundancy-system.log" 2>&1 &
    local comprehensive_pid=$!
    echo "$comprehensive_pid" >> "$PID_FILE"
    success_log "Comprehensive redundancy system started with PID $comprehensive_pid"
    
    # Wait a bit before starting next system
    sleep 5
    
    # Start enhanced PM2 redundancy system
    info_log "Starting enhanced PM2 redundancy system..."
    nohup node automation/enhanced-pm2-redundancy.cjs > "$LOG_DIR/enhanced-pm2-redundancy.log" 2>&1 &
    local pm2_pid=$!
    echo "$pm2_pid" >> "$PID_FILE"
    success_log "Enhanced PM2 redundancy system started with PID $pm2_pid"
    
    sleep 5
    
    # Start enhanced GitHub Actions redundancy system
    info_log "Starting enhanced GitHub Actions redundancy system..."
    nohup node automation/enhanced-github-actions-redundancy.cjs > "$LOG_DIR/enhanced-github-actions-redundancy.log" 2>&1 &
    local github_pid=$!
    echo "$github_pid" >> "$PID_FILE"
    success_log "Enhanced GitHub Actions redundancy system started with PID $github_pid"
    
    sleep 5
    
    # Start enhanced Netlify functions redundancy system
    info_log "Starting enhanced Netlify functions redundancy system..."
    nohup node automation/enhanced-netlify-functions-redundancy.cjs > "$LOG_DIR/enhanced-netlify-functions-redundancy.log" 2>&1 &
    local netlify_pid=$!
    echo "$netlify_pid" >> "$PID_FILE"
    success_log "Enhanced Netlify functions redundancy system started with PID $netlify_pid"
    
    sleep 5
    
    # Start master redundancy orchestrator
    info_log "Starting master redundancy orchestrator..."
    nohup node automation/master-redundancy-orchestrator.cjs > "$LOG_DIR/master-redundancy-orchestrator.log" 2>&1 &
    local master_pid=$!
    echo "$master_pid" >> "$PID_FILE"
    success_log "Master redundancy orchestrator started with PID $master_pid"
}

# Start PM2 ecosystem files
start_pm2_ecosystems() {
    info_log "Starting PM2 ecosystem files..."
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        warning_log "PM2 not available, skipping PM2 ecosystem startup"
        return
    fi
    
    # Start primary PM2 ecosystem
    if [ -f "ecosystem.pm2.cjs" ]; then
        info_log "Starting primary PM2 ecosystem..."
        pm2 start ecosystem.pm2.cjs
        success_log "Primary PM2 ecosystem started"
    fi
    
    # Start redundancy PM2 ecosystem
    if [ -f "ecosystem.redundancy.cjs" ]; then
        info_log "Starting redundancy PM2 ecosystem..."
        pm2 start ecosystem.redundancy.cjs
        success_log "Redundancy PM2 ecosystem started"
    fi
    
    # Save PM2 process list
    pm2 save
    success_log "PM2 process list saved"
}

# Verify system startup
verify_startup() {
    info_log "Verifying system startup..."
    
    # Wait for systems to initialize
    sleep 10
    
    # Check if processes are running
    local pids=$(cat "$PID_FILE" 2>/dev/null || echo "")
    if [ -z "$pids" ]; then
        error_log "No PIDs found in PID file"
        return 1
    fi
    
    local running_count=0
    local total_count=0
    
    for pid in $pids; do
        total_count=$((total_count + 1))
        if ps -p "$pid" > /dev/null 2>&1; then
            running_count=$((running_count + 1))
            success_log "Process $pid is running"
        else
            warning_log "Process $pid is not running"
        fi
    done
    
    if [ $running_count -eq $total_count ]; then
        success_log "All redundancy systems are running ($running_count/$total_count)"
        return 0
    else
        warning_log "Some redundancy systems are not running ($running_count/$total_count)"
        return 1
    fi
}

# Display system status
display_status() {
    info_log "Displaying system status..."
    
    echo
    echo "=========================================="
    echo "    COMPREHENSIVE REDUNDANCY SYSTEM"
    echo "=========================================="
    echo
    
    # Display PM2 status if available
    if command -v pm2 &> /dev/null; then
        echo "PM2 Status:"
        pm2 status --no-daemon
        echo
    fi
    
    # Display running processes
    echo "Redundancy System Processes:"
    local pids=$(cat "$PID_FILE" 2>/dev/null || echo "")
    if [ -n "$pids" ]; then
        for pid in $pids; do
            if ps -p "$pid" > /dev/null 2>&1; then
                local cmd=$(ps -p "$pid" -o cmd= 2>/dev/null || echo "Unknown")
                echo "  PID $pid: $cmd"
            fi
        done
    else
        echo "  No processes found"
    fi
    
    echo
    echo "Log Files:"
    echo "  - Comprehensive System: $LOG_DIR/comprehensive-redundancy-system.log"
    echo "  - PM2 Redundancy: $LOG_DIR/enhanced-pm2-redundancy.log"
    echo "  - GitHub Actions: $LOG_DIR/enhanced-github-actions-redundancy.log"
    echo "  - Netlify Functions: $LOG_DIR/enhanced-netlify-functions-redundancy.log"
    echo "  - Master Orchestrator: $LOG_DIR/master-redundancy-orchestrator.log"
    echo
    echo "=========================================="
}

# Main startup function
main() {
    log "Starting comprehensive redundancy system..."
    
    # Check if already running
    check_lock
    
    # Create lock file
    create_lock
    
    # Ensure log directory exists
    ensure_log_dir
    
    # Check prerequisites
    check_prerequisites
    
    # Initialize PID file
    > "$PID_FILE"
    
    # Start individual redundancy systems
    start_individual_systems
    
    # Start PM2 ecosystems
    start_pm2_ecosystems
    
    # Verify startup
    if verify_startup; then
        success_log "Comprehensive redundancy system started successfully"
    else
        warning_log "Some redundancy systems may not have started properly"
    fi
    
    # Display status
    display_status
    
    success_log "Comprehensive redundancy system startup completed"
    log "Use 'pm2 status' to check PM2 processes"
    log "Check log files in $LOG_DIR for detailed information"
    log "Use 'automation/stop-comprehensive-redundancy-system.sh' to stop the system"
}

# Run main function
main "$@"