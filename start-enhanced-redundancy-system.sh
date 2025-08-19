#!/bin/bash

# Enhanced Redundancy System Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$SCRIPT_DIR/automation/logs"
PID_FILE="$LOG_DIR/enhanced-redundancy.pid"
STATUS_FILE="$LOG_DIR/enhanced-redundancy-status.json"

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
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/enhanced-redundancy-startup.log"
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE" 2>/dev/null)
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Enhanced redundancy system is already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Create necessary directories
setup_directories() {
    log "INFO" "Setting up directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$SCRIPT_DIR/automation/redundancy"
    mkdir -p "$SCRIPT_DIR/.github/workflows/backup"
    mkdir -p "$SCRIPT_DIR/netlify/functions/backup"
    mkdir -p "$SCRIPT_DIR/netlify/functions/redundant"
    
    log "INFO" "Directories created successfully"
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node >/dev/null 2>&1; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2)
    local required_version="20.0.0"
    
    if [ "$(printf '%s\n' "$required_version" "$node_version" | sort -V | head -n1)" != "$required_version" ]; then
        log "ERROR" "Node.js version $node_version is below required version $required_version"
        exit 1
    fi
    
    log "INFO" "Node.js version: $node_version ✓"
    
    # Check PM2
    if ! command -v pm2 >/dev/null 2>&1; then
        log "WARN" "PM2 is not installed, attempting to install..."
        npm install -g pm2 || {
            log "ERROR" "Failed to install PM2"
            exit 1
        }
    fi
    
    local pm2_version=$(pm2 --version 2>/dev/null || echo "unknown")
    log "INFO" "PM2 version: $pm2_version ✓"
    
    # Check required npm packages
    if [ ! -f "$SCRIPT_DIR/package-lock.json" ]; then
        log "WARN" "No package-lock.json found, installing dependencies..."
        cd "$SCRIPT_DIR" && npm install
    fi
    
    log "INFO" "System requirements check completed ✓"
}

# Start PM2 redundancy manager
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy manager..."
    
    cd "$SCRIPT_DIR"
    
    # Start the enhanced PM2 redundancy manager
    node automation/redundancy/enhanced-pm2-redundancy-manager.cjs &
    local pm2_pid=$!
    
    # Wait a moment for it to start
    sleep 3
    
    if ps -p "$pm2_pid" > /dev/null 2>&1; then
        log "INFO" "PM2 redundancy manager started (PID: $pm2_pid) ✓"
        echo "$pm2_pid" > "$LOG_DIR/pm2-redundancy.pid"
    else
        log "ERROR" "Failed to start PM2 redundancy manager"
        return 1
    fi
}

# Start GitHub Actions redundancy manager
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy manager..."
    
    cd "$SCRIPT_DIR"
    
    # Start the enhanced GitHub Actions redundancy manager
    node automation/redundancy/enhanced-github-actions-redundancy-manager.cjs &
    local github_pid=$!
    
    # Wait a moment for it to start
    sleep 3
    
    if ps -p "$github_pid" > /dev/null 2>&1; then
        log "INFO" "GitHub Actions redundancy manager started (PID: $github_pid) ✓"
        echo "$github_pid" > "$LOG_DIR/github-redundancy.pid"
    else
        log "ERROR" "Failed to start GitHub Actions redundancy manager"
        return 1
    fi
}

# Start Netlify Functions redundancy manager
start_netlify_redundancy() {
    log "INFO" "Starting Netlify Functions redundancy manager..."
    
    cd "$SCRIPT_DIR"
    
    # Start the enhanced Netlify Functions redundancy manager
    node automation/redundancy/enhanced-netlify-functions-redundancy-manager.cjs &
    local netlify_pid=$!
    
    # Wait a moment for it to start
    sleep 3
    
    if ps -p "$netlify_pid" > /dev/null 2>&1; then
        log "INFO" "Netlify Functions redundancy manager started (PID: $netlify_pid) ✓"
        echo "$LOG_DIR/netlify-redundancy.pid"
    else
        log "ERROR" "Failed to start Netlify Functions redundancy manager"
        return 1
    fi
}

# Start master orchestrator
start_master_orchestrator() {
    log "INFO" "Starting master redundancy orchestrator..."
    
    cd "$SCRIPT_DIR"
    
    # Start the enhanced master redundancy orchestrator
    node automation/redundancy/enhanced-master-redundancy-orchestrator.cjs &
    local master_pid=$!
    
    # Wait a moment for it to start
    sleep 5
    
    if ps -p "$master_pid" > /dev/null 2>&1; then
        log "INFO" "Master redundancy orchestrator started (PID: $master_pid) ✓"
        echo "$master_pid" > "$PID_FILE"
        
        # Update status
        update_status "running" "$master_pid"
    else
        log "ERROR" "Failed to start master redundancy orchestrator"
        return 1
    fi
}

# Update status file
update_status() {
    local status="$1"
    local pid="$2"
    
    cat > "$STATUS_FILE" << EOF
{
  "status": "$status",
  "pid": $pid,
  "started_at": "$(date -Iseconds)",
  "components": {
    "pm2_redundancy": "$(cat "$LOG_DIR/pm2-redundancy.pid" 2>/dev/null || 'unknown')",
    "github_redundancy": "$(cat "$LOG_DIR/github-redundancy.pid" 2>/dev/null || 'unknown')",
    "netlify_redundancy": "$(cat "$LOG_DIR/netlify-redundancy.pid" 2>/dev/null || 'unknown')",
    "master_orchestrator": "$pid"
  }
}
EOF
}

# Health check function
health_check() {
    log "INFO" "Performing health check..."
    
    local all_healthy=true
    
    # Check PM2 redundancy manager
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pm2_pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if ps -p "$pm2_pid" > /dev/null 2>&1; then
            log "INFO" "PM2 redundancy manager: RUNNING ✓"
        else
            log "ERROR" "PM2 redundancy manager: NOT RUNNING ✗"
            all_healthy=false
        fi
    else
        log "ERROR" "PM2 redundancy manager PID file not found ✗"
        all_healthy=false
    fi
    
    # Check GitHub Actions redundancy manager
    if [ -f "$LOG_DIR/github-redundancy.pid" ]; then
        local github_pid=$(cat "$LOG_DIR/github-redundancy.pid")
        if ps -p "$github_pid" > /dev/null 2>&1; then
            log "INFO" "GitHub Actions redundancy manager: RUNNING ✓"
        else
            log "ERROR" "GitHub Actions redundancy manager: NOT RUNNING ✗"
            all_healthy=false
        fi
    else
        log "ERROR" "GitHub Actions redundancy manager PID file not found ✗"
        all_healthy=false
    fi
    
    # Check Netlify Functions redundancy manager
    if [ -f "$LOG_DIR/netlify-redundancy.pid" ]; then
        local netlify_pid=$(cat "$LOG_DIR/netlify-redundancy.pid")
        if ps -p "$netlify_pid" > /dev/null 2>&1; then
            log "INFO" "Netlify Functions redundancy manager: RUNNING ✓"
        else
            log "ERROR" "Netlify Functions redundancy manager: NOT RUNNING ✗"
            all_healthy=false
        fi
    else
        log "ERROR" "Netlify Functions redundancy manager PID file not found ✗"
        all_healthy=false
    fi
    
    # Check master orchestrator
    if [ -f "$PID_FILE" ]; then
        local master_pid=$(cat "$PID_FILE")
        if ps -p "$master_pid" > /dev/null 2>&1; then
            log "INFO" "Master redundancy orchestrator: RUNNING ✓"
        else
            log "ERROR" "Master redundancy orchestrator: NOT RUNNING ✗"
            all_healthy=false
        fi
    else
        log "ERROR" "Master redundancy orchestrator PID file not found ✗"
        all_healthy=false
    fi
    
    if [ "$all_healthy" = true ]; then
        log "INFO" "All components are running successfully ✓"
        return 0
    else
        log "ERROR" "Some components are not running properly ✗"
        return 1
    fi
}

# Main startup function
main() {
    log "INFO" "Starting Enhanced Redundancy System..."
    log "INFO" "Script directory: $SCRIPT_DIR"
    log "INFO" "Log directory: $LOG_DIR"
    
    # Check if already running
    if check_running; then
        log "INFO" "System is already running, performing health check..."
        health_check
        exit 0
    fi
    
    # Setup and checks
    setup_directories
    check_requirements
    
    # Start components
    log "INFO" "Starting redundancy components..."
    
    if ! start_pm2_redundancy; then
        log "ERROR" "Failed to start PM2 redundancy, aborting..."
        exit 1
    fi
    
    if ! start_github_redundancy; then
        log "ERROR" "Failed to start GitHub Actions redundancy, aborting..."
        exit 1
    fi
    
    if ! start_netlify_redundancy; then
        log "ERROR" "Failed to start Netlify Functions redundancy, aborting..."
        exit 1
    fi
    
    if ! start_master_orchestrator; then
        log "ERROR" "Failed to start master orchestrator, aborting..."
        exit 1
    fi
    
    # Wait for system to stabilize
    log "INFO" "Waiting for system to stabilize..."
    sleep 10
    
    # Perform health check
    if health_check; then
        log "INFO" "Enhanced Redundancy System started successfully! ✓"
        log "INFO" "System is now monitoring and providing redundancy for:"
        log "INFO" "  - PM2 processes"
        log "INFO" "  - GitHub Actions workflows"
        log "INFO" "  - Netlify Functions"
        log "INFO" ""
        log "INFO" "Status file: $STATUS_FILE"
        log "INFO" "Logs directory: $LOG_DIR"
        log "INFO" ""
        log "INFO" "To stop the system, run: ./stop-enhanced-redundancy-system.sh"
        log "INFO" "To check status, run: ./check-enhanced-redundancy-status.sh"
    else
        log "ERROR" "System startup completed but health check failed"
        exit 1
    fi
}

# Trap signals for graceful shutdown
trap 'log "WARN" "Received interrupt signal, shutting down gracefully..."; exit 0' INT TERM

# Run main function
main "$@"