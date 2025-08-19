#!/bin/bash

# Ultimate Redundancy System V2 Startup Script
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
PM2_ECOSYSTEM="ecosystem-ultimate-redundancy-v2.pm2.cjs"
REDUNDANCY_SCRIPT="automation/ultimate-redundancy-system-v2.cjs"

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
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/startup.log"
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

# Function to check if required files exist
check_required_files() {
    local missing_files=()
    
    if [[ ! -f "$PM2_ECOSYSTEM" ]]; then
        missing_files+=("$PM2_ECOSYSTEM")
    fi
    
    if [[ ! -f "$REDUNDANCY_SCRIPT" ]]; then
        missing_files+=("$REDUNDANCY_SCRIPT")
    fi
    
    if [[ ${#missing_files[@]} -gt 0 ]]; then
        log "ERROR" "Missing required files:"
        for file in "${missing_files[@]}"; do
            log "ERROR" "  - $file"
        done
        exit 1
    fi
    
    log "INFO" "All required files found"
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

# Function to start the Ultimate Redundancy System V2
start_redundancy_system() {
    log "INFO" "Starting Ultimate Redundancy System V2..."
    
    # Start the main redundancy system
    cd "$WORKSPACE_DIR"
    
    # Start the PM2 ecosystem
    log "INFO" "Starting PM2 ecosystem: $PM2_ECOSYSTEM"
    pm2 start "$PM2_ECOSYSTEM" --update-env
    
    if [[ $? -eq 0 ]]; then
        log "INFO" "PM2 ecosystem started successfully"
    else
        log "ERROR" "Failed to start PM2 ecosystem"
        return 1
    fi
    
    # Start the master redundancy controller
    log "INFO" "Starting master redundancy controller..."
    pm2 start "$REDUNDANCY_SCRIPT" --name "ultimate-redundancy-v2-master" --interpreter node --cwd "$WORKSPACE_DIR" --watch false --autorestart --max-restarts 10 --exp-backoff-restart-delay 10000
    
    if [[ $? -eq 0 ]]; then
        log "INFO" "Master redundancy controller started successfully"
    else
        log "ERROR" "Failed to start master redundancy controller"
        return 1
    fi
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "Ultimate Redundancy System V2 started successfully"
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
        "enhanced-pm2-redundancy-v2"
        "enhanced-github-actions-redundancy-v2"
        "enhanced-netlify-functions-redundancy-v2"
        "continuous-build-monitor-v2"
        "master-build-orchestrator-v2"
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

# Function to start individual redundancy components
start_individual_components() {
    log "INFO" "Starting individual redundancy components..."
    
    cd "$WORKSPACE_DIR"
    
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
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "Individual redundancy components started"
}

# Function to run health checks
run_health_checks() {
    log "INFO" "Running health checks..."
    
    cd "$WORKSPACE_DIR"
    
    # Run the health check command
    if node "$REDUNDANCY_SCRIPT" health; then
        log "INFO" "Health checks completed successfully"
    else
        log "WARN" "Health checks completed with warnings"
    fi
}

# Function to show system information
show_system_info() {
    log "INFO" "=== Ultimate Redundancy System V2 Information ==="
    log "INFO" "Workspace: $WORKSPACE_DIR"
    log "INFO" "Log Directory: $LOG_DIR"
    log "INFO" "PM2 Ecosystem: $PM2_ECOSYSTEM"
    log "INFO" "Redundancy Script: $REDUNDANCY_SCRIPT"
    log "INFO" "Node.js Version: $(node --version)"
    log "INFO" "PM2 Version: $(pm2 --version)"
    log "INFO" "Timestamp: $(date)"
    log "INFO" "================================================"
}

# Function to cleanup on exit
cleanup() {
    log "INFO" "Cleanup completed"
}

# Set trap for cleanup
trap cleanup EXIT

# Main execution
main() {
    log "INFO" "Starting Ultimate Redundancy System V2..."
    
    # Show system information
    show_system_info
    
    # Check prerequisites
    check_pm2
    check_node
    check_required_files
    
    # Stop existing processes
    stop_existing_processes
    
    # Start the redundancy system
    if start_redundancy_system; then
        log "INFO" "Redundancy system started successfully"
    else
        log "ERROR" "Failed to start redundancy system"
        exit 1
    fi
    
    # Start individual components as backup
    start_individual_components
    
    # Verify system status
    verify_system_status
    
    # Run health checks
    run_health_checks
    
    log "INFO" "Ultimate Redundancy System V2 startup completed successfully!"
    log "INFO" "Use 'pm2 status' to monitor processes"
    log "INFO" "Use 'pm2 logs' to view logs"
    log "INFO" "Use 'node $REDUNDANCY_SCRIPT status' to check system status"
}

# Check if script is being sourced or executed
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    # Script is being executed
    main "$@"
else
    # Script is being sourced
    log "INFO" "Ultimate Redundancy System V2 startup script loaded"
    log "INFO" "Run 'main' to start the system"
fi