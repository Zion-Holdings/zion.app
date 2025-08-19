#!/bin/bash

# Comprehensive Redundancy System v3 Startup Script
# Provides redundancy for all PM2 automations, GitHub Actions automations, and Netlify functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy-v3.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy-v3.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"
REDUNDANCY_SCRIPT="$WORKSPACE_DIR/automation/comprehensive-redundancy-v3.cjs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
        "INFO")
            echo -e "[$timestamp] [${GREEN}INFO${NC}] $message" | tee -a "$LOG_FILE"
            ;;
        "WARN")
            echo -e "[$timestamp] [${YELLOW}WARN${NC}] $message" | tee -a "$LOG_FILE"
            ;;
        "ERROR")
            echo -e "[$timestamp] [${RED}ERROR${NC}] $message" | tee -a "$LOG_FILE"
            ;;
        "SUCCESS")
            echo -e "[$timestamp] [${GREEN}SUCCESS${NC}] $message" | tee -a "$LOG_FILE"
            ;;
        "DEBUG")
            echo -e "[$timestamp] [${BLUE}DEBUG${NC}] $message" | tee -a "$LOG_FILE"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
            ;;
    esac
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
            log "WARN" "Comprehensive redundancy system v3 already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check prerequisites
check_prerequisites() {
    log "INFO" "Checking prerequisites..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed. Please install Node.js first."
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        error_exit "Node.js version 18 or higher is required. Current version: $(node --version)"
    fi
    
    # Check if npm is installed
    if ! command -v npm &> /dev/null; then
        error_exit "npm is not installed. Please install npm first."
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed. Installing PM2..."
        npm install -g pm2 || error_exit "Failed to install PM2"
    fi
    
    # Check if redundancy script exists
    if [ ! -f "$REDUNDANCY_SCRIPT" ]; then
        error_exit "Redundancy script not found: $REDUNDANCY_SCRIPT"
    fi
    
    # Check if node-cron is installed
    if ! node -e "require('node-cron')" 2>/dev/null; then
        log "WARN" "node-cron not found, installing..."
        npm install node-cron || log "WARN" "Failed to install node-cron"
    fi
    
    log "SUCCESS" "All prerequisites satisfied"
}

# Start the redundancy system
start_redundancy() {
    log "INFO" "Starting Comprehensive Redundancy System v3..."
    
    # Check if already running
    if check_running; then
        log "WARN" "System is already running"
        return 0
    fi
    
    # Start the redundancy system
    cd "$WORKSPACE_DIR"
    nohup node "$REDUNDANCY_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if ps -p "$pid" > /dev/null 2>&1; then
        log "SUCCESS" "Comprehensive Redundancy System v3 started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_FILE"
        return 0
    else
        log "ERROR" "Failed to start redundancy system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the redundancy system
stop_redundancy() {
    log "INFO" "Stopping Comprehensive Redundancy System v3..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            # Try graceful shutdown first
            kill "$pid" 2>/dev/null || true
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Force killing process (PID: $pid)"
                kill -9 "$pid" 2>/dev/null || true
            fi
            
            log "SUCCESS" "Redundancy system stopped"
        else
            log "WARN" "Process not running (PID: $pid)"
        fi
        
        rm -f "$PID_FILE"
    else
        log "WARN" "No PID file found"
    fi
}

# Restart the redundancy system
restart_redundancy() {
    log "INFO" "Restarting Comprehensive Redundancy System v3..."
    stop_redundancy
    sleep 2
    start_redundancy
}

# Check status
check_status() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Comprehensive Redundancy System v3 is running (PID: $pid)"
            
            # Get detailed status from the script
            if [ -f "$REDUNDANCY_SCRIPT" ]; then
                cd "$WORKSPACE_DIR"
                node "$REDUNDANCY_SCRIPT" status 2>/dev/null || log "WARN" "Could not get detailed status"
            fi
            
            return 0
        else
            log "WARN" "PID file exists but process is not running"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        log "INFO" "Comprehensive Redundancy System v3 is not running"
        return 1
    fi
}

# Show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing recent logs from: $LOG_FILE"
        echo "----------------------------------------"
        tail -n 50 "$LOG_FILE" 2>/dev/null || echo "No logs available"
        echo "----------------------------------------"
    else
        log "WARN" "No log file found"
    fi
}

# Perform health check
health_check() {
    log "INFO" "Performing health check..."
    
    if [ -f "$REDUNDANCY_SCRIPT" ]; then
        cd "$WORKSPACE_DIR"
        node "$REDUNDANCY_SCRIPT" health 2>/dev/null || log "WARN" "Health check failed"
    else
        log "ERROR" "Redundancy script not found"
    fi
}

# Generate report
generate_report() {
    log "INFO" "Generating report..."
    
    if [ -f "$REDUNDANCY_SCRIPT" ]; then
        cd "$WORKSPACE_DIR"
        node "$REDUNDANCY_SCRIPT" report 2>/dev/null || log "WARN" "Report generation failed"
    else
        log "ERROR" "Redundancy script not found"
    fi
}

# Monitor mode
monitor_mode() {
    log "INFO" "Starting monitor mode (press Ctrl+C to stop)..."
    
    # Start the redundancy system if not running
    if ! check_running; then
        start_redundancy
    fi
    
    # Monitor loop
    while true; do
        clear
        echo -e "${CYAN}========================================${NC}"
        echo -e "${CYAN}  Comprehensive Redundancy System v3   ${NC}"
        echo -e "${CYAN}           Monitor Mode                ${NC}"
        echo -e "${CYAN}========================================${NC}"
        echo ""
        
        # Show status
        if check_status > /dev/null 2>&1; then
            echo -e "${GREEN}✓ System Status: RUNNING${NC}"
        else
            echo -e "${RED}✗ System Status: STOPPED${NC}"
        fi
        
        echo ""
        echo -e "${YELLOW}Recent Logs:${NC}"
        echo "----------------------------------------"
        tail -n 10 "$LOG_FILE" 2>/dev/null || echo "No logs available"
        echo "----------------------------------------"
        echo ""
        echo -e "${BLUE}Press Ctrl+C to exit monitor mode${NC}"
        
        sleep 10
    done
}

# Show help
show_help() {
    echo -e "${CYAN}Comprehensive Redundancy System v3${NC}"
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo -e "  ${GREEN}start${NC}     - Start the redundancy system"
    echo -e "  ${RED}stop${NC}      - Stop the redundancy system"
    echo -e "  ${YELLOW}restart${NC}   - Restart the redundancy system"
    echo -e "  ${BLUE}status${NC}    - Check system status"
    echo -e "  ${PURPLE}logs${NC}     - Show recent logs"
    echo -e "  ${CYAN}health${NC}    - Perform health check"
    echo -e "  ${GREEN}report${NC}    - Generate status report"
    echo -e "  ${YELLOW}monitor${NC}   - Start monitor mode"
    echo -e "  ${BLUE}help${NC}      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 monitor"
    echo ""
    echo "This system provides redundancy for:"
    echo "  • All PM2 automations"
    echo "  • All GitHub Actions automations"
    echo "  • All Netlify functions automations"
}

# Main script logic
main() {
    local command="${1:-help}"
    
    case "$command" in
        start)
            check_prerequisites
            start_redundancy
            ;;
        stop)
            stop_redundancy
            ;;
        restart)
            check_prerequisites
            restart_redundancy
            ;;
        status)
            check_status
            ;;
        logs)
            show_logs
            ;;
        health)
            health_check
            ;;
        report)
            generate_report
            ;;
        monitor)
            monitor_mode
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"