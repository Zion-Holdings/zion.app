#!/bin/bash

# Stop Comprehensive Redundancy System Script
# This script stops all redundancy automation managers including the comprehensive manager

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$PROJECT_ROOT/automation/logs"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
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

print_info() {
    echo -e "${CYAN}[INFO]${NC} $1"
}

print_header() {
    echo -e "${PURPLE}================================${NC}"
    echo -e "${PURPLE}$1${NC}"
    echo -e "${PURPLE}================================${NC}"
}

# Function to stop a specific manager
stop_manager() {
    local manager_name="$1"
    local pid_file="$2"
    local log_file="$3"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p $pid > /dev/null 2>&1; then
            print_status "Stopping $manager_name (PID: $pid)..."
            
            # Try graceful shutdown first
            kill -TERM $pid 2>/dev/null || true
            
            # Wait for graceful shutdown
            local count=0
            while ps -p $pid > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p $pid > /dev/null 2>&1; then
                print_warning "Force killing $manager_name (PID: $pid)..."
                kill -KILL $pid 2>/dev/null || true
                sleep 1
            fi
            
            # Verify process is stopped
            if ! ps -p $pid > /dev/null 2>&1; then
                print_success "$manager_name stopped successfully"
                rm -f "$pid_file"
            else
                print_error "Failed to stop $manager_name"
                return 1
            fi
        else
            print_warning "$manager_name PID file exists but process is not running"
            rm -f "$pid_file"
        fi
    else
        print_warning "$manager_name PID file not found"
    fi
}

# Function to stop all managers gracefully
stop_all_managers() {
    print_header "Stopping Comprehensive Redundancy System"
    
    local failed_stops=0
    
    # Stop managers in reverse order of dependency
    print_status "Stopping Comprehensive Redundancy Manager..."
    if ! stop_manager "Comprehensive Redundancy Manager" "$LOG_DIR/comprehensive-redundancy.pid" "$LOG_DIR/comprehensive-redundancy-startup.log"; then
        failed_stops=$((failed_stops + 1))
    fi
    
    print_status "Stopping Master Redundancy Orchestrator..."
    if ! stop_manager "Master Redundancy Orchestrator" "$LOG_DIR/master-redundancy.pid" "$LOG_DIR/master-redundancy-startup.log"; then
        failed_stops=$((failed_stops + 1))
    fi
    
    print_status "Stopping Netlify Functions Redundancy Manager..."
    if ! stop_manager "Netlify Functions Redundancy Manager" "$LOG_DIR/netlify-redundancy.pid" "$LOG_DIR/netlify-redundancy-startup.log"; then
        failed_stops=$((failed_stops + 1))
    fi
    
    print_status "Stopping GitHub Actions Redundancy Manager..."
    if ! stop_manager "GitHub Actions Redundancy Manager" "$LOG_DIR/github-redundancy.pid" "$LOG_DIR/github-redundancy-startup.log"; then
        failed_stops=$((failed_stops + 1))
    fi
    
    print_status "Stopping PM2 Redundancy Manager..."
    if ! stop_manager "PM2 Redundancy Manager" "$LOG_DIR/pm2-redundancy.pid" "$LOG_DIR/pm2-redundancy-startup.log"; then
        failed_stops=$((failed_stops + 1))
    fi
    
    if [ $failed_stops -eq 0 ]; then
        print_success "All redundancy managers stopped successfully!"
    else
        print_warning "$failed_stops managers failed to stop gracefully"
    fi
}

# Function to force stop all managers
force_stop_all_managers() {
    print_header "Force Stopping Comprehensive Redundancy System"
    
    print_warning "Force stopping all redundancy managers..."
    
    # Find all Node.js processes running redundancy scripts
    local redundancy_processes=$(ps aux | grep -E "(redundancy|comprehensive)" | grep -v grep | awk '{print $2}' | tr '\n' ' ')
    
    if [ -n "$redundancy_processes" ]; then
        print_status "Found redundancy processes: $redundancy_processes"
        
        # Kill all redundancy processes
        for pid in $redundancy_processes; do
            if ps -p $pid > /dev/null 2>&1; then
                print_status "Force killing process $pid..."
                kill -KILL $pid 2>/dev/null || true
            fi
        done
        
        # Wait a moment and verify
        sleep 2
        local remaining_processes=$(ps aux | grep -E "(redundancy|comprehensive)" | grep -v grep | awk '{print $2}' | tr '\n' ' ')
        
        if [ -n "$remaining_processes" ]; then
            print_warning "Some processes still running: $remaining_processes"
        else
            print_success "All redundancy processes force stopped"
        fi
    else
        print_info "No redundancy processes found"
    fi
    
    # Clean up PID files
    print_status "Cleaning up PID files..."
    rm -f "$LOG_DIR"/*.pid
    
    print_success "Force stop completed"
}

# Function to check if any managers are still running
check_running_managers() {
    print_status "Checking for running redundancy managers..."
    
    local running_count=0
    
    # Check PID files
    for pid_file in "$LOG_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ps -p $pid > /dev/null 2>&1; then
                local manager_name=$(basename "$pid_file" .pid)
                print_warning "$manager_name still running (PID: $pid)"
                running_count=$((running_count + 1))
            else
                print_info "Removing stale PID file: $pid_file"
                rm -f "$pid_file"
            fi
        fi
    done
    
    # Check for any Node.js processes running redundancy scripts
    local node_processes=$(ps aux | grep -E "(redundancy|comprehensive)" | grep -v grep | wc -l)
    if [ $node_processes -gt 0 ]; then
        print_warning "Found $node_processes Node.js processes running redundancy scripts"
        running_count=$((running_count + node_processes))
    fi
    
    if [ $running_count -eq 0 ]; then
        print_success "No redundancy managers are running"
    else
        print_warning "$running_count redundancy processes still running"
    fi
    
    return $running_count
}

# Function to cleanup logs
cleanup_logs() {
    print_status "Cleaning up log files..."
    
    # Archive old logs
    local archive_dir="$LOG_DIR/archives/$(date +%Y%m%d-%H%M%S)"
    mkdir -p "$archive_dir"
    
    # Move startup logs to archive
    for log_file in "$LOG_DIR"/*-startup.log; do
        if [ -f "$log_file" ]; then
            mv "$log_file" "$archive_dir/"
            print_info "Archived: $(basename "$log_file")"
        fi
    done
    
    # Move health and report logs to archive
    for log_file in "$LOG_DIR"/*-health.log "$LOG_DIR"/*-report.log; do
        if [ -f "$log_file" ]; then
            mv "$log_file" "$archive_dir/"
            print_info "Archived: $(basename "$log_file")"
        fi
    done
    
    print_success "Log cleanup completed: $archive_dir"
}

# Function to show usage
show_usage() {
    echo "Usage: $0 [stop|force|status|cleanup]"
    echo ""
    echo "Commands:"
    echo "  stop      - Stop all redundancy managers gracefully (default)"
    echo "  force     - Force stop all redundancy managers"
    echo "  status    - Check status of all managers"
    echo "  cleanup   - Clean up log files and PID files"
    echo ""
    echo "Examples:"
    echo "  $0         # Stop gracefully (default)"
    echo "  $0 force   # Force stop all managers"
    echo "  $0 status  # Check running status"
    echo "  $0 cleanup # Clean up logs and PID files"
}

# Function to show system status
show_system_status() {
    print_header "Comprehensive Redundancy System Status"
    
    print_status "Checking system status..."
    
    # Check if any managers are running
    if check_running_managers; then
        print_warning "Some redundancy managers are still running"
        echo ""
        print_info "Use '$0' to stop gracefully or '$0 force' to force stop"
    else
        print_success "All redundancy managers are stopped"
    fi
    
    # Show log directory status
    if [ -d "$LOG_DIR" ]; then
        local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
        local pid_count=$(find "$LOG_DIR" -name "*.pid" | wc -l)
        
        echo ""
        print_info "Log directory: $LOG_DIR"
        print_info "Log files: $log_count"
        print_info "PID files: $pid_count"
    fi
}

# Main script logic
main() {
    local command="${1:-stop}"
    
    case "$command" in
        stop)
            stop_all_managers
            ;;
        force)
            force_stop_all_managers
            ;;
        status)
            show_system_status
            ;;
        cleanup)
            cleanup_logs
            ;;
        *)
            show_usage
            exit 1
            ;;
    esac
    
    # Final status check
    if [ "$command" = "stop" ] || [ "$command" = "force" ]; then
        echo ""
        check_running_managers
        
        if [ $? -eq 0 ]; then
            echo ""
            print_success "Comprehensive redundancy system stopped successfully!"
            print_info "Use './start-comprehensive-redundancy.sh' to restart the system"
        else
            echo ""
            print_warning "Some managers may still be running"
            print_info "Use '$0 force' to force stop all remaining processes"
        fi
    fi
}

# Run main function with all arguments
main "$@"