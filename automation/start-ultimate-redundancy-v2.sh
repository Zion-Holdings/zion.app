#!/bin/bash

# Ultimate Redundancy Automation System V2
# Comprehensive redundancy coverage for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
ECOSYSTEM_FILE="ecosystem.ultimate-redundancy-v2.cjs"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy-v2.pid"
STATUS_FILE="$PROJECT_ROOT/automation/ultimate-redundancy-v2-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

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
            echo -e "${CYAN}[$timestamp] [LOG]${NC} $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-v2.log"
}

# Ensure log directory exists
ensure_log_directory() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
}

# Check if ecosystem file exists
check_ecosystem_file() {
    if [ ! -f "$PROJECT_ROOT/$ECOSYSTEM_FILE" ]; then
        log "ERROR" "Ecosystem file not found: $ECOSYSTEM_FILE"
        exit 1
    fi
}

# Start the ultimate redundancy system
start() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System V2..."
    
    ensure_log_directory
    check_pm2
    check_ecosystem_file
    
    # Check if already running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Ultimate redundancy system is already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    # Start the system using PM2
    log "INFO" "Starting PM2 processes from ecosystem file: $ECOSYSTEM_FILE"
    
    cd "$PROJECT_ROOT"
    
    # Start all processes
    pm2 start "$ECOSYSTEM_FILE" --update-env
    
    # Save PM2 configuration
    pm2 save
    
    # Get the master process PID
    local master_pid=$(pm2 jlist | jq -r '.[] | select(.name == "ultimate-redundancy-master-v2") | .pid')
    
    if [ -n "$master_pid" ] && [ "$master_pid" != "null" ]; then
        echo "$master_pid" > "$PID_FILE"
        log "INFO" "✅ Ultimate redundancy system started successfully (PID: $master_pid)"
        
        # Update status
        update_status "running" "$master_pid"
        
        # Show status
        show_status
    else
        log "ERROR" "Failed to start ultimate redundancy system"
        exit 1
    fi
}

# Stop the ultimate redundancy system
stop() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System V2..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "Stopping process with PID: $pid"
    fi
    
    cd "$PROJECT_ROOT"
    
    # Stop all PM2 processes from the ecosystem
    pm2 stop "$ECOSYSTEM_FILE" || true
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    log "INFO" "✅ Ultimate redundancy system stopped successfully"
    
    # Update status
    update_status "stopped" ""
}

# Restart the ultimate redundancy system
restart() {
    log "INFO" "🔄 Restarting Ultimate Redundancy Automation System V2..."
    
    stop
    sleep 2
    start
}

# Show status of the ultimate redundancy system
status() {
    log "INFO" "📊 Ultimate Redundancy Automation System V2 Status:"
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            echo -e "${GREEN}Status:${NC} Running (PID: $pid)"
        else
            echo -e "${RED}Status:${NC} Not running (stale PID file)"
        fi
    else
        echo -e "${YELLOW}Status:${NC} Not running"
    fi
    
    echo ""
    echo -e "${CYAN}PM2 Status:${NC}"
    pm2 status
    
    echo ""
    echo -e "${CYAN}PM2 Logs (last 20 lines):${NC}"
    pm2 logs --lines 20 --nostream || true
    
    # Show detailed status if available
    if [ -f "$STATUS_FILE" ]; then
        echo ""
        echo -e "${CYAN}Detailed Status:${NC}"
        cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
    fi
}

# Show health status
health() {
    log "INFO" "🏥 Ultimate Redundancy Automation System V2 Health Check:"
    
    cd "$PROJECT_ROOT"
    
    # Check PM2 processes health
    echo -e "${CYAN}PM2 Process Health:${NC}"
    pm2 jlist | jq -r '.[] | "\(.name): \(.pm2_env.status) (restarts: \(.pm2_env.restart_time))"' 2>/dev/null || echo "Failed to get PM2 health info"
    
    # Check log files
    echo ""
    echo -e "${CYAN}Recent Log Entries:${NC}"
    if [ -d "$LOG_DIR" ]; then
        find "$LOG_DIR" -name "ultimate-redundancy-v2*.log" -type f -exec tail -5 {} \; 2>/dev/null || echo "No log files found"
    fi
    
    # Check system resources
    echo ""
    echo -e "${CYAN}System Resources:${NC}"
    echo "Memory usage: $(free -h | grep Mem | awk '{print $3"/"$2}')"
    echo "Disk usage: $(df -h . | tail -1 | awk '{print $5}')"
    echo "Load average: $(uptime | awk -F'load average:' '{print $2}')"
}

# Show logs
logs() {
    log "INFO" "📋 Ultimate Redundancy Automation System V2 Logs:"
    
    if [ -d "$LOG_DIR" ]; then
        # Show recent logs from all log files
        find "$LOG_DIR" -name "ultimate-redundancy-v2*.log" -type f -exec echo "=== {} ===" \; -exec tail -20 {} \; 2>/dev/null || echo "No log files found"
    else
        echo "Log directory not found: $LOG_DIR"
    fi
    
    echo ""
    echo -e "${CYAN}PM2 Logs:${NC}"
    pm2 logs --lines 50 --nostream || true
}

# Test the system
test() {
    log "INFO" "🧪 Testing Ultimate Redundancy Automation System V2..."
    
    cd "$PROJECT_ROOT"
    
    # Test PM2 ecosystem file
    log "INFO" "Testing PM2 ecosystem file..."
    if pm2 validate "$ECOSYSTEM_FILE"; then
        log "INFO" "✅ PM2 ecosystem file is valid"
    else
        log "ERROR" "❌ PM2 ecosystem file validation failed"
        return 1
    fi
    
    # Test individual scripts
    log "INFO" "Testing automation scripts..."
    
    local scripts=(
        "automation/ultimate-redundancy-automation-system.cjs"
        "automation/enhanced-pm2-redundancy.cjs"
        "automation/enhanced-github-actions-redundancy.cjs"
        "automation/enhanced-netlify-functions-redundancy.cjs"
    )
    
    for script in "${scripts[@]}"; do
        if [ -f "$script" ]; then
            if node --check "$script" >/dev/null 2>&1; then
                log "INFO" "✅ $script syntax is valid"
            else
                log "ERROR" "❌ $script syntax is invalid"
                return 1
            fi
        else
            log "WARN" "⚠️ Script not found: $script"
        fi
    done
    
    # Test GitHub Actions workflows
    log "INFO" "Testing GitHub Actions workflows..."
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
    )
    
    for workflow in "${workflows[@]}"; do
        if [ -f "$workflow" ]; then
            log "INFO" "✅ Found workflow: $workflow"
        else
            log "WARN" "⚠️ Workflow not found: $workflow"
        fi
    done
    
    # Test Netlify functions manifest
    log "INFO" "Testing Netlify functions manifest..."
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        if jq empty "netlify/functions/functions-manifest.json" >/dev/null 2>&1; then
            log "INFO" "✅ Netlify functions manifest is valid JSON"
        else
            log "ERROR" "❌ Netlify functions manifest is invalid JSON"
            return 1
        fi
    else
        log "WARN" "⚠️ Netlify functions manifest not found"
    fi
    
    log "INFO" "✅ All tests completed successfully"
}

# Update status file
update_status() {
    local status="$1"
    local pid="$2"
    local timestamp=$(date -Iseconds)
    
    cat > "$STATUS_FILE" << EOF
{
  "status": "$status",
  "pid": "$pid",
  "lastUpdated": "$timestamp",
  "ecosystemFile": "$ECOSYSTEM_FILE",
  "logDirectory": "$LOG_DIR",
  "projectRoot": "$PROJECT_ROOT"
}
EOF
}

# Show status summary
show_status() {
    if [ -f "$STATUS_FILE" ]; then
        local status=$(jq -r '.status' "$STATUS_FILE" 2>/dev/null || echo "unknown")
        local pid=$(jq -r '.pid' "$STATUS_FILE" 2>/dev/null || echo "N/A")
        
        echo ""
        echo -e "${GREEN}=== Ultimate Redundancy System V2 Status ===${NC}"
        echo -e "Status: ${GREEN}$status${NC}"
        echo -e "PID: ${CYAN}$pid${NC}"
        echo -e "Ecosystem: ${CYAN}$ECOSYSTEM_FILE${NC}"
        echo -e "Logs: ${CYAN}$LOG_DIR${NC}"
        echo ""
    fi
}

# Main function
main() {
    local command="${1:-help}"
    
    case "$command" in
        "start")
            start
            ;;
        "stop")
            stop
            ;;
        "restart")
            restart
            ;;
        "status")
            status
            ;;
        "health")
            health
            ;;
        "logs")
            logs
            ;;
        "test")
            test
            ;;
        "help"|*)
            echo -e "${CYAN}Ultimate Redundancy Automation System V2${NC}"
            echo ""
            echo "Usage: $0 {start|stop|restart|status|health|logs|test|help}"
            echo ""
            echo "Commands:"
            echo "  start   - Start the ultimate redundancy system"
            echo "  stop    - Stop the ultimate redundancy system"
            echo "  restart - Restart the ultimate redundancy system"
            echo "  status  - Show system status"
            echo "  health  - Show system health information"
            echo "  logs    - Show system logs"
            echo "  test    - Test system components"
            echo "  help    - Show this help message"
            echo ""
            echo "This system provides comprehensive redundancy coverage for:"
            echo "  • PM2 automations (${GREEN}12 processes${NC})"
            echo "  • GitHub Actions workflows (${GREEN}4 workflows${NC})"
            echo "  • Netlify Functions (${GREEN}85+ functions${NC})"
            echo ""
            ;;
    esac
}

# Run main function with all arguments
main "$@"