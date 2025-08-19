#!/bin/bash

# Start All Redundancy Automation Systems
# This script launches all PM2, GitHub Actions, and Netlify functions redundancy systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_DIR="$SCRIPT_DIR/pids"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure directories exist
mkdir -p "$LOG_DIR"
mkdir -p "$PID_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/startup.log"
}

# Function to check if a process is running
is_process_running() {
    local pid_file="$1"
    if [[ -f "$pid_file" ]]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
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
    local script_path="$2"
    local pid_file="$PID_DIR/${system_name}.pid"
    local log_file="$LOG_DIR/${system_name}.log"
    
    log "INFO" "Starting $system_name system..."
    
    # Check if already running
    if is_process_running "$pid_file"; then
        log "WARN" "$system_name is already running (PID: $(cat "$pid_file"))"
        return 0
    fi
    
    # Check if script exists
    if [[ ! -f "$script_path" ]]; then
        log "ERROR" "Script not found: $script_path"
        return 1
    fi
    
    # Start the system
    cd "$WORKSPACE_DIR"
    nohup node "$script_path" > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment and check if it started successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "$system_name started successfully (PID: $pid)"
        return 0
    else
        log "ERROR" "Failed to start $system_name"
        rm -f "$pid_file"
        return 1
    fi
}

# Function to stop a system
stop_system() {
    local system_name="$1"
    local pid_file="$PID_DIR/${system_name}.pid"
    
    log "INFO" "Stopping $system_name system..."
    
    if is_process_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        log "INFO" "Stopping process $pid"
        
        # Try graceful shutdown first
        kill "$pid" 2>/dev/null || true
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [[ $count -lt 10 ]]; do
            sleep 1
            ((count++))
        done
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Force killing $system_name (PID: $pid)"
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        rm -f "$pid_file"
        log "INFO" "$system_name stopped"
    else
        log "INFO" "$system_name is not running"
    fi
}

# Function to check system status
check_system_status() {
    local system_name="$1"
    local pid_file="$PID_DIR/${system_name}.pid"
    
    if is_process_running "$pid_file"; then
        local pid=$(cat "$pid_file")
        echo -e "${GREEN}✓${NC} $system_name is running (PID: $pid)"
        return 0
    else
        echo -e "${RED}✗${NC} $system_name is not running"
        return 1
    fi
}

# Function to show all systems status
show_status() {
    echo -e "\n${BLUE}=== Redundancy Systems Status ===${NC}"
    
    local all_healthy=true
    
    # Check each system
    for system in "pm2" "github-actions" "netlify-functions" "master-orchestrator"; do
        if ! check_system_status "$system"; then
            all_healthy=false
        fi
    done
    
    echo -e "\n${BLUE}=== Summary ===${NC}"
    if [[ "$all_healthy" == "true" ]]; then
        echo -e "${GREEN}All systems are healthy${NC}"
    else
        echo -e "${RED}Some systems need attention${NC}"
    fi
    
    echo -e "\n${BLUE}=== Log Files ===${NC}"
    echo "Startup log: $LOG_DIR/startup.log"
    echo "System logs: $LOG_DIR/*.log"
    echo "PID files: $PID_DIR/*.pid"
}

# Function to start all systems
start_all_systems() {
    log "INFO" "Starting all redundancy automation systems..."
    
    local success_count=0
    local total_count=0
    
    # Start PM2 redundancy system
    if start_system "pm2" "$SCRIPT_DIR/enhanced-pm2-redundancy.cjs"; then
        ((success_count++))
    fi
    ((total_count++))
    
    # Start GitHub Actions redundancy system
    if start_system "github-actions" "$SCRIPT_DIR/enhanced-github-actions-redundancy.cjs"; then
        ((success_count++))
    fi
    ((total_count++))
    
    # Start Netlify functions redundancy system
    if start_system "netlify-functions" "$SCRIPT_DIR/enhanced-netlify-functions-redundancy.cjs"; then
        ((success_count++))
    fi
    ((total_count++))
    
    # Start master orchestrator
    if start_system "master-orchestrator" "$SCRIPT_DIR/master-redundancy-orchestrator.cjs"; then
        ((success_count++))
    fi
    ((total_count++))
    
    # Wait for systems to stabilize
    log "INFO" "Waiting for systems to stabilize..."
    sleep 5
    
    # Show status
    show_status
    
    if [[ $success_count -eq $total_count ]]; then
        log "INFO" "All systems started successfully!"
        echo -e "\n${GREEN}✓ All $total_count redundancy systems are now running${NC}"
    else
        log "WARN" "Only $success_count out of $total_count systems started successfully"
        echo -e "\n${YELLOW}⚠ $success_count out of $total_count systems started successfully${NC}"
    fi
}

# Function to stop all systems
stop_all_systems() {
    log "INFO" "Stopping all redundancy automation systems..."
    
    # Stop in reverse order
    stop_system "master-orchestrator"
    stop_system "netlify-functions"
    stop_system "github-actions"
    stop_system "pm2"
    
    log "INFO" "All systems stopped"
    echo -e "\n${GREEN}✓ All redundancy systems have been stopped${NC}"
}

# Function to restart all systems
restart_all_systems() {
    log "INFO" "Restarting all redundancy automation systems..."
    stop_all_systems
    sleep 2
    start_all_systems
}

# Function to show help
show_help() {
    echo "Redundancy Automation Systems Manager"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start all redundancy systems"
    echo "  stop      Stop all redundancy systems"
    echo "  restart   Restart all redundancy systems"
    echo "  status    Show status of all systems"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start      # Start all systems"
    echo "  $0 status     # Check system status"
    echo "  $0 stop       # Stop all systems"
}

# Main execution
main() {
    local command="${1:-start}"
    
    case "$command" in
        "start")
            start_all_systems
            ;;
        "stop")
            stop_all_systems
            ;;
        "restart")
            restart_all_systems
            ;;
        "status")
            show_status
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            show_help
            exit 1
            ;;
    esac
}

# Trap signals for graceful shutdown
trap 'log "INFO" "Received interrupt signal, shutting down..."; stop_all_systems; exit 0' INT TERM

# Run main function with all arguments
main "$@"