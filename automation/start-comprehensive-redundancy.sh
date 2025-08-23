#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script manages all redundancy automations for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy.log"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/comprehensive-redundancy-orchestrator.cjs"

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

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, some features may not work"
        return 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
    return 0
}

# Check if orchestrator script exists
check_orchestrator() {
    if [[ ! -f "$ORCHESTRATOR_SCRIPT" ]]; then
        log "ERROR" "Orchestrator script not found: $ORCHESTRATOR_SCRIPT"
        exit 1
    fi
    
    log "INFO" "Orchestrator script found: $ORCHESTRATOR_SCRIPT"
}

# Start the comprehensive redundancy system
start_system() {
    log "INFO" "Starting Comprehensive Redundancy System..."
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "System already running with PID $pid"
            return 1
        else
            log "INFO" "Removing stale PID file"
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the orchestrator
    nohup node "$ORCHESTRATOR_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    log "INFO" "System started with PID $pid"
    
    # Wait a moment and check if it's running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "System started successfully"
        show_status
    else
        log "ERROR" "Failed to start system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the comprehensive redundancy system
stop_system() {
    log "INFO" "Stopping Comprehensive Redundancy System..."
    
    if [[ ! -f "$PID_FILE" ]]; then
        log "WARN" "No PID file found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    if ! kill -0 "$pid" 2>/dev/null; then
        log "WARN" "Process $pid not running, removing stale PID file"
        rm -f "$PID_FILE"
        return 1
    fi
    
    # Stop the orchestrator gracefully
    if node "$ORCHESTRATOR_SCRIPT" stop; then
        log "INFO" "Orchestrator stopped gracefully"
    else
        log "WARN" "Graceful stop failed, forcing termination"
        kill -TERM "$pid"
        sleep 5
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Process still running, killing forcefully"
            kill -KILL "$pid"
        fi
    fi
    
    rm -f "$PID_FILE"
    log "INFO" "System stopped"
}

# Restart the comprehensive redundancy system
restart_system() {
    log "INFO" "Restarting Comprehensive Redundancy System..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    if [[ ! -f "$PID_FILE" ]]; then
        echo -e "${RED}System not running${NC}"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    if kill -0 "$pid" 2>/dev/null; then
        echo -e "${GREEN}System running with PID $pid${NC}"
        
        # Get detailed status from orchestrator
        if node "$ORCHESTRATOR_SCRIPT" status 2>/dev/null; then
            echo ""
        fi
        return 0
    else
        echo -e "${RED}System not running (stale PID file)${NC}"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Show system status
show_status() {
    echo -e "${BLUE}=== Comprehensive Redundancy System Status ===${NC}"
    
    # Check if system is running
    if check_status; then
        echo ""
        
        # Check PM2 status
        if command -v pm2 &> /dev/null; then
            echo -e "${BLUE}PM2 Status:${NC}"
            pm2 status --no-daemon 2>/dev/null || echo "PM2 not running"
        fi
        
        # Check GitHub Actions workflows
        echo -e "${BLUE}GitHub Actions Workflows:${NC}"
        if [[ -d "$WORKSPACE_DIR/.github/workflows" ]]; then
            ls -la "$WORKSPACE_DIR/.github/workflows/" | grep "\.yml$" || echo "No workflows found"
        else
            echo "GitHub workflows directory not found"
        fi
        
        # Check Netlify functions
        echo -e "${BLUE}Netlify Functions:${NC}"
        if [[ -d "$WORKSPACE_DIR/netlify/functions" ]]; then
            ls -la "$WORKSPACE_DIR/netlify/functions/" | grep "\.js$" | wc -l | xargs echo "Functions found:"
        else
            echo "Netlify functions directory not found"
        fi
        
        echo ""
        echo -e "${BLUE}Logs:${NC}"
        echo "Main log: $LOG_FILE"
        echo "PM2 logs: pm2 logs"
    fi
}

# Show system health
show_health() {
    echo -e "${BLUE}=== System Health Check ===${NC}"
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            node "$ORCHESTRATOR_SCRIPT" health
        else
            echo -e "${RED}System not running${NC}"
        fi
    else
        echo -e "${RED}System not running${NC}"
    fi
}

# Show logs
show_logs() {
    echo -e "${BLUE}=== System Logs ===${NC}"
    
    if [[ -f "$LOG_FILE" ]]; then
        tail -n 50 "$LOG_FILE"
    else
        echo "No log file found"
    fi
    
    echo ""
    echo -e "${BLUE}=== PM2 Logs ===${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 logs --lines 20 --nostream 2>/dev/null || echo "PM2 logs not available"
    fi
}

# Run health check
run_health_check() {
    echo -e "${BLUE}=== Running Health Check ===${NC}"
    
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            node "$ORCHESTRATOR_SCRIPT" once
        else
            echo -e "${RED}System not running${NC}"
        fi
    else
        echo -e "${RED}System not running${NC}"
    fi
}

# Show help
show_help() {
    echo -e "${BLUE}Comprehensive Redundancy System Management${NC}"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the comprehensive redundancy system"
    echo "  stop      Stop the comprehensive redundancy system"
    echo "  restart   Restart the comprehensive redundancy system"
    echo "  status    Show system status"
    echo "  health    Show system health"
    echo "  logs      Show system logs"
    echo "  check     Run health check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 health"
    echo ""
}

# Main function
main() {
    local command="${1:-help}"
    
    # Check prerequisites
    check_node
    check_pm2 || true
    check_orchestrator
    
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
            show_status
            ;;
        health)
            show_health
            ;;
        logs)
            show_logs
            ;;
        check)
            run_health_check
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"