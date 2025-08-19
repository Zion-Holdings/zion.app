#!/bin/bash

# Complete Redundancy Automation System Startup Script
# Provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/complete-redundancy.pid"
LOG_FILE="$LOG_DIR/complete-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"
STATUS_FILE="$WORKSPACE_DIR/automation/complete-redundancy-status.json"

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
            log "WARN" "Complete redundancy system already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start the complete redundancy system
start_system() {
    log "INFO" "Starting Complete Redundancy Automation System..."
    
    if check_running; then
        log "WARN" "System is already running"
        return 0
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed. Please install Node.js first."
    fi
    
    # Check if the main script exists
    local main_script="$WORKSPACE_DIR/automation/complete-redundancy-automation-system.cjs"
    if [ ! -f "$main_script" ]; then
        error_exit "Main script not found: $main_script"
    fi
    
    # Start the system in background
    cd "$WORKSPACE_DIR"
    nohup node "$main_script" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Wait a moment for the system to start
    sleep 2
    
    # Check if the system started successfully
    if ps -p "$pid" > /dev/null 2>&1; then
        echo "$pid" > "$PID_FILE"
        log "INFO" "Complete Redundancy Automation System started successfully (PID: $pid)"
        echo -e "${GREEN}✓ Complete Redundancy Automation System started (PID: $pid)${NC}"
    else
        error_exit "Failed to start Complete Redundancy Automation System"
    fi
}

# Stop the complete redundancy system
stop_system() {
    log "INFO" "Stopping Complete Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process (PID: $pid)"
            kill "$pid" || true
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Force killing process (PID: $pid)"
                kill -9 "$pid" || true
            fi
            
            rm -f "$PID_FILE"
            log "INFO" "Complete Redundancy Automation System stopped"
            echo -e "${YELLOW}✓ Complete Redundancy Automation System stopped${NC}"
        else
            log "WARN" "Process not running, removing stale PID file"
            rm -f "$PID_FILE"
        fi
    else
        log "INFO" "No PID file found, system may not be running"
        echo -e "${YELLOW}ℹ No PID file found, system may not be running${NC}"
    fi
}

# Restart the complete redundancy system
restart_system() {
    log "INFO" "Restarting Complete Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    log "INFO" "Checking Complete Redundancy Automation System status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo -e "${GREEN}✓ Complete Redundancy Automation System is RUNNING (PID: $pid)${NC}"
            
            # Show detailed status if available
            if [ -f "$STATUS_FILE" ]; then
                echo -e "\n${CYAN}Detailed Status:${NC}"
                cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
            fi
            
            # Show recent logs
            if [ -f "$LOG_FILE" ]; then
                echo -e "\n${CYAN}Recent Logs:${NC}"
                tail -n 20 "$LOG_FILE" | sed 's/^/  /'
            fi
        else
            echo -e "${RED}✗ Complete Redundancy Automation System is NOT RUNNING (stale PID: $pid)${NC}"
            rm -f "$PID_FILE"
        fi
    else
        echo -e "${RED}✗ Complete Redundancy Automation System is NOT RUNNING${NC}"
    fi
    
    # Check PM2 status
    if command -v pm2 &> /dev/null; then
        echo -e "\n${CYAN}PM2 Status:${NC}"
        pm2 status --no-daemon 2>/dev/null || echo "  PM2 not running or no processes"
    fi
    
    # Check GitHub Actions workflows
    echo -e "\n${CYAN}GitHub Actions Workflows:${NC}"
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    for workflow in "${workflows[@]}"; do
        if [ -f "$WORKSPACE_DIR/$workflow" ]; then
            echo -e "  ${GREEN}✓${NC} $workflow"
        else
            echo -e "  ${RED}✗${NC} $workflow"
        fi
    done
    
    # Check Netlify Functions
    echo -e "\n${CYAN}Netlify Functions:${NC}"
    local manifest="$WORKSPACE_DIR/netlify/functions/functions-manifest.json"
    if [ -f "$manifest" ]; then
        local function_count=$(jq '.functions | length' "$manifest" 2>/dev/null || echo "0")
        echo -e "  ${GREEN}✓${NC} Functions manifest found ($function_count functions)"
    else
        echo -e "  ${RED}✗${NC} Functions manifest not found"
    fi
}

# Show system health
show_health() {
    log "INFO" "Checking system health..."
    
    if [ -f "$STATUS_FILE" ]; then
        echo -e "${CYAN}System Health Status:${NC}"
        cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
    else
        echo -e "${YELLOW}ℹ No health status file found${NC}"
    fi
    
    # Run health check if system is running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo -e "\n${CYAN}Running Health Check:${NC}"
            cd "$WORKSPACE_DIR"
            node automation/complete-redundancy-automation-system.cjs health 2>/dev/null || echo "  Health check failed"
        fi
    fi
}

# Show system logs
show_logs() {
    log "INFO" "Showing system logs..."
    
    if [ -f "$LOG_FILE" ]; then
        echo -e "${CYAN}Complete Redundancy System Logs:${NC}"
        if [ "$1" = "tail" ]; then
            tail -n 50 "$LOG_FILE"
        elif [ "$1" = "follow" ]; then
            tail -f "$LOG_FILE"
        else
            cat "$LOG_FILE"
        fi
    else
        echo -e "${YELLOW}ℹ No log file found${NC}"
    fi
}

# Run redundancy check
run_redundancy_check() {
    log "INFO" "Running redundancy check..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            cd "$WORKSPACE_DIR"
            node automation/complete-redundancy-automation-system.cjs redundancy 2>/dev/null || echo "  Redundancy check failed"
        else
            echo -e "${RED}✗ System is not running${NC}"
        fi
    else
        echo -e "${RED}✗ System is not running${NC}"
    fi
}

# Show help
show_help() {
    echo -e "${CYAN}Complete Redundancy Automation System${NC}"
    echo -e "Provides comprehensive redundancy for all automation systems"
    echo -e ""
    echo -e "${YELLOW}Usage:${NC} $0 [COMMAND]"
    echo -e ""
    echo -e "${YELLOW}Commands:${NC}"
    echo -e "  start     Start the complete redundancy system"
    echo -e "  stop      Stop the complete redundancy system"
    echo -e "  restart   Restart the complete redundancy system"
    echo -e "  status    Show system status and health"
    echo -e "  health    Show detailed health information"
    echo -e "  logs      Show system logs"
    echo -e "  logs tail Show last 50 log lines"
    echo -e "  logs follow Follow logs in real-time"
    echo -e "  check     Run redundancy check"
    echo -e "  help      Show this help message"
    echo -e ""
    echo -e "${YELLOW}Examples:${NC}"
    echo -e "  $0 start"
    echo -e "  $0 status"
    echo -e "  $0 logs follow"
    echo -e ""
    echo -e "${YELLOW}Redundancy Layers:${NC}"
    echo -e "  • PM2 automations (ecosystems, processes)"
    echo -e "  • GitHub Actions (workflows, triggers)"
    echo -e "  • Netlify Functions (serverless functions)"
    echo -e "  • Build automation (npm scripts, monitoring)"
    echo -e "  • Health monitoring (status checks, alerts)"
}

# Main script logic
main() {
    local command="${1:-help}"
    
    case "$command" in
        start)
            start_system
            ;;
        stop)
            stop_system
            ;;
        restart)
            restart_system
            ;;
        status)
            check_status
            ;;
        health)
            show_health
            ;;
        logs)
            show_logs "$2"
            ;;
        check)
            run_redundancy_check
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            echo -e "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"