#!/bin/bash

# Redundancy Automation System Startup Script
# This script starts all redundancy automation systems for PM2, GitHub Actions, and Netlify functions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Log function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_DIR/redundancy-startup.log"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_DIR/redundancy-startup.log"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_DIR/redundancy-startup.log"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_DIR/redundancy-startup.log"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    log "Node.js version: $NODE_VERSION"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        warning "PM2 is not installed. Some redundancy features may not work."
        return 1
    fi
    
    PM2_VERSION=$(pm2 --version)
    log "PM2 version: $PM2_VERSION"
    return 0
}

# Check if Git is available
check_git() {
    if ! command -v git &> /dev/null; then
        error "Git is not installed or not in PATH"
        exit 1
    fi
    
    GIT_VERSION=$(git --version)
    log "Git version: $GIT_VERSION"
}

# Check workspace
check_workspace() {
    if [[ ! -d "$WORKSPACE_DIR/.git" ]]; then
        error "Not a Git repository. Please run this script from the project root."
        exit 1
    fi
    
    log "Workspace: $WORKSPACE_DIR"
    
    # Check for required directories
    if [[ ! -d "$WORKSPACE_DIR/.github/workflows" ]]; then
        warning "GitHub workflows directory not found"
    fi
    
    if [[ ! -d "$WORKSPACE_DIR/netlify" ]]; then
        warning "Netlify directory not found"
    fi
    
    if [[ ! -f "$WORKSPACE_DIR/ecosystem.pm2.cjs" ]]; then
        warning "PM2 ecosystem file not found"
    fi
}

# Start PM2 redundancy monitoring
start_pm2_redundancy() {
    log "Starting PM2 redundancy monitoring..."
    
    if check_pm2; then
        cd "$WORKSPACE_DIR"
        nohup node "$SCRIPT_DIR/pm2-redundancy-monitor.cjs" monitor > "$LOG_DIR/pm2-redundancy.log" 2>&1 &
        PM2_PID=$!
        echo $PM2_PID > "$LOG_DIR/pm2-redundancy.pid"
        success "PM2 redundancy monitoring started (PID: $PM2_PID)"
    else
        warning "Skipping PM2 redundancy monitoring"
    fi
}

# Start GitHub Actions redundancy monitoring
start_github_redundancy() {
    log "Starting GitHub Actions redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    nohup node "$SCRIPT_DIR/github-actions-redundancy.cjs" monitor > "$LOG_DIR/github-actions-redundancy.log" 2>&1 &
    GITHUB_PID=$!
    echo $GITHUB_PID > "$LOG_DIR/github-actions-redundancy.pid"
    success "GitHub Actions redundancy monitoring started (PID: $GITHUB_PID)"
}

# Start Netlify functions redundancy monitoring
start_netlify_redundancy() {
    log "Starting Netlify functions redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    nohup node "$SCRIPT_DIR/netlify-functions-redundancy.cjs" monitor > "$LOG_DIR/netlify-functions-redundancy.log" 2>&1 &
    NETLIFY_PID=$!
    echo $NETLIFY_PID > "$LOG_DIR/netlify-functions-redundancy.pid"
    success "Netlify functions redundancy monitoring started (PID: $NETLIFY_PID)"
}

# Start main redundancy system
start_main_redundancy() {
    log "Starting main redundancy automation system..."
    
    cd "$WORKSPACE_DIR"
    nohup node "$SCRIPT_DIR/redundancy-automation-system.cjs" monitor > "$LOG_DIR/redundancy-automation.log" 2>&1 &
    MAIN_PID=$!
    echo $MAIN_PID > "$LOG_DIR/redundancy-automation.pid"
    success "Main redundancy automation system started (PID: $MAIN_PID)"
}

# Check if processes are already running
check_running_processes() {
    log "Checking for already running redundancy processes..."
    
    local processes=(
        "pm2-redundancy"
        "github-actions-redundancy"
        "netlify-functions-redundancy"
        "redundancy-automation"
    )
    
    for process in "${processes[@]}"; do
        local pid_file="$LOG_DIR/$process.pid"
        if [[ -f "$pid_file" ]]; then
            local pid=$(cat "$pid_file")
            if kill -0 "$pid" 2>/dev/null; then
                warning "$process is already running (PID: $pid)"
                return 1
            else
                log "Removing stale PID file for $process"
                rm -f "$pid_file"
            fi
        fi
    done
    
    return 0
}

# Stop all redundancy processes
stop_redundancy() {
    log "Stopping all redundancy processes..."
    
    local processes=(
        "pm2-redundancy"
        "github-actions-redundancy"
        "netlify-functions-redundancy"
        "redundancy-automation"
    )
    
    for process in "${processes[@]}"; do
        local pid_file="$LOG_DIR/$process.pid"
        if [[ -f "$pid_file" ]]; then
            local pid=$(cat "$pid_file")
            if kill -0 "$pid" 2>/dev/null; then
                log "Stopping $process (PID: $pid)..."
                kill "$pid" 2>/dev/null || true
                rm -f "$pid_file"
                success "Stopped $process"
            else
                log "Process $process (PID: $pid) is not running"
                rm -f "$pid_file"
            fi
        fi
    done
    
    success "All redundancy processes stopped"
}

# Show status of redundancy processes
show_status() {
    log "Redundancy system status:"
    echo
    
    local processes=(
        "pm2-redundancy"
        "github-actions-redundancy"
        "netlify-functions-redundancy"
        "redundancy-automation"
    )
    
    for process in "${processes[@]}"; do
        local pid_file="$LOG_DIR/$process.pid"
        if [[ -f "$pid_file" ]]; then
            local pid=$(cat "$pid_file")
            if kill -0 "$pid" 2>/dev/null; then
                echo -e "${GREEN}✓${NC} $process is running (PID: $pid)"
            else
                echo -e "${RED}✗${NC} $process is not running (stale PID file)"
                rm -f "$pid_file"
            fi
        else
            echo -e "${YELLOW}○${NC} $process is not running"
        fi
    done
    
    echo
    log "Log files are in: $LOG_DIR"
}

# Run initial health checks
run_health_checks() {
    log "Running initial health checks..."
    
    cd "$WORKSPACE_DIR"
    
    # Run PM2 health check
    if check_pm2; then
        log "Running PM2 health check..."
        node "$SCRIPT_DIR/pm2-redundancy-monitor.cjs" check > "$LOG_DIR/pm2-health-check.log" 2>&1
        success "PM2 health check completed"
    fi
    
    # Run GitHub Actions health check
    log "Running GitHub Actions health check..."
    node "$SCRIPT_DIR/github-actions-redundancy.cjs" check > "$LOG_DIR/github-health-check.log" 2>&1
    success "GitHub Actions health check completed"
    
    # Run Netlify functions health check
    log "Running Netlify functions health check..."
    node "$SCRIPT_DIR/netlify-functions-redundancy.cjs" check > "$LOG_DIR/netlify-health-check.log" 2>&1
    success "Netlify functions health check completed"
    
    # Run main redundancy check
    log "Running main redundancy check..."
    node "$SCRIPT_DIR/redundancy-automation-system.cjs" check > "$LOG_DIR/main-redundancy-check.log" 2>&1
    success "Main redundancy check completed"
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        "start")
            log "Starting Redundancy Automation System..."
            log "=========================================="
            
            # Pre-flight checks
            check_node
            check_git
            check_workspace
            
            # Check for running processes
            if ! check_running_processes; then
                warning "Some redundancy processes are already running"
                read -p "Do you want to continue? (y/N): " -n 1 -r
                echo
                if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                    log "Aborted by user"
                    exit 0
                fi
            fi
            
            # Run initial health checks
            run_health_checks
            
            # Start all redundancy systems
            start_pm2_redundancy
            start_github_redundancy
            start_netlify_redundancy
            start_main_redundancy
            
            log "=========================================="
            success "Redundancy Automation System started successfully!"
            log "All systems are now monitoring and providing redundancy"
            log "Check logs in: $LOG_DIR"
            log "Use '$0 status' to check system status"
            log "Use '$0 stop' to stop all systems"
            ;;
            
        "stop")
            log "Stopping Redundancy Automation System..."
            stop_redundancy
            ;;
            
        "status")
            show_status
            ;;
            
        "restart")
            log "Restarting Redundancy Automation System..."
            stop_redundancy
            sleep 2
            exec "$0" start
            ;;
            
        "health")
            log "Running health checks..."
            run_health_checks
            ;;
            
        "logs")
            log "Recent log entries:"
            echo
            tail -n 50 "$LOG_DIR/redundancy-startup.log"
            ;;
            
        *)
            echo "Redundancy Automation System"
            echo
            echo "Usage: $0 [command]"
            echo
            echo "Commands:"
            echo "  start     Start all redundancy systems (default)"
            echo "  stop      Stop all redundancy systems"
            echo "  restart   Restart all redundancy systems"
            echo "  status    Show status of all systems"
            echo "  health    Run health checks"
            echo "  logs      Show recent log entries"
            echo
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 stop"
            ;;
    esac
}

# Trap signals for clean shutdown
trap 'log "Received signal, shutting down..."; stop_redundancy; exit 0' SIGINT SIGTERM

# Run main function
main "$@"