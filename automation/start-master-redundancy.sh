#!/bin/bash

# Master Redundancy Automation Script
# Comprehensive redundancy for all automation systems: PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/master-redundancy.pid"
LOG_FILE="$LOG_DIR/master-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/redundancy-config.json"

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
    local message="$2"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Error handling
error_exit() {
    log "ERROR" "Script failed: $1"
    exit 1
}

# Check if script is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "WARN" "Master redundancy system already running (PID: $pid)"
            return 0
        else
            log "WARN" "Stale PID file found, removing"
            rm -f "$PID_FILE"
        fi
    fi
    return 1
}

# Start PM2 redundancy systems
start_pm2_redundancy() {
    log "INFO" "🚀 Starting PM2 redundancy systems..."
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first."
        return 1
    fi
    
    # Start all PM2 ecosystem files
    local ecosystems=(
        "ecosystem.pm2.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.ultimate-redundancy.pm2.cjs"
        "ecosystem-ultimate-redundancy.pm2.cjs"
    )
    
    for ecosystem in "${ecosystems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$ecosystem" ]; then
            log "INFO" "Starting PM2 ecosystem: $ecosystem"
            cd "$WORKSPACE_DIR" && pm2 start "$ecosystem" --update-env || log "WARN" "Failed to start $ecosystem"
        fi
    done
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || log "WARN" "Failed to install pm2-logrotate"
    pm2 set pm2-logrotate:max_size 10M || true
    pm2 set pm2-logrotate:retain 30 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    # Save PM2 configuration
    pm2 save || log "WARN" "Failed to save PM2 configuration"
    
    log "INFO" "✅ PM2 redundancy systems started"
}

# Start GitHub Actions redundancy systems
start_github_actions_redundancy() {
    log "INFO" "🔧 Starting GitHub Actions redundancy systems..."
    
    # Check if we're in a git repository
    if [ ! -d "$WORKSPACE_DIR/.git" ]; then
        log "WARN" "Not in a git repository, skipping GitHub Actions redundancy"
        return 0
    fi
    
    # Start GitHub Actions redundancy managers
    local github_managers=(
        "github-actions-redundancy.cjs"
        "github-actions-redundancy-manager.cjs"
        "enhanced-github-actions-redundancy.cjs"
        "comprehensive-github-actions-redundancy.cjs"
    )
    
    for manager in "${github_managers[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$manager" ]; then
            log "INFO" "Starting GitHub Actions manager: $manager"
            cd "$WORKSPACE_DIR" && node "automation/$manager" start || log "WARN" "Failed to start $manager"
        fi
    done
    
    # Trigger GitHub Actions workflows manually as backup
    log "INFO" "Triggering GitHub Actions workflows as backup..."
    cd "$WORKSPACE_DIR"
    
    # Trigger marketing-sync workflow
    if [ -f ".github/workflows/marketing-sync.yml" ]; then
        log "INFO" "Triggering marketing-sync workflow"
        gh workflow run marketing-sync.yml || log "WARN" "Failed to trigger marketing-sync workflow"
    fi
    
    # Trigger sync-health workflow
    if [ -f ".github/workflows/sync-health.yml" ]; then
        log "INFO" "Triggering sync-health workflow"
        gh workflow run sync-health.yml || log "WARN" "Failed to trigger sync-health workflow"
    fi
    
    log "INFO" "✅ GitHub Actions redundancy systems started"
}

# Start Netlify Functions redundancy systems
start_netlify_functions_redundancy() {
    log "INFO" "🌐 Starting Netlify Functions redundancy systems..."
    
    # Start Netlify Functions redundancy managers
    local netlify_managers=(
        "netlify-functions-redundancy.cjs"
        "netlify-functions-redundancy-manager.cjs"
        "enhanced-netlify-functions-redundancy.cjs"
        "comprehensive-netlify-functions-redundancy.cjs"
    )
    
    for manager in "${netlify_managers[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$manager" ]; then
            log "INFO" "Starting Netlify Functions manager: $manager"
            cd "$WORKSPACE_DIR" && node "automation/$manager" start || log "WARN" "Failed to start $manager"
        fi
    done
    
    # Generate Netlify Functions manifest
    if [ -f "$WORKSPACE_DIR/scripts/generate-netlify-functions-manifest.cjs" ]; then
        log "INFO" "Generating Netlify Functions manifest..."
        cd "$WORKSPACE_DIR" && node scripts/generate-netlify-functions-manifest.cjs || log "WARN" "Failed to generate manifest"
    fi
    
    # Start Netlify auto-healer
    if [ -f "$WORKSPACE_DIR/automation/enhanced-netlify-healer.cjs" ]; then
        log "INFO" "Starting Netlify auto-healer..."
        cd "$WORKSPACE_DIR" && node automation/enhanced-netlify-healer.cjs start || log "WARN" "Failed to start auto-healer"
    fi
    
    log "INFO" "✅ Netlify Functions redundancy systems started"
}

# Start comprehensive redundancy orchestrators
start_comprehensive_redundancy() {
    log "INFO" "🎯 Starting comprehensive redundancy orchestrators..."
    
    local orchestrators=(
        "comprehensive-redundancy-orchestrator.cjs"
        "comprehensive-redundancy-orchestrator-v2.cjs"
        "master-redundancy-orchestrator.cjs"
        "ultimate-redundancy-master.cjs"
        "redundancy-automation-system.cjs"
        "redundancy-build-monitor.cjs"
        "redundancy-health-monitor.cjs"
    )
    
    for orchestrator in "${orchestrators[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$orchestrator" ]; then
            log "INFO" "Starting orchestrator: $orchestrator"
            cd "$WORKSPACE_DIR" && node "automation/$orchestrator" start || log "WARN" "Failed to start $orchestrator"
        fi
    done
    
    log "INFO" "✅ Comprehensive redundancy orchestrators started"
}

# Start monitoring and health check systems
start_monitoring_systems() {
    log "INFO" "📊 Starting monitoring and health check systems..."
    
    local monitoring_systems=(
        "continuous-build-monitor.cjs"
        "build-failure-recovery.cjs"
        "pre-build-health-check.cjs"
        "nextjs-page-validator.cjs"
        "comprehensive-monitoring-dashboard.cjs"
    )
    
    for system in "${monitoring_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$system" ]; then
            log "INFO" "Starting monitoring system: $system"
            cd "$WORKSPACE_DIR" && node "automation/$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "✅ Monitoring and health check systems started"
}

# Start git sync and automation systems
start_git_automation_systems() {
    log "INFO" "🔄 Starting git sync and automation systems..."
    
    local git_systems=(
        "git-sync.cjs"
        "advanced-git-sync.cjs"
        "enhanced-git-sync-orchestrator.cjs"
        "redundancy-git-sync.cjs"
        "pm2-auto-sync.js"
    )
    
    for system in "${git_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$system" ]; then
            log "INFO" "Starting git system: $system"
            cd "$WORKSPACE_DIR" && node "automation/$system" || log "WARN" "Failed to start $system"
        fi
    done
    
    # Start git sync cron
    if [ -f "$WORKSPACE_DIR/automation/git-sync-cron.sh" ]; then
        log "INFO" "Starting git sync cron..."
        cd "$WORKSPACE_DIR/automation" && chmod +x git-sync-cron.sh && ./git-sync-cron.sh start || log "WARN" "Failed to start git sync cron"
    fi
    
    log "INFO" "✅ Git sync and automation systems started"
}

# Start marketing and content automation systems
start_marketing_automation() {
    log "INFO" "📢 Starting marketing and content automation systems..."
    
    local marketing_systems=(
        "marketing-sync.js"
        "homepage-updater.cjs"
        "front-index-advertiser.cjs"
        "content-quality-fixer.cjs"
        "content-quality-analyzer.cjs"
    )
    
    for system in "${marketing_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$system" ]; then
            log "INFO" "Starting marketing system: $system"
            cd "$WORKSPACE_DIR" && node "automation/$system" || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "✅ Marketing and content automation systems started"
}

# Start autonomous and AI systems
start_autonomous_systems() {
    log "INFO" "🤖 Starting autonomous and AI systems..."
    
    local autonomous_systems=(
        "intelligent-orchestrator.cjs"
        "automation-factory.cjs"
        "innovation-orchestrator.cjs"
        "ai-trends-researcher.cjs"
        "autonomous-meta-orchestrator.cjs"
    )
    
    for system in "${autonomous_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/automation/$system" ]; then
            log "INFO" "Starting autonomous system: $system"
            cd "$WORKSPACE_DIR" && node "automation/$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "✅ Autonomous and AI systems started"
}

# Start the master redundancy system
start() {
    log "INFO" "🚀 Starting Master Redundancy Automation System..."
    
    if check_running; then
        log "WARN" "System already running"
        return 0
    fi
    
    # Create PID file
    echo $$ > "$PID_FILE"
    
    # Start all redundancy systems
    start_pm2_redundancy
    start_github_actions_redundancy
    start_netlify_functions_redundancy
    start_comprehensive_redundancy
    start_monitoring_systems
    start_git_automation_systems
    start_marketing_automation
    start_autonomous_systems
    
    log "INFO" "🎉 Master Redundancy Automation System started successfully!"
    log "INFO" "📝 PID: $$ | Log: $LOG_FILE"
    
    # Keep the script running to maintain the system
    while true; do
        sleep 300  # Check every 5 minutes
        log "INFO" "🔄 Master redundancy system heartbeat..."
        
        # Check if all systems are still running
        check_system_health
    done
}

# Check system health
check_system_health() {
    log "INFO" "🏥 Performing system health check..."
    
    # Check PM2 processes
    if command -v pm2 &> /dev/null; then
        local pm2_status=$(pm2 status --no-daemon 2>/dev/null || echo "PM2 not accessible")
        log "INFO" "PM2 Status: $pm2_status"
    fi
    
    # Check disk space
    local disk_usage=$(df -h . | tail -1 | awk '{print $5}')
    log "INFO" "Disk usage: $disk_usage"
    
    # Check memory usage
    local memory_usage=$(free -h | grep Mem | awk '{print $3"/"$2}')
    log "INFO" "Memory usage: $memory_usage"
}

# Stop the master redundancy system
stop() {
    log "INFO" "🛑 Stopping Master Redundancy Automation System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "Stopping process $pid..."
            kill "$pid" || true
            sleep 2
            if ps -p "$pid" > /dev/null 2>&1; then
                log "WARN" "Process still running, force killing..."
                kill -9 "$pid" || true
            fi
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop all PM2 processes
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping all PM2 processes..."
        pm2 stop all || true
        pm2 delete all || true
    fi
    
    log "INFO" "✅ Master Redundancy Automation System stopped"
}

# Restart the master redundancy system
restart() {
    log "INFO" "🔄 Restarting Master Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Show system status
status() {
    log "INFO" "📊 Master Redundancy Automation System Status..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "✅ System is RUNNING (PID: $pid)"
        else
            log "WARN" "❌ System is NOT RUNNING (stale PID file)"
        fi
    else
        log "INFO" "❌ System is NOT RUNNING"
    fi
    
    # Show PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "PM2 Status:"
        pm2 status --no-daemon 2>/dev/null || log "WARN" "PM2 not accessible"
    fi
    
    # Show recent logs
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "Recent logs (last 10 lines):"
        tail -10 "$LOG_FILE" | while read -r line; do
            echo "  $line"
        done
    fi
}

# Show system health
health() {
    log "INFO" "🏥 Master Redundancy Automation System Health Check..."
    check_system_health
}

# Show logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "📝 Showing logs from $LOG_FILE:"
        tail -f "$LOG_FILE"
    else
        log "WARN" "No log file found"
    fi
}

# Main script logic
case "${1:-start}" in
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
        status
        ;;
    health)
        health
        ;;
    logs)
        logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|health|logs}"
        echo ""
        echo "Commands:"
        echo "  start   - Start the master redundancy system"
        echo "  stop    - Stop the master redundancy system"
        echo "  restart - Restart the master redundancy system"
        echo "  status  - Show system status"
        echo "  health  - Perform health check"
        echo "  logs    - Show live logs"
        echo ""
        echo "This script provides comprehensive redundancy for:"
        echo "  🚀 PM2 automations"
        echo "  🔧 GitHub Actions automations"
        echo "  🌐 Netlify Functions automations"
        echo "  🎯 Comprehensive redundancy orchestrators"
        echo "  📊 Monitoring and health check systems"
        echo "  🔄 Git sync and automation systems"
        echo "  📢 Marketing and content automation"
        echo "  🤖 Autonomous and AI systems"
        exit 1
        ;;
esac