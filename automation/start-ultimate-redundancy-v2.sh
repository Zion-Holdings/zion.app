#!/bin/bash

# Ultimate Redundancy Master Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"

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
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Error handling
error_exit() {
    log "ERROR" "Script failed: $1"
    exit 1
}

# Check if script is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Ultimate redundancy system already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start PM2 redundancy systems
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy systems..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first."
        return 1
    fi
    
    # Start core PM2 ecosystem
    if [ -f "$WORKSPACE_DIR/ecosystem.pm2.cjs" ]; then
        log "INFO" "Starting core PM2 ecosystem..."
        cd "$WORKSPACE_DIR" && pm2 start ecosystem.pm2.cjs --update-env || log "WARN" "Failed to start core ecosystem"
    fi
    
    # Start redundancy ecosystem
    if [ -f "$WORKSPACE_DIR/ecosystem.redundancy.cjs" ]; then
        log "INFO" "Starting redundancy ecosystem..."
        cd "$WORKSPACE_DIR" && pm2 start ecosystem.redundancy.cjs --update-env || log "WARN" "Failed to start redundancy ecosystem"
    fi
    
    # Start comprehensive redundancy ecosystem
    if [ -f "$WORKSPACE_DIR/ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy ecosystem..."
        cd "$WORKSPACE_DIR" && pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || log "WARN" "Failed to start comprehensive ecosystem"
    fi
    
    # Start ultimate redundancy ecosystem
    if [ -f "$WORKSPACE_DIR/ecosystem.ultimate-redundancy.pm2.cjs" ]; then
        log "INFO" "Starting ultimate redundancy ecosystem..."
        cd "$WORKSPACE_DIR" && pm2 start ecosystem.ultimate-redundancy.pm2.cjs --update-env || log "WARN" "Failed to start ultimate ecosystem"
    fi
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || log "WARN" "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "PM2 redundancy systems started"
}

# Start GitHub Actions redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy..."
    
    # Check if .github/workflows directory exists
    if [ ! -d "$WORKSPACE_DIR/.github/workflows" ]; then
        log "WARN" "GitHub workflows directory not found"
        return 0
    fi
    
    # Validate workflow files
    local workflows=("marketing-sync.yml" "sync-health.yml" "marketing-sync-backup.yml" "sync-health-backup.yml")
    for workflow in "${workflows[@]}"; do
        if [ -f "$WORKSPACE_DIR/.github/workflows/$workflow" ]; then
            log "INFO" "Found workflow: $workflow"
        else
            log "WARN" "Missing workflow: $workflow"
        fi
    done
    
    log "INFO" "GitHub Actions redundancy configured"
}

# Start Netlify functions redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify functions redundancy..."
    
    # Check if netlify/functions directory exists
    if [ ! -d "$WORKSPACE_DIR/netlify/functions" ]; then
        log "WARN" "Netlify functions directory not found"
        return 0
    fi
    
    # Regenerate functions manifest
    log "INFO" "Regenerating Netlify functions manifest..."
    cd "$WORKSPACE_DIR" && npm run netlify:manifest || log "WARN" "Failed to regenerate manifest"
    
    # Check functions manifest
    if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
        local function_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
        log "INFO" "Netlify functions manifest found with $function_count functions"
    else
        log "WARN" "Netlify functions manifest not found"
    fi
    
    log "INFO" "Netlify functions redundancy configured"
}

# Start npm scripts redundancy
start_npm_redundancy() {
    log "INFO" "Starting npm scripts redundancy..."
    
    # Check if package.json exists
    if [ ! -f "$WORKSPACE_DIR/package.json" ]; then
        log "ERROR" "package.json not found"
        return 1
    fi
    
    # Validate critical npm scripts
    local critical_scripts=("build" "dev" "start" "pm2:start" "redundancy:start")
    for script in "${critical_scripts[@]}"; do
        if npm run --silent "$script" --dry-run &>/dev/null; then
            log "INFO" "NPM script available: $script"
        else
            log "WARN" "NPM script not available: $script"
        fi
    done
    
    log "INFO" "NPM scripts redundancy configured"
}

# Start ultimate redundancy master
start_ultimate_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    # Start the master orchestrator
    cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs start || log "WARN" "Failed to start ultimate redundancy master"
    
    # Start continuous monitoring in background
    nohup node automation/ultimate-redundancy-master.cjs monitor > "$LOG_DIR/ultimate-master-monitor.log" 2>&1 &
    local monitor_pid=$!
    echo "$monitor_pid" > "$PID_FILE"
    
    log "INFO" "Ultimate redundancy master started (PID: $monitor_pid)"
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting ultimate redundancy system..."
    
    # Check if already running
    if check_running; then
        log "INFO" "System already running, stopping first..."
        stop_all
        sleep 2
    fi
    
    # Start all components
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_npm_redundancy
    start_ultimate_master
    
    log "INFO" "Ultimate redundancy system started successfully"
    
    # Show status
    show_status
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping ultimate redundancy system..."
    
    # Stop PM2 processes
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping PM2 processes..."
        pm2 stop all || log "WARN" "Failed to stop some PM2 processes"
        pm2 delete all || log "WARN" "Failed to delete some PM2 processes"
    fi
    
    # Stop ultimate redundancy master
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping ultimate redundancy master (PID: $pid)..."
            kill "$pid" || log "WARN" "Failed to stop process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop any remaining Node processes
    pkill -f "ultimate-redundancy-master" || true
    pkill -f "redundancy.*\.cjs" || true
    
    log "INFO" "Ultimate redundancy system stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting ultimate redundancy system..."
    stop_all
    sleep 3
    start_all
}

# Show system status
show_status() {
    log "INFO" "=== Ultimate Redundancy System Status ==="
    
    # PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon || log "WARN" "Failed to get PM2 status"
    else
        log "WARN" "PM2 not installed"
    fi
    
    # Process status
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate redundancy master running (PID: $pid)"
        else
            log "WARN" "PID file exists but process not running"
        fi
    else
        log "WARN" "No PID file found"
    fi
    
    # Check log files
    log "INFO" "Recent log entries:"
    tail -n 10 "$LOG_FILE" 2>/dev/null || log "WARN" "No log file found"
}

# Show system health
show_health() {
    log "INFO" "=== Ultimate Redundancy System Health Check ==="
    
    # Run health check
    cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs check || log "WARN" "Health check failed"
    
    # Show status
    show_status
}

# Generate report
generate_report() {
    log "INFO" "Generating redundancy report..."
    
    cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs report || log "WARN" "Report generation failed"
    
    # Show report location
    if [ -f "$WORKSPACE_DIR/automation/logs/redundancy-report.json" ]; then
        log "INFO" "Report generated: automation/logs/redundancy-report.json"
        cat "$WORKSPACE_DIR/automation/logs/redundancy-report.json" | jq '.' 2>/dev/null || cat "$WORKSPACE_DIR/automation/logs/redundancy-report.json"
    else
        log "WARN" "Report file not found"
    fi
}

# Show logs
show_logs() {
    local lines=${1:-50}
    log "INFO" "Showing last $lines log lines:"
    
    if [ -f "$LOG_FILE" ]; then
        tail -n "$lines" "$LOG_FILE"
    else
        log "WARN" "No log file found"
    fi
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            start_all
            ;;
        stop)
            stop_all
            ;;
        restart)
            restart_all
            ;;
        status)
            show_status
            ;;
        health)
            show_health
            ;;
        report)
            generate_report
            ;;
        logs)
            show_logs "$2"
            ;;
        check)
            cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs check
            ;;
        monitor)
            cd "$WORKSPACE_DIR" && node automation/ultimate-redundancy-master.cjs monitor
            ;;
        help|--help|-h)
            echo "Ultimate Redundancy System - Usage:"
            echo "  $0 [command]"
            echo ""
            echo "Commands:"
            echo "  start     - Start all redundancy systems"
            echo "  stop      - Stop all redundancy systems"
            echo "  restart   - Restart all redundancy systems"
            echo "  status    - Show system status"
            echo "  health    - Run health check"
            echo "  report    - Generate redundancy report"
            echo "  logs [N]  - Show last N log lines (default: 50)"
            echo "  check     - Run comprehensive check"
            echo "  monitor   - Start continuous monitoring"
            echo "  help      - Show this help message"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Trap signals
trap 'log "INFO" "Received signal, cleaning up..."; stop_all; exit 0' SIGINT SIGTERM

# Run main function
main "$@"