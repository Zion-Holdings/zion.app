#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive control over all automation redundancies

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
    nohup node automation/ultimate-redundancy-automation-system.cjs > "$LOG_FILE" 2>&1 &
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
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping process $pid..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Process did not stop gracefully, force killing..."
                kill -9 "$pid"
            fi
        fi
        
        rm -f "$PID_FILE"
    fi
    
    # Stop all PM2 processes
    log "INFO" "🛑 Stopping all PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "INFO" "✅ Ultimate Redundancy System stopped"
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
    log "INFO" "📊 Checking Ultimate Redundancy System status..."
    
    echo -e "\n${BLUE}=== Ultimate Redundancy System Status ===${NC}"
    
    # Check if main system is running
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}✅ Main System: RUNNING (PID: $pid)${NC}"
    else
        echo -e "${RED}❌ Main System: NOT RUNNING${NC}"
    fi
    
    # Check PM2 status
    echo -e "\n${BLUE}=== PM2 Status ===${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 status --no-daemon 2>/dev/null || echo "No PM2 processes running"
    else
        echo "PM2 not installed"
    fi
    
    # Check system health
    echo -e "\n${BLUE}=== System Health Check ===${NC}"
    if is_running; then
        cd "$PROJECT_ROOT"
        node automation/ultimate-redundancy-automation-system.cjs status 2>/dev/null || echo "Health check failed"
    fi
    
    # Check log files
    echo -e "\n${BLUE}=== Recent Logs ===${NC}"
    if [ -f "$LOG_FILE" ]; then
        tail -n 10 "$LOG_FILE" 2>/dev/null || echo "No recent logs"
    else
        echo "No log file found"
    fi
}

# Show system logs
logs() {
    log "INFO" "📋 Showing Ultimate Redundancy System logs..."
    
    if [ -f "$LOG_FILE" ]; then
        if [ "$1" = "follow" ]; then
            tail -f "$LOG_FILE"
        else
            tail -n 100 "$LOG_FILE"
        fi
    else
        log "WARN" "No log file found"
    fi
}

# Perform health check
health_check() {
    log "INFO" "🔍 Performing comprehensive health check..."
    
    cd "$PROJECT_ROOT"
    
    if command -v node &> /dev/null; then
        node automation/ultimate-redundancy-automation-system.cjs health-check
    else
        log "ERROR" "Node.js not available"
        return 1
    fi
}

# Perform system recovery
recover() {
    log "INFO" "🔄 Performing system recovery..."
    
    cd "$PROJECT_ROOT"
    
    if command -v node &> /dev/null; then
        node automation/ultimate-redundancy-automation-system.cjs recover
    else
        log "ERROR" "Node.js not available"
        return 1
    fi
}

# Show help
show_help() {
    echo -e "${BLUE}Ultimate Redundancy Automation System${NC}"
    echo -e "Usage: $0 {start|stop|restart|status|logs|health-check|recover|help}"
    echo -e ""
    echo -e "Commands:"
    echo -e "  start         Start the ultimate redundancy system"
    echo -e "  stop          Stop the ultimate redundancy system"
    echo -e "  restart       Restart the ultimate redundancy system"
    echo -e "  status        Show system status and health"
    echo -e "  logs          Show recent logs"
    echo -e "  logs follow   Follow logs in real-time"
    echo -e "  health-check  Perform comprehensive health check"
    echo -e "  recover       Perform system recovery"
    echo -e "  help          Show this help message"
    echo -e ""
    echo -e "The Ultimate Redundancy System provides comprehensive redundancy for:"
    echo -e "  • PM2 automations"
    echo -e "  • GitHub Actions automations"
    echo -e "  • Netlify Functions automations"
    echo -e ""
    echo -e "Logs are stored in: $LOG_DIR"
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
        logs "$2"
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
        echo -e "${RED}Unknown command: $1${NC}"
        show_help
        exit 1
        ;;
esac