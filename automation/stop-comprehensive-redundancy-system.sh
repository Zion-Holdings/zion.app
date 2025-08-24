#!/bin/bash

# Comprehensive Redundancy System Stop Script
# This script gracefully stops all redundancy automation systems

set -e

# Configuration
WORKSPACE="${PWD}"
LOG_DIR="${WORKSPACE}/automation/logs"
PID_FILE="${LOG_DIR}/redundancy-system.pid"
LOCK_FILE="${LOG_DIR}/redundancy-system.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

# Error logging function
error_log() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
}

# Success logging function
success_log() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Warning logging function
warning_log() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Info logging function
info_log() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

# Check if system is running
check_running() {
    if [ ! -f "$LOCK_FILE" ]; then
        error_log "Redundancy system is not running (no lock file found)"
        exit 1
    fi
    
    local pid=$(cat "$LOCK_FILE" 2>/dev/null)
    if [ -z "$pid" ] || ! ps -p "$pid" > /dev/null 2>&1; then
        warning_log "Redundancy system appears to be not running (stale lock file)"
        rm -f "$LOCK_FILE"
        exit 1
    fi
    
    success_log "Redundancy system is running with PID $pid"
}

# Stop individual processes
stop_individual_processes() {
    info_log "Stopping individual redundancy processes..."
    
    if [ ! -f "$PID_FILE" ]; then
        warning_log "PID file not found, attempting to find processes by name"
        stop_by_name
        return
    fi
    
    local pids=$(cat "$PID_FILE" 2>/dev/null || echo "")
    if [ -z "$pids" ]; then
        warning_log "No PIDs found in PID file"
        stop_by_name
        return
    fi
    
    local stopped_count=0
    local total_count=0
    
    for pid in $pids; do
        total_count=$((total_count + 1))
        if ps -p "$pid" > /dev/null 2>&1; then
            info_log "Stopping process $pid..."
            if kill -TERM "$pid" 2>/dev/null; then
                # Wait for graceful shutdown
                local wait_count=0
                while ps -p "$pid" > /dev/null 2>&1 && [ $wait_count -lt 10 ]; do
                    sleep 1
                    wait_count=$((wait_count + 1))
                done
                
                # Force kill if still running
                if ps -p "$pid" > /dev/null 2>&1; then
                    warning_log "Process $pid did not stop gracefully, force killing..."
                    kill -KILL "$pid" 2>/dev/null
                fi
                
                success_log "Process $pid stopped"
                stopped_count=$((stopped_count + 1))
            else
                warning_log "Failed to stop process $pid"
            fi
        else
            info_log "Process $pid is not running"
            stopped_count=$((stopped_count + 1))
        fi
    done
    
    if [ $stopped_count -eq $total_count ]; then
        success_log "All individual processes stopped ($stopped_count/$total_count)"
    else
        warning_log "Some processes may not have stopped properly ($stopped_count/$total_count)"
    fi
}

# Stop processes by name (fallback method)
stop_by_name() {
    info_log "Stopping processes by name (fallback method)..."
    
    local process_names=(
        "comprehensive-redundancy-system"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
        "master-redundancy-orchestrator"
    )
    
    local stopped_count=0
    local total_count=${#process_names[@]}
    
    for process_name in "${process_names[@]}"; do
        local pids=$(pgrep -f "$process_name" 2>/dev/null || echo "")
        if [ -n "$pids" ]; then
            for pid in $pids; do
                info_log "Stopping $process_name process $pid..."
                if kill -TERM "$pid" 2>/dev/null; then
                    # Wait for graceful shutdown
                    local wait_count=0
                    while ps -p "$pid" > /dev/null 2>&1 && [ $wait_count -lt 5 ]; do
                        sleep 1
                        wait_count=$((wait_count + 1))
                    done
                    
                    # Force kill if still running
                    if ps -p "$pid" > /dev/null 2>&1; then
                        kill -KILL "$pid" 2>/dev/null
                    fi
                    
                    success_log "$process_name process $pid stopped"
                else
                    warning_log "Failed to stop $process_name process $pid"
                fi
            done
            stopped_count=$((stopped_count + 1))
        else
            info_log "$process_name is not running"
            stopped_count=$((stopped_count + 1))
        fi
    done
    
    if [ $stopped_count -eq $total_count ]; then
        success_log "All processes stopped by name ($stopped_count/$total_count)"
    else
        warning_log "Some processes may not have stopped properly ($stopped_count/$total_count)"
    fi
}

# Stop PM2 processes
stop_pm2_processes() {
    info_log "Stopping PM2 processes..."
    
    if ! command -v pm2 &> /dev/null; then
        warning_log "PM2 not available, skipping PM2 process stop"
        return
    fi
    
    # Stop redundancy ecosystem
    if pm2 list | grep -q "redundancy"; then
        info_log "Stopping redundancy PM2 ecosystem..."
        pm2 stop ecosystem.redundancy.cjs 2>/dev/null || true
        pm2 delete ecosystem.redundancy.cjs 2>/dev/null || true
        success_log "Redundancy PM2 ecosystem stopped"
    fi
    
    # Stop primary ecosystem
    if pm2 list | grep -q "zion-auto-sync"; then
        info_log "Stopping primary PM2 ecosystem..."
        pm2 stop ecosystem.pm2.cjs 2>/dev/null || true
        pm2 delete ecosystem.pm2.cjs 2>/dev/null || true
        success_log "Primary PM2 ecosystem stopped"
    fi
    
    # Save PM2 process list
    pm2 save 2>/dev/null || true
    success_log "PM2 process list saved"
}

# Cleanup files
cleanup_files() {
    info_log "Cleaning up files..."
    
    # Remove PID file
    if [ -f "$PID_FILE" ]; then
        rm -f "$PID_FILE"
        success_log "Removed PID file"
    fi
    
    # Remove lock file
    if [ -f "$LOCK_FILE" ]; then
        rm -f "$LOCK_FILE"
        success_log "Removed lock file"
    fi
    
    # Remove backup ecosystem file if it exists
    if [ -f "ecosystem.backup.pm2.cjs" ]; then
        rm -f "ecosystem.backup.pm2.cjs"
        success_log "Removed backup ecosystem file"
    fi
    
    # Remove backup workflows directory if it exists
    if [ -d ".github/workflows/backup" ]; then
        rm -rf ".github/workflows/backup"
        success_log "Removed backup workflows directory"
    fi
    
    # Remove backup functions directory if it exists
    if [ -d "netlify/functions/backup" ]; then
        rm -rf "netlify/functions/backup"
        success_log "Removed backup functions directory"
    fi
    
    # Remove local trigger scripts
    local trigger_scripts=(
        "automation/local-trigger-marketing-sync.sh"
        "automation/local-trigger-sync-health.sh"
        "automation/setup-cron-backup-triggers.sh"
    )
    
    for script in "${trigger_scripts[@]}"; do
        if [ -f "$script" ]; then
            rm -f "$script"
            success_log "Removed $script"
        fi
    done
}

# Verify shutdown
verify_shutdown() {
    info_log "Verifying shutdown..."
    
    # Wait for cleanup
    sleep 5
    
    # Check if any redundancy processes are still running
    local process_names=(
        "comprehensive-redundancy-system"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
        "master-redundancy-orchestrator"
    )
    
    local running_count=0
    
    for process_name in "${process_names[@]}"; do
        local pids=$(pgrep -f "$process_name" 2>/dev/null || echo "")
        if [ -n "$pids" ]; then
            warning_log "$process_name is still running (PIDs: $pids)"
            running_count=$((running_count + 1))
        fi
    done
    
    if [ $running_count -eq 0 ]; then
        success_log "All redundancy processes have been stopped"
        return 0
    else
        warning_log "$running_count redundancy processes are still running"
        return 1
    fi
}

# Display final status
display_final_status() {
    info_log "Displaying final status..."
    
    echo
    echo "=========================================="
    echo "    SHUTDOWN COMPLETED"
    echo "=========================================="
    echo
    
    # Check PM2 status if available
    if command -v pm2 &> /dev/null; then
        echo "PM2 Status:"
        pm2 status --no-daemon 2>/dev/null || echo "  No PM2 processes running"
        echo
    fi
    
    # Check for any remaining redundancy processes
    echo "Remaining Redundancy Processes:"
    local remaining_processes=$(pgrep -f "redundancy" 2>/dev/null || echo "")
    if [ -n "$remaining_processes" ]; then
        for pid in $remaining_processes; do
            local cmd=$(ps -p "$pid" -o cmd= 2>/dev/null || echo "Unknown")
            echo "  PID $pid: $cmd"
        done
    else
        echo "  None found"
    fi
    
    echo
    echo "Cleanup completed:"
    echo "  - PID file: Removed"
    echo "  - Lock file: Removed"
    echo "  - Backup files: Removed"
    echo "  - Local trigger scripts: Removed"
    echo
    echo "=========================================="
}

# Main shutdown function
main() {
    log "Stopping comprehensive redundancy system..."
    
    # Check if system is running
    check_running
    
    # Stop individual processes
    stop_individual_processes
    
    # Stop PM2 processes
    stop_pm2_processes
    
    # Cleanup files
    cleanup_files
    
    # Verify shutdown
    if verify_shutdown; then
        success_log "Comprehensive redundancy system stopped successfully"
    else
        warning_log "Some redundancy processes may still be running"
    fi
    
    # Display final status
    display_final_status
    
    success_log "Comprehensive redundancy system shutdown completed"
    log "All redundancy systems have been stopped and cleaned up"
}

# Run main function
main "$@"