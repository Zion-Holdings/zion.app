#!/bin/bash

# Comprehensive Redundancy System Startup Script
# Provides complete backup automation for all systems

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"
LOG_DIR="$PROJECT_ROOT/automation/logs"
PID_FILE="$PROJECT_ROOT/automation/comprehensive-redundancy.pid"

# Ensure we're in the project root
cd "$PROJECT_ROOT"

# Function to log messages
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

# Function to log success
success() {
    echo -e "${GREEN}✅ $1${NC}"
}

# Function to log warnings
warn() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Function to log errors
error() {
    echo -e "${RED}❌ $1${NC}"
}

# Function to check if system is already running
is_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            return 0
        else
            # PID file exists but process is dead, clean it up
            rm -f "$PID_FILE"
            return 1
        fi
    fi
    return 1
}

# Function to start the system
start_system() {
    log "Starting Comprehensive Redundancy System..."
    
    if is_running; then
        warn "System is already running (PID: $(cat "$PID_FILE"))"
        return 1
    fi
    
    # Create necessary directories
    mkdir -p "$LOG_DIR"
    
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
    pm2 start ecosystem.redundancy.cjs
    
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
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        return 1
    fi
    
    # Start the comprehensive redundancy system
    log "Launching comprehensive redundancy system..."
    nohup node automation/comprehensive-redundancy-system.cjs start > "$LOG_DIR/comprehensive-redundancy.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment and check if it started successfully
    sleep 3
    if kill -0 "$pid" 2>/dev/null; then
        success "Comprehensive Redundancy System started successfully (PID: $pid)"
        log "Logs are being written to: $LOG_DIR/comprehensive-redundancy.log"
        return 0
    else
        error "Failed to start Comprehensive Redundancy System"
        rm -f "$PID_FILE"
        return 1
    fi
}

# Function to stop the system
stop_system() {
    log "Stopping Comprehensive Redundancy System..."
    
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            # Send SIGTERM first
            kill "$pid"
            
            # Wait for graceful shutdown
            local count=0
            while kill -0 "$pid" 2>/dev/null && [ $count -lt 10 ]; do
                sleep 1
                ((count++))
            done
            
            # Force kill if still running
            if kill -0 "$pid" 2>/dev/null; then
                warn "Force killing process..."
                kill -9 "$pid"
            fi
            
            rm -f "$PID_FILE"
            success "Comprehensive Redundancy System stopped"
        else
            warn "Process not running, cleaning up PID file"
            rm -f "$PID_FILE"
        fi
    else
        warn "No PID file found, system may not be running"
    fi
    
    # Also stop PM2 processes
    log "Stopping PM2 redundancy processes..."
    pm2 stop ecosystem-redundancy.pm2.cjs 2>/dev/null || true
}

# Function to restart the system
restart_system() {
    log "Restarting Comprehensive Redundancy System..."
    stop_system
    sleep 2
    start_system
}

# Function to show system status
show_status() {
    log "Comprehensive Redundancy System Status"
    echo "=================================="
    
    if is_running; then
        local pid=$(cat "$PID_FILE")
        success "System is running (PID: $pid)"
        
        # Show PM2 status
        echo ""
        log "PM2 Redundancy Status:"
        pm2 status ecosystem-redundancy.pm2.cjs 2>/dev/null || echo "No PM2 redundancy processes running"
        
        # Show system status
        echo ""
        log "System Status:"
        node automation/comprehensive-redundancy-system.cjs status 2>/dev/null || echo "Could not retrieve system status"
        
    else
        error "System is not running"
    fi
    
    # Show log file status
    echo ""
    log "Log Files:"
    if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
        echo "Main log: $LOG_DIR/comprehensive-redundancy.log"
        echo "Last 10 lines:"
        tail -n 10 "$LOG_DIR/comprehensive-redundancy.log" 2>/dev/null || echo "Could not read log file"
    else
        echo "No log files found"
    fi
}

# Function to show logs
show_logs() {
    if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
        if command -v less &> /dev/null; then
            less "$LOG_DIR/comprehensive-redundancy.log"
        else
            cat "$LOG_DIR/comprehensive-redundancy.log"
        fi
    else
        error "No log file found"
        return 1
    fi
}

# Function to show help
show_help() {
    echo "Comprehensive Redundancy System Management Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start the comprehensive redundancy system"
    echo "  stop      Stop the comprehensive redundancy system"
    echo "  restart   Restart the comprehensive redundancy system"
    echo "  status    Show system status and PM2 status"
    echo "  logs      Show system logs"
    echo "  help      Show this help message"
    echo ""
    echo "The comprehensive redundancy system provides backup automation for:"
    echo "  - PM2 automations (with redundant processes)"
    echo "  - GitHub Actions automations (with backup workflows)"
    echo "  - Netlify functions automations (with backup functions)"
    echo ""
    echo "Logs are written to: $LOG_DIR/comprehensive-redundancy.log"
}

# Health check function
health_check() {
    log "Performing comprehensive health check..."
    
    # Check PM2 processes
    log "Checking PM2 processes..."
    pm2 status
    
    # Check GitHub Actions workflows
    log "Checking GitHub Actions workflows..."
    if [ -d ".github/workflows" ]; then
        echo "Workflows found:"
        ls -la .github/workflows/
    else
        warn "GitHub workflows directory not found"
    fi
    
    # Check Netlify functions
    log "Checking Netlify functions..."
    if [ -f "netlify/functions/functions-manifest.json" ]; then
        local function_count=$(jq '.functions | length' netlify/functions/functions-manifest.json 2>/dev/null || echo "0")
        log "Found $function_count functions in manifest"
    else
        warn "Netlify functions manifest not found"
    fi
    
    log "Health check completed"
}

# Handle script arguments
case "${1:-start}" in
    start)
        start_system
        ;;
    stop)
        stop_system
        ;;
    "check")
        health_check
        ;;
    "health")
        health_check
        ;;
    "report")
        generate_report
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [start|status|check|health|report|help]"
        echo "  start  - Start the comprehensive redundancy system (default)"
        echo "  status - Check redundancy system status"
        echo "  check  - Run comprehensive health check"
        echo "  health - Run comprehensive health check"
        echo "  report - Generate redundancy system report"
        echo "  help   - Show this help message"
        ;;
    *)
        error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac