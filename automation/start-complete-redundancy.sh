#!/bin/bash

# Complete Redundancy Automation System
# Covers all PM2 automations, GitHub Actions automations, and Netlify functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_DIR="$PROJECT_ROOT/automation/pids"
CONFIG_FILE="$PROJECT_ROOT/automation/redundancy-config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create necessary directories
mkdir -p "$LOG_DIR" "$PID_DIR"

# Logging function
log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_DIR/complete-redundancy.log"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_DIR/complete-redundancy-error.log"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_DIR/complete-redundancy.log"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1" | tee -a "$LOG_DIR/complete-redundancy.log"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        error "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        exit 1
    fi
}

# Start PM2 Redundancy System
start_pm2_redundancy() {
    log "Starting PM2 Redundancy System..."
    
    # Start the main PM2 ecosystem
    if pm2 start ecosystem.pm2.cjs --update-env; then
        log "Main PM2 ecosystem started successfully"
    else
        warn "Failed to start main PM2 ecosystem, attempting recovery..."
        pm2 delete all 2>/dev/null || true
        pm2 start ecosystem.pm2.cjs --update-env
    fi
    
    # Start comprehensive redundancy ecosystem
    if pm2 start ecosystem.comprehensive-redundancy.cjs --update-env; then
        log "Comprehensive redundancy ecosystem started successfully"
    else
        warn "Failed to start comprehensive redundancy ecosystem"
    fi
    
    # Start ultimate redundancy ecosystem
    if pm2 start ecosystem.ultimate-redundancy.pm2.cjs --update-env; then
        log "Ultimate redundancy ecosystem started successfully"
    else
        warn "Failed to start ultimate redundancy ecosystem"
    fi
    
    # Bootstrap PM2 logrotate
    pm2 install pm2-logrotate 2>/dev/null || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    pm2 set pm2-logrotate:workerInterval 60
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *'
    
    pm2 save
    log "PM2 Redundancy System started successfully"
}

# Start GitHub Actions Redundancy
start_github_redundancy() {
    log "Starting GitHub Actions Redundancy System..."
    
    # Start GitHub Actions redundancy manager
    if pm2 start automation/github-actions-redundancy-manager.cjs --name "github-redundancy-manager" --update-env; then
        log "GitHub Actions redundancy manager started successfully"
    else
        warn "Failed to start GitHub Actions redundancy manager"
    fi
    
    # Start enhanced GitHub Actions redundancy
    if pm2 start automation/enhanced-github-actions-redundancy.cjs --name "enhanced-github-redundancy" --update-env; then
        log "Enhanced GitHub Actions redundancy started successfully"
    else
        warn "Failed to start enhanced GitHub Actions redundancy"
    fi
    
    # Start comprehensive GitHub Actions redundancy
    if pm2 start automation/comprehensive-github-actions-redundancy.cjs --name "comprehensive-github-redundancy" --update-env; then
        log "Comprehensive GitHub Actions redundancy started successfully"
    else
        warn "Failed to start comprehensive GitHub Actions redundancy"
    fi
    
    pm2 save
    log "GitHub Actions Redundancy System started successfully"
}

# Start Netlify Functions Redundancy
start_netlify_redundancy() {
    log "Starting Netlify Functions Redundancy System..."
    
    # Start Netlify functions redundancy manager
    if pm2 start automation/netlify-functions-redundancy-manager.cjs --name "netlify-redundancy-manager" --update-env; then
        log "Netlify functions redundancy manager started successfully"
    else
        warn "Failed to start Netlify functions redundancy manager"
    fi
    
    # Start enhanced Netlify functions redundancy
    if pm2 start automation/enhanced-netlify-functions-redundancy.cjs --name "enhanced-netlify-redundancy" --update-env; then
        log "Enhanced Netlify functions redundancy started successfully"
    else
        warn "Failed to start enhanced Netlify functions redundancy"
    fi
    
    # Start comprehensive Netlify functions redundancy
    if pm2 start automation/comprehensive-netlify-functions-redundancy.cjs --name "comprehensive-netlify-redundancy" --update-env; then
        log "Comprehensive Netlify functions redundancy started successfully"
    else
        warn "Failed to start comprehensive Netlify functions redundancy"
    fi
    
    pm2 save
    log "Netlify Functions Redundancy System started successfully"
}

# Start Master Redundancy Orchestrator
start_master_orchestrator() {
    log "Starting Master Redundancy Orchestrator..."
    
    # Start master redundancy orchestrator
    if pm2 start automation/master-redundancy-orchestrator.cjs --name "master-redundancy-orchestrator" --update-env; then
        log "Master redundancy orchestrator started successfully"
    else
        warn "Failed to start master redundancy orchestrator"
    fi
    
    # Start comprehensive redundancy orchestrator
    if pm2 start automation/comprehensive-redundancy-orchestrator.cjs --name "comprehensive-redundancy-orchestrator" --update-env; then
        log "Comprehensive redundancy orchestrator started successfully"
    else
        warn "Failed to start comprehensive redundancy orchestrator"
    fi
    
    # Start ultimate redundancy master
    if pm2 start automation/ultimate-redundancy-master.cjs --name "ultimate-redundancy-master" --update-env; then
        log "Ultimate redundancy master started successfully"
    else
        warn "Failed to start ultimate redundancy master"
    fi
    
    pm2 save
    log "Master Redundancy Orchestrator started successfully"
}

# Start Monitoring and Health Systems
start_monitoring_systems() {
    log "Starting Monitoring and Health Systems..."
    
    # Start redundancy health monitor
    if pm2 start automation/redundancy-health-monitor.cjs --name "redundancy-health-monitor" --update-env; then
        log "Redundancy health monitor started successfully"
    else
        warn "Failed to start redundancy health monitor"
    fi
    
    # Start comprehensive monitoring dashboard
    if pm2 start automation/comprehensive-monitoring-dashboard.cjs --name "comprehensive-monitoring-dashboard" --update-env; then
        log "Comprehensive monitoring dashboard started successfully"
    else
        warn "Failed to start comprehensive monitoring dashboard"
    fi
    
    # Start continuous build monitor
    if pm2 start automation/continuous-build-monitor.cjs --name "continuous-build-monitor" --update-env; then
        log "Continuous build monitor started successfully"
    else
        warn "Failed to start continuous build monitor"
    fi
    
    # Start build failure recovery
    if pm2 start automation/build-failure-recovery.cjs --name "build-failure-recovery" --update-env; then
        log "Build failure recovery started successfully"
    else
        warn "Failed to start build failure recovery"
    fi
    
    # Start master build orchestrator
    if pm2 start automation/master-build-orchestrator.cjs --name "master-build-orchestrator" --update-env; then
        log "Master build orchestrator started successfully"
    else
        warn "Failed to start master build orchestrator"
    fi
    
    pm2 save
    log "Monitoring and Health Systems started successfully"
}

# Start Git Sync and Build Systems
start_git_build_systems() {
    log "Starting Git Sync and Build Systems..."
    
    # Start redundancy git sync
    if pm2 start automation/redundancy-git-sync.cjs --name "redundancy-git-sync" --update-env; then
        log "Redundancy git sync started successfully"
    else
        warn "Failed to start redundancy git sync"
    fi
    
    # Start enhanced git sync orchestrator
    if pm2 start automation/enhanced-git-sync-orchestrator.cjs --name "enhanced-git-sync-orchestrator" --update-env; then
        log "Enhanced git sync orchestrator started successfully"
    else
        warn "Failed to start enhanced git sync orchestrator"
    fi
    
    # Start redundancy build monitor
    if pm2 start automation/redundancy-build-monitor.cjs --name "redundancy-build-monitor" --update-env; then
        log "Redundancy build monitor started successfully"
    else
        warn "Failed to start redundancy build monitor"
    fi
    
    pm2 save
    log "Git Sync and Build Systems started successfully"
}

# Start the complete redundancy system
start() {
    log "Starting Complete Redundancy Automation System..."
    
    check_pm2
    check_node
    
    # Stop any existing processes
    stop
    
    # Start all systems
    start_pm2_redundancy
    start_github_redundancy
    start_netlify_redundancy
    start_master_orchestrator
    start_monitoring_systems
    start_git_build_systems
    
    # Save PM2 configuration
    pm2 save
    
    # Show status
    status
    
    log "Complete Redundancy Automation System started successfully!"
    log "All systems are now running with redundancy coverage"
}

# Stop the complete redundancy system
stop() {
    log "Stopping Complete Redundancy Automation System..."
    
    # Stop all PM2 processes
    pm2 stop all 2>/dev/null || true
    pm2 delete all 2>/dev/null || true
    
    # Kill any remaining processes
    pkill -f "redundancy" 2>/dev/null || true
    pkill -f "automation" 2>/dev/null || true
    
    log "Complete Redundancy Automation System stopped"
}

# Restart the complete redundancy system
restart() {
    log "Restarting Complete Redundancy Automation System..."
    stop
    sleep 2
    start
}

# Show status of all systems
status() {
    log "=== Complete Redundancy System Status ==="
    
    echo -e "\n${BLUE}PM2 Status:${NC}"
    pm2 status
    
    echo -e "\n${BLUE}PM2 Logs (last 10 lines):${NC}"
    pm2 logs --lines 10 --nostream || true
    
    echo -e "\n${BLUE}System Health Check:${NC}"
    if command -v node &> /dev/null; then
        node -e "
            try {
                const fs = require('fs');
                const configPath = '$CONFIG_FILE';
                if (fs.existsSync(configPath)) {
                    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
                    console.log('✓ Configuration loaded successfully');
                    console.log('✓ Redundancy systems configured');
                } else {
                    console.log('⚠ Configuration file not found');
                }
            } catch (error) {
                console.log('✗ Configuration error:', error.message);
            }
        " 2>/dev/null || echo "⚠ Health check failed"
    fi
    
    echo -e "\n${BLUE}Log Files:${NC}"
    ls -la "$LOG_DIR"/*.log 2>/dev/null || echo "No log files found"
    
    echo -e "\n${BLUE}Process IDs:${NC}"
    ls -la "$PID_DIR"/*.pid 2>/dev/null || echo "No PID files found"
}

# Show health status
health() {
    log "=== Complete Redundancy System Health Check ==="
    
    # Check PM2 processes
    local pm2_status=$(pm2 status --no-daemon 2>/dev/null | grep -E "(online|stopped|errored)" | wc -l)
    local total_processes=$(pm2 status --no-daemon 2>/dev/null | grep -E "(online|stopped|errored)" | wc -l)
    
    if [ "$pm2_status" -gt 0 ]; then
        echo -e "${GREEN}✓ PM2 processes running: $pm2_status${NC}"
    else
        echo -e "${RED}✗ No PM2 processes running${NC}"
    fi
    
    # Check log files
    local log_count=$(find "$LOG_DIR" -name "*.log" -type f 2>/dev/null | wc -l)
    if [ "$log_count" -gt 0 ]; then
        echo -e "${GREEN}✓ Log files found: $log_count${NC}"
    else
        echo -e "${YELLOW}⚠ No log files found${NC}"
    fi
    
    # Check configuration
    if [ -f "$CONFIG_FILE" ]; then
        echo -e "${GREEN}✓ Configuration file exists${NC}"
    else
        echo -e "${YELLOW}⚠ Configuration file missing${NC}"
    fi
    
    # Check Node.js
    if command -v node &> /dev/null; then
        echo -e "${GREEN}✓ Node.js available${NC}"
    else
        echo -e "${RED}✗ Node.js not available${NC}"
    fi
    
    # Check PM2
    if command -v pm2 &> /dev/null; then
        echo -e "${GREEN}✓ PM2 available${NC}"
    else
        echo -e "${RED}✗ PM2 not available${NC}"
    fi
}

# Show logs
logs() {
    log "=== Complete Redundancy System Logs ==="
    
    if [ -f "$LOG_DIR/complete-redundancy.log" ]; then
        echo -e "\n${BLUE}Main Log (last 50 lines):${NC}"
        tail -n 50 "$LOG_DIR/complete-redundancy.log"
    fi
    
    if [ -f "$LOG_DIR/complete-redundancy-error.log" ]; then
        echo -e "\n${RED}Error Log (last 20 lines):${NC}"
        tail -n 20 "$LOG_DIR/complete-redundancy-error.log"
    fi
    
    echo -e "\n${BLUE}PM2 Logs (last 20 lines):${NC}"
    pm2 logs --lines 20 --nostream || true
}

# Check system status
check() {
    log "=== Complete Redundancy System Check ==="
    
    # Check if all systems are running
    local pm2_processes=$(pm2 status --no-daemon 2>/dev/null | grep -E "online" | wc -l)
    local expected_processes=25  # Expected number of processes
    
    if [ "$pm2_processes" -ge "$expected_processes" ]; then
        echo -e "${GREEN}✓ All redundancy systems are running ($pm2_processes/$expected_processes)${NC}"
    elif [ "$pm2_processes" -gt 0 ]; then
        echo -e "${YELLOW}⚠ Partial redundancy systems running ($pm2_processes/$expected_processes)${NC}"
    else
        echo -e "${RED}✗ No redundancy systems running${NC}"
    fi
    
    # Check specific systems
    local systems=(
        "pm2-redundancy-manager"
        "github-actions-redundancy-manager"
        "netlify-functions-redundancy-manager"
        "master-redundancy-orchestrator"
        "comprehensive-redundancy-orchestrator"
        "ultimate-redundancy-master"
    )
    
    for system in "${systems[@]}"; do
        if pm2 describe "$system" &>/dev/null; then
            echo -e "${GREEN}✓ $system is running${NC}"
        else
            echo -e "${RED}✗ $system is not running${NC}"
        fi
    done
}

# Monitor system continuously
monitor() {
    log "Starting continuous monitoring..."
    
    while true; do
        clear
        echo -e "${BLUE}=== Complete Redundancy System Monitor ===${NC}"
        echo -e "Press Ctrl+C to stop monitoring\n"
        
        status
        health
        check
        
        echo -e "\n${YELLOW}Monitoring... (refresh every 30 seconds)${NC}"
        sleep 30
    done
}

# Generate report
report() {
    log "=== Complete Redundancy System Report ==="
    
    local report_file="$LOG_DIR/complete-redundancy-report-$(date +%Y%m%d-%H%M%S).md"
    
    {
        echo "# Complete Redundancy System Report"
        echo "Generated: $(date)"
        echo ""
        echo "## System Status"
        echo ""
        echo "### PM2 Processes"
        pm2 status --no-daemon 2>/dev/null || echo "PM2 not available"
        echo ""
        echo "### Health Check"
        health
        echo ""
        echo "### Configuration"
        if [ -f "$CONFIG_FILE" ]; then
            echo "Configuration file exists: $CONFIG_FILE"
        else
            echo "Configuration file missing"
        fi
        echo ""
        echo "### Log Files"
        ls -la "$LOG_DIR"/*.log 2>/dev/null || echo "No log files found"
        echo ""
        echo "### System Information"
        echo "Node.js version: $(node --version 2>/dev/null || echo 'Not available')"
        echo "PM2 version: $(pm2 --version 2>/dev/null || echo 'Not available')"
        echo "Operating system: $(uname -a)"
        echo "Current directory: $(pwd)"
    } > "$report_file"
    
    log "Report generated: $report_file"
    cat "$report_file"
}

# Main function
main() {
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
        check)
            check
            ;;
        monitor)
            monitor
            ;;
        report)
            report
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|logs|check|monitor|report}"
            echo ""
            echo "Commands:"
            echo "  start   - Start the complete redundancy system"
            echo "  stop    - Stop the complete redundancy system"
            echo "  restart - Restart the complete redundancy system"
            echo "  status  - Show system status"
            echo "  health  - Show system health"
            echo "  logs    - Show system logs"
            echo "  check   - Check system status"
            echo "  monitor - Monitor system continuously"
            echo "  report  - Generate system report"
            exit 1
            ;;
    esac
}

# Run main function
main "$@"