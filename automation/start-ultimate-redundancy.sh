#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

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
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.pid"
LOCK_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.lock"

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
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Check if lock file exists
is_locked() {
    [ -f "$LOCK_FILE" ]
}

# Create lock file
create_lock() {
    echo "$$" > "$LOCK_FILE"
    log "INFO" "Lock file created"
}

# Remove lock file
remove_lock() {
    if [ -f "$LOCK_FILE" ]; then
        rm -f "$LOCK_FILE"
        log "INFO" "Lock file removed"
    fi
}

# Cleanup function
cleanup() {
    remove_lock
    log "INFO" "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    if is_locked; then
        log "ERROR" "System is locked, another instance may be starting"
        return 1
    fi
    
    create_lock
    
    # Check prerequisites
    log "INFO" "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        remove_lock
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, some features may not work"
    fi
    
    # Check if git is available
    if ! command -v git &> /dev/null; then
        log "WARN" "Git is not installed, git sync features may not work"
    fi
    
    # Navigate to project root
    cd "$PROJECT_ROOT"
    
    # Start the ultimate redundancy system
    log "INFO" "Launching Ultimate Redundancy Automation System..."
    
    nohup node automation/ultimate-redundancy-automation-system.cjs > "$LOG_DIR/ultimate-redundancy-system.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to see if it starts successfully
    sleep 3
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Ultimate Redundancy Automation System started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_DIR/ultimate-redundancy-system.log"
        
        # Start PM2 processes if available
        if command -v pm2 &> /dev/null; then
            log "INFO" "Starting PM2 processes..."
            pm2 start ecosystem.pm2.cjs --update-env || log "WARN" "Failed to start PM2 ecosystem"
            pm2 start ecosystem.redundancy.cjs --update-env || log "WARN" "Failed to start PM2 redundancy ecosystem"
            
            # Save PM2 configuration
            pm2 save || log "WARN" "Failed to save PM2 configuration"
        fi
        
        # Generate initial health report
        log "INFO" "Generating initial health report..."
        sleep 5
        node -e "
            try {
                const system = require('./automation/ultimate-redundancy-automation-system.cjs');
                const instance = new system();
                instance.generateHealthReport().then(() => {
                    console.log('Initial health report generated');
                    process.exit(0);
                }).catch(err => {
                    console.error('Failed to generate health report:', err.message);
                    process.exit(1);
                });
            } catch (err) {
                console.error('Failed to instantiate system:', err.message);
                process.exit(1);
            }
        " || log "WARN" "Failed to generate initial health report"
        
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy Automation System"
        rm -f "$PID_FILE"
        remove_lock
        return 1
    fi
}

# Stop the ultimate redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if ! is_running; then
        log "WARN" "System is not running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    
    # Stop the main process
    log "INFO" "Stopping main process (PID: $pid)..."
    kill "$pid" 2>/dev/null || true
    
    # Wait for process to stop
    local count=0
    while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
        sleep 1
        count=$((count + 1))
    done
    
    # Force kill if still running
    if kill -0 "$pid" 2>/dev/null; then
        log "WARN" "Process still running, force killing..."
        kill -9 "$pid" 2>/dev/null || true
    fi
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    # Stop PM2 processes if available
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping PM2 processes..."
        pm2 stop ecosystem.pm2.cjs || log "WARN" "Failed to stop PM2 ecosystem"
        pm2 stop ecosystem.redundancy.cjs || log "WARN" "Failed to stop PM2 redundancy ecosystem"
    fi
    
    log "INFO" "Ultimate Redundancy Automation System stopped"
    return 0
}

# Restart the ultimate redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    log "INFO" "Checking Ultimate Redundancy Automation System status..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "System is running (PID: $pid)"
        
        # Check PM2 status
        if command -v pm2 &> /dev/null; then
            log "INFO" "PM2 Status:"
            pm2 status || log "WARN" "Failed to get PM2 status"
        fi
        
        # Check log file size
        if [ -f "$LOG_DIR/ultimate-redundancy-system.log" ]; then
            local log_size=$(du -h "$LOG_DIR/ultimate-redundancy-system.log" | cut -f1)
            log "INFO" "Current log size: $log_size"
        fi
        
        return 0
    else
        log "INFO" "System is not running"
        return 1
    fi
}

# Show system logs
show_logs() {
    log "INFO" "Showing Ultimate Redundancy Automation System logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-system.log" ]; then
        tail -n 100 "$LOG_DIR/ultimate-redundancy-system.log"
    else
        log "WARN" "No log file found"
    fi
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        
        # Send signal to generate report
        kill -USR1 "$pid" 2>/dev/null || log "WARN" "Failed to send signal to process"
        
        # Wait for report generation
        sleep 3
        
        # Check for health report files
        local report_files=$(find "$LOG_DIR" -name "health-report-*.json" -type f 2>/dev/null | head -1)
        if [ -n "$report_files" ]; then
            log "INFO" "Health report generated: $report_files"
            echo "Health Report Contents:"
            cat "$report_files" | jq '.' 2>/dev/null || cat "$report_files"
        else
            log "WARN" "No health report found"
        fi
    else
        log "ERROR" "System is not running, cannot generate report"
        return 1
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing Ultimate Redundancy Automation System..."
    
    # Test Node.js script
    log "INFO" "Testing Node.js script syntax..."
    if node -c automation/ultimate-redundancy-automation-system.cjs; then
        log "INFO" "✅ Node.js script syntax is valid"
    else
        log "ERROR" "❌ Node.js script syntax is invalid"
        return 1
    fi
    
    # Test PM2 ecosystem files
    if command -v pm2 &> /dev/null; then
        log "INFO" "Testing PM2 ecosystem files..."
        for ecosystem in ecosystem.pm2.cjs ecosystem.redundancy.cjs; do
            if [ -f "$ecosystem" ]; then
                if node -c "$ecosystem"; then
                    log "INFO" "✅ $ecosystem syntax is valid"
                else
                    log "ERROR" "❌ $ecosystem syntax is invalid"
                    return 1
                fi
            fi
        done
    fi
    
    # Test GitHub Actions workflows
    log "INFO" "Testing GitHub Actions workflows..."
    for workflow in .github/workflows/*.yml; do
        if [ -f "$workflow" ]; then
            if grep -q "name:" "$workflow" && grep -q "on:" "$workflow"; then
                log "INFO" "✅ $workflow syntax appears valid"
            else
                log "WARN" "⚠️ $workflow may have syntax issues"
            fi
        fi
    done
    
    # Test Netlify functions
    log "INFO" "Testing Netlify functions..."
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        if node -e "JSON.parse(require('fs').readFileSync('netlify/functions/functions-manifest.json', 'utf8'))" 2>/dev/null; then
            log "INFO" "✅ Netlify functions manifest is valid JSON"
        else
            log "ERROR" "❌ Netlify functions manifest is invalid JSON"
            return 1
        fi
    fi
    
    log "INFO" "✅ All tests passed"
    return 0
}

# Main function
main() {
    local action="${1:-start}"
    
    case "$action" in
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
            show_logs
            ;;
        "report")
            generate_report
            ;;
        "test")
            test_system
            ;;
        "help"|"-h"|"--help")
            echo "Usage: $0 [action]"
            echo ""
            echo "Actions:"
            echo "  start     Start the Ultimate Redundancy Automation System"
            echo "  stop      Stop the Ultimate Redundancy Automation System"
            echo "  restart   Restart the Ultimate Redundancy Automation System"
            echo "  status    Check system status"
            echo "  logs      Show system logs"
            echo "  report    Generate health report"
            echo "  test      Test system components"
            echo "  help      Show this help message"
            echo ""
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 logs"
            ;;
        *)
            log "ERROR" "Unknown action: $action"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"