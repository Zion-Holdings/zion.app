#!/bin/bash

# Ultimate Redundancy Automation System Startup Script
# Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
PID_FILE="$LOG_DIR/ultimate-redundancy.pid"
LOG_FILE="$LOG_DIR/ultimate-redundancy.log"
CONFIG_FILE="$WORKSPACE_DIR/automation/ultimate-redundancy-config.json"

# Ensure log directory exists
mkdir -p "$LOG_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
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
        "SUCCESS")
            echo -e "${CYAN}[$timestamp] [SUCCESS]${NC} $message"
            ;;
        "SYSTEM")
            echo -e "${PURPLE}[$timestamp] [SYSTEM]${NC} $message"
            ;;
    esac
    
    echo "[$timestamp] [$level] $message" >> "$LOG_FILE"
}

# Check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Check if PM2 is available
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed or not in PATH"
        return 1
    fi
    
    local pm2_version=$(pm2 --version)
    log "INFO" "PM2 version: $pm2_version"
    return 0
}

# Check if Git is available
check_git() {
    if ! command -v git &> /dev/null; then
        log "ERROR" "Git is not installed or not in PATH"
        exit 1
    fi
    
    local git_version=$(git --version)
    log "INFO" "Git version: $git_version"
}

# Check workspace status
check_workspace() {
    cd "$WORKSPACE_DIR"
    
    if [ ! -f "package.json" ]; then
        log "ERROR" "Not in a valid Node.js workspace (package.json not found)"
        exit 1
    fi
    
    if [ ! -d ".git" ]; then
        log "ERROR" "Not in a valid Git repository"
        exit 1
    fi
    
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Repository: $(git remote get-url origin 2>/dev/null || echo 'No remote')"
}

# Check dependencies
check_dependencies() {
    log "INFO" "Checking dependencies..."
    
    # Check if required packages are installed
    local missing_packages=()
    
    if ! node -e "require('node-cron')" &> /dev/null; then
        missing_packages+=("node-cron")
    fi
    
    if ! node -e "require('fs-extra')" &> /dev/null; then
        missing_packages+=("fs-extra")
    fi
    
    if [ ${#missing_packages[@]} -gt 0 ]; then
        log "WARN" "Missing packages: ${missing_packages[*]}"
        log "INFO" "Installing missing packages..."
        npm install "${missing_packages[@]}"
    else
        log "SUCCESS" "All required packages are installed"
    fi
}

# Initialize ultimate redundancy configuration
init_config() {
    if [ ! -f "$CONFIG_FILE" ]; then
        log "INFO" "Creating ultimate redundancy configuration..."
        
        cat > "$CONFIG_FILE" << EOF
{
  "system": {
    "name": "Ultimate Redundancy Automation System",
    "version": "2.0.0",
    "description": "Comprehensive redundancy for PM2, GitHub Actions, and Netlify Functions",
    "autoRecovery": true,
    "loadBalancing": true,
    "monitoring": {
      "enabled": true,
      "healthCheckInterval": 300000,
      "alertThreshold": 3
    }
  },
  "pm2": {
    "enabled": true,
    "ecosystemFiles": [
      "ecosystem.pm2.cjs",
      "ecosystem.redundancy.cjs",
      "ecosystem.comprehensive-redundancy.cjs"
    ],
    "criticalProcesses": [
      "zion-auto-sync",
      "redundancy-automation-system",
      "master-redundancy-orchestrator",
      "enhanced-pm2-redundancy"
    ],
    "healthCheckInterval": 30000,
    "maxRestartAttempts": 5,
    "autoRecovery": true
  },
  "githubActions": {
    "enabled": true,
    "workflows": [
      ".github/workflows/marketing-sync.yml",
      ".github/workflows/sync-health.yml",
      ".github/workflows/marketing-sync-backup.yml",
      ".github/workflows/sync-health-backup.yml"
    ],
    "healthCheckInterval": 60000,
    "maxFailureThreshold": 3,
    "autoTrigger": true,
    "backupTriggers": true
  },
  "netlifyFunctions": {
    "enabled": true,
    "manifestFile": "netlify/functions/functions-manifest.json",
    "healthCheckInterval": 120000,
    "maxFailureThreshold": 2,
    "autoRegenerate": true,
    "deploymentCheck": true
  },
  "logging": {
    "level": "INFO",
    "rotation": true,
    "maxSize": "10M",
    "retain": 30
  }
}
EOF
        
        log "SUCCESS" "Configuration file created: $CONFIG_FILE"
    else
        log "INFO" "Configuration file already exists: $CONFIG_FILE"
    fi
}

# Start PM2 redundancy system
start_pm2_redundancy() {
    log "SYSTEM" "Starting PM2 Redundancy System..."
    
    if ! check_pm2; then
        log "ERROR" "PM2 not available, skipping PM2 redundancy"
        return 1
    fi
    
    cd "$WORKSPACE_DIR"
    
    # Check if PM2 processes are already running
    if pm2 list | grep -q "redundancy"; then
        log "INFO" "PM2 redundancy processes already running, restarting..."
        pm2 restart ecosystem.comprehensive-redundancy.cjs || true
    else
        log "INFO" "Starting PM2 comprehensive redundancy ecosystem..."
        
        # Ensure logs directory exists
        mkdir -p automation/logs
        
        # Start the comprehensive redundancy ecosystem
        if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
            pm2 start ecosystem.comprehensive-redundancy.cjs --update-env
            log "SUCCESS" "PM2 comprehensive redundancy ecosystem started"
        else
            log "WARN" "ecosystem.comprehensive-redundancy.cjs not found, trying fallback..."
            
            if [ -f "ecosystem.redundancy.cjs" ]; then
                pm2 start ecosystem.redundancy.cjs --update-env
                log "SUCCESS" "PM2 redundancy ecosystem started (fallback)"
            else
                log "ERROR" "No PM2 ecosystem files found"
                return 1
            fi
        fi
        
        # Install and configure PM2 logrotate
        pm2 install pm2-logrotate || true
        pm2 set pm2-logrotate:max_size 10M || true
        pm2 set pm2-logrotate:retain 30 || true
        pm2 set pm2-logrotate:compress true || true
        
        # Save PM2 configuration
        pm2 save || true
    fi
    
    log "SUCCESS" "PM2 Redundancy System started successfully"
    return 0
}

# Start GitHub Actions redundancy system
start_github_redundancy() {
    log "SYSTEM" "Starting GitHub Actions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if .github/workflows directory exists
    if [ ! -d ".github/workflows" ]; then
        log "WARN" "No GitHub Actions workflows directory found"
        return 1
    fi
    
    # List available workflows
    local workflows=($(find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null))
    log "INFO" "Found ${#workflows[@]} GitHub Actions workflows"
    
    # Check for backup workflows
    local backup_workflows=($(find .github/workflows -name "*backup*" -o -name "*backup*" 2>/dev/null))
    if [ ${#backup_workflows[@]} -gt 0 ]; then
        log "SUCCESS" "Found ${#backup_workflows[@]} backup workflows for redundancy"
    fi
    
    # Validate workflow files
    local valid_workflows=0
    for workflow in "${workflows[@]}"; do
        if grep -q "on:" "$workflow" && grep -q "jobs:" "$workflow"; then
            ((valid_workflows++))
        else
            log "WARN" "Invalid workflow file: $workflow"
        fi
    done
    
    log "INFO" "Valid workflows: $valid_workflows/${#workflows[@]}"
    
    if [ $valid_workflows -gt 0 ]; then
        log "SUCCESS" "GitHub Actions Redundancy System validated successfully"
        return 0
    else
        log "ERROR" "No valid GitHub Actions workflows found"
        return 1
    fi
}

# Start Netlify Functions redundancy system
start_netlify_redundancy() {
    log "SYSTEM" "Starting Netlify Functions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if netlify directory exists
    if [ ! -d "netlify" ]; then
        log "WARN" "No Netlify directory found"
        return 1
    fi
    
    # Check if functions directory exists
    if [ ! -d "netlify/functions" ]; then
        log "WARN" "No Netlify functions directory found"
        return 1
    fi
    
    # Check functions manifest
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        local function_count=$(node -e "
            try {
                const manifest = require('./netlify/functions/functions-manifest.json');
                console.log(manifest.functions ? manifest.functions.length : 0);
            } catch(e) {
                console.log(0);
            }
        ")
        
        log "INFO" "Found $function_count Netlify functions in manifest"
        
        if [ "$function_count" -gt 0 ]; then
            log "SUCCESS" "Netlify Functions Redundancy System validated successfully"
            return 0
        else
            log "WARN" "Netlify functions manifest is empty"
        fi
    else
        log "WARN" "Netlify functions manifest not found"
    fi
    
    # Try to regenerate manifest
    if [ -f "scripts/generate-netlify-functions-manifest.cjs" ]; then
        log "INFO" "Attempting to regenerate Netlify functions manifest..."
        node scripts/generate-netlify-functions-manifest.cjs
        
        if [ -f "netlify/functions/functions-manifest.json" ]; then
            log "SUCCESS" "Netlify functions manifest regenerated"
            return 0
        fi
    fi
    
    log "ERROR" "Failed to initialize Netlify Functions Redundancy System"
    return 1
}

# Start ultimate redundancy master system
start_ultimate_redundancy() {
    log "SYSTEM" "Starting Ultimate Redundancy Master System..."
    
    cd "$WORKSPACE_DIR"
    
    # Check if the ultimate redundancy master script exists
    if [ ! -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "ERROR" "Ultimate redundancy master script not found"
        return 1
    fi
    
    # Start the ultimate redundancy master system
    log "INFO" "Starting ultimate redundancy monitoring..."
    node automation/ultimate-redundancy-master.cjs start &
    
    local master_pid=$!
    echo "$master_pid" > "$PID_FILE"
    
    # Wait a moment for the system to start
    sleep 3
    
    # Check if the process is running
    if kill -0 "$master_pid" 2>/dev/null; then
        log "SUCCESS" "Ultimate Redundancy Master System started (PID: $master_pid)"
        return 0
    else
        log "ERROR" "Failed to start Ultimate Redundancy Master System"
        return 1
    fi
}

# Start all redundancy systems
start_all() {
    log "SYSTEM" "Starting Ultimate Redundancy Automation System..."
    
    # Initialize configuration
    init_config
    
    # Start individual redundancy systems
    local pm2_success=false
    local github_success=false
    local netlify_success=false
    local master_success=false
    
    if start_pm2_redundancy; then
        pm2_success=true
    fi
    
    if start_github_redundancy; then
        github_success=true
    fi
    
    if start_netlify_redundancy; then
        netlify_success=true
    fi
    
    if start_ultimate_redundancy; then
        master_success=true
    fi
    
    # Summary
    log "SYSTEM" "=== Redundancy System Startup Summary ==="
    log "INFO" "PM2 Redundancy: $([ "$pm2_success" = true ] && echo "STARTED" || echo "FAILED")"
    log "INFO" "GitHub Actions Redundancy: $([ "$github_success" = true ] && echo "STARTED" || echo "FAILED")"
    log "INFO" "Netlify Functions Redundancy: $([ "$netlify_success" = true ] && echo "STARTED" || echo "FAILED")"
    log "INFO" "Ultimate Redundancy Master: $([ "$master_success" = true ] && echo "STARTED" || echo "FAILED")"
    
    local total_systems=4
    local successful_systems=$((pm2_success + github_success + netlify_success + master_success))
    
    if [ $successful_systems -eq $total_systems ]; then
        log "SUCCESS" "All redundancy systems started successfully!"
        return 0
    elif [ $successful_systems -gt 0 ]; then
        log "WARN" "Some redundancy systems failed to start ($successful_systems/$total_systems)"
        return 1
    else
        log "ERROR" "All redundancy systems failed to start"
        return 1
    fi
}

# Stop all redundancy systems
stop_all() {
    log "SYSTEM" "Stopping Ultimate Redundancy Automation System..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop ultimate redundancy master
    if [ -f "$PID_FILE" ]; then
        local master_pid=$(cat "$PID_FILE")
        if kill -0 "$master_pid" 2>/dev/null; then
            log "INFO" "Stopping Ultimate Redundancy Master System (PID: $master_pid)..."
            kill "$master_pid"
            rm -f "$PID_FILE"
            log "SUCCESS" "Ultimate Redundancy Master System stopped"
        fi
    fi
    
    # Stop PM2 processes
    if check_pm2; then
        log "INFO" "Stopping PM2 redundancy processes..."
        pm2 stop ecosystem.comprehensive-redundancy.cjs 2>/dev/null || true
        pm2 stop ecosystem.redundancy.cjs 2>/dev/null || true
        pm2 stop ecosystem.pm2.cjs 2>/dev/null || true
        log "SUCCESS" "PM2 redundancy processes stopped"
    fi
    
    log "SUCCESS" "All redundancy systems stopped"
}

# Restart all redundancy systems
restart_all() {
    log "SYSTEM" "Restarting Ultimate Redundancy Automation System..."
    stop_all
    sleep 2
    start_all
}

# Check status of all redundancy systems
check_status() {
    log "SYSTEM" "Checking Ultimate Redundancy Automation System Status..."
    
    cd "$WORKSPACE_DIR"
    
    echo -e "\n${CYAN}=== Ultimate Redundancy System Status ===${NC}"
    
    # Check ultimate redundancy master
    if [ -f "$PID_FILE" ]; then
        local master_pid=$(cat "$PID_FILE")
        if kill -0 "$master_pid" 2>/dev/null; then
            echo -e "${GREEN}✓ Ultimate Redundancy Master: RUNNING (PID: $master_pid)${NC}"
        else
            echo -e "${RED}✗ Ultimate Redundancy Master: NOT RUNNING${NC}"
        fi
    else
        echo -e "${RED}✗ Ultimate Redundancy Master: PID file not found${NC}"
    fi
    
    # Check PM2 status
    if check_pm2; then
        echo -e "\n${CYAN}--- PM2 Status ---${NC}"
        pm2 status | grep -E "(redundancy|auto-sync)" || echo "No redundancy processes found"
    fi
    
    # Check GitHub Actions workflows
    echo -e "\n${CYAN}--- GitHub Actions Workflows ---${NC}"
    if [ -d ".github/workflows" ]; then
        local workflows=($(find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null))
        echo "Found ${#workflows[@]} workflow files:"
        for workflow in "${workflows[@]}"; do
            echo "  - ${workflow#.github/workflows/}"
        done
    else
        echo "No GitHub Actions workflows directory found"
    fi
    
    # Check Netlify Functions
    echo -e "\n${CYAN}--- Netlify Functions ---${NC}"
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        local function_count=$(node -e "
            try {
                const manifest = require('./netlify/functions/functions-manifest.json');
                console.log('Functions manifest found with ' + (manifest.functions ? manifest.functions.length : 0) + ' functions');
            } catch(e) {
                console.log('Invalid functions manifest');
            }
        ")
        echo "$function_count"
    else
        echo "No Netlify functions manifest found"
    fi
    
    echo -e "\n${CYAN}=== End Status ===${NC}\n"
}

# Show logs
show_logs() {
    if [ -f "$LOG_FILE" ]; then
        echo -e "\n${CYAN}=== Ultimate Redundancy System Logs ===${NC}"
        tail -n 50 "$LOG_FILE"
        echo -e "${CYAN}=== End Logs ===${NC}\n"
    else
        log "WARN" "No log file found: $LOG_FILE"
    fi
}

# Test redundancy systems
test_systems() {
    log "SYSTEM" "Testing Ultimate Redundancy Automation Systems..."
    
    cd "$WORKSPACE_DIR"
    
    echo -e "\n${CYAN}=== Testing Redundancy Systems ===${NC}"
    
    # Test PM2 redundancy
    echo -e "\n${BLUE}Testing PM2 Redundancy...${NC}"
    if check_pm2; then
        if pm2 list | grep -q "redundancy"; then
            echo -e "${GREEN}✓ PM2 redundancy processes are running${NC}"
        else
            echo -e "${RED}✗ PM2 redundancy processes are not running${NC}"
        fi
    else
        echo -e "${YELLOW}⚠ PM2 not available${NC}"
    fi
    
    # Test GitHub Actions redundancy
    echo -e "\n${BLUE}Testing GitHub Actions Redundancy...${NC}"
    if [ -d ".github/workflows" ]; then
        local workflows=($(find .github/workflows -name "*.yml" -o -name "*.yaml" 2>/dev/null))
        if [ ${#workflows[@]} -gt 0 ]; then
            echo -e "${GREEN}✓ Found ${#workflows[@]} GitHub Actions workflows${NC}"
        else
            echo -e "${RED}✗ No GitHub Actions workflows found${NC}"
        fi
    else
        echo -e "${RED}✗ GitHub Actions workflows directory not found${NC}"
    fi
    
    # Test Netlify Functions redundancy
    echo -e "\n${BLUE}Testing Netlify Functions Redundancy...${NC}"
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        local function_count=$(node -e "
            try {
                const manifest = require('./netlify/functions/functions-manifest.json');
                console.log(manifest.functions ? manifest.functions.length : 0);
            } catch(e) {
                console.log(0);
            }
        ")
        if [ "$function_count" -gt 0 ]; then
            echo -e "${GREEN}✓ Found $function_count Netlify functions${NC}"
        else
            echo -e "${YELLOW}⚠ Netlify functions manifest is empty${NC}"
        fi
    else
        echo -e "${RED}✗ Netlify functions manifest not found${NC}"
    fi
    
    # Test ultimate redundancy master
    echo -e "\n${BLUE}Testing Ultimate Redundancy Master...${NC}"
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        echo -e "${GREEN}✓ Ultimate redundancy master script found${NC}"
        
        # Test the script
        if node automation/ultimate-redundancy-master.cjs status >/dev/null 2>&1; then
            echo -e "${GREEN}✓ Ultimate redundancy master script is executable${NC}"
        else
            echo -e "${RED}✗ Ultimate redundancy master script execution failed${NC}"
        fi
    else
        echo -e "${RED}✗ Ultimate redundancy master script not found${NC}"
    fi
    
    echo -e "\n${CYAN}=== Testing Complete ===${NC}\n"
}

# Main function
main() {
    local command="${1:-start}"
    
    # Check prerequisites
    check_node
    check_git
    check_dependencies
    check_workspace
    
    case "$command" in
        "start")
            start_all
            ;;
        "stop")
            stop_all
            ;;
        "restart")
            restart_all
            ;;
        "status")
            check_status
            ;;
        "logs")
            show_logs
            ;;
        "test")
            test_systems
            ;;
        "help"|"--help"|"-h")
            echo -e "${CYAN}Ultimate Redundancy Automation System${NC}"
            echo -e "Usage: $0 [command]"
            echo -e ""
            echo -e "Commands:"
            echo -e "  start     Start all redundancy systems"
            echo -e "  stop      Stop all redundancy systems"
            echo -e "  restart   Restart all redundancy systems"
            echo -e "  status    Check status of all systems"
            echo -e "  logs      Show system logs"
            echo -e "  test      Test all redundancy systems"
            echo -e "  help      Show this help message"
            echo -e ""
            echo -e "This system provides comprehensive redundancy for:"
            echo -e "  - PM2 process monitoring and auto-recovery"
            echo -e "  - GitHub Actions workflow monitoring and backup triggers"
            echo -e "  - Netlify Functions monitoring and auto-regeneration"
            echo -e "  - Cross-system health monitoring and orchestration"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            echo -e "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"