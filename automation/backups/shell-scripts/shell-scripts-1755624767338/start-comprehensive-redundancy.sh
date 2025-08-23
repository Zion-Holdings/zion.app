#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script manages all redundancy automations: PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/comprehensive-redundancy.pid"
LOG_FILE="$LOG_DIR/comprehensive-redundancy.log"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed or not in PATH"
        return 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
    return 0
}

# Check if Git is available
check_git() {
    if ! command -v git &> /dev/null; then
        log "ERROR" "Git is not installed or not in PATH"
        exit 1
    fi
    
    local git_version=$(git --version)
    log "INFO" "Git version: $git_version"
}

# Check workspace status
check_workspace() {
    cd "$WORKSPACE_DIR"
    
    if [ ! -f "package.json" ]; then
        log "ERROR" "Not in a valid Node.js workspace (package.json not found)"
        exit 1
    fi
    
    if [ ! -d ".git" ]; then
        log "ERROR" "Not in a valid Git repository"
        exit 1
    fi
    
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Repository: $(git remote get-url origin 2>/dev/null || echo 'No remote')"
}

# Start comprehensive redundancy system
start_system() {
    log "INFO" "Starting Comprehensive Redundancy System..."
    
    # Check prerequisites
    check_node
    check_git
    check_workspace
    
    # Check if already running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "System already running with PID $pid"
            return 0
        else
            log "WARN" "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the comprehensive redundancy orchestrator
    cd "$WORKSPACE_DIR"
    
    log "INFO" "Starting PM2 redundancy management..."
    if check_pm2; then
        # Start PM2 processes if available
        npm run redundancy:pm2 || log "WARN" "PM2 redundancy failed to start"
    fi
    
    log "INFO" "Starting GitHub Actions redundancy management..."
    npm run redundancy:github || log "WARN" "GitHub redundancy failed to start"
    
    log "INFO" "Starting Netlify Functions redundancy management..."
    npm run redundancy:netlify || log "WARN" "Netlify redundancy failed to start"
    
    # Start the main orchestrator
    log "INFO" "Starting main redundancy orchestrator..."
    nohup node automation/comprehensive-redundancy-orchestrator.cjs start > "$LOG_FILE" 2>&1 &
    local orchestrator_pid=$!
    
    # Save PID
    echo "$orchestrator_pid" > "$PID_FILE"
    
    # Wait a moment and check if it's running
    sleep 2
    if ps -p "$orchestrator_pid" > /dev/null 2>&1; then
        log "INFO" "Comprehensive Redundancy System started successfully with PID $orchestrator_pid"
        log "INFO" "Log file: $LOG_FILE"
        log "INFO" "PID file: $PID_FILE"
    else
        log "ERROR" "Failed to start Comprehensive Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
    
    # Start additional redundancy processes
    log "INFO" "Starting additional redundancy processes..."
    
    # Start redundancy health monitor
    nohup node automation/redundancy-health-monitor.cjs > "$LOG_DIR/redundancy-health.log" 2>&1 &
    echo "$!" >> "$PID_FILE"
    
    # Start redundancy git sync
    nohup node automation/redundancy-git-sync.cjs > "$LOG_DIR/redundancy-git-sync.log" 2>&1 &
    echo "$!" >> "$PID_FILE"
    
    # Start redundancy build monitor
    nohup node automation/redundancy-build-monitor.cjs > "$LOG_DIR/redundancy-build.log" 2>&1 &
    echo "$!" >> "$PID_FILE"
    
    log "INFO" "All redundancy processes started"
}

# Stop comprehensive redundancy system
stop_system() {
    log "INFO" "Stopping Comprehensive Redundancy System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARN" "No PID file found, system may not be running"
        return 0
    fi
    
    # Stop all processes in PID file
    while read -r pid; do
        if [ -n "$pid" ] && ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process with PID $pid"
            kill "$pid" 2>/dev/null || true
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Force killing process with PID $pid"
                kill -9 "$pid" 2>/dev/null || true
            fi
        fi
    done < "$PID_FILE"
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    # Stop PM2 processes if available
    if check_pm2; then
        log "INFO" "Stopping PM2 redundancy processes..."
        npm run redundancy:pm2:stop || log "WARN" "Failed to stop PM2 redundancy"
    fi
    
    log "INFO" "Comprehensive Redundancy System stopped"
}

# Restart comprehensive redundancy system
restart_system() {
    log "INFO" "Restarting Comprehensive Redundancy System..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    log "INFO" "Checking Comprehensive Redundancy System status..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "INFO" "System is not running (no PID file)"
        return 1
    fi
    
    local running_count=0
    local total_count=0
    
    while read -r pid; do
        if [ -n "$pid" ]; then
            total_count=$((total_count + 1))
            if ps -p "$pid" > /dev/null 2>&1; then
                running_count=$((running_count + 1))
                log "INFO" "Process PID $pid: RUNNING"
            else
                log "WARN" "Process PID $pid: NOT RUNNING"
            fi
        fi
    done < "$PID_FILE"
    
    log "INFO" "Status: $running_count/$total_count processes running"
    
    # Check PM2 status if available
    if check_pm2; then
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon 2>/dev/null || log "WARN" "Failed to get PM2 status"
    fi
    
    # Check orchestrator status
    if [ -f "$PID_FILE" ]; then
        local main_pid=$(head -n1 "$PID_FILE" 2>/dev/null)
        if [ -n "$main_pid" ] && ps -p "$main_pid" > /dev/null 2>&1; then
            log "INFO" "Main orchestrator is running (PID: $main_pid)"
        else
            log "WARN" "Main orchestrator is not running"
        fi
    fi
    
    return 0
}

# Show logs
show_logs() {
    local lines="${1:-50}"
    
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing last $lines lines of main log:"
        tail -n "$lines" "$LOG_FILE"
    else
        log "WARN" "Main log file not found: $LOG_FILE"
    fi
    
    # Show other log files
    for log_file in "$LOG_DIR"/*.log; do
        if [ -f "$log_file" ] && [ "$log_file" != "$LOG_FILE" ]; then
            local filename=$(basename "$log_file")
            log "INFO" "Showing last 10 lines of $filename:"
            tail -n 10 "$log_file" 2>/dev/null || true
            echo
        fi
    done
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    cd "$WORKSPACE_DIR"
    
    if [ -f "automation/comprehensive-redundancy-orchestrator.cjs" ]; then
        node automation/comprehensive-redundancy-orchestrator.cjs report
    else
        log "ERROR" "Comprehensive redundancy orchestrator not found"
        return 1
    fi
}

# Test system
test_system() {
    log "INFO" "Testing Comprehensive Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    if [ -f "automation/comprehensive-redundancy-orchestrator.cjs" ]; then
        log "INFO" "Running one-time orchestration test..."
        if node automation/comprehensive-redundancy-orchestrator.cjs once; then
            log "INFO" "Test completed successfully"
        else
            log "ERROR" "Test failed"
            return 1
        fi
    else
        log "ERROR" "Comprehensive redundancy orchestrator not found"
        return 1
    fi
}

# Main script logic
main() {
    local command="${1:-start}"
    
    case "$command" in
        "start")
            start_system
            ;;
        "stop")
            stop_system
            ;;
        "restart")
            restart_system
            ;;
        "status")
            check_status
            ;;
        "logs")
            show_logs "$2"
            ;;
        "report")
            generate_report
            ;;
        "test")
            test_system
            ;;
        "help"|"-h"|"--help")
            echo "Usage: $0 [start|stop|restart|status|logs|report|test|help]"
            echo ""
            echo "Commands:"
            echo "  start     - Start the comprehensive redundancy system"
            echo "  stop      - Stop the comprehensive redundancy system"
            echo "  restart   - Restart the comprehensive redundancy system"
            echo "  status    - Check system status"
            echo "  logs      - Show logs (optional: number of lines, default: 50)"
            echo "  report    - Generate health report"
            echo "  test      - Run system test"
            echo "  help      - Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 logs 100"
            echo "  $0 report"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"