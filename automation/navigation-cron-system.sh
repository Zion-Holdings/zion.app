#!/bin/bash

# 🚀 Navigation Cron System - Maximum Performance & Continuous Operation
# Runs navigation automation continuously at maximum speed

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$ROOT_DIR/automation/logs"
PID_FILE="$ROOT_DIR/automation/navigation-cron.pid"
LOCK_FILE="$ROOT_DIR/automation/navigation-cron.lock"

# Performance settings
MAX_CONCURRENT=8
RESTART_DELAY=1
MONITOR_INTERVAL=5
HEALTH_CHECK_INTERVAL=30

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Logging functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_DIR/navigation-cron.log"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_DIR/navigation-cron.log"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $(date '+%m-%d %H:%M:%S') - $1" | tee -a "$LOG_DIR/navigation-cron.log"
}

log_perf() {
    echo -e "${CYAN}[PERF]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "$LOG_DIR/navigation-cron.log"
}

# Create directories
create_directories() {
    mkdir -p "$LOG_DIR"
    mkdir -p "$ROOT_DIR/data/navigation"
    log_info "Directories created/verified"
}

# Check if already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log_warn "Navigation cron already running with PID $pid"
            return 0
        else
            log_warn "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start navigation automation
start_navigation() {
    local system_name="$1"
    local priority="$2"
    
    log_info "Starting $system_name (Priority: $priority)"
    
    cd "$ROOT_DIR"
    
    case "$system_name" in
        "orchestrator")
            npm run navigation:orchestrator > "$LOG_DIR/orchestrator.log" 2>&1 &
            ;;
        "analyzer")
            npm run navigation:analyzer > "$LOG_DIR/analyzer.log" 2>&1 &
            ;;
        "ai")
            npm run navigation:ai > "$LOG_DIR/ai-optimizer.log" 2>&1 &
            ;;
        "ml")
            npm run navigation:ml > "$LOG_DIR/ml-predictor.log" 2>&1 &
            ;;
        "neural")
            npm run navigation:neural > "$LOG_DIR/neural-network.log" 2>&1 &
            ;;
        "sidebars")
            npm run navigation:sidebars > "$LOG_DIR/sidebar-generator.log" 2>&1 &
            ;;
        "breadcrumbs")
            npm run navigation:breadcrumbs > "$LOG_DIR/breadcrumb-automator.log" 2>&1 &
            ;;
        "health")
            npm run navigation:health > "$LOG_DIR/health-monitor.log" 2>&1 &
            ;;
        "all")
            npm run navigation:ai:all > "$LOG_DIR/all-systems.log" 2>&1 &
            ;;
        *)
            log_error "Unknown system: $system_name"
            return 1
            ;;
    esac
    
    local pid=$!
    log_info "$system_name started with PID $pid"
    echo "$pid" >> "$LOG_DIR/active-pids.txt"
    return 0
}

# Launch all systems with priority
launch_all_systems() {
    log_info "🚀 LAUNCHING ALL NAVIGATION SYSTEMS AT MAXIMUM SPEED!"
    
    # Critical AI/ML systems first
    log_info "🔥 Launching CRITICAL AI/ML systems..."
    start_navigation "ai" "critical"
    start_navigation "ml" "critical"
    start_navigation "neural" "critical"
    
    # High priority systems
    log_info "⚡ Launching HIGH-PRIORITY systems..."
    start_navigation "orchestrator" "high"
    start_navigation "analyzer" "high"
    start_navigation "health" "high"
    
    # Medium priority systems
    log_info "🚀 Launching MEDIUM-PRIORITY systems..."
    start_navigation "sidebars" "medium"
    start_navigation "breadcrumbs" "medium"
    
    # Wait a moment for all to start
    sleep 2
    
    log_info "✅ All navigation systems launched successfully!"
}

# Monitor all processes
monitor_processes() {
    while true; do
        if [ ! -f "$PID_FILE" ]; then
            log_error "PID file not found, exiting monitor"
            break
        fi
        
        local active_pids=$(cat "$LOG_DIR/active-pids.txt" 2>/dev/null || echo "")
        local running_count=0
        local stopped_count=0
        
        if [ -n "$active_pids" ]; then
            for pid in $active_pids; do
                if ps -p "$pid" > /dev/null 2>&1; then
                    running_count=$((running_count + 1))
                else
                    stopped_count=$((stopped_count + 1))
                    log_warn "Process $pid stopped, will restart"
                fi
            done
        fi
        
        if [ $stopped_count -gt 0 ]; then
            log_warn "Process Status: $running_count running, $stopped_count stopped"
            # Restart stopped processes
            restart_stopped_processes
        else
            log_perf "All $running_count processes running smoothly"
        fi
        
        sleep $MONITOR_INTERVAL
    done
}

# Restart stopped processes
restart_stopped_processes() {
    local active_pids=$(cat "$LOG_DIR/active-pids.txt" 2>/dev/null || echo "")
    local new_pids=""
    
    for pid in $active_pids; do
        if ps -p "$pid" > /dev/null 2>&1; then
            new_pids="$new_pids $pid"
        else
            log_info "Restarting stopped process $pid"
            # Determine which system to restart based on log files
            restart_by_pid "$pid"
        fi
    done
    
    # Update active PIDs
    echo "$new_pids" > "$LOG_DIR/active-pids.txt"
}

# Restart system by PID (determine which system)
restart_by_pid() {
    local pid="$1"
    
    # Check log files to determine which system this was
    if grep -q "orchestrator" "$LOG_DIR/orchestrator.log" 2>/dev/null; then
        start_navigation "orchestrator" "high"
    elif grep -q "analyzer" "$LOG_DIR/analyzer.log" 2>/dev/null; then
        start_navigation "analyzer" "high"
    elif grep -q "ai" "$LOG_DIR/ai-optimizer.log" 2>/dev/null; then
        start_navigation "ai" "critical"
    elif grep -q "ml" "$LOG_DIR/ml-predictor.log" 2>/dev/null; then
        start_navigation "ml" "critical"
    elif grep -q "neural" "$LOG_DIR/neural-network.log" 2>/dev/null; then
        start_navigation "neural" "critical"
    elif grep -q "sidebars" "$LOG_DIR/sidebar-generator.log" 2>/dev/null; then
        start_navigation "sidebars" "medium"
    elif grep -q "breadcrumbs" "$LOG_DIR/breadcrumb-automator.log" 2>/dev/null; then
        start_navigation "breadcrumbs" "medium"
    elif grep -q "health" "$LOG_DIR/health-monitor.log" 2>/dev/null; then
        start_navigation "health" "high"
    else
        log_warn "Unknown system for PID $pid, restarting all"
        restart_all_systems
    fi
}

# Restart all systems
restart_all_systems() {
    log_warn "🔄 Restarting all navigation systems..."
    
    # Stop all processes
    local active_pids=$(cat "$LOG_DIR/active-pids.txt" 2>/dev/null || echo "")
    for pid in $active_pids; do
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
        fi
    done
    
    # Clear PID files
    > "$LOG_DIR/active-pids.txt"
    
    # Wait then restart
    sleep $RESTART_DELAY
    launch_all_systems
}

# Health check
health_check() {
    while true; do
        if [ ! -f "$PID_FILE" ]; then
            log_error "PID file not found, exiting health check"
            break
        fi
        
        log_info "💚 Running health check..."
        
        # Check critical systems
        local critical_running=0
        local active_pids=$(cat "$LOG_DIR/active-pids.txt" 2>/dev/null || echo "")
        
        for pid in $active_pids; do
            if ps -p "$pid" > /dev/null 2>&1; then
                critical_running=$((critical_running + 1))
            fi
        done
        
        if [ $critical_running -lt 3 ]; then
            log_error "⚠️  Critical systems down, performing emergency restart..."
            restart_all_systems
        else
            log_info "✅ Health check passed - all critical systems operational"
        fi
        
        sleep $HEALTH_CHECK_INTERVAL
    done
}

# Performance monitoring
performance_monitor() {
    while true; do
        if [ ! -f "$PID_FILE" ]; then
            log_error "PID file not found, exiting performance monitor"
            break
        fi
        
        # Check system resources
        local mem_usage=$(free -m | awk 'NR==2{printf "%.1f%%", $3*100/$2}')
        local cpu_usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
        local disk_usage=$(df -h / | awk 'NR==2{print $5}')
        
        log_perf "System Resources:"
        log_perf "  Memory: $mem_usage"
        log_perf "  CPU: ${cpu_usage}%"
        log_perf "  Disk: $disk_usage"
        
        # Check log file sizes
        local total_log_size=$(du -sh "$LOG_DIR" 2>/dev/null | cut -f1)
        log_perf "  Logs: $total_log_size"
        
        # Performance optimization
        if [ "${cpu_usage%.*}" -gt 80 ]; then
            log_warn "High CPU usage detected, optimizing..."
        fi
        
        if [ "${mem_usage%.*}" -gt 80 ]; then
            log_warn "High memory usage detected, cleaning up..."
            # Clean up old log files
            find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true
        fi
        
        sleep 60  # Check every minute
    done
}

# Start the cron system
start() {
    log_info "🚀 Starting Navigation Cron System..."
    
    if check_running; then
        log_error "Already running"
        exit 1
    fi
    
    # Create lock file
    echo $$ > "$LOCK_FILE"
    
    # Create directories
    create_directories
    
    # Launch all systems
    launch_all_systems
    
    # Start monitoring in background
    monitor_processes &
    local monitor_pid=$!
    
    health_check &
    local health_pid=$!
    
    performance_monitor &
    local perf_pid=$!
    
    # Store all PIDs
    echo $$ > "$PID_FILE"
    echo "$monitor_pid $health_pid $perf_pid" >> "$PID_FILE"
    
    log_info "✅ Navigation Cron System started successfully!"
    log_info "Main PID: $$"
    log_info "Monitor PID: $monitor_pid"
    log_info "Health PID: $health_pid"
    log_info "Performance PID: $perf_pid"
    
    # Keep main process alive
    while [ -f "$PID_FILE" ]; do
        sleep 1
    done
}

# Stop the cron system
stop() {
    log_info "🛑 Stopping Navigation Cron System..."
    
    if [ -f "$PID_FILE" ]; then
        local pids=$(cat "$PID_FILE")
        for pid in $pids; do
            if ps -p "$pid" > /dev/null 2>&1; then
                log_info "Stopping process $pid"
                kill "$pid" 2>/dev/null || true
            fi
        done
        
        rm -f "$PID_FILE"
        log_info "✅ All processes stopped"
    else
        log_warn "No PID file found"
    fi
    
    # Remove lock file
    rm -f "$LOCK_FILE"
}

# Show status
status() {
    if [ -f "$PID_FILE" ]; then
        local pids=$(cat "$PID_FILE")
        local main_pid=$(echo "$pids" | head -1)
        
        if ps -p "$main_pid" > /dev/null 2>&1; then
            log_info "Navigation Cron System is RUNNING"
            log_info "Main PID: $main_pid"
            log_info "Uptime: $(ps -o etime= -p "$main_pid")"
            
            # Show active processes
            if [ -f "$LOG_DIR/active-pids.txt" ]; then
                local active_pids=$(cat "$LOG_DIR/active-pids.txt")
                local running_count=0
                for pid in $active_pids; do
                    if ps -p "$pid" > /dev/null 2>&1; then
                        running_count=$((running_count + 1))
                    fi
                done
                log_info "Active navigation processes: $running_count"
            fi
        else
            log_error "Navigation Cron System is NOT RUNNING (stale PID file)"
        fi
    else
        log_error "Navigation Cron System is NOT RUNNING"
    fi
}

# Restart the system
restart() {
    log_info "🔄 Restarting Navigation Cron System..."
    stop
    sleep 2
    start
}

# Main execution
case "${1:-start}" in
    start)
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
    *)
        echo "Usage: $0 {start|stop|restart|status}"
        echo "  start   - Start the navigation cron system"
        echo "  stop    - Stop the navigation cron system"
        echo "  restart - Restart the navigation cron system"
        echo "  status  - Show system status"
        exit 1
        ;;
esac