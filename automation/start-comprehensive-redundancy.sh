#!/bin/bash

# 🚀 Comprehensive Redundancy Automation System Startup Script
# This script manages the comprehensive redundancy system for all automations

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
WORKSPACE_DIR="$SCRIPT_DIR/.."
LOGS_DIR="$WORKSPACE_DIR/automation/logs"
REDUNDANCY_DIR="$WORKSPACE_DIR/automation"

# Ensure logs directory exists
mkdir -p "$LOGS_DIR"

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

info() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')] INFO:${NC} $1"
}

success() {
    echo -e "${CYAN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check if Node.js is installed
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 20+ first."
        exit 1
    fi
    
    # Check Node.js version
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        error "Node.js version 20+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    # Check if PM2 is installed
    if ! command -v pm2 &> /dev/null; then
        warn "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    # Check if required npm packages are installed
    if [ ! -d "$WORKSPACE_DIR/node_modules" ]; then
        warn "Installing npm dependencies..."
        cd "$WORKSPACE_DIR"
        npm install
    fi
    
    success "Prerequisites check completed successfully"
}

# Initialize PM2 redundancy system
init_pm2_redundancy() {
    log "Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop existing PM2 processes if running
    if pm2 list | grep -q "zion-auto-sync\|redundancy\|automation"; then
        warn "Stopping existing PM2 processes..."
        pm2 stop all
        pm2 delete all
    fi
    
    # Start comprehensive redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "Starting comprehensive PM2 redundancy ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env
    else
        warn "Comprehensive redundancy ecosystem file not found, starting basic redundancy..."
        pm2 start ecosystem.redundancy.cjs --update-env
    fi
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    success "PM2 redundancy system initialized successfully"
}

# Initialize GitHub Actions redundancy
init_github_redundancy() {
    log "Initializing GitHub Actions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if workflows directory exists
    if [ ! -d ".github/workflows" ]; then
        warn "GitHub Actions workflows directory not found"
        return 1
    fi
    
    # Validate workflow files
    local workflow_count=0
    local valid_workflows=0
    
    for workflow_file in .github/workflows/*.yml .github/workflows/*.yaml; do
        if [ -f "$workflow_file" ]; then
            workflow_count=$((workflow_count + 1))
            if grep -q "name:" "$workflow_file" && grep -q "on:" "$workflow_file" && grep -q "jobs:" "$workflow_file"; then
                valid_workflows=$((valid_workflows + 1))
            fi
        fi
    done
    
    if [ $workflow_count -eq 0 ]; then
        warn "No GitHub Actions workflows found"
        return 1
    fi
    
    log "Found $workflow_count workflow(s), $valid_workflows valid"
    
    # Create backup workflows if they don't exist
    if [ ! -f ".github/workflows/marketing-sync-backup.yml" ]; then
        log "Creating backup workflow for marketing-sync..."
        cp .github/workflows/marketing-sync.yml .github/workflows/marketing-sync-backup.yml
    fi
    
    if [ ! -f ".github/workflows/sync-health-backup.yml" ]; then
        log "Creating backup workflow for sync-health..."
        cp .github/workflows/sync-health.yml .github/workflows/sync-health-backup.yml
    fi
    
    success "GitHub Actions redundancy initialized successfully"
}

# Initialize Netlify functions redundancy
init_netlify_redundancy() {
    log "Initializing Netlify functions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if Netlify functions directory exists
    if [ ! -d "netlify/functions" ]; then
        warn "Netlify functions directory not found"
        return 1
    fi
    
    # Check if functions manifest exists
    if [ ! -f "netlify/functions/functions-manifest.json" ]; then
        warn "Netlify functions manifest not found, generating..."
        if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
            node scripts/generate-netlify-functions-manifest.cjs
        else
            warn "Netlify functions manifest generator not found"
            return 1
        fi
    fi
    
    # Validate functions manifest
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        local manifest_content=$(cat netlify/functions/functions-manifest.json)
        if echo "$manifest_content" | grep -q "functions" && echo "$manifest_content" | grep -q "generatedAt"; then
            success "Netlify functions manifest is valid"
        else
            warn "Netlify functions manifest appears to be invalid"
        fi
    fi
    
    success "Netlify functions redundancy initialized successfully"
}

# Start comprehensive redundancy monitoring
start_redundancy_monitoring() {
    log "Starting comprehensive redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the comprehensive redundancy automation system
    if [ -f "automation/comprehensive-redundancy-automation-system.cjs" ]; then
        log "Starting comprehensive redundancy automation system..."
        node automation/comprehensive-redundancy-automation-system.cjs start &
        local pid=$!
        echo $pid > "$LOGS_DIR/comprehensive-redundancy.pid"
        success "Comprehensive redundancy monitoring started with PID $pid"
    else
        error "Comprehensive redundancy automation system not found"
        return 1
    fi
}

# Stop redundancy monitoring
stop_redundancy_monitoring() {
    log "Stopping redundancy monitoring..."
    
    local pid_file="$LOGS_DIR/comprehensive-redundancy.pid"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            kill "$pid"
            success "Stopped redundancy monitoring (PID: $pid)"
        else
            warn "Process $pid is not running"
        fi
        rm -f "$pid_file"
    else
        warn "No PID file found for redundancy monitoring"
    fi
    
    # Also stop via the system if it's running
    cd "$WORKSPACE_DIR"
    if [ -f "automation/comprehensive-redundancy-automation-system.cjs" ]; then
        node automation/comprehensive-redundancy-automation-system.cjs stop || true
    fi
}

# Check system health
check_system_health() {
    log "Checking system health..."
    
    cd "$WORKSPACE_DIR"
    
    local overall_health=true
    
    # Check PM2 health
    if command -v pm2 &> /dev/null; then
        if pm2 list | grep -q "online"; then
            success "PM2 processes are running"
        else
            warn "PM2 processes are not running"
            overall_health=false
        fi
    else
        warn "PM2 is not installed"
        overall_health=false
    fi
    
    # Check GitHub Actions workflows
    if [ -d ".github/workflows" ]; then
        local workflow_count=$(find .github/workflows -name "*.yml" -o -name "*.yaml" | wc -l)
        if [ $workflow_count -gt 0 ]; then
            success "GitHub Actions workflows found: $workflow_count"
        else
            warn "No GitHub Actions workflows found"
            overall_health=false
        fi
    else
        warn "GitHub Actions workflows directory not found"
        overall_health=false
    fi
    
    # Check Netlify functions
    if [ -d "netlify/functions" ]; then
        if [ -f "netlify/functions/functions-manifest.json" ]; then
            success "Netlify functions manifest exists"
        else
            warn "Netlify functions manifest not found"
            overall_health=false
        fi
    else
        warn "Netlify functions directory not found"
        overall_health=false
    fi
    
    # Check redundancy monitoring
    local pid_file="$LOGS_DIR/comprehensive-redundancy.pid"
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 "$pid" 2>/dev/null; then
            success "Redundancy monitoring is running (PID: $pid)"
        else
            warn "Redundancy monitoring PID file exists but process is not running"
            overall_health=false
        fi
    else
        warn "Redundancy monitoring is not running"
        overall_health=false
    fi
    
    if [ "$overall_health" = true ]; then
        success "System health check completed - ALL SYSTEMS HEALTHY"
        return 0
    else
        warn "System health check completed - SOME SYSTEMS NEED ATTENTION"
        return 1
    fi
}

# Generate comprehensive report
generate_report() {
    log "Generating comprehensive redundancy report..."
    
    cd "$WORKSPACE_DIR"
    
    local report_file="$LOGS_DIR/redundancy-report-$(date +%Y%m%d-%H%M%S).md"
    
    {
        echo "# Comprehensive Redundancy System Report"
        echo "Generated: $(date)"
        echo ""
        echo "## System Status"
        echo ""
        
        # PM2 Status
        echo "### PM2 Processes"
        if command -v pm2 &> /dev/null; then
            pm2 list | sed 's/^/    /'
        else
            echo "    PM2 not installed"
        fi
        echo ""
        
        # GitHub Actions Status
        echo "### GitHub Actions Workflows"
        if [ -d ".github/workflows" ]; then
            for workflow in .github/workflows/*.yml .github/workflows/*.yaml; do
                if [ -f "$workflow" ]; then
                    echo "    - $(basename "$workflow")"
                fi
            done
        else
            echo "    No workflows directory found"
        fi
        echo ""
        
        # Netlify Functions Status
        echo "### Netlify Functions"
        if [ -d "netlify/functions" ]; then
            if [ -f "netlify/functions/functions-manifest.json" ]; then
                local func_count=$(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "0")
                echo "    Functions count: $func_count"
            else
                echo "    No functions manifest found"
            fi
        else
            echo "    No functions directory found"
        fi
        echo ""
        
        # Redundancy Monitoring Status
        echo "### Redundancy Monitoring"
        local pid_file="$LOGS_DIR/comprehensive-redundancy.pid"
        if [ -f "$pid_file" ]; then
            local pid=$(cat "$pid_file")
            if kill -0 "$pid" 2>/dev/null; then
                echo "    Status: Running (PID: $pid)"
            else
                echo "    Status: PID file exists but process not running"
            fi
        else
            echo "    Status: Not running"
        fi
        echo ""
        
        echo "## Recommendations"
        echo ""
        echo "1. Ensure all PM2 processes are running"
        echo "2. Validate GitHub Actions workflow syntax"
        echo "3. Keep Netlify functions manifest updated"
        echo "4. Monitor redundancy system logs regularly"
        
    } > "$report_file"
    
    success "Comprehensive report generated: $report_file"
    echo "Report saved to: $report_file"
}

# Show logs
show_logs() {
    log "Showing redundancy system logs..."
    
    local log_file="$LOGS_DIR/comprehensive-redundancy.log"
    if [ -f "$log_file" ]; then
        echo "=== Last 50 lines of redundancy system logs ==="
        tail -n 50 "$log_file"
    else
        warn "No redundancy system logs found"
    fi
    
    echo ""
    echo "=== PM2 Logs ==="
    pm2 logs --lines 20 || true
}

# Main function
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            log "🚀 Starting Comprehensive Redundancy Automation System..."
            check_prerequisites
            init_pm2_redundancy
            init_github_redundancy
            init_netlify_redundancy
            start_redundancy_monitoring
            success "Comprehensive redundancy system started successfully!"
            ;;
        stop)
            log "🛑 Stopping Comprehensive Redundancy Automation System..."
            stop_redundancy_monitoring
            success "Comprehensive redundancy system stopped successfully!"
            ;;
        restart)
            log "🔄 Restarting Comprehensive Redundancy Automation System..."
            stop_redundancy_monitoring
            sleep 2
            check_prerequisites
            init_pm2_redundancy
            init_github_redundancy
            init_netlify_redundancy
            start_redundancy_monitoring
            success "Comprehensive redundancy system restarted successfully!"
            ;;
        status)
            log "📊 Checking Comprehensive Redundancy System Status..."
            check_system_health
            ;;
        health)
            log "🏥 Performing System Health Check..."
            check_system_health
            ;;
        report)
            log "📋 Generating Comprehensive Redundancy Report..."
            generate_report
            ;;
        logs)
            log "📝 Showing System Logs..."
            show_logs
            ;;
        check)
            log "🔍 Running System Check..."
            check_system_health
            ;;
        *)
            echo "Usage: $0 {start|stop|restart|status|health|report|logs|check}"
            echo ""
            echo "Commands:"
            echo "  start     - Start the comprehensive redundancy system"
            echo "  stop      - Stop the comprehensive redundancy system"
            echo "  restart   - Restart the comprehensive redundancy system"
            echo "  status    - Check system status"
            echo "  health    - Perform health check"
            echo "  report    - Generate comprehensive report"
            echo "  logs      - Show system logs"
            echo "  check     - Run system check"
            echo ""
            echo "Examples:"
            echo "  $0 start"
            echo "  $0 status"
            echo "  $0 health"
            echo "  $0 report"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"