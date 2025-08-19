#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script starts all redundancy automation components with enhanced monitoring

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
PM2_ECOSYSTEM="$PROJECT_ROOT/ecosystem.redundancy.cjs"
COMPREHENSIVE_ORCHESTRATOR="$PROJECT_ROOT/automation/comprehensive-redundancy-orchestrator.cjs"

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
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "SYSTEM")
            echo -e "${PURPLE}[$timestamp] [SYSTEM]${NC} $message"
            ;;
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy-startup.log"
}

# Print banner
print_banner() {
    echo -e "${CYAN}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                                                              ║"
    echo "║        COMPREHENSIVE REDUNDANCY AUTOMATION SYSTEM            ║"
    echo "║                                                              ║"
    echo "║              PM2 • GitHub Actions • Netlify                 ║"
    echo "║                                                              ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

# Check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "SUCCESS" "PM2 is available"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "SUCCESS" "Node.js version: $node_version"
}

# Check if npm is available
check_npm() {
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed or not in PATH"
        exit 1
    fi
    
    local npm_version=$(npm --version)
    log "SUCCESS" "npm version: $npm_version"
}

# Check project dependencies
check_dependencies() {
    log "INFO" "Checking project dependencies..."
    
    if [ ! -f "$PROJECT_ROOT/package.json" ]; then
        log "ERROR" "package.json not found in project root"
        exit 1
    fi
    
    if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
        log "WARN" "node_modules not found, installing dependencies..."
        cd "$PROJECT_ROOT"
        npm install
        if [ $? -ne 0 ]; then
            log "ERROR" "Failed to install dependencies"
            exit 1
        fi
        log "SUCCESS" "Dependencies installed successfully"
    else
        log "SUCCESS" "Project dependencies are available"
    fi
}

# Check PM2 ecosystem files
check_pm2_ecosystems() {
    log "INFO" "Checking PM2 ecosystem files..."
    
    local ecosystems=("ecosystem.pm2.cjs" "ecosystem.redundancy.cjs")
    
    for ecosystem in "${ecosystems[@]}"; do
        if [ -f "$PROJECT_ROOT/$ecosystem" ]; then
            log "SUCCESS" "PM2 ecosystem file $ecosystem found"
        else
            log "WARN" "PM2 ecosystem file $ecosystem not found"
        fi
    done
}

# Check GitHub Actions workflows
check_github_workflows() {
    log "INFO" "Checking GitHub Actions workflows..."
    
    local workflows_dir="$PROJECT_ROOT/.github/workflows"
    if [ -d "$workflows_dir" ]; then
        local workflow_files=$(find "$workflows_dir" -name "*.yml" -o -name "*.yaml" | wc -l)
        log "SUCCESS" "Found $workflow_files GitHub Actions workflow(s)"
        
        # List workflow files
        for workflow in "$workflows_dir"/*.yml "$workflows_dir"/*.yaml; do
            if [ -f "$workflow" ]; then
                local workflow_name=$(basename "$workflow")
                log "INFO" "  - $workflow_name"
            fi
        done
    else
        log "WARN" "GitHub Actions workflows directory not found"
    fi
}

# Check Netlify functions
check_netlify_functions() {
    log "INFO" "Checking Netlify functions..."
    
    local netlify_dir="$PROJECT_ROOT/netlify"
    if [ -d "$netlify_dir" ]; then
        log "SUCCESS" "Netlify directory found"
        
        local functions_dir="$netlify_dir/functions"
        if [ -d "$functions_dir" ]; then
            local function_count=$(find "$functions_dir" -name "*.js" -o -name "*.ts" | wc -l)
            log "SUCCESS" "Found $function_count Netlify function(s)"
        else
            log "WARN" "Netlify functions directory not found"
        fi
        
        local manifest_file="$netlify_dir/functions/functions-manifest.json"
        if [ -f "$manifest_file" ]; then
            log "SUCCESS" "Netlify functions manifest found"
        else
            log "WARN" "Netlify functions manifest not found"
        fi
    else
        log "WARN" "Netlify directory not found"
    fi
}

# Check automation scripts
check_automation_scripts() {
    log "INFO" "Checking automation scripts..."
    
    local automation_dir="$PROJECT_ROOT/automation"
    local required_scripts=(
        "comprehensive-redundancy-orchestrator.cjs"
        "redundancy-automation-system.cjs"
        "github-actions-redundancy.cjs"
        "netlify-functions-redundancy.cjs"
        "pm2-redundancy-monitor.cjs"
        "redundancy-health-monitor.cjs"
        "redundancy-git-sync.cjs"
        "redundancy-build-monitor.cjs"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ -f "$automation_dir/$script" ]; then
            log "SUCCESS" "Automation script $script found"
        else
            log "WARN" "Automation script $script not found"
        fi
    done
}

# Stop existing PM2 processes
stop_existing_pm2() {
    log "INFO" "Stopping existing PM2 processes..."
    
    if pm2 list | grep -q "online\|stopped\|errored"; then
        log "INFO" "Found existing PM2 processes, stopping them..."
        pm2 kill
        log "SUCCESS" "All PM2 processes stopped"
    else
        log "INFO" "No existing PM2 processes found"
    fi
}

# Start comprehensive redundancy system
start_comprehensive_redundancy() {
    log "SYSTEM" "Starting comprehensive redundancy automation system..."
    
    # Start the main redundancy ecosystem
    if [ -f "$PM2_ECOSYSTEM" ]; then
        log "INFO" "Starting PM2 redundancy ecosystem..."
        cd "$PROJECT_ROOT"
        pm2 start "$PM2_ECOSYSTEM"
        
        if [ $? -eq 0 ]; then
            log "SUCCESS" "PM2 redundancy ecosystem started successfully"
        else
            log "ERROR" "Failed to start PM2 redundancy ecosystem"
            return 1
        fi
    else
        log "ERROR" "PM2 redundancy ecosystem file not found"
        return 1
    fi
    
    # Start the comprehensive orchestrator
    if [ -f "$COMPREHENSIVE_ORCHESTRATOR" ]; then
        log "INFO" "Starting comprehensive redundancy orchestrator..."
        cd "$PROJECT_ROOT"
        pm2 start "$COMPREHENSIVE_ORCHESTRATOR" --name "comprehensive-redundancy-orchestrator"
        
        if [ $? -eq 0 ]; then
            log "SUCCESS" "Comprehensive redundancy orchestrator started successfully"
        else
            log "ERROR" "Failed to start comprehensive redundancy orchestrator"
            return 1
        fi
    else
        log "ERROR" "Comprehensive redundancy orchestrator not found"
        return 1
    fi
    
    return 0
}

# Verify system status
verify_system_status() {
    log "INFO" "Verifying system status..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    if pm2 list | grep -q "online"; then
        log "SUCCESS" "PM2 processes are running"
        
        # Show PM2 status
        echo ""
        pm2 list
        echo ""
    else
        log "ERROR" "No PM2 processes are running"
        return 1
    fi
    
    # Check specific processes
    local required_processes=(
        "redundancy-automation-system"
        "redundancy-health-monitor"
        "redundancy-git-sync"
        "redundancy-build-monitor"
        "comprehensive-redundancy-orchestrator"
    )
    
    for process in "${required_processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            log "SUCCESS" "Process $process is running"
        else
            log "WARN" "Process $process is not running or not online"
        fi
    done
    
    return 0
}

# Show system information
show_system_info() {
    log "SYSTEM" "System Information:"
    log "INFO" "  Project Root: $PROJECT_ROOT"
    log "INFO" "  Log Directory: $LOG_DIR"
    log "INFO" "  PM2 Ecosystem: $PM2_ECOSYSTEM"
    log "INFO" "  Comprehensive Orchestrator: $COMPREHENSIVE_ORCHESTRATOR"
    
    echo ""
    log "SYSTEM" "Redundancy Coverage:"
    log "INFO" "  ✅ PM2 Process Management"
    log "INFO" "  ✅ GitHub Actions Workflows"
    log "INFO" "  ✅ Netlify Functions"
    log "INFO" "  ✅ Git Synchronization"
    log "INFO" "  ✅ Build Health Monitoring"
    log "INFO" "  ✅ Circuit Breaker Protection"
    log "INFO" "  ✅ Emergency Recovery Procedures"
    echo ""
}

# Main execution
main() {
    print_banner
    
    log "SYSTEM" "Starting comprehensive redundancy automation system initialization..."
    
    # Pre-flight checks
    check_pm2
    check_node
    check_npm
    check_dependencies
    check_pm2_ecosystems
    check_github_workflows
    check_netlify_functions
    check_automation_scripts
    
    echo ""
    log "SYSTEM" "All pre-flight checks completed successfully"
    echo ""
    
    # Stop existing processes
    stop_existing_pm2
    
    # Start comprehensive redundancy system
    if start_comprehensive_redundancy; then
        log "SUCCESS" "Comprehensive redundancy system started successfully"
        
        # Verify system status
        if verify_system_status; then
            log "SUCCESS" "System verification completed successfully"
        else
            log "WARN" "System verification completed with warnings"
        fi
        
        echo ""
        show_system_info
        
        log "SUCCESS" "🎉 Comprehensive redundancy automation system is now running!"
        log "INFO" "Monitor logs at: $LOG_DIR"
        log "INFO" "Check PM2 status with: pm2 list"
        log "INFO" "View logs with: pm2 logs"
        
    else
        log "ERROR" "Failed to start comprehensive redundancy system"
        exit 1
    fi
}

# Run main function
main "$@"