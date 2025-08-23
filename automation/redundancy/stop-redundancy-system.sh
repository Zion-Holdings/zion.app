#!/bin/bash

# Stop Redundancy System Script
# This script stops the complete redundancy automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$PROJECT_ROOT/automation/logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
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

# Function to stop a process by PID file
stop_process() {
    local name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        
        if ps -p $pid > /dev/null 2>&1; then
            print_status "Stopping $name (PID: $pid)..."
            
            # Try graceful shutdown first
            kill -TERM $pid 2>/dev/null || true
            
            # Wait for graceful shutdown
            local wait_time=0
            local max_wait=10
            
            while [ $wait_time -lt $max_wait ] && ps -p $pid > /dev/null 2>&1; do
                sleep 1
                wait_time=$((wait_time + 1))
            done
            
            # Force kill if still running
            if ps -p $pid > /dev/null 2>&1; then
                print_warning "Force killing $name (PID: $pid)..."
                kill -KILL $pid 2>/dev/null || true
                sleep 1
            fi
            
            # Verify process is stopped
            if ! ps -p $pid > /dev/null 2>&1; then
                print_success "$name stopped successfully"
                rm -f "$pid_file"
            else
                print_error "Failed to stop $name (PID: $pid)"
                return 1
            fi
        else
            print_warning "$name not running (stale PID file)"
            rm -f "$pid_file"
        fi
    else
        print_warning "$name PID file not found"
    fi
}

# Function to stop all redundancy managers
stop_all_managers() {
    print_status "Stopping all redundancy managers..."
    
    # Stop master orchestrator first
    stop_process "Master Orchestrator" "$LOG_DIR/master-redundancy.pid"
    
    # Stop individual managers
    stop_process "PM2 Manager" "$LOG_DIR/pm2-redundancy.pid"
    stop_process "GitHub Manager" "$LOG_DIR/github-redundancy.pid"
    stop_process "Netlify Manager" "$LOG_DIR/netlify-redundancy.pid"
    
    print_success "All managers stopped"
}

# Function to stop PM2 processes related to redundancy
stop_pm2_redundancy() {
    print_status "Stopping PM2 redundancy processes..."
    
    if command -v pm2 &> /dev/null; then
        # Stop backup PM2 processes
        pm2 stop "zion-auto-sync-backup" 2>/dev/null || true
        pm2 stop "zion-auto-sync-cron-backup" 2>/dev/null || true
        pm2 stop "zion-monitoring-backup" 2>/dev/null || true
        
        # Delete backup processes
        pm2 delete "zion-auto-sync-backup" 2>/dev/null || true
        pm2 delete "zion-auto-sync-cron-backup" 2>/dev/null || true
        pm2 delete "zion-monitoring-backup" 2>/dev/null || true
        
        print_success "PM2 redundancy processes stopped"
    else
        print_warning "PM2 not available, skipping PM2 cleanup"
    fi
}

# Function to cleanup backup files
cleanup_backups() {
    print_status "Cleaning up backup files..."
    
    local backup_workflows="$PROJECT_ROOT/.github/workflows"
    local backup_functions="$PROJECT_ROOT/netlify/functions"
    
    # Remove backup workflow files
    if [ -d "$backup_workflows" ]; then
        find "$backup_workflows" -name "*-backup.yml" -type f -delete 2>/dev/null || true
        print_status "Backup workflow files cleaned up"
    fi
    
    # Remove backup function directories
    if [ -d "$backup_functions" ]; then
        find "$backup_functions" -name "*-backup" -type d -exec rm -rf {} + 2>/dev/null || true
        print_status "Backup function directories cleaned up"
    fi
    
    print_success "Backup files cleaned up"
}

# Function to show current status
show_status() {
    print_status "Current Redundancy System Status:"
    echo "----------------------------------------"
    
    local running_count=0
    local total_count=0
    
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_error "PM2 Manager: Still running (PID: $pid)"
            running_count=$((running_count + 1))
        else
            print_success "PM2 Manager: Stopped"
        fi
        total_count=$((total_count + 1))
    else
        print_success "PM2 Manager: Stopped"
        total_count=$((total_count + 1))
    fi
    
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_error "GitHub Manager: Still running (PID: $pid)"
            running_count=$((running_count + 1))
        else
            print_success "GitHub Manager: Stopped"
        fi
        total_count=$((total_count + 1))
    else
        print_success "GitHub Manager: Stopped"
        total_count=$((total_count + 1))
    fi
    
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_error "Netlify Manager: Still running (PID: $pid)"
            running_count=$((running_count + 1))
        else
            print_success "Netlify Manager: Stopped"
        fi
        total_count=$((total_count + 1))
    else
        print_success "Netlify Manager: Stopped"
        total_count=$((total_count + 1))
    fi
    
    if [ -f "$LOG_DIR/master-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/master-redundancy.pid")
        if ps -p $pid > /dev/null 2>&1; then
            print_error "Master Orchestrator: Still running (PID: $pid)"
            running_count=$((running_count + 1))
        else
            print_success "Master Orchestrator: Stopped"
        fi
        total_count=$((total_count + 1))
    else
        print_success "Master Orchestrator: Stopped"
        total_count=$((total_count + 1))
    fi
    
    echo "----------------------------------------"
    
    if [ $running_count -eq 0 ]; then
        print_success "All redundancy processes are stopped"
    else
        print_warning "$running_count out of $total_count processes are still running"
    fi
}

# Function to force kill all remaining processes
force_kill_all() {
    print_warning "Force killing all remaining redundancy processes..."
    
    # Find all Node.js processes running redundancy scripts
    local pids=$(ps aux | grep -E "(pm2-redundancy|github-actions-redundancy|netlify-functions-redundancy|master-redundancy)" | grep -v grep | awk '{print $2}' | tr '\n' ' ')
    
    if [ -n "$pids" ]; then
        print_status "Found processes to kill: $pids"
        kill -KILL $pids 2>/dev/null || true
        sleep 2
        
        # Verify all are killed
        local remaining=$(ps aux | grep -E "(pm2-redundancy|github-actions-redundancy|netlify-functions-redundancy|master-redundancy)" | grep -v grep | wc -l)
        
        if [ $remaining -eq 0 ]; then
            print_success "All processes force killed"
        else
            print_error "Some processes still running after force kill"
        fi
    else
        print_status "No redundancy processes found to kill"
    fi
}

# Function to cleanup PID files
cleanup_pid_files() {
    print_status "Cleaning up PID files..."
    
    rm -f "$LOG_DIR"/*.pid 2>/dev/null || true
    print_success "PID files cleaned up"
}

# Main execution
main() {
    print_status "Stopping Redundancy Automation System..."
    echo "================================================"
    
    # Change to project root
    cd "$PROJECT_ROOT"
    
    # Show initial status
    show_status
    
    # Stop all managers
    stop_all_managers
    
    # Stop PM2 redundancy processes
    stop_pm2_redundancy
    
    # Wait a moment for processes to fully stop
    sleep 3
    
    # Show status after stopping
    show_status
    
    # If any processes are still running, force kill them
    if [ -f "$LOG_DIR"/*.pid ]; then
        print_warning "Some processes still running, force killing..."
        force_kill_all
        sleep 2
        show_status
    fi
    
    # Cleanup
    cleanup_pid_files
    
    # Ask about cleanup of backup files
    read -p "Do you want to remove backup files? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        cleanup_backups
    else
        print_status "Backup files preserved"
    fi
    
    print_success "Redundancy system stopped successfully!"
    echo ""
    print_status "Use './start-redundancy-system.sh' to restart the system"
}

# Handle command line arguments
case "${1:-stop}" in
    stop)
        main
        ;;
    status)
        show_status
        ;;
    force)
        print_warning "Force stopping all redundancy processes..."
        force_kill_all
        cleanup_pid_files
        print_success "Force stop completed"
        ;;
    cleanup)
        print_status "Cleaning up backup files..."
        cleanup_backups
        print_success "Cleanup completed"
        ;;
    *)
        echo "Usage: $0 [stop|status|force|cleanup]"
        echo "  stop    - Stop the redundancy system gracefully (default)"
        echo "  status  - Show current status"
        echo "  force   - Force kill all processes"
        echo "  cleanup - Remove backup files only"
        exit 1
        ;;
esac