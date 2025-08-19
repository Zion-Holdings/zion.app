#!/bin/bash

# Comprehensive Redundancy System Stop Script
# This script stops the comprehensive redundancy system and cleans up all backup processes

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
PID_FILE="$SCRIPT_DIR/comprehensive-redundancy.pid"

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if system is running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            print_warning "PID file exists but process is not running, cleaning up..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Function to stop PM2 backup processes
stop_pm2_backups() {
    print_info "Stopping PM2 backup processes..."
    
    cd "$ROOT_DIR"
    
    # Stop all backup PM2 processes
    local backup_processes=(
        "zion-auto-sync-backup"
        "zion-auto-sync-cron-backup"
        "zion-monitoring-backup"
    )
    
    for process in "${backup_processes[@]}"; do
        if pm2 describe "$process" >/dev/null 2>&1; then
            print_info "Stopping PM2 process: $process"
            pm2 stop "$process" 2>/dev/null || true
            pm2 delete "$process" 2>/dev/null || true
        fi
    done
    
    print_success "PM2 backup processes stopped"
}

# Function to stop cron script backups
stop_cron_backups() {
    print_info "Stopping cron script backups..."
    
    cd "$ROOT_DIR"
    
    # Stop cron script backups
    local cron_backups=(
        "automation/git-sync-cron.sh.backup"
    )
    
    for backup in "${cron_backups[@]}"; do
        if [ -f "$backup" ]; then
            local pid_file="${backup}.pid"
            if [ -f "$pid_file" ]; then
                local pid=$(cat "$pid_file" 2>/dev/null || echo "")
                if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
                    print_info "Stopping cron backup: $backup (PID: $pid)"
                    kill -TERM "$pid" 2>/dev/null || true
                    sleep 2
                    kill -KILL "$pid" 2>/dev/null || true
                fi
                rm -f "$pid_file"
            fi
        fi
    done
    
    print_success "Cron script backups stopped"
}

# Function to clean up backup files
cleanup_backup_files() {
    print_info "Cleaning up backup files..."
    
    cd "$ROOT_DIR"
    
    # Remove backup ecosystem files
    local backup_ecosystems=(
        "ecosystem.zion-auto-sync-backup.pm2.cjs"
        "ecosystem.zion-auto-sync-cron-backup.pm2.cjs"
    )
    
    for backup in "${backup_ecosystems[@]}"; do
        if [ -f "$backup" ]; then
            print_info "Removing backup ecosystem: $backup"
            rm -f "$backup"
        fi
    done
    
    # Remove backup script files
    local backup_scripts=(
        "automation/marketing-sync-backup.js"
        "automation/pm2-auto-sync-backup.js"
    )
    
    for backup in "${backup_scripts[@]}"; do
        if [ -f "$backup" ]; then
            print_info "Removing backup script: $backup"
            rm -f "$backup"
        fi
    done
    
    # Remove backup workflow files
    local backup_workflows=(
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    for backup in "${backup_workflows[@]}"; do
        if [ -f "$backup" ]; then
            print_info "Removing backup workflow: $backup"
            rm -f "$backup"
        fi
    done
    
    # Remove backup cron scripts
    local backup_crons=(
        "automation/git-sync-cron.sh.backup"
    )
    
    for backup in "${backup_crons[@]}"; do
        if [ -f "$backup" ]; then
            print_info "Removing backup cron script: $backup"
            rm -f "$backup"
        fi
    done
    
    # Clean up backup directories (but keep the directories themselves)
    local backup_dirs=(
        "netlify/functions/backup"
        ".github/workflows/backup"
    )
    
    for backup_dir in "${backup_dirs[@]}"; do
        if [ -d "$backup_dir" ]; then
            print_info "Cleaning backup directory: $backup_dir"
            find "$backup_dir" -type f -name "*.json" -o -name "*.js" -o -name "*.yml" | xargs rm -f 2>/dev/null || true
        fi
    done
    
    print_success "Backup files cleaned up"
}

# Function to stop the main redundancy system
stop_main_system() {
    if check_running; then
        local pid=$(cat "$PID_FILE")
        print_info "Stopping comprehensive redundancy system (PID: $pid)..."
        
        # Send SIGTERM for graceful shutdown
        kill -TERM "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if kill -0 "$pid" 2>/dev/null; then
            print_warning "Force killing process..."
            kill -KILL "$pid"
        fi
        
        rm -f "$PID_FILE"
        print_success "Main redundancy system stopped"
        
    else
        print_warning "Main redundancy system is not running"
    fi
}

# Function to show cleanup summary
show_cleanup_summary() {
    print_info "Cleanup Summary:"
    echo "  ✓ PM2 backup processes stopped"
    echo "  ✓ Cron script backups stopped"
    echo "  ✓ Backup files cleaned up"
    echo "  ✓ Main redundancy system stopped"
    echo "  ✓ PID file removed"
    echo ""
    print_success "Comprehensive redundancy system has been completely stopped and cleaned up"
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy System Stop Script"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --force     Force stop without confirmation"
    echo "  --cleanup   Also clean up all backup files"
    echo "  --help      Show this help message"
    echo ""
    echo "This script will:"
    echo "  1. Stop the main redundancy system"
    echo "  2. Stop all PM2 backup processes"
    echo "  3. Stop all cron script backups"
    echo "  4. Clean up backup files (if --cleanup is specified)"
    echo "  5. Remove PID file"
}

# Function to confirm shutdown
confirm_shutdown() {
    if [ "$1" != "--force" ]; then
        echo -e "${YELLOW}Are you sure you want to stop the comprehensive redundancy system?${NC}"
        echo "This will stop all backup processes and may affect automation reliability."
        echo -n "Continue? (y/N): "
        read -r response
        if [[ ! "$response" =~ ^[Yy]$ ]]; then
            print_info "Shutdown cancelled"
            exit 0
        fi
    fi
}

# Main script logic
main() {
    local force_stop=false
    local cleanup_files=false
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --force)
                force_stop=true
                shift
                ;;
            --cleanup)
                cleanup_files=true
                shift
                ;;
            --help|-h)
                show_help
                exit 0
                ;;
            *)
                print_error "Unknown option: $1"
                show_help
                exit 1
                ;;
        esac
    done
    
    # Confirm shutdown unless forced
    if [ "$force_stop" = false ]; then
        confirm_shutdown
    fi
    
    print_info "Starting comprehensive redundancy system shutdown..."
    
    # Stop the main system
    stop_main_system
    
    # Stop PM2 backup processes
    stop_pm2_backups
    
    # Stop cron script backups
    stop_cron_backups
    
    # Clean up backup files if requested
    if [ "$cleanup_files" = true ]; then
        cleanup_backup_files
    fi
    
    # Show cleanup summary
    show_cleanup_summary
}

# Run main function with all arguments
main "$@"