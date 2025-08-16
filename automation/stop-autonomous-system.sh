#!/bin/bash

# Netlify Autonomous System Stop Script
# This script gracefully stops all autonomous automation system components

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$LOG_DIR/autonomous-manager.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log errors
error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

# Function to log success
success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

# Function to log warnings
warning() {
    echo -e "${YELLOW}[$(date '+%Y-%M-%d %H:%M:%S')] WARNING:${NC} $1"
}

log "🛑 Stopping Netlify Autonomous System..."

# Function to stop a process by PID file
stop_process() {
    local pid_file="$1"
    local process_name="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "🛑 Stopping $process_name (PID: $pid)..."
            
            # Try graceful shutdown first
            kill -TERM "$pid" 2>/dev/null || true
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "⚠️ Force killing $process_name (PID: $pid)..."
                kill -KILL "$pid" 2>/dev/null || true
            fi
            
            # Remove PID file
            rm -f "$pid_file"
            success "✅ $process_name stopped"
        else
            log "⚠️ $process_name PID file exists but process is not running"
            rm -f "$pid_file"
        fi
    else
        log "ℹ️ $process_name PID file not found"
    fi
}

# Function to stop autonomous manager
stop_autonomous_manager() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "🛑 Stopping autonomous manager (PID: $pid)..."
            
            # Try graceful shutdown first
            kill -TERM "$pid" 2>/dev/null || true
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 15 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "⚠️ Force killing autonomous manager (PID: $pid)..."
                kill -KILL "$pid" 2>/dev/null || true
            fi
            
            # Remove PID file
            rm -f "$PID_FILE"
            success "✅ Autonomous manager stopped"
        else
            log "⚠️ Autonomous manager PID file exists but process is not running"
            rm -f "$PID_FILE"
        fi
    else
        log "ℹ️ Autonomous manager PID file not found"
    fi
}

# Function to stop all background processes
stop_all_processes() {
    log "🛑 Stopping all autonomous system processes..."
    
    # Stop continuous monitoring
    stop_process "$LOG_DIR/continuous-monitor.pid" "Continuous Monitoring"
    
    # Stop scheduled optimization
    stop_process "$LOG_DIR/scheduled-optimization.pid" "Scheduled Optimization"
    
    # Stop health monitoring
    stop_process "$LOG_DIR/health-monitoring.pid" "Health Monitoring"
    
    # Stop autonomous manager last
    stop_autonomous_manager
}

# Function to check if any processes are still running
check_remaining_processes() {
    log "🔍 Checking for remaining processes..."
    
    local remaining=0
    
    # Check autonomous manager
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            warning "⚠️ Autonomous manager is still running (PID: $pid)"
            remaining=$((remaining + 1))
        fi
    fi
    
    # Check other processes
    for pid_file in "$LOG_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            local process_name=$(basename "$pid_file" .pid)
            if ps -p "$pid" > /dev/null 2>&1; then
                warning "⚠️ $process_name is still running (PID: $pid)"
                remaining=$((remaining + 1))
            fi
        fi
    done
    
    if [ $remaining -eq 0 ]; then
        success "✅ All processes stopped successfully"
        return 0
    else
        warning "⚠️ $remaining processes still running"
        return 1
    fi
}

# Function to cleanup temporary files
cleanup() {
    log "🧹 Cleaning up temporary files..."
    
    # Remove PID files
    rm -f "$LOG_DIR"/*.pid
    
    # Remove any temporary log files
    find "$LOG_DIR" -name "*.tmp" -delete 2>/dev/null || true
    
    success "✅ Cleanup completed"
}

# Function to show final status
show_final_status() {
    log ""
    log "📊 Final System Status:"
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "   ❌ Autonomous Manager: Still running (PID: $pid)"
        else
            log "   ✅ Autonomous Manager: Stopped"
        fi
    else
        log "   ✅ Autonomous Manager: Stopped"
    fi
    
    # Check other processes
    for pid_file in "$LOG_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            local process_name=$(basename "$pid_file" .pid)
            if ps -p "$pid" > /dev/null 2>&1; then
                log "   ❌ $process_name: Still running (PID: $pid)"
            else
                log "   ✅ $process_name: Stopped"
            fi
        fi
    done
    
    log ""
}

# Main stop sequence
main() {
    log "🔄 Beginning system shutdown sequence..."
    
    # Stop all processes
    stop_all_processes
    
    # Wait a moment for processes to fully stop
    sleep 3
    
    # Check remaining processes
    if check_remaining_processes; then
        success "🎉 All autonomous system components stopped successfully!"
    else
        warning "⚠️ Some processes may still be running"
    fi
    
    # Cleanup
    cleanup
    
    # Show final status
    show_final_status
    
    log "🔄 System shutdown sequence completed"
    log "🚀 Use './start-autonomous-system.sh' to restart the system"
}

# Handle script interruption
trap 'log "🛑 Received interrupt signal during shutdown..."; exit 1' INT TERM

# Run main function
main "$@"
