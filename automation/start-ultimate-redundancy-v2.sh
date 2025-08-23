#!/bin/bash

# Ultimate Redundancy V2 System Startup Script
# This script provides comprehensive redundancy coverage for all automation systems

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
PID_FILE="$LOG_DIR/ultimate-redundancy-v2.pid"
STATUS_FILE="$LOG_DIR/ultimate-redundancy-v2-status.json"
HEALTH_FILE="$LOG_DIR/ultimate-redundancy-v2-health.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/ultimate-redundancy-v2.log"
}

# Check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE" 2>/dev/null)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed"
        exit 1
    fi
    
    log "INFO" "System requirements check passed"
}

# Start PM2 Redundancy
start_pm2_redundancy() {
    log "INFO" "Starting PM2 Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if PM2 ecosystem file exists
    if [ ! -f "ecosystem.ultimate-redundancy.pm2.cjs" ]; then
        log "ERROR" "PM2 ecosystem file not found"
        return 1
    fi
    
    # Check if PM2 processes are already running
    if pm2 list | grep -q "ecosystem.ultimate-redundancy.pm2.cjs"; then
        log "INFO" "PM2 Redundancy System already running, restarting..."
        pm2 restart ecosystem.ultimate-redundancy.pm2.cjs --update-env
    else
        # Start PM2 processes
        pm2 start ecosystem.ultimate-redundancy.pm2.cjs --update-env
    fi
    
    if [ $? -eq 0 ]; then
        log "INFO" "PM2 Redundancy System started successfully"
        return 0
    else
        log "ERROR" "Failed to start PM2 Redundancy System"
        return 1
    fi
}

# Start GitHub Actions Redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if GitHub Actions redundancy manager exists
    if [ ! -f "automation/github-actions-redundancy-manager.cjs" ]; then
        log "WARN" "GitHub Actions redundancy manager not found, skipping..."
        return 0
    fi
    
    # Start GitHub Actions redundancy manager
    nohup node automation/github-actions-redundancy-manager.cjs > "$LOG_DIR/github-redundancy.log" 2>&1 &
    local github_pid=$!
    
    if [ -n "$github_pid" ]; then
        log "INFO" "GitHub Actions Redundancy System started (PID: $github_pid)"
        return 0
    else
        log "ERROR" "Failed to start GitHub Actions Redundancy System"
        return 1
    fi
}

# Start Netlify Functions Redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify Functions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if Netlify functions redundancy manager exists
    if [ ! -f "automation/netlify-functions-redundancy-manager.cjs" ]; then
        log "WARN" "Netlify functions redundancy manager not found, skipping..."
        return 0
    fi
    
    # Start Netlify functions redundancy manager
    nohup node automation/netlify-functions-redundancy-manager.cjs > "$LOG_DIR/netlify-redundancy.log" 2>&1 &
    local netlify_pid=$!
    
    if [ -n "$netlify_pid" ]; then
        log "INFO" "Netlify Functions Redundancy System started (PID: $netlify_pid)"
        return 0
    else
        log "ERROR" "Failed to start Netlify Functions Redundancy System"
        return 1
    fi
}

# Start Ultimate Redundancy V2 System
start_ultimate_redundancy() {
    log "INFO" "Starting Ultimate Redundancy V2 System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if Ultimate Redundancy V2 system exists
    if [ ! -f "automation/ultimate-redundancy-v2-system.cjs" ]; then
        log "ERROR" "Ultimate Redundancy V2 system not found"
        return 1
    fi
    
    # Start Ultimate Redundancy V2 system
    nohup node automation/ultimate-redundancy-v2-system.cjs start > "$LOG_DIR/ultimate-redundancy-v2.log" 2>&1 &
    local ultimate_pid=$!
    
    if [ -n "$ultimate_pid" ]; then
        echo "$ultimate_pid" > "$PID_FILE"
        log "INFO" "Ultimate Redundancy V2 System started (PID: $ultimate_pid)"
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy V2 System"
        return 1
    fi
}

# Start monitoring dashboard
start_monitoring_dashboard() {
    log "INFO" "Starting Monitoring Dashboard..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if monitoring dashboard exists
    if [ ! -f "automation/comprehensive-monitoring-dashboard.cjs" ]; then
        log "WARN" "Monitoring dashboard not found, skipping..."
        return 0
    fi
    
    # Start monitoring dashboard
    nohup node automation/comprehensive-monitoring-dashboard.cjs > "$LOG_DIR/monitoring-dashboard.log" 2>&1 &
    local dashboard_pid=$!
    
    if [ -n "$dashboard_pid" ]; then
        log "INFO" "Monitoring Dashboard started (PID: $dashboard_pid)"
        return 0
    else
        log "ERROR" "Failed to start Monitoring Dashboard"
        return 1
    fi
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting Ultimate Redundancy V2 System..."
    
    # Check requirements
    check_requirements
    
    # Start individual redundancy systems
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_ultimate_redundancy
    start_monitoring_dashboard
    
    # Wait a moment for systems to initialize
    sleep 5
    
    # Check status
    check_status
    
    log "INFO" "Ultimate Redundancy V2 System startup completed"
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping Ultimate Redundancy V2 System..."
    
    # Stop PM2 processes
    cd "$WORKSPACE_DIR"
    pm2 stop ecosystem.ultimate-redundancy.pm2.cjs 2>/dev/null || true
    
    # Stop Ultimate Redundancy V2 system
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if [ -n "$pid" ]; then
            kill "$pid" 2>/dev/null || true
            rm -f "$PID_FILE"
        fi
    fi
    
    # Stop other processes
    pkill -f "ultimate-redundancy-v2-system.cjs" 2>/dev/null || true
    pkill -f "github-actions-redundancy-manager.cjs" 2>/dev/null || true
    pkill -f "netlify-functions-redundancy-manager.cjs" 2>/dev/null || true
    pkill -f "comprehensive-monitoring-dashboard.cjs" 2>/dev/null || true
    
    log "INFO" "Ultimate Redundancy V2 System stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting Ultimate Redundancy V2 System..."
    stop_all
    sleep 2
    start_all
}

# Check system status
check_status() {
    log "INFO" "Checking system status..."
    
    local status=""
    
    # Check PM2 status
    if command -v pm2 &> /dev/null; then
        local pm2_status=$(pm2 status 2>/dev/null | grep -c "online" || echo "0")
        status="$status PM2: $pm2_status processes online"
    else
        status="$status PM2: Not available"
    fi
    
    # Check Ultimate Redundancy V2 system
    if is_running; then
        status="$status, Ultimate Redundancy V2: Running"
    else
        status="$status, Ultimate Redundancy V2: Stopped"
    fi
    
    # Check log files
    local log_count=$(find "$LOG_DIR" -name "*ultimate-redundancy-v2*" -type f | wc -l)
    status="$status, Logs: $log_count files"
    
    log "INFO" "Status: $status"
    
    # Save status to file
    echo "{\"timestamp\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\", \"status\": \"$status\"}" > "$STATUS_FILE"
}

# Show system health
show_health() {
    log "INFO" "Showing system health..."
    
    if [ -f "$HEALTH_FILE" ]; then
        cat "$HEALTH_FILE"
    else
        log "WARN" "Health file not found, performing health check..."
        cd "$WORKSPACE_DIR"
        node automation/ultimate-redundancy-v2-system.cjs health
    fi
}

# Show logs
show_logs() {
    log "INFO" "Showing system logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        tail -n 100 "$LOG_DIR/ultimate-redundancy-v2.log"
    else
        log "WARN" "Log file not found"
    fi
}

# Monitor system
monitor_system() {
    log "INFO" "Starting system monitoring..."
    
    while true; do
        check_status
        sleep 30
    done
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            if is_running; then
                log "WARN" "System is already running"
                exit 0
            fi
            start_all
            ;;
        stop)
            stop_all
            ;;
        restart)
            restart_all
            ;;
        status)
            check_status
            ;;
        health)
            show_health
            ;;
        logs)
            show_logs
            ;;
        monitor)
            monitor_system
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|logs|monitor}"
            echo ""
            echo "Commands:"
            echo "  start   - Start all redundancy systems"
            echo "  stop    - Stop all redundancy systems"
            echo "  restart - Restart all redundancy systems"
            echo "  status  - Check system status"
            echo "  health  - Show system health"
            echo "  logs    - Show system logs"
            echo "  monitor - Start continuous monitoring"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"