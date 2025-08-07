#!/bin/bash

# Automation Monitor and Maintainer Cron Job Script
# This script manages the continuous monitoring and maintenance of all automation systems

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
AUTOMATION_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$AUTOMATION_DIR/monitor-logs"
PID_DIR="$AUTOMATION_DIR/monitor-pids"
STATUS_DIR="$AUTOMATION_DIR/monitor-status"
REPORTS_DIR="$AUTOMATION_DIR/monitor-reports"

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR" "$REPORTS_DIR"

# Configuration
MONITOR_SCRIPT="$AUTOMATION_DIR/automation-monitor-and-maintainer.js"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOG_DIR/automation-monitor.log"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARN:${NC} $1" | tee -a "$LOG_DIR/automation-monitor.log"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_DIR/automation-monitor-error.log"
}

success() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOG_DIR/automation-monitor.log"
}

# Check if monitor is running
is_monitor_running() {
    if [ -f "$PID_DIR/automation-monitor.pid" ]; then
        local pid=$(cat "$PID_DIR/automation-monitor.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            rm -f "$PID_DIR/automation-monitor.pid"
        fi
    fi
    return 1
}

# Start the automation monitor
start_monitor() {
    log "Starting Automation Monitor and Maintainer System..."
    
    if is_monitor_running; then
        log "Monitor is already running"
        return 0
    fi
    
    cd "$AUTOMATION_DIR"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if required dependencies are installed
    if [ ! -f "package.json" ] || ! npm list node-cron &> /dev/null; then
        warn "Installing required dependencies..."
        npm install node-cron glob
    fi
    
    # Start the monitor
    nohup node "$MONITOR_SCRIPT" > "$LOG_DIR/monitor.log" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_DIR/automation-monitor.pid"
    log "Monitor started with PID: $pid"
    
    # Wait a moment to ensure it started properly
    sleep 5
    
    if is_monitor_running; then
        success "Monitor started successfully"
        return 0
    else
        error "Failed to start monitor"
        return 1
    fi
}

# Stop the automation monitor
stop_monitor() {
    log "Stopping Automation Monitor and Maintainer System..."
    
    if [ -f "$PID_DIR/automation-monitor.pid" ]; then
        local pid=$(cat "$PID_DIR/automation-monitor.pid")
        
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid"
            log "Sent SIGTERM to monitor process $pid"
            
            # Wait for graceful shutdown
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if ps -p "$pid" > /dev/null 2>&1; then
                warn "Monitor did not stop gracefully, forcing termination"
                kill -9 "$pid"
            fi
        fi
        
        rm -f "$PID_DIR/automation-monitor.pid"
        success "Monitor stopped"
    else
        log "Monitor is not running"
    fi
}

# Restart the automation monitor
restart_monitor() {
    log "Restarting Automation Monitor and Maintainer System..."
    stop_monitor
    sleep 2
    start_monitor
}

# Check monitor status
status_monitor() {
    if is_monitor_running; then
        local pid=$(cat "$PID_DIR/automation-monitor.pid")
        success "Automation Monitor and Maintainer System is running (PID: $pid)"
        
        # Show recent logs
        if [ -f "$LOG_DIR/monitor.log" ]; then
            echo ""
            echo "Recent monitor logs:"
            echo "==================="
            tail -n 10 "$LOG_DIR/monitor.log"
        fi
        
        # Show health status if available
        if [ -f "$STATUS_DIR/current-status.json" ]; then
            echo ""
            echo "Current system health:"
            echo "======================"
            jq -r '.healthMetrics | "Total Systems: \(.totalSystems), Healthy: \(.healthySystems), Problematic: \(.problematicSystems), Fixed: \(.fixedSystems)"' "$STATUS_DIR/current-status.json" 2>/dev/null || echo "Unable to parse health status"
        fi
        
    else
        warn "Automation Monitor and Maintainer System is not running"
    fi
}

# Generate health report
generate_report() {
    log "Generating health report..."
    
    if [ -f "$STATUS_DIR/current-status.json" ]; then
        local report_file="$REPORTS_DIR/health-report-$(date +%Y%m%d-%H%M%S).txt"
        
        echo "AUTOMATION MONITORING HEALTH REPORT" > "$report_file"
        echo "Generated: $(date)" >> "$report_file"
        echo "==================================" >> "$report_file"
        echo "" >> "$report_file"
        
        # Extract health metrics
        local total=$(jq -r '.healthMetrics.totalSystems' "$STATUS_DIR/current-status.json" 2>/dev/null || echo "0")
        local healthy=$(jq -r '.healthMetrics.healthySystems' "$STATUS_DIR/current-status.json" 2>/dev/null || echo "0")
        local problematic=$(jq -r '.healthMetrics.problematicSystems' "$STATUS_DIR/current-status.json" 2>/dev/null || echo "0")
        local fixed=$(jq -r '.healthMetrics.fixedSystems' "$STATUS_DIR/current-status.json" 2>/dev/null || echo "0")
        
        echo "SYSTEM HEALTH SUMMARY:" >> "$report_file"
        echo "- Total Systems: $total" >> "$report_file"
        echo "- Healthy Systems: $healthy" >> "$report_file"
        echo "- Problematic Systems: $problematic" >> "$report_file"
        echo "- Fixed Systems: $fixed" >> "$report_file"
        
        if [ "$total" -gt 0 ]; then
            local health_percent=$((healthy * 100 / total))
            echo "- Health Percentage: ${health_percent}%" >> "$report_file"
        fi
        
        echo "" >> "$report_file"
        echo "PROBLEMATIC SYSTEMS:" >> "$report_file"
        jq -r '.systems[] | select(.status != "healthy") | "- \(.name) (\(.type)): \(.status)' "$STATUS_DIR/current-status.json" 2>/dev/null >> "$report_file" || echo "No problematic systems found" >> "$report_file"
        
        success "Health report generated: $report_file"
    else
        warn "No status file found - monitor may not be running"
    fi
}

# Clean up old logs and reports
cleanup_old_files() {
    log "Cleaning up old logs and reports..."
    
    # Remove logs older than 7 days
    find "$LOG_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null
    
    # Remove reports older than 30 days
    find "$REPORTS_DIR" -name "*.json" -mtime +30 -delete 2>/dev/null
    find "$REPORTS_DIR" -name "*.txt" -mtime +30 -delete 2>/dev/null
    
    # Remove backups older than 7 days
    find "$AUTOMATION_DIR/backups" -name "*.js" -mtime +7 -delete 2>/dev/null 2>/dev/null
    
    success "Cleanup completed"
}

# Check system resources
check_resources() {
    log "Checking system resources..."
    
    # Check disk space
    local disk_usage=$(df -h "$AUTOMATION_DIR" | tail -1 | awk '{print $5}' | sed 's/%//')
    if [ "$disk_usage" -gt 80 ]; then
        warn "Disk usage is high: ${disk_usage}%"
        cleanup_old_files
    else
        log "Disk usage is normal: ${disk_usage}%"
    fi
    
    # Check memory usage
    local mem_usage=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100.0}')
    if [ "$mem_usage" -gt 80 ]; then
        warn "Memory usage is high: ${mem_usage}%"
    else
        log "Memory usage is normal: ${mem_usage}%"
    fi
    
    # Check CPU usage
    local cpu_usage=$(top -l 1 | grep "CPU usage" | awk '{print $3}' | sed 's/%//')
    if [ "$cpu_usage" -gt 80 ]; then
        warn "CPU usage is high: ${cpu_usage}%"
    else
        log "CPU usage is normal: ${cpu_usage}%"
    fi
}

# Emergency stop all automation
emergency_stop() {
    warn "EMERGENCY STOP: Stopping all automation systems..."
    
    # Stop the monitor first
    stop_monitor
    
    # Kill all Node.js processes related to automation
    pkill -f "automation.*\.js" 2>/dev/null
    pkill -f ".*-factory\.js" 2>/dev/null
    pkill -f ".*-agent\.js" 2>/dev/null
    pkill -f ".*-automation\.js" 2>/dev/null
    
    # Stop cron jobs
    crontab -l 2>/dev/null | grep -v "automation" | crontab - 2>/dev/null
    
    success "Emergency stop completed - all automation systems stopped"
}

# Show help
show_help() {
    echo "Automation Monitor and Maintainer System"
    echo "======================================="
    echo ""
    echo "Usage: $0 [command]"
    echo ""
    echo "Commands:"
    echo "  start       - Start the automation monitor"
    echo "  stop        - Stop the automation monitor"
    echo "  restart     - Restart the automation monitor"
    echo "  status      - Show monitor status and health"
    echo "  report      - Generate health report"
    echo "  cleanup     - Clean up old logs and reports"
    echo "  resources   - Check system resources"
    echo "  emergency   - Emergency stop all automation"
    echo "  help        - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start"
    echo "  $0 status"
    echo "  $0 report"
}

# Main script logic
case "${1:-}" in
    "start")
        start_monitor
        ;;
    "stop")
        stop_monitor
        ;;
    "restart")
        restart_monitor
        ;;
    "status")
        status_monitor
        ;;
    "report")
        generate_report
        ;;
    "cleanup")
        cleanup_old_files
        ;;
    "resources")
        check_resources
        ;;
    "emergency")
        emergency_stop
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    "")
        # Default action: start if not running, show status if running
        if is_monitor_running; then
            status_monitor
        else
            start_monitor
        fi
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac

exit 0
