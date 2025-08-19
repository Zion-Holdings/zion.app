#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive control over all automation redundancies
# including PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"

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
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
            ;;
    esac
}

# Check if system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the ultimate redundancy system
start() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    cd "$PROJECT_ROOT"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing globally..."
        npm install -g pm2
    fi
    
    # Start the ultimate redundancy system
    nohup node automation/ultimate-redundancy-automation-system.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "✅ Ultimate Redundancy System started successfully (PID: $pid)"
        
        # Start comprehensive PM2 ecosystem
        log "INFO" "🔄 Starting comprehensive PM2 ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env
        
        # Save PM2 configuration
        pm2 save
        
        log "INFO" "✅ All systems started successfully"
        return 0
    else
        log "ERROR" "❌ Failed to start Ultimate Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the ultimate redundancy system
stop() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System..."
    
    if ! is_running; then
        log "WARN" "System is not running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    
    # Stop the ultimate redundancy process
    if kill -0 "$pid" 2>/dev/null; then
        kill "$pid"
        log "INFO" "✅ Ultimate Redundancy System stopped (PID: $pid)"
    fi
    
    # Stop all PM2 processes
    log "INFO" "🔄 Stopping all PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Clean up PID file
    rm -f "$PID_FILE"
    
    log "INFO" "✅ All systems stopped successfully"
}

# Restart the ultimate redundancy system
restart() {
    log "INFO" "🔄 Restarting Ultimate Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Check system status
status() {
    echo "🔍 Ultimate Redundancy Automation System Status"
    echo "=============================================="
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}✅ System Status: RUNNING${NC}"
        echo "PID: $pid"
        echo "Log File: $LOG_FILE"
        
        # Check PM2 status
        echo ""
        echo "🔄 PM2 Status:"
        pm2 status 2>/dev/null || echo "PM2 not running or not installed"
        
        # Check log file size
        if [ -f "$LOG_FILE" ]; then
            local size=$(du -h "$LOG_FILE" | cut -f1)
            echo "Log Size: $size"
        fi
    else
        echo -e "${RED}❌ System Status: STOPPED${NC}"
    fi
}

# Show system logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        echo "📋 Ultimate Redundancy System Logs"
        echo "================================="
        tail -n 50 "$LOG_FILE"
    else
        echo "❌ No log file found"
    fi
}

# Perform health check
health_check() {
    log "INFO" "🏥 Performing comprehensive health check..."
    
    cd "$PROJECT_ROOT"
    
    # Check if ultimate redundancy system is running
    if is_running; then
        log "INFO" "✅ Ultimate Redundancy System: RUNNING"
    else
        log "WARN" "⚠️ Ultimate Redundancy System: STOPPED"
    fi
    
    # Check PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "🔄 Checking PM2 processes..."
        pm2 status 2>/dev/null || log "WARN" "PM2 not running"
    else
        log "WARN" "⚠️ PM2 not installed"
    fi
    
    # Check Node.js processes
    log "INFO" "🔄 Checking Node.js processes..."
    local node_processes=$(ps aux | grep -v grep | grep "ultimate-redundancy-automation-system" | wc -l)
    log "INFO" "Node.js redundancy processes: $node_processes"
    
    # Check log files
    if [ -f "$LOG_FILE" ]; then
        local log_size=$(du -h "$LOG_FILE" | cut -f1)
        log "INFO" "Log file size: $log_size"
    fi
    
    log "INFO" "🏥 Health check completed"
}

# Perform system recovery
recover() {
    log "INFO" "🔄 Performing system recovery..."
    
    # Stop all systems
    stop
    
    # Wait for cleanup
    sleep 3
    
    # Start fresh
    start
    
    log "INFO" "✅ System recovery completed"
}

# Show help
show_help() {
    echo "Ultimate Redundancy Automation System"
    echo "===================================="
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|health-check|recover}"
    echo ""
    echo "Commands:"
    echo "  start        Start the ultimate redundancy system"
    echo "  stop         Stop the ultimate redundancy system"
    echo "  restart      Restart the ultimate redundancy system"
    echo "  status       Show system status"
    echo "  logs         Show system logs"
    echo "  health-check Perform comprehensive health check"
    echo "  recover      Perform system recovery"
    echo "  help         Show this help message"
    echo ""
    echo "This script manages comprehensive redundancy for:"
    echo "  • PM2 process management"
    echo "  • GitHub Actions workflows"
    echo "  • Netlify Functions"
    echo "  • Ultimate redundancy automation system"
}

# Main script logic
case "${1:-help}" in
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
    health-check)
        health_check
        ;;
    recover)
        recover
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "❌ Unknown command: $1"
        show_help
        exit 1
        ;;
esac