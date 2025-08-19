#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script provides redundancy for all PM2, GitHub Actions, and Netlify Functions automations

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
PM2_ECOSYSTEMS=(
    "ecosystem.pm2.cjs"
    "ecosystem.redundancy.cjs"
    "ecosystem-redundancy.pm2.cjs"
)

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message"
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy.log"
}

# Error handling
handle_error() {
    local exit_code=$?
    log "ERROR" "Script failed with exit code $exit_code"
    exit $exit_code
}

trap handle_error ERR

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first."
        exit 1
    fi
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
}

# Function to start PM2 processes
start_pm2_processes() {
    log "INFO" "Starting PM2 processes..."
    
    for ecosystem in "${PM2_ECOSYSTEMS[@]}"; do
        local ecosystem_path="$PROJECT_ROOT/$ecosystem"
        if [[ -f "$ecosystem_path" ]]; then
            log "INFO" "Starting PM2 ecosystem: $ecosystem"
            cd "$PROJECT_ROOT"
            pm2 start "$ecosystem" --update-env || {
                log "WARN" "Failed to start $ecosystem, continuing with others..."
            }
        else
            log "WARN" "Ecosystem file not found: $ecosystem"
        fi
    done
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "PM2 processes started"
}

# Function to start redundancy monitoring
start_redundancy_monitoring() {
    log "INFO" "Starting comprehensive redundancy monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Start the main redundancy system
    node automation/comprehensive-redundancy-system.cjs start &
    local redundancy_pid=$!
    echo "$redundancy_pid" > "$LOG_DIR/redundancy-system.pid"
    
    # Start additional redundancy components
    node automation/redundancy-automation-system.cjs &
    local basic_redundancy_pid=$!
    echo "$basic_redundancy_pid" >> "$LOG_DIR/redundancy-system.pid"
    
    # Start health monitoring
    node automation/redundancy-health-monitor.cjs &
    local health_pid=$!
    echo "$health_pid" >> "$LOG_DIR/redundancy-system.pid"
    
    # Start build monitoring
    node automation/redundancy-build-monitor.cjs &
    local build_pid=$!
    echo "$build_pid" >> "$LOG_DIR/redundancy-system.pid"
    
    # Start git sync monitoring
    node automation/redundancy-git-sync.cjs &
    local git_pid=$!
    echo "$git_pid" >> "$LOG_DIR/redundancy-system.pid"
    
    log "INFO" "Redundancy monitoring started with PIDs: $redundancy_pid, $basic_redundancy_pid, $health_pid, $build_pid, $git_pid"
}

# Function to check system health
check_system_health() {
    log "INFO" "Checking system health..."
    
    # Check PM2 status
    if pm2 status &> /dev/null; then
        log "INFO" "PM2 is running"
        pm2 status | grep -E "(online|errored|stopped)" || true
    else
        log "WARN" "PM2 is not running"
    fi
    
    # Check redundancy system status
    if [[ -f "$LOG_DIR/redundancy-system.pid" ]]; then
        local pids=$(cat "$LOG_DIR/redundancy-system.pid")
        for pid in $pids; do
            if kill -0 "$pid" 2>/dev/null; then
                log "INFO" "Redundancy process $pid is running"
            else
                log "WARN" "Redundancy process $pid is not running"
            fi
        done
    fi
    
    # Check log files
    local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
    log "INFO" "Found $log_count log files"
    
    # Check disk space
    local disk_usage=$(df -h "$PROJECT_ROOT" | tail -1 | awk '{print $5}')
    log "INFO" "Disk usage: $disk_usage"
}

# Function to stop all processes
stop_all_processes() {
    log "INFO" "Stopping all redundancy processes..."
    
    # Stop PM2 processes
    pm2 stop all || log "WARN" "Failed to stop some PM2 processes"
    pm2 kill || log "WARN" "Failed to kill PM2 daemon"
    
    # Stop redundancy processes
    if [[ -f "$LOG_DIR/redundancy-system.pid" ]]; then
        local pids=$(cat "$LOG_DIR/redundancy-system.pid")
        for pid in $pids; do
            if kill -0 "$pid" 2>/dev/null; then
                kill "$pid" || log "WARN" "Failed to kill process $pid"
            fi
        done
        rm -f "$LOG_DIR/redundancy-system.pid"
    fi
    
    log "INFO" "All processes stopped"
}

# Function to restart all processes
restart_all_processes() {
    log "INFO" "Restarting all processes..."
    stop_all_processes
    sleep 2
    start_pm2_processes
    start_redundancy_monitoring
    log "INFO" "All processes restarted"
}

# Function to show logs
show_logs() {
    local lines="${1:-50}"
    log "INFO" "Showing last $lines lines of logs..."
    
    if [[ -f "$LOG_DIR/comprehensive-redundancy.log" ]]; then
        tail -n "$lines" "$LOG_DIR/comprehensive-redundancy.log"
    else
        log "WARN" "No comprehensive redundancy log found"
    fi
    
    echo ""
    log "INFO" "PM2 logs:"
    pm2 logs --lines 20 --nostream || log "WARN" "Failed to show PM2 logs"
}

# Function to show status
show_status() {
    log "INFO" "=== Comprehensive Redundancy System Status ==="
    
    echo -e "${BLUE}PM2 Status:${NC}"
    pm2 status || echo "PM2 not running"
    
    echo -e "\n${BLUE}Redundancy Processes:${NC}"
    if [[ -f "$LOG_DIR/redundancy-system.pid" ]]; then
        local pids=$(cat "$LOG_DIR/redundancy-system.pid")
        for pid in $pids; do
            if kill -0 "$pid" 2>/dev/null; then
                echo -e "${GREEN}✓ Process $pid is running${NC}"
            else
                echo -e "${RED}✗ Process $pid is not running${NC}"
            fi
        done
    else
        echo "No redundancy processes found"
    fi
    
    echo -e "\n${BLUE}System Health:${NC}"
    check_system_health
    
    echo -e "\n${BLUE}Recent Logs:${NC}"
    tail -n 10 "$LOG_DIR/comprehensive-redundancy.log" 2>/dev/null || echo "No logs available"
}

# Function to perform health check
perform_health_check() {
    log "INFO" "Performing comprehensive health check..."
    
    # Check PM2 health
    if pm2 status &> /dev/null; then
        echo -e "${GREEN}✓ PM2 is running${NC}"
    else
        echo -e "${RED}✗ PM2 is not running${NC}"
    fi
    
    # Check redundancy system health
    if [[ -f "$LOG_DIR/redundancy-system.pid" ]]; then
        local all_running=true
        local pids=$(cat "$LOG_DIR/redundancy-system.pid")
        for pid in $pids; do
            if kill -0 "$pid" 2>/dev/null; then
                echo -e "${GREEN}✓ Redundancy process $pid is running${NC}"
            else
                echo -e "${RED}✗ Redundancy process $pid is not running${NC}"
                all_running=false
            fi
        done
        
        if [[ "$all_running" == "true" ]]; then
            echo -e "${GREEN}✓ All redundancy processes are running${NC}"
        else
            echo -e "${YELLOW}⚠ Some redundancy processes are not running${NC}"
        fi
    else
        echo -e "${RED}✗ No redundancy processes found${NC}"
    fi
    
    # Check log directory
    if [[ -d "$LOG_DIR" ]]; then
        echo -e "${GREEN}✓ Log directory exists${NC}"
        local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
        echo -e "${BLUE}  Found $log_count log files${NC}"
    else
        echo -e "${RED}✗ Log directory does not exist${NC}"
    fi
    
    # Check ecosystem files
    for ecosystem in "${PM2_ECOSYSTEMS[@]}"; do
        if [[ -f "$PROJECT_ROOT/$ecosystem" ]]; then
            echo -e "${GREEN}✓ Ecosystem file $ecosystem exists${NC}"
        else
            echo -e "${YELLOW}⚠ Ecosystem file $ecosystem not found${NC}"
        fi
    done
}

# Main script logic
main() {
    local command="${1:-start}"
    
    log "INFO" "Comprehensive Redundancy System - $command"
    
    case "$command" in
        "start")
            check_pm2
            check_node
            start_pm2_processes
            start_redundancy_monitoring
            sleep 3
            check_system_health
            log "INFO" "Comprehensive redundancy system started successfully"
            ;;
        "stop")
            stop_all_processes
            log "INFO" "Comprehensive redundancy system stopped"
            ;;
        "restart")
            restart_all_processes
            log "INFO" "Comprehensive redundancy system restarted"
            ;;
        "status")
            show_status
            ;;
        "health")
            perform_health_check
            ;;
        "logs")
            show_logs "$2"
            ;;
        "help"|"--help"|"-h")
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  start     Start all redundancy processes"
            echo "  stop      Stop all redundancy processes"
            echo "  restart   Restart all redundancy processes"
            echo "  status    Show system status"
            echo "  health    Perform health check"
            echo "  logs [n]  Show last n lines of logs (default: 50)"
            echo "  help      Show this help message"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"