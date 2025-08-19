#!/bin/bash

# Ultimate Redundancy System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

log_success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOG_FILE"
}

log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

check_dependencies() {
    log "Checking system dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log_warning "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    # Check Git
    if ! command -v git &> /dev/null; then
        log_error "Git is not installed or not in PATH"
        exit 1
    fi
    
    log_success "All dependencies are available"
}

start_system() {
    log "Starting Ultimate Redundancy System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log_warning "Ultimate Redundancy System is already running (PID: $pid)"
            return 0
        else
            log_warning "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the system in background
    cd "$WORKSPACE_DIR"
    nohup node automation/ultimate-redundancy-system.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    log_success "Ultimate Redundancy System started (PID: $pid)"
    
    # Wait a moment and check if it's running
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        log_success "System is running and responding"
    else
        log_error "System failed to start properly"
        rm -f "$PID_FILE"
        return 1
    fi
}

stop_system() {
    log "Stopping Ultimate Redundancy System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log_warning "No PID file found, system may not be running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
        log "Sending stop signal to PID $pid..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log_warning "Force killing process..."
            kill -9 "$pid"
        fi
        
        log_success "System stopped"
    else
        log_warning "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
}

restart_system() {
    log "Restarting Ultimate Redundancy System..."
    stop_system
    sleep 2
    start_system
}

status_system() {
    log "Checking Ultimate Redundancy System status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log_success "System is running (PID: $pid)"
            
            # Get detailed status
            cd "$WORKSPACE_DIR"
            if node automation/ultimate-redundancy-system.cjs status > /dev/null 2>&1; then
                log "System status:"
                node automation/ultimate-redundancy-system.cjs status | jq '.' 2>/dev/null || \
                node automation/ultimate-redundancy-system.cjs status
            fi
        else
            log_error "System is not running (stale PID file)"
            rm -f "$PID_FILE"
        fi
    else
        log_warning "System is not running (no PID file)"
    fi
}

health_check() {
    log "Running health check..."
    
    cd "$WORKSPACE_DIR"
    if node automation/ultimate-redundancy-system.cjs health; then
        log_success "Health check passed"
    else
        log_error "Health check failed"
        return 1
    fi
}

recover_system() {
    log "Attempting system recovery..."
    
    cd "$WORKSPACE_DIR"
    if node automation/ultimate-redundancy-system.cjs recover; then
        log_success "Recovery completed"
    else
        log_error "Recovery failed"
        return 1
    fi
}

show_logs() {
    log "Showing recent logs..."
    
    if [ -f "$LOG_FILE" ]; then
        tail -n 100 "$LOG_FILE"
    else
        log_warning "No log file found"
    fi
}

monitor_system() {
    log "Starting real-time monitoring..."
    
    if [ ! -f "$PID_FILE" ]; then
        log_error "System is not running. Start it first with: $0 start"
        exit 1
    fi
    
    cd "$WORKSPACE_DIR"
    tail -f "$LOG_FILE"
}

setup_cron() {
    log "Setting up cron job for automatic startup..."
    
    local cron_job="*/5 * * * * cd $WORKSPACE_DIR && $0 health > /dev/null 2>&1 || $0 restart"
    
    if crontab -l 2>/dev/null | grep -q "ultimate-redundancy"; then
        log_warning "Cron job already exists"
    else
        (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
        log_success "Cron job added for automatic health monitoring"
    fi
}

remove_cron() {
    log "Removing cron job..."
    
    if crontab -l 2>/dev/null | grep -q "ultimate-redundancy"; then
        crontab -l 2>/dev/null | grep -v "ultimate-redundancy" | crontab -
        log_success "Cron job removed"
    else
        log_warning "No cron job found"
    fi
}

show_help() {
    echo "Ultimate Redundancy System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start the Ultimate Redundancy System"
    echo "  stop        Stop the Ultimate Redundancy System"
    echo "  restart     Restart the Ultimate Redundancy System"
    echo "  status      Show system status and health"
    echo "  health      Run a health check"
    echo "  recover     Attempt system recovery"
    echo "  logs        Show recent logs"
    echo "  monitor     Monitor logs in real-time"
    echo "  setup-cron  Setup automatic health monitoring via cron"
    echo "  remove-cron Remove automatic health monitoring cron job"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start        # Start the system"
    echo "  $0 status       # Check system status"
    echo "  $0 health       # Run health check"
    echo "  $0 monitor      # Monitor logs in real-time"
}

# Main script logic
case "${1:-help}" in
    start)
        check_dependencies
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        check_dependencies
        restart_system
        ;;
    status)
        status_system
        ;;
    health)
        health_check
        ;;
    recover)
        recover_system
        ;;
    logs)
        show_logs
        ;;
    monitor)
        monitor_system
        ;;
    setup-cron)
        setup_cron
        ;;
    remove-cron)
        remove_cron
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        log_error "Unknown command: $1"
        show_help
        exit 1
        ;;
esac