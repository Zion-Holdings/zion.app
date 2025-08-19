#!/bin/bash

# Ultimate Redundancy System Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOCK_FILE="$LOG_DIR/ultimate-redundancy.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/ultimate-redundancy.log"
}

# Error handling
error_exit() {
    log "ERROR" "$1"
    exit 1
}

# Check if already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check lock file
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE")
        if kill -0 "$lock_pid" 2>/dev/null; then
            return 0
        else
            log "WARN" "Stale lock file found, removing"
            rm -f "$LOCK_FILE"
        fi
    fi
    return 1
}

# Acquire lock
acquire_lock() {
    echo $$ > "$LOCK_FILE"
}

# Release lock
release_lock() {
    rm -f "$LOCK_FILE"
}

# Check dependencies
check_dependencies() {
    log "INFO" "Checking system dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed"
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error_exit "npm is not installed"
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2 || error_exit "Failed to install PM2"
    fi
    
    # Check git
    if ! command -v git &> /dev/null; then
        error_exit "git is not installed"
    fi
    
    log "INFO" "All dependencies are available"
}

# Initialize PM2 redundancy
init_pm2_redundancy() {
    log "INFO" "Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if ecosystem files exist
    local ecosystem_files=(
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.pm2.cjs"
    )
    
    local ecosystem_file=""
    for file in "${ecosystem_files[@]}"; do
        if [ -f "$file" ]; then
            ecosystem_file="$file"
            break
        fi
    done
    
    if [ -z "$ecosystem_file" ]; then
        error_exit "No PM2 ecosystem file found"
    fi
    
    log "INFO" "Using ecosystem file: $ecosystem_file"
    
    # Stop any existing PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Start the ecosystem
    pm2 start "$ecosystem_file" || error_exit "Failed to start PM2 ecosystem"
    
    # Install and configure PM2 logrotate
    pm2 install pm2-logrotate || log "WARN" "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval "0 0 * * *"
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "PM2 redundancy system initialized successfully"
}

# Initialize GitHub Actions redundancy
init_github_actions_redundancy() {
    log "INFO" "Initializing GitHub Actions redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check workflow files
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    local missing_workflows=()
    for workflow in "${workflows[@]}"; do
        if [ ! -f "$workflow" ]; then
            missing_workflows+=("$workflow")
        fi
    done
    
    if [ ${#missing_workflows[@]} -gt 0 ]; then
        log "WARN" "Missing workflow files: ${missing_workflows[*]}"
        
        # Try to restore from backups
        for workflow in "${missing_workflows[@]}"; do
            local backup="${workflow%.yml}-backup.yml"
            if [ -f "$backup" ]; then
                log "INFO" "Restoring workflow from backup: $backup -> $workflow"
                cp "$backup" "$workflow"
            fi
        done
    fi
    
    # Validate git remote
    if ! git remote get-url origin &>/dev/null; then
        log "WARN" "Git remote origin not configured"
    else
        local remote_url=$(git remote get-url origin)
        log "INFO" "Git remote: $remote_url"
    fi
    
    log "INFO" "GitHub Actions redundancy system initialized"
}

# Initialize Netlify Functions redundancy
init_netlify_functions_redundancy() {
    log "INFO" "Initializing Netlify Functions redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if netlify directory exists
    if [ ! -d "netlify" ]; then
        log "WARN" "Netlify directory not found"
        return
    fi
    
    # Check functions manifest
    local manifest_file="netlify/functions/functions-manifest.json"
    if [ ! -f "$manifest_file" ]; then
        log "WARN" "Netlify Functions manifest not found, regenerating..."
        npm run netlify:manifest || log "WARN" "Failed to regenerate manifest"
    else
        log "INFO" "Netlify Functions manifest found"
    fi
    
    # Check functions directory
    local functions_dir="netlify/functions"
    if [ -d "$functions_dir" ]; then
        local function_count=$(find "$functions_dir" -name "*.js" | wc -l)
        log "INFO" "Found $function_count Netlify function files"
    fi
    
    log "INFO" "Netlify Functions redundancy system initialized"
}

# Start ultimate redundancy master
start_ultimate_redundancy_master() {
    log "INFO" "Starting Ultimate Redundancy Master..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the master orchestrator
    node automation/ultimate-redundancy-master.cjs start &
    local master_pid=$!
    
    # Save PID
    echo $master_pid > "$PID_FILE"
    
    # Wait a moment for startup
    sleep 5
    
    # Check if process is still running
    if kill -0 $master_pid 2>/dev/null; then
        log "INFO" "Ultimate Redundancy Master started with PID: $master_pid"
    else
        error_exit "Ultimate Redundancy Master failed to start"
    fi
}

# Start monitoring
start_monitoring() {
    log "INFO" "Starting monitoring systems..."
    
    # Start health monitoring
    (
        while true; do
            sleep 300  # 5 minutes
            if [ -f "$PID_FILE" ]; then
                local pid=$(cat "$PID_FILE")
                if ! kill -0 "$pid" 2>/dev/null; then
                    log "ERROR" "Ultimate Redundancy Master process died, restarting..."
                    start_ultimate_redundancy_master
                fi
            fi
        done
    ) &
    
    log "INFO" "Monitoring systems started"
}

# Stop all systems
stop_systems() {
    log "INFO" "Stopping all redundancy systems..."
    
    # Stop Ultimate Redundancy Master
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Stopped Ultimate Redundancy Master (PID: $pid)"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "INFO" "All systems stopped"
}

# Show status
show_status() {
    log "INFO" "Checking system status..."
    
    echo -e "${BLUE}=== Ultimate Redundancy System Status ===${NC}"
    
    # Check if master process is running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}✓ Ultimate Redundancy Master: RUNNING (PID: $pid)${NC}"
        else
            echo -e "${RED}✗ Ultimate Redundancy Master: NOT RUNNING${NC}"
        fi
    else
        echo -e "${RED}✗ Ultimate Redundancy Master: NOT RUNNING${NC}"
    fi
    
    # Check PM2 status
    echo -e "\n${BLUE}=== PM2 Status ===${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 status 2>/dev/null || echo -e "${YELLOW}No PM2 processes running${NC}"
    else
        echo -e "${RED}PM2 not installed${NC}"
    fi
    
    # Check GitHub Actions workflows
    echo -e "\n${BLUE}=== GitHub Actions Workflows ===${NC}"
    cd "$WORKSPACE_DIR"
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    for workflow in "${workflows[@]}"; do
        if [ -f "$workflow" ]; then
            echo -e "${GREEN}✓ $workflow${NC}"
        else
            echo -e "${RED}✗ $workflow${NC}"
        fi
    done
    
    # Check Netlify Functions
    echo -e "\n${BLUE}=== Netlify Functions ===${NC}"
    local manifest_file="netlify/functions/functions-manifest.json"
    if [ -f "$manifest_file" ]; then
        local function_count=$(jq '.functions | length' "$manifest_file" 2>/dev/null || echo "0")
        echo -e "${GREEN}✓ Functions manifest: $function_count functions${NC}"
    else
        echo -e "${RED}✗ Functions manifest not found${NC}"
    fi
    
    echo -e "\n${BLUE}=== Log Files ===${NC}"
    if [ -d "$LOG_DIR" ]; then
        ls -la "$LOG_DIR"/*.log 2>/dev/null || echo -e "${YELLOW}No log files found${NC}"
    fi
}

# Show logs
show_logs() {
    local log_file="$LOG_DIR/ultimate-redundancy.log"
    
    if [ -f "$log_file" ]; then
        echo -e "${BLUE}=== Ultimate Redundancy System Logs ===${NC}"
        tail -n 50 "$log_file"
    else
        echo -e "${YELLOW}No log file found${NC}"
    fi
}

# Health check
health_check() {
    log "INFO" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if master process is running
    if [ ! -f "$PID_FILE" ]; then
        log "ERROR" "Health check failed: PID file not found"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    if ! kill -0 "$pid" 2>/dev/null; then
        log "ERROR" "Health check failed: Master process not running"
        return 1
    fi
    
    # Check PM2 processes
    if ! pm2 ping &>/dev/null; then
        log "ERROR" "Health check failed: PM2 not responding"
        return 1
    fi
    
    # Check critical files
    local critical_files=(
        "automation/ultimate-redundancy-master.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
    )
    
    for file in "${critical_files[@]}"; do
        if [ ! -f "$file" ]; then
            log "ERROR" "Health check failed: Critical file missing: $file"
            return 1
        fi
    done
    
    log "INFO" "Health check passed"
    return 0
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            if check_running; then
                log "ERROR" "Ultimate Redundancy System is already running"
                exit 1
            fi
            
            if check_lock; then
                log "ERROR" "Another instance is already running"
                exit 1
            fi
            
            acquire_lock
            
            log "INFO" "Starting Ultimate Redundancy System..."
            
            check_dependencies
            init_pm2_redundancy
            init_github_actions_redundancy
            init_netlify_functions_redundancy
            start_ultimate_redundancy_master
            start_monitoring
            
            log "INFO" "Ultimate Redundancy System started successfully"
            
            release_lock
            ;;
            
        stop)
            log "INFO" "Stopping Ultimate Redundancy System..."
            stop_systems
            log "INFO" "Ultimate Redundancy System stopped"
            ;;
            
        restart)
            log "INFO" "Restarting Ultimate Redundancy System..."
            stop_systems
            sleep 2
            "$0" start
            ;;
            
        status)
            show_status
            ;;
            
        logs)
            show_logs
            ;;
            
        health)
            if health_check; then
                echo -e "${GREEN}Health check passed${NC}"
                exit 0
            else
                echo -e "${RED}Health check failed${NC}"
                exit 1
            fi
            ;;
            
        *)
            echo "Usage: $0 {start|stop|restart|status|logs|health}"
            exit 1
            ;;
    esac
}

# Trap signals
trap 'log "INFO" "Received signal, cleaning up..."; release_lock; exit 0' INT TERM

# Run main function
main "$@"