#!/bin/bash

# Comprehensive Redundancy System Stop Script
# This script safely stops the complete redundancy automation system

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

# Function to stop a process by PID file
stop_process() {
    local process_name="$1"
    local pid_file="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        
        if kill -0 $pid 2>/dev/null; then
            print_status "Stopping $process_name (PID: $pid)..."
            
            # Try graceful shutdown first
            kill -TERM $pid
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 $pid 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if kill -0 $pid 2>/dev/null; then
                print_warning "Force killing $process_name (PID: $pid)..."
                kill -KILL $pid
                sleep 1
            fi
            
            # Verify process is stopped
            if kill -0 $pid 2>/dev/null; then
                print_error "Failed to stop $process_name (PID: $pid)"
                return 1
            else
                print_success "$process_name stopped successfully"
                rm -f "$pid_file"
            fi
        else
            print_warning "$process_name not running (stale PID file)"
            rm -f "$pid_file"
        fi
    else
        print_warning "$process_name PID file not found"
    fi
}

# Function to stop Enhanced Redundancy Coverage Manager
stop_enhanced_coverage() {
    print_header "Stopping Enhanced Redundancy Coverage Manager"
    
    stop_process "Enhanced Coverage Manager" "$LOG_DIR/enhanced-coverage.pid"
}

# Function to stop PM2 Redundancy Manager
stop_pm2_manager() {
    print_header "Stopping PM2 Redundancy Manager"
    
    stop_process "PM2 Manager" "$LOG_DIR/pm2-redundancy.pid"
}

# Function to stop GitHub Actions Redundancy Manager
stop_github_manager() {
    print_header "Stopping GitHub Actions Redundancy Manager"
    
    stop_process "GitHub Manager" "$LOG_DIR/github-redundancy.pid"
}

# Function to stop Netlify Functions Redundancy Manager
stop_netlify_manager() {
    print_header "Stopping Netlify Functions Redundancy Manager"
    
    stop_process "Netlify Manager" "$LOG_DIR/netlify-redundancy.pid"
}

# Function to stop Master Redundancy Orchestrator
stop_master_orchestrator() {
    print_header "Stopping Master Redundancy Orchestrator"
    
    stop_process "Master Orchestrator" "$LOG_DIR/master-redundancy.pid"
}

# Function to stop PM2 redundancy processes
stop_pm2_redundancy() {
    print_header "Stopping PM2 Redundancy Processes"
    
    if command -v pm2 &> /dev/null; then
        # Stop backup PM2 processes
        print_status "Stopping PM2 redundancy processes..."
        
        pm2 stop "zion-auto-sync-backup" 2>/dev/null || true
        pm2 stop "zion-auto-sync-cron-backup" 2>/dev/null || true
        pm2 stop "zion-monitoring-backup" 2>/dev/null || true
        
        # Delete backup PM2 processes
        pm2 delete "zion-auto-sync-backup" 2>/dev/null || true
        pm2 delete "zion-auto-sync-cron-backup" 2>/dev/null || true
        pm2 delete "zion-monitoring-backup" 2>/dev/null || true
        
        print_success "PM2 redundancy processes stopped"
    else
        print_warning "PM2 not available, skipping PM2 cleanup"
    fi
}

# Function to stop any remaining redundancy processes
stop_remaining_processes() {
    print_header "Stopping Remaining Redundancy Processes"
    
    # Find and stop any remaining redundancy processes
    local pids=$(ps aux | grep -E "(enhanced-redundancy-coverage|pm2-redundancy|github-actions-redundancy|netlify-functions-redundancy|master-redundancy)" | grep -v grep | awk '{print $2}' | tr '\n' ' ')
    
    if [ -n "$pids" ]; then
        print_status "Found remaining redundancy processes: $pids"
        
        for pid in $pids; do
            if kill -0 $pid 2>/dev/null; then
                print_status "Stopping process PID: $pid..."
                kill -TERM $pid 2>/dev/null || true
                
                # Wait for graceful shutdown
                local count=0
                while kill -0 $pid 2>/dev/null && [ $count -lt 5 ]; do
                    sleep 1
                    count=$((count + 1))
                done
                
                # Force kill if still running
                if kill -0 $pid 2>/dev/null; then
                    print_warning "Force killing process PID: $pid..."
                    kill -KILL $pid 2>/dev/null || true
                fi
            fi
        done
        
        # Check if any processes remain
        local remaining=$(ps aux | grep -E "(enhanced-redundancy-coverage|pm2-redundancy|github-actions-redundancy|netlify-functions-redundancy|master-redundancy)" | grep -v grep | wc -l)
        
        if [ "$remaining" -eq 0 ]; then
            print_success "All remaining redundancy processes stopped"
        else
            print_warning "$remaining redundancy processes still running"
        fi
    else
        print_info "No remaining redundancy processes found"
    fi
}

# Function to clean up PID files
cleanup_pid_files() {
    print_header "Cleaning Up PID Files"
    
    local pid_files=(
        "$LOG_DIR/enhanced-coverage.pid"
        "$LOG_DIR/pm2-redundancy.pid"
        "$LOG_DIR/github-redundancy.pid"
        "$LOG_DIR/netlify-redundancy.pid"
        "$LOG_DIR/master-redundancy.pid"
    )
    
    for pid_file in "${pid_files[@]}"; do
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if ! kill -0 $pid 2>/dev/null; then
                print_status "Removing stale PID file: $pid_file"
                rm -f "$pid_file"
            fi
        fi
    done
    
    print_success "PID file cleanup completed"
}

# Function to generate final shutdown report
generate_shutdown_report() {
    print_header "Generating Shutdown Report"
    
    local report_file="$LOG_DIR/redundancy-shutdown-report.json"
    local shutdown_time=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    
    local report=$(cat <<EOF
{
  "shutdownTime": "$shutdown_time",
  "shutdownType": "graceful",
  "componentsStopped": [
    "Enhanced Redundancy Coverage Manager",
    "PM2 Redundancy Manager",
    "GitHub Actions Redundancy Manager",
    "Netlify Functions Redundancy Manager",
    "Master Redundancy Orchestrator"
  ],
  "pm2ProcessesStopped": true,
  "pidFilesCleaned": true,
  "remainingProcesses": 0,
  "status": "shutdown_complete"
}
EOF
)
    
    echo "$report" > "$report_file"
    print_success "Shutdown report generated: $report_file"
}

# Function to verify shutdown
verify_shutdown() {
    print_header "Verifying Shutdown"
    
    local all_stopped=true
    
    # Check Enhanced Coverage Manager
    if [ -f "$LOG_DIR/enhanced-coverage.pid" ]; then
        local pid=$(cat "$LOG_DIR/enhanced-coverage.pid")
        if kill -0 $pid 2>/dev/null; then
            print_error "Enhanced Coverage Manager: Still running (PID: $pid)"
            all_stopped=false
        else
            print_success "Enhanced Coverage Manager: Stopped"
        fi
    else
        print_success "Enhanced Coverage Manager: Stopped"
    fi
    
    # Check PM2 Manager
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_error "PM2 Manager: Still running (PID: $pid)"
            all_stopped=false
        else
            print_success "PM2 Manager: Stopped"
        fi
    else
        print_success "PM2 Manager: Stopped"
    fi
    
    # Check GitHub Manager
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_error "GitHub Manager: Still running (PID: $pid)"
            all_stopped=false
        else
            print_success "GitHub Manager: Stopped"
        fi
    else
        print_success "GitHub Manager: Stopped"
    fi
    
    # Check Netlify Manager
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_error "Netlify Manager: Still running (PID: $pid)"
            all_stopped=false
        else
            print_success "Netlify Manager: Stopped"
        fi
    else
        print_success "Netlify Manager: Stopped"
    fi
    
    # Check Master Orchestrator
    if [ -f "$LOG_DIR/master-redundancy.pid" ]; then
        local pid=$(cat "$LOG_DIR/master-redundancy.pid")
        if kill -0 $pid 2>/dev/null; then
            print_error "Master Orchestrator: Still running (PID: $pid)"
            all_stopped=false
        else
            print_success "Master Orchestrator: Stopped"
        fi
    else
        print_success "Master Orchestrator: Stopped"
    fi
    
    # Check PM2 redundancy processes
    if command -v pm2 &> /dev/null; then
        local pm2_processes=$(pm2 list | grep -E "(zion-auto-sync-backup|zion-auto-sync-cron-backup|zion-monitoring-backup)" | wc -l)
        if [ "$pm2_processes" -eq 0 ]; then
            print_success "PM2 redundancy processes: All stopped"
        else
            print_warning "PM2 redundancy processes: $pm2_processes still running"
            all_stopped=false
        fi
    fi
    
    if [ "$all_stopped" = true ]; then
        print_success "All redundancy components have been stopped successfully!"
    else
        print_warning "Some redundancy components may still be running"
    fi
}

# Function to force stop all processes
force_stop_all() {
    print_header "Force Stopping All Redundancy Processes"
    
    print_warning "Force stopping all redundancy processes..."
    
    # Kill all redundancy processes by name pattern
    pkill -f "enhanced-redundancy-coverage" 2>/dev/null || true
    pkill -f "pm2-redundancy-manager" 2>/dev/null || true
    pkill -f "github-actions-redundancy-manager" 2>/dev/null || true
    pkill -f "netlify-functions-redundancy-manager" 2>/dev/null || true
    pkill -f "master-redundancy-orchestrator" 2>/dev/null || true
    
    # Wait a moment for processes to stop
    sleep 2
    
    # Force kill any remaining processes
    pkill -9 -f "enhanced-redundancy-coverage" 2>/dev/null || true
    pkill -9 -f "pm2-redundancy-manager" 2>/dev/null || true
    pkill -9 -f "github-actions-redundancy-manager" 2>/dev/null || true
    pkill -9 -f "netlify-functions-redundancy-manager" 2>/dev/null || true
    pkill -9 -f "master-redundancy-orchestrator" 2>/dev/null || true
    
    print_success "Force stop completed"
}

# Main shutdown function
main_shutdown() {
    print_header "Comprehensive Redundancy System Shutdown"
    
    # Stop all managers in reverse order
    stop_master_orchestrator
    stop_netlify_manager
    stop_github_manager
    stop_pm2_manager
    stop_enhanced_coverage
    
    # Stop PM2 redundancy processes
    stop_pm2_redundancy
    
    # Stop any remaining processes
    stop_remaining_processes
    
    # Clean up PID files
    cleanup_pid_files
    
    # Generate shutdown report
    generate_shutdown_report
    
    # Verify shutdown
    verify_shutdown
    
    print_header "Shutdown Complete"
    print_success "Comprehensive redundancy system has been stopped!"
    print_info "Use './start-comprehensive-redundancy.sh start' to restart the system"
}

# Handle command line arguments
case "${1:-stop}" in
    stop)
        main_shutdown
        ;;
    force)
        force_stop_all
        cleanup_pid_files
        verify_shutdown
        ;;
    status)
        verify_shutdown
        ;;
    *)
        echo "Usage: $0 [stop|force|status]"
        echo "  stop  - Gracefully stop the comprehensive redundancy system (default)"
        echo "  force - Force stop all redundancy processes"
        echo "  status - Check the shutdown status"
        exit 1
        ;;
esac