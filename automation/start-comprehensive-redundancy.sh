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

    
    local all_healthy=true
    
    # Check PM2 Redundancy Manager
    if check_status "pm2-redundancy-manager"; then
        echo "✅ PM2 Redundancy Manager: RUNNING"
    else
        echo "❌ PM2 Redundancy Manager: STOPPED"
        all_healthy=false
    fi
    
    # Check GitHub Actions Redundancy Manager
    if check_status "github-actions-redundancy-manager"; then
        echo "✅ GitHub Actions Redundancy Manager: RUNNING"
    else
        echo "❌ GitHub Actions Redundancy Manager: STOPPED"
        all_healthy=false
    fi
    
    # Check Netlify Functions Redundancy Manager
    if check_status "netlify-functions-redundancy-manager"; then
        echo "✅ Netlify Functions Redundancy Manager: RUNNING"
    else
        echo "❌ Netlify Functions Redundancy Manager: STOPPED"
        all_healthy=false
    fi
    
    # Check Master Redundancy Orchestrator
    if check_status "master-redundancy-orchestrator"; then
        echo "✅ Master Redundancy Orchestrator: RUNNING"
    else
        echo "❌ Master Redundancy Orchestrator: STOPPED"
        all_healthy=false
    fi
    
    echo "================================================"
    
    if [ "$all_healthy" = true ]; then
        print_status "$GREEN" "All redundancy systems are running"
    else
        print_status "$RED" "Some redundancy systems are not running"
    fi
}

# Function to start all redundancy systems
start_all() {
    print_status "$BLUE" "Starting Comprehensive Redundancy Automation System..."
    
    # Create necessary directories
    mkdir -p "$LOG_DIR" "$PID_DIR"
    
    # Start PM2 Redundancy Manager
    start_process "pm2-redundancy-manager" "automation/pm2-redundancy-manager.cjs"
    
    # Start GitHub Actions Redundancy Manager
    start_process "github-actions-redundancy-manager" "automation/github-actions-redundancy-manager.cjs"
    
    # Start Netlify Functions Redundancy Manager
    start_process "netlify-functions-redundancy-manager" "automation/netlify-functions-redundancy-manager.cjs"
    
    # Start Master Redundancy Orchestrator
    start_process "master-redundancy-orchestrator" "automation/master-redundancy-orchestrator.cjs"
    
    print_status "$GREEN" "All redundancy systems started successfully"
    
    # Show status after startup
    sleep 3
    show_all_status
}

# Function to stop all redundancy systems
stop_all() {
    print_status "$BLUE" "Stopping Comprehensive Redundancy Automation System..."
    
    stop_process "master-redundancy-orchestrator"
    stop_process "netlify-functions-redundancy-manager"
    stop_process "github-actions-redundancy-manager"
    stop_process "pm2-redundancy-manager"
    
    print_status "$GREEN" "All redundancy systems stopped successfully"
}

# Function to restart all redundancy systems
restart_all() {
    print_status "$BLUE" "Restarting Comprehensive Redundancy Automation System..."
    stop_all
    sleep 3
    start_all
}

# Function to check system health
check_health() {
    print_status "$BLUE" "Running comprehensive health check..."
    
    # Check if all processes are running
    local all_healthy=true
    
    for process in "pm2-redundancy-manager" "github-actions-redundancy-manager" "netlify-functions-redundancy-manager" "master-redundancy-orchestrator"; do
        if ! check_status "$process" > /dev/null; then
            all_healthy=false
        fi
    done
    
    if [ "$all_healthy" = true ]; then
        print_status "$GREEN" "Health check passed: All systems are running"
        
        # Run health checks on each manager
        print_status "$BLUE" "Running individual system health checks..."
        
        # PM2 health check
        if is_process_running "$PID_DIR/pm2-redundancy-manager.pid"; then
            local pid=$(cat "$PID_DIR/pm2-redundancy-manager.pid")
            print_status "$GREEN" "PM2 Redundancy Manager health check passed"
        fi
        
        # GitHub Actions health check
        if is_process_running "$PID_DIR/github-actions-redundancy-manager.pid"; then
            local pid=$(cat "$PID_DIR/github-actions-redundancy-manager.pid")
            print_status "$GREEN" "GitHub Actions Redundancy Manager health check passed"
        fi
        
        # Netlify Functions health check
        if is_process_running "$PID_DIR/netlify-functions-redundancy-manager.pid"; then
            local pid=$(cat "$PID_DIR/netlify-functions-redundancy-manager.pid")
            print_status "$GREEN" "Netlify Functions Redundancy Manager health check passed"
        fi
        
        # Master Orchestrator health check
        if is_process_running "$PID_DIR/master-redundancy-orchestrator.pid"; then
            local pid=$(cat "$PID_DIR/master-redundancy-orchestrator.pid")
            print_status "$GREEN" "Master Redundancy Orchestrator health check passed"
        fi
        
    else
        print_status "$RED" "Health check failed: Some systems are not running"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy Automation Startup Script"
    echo "=================================================="
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  start       Start all redundancy systems (default)"
    echo "  stop        Stop all redundancy systems"
    echo "  restart     Restart all redundancy systems"
    echo "  status      Show status of all systems"
    echo "  health      Run comprehensive health check"
    echo "  logs <name> Show logs for a specific system"
    echo "  help        Show this help message"
    echo ""
    echo "System Names:"
    echo "  pm2-redundancy-manager"
    echo "  github-actions-redundancy-manager"
    echo "  netlify-functions-redundancy-manager"
    echo "  master-redundancy-orchestrator"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all systems"
    echo "  $0 status                   # Show all statuses"
    echo "  $0 logs pm2-redundancy-manager  # Show PM2 manager logs"
    echo "  $0 health                   # Run health check"
=======
# View logs
logs() {
    log "INFO" "Displaying Comprehensive Redundancy System logs..."
    
    if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
        tail -f "$LOG_DIR/comprehensive-redundancy.log"
    else
        log "WARN" "No log file found"
    fi
}

# Show system information
info() {
    log "INFO" "Comprehensive Redundancy System Information:"
    echo "  Workspace: $WORKSPACE_DIR"
    echo "  Script Directory: $SCRIPT_DIR"
    echo "  Log Directory: $LOG_DIR"
    echo "  Orchestrator: $ORCHESTRATOR_SCRIPT"
    echo "  PID File: $PID_FILE"
    echo ""
    
    # Check system requirements
    echo "System Requirements:"
    if command -v node &> /dev/null; then
        echo "  Node.js: $(node --version) ✓"
    else
        echo "  Node.js: Not found ✗"
    fi
    
    if command -v pm2 &> /dev/null; then
        echo "  PM2: $(pm2 --version) ✓"
    else
        echo "  PM2: Not found ✗"
    fi
    
    if command -v git &> /dev/null; then
        echo "  Git: $(git --version) ✓"
    else
        echo "  Git: Not found ✗"
    fi
    
    echo ""
    
    # Check configuration files
    echo "Configuration Files:"
    for ecosystem in ecosystem.pm2.cjs ecosystem.redundancy.cjs; do
        if [ -f "$WORKSPACE_DIR/$ecosystem" ]; then
            echo "  $ecosystem: ✓"
        else
            echo "  $ecosystem: ✗"
        fi
    done
    
    if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
        echo "  GitHub Workflows: ✓ ($(ls "$WORKSPACE_DIR/.github/workflows" | wc -l) workflows)"
    else
        echo "  GitHub Workflows: ✗"
    fi
    
    if [ -d "$WORKSPACE_DIR/netlify/functions" ]; then
        echo "  Netlify Functions: ✓ ($(ls "$WORKSPACE_DIR/netlify/functions" | wc -l) functions)"
    else
        echo "  Netlify Functions: ✗"
    fi
}

# Show help
show_help() {
    echo "Comprehensive Redundancy System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the comprehensive redundancy system"
    echo "  stop      Stop the comprehensive redundancy system"
    echo "  restart   Restart the comprehensive redundancy system"
    echo "  status    Show system status and health"
    echo "  health    Check system health"
    echo "  once      Run health check once"
    echo "  logs      View system logs (follow mode)"
    echo "  info      Show system information and requirements"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the system"
    echo "  $0 status         # Check status"
    echo "  $0 health         # Check health"
    echo "  $0 logs           # View logs"
    echo ""
    echo "The system provides redundancy for:"
    echo "  - PM2 process management"
    echo "  - GitHub Actions workflows"
    echo "  - Netlify functions"
    echo "  - Automated recovery and monitoring"
=======
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
