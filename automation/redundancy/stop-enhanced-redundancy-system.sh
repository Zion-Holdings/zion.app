#!/bin/bash

# Enhanced Redundancy Automation System Shutdown Script
# This script gracefully shuts down the comprehensive redundancy system

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOG_DIR="$PROJECT_ROOT/automation/logs"
REDUNDANCY_DIR="$SCRIPT_DIR"
PID_FILE="$REDUNDANCY_DIR/enhanced-redundancy.pid"
ENHANCED_ORCHESTRATOR="$REDUNDANCY_DIR/enhanced-master-redundancy-orchestrator.cjs"

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if system is running
check_if_running() {
    if [ ! -f "$PID_FILE" ]; then
        print_status $YELLOW "⚠️  No PID file found, checking for running processes..."
        
        # Look for any enhanced redundancy processes
        local pids=$(pgrep -f "enhanced-master-redundancy-orchestrator" || true)
        if [ -n "$pids" ]; then
            print_status $YELLOW "⚠️  Found running enhanced redundancy processes: $pids"
            return 0
        else
            print_status $BLUE "ℹ️  No enhanced redundancy processes found running"
            return 1
        fi
    fi
    
    local pid=$(cat "$PID_FILE")
    if kill -0 $pid 2>/dev/null; then
        print_status $GREEN "✅ Found running Enhanced Redundancy Automation System (PID: $pid)"
        return 0
    else
        print_status $YELLOW "⚠️  PID file exists but process is not running, cleaning up..."
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop PM2 backup processes
stop_pm2_backup_processes() {
    print_status $BLUE "🛑 Stopping PM2 backup processes..."
    
    # Get list of backup processes
    local backup_processes=$(pm2 list | grep -E "(backup|enhanced)" | awk '{print $2}' || true)
    
    if [ -n "$backup_processes" ]; then
        print_status $CYAN "📋 Found PM2 backup processes: $backup_processes"
        
        for process in $backup_processes; do
            print_status $CYAN "🛑 Stopping PM2 process: $process"
            pm2 stop "$process" 2>/dev/null || true
            pm2 delete "$process" 2>/dev/null || true
        done
        
        print_status $GREEN "✅ PM2 backup processes stopped"
    else
        print_status $BLUE "ℹ️  No PM2 backup processes found"
    fi
}

# Function to stop the enhanced orchestrator
stop_enhanced_orchestrator() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        print_status $BLUE "🛑 Stopping Enhanced Redundancy Orchestrator (PID: $pid)..."
        
        # Try graceful shutdown first
        kill -TERM $pid 2>/dev/null || true
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 $pid 2>/dev/null && [ $count -lt 10 ]; do
            print_status $CYAN "⏳ Waiting for graceful shutdown... ($count/10)"
            sleep 1
            count=$((count + 1))
        done
        
        # Force kill if still running
        if kill -0 $pid 2>/dev/null; then
            print_status $YELLOW "⚠️  Force killing process..."
            kill -KILL $pid 2>/dev/null || true
            sleep 1
        fi
        
        # Verify process is stopped
        if kill -0 $pid 2>/dev/null; then
            print_status $RED "❌ Failed to stop process $pid"
            return 1
        else
            print_status $GREEN "✅ Enhanced Redundancy Orchestrator stopped successfully"
            rm -f "$PID_FILE"
            return 0
        fi
    else
        print_status $BLUE "ℹ️  No PID file found for enhanced orchestrator"
        return 0
    fi
}

# Function to stop any remaining enhanced redundancy processes
stop_remaining_processes() {
    print_status $BLUE "🔍 Looking for any remaining enhanced redundancy processes..."
    
    # Look for processes by name pattern
    local pids=$(pgrep -f "enhanced-master-redundancy-orchestrator" || true)
    
    if [ -n "$pids" ]; then
        print_status $YELLOW "⚠️  Found remaining processes: $pids"
        
        for pid in $pids; do
            print_status $CYAN "🛑 Stopping remaining process: $pid"
            kill -TERM $pid 2>/dev/null || true
            
            # Wait a moment
            sleep 1
            
            # Force kill if still running
            if kill -0 $pid 2>/dev/null; then
                print_status $YELLOW "⚠️  Force killing remaining process: $pid"
                kill -KILL $pid 2>/dev/null || true
            fi
        done
        
        print_status $GREEN "✅ Remaining processes stopped"
    else
        print_status $BLUE "ℹ️  No remaining processes found"
    fi
}

# Function to cleanup backup files (optional)
cleanup_backup_files() {
    print_status $BLUE "🧹 Cleaning up backup files..."
    
    read -p "Do you want to remove backup workflows and functions? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status $YELLOW "⚠️  Removing backup workflows..."
        
        # Remove backup workflows
        if [ -d ".github/workflows/backup" ]; then
            rm -rf .github/workflows/backup
            print_status $GREEN "✅ Backup workflows removed"
        fi
        
        # Remove backup functions
        if [ -d "netlify/functions/backup" ]; then
            rm -rf netlify/functions/backup
            print_status $GREEN "✅ Backup functions removed"
        fi
        
        # Remove backup PM2 processes
        stop_pm2_backup_processes
        
        print_status $GREEN "✅ All backup files cleaned up"
    else
        print_status $BLUE "ℹ️  Skipping backup file cleanup"
    fi
}

# Function to show shutdown summary
show_shutdown_summary() {
    print_status $BLUE "📋 Enhanced Redundancy Automation System Shutdown Summary"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🛑 System Status: Shutdown Complete"
    echo "📁 Log Files: $LOG_DIR/enhanced-redundancy-*.log"
    echo "📊 PM2 Status: $(pm2 list | grep -c "backup\|enhanced" || echo "0") backup processes"
    echo "🔧 GitHub Actions: $(ls -1 .github/workflows/backup/ 2>/dev/null | wc -l || echo "0") backup workflows"
    echo "⚡ Netlify Functions: $(ls -1 netlify/functions/backup/ 2>/dev/null | wc -l || echo "0") backup functions"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
}

# Function to emergency shutdown
emergency_shutdown() {
    print_status $RED "🚨 EMERGENCY SHUTDOWN INITIATED"
    
    # Force stop all processes
    local pids=$(pgrep -f "enhanced.*redundancy" || true)
    if [ -n "$pids" ]; then
        print_status $RED "🚨 Force killing all enhanced redundancy processes: $pids"
        for pid in $pids; do
            kill -KILL $pid 2>/dev/null || true
        done
    fi
    
    # Stop PM2 backup processes
    stop_pm2_backup_processes
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    print_status $RED "🚨 Emergency shutdown completed"
}

# Function to graceful shutdown
graceful_shutdown() {
    print_status $BLUE "🛑 Initiating graceful shutdown..."
    
    # Stop PM2 backup processes first
    stop_pm2_backup_processes
    
    # Stop the enhanced orchestrator
    stop_enhanced_orchestrator
    
    # Stop any remaining processes
    stop_remaining_processes
    
    # Verify all processes are stopped
    local remaining_pids=$(pgrep -f "enhanced.*redundancy" || true)
    if [ -n "$remaining_pids" ]; then
        print_status $YELLOW "⚠️  Some processes still running, attempting force stop..."
        for pid in $remaining_pids; do
            kill -KILL $pid 2>/dev/null || true
        done
    fi
    
    print_status $GREEN "✅ Graceful shutdown completed"
}

# Main execution
main() {
    echo ""
    print_status $PURPLE "🛑 Enhanced Redundancy Automation System Shutdown"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    # Check if system is running
    if ! check_if_running; then
        print_status $BLUE "ℹ️  Enhanced Redundancy Automation System is not running"
        exit 0
    fi
    
    # Ask user for shutdown type
    echo "Choose shutdown method:"
    echo "1) Graceful shutdown (recommended)"
    echo "2) Emergency shutdown (force kill all processes)"
    echo "3) Cancel shutdown"
    echo ""
    read -p "Enter your choice (1-3): " -n 1 -r
    echo ""
    
    case $REPLY in
        1)
            print_status $BLUE "🔄 Performing graceful shutdown..."
            graceful_shutdown
            ;;
        2)
            print_status $RED "🚨 Performing emergency shutdown..."
            emergency_shutdown
            ;;
        3)
            print_status $BLUE "ℹ️  Shutdown cancelled"
            exit 0
            ;;
        *)
            print_status $RED "❌ Invalid choice, performing graceful shutdown..."
            graceful_shutdown
            ;;
    esac
    
    # Show shutdown summary
    show_shutdown_summary
    
    # Ask about cleanup
    cleanup_backup_files
    
    echo ""
    print_status $GREEN "🎉 Enhanced Redundancy Automation System shutdown completed!"
    echo ""
    print_status $CYAN "📊 To restart the system:"
    echo "   • Run: $REDUNDANCY_DIR/start-enhanced-redundancy-system.sh"
    echo ""
    print_status $CYAN "📋 To check system status:"
    echo "   • PM2 status: pm2 status"
    echo "   • Process check: ps aux | grep enhanced"
    echo "   • Log files: ls -la $LOG_DIR/enhanced-redundancy-*.log"
    echo ""
}

# Handle command line arguments
case "${1:-}" in
    --emergency|-e)
        print_status $RED "🚨 Emergency shutdown requested via command line"
        emergency_shutdown
        show_shutdown_summary
        exit 0
        ;;
    --force|-f)
        print_status $YELLOW "⚠️  Force shutdown requested via command line"
        graceful_shutdown
        show_shutdown_summary
        exit 0
        ;;
    --help|-h)
        echo "Usage: $0 [OPTIONS]"
        echo ""
        echo "Options:"
        echo "  --emergency, -e    Force emergency shutdown (kill all processes)"
        echo "  --force, -f        Force graceful shutdown"
        echo "  --help, -h         Show this help message"
        echo ""
        echo "If no options provided, interactive shutdown will be performed."
        exit 0
        ;;
    "")
        # No arguments, run interactive shutdown
        main
        ;;
    *)
        print_status $RED "❌ Unknown option: $1"
        echo "Use --help for usage information"
        exit 1
        ;;
esac