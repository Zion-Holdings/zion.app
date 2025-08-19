#!/bin/bash

# Ultimate Redundancy System Startup Script
# This script provides comprehensive redundancy for all automation systems

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
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOCK_FILE="$LOG_DIR/ultimate-redundancy.lock"

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
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Ultimate redundancy system already running with PID $pid"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check if locked
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE")
        if ps -p "$lock_pid" > /dev/null 2>&1; then
            log "ERROR" "System is locked by process $lock_pid"
            return 1
        else
            log "WARN" "Stale lock file found, removing"
            rm -f "$LOCK_FILE"
        fi
    fi
    return 0
}

# Acquire lock
acquire_lock() {
    echo $$ > "$LOCK_FILE"
    log "INFO" "Lock acquired"
}

# Release lock
release_lock() {
    rm -f "$LOCK_FILE"
    log "INFO" "Lock released"
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node >/dev/null 2>&1; then
        error_exit "Node.js is not installed"
    fi
    
    # Check npm
    if ! command -v npm >/dev/null 2>&1; then
        error_exit "npm is not installed"
    fi
    
    # Check PM2
    if ! command -v pm2 >/dev/null 2>&1; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2 || error_exit "Failed to install PM2"
    fi
    
    # Check git
    if ! command -v git >/dev/null 2>&1; then
        error_exit "git is not installed"
    fi
    
    log "INFO" "System requirements satisfied"
}

# Start PM2 redundancy services
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy services..."
    
    cd "$WORKSPACE_DIR"
    
    # Start all PM2 ecosystems
    local ecosystems=(
        "ecosystem.pm2.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.ultimate-redundancy.pm2.cjs"
    )
    
    for ecosystem in "${ecosystems[@]}"; do
        if [ -f "$ecosystem" ]; then
            log "INFO" "Starting PM2 ecosystem: $ecosystem"
            pm2 start "$ecosystem" --update-env || log "WARN" "Failed to start $ecosystem"
        fi
    done
    
    # Install PM2 logrotate if not already installed
    pm2 install pm2-logrotate 2>/dev/null || true
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "PM2 redundancy services started"
}

# Start GitHub Actions redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if workflows directory exists
    if [ -d ".github/workflows" ]; then
        # Ensure backup workflows exist
        local workflows=(
            "marketing-sync.yml"
            "sync-health.yml"
        )
        
        for workflow in "${workflows[@]}"; do
            local workflow_path=".github/workflows/$workflow"
            local backup_path=".github/workflows/${workflow%.yml}-backup.yml"
            
            if [ -f "$workflow_path" ] && [ ! -f "$backup_path" ]; then
                log "INFO" "Creating backup for $workflow"
                cp "$workflow_path" "$backup_path"
            fi
        done
        
        log "INFO" "GitHub Actions redundancy configured"
    else
        log "WARN" "GitHub workflows directory not found"
    fi
}

# Start Netlify functions redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify functions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if Netlify functions directory exists
    if [ -d "netlify/functions" ]; then
        # Regenerate functions manifest
        if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
            log "INFO" "Regenerating Netlify functions manifest"
            node scripts/generate-netlify-functions-manifest.cjs || log "WARN" "Failed to regenerate manifest"
        fi
        
        log "INFO" "Netlify functions redundancy configured"
    else
        log "WARN" "Netlify functions directory not found"
    fi
}

# Start automation redundancy services
start_automation_redundancy() {
    log "INFO" "Starting automation redundancy services..."
    
    cd "$WORKSPACE_DIR"
    
    # Start key redundancy scripts
    local redundancy_scripts=(
        "automation/pm2-redundancy-monitor.cjs"
        "automation/comprehensive-redundancy-orchestrator.cjs"
        "automation/github-actions-redundancy-manager.cjs"
        "automation/netlify-functions-redundancy-manager.cjs"
    )
    
    for script in "${redundancy_scripts[@]}"; do
        if [ -f "$script" ]; then
            log "INFO" "Starting redundancy script: $script"
            node "$script" start > "$LOG_DIR/$(basename "$script" .cjs).log" 2>&1 &
            local pid=$!
            log "INFO" "Started $script with PID $pid"
        fi
    done
    
    # Start monitoring scripts
    local monitoring_scripts=(
        "automation/redundancy-health-monitor.cjs"
        "automation/redundancy-build-monitor.cjs"
        "automation/continuous-build-monitor.cjs"
    )
    
    for script in "${monitoring_scripts[@]}"; do
        if [ -f "$script" ]; then
            log "INFO" "Starting monitoring script: $script"
            node "$script" start > "$LOG_DIR/$(basename "$script" .cjs).log" 2>&1 &
            local pid=$!
            log "INFO" "Started $script with PID $pid"
        fi
    done
    
    log "INFO" "Automation redundancy services started"
}

# Start the ultimate redundancy master
start_ultimate_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    cd "$WORKSPACE_DIR"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        # Start in continuous monitoring mode
        node automation/ultimate-redundancy-master.cjs monitor > "$LOG_DIR/ultimate-redundancy-master.log" 2>&1 &
        local master_pid=$!
        echo "$master_pid" > "$PID_FILE"
        log "INFO" "Ultimate redundancy master started with PID $master_pid"
    else
        error_exit "Ultimate redundancy master script not found"
    fi
}

# Health check
health_check() {
    log "INFO" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check PM2 status
    if command -v pm2 >/dev/null 2>&1; then
        local pm2_status=$(pm2 status 2>/dev/null || echo "PM2 not running")
        log "INFO" "PM2 Status: $pm2_status"
    fi
    
    # Check if processes are running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate redundancy master is running (PID: $pid)"
        else
            log "ERROR" "Ultimate redundancy master is not running"
            return 1
        fi
    fi
    
    # Check log files
    local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
    log "INFO" "Found $log_count log files"
    
    log "INFO" "Health check completed"
    return 0
}

# Stop all services
stop_services() {
    log "INFO" "Stopping all redundancy services..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop PM2 processes
    if command -v pm2 >/dev/null 2>&1; then
        pm2 stop all 2>/dev/null || true
        log "INFO" "PM2 processes stopped"
    fi
    
    # Kill background processes
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Killed process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Kill any remaining node processes from our scripts
    pkill -f "ultimate-redundancy-master.cjs" 2>/dev/null || true
    pkill -f "redundancy.*\.cjs" 2>/dev/null || true
    
    log "INFO" "All services stopped"
}

# Show status
show_status() {
    log "INFO" "Showing system status..."
    
    cd "$WORKSPACE_DIR"
    
    echo -e "${BLUE}=== ULTIMATE REDUNDANCY SYSTEM STATUS ===${NC}"
    
    # PM2 Status
    if command -v pm2 >/dev/null 2>&1; then
        echo -e "${YELLOW}PM2 Status:${NC}"
        pm2 status 2>/dev/null || echo "PM2 not running"
        echo
    fi
    
    # Process Status
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo -e "${GREEN}Ultimate Redundancy Master: RUNNING (PID: $pid)${NC}"
        else
            echo -e "${RED}Ultimate Redundancy Master: NOT RUNNING${NC}"
        fi
    else
        echo -e "${RED}Ultimate Redundancy Master: NOT RUNNING${NC}"
    fi
    echo
    
    # Log Files
    echo -e "${YELLOW}Recent Log Files:${NC}"
    find "$LOG_DIR" -name "*.log" -type f -exec ls -lh {} \; 2>/dev/null | head -10 || echo "No log files found"
    echo
    
    # System Health
    if health_check >/dev/null 2>&1; then
        echo -e "${GREEN}System Health: HEALTHY${NC}"
    else
        echo -e "${RED}System Health: UNHEALTHY${NC}"
    fi
}

# Show logs
show_logs() {
    local lines="${1:-50}"
    log "INFO" "Showing last $lines lines of logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        tail -n "$lines" "$LOG_DIR/ultimate-redundancy.log"
    else
        log "WARN" "No log file found"
    fi
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            if check_running; then
                log "INFO" "System already running"
                exit 0
            fi
            
            if ! check_lock; then
                error_exit "Cannot acquire lock"
            fi
            
            acquire_lock
            
            log "INFO" "Starting Ultimate Redundancy System..."
            
            check_requirements
            start_pm2_redundancy
            start_github_redundancy
            start_netlify_redundancy
            start_automation_redundancy
            start_ultimate_master
            
            # Wait a moment for services to start
            sleep 5
            
            if health_check; then
                log "INFO" "Ultimate Redundancy System started successfully"
                echo -e "${GREEN}Ultimate Redundancy System is now running!${NC}"
            else
                error_exit "System failed health check"
            fi
            
            release_lock
            ;;
            
        stop)
            log "INFO" "Stopping Ultimate Redundancy System..."
            stop_services
            log "INFO" "System stopped"
            ;;
            
        restart)
            log "INFO" "Restarting Ultimate Redundancy System..."
            stop_services
            sleep 2
            "$0" start
            ;;
            
        status)
            show_status
            ;;
            
        logs)
            show_logs "$2"
            ;;
            
        health)
            if health_check; then
                echo -e "${GREEN}System is healthy${NC}"
                exit 0
            else
                echo -e "${RED}System is unhealthy${NC}"
                exit 1
            fi
            ;;
            
        check)
            log "INFO" "Running system check..."
            cd "$WORKSPACE_DIR"
            if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
                node automation/ultimate-redundancy-master.cjs check
            else
                error_exit "Ultimate redundancy master script not found"
            fi
            ;;
            
        *)
            echo -e "${BLUE}Ultimate Redundancy System - Usage:${NC}"
            echo "  $0 [command]"
            echo
            echo "Commands:"
            echo "  start     - Start the redundancy system"
            echo "  stop      - Stop the redundancy system"
            echo "  restart   - Restart the redundancy system"
            echo "  status    - Show system status"
            echo "  logs [n]  - Show last n lines of logs (default: 50)"
            echo "  health    - Check system health"
            echo "  check     - Run comprehensive system check"
            echo
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 logs 100"
            echo "  $0 health"
            exit 1
            ;;
    esac
}

# Trap signals
trap 'log "INFO" "Received signal, cleaning up..."; release_lock; exit 0' INT TERM

# Run main function
main "$@"