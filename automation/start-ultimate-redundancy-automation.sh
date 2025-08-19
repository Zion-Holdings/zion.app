#!/bin/bash

<<<<<<< HEAD
# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive control over the redundancy automation system

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-automation.pid"
STATUS_FILE="$WORKSPACE_DIR/ultimate-redundancy-status.json"
=======
# Ultimate Redundancy Automation Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-automation.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy-automation.log"
AUTOMATION_SCRIPT="$SCRIPT_DIR/ultimate-redundancy-automation.cjs"
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

<<<<<<< HEAD
# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check if system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
=======
# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Function to log messages
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "WARNING")
            echo -e "${YELLOW}[$timestamp] [WARNING]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Function to check if automation is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

<<<<<<< HEAD
# Function to create log directory
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        print_status "$BLUE" "Created log directory: $LOG_DIR"
    fi
}

# Function to start the system
start_system() {
    if is_running; then
        print_status "$YELLOW" "Ultimate Redundancy Automation System is already running (PID: $(cat $PID_FILE))"
        return 0
    fi

    print_status "$BLUE" "Starting Ultimate Redundancy Automation System..."
    
    ensure_log_dir
    
    cd "$WORKSPACE_DIR"
    
    # Start the system in background
    nohup node automation/ultimate-redundancy-automation-system.cjs start > "$LOG_DIR/ultimate-redundancy-automation.out" 2> "$LOG_DIR/ultimate-redundancy-automation.err" &
    
    local pid=$!
=======
# Function to start the automation
start() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARNING" "Automation is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if the automation script exists
    if [ ! -f "$AUTOMATION_SCRIPT" ]; then
        log "ERROR" "Automation script not found: $AUTOMATION_SCRIPT"
        return 1
    fi
    
    # Start the automation in the background
    cd "$PROJECT_ROOT"
    nohup node "$AUTOMATION_SCRIPT" start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID to file
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
<<<<<<< HEAD
    
    if is_running; then
        print_status "$GREEN" "Ultimate Redundancy Automation System started successfully (PID: $pid)"
        print_status "$BLUE" "Logs: $LOG_DIR/ultimate-redundancy-automation.out"
        print_status "$BLUE" "Errors: $LOG_DIR/ultimate-redundancy-automation.err"
        return 0
    else
        print_status "$RED" "Failed to start Ultimate Redundancy Automation System"
=======
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Ultimate Redundancy Automation started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_FILE"
        return 0
    else
        log "ERROR" "Failed to start automation"
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        rm -f "$PID_FILE"
        return 1
    fi
}

<<<<<<< HEAD
# Function to stop the system
stop_system() {
    if ! is_running; then
        print_status "$YELLOW" "Ultimate Redundancy Automation System is not running"
        return 0
    fi

    local pid=$(cat "$PID_FILE")
    print_status "$BLUE" "Stopping Ultimate Redundancy Automation System (PID: $pid)..."
    
    # Try graceful shutdown first
    if kill -TERM "$pid" 2>/dev/null; then
        # Wait for graceful shutdown
        local count=0
        while [ $count -lt 10 ] && is_running; do
=======
# Function to stop the automation
stop() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if [ ! -f "$PID_FILE" ]; then
        log "WARNING" "No PID file found. Automation may not be running."
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Sending SIGTERM to process $pid..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
            sleep 1
            count=$((count + 1))
        done
        
<<<<<<< HEAD
        # Force kill if still running
        if is_running; then
            print_status "$YELLOW" "Force killing process..."
            kill -KILL "$pid" 2>/dev/null || true
        fi
    fi
    
    rm -f "$PID_FILE"
    print_status "$GREEN" "Ultimate Redundancy Automation System stopped"
}

# Function to restart the system
restart_system() {
    print_status "$BLUE" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

# Function to check system status
check_status() {
    if is_running; then
        local pid=$(cat "$PID_FILE")
        print_status "$GREEN" "Ultimate Redundancy Automation System is running (PID: $pid)"
        
        # Show system status if available
        if [ -f "$STATUS_FILE" ]; then
            print_status "$BLUE" "System Status:"
            cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
        fi
        
        # Show PM2 status
        if command -v pm2 >/dev/null 2>&1; then
            print_status "$BLUE" "PM2 Status:"
            pm2 status --no-daemon 2>/dev/null || echo "PM2 not available"
=======
        if kill -0 "$pid" 2>/dev/null; then
            log "WARNING" "Process did not stop gracefully, sending SIGKILL..."
            kill -9 "$pid"
        fi
        
        log "SUCCESS" "Automation stopped successfully"
    else
        log "WARNING" "Process $pid is not running"
    fi
    
    rm -f "$PID_FILE"
    return 0
}

# Function to restart the automation
restart() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Function to check status
status() {
    log "INFO" "Checking Ultimate Redundancy Automation System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Automation is running (PID: $pid)"
        
        # Check process details
        if command -v ps &> /dev/null; then
            echo ""
            echo "Process Details:"
            ps -p "$pid" -o pid,ppid,cmd,etime,pcpu,pmem 2>/dev/null || true
        fi
        
        # Check recent logs
        if [ -f "$LOG_FILE" ]; then
            echo ""
            echo "Recent Logs (last 10 lines):"
            tail -n 10 "$LOG_FILE" 2>/dev/null || true
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        fi
        
        return 0
    else
<<<<<<< HEAD
        print_status "$RED" "Ultimate Redundancy Automation System is not running"
=======
        log "WARNING" "Automation is not running"
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        return 1
    fi
}

# Function to show logs
<<<<<<< HEAD
show_logs() {
    ensure_log_dir
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.out" ]; then
        print_status "$BLUE" "=== System Output Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.out"
        echo
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.err" ]; then
        print_status "$BLUE" "=== System Error Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.err"
        echo
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-automation.log" ]; then
        print_status "$BLUE" "=== System Application Log ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-automation.log"
        echo
    fi
}

# Function to perform health check
health_check() {
    if ! is_running; then
        print_status "$RED" "System is not running - cannot perform health check"
        return 1
    fi
    
    print_status "$BLUE" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    node automation/ultimate-redundancy-automation-system.cjs health
    
    if [ $? -eq 0 ]; then
        print_status "$GREEN" "Health check completed successfully"
    else
        print_status "$RED" "Health check failed"
=======
logs() {
    if [ -f "$LOG_FILE" ]; then
        if [ "$1" = "follow" ]; then
            log "INFO" "Following logs (Ctrl+C to stop)..."
            tail -f "$LOG_FILE"
        else
            log "INFO" "Showing recent logs..."
            tail -n 50 "$LOG_FILE"
        fi
    else
        log "WARNING" "No log file found: $LOG_FILE"
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        return 1
    fi
}

<<<<<<< HEAD
# Function to show system information
show_info() {
    print_status "$BLUE" "=== Ultimate Redundancy Automation System Information ==="
    echo "Workspace: $WORKSPACE_DIR"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "PID File: $PID_FILE"
    echo "Status File: $STATUS_FILE"
    echo
    
    # Check dependencies
    print_status "$BLUE" "=== Dependency Check ==="
    
    if command -v node >/dev/null 2>&1; then
        echo "Node.js: $(node --version) ✓"
    else
        echo "Node.js: Not installed ✗"
    fi
    
    if command -v npm >/dev/null 2>&1; then
        echo "npm: $(npm --version) ✓"
    else
        echo "npm: Not installed ✗"
    fi
    
    if command -v pm2 >/dev/null 2>&1; then
        echo "PM2: $(pm2 --version) ✓"
    else
        echo "PM2: Not installed ✗"
    fi
    
    if command -v git >/dev/null 2>&1; then
        echo "Git: $(git --version) ✓"
    else
        echo "Git: Not installed ✗"
    fi
    
    echo
    
    # Check system resources
    print_status "$BLUE" "=== System Resources ==="
    echo "CPU Usage: $(top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1)%"
    echo "Memory Usage: $(free | grep Mem | awk '{printf "%.1f%%", $3/$2 * 100.0}')"
    echo "Disk Usage: $(df / | tail -1 | awk '{print $5}')"
    echo
    
    # Check automation files
    print_status "$BLUE" "=== Automation Files ==="
    if [ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-automation-system.cjs" ]; then
        echo "Main System: ✓"
    else
        echo "Main System: ✗"
    fi
    
    if [ -d "$WORKSPACE_DIR/.github/workflows" ]; then
        echo "GitHub Workflows: ✓ ($(ls -1 $WORKSPACE_DIR/.github/workflows/*.yml 2>/dev/null | wc -l) workflows)"
    else
        echo "GitHub Workflows: ✗"
    fi
    
    if [ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]; then
        echo "Netlify Functions: ✓"
    else
        echo "Netlify Functions: ✗"
    fi
}

# Function to cleanup
cleanup() {
    print_status "$BLUE" "Cleaning up..."
    
    # Stop system if running
    if is_running; then
        stop_system
    fi
    
    # Clean old log files (keep last 10)
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "*.log" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.out" -type f -mtime +7 -delete 2>/dev/null || true
        find "$LOG_DIR" -name "*.err" -type f -mtime +7 -delete 2>/dev/null || true
    fi
    
    print_status "$GREEN" "Cleanup completed"
=======
# Function to check health
health() {
    log "INFO" "Checking system health..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        cd "$PROJECT_ROOT"
        
        # Run health check
        if node "$AUTOMATION_SCRIPT" health; then
            log "SUCCESS" "System health check completed successfully"
        else
            log "WARNING" "System health check completed with warnings"
        fi
    else
        log "ERROR" "Cannot check health - automation is not running"
        return 1
    fi
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
}

# Function to show help
show_help() {
<<<<<<< HEAD
    echo "Ultimate Redundancy Automation System Control Script"
    echo
    echo "Usage: $0 [COMMAND]"
    echo
    echo "Commands:"
    echo "  start       Start the redundancy automation system"
    echo "  stop        Stop the redundancy automation system"
    echo "  restart     Restart the redundancy automation system"
    echo "  status      Show system status and information"
    echo "  logs        Show recent logs"
    echo "  health      Perform health check"
    echo "  info        Show system information and dependencies"
    echo "  cleanup     Clean up old files and logs"
    echo "  help        Show this help message"
    echo
    echo "Examples:"
    echo "  $0 start          # Start the system"
    echo "  $0 status         # Check system status"
    echo "  $0 logs           # View recent logs"
    echo "  $0 health         # Run health check"
=======
    echo "Ultimate Redundancy Automation Management Script"
    echo ""
    echo "Usage: $0 {start|stop|restart|status|logs|health|help}"
    echo ""
    echo "Commands:"
    echo "  start     Start the ultimate redundancy automation system"
    echo "  stop      Stop the automation system"
    echo "  restart   Restart the automation system"
    echo "  status    Show current status and process information"
    echo "  logs      Show recent logs (use 'logs follow' to follow logs)"
    echo "  health    Run a comprehensive health check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start the automation"
    echo "  $0 status                   # Check status"
    echo "  $0 logs follow              # Follow logs in real-time"
    echo "  $0 health                   # Run health check"
    echo ""
    echo "Logs: $LOG_FILE"
    echo "PID File: $PID_FILE"
}

# Function to perform comprehensive system check
system_check() {
    log "INFO" "Performing comprehensive system check..."
    
    echo ""
    echo "=== System Information ==="
    echo "Project Root: $PROJECT_ROOT"
    echo "Script Directory: $SCRIPT_DIR"
    echo "Log Directory: $LOG_DIR"
    echo "Automation Script: $AUTOMATION_SCRIPT"
    
    echo ""
    echo "=== Dependencies Check ==="
    
    # Check Node.js
    if command -v node &> /dev/null; then
        local node_version=$(node --version)
        log "SUCCESS" "Node.js: $node_version"
    else
        log "ERROR" "Node.js: Not installed"
    fi
    
    # Check PM2
    if command -v pm2 &> /dev/null; then
        local pm2_version=$(pm2 --version)
        log "SUCCESS" "PM2: $pm2_version"
    else
        log "WARNING" "PM2: Not installed"
    fi
    
    # Check Git
    if command -v git &> /dev/null; then
        local git_version=$(git --version)
        log "SUCCESS" "Git: $git_version"
    else
        log "ERROR" "Git: Not installed"
    fi
    
    echo ""
    echo "=== File System Check ==="
    
    # Check automation script
    if [ -f "$AUTOMATION_SCRIPT" ]; then
        log "SUCCESS" "Automation script exists"
    else
        log "ERROR" "Automation script missing: $AUTOMATION_SCRIPT"
    fi
    
    # Check log directory
    if [ -d "$LOG_DIR" ]; then
        log "SUCCESS" "Log directory exists"
    else
        log "WARNING" "Log directory missing: $LOG_DIR"
    fi
    
    # Check ecosystem files
    local ecosystem_files=("ecosystem.pm2.cjs" "ecosystem.comprehensive-redundancy.cjs")
    for file in "${ecosystem_files[@]}"; do
        if [ -f "$PROJECT_ROOT/$file" ]; then
            log "SUCCESS" "Ecosystem file exists: $file"
        else
            log "WARNING" "Ecosystem file missing: $file"
        fi
    done
    
    # Check GitHub Actions workflows
    local workflow_dir="$PROJECT_ROOT/.github/workflows"
    if [ -d "$workflow_dir" ]; then
        local workflow_count=$(find "$workflow_dir" -name "*.yml" | wc -l)
        log "SUCCESS" "GitHub Actions workflows: $workflow_count found"
    else
        log "WARNING" "GitHub Actions workflows directory missing"
    fi
    
    # Check Netlify functions
    local netlify_dir="$PROJECT_ROOT/netlify/functions"
    if [ -d "$netlify_dir" ]; then
        if [ -f "$netlify_dir/functions-manifest.json" ]; then
            log "SUCCESS" "Netlify functions manifest exists"
        else
            log "WARNING" "Netlify functions manifest missing"
        fi
    else
        log "WARNING" "Netlify functions directory missing"
    fi
    
    echo ""
    echo "=== Current Status ==="
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "SUCCESS" "Automation is running (PID: $pid)"
    else
        log "WARNING" "Automation is not running"
    fi
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
}

# Main script logic
case "${1:-help}" in
    start)
<<<<<<< HEAD
        start_system
        ;;
    stop)
        stop_system
        ;;
    restart)
        restart_system
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
        ;;
    health)
        health_check
        ;;
    info)
        show_info
        ;;
    cleanup)
        cleanup
=======
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    logs)
        logs "$2"
        ;;
    health)
        health
        ;;
    check)
        system_check
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
<<<<<<< HEAD
        print_status "$RED" "Unknown command: $1"
        echo
=======
        log "ERROR" "Unknown command: $1"
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
        show_help
        exit 1
        ;;
esac

<<<<<<< HEAD
exit 0
=======
exit $?
>>>>>>> 5864471f7bc88f5bdab5eac57d6660fead4211fa
