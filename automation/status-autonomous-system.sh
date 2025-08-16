#!/bin/bash

# Netlify Autonomous System Status Script
# This script shows the current status of all autonomous automation system components

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$LOG_DIR/autonomous-manager.pid"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log headers
header() {
    echo -e "${CYAN}$1${NC}"
}

# Function to log status
status() {
    local status="$1"
    local message="$2"
    
    case "$status" in
        "running")
            echo -e "   ${GREEN}✅${NC} $message"
            ;;
        "stopped")
            echo -e "   ${RED}❌${NC} $message"
            ;;
        "warning")
            echo -e "   ${YELLOW}⚠️${NC} $message"
            ;;
        "info")
            echo -e "   ${BLUE}ℹ️${NC} $message"
            ;;
        *)
            echo -e "   $message"
            ;;
    esac
}

# Function to get process uptime
get_uptime() {
    local pid="$1"
    if [ -n "$pid" ] && ps -p "$pid" > /dev/null 2>&1; then
        local start_time=$(ps -o lstart= -p "$pid" 2>/dev/null | xargs -I {} date -d "{}" +%s 2>/dev/null || echo "")
        if [ -n "$start_time" ]; then
            local current_time=$(date +%s)
            local uptime=$((current_time - start_time))
            
            local days=$((uptime / 86400))
            local hours=$((uptime % 86400 / 3600))
            local minutes=$((uptime % 3600 / 60))
            local seconds=$((uptime % 60))
            
            if [ $days -gt 0 ]; then
                echo "${days}d ${hours}h ${minutes}m"
            elif [ $hours -gt 0 ]; then
                echo "${hours}h ${minutes}m ${seconds}s"
            elif [ $minutes -gt 0 ]; then
                echo "${minutes}m ${seconds}s"
            else
                echo "${seconds}s"
            fi
        else
            echo "Unknown"
        fi
    else
        echo "N/A"
    fi
}

# Function to get process memory usage
get_memory_usage() {
    local pid="$1"
    if [ -n "$pid" ] && ps -p "$pid" > /dev/null 2>&1; then
        local memory=$(ps -o rss= -p "$pid" 2>/dev/null | xargs)
        if [ -n "$memory" ]; then
            local memory_mb=$((memory / 1024))
            echo "${memory_mb} MB"
        else
            echo "Unknown"
        fi
    else
        echo "N/A"
    fi
}

# Function to check process status
check_process() {
    local pid_file="$1"
    local process_name="$2"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if ps -p "$pid" > /dev/null 2>&1; then
            local uptime=$(get_uptime "$pid")
            local memory=$(get_memory_usage "$pid")
            status "running" "$process_name (PID: $pid, Uptime: $uptime, Memory: $memory)"
            return 0
        else
            status "stopped" "$process_name (PID file exists but process not running)"
            return 1
        fi
    else
        status "stopped" "$process_name (Not started)"
        return 1
    fi
}

# Function to check autonomous manager status
check_autonomous_manager() {
    header "🔧 Autonomous Manager Status"
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            local uptime=$(get_uptime "$pid")
            local memory=$(get_memory_usage "$pid")
            status "running" "Autonomous Manager (PID: $pid, Uptime: $uptime, Memory: $memory)"
            
            # Check if it's responding
            if [ -f "$LOG_DIR/autonomous-manager.log" ]; then
                local last_log=$(tail -n 1 "$LOG_DIR/autonomous-manager.log" 2>/dev/null | grep -o '\[.*\]' | tail -1 || echo "")
                if [ -n "$last_log" ]; then
                    status "info" "Last activity: $last_log"
                fi
            fi
            return 0
        else
            status "stopped" "Autonomous Manager (PID file exists but process not running)"
            return 1
        fi
    else
        status "stopped" "Autonomous Manager (Not started)"
        return 1
    fi
}

# Function to check all component statuses
check_all_components() {
    header "📊 Component Status"
    
    local running_count=0
    local total_count=0
    
    # Check autonomous manager
    if check_autonomous_manager; then
        running_count=$((running_count + 1))
    fi
    total_count=$((total_count + 1))
    
    # Check continuous monitoring
    if check_process "$LOG_DIR/continuous-monitor.pid" "Continuous Monitoring"; then
        running_count=$((running_count + 1))
    fi
    total_count=$((total_count + 1))
    
    # Check scheduled optimization
    if check_process "$LOG_DIR/scheduled-optimization.pid" "Scheduled Optimization"; then
        running_count=$((running_count + 1))
    fi
    total_count=$((total_count + 1))
    
    # Check health monitoring
    if check_process "$LOG_DIR/health-monitoring.pid" "Health Monitoring"; then
        running_count=$((running_count + 1))
    fi
    total_count=$((total_count + 1))
    
    echo ""
    status "info" "Overall Status: $running_count/$total_count components running"
    
    if [ $running_count -eq $total_count ]; then
        status "running" "All systems operational"
    elif [ $running_count -gt 0 ]; then
        status "warning" "Some components are down"
    else
        status "stopped" "All components are stopped"
    fi
}

# Function to show system information
show_system_info() {
    header "🖥️  System Information"
    
    # Node.js version
    if command -v node &> /dev/null; then
        local node_version=$(node --version)
        status "info" "Node.js: $node_version"
    else
        status "warning" "Node.js: Not installed"
    fi
    
    # npm version
    if command -v npm &> /dev/null; then
        local npm_version=$(npm --version)
        status "info" "npm: $npm_version"
    else
        status "warning" "npm: Not installed"
    fi
    
    # System uptime
    local system_uptime=$(uptime | awk -F'up ' '{print $2}' | awk -F',' '{print $1}')
    status "info" "System Uptime: $system_uptime"
    
    # Available memory
    if command -v free &> /dev/null; then
        local available_memory=$(free -h | grep Mem | awk '{print $7}')
        status "info" "Available Memory: $available_memory"
    fi
    
    # Disk space
    if command -v df &> /dev/null; then
        local disk_space=$(df -h . | tail -1 | awk '{print $4}')
        status "info" "Available Disk Space: $disk_space"
    fi
}

# Function to show log information
show_log_info() {
    header "📁 Log Information"
    
    if [ -d "$LOG_DIR" ]; then
        local log_files=$(find "$LOG_DIR" -name "*.log" -type f 2>/dev/null | wc -l)
        status "info" "Total log files: $log_files"
        
        # Show recent log entries
        if [ -f "$LOG_DIR/autonomous-manager.log" ]; then
            local last_entries=$(tail -n 3 "$LOG_DIR/autonomous-manager.log" 2>/dev/null | grep -v '^$' || echo "No recent entries")
            status "info" "Recent autonomous manager activity:"
            echo "$last_entries" | while IFS= read -r line; do
                if [ -n "$line" ]; then
                    echo "      $line"
                fi
            done
        fi
    else
        status "warning" "Log directory not found"
    fi
}

# Function to show configuration information
show_config_info() {
    header "⚙️  Configuration Information"
    
    local config_file="$SCRIPT_DIR/autonomous-config.json"
    if [ -f "$config_file" ]; then
        status "info" "Configuration file: $config_file"
        
        # Show key configuration values
        if command -v jq &> /dev/null; then
            local health_interval=$(jq -r '.autonomous.healthCheckInterval' "$config_file" 2>/dev/null || echo "Unknown")
            local monitor_interval=$(jq -r '.monitoring.interval' "$config_file" 2>/dev/null || echo "Unknown")
            local auto_optimize=$(jq -r '.monitoring.autoOptimize' "$config_file" 2>/dev/null || echo "Unknown")
            
            if [ "$health_interval" != "null" ] && [ "$health_interval" != "Unknown" ]; then
                local health_seconds=$((health_interval / 1000))
                status "info" "Health check interval: ${health_seconds}s"
            fi
            
            if [ "$monitor_interval" != "null" ] && [ "$monitor_interval" != "Unknown" ]; then
                local monitor_seconds=$((monitor_interval / 1000))
                status "info" "Monitoring interval: ${monitor_seconds}s"
            fi
            
            if [ "$auto_optimize" != "null" ] && [ "$auto_optimize" != "Unknown" ]; then
                status "info" "Auto-optimization: $auto_optimize"
            fi
        else
            status "info" "Install 'jq' for detailed configuration display"
        fi
    else
        status "warning" "Configuration file not found"
    fi
}

# Function to show management commands
show_management_commands() {
    header "🔧 Management Commands"
    
    status "info" "Start system: ./start-autonomous-system.sh"
    status "info" "Stop system: ./stop-autonomous-system.sh"
    status "info" "Check status: ./status-autonomous-system.sh"
    status "info" "Restart system: ./restart-autonomous-system.sh"
    status "info" "View logs: tail -f $LOG_DIR/*.log"
}

# Function to show performance metrics
show_performance_metrics() {
    header "📈 Performance Metrics"
    
    # Check build artifacts size
    if [ -d "$SCRIPT_DIR/../.next" ] || [ -d "$SCRIPT_DIR/../out" ]; then
        local total_size=0
        
        if [ -d "$SCRIPT_DIR/../.next" ]; then
            local next_size=$(du -sb "$SCRIPT_DIR/../.next" 2>/dev/null | awk '{print $1}' || echo "0")
            total_size=$((total_size + next_size))
        fi
        
        if [ -d "$SCRIPT_DIR/../out" ]; then
            local out_size=$(du -sb "$SCRIPT_DIR/../out" 2>/dev/null | awk '{print $1}' || echo "0")
            total_size=$((total_size + out_size))
        fi
        
        if [ $total_size -gt 0 ]; then
            local size_mb=$((total_size / 1024 / 1024))
            if [ $size_mb -gt 100 ]; then
                status "warning" "Build artifacts size: ${size_mb} MB (consider optimization)"
            else
                status "running" "Build artifacts size: ${size_mb} MB (optimal)"
            fi
        fi
    fi
    
    # Check recent optimizations
    local optimization_logs=$(find "$LOG_DIR" -name "*build-artifact-optimization*" -type f 2>/dev/null | wc -l)
    status "info" "Total optimizations performed: $optimization_logs"
    
    # Check recent health checks
    local health_logs=$(find "$LOG_DIR" -name "*health-check*" -type f 2>/dev/null | wc -l)
    status "info" "Total health checks performed: $health_logs"
}

# Main status check
main() {
    echo ""
    header "🚀 Netlify Autonomous System Status Report"
    echo "Generated at: $(date)"
    echo ""
    
    # Check autonomous manager
    check_autonomous_manager
    echo ""
    
    # Check all components
    check_all_components
    echo ""
    
    # Show system information
    show_system_info
    echo ""
    
    # Show performance metrics
    show_performance_metrics
    echo ""
    
    # Show log information
    show_log_info
    echo ""
    
    # Show configuration information
    show_config_info
    echo ""
    
    # Show management commands
    show_management_commands
    echo ""
    
    header "📊 Status Report Complete"
    echo "Use the management commands above to control the system"
    echo ""
}

# Run main function
main "$@"
