#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"

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
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
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

# Check if script is running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            return 0
        else
            log "WARN" "PID file exists but process is not running, cleaning up"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check dependencies
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    # Check Node.js
    if ! command -v node > /dev/null 2>&1; then
        log "ERROR" "Node.js is not installed"
        exit 1
    fi
    
    # Check npm
    if ! command -v npm > /dev/null 2>&1; then
        log "ERROR" "npm is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 > /dev/null 2>&1; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2
    fi
    
    # Check git
    if ! command -v git > /dev/null 2>&1; then
        log "ERROR" "git is not installed"
        exit 1
    fi
    
    log "INFO" "All dependencies are available"
}

# Initialize PM2 redundancy
init_pm2_redundancy() {
    log "INFO" "Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if PM2 is running
    if ! pm2 ping > /dev/null 2>&1; then
        log "INFO" "Starting PM2 daemon..."
        pm2 start
    fi
    
    # Install PM2 logrotate if not already installed
    if ! pm2 list | grep -q "pm2-logrotate"; then
        log "INFO" "Installing PM2 logrotate..."
        pm2 install pm2-logrotate
        pm2 set pm2-logrotate:max_size 10M
        pm2 set pm2-logrotate:retain 30
        pm2 set pm2-logrotate:compress true
        pm2 set pm2-logrotate:workerInterval 60
        pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    fi
    
    # Start comprehensive redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env
    elif [ -f "ecosystem.redundancy.cjs" ]; then
        log "INFO" "Starting redundancy ecosystem..."
        pm2 start ecosystem.redundancy.cjs --update-env
    elif [ -f "ecosystem.pm2.cjs" ]; then
        log "INFO" "Starting PM2 ecosystem..."
        pm2 start ecosystem.pm2.cjs --update-env
    else
        log "WARN" "No PM2 ecosystem file found"
    fi
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "PM2 redundancy system initialized"
}

# Initialize GitHub Actions redundancy
init_github_redundancy() {
    log "INFO" "Initializing GitHub Actions redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if .github/workflows directory exists
    if [ ! -d ".github/workflows" ]; then
        log "WARN" ".github/workflows directory not found"
        return
    fi
    
    # Check workflow files
    local workflows=("marketing-sync" "sync-health")
    local has_issues=false
    
    for workflow in "${workflows[@]}"; do
        local workflow_file=".github/workflows/$workflow.yml"
        local backup_file=".github/workflows/$workflow-backup.yml"
        
        if [ ! -f "$workflow_file" ]; then
            log "WARN" "Workflow file $workflow_file not found"
            has_issues=true
            
            # Try to restore from backup
            if [ -f "$backup_file" ]; then
                log "INFO" "Restoring $workflow from backup..."
                cp "$backup_file" "$workflow_file"
                git add "$workflow_file"
                git commit -m "chore: restore $workflow workflow from backup" || true
            fi
        else
            log "INFO" "Workflow $workflow is present and healthy"
        fi
    done
    
    if [ "$has_issues" = false ]; then
        log "INFO" "GitHub Actions redundancy system initialized"
    else
        log "WARN" "GitHub Actions redundancy system initialized with issues"
    fi
}

# Initialize Netlify Functions redundancy
init_netlify_redundancy() {
    log "INFO" "Initializing Netlify Functions redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if netlify/functions directory exists
    if [ ! -d "netlify/functions" ]; then
        log "WARN" "netlify/functions directory not found"
        return
    fi
    
    # Check functions manifest
    local manifest_file="netlify/functions/functions-manifest.json"
    if [ ! -f "$manifest_file" ]; then
        log "WARN" "Netlify functions manifest not found, regenerating..."
        npm run netlify:manifest || true
    else
        # Check if manifest is recent (within last hour)
        local manifest_age=$(($(date +%s) - $(stat -c %Y "$manifest_file")))
        if [ $manifest_age -gt 3600 ]; then
            log "WARN" "Netlify functions manifest is stale, regenerating..."
            npm run netlify:manifest || true
        fi
    fi
    
    log "INFO" "Netlify Functions redundancy system initialized"
}

# Start ultimate redundancy monitoring
start_monitoring() {
    log "INFO" "Starting ultimate redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the ultimate redundancy master
    nohup node automation/ultimate-redundancy-master.cjs start > "$LOG_FILE" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to ensure it started
    sleep 2
    
    # Check if process is running
    if ps -p "$pid" > /dev/null 2>&1; then
        log "INFO" "Ultimate redundancy monitoring started with PID $pid"
        log "INFO" "Log file: $LOG_FILE"
        log "INFO" "PID file: $PID_FILE"
    else
        log "ERROR" "Failed to start ultimate redundancy monitoring"
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Stop monitoring
stop_monitoring() {
    log "INFO" "Stopping ultimate redundancy monitoring..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process $pid..."
            kill "$pid"
            
            # Wait for process to stop
            local count=0
            while ps -p "$pid" > /dev/null 2>&1 && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Force killing process $pid..."
                kill -9 "$pid"
            fi
        else
            log "WARN" "Process $pid is not running"
        fi
        
        rm -f "$PID_FILE"
        log "INFO" "Ultimate redundancy monitoring stopped"
    else
        log "WARN" "PID file not found, monitoring may not be running"
    fi
}

# Get status
get_status() {
    log "INFO" "Getting ultimate redundancy system status..."
    
    cd "$WORKSPACE_DIR"
    
    echo "=== Ultimate Redundancy System Status ==="
    echo
    
    # Check if monitoring is running
    if check_running; then
        local pid=$(cat "$PID_FILE")
        echo "✓ Monitoring Status: RUNNING (PID: $pid)"
    else
        echo "✗ Monitoring Status: STOPPED"
    fi
    echo
    
    # Check PM2 status
    echo "=== PM2 Status ==="
    if command -v pm2 > /dev/null 2>&1; then
        pm2 status --no-daemon || echo "PM2 not accessible"
    else
        echo "PM2 not installed"
    fi
    echo
    
    # Check GitHub Actions workflows
    echo "=== GitHub Actions Workflows ==="
    if [ -d ".github/workflows" ]; then
        for file in .github/workflows/*.yml; do
            if [ -f "$file" ]; then
                local basename=$(basename "$file")
                echo "✓ $basename"
            fi
        done
    else
        echo "✗ .github/workflows directory not found"
    fi
    echo
    
    # Check Netlify Functions
    echo "=== Netlify Functions ==="
    if [ -d "netlify/functions" ]; then
        if [ -f "netlify/functions/functions-manifest.json" ]; then
            local function_count=$(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "unknown")
            echo "✓ Functions manifest found with $function_count functions"
        else
            echo "✗ Functions manifest not found"
        fi
    else
        echo "✗ netlify/functions directory not found"
    fi
    echo
    
    # Check system resources
    echo "=== System Resources ==="
    echo "Disk usage:"
    df -h . | tail -1
    echo "Memory usage:"
    free -h | grep "Mem:"
    echo
    
    # Check recent logs
    echo "=== Recent Logs ==="
    if [ -f "$LOG_FILE" ]; then
        tail -10 "$LOG_FILE" | sed 's/^/  /'
    else
        echo "No log file found"
    fi
}

# Run health check
run_health_check() {
    log "INFO" "Running ultimate redundancy health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Run the health check
    if node automation/ultimate-redundancy-master.cjs check; then
        log "INFO" "Health check completed successfully"
    else
        log "ERROR" "Health check failed"
        return 1
    fi
}

# Show logs
show_logs() {
    log "INFO" "Showing ultimate redundancy logs..."
    
    if [ -f "$LOG_FILE" ]; then
        if [ "$1" = "follow" ]; then
            tail -f "$LOG_FILE"
        else
            tail -100 "$LOG_FILE"
        fi
    else
        log "WARN" "No log file found"
    fi
}

# Test the system
test_system() {
    log "INFO" "Testing ultimate redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Test PM2
    echo "Testing PM2..."
    if pm2 ping > /dev/null 2>&1; then
        echo "✓ PM2 is accessible"
    else
        echo "✗ PM2 is not accessible"
    fi
    
    # Test GitHub Actions
    echo "Testing GitHub Actions..."
    if [ -d ".github/workflows" ]; then
        echo "✓ GitHub workflows directory exists"
    else
        echo "✗ GitHub workflows directory not found"
    fi
    
    # Test Netlify Functions
    echo "Testing Netlify Functions..."
    if [ -d "netlify/functions" ]; then
        echo "✓ Netlify functions directory exists"
    else
        echo "✗ Netlify functions directory not found"
    fi
    
    # Test Node.js scripts
    echo "Testing Node.js scripts..."
    if node -e "console.log('Node.js is working')" > /dev/null 2>&1; then
        echo "✓ Node.js is working"
    else
        echo "✗ Node.js is not working"
    fi
    
    log "INFO" "System test completed"
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        "start")
            if check_running; then
                log "WARN" "Ultimate redundancy monitoring is already running"
                exit 0
            fi
            
            log "INFO" "Starting Ultimate Redundancy Automation System..."
            check_dependencies
            init_pm2_redundancy
            init_github_redundancy
            init_netlify_redundancy
            start_monitoring
            log "INFO" "Ultimate Redundancy Automation System started successfully"
            ;;
            
        "stop")
            log "INFO" "Stopping Ultimate Redundancy Automation System..."
            stop_monitoring
            log "INFO" "Ultimate Redundancy Automation System stopped"
            ;;
            
        "restart")
            log "INFO" "Restarting Ultimate Redundancy Automation System..."
            stop_monitoring
            sleep 2
            check_dependencies
            init_pm2_redundancy
            init_github_redundancy
            init_netlify_redundancy
            start_monitoring
            log "INFO" "Ultimate Redundancy Automation System restarted successfully"
            ;;
            
        "status")
            get_status
            ;;
            
        "health")
            run_health_check
            ;;
            
        "logs")
            show_logs "$2"
            ;;
            
        "test")
            test_system
            ;;
            
        "help"|"--help"|"-h")
            echo "Usage: $0 [command]"
            echo
            echo "Commands:"
            echo "  start     Start the ultimate redundancy automation system"
            echo "  stop      Stop the ultimate redundancy automation system"
            echo "  restart   Restart the ultimate redundancy automation system"
            echo "  status    Show system status"
            echo "  health    Run health check"
            echo "  logs      Show logs (use 'logs follow' to follow logs)"
            echo "  test      Test the system components"
            echo "  help      Show this help message"
            ;;
            
        *)
            log "ERROR" "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"