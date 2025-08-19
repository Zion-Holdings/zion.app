#!/bin/bash

# Ultimate Redundancy System Startup Script
# This script provides comprehensive redundancy for all automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.pid"
LOCK_FILE="$PROJECT_ROOT/automation/ultimate-redundancy.lock"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    local level=$1
    shift
    local message="$*"
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    
    case $level in
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
    
    # Write to log file
    echo "[$timestamp] [$level] $message" >> "$LOG_DIR/ultimate-redundancy.log"
}

# Check if script is already running
check_lock() {
    if [ -f "$LOCK_FILE" ]; then
        local pid=$(cat "$LOCK_FILE" 2>/dev/null)
        if kill -0 "$pid" 2>/dev/null; then
            log "ERROR" "Ultimate redundancy system is already running with PID $pid"
            exit 1
        else
            log "WARN" "Removing stale lock file"
            rm -f "$LOCK_FILE"
        fi
    fi
}

# Create lock file
create_lock() {
    echo $$ > "$LOCK_FILE"
}

# Remove lock file
remove_lock() {
    rm -f "$LOCK_FILE"
}

# Ensure log directory exists
ensure_log_directory() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "INFO" "Created log directory: $LOG_DIR"
    fi
}

# Check system requirements
check_requirements() {
    log "INFO" "Checking system requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        log "ERROR" "Node.js is not installed"
        exit 1
    fi
    
    # Check PM2
    if ! command -v pm2 &> /dev/null; then
        log "WARN" "PM2 is not installed, attempting to install..."
        npm install -g pm2 || {
            log "ERROR" "Failed to install PM2"
            exit 1
        }
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        log "ERROR" "npm is not installed"
        exit 1
    fi
    
    log "INFO" "System requirements check passed"
}

# Start PM2 redundancy system
start_pm2_redundancy() {
    log "INFO" "Starting PM2 redundancy system..."
    
    cd "$PROJECT_ROOT"
    
    # Start comprehensive redundancy ecosystem
    if [ -f "ecosystem.comprehensive-redundancy.cjs" ]; then
        log "INFO" "Starting comprehensive redundancy ecosystem..."
        pm2 start ecosystem.comprehensive-redundancy.cjs --update-env || {
            log "WARN" "Failed to start comprehensive ecosystem, trying fallback..."
            pm2 start ecosystem.redundancy.cjs --update-env || {
                log "ERROR" "Failed to start PM2 redundancy system"
                return 1
            }
        }
    else
        log "WARN" "Comprehensive ecosystem not found, starting basic redundancy..."
        pm2 start ecosystem.redundancy.cjs --update-env || {
            log "ERROR" "Failed to start basic PM2 redundancy system"
            return 1
        }
    fi
    
    # Install and configure PM2 logrotate
    log "INFO" "Configuring PM2 logrotate..."
    pm2 install pm2-logrotate || true
    pm2 set pm2-logrotate:max_size 20M || true
    pm2 set pm2-logrotate:retain 50 || true
    pm2 set pm2-logrotate:compress true || true
    pm2 set pm2-logrotate:workerInterval 60 || true
    pm2 set pm2-logrotate:rotateInterval '0 0 * * *' || true
    
    # Save PM2 configuration
    pm2 save || true
    
    log "INFO" "PM2 redundancy system started successfully"
    return 0
}

# Start GitHub Actions redundancy
start_github_actions_redundancy() {
    log "INFO" "Starting GitHub Actions redundancy system..."
    
    cd "$PROJECT_ROOT"
    
    # Check if GitHub Actions redundancy script exists
    if [ -f "automation/enhanced-github-actions-redundancy.cjs" ]; then
        log "INFO" "Starting enhanced GitHub Actions redundancy..."
        node automation/enhanced-github-actions-redundancy.cjs start || {
            log "WARN" "Failed to start enhanced GitHub Actions redundancy"
        }
    fi
    
    # Check if backup workflows exist and are valid
    if [ -f ".github/workflows/marketing-sync-backup.yml" ] && [ ! -f ".github/workflows/marketing-sync.yml" ]; then
        log "INFO" "Restoring marketing-sync workflow from backup..."
        cp .github/workflows/marketing-sync-backup.yml .github/workflows/marketing-sync.yml
    fi
    
    if [ -f ".github/workflows/sync-health-backup.yml" ] && [ ! -f ".github/workflows/sync-health.yml" ]; then
        log "INFO" "Restoring sync-health workflow from backup..."
        cp .github/workflows/sync-health-backup.yml .github/workflows/sync-health.yml
    fi
    
    log "INFO" "GitHub Actions redundancy system started"
}

# Start Netlify Functions redundancy
start_netlify_functions_redundancy() {
    log "INFO" "Starting Netlify Functions redundancy system..."
    
    cd "$PROJECT_ROOT"
    
    # Check if Netlify Functions redundancy script exists
    if [ -f "automation/enhanced-netlify-functions-redundancy.cjs" ]; then
        log "INFO" "Starting enhanced Netlify Functions redundancy..."
        node automation/enhanced-netlify-functions-redundancy.cjs start || {
            log "WARN" "Failed to start enhanced Netlify Functions redundancy"
        }
    fi
    
    # Regenerate functions manifest if needed
    if [ ! -f "netlify/functions/functions-manifest.json" ] || [ "$(find netlify/functions/functions-manifest.json -mtime +1 2>/dev/null)" ]; then
        log "INFO" "Regenerating Netlify Functions manifest..."
        npm run netlify:manifest || {
            log "WARN" "Failed to regenerate Netlify Functions manifest"
        }
    fi
    
    log "INFO" "Netlify Functions redundancy system started"
}

# Start ultimate redundancy master
start_ultimate_redundancy_master() {
    log "INFO" "Starting ultimate redundancy master..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Starting ultimate redundancy master system..."
        nohup node automation/ultimate-redundancy-master.cjs start > "$LOG_DIR/ultimate-redundancy-master.log" 2>&1 &
        local master_pid=$!
        echo $master_pid > "$PID_FILE"
        log "INFO" "Ultimate redundancy master started with PID $master_pid"
    else
        log "WARN" "Ultimate redundancy master script not found"
    fi
}

# Start all redundancy systems
start_all() {
    log "INFO" "Starting ultimate redundancy system..."
    
    ensure_log_directory
    check_requirements
    
    # Start PM2 redundancy
    start_pm2_redundancy
    
    # Start GitHub Actions redundancy
    start_github_actions_redundancy
    
    # Start Netlify Functions redundancy
    start_netlify_functions_redundancy
    
    # Start ultimate redundancy master
    start_ultimate_redundancy_master
    
    log "INFO" "Ultimate redundancy system started successfully"
    
    # Show status
    sleep 2
    show_status
}

# Stop all redundancy systems
stop_all() {
    log "INFO" "Stopping ultimate redundancy system..."
    
    # Stop ultimate redundancy master
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Stopping ultimate redundancy master (PID: $pid)..."
            kill "$pid" || true
            rm -f "$PID_FILE"
        fi
    fi
    
    # Stop PM2 processes
    cd "$PROJECT_ROOT"
    log "INFO" "Stopping PM2 redundancy processes..."
    pm2 stop ecosystem.comprehensive-redundancy.cjs || true
    pm2 stop ecosystem.redundancy.cjs || true
    pm2 stop ecosystem.pm2.cjs || true
    
    log "INFO" "Ultimate redundancy system stopped"
}

# Restart all redundancy systems
restart_all() {
    log "INFO" "Restarting ultimate redundancy system..."
    stop_all
    sleep 2
    start_all
}

# Show system status
show_status() {
    log "INFO" "Ultimate redundancy system status:"
    
    cd "$PROJECT_ROOT"
    
    # PM2 status
    echo ""
    log "INFO" "=== PM2 Status ==="
    pm2 status --no-daemon || true
    
    # Process status
    echo ""
    log "INFO" "=== Process Status ==="
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            log "INFO" "Ultimate redundancy master: RUNNING (PID: $pid)"
        else
            log "WARN" "Ultimate redundancy master: NOT RUNNING (stale PID file)"
        fi
    else
        log "WARN" "Ultimate redundancy master: NOT RUNNING (no PID file)"
    fi
    
    # File status
    echo ""
    log "INFO" "=== File Status ==="
    local files=(
        "ecosystem.comprehensive-redundancy.cjs"
        "ecosystem.redundancy.cjs"
        "ecosystem.pm2.cjs"
        ".github/workflows/marketing-sync.yml"
        ".github/workflows/sync-health.yml"
        "netlify/functions/functions-manifest.json"
    )
    
    for file in "${files[@]}"; do
        if [ -f "$file" ]; then
            log "INFO" "✅ $file exists"
        else
            log "WARN" "❌ $file missing"
        fi
    done
}

# Show logs
show_logs() {
    log "INFO" "Showing recent logs..."
    
    if [ -f "$LOG_DIR/ultimate-redundancy.log" ]; then
        echo ""
        log "INFO" "=== Ultimate Redundancy Logs ==="
        tail -50 "$LOG_DIR/ultimate-redundancy.log"
    fi
    
    if [ -f "$LOG_DIR/ultimate-redundancy-master.log" ]; then
        echo ""
        log "INFO" "=== Ultimate Redundancy Master Logs ==="
        tail -50 "$LOG_DIR/ultimate-redundancy-master.log"
    fi
    
    echo ""
    log "INFO" "=== PM2 Logs ==="
    pm2 logs --lines 20 --nostream || true
}

# Generate health report
generate_report() {
    log "INFO" "Generating health report..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        node automation/ultimate-redundancy-master.cjs report || {
            log "WARN" "Failed to generate health report"
        }
    fi
    
    log "INFO" "Health report generated"
}

# Test redundancy systems
test_systems() {
    log "INFO" "Testing redundancy systems..."
    
    cd "$PROJECT_ROOT"
    
    if [ -f "automation/ultimate-redundancy-master.cjs" ]; then
        log "INFO" "Running comprehensive health check..."
        node automation/ultimate-redundancy-master.cjs health || {
            log "WARN" "Health check failed"
        }
    fi
    
    log "INFO" "System test completed"
}

# Main function
main() {
    local command="${1:-start}"
    
    case $command in
        "start")
            check_lock
            create_lock
            trap remove_lock EXIT
            start_all
            ;;
        "stop")
            stop_all
            remove_lock
            ;;
        "restart")
            check_lock
            create_lock
            trap remove_lock EXIT
            restart_all
            ;;
        "status")
            show_status
            ;;
        "logs")
            show_logs
            ;;
        "report")
            generate_report
            ;;
        "test")
            test_systems
            ;;
        "help"|"--help"|"-h")
            echo "Usage: $0 [start|stop|restart|status|logs|report|test|help]"
            echo ""
            echo "Commands:"
            echo "  start   - Start all redundancy systems"
            echo "  stop    - Stop all redundancy systems"
            echo "  restart - Restart all redundancy systems"
            echo "  status  - Show system status"
            echo "  logs    - Show recent logs"
            echo "  report  - Generate health report"
            echo "  test    - Test redundancy systems"
            echo "  help    - Show this help message"
            ;;
        *)
            log "ERROR" "Unknown command: $command"
            log "INFO" "Use '$0 help' for usage information"
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"