#!/bin/bash

# Master Launcher for All Redundancy Automation Systems
# This script launches all redundancy systems in the correct order

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_DIR="$WORKSPACE_DIR/automation/pids"

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

# Function to create necessary directories
ensure_directories() {
    local dirs=("$LOG_DIR" "$PID_DIR")
    for dir in "${dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            print_status "$BLUE" "Created directory: $dir"
        fi
    done
}

# Function to check if a process is running
is_process_running() {
    local pid_file="$1"
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

# Function to start a system
start_system() {
    local system_name="$1"
    local start_command="$2"
    local pid_file="$PID_DIR/${system_name}.pid"
    
    if is_process_running "$pid_file"; then
        print_status "$YELLOW" "$system_name is already running (PID: $(cat $pid_file))"
        return 0
    fi
    
    print_status "$BLUE" "Starting $system_name..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the system in background
    eval "$start_command" > "$LOG_DIR/${system_name}.out" 2> "$LOG_DIR/${system_name}.err" &
    
    local pid=$!
    echo "$pid" > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 3
    
    if is_process_running "$pid_file"; then
        print_status "$GREEN" "$system_name started successfully (PID: $pid)"
        return 0
    else
        print_status "$RED" "Failed to start $system_name"
        rm -f "$pid_file"
        return 1
    fi
}

# Function to stop a system
stop_system() {
    local system_name="$1"
    local pid_file="$PID_DIR/${system_name}.pid"
    
    if ! is_process_running "$pid_file"; then
        print_status "$YELLOW" "$system_name is not running"
        return 0
    fi
    
    local pid=$(cat "$pid_file")
    print_status "$BLUE" "Stopping $system_name (PID: $pid)..."
    
    # Try graceful shutdown first
    if kill -TERM "$pid" 2>/dev/null; then
        # Wait for graceful shutdown
        local count=0
        while [ $count -lt 10 ] && is_process_running "$pid_file"; do
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if is_process_running "$pid_file"; then
            print_status "$YELLOW" "Force killing $system_name..."
            kill -KILL "$pid" 2>/dev/null || true
        fi
    fi
    
    rm -f "$pid_file"
    print_status "$GREEN" "$system_name stopped"
}

# Function to start all systems
start_all_systems() {
    print_status "$BLUE" "Starting all redundancy automation systems..."
    
    ensure_directories
    
    # Start systems in order of dependency
    local systems=(
        "ultimate-redundancy-automation:node automation/ultimate-redundancy-automation-system.cjs start"
        "comprehensive-backup-recovery:node automation/comprehensive-backup-recovery-system.cjs start"
        "comprehensive-automation-monitor:node automation/comprehensive-automation-monitor.cjs start"
    )
    
    local failed_systems=()
    
    for system in "${systems[@]}"; do
        local system_name=$(echo "$system" | cut -d':' -f1)
        local start_command=$(echo "$system" | cut -d':' -f2-)
        
        if start_system "$system_name" "$start_command"; then
            print_status "$GREEN" "$system_name started successfully"
        else
            print_status "$RED" "$system_name failed to start"
            failed_systems+=("$system_name")
        fi
        
        # Wait between starts to avoid overwhelming the system
        sleep 2
    done
    
    if [ ${#failed_systems[@]} -eq 0 ]; then
        print_status "$GREEN" "All redundancy automation systems started successfully!"
    else
        print_status "$RED" "Some systems failed to start: ${failed_systems[*]}"
        return 1
    fi
}

# Function to stop all systems
stop_all_systems() {
    print_status "$BLUE" "Stopping all redundancy automation systems..."
    
    local systems=(
        "ultimate-redundancy-automation"
        "comprehensive-backup-recovery"
        "comprehensive-automation-monitor"
    )
    
    for system in "${systems[@]}"; do
        stop_system "$system"
    done
    
    print_status "$GREEN" "All redundancy automation systems stopped"
}

# Function to restart all systems
restart_all_systems() {
    print_status "$BLUE" "Restarting all redundancy automation systems..."
    stop_all_systems
    sleep 5
    start_all_systems
}

# Function to check status of all systems
check_status() {
    print_status "$BLUE" "Checking status of all redundancy automation systems..."
    
    local systems=(
        "ultimate-redundancy-automation"
        "comprehensive-backup-recovery"
        "comprehensive-automation-monitor"
    )
    
    local all_running=true
    
    for system in "${systems[@]}"; do
        local pid_file="$PID_DIR/${system}.pid"
        if is_process_running "$pid_file"; then
            local pid=$(cat "$pid_file")
            print_status "$GREEN" "$system: Running (PID: $pid)"
        else
            print_status "$RED" "$system: Not running"
            all_running=false
        fi
    done
    
    echo
    if [ "$all_running" = true ]; then
        print_status "$GREEN" "All systems are running"
    else
        print_status "$RED" "Some systems are not running"
        return 1
    fi
}

# Function to show logs
show_logs() {
    local system_name="$1"
    
    if [ -z "$system_name" ]; then
        print_status "$BLUE" "Available log files:"
        ls -la "$LOG_DIR"/*.log 2>/dev/null || echo "No log files found"
        return
    fi
    
    local log_file="$LOG_DIR/${system_name}.log"
    if [ -f "$log_file" ]; then
        print_status "$BLUE" "=== $system_name Log ==="
        tail -50 "$log_file"
    else
        print_status "$RED" "Log file not found: $log_file"
    fi
}

# Function to show system information
show_info() {
    print_status "$BLUE" "=== Redundancy Automation Systems Information ==="
    echo "Workspace: $WORKSPACE_DIR"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "PID Directory: $PID_DIR"
    echo
    
    # Check dependencies
    print_status "$BLUE" "=== Dependency Check ==="
    
    if command -v node >/dev/null 2>&1; then
        echo "Node.js: $(node --version) ✓"
    else
        echo "Node.js: Not installed ✗"
    fi
    
    if command -v npm >/dev/null 2>&1; then
        echo "npm: $(npm --version) ✓"
    else
        echo "npm: Not installed ✗"
    fi
    
    if command -v pm2 >/dev/null 2>&1; then
        echo "PM2: $(pm2 --version) ✓"
    else
        echo "PM2: Not installed ✗"
    fi
    
    if command -v git >/dev/null 2>&1; then
        echo "Git: $(git --version) ✓"
    else
        echo "Git: Not installed ✗"
    fi
    
    echo
    
    # Check automation files
    print_status "$BLUE" "=== Automation Files ==="
    local automation_files=(
        "automation/ultimate-redundancy-automation-system.cjs"
        "automation/comprehensive-backup-recovery-system.cjs"
        "automation/comprehensive-automation-monitor.cjs"
        "automation/start-ultimate-redundancy-automation.sh"
    )
    
    for file in "${automation_files[@]}"; do
        if [ -f "$WORKSPACE_DIR/$file" ]; then
            echo "$file: ✓"
        else
            echo "$file: ✗"
        fi
    done
    
    echo
    
    # Check system resources
    print_status "$BLUE" "=== System Resources ==="
    echo "CPU Usage: $(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1)%"
    echo "Memory Usage: $(free | grep Mem | awk '{printf "%.1f%%", $3/$2 * 100.0}')"
    echo "Disk Usage: $(df / | tail -1 | awk '{print $5}')"
}

# Function to cleanup
cleanup() {
    print_status "$BLUE" "Cleaning up..."
    
    # Stop all systems
    stop_all_systems
    
    # Clean old log files (keep last 10)
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.out" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.err" -type f -mtime +7 -delete 2>/dev/null || true
    fi
    
    print_status "$GREEN" "Cleanup completed"
}

# Function to show help
show_help() {
    echo "Master Launcher for All Redundancy Automation Systems"
    echo
    echo "Usage: $0 [COMMAND] [OPTIONS]"
    echo
    echo "Commands:"
    echo "  start       Start all redundancy automation systems"
    echo "  stop        Stop all redundancy automation systems"
    echo "  restart     Restart all redundancy automation systems"
    echo "  status      Check status of all systems"
    echo "  logs        Show logs for a specific system or list all logs"
    echo "  info        Show system information and dependencies"
    echo "  cleanup     Clean up old files and logs"
    echo "  help        Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start                    # Start all systems"
    echo "  $0 status                   # Check system status"
    echo "  $0 logs ultimate-redundancy-automation  # Show specific system logs"
    echo "  $0 logs                     # List all available logs"
    echo "  $0 info                     # Show system information"
}

# Main script logic
case "${1:-help}" in
    start)
        start_all_systems
        ;;
    stop)
        stop_all_systems
        ;;
    restart)
        restart_all_systems
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs "$2"
        ;;
    info)
        show_info
        ;;
    cleanup)
        cleanup
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_status "$RED" "Unknown command: $1"
        echo
        show_help
        exit 1
        ;;
esac

exit 0