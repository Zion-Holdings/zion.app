#!/bin/bash

# Ultimate Redundancy System Startup Script
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
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy.pid"
CONFIG_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-config.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Logging function
log() {
    local level="$1"
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_DIR/ultimate-redundancy.log"
}

# Error handling
error_exit() {
    log "ERROR" "$1"
    exit 1
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        log "WARN" "Running as root is not recommended for security reasons"
    fi
}

# Check dependencies
check_dependencies() {
    log "INFO" "Checking system dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error_exit "Node.js is not installed or not in PATH"
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error_exit "npm is not installed or not in PATH"
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed. Installing PM2..."
        npm install -g pm2 || error_exit "Failed to install PM2"
    fi
    
    # Check git
    if ! command -v git &> /dev/null; then
        error_exit "git is not installed or not in PATH"
    fi
    
    log "INFO" "All dependencies are satisfied"
}

# Initialize configuration
init_config() {
    if [[ ! -f "$CONFIG_FILE" ]]; then
        log "INFO" "Creating default configuration..."
        cat > "$CONFIG_FILE" << EOF
{
  "pm2": {
    "enabled": true,
    "ecosystemFiles": [
      "ecosystem.pm2.cjs",
      "ecosystem.redundancy.cjs",
      "ecosystem.comprehensive-redundancy.cjs"
    ],
    "autoRestart": true,
    "healthCheckInterval": 30000
  },
  "github": {
    "enabled": true,
    "workflows": [
      "marketing-sync",
      "sync-health",
      "marketing-sync-backup",
      "sync-health-backup"
    ],
    "backupEnabled": true,
    "healthCheckInterval": 60000
  },
  "netlify": {
    "enabled": true,
    "autoDeploy": true,
    "autoRegenerate": true,
    "healthCheckInterval": 120000
  },
  "general": {
    "logLevel": "INFO",
    "masterCheckInterval": 60000,
    "autoRecovery": true,
    "loadBalancing": true
  }
}
EOF
        log "INFO" "Configuration file created at $CONFIG_FILE"
    fi
}

# Start PM2 redundancy
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy system..."
    
    # Check if PM2 is running
    if ! pm2 ping &> /dev/null; then
        log "INFO" "Starting PM2 daemon..."
        pm2 start
    fi
    
    # Start comprehensive redundancy ecosystem
    if [[ -f "$WORKSPACE_DIR/ecosystem.comprehensive-redundancy.cjs" ]]; then
        log "INFO" "Starting comprehensive PM2 redundancy ecosystem..."
        pm2 start "$WORKSPACE_DIR/ecosystem.comprehensive-redundancy.cjs" --update-env || log "WARN" "Failed to start comprehensive ecosystem"
    fi
    
    # Start individual redundancy processes
    log "INFO" "Starting individual PM2 redundancy processes..."
    
    # Start master redundancy orchestrator
    if [[ -f "$WORKSPACE_DIR/automation/master-redundancy-orchestrator.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/master-redundancy-orchestrator.cjs" --name "master-redundancy-orchestrator" --update-env || log "WARN" "Failed to start master orchestrator"
    fi
    
    # Start enhanced PM2 redundancy
    if [[ -f "$WORKSPACE_DIR/automation/enhanced-pm2-redundancy.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/enhanced-pm2-redundancy.cjs" --name "enhanced-pm2-redundancy" --update-env || log "WARN" "Failed to start enhanced PM2 redundancy"
    fi
    
    # Start enhanced GitHub Actions redundancy
    if [[ -f "$WORKSPACE_DIR/automation/enhanced-github-actions-redundancy.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/enhanced-github-actions-redundancy.cjs" --name "enhanced-github-actions-redundancy" --update-env || log "WARN" "Failed to start GitHub Actions redundancy"
    fi
    
    # Start enhanced Netlify functions redundancy
    if [[ -f "$WORKSPACE_DIR/automation/enhanced-netlify-functions-redundancy.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/enhanced-netlify-functions-redundancy.cjs" --name "enhanced-netlify-functions-redundancy" --update-env || log "WARN" "Failed to start Netlify functions redundancy"
    fi
    
    # Start legacy redundancy systems
    if [[ -f "$WORKSPACE_DIR/automation/redundancy-automation-system.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/redundancy-automation-system.cjs" --name "redundancy-automation-system" --update-env || log "WARN" "Failed to start legacy redundancy system"
    fi
    
    if [[ -f "$WORKSPACE_DIR/automation/redundancy-health-monitor.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/redundancy-health-monitor.cjs" --name "redundancy-health-monitor" --update-env || log "WARN" "Failed to start health monitor"
    fi
    
    # Start ultimate redundancy orchestrator
    if [[ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-orchestrator.cjs" ]]; then
        pm2 start "$WORKSPACE_DIR/automation/ultimate-redundancy-orchestrator.cjs" --name "ultimate-redundancy-orchestrator" --update-env || log "WARN" "Failed to start ultimate orchestrator"
    fi
    
    log "INFO" "PM2 redundancy system started"
}

# Start GitHub Actions redundancy
start_github_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy system..."
    
    # Check if backup workflows exist
    for workflow in "marketing-sync-backup" "sync-health-backup"; do
        if [[ -f "$WORKSPACE_DIR/.github/workflows/$workflow.yml" ]]; then
            log "INFO" "Backup workflow $workflow exists and ready"
        else
            log "WARN" "Backup workflow $workflow missing"
        fi
    done
    
    # Validate main workflows
    for workflow in "marketing-sync" "sync-health"; do
        if [[ -f "$WORKSPACE_DIR/.github/workflows/$workflow.yml" ]]; then
            log "INFO" "Main workflow $workflow validated"
        else
            log "ERROR" "Main workflow $workflow missing"
        fi
    done
    
    log "INFO" "GitHub Actions redundancy system started"
}

# Start Netlify functions redundancy
start_netlify_redundancy() {
    log "INFO" "Starting Netlify functions redundancy system..."
    
    # Check functions manifest
    if [[ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]]; then
        log "INFO" "Netlify functions manifest found"
        
        # Regenerate manifest if needed
        if [[ -f "$WORKSPACE_DIR/scripts/generate-netlify-functions-manifest.cjs" ]]; then
            log "INFO" "Regenerating Netlify functions manifest..."
            cd "$WORKSPACE_DIR"
            node scripts/generate-netlify-functions-manifest.cjs || log "WARN" "Failed to regenerate manifest"
        fi
    else
        log "WARN" "Netlify functions manifest not found"
    fi
    
    # Check functions directory
    if [[ -d "$WORKSPACE_DIR/netlify/functions" ]]; then
        local function_count=$(find "$WORKSPACE_DIR/netlify/functions" -name "*.js" -o -name "*.ts" | wc -l)
        log "INFO" "Found $function_count Netlify function files"
    fi
    
    log "INFO" "Netlify functions redundancy system started"
}

# Start ultimate redundancy orchestrator
start_ultimate_orchestrator() {
    log "INFO" "Starting ultimate redundancy orchestrator..."
    
    if [[ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-orchestrator.cjs" ]]; then
        # Start the orchestrator in the background
        cd "$WORKSPACE_DIR"
        nohup node automation/ultimate-redundancy-orchestrator.cjs start > "$LOG_DIR/ultimate-orchestrator.log" 2>&1 &
        local pid=$!
        echo $pid > "$PID_FILE"
        log "INFO" "Ultimate redundancy orchestrator started with PID $pid"
    else
        error_exit "Ultimate redundancy orchestrator not found"
    fi
}

# Start all systems
start_all() {
    log "INFO" "Starting ultimate redundancy system..."
    
    check_root
    check_dependencies
    init_config
    
    # Start individual redundancy systems
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_ultimate_orchestrator
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "Ultimate redundancy system started successfully"
    log "INFO" "Check status with: $0 status"
    log "INFO" "View logs with: $0 logs"
}

# Stop all systems
stop_all() {
    log "INFO" "Stopping ultimate redundancy system..."
    
    # Stop ultimate orchestrator
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid" || log "WARN" "Failed to kill orchestrator process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop PM2 processes
    log "INFO" "Stopping PM2 redundancy processes..."
    pm2 stop "master-redundancy-orchestrator" "enhanced-pm2-redundancy" "enhanced-github-actions-redundancy" "enhanced-netlify-functions-redundancy" "ultimate-redundancy-orchestrator" "redundancy-automation-system" "redundancy-health-monitor" 2>/dev/null || true
    
    # Stop comprehensive ecosystem
    pm2 stop ecosystem.comprehensive-redundancy.cjs 2>/dev/null || true
    
    log "INFO" "Ultimate redundancy system stopped"
}

# Restart all systems
restart_all() {
    log "INFO" "Restarting ultimate redundancy system..."
    stop_all
    sleep 2
    start_all
}

# Check system status
check_status() {
    log "INFO" "Checking ultimate redundancy system status..."
    
    echo -e "${BLUE}=== Ultimate Redundancy System Status ===${NC}"
    
    # Check ultimate orchestrator
    if [[ -f "$PID_FILE" ]]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "${GREEN}✓ Ultimate orchestrator running (PID: $pid)${NC}"
        else
            echo -e "${RED}✗ Ultimate orchestrator not running${NC}"
        fi
    else
        echo -e "${RED}✗ Ultimate orchestrator PID file not found${NC}"
    fi
    
    # Check PM2 status
    echo -e "\n${BLUE}=== PM2 Status ===${NC}"
    if command -v pm2 &> /dev/null; then
        pm2 status --no-daemon || echo -e "${RED}Failed to get PM2 status${NC}"
    else
        echo -e "${RED}PM2 not installed${NC}"
    fi
    
    # Check GitHub workflows
    echo -e "\n${BLUE}=== GitHub Workflows ===${NC}"
    for workflow in "marketing-sync" "sync-health" "marketing-sync-backup" "sync-health-backup"; do
        if [[ -f "$WORKSPACE_DIR/.github/workflows/$workflow.yml" ]]; then
            echo -e "${GREEN}✓ $workflow workflow exists${NC}"
        else
            echo -e "${RED}✗ $workflow workflow missing${NC}"
        fi
    done
    
    # Check Netlify functions
    echo -e "\n${BLUE}=== Netlify Functions ===${NC}"
    if [[ -f "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" ]]; then
        echo -e "${GREEN}✓ Functions manifest exists${NC}"
        local function_count=$(jq '.functions | length' "$WORKSPACE_DIR/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
        echo -e "${BLUE}  Functions count: $function_count${NC}"
    else
        echo -e "${RED}✗ Functions manifest missing${NC}"
    fi
    
    # Check logs
    echo -e "\n${BLUE}=== Recent Logs ===${NC}"
    if [[ -f "$LOG_DIR/ultimate-redundancy.log" ]]; then
        tail -n 5 "$LOG_DIR/ultimate-redundancy.log" | while read line; do
            echo -e "${BLUE}  $line${NC}"
        done
    else
        echo -e "${YELLOW}No logs found${NC}"
    fi
}

# Show logs
show_logs() {
    log "INFO" "Showing ultimate redundancy system logs..."
    
    if [[ -f "$LOG_DIR/ultimate-redundancy.log" ]]; then
        echo -e "${BLUE}=== Ultimate Redundancy System Logs ===${NC}"
        tail -f "$LOG_DIR/ultimate-redundancy.log"
    else
        echo -e "${YELLOW}No logs found${NC}"
    fi
}

# Health check
health_check() {
    log "INFO" "Performing health check..."
    
    # Run the orchestrator health check
    if [[ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-orchestrator.cjs" ]]; then
        cd "$WORKSPACE_DIR"
        node automation/ultimate-redundancy-orchestrator.cjs check
    else
        error_exit "Ultimate redundancy orchestrator not found"
    fi
}

# Auto-recovery
auto_recovery() {
    log "INFO" "Performing auto-recovery..."
    
    # Run the orchestrator auto-recovery
    if [[ -f "$WORKSPACE_DIR/automation/ultimate-redundancy-orchestrator.cjs" ]]; then
        cd "$WORKSPACE_DIR"
        node automation/ultimate-redundancy-orchestrator.cjs recovery
    else
        error_exit "Ultimate redundancy orchestrator not found"
    fi
}

# Main script logic
case "${1:-start}" in
    start)
        start_all
        ;;
    stop)
        stop_all
        ;;
    restart)
        restart_all
        ;;
    status)
        check_status
        ;;
    logs)
        show_logs
        ;;
    health)
        health_check
        ;;
    recovery)
        auto_recovery
        ;;
    *)
        echo -e "${BLUE}Ultimate Redundancy System Management${NC}"
        echo ""
        echo "Usage: $0 {start|stop|restart|status|logs|health|recovery}"
        echo ""
        echo "Commands:"
        echo "  start     - Start all redundancy systems"
        echo "  stop      - Stop all redundancy systems"
        echo "  restart   - Restart all redundancy systems"
        echo "  status    - Check system status"
        echo "  logs      - Show system logs"
        echo "  health    - Perform health check"
        echo "  recovery  - Perform auto-recovery"
        echo ""
        echo "This script provides comprehensive redundancy for:"
        echo "  - PM2 automation processes"
        echo "  - GitHub Actions workflows"
        echo "  - Netlify functions"
        echo "  - All automation systems"
        exit 1
        ;;
esac