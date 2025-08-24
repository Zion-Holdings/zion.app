#!/bin/bash

# Enhanced Redundancy System Startup Script
# This script launches all redundancy automation systems for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_DIR="$WORKSPACE_DIR/automation/pids"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case "$level" in
        "INFO")
            echo -e "${BLUE}[$timestamp] [INFO]${NC} $message"
            ;;
        "WARN")
            echo -e "${YELLOW}[$timestamp] [WARN]${NC} $message"
            ;;
        "ERROR")
            echo -e "${RED}[$timestamp] [ERROR]${NC} $message"
            ;;
        "SUCCESS")
            echo -e "${GREEN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
}

# Error handling
error_exit() {
    log "ERROR" "Error on line $1: ${BASH_COMMAND}"
    exit 1
}

trap 'error_exit $LINENO' ERR

# Create necessary directories
create_directories() {
    log "INFO" "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$PID_DIR"
    
    log "SUCCESS" "Directories created successfully"
}

# Check prerequisites
check_prerequisites() {
    log "INFO" "Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local required_version="20.0.0"
    
    if ! command -v node-semver &> /dev/null; then
        # Simple version comparison
        if [[ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]]; then
            log "ERROR" "Node.js version $node_version is lower than required $required_version"
            exit 1
        fi
    fi
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed. Installing PM2..."
        npm install -g pm2
    fi
    
    # Check if Netlify CLI is available
    if ! command -v netlify &> /dev/null; then
        log "WARN" "Netlify CLI is not installed. Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    
    log "SUCCESS" "All prerequisites are satisfied"
}

# Load configuration
load_config() {
    log "INFO" "Loading configuration..."
    
    if [[ ! -f "$CONFIG_FILE" ]]; then
        log "WARN" "Configuration file not found, using defaults"
        return 0
    fi
    
    # Validate JSON
    if ! node -e "JSON.parse(require('fs').readFileSync('$CONFIG_FILE', 'utf8'))" 2>/dev/null; then
        log "ERROR" "Invalid JSON in configuration file"
        exit 1
    fi
    
    log "SUCCESS" "Configuration loaded successfully"
}

# Check if processes are already running
check_running_processes() {
    log "INFO" "Checking for already running processes..."
    
    local pm2_pid="$PID_DIR/pm2-redundancy.pid"
    local github_pid="$PID_DIR/github-actions-redundancy.pid"
    local netlify_pid="$PID_DIR/netlify-functions-redundancy.pid"
    local orchestrator_pid="$PID_DIR/master-orchestrator.pid"
    
    local processes_running=false
    
    if [[ -f "$pm2_pid" ]]; then
        if kill -0 "$(cat "$pm2_pid")" 2>/dev/null; then
            log "WARN" "PM2 redundancy process is already running (PID: $(cat "$pm2_pid"))"
            processes_running=true
        else
            log "INFO" "Removing stale PM2 PID file"
            rm -f "$pm2_pid"
        fi
    fi
    
    if [[ -f "$github_pid" ]]; then
        if kill -0 "$(cat "$github_pid")" 2>/dev/null; then
            log "WARN" "GitHub Actions redundancy process is already running (PID: $(cat "$github_pid"))"
            processes_running=true
        else
            log "INFO" "Removing stale GitHub Actions PID file"
            rm -f "$github_pid"
        fi
    fi
    
    if [[ -f "$netlify_pid" ]]; then
        if kill -0 "$(cat "$netlify_pid")" 2>/dev/null; then
            log "WARN" "Netlify functions redundancy process is already running (PID: $(cat "$netlify_pid"))"
            processes_running=true
        else
            log "INFO" "Removing stale Netlify functions PID file"
            rm -f "$netlify_pid"
        fi
    fi
    
    if [[ -f "$orchestrator_pid" ]]; then
        if kill -0 "$(cat "$orchestrator_pid")" 2>/dev/null; then
            log "WARN" "Master orchestrator process is already running (PID: $(cat "$orchestrator_pid"))"
            processes_running=true
        else
            log "INFO" "Removing stale master orchestrator PID file"
            rm -f "$orchestrator_pid"
        fi
    fi
    
    if [[ "$processes_running" == "true" ]]; then
        log "WARN" "Some redundancy processes are already running"
        read -p "Do you want to stop them and start fresh? (y/N): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            log "INFO" "Stopping existing processes..."
            "$SCRIPT_DIR/stop-enhanced-redundancy-system.sh"
        else
            log "INFO" "Continuing with existing processes..."
        fi
    fi
}

# Start PM2 redundancy system
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy system..."
    
    local pid_file="$PID_DIR/pm2-redundancy.pid"
    local log_file="$LOG_DIR/pm2-redundancy-startup.log"
    
    cd "$WORKSPACE_DIR"
    
    # Start PM2 redundancy in background
    nohup node automation/enhanced-pm2-redundancy.cjs start > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment and check if process is still running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "PM2 redundancy system started (PID: $pid)"
        return 0
    else
        log "ERROR" "PM2 redundancy system failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Start GitHub Actions redundancy system
start_github_actions_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy system..."
    
    local pid_file="$PID_DIR/github-actions-redundancy.pid"
    local log_file="$LOG_DIR/github-actions-redundancy-startup.log"
    
    cd "$WORKSPACE_DIR"
    
    # Start GitHub Actions redundancy in background
    nohup node automation/enhanced-github-actions-redundancy.cjs start > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment and check if process is still running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "GitHub Actions redundancy system started (PID: $pid)"
        return 0
    else
        log "ERROR" "GitHub Actions redundancy system failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Start Netlify functions redundancy system
start_netlify_functions_redundancy() {
    log "INFO" "Starting Netlify functions redundancy system..."
    
    local pid_file="$PID_DIR/netlify-functions-redundancy.pid"
    local log_file="$LOG_DIR/netlify-functions-redundancy-startup.log"
    
    cd "$WORKSPACE_DIR"
    
    # Start Netlify functions redundancy in background
    nohup node automation/enhanced-netlify-functions-redundancy.cjs start > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment and check if process is still running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Netlify functions redundancy system started (PID: $pid)"
        return 0
    else
        log "ERROR" "Netlify functions redundancy system failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Start master orchestrator
start_master_orchestrator() {
    log "INFO" "Starting master redundancy orchestrator..."
    
    local pid_file="$PID_DIR/master-orchestrator.pid"
    local log_file="$LOG_DIR/master-orchestrator-startup.log"
    
    cd "$WORKSPACE_DIR"
    
    # Start master orchestrator in background
    nohup node automation/master-redundancy-orchestrator.cjs start > "$log_file" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$pid_file"
    
    # Wait a moment and check if process is still running
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        log "SUCCESS" "Master redundancy orchestrator started (PID: $pid)"
        return 0
    else
        log "ERROR" "Master redundancy orchestrator failed to start"
        rm -f "$pid_file"
        return 1
    fi
}

# Wait for systems to stabilize
wait_for_stabilization() {
    log "INFO" "Waiting for systems to stabilize..."
    
    local max_wait=60
    local wait_time=0
    local interval=5
    
    while [[ $wait_time -lt $max_wait ]]; do
        local all_healthy=true
        
        # Check PM2 redundancy
        if [[ -f "$PID_DIR/pm2-redundancy.pid" ]]; then
            local pm2_pid=$(cat "$PID_DIR/pm2-redundancy.pid")
            if ! kill -0 "$pm2_pid" 2>/dev/null; then
                all_healthy=false
            fi
        fi
        
        # Check GitHub Actions redundancy
        if [[ -f "$PID_DIR/github-actions-redundancy.pid" ]]; then
            local github_pid=$(cat "$PID_DIR/github-actions-redundancy.pid")
            if ! kill -0 "$github_pid" 2>/dev/null; then
                all_healthy=false
            fi
        fi
        
        # Check Netlify functions redundancy
        if [[ -f "$PID_DIR/netlify-functions-redundancy.pid" ]]; then
            local netlify_pid=$(cat "$PID_DIR/netlify-functions-redundancy.pid")
            if ! kill -0 "$netlify_pid" 2>/dev/null; then
                all_healthy=false
            fi
        fi
        
        # Check master orchestrator
        if [[ -f "$PID_DIR/master-orchestrator.pid" ]]; then
            local orchestrator_pid=$(cat "$PID_DIR/master-orchestrator.pid")
            if ! kill -0 "$orchestrator_pid" 2>/dev/null; then
                all_healthy=false
            fi
        fi
        
        if [[ "$all_healthy" == "true" ]]; then
            log "SUCCESS" "All systems stabilized successfully"
            return 0
        fi
        
        log "INFO" "Waiting for systems to stabilize... ($((max_wait - wait_time))s remaining)"
        sleep $interval
        wait_time=$((wait_time + interval))
    done
    
    log "WARN" "Systems did not stabilize within expected time"
    return 1
}

# Perform health check
perform_health_check() {
    log "INFO" "Performing health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check PM2 redundancy health
    if node automation/enhanced-pm2-redundancy.cjs status > /dev/null 2>&1; then
        log "SUCCESS" "PM2 redundancy system is healthy"
    else
        log "WARN" "PM2 redundancy system health check failed"
    fi
    
    # Check GitHub Actions redundancy health
    if node automation/enhanced-github-actions-redundancy.cjs status > /dev/null 2>&1; then
        log "SUCCESS" "GitHub Actions redundancy system is healthy"
    else
        log "WARN" "GitHub Actions redundancy system health check failed"
    fi
    
    # Check Netlify functions redundancy health
    if node automation/enhanced-netlify-functions-redundancy.cjs status > /dev/null 2>&1; then
        log "SUCCESS" "Netlify functions redundancy system is healthy"
    else
        log "WARN" "Netlify functions redundancy system health check failed"
    fi
    
    # Check master orchestrator health
    if node automation/master-redundancy-orchestrator.cjs status > /dev/null 2>&1; then
        log "SUCCESS" "Master orchestrator is healthy"
    else
        log "WARN" "Master orchestrator health check failed"
    fi
}

# Display status
display_status() {
    log "INFO" "Enhanced redundancy system status:"
    echo
    
    local pm2_pid="$PID_DIR/pm2-redundancy.pid"
    local github_pid="$PID_DIR/github-actions-redundancy.pid"
    local netlify_pid="$PID_DIR/netlify-functions-redundancy.pid"
    local orchestrator_pid="$PID_DIR/master-orchestrator.pid"
    
    echo "┌─────────────────────────────────────────────────────────────┐"
    echo "│                    REDUNDANCY SYSTEM STATUS                │"
    echo "├─────────────────────────────────────────────────────────────┤"
    
    # PM2 Redundancy
    if [[ -f "$pm2_pid" ]] && kill -0 "$(cat "$pm2_pid")" 2>/dev/null; then
        echo "│ PM2 Redundancy:        ${GREEN}RUNNING${NC} (PID: $(cat "$pm2_pid"))"
    else
        echo "│ PM2 Redundancy:        ${RED}STOPPED${NC}"
    fi
    
    # GitHub Actions Redundancy
    if [[ -f "$github_pid" ]] && kill -0 "$(cat "$github_pid")" 2>/dev/null; then
        echo "│ GitHub Actions:        ${GREEN}RUNNING${NC} (PID: $(cat "$github_pid"))"
    else
        echo "│ GitHub Actions:        ${RED}STOPPED${NC}"
    fi
    
    # Netlify Functions Redundancy
    if [[ -f "$netlify_pid" ]] && kill -0 "$(cat "$netlify_pid")" 2>/dev/null; then
        echo "│ Netlify Functions:     ${GREEN}RUNNING${NC} (PID: $(cat "$netlify_pid"))"
    else
        echo "│ Netlify Functions:     ${RED}STOPPED${NC}"
    fi
    
    # Master Orchestrator
    if [[ -f "$orchestrator_pid" ]] && kill -0 "$(cat "$orchestrator_pid")" 2>/dev/null; then
        echo "│ Master Orchestrator:   ${GREEN}RUNNING${NC} (PID: $(cat "$orchestrator_pid"))"
    else
        echo "│ Master Orchestrator:   ${RED}STOPPED${NC}"
    fi
    
    echo "├─────────────────────────────────────────────────────────────┤"
    echo "│ Log Directory: $LOG_DIR"
    echo "│ PID Directory: $PID_DIR"
    echo "└─────────────────────────────────────────────────────────────┘"
    echo
}

# Main function
main() {
    log "INFO" "Starting enhanced redundancy system..."
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Script directory: $SCRIPT_DIR"
    
    # Create directories
    create_directories
    
    # Check prerequisites
    check_prerequisites
    
    # Load configuration
    load_config
    
    # Check for running processes
    check_running_processes
    
    # Start all systems
    local startup_success=true
    
    if ! start_pm2_redundancy; then
        startup_success=false
    fi
    
    if ! start_github_actions_redundancy; then
        startup_success=false
    fi
    
    if ! start_netlify_functions_redundancy; then
        startup_success=false
    fi
    
    if ! start_master_orchestrator; then
        startup_success=false
    fi
    
    if [[ "$startup_success" == "false" ]]; then
        log "ERROR" "Some systems failed to start. Check logs for details."
        exit 1
    fi
    
    # Wait for stabilization
    if wait_for_stabilization; then
        log "SUCCESS" "All systems started and stabilized successfully"
    else
        log "WARN" "Systems started but may not be fully stable"
    fi
    
    # Perform health check
    perform_health_check
    
    # Display final status
    display_status
    
    log "SUCCESS" "Enhanced redundancy system startup completed"
    log "INFO" "Use 'automation/stop-enhanced-redundancy-system.sh' to stop all systems"
    log "INFO" "Check logs in $LOG_DIR for detailed information"
}

# Run main function
main "$@"