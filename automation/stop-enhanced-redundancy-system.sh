#!/bin/bash

# Enhanced Redundancy System Stop Script
# This script safely stops all redundancy automation systems

set -e

# Configuration
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

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
}

# Error handling
error_exit() {
    log "ERROR" "Error on line $1: ${BASH_COMMAND}"
    exit 1
}

trap 'error_exit $LINENO' ERR

# Function to safely stop a process
stop_process() {
    local process_name="$1"
    local pid_file="$2"
    local timeout="${3:-30}"
    
    if [[ ! -f "$pid_file" ]]; then
        log "INFO" "$process_name: No PID file found, assuming not running"
        return 0
    fi
    
    local pid=$(cat "$pid_file")
    
    if ! kill -0 "$pid" 2>/dev/null; then
        log "INFO" "$process_name: Process not running, removing stale PID file"
        rm -f "$pid_file"
        return 0
    fi
    
    log "INFO" "Stopping $process_name (PID: $pid)..."
    
    # Try graceful shutdown first
    kill -TERM "$pid" 2>/dev/null || true
    
    # Wait for graceful shutdown
    local wait_time=0
    while [[ $wait_time -lt $timeout ]]; do
        if ! kill -0 "$pid" 2>/dev/null; then
            log "SUCCESS" "$process_name: Stopped gracefully"
            rm -f "$pid_file"
            return 0
        fi
        sleep 1
        wait_time=$((wait_time + 1))
    done
    
    # Force kill if graceful shutdown failed
    log "WARN" "$process_name: Graceful shutdown failed, forcing termination"
    kill -KILL "$pid" 2>/dev/null || true
    
    # Wait a bit more for force kill
    sleep 2
    
    if ! kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "$process_name: Force stopped"
        rm -f "$pid_file"
        return 0
    else
        log "ERROR" "$process_name: Failed to stop process"
        return 1
    fi
}

# Function to stop PM2 redundancy system
stop_pm2_redundancy() {
    log "INFO" "Stopping PM2 redundancy system..."
    
    local pid_file="$PID_DIR/pm2-redundancy.pid"
    
    if stop_process "PM2 Redundancy" "$pid_file" 30; then
        log "SUCCESS" "PM2 redundancy system stopped"
    else
        log "ERROR" "Failed to stop PM2 redundancy system"
        return 1
    fi
}

# Function to stop GitHub Actions redundancy system
stop_github_actions_redundancy() {
    log "INFO" "Stopping GitHub Actions redundancy system..."
    
    local pid_file="$PID_DIR/github-actions-redundancy.pid"
    
    if stop_process "GitHub Actions Redundancy" "$pid_file" 30; then
        log "SUCCESS" "GitHub Actions redundancy system stopped"
    else
        log "ERROR" "Failed to stop GitHub Actions redundancy system"
        return 1
    fi
}

# Function to stop Netlify functions redundancy system
stop_netlify_functions_redundancy() {
    log "INFO" "Stopping Netlify functions redundancy system..."
    
    local pid_file="$PID_DIR/netlify-functions-redundancy.pid"
    
    if stop_process "Netlify Functions Redundancy" "$pid_file" 30; then
        log "SUCCESS" "Netlify functions redundancy system stopped"
    else
        log "ERROR" "Failed to stop Netlify functions redundancy system"
        return 1
    fi
}

# Function to stop master orchestrator
stop_master_orchestrator() {
    log "INFO" "Stopping master redundancy orchestrator..."
    
    local pid_file="$PID_DIR/master-orchestrator.pid"
    
    if stop_process "Master Orchestrator" "$pid_file" 30; then
        log "SUCCESS" "Master redundancy orchestrator stopped"
    else
        log "ERROR" "Failed to stop master redundancy orchestrator"
        return 1
    fi
}

# Function to stop all PM2 processes
stop_pm2_processes() {
    log "INFO" "Stopping all PM2 processes..."
    
    if command -v pm2 &> /dev/null; then
        # Stop PM2 processes gracefully
        pm2 stop all 2>/dev/null || true
        
        # Wait for processes to stop
        sleep 5
        
        # Force stop if needed
        pm2 kill 2>/dev/null || true
        
        log "SUCCESS" "All PM2 processes stopped"
    else
        log "WARN" "PM2 not found, skipping PM2 process cleanup"
    fi
}

# Function to cleanup temporary files
cleanup_temp_files() {
    log "INFO" "Cleaning up temporary files..."
    
    # Remove PID files
    rm -f "$PID_DIR"/*.pid 2>/dev/null || true
    
    # Remove temporary log files
    rm -f "$LOG_DIR"/*-startup.log 2>/dev/null || true
    
    # Clean up any orphaned processes
    cleanup_orphaned_processes
    
    log "SUCCESS" "Temporary files cleaned up"
}

# Function to cleanup orphaned processes
cleanup_orphaned_processes() {
    log "INFO" "Checking for orphaned processes..."
    
    # Look for Node.js processes that might be our redundancy systems
    local orphaned_pids=$(pgrep -f "enhanced-pm2-redundancy.cjs\|enhanced-github-actions-redundancy.cjs\|enhanced-netlify-functions-redundancy.cjs\|master-redundancy-orchestrator.cjs" 2>/dev/null || true)
    
    if [[ -n "$orphaned_pids" ]]; then
        log "WARN" "Found orphaned processes: $orphaned_pids"
        
        for pid in $orphaned_pids; do
            if kill -0 "$pid" 2>/dev/null; then
                log "INFO" "Terminating orphaned process $pid"
                kill -TERM "$pid" 2>/dev/null || true
                
                # Wait for termination
                sleep 2
                
                # Force kill if still running
                if kill -0 "$pid" 2>/dev/null; then
                    log "WARN" "Force killing orphaned process $pid"
                    kill -KILL "$pid" 2>/dev/null || true
                fi
            fi
        done
        
        log "SUCCESS" "Orphaned processes cleaned up"
    else
        log "INFO" "No orphaned processes found"
    fi
}

# Function to display final status
display_final_status() {
    log "INFO" "Final system status:"
    echo
    
    local pm2_pid="$PID_DIR/pm2-redundancy.pid"
    local github_pid="$PID_DIR/github-actions-redundancy.pid"
    local netlify_pid="$PID_DIR/netlify-functions-redundancy.pid"
    local orchestrator_pid="$PID_DIR/master-orchestrator.pid"
    
    echo "┌─────────────────────────────────────────────────────────────┐"
    echo "│                    REDUNDANCY SYSTEM STATUS                │"
    echo "├─────────────────────────────────────────────────────────────┤"
    
    # PM2 Redundancy
    if [[ -f "$pm2_pid" ]] && kill -0 "$(cat "$pm2_pid")" 2>/dev/null; then
        echo "│ PM2 Redundancy:        ${RED}RUNNING${NC} (PID: $(cat "$pm2_pid"))"
    else
        echo "│ PM2 Redundancy:        ${GREEN}STOPPED${NC}"
    fi
    
    # GitHub Actions Redundancy
    if [[ -f "$github_pid" ]] && kill -0 "$(cat "$github_pid")" 2>/dev/null; then
        echo "│ GitHub Actions:        ${RED}RUNNING${NC} (PID: $(cat "$github_pid"))"
    else
        echo "│ GitHub Actions:        ${GREEN}STOPPED${NC}"
    fi
    
    # Netlify Functions Redundancy
    if [[ -f "$netlify_pid" ]] && kill -0 "$(cat "$netlify_pid")" 2>/dev/null; then
        echo "│ Netlify Functions:     ${RED}RUNNING${NC} (PID: $(cat "$netlify_pid"))"
    else
        echo "│ Netlify Functions:     ${GREEN}STOPPED${NC}"
    fi
    
    # Master Orchestrator
    if [[ -f "$orchestrator_pid" ]] && kill -0 "$(cat "$orchestrator_pid")" 2>/dev/null; then
        echo "│ Master Orchestrator:   ${RED}RUNNING${NC} (PID: $(cat "$orchestrator_pid"))"
    else
        echo "│ Master Orchestrator:   ${GREEN}STOPPED${NC}"
    fi
    
    echo "├─────────────────────────────────────────────────────────────┤"
    echo "│ Log Directory: $LOG_DIR"
    echo "│ PID Directory: $PID_DIR"
    echo "└─────────────────────────────────────────────────────────────┘"
    echo
}

# Function to check if any processes are still running
check_running_processes() {
    local any_running=false
    
    local pm2_pid="$PID_DIR/pm2-redundancy.pid"
    local github_pid="$PID_DIR/github-actions-redundancy.pid"
    local netlify_pid="$PID_DIR/netlify-functions-redundancy.pid"
    local orchestrator_pid="$PID_DIR/master-orchestrator.pid"
    
    if [[ -f "$pm2_pid" ]] && kill -0 "$(cat "$pm2_pid")" 2>/dev/null; then
        any_running=true
    fi
    
    if [[ -f "$github_pid" ]] && kill -0 "$(cat "$github_pid")" 2>/dev/null; then
        any_running=true
    fi
    
    if [[ -f "$netlify_pid" ]] && kill -0 "$(cat "$netlify_pid")" 2>/dev/null; then
        any_running=true
    fi
    
    if [[ -f "$orchestrator_pid" ]] && kill -0 "$(cat "$orchestrator_pid")" 2>/dev/null; then
        any_running=true
    fi
    
    if [[ "$any_running" == "true" ]]; then
        return 0
    else
        return 1
    fi
}

# Function to force stop all processes
force_stop_all() {
    log "WARN" "Force stopping all processes..."
    
    # Kill all Node.js processes related to our redundancy systems
    pkill -f "enhanced-pm2-redundancy.cjs" 2>/dev/null || true
    pkill -f "enhanced-github-actions-redundancy.cjs" 2>/dev/null || true
    pkill -f "enhanced-netlify-functions-redundancy.cjs" 2>/dev/null || true
    pkill -f "master-redundancy-orchestrator.cjs" 2>/dev/null || true
    
    # Wait for processes to terminate
    sleep 3
    
    # Force kill any remaining processes
    pkill -9 -f "enhanced-pm2-redundancy.cjs" 2>/dev/null || true
    pkill -9 -f "enhanced-github-actions-redundancy.cjs" 2>/dev/null || true
    pkill -9 -f "enhanced-netlify-functions-redundancy.cjs" 2>/dev/null || true
    pkill -9 -f "master-redundancy-orchestrator.cjs" 2>/dev/null || true
    
    log "SUCCESS" "All processes force stopped"
}

# Main function
main() {
    log "INFO" "Stopping enhanced redundancy system..."
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Script directory: $SCRIPT_DIR"
    
    # Check if PID directory exists
    if [[ ! -d "$PID_DIR" ]]; then
        log "WARN" "PID directory not found, assuming no processes are running"
        return 0
    fi
    
    # Stop all systems gracefully
    local stop_success=true
    
    if ! stop_master_orchestrator; then
        stop_success=false
    fi
    
    if ! stop_pm2_redundancy; then
        stop_success=false
    fi
    
    if ! stop_github_actions_redundancy; then
        stop_success=false
    fi
    
    if ! stop_netlify_functions_redundancy; then
        stop_success=false
    fi
    
    # Stop PM2 processes
    stop_pm2_processes
    
    # Wait a moment for all processes to stop
    sleep 5
    
    # Check if any processes are still running
    if check_running_processes; then
        log "WARN" "Some processes are still running, attempting force stop..."
        force_stop_all
    fi
    
    # Cleanup
    cleanup_temp_files
    
    # Display final status
    display_final_status
    
    if [[ "$stop_success" == "true" ]]; then
        log "SUCCESS" "Enhanced redundancy system stopped successfully"
    else
        log "WARN" "Enhanced redundancy system stopped with some issues"
        log "INFO" "Check logs for details"
    fi
    
    log "INFO" "Use 'automation/start-enhanced-redundancy-system.sh' to restart all systems"
}

# Parse command line arguments
case "${1:-}" in
    --force|-f)
        log "INFO" "Force stop mode enabled"
        force_stop_all
        cleanup_temp_files
        display_final_status
        log "SUCCESS" "Force stop completed"
        ;;
    --help|-h)
        echo "Usage: $0 [OPTIONS]"
        echo
        echo "Options:"
        echo "  --force, -f    Force stop all processes"
        echo "  --help, -h     Show this help message"
        echo
        echo "Default behavior: Graceful shutdown of all redundancy systems"
        exit 0
        ;;
    "")
        # Default behavior: graceful shutdown
        main
        ;;
    *)
        log "ERROR" "Unknown option: $1"
        log "INFO" "Use --help for usage information"
        exit 1
        ;;
esac