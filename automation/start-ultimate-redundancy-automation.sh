#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# This script provides comprehensive redundancy for all automations:
# - PM2 automations (ecosystem files, processes, health monitoring)
# - GitHub Actions automations (workflows, API health, validation)
# - Netlify Functions automations (manifest, deployment, regeneration)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.pid"
CONFIG_FILE="$PROJECT_ROOT/automation/ultimate-redundancy-config.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

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
            echo -e "${CYAN}[$timestamp] [$level]${NC} $message"
            ;;
    esac
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy-startup.log"
}

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to check if PM2 is running
check_pm2_running() {
    if command_exists pm2; then
        pm2 ping >/dev/null 2>&1
        return $?
    fi
    return 1
}

# Function to check if Node.js is available
check_node_available() {
    if command_exists node; then
        node --version >/dev/null 2>&1
        return $?
    fi
    return 1
}

# Function to check if npm is available
check_npm_available() {
    if command_exists npm; then
        npm --version >/dev/null 2>&1
        return $?
    fi
    return 1
}

# Function to check if git is available
check_git_available() {
    if command_exists git; then
        git --version >/dev/null 2>&1
        return $?
    fi
    return 1
}

# Function to check if curl is available
check_curl_available() {
    if command_exists curl; then
        curl --version >/dev/null 2>&1
        return $?
    fi
    return 1
}

# Function to start PM2 processes
start_pm2_processes() {
    log "INFO" "🚀 Starting PM2 processes..."
    
    cd "$PROJECT_ROOT"
    
    # Try to start from comprehensive redundancy ecosystem first
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "📋 Starting comprehensive redundancy ecosystem..."
        if pm2 start ecosystem.comprehensive-redundancy.cjs; then
            log "INFO" "✅ Successfully started comprehensive redundancy ecosystem"
            return 0
        else
            log "WARN" "⚠️ Failed to start comprehensive redundancy ecosystem, trying alternatives..."
        fi
    fi
    
    # Try other ecosystem files
    for ecosystem_file in "ecosystem.redundancy.cjs" "ecosystem.pm2.cjs" "ecosystem.redundancy.pm2.cjs"; do
        if [ -f "$ecosystem_file" ]; then
            log "INFO" "📋 Starting ecosystem: $ecosystem_file"
            if pm2 start "$ecosystem_file"; then
                log "INFO" "✅ Successfully started ecosystem: $ecosystem_file"
                return 0
            else
                log "WARN" "⚠️ Failed to start ecosystem: $ecosystem_file"
            fi
        fi
    done
    
    log "ERROR" "❌ Failed to start any PM2 ecosystem"
    return 1
}

# Function to check PM2 process health
check_pm2_health() {
    log "INFO" "🔍 Checking PM2 process health..."
    
    if ! check_pm2_running; then
        log "ERROR" "❌ PM2 is not running"
        return 1
    fi
    
    # Get PM2 status
    local pm2_status=$(pm2 status --no-daemon 2>/dev/null || echo "")
    
    if [ -z "$pm2_status" ]; then
        log "WARN" "⚠️ No PM2 processes found"
        return 1
    fi
    
    # Check for offline processes
    local offline_processes=$(echo "$pm2_status" | grep -c "offline\|errored\|stopped" || echo "0")
    
    if [ "$offline_processes" -gt 0 ]; then
        log "WARN" "⚠️ Found $offline_processes offline/errored/stopped processes"
        return 1
    fi
    
    log "INFO" "✅ All PM2 processes are healthy"
    return 0
}

# Function to check GitHub Actions health
check_github_actions_health() {
    log "INFO" "🔍 Checking GitHub Actions health..."
    
    cd "$PROJECT_ROOT"
    
    # Check if workflows exist
    local workflows=(
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        ".github/workflows/marketing-sync-backup.yml"
        ".github/workflows/sync-health-backup.yml"
    )
    
    local missing_workflows=0
    for workflow in "${workflows[@]}"; do
        if [ ! -f "$workflow" ]; then
            log "WARN" "⚠️ Workflow not found: $workflow"
            ((missing_workflows++))
        else
            log "INFO" "✅ Workflow found: $workflow"
        fi
    done
    
    if [ "$missing_workflows" -gt 0 ]; then
        log "WARN" "⚠️ $missing_workflows workflows are missing"
    fi
    
    # Check GitHub API health if token is available
    if [ -n "$GITHUB_TOKEN" ] && check_curl_available; then
        log "INFO" "🔍 Checking GitHub API health..."
        if curl -s -H "Authorization: token $GITHUB_TOKEN" \
                -H "Accept: application/vnd.github.v3+json" \
                "https://api.github.com/rate_limit" >/dev/null 2>&1; then
            log "INFO" "✅ GitHub API is accessible"
        else
            log "WARN" "⚠️ GitHub API may be experiencing issues"
        fi
    fi
    
    log "INFO" "✅ GitHub Actions health check completed"
    return 0
}

# Function to check Netlify Functions health
check_netlify_functions_health() {
    log "INFO" "🔍 Checking Netlify Functions health..."
    
    cd "$PROJECT_ROOT"
    
    # Check manifest file
    local manifest_file="netlify/functions/functions-manifest.json"
    if [ ! -f "$manifest_file" ]; then
        log "ERROR" "❌ Netlify functions manifest not found: $manifest_file"
        return 1
    fi
    
    # Check if manifest is valid JSON
    if ! node -e "try { JSON.parse(require('fs').readFileSync('$manifest_file', 'utf8')); } catch(e) { process.exit(1); }" >/dev/null 2>&1; then
        log "ERROR" "❌ Netlify functions manifest is not valid JSON"
        return 1
    fi
    
    # Count functions using Node.js instead of jq
    local function_count=$(node -e "try { const manifest = JSON.parse(require('fs').readFileSync('$manifest_file', 'utf8')); console.log(manifest.functions ? manifest.functions.length : 0); } catch(e) { console.log('0'); }" 2>/dev/null || echo "0")
    log "INFO" "📋 Found $function_count Netlify functions"
    
    # Check Netlify CLI if available
    if command_exists netlify; then
        log "INFO" "🔍 Checking Netlify CLI..."
        if netlify status >/dev/null 2>&1; then
            log "INFO" "✅ Netlify CLI is accessible"
        else
            log "WARN" "⚠️ Netlify CLI may not be properly configured"
        fi
    else
        log "WARN" "⚠️ Netlify CLI not found"
    fi
    
    log "INFO" "✅ Netlify Functions health check completed"
    return 0
}

# Function to regenerate Netlify functions manifest
regenerate_netlify_manifest() {
    log "INFO" "🔄 Regenerating Netlify functions manifest..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
        if node scripts/generate-netlify-functions-manifest.cjs; then
            log "INFO" "✅ Successfully regenerated Netlify functions manifest"
            return 0
        else
            log "ERROR" "❌ Failed to regenerate Netlify functions manifest"
            return 1
        fi
    else
        log "WARN" "⚠️ Netlify functions manifest generator not found"
        return 1
    fi
}

# Function to start the ultimate redundancy automation system
start_ultimate_redundancy() {
    log "INFO" "🚀 Starting Ultimate Redundancy Automation System..."
    
    cd "$PROJECT_ROOT"
    
    # Check prerequisites
    if ! check_node_available; then
        log "ERROR" "❌ Node.js is not available"
        exit 1
    fi
    
    if ! check_npm_available; then
        log "ERROR" "❌ npm is not available"
        exit 1
    fi
    
    if ! check_git_available; then
        log "ERROR" "❌ Git is not available"
        exit 1
    fi
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        log "INFO" "📦 Installing dependencies..."
        npm install
    fi
    
    # Start PM2 processes
    if ! start_pm2_processes; then
        log "ERROR" "❌ Failed to start PM2 processes"
        exit 1
    fi
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 health
    if ! check_pm2_health; then
        log "WARN" "⚠️ PM2 health check failed, attempting recovery..."
        pm2 restart all || true
        sleep 5
        check_pm2_health
    fi
    
    # Check GitHub Actions health
    check_github_actions_health
    
    # Check Netlify Functions health
    if ! check_netlify_functions_health; then
        log "WARN" "⚠️ Netlify Functions health check failed, attempting recovery..."
        regenerate_netlify_manifest
    fi
    
    # Start the ultimate redundancy automation system
    log "INFO" "🚀 Starting ultimate redundancy automation system..."
    if node automation/ultimate-redundancy-automation-system.cjs start; then
        log "INFO" "✅ Ultimate redundancy automation system started successfully"
        
        # Save PID
        echo $$ > "$PID_FILE"
        
        # Start monitoring loop
        monitor_system
    else
        log "ERROR" "❌ Failed to start ultimate redundancy automation system"
        exit 1
    fi
}

# Function to stop the system
stop_ultimate_redundancy() {
    log "INFO" "🛑 Stopping Ultimate Redundancy Automation System..."
    
    cd "$PROJECT_ROOT"
    
    # Stop the automation system
    if [ -f "automation/ultimate-redundancy-automation-system.cjs" ]; then
        node automation/ultimate-redundancy-automation-system.cjs stop || true
    fi
    
    # Stop PM2 processes
    if check_pm2_running; then
        log "INFO" "🛑 Stopping PM2 processes..."
        pm2 stop all || true
        pm2 delete all || true
    fi
    
    # Remove PID file
    if [ -f "$PID_FILE" ]; then
        rm -f "$PID_FILE"
    fi
    
    log "INFO" "✅ Ultimate redundancy automation system stopped"
}

# Function to check system status
check_status() {
    log "INFO" "📊 Checking system status..."
    
    cd "$PROJECT_ROOT"
    
    # Check if system is running
    if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
        log "INFO" "✅ Ultimate redundancy automation system is running (PID: $(cat "$PID_FILE"))"
    else
        log "INFO" "❌ Ultimate redundancy automation system is not running"
    fi
    
    # Check PM2 status
    if check_pm2_running; then
        log "INFO" "✅ PM2 is running"
        pm2 status --no-daemon
    else
        log "INFO" "❌ PM2 is not running"
    fi
    
    # Check GitHub Actions health
    check_github_actions_health
    
    # Check Netlify Functions health
    check_netlify_functions_health
}

# Function to perform health check
perform_health_check() {
    log "INFO" "🏥 Performing comprehensive health check..."
    
    cd "$PROJECT_ROOT"
    
    local health_results=()
    
    # Check PM2 health
    if check_pm2_health; then
        health_results+=("PM2: HEALTHY")
    else
        health_results+=("PM2: UNHEALTHY")
    fi
    
    # Check GitHub Actions health
    if check_github_actions_health; then
        health_results+=("GitHub Actions: HEALTHY")
    else
        health_results+=("GitHub Actions: UNHEALTHY")
    fi
    
    # Check Netlify Functions health
    if check_netlify_functions_health; then
        health_results+=("Netlify Functions: HEALTHY")
    else
        health_results+=("Netlify Functions: UNHEALTHY")
    fi
    
    # Display results
    log "INFO" "🏥 Health Check Results:"
    for result in "${health_results[@]}"; do
        if [[ "$result" == *"HEALTHY"* ]]; then
            echo -e "${GREEN}✅ $result${NC}"
        else
            echo -e "${RED}❌ $result${NC}"
        fi
    done
}

# Function to perform auto-recovery
perform_auto_recovery() {
    log "INFO" "🔧 Performing auto-recovery..."
    
    cd "$PROJECT_ROOT"
    
    # PM2 recovery
    if ! check_pm2_health; then
        log "INFO" "🔄 Attempting PM2 recovery..."
        pm2 restart all || true
        sleep 5
        check_pm2_health
    fi
    
    # Netlify Functions recovery
    if ! check_netlify_functions_health; then
        log "INFO" "🔄 Attempting Netlify Functions recovery..."
        regenerate_netlify_manifest
    fi
    
    log "INFO" "✅ Auto-recovery completed"
}

# Function to monitor the system
monitor_system() {
    log "INFO" "📡 Starting system monitoring..."
    
    while true; do
        # Check if we should still be running
        if [ ! -f "$PID_FILE" ] || ! kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
            log "INFO" "🛑 PID file not found or process not running, stopping monitoring"
            break
        fi
        
        # Perform health checks every 5 minutes
        sleep 300
        
        # Check PM2 health
        if ! check_pm2_health; then
            log "WARN" "⚠️ PM2 health check failed during monitoring"
            perform_auto_recovery
        fi
        
        # Check other systems every 10 minutes
        if [ $(( $(date +%s) % 600 )) -eq 0 ]; then
            check_github_actions_health
            check_netlify_functions_health
        fi
    done
}

# Function to show logs
show_logs() {
    log "INFO" "📋 Showing recent logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy-startup.log" ]; then
        tail -n 50 "$LOG_DIR/ultimate-redundancy-startup.log"
    else
        log "INFO" "No logs found"
    fi
}

# Function to show help
show_help() {
    echo "Ultimate Redundancy Automation System"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the ultimate redundancy automation system"
    echo "  stop      Stop the ultimate redundancy automation system"
    echo "  restart   Restart the ultimate redundancy automation system"
    echo "  status    Check the status of all systems"
    echo "  health    Perform a comprehensive health check"
    echo "  recovery  Perform auto-recovery on failed systems"
    echo "  logs      Show recent logs"
    echo "  help      Show this help message"
    echo ""
    echo "This system provides comprehensive redundancy for:"
    echo "  - PM2 automations (ecosystem files, processes, health monitoring)"
    echo "  - GitHub Actions automations (workflows, API health, validation)"
    echo "  - Netlify Functions automations (manifest, deployment, regeneration)"
}

# Main script logic
case "${1:-start}" in
    "start")
        start_ultimate_redundancy
        ;;
    "stop")
        stop_ultimate_redundancy
        ;;
    "restart")
        stop_ultimate_redundancy
        sleep 2
        start_ultimate_redundancy
        ;;
    "status")
        check_status
        ;;
    "health")
        perform_health_check
        ;;
    "recovery")
        perform_auto_recovery
        ;;
    "logs")
        show_logs
        ;;
    "help"|"-h"|"--help")
        show_help
        ;;
    *)
        log "ERROR" "❌ Unknown command: $1"
        show_help
        exit 1
        ;;
esac