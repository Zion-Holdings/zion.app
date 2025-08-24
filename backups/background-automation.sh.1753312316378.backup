#!/bin/bash

# Zion App - Background Automation System
# This script provides autonomous background operation of the infinite improvement loop

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
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$SCRIPT_DIR"
LOG_DIR="$PROJECT_ROOT/logs"
PID_FILE="$AUTOMATION_DIR/.infinite-improvement.pid"
MONITOR_PID_FILE="$AUTOMATION_DIR/.monitor.pid"
STATUS_FILE="$AUTOMATION_DIR/.status.json"
LOCK_FILE="$AUTOMATION_DIR/.automation.lock"

# Environment variables
export NODE_ENV=production
export IMPROVEMENT_PORT=3002
export LOG_LEVEL=info
export BACKGROUND_MODE=true
export AUTO_RESTART=true
export MONITOR_INTERVAL=60
export MAX_RESTART_ATTEMPTS=10
export RESTART_COOLDOWN=300

# AI Configuration
export CURSOR_AI_ENABLED=true
export OPENAI_ENABLED=true
export CLAUDE_ENABLED=true
export LOCAL_AI_ENABLED=true
export COPILOT_ENABLED=true
export CUSTOM_AGENTS_ENABLED=true

# Load environment variables from .env if it exists
if [ -f "$PROJECT_ROOT/.env" ]; then
    source "$PROJECT_ROOT/.env"
fi

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}🎉 $1${NC}"
}

# Function to acquire lock
acquire_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE" 2>/dev/null || echo "")
        if [ -n "$lock_pid" ] && ps -p "$lock_pid" >/dev/null 2>&1; then
            print_error "Another automation process is already running (PID: $lock_pid)"
            return 1
        else
            rm -f "$LOCK_FILE"
        fi
    fi
    echo $$ > "$LOCK_FILE"
    return 0
}

# Function to release lock
release_lock() {
    rm -f "$LOCK_FILE"
}

# Function to update status
update_status() {
    local status="$1"
    local message="$2"
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
    
    cat > "$STATUS_FILE" << EOF
{
    "status": "$status",
    "message": "$message",
    "timestamp": "$timestamp",
    "pid": "$(cat "$PID_FILE" 2>/dev/null || echo '')",
    "monitor_pid": "$(cat "$MONITOR_PID_FILE" 2>/dev/null || echo '')",
    "uptime": "$(get_uptime)",
    "restart_count": "$(get_restart_count)",
    "last_restart": "$(get_last_restart)"
}
EOF
}

# Function to get uptime
get_uptime() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" >/dev/null 2>&1; then
            local start_time=$(ps -o lstart= -p "$pid" 2>/dev/null | xargs -I {} date -d "{}" +%s 2>/dev/null || echo "")
            if [ -n "$start_time" ]; then
                local current_time=$(date +%s)
                local uptime=$((current_time - start_time))
                echo "$uptime"
                return
            fi
        fi
    fi
    echo "0"
}

# Function to get restart count
get_restart_count() {
    local count_file="$AUTOMATION_DIR/.restart_count"
    if [ -f "$count_file" ]; then
        cat "$count_file"
    else
        echo "0"
    fi
}

# Function to increment restart count
increment_restart_count() {
    local count_file="$AUTOMATION_DIR/.restart_count"
    local current_count=$(get_restart_count)
    echo $((current_count + 1)) > "$count_file"
}

# Function to get last restart time
get_last_restart() {
    local restart_file="$AUTOMATION_DIR/.last_restart"
    if [ -f "$restart_file" ]; then
        cat "$restart_file"
    else
        echo ""
    fi
}

# Function to update last restart time
update_last_restart() {
    local restart_file="$AUTOMATION_DIR/.last_restart"
    date -u +"%Y-%m-%dT%H:%M:%SZ" > "$restart_file"
}

# Function to check if system is healthy
check_system_health() {
    if [ ! -f "$PID_FILE" ]; then
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    if ! ps -p "$pid" >/dev/null 2>&1; then
        return 1
    fi
    
    # Check if the process is responding
    if ! curl -s "http://localhost:$IMPROVEMENT_PORT/health" >/dev/null 2>&1; then
        return 1
    fi
    
    return 0
}

# Function to start the infinite improvement loop
start_improvement_loop() {
    print_info "Starting infinite improvement loop in background mode..."
    
    cd "$AUTOMATION_DIR"
    
    # Start the main process
    nohup node infinite-improvement-loop.js > "$LOG_DIR/infinite-improvement.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo $pid > "$PID_FILE"
    
    # Wait for startup
    sleep 5
    
    if ps -p "$pid" >/dev/null 2>&1; then
        print_status "Infinite improvement loop started (PID: $pid)"
        update_status "running" "System is running normally"
        return 0
    else
        print_error "Failed to start infinite improvement loop"
        update_status "failed" "Failed to start system"
        return 1
    fi
}

# Function to stop the infinite improvement loop
stop_improvement_loop() {
    print_info "Stopping infinite improvement loop..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" >/dev/null 2>&1; then
            kill "$pid"
            print_status "Sent stop signal to process $pid"
            
            # Wait for process to stop
            for i in {1..10}; do
                if ! ps -p "$pid" >/dev/null 2>&1; then
                    break
                fi
                sleep 1
            done
            
            if ps -p "$pid" >/dev/null 2>&1; then
                print_warning "Process did not stop gracefully, forcing termination..."
                kill -9 "$pid"
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    update_status "stopped" "System has been stopped"
    print_success "Infinite improvement loop stopped"
}

# Function to restart the infinite improvement loop
restart_improvement_loop() {
    print_info "Restarting infinite improvement loop..."
    
    local restart_count=$(get_restart_count)
    if [ "$restart_count" -ge "$MAX_RESTART_ATTEMPTS" ]; then
        print_error "Maximum restart attempts reached ($MAX_RESTART_ATTEMPTS)"
        update_status "failed" "Maximum restart attempts reached"
        return 1
    fi
    
    stop_improvement_loop
    sleep 2
    
    if start_improvement_loop; then
        increment_restart_count
        update_last_restart
        print_success "Infinite improvement loop restarted successfully"
        return 0
    else
        print_error "Failed to restart infinite improvement loop"
        return 1
    fi
}

# Function to monitor the system
monitor_system() {
    print_info "Starting system monitor..."
    
    local monitor_pid=$$
    echo $monitor_pid > "$MONITOR_PID_FILE"
    
    update_status "monitoring" "System monitor is active"
    
    while true; do
        if ! check_system_health; then
            print_warning "System health check failed, attempting restart..."
            
            if restart_improvement_loop; then
                print_success "System restarted successfully"
            else
                print_error "Failed to restart system"
                update_status "failed" "Failed to restart system after health check failure"
                break
            fi
        else
            update_status "running" "System is running normally"
        fi
        
        sleep "$MONITOR_INTERVAL"
    done
}

# Function to start background automation
start_background_automation() {
    print_info "Starting background automation system..."
    
    if ! acquire_lock; then
        exit 1
    fi
    
    # Ensure we release lock on exit
    trap 'release_lock; exit' INT TERM EXIT
    
    # Start the improvement loop
    if ! start_improvement_loop; then
        print_error "Failed to start improvement loop"
        exit 1
    fi
    
    # Start the monitor in background
    monitor_system &
    local monitor_pid=$!
    
    print_success "Background automation system started"
    print_info "Main process PID: $(cat "$PID_FILE")"
    print_info "Monitor PID: $monitor_pid"
    print_info "Dashboard: http://localhost:$IMPROVEMENT_PORT"
    print_info "Status file: $STATUS_FILE"
    
    # Keep the main process running
    wait $monitor_pid
}

# Function to stop background automation
stop_background_automation() {
    print_info "Stopping background automation system..."
    
    # Stop monitor
    if [ -f "$MONITOR_PID_FILE" ]; then
        local monitor_pid=$(cat "$MONITOR_PID_FILE")
        if ps -p "$monitor_pid" >/dev/null 2>&1; then
            kill "$monitor_pid"
            print_status "Stopped monitor process"
        fi
        rm -f "$MONITOR_PID_FILE"
    fi
    
    # Stop improvement loop
    stop_improvement_loop
    
    # Release lock
    release_lock
    
    print_success "Background automation system stopped"
}

# Function to show status
show_status() {
    print_info "Background Automation System Status"
    echo "========================================"
    
    if [ -f "$STATUS_FILE" ]; then
        local status=$(jq -r '.status' "$STATUS_FILE" 2>/dev/null || echo "unknown")
        local message=$(jq -r '.message' "$STATUS_FILE" 2>/dev/null || echo "No message")
        local timestamp=$(jq -r '.timestamp' "$STATUS_FILE" 2>/dev/null || echo "Unknown")
        local pid=$(jq -r '.pid' "$STATUS_FILE" 2>/dev/null || echo "None")
        local monitor_pid=$(jq -r '.monitor_pid' "$STATUS_FILE" 2>/dev/null || echo "None")
        local uptime=$(jq -r '.uptime' "$STATUS_FILE" 2>/dev/null || echo "0")
        local restart_count=$(jq -r '.restart_count' "$STATUS_FILE" 2>/dev/null || echo "0")
        local last_restart=$(jq -r '.last_restart' "$STATUS_FILE" 2>/dev/null || echo "Never")
        
        echo "Status: $status"
        echo "Message: $message"
        echo "Last Update: $timestamp"
        echo "Main Process PID: $pid"
        echo "Monitor PID: $monitor_pid"
        echo "Uptime: ${uptime}s"
        echo "Restart Count: $restart_count"
        echo "Last Restart: $last_restart"
    else
        print_error "Status file not found"
    fi
    
    echo ""
    print_info "Configuration:"
    echo "  - Monitor Interval: ${MONITOR_INTERVAL}s"
    echo "  - Max Restart Attempts: $MAX_RESTART_ATTEMPTS"
    echo "  - Restart Cooldown: ${RESTART_COOLDOWN}s"
    echo "  - Auto Restart: $AUTO_RESTART"
}

# Function to show help
show_help() {
    echo "Zion App - Background Automation System"
    echo "======================================"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start background automation system"
    echo "  stop      Stop background automation system"
    echo "  status    Show current status"
    echo "  monitor   Start only the monitor (for testing)"
    echo "  help      Show this help message"
    echo ""
    echo "Environment Variables:"
    echo "  MONITOR_INTERVAL      Monitor check interval in seconds (default: 60)"
    echo "  MAX_RESTART_ATTEMPTS  Maximum restart attempts (default: 10)"
    echo "  RESTART_COOLDOWN      Cooldown between restarts in seconds (default: 300)"
    echo "  AUTO_RESTART          Enable auto-restart (default: true)"
    echo ""
    echo "Examples:"
    echo "  $0 start           # Start background automation"
    echo "  $0 status          # Check status"
    echo "  $0 stop            # Stop background automation"
}

# Main script logic
main() {
    case "${1:-start}" in
        start)
            echo -e "${PURPLE}🚀 Starting Zion App Background Automation System${NC}"
            echo "========================================================"
            start_background_automation
            ;;
        stop)
            echo -e "${RED}🛑 Stopping Background Automation System${NC}"
            stop_background_automation
            ;;
        status)
            show_status
            ;;
        monitor)
            echo -e "${CYAN}🔍 Starting System Monitor${NC}"
            monitor_system
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@" 