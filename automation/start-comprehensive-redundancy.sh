#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script launches all redundancy systems for PM2, GitHub Actions, and Netlify Functions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/redundancy-system.pid"

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
    
    # Also write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/startup.log"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Redundancy system is already running with PID $pid"
            return 0
        else
            log "WARN" "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check if Node.js is available
    if ! command -v node >/dev/null 2>&1; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local major_version=$(echo "$node_version" | cut -d'.' -f1)
    
    if [ "$major_version" -lt 16 ]; then
        log "ERROR" "Node.js version 16 or higher is required (found: $node_version)"
        exit 1
    fi
    
    log "INFO" "Node.js version $node_version is compatible"
    
    # Check if PM2 is available
    if ! command -v pm2 >/dev/null 2>&1; then
        log "WARN" "PM2 is not installed globally, attempting to install..."
        npm install -g pm2
        if [ $? -ne 0 ]; then
            log "ERROR" "Failed to install PM2 globally"
            exit 1
        fi
    fi
    
    log "INFO" "PM2 is available"
    
    # Check if git is available
    if ! command -v git >/dev/null 2>&1; then
        log "ERROR" "Git is not installed or not in PATH"
        exit 1
    fi
    
    log "INFO" "Git is available"
    
    # Check workspace directory
    if [ ! -d "$WORKSPACE_DIR" ]; then
        log "ERROR" "Workspace directory not found: $WORKSPACE_DIR"
        exit 1
    fi
    
    log "INFO" "Workspace directory: $WORKSPACE_DIR"
    
    # Check if required automation files exist
    local required_files=(
        "comprehensive-redundancy-system.cjs"
        "enhanced-pm2-redundancy.cjs"
        "enhanced-github-actions-redundancy.cjs"
        "enhanced-netlify-functions-redundancy.cjs"
        "master-redundancy-orchestrator.cjs"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$SCRIPT_DIR/$file" ]; then
            log "ERROR" "Required file not found: $file"
            exit 1
        fi
    done
    
    log "INFO" "All required automation files found"
}

# Start the master redundancy orchestrator
start_orchestrator() {
    log "INFO" "Starting master redundancy orchestrator..."
    
    cd "$SCRIPT_DIR"
    
    # Start the orchestrator in the background
    nohup node master-redundancy-orchestrator.cjs > "$LOG_DIR/orchestrator.log" 2>&1 &
    local orchestrator_pid=$!
    
    # Save PID
    echo "$orchestrator_pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 3
    
    if ps -p "$orchestrator_pid" > /dev/null 2>&1; then
        log "INFO" "Master redundancy orchestrator started successfully with PID $orchestrator_pid"
        return 0
    else
        log "ERROR" "Failed to start master redundancy orchestrator"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Start individual redundancy systems (alternative method)
start_individual_systems() {
    log "INFO" "Starting individual redundancy systems..."
    
    cd "$SCRIPT_DIR"
    
    # Start comprehensive redundancy system
    log "INFO" "Starting comprehensive redundancy system..."
    nohup node comprehensive-redundancy-system.cjs > "$LOG_DIR/comprehensive.log" 2>&1 &
    local comprehensive_pid=$!
    
    # Start enhanced PM2 redundancy system
    log "INFO" "Starting enhanced PM2 redundancy system..."
    nohup node enhanced-pm2-redundancy.cjs > "$LOG_DIR/pm2-redundancy.log" 2>&1 &
    local pm2_pid=$!
    
    # Start enhanced GitHub Actions redundancy system
    log "INFO" "Starting enhanced GitHub Actions redundancy system..."
    nohup node enhanced-github-actions-redundancy.cjs > "$LOG_DIR/github-actions-redundancy.log" 2>&1 &
    local github_pid=$!
    
    # Start enhanced Netlify functions redundancy system
    log "INFO" "Starting enhanced Netlify functions redundancy system..."
    nohup node enhanced-netlify-functions-redundancy.cjs > "$LOG_DIR/netlify-functions-redundancy.log" 2>&1 &
    local netlify_pid=$!
    
    # Save PIDs
    echo "$comprehensive_pid $pm2_pid $github_pid $netlify_pid" > "$PID_FILE"
    
    # Wait a moment to see if they start successfully
    sleep 3
    
    local all_running=true
    for pid in "$comprehensive_pid" "$pm2_pid" "$github_pid" "$netlify_pid"; do
        if ! ps -p "$pid" > /dev/null 2>&1; then
            log "ERROR" "Process with PID $pid failed to start"
            all_running=false
        fi
    done
    
    if [ "$all_running" = true ]; then
        log "INFO" "All individual redundancy systems started successfully"
        return 0
    else
        log "ERROR" "Some redundancy systems failed to start"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Show system status
show_status() {
    log "INFO" "Checking redundancy system status..."
    
    if [ -f "$PID_FILE" ]; then
        local pids=$(cat "$PID_FILE")
        local all_running=true
        
        for pid in $pids; do
            if ps -p "$pid" > /dev/null 2>&1; then
                log "INFO" "Process $pid is running"
            else
                log "WARN" "Process $pid is not running"
                all_running=false
            fi
        done
        
        if [ "$all_running" = true ]; then
            log "INFO" "All redundancy systems are running"
        else
            log "WARN" "Some redundancy systems are not running"
        fi
    else
        log "INFO" "No redundancy system PID file found"
    fi
    
    # Show log files
    log "INFO" "Recent log entries:"
    if [ -f "$LOG_DIR/startup.log" ]; then
        tail -10 "$LOG_DIR/startup.log" | while read line; do
            echo "  $line"
        done
    fi
}

# Stop the redundancy system
stop_system() {
    log "INFO" "Stopping redundancy system..."
    
    if [ -f "$PID_FILE" ]; then
        local pids=$(cat "$PID_FILE")
        
        for pid in $pids; do
            if ps -p "$pid" > /dev/null 2>&1; then
                log "INFO" "Stopping process $pid..."
                kill "$pid" 2>/dev/null || true
                
                # Wait for graceful shutdown
                local count=0
                while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                    sleep 1
                    count=$((count + 1))
                done
                
                # Force kill if still running
                if ps -p "$pid" > /dev/null 2>&1; then
                    log "WARN" "Force killing process $pid..."
                    kill -9 "$pid" 2>/dev/null || true
                fi
            fi
        done
        
        rm -f "$PID_FILE"
        log "INFO" "Redundancy system stopped"
    else
        log "INFO" "No redundancy system PID file found"
    fi
}

# Main function
main() {
    local action="${1:-start}"
    
    case "$action" in
        "start")
            if check_running; then
                log "INFO" "Redundancy system is already running"
                exit 0
            fi
            
            check_requirements
            
            # Try to start the orchestrator first
            if start_orchestrator; then
                log "INFO" "Redundancy system started successfully using orchestrator"
            else
                log "WARN" "Orchestrator failed, falling back to individual systems..."
                if start_individual_systems; then
                    log "INFO" "Redundancy system started successfully using individual systems"
                else
                    log "ERROR" "Failed to start redundancy system"
                    exit 1
                fi
            fi
            
            # Show status
            show_status
            ;;
            
        "stop")
            stop_system
            ;;
            
        "restart")
            log "INFO" "Restarting redundancy system..."
            stop_system
            sleep 2
            $0 start
            ;;
            
        "status")
            show_status
            ;;
            
        "logs")
            log "INFO" "Showing recent logs..."
            if [ -f "$LOG_DIR/startup.log" ]; then
                tail -50 "$LOG_DIR/startup.log"
            else
                log "INFO" "No startup logs found"
            fi
            ;;
            
        "help"|"-h"|"--help")
            echo "Usage: $0 [start|stop|restart|status|logs|help]"
            echo ""
            echo "Commands:"
            echo "  start   - Start the redundancy system (default)"
            echo "  stop    - Stop the redundancy system"
            echo "  restart - Restart the redundancy system"
            echo "  status  - Show system status"
            echo "  logs    - Show recent logs"
            echo "  help    - Show this help message"
            ;;
            
        *)
            log "ERROR" "Unknown action: $action"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Trap signals for graceful shutdown
trap 'log "INFO" "Received signal, shutting down..."; stop_system; exit 0' SIGINT SIGTERM

# Run main function
main "$@"