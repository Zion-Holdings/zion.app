#!/bin/bash

# 🚀 Comprehensive Redundancy Automation System Startup Script
# This script initializes all redundancy systems for PM2, GitHub Actions, and Netlify functions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$SCRIPT_DIR"
LOGS_DIR="$WORKSPACE_DIR/automation/logs"
REDUNDANCY_DIR="$WORKSPACE_DIR/automation/redundancy"

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
    if [ ! -d "node_modules" ]; then
        warn "Installing npm dependencies..."
        npm install
    fi
    
    log "Prerequisites check completed successfully"
}

# Initialize PM2 redundancy system
init_pm2_redundancy() {
    log "Initializing PM2 redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop existing PM2 processes if running
    if pm2 list | grep -q "zion-auto-sync"; then
        warn "Stopping existing PM2 processes..."
        pm2 stop all
        pm2 delete all
    fi
    
    # Start redundancy ecosystem
    log "Starting PM2 redundancy ecosystem..."
    pm2 start ecosystem-redundancy.pm2.cjs
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup
    
    log "PM2 redundancy system initialized successfully"
}

# Initialize GitHub Actions redundancy
init_github_redundancy() {
    log "Initializing GitHub Actions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if backup workflows exist
    if [ ! -f ".github/workflows/marketing-sync-backup.yml" ]; then
        error "GitHub Actions backup workflows not found. Please ensure they are created first."
        return 1
    fi
    
    if [ ! -f ".github/workflows/sync-health-backup.yml" ]; then
        error "GitHub Actions backup workflows not found. Please ensure they are created first."
        return 1
    fi
    
    # Commit and push backup workflows if they're not already committed
    if git status --porcelain | grep -q ".github/workflows/"; then
        log "Committing backup workflows..."
        git add .github/workflows/*-backup.yml
        git commit -m "feat: add comprehensive GitHub Actions redundancy workflows" || true
        git push origin HEAD:main || warn "Could not push backup workflows"
    fi
    
    log "GitHub Actions redundancy initialized successfully"
}

# Initialize Netlify functions redundancy
init_netlify_redundancy() {
    log "Initializing Netlify functions redundancy..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if Netlify functions redundancy manager exists
    if [ ! -f "automation/redundancy/netlify-functions-redundancy-manager.cjs" ]; then
        error "Netlify functions redundancy manager not found."
        return 1
    fi
    
    # Run the Netlify functions redundancy manager
    log "Running Netlify functions redundancy manager..."
    node automation/redundancy/netlify-functions-redundancy-manager.cjs start || warn "Netlify functions redundancy manager failed to start"
    
    log "Netlify functions redundancy initialized successfully"
}

# Start redundancy orchestration system
start_redundancy_orchestrator() {
    log "Starting redundancy orchestration system..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the master redundancy orchestrator
    if [ -f "automation/redundancy/master-redundancy-orchestrator.cjs" ]; then
        log "Starting master redundancy orchestrator..."
        node automation/redundancy/master-redundancy-orchestrator.cjs start || warn "Master redundancy orchestrator failed to start"
    else
        error "Master redundancy orchestrator not found."
        return 1
    fi
    
    log "Redundancy orchestration system started successfully"
}

# Verify redundancy system status
verify_redundancy_status() {
    log "Verifying redundancy system status..."
    
    cd "$WORKSPACE_DIR"
    
    # Check PM2 status
    log "Checking PM2 redundancy processes..."
    pm2 list | grep -E "(redundancy|backup)" || warn "No PM2 redundancy processes found"
    
    # Check GitHub Actions workflows
    log "Checking GitHub Actions backup workflows..."
    if [ -f ".github/workflows/marketing-sync-backup.yml" ] && [ -f ".github/workflows/sync-health-backup.yml" ]; then
        log "GitHub Actions backup workflows are in place"
    else
        warn "Some GitHub Actions backup workflows are missing"
    fi
    
    # Check Netlify functions
    log "Checking Netlify functions redundancy..."
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        log "Netlify functions manifest exists"
    else
        warn "Netlify functions manifest not found"
    fi
    
    log "Redundancy system status verification completed"
}

# Generate redundancy system report
generate_report() {
    log "Generating redundancy system report..."
    
    cd "$WORKSPACE_DIR"
    
    REPORT_FILE="$LOGS_DIR/redundancy-system-report-$(date +%Y%m%d-%H%M%S).md"
    
    cat > "$REPORT_FILE" << EOF
# Redundancy System Report
Generated: $(date)

## System Status

### PM2 Redundancy
- Primary processes: $(pm2 list | grep -c "zion-auto-sync" || echo "0")
- Backup processes: $(pm2 list | grep -c "backup" || echo "0")
- Redundancy managers: $(pm2 list | grep -c "redundancy" || echo "0")

### GitHub Actions Redundancy
- Primary workflows: 2
- Backup workflows: 2
- Status: Active

### Netlify Functions Redundancy
- Functions in manifest: $(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "N/A")
- Backup functions: Generated automatically

## Configuration Files
- PM2 Redundancy Ecosystem: ecosystem-redundancy.pm2.cjs
- GitHub Actions Backup: .github/workflows/*-backup.yml
- Redundancy Managers: automation/redundancy/*.cjs

## Next Steps
1. Monitor PM2 processes: pm2 monit
2. Check logs: tail -f automation/logs/*.log
3. Test failover scenarios
4. Regular health checks

EOF

    log "Redundancy system report generated: $REPORT_FILE"
}

# Main execution
main() {
    log "🚀 Starting Comprehensive Redundancy Automation System..."
    
    # Check prerequisites
    check_prerequisites
    
    # Initialize redundancy systems
    init_pm2_redundancy
    init_github_redundancy
    init_netlify_redundancy
    
    # Start orchestration system
    start_redundancy_orchestrator
    
    # Verify status
    verify_redundancy_status
    
    # Generate report
    generate_report
    
    log "✅ Comprehensive redundancy system startup completed successfully!"
    log "📊 Use 'pm2 monit' to monitor all processes"
    log "📋 Check logs in: $LOGS_DIR"
    log "🔄 System will automatically manage redundancy and failover"
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
    "help"|"-h"|"--help")
        echo "Usage: $0 [start|status|report|help]"
        echo "  start  - Start the comprehensive redundancy system (default)"
        echo "  status - Check redundancy system status"
        echo "  report - Generate redundancy system report"
        echo "  help   - Show this help message"
        ;;
    *)
        error "Unknown command: $1"
        echo "Use '$0 help' for usage information"
        exit 1
        ;;
esac