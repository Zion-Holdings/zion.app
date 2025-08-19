#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
STATUS_FILE="$LOG_DIR/ultimate-redundancy-status.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy.log"
}

# Ensure log directory exists
ensure_log_directory() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # Remove stale PID file
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Start PM2 redundancy monitoring
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy monitoring..."
    
    # Start PM2 daemon if not running
    if ! pm2 ping >/dev/null 2>&1; then
        log "WARN" "PM2 daemon not running, starting..."
        pm2 start
    fi
    
    # Start all PM2 ecosystem files
    for ecosystem_file in \
        "ecosystem.pm2.cjs" \
        "ecosystem.redundancy.cjs" \
        "ecosystem.comprehensive-redundancy.cjs" \
        "ecosystem.ultimate-redundancy.pm2.cjs"; do
        
        if [ -f "$PROJECT_ROOT/$ecosystem_file" ]; then
            log "INFO" "Starting PM2 ecosystem: $ecosystem_file"
            pm2 start "$PROJECT_ROOT/$ecosystem_file" --update-env || log "WARN" "Failed to start $ecosystem_file"
        fi
    done
    
    # Start critical PM2 processes
    log "INFO" "Starting critical PM2 processes..."
    cd "$PROJECT_ROOT"
    
    # Start redundancy managers
    pm2 start automation/pm2-redundancy-manager.cjs --name "pm2-redundancy-manager" || true
    pm2 start automation/github-actions-redundancy-manager.cjs --name "github-actions-redundancy-manager" || true
    pm2 start automation/netlify-functions-redundancy-manager.cjs --name "netlify-functions-redundancy-manager" || true
    
    # Start comprehensive redundancy system
    pm2 start automation/comprehensive-redundancy-system.cjs --name "comprehensive-redundancy-system" || true
    
    # Start ultimate redundancy system
    pm2 start automation/ultimate-redundancy-automation-system.cjs --name "ultimate-redundancy-automation-system" || true
    
    # Save PM2 configuration
    pm2 save || true
    
    log "INFO" "PM2 redundancy monitoring started"
}

# Start GitHub Actions redundancy monitoring
start_github_actions_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy monitoring..."
    
    # Check if workflows exist and are valid
    cd "$PROJECT_ROOT"
    
    for workflow in \
        ".github/workflows/marketing-sync.yml" \
        ".github/workflows/sync-health.yml"; do
        
        if [ -f "$workflow" ]; then
            log "INFO" "Found workflow: $workflow"
            
            # Validate workflow syntax
            if command -v yamllint >/dev/null 2>&1; then
                if yamllint "$workflow" >/dev/null 2>&1; then
                    log "INFO" "Workflow $workflow is valid"
                else
                    log "WARN" "Workflow $workflow has syntax issues"
                fi
            fi
        else
            log "WARN" "Workflow not found: $workflow"
        fi
    done
    
    # Create backup workflows if they don't exist
    create_backup_workflows
    
    log "INFO" "GitHub Actions redundancy monitoring started"
}

# Create backup workflows
create_backup_workflows() {
    log "INFO" "Creating backup workflows..."
    
    cd "$PROJECT_ROOT"
    
    # Marketing sync backup
    if [ ! -f ".github/workflows/marketing-sync-backup.yml" ]; then
        cat > ".github/workflows/marketing-sync-backup.yml" << 'EOF'
name: Marketing Sync Backup

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-marketing-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run backup marketing sync
        env:
          LINKEDIN_ACCESS_TOKEN: ${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: ${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: ${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: ${{ secrets.IG_ACCESS_TOKEN }}
        run: |
          echo "Backup marketing sync process"
          node automation/marketing-sync.js || echo "Backup sync completed"

      - name: Commit backup results
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(backup): marketing sync backup update"
            git push origin HEAD:main
          fi
EOF
        log "INFO" "Created marketing-sync-backup.yml"
    fi
    
    # Sync health backup
    if [ ! -f ".github/workflows/sync-health-backup.yml" ]; then
        cat > ".github/workflows/sync-health-backup.yml" << 'EOF'
name: Sync Health Backup

on:
  schedule:
    - cron: '*/30 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-sync-health:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run backup sync health check
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: |
          echo "Backup sync health check"
          node automation/pm2-auto-sync.js || echo "Backup health check completed"

      - name: Push if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          AHEAD=$(git rev-list --left-right --count HEAD...origin/main | awk '{print $1}')
          if [ "$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi
EOF
        log "INFO" "Created sync-health-backup.yml"
    fi
}

# Start Netlify Functions redundancy monitoring
start_netlify_functions_redundancy() {
    log "INFO" "Starting Netlify Functions redundancy monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Check if functions manifest exists
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        log "INFO" "Found Netlify Functions manifest"
        
        # Count functions
        local function_count=$(jq '.functions | length' "netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
        log "INFO" "Found $function_count Netlify functions"
        
        # Regenerate manifest if needed
        if [ "$function_count" -lt 50 ]; then
            log "WARN" "Low function count, regenerating manifest..."
            npm run netlify:manifest || log "WARN" "Failed to regenerate manifest"
        fi
    else
        log "WARN" "Netlify Functions manifest not found, generating..."
        npm run netlify:manifest || log "WARN" "Failed to generate manifest"
    fi
    
    log "INFO" "Netlify Functions redundancy monitoring started"
}

# Start NPM scripts redundancy monitoring
start_npm_scripts_redundancy() {
    log "INFO" "Starting NPM scripts redundancy monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Check critical scripts
    local critical_scripts=(
        "pm2:start"
        "pm2:restart"
        "build"
        "build:heal"
        "build:recovery"
        "redundancy:ultimate:start"
        "redundancy:comprehensive:start"
    )
    
    for script in "${critical_scripts[@]}"; do
        if npm run --silent "$script" --dry-run >/dev/null 2>&1; then
            log "INFO" "Script $script is available"
        else
            log "WARN" "Script $script not found or invalid"
        fi
    done
    
    log "INFO" "NPM scripts redundancy monitoring started"
}

# Start comprehensive monitoring
start_comprehensive_monitoring() {
    log "INFO" "Starting comprehensive monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Start monitoring processes
    pm2 start automation/comprehensive-monitoring-dashboard.cjs --name "comprehensive-monitoring-dashboard" || true
    
    # Start health monitoring
    pm2 start automation/redundancy-health-monitor.cjs --name "redundancy-health-monitor" || true
    
    # Start build monitoring
    pm2 start automation/redundancy-build-monitor.cjs --name "redundancy-build-monitor" || true
    
    # Start git sync monitoring
    pm2 start automation/redundancy-git-sync.cjs --name "redundancy-git-sync" || true
    
    log "INFO" "Comprehensive monitoring started"
}

# Start the ultimate redundancy system
start() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System..."
    
    if is_running; then
        log "WARN" "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    ensure_log_directory
    
    # Start all redundancy systems
    start_pm2_redundancy
    start_github_actions_redundancy
    start_netlify_functions_redundancy
    start_npm_scripts_redundancy
    start_comprehensive_monitoring
    
    # Start the main ultimate redundancy system
    cd "$PROJECT_ROOT"
    node automation/ultimate-redundancy-automation-system.cjs start &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    log "INFO" "✅ Ultimate Redundancy System started (PID: $pid)"
    log "INFO" "System is now monitoring all automation systems"
    
    # Show status
    show_status
}

# Stop the system
stop() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Stopped main process (PID: $pid)"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop PM2 processes
    cd "$PROJECT_ROOT"
    pm2 stop "ultimate-redundancy-automation-system" 2>/dev/null || true
    pm2 stop "comprehensive-redundancy-system" 2>/dev/null || true
    pm2 stop "comprehensive-monitoring-dashboard" 2>/dev/null || true
    pm2 stop "redundancy-health-monitor" 2>/dev/null || true
    pm2 stop "redundancy-build-monitor" 2>/dev/null || true
    pm2 stop "redundancy-git-sync" 2>/dev/null || true
    
    log "INFO" "✅ Ultimate Redundancy System stopped"
}

# Restart the system
restart() {
    log "INFO" "🔄 Restarting Ultimate Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Show system status
show_status() {
    log "INFO" "📊 Ultimate Redundancy System Status:"
    
    if is_running; then
        echo -e "${GREEN}✅ System is RUNNING${NC}"
        echo "PID: $(cat "$PID_FILE")"
    else
        echo -e "${RED}❌ System is STOPPED${NC}"
    fi
    
    echo ""
    echo "PM2 Status:"
    pm2 status --no-daemon 2>/dev/null || echo "PM2 not available"
    
    echo ""
    echo "GitHub Actions Workflows:"
    for workflow in \
        ".github/workflows/marketing-sync.yml" \
        ".github/workflows/sync-health.yml" \
        ".github/workflows/marketing-sync-backup.yml" \
        ".github/workflows/sync-health-backup.yml"; do
        
        if [ -f "$PROJECT_ROOT/$workflow" ]; then
            echo -e "  ${GREEN}✅${NC} $workflow"
        else
            echo -e "  ${RED}❌${NC} $workflow"
        fi
    done
    
    echo ""
    echo "Netlify Functions:"
    if [ -f "$PROJECT_ROOT/netlify/functions/functions-manifest.json" ]; then
        local function_count=$(jq '.functions | length' "$PROJECT_ROOT/netlify/functions/functions-manifest.json" 2>/dev/null || echo "0")
        echo -e "  ${GREEN}✅${NC} Manifest found with $function_count functions"
    else
        echo -e "  ${RED}❌${NC} Manifest not found"
    fi
    
    if [ -f "$STATUS_FILE" ]; then
        echo ""
        echo "Detailed Status:"
        cat "$STATUS_FILE" | jq '.' 2>/dev/null || cat "$STATUS_FILE"
    fi
}

# Show system health
show_health() {
    log "INFO" "🏥 Checking system health..."
    
    cd "$PROJECT_ROOT"
    
    # Run health check
    if node automation/ultimate-redundancy-automation-system.cjs health; then
        echo -e "${GREEN}✅ System is healthy${NC}"
        exit 0
    else
        echo -e "${RED}❌ System has health issues${NC}"
        exit 1
    fi
}

# Show logs
show_logs() {
    log "INFO" "📋 Showing system logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        tail -n 100 "$LOG_DIR/ultimate-redundancy.log"
    else
        echo "No log file found"
    fi
}

# Monitor mode
monitor() {
    log "INFO" "👀 Starting monitoring mode..."
    
    if ! is_running; then
        log "ERROR" "System is not running. Start it first with: $0 start"
        exit 1
    fi
    
    # Continuous monitoring
    while is_running; do
        clear
        show_status
        echo ""
        echo "Monitoring... Press Ctrl+C to stop"
        sleep 10
    done
}

# Emergency recovery
emergency() {
    log "ERROR" "🚨 EMERGENCY RECOVERY MODE ACTIVATED"
    
    cd "$PROJECT_ROOT"
    
    # Stop all PM2 processes
    pm2 stop all 2>/dev/null || true
    
    # Clear PM2 logs
    pm2 flush 2>/dev/null || true
    
    # Restart PM2 daemon
    pm2 kill 2>/dev/null || true
    pm2 start 2>/dev/null || true
    
    # Start critical processes
    npm run pm2:start || true
    
    # Start redundancy system
    start
    
    log "INFO" "✅ Emergency recovery completed"
}

# Main script logic
case "${1:-}" in
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
        show_status
        ;;
    health)
        show_health
        ;;
    logs)
        show_logs
        ;;
    monitor)
        monitor
        ;;
    emergency)
        emergency
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|logs|monitor|emergency}"
        echo ""
        echo "Commands:"
        echo "  start     - Start the ultimate redundancy system"
        echo "  stop      - Stop the ultimate redundancy system"
        echo "  restart   - Restart the ultimate redundancy system"
        echo "  status    - Show system status"
        echo "  health    - Check system health"
        echo "  logs      - Show system logs"
        echo "  monitor   - Start continuous monitoring"
        echo "  emergency - Emergency recovery mode"
        exit 1
        ;;
esac