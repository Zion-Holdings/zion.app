#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
ECOSYSTEM_FILE="$PROJECT_ROOT/ecosystem.ultimate-redundancy.cjs"
ULTIMATE_SCRIPT="$PROJECT_ROOT/automation/ultimate-redundancy-automation-system.cjs"

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
            echo -e "[$timestamp] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "INFO" "PM2 is available"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    log "INFO" "Node.js is available: $(node --version)"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed. Please install npm first."
        exit 1
    fi
    log "INFO" "npm is available: $(npm --version)"
}

# Check if ecosystem file exists
check_ecosystem() {
    if [[ ! -f "$ECOSYSTEM_FILE" ]]; then
        log "ERROR" "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
    log "INFO" "Ecosystem file found: $ECOSYSTEM_FILE"
}

# Check if ultimate script exists
check_ultimate_script() {
    if [[ ! -f "$ULTIMATE_SCRIPT" ]]; then
        log "ERROR" "Ultimate redundancy script not found: $ULTIMATE_SCRIPT"
        exit 1
    fi
    log "INFO" "Ultimate redundancy script found: $ULTIMATE_SCRIPT"
}

# Stop all existing PM2 processes
stop_existing_processes() {
    log "INFO" "Stopping existing PM2 processes..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    
    # Kill PM2 daemon
    pm2 kill 2>/dev/null || true
    
    # Wait a moment
    sleep 3
    
    log "INFO" "All existing PM2 processes stopped"
}

# Start the ultimate redundancy system
start_ultimate_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    # Start PM2 daemon
    pm2 start
    
    # Start the ultimate redundancy ecosystem
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 log rotation
    pm2 install pm2-logrotate 2>/dev/null || true
    pm2 set pm2-logrotate:max_size 15M
    pm2 set pm2-logrotate:retain 50
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    log "INFO" "Ultimate Redundancy System started successfully"
}

# Start the ultimate redundancy system directly
start_ultimate_direct() {
    log "INFO" "Starting Ultimate Redundancy System directly..."
    
    cd "$PROJECT_ROOT"
    node "$ULTIMATE_SCRIPT" start &
    
    local pid=$!
    echo $pid > "$LOG_DIR/ultimate-redundancy.pid"
    
    log "INFO" "Ultimate Redundancy System started with PID: $pid"
}

# Check system status
check_status() {
    log "INFO" "Checking system status..."
    
    # Check PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon 2>/dev/null || log "WARN" "PM2 status check failed"
    fi
    
    # Check if ultimate system is running
    if [[ -f "$LOG_DIR/ultimate-redundancy.pid" ]]; then
        local pid=$(cat "$LOG_DIR/ultimate-redundancy.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate Redundancy System is running (PID: $pid)"
        else
            log "WARN" "Ultimate Redundancy System PID file exists but process is not running"
        fi
    else
        log "WARN" "Ultimate Redundancy System PID file not found"
    fi
    
    # Check log files
    log "INFO" "Recent log entries:"
    if [[ -d "$LOG_DIR" ]]; then
        find "$LOG_DIR" -name "*.log" -type f -exec tail -n 3 {} \; 2>/dev/null | head -20 || true
    fi
}

# Stop the system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy System..."
    
    # Stop PM2 processes
    if command -v pm2 &> /dev/null; then
        pm2 stop all 2>/dev/null || true
        pm2 kill 2>/dev/null || true
    fi
    
    # Stop direct process
    if [[ -f "$LOG_DIR/ultimate-redundancy.pid" ]]; then
        local pid=$(cat "$LOG_DIR/ultimate-redundancy.pid")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Stopped Ultimate Redundancy System (PID: $pid)"
        fi
        rm -f "$LOG_DIR/ultimate-redundancy.pid"
    fi
    
    log "INFO" "Ultimate Redundancy System stopped"
}

# Restart the system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy System..."
    stop_system
    sleep 5
    start_ultimate_system
    start_ultimate_direct
    log "INFO" "Ultimate Redundancy System restarted"
}

# Show logs
show_logs() {
    log "INFO" "Showing recent logs..."
    
    if [[ -d "$LOG_DIR" ]]; then
        # Show PM2 logs
        if command -v pm2 &> /dev/null; then
            log "INFO" "PM2 Logs:"
            pm2 logs --lines 50 --nostream 2>/dev/null || log "WARN" "PM2 logs unavailable"
        fi
        
        # Show ultimate redundancy logs
        log "INFO" "Ultimate Redundancy Logs:"
        find "$LOG_DIR" -name "ultimate-redundancy-*.log" -type f -exec tail -n 50 {} \; 2>/dev/null | head -100 || log "WARN" "No ultimate redundancy logs found"
    else
        log "WARN" "Log directory not found: $LOG_DIR"
    fi
}

# Run health check
health_check() {
    log "INFO" "Running health check..."
    
    cd "$PROJECT_ROOT"
    
    # Check if ultimate script can run
    if node "$ULTIMATE_SCRIPT" health > /dev/null 2>&1; then
        log "INFO" "Health check passed"
        return 0
    else
        log "ERROR" "Health check failed"
        return 1
    fi
}

# Run comprehensive test
run_test() {
    log "INFO" "Running comprehensive test..."
    
    cd "$PROJECT_ROOT"
    
    # Test PM2 ecosystem
    if node -c "$ECOSYSTEM_FILE" 2>/dev/null; then
        log "INFO" "PM2 ecosystem syntax check passed"
    else
        log "ERROR" "PM2 ecosystem syntax check failed"
        return 1
    fi
    
    # Test ultimate script
    if node -c "$ULTIMATE_SCRIPT" 2>/dev/null; then
        log "INFO" "Ultimate script syntax check passed"
    else
        log "ERROR" "Ultimate script syntax check failed"
        return 1
    fi
    
    # Test health check
    if health_check; then
        log "INFO" "Comprehensive test passed"
        return 0
    else
        log "ERROR" "Comprehensive test failed"
        return 1
    fi
}

# Generate report
generate_report() {
    log "INFO" "Generating system report..."
    
    local report_file="$LOG_DIR/ultimate-redundancy-report-$(date +%Y%m%d-%H%M%S).md"
    
    {
        echo "# Ultimate Redundancy Automation System Report"
        echo "Generated: $(date)"
        echo ""
        echo "## System Status"
        echo ""
        
        # PM2 Status
        if command -v pm2 &> /dev/null; then
            echo "### PM2 Status"
            pm2 status --no-daemon 2>/dev/null | sed 's/^/    /' || echo "    PM2 status unavailable"
            echo ""
        fi
        
        # Process Status
        echo "### Process Status"
        if [[ -f "$LOG_DIR/ultimate-redundancy.pid" ]]; then
            local pid=$(cat "$LOG_DIR/ultimate-redundancy.pid")
            if ps -p "$pid" > /dev/null 2>&1; then
                echo "    Ultimate Redundancy System: Running (PID: $pid)"
            else
                echo "    Ultimate Redundancy System: Not running (stale PID file)"
            fi
        else
            echo "    Ultimate Redundancy System: PID file not found"
        fi
        echo ""
        
        # Log Files
        echo "### Log Files"
        if [[ -d "$LOG_DIR" ]]; then
            find "$LOG_DIR" -name "*.log" -type f -exec ls -la {} \; 2>/dev/null | sed 's/^/    /' || echo "    No log files found"
        fi
        echo ""
        
        # Configuration
        echo "### Configuration"
        echo "    Project Root: $PROJECT_ROOT"
        echo "    Ecosystem File: $ECOSYSTEM_FILE"
        echo "    Ultimate Script: $ULTIMATE_SCRIPT"
        echo "    Log Directory: $LOG_DIR"
        echo ""
        
        # Recent Activity
        echo "### Recent Activity"
        if [[ -d "$LOG_DIR" ]]; then
            find "$LOG_DIR" -name "*.log" -type f -exec tail -n 5 {} \; 2>/dev/null | head -50 | sed 's/^/    /' || echo "    No recent activity found"
        fi
        
    } > "$report_file"
    
    log "INFO" "Report generated: $report_file"
    echo "Report saved to: $report_file"
}

# Main function
main() {
    local command="${1:-start}"
    
    log "INFO" "Ultimate Redundancy Automation System Startup Script"
    log "INFO" "Project Root: $PROJECT_ROOT"
    log "INFO" "Command: $command"
    
    case "$command" in
        "start")
            check_pm2
            check_node
            check_npm
            check_ecosystem
            check_ultimate_script
            stop_existing_processes
            start_ultimate_system
            start_ultimate_direct
            check_status
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
            show_logs
            ;;
        "health")
            health_check
            ;;
        "test")
            run_test
            ;;
        "report")
            generate_report
            ;;
        *)
            echo "Usage: $0 [start|stop|restart|status|logs|health|test|report]"
            echo ""
            echo "Commands:"
            echo "  start   - Start the ultimate redundancy system"
            echo "  stop    - Stop the ultimate redundancy system"
            echo "  restart - Restart the ultimate redundancy system"
            echo "  status  - Check system status"
            echo "  logs    - Show recent logs"
            echo "  health  - Run health check"
            echo "  test    - Run comprehensive test"
            echo "  report  - Generate system report"
            exit 1
            ;;
    esac
    
    log "INFO" "Command '$command' completed"
}

# Run main function with all arguments
main "$@"