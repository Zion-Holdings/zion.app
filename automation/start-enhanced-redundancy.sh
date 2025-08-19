#!/bin/bash

# Enhanced Redundancy Automation Startup Script
# This script initializes all redundancy automation systems with proper startup sequence

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
WORKSPACE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOG_DIR="$WORKSPACE_DIR/automation/logs"
BACKUP_DIR="$WORKSPACE_DIR/automation/backups"
ENHANCED_ECOSYSTEM="$WORKSPACE_DIR/ecosystem.enhanced-redundancy.cjs"

# Function to print colored output
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

# Function to check if PM2 is installed
check_pm2() {
    if ! command -v pm2 &> /dev/null; then
        print_error "PM2 is not installed. Please install PM2 first:"
        echo "npm install -g pm2"
        exit 1
    fi
    print_success "PM2 is available"
}

# Function to check if Node.js is available
check_node() {
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    NODE_VERSION=$(node --version)
    print_success "Node.js $NODE_VERSION is available"
}

# Function to create necessary directories
create_directories() {
    print_status "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR"
    mkdir -p "$BACKUP_DIR/pm2"
    mkdir -p "$BACKUP_DIR/github-actions"
    mkdir -p "$BACKUP_DIR/netlify-functions"
    mkdir -p "$BACKUP_DIR/master"
    
    print_success "Directories created successfully"
}

# Function to check if required files exist
check_required_files() {
    print_status "Checking required files..."
    
    local missing_files=()
    
    # Check enhanced redundancy scripts
    if [[ ! -f "$WORKSPACE_DIR/automation/enhanced-pm2-redundancy.cjs" ]]; then
        missing_files+=("enhanced-pm2-redundancy.cjs")
    fi
    
    if [[ ! -f "$WORKSPACE_DIR/automation/enhanced-github-actions-redundancy.cjs" ]]; then
        missing_files+=("enhanced-github-actions-redundancy.cjs")
    fi
    
    if [[ ! -f "$WORKSPACE_DIR/automation/enhanced-netlify-functions-redundancy.cjs" ]]; then
        missing_files+=("enhanced-netlify-functions-redundancy.cjs")
    fi
    
    if [[ ! -f "$WORKSPACE_DIR/automation/master-redundancy-orchestrator.cjs" ]]; then
        missing_files+=("master-redundancy-orchestrator.cjs")
    fi
    
    if [[ ! -f "$ENHANCED_ECOSYSTEM" ]]; then
        missing_files+=("ecosystem.enhanced-redundancy.cjs")
    fi
    
    if [[ ${#missing_files[@]} -gt 0 ]]; then
        print_error "Missing required files:"
        for file in "${missing_files[@]}"; do
            echo "  - $file"
        done
        exit 1
    fi
    
    print_success "All required files are present"
}

# Function to stop existing PM2 processes
stop_existing_processes() {
    print_status "Stopping existing PM2 processes..."
    
    # Stop existing redundancy processes
    local processes=(
        "master-redundancy-orchestrator"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
        "redundancy-automation-system"
        "redundancy-health-monitor"
        "redundancy-git-sync"
        "redundancy-build-monitor"
    )
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process"; then
            print_status "Stopping $process..."
            pm2 stop "$process" 2>/dev/null || true
            pm2 delete "$process" 2>/dev/null || true
        fi
    done
    
    print_success "Existing processes stopped"
}

# Function to start enhanced redundancy systems
start_enhanced_systems() {
    print_status "Starting enhanced redundancy systems..."
    
    # Start with the master orchestrator
    print_status "Starting master redundancy orchestrator..."
    pm2 start "$ENHANCED_ECOSYSTEM" --only "master-redundancy-orchestrator"
    
    # Wait a moment for the master to initialize
    sleep 5
    
    # Start individual enhanced systems
    print_status "Starting enhanced PM2 redundancy..."
    pm2 start "$ENHANCED_ECOSYSTEM" --only "enhanced-pm2-redundancy"
    
    print_status "Starting enhanced GitHub Actions redundancy..."
    pm2 start "$ENHANCED_ECOSYSTEM" --only "enhanced-github-actions-redundancy"
    
    print_status "Starting enhanced Netlify functions redundancy..."
    pm2 start "$ENHANCED_ECOSYSTEM" --only "enhanced-netlify-functions-redundancy"
    
    print_success "Enhanced redundancy systems started"
}

# Function to start legacy systems (optional)
start_legacy_systems() {
    print_status "Starting legacy redundancy systems..."
    
    # Start legacy systems for backward compatibility
    pm2 start "$ENHANCED_ECOSYSTEM" --only "redundancy-automation-system"
    pm2 start "$ENHANCED_ECOSYSTEM" --only "redundancy-health-monitor"
    pm2 start "$ENHANCED_ECOSYSTEM" --only "redundancy-git-sync"
    pm2 start "$ENHANCED_ECOSYSTEM" --only "redundancy-build-monitor"
    
    print_success "Legacy redundancy systems started"
}

# Function to start PM2 auto-sync (optional)
start_pm2_auto_sync() {
    print_status "Starting PM2 auto-sync systems..."
    
    # Start PM2 auto-sync for backward compatibility
    pm2 start "$ENHANCED_ECOSYSTEM" --only "zion-auto-sync"
    pm2 start "$ENHANCED_ECOSYSTEM" --only "zion-auto-sync-cron"
    
    print_success "PM2 auto-sync systems started"
}

# Function to save PM2 configuration
save_pm2_config() {
    print_status "Saving PM2 configuration..."
    
    pm2 save
    
    # Generate startup script
    pm2 startup
    
    print_success "PM2 configuration saved"
}

# Function to display status
display_status() {
    print_status "Displaying system status..."
    
    echo ""
    echo "=== Enhanced Redundancy Automation Status ==="
    echo ""
    
    pm2 list
    
    echo ""
    echo "=== Log Files ==="
    echo "Master Orchestrator: $LOG_DIR/master-orchestrator-out.log"
    echo "Enhanced PM2: $LOG_DIR/enhanced-pm2-out.log"
    echo "Enhanced GitHub: $LOG_DIR/enhanced-github-out.log"
    echo "Enhanced Netlify: $LOG_DIR/enhanced-netlify-out.log"
    echo ""
    echo "=== Backup Directories ==="
    echo "Master: $BACKUP_DIR/master"
    echo "PM2: $BACKUP_DIR/pm2"
    echo "GitHub Actions: $BACKUP_DIR/github-actions"
    echo "Netlify Functions: $BACKUP_DIR/netlify-functions"
    echo ""
    echo "=== Usage ==="
    echo "View logs: pm2 logs"
    echo "Monitor: pm2 monit"
    echo "Restart all: pm2 restart all"
    echo "Stop all: pm2 stop all"
    echo ""
}

# Function to perform health check
perform_health_check() {
    print_status "Performing initial health check..."
    
    # Wait for systems to initialize
    sleep 10
    
    # Check if all processes are running
    local processes=(
        "master-redundancy-orchestrator"
        "enhanced-pm2-redundancy"
        "enhanced-github-actions-redundancy"
        "enhanced-netlify-functions-redundancy"
    )
    
    local all_healthy=true
    
    for process in "${processes[@]}"; do
        if pm2 list | grep -q "$process.*online"; then
            print_success "$process is running"
        else
            print_error "$process is not running properly"
            all_healthy=false
        fi
    done
    
    if [[ "$all_healthy" == true ]]; then
        print_success "All enhanced redundancy systems are healthy"
    else
        print_warning "Some systems may need attention"
    fi
}

# Main execution
main() {
    echo "=========================================="
    echo "Enhanced Redundancy Automation Startup"
    echo "=========================================="
    echo ""
    
    # Change to workspace directory
    cd "$WORKSPACE_DIR"
    
    # Pre-flight checks
    check_pm2
    check_node
    check_required_files
    
    # Setup
    create_directories
    stop_existing_processes
    
    # Start systems
    start_enhanced_systems
    
    # Optional: Start legacy systems
    read -p "Do you want to start legacy redundancy systems? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        start_legacy_systems
    fi
    
    # Optional: Start PM2 auto-sync
    read -p "Do you want to start PM2 auto-sync systems? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        start_pm2_auto_sync
    fi
    
    # Finalize
    save_pm2_config
    perform_health_check
    display_status
    
    print_success "Enhanced redundancy automation startup completed!"
    echo ""
    echo "The system is now monitoring:"
    echo "  ✓ PM2 processes and ecosystem files"
    echo "  ✓ GitHub Actions workflows"
    echo "  ✓ Netlify functions"
    echo "  ✓ Overall system health and coordination"
    echo ""
    echo "All systems are configured with automatic backup, monitoring, and recovery."
}

# Handle command line arguments
case "${1:-}" in
    --help|-h)
        echo "Usage: $0 [OPTIONS]"
        echo ""
        echo "Options:"
        echo "  --help, -h     Show this help message"
        echo "  --status       Show system status only"
        echo "  --stop         Stop all redundancy systems"
        echo "  --restart      Restart all redundancy systems"
        echo ""
        echo "Examples:"
        echo "  $0              # Start all systems"
        echo "  $0 --status     # Show status only"
        echo "  $0 --stop       # Stop all systems"
        echo "  $0 --restart    # Restart all systems"
        exit 0
        ;;
    --status)
        display_status
        exit 0
        ;;
    --stop)
        print_status "Stopping all redundancy systems..."
        pm2 stop all
        pm2 delete all
        print_success "All systems stopped"
        exit 0
        ;;
    --restart)
        print_status "Restarting all redundancy systems..."
        pm2 restart all
        print_success "All systems restarted"
        exit 0
        ;;
    "")
        main
        ;;
    *)
        print_error "Unknown option: $1"
        echo "Use --help for usage information"
        exit 1
        ;;
esac