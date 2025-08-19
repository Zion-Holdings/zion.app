#!/bin/bash

# Master Redundancy System - Comprehensive Coverage for All Automations
# This script provides complete redundancy for PM2, GitHub Actions, and Netlify Functions

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

# Start PM2 Redundancy Systems
start_pm2_redundancy() {
    log "INFO" "${CYAN}Starting PM2 Redundancy Systems...${NC}"
    
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
        "ecosystem-redundancy.pm2.cjs"
        "ecosystem.comprehensive-redundancy.cjs"
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
    
    log "INFO" "${GREEN}PM2 Redundancy Systems started successfully${NC}"
}

# Start GitHub Actions Redundancy
start_github_actions_redundancy() {
    log "INFO" "${CYAN}Starting GitHub Actions Redundancy...${NC}"
    
    # Start GitHub Actions redundancy managers
    local github_scripts=(
        "automation/github-actions-redundancy.cjs"
        "automation/enhanced-github-actions-redundancy.cjs"
        "automation/comprehensive-github-actions-redundancy.cjs"
        "automation/github-actions-redundancy-manager.cjs"
        "automation/enhanced-github-actions-redundancy-manager.cjs"
    )
    
    for script in "${github_scripts[@]}"; do
        if [ -f "$WORKSPACE_DIR/$script" ]; then
            log "INFO" "Starting GitHub Actions redundancy: $script"
            cd "$WORKSPACE_DIR" && node "$script" start || log "WARN" "Failed to start $script"
        fi
    done
    
    # Start cron-based GitHub Actions monitoring
    if [ -f "$WORKSPACE_DIR/automation/git-sync-cron.sh" ]; then
        log "INFO" "Starting GitHub Actions cron monitoring..."
        cd "$WORKSPACE_DIR" && bash automation/git-sync-cron.sh start || log "WARN" "Failed to start git-sync-cron"
    fi
    
    log "INFO" "${GREEN}GitHub Actions Redundancy started successfully${NC}"
}

# Start Netlify Functions Redundancy
start_netlify_functions_redundancy() {
    log "INFO" "${CYAN}Starting Netlify Functions Redundancy...${NC}"
    
    # Start Netlify functions redundancy managers
    local netlify_scripts=(
        "automation/netlify-functions-redundancy.cjs"
        "automation/enhanced-netlify-functions-redundancy.cjs"
        "automation/comprehensive-netlify-functions-redundancy.cjs"
        "automation/netlify-functions-redundancy-manager.cjs"
        "automation/enhanced-netlify-functions-redundancy-manager.cjs"
    )
    
    for script in "${netlify_scripts[@]}"; do
        if [ -f "$WORKSPACE_DIR/$script" ]; then
            log "INFO" "Starting Netlify functions redundancy: $script"
            cd "$WORKSPACE_DIR" && node "$script" start || log "WARN" "Failed to start $script"
        fi
    done
    
    # Generate Netlify functions manifest
    if [ -f "$WORKSPACE_DIR/scripts/generate-netlify-functions-manifest.cjs" ]; then
        log "INFO" "Generating Netlify functions manifest..."
        cd "$WORKSPACE_DIR" && node scripts/generate-netlify-functions-manifest.cjs || log "WARN" "Failed to generate manifest"
    fi
    
    # Start Netlify auto-healer
    if [ -f "$WORKSPACE_DIR/automation/enhanced-netlify-healer.cjs" ]; then
        log "INFO" "Starting Netlify auto-healer..."
        cd "$WORKSPACE_DIR" && node automation/enhanced-netlify-healer.cjs start || log "WARN" "Failed to start auto-healer"
    fi
    
    log "INFO" "${GREEN}Netlify Functions Redundancy started successfully${NC}"
}

# Start Master Orchestrators
start_master_orchestrators() {
    log "INFO" "${CYAN}Starting Master Orchestrators...${NC}"
    
    # Start master orchestrators
    local orchestrators=(
        "automation/master-redundancy-orchestrator.cjs"
        "automation/comprehensive-redundancy-orchestrator.cjs"
        "automation/ultimate-redundancy-master.cjs"
        "automation/master-automation-coordinator.js"
        "automation/intelligent-orchestrator.cjs"
    )
    
    for orchestrator in "${orchestrators[@]}"; do
        if [ -f "$WORKSPACE_DIR/$orchestrator" ]; then
            log "INFO" "Starting master orchestrator: $orchestrator"
            cd "$WORKSPACE_DIR" && node "$orchestrator" start || log "WARN" "Failed to start $orchestrator"
        fi
    done
    
    log "INFO" "${GREEN}Master Orchestrators started successfully${NC}"
}

# Start Continuous Monitoring
start_continuous_monitoring() {
    log "INFO" "${CYAN}Starting Continuous Monitoring...${NC}"
    
    # Start monitoring systems
    local monitors=(
        "automation/redundancy-health-monitor.cjs"
        "automation/continuous-build-monitor.cjs"
        "automation/redundancy-build-monitor.cjs"
        "automation/pm2-redundancy-monitor.cjs"
        "automation/automation-guardian-10min.cjs"
    )
    
    for monitor in "${monitors[@]}"; do
        if [ -f "$WORKSPACE_DIR/$monitor" ]; then
            log "INFO" "Starting monitor: $monitor"
            cd "$WORKSPACE_DIR" && node "$monitor" start || log "WARN" "Failed to start $monitor"
        fi
    done
    
    log "INFO" "${GREEN}Continuous Monitoring started successfully${NC}"
}

# Start Git Sync and Health Systems
start_git_sync_health() {
    log "INFO" "${CYAN}Starting Git Sync and Health Systems...${NC}"
    
    # Start git sync systems
    local git_systems=(
        "automation/git-sync.cjs"
        "automation/enhanced-git-sync-orchestrator.cjs"
        "automation/redundancy-git-sync.cjs"
        "automation/advanced-git-sync.cjs"
    )
    
    for system in "${git_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting git sync system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    # Start health check systems
    if [ -f "$WORKSPACE_DIR/automation/redundancy-automation-system.cjs" ]; then
        log "INFO" "Starting redundancy automation system..."
        cd "$WORKSPACE_DIR" && node automation/redundancy-automation-system.cjs start || log "WARN" "Failed to start redundancy system"
    fi
    
    log "INFO" "${GREEN}Git Sync and Health Systems started successfully${NC}"
}

# Start Build and Recovery Systems
start_build_recovery_systems() {
    log "INFO" "${CYAN}Starting Build and Recovery Systems...${NC}"
    
    # Start build systems
    local build_systems=(
        "automation/master-build-orchestrator.cjs"
        "automation/build-failure-recovery.cjs"
        "automation/pre-build-health-check.cjs"
        "automation/nextjs-page-validator.cjs"
    )
    
    for system in "${build_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting build system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Build and Recovery Systems started successfully${NC}"
}

# Start Marketing and Content Systems
start_marketing_content_systems() {
    log "INFO" "${CYAN}Starting Marketing and Content Systems...${NC}"
    
    # Start marketing systems
    local marketing_systems=(
        "automation/marketing-sync.js"
        "automation/linkedin-marketing-orchestrator.cjs"
        "automation/instagram-marketing-orchestrator.cjs"
        "automation/homepage-updater.cjs"
        "automation/front-index-advertiser.cjs"
    )
    
    for system in "${marketing_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting marketing system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Marketing and Content Systems started successfully${NC}"
}

# Start AI and Innovation Systems
start_ai_innovation_systems() {
    log "INFO" "${CYAN}Starting AI and Innovation Systems...${NC}"
    
    # Start AI systems
    local ai_systems=(
        "automation/ai-trends-researcher.cjs"
        "automation/innovation-orchestrator.cjs"
        "automation/autonomous-meta-orchestrator.cjs"
        "automation/ai-content-factory.cjs"
        "automation/ai-research-scout.cjs"
    )
    
    for system in "${ai_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting AI system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}AI and Innovation Systems started successfully${NC}"
}

# Start UI and Design Systems
start_ui_design_systems() {
    log "INFO" "${CYAN}Starting UI and Design Systems...${NC}"
    
    # Start UI systems
    local ui_systems=(
        "automation/ui-evolution-launcher.js"
        "automation/design-orchestrator.cjs"
        "automation/beautify-ui.cjs"
        "automation/responsive-content-orchestrator.cjs"
        "automation/variation-orchestrator.cjs"
    )
    
    for system in "${ui_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting UI system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}UI and Design Systems started successfully${NC}"
}

# Start Autonomous Systems
start_autonomous_systems() {
    log "INFO" "${CYAN}Starting Autonomous Systems...${NC}"
    
    # Start autonomous systems
    local autonomous_systems=(
        "automation/launch-enhanced-autonomous-system.js"
        "automation/autonomous-automation-orchestrator.js"
        "automation/autonomous-error-monitoring-factory.js"
        "automation/self-healing-orchestrator.cjs"
        "automation/automation-error-scanner.cjs"
    )
    
    for system in "${autonomous_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting autonomous system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Autonomous Systems started successfully${NC}"
}

# Start Linting and Quality Systems
start_linting_quality_systems() {
    log "INFO" "${CYAN}Starting Linting and Quality Systems...${NC}"
    
    # Start linting systems
    local linting_systems=(
        "automation/linting-autonomous-agents-factory.js"
        "automation/lint-automation-manager.cjs"
        "automation/syntax-fix-launcher.js"
        "automation/syntax-error-monitor.js"
        "automation/content-quality-fixer.cjs"
    )
    
    for system in "${linting_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting linting system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Linting and Quality Systems started successfully${NC}"
}

# Start Venture and Business Systems
start_venture_business_systems() {
    log "INFO" "${CYAN}Starting Venture and Business Systems...${NC}"
    
    # Start venture systems
    local venture_systems=(
        "automation/venture-orchestrator.cjs"
        "automation/venture-services-analyzer.cjs"
        "automation/venture-services-factory.cjs"
        "automation/ads-generator.cjs"
        "automation/service-sales-agents-factory.cjs"
    )
    
    for system in "${venture_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting venture system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Venture and Business Systems started successfully${NC}"
}

# Start Cloud and Infrastructure Systems
start_cloud_infrastructure_systems() {
    log "INFO" "${CYAN}Starting Cloud and Infrastructure Systems...${NC}"
    
    # Start cloud systems
    local cloud_systems=(
        "automation/cloud-autonomous-orchestrator.cjs"
        "automation/cloud-autonomous-agents-factory.cjs"
        "automation/cloud-site-crawler.cjs"
        "automation/cloud-content-factory.cjs"
        "automation/cloud-content-advertiser.cjs"
    )
    
    for system in "${cloud_systems[@]}"; do
        if [ -f "$WORKSPACE_DIR/$system" ]; then
            log "INFO" "Starting cloud system: $system"
            cd "$WORKSPACE_DIR" && node "$system" start || log "WARN" "Failed to start $system"
        fi
    done
    
    log "INFO" "${GREEN}Cloud and Infrastructure Systems started successfully${NC}"
}

# Start the master redundancy system
start() {
    log "INFO" "${PURPLE}🚀 Starting Master Redundancy System...${NC}"
    
    if check_running; then
        log "WARN" "Master redundancy system is already running"
        return 0
    fi
    
    # Create PID file
    echo $$ > "$PID_FILE"
    
    # Start all redundancy systems
    start_pm2_redundancy
    start_github_actions_redundancy
    start_netlify_functions_redundancy
    start_master_orchestrators
    start_continuous_monitoring
    start_git_sync_health
    start_build_recovery_systems
    start_marketing_content_systems
    start_ai_innovation_systems
    start_ui_design_systems
    start_autonomous_systems
    start_linting_quality_systems
    start_venture_business_systems
    start_cloud_infrastructure_systems
    
    log "INFO" "${GREEN}✅ Master Redundancy System started successfully!${NC}"
    log "INFO" "PID: $$, Log: $LOG_FILE"
}

# Stop the master redundancy system
stop() {
    log "INFO" "${YELLOW}🛑 Stopping Master Redundancy System...${NC}"
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            kill "$pid" 2>/dev/null || true
            log "INFO" "Stopped process $pid"
        fi
        rm -f "$PID_FILE"
    fi
    
    # Stop all PM2 processes
    if command -v pm2 &> /dev/null; then
        log "INFO" "Stopping all PM2 processes..."
        pm2 stop all || true
        pm2 delete all || true
    fi
    
    # Stop any running Node.js processes from our automation
    log "INFO" "Stopping automation processes..."
    pkill -f "automation/" || true
    pkill -f "node.*automation" || true
    
    log "INFO" "${GREEN}✅ Master Redundancy System stopped successfully!${NC}"
}

# Restart the master redundancy system
restart() {
    log "INFO" "${BLUE}🔄 Restarting Master Redundancy System...${NC}"
    stop
    sleep 2
    start
}

# Check status of the master redundancy system
status() {
    log "INFO" "${CYAN}📊 Master Redundancy System Status${NC}"
    
    # Check if running
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if ps -p "$pid" > /dev/null 2>&1; then
            log "INFO" "✅ Master redundancy system is running (PID: $pid)"
        else
            log "WARN" "❌ Stale PID file found"
            rm -f "$PID_FILE"
        fi
    else
        log "INFO" "❌ Master redundancy system is not running"
    fi
    
    # Check PM2 status
    if command -v pm2 &> /dev/null; then
        log "INFO" "📋 PM2 Status:"
        pm2 status --no-daemon || true
    fi
    
    # Check log file
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "📝 Recent logs (last 10 lines):"
        tail -n 10 "$LOG_FILE" || true
    fi
}

# Show health status
health() {
    log "INFO" "${CYAN}🏥 Master Redundancy System Health Check${NC}"
    
    # Check system resources
    log "INFO" "💾 System Resources:"
    free -h | grep -E "Mem|Swap" || true
    df -h | grep -E "Filesystem|/" || true
    
    # Check running processes
    log "INFO" "🔄 Running Automation Processes:"
    ps aux | grep -E "automation|node.*automation" | grep -v grep || true
    
    # Check PM2 health
    if command -v pm2 &> /dev/null; then
        log "INFO" "📊 PM2 Health:"
        pm2 ping || log "WARN" "PM2 daemon not responding"
        pm2 list || true
    fi
    
    # Check log health
    if [ -f "$LOG_FILE" ]; then
        local log_size=$(du -h "$LOG_FILE" | cut -f1)
        log "INFO" "📝 Log file size: $log_size"
    fi
}

# Show logs
logs() {
    if [ -f "$LOG_FILE" ]; then
        log "INFO" "📝 Master Redundancy System Logs:"
        cat "$LOG_FILE"
    else
        log "INFO" "No log file found"
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
        echo "  start   - Start the master redundancy system"
        echo "  stop    - Stop the master redundancy system"
        echo "  restart - Restart the master redundancy system"
        echo "  status  - Show system status"
        echo "  health  - Show system health"
        echo "  logs    - Show system logs"
        exit 1
        ;;
esac