#!/bin/bash

# Comprehensive Redundancy System Startup Script
# This script starts all redundancy automation systems for PM2, GitHub Actions, and Netlify functions

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WORKSPACE_DIR="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$SCRIPT_DIR/comprehensive-redundancy.pid"
LOCK_FILE="$SCRIPT_DIR/comprehensive-redundancy.lock"

# Functions
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

log() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo "[$timestamp] $1" | tee -a "$LOG_DIR/startup.log"
}

success() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] ${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_DIR/startup.log"
}

error() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] ${RED}[ERROR]${NC} $1" | tee -a "$LOG_DIR/startup.log"
}

warning() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    echo -e "[$timestamp] ${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_DIR/startup.log"
}

# Ensure log directory exists
ensure_log_dir() {
    if [ ! -d "$LOG_DIR" ]; then
        mkdir -p "$LOG_DIR"
        log "Created log directory: $LOG_DIR"
    fi
}

# Check if system is already running
check_running() {
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            print_warning "Comprehensive redundancy system is already running (PID: $pid)"
            return 1
        else
            print_warning "Stale PID file found, removing..."
            rm -f "$PID_FILE"
        fi
    fi
    
    if [ -f "$LOCK_FILE" ]; then
        print_warning "Lock file found, removing..."
        rm -f "$LOCK_FILE"
    fi
    
    return 0
}

# Create lock file
create_lock() {
    echo "$$" > "$LOCK_FILE"
    echo "Comprehensive redundancy system started at $(date)" >> "$LOCK_FILE"
}

# Remove lock file
remove_lock() {
    rm -f "$LOCK_FILE"
}

# Check prerequisites
check_prerequisites() {
    print_status "Checking prerequisites..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed or not in PATH"
        exit 1
    fi
    
    local node_version=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$node_version" -lt 18 ]; then
        error "Node.js version 18 or higher is required (found: $(node --version))"
        exit 1
    fi
    
    print_success "Node.js version: $(node --version)"
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error "npm is not installed or not in PATH"
        exit 1
    fi
    
    print_success "npm version: $(npm --version)"
    
    # Check Git
    if ! command -v git &> /dev/null; then
        error "Git is not installed or not in PATH"
        exit 1
    fi
    
    print_success "Git version: $(git --version)"
    
    # Check PM2 (optional)
    if command -v pm2 &> /dev/null; then
        print_success "PM2 found: $(pm2 --version)"
    else
        print_warning "PM2 not found - PM2 redundancy features will be limited"
    fi
    
    # Check if we're in a git repository
    if [ ! -d ".git" ]; then
        error "Not in a git repository"
        exit 1
    fi
    
    print_success "Git repository detected"
    
    # Check for required automation files
    local required_files=(
        "automation/comprehensive-redundancy-system.cjs"
        "automation/redundancy-config.json"
        ".github/workflows"
        "netlify/functions"
    )
    
    for file in "${required_files[@]}"; do
        if [ ! -e "$WORKSPACE_DIR/$file" ]; then
            warning "Required file/directory not found: $file"
        else
            print_success "Found: $file"
        fi
    done
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    if [ -f "$WORKSPACE_DIR/package.json" ]; then
        cd "$WORKSPACE_DIR"
        
        if [ ! -d "node_modules" ]; then
            log "Installing npm dependencies..."
            npm install
            success "Dependencies installed successfully"
        else
            log "Dependencies already installed, checking for updates..."
            npm update
            success "Dependencies updated successfully"
        fi
        
        cd "$SCRIPT_DIR"
    else
        warning "No package.json found, skipping dependency installation"
    fi
}

# Start comprehensive redundancy system
start_comprehensive_system() {
    print_status "Starting comprehensive redundancy system..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the comprehensive redundancy system
    log "Starting comprehensive redundancy system..."
    nohup node automation/comprehensive-redundancy-system.cjs start > "$LOG_DIR/comprehensive-redundancy.log" 2>&1 &
    local pid=$!
    
    # Save PID
    echo "$pid" > "$PID_FILE"
    
    # Wait a moment for the system to start
    sleep 3
    
    # Check if the process is still running
    if kill -0 "$pid" 2>/dev/null; then
        success "Comprehensive redundancy system started (PID: $pid)"
        log "Comprehensive redundancy system started with PID: $pid"
        
        # Show status
        print_status "Checking system status..."
        sleep 2
        node automation/comprehensive-redundancy-system.cjs status
        
    else
        error "Failed to start comprehensive redundancy system"
        log "Failed to start comprehensive redundancy system"
        rm -f "$PID_FILE"
        exit 1
    fi
    
    cd "$SCRIPT_DIR"
}

# Start PM2 redundancy monitoring
start_pm2_redundancy() {
    print_status "Starting PM2 redundancy monitoring..."
    
    if command -v pm2 &> /dev/null; then
        cd "$WORKSPACE_DIR"
        
        # Start PM2 redundancy monitoring
        log "Starting PM2 redundancy monitoring..."
        nohup node automation/pm2-redundancy-monitor.cjs monitor > "$LOG_DIR/pm2-redundancy.log" 2>&1 &
        local pm2_pid=$!
        
        # Save PM2 PID
        echo "$pm2_pid" > "$LOG_DIR/pm2-redundancy.pid"
        
        success "PM2 redundancy monitoring started (PID: $pm2_pid)"
        log "PM2 redundancy monitoring started with PID: $pm2_pid"
        
        cd "$SCRIPT_DIR"
    else
        warning "PM2 not available, skipping PM2 redundancy monitoring"
    fi
}

# Start GitHub Actions redundancy monitoring
start_github_redundancy() {
    print_status "Starting GitHub Actions redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    
    # Start GitHub Actions redundancy monitoring
    log "Starting GitHub Actions redundancy monitoring..."
    nohup node automation/github-actions-redundancy.cjs monitor > "$LOG_DIR/github-actions-redundancy.log" 2>&1 &
    local github_pid=$!
    
    # Save GitHub PID
    echo "$github_pid" > "$LOG_DIR/github-actions-redundancy.pid"
    
    success "GitHub Actions redundancy monitoring started (PID: $github_pid)"
    log "GitHub Actions redundancy monitoring started with PID: $github_pid"
    
    cd "$SCRIPT_DIR"
}

# Start Netlify functions redundancy monitoring
start_netlify_redundancy() {
    print_status "Starting Netlify functions redundancy monitoring..."
    
    cd "$WORKSPACE_DIR"
    
    # Start Netlify functions redundancy monitoring
    log "Starting Netlify functions redundancy monitoring..."
    nohup node automation/netlify-functions-redundancy.cjs monitor > "$LOG_DIR/netlify-functions-redundancy.log" 2>&1 &
    local netlify_pid=$!
    
    # Save Netlify PID
    echo "$netlify_pid" > "$LOG_DIR/netlify-functions-redundancy.pid"
    
    success "Netlify functions redundancy monitoring started (PID: $netlify_pid)"
    log "Netlify functions redundancy monitoring started with PID: $netlify_pid"
    
    cd "$SCRIPT_DIR"
}

# Start all redundancy systems
start_all_redundancy() {
    print_status "Starting all redundancy systems..."
    
    # Start PM2 redundancy
    start_pm2_redundancy
    
    # Start GitHub Actions redundancy
    start_github_redundancy
    
    # Start Netlify functions redundancy
    start_netlify_redundancy
    
    success "All redundancy systems started successfully"
}

# Health check
health_check() {
    print_status "Running health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check comprehensive system health
    log "Running comprehensive system health check..."
    if node automation/comprehensive-redundancy-system.cjs health; then
        success "Comprehensive system health check completed"
    else
        warning "Comprehensive system health check had issues"
    fi
    
    # Check PM2 redundancy health
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        log "Running PM2 redundancy health check..."
        if node automation/pm2-redundancy-monitor.cjs check; then
            success "PM2 redundancy health check completed"
        else
            warning "PM2 redundancy health check had issues"
        fi
    fi
    
    # Check GitHub Actions redundancy health
    if [ -f "$LOG_DIR/github-actions-redundancy.pid" ]; then
        log "Running GitHub Actions redundancy health check..."
        if node automation/github-actions-redundancy.cjs check; then
            success "GitHub Actions redundancy health check completed"
        else
            warning "GitHub Actions redundancy health check had issues"
        fi
    fi
    
    # Check Netlify functions redundancy health
    if [ -f "$LOG_DIR/netlify-functions-redundancy.pid" ]; then
        log "Running Netlify functions redundancy health check..."
        if node automation/netlify-functions-redundancy.cjs check; then
            success "Netlify functions redundancy health check completed"
        else
            warning "Netlify functions redundancy health check had issues"
        fi
    fi
    
    cd "$SCRIPT_DIR"
}

# Show status
show_status() {
    print_status "System status:"
    
    echo
    echo "=== Comprehensive Redundancy System ==="
    if [ -f "$PID_FILE" ]; then
        local pid=$(cat "$PID_FILE")
        if kill -0 "$pid" 2>/dev/null; then
            echo -e "Status: ${GREEN}Running${NC} (PID: $pid)"
        else
            echo -e "Status: ${RED}Stopped${NC} (stale PID file)"
        fi
    else
        echo -e "Status: ${RED}Not running${NC}"
    fi
    
    echo
    echo "=== Component Status ==="
    
    # PM2 redundancy status
    if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
        local pm2_pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
        if kill -0 "$pm2_pid" 2>/dev/null; then
            echo -e "PM2 Redundancy: ${GREEN}Running${NC} (PID: $pm2_pid)"
        else
            echo -e "PM2 Redundancy: ${RED}Stopped${NC}"
        fi
    else
        echo -e "PM2 Redundancy: ${RED}Not running${NC}"
    fi
    
    # GitHub Actions redundancy status
    if [ -f "$LOG_DIR/github-actions-redundancy.pid" ]; then
        local github_pid=$(cat "$LOG_DIR/github-actions-redundancy.pid")
        if kill -0 "$github_pid" 2>/dev/null; then
            echo -e "GitHub Actions Redundancy: ${GREEN}Running${NC} (PID: $github_pid)"
        else
            echo -e "GitHub Actions Redundancy: ${RED}Stopped${NC}"
        fi
    else
        echo -e "GitHub Actions Redundancy: ${RED}Not running${NC}"
    fi
    
    # Netlify functions redundancy status
    if [ -f "$LOG_DIR/netlify-functions-redundancy.pid" ]; then
        local netlify_pid=$(cat "$LOG_DIR/netlify-functions-redundancy.pid")
        if kill -0 "$netlify_pid" 2>/dev/null; then
            echo -e "Netlify Functions Redundancy: ${GREEN}Running${NC} (PID: $netlify_pid)"
        else
            echo -e "Netlify Functions Redundancy: ${RED}Stopped${NC}"
        fi
    else
        echo -e "Netlify Functions Redundancy: ${RED}Not running${NC}"
    fi
    
    echo
    echo "=== Log Files ==="
    echo "Main logs: $LOG_DIR"
    echo "Startup log: $LOG_DIR/startup.log"
    echo "Comprehensive system log: $LOG_DIR/comprehensive-redundancy.log"
}

# Main execution
main() {
    local command="${1:-start}"
    
    case "$command" in
        start)
            print_status "Starting comprehensive redundancy automation system..."
            
            ensure_log_dir
            check_prerequisites
            install_dependencies
            check_running || exit 1
            create_lock
            
            # Start all systems
            start_comprehensive_system
            start_all_redundancy
            
            # Run health check
            health_check
            
            # Show final status
            show_status
            
            print_success "Comprehensive redundancy automation system started successfully!"
            print_status "All PM2, GitHub Actions, and Netlify functions automations are now covered by redundancy systems"
            ;;
            
        stop)
            print_status "Stopping comprehensive redundancy automation system..."
            
            # Stop comprehensive system
            if [ -f "$PID_FILE" ]; then
                local pid=$(cat "$PID_FILE")
                if kill -0 "$pid" 2>/dev/null; then
                    kill "$pid"
                    success "Comprehensive redundancy system stopped (PID: $pid)"
                fi
                rm -f "$PID_FILE"
            fi
            
            # Stop component systems
            if [ -f "$LOG_DIR/pm2-redundancy.pid" ]; then
                local pm2_pid=$(cat "$LOG_DIR/pm2-redundancy.pid")
                if kill -0 "$pm2_pid" 2>/dev/null; then
                    kill "$pm2_pid"
                    success "PM2 redundancy monitoring stopped (PID: $pm2_pid)"
                fi
                rm -f "$LOG_DIR/pm2-redundancy.pid"
            fi
            
            if [ -f "$LOG_DIR/github-actions-redundancy.pid" ]; then
                local github_pid=$(cat "$LOG_DIR/github-actions-redundancy.pid")
                if kill -0 "$github_pid" 2>/dev/null; then
                    kill "$github_pid"
                    success "GitHub Actions redundancy monitoring stopped (PID: $github_pid)"
                fi
                rm -f "$LOG_DIR/github-actions-redundancy.pid"
            fi
            
            if [ -f "$LOG_DIR/netlify-functions-redundancy.pid" ]; then
                local netlify_pid=$(cat "$LOG_DIR/netlify-functions-redundancy.pid")
                if kill -0 "$netlify_pid" 2>/dev/null; then
                    kill "$netlify_pid"
                    success "Netlify functions redundancy monitoring stopped (PID: $netlify_pid)"
                fi
                rm -f "$LOG_DIR/netlify-functions-redundancy.pid"
            fi
            
            remove_lock
            success "All redundancy systems stopped"
            ;;
            
        restart)
            print_status "Restarting comprehensive redundancy automation system..."
            "$0" stop
            sleep 2
            "$0" start
            ;;
            
        status)
            show_status
            ;;
            
        health)
            health_check
            ;;
            
        logs)
            print_status "Recent log entries:"
            echo
            echo "=== Startup Log ==="
            if [ -f "$LOG_DIR/startup.log" ]; then
                tail -20 "$LOG_DIR/startup.log"
            else
                echo "No startup log found"
            fi
            
            echo
            echo "=== Comprehensive System Log ==="
            if [ -f "$LOG_DIR/comprehensive-redundancy.log" ]; then
                tail -20 "$LOG_DIR/comprehensive-redundancy.log"
            else
                echo "No comprehensive system log found"
            fi
            ;;
            
        *)
            echo "Usage: $0 {start|stop|restart|status|health|logs}"
            echo
            echo "Commands:"
            echo "  start     Start the comprehensive redundancy automation system"
            echo "  stop      Stop all redundancy systems"
            echo "  restart   Restart all redundancy systems"
            echo "  status    Show system status"
            echo "  health    Run health checks"
            echo "  logs      Show recent log entries"
            echo
            echo "This system provides comprehensive redundancy for:"
            echo "- PM2 process management automations"
            echo "- GitHub Actions workflow automations"
            echo "- Netlify functions automations"
            echo "- Automated monitoring and recovery"
            exit 1
            ;;
    esac
}

# Trap signals
trap 'remove_lock; exit 1' INT TERM

# Run main function
main "$@"