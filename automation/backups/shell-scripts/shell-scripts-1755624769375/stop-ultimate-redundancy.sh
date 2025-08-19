#!/bin/bash

# Ultimate Redundancy System Stop Script
# This script gracefully stops the comprehensive redundancy automation system

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
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.ultimate-redundancy.cjs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    local message="$2"
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
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-shutdown.log"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "INFO" "PM2 is available"
}

# Check if ultimate redundancy processes are running
check_running_processes() {
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    local running_processes=()
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            running_processes+=("$process")
        fi
    done
    
    if [[ ${#running_processes[@]} -eq 0 ]]; then
        log "WARN" "No ultimate redundancy processes are currently running"
        return 1
    else
        log "INFO" "Found ${#running_processes[@]} running ultimate redundancy processes:"
        for process in "${running_processes[@]}"; do
            log "INFO" "  - $process"
        done
        return 0
    fi
}

# Gracefully stop processes
stop_processes() {
    log "INFO" "Stopping ultimate redundancy processes gracefully..."
    
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            log "INFO" "Stopping process: $process"
            
            # Send SIGTERM signal for graceful shutdown
            pm2 stop "$process" 2>/dev/null || true
            
            # Wait a moment for graceful shutdown
            sleep 2
            
            # Check if process is still running
            if pm2 list | grep -q "$process.*online"; then
                log "WARN" "Process $process still running, forcing stop..."
                pm2 delete "$process" 2>/dev/null || true
            else
                log "INFO" "Process $process stopped successfully"
            fi
        fi
    done
}

# Stop by ecosystem file
stop_by_ecosystem() {
    log "INFO" "Stopping processes by ecosystem file..."
    
    if [[ -f "$ECOSYSTEM_FILE" ]]; then
        if pm2 stop "$ECOSYSTEM_FILE" 2>/dev/null; then
            log "INFO" "Ecosystem file stop command executed"
        else
            log "WARN" "Ecosystem file stop command failed, trying individual processes"
            stop_processes
        fi
    else
        log "WARN" "Ecosystem file not found, stopping individual processes"
        stop_processes
    fi
}

# Force stop all processes
force_stop() {
    log "WARN" "Force stopping all ultimate redundancy processes..."
    
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            log "WARN" "Force deleting process: $process"
            pm2 delete "$process" 2>/dev/null || true
        fi
    done
    
    # Also try to stop by ecosystem
    if [[ -f "$ECOSYSTEM_FILE" ]]; then
        pm2 delete "$ECOSYSTEM_FILE" 2>/dev/null || true
    fi
}

# Verify all processes are stopped
verify_stopped() {
    log "INFO" "Verifying all processes are stopped..."
    
    local processes=("ultimate-redundancy-system" "ultimate-redundancy-monitor" "ultimate-redundancy-backup")
    local all_stopped=true
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            log "ERROR" "✗ Process $process is still running"
            all_stopped=false
        else
            log "INFO" "✓ Process $process is stopped"
        fi
    done
    
    if [[ "$all_stopped" == true ]]; then
        log "INFO" "All ultimate redundancy processes have been stopped successfully"
    else
        log "ERROR" "Some processes are still running"
        return 1
    fi
}

# Show final status
show_final_status() {
    log "INFO" "Final System Status:"
    log "INFO" "===================="
    
    # Check PM2 status
    if pm2 list | grep -q "ultimate-redundancy"; then
        log "WARN" "Some ultimate redundancy processes may still be running:"
        pm2 list | grep "ultimate-redundancy" || true
    else
        log "INFO" "No ultimate redundancy processes are running"
    fi
    
    # Show overall PM2 status
    log "INFO" "Overall PM2 status:"
    pm2 list | head -20 || true
    
    log "INFO" "===================="
}

# Cleanup function
cleanup() {
    log "INFO" "Performing cleanup..."
    
    # Remove any temporary files
    local temp_files=(
        "$PROJECT_ROOT/automation/logs/ultimate-redundancy-*.tmp"
        "$PROJECT_ROOT/automation/backups/temp-*"
    )
    
    for pattern in "${temp_files[@]}"; do
        if ls $pattern 1> /dev/null 2>&1; then
            rm -f $pattern
            log "INFO" "Cleaned up temporary files: $pattern"
        fi
    done
    
    log "INFO" "Cleanup completed"
}

# Main execution
main() {
    log "INFO" "Stopping Ultimate Redundancy System..."
    log "INFO" "======================================"
    
    # Change to project root
    cd "$PROJECT_ROOT"
    
    # Check PM2 availability
    check_pm2
    
    # Check if processes are running
    if ! check_running_processes; then
        log "INFO" "No processes to stop"
        show_final_status
        exit 0
    fi
    
    # Try graceful stop first
    log "INFO" "Attempting graceful shutdown..."
    stop_by_ecosystem
    
    # Wait a moment for processes to stop
    sleep 3
    
    # Verify processes are stopped
    if ! verify_stopped; then
        log "WARN" "Graceful shutdown failed, attempting force stop..."
        force_stop
        
        # Wait again
        sleep 2
        
        # Verify again
        if ! verify_stopped; then
            log "ERROR" "Failed to stop all processes"
            show_final_status
            exit 1
        fi
    fi
    
    # Perform cleanup
    cleanup
    
    # Show final status
    show_final_status
    
    log "INFO" "Ultimate Redundancy System shutdown completed successfully!"
    log "INFO" "======================================"
    
    # Show helpful commands
    echo
    echo -e "${BLUE}Helpful Commands:${NC}"
    echo -e "  Start system: ${GREEN}bash automation/start-ultimate-redundancy.sh${NC}"
    echo -e "  View PM2 status: ${GREEN}pm2 list${NC}"
    echo -e "  View PM2 logs: ${GREEN}pm2 logs${NC}"
    echo -e "  Clear PM2 logs: ${GREEN}pm2 flush${NC}"
    echo
}

# Handle script interruption
trap 'log "WARN" "Script interrupted"; cleanup; exit 1' INT TERM

# Run main function
main "$@"