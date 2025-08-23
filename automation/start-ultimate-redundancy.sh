#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.pid"
LOCK_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
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
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy.log"
}

# Check if script is already running
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local pid=$(cat "$LOCK_FILE" 2>/dev/null)
        if kill -0 "$pid" 2>/dev/null; then
            log "ERROR" "Ultimate redundancy system is already running with PID $pid"
            exit 1
        else
            log "WARN" "Removing stale lock file"
            rm -f "$LOCK_FILE"
        fi
    fi
}

# Create lock file
create_lock() {
    echo $$ > "$LOCK_FILE"
    log "INFO" "Lock acquired"
}

# Remove lock file
remove_lock() {
    rm -f "$LOCK_FILE"
    log "INFO" "Lock released"
}

# Ensure log directory exists
ensure_log_directory() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, attempting to install..."
        npm install -g pm2 || {
            log "ERROR" "Failed to install PM2"
            exit 1
        }
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed"
        exit 1
    fi
    
    log "INFO" "System requirements check passed"
}

# Start PM2 redundancy system
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy system..."
    
    cd "$PROJECT_ROOT"
    
    # Start comprehensive redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || {
            log "WARN" "Failed to start comprehensive ecosystem, trying fallback..."
            pm2 start ecosystem.redundancy.cjs --update-env || {
                log "ERROR" "Failed to start PM2 redundancy system"
                return 1
            }
        }
    else
        log "WARN" "Comprehensive ecosystem not found, starting basic redundancy..."
        pm2 start ecosystem.redundancy.cjs --update-env || {
            log "ERROR" "Failed to start basic PM2 redundancy system"
            return 1
        }
    fi
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 20M || true
    pm2 set pm2-logrotate:retain 50 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    # Save PM2 configuration
    pm2 save || true
    
    log "INFO" "PM2 redundancy system started successfully"
    return 0
}

# Start GitHub Actions redundancy
start_github_actions_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy system..."
    
    cd "$PROJECT_ROOT"
    
# Start the ultimate redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy Automation System..."
    
    if check_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Ensure log directory exists
    ensure_log_directory
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the ultimate redundancy system
    log "INFO" "Launching ultimate redundancy automation system..."
    nohup node automation/ultimate-redundancy-automation-system.cjs start > "$LOG_DIR/ultimate-redundancy.out" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment to check if it started successfully
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Ultimate redundancy system started successfully (PID: $pid)"
        log "INFO" "Logs are being written to: $LOG_DIR/ultimate-redundancy.log"
        return 0
    else
        log "ERROR" "Failed to start ultimate redundancy system"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Stop the ultimate redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy Automation System..."
    
    if [[ ! -f "$PID_FILE" ]]; then
        log "WARN" "No PID file found, system may not be running"
        return 1
    fi
    
    local pid=$(cat "$PID_FILE")
    
    if kill -0 "$pid" 2>/dev/null; then
        log "INFO" "Stopping process $pid..."
        kill "$pid"
        
        # Wait for graceful shutdown
        local count=0
        while kill -0 "$pid" 2>/dev/null && [[ $count -lt 30 ]]; do
            sleep 1
            ((count++))
        done
        
        if kill -0 "$pid" 2>/dev/null; then
            log "WARN" "Process did not stop gracefully, forcing termination..."
            kill -9 "$pid" 2>/dev/null || true
        fi
        
        log "INFO" "System stopped successfully"
    else
        log "WARN" "Process $pid is not running"
    fi
    
    # Clean up PID file
    rm -f "$PID_FILE"
}

# Restart the ultimate redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy Automation System..."
    stop_system
    sleep 2
    start_system
}

        
        # Show log file info
        echo
        echo "Log Information:"
        if [ -f "$LOG_FILE" ]; then
            local log_size=$(du -h "$LOG_FILE" | cut -f1)
            local log_lines=$(wc -l < "$LOG_FILE")
            echo "Log file: $LOG_FILE"
            echo "Size: $log_size"
            echo "Lines: $log_lines"
        else
            echo "No log file found"
        fi
        
    else
        echo -e "${RED}✗ System is NOT RUNNING${NC}"
    fi
    
    echo
    echo "Configuration:"
    echo "Workspace: $WORKSPACE_DIR"
    echo "Log directory: $LOG_DIR"
    echo "PID file: $PID_FILE"
}

# Show logs
show_logs() {
    local lines="${1:-50}"
    
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Showing last $lines lines of log file:"
        echo
        tail -n "$lines" "$LOG_FILE"
    else
        log "WARN" "Log file not found: $LOG_FILE"
=======
    # Check if Netlify functions directory exists
    if [ -d "netlify/functions" ]; then
        # Regenerate functions manifest
        if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
            log "INFO" "Regenerating Netlify functions manifest"
            node scripts/generate-netlify-functions-manifest.cjs || log "WARN" "Failed to regenerate manifest"
        fi
        
        log "INFO" "Netlify functions redundancy configured"
    else
        log "WARN" "Netlify functions directory not found"
    fi
}

# Start automation redundancy services
start_automation_redundancy() {
    log "INFO" "Starting automation redundancy services..."
    
    cd "$WORKSPACE_DIR"
    
    # Start key redundancy scripts
    local redundancy_scripts=(
        "automation/pm2-redundancy-monitor.cjs"
        "automation/comprehensive-redundancy-orchestrator.cjs"
        "automation/github-actions-redundancy-manager.cjs"
        "automation/netlify-functions-redundancy-manager.cjs"
    )
    
    for script in "${redundancy_scripts[@]}"; do
        if [ -f "$script" ]; then
            log "INFO" "Starting redundancy script: $script"
            node "$script" start > "$LOG_DIR/$(basename "$script" .cjs).log" 2>&1 &
            local pid=$!
            log "INFO" "Started $script with PID $pid"
        fi
    done
    
    # Start monitoring scripts
    local monitoring_scripts=(
        "automation/redundancy-health-monitor.cjs"
        "automation/redundancy-build-monitor.cjs"
        "automation/continuous-build-monitor.cjs"
    )
    
    for script in "${monitoring_scripts[@]}"; do
        if [ -f "$script" ]; then
            log "INFO" "Starting monitoring script: $script"
            node "$script" start > "$LOG_DIR/$(basename "$script" .cjs).log" 2>&1 &
            local pid=$!
            log "INFO" "Started $script with PID $pid"
        fi
    done
    
    log "INFO" "Automation redundancy services started"
}

# Start the ultimate redundancy master
start_ultimate_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    cd "$WORKSPACE_DIR"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        # Start in continuous monitoring mode
        node automation/ultimate-redundancy-master.cjs monitor > "$LOG_DIR/ultimate-redundancy-master.log" 2>&1 &
        local master_pid=$!
        echo "$master_pid" > "$PID_FILE"
        log "INFO" "Ultimate redundancy master started with PID $master_pid"
    else
        error_exit "Ultimate redundancy master script not found"
    fi
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    if is_running; then
        cd "$WORKSPACE_DIR"
        node automation/ultimate-redundancy-master.cjs report
    else
        log "ERROR" "System is not running, cannot generate report"
=======
# Check system status
check_status() {
    log "INFO" "Checking Ultimate Redundancy Automation System status..."
    
    if check_running; then
        local pid=$(cat "$PID_FILE")
        log "INFO" "System is running (PID: $pid)"
        
        # Get detailed status from the system
        cd "$WORKSPACE_DIR"
        if command -v node >/dev/null 2>&1; then
            log "INFO" "Getting detailed system status..."
            node automation/ultimate-redundancy-automation-system.cjs status
        fi
        
        return 0
    else
        log "INFO" "System is not running"
        return 1
    fi
}

    # Check PM2 status
    if command -v pm2 >/dev/null 2>&1; then
        local pm2_status=$(pm2 status 2>/dev/null || echo "PM2 not running")
        log "INFO" "PM2 Status: $pm2_status"
    fi
    
    # Check if processes are running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Ultimate redundancy master is running (PID: $pid)"
        else
            log "ERROR" "Ultimate redundancy master is not running"
            return 1
        fi
    fi
    
    # Check log files
    local log_count=$(find "$LOG_DIR" -name "*.log" | wc -l)
    log "INFO" "Found $log_count log files"
    
    log "INFO" "Health check completed"
    return 0
}

# Stop all services
stop_services() {
    log "INFO" "Stopping all redundancy services..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop PM2 processes
    if command -v pm2 >/dev/null 2>&1; then
        pm2 stop all 2>/dev/null || true
        log "INFO" "PM2 processes stopped"
    fi
    
    # Kill background processes
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Killed process $pid"
=======
    # Check if GitHub Actions redundancy script exists
    if [ -f "automation/enhanced-github-actions-redundancy.cjs" ]; then
        log "INFO" "Starting enhanced GitHub Actions redundancy..."
        node automation/enhanced-github-actions-redundancy.cjs start || {
            log "WARN" "Failed to start enhanced GitHub Actions redundancy"
        }
    fi
    
    # Check if backup workflows exist and are valid
    if [ -f ".github/workflows/marketing-sync-backup.yml" ] && [ ! -f ".github/workflows/marketing-sync.yml" ]; then
        log "INFO" "Restoring marketing-sync workflow from backup..."
        cp .github/workflows/marketing-sync-backup.yml .github/workflows/marketing-sync.yml
    fi
    
    if [ -f ".github/workflows/sync-health-backup.yml" ] && [ ! -f ".github/workflows/sync-health.yml" ]; then
        log "INFO" "Restoring sync-health workflow from backup..."
        cp .github/workflows/sync-health-backup.yml .github/workflows/sync-health.yml
    fi
    
    log "INFO" "GitHub Actions redundancy system started"
}

# Start Netlify Functions redundancy
start_netlify_functions_redundancy() {
    log "INFO" "Starting Netlify Functions redundancy system..."
    
    cd "$PROJECT_ROOT"
    
    # Check if Netlify Functions redundancy script exists
    if [ -f "automation/enhanced-netlify-functions-redundancy.cjs" ]; then
        log "INFO" "Starting enhanced Netlify Functions redundancy..."
        node automation/enhanced-netlify-functions-redundancy.cjs start || {
            log "WARN" "Failed to start enhanced Netlify Functions redundancy"
        }
    fi
    
    # Regenerate functions manifest if needed
    if [ ! -f "netlify/functions/functions-manifest.json" ] || [ "$(find netlify/functions/functions-manifest.json -mtime +1 2>/dev/null)" ]; then
        log "INFO" "Regenerating Netlify Functions manifest..."
        npm run netlify:manifest || {
            log "WARN" "Failed to regenerate Netlify Functions manifest"
        }
    fi
    
    log "INFO" "Netlify Functions redundancy system started"
}

# Start ultimate redundancy master
start_ultimate_redundancy_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Starting ultimate redundancy master system..."
        nohup node automation/ultimate-redundancy-master.cjs start > "$LOG_DIR/ultimate-redundancy-master.log" 2>&1 &
        local master_pid=$!
        echo $master_pid > "$PID_FILE"
        log "INFO" "Ultimate redundancy master started with PID $master_pid"
    else
        log "WARN" "Ultimate redundancy master script not found"
    fi
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting ultimate redundancy system..."
    
    ensure_log_directory
    check_requirements
    
    # Start PM2 redundancy
    start_pm2_redundancy
    
    # Start GitHub Actions redundancy
    start_github_actions_redundancy
    
    # Start Netlify Functions redundancy
    start_netlify_functions_redundancy
    
    # Start ultimate redundancy master
    start_ultimate_redundancy_master
    
    log "INFO" "Ultimate redundancy system started successfully"
    
    # Show status
    sleep 2
    show_status
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping ultimate redundancy system..."
    
    # Stop ultimate redundancy master
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping ultimate redundancy master (PID: $pid)..."
            kill "$pid" || true
            rm -f "$PID_FILE"
        fi
    fi
    
    # Stop PM2 processes
    cd "$PROJECT_ROOT"
    log "INFO" "Stopping PM2 redundancy processes..."
    pm2 stop ecosystem.comprehensive-redundancy.cjs || true
    pm2 stop ecosystem.redundancy.cjs || true
    pm2 stop ecosystem.pm2.cjs || true
    
    log "INFO" "Ultimate redundancy system stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting ultimate redundancy system..."
    stop_all
    sleep 2
    start_all
}

# Show system status
show_status() {
    log "INFO" "Ultimate redundancy system status:"
    
    cd "$PROJECT_ROOT"
    
    # PM2 status
    echo ""
    log "INFO" "=== PM2 Status ==="
    pm2 status --no-daemon || true
    
    # Process status
    echo ""
    log "INFO" "=== Process Status ==="
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Ultimate redundancy master: RUNNING (PID: $pid)"
        else
            log "WARN" "Ultimate redundancy master: NOT RUNNING (stale PID file)"
        fi
    else
        log "WARN" "Ultimate redundancy master: NOT RUNNING (no PID file)"
    fi
    echo
    
    # File status
    echo ""
    log "INFO" "=== File Status ==="
    local files=(
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.pm2.cjs"
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        "netlify/functions/functions-manifest.json"
    )
    
    for file in "${files[@]}"; do
        if [ -f "$file" ]; then
            log "INFO" "✅ $file exists"
        else
            log "WARN" "❌ $file missing"
        fi
    done
}

# Show logs
show_logs() {
    log "INFO" "Showing recent logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        echo ""
        log "INFO" "=== Ultimate Redundancy Logs ==="
        tail -50 "$LOG_DIR/ultimate-redundancy.log"
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-master.log" ]; then
        echo ""
        log "INFO" "=== Ultimate Redundancy Master Logs ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-master.log"
    fi
    
    echo ""
    log "INFO" "=== PM2 Logs ==="
    pm2 logs --lines 20 --nostream || true
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        node automation/ultimate-redundancy-master.cjs report || {
            log "WARN" "Failed to generate health report"
        }
    fi
    
    log "INFO" "Health report generated"
}

# Test redundancy systems
test_systems() {
    log "INFO" "Testing redundancy systems..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Running comprehensive health check..."
        node automation/ultimate-redundancy-master.cjs health || {
            log "WARN" "Health check failed"
        }
    fi
    
    log "INFO" "System test completed"
}

# Main function
main() {
    local command="${1:-start}"
    
    case $command in
        "start")
            check_lock
            create_lock
            trap remove_lock EXIT
            start_all
            ;;
        "stop")
            stop_all
            remove_lock
            ;;
        "restart")
            check_lock
            create_lock
            trap remove_lock EXIT
            restart_all
            ;;
        "status")
            show_status
            ;;
# Show system logs
show_logs() {
    log "INFO" "Showing Ultimate Redundancy Automation System logs..."
    
    if [[ -f "$LOG_DIR/ultimate-redundancy.log" ]]; then
        tail -f "$LOG_DIR/ultimate-redundancy.log"
    else
        log "WARN" "No log file found at: $LOG_DIR/ultimate-redundancy.log"
    fi
}

# Perform health check
health_check() {
    log "INFO" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs health
    else
        log "ERROR" "Node.js not found"
        return 1
    fi
}

# Perform comprehensive recovery
recover_system() {
    log "INFO" "Performing comprehensive system recovery..."
    
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs recover
    else
        log "ERROR" "Node.js not found"
        return 1
    fi
}

# Check individual component health
check_pm2() {
    log "INFO" "Checking PM2 health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs pm2
    fi
}

check_github() {
    log "INFO" "Checking GitHub Actions health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs github
    fi
}

check_netlify() {
    log "INFO" "Checking Netlify Functions health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs netlify
    fi
}

check_npm() {
    log "INFO" "Checking NPM scripts health..."
    cd "$WORKSPACE_DIR"
    if command -v node >/dev/null 2>&1; then
        node automation/ultimate-redundancy-automation-system.cjs npm
    fi
}

# Show help information
show_help() {
    cat << EOF
Ultimate Redundancy Automation System

Usage: $0 [COMMAND]

Commands:
    start       Start the ultimate redundancy automation system
    stop        Stop the ultimate redundancy automation system
    restart     Restart the ultimate redundancy automation system
    status      Check the status of the system
    logs        Show real-time logs
    health      Perform a comprehensive health check
    recover     Perform comprehensive system recovery
    pm2         Check PM2 automation health
    github      Check GitHub Actions health
    netlify     Check Netlify Functions health
    npm         Check NPM scripts health
    help        Show this help message

The Ultimate Redundancy Automation System provides comprehensive redundancy for:
- PM2 process automations
- GitHub Actions workflows
- Netlify Functions
- NPM script automations

All components are continuously monitored and automatically recovered when issues are detected.

EOF
}

# Main script logic
main() {
    local command="${1:-help}"
    
    case "$command" in
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
        "health")
            health_check
            ;;
        "recover")
            recover_system
            ;;
        "pm2")
            check_pm2
            ;;
        "github")
            check_github
            ;;
        "netlify")
            check_netlify
            ;;
        "npm")
            check_npm
            ;;
        "help"|"--help"|"-h")
            show_help
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            show_help
=======
        "logs")
            show_logs
            ;;
        "report")
            generate_report
            ;;
        "test")
            test_systems
            ;;
        "help"|"--help"|"-h")
            echo "Usage: $0 [start|stop|restart|status|logs|report|test|help]"
            echo ""
            echo "Commands:"
            echo "  start   - Start all redundancy systems"
            echo "  stop    - Stop all redundancy systems"
            echo "  restart - Restart all redundancy systems"
            echo "  status  - Show system status"
            echo "  logs    - Show recent logs"
            echo "  report  - Generate health report"
            echo "  test    - Test redundancy systems"
            echo "  help    - Show this help message"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"
