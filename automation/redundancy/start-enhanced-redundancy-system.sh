#!/bin/bash

# Enhanced Redundancy System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

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
ENHANCED_ORCHESTRATOR="$SCRIPT_DIR/enhanced-master-redundancy-orchestrator.cjs"

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
        *)
            echo -e "${CYAN}[$timestamp] [LOG]${NC} $message"
            ;;
    esac
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/enhanced-redundancy-startup.log"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2)
    local major_version=$(echo "$node_version" | cut -d'.' -f1)
    
    if [ "$major_version" -lt 18 ]; then
        log "ERROR" "Node.js version 18 or higher is required. Current version: $node_version"
        exit 1
    fi
    
    log "INFO" "Node.js version $node_version detected"
}

# Check if required dependencies are installed
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    # Check if node-cron is available
    if ! node -e "require('node-cron')" &> /dev/null; then
        log "WARN" "node-cron not found, installing..."
        cd "$PROJECT_ROOT"
        npm install node-cron
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 not found, installing..."
        npm install -g pm2
    fi
    
    log "INFO" "All dependencies are available"
}

# Check system resources
check_system_resources() {
    log "INFO" "Checking system resources..."
    
    # Check available memory
    local available_mem=$(free -m | awk 'NR==2{printf "%.0f", $7}')
    if [ "$available_mem" -lt 512 ]; then
        log "WARN" "Low memory available: ${available_mem}MB (recommended: 512MB+)"
    else
        log "INFO" "Available memory: ${available_mem}MB"
    fi
    
    # Check available disk space
    local available_disk=$(df -m "$PROJECT_ROOT" | awk 'NR==2{printf "%.0f", $4}')
    if [ "$available_disk" -lt 1024 ]; then
        log "WARN" "Low disk space available: ${available_disk}MB (recommended: 1GB+)"
    else
        log "INFO" "Available disk space: ${available_disk}MB"
    fi
    
    # Check CPU load
    local cpu_load=$(uptime | awk -F'load average:' '{print $2}' | awk '{print $1}' | sed 's/,//')
    log "INFO" "Current CPU load: $cpu_load"
}

# Start the enhanced redundancy system
start_system() {
    log "INFO" "Starting Enhanced Redundancy System..."
    
    cd "$PROJECT_ROOT"
    
    # Check if system is already running
    if pgrep -f "enhanced-master-redundancy-orchestrator" > /dev/null; then
        log "WARN" "Enhanced redundancy system appears to be already running"
        read -p "Do you want to restart it? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            log "INFO" "Restarting enhanced redundancy system..."
            stop_system
        else
            log "INFO" "System startup cancelled"
            return 0
        fi
    fi
    
    # Start the enhanced master orchestrator
    log "INFO" "Launching enhanced master orchestrator..."
    nohup node "$ENHANCED_ORCHESTRATOR" start > "$LOG_DIR/enhanced-orchestrator.log" 2>&1 &
    local orchestrator_pid=$!
    
    # Wait for startup
    log "INFO" "Waiting for system startup..."
    sleep 10
    
    # Check if orchestrator is running
    if kill -0 "$orchestrator_pid" 2>/dev/null; then
        log "INFO" "Enhanced redundancy system started successfully (PID: $orchestrator_pid)"
        echo "$orchestrator_pid" > "$LOG_DIR/enhanced-redundancy.pid"
        
        # Wait a bit more for full initialization
        sleep 15
        
        # Check system status
        check_system_status
    else
        log "ERROR" "Failed to start enhanced redundancy system"
        return 1
    fi
}

# Stop the enhanced redundancy system
stop_system() {
    log "INFO" "Stopping Enhanced Redundancy System..."
    
    # Stop orchestrator if running
    if [ -f "$LOG_DIR/enhanced-redundancy.pid" ]; then
        local orchestrator_pid=$(cat "$LOG_DIR/enhanced-redundancy.pid")
        if kill -0 "$orchestrator_pid" 2>/dev/null; then
            log "INFO" "Stopping orchestrator (PID: $orchestrator_pid)..."
            kill "$orchestrator_pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$orchestrator_pid" 2>/dev/null && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if kill -0 "$orchestrator_pid" 2>/dev/null; then
                log "WARN" "Force killing orchestrator..."
                kill -9 "$orchestrator_pid"
            fi
        fi
        
        rm -f "$LOG_DIR/enhanced-redundancy.pid"
    fi
    
    # Stop any remaining PM2 processes
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping PM2 backup processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    log "INFO" "Enhanced redundancy system stopped"
}

# Check system status
check_system_status() {
    log "INFO" "Checking system status..."
    
    if [ -f "$LOG_DIR/enhanced-redundancy.pid" ]; then
        local orchestrator_pid=$(cat "$LOG_DIR/enhanced-redundancy.pid")
        if kill -0 "$orchestrator_pid" 2>/dev/null; then
            log "INFO" "Enhanced redundancy system is running (PID: $orchestrator_pid)"
            
            # Get detailed status
            cd "$PROJECT_ROOT"
            if node "$ENHANCED_ORCHESTRATOR" status > /dev/null 2>&1; then
                log "INFO" "System status check completed successfully"
            else
                log "WARN" "System status check failed"
            fi
        else
            log "ERROR" "Enhanced redundancy system is not running"
            return 1
        fi
    else
        log "ERROR" "No PID file found - system may not be running"
        return 1
    fi
}

# Show system logs
show_logs() {
    log "INFO" "Recent system logs:"
    echo "----------------------------------------"
    
    if [ -f "$LOG_DIR/enhanced-master-redundancy.log" ]; then
        echo "Master Orchestrator Logs:"
        tail -n 20 "$LOG_DIR/enhanced-master-redundancy.log"
        echo
    fi
    
    if [ -f "$LOG_DIR/enhanced-pm2-redundancy.log" ]; then
        echo "PM2 Redundancy Logs:"
        tail -n 15 "$LOG_DIR/enhanced-pm2-redundancy.log"
        echo
    fi
    
    if [ -f "$LOG_DIR/enhanced-github-actions-redundancy.log" ]; then
        echo "GitHub Actions Redundancy Logs:"
        tail -n 15 "$LOG_DIR/enhanced-github-actions-redundancy.log"
        echo
    fi
    
    if [ -f "$LOG_DIR/enhanced-netlify-functions-redundancy.log" ]; then
        echo "Netlify Functions Redundancy Logs:"
        tail -n 15 "$LOG_DIR/enhanced-netlify-functions-redundancy.log"
        echo
    fi
    
    echo "----------------------------------------"
}

# Emergency recovery
emergency_recovery() {
    log "WARN" "Initiating emergency recovery..."
    
    # Stop everything
    stop_system
    
    # Wait for cleanup
    sleep 10
    
    # Clear any stale processes
    pkill -f "enhanced-master-redundancy-orchestrator" 2>/dev/null || true
    pkill -f "enhanced-pm2-redundancy-manager" 2>/dev/null || true
    pkill -f "enhanced-github-actions-redundancy-manager" 2>/dev/null || true
    pkill -f "enhanced-netlify-functions-redundancy-manager" 2>/dev/null || true
    
    # Clear PM2 processes
    if command -v pm2 &> /dev/null; then
        pm2 kill 2>/dev/null || true
        pm2 start ecosystem.pm2.cjs 2>/dev/null || true
    fi
    
    # Wait for system to stabilize
    sleep 15
    
    # Restart the system
    start_system
}

# Main function
main() {
    local command="${1:-start}"
    
    log "INFO" "Enhanced Redundancy System Management Script"
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Script Directory: $SCRIPT_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    
    case "$command" in
        "start")
            check_node
            check_dependencies
            check_system_resources
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            stop_system
            sleep 5
            start_system
            ;;
        "status")
            check_system_status
            ;;
        "logs")
            show_logs
            ;;
        "emergency")
            emergency_recovery
            ;;
        "help"|"--help"|"-h")
            echo "Enhanced Redundancy System Management Script"
            echo
            echo "Usage: $0 [command]"
            echo
            echo "Commands:"
            echo "  start     - Start the enhanced redundancy system"
            echo "  stop      - Stop the enhanced redundancy system"
            echo "  restart   - Restart the enhanced redundancy system"
            echo "  status    - Check system status"
            echo "  logs      - Show recent system logs"
            echo "  emergency - Perform emergency recovery"
            echo "  help      - Show this help message"
            echo
            echo "The enhanced redundancy system provides comprehensive backup for:"
            echo "  - PM2 automation processes"
            echo "  - GitHub Actions workflows"
            echo "  - Netlify Functions"
            echo
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'log "WARN" "Script interrupted"; exit 1' INT TERM

# Run main function with all arguments
main "$@"