#!/bin/bash

# Automation Monitor and Maintainer Cron Job Manager
# This script manages the automation monitoring system

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
LAUNCHER="$PROJECT_DIR/launch-automation-monitor-and-maintainer.js"
PID_FILE="$PROJECT_DIR/automation-monitor.pid"
LOG_DIR="$PROJECT_DIR/logs"
REPORTS_DIR="$PROJECT_DIR/reports"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Function to check if system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to start the system
start() {
    log "Starting Automation Monitor and Maintainer System..."
    
    if is_running; then
        warning "System is already running"
        return 1
    fi
    
    # Create necessary directories
    mkdir -p "$LOG_DIR" "$REPORTS_DIR"
    
    # Start the system
    nohup node "$LAUNCHER" start > "$LOG_DIR/automation-monitor.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 2
    if is_running; then
        success "System started successfully (PID: $pid)"
        return 0
    else
        error "Failed to start system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the system
stop() {
    log "Stopping Automation Monitor and Maintainer System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            sleep 2
            
            if ps -p "$pid" > /dev/null 2>&1; then
                kill -9 "$pid"
                sleep 1
            fi
            
            rm -f "$PID_FILE"
            success "System stopped successfully"
        else
            warning "System was not running"
            rm -f "$PID_FILE"
        fi
    else
        warning "No PID file found"
    fi
}

# Function to restart the system
restart() {
    log "Restarting Automation Monitor and Maintainer System..."
    stop
    sleep 2
    start
}

# Function to check status
status() {
    log "Checking system status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        success "System is RUNNING (PID: $pid)"
        
        # Show basic stats
        if [ -d "$REPORTS_DIR" ]; then
            local report_count=$(find "$REPORTS_DIR" -name "*.json" | wc -l)
            log "Reports generated: $report_count"
        fi
        
        if [ -d "$LOG_DIR" ]; then
            local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
            log "Log files: $log_count"
        fi
        
        return 0
    else
        error "System is STOPPED"
        return 1
    fi
}

# Function to perform health check
health() {
    log "Performing health check..."
    
    if is_running; then
        node "$LAUNCHER" health
    else
        error "System is not running"
        return 1
    fi
}

# Function to generate report
report() {
    log "Generating system report..."
    
    if is_running; then
        node "$LAUNCHER" report
    else
        error "System is not running"
        return 1
    fi
}

# Function to create backup
backup() {
    log "Creating system backup..."
    
    if is_running; then
        node "$LAUNCHER" backup
    else
        error "System is not running"
        return 1
    fi
}

# Function to perform cleanup
cleanup() {
    log "Performing system cleanup..."
    
    if is_running; then
        node "$LAUNCHER" cleanup
    else
        error "System is not running"
        return 1
    fi
}

# Function to show logs
logs() {
    log "Showing recent logs..."
    
    if [ -f "$LOG_DIR/automation-monitor.log" ]; then
        tail -n 50 "$LOG_DIR/automation-monitor.log"
    else
        warning "No log file found"
    fi
}

# Function to show help
help() {
    echo "Automation Monitor and Maintainer Cron Job Manager"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the automation monitoring system"
    echo "  stop      Stop the automation monitoring system"
    echo "  restart   Restart the automation monitoring system"
    echo "  status    Check system status"
    echo "  health    Perform health check"
    echo "  report    Generate system report"
    echo "  backup    Create system backup"
    echo "  cleanup   Perform system cleanup"
    echo "  logs      Show recent logs"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
}

# Function to setup cron jobs
setup_cron() {
    log "Setting up cron jobs..."
    
    # Create cron job for health checks
    local cron_job="*/5 * * * * $SCRIPT_DIR/automation-monitor-and-maintainer-cron.sh health > /dev/null 2>&1"
    
    # Add to crontab if not already present
    if ! crontab -l 2>/dev/null | grep -q "automation-monitor-and-maintainer-cron.sh"; then
        (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
        success "Cron job added successfully"
    else
        warning "Cron job already exists"
    fi
}

# Function to remove cron jobs
remove_cron() {
    log "Removing cron jobs..."
    
    # Remove from crontab
    crontab -l 2>/dev/null | grep -v "automation-monitor-and-maintainer-cron.sh" | crontab -
    success "Cron jobs removed successfully"
}

# Main execution
case "${1:-}" in
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
    health)
        health
        ;;
    report)
        report
        ;;
    backup)
        backup
        ;;
    cleanup)
        cleanup
        ;;
    logs)
        logs
        ;;
    setup-cron)
        setup_cron
        ;;
    remove-cron)
        remove_cron
        ;;
    help|--help|-h)
        help
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        help
        exit 1
        ;;
esac

exit $?
