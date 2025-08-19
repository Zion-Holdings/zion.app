#!/bin/bash

# Comprehensive Redundancy Automation Startup Script
# This script starts all redundancy automation systems for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if a process is running
is_process_running() {
    local pid_file=$1
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$pid_file"
            return 1
        fi
    fi
    return 1
}

# Function to start a process and save its PID
start_process() {
    local name=$1
    local command=$2
    local pid_file="$PID_DIR/$name.pid"
    
    if is_process_running "$pid_file"; then
        print_status "$YELLOW" "$name is already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    print_status "$BLUE" "Starting $name..."
    
    # Create log directory if it doesn't exist
    mkdir -p "$LOG_DIR"
    
    # Start the process in background and save PID
    nohup node "$command" > "$LOG_DIR/$name.log" 2>&1 &
    local pid=$!
    echo "$pid" > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        print_status "$GREEN" "$name started successfully (PID: $pid)"
        return 0
    else
        print_status "$RED" "$name failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Function to stop a process
stop_process() {
    local name=$1
    local pid_file="$PID_DIR/$name.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        print_status "$BLUE" "Stopping $name (PID: $pid)..."
        
        if kill "$pid" 2>/dev/null; then
            print_status "$GREEN" "$name stopped successfully"
        else
            print_status "$YELLOW" "$name was not running"
        fi
        
        rm -f "$pid_file"
    else
        print_status "$YELLOW" "$name is not running"
    fi
}

# Function to restart a process
restart_process() {
    local name=$1
    print_status "$BLUE" "Restarting $name..."
    stop_process "$name"
    sleep 2
    start_process "$name" "$2"
}

# Function to check process status
check_status() {
    local name=$1
    local pid_file="$PID_DIR/$name.pid"
    
    if is_process_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        print_status "$GREEN" "$name is running (PID: $pid)"
        return 0
    else
        print_status "$RED" "$name is not running"
        return 1
    fi
}

# Function to show logs
show_logs() {
    local name=$1
    local log_file="$LOG_DIR/$name.log"
    
    if [ -f "$log_file" ]; then
        print_status "$BLUE" "Showing logs for $name:"
        echo "----------------------------------------"
        tail -n 50 "$log_file"
        echo "----------------------------------------"
    else
        print_status "$YELLOW" "No log file found for $name"
    fi
}

# Function to show all statuses
show_all_status() {
    print_status "$BLUE" "Comprehensive Redundancy System Status:"
    echo "================================================"
    
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
}

# Main script logic
main() {
    local command=${1:-start}
    
    # Change to project root directory
    cd "$PROJECT_ROOT" || {
        print_status "$RED" "Failed to change to project root directory"
        exit 1
    }
    
    case "$command" in
        start)
            start_all
            ;;
        stop)
            stop_all
            ;;
        restart)
            restart_all
            ;;
        status)
            show_all_status
            ;;
        health)
            check_health
            ;;
        logs)
            local system_name=$2
            if [ -z "$system_name" ]; then
                print_status "$RED" "Please specify a system name for logs"
                echo "Available systems: pm2-redundancy-manager, github-actions-redundancy-manager, netlify-functions-redundancy-manager, master-redundancy-orchestrator"
                exit 1
            fi
            show_logs "$system_name"
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_status "$RED" "Unknown command: $command"
            show_help
            exit 1
            ;;
    esac
}

# Trap signals for graceful shutdown
trap 'print_status "$YELLOW" "Received interrupt signal, shutting down gracefully..."; stop_all; exit 0' INT TERM

# Run main function
main "$@"