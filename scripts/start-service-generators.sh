#!/bin/bash

# Start Service Generators - Launches all service generation automation
# This script ensures maximum redundancy by running multiple generators simultaneously

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_DIR="$PROJECT_ROOT/automation/pids"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure directories exist
mkdir -p "$LOG_DIR"
mkdir -p "$PID_DIR"

# Log function
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️ $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to start a service generator
start_generator() {
    local name="$1"
    local script="$2"
    local log_file="$LOG_DIR/${name}.log"
    local pid_file="$PID_DIR/${name}.pid"
    
    # Check if already running
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_warning "$name is already running (PID: $pid)"
            return 0
        else
            log "Removing stale PID file for $name"
            rm -f "$pid_file"
        fi
    fi
    
    # Check if script exists
    if [ ! -f "$script" ]; then
        log_error "Script not found: $script"
        return 1
    fi
    
    # Start the generator
    log "🚀 Starting $name..."
    nohup node "$script" > "$log_file" 2>&1 &
    local new_pid=$!
    
    # Save PID
    echo "$new_pid" > "$pid_file"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if ps -p "$new_pid" > /dev/null 2>&1; then
        log_success "$name started successfully (PID: $new_pid)"
        return 0
    else
        log_error "$name failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Function to start cron job
start_cron() {
    local cron_script="$PROJECT_ROOT/scripts/service-generator-cron.sh"
    local cron_log="$LOG_DIR/cron.log"
    local cron_pid_file="$PID_DIR/cron.pid"
    
    if [ ! -f "$cron_script" ]; then
        log_error "Cron script not found: $cron_script"
        return 1
    fi
    
    # Check if cron is already running
    if [ -f "$cron_pid_file" ]; then
        local pid=$(cat "$cron_pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_warning "Cron job is already running (PID: $pid)"
            return 0
        else
            rm -f "$cron_pid_file"
        fi
    fi
    
    log "⏰ Starting cron job..."
    
    # Start cron job that runs every minute
    (
        while true; do
            bash "$cron_script" >> "$cron_log" 2>&1
            sleep 60
        done
    ) &
    
    local cron_pid=$!
    echo "$cron_pid" > "$cron_pid_file"
    
    log_success "Cron job started (PID: $cron_pid)"
}

# Function to check status
check_status() {
    log "📊 Checking service generator status..."
    
    local all_running=true
    
    # Check ultra-fast generator
    if [ -f "$PID_DIR/ultra-fast-service-generator.pid" ]; then
        local pid=$(cat "$PID_DIR/ultra-fast-service-generator.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_success "Ultra-fast service generator: RUNNING (PID: $pid)"
        else
            log_error "Ultra-fast service generator: STOPPED"
            all_running=false
        fi
    else
        log_error "Ultra-fast service generator: NOT STARTED"
        all_running=false
    fi
    
    # Check redundant generator
    if [ -f "$PID_DIR/redundant-service-generator.pid" ]; then
        local pid=$(cat "$PID_DIR/redundant-service-generator.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_success "Redundant service generator: RUNNING (PID: $pid)"
        else
            log_error "Redundant service generator: STOPPED"
            all_running=false
        fi
    else
        log_error "Redundant service generator: NOT STARTED"
        all_running=false
    fi
    
    # Check exponential orchestrator
    if [ -f "$PID_DIR/exponential-service-orchestrator.pid" ]; then
        local pid=$(cat "$PID_DIR/exponential-service-orchestrator.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_success "Exponential service orchestrator: RUNNING (PID: $pid)"
        else
            log_error "Exponential service orchestrator: STOPPED"
            all_running=false
        fi
    else
        log_error "Exponential service orchestrator: NOT STARTED"
        all_running=false
    fi
    
    # Check cron job
    if [ -f "$PID_DIR/cron.pid" ]; then
        local pid=$(cat "$PID_DIR/cron.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_success "Cron job: RUNNING (PID: $pid)"
        else
            log_error "Cron job: STOPPED"
            all_running=false
        fi
    else
        log_error "Cron job: NOT STARTED"
        all_running=false
    fi
    
    if [ "$all_running" = true ]; then
        log_success "All service generators are running!"
    else
        log_warning "Some service generators are not running"
    fi
}

# Function to stop all generators
stop_all() {
    log "🛑 Stopping all service generators..."
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "Stopping $name (PID: $pid)..."
                kill "$pid" 2>/dev/null || true
                sleep 2
                
                if ps -p "$pid" > /dev/null 2>&1; then
                    log_warning "Force killing $name (PID: $pid)..."
                    kill -9 "$pid" 2>/dev/null || true
                fi
                
                log_success "$name stopped"
            else
                log_warning "$name was not running"
            fi
            
            rm -f "$pid_file"
        fi
    done
    
    log_success "All service generators stopped"
}

# Main execution
main() {
    log "🚀 Starting Service Generators for Maximum Redundancy..."
    
    # Change to project directory
    cd "$PROJECT_ROOT"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log_error "Node.js not found. Please install Node.js first."
        exit 1
    fi
    
    # Start all generators
    start_generator "ultra-fast-service-generator" "automation/ultra-fast-service-generator.cjs"
    start_generator "redundant-service-generator" "automation/redundant-service-generator.cjs"
    start_generator "exponential-service-orchestrator" "automation/exponential-autonomous-orchestrator.cjs"
    
    # Start cron job
    start_cron
    
    # Wait a moment for everything to start
    sleep 3
    
    # Check status
    check_status
    
    log_success "Service generators startup completed!"
    log "📁 Logs are available in: $LOG_DIR"
    log "📁 PID files are in: $PID_DIR"
    log ""
    log "Useful commands:"
    log "  Check status: $0 status"
    log "  Stop all: $0 stop"
    log "  View logs: tail -f $LOG_DIR/*.log"
}

# Handle command line arguments
case "${1:-start}" in
    start)
        main
        ;;
    status)
        check_status
        ;;
    stop)
        stop_all
        ;;
    restart)
        stop_all
        sleep 2
        main
        ;;
    *)
        echo "Usage: $0 {start|status|stop|restart}"
        echo "  start   - Start all service generators"
        echo "  status  - Check status of all generators"
        echo "  stop    - Stop all service generators"
        echo "  restart - Restart all service generators"
        exit 1
        ;;
esac
