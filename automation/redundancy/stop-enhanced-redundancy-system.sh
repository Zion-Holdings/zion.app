#!/bin/bash

# Enhanced Redundancy System Stop Script
# This script stops the comprehensive redundancy automation system
# Created by Enhanced Master Redundancy Orchestrator

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$(dirname "$SCRIPT_DIR")")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
ORCHESTRATOR_SCRIPT="$SCRIPT_DIR/enhanced-master-redundancy-orchestrator.cjs"
PID_FILE="$LOG_DIR/enhanced-orchestrator.pid"

# Function to print colored output
print_status() {
    local level=$1
    local message=$2
    case $level in
        "INFO")
            echo -e "${BLUE}[INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[ERROR]${NC} $message"
            ;;
        *)
            echo "[$level] $message"
            ;;
    esac
}

# Function to check if system is running
check_system_status() {
    print_status "INFO" "Checking system status..."
    
    local system_running=false
    
    # Check if orchestrator process is running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE" 2>/dev/null || echo "")
        if [ -n "$pid" ] && kill -0 $pid 2>/dev/null; then
            print_status "INFO" "Found running orchestrator process (PID: $pid)"
            system_running=true
        else
            print_status "WARNING" "PID file exists but process is not running. Cleaning up PID file."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Check for any enhanced redundancy processes
    if pgrep -f "enhanced-master-redundancy-orchestrator" > /dev/null; then
        print_status "INFO" "Found enhanced redundancy orchestrator processes"
        system_running=true
    fi
    
    # Check PM2 processes
    if command -v pm2 &> /dev/null; then
        local pm2_processes=$(pm2 list | grep -c "enhanced-backup" || echo "0")
        if [ "$pm2_processes" -gt 0 ]; then
            print_status "INFO" "Found $pm2_processes enhanced backup PM2 processes"
            system_running=true
        fi
    fi
    
    if [ "$system_running" = false ]; then
        print_status "INFO" "Enhanced redundancy system is not running."
        return 1
    fi
    
    return 0
}

# Function to stop the orchestrator gracefully
stop_orchestrator() {
    print_status "INFO" "Stopping enhanced master redundancy orchestrator..."
    
    if [ -f "$ORCHESTRATOR_SCRIPT" ]; then
        # Try to stop gracefully first
        if node "$ORCHESTRATOR_SCRIPT" stop > /dev/null 2>&1; then
            print_status "SUCCESS" "Orchestrator stopped gracefully."
            return 0
        else
            print_status "WARNING" "Graceful stop failed, attempting force stop..."
            return 1
        fi
    else
        print_status "WARNING" "Orchestrator script not found, will use force stop."
        return 1
    fi
}

# Function to force stop orchestrator processes
force_stop_orchestrator() {
    print_status "INFO" "Force stopping orchestrator processes..."
    
    # Kill processes by name
    local pids=$(pgrep -f "enhanced-master-redundancy-orchestrator" || echo "")
    if [ -n "$pids" ]; then
        print_status "INFO" "Killing orchestrator processes: $pids"
        echo $pids | xargs kill -TERM 2>/dev/null || true
        
        # Wait a moment for graceful shutdown
        sleep 3
        
        # Force kill if still running
        local still_running=$(pgrep -f "enhanced-master-redundancy-orchestrator" || echo "")
        if [ -n "$still_running" ]; then
            print_status "WARNING" "Processes still running, force killing: $still_running"
            echo $still_running | xargs kill -KILL 2>/dev/null || true
        fi
    fi
    
    # Remove PID file
    if [ -f "$PID_FILE" ]; then
        rm -f "$PID_FILE"
        print_status "SUCCESS" "Removed PID file."
    fi
}

# Function to stop PM2 processes
stop_pm2_processes() {
    print_status "INFO" "Stopping enhanced backup PM2 processes..."
    
    if command -v pm2 &> /dev/null; then
        # List enhanced backup processes
        local enhanced_processes=$(pm2 list | grep "enhanced-backup" | awk '{print $2}' || echo "")
        
        if [ -n "$enhanced_processes" ]; then
            print_status "INFO" "Found enhanced backup processes: $enhanced_processes"
            
            # Stop each process
            for process in $enhanced_processes; do
                print_status "INFO" "Stopping PM2 process: $process"
                pm2 stop "$process" 2>/dev/null || true
                pm2 delete "$process" 2>/dev/null || true
            done
            
            print_status "SUCCESS" "All enhanced backup PM2 processes stopped."
        else
            print_status "INFO" "No enhanced backup PM2 processes found."
        fi
        
        # Stop all PM2 processes if requested
        if [ "$1" = "all" ]; then
            print_status "INFO" "Stopping all PM2 processes..."
            pm2 stop all 2>/dev/null || true
            pm2 delete all 2>/dev/null || true
            print_status "SUCCESS" "All PM2 processes stopped."
        fi
    else
        print_status "WARNING" "PM2 not found, skipping PM2 cleanup."
    fi
}

# Function to cleanup backup files
cleanup_backup_files() {
    print_status "INFO" "Cleaning up backup files..."
    
    local cleanup_count=0
    
    # Clean up GitHub Actions backup workflows
    local workflows_dir="$WORKSPACE_DIR/.github/workflows"
    if [ -d "$workflows_dir" ]; then
        local backup_workflows=$(find "$workflows_dir" -name "*-enhanced-backup.yml" -o -name "*-emergency-backup.yml" -o -name "*-health-check.yml" || echo "")
        if [ -n "$backup_workflows" ]; then
            print_status "INFO" "Removing backup workflow files..."
            echo "$backup_workflows" | xargs rm -f 2>/dev/null || true
            cleanup_count=$((cleanup_count + $(echo "$backup_workflows" | wc -l)))
        fi
    fi
    
    # Clean up Netlify backup functions
    local functions_dir="$WORKSPACE_DIR/netlify/functions"
    if [ -d "$functions_dir" ]; then
        local backup_functions=$(find "$functions_dir" -name "*-enhanced-backup" -o -name "*-emergency-backup" -o -name "*-health-check" -type d || echo "")
        if [ -n "$backup_functions" ]; then
            print_status "INFO" "Removing backup function directories..."
            echo "$backup_functions" | xargs rm -rf 2>/dev/null || true
            cleanup_count=$((cleanup_count + $(echo "$backup_functions" | wc -l)))
        fi
    fi
    
    if [ $cleanup_count -gt 0 ]; then
        print_status "SUCCESS" "Cleaned up $cleanup_count backup files/directories."
    else
        print_status "INFO" "No backup files to clean up."
    fi
}

# Function to cleanup log files
cleanup_log_files() {
    print_status "INFO" "Cleaning up log files..."
    
    local log_cleanup=false
    
    # Remove enhanced redundancy log files
    if [ -d "$LOG_DIR" ]; then
        local enhanced_logs=$(find "$LOG_DIR" -name "*enhanced*" -type f || echo "")
        if [ -n "$enhanced_logs" ]; then
            print_status "INFO" "Removing enhanced redundancy log files..."
            echo "$enhanced_logs" | xargs rm -f 2>/dev/null || true
            log_cleanup=true
        fi
    fi
    
    # Remove automation logs directory if empty
    local automation_logs="$WORKSPACE_DIR/automation/logs"
    if [ -d "$automation_logs" ] && [ -z "$(ls -A "$automation_logs" 2>/dev/null)" ]; then
        print_status "INFO" "Removing empty automation logs directory..."
        rmdir "$automation_logs" 2>/dev/null || true
        log_cleanup=true
    fi
    
    if [ "$log_cleanup" = true ]; then
        print_status "SUCCESS" "Log files cleaned up."
    else
        print_status "INFO" "No log files to clean up."
    fi
}

# Function to generate final status report
generate_final_report() {
    print_status "INFO" "Generating final status report..."
    
    local report_file="$LOG_DIR/enhanced-system-shutdown-report.json"
    local report_data=$(cat <<EOF
{
  "timestamp": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "action": "system_shutdown",
  "status": "completed",
  "cleanup": {
    "orchestrator_stopped": true,
    "pm2_processes_stopped": true,
    "backup_files_cleaned": true,
    "log_files_cleaned": true
  },
  "shutdown_method": "$1"
}
EOF
)
    
    echo "$report_data" > "$report_file"
    print_status "SUCCESS" "Final status report generated: $report_file"
}

# Function to handle force stop
handle_force_stop() {
    print_status "WARNING" "Force stop requested. This will immediately terminate all processes."
    
    if [ "$1" != "force" ]; then
        read -p "Are you sure you want to force stop? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_status "INFO" "Force stop cancelled by user."
            exit 0
        fi
    fi
    
    print_status "INFO" "Executing force stop..."
    
    # Force stop orchestrator
    force_stop_orchestrator
    
    # Force stop all PM2 processes
    stop_pm2_processes "all"
    
    # Cleanup all backup files
    cleanup_backup_files
    
    # Cleanup log files
    cleanup_log_files
    
    print_status "SUCCESS" "Force stop completed."
}

# Function to perform graceful shutdown
perform_graceful_shutdown() {
    print_status "INFO" "Performing graceful shutdown..."
    
    # Try to stop orchestrator gracefully
    if ! stop_orchestrator; then
        print_status "WARNING" "Graceful stop failed, using force stop."
        force_stop_orchestrator
    fi
    
    # Stop PM2 processes
    stop_pm2_processes
    
    # Cleanup backup files
    cleanup_backup_files
    
    # Cleanup log files
    cleanup_log_files
    
    print_status "SUCCESS" "Graceful shutdown completed."
}

# Function to display shutdown information
display_shutdown_info() {
    print_status "INFO" "Enhanced redundancy system shutdown completed."
    print_status "INFO" "Shutdown actions performed:"
    print_status "INFO" "  - Enhanced Master Redundancy Orchestrator stopped"
    print_status "INFO" "  - Enhanced PM2 Redundancy Manager stopped"
    print_status "INFO" "  - Enhanced GitHub Actions Redundancy Manager stopped"
    print_status "INFO" "  - Enhanced Netlify Functions Redundancy Manager stopped"
    print_status "INFO" "  - Backup files cleaned up"
    print_status "INFO" "  - Log files cleaned up"
    
    print_status "INFO" "To restart the system, use:"
    print_status "INFO" "  $SCRIPT_DIR/start-enhanced-redundancy-system.sh"
    
    print_status "SUCCESS" "Enhanced redundancy system is now stopped!"
}

# Main execution
main() {
    local force_stop=false
    local cleanup_all=false
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --force|-f)
                force_stop=true
                shift
                ;;
            --cleanup-all|-c)
                cleanup_all=true
                shift
                ;;
            --help|-h)
                echo "Usage: $0 [OPTIONS]"
                echo "Options:"
                echo "  --force, -f        Force stop all processes immediately"
                echo "  --cleanup-all, -c  Clean up all backup files and logs"
                echo "  --help, -h         Show this help message"
                exit 0
                ;;
            *)
                print_status "ERROR" "Unknown option: $1"
                exit 1
                ;;
        esac
    done
    
    print_status "INFO" "Stopping Enhanced Redundancy System..."
    print_status "INFO" "Script directory: $SCRIPT_DIR"
    print_status "INFO" "Workspace directory: $WORKSPACE_DIR"
    print_status "INFO" "Log directory: $LOG_DIR"
    
    # Check if system is running
    if ! check_system_status; then
        print_status "INFO" "System is not running. Nothing to stop."
        exit 0
    fi
    
    # Perform shutdown based on options
    if [ "$force_stop" = true ]; then
        handle_force_stop "force"
    else
        perform_graceful_shutdown
    fi
    
    # Generate final report
    generate_final_report "$([ "$force_stop" = true ] && echo "force" || echo "graceful")"
    
    # Display shutdown information
    display_shutdown_info
    
    print_status "SUCCESS" "Enhanced redundancy system shutdown completed successfully!"
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    # Script is being executed
    main "$@"
else
    # Script is being sourced
    print_status "INFO" "Enhanced redundancy stop script sourced. Use main function to stop the system."
fi