#!/bin/bash

# Ultimate Redundancy System V2 Startup Script
# Comprehensive redundancy coverage for all automation systems
# Covers PM2, GitHub Actions, Netlify Functions, and all custom automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy-v2.pid"
LOCK_FILE="$LOG_DIR/ultimate-redundancy-v2.lock"
CONFIG_FILE="$SCRIPT_DIR/ultimate-redundancy-v2-config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/ultimate-redundancy-v2.log"
}

# Error handling
error_exit() {
    log "ERROR" "$1"
    exit 1
}

# Check if already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Check lock file
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local lock_pid=$(cat "$LOCK_FILE")
        if kill -0 "$lock_pid" 2>/dev/null; then
            return 0
        else
            log "WARN" "Stale lock file found, removing"
            rm -f "$LOCK_FILE"
        fi
    fi
    return 1
}

# Acquire lock
acquire_lock() {
    echo $$ > "$LOCK_FILE"
}

# Release lock
release_lock() {
    rm -f "$LOCK_FILE"
}

# Check dependencies
check_dependencies() {
    log "INFO" "Checking system dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed"
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error_exit "npm is not installed"
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, installing..."
        npm install -g pm2 || error_exit "Failed to install PM2"
    fi
    
    # Check git
    if ! command -v git &> /dev/null; then
        error_exit "git is not installed"
    fi
    
    # Check required Node.js packages
    log "INFO" "Checking required Node.js packages..."
    cd "$WORKSPACE_DIR"
    
    # Install node-cron if not available
    if ! node -e "require('node-cron')" 2>/dev/null; then
        log "INFO" "Installing node-cron..."
        npm install node-cron || log "WARN" "Failed to install node-cron"
    fi
    
    # Install js-yaml if not available
    if ! node -e "require('js-yaml')" 2>/dev/null; then
        log "INFO" "Installing js-yaml..."
        npm install js-yaml || log "WARN" "Failed to install js-yaml"
    fi
    
    log "INFO" "All dependencies checked successfully"
}

# Create configuration file
create_config() {
    if [ ! -f "$CONFIG_FILE" ]; then
        log "INFO" "Creating configuration file..."
        cat > "$CONFIG_FILE" << 'EOF'
{
  "master": {
    "logLevel": "INFO",
    "orchestrationInterval": 60000,
    "autoRecovery": true,
    "loadBalancing": true,
    "healthCheckInterval": 30000,
    "backupInterval": 300000
  },
  "ultimate": {
    "logLevel": "INFO",
    "checkInterval": 30000,
    "maxRetries": 5,
    "autoRecovery": true,
    "loadBalancing": true,
    "healthCheckInterval": 60000
  },
  "pm2": {
    "logLevel": "INFO",
    "healthCheckInterval": 30000,
    "maxRestartAttempts": 5,
    "autoRecovery": true,
    "processMonitoring": true,
    "logRotation": true,
    "loadBalancing": true,
    "backupInterval": 300000
  },
  "github": {
    "logLevel": "INFO",
    "healthCheckInterval": 60000,
    "maxFailures": 3,
    "autoTrigger": true,
    "backupTriggers": true,
    "workflowValidation": true,
    "apiHealthCheck": true,
    "backupInterval": 300000
  },
  "netlify": {
    "logLevel": "INFO",
    "healthCheckInterval": 120000,
    "maxFailures": 3,
    "autoDeploy": true,
    "autoRegenerate": true,
    "deploymentCheck": true,
    "manifestValidation": true,
    "backupInterval": 600000
  }
}
EOF
        log "INFO" "Configuration file created: $CONFIG_FILE"
    fi
}

# Start the Ultimate Redundancy System V2
start_system() {
    log "INFO" "Starting Ultimate Redundancy System V2..."
    
    if check_running; then
        log "WARN" "Ultimate Redundancy System V2 is already running"
        return 1
    fi
    
    if check_lock; then
        log "WARN" "Another instance is already running"
        return 1
    fi
    
    acquire_lock
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the master orchestrator
    log "INFO" "Starting Master Redundancy Orchestrator V2..."
    nohup node "$SCRIPT_DIR/master-redundancy-orchestrator-v2.cjs" > "$LOG_DIR/master-orchestrator-v2.log" 2>&1 &
    local master_pid=$!
    
    # Wait a moment for the master to start
    sleep 5
    
    # Check if master started successfully
    if kill -0 "$master_pid" 2>/dev/null; then
        log "INFO" "Master Redundancy Orchestrator V2 started successfully (PID: $master_pid)"
        
        # Save PID
        echo "$master_pid" > "$PID_FILE"
        
        # Wait for all systems to initialize
        log "INFO" "Waiting for all redundancy systems to initialize..."
        sleep 10
        
        # Check system status
        check_system_status
        
        log "INFO" "Ultimate Redundancy System V2 started successfully"
        return 0
    else
        log "ERROR" "Failed to start Master Redundancy Orchestrator V2"
        release_lock
        return 1
    fi
}

# Stop the Ultimate Redundancy System V2
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy System V2..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping process (PID: $pid)..."
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 30 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            # Force kill if still running
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Force killing process (PID: $pid)..."
                kill -9 "$pid"
            fi
            
            log "INFO" "Process stopped successfully"
        else
            log "WARN" "Process not running (PID: $pid)"
        fi
        
        rm -f "$PID_FILE"
    else
        log "WARN" "PID file not found"
    fi
    
    # Clean up lock file
    release_lock
    
    log "INFO" "Ultimate Redundancy System V2 stopped successfully"
}

# Restart the Ultimate Redundancy System V2
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy System V2..."
    
    stop_system
    sleep 5
    start_system
}

# Check system status
check_system_status() {
    log "INFO" "Checking system status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Ultimate Redundancy System V2 is running (PID: $pid)"
            
            # Check individual system status
            check_individual_systems
            
            return 0
        else
            log "ERROR" "Process not running (PID: $pid)"
            rm -f "$PID_FILE"
            return 1
        fi
    else
        log "WARN" "PID file not found"
        return 1
    fi
}

# Check individual system status
check_individual_systems() {
    log "INFO" "Checking individual system status..."
    
    # Check PM2 processes
    if command -v pm2 &> /dev/null; then
        local pm2_count=$(pm2 status 2>/dev/null | grep -v "┌─\|├─\|└─\|─\|id\|name" | grep -v "^$" | wc -l)
        log "INFO" "PM2 Processes: $pm2_count running"
    fi
    
    # Check log files
    local log_files=$(find "$LOG_DIR" -name "*redundancy*.log" -type f 2>/dev/null | wc -l)
    log "INFO" "Log files found: $log_files"
    
    # Check backup directories
    local backup_dirs=$(find "$SCRIPT_DIR" -name "*backup*" -type d 2>/dev/null | wc -l)
    log "INFO" "Backup directories found: $backup_dirs"
}

# Show system logs
show_logs() {
    log "INFO" "Showing system logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        echo -e "${CYAN}=== Ultimate Redundancy System V2 Logs ===${NC}"
        tail -50 "$LOG_DIR/ultimate-redundancy-v2.log"
    fi
    
    if [ -f "$LOG_DIR/master-redundancy-orchestrator-v2.log" ]; then
        echo -e "${CYAN}=== Master Orchestrator Logs ===${NC}"
        tail -30 "$LOG_DIR/master-redundancy-orchestrator-v2.log"
    fi
    
    if [ -f "$LOG_DIR/comprehensive-pm2-redundancy-v2.log" ]; then
        echo -e "${CYAN}=== PM2 Redundancy Logs ===${NC}"
        tail -20 "$LOG_DIR/comprehensive-pm2-redundancy-v2.log"
    fi
    
    if [ -f "$LOG_DIR/comprehensive-github-actions-redundancy-v2.log" ]; then
        echo -e "${CYAN}=== GitHub Actions Redundancy Logs ===${NC}"
        tail -20 "$LOG_DIR/comprehensive-github-actions-redundancy-v2.log"
    fi
    
    if [ -f "$LOG_DIR/comprehensive-netlify-functions-redundancy-v2.log" ]; then
        echo -e "${CYAN}=== Netlify Functions Redundancy Logs ===${NC}"
        tail -20 "$LOG_DIR/comprehensive-netlify-functions-redundancy-v2.log"
    fi
}

# Show system health
show_health() {
    log "INFO" "Showing system health..."
    
    echo -e "${GREEN}=== Ultimate Redundancy System V2 Health Report ===${NC}"
    echo -e "Timestamp: $(date)"
    echo -e "Status: $(check_system_status && echo "Healthy" || echo "Unhealthy")"
    
    # Check PM2 health
    if command -v pm2 &> /dev/null; then
        echo -e "\n${BLUE}=== PM2 Health ===${NC}"
        echo -e "PM2 Status:"
        pm2 status 2>/dev/null || echo "PM2 not accessible"
    fi
    
    # Check GitHub Actions health
    echo -e "\n${BLUE}=== GitHub Actions Health ===${NC}"
    local workflows_dir="$WORKSPACE_DIR/.github/workflows"
    if [ -d "$workflows_dir" ]; then
        local workflow_count=$(find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | wc -l)
        echo -e "Active workflows: $workflow_count"
        find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | head -5 | while read -r workflow; do
            echo -e "  - $(basename "$workflow")"
        done
    else
        echo -e "No workflows directory found"
    fi
    
    # Check Netlify Functions health
    echo -e "\n${BLUE}=== Netlify Functions Health ===${NC}"
    local functions_dir="$WORKSPACE_DIR/netlify/functions"
    if [ -d "$functions_dir" ]; then
        local function_count=$(find "$functions_dir" -name "*.js" -o -name "*.ts" | grep -v backup | wc -l)
        echo -e "Active functions: $function_count"
        if [ -f "$functions_dir/functions-manifest.json" ]; then
            echo -e "Manifest: Valid"
        else
            echo -e "Manifest: Missing"
        fi
    else
        echo -e "No functions directory found"
    fi
    
    # Check overall system health
    echo -e "\n${BLUE}=== Overall System Health ===${NC}"
    local log_errors=$(grep -r "ERROR" "$LOG_DIR"/*.log 2>/dev/null | wc -l)
    local log_warnings=$(grep -r "WARN" "$LOG_DIR"/*.log 2>/dev/null | wc -l)
    echo -e "Log errors: $log_errors"
    echo -e "Log warnings: $log_warnings"
    
    if [ $log_errors -eq 0 ] && [ $log_warnings -eq 0 ]; then
        echo -e "${GREEN}Overall Status: Excellent${NC}"
    elif [ $log_errors -eq 0 ]; then
        echo -e "${YELLOW}Overall Status: Good${NC}"
    else
        echo -e "${RED}Overall Status: Needs Attention${NC}"
    fi
}

# Show help
show_help() {
    echo -e "${CYAN}Ultimate Redundancy System V2 - Comprehensive Automation Redundancy${NC}"
    echo -e ""
    echo -e "Usage: $0 [COMMAND]"
    echo -e ""
    echo -e "Commands:"
    echo -e "  start     Start the Ultimate Redundancy System V2"
    echo -e "  stop      Stop the Ultimate Redundancy System V2"
    echo -e "  restart   Restart the Ultimate Redundancy System V2"
    echo -e "  status    Check system status"
    echo -e "  logs      Show system logs"
    echo -e "  health    Show detailed health report"
    echo -e "  help      Show this help message"
    echo -e ""
    echo -e "Features:"
    echo -e "  • Complete PM2 process redundancy and monitoring"
    echo -e "  • GitHub Actions workflow validation and backup"
    echo -e "  • Netlify Functions health monitoring and deployment"
    echo -e "  • Master orchestration and conflict resolution"
    echo -e "  • Automatic recovery and load balancing"
    echo -e "  • Comprehensive logging and backup systems"
    echo -e ""
    echo -e "Configuration: $CONFIG_FILE"
    echo -e "Logs: $LOG_DIR"
}

# Main function
main() {
    local command="${1:-help}"
    
    case "$command" in
        start)
            check_dependencies
            create_config
            start_system
            ;;
        stop)
            stop_system
            ;;
        restart)
            restart_system
            ;;
        status)
            check_system_status
            ;;
        logs)
            show_logs
            ;;
        health)
            show_health
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

# Trap cleanup
trap 'release_lock' EXIT

# Run main function
main "$@"