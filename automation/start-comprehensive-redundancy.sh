#!/bin/bash

# Comprehensive Redundancy Automation System Startup Script
# This script manages all redundancy systems for PM2, GitHub Actions, and Netlify Functions

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
BACKUP_DIR="$SCRIPT_DIR/backups"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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
        *)
            echo -e "[$timestamp] [$level] $message"
            ;;
    esac
    
    # Also log to file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/comprehensive-redundancy.log"
}

# Ensure directories exist
ensure_directories() {
    log "INFO" "Ensuring required directories exist..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$BACKUP_DIR"
    mkdir -p "$BACKUP_DIR/pm2"
    mkdir -p "$BACKUP_DIR/github-actions"
    mkdir -p "$BACKUP_DIR/netlify-functions"
    
    log "INFO" "Directories created successfully"
}

# Check if PM2 is installed and running
check_pm2() {
    log "INFO" "Checking PM2 installation and status..."
    
    if ! command -v pm2 &> /dev/null; then
        log "ERROR" "PM2 is not installed. Please install PM2 first: npm install -g pm2"
        return 1
    fi
    
    # Check if PM2 daemon is running
    if ! pm2 ping &> /dev/null; then
        log "WARN" "PM2 daemon is not running. Starting PM2..."
        pm2 start
    fi
    
    log "INFO" "PM2 is available and running"
    return 0
}

# Check if Node.js is available
check_node() {
    log "INFO" "Checking Node.js installation..."
    
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed. Please install Node.js first."
        return 1
    fi
    
    local node_version=$(node --version)
    log "INFO" "Node.js version: $node_version"
    return 0
}

# Check if required dependencies are installed
check_dependencies() {
    log "INFO" "Checking required dependencies..."
    
    local missing_deps=()
    
    # Check for js-yaml (required for GitHub Actions validation)
    if ! node -e "require('js-yaml')" &> /dev/null; then
        missing_deps+=("js-yaml")
    fi
    
    if [ ${#missing_deps[@]} -gt 0 ]; then
        log "WARN" "Missing dependencies: ${missing_deps[*]}"
        log "INFO" "Installing missing dependencies..."
        npm install "${missing_deps[@]}"
    else
        log "INFO" "All required dependencies are available"
    fi
}

# Start the master orchestrator
start_master_orchestrator() {
    log "INFO" "Starting master redundancy orchestrator..."
    
    if [ -f "$SCRIPT_DIR/master-redundancy-orchestrator.cjs" ]; then
        cd "$WORKSPACE_DIR"
        pm2 start "$SCRIPT_DIR/master-redundancy-orchestrator.cjs" \
            --name "master-redundancy-orchestrator" \
            --interpreter "node" \
            --log "$LOG_DIR/master-orchestrator.log" \
            --error "$LOG_DIR/master-orchestrator-error.log" \
            --time
        
        if [ $? -eq 0 ]; then
            log "INFO" "Master orchestrator started successfully"
            return 0
        else
            log "ERROR" "Failed to start master orchestrator"
            return 1
        fi
    else
        log "ERROR" "Master orchestrator script not found"
        return 1
    fi
}

# Start individual redundancy systems
start_individual_systems() {
    log "INFO" "Starting individual redundancy systems..."
    
    local systems=(
        "enhanced-pm2-redundancy.cjs:enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy.cjs:enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy.cjs:enhanced-netlify-functions-redundancy"
    )
    
    for system in "${systems[@]}"; do
        IFS=':' read -r script_name process_name <<< "$system"
        local script_path="$SCRIPT_DIR/$script_name"
        
        if [ -f "$script_path" ]; then
            log "INFO" "Starting $process_name..."
            cd "$WORKSPACE_DIR"
            pm2 start "$script_path" \
                --name "$process_name" \
                --interpreter "node" \
                --log "$LOG_DIR/$process_name.log" \
                --error "$LOG_DIR/$process_name-error.log" \
                --time
            
            if [ $? -eq 0 ]; then
                log "INFO" "$process_name started successfully"
            else
                log "ERROR" "Failed to start $process_name"
            fi
            
            # Wait a moment before starting next system
            sleep 2
        else
            log "WARN" "Script not found: $script_path"
        fi
    done
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting comprehensive redundancy automation system..."
    
    # Check prerequisites
    check_node || exit 1
    check_pm2 || exit 1
    check_dependencies
    
    # Ensure directories
    ensure_directories
    
    # Start master orchestrator
    start_master_orchestrator
    
    # Start individual systems
    start_individual_systems
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "All redundancy systems started successfully"
    log "INFO" "Use 'pm2 status' to check system status"
    log "INFO" "Use 'pm2 logs' to view system logs"
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping all redundancy systems..."
    
    local processes=(
        "master-redundancy-orchestrator"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
    )
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            log "INFO" "Stopping $process..."
            pm2 stop "$process"
        else
            log "WARN" "Process $process not found"
        fi
    done
    
    # Save PM2 configuration
    pm2 save
    
    log "INFO" "All redundancy systems stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting all redundancy systems..."
    
    stop_all
    sleep 3
    start_all
}

# Check system status
status() {
    log "INFO" "Checking redundancy system status..."
    
    echo ""
    echo "=== PM2 Status ==="
    pm2 status
    
    echo ""
    echo "=== Redundancy System Logs ==="
    echo "Master Orchestrator: $LOG_DIR/master-orchestrator.log"
    echo "PM2 Redundancy: $LOG_DIR/enhanced-pm2-redundancy.log"
    echo "GitHub Actions Redundancy: $LOG_DIR/enhanced-github-actions-redundancy.log"
    echo "Netlify Functions Redundancy: $LOG_DIR/enhanced-netlify-functions-redundancy.log"
    
    echo ""
    echo "=== Recent Health Check Results ==="
    if [ -f "$LOG_DIR/health-check-results.json" ]; then
        echo "PM2 Health: $LOG_DIR/pm2-health-check-results.json"
        echo "GitHub Actions Health: $LOG_DIR/github-actions-health-check-results.json"
        echo "Netlify Functions Health: $LOG_DIR/netlify-functions-health-check-results.json"
        echo "Master Orchestrator Health: $LOG_DIR/master-orchestrator-health-check-results.json"
    else
        echo "No health check results available yet"
    fi
}

# Show system logs
logs() {
    local system="$1"
    
    case "$system" in
        "master"|"orchestrator")
            pm2 logs master-redundancy-orchestrator
            ;;
        "pm2")
            pm2 logs enhanced-pm2-redundancy
            ;;
        "github"|"actions")
            pm2 logs enhanced-github-actions-redundancy
            ;;
        "netlify"|"functions")
            pm2 logs enhanced-netlify-functions-redundancy
            ;;
        "all")
            pm2 logs
            ;;
        *)
            echo "Usage: $0 logs [master|pm2|github|netlify|all]"
            echo "Available systems:"
            echo "  master/orchestrator - Master orchestrator logs"
            echo "  pm2                - PM2 redundancy logs"
            echo "  github/actions     - GitHub Actions redundancy logs"
            echo "  netlify/functions  - Netlify functions redundancy logs"
            echo "  all                - All system logs"
            ;;
    esac
}

# Perform health check
health_check() {
    log "INFO" "Performing comprehensive health check..."
    
    # Check PM2 processes
    echo "=== PM2 Process Health ==="
    pm2 status
    
    # Check log files
    echo ""
    echo "=== Log File Health ==="
    local log_files=(
        "master-orchestrator.log"
        "enhanced-pm2-redundancy.log"
        "enhanced-github-actions-redundancy.log"
        "enhanced-netlify-functions-redundancy.log"
    )
    
    for log_file in "${log_files[@]}"; do
        local log_path="$LOG_DIR/$log_file"
        if [ -f "$log_path" ]; then
            local size=$(du -h "$log_path" | cut -f1)
            local lines=$(wc -l < "$log_path")
            echo "$log_file: $size, $lines lines"
        else
            echo "$log_file: Not found"
        fi
    done
    
    # Check backup directories
    echo ""
    echo "=== Backup Directory Health ==="
    for backup_type in pm2 github-actions netlify-functions; do
        local backup_path="$BACKUP_DIR/$backup_type"
        if [ -d "$backup_path" ]; then
            local backup_count=$(find "$backup_path" -name "*.backup" | wc -l)
            echo "$backup_type: $backup_count backups"
        else
            echo "$backup_type: Directory not found"
        fi
    done
}

# Clean up old logs and backups
cleanup() {
    log "INFO" "Cleaning up old logs and backups..."
    
    # Clean up old log files (keep last 30 days)
    find "$LOG_DIR" -name "*.log" -mtime +30 -delete
    find "$LOG_DIR" -name "*.json" -mtime +30 -delete
    
    # Clean up old backups (keep last 20)
    for backup_type in pm2 github-actions netlify-functions; do
        local backup_path="$BACKUP_DIR/$backup_type"
        if [ -d "$backup_path" ]; then
            find "$backup_path" -name "*.backup" -type f | sort | head -n -20 | xargs rm -f
        fi
    done
    
    log "INFO" "Cleanup completed"
}

# Show help
show_help() {
    echo "Comprehensive Redundancy Automation System"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start       Start all redundancy systems"
    echo "  stop        Stop all redundancy systems"
    echo "  restart     Restart all redundancy systems"
    echo "  status      Show system status"
    echo "  logs [sys]  Show system logs (master|pm2|github|netlify|all)"
    echo "  health      Perform health check"
    echo "  cleanup     Clean up old logs and backups"
    echo "  help        Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start                    # Start all systems"
    echo "  $0 logs master              # Show master orchestrator logs"
    echo "  $0 logs all                 # Show all system logs"
    echo "  $0 health                   # Perform health check"
}

# Main script logic
main() {
    local command="$1"
    
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
            status
            ;;
        "logs")
            logs "$2"
            ;;
        "health")
            health_check
            ;;
        "cleanup")
            cleanup
            ;;
        "help"|"--help"|"-h"|"")
            show_help
            ;;
        *)
            echo "Unknown command: $command"
            echo "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"