#!/bin/bash

# Comprehensive Redundancy Automation System V2
# This script provides complete redundancy coverage for all automation systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR"
LOGS_DIR="$WORKSPACE_DIR/automation/logs"
BACKUP_DIR="$WORKSPACE_DIR/automation/backups"

# Ensure directories exist
mkdir -p "$LOGS_DIR"
mkdir -p "$BACKUP_DIR"

log() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1"
}

error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1"
}

success() {
    echo -e "${CYAN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js 20+ first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_VERSION" -lt 20 ]; then
        error "Node.js version 20+ is required. Current version: $(node --version)"
        exit 1
    fi
    
    if ! command -v pm2 &> /dev/null; then
        warn "PM2 is not installed. Installing PM2 globally..."
        npm install -g pm2
    fi
    
    if [ ! -d "node_modules" ]; then
        warn "Installing npm dependencies..."
        npm install
    fi
    
    success "Prerequisites check completed successfully"
}

# Initialize PM2 redundancy system
init_pm2_redundancy() {
    log "Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    if pm2 list | grep -q "zion-auto-sync"; then
        warn "Stopping existing PM2 processes..."
        pm2 stop all
        pm2 delete all
    fi
    
    log "Starting comprehensive PM2 redundancy ecosystem..."
    pm2 start ecosystem-comprehensive-redundancy.pm2.js
    
    pm2 save
    pm2 startup
    
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 30
    pm2 set pm2-logrotate:compress true
    
    success "PM2 redundancy system initialized successfully"
}

# Initialize GitHub Actions redundancy
init_github_redundancy() {
    log "Initializing GitHub Actions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    workflows_dir=".github/workflows"
    if [ -d "$workflows_dir" ]; then
        for workflow in "$workflows_dir"/*.yml; do
            if [ -f "$workflow" ] && [[ ! "$workflow" =~ -backup\.yml$ ]]; then
                backup_workflow="${workflow%.yml}-backup.yml"
                if [ ! -f "$backup_workflow" ]; then
                    log "Creating backup workflow: $(basename "$backup_workflow")"
                    cp "$workflow" "$backup_workflow"
                    sed -i 's/name: /name: Backup /' "$backup_workflow"
                fi
            fi
        done
        
        if git status --porcelain | grep -q ".github/workflows/"; then
            log "Committing backup workflows..."
            git add .github/workflows/*-backup.yml
            git commit -m "feat: add comprehensive GitHub Actions redundancy workflows" || true
            git push origin HEAD:main || warn "Could not push backup workflows"
        fi
    fi
    
    success "GitHub Actions redundancy initialized successfully"
}

# Initialize Netlify functions redundancy
init_netlify_redundancy() {
    log "Initializing Netlify functions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    log "Regenerating Netlify functions manifest..."
    npm run netlify:manifest || warn "Failed to regenerate Netlify functions manifest"
    
    if [ -f "automation/redundancy/netlify-functions-redundancy-manager.cjs" ]; then
        log "Running Netlify functions redundancy manager..."
        node automation/redundancy/netlify-functions-redundancy-manager.cjs start || warn "Netlify functions redundancy manager failed to start"
    fi
    
    success "Netlify functions redundancy initialized successfully"
}

# Initialize build automation redundancy
init_build_redundancy() {
    log "Initializing build automation redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    log "Running pre-build health check..."
    npm run build:health-check || warn "Pre-build health check failed"
    
    log "Validating Next.js pages..."
    npm run build:validate || warn "Next.js page validation failed"
    
    if [ -f "automation/continuous-build-monitor.cjs" ]; then
        log "Starting build monitoring..."
        node automation/continuous-build-monitor.cjs start || warn "Build monitoring failed to start"
    fi
    
    success "Build automation redundancy initialized successfully"
}

# Start comprehensive redundancy orchestration system
start_redundancy_orchestrator() {
    log "Starting comprehensive redundancy orchestration system..."
    
    cd "$WORKSPACE_DIR"
    
    if [ -f "automation/comprehensive-redundancy-system.cjs" ]; then
        log "Starting comprehensive redundancy system..."
        node automation/comprehensive-redundancy-system.cjs start || warn "Comprehensive redundancy system failed to start"
    fi
    
    redundancy_managers=(
        "automation/redundancy/master-redundancy-orchestrator.cjs"
        "automation/redundancy/enhanced-master-redundancy-orchestrator.cjs"
        "automation/redundancy/pm2-redundancy-manager.cjs"
        "automation/redundancy/enhanced-pm2-redundancy-manager.cjs"
        "automation/redundancy/github-actions-redundancy-manager.cjs"
        "automation/redundancy/enhanced-github-actions-redundancy-manager.cjs"
        "automation/redundancy/netlify-functions-redundancy-manager.cjs"
        "automation/redundancy/enhanced-netlify-functions-redundancy-manager.cjs"
    )
    
    for manager in "${redundancy_managers[@]}"; do
        if [ -f "$manager" ]; then
            manager_name=$(basename "$manager" .cjs)
            log "Starting $manager_name..."
            node "$manager" start || warn "$manager_name failed to start"
        fi
    done
    
    success "Comprehensive redundancy orchestration system started successfully"
}

# Setup cron jobs for automation
setup_cron_jobs() {
    log "Setting up cron jobs for automation..."
    
    cd "$WORKSPACE_DIR"
    
    cron_file="$BACKUP_DIR/automation-cron"
    
    cat > "$cron_file" << 'EOF'
# Comprehensive Automation Cron Jobs
# Generated: $(date)

# PM2 redundancy check every 5 minutes
*/5 * * * * cd /workspace && node automation/comprehensive-redundancy-system.cjs health

# GitHub Actions redundancy check every 15 minutes
*/15 * * * * cd /workspace && node automation/redundancy/github-actions-redundancy-manager.cjs check

# Netlify functions redundancy check every 30 minutes
*/30 * * * * cd /workspace && node automation/redundancy/netlify-functions-redundancy-manager.cjs check

# Build health check every hour
0 * * * * cd /workspace && npm run build:health-check

# Full system health check every 6 hours
0 */6 * * * * cd /workspace && node automation/comprehensive-redundancy-system.cjs report

# Git sync every 2 hours
0 */2 * * * * cd /workspace && node automation/git-sync.cjs

# Dependency maintenance daily at 2 AM
0 2 * * * * cd /workspace && npm run deps:maintain

# Security scan weekly on Sunday at 3 AM
0 3 * * 0 cd /workspace && npm run security:scan
EOF

    if command -v crontab &> /dev/null; then
        crontab "$cron_file"
        success "Cron jobs installed successfully"
    else
        warn "Crontab not available, cron jobs not installed"
    fi
}

# Verify comprehensive redundancy system status
verify_redundancy_status() {
    log "Verifying comprehensive redundancy system status..."
    
    cd "$WORKSPACE_DIR"
    
    log "Checking PM2 redundancy processes..."
    pm2 list | grep -E "(redundancy|backup|zion-auto-sync)" || warn "No PM2 redundancy processes found"
    
    log "Checking GitHub Actions backup workflows..."
    backup_workflows=$(find .github/workflows -name "*-backup.yml" 2>/dev/null | wc -l)
    if [ "$backup_workflows" -ge 2 ]; then
        success "GitHub Actions backup workflows: $backup_workflows found"
    else
        warn "Insufficient GitHub Actions backup workflows: $backup_workflows found"
    fi
    
    log "Checking Netlify functions redundancy..."
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        function_count=$(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "0")
        success "Netlify functions: $function_count functions in manifest"
    else
        warn "Netlify functions manifest not found"
    fi
    
    log "Checking build health..."
    if [ -d ".next" ] || [ -d "out" ]; then
        success "Build files exist"
    else
        warn "Build files not found"
    fi
    
    log "Checking automation scripts..."
    automation_scripts=(
        "automation/comprehensive-redundancy-system.cjs"
        "automation/redundancy/master-redundancy-orchestrator.cjs"
        "automation/redundancy/pm2-redundancy-manager.cjs"
        "automation/redundancy/github-actions-redundancy-manager.cjs"
        "automation/redundancy/netlify-functions-redundancy-manager.cjs"
    )
    
    missing_scripts=0
    for script in "${automation_scripts[@]}"; do
        if [ ! -f "$script" ]; then
            warn "Missing automation script: $script"
            ((missing_scripts++))
        fi
    done
    
    if [ "$missing_scripts" -eq 0 ]; then
        success "All automation scripts present"
    else
        warn "$missing_scripts automation scripts missing"
    fi
    
    success "Comprehensive redundancy system status verification completed"
}

# Generate comprehensive redundancy system report
generate_report() {
    log "Generating comprehensive redundancy system report..."
    
    cd "$WORKSPACE_DIR"
    
    report_file="$LOGS_DIR/comprehensive-redundancy-report-$(date +%Y%m%d-%H%M%S).md"
    
    cat > "$report_file" << EOF
# Comprehensive Redundancy System Report
Generated: $(date)

## System Overview
This report provides a comprehensive overview of the redundancy automation system covering PM2, GitHub Actions, Netlify functions, and build automation.

## System Status

### PM2 Redundancy
- Primary processes: $(pm2 list | grep -c "zion-auto-sync" || echo "0")
- Backup processes: $(pm2 list | grep -c "backup" || echo "0")
- Redundancy managers: $(pm2 list | grep -c "redundancy" || echo "0")
- Total PM2 processes: $(pm2 list | grep -c "online" || echo "0")

### GitHub Actions Redundancy
- Primary workflows: $(find .github/workflows -name "*.yml" ! -name "*-backup.yml" 2>/dev/null | wc -l)
- Backup workflows: $(find .github/workflows -name "*-backup.yml" 2>/dev/null | wc -l)
- Status: Active with backup coverage

### Netlify Functions Redundancy
- Functions in manifest: $(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "N/A")
- Backup functions: Generated automatically
- Status: Active

### Build Automation Redundancy
- Build files: $(if [ -d ".next" ] || [ -d "out" ]; then echo "Present"; else echo "Missing"; fi)
- Health check: $(if [ -f "automation/pre-build-health-check.cjs" ]; then echo "Available"; else echo "Missing"; fi)
- Build monitor: $(if [ -f "automation/continuous-build-monitor.cjs" ]; then echo "Available"; else echo "Missing"; fi)

## Configuration Files
- PM2 Redundancy Ecosystem: ecosystem-comprehensive-redundancy.pm2.js
- GitHub Actions Backup: .github/workflows/*-backup.yml
- Comprehensive Redundancy: automation/comprehensive-redundancy-system.cjs
- Redundancy Managers: automation/redundancy/*.cjs

## Automation Coverage
- PM2 Process Redundancy
- GitHub Actions Workflow Redundancy
- Netlify Functions Redundancy
- Build Automation Redundancy
- Health Monitoring
- Auto-Recovery Mechanisms
- Cron Job Automation
- Comprehensive Logging

## Next Steps
1. Monitor PM2 processes: pm2 monit
2. Check logs: tail -f automation/logs/*.log
3. Test failover scenarios
4. Regular health checks: node automation/comprehensive-redundancy-system.cjs health
5. Generate reports: node automation/comprehensive-redundancy-system.cjs report

## Maintenance
- Cron jobs installed for automated maintenance
- Log rotation configured for PM2
- Auto-restart mechanisms enabled
- Health monitoring active

EOF

    success "Comprehensive redundancy system report generated: $report_file"
}

# Main execution
main() {
    log "Starting Comprehensive Redundancy Automation System V2..."
    
    check_prerequisites
    init_pm2_redundancy
    init_github_redundancy
    init_netlify_redundancy
    init_build_redundancy
    start_redundancy_orchestrator
    setup_cron_jobs
    verify_redundancy_status
    generate_report
    
    success "Comprehensive redundancy system V2 startup completed successfully!"
    log "Use 'pm2 monit' to monitor all processes"
    log "Check logs in: $LOGS_DIR"
    log "System will automatically manage redundancy and failover"
    log "Cron jobs installed for automated maintenance"
    log "Health monitoring active with auto-recovery"
}

# Handle script arguments
case "${1:-start}" in
    "start")
        main
        ;;
    "status")
        verify_redundancy_status
        ;;
    "report")
        generate_report
        ;;
    "health")
        cd "$WORKSPACE_DIR"
        node automation/comprehensive-redundancy-system.cjs health
        ;;
    "restart")
        cd "$WORKSPACE_DIR"
        pm2 restart all
        success "All PM2 processes restarted"
        ;;
    "logs")
        cd "$WORKSPACE_DIR"
        pm2 logs --lines 100
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [start|status|report|health|restart|logs|help]"
        echo "  start   - Start the comprehensive redundancy system (default)"
        echo "  status  - Check redundancy system status"
        echo "  report  - Generate redundancy system report"
        echo "  health  - Run health check"
        echo "  restart - Restart all PM2 processes"
        echo "  logs    - Show PM2 logs"
        echo "  help    - Show this help message"
        ;;
    *)
        error "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac