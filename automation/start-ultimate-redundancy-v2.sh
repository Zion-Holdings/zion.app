#!/bin/bash

# Ultimate Redundancy System V2 Startup Script
# Comprehensive redundancy coverage for all automation systems

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
    
    # Check required npm packages
    if [ ! -f "$WORKSPACE_DIR/package-lock.json" ]; then
        log "WARN" "package-lock.json not found, installing dependencies..."
        cd "$WORKSPACE_DIR" && npm install || error_exit "Failed to install npm dependencies"
    fi
    
    log "INFO" "All dependencies satisfied"
}

# Create configuration file
create_config() {
    if [ ! -f "$CONFIG_FILE" ]; then
        log "INFO" "Creating configuration file..."
        cat > "$CONFIG_FILE" << EOF
{
  "system": {
    "name": "Ultimate Redundancy System V2",
    "version": "2.0.0",
    "description": "Comprehensive redundancy coverage for all automation systems"
  },
  "redundancy": {
    "pm2": {
      "enabled": true,
      "checkInterval": 30000,
      "maxRetries": 5,
      "autoRecovery": true
    },
    "github": {
      "enabled": true,
      "checkInterval": 60000,
      "workflowValidation": true,
      "backupTriggers": true
    },
    "netlify": {
      "enabled": true,
      "checkInterval": 120000,
      "functionValidation": true,
      "autoDeploy": true
    },
    "custom": {
      "enabled": true,
      "checkInterval": 300000,
      "syntaxValidation": true,
      "autoRestart": true
    }
  },
  "monitoring": {
    "healthCheckInterval": 60000,
    "systemResourceMonitoring": true,
    "networkConnectivityCheck": true,
    "gitStatusMonitoring": true
  },
  "logging": {
    "level": "INFO",
    "fileRotation": true,
    "maxLogSize": "10MB",
    "retainLogs": 30
  }
}
EOF
        log "INFO" "Configuration file created: $CONFIG_FILE"
    fi
}

# Start the redundancy system
start_system() {
    log "INFO" "Starting Ultimate Redundancy System V2..."
    
    if check_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    if check_lock; then
        log "WARN" "System is locked, another instance may be starting"
        return 1
    fi
    
    acquire_lock
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Start the redundancy system
    nohup node "$SCRIPT_DIR/ultimate-redundancy-system-v2.cjs" > "$LOG_DIR/ultimate-redundancy-v2.out" 2>&1 &
    local pid=$!
    
    # Wait a moment to check if it started successfully
    sleep 2
    
    if kill -0 "$pid" 2>/dev/null; then
        echo "$pid" > "$PID_FILE"
        log "INFO" "Ultimate Redundancy System V2 started successfully (PID: $pid)"
        
        # Start PM2 ecosystem for redundancy
        if [ -f "$WORKSPACE_DIR/ecosystem.comprehensive-redundancy.cjs" ]; then
            log "INFO" "Starting PM2 comprehensive redundancy ecosystem..."
            pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || log "WARN" "Failed to start PM2 ecosystem"
        fi
        
        # Start additional PM2 processes for redundancy
        log "INFO" "Starting additional PM2 redundancy processes..."
        pm2 start "$SCRIPT_DIR/enhanced-pm2-redundancy.cjs" --name "enhanced-pm2-redundancy-v2" || log "WARN" "Failed to start enhanced PM2 redundancy"
        pm2 start "$SCRIPT_DIR/enhanced-github-actions-redundancy.cjs" --name "enhanced-github-redundancy-v2" || log "WARN" "Failed to start enhanced GitHub redundancy"
        pm2 start "$SCRIPT_DIR/enhanced-netlify-functions-redundancy.cjs" --name "enhanced-netlify-redundancy-v2" || log "WARN" "Failed to start enhanced Netlify redundancy"
        
        # Save PM2 configuration
        pm2 save || log "WARN" "Failed to save PM2 configuration"
        
        log "INFO" "All redundancy systems started successfully"
    else
        log "ERROR" "Failed to start Ultimate Redundancy System V2"
        release_lock
        return 1
    fi
    
    release_lock
}

# Stop the redundancy system
stop_system() {
    log "INFO" "Stopping Ultimate Redundancy System V2..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping main process (PID: $pid)..."
            kill "$pid" || log "WARN" "Failed to stop main process"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                count=$((count + 1))
            done
            
            if kill -0 "$pid" 2>/dev/null; then
                log "WARN" "Force killing process..."
                kill -9 "$pid" || true
            fi
        fi
        
        rm -f "$PID_FILE"
    fi
    
    # Stop PM2 redundancy processes
    log "INFO" "Stopping PM2 redundancy processes..."
    pm2 stop enhanced-pm2-redundancy-v2 2>/dev/null || true
    pm2 stop enhanced-github-redundancy-v2 2>/dev/null || true
    pm2 stop enhanced-netlify-redundancy-v2 2>/dev/null || true
    pm2 stop master-redundancy-orchestrator 2>/dev/null || true
    pm2 stop enhanced-pm2-redundancy 2>/dev/null || true
    pm2 stop enhanced-github-actions-redundancy 2>/dev/null || true
    pm2 stop enhanced-netlify-functions-redundancy 2>/dev/null || true
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "Ultimate Redundancy System V2 stopped"
}

# Restart the redundancy system
restart_system() {
    log "INFO" "Restarting Ultimate Redundancy System V2..."
    stop_system
    sleep 2
    start_system
}

# Check system status
check_status() {
    log "INFO" "Checking Ultimate Redundancy System V2 status..."
    
    local all_healthy=true
    
    # Check main process
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}✓ Main redundancy system is running (PID: $pid)${NC}"
        else
            echo -e "${RED}✗ Main redundancy system is not running (stale PID file)${NC}"
            all_healthy=false
        fi
    else
        echo -e "${RED}✗ Main redundancy system is not running${NC}"
        all_healthy=false
    fi
    
    # Check PM2 processes
    echo -e "\n${BLUE}PM2 Redundancy Processes:${NC}"
    local pm2_processes=(
        "enhanced-pm2-redundancy-v2"
        "enhanced-github-redundancy-v2"
        "enhanced-netlify-redundancy-v2"
        "master-redundancy-orchestrator"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
    )
    
    for process in "${pm2_processes[@]}"; do
        if pm2 describe "$process" >/dev/null 2>&1; then
            local status=$(pm2 jlist | jq -r ".[] | select(.name == \"$process\") | .pm2_env.status" 2>/dev/null || echo "unknown")
            if [ "$status" = "online" ]; then
                echo -e "  ${GREEN}✓ $process: $status${NC}"
            else
                echo -e "  ${YELLOW}⚠ $process: $status${NC}"
                all_healthy=false
            fi
        else
            echo -e "  ${RED}✗ $process: not found${NC}"
            all_healthy=false
        fi
    done
    
    # Check log files
    echo -e "\n${BLUE}Log Files:${NC}"
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        local log_size=$(du -h "$LOG_DIR/ultimate-redundancy-v2.log" | cut -f1)
        echo -e "  ${GREEN}✓ Main log: $log_size${NC}"
    else
        echo -e "  ${RED}✗ Main log: not found${NC}"
        all_healthy=false
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.out" ]; then
        local out_size=$(du -h "$LOG_DIR/ultimate-redundancy-v2.out" | cut -f1)
        echo -e "  ${GREEN}✓ Output log: $out_size${NC}"
    else
        echo -e "  ${RED}✗ Output log: not found${NC}"
        all_healthy=false
    fi
    
    # Overall status
    echo -e "\n${BLUE}Overall Status:${NC}"
    if [ "$all_healthy" = true ]; then
        echo -e "  ${GREEN}✓ System is healthy and running${NC}"
    else
        echo -e "  ${RED}✗ System has issues${NC}"
    fi
    
    # Show recent logs
    echo -e "\n${BLUE}Recent Logs:${NC}"
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        tail -n 10 "$LOG_DIR/ultimate-redundancy-v2.log" | while read -r line; do
            echo "  $line"
        done
    fi
}

# Show system logs
show_logs() {
    log "INFO" "Showing Ultimate Redundancy System V2 logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.log" ]; then
        echo -e "${BLUE}Main Log File:${NC}"
        tail -n 50 "$LOG_DIR/ultimate-redundancy-v2.log"
    else
        echo -e "${RED}Main log file not found${NC}"
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-v2.out" ]; then
        echo -e "\n${BLUE}Output Log File:${NC}"
        tail -n 50 "$LOG_DIR/ultimate-redundancy-v2.out"
    else
        echo -e "${RED}Output log file not found${NC}"
    fi
}

# Show system health
show_health() {
    log "INFO" "Showing Ultimate Redundancy System V2 health..."
    
    # Check system resources
    echo -e "${BLUE}System Resources:${NC}"
    echo "  Memory: $(free -h | grep Mem | awk '{print $3"/"$2}')"
    echo "  Disk: $(df -h . | tail -1 | awk '{print $3"/"$2" ("$5")"}')"
    echo "  Load: $(uptime | awk -F'load average:' '{print $2}')"
    
    # Check PM2 status
    echo -e "\n${BLUE}PM2 Status:${NC}"
    pm2 status --no-daemon || echo "  PM2 not available"
    
    # Check Git status
    echo -e "\n${BLUE}Git Status:${NC}"
    if [ -d "$WORKSPACE_DIR/.git" ]; then
        cd "$WORKSPACE_DIR"
        local git_status=$(git status --porcelain 2>/dev/null || echo "Git status unavailable")
        if [ -n "$git_status" ]; then
            echo "  Uncommitted changes detected"
        else
            echo "  Repository is clean"
        fi
    else
        echo "  Not a Git repository"
    fi
    
    # Check network connectivity
    echo -e "\n${BLUE}Network Connectivity:${NC}"
    if ping -c 1 8.8.8.8 >/dev/null 2>&1; then
        echo "  ✓ Internet connectivity: OK"
    else
        echo "  ✗ Internet connectivity: Failed"
    fi
}

# Main function
main() {
    local action="${1:-start}"
    
    case "$action" in
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
            check_status
            ;;
        logs)
            show_logs
            ;;
        health)
            show_health
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|logs|health}"
            echo ""
            echo "Actions:"
            echo "  start   - Start the Ultimate Redundancy System V2"
            echo "  stop    - Stop the Ultimate Redundancy System V2"
            echo "  restart - Restart the Ultimate Redundancy System V2"
            echo "  status  - Check system status"
            echo "  logs    - Show system logs"
            echo "  health  - Show system health information"
            exit 1
            ;;
    esac
}

# Run main function
main "$@"