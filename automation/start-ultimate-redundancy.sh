#!/bin/bash

<<<<<<< HEAD
# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive control over all automation redundancies
=======
# Ultimate Redundancy Automation Startup Script
# This script manages the comprehensive redundancy system for PM2, GitHub Actions, and Netlify Functions
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
<<<<<<< HEAD
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/ultimate-redundancy.pid"
=======
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
<<<<<<< HEAD
    
    case "$level" in
        "INFO")
            echo -e "${GREEN}[$timestamp] [INFO]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        "DEBUG")
            echo -e "${BLUE}[$timestamp] [DEBUG]${NC} $message" | tee -a "$LOG_FILE"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
            ;;
    esac
}

# Check if system is running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start the ultimate redundancy system
start() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    cd "$PROJECT_ROOT"
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing globally..."
        npm install -g pm2
    fi
    
    # Start the ultimate redundancy system
    nohup node automation/ultimate-redundancy-automation-system.cjs > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "✅ Ultimate Redundancy System started successfully (PID: $pid)"
        
        # Start comprehensive PM2 ecosystem
        log "INFO" "🔄 Starting comprehensive PM2 ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env
        
        # Save PM2 configuration
        pm2 save
        
        log "INFO" "✅ All systems started successfully"
        return 0
    else
        log "ERROR" "❌ Failed to start Ultimate Redundancy System"
=======
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
}

# Check if the ultimate redundancy automation script exists
check_script() {
    local script_path="$PROJECT_ROOT/automation/ultimate-redundancy-automation.cjs"
    if [[ ! -f "$script_path" ]]; then
        log "ERROR" "Ultimate redundancy automation script not found: $script_path"
        exit 1
    fi
}

# Start the ultimate redundancy automation
start_automation() {
    log "INFO" "Starting Ultimate Redundancy Automation..."
    
    check_pm2
    check_node
    check_script
    
    # Check if already running
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Ultimate Redundancy Automation is already running (PID: $pid)"
            return 0
        else
            log "WARN" "PID file exists but process is not running, cleaning up..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the automation
    cd "$PROJECT_ROOT"
    nohup node automation/ultimate-redundancy-automation.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 2
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "Ultimate Redundancy Automation started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_FILE"
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy Automation"
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1
        rm -f "$PID_FILE"
        return 1
    fi
}

<<<<<<< HEAD
# Stop the ultimate redundancy system
stop() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping process $pid..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Process did not stop gracefully, force killing..."
                kill -9 "$pid"
            fi
        fi
        
        rm -f "$PID_FILE"
    fi
    
    # Stop all PM2 processes
    log "INFO" "🛑 Stopping all PM2 processes..."
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    log "INFO" "✅ Ultimate Redundancy System stopped"
}

# Restart the ultimate redundancy system
restart() {
    log "INFO" "🔄 Restarting Ultimate Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Check system status
status() {
    log "INFO" "📊 Checking Ultimate Redundancy System status..."
    
    echo -e "\n${BLUE}=== Ultimate Redundancy System Status ===${NC}"
    
    # Check if main system is running
    if is_running; then
        local pid=$(cat "$PID_FILE")
        echo -e "${GREEN}✅ Main System: RUNNING (PID: $pid)${NC}"
    else
        echo -e "${RED}❌ Main System: NOT RUNNING${NC}"
    fi
    
    # Check PM2 status
    echo -e "\n${BLUE}=== PM2 Status ===${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 status --no-daemon 2>/dev/null || echo "No PM2 processes running"
    else
        echo "PM2 not installed"
    fi
    
    # Check system health
    echo -e "\n${BLUE}=== System Health Check ===${NC}"
    if is_running; then
        cd "$PROJECT_ROOT"
        node automation/ultimate-redundancy-automation-system.cjs status 2>/dev/null || echo "Health check failed"
    fi
    
    # Check log files
    echo -e "\n${BLUE}=== Recent Logs ===${NC}"
    if [ -f "$LOG_FILE" ]; then
        tail -n 10 "$LOG_FILE" 2>/dev/null || echo "No recent logs"
    else
        echo "No log file found"
    fi
}

# Show system logs
logs() {
    log "INFO" "📋 Showing Ultimate Redundancy System logs..."
    
    if [ -f "$LOG_FILE" ]; then
        if [ "$1" = "follow" ]; then
            tail -f "$LOG_FILE"
        else
            tail -n 100 "$LOG_FILE"
        fi
    else
        log "WARN" "No log file found"
    fi
}

# Perform health check
health_check() {
    log "INFO" "🔍 Performing comprehensive health check..."
    
    cd "$PROJECT_ROOT"
    
    if command -v node &> /dev/null; then
        node automation/ultimate-redundancy-automation-system.cjs health-check
    else
        log "ERROR" "Node.js not available"
=======
# Stop the ultimate redundancy automation
stop_automation() {
    log "INFO" "Stopping Ultimate Redundancy Automation..."
    
    if [[ ! -f "$PID_FILE" ]]; then
        log "WARN" "No PID file found, automation may not be running"
        return 0
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "Stopping process with PID: $pid"
        kill "$pid"
        
        # Wait for process to stop
        local count=0
        while ps -p "$pid" > /dev/null 2>&1 && [[ $count -lt 10 ]]; do
            sleep 1
            ((count++))
        done
        
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Process did not stop gracefully, forcing termination..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        log "INFO" "Ultimate Redundancy Automation stopped"
    else
        log "WARN" "Process with PID $pid is not running"
    fi
    
    # Clean up PID file
    rm -f "$PID_FILE"
}

# Restart the ultimate redundancy automation
restart_automation() {
    log "INFO" "Restarting Ultimate Redundancy Automation..."
    stop_automation
    sleep 2
    start_automation
}

# Check the status of the ultimate redundancy automation
check_status() {
    log "INFO" "Checking Ultimate Redundancy Automation status..."
    
    if [[ ! -f "$PID_FILE" ]]; then
        echo -e "${RED}Ultimate Redundancy Automation is not running${NC}"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if ps -p "$pid" > /dev/null 2>&1; then
        echo -e "${GREEN}Ultimate Redundancy Automation is running (PID: $pid)${NC}"
        
        # Check PM2 status
        echo -e "\n${BLUE}PM2 Status:${NC}"
        pm2 status --no-daemon 2>/dev/null || echo "PM2 not accessible"
        
        # Check GitHub Actions workflows
        echo -e "\n${BLUE}GitHub Actions Workflows:${NC}"
        if [[ -d "$PROJECT_ROOT/.github/workflows" ]]; then
            local workflows=$(find "$PROJECT_ROOT/.github/workflows" -name "*.yml" -exec basename {} \;)
            echo "$workflows" | while read -r workflow; do
                echo "  ✓ $workflow"
            done
        else
            echo "  No workflows directory found"
        fi
        
        # Check Netlify functions
        echo -e "\n${BLUE}Netlify Functions:${NC}"
        if [[ -f "$PROJECT_ROOT/netlify/functions/functions-manifest.json" ]]; then
            local function_count=$(jq '.functions | length' "$PROJECT_ROOT/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
            echo "  ✓ $function_count functions available"
        else
            echo "  No functions manifest found"
        fi
        
        return 0
    else
        echo -e "${RED}Ultimate Redundancy Automation is not running (stale PID file)${NC}"
        rm -f "$PID_FILE"
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1
        return 1
    fi
}

<<<<<<< HEAD
# Perform system recovery
recover() {
    log "INFO" "🔄 Performing system recovery..."
    
    cd "$PROJECT_ROOT"
    
    if command -v node &> /dev/null; then
        node automation/ultimate-redundancy-automation-system.cjs recover
    else
        log "ERROR" "Node.js not available"
        return 1
    fi
=======
# Show logs
show_logs() {
    log "INFO" "Showing Ultimate Redundancy Automation logs..."
    
    if [[ -f "$LOG_FILE" ]]; then
        echo -e "${BLUE}=== Ultimate Redundancy Automation Logs ===${NC}"
        tail -n 100 "$LOG_FILE"
    else
        echo -e "${YELLOW}No log file found${NC}"
    fi
    
    # Also show PM2 logs
    echo -e "\n${BLUE}=== PM2 Logs ===${NC}"
    pm2 logs --lines 50 --nostream 2>/dev/null || echo "PM2 logs not accessible"
}

# Run a comprehensive check
run_check() {
    log "INFO" "Running comprehensive redundancy check..."
    
    cd "$PROJECT_ROOT"
    node automation/ultimate-redundancy-automation.cjs check
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1
}

# Show help
show_help() {
<<<<<<< HEAD
    echo -e "${BLUE}Ultimate Redundancy Automation System${NC}"
    echo -e "Usage: $0 {start|stop|restart|status|logs|health-check|recover|help}"
    echo -e ""
    echo -e "Commands:"
    echo -e "  start         Start the ultimate redundancy system"
    echo -e "  stop          Stop the ultimate redundancy system"
    echo -e "  restart       Restart the ultimate redundancy system"
    echo -e "  status        Show system status and health"
    echo -e "  logs          Show recent logs"
    echo -e "  logs follow   Follow logs in real-time"
    echo -e "  health-check  Perform comprehensive health check"
    echo -e "  recover       Perform system recovery"
    echo -e "  help          Show this help message"
    echo -e ""
    echo -e "The Ultimate Redundancy System provides comprehensive redundancy for:"
    echo -e "  • PM2 automations"
    echo -e "  • GitHub Actions automations"
    echo -e "  • Netlify Functions automations"
    echo -e ""
    echo -e "Logs are stored in: $LOG_DIR"
}

# Main script logic
case "${1:-help}" in
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
    logs)
        logs "$2"
        ;;
    health-check)
        health_check
        ;;
    recover)
        recover
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        show_help
        exit 1
        ;;
esac
=======
    echo -e "${BLUE}Ultimate Redundancy Automation Management Script${NC}"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the ultimate redundancy automation"
    echo "  stop      Stop the ultimate redundancy automation"
    echo "  restart   Restart the ultimate redundancy automation"
    echo "  status    Check the status of all redundancy systems"
    echo "  logs      Show recent logs"
    echo "  check     Run a comprehensive redundancy check"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start          # Start the automation"
    echo "  $0 status         # Check status"
    echo "  $0 logs           # Show logs"
    echo "  $0 check          # Run health check"
}

# Main script logic
main() {
    local command="${1:-help}"
    
    case "$command" in
        start)
            start_automation
            ;;
        stop)
            stop_automation
            ;;
        restart)
            restart_automation
            ;;
        status)
            check_status
            ;;
        logs)
            show_logs
            ;;
        check)
            run_check
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            echo -e "${RED}Unknown command: $command${NC}"
            show_help
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
>>>>>>> 85163359e2930a40f789748c360b669bd0e694c1
