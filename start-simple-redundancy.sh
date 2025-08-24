#!/bin/bash

# Simple Redundancy System Startup Script
# This script provides comprehensive redundancy for all PM2 automations, GitHub Actions, and Netlify functions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"

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
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/simple-redundancy.log"
}

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        exit 1
    fi
    log "INFO" "PM2 is available"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    log "INFO" "Stopping existing PM2 processes..."
    
    # Stop all processes
    pm2 stop all 2>/dev/null || true
    
    # Delete all processes
    pm2 delete all 2>/dev/null || true
    
    # Save PM2 configuration
    pm2 save 2>/dev/null || true
    
    log "INFO" "Existing PM2 processes stopped and cleaned up"
}

# Function to start individual redundancy components
start_redundancy_components() {
    log "INFO" "Starting individual redundancy components..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the main redundancy system
    log "INFO" "Starting main redundancy system..."
    pm2 start "automation/ultimate-redundancy-system-v2.cjs" --name "ultimate-redundancy-v2-master" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 10
    
    # Start PM2 redundancy
    log "INFO" "Starting PM2 redundancy manager..."
    pm2 start "automation/enhanced-pm2-redundancy.cjs" --name "pm2-redundancy-manager" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 5
    
    # Start GitHub Actions redundancy
    log "INFO" "Starting GitHub Actions redundancy manager..."
    pm2 start "automation/enhanced-github-actions-redundancy.cjs" --name "github-actions-redundancy-manager" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 5
    
    # Start Netlify Functions redundancy
    log "INFO" "Starting Netlify Functions redundancy manager..."
    pm2 start "automation/enhanced-netlify-functions-redundancy.cjs" --name "netlify-functions-redundancy-manager" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 5
    
    # Start build monitoring
    log "INFO" "Starting build monitoring..."
    pm2 start "automation/continuous-build-monitor.cjs" --name "build-monitor" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 3
    
    # Start build orchestrator
    log "INFO" "Starting build orchestrator..."
    pm2 start "automation/master-build-orchestrator.cjs" --name "build-orchestrator" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 5
    
    # Start build failure recovery
    log "INFO" "Starting build failure recovery..."
    pm2 start "automation/build-failure-recovery.cjs" --name "build-failure-recovery" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 3
    
    # Start pre-build health check
    log "INFO" "Starting pre-build health check..."
    pm2 start "automation/pre-build-health-check.cjs" --name "pre-build-health-check" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 3
    
    # Start NextJS page validator
    log "INFO" "Starting NextJS page validator..."
    pm2 start "automation/nextjs-page-validator.cjs" --name "nextjs-page-validator" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 3
    
    # Start redundancy health monitor
    log "INFO" "Starting redundancy health monitor..."
    pm2 start "automation/redundancy-health-monitor.cjs" --name "redundancy-health-monitor" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 5
    
    # Start redundancy git sync (cron-based)
    log "INFO" "Starting redundancy git sync..."
    pm2 start "automation/redundancy-git-sync.cjs" --name "redundancy-git-sync" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart false --cron-restart "*/15 * * * *"
    
    # Start legacy PM2 auto sync for backward compatibility
    log "INFO" "Starting legacy PM2 auto sync..."
    pm2 start "automation/pm2-auto-sync.js" --name "zion-auto-sync-legacy" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 10
    
    # Start legacy PM2 auto sync cron for backward compatibility
    log "INFO" "Starting legacy PM2 auto sync cron..."
    pm2 start "automation/pm2-auto-sync.js" --name "zion-auto-sync-cron-legacy" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart false --cron-restart "*/10 * * * *"
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "All redundancy components started"
}

# Function to verify system status
verify_system_status() {
    log "INFO" "Verifying system status..."
    
    # Wait a moment for processes to start
    sleep 5
    
    # Check PM2 status
    log "INFO" "PM2 Status:"
    pm2 status
    
    # Check if critical processes are running
    local critical_processes=(
        "ultimate-redundancy-v2-master"
        "pm2-redundancy-manager"
        "github-actions-redundancy-manager"
        "netlify-functions-redundancy-manager"
        "build-monitor"
        "build-orchestrator"
        "build-failure-recovery"
        "pre-build-health-check"
        "nextjs-page-validator"
        "redundancy-health-monitor"
        "redundancy-git-sync"
        "zion-auto-sync-legacy"
        "zion-auto-sync-cron-legacy"
    )
    
    local running_processes=0
    for process in "${critical_processes[@]}"; do
        if pm2 describe "$process" &>/dev/null; then
            running_processes=$((running_processes + 1))
            log "INFO" "✓ $process is running"
        else
            log "WARN" "✗ $process is not running"
        fi
    done
    
    if [[ $running_processes -eq ${#critical_processes[@]} ]]; then
        log "INFO" "All critical processes are running ($running_processes/${#critical_processes[@]})"
    else
        log "WARN" "Some critical processes are not running ($running_processes/${#critical_processes[@]})"
    fi
    
    # Check logs directory
    log "INFO" "Log files created:"
    ls -la "$LOG_DIR"/*.log 2>/dev/null || log "WARN" "No log files found yet"
}

# Function to run health checks
run_health_checks() {
    log "INFO" "Running health checks..."
    
    cd "$WORKSPACE_DIR"
    
    # Run the health check command
    if node "automation/ultimate-redundancy-system-v2.cjs" health; then
        log "INFO" "Health checks completed successfully"
    else
        log "WARN" "Health checks completed with warnings"
    fi
}

# Function to show system information
show_system_info() {
    log "INFO" "=== Simple Redundancy System Information ==="
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    log "INFO" "Node.js Version: $(node --version)"
    log "INFO" "PM2 Version: $(pm2 --version)"
    log "INFO" "Timestamp: $(date)"
    log "INFO" "==========================================="
}

# Function to cleanup on exit
cleanup() {
    log "INFO" "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Main execution
main() {
    log "INFO" "Starting Simple Redundancy System..."
    
    # Show system information
    show_system_info
    
    # Check prerequisites
    check_pm2
    check_node
    
    # Stop existing processes
    stop_existing_processes
    
    # Start redundancy components
    start_redundancy_components
    
    # Verify system status
    verify_system_status
    
    # Run health checks
    run_health_checks
    
    log "INFO" "Simple Redundancy System startup completed successfully!"
    log "INFO" "Use 'pm2 status' to monitor processes"
    log "INFO" "Use 'pm2 logs' to view logs"
    log "INFO" "Use 'node automation/ultimate-redundancy-system-v2.cjs status' to check system status"
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    # Script is being executed
    main "$@"
else
    # Script is being sourced
    log "INFO" "Simple Redundancy System startup script loaded"
    log "INFO" "Run 'main' to start the system"
fi