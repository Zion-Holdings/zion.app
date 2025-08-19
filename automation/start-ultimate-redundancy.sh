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
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.pid"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO") color=$GREEN ;;
        "WARN") color=$YELLOW ;;
        "ERROR") color=$RED ;;
        "DEBUG") color=$BLUE ;;
        *) color=$NC ;;
    esac
    
    echo -e "${color}[$timestamp] [$level] $message${NC}"
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate redundancy system is already running (PID: $pid)"
            return 0
        else
            log "WARN" "PID file exists but process is not running, cleaning up..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start PM2 redundancy services
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy services..."
    
    cd "$PROJECT_ROOT"
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first."
        return 1
    fi
    
    # Start comprehensive redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || {
            log "WARN" "Failed to start comprehensive redundancy ecosystem, trying alternative..."
            pm2 start ecosystem.redundancy.pm2.cjs --update-env || {
                log "ERROR" "Failed to start PM2 redundancy services"
                return 1
            }
        }
    fi
    
    # Start additional redundancy systems
    if [ -f "ecosystem.redundancy.pm2.cjs" ]; then
        log "INFO" "Starting additional PM2 redundancy services..."
        pm2 start ecosystem.redundancy.pm2.cjs --update-env || log "WARN" "Failed to start additional redundancy services"
    fi
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || log "WARN" "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 20M || log "WARN" "Failed to set log size"
    pm2 set pm2-logrotate:retain 50 || log "WARN" "Failed to set log retention"
    pm2 set pm2-logrotate:compress true || log "WARN" "Failed to set log compression"
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "PM2 redundancy services started successfully"
}

# Start GitHub Actions redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Check workflow files
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    for workflow in "${workflows[@]}"; do
        if [ -f "$workflow" ]; then
            log "INFO" "Found workflow: $workflow"
        else
            log "WARN" "Missing workflow: $workflow"
        fi
    done
    
    # Start GitHub Actions redundancy manager
    if [ -f "automation/enhanced-github-actions-redundancy.cjs" ]; then
        log "INFO" "Starting GitHub Actions redundancy manager..."
        pm2 start automation/enhanced-github-actions-redundancy.cjs --name "github-actions-redundancy" || {
            log "WARN" "Failed to start GitHub Actions redundancy manager"
        }
    fi
    
    log "INFO" "GitHub Actions redundancy monitoring started"
}

# Start Netlify Functions redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify Functions redundancy monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Check Netlify functions manifest
    if [ ! -f "netlify/functions/functions-manifest.json" ]; then
        log "WARN" "Netlify functions manifest missing, regenerating..."
        if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
            node scripts/generate-netlify-functions-manifest.cjs || {
                log "ERROR" "Failed to regenerate Netlify functions manifest"
                return 1
            }
        fi
    fi
    
    # Start Netlify Functions redundancy manager
    if [ -f "automation/enhanced-netlify-functions-redundancy.cjs" ]; then
        log "INFO" "Starting Netlify Functions redundancy manager..."
        pm2 start automation/enhanced-netlify-functions-redundancy.cjs --name "netlify-functions-redundancy" || {
            log "WARN" "Failed to start Netlify Functions redundancy manager"
        }
    fi
    
    log "INFO" "Netlify Functions redundancy monitoring started"
}

# Start Git sync redundancy
start_git_redundancy() {
    log "INFO" "Starting Git sync redundancy..."
    
    cd "$PROJECT_ROOT"
    
    # Check git status
    if ! git status > /dev/null 2>&1; then
        log "ERROR" "Git repository not accessible"
        return 1
    fi
    
    # Start Git sync redundancy
    if [ -f "automation/redundancy-git-sync.cjs" ]; then
        log "INFO" "Starting Git sync redundancy..."
        pm2 start automation/redundancy-git-sync.cjs --name "git-sync-redundancy" || {
            log "WARN" "Failed to start Git sync redundancy"
        }
    fi
    
    log "INFO" "Git sync redundancy started"
}

# Start build monitoring redundancy
start_build_redundancy() {
    log "INFO" "Starting build monitoring redundancy..."
    
    cd "$PROJECT_ROOT"
    
    # Start build monitoring
    if [ -f "automation/redundancy-build-monitor.cjs" ]; then
        log "INFO" "Starting build monitoring..."
        pm2 start automation/redundancy-build-monitor.cjs --name "build-monitor-redundancy" || {
            log "WARN" "Failed to start build monitoring"
        }
    fi
    
    log "INFO" "Build monitoring redundancy started"
}

# Start ultimate redundancy master
start_ultimate_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Starting ultimate redundancy master system..."
        pm2 start automation/ultimate-redundancy-master.cjs --name "ultimate-redundancy-master" || {
            log "ERROR" "Failed to start ultimate redundancy master"
            return 1
        }
    else
        log "ERROR" "Ultimate redundancy master script not found"
        return 1
    fi
    
    log "INFO" "Ultimate redundancy master started successfully"
}

# Start health monitoring
start_health_monitoring() {
    log "INFO" "Starting health monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Start health monitor
    if [ -f "automation/redundancy-health-monitor.cjs" ]; then
        log "INFO" "Starting redundancy health monitor..."
        pm2 start automation/redundancy-health-monitor.cjs --name "redundancy-health-monitor" || {
            log "WARN" "Failed to start redundancy health monitor"
        }
    fi
    
    log "INFO" "Health monitoring started"
}

# Start comprehensive monitoring dashboard
start_monitoring_dashboard() {
    log "INFO" "Starting comprehensive monitoring dashboard..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/comprehensive-monitoring-dashboard.cjs" ]; then
        log "INFO" "Starting comprehensive monitoring dashboard..."
        pm2 start automation/comprehensive-monitoring-dashboard.cjs --name "comprehensive-monitoring-dashboard" || {
            log "WARN" "Failed to start comprehensive monitoring dashboard"
        }
    fi
    
    log "INFO" "Comprehensive monitoring dashboard started"
}

# Main startup function
start() {
    log "INFO" "Starting Ultimate Redundancy System..."
    
    if check_running; then
        log "INFO" "System is already running"
        return 0
    fi
    
    # Create PID file
    echo $$ > "$PID_FILE"
    
    # Start all redundancy systems
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_git_redundancy
    start_build_redundancy
    start_health_monitoring
    start_monitoring_dashboard
    start_ultimate_master
    
    # Final status check
    log "INFO" "Performing final status check..."
    pm2 status
    
    log "INFO" "Ultimate Redundancy System started successfully!"
    log "INFO" "PID: $$"
    log "INFO" "Logs: $LOG_DIR"
    
    # Keep script running for monitoring
    while true; do
        sleep 60
        if ! ps -p $$ > /dev/null 2>&1; then
            break
        fi
    done
}

# Stop function
stop() {
    log "INFO" "Stopping Ultimate Redundancy System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process $pid..."
            kill "$pid" || log "WARN" "Failed to stop process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop PM2 processes
    cd "$PROJECT_ROOT"
    pm2 stop ultimate-redundancy-master 2>/dev/null || true
    pm2 stop comprehensive-monitoring-dashboard 2>/dev/null || true
    pm2 stop redundancy-health-monitor 2>/dev/null || true
    pm2 stop git-sync-redundancy 2>/dev/null || true
    pm2 stop build-monitor-redundancy 2>/dev/null || true
    pm2 stop github-actions-redundancy 2>/dev/null || true
    pm2 stop netlify-functions-redundancy 2>/dev/null || true
    
    log "INFO" "Ultimate Redundancy System stopped"
}

# Restart function
restart() {
    log "INFO" "Restarting Ultimate Redundancy System..."
    stop
    sleep 2
    start
}

# Status function
status() {
    log "INFO" "Ultimate Redundancy System Status:"
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Main process running (PID: $pid)"
        else
            log "WARN" "PID file exists but process is not running"
        fi
    else
        log "INFO" "Main process not running"
    fi
    
    cd "$PROJECT_ROOT"
    log "INFO" "PM2 Status:"
    pm2 status || log "WARN" "PM2 not accessible"
}

# Logs function
logs() {
    log "INFO" "Showing Ultimate Redundancy System logs..."
    
    cd "$PROJECT_ROOT"
    
    # Show PM2 logs
    log "INFO" "PM2 Logs:"
    pm2 logs --lines 50 || log "WARN" "Failed to show PM2 logs"
    
    # Show log files
    log "INFO" "Log files in $LOG_DIR:"
    ls -la "$LOG_DIR"/*.log 2>/dev/null || log "WARN" "No log files found"
}

# Test function
test() {
    log "INFO" "Testing Ultimate Redundancy System..."
    
    cd "$PROJECT_ROOT"
    
    # Test PM2
    if command -v pm2 &> /dev/null; then
        log "INFO" "PM2: OK"
    else
        log "ERROR" "PM2: Not installed"
    fi
    
    # Test Node.js
    if command -v node &> /dev/null; then
        log "INFO" "Node.js: OK ($(node --version))"
    else
        log "ERROR" "Node.js: Not installed"
    fi
    
    # Test Git
    if command -v git &> /dev/null; then
        log "INFO" "Git: OK ($(git --version))"
    else
        log "ERROR" "Git: Not installed"
    fi
    
    # Test required files
    local required_files=(
        "automation/ultimate-redundancy-master.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
        "package.json"
    )
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            log "INFO" "File $file: OK"
        else
            log "WARN" "File $file: Missing"
        fi
    done
    
    log "INFO" "Test completed"
}

# Main script logic
case "${1:-start}" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    logs)
        logs
        ;;
    test)
        test
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs|test}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the ultimate redundancy system"
        echo "  stop    - Stop the ultimate redundancy system"
        echo "  restart - Restart the ultimate redundancy system"
        echo "  status  - Show system status"
        echo "  logs    - Show system logs"
        echo "  test    - Test system requirements"
        exit 1
        ;;
esac