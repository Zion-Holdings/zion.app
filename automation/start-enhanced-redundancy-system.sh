#!/bin/bash

# 🚀 Enhanced Redundancy Automation System Startup Script
# This script initializes all enhanced redundancy systems for comprehensive automation coverage

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
WORKSPACE_DIR="$SCRIPT_DIR/.."
LOGS_DIR="$WORKSPACE_DIR/automation/logs"
REDUNDANCY_DIR="$WORKSPACE_DIR/automation"
PID_FILE="$LOGS_DIR/enhanced-redundancy.pid"
STATUS_FILE="$LOGS_DIR/enhanced-redundancy.status"

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

success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log "🔍 Checking prerequisites..."
    
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
    if [ ! -d "$WORKSPACE_DIR/node_modules" ]; then
        warn "Installing npm dependencies..."
        cd "$WORKSPACE_DIR"
        npm install
    fi
    
    success "Prerequisites check completed successfully"
}

# Initialize enhanced redundancy master system
init_enhanced_redundancy_master() {
    log "🚀 Initializing Enhanced Redundancy Master System..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the enhanced redundancy master
    log "Starting Enhanced Redundancy Master..."
    node automation/enhanced-redundancy-master.cjs start &
    MASTER_PID=$!
    
    # Wait a moment for it to start
    sleep 5
    
    # Check if it's running
    if kill -0 $MASTER_PID 2>/dev/null; then
        success "Enhanced Redundancy Master started successfully (PID: $MASTER_PID)"
        echo $MASTER_PID > "$PID_FILE"
    else
        error "Failed to start Enhanced Redundancy Master"
        return 1
    fi
}

# Initialize enhanced PM2 redundancy system
init_enhanced_pm2_redundancy() {
    log "🔧 Initializing Enhanced PM2 Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the enhanced PM2 redundancy manager
    log "Starting Enhanced PM2 Redundancy Manager..."
    node automation/enhanced-pm2-redundancy-manager.cjs start &
    PM2_PID=$!
    
    # Wait a moment for it to start
    sleep 3
    
    # Check if it's running
    if kill -0 $PM2_PID 2>/dev/null; then
        success "Enhanced PM2 Redundancy Manager started successfully (PID: $PM2_PID)"
        echo $PM2_PID >> "$PID_FILE"
    else
        warn "Failed to start Enhanced PM2 Redundancy Manager"
    fi
}

# Initialize enhanced GitHub Actions redundancy system
init_enhanced_github_redundancy() {
    log "🐙 Initializing Enhanced GitHub Actions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the enhanced GitHub Actions redundancy manager
    log "Starting Enhanced GitHub Actions Redundancy Manager..."
    node automation/enhanced-github-actions-redundancy-manager.cjs start &
    GITHUB_PID=$!
    
    # Wait a moment for it to start
    sleep 3
    
    # Check if it's running
    if kill -0 $GITHUB_PID 2>/dev/null; then
        success "Enhanced GitHub Actions Redundancy Manager started successfully (PID: $GITHUB_PID)"
        echo $GITHUB_PID >> "$PID_FILE"
    else
        warn "Failed to start Enhanced GitHub Actions Redundancy Manager"
    fi
}

# Initialize enhanced Netlify functions redundancy system
init_enhanced_netlify_redundancy() {
    log "☁️ Initializing Enhanced Netlify Functions Redundancy System..."
    
    cd "$WORKSPACE_DIR"
    
    # Start the enhanced Netlify functions redundancy manager
    log "Starting Enhanced Netlify Functions Redundancy Manager..."
    node automation/enhanced-netlify-functions-redundancy-manager.cjs start &
    NETLIFY_PID=$!
    
    # Wait a moment for it to start
    sleep 3
    
    # Check if it's running
    if kill -0 $NETLIFY_PID 2>/dev/null; then
        success "Enhanced Netlify Functions Redundancy Manager started successfully (PID: $NETLIFY_PID)"
        echo $NETLIFY_PID >> "$PID_FILE"
    else
        warn "Failed to start Enhanced Netlify Functions Redundancy Manager"
    fi
}

# Start PM2 redundancy ecosystem
start_pm2_ecosystem() {
    log "🔄 Starting PM2 Redundancy Ecosystem..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop existing PM2 processes if running
    if pm2 list | grep -q "zion-auto-sync"; then
        warn "Stopping existing PM2 processes..."
        pm2 stop all 2>/dev/null || true
        pm2 delete all 2>/dev/null || true
    fi
    
    # Start redundancy ecosystem
    log "Starting PM2 redundancy ecosystem..."
    pm2 start ecosystem-redundancy.pm2.cjs
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 startup script
    pm2 startup 2>/dev/null || true
    
    success "PM2 redundancy ecosystem started successfully"
}

# Perform comprehensive health check
perform_health_check() {
    log "🏥 Performing comprehensive health check..."
    
    cd "$WORKSPACE_DIR"
    
    # Check Enhanced Redundancy Master
    log "Checking Enhanced Redundancy Master..."
    MASTER_STATUS=$(node automation/enhanced-redundancy-master.cjs status 2>/dev/null || echo "{}")
    if echo "$MASTER_STATUS" | grep -q "monitoring.*true"; then
        success "Enhanced Redundancy Master is running"
    else
        warn "Enhanced Redundancy Master is not running properly"
    fi
    
    # Check Enhanced PM2 Redundancy Manager
    log "Checking Enhanced PM2 Redundancy Manager..."
    PM2_STATUS=$(node automation/enhanced-pm2-redundancy-manager.cjs status 2>/dev/null || echo "{}")
    if echo "$PM2_STATUS" | grep -q "monitoring.*true"; then
        success "Enhanced PM2 Redundancy Manager is running"
    else
        warn "Enhanced PM2 Redundancy Manager is not running properly"
    fi
    
    # Check Enhanced GitHub Actions Redundancy Manager
    log "Checking Enhanced GitHub Actions Redundancy Manager..."
    GITHUB_STATUS=$(node automation/enhanced-github-actions-redundancy-manager.cjs status 2>/dev/null || echo "{}")
    if echo "$GITHUB_STATUS" | grep -q "monitoring.*true"; then
        success "Enhanced GitHub Actions Redundancy Manager is running"
    else
        warn "Enhanced GitHub Actions Redundancy Manager is not running properly"
    fi
    
    # Check Enhanced Netlify Functions Redundancy Manager
    log "Checking Enhanced Netlify Functions Redundancy Manager..."
    NETLIFY_STATUS=$(node automation/enhanced-netlify-functions-redundancy-manager.cjs status 2>/dev/null || echo "{}")
    if echo "$NETLIFY_STATUS" | grep -q "monitoring.*true"; then
        success "Enhanced Netlify Functions Redundancy Manager is running"
    else
        warn "Enhanced Netlify Functions Redundancy Manager is not running properly"
    fi
    
    # Check PM2 processes
    log "Checking PM2 processes..."
    if pm2 list | grep -q "online"; then
        success "PM2 processes are running"
    else
        warn "No PM2 processes are running"
    fi
    
    success "Comprehensive health check completed"
}

# Generate status report
generate_status_report() {
    log "📊 Generating status report..."
    
    cd "$WORKSPACE_DIR"
    
    # Create status report
    cat > "$STATUS_FILE" << EOF
Enhanced Redundancy Automation System Status Report
Generated: $(date '+%Y-%m-%d %H:%M:%S')

=== System Status ===
Enhanced Redundancy Master: $(node automation/enhanced-redundancy-master.cjs status 2>/dev/null | grep -o '"monitoring":[^,]*' | cut -d: -f2 || echo "unknown")
Enhanced PM2 Redundancy Manager: $(node automation/enhanced-pm2-redundancy-manager.cjs status 2>/dev/null | grep -o '"monitoring":[^,]*' | cut -d: -f2 || echo "unknown")
Enhanced GitHub Actions Redundancy Manager: $(node automation/enhanced-github-actions-redundancy-manager.cjs status 2>/dev/null | grep -o '"monitoring":[^,]*' | cut -d: -f2 || echo "unknown")
Enhanced Netlify Functions Redundancy Manager: $(node automation/enhanced-netlify-functions-redundancy-manager.cjs status 2>/dev/null | grep -o '"monitoring":[^,]*' | cut -d: -f2 || echo "unknown")

=== PM2 Status ===
$(pm2 list 2>/dev/null || echo "PM2 not available")

=== Health Summary ===
$(node automation/enhanced-redundancy-master.cjs health 2>/dev/null | grep -E "(status|Overall)" || echo "Health check not available")

=== Log Files ===
Enhanced Redundancy Master: $LOGS_DIR/enhanced-redundancy-master.log
Enhanced PM2 Redundancy: $LOGS_DIR/enhanced-pm2-redundancy.log
Enhanced GitHub Actions Redundancy: $LOGS_DIR/enhanced-github-actions-redundancy.log
Enhanced Netlify Functions Redundancy: $LOGS_DIR/enhanced-netlify-functions-redundancy.log

=== Configuration ===
Redundancy Config: $WORKSPACE_DIR/automation/redundancy-config.json
PM2 Ecosystems: 
- $WORKSPACE_DIR/ecosystem.pm2.cjs
- $WORKSPACE_DIR/ecosystem.redundancy.cjs
- $WORKSPACE_DIR/ecosystem-redundancy.pm2.cjs

=== GitHub Actions Workflows ===
$(ls -la "$WORKSPACE_DIR/.github/workflows/" 2>/dev/null | grep "\.yml$" || echo "No workflows found")

=== Netlify Functions ===
$(ls -la "$WORKSPACE_DIR/netlify/functions/" 2>/dev/null | head -20 || echo "No functions found")
EOF
    
    success "Status report generated: $STATUS_FILE"
}

# Stop all redundancy systems
stop_all_systems() {
    log "🛑 Stopping all enhanced redundancy systems..."
    
    cd "$WORKSPACE_DIR"
    
    # Stop Enhanced Redundancy Master
    log "Stopping Enhanced Redundancy Master..."
    node automation/enhanced-redundancy-master.cjs stop 2>/dev/null || true
    
    # Stop Enhanced PM2 Redundancy Manager
    log "Stopping Enhanced PM2 Redundancy Manager..."
    node automation/enhanced-pm2-redundancy-manager.cjs stop 2>/dev/null || true
    
    # Stop Enhanced GitHub Actions Redundancy Manager
    log "Stopping Enhanced GitHub Actions Redundancy Manager..."
    node automation/enhanced-github-actions-redundancy-manager.cjs stop 2>/dev/null || true
    
    # Stop Enhanced Netlify Functions Redundancy Manager
    log "Stopping Enhanced Netlify Functions Redundancy Manager..."
    node automation/enhanced-netlify-functions-redundancy-manager.cjs stop 2>/dev/null || true
    
    # Stop PM2 processes
    log "Stopping PM2 processes..."
    pm2 stop all 2>/dev/null || true
    
    # Remove PID file
    rm -f "$PID_FILE"
    
    success "All enhanced redundancy systems stopped"
}

# Show system status
show_status() {
    log "📊 Enhanced Redundancy System Status:"
    
    if [ -f "$PID_FILE" ]; then
        echo "🟢 System is running"
        echo "Active PIDs:"
        cat "$PID_FILE" | while read pid; do
            if kill -0 $pid 2>/dev/null; then
                echo "  ✅ PID $pid (running)"
            else
                echo "  ❌ PID $pid (not running)"
            fi
        done
    else
        echo "🔴 System is not running"
    fi
    
    echo ""
    echo "📁 Log files:"
    ls -la "$LOGS_DIR"/*.log 2>/dev/null | head -10 || echo "No log files found"
    
    echo ""
    echo "📋 PM2 status:"
    pm2 list 2>/dev/null | head -20 || echo "PM2 not available"
}

# Show system health
show_health() {
    log "🏥 Enhanced Redundancy System Health:"
    
    cd "$WORKSPACE_DIR"
    
    echo "🔍 Enhanced Redundancy Master Health:"
    node automation/enhanced-redundancy-master.cjs health 2>/dev/null | grep -E "(status|Overall|PM2|GitHub|Netlify)" || echo "Health check failed"
    
    echo ""
    echo "🔍 Enhanced PM2 Redundancy Health:"
    node automation/enhanced-pm2-redundancy-manager.cjs health 2>/dev/null | grep -E "(status|Total|Healthy|Failed)" || echo "Health check failed"
    
    echo ""
    echo "🔍 Enhanced GitHub Actions Redundancy Health:"
    node automation/enhanced-github-actions-redundancy-manager.cjs health 2>/dev/null | grep -E "(status|Total|Healthy|Failed)" || echo "Health check failed"
    
    echo ""
    echo "🔍 Enhanced Netlify Functions Redundancy Health:"
    node automation/enhanced-netlify-functions-redundancy-manager.cjs health 2>/dev/null | grep -E "(status|Total|Healthy|Failed)" || echo "Health check failed"
}

# Show system logs
show_logs() {
    log "📝 Enhanced Redundancy System Logs:"
    
    echo "📋 Enhanced Redundancy Master Logs:"
    tail -20 "$LOGS_DIR/enhanced-redundancy-master.log" 2>/dev/null || echo "No logs available"
    
    echo ""
    echo "📋 Enhanced PM2 Redundancy Logs:"
    tail -20 "$LOGS_DIR/enhanced-pm2-redundancy.log" 2>/dev/null || echo "No logs available"
    
    echo ""
    echo "📋 Enhanced GitHub Actions Redundancy Logs:"
    tail -20 "$LOGS_DIR/enhanced-github-actions-redundancy.log" 2>/dev/null || echo "No logs available"
    
    echo ""
    echo "📋 Enhanced Netlify Functions Redundancy Logs:"
    tail -20 "$LOGS_DIR/enhanced-netlify-functions-redundancy.log" 2>/dev/null || echo "No logs available"
}

# Main startup function
start_system() {
    log "🚀 Starting Enhanced Redundancy Automation System..."
    
    # Check prerequisites
    check_prerequisites
    
    # Initialize all systems
    init_enhanced_redundancy_master
    init_enhanced_pm2_redundancy
    init_enhanced_github_redundancy
    init_enhanced_netlify_redundancy
    
    # Start PM2 ecosystem
    start_pm2_ecosystem
    
    # Wait for systems to stabilize
    log "⏳ Waiting for systems to stabilize..."
    sleep 10
    
    # Perform health check
    perform_health_check
    
    # Generate status report
    generate_status_report
    
    success "Enhanced Redundancy Automation System started successfully!"
    
    log "📊 System Overview:"
    log "  ✅ Enhanced Redundancy Master - Comprehensive orchestration"
    log "  ✅ Enhanced PM2 Redundancy - Process monitoring & recovery"
    log "  ✅ Enhanced GitHub Actions Redundancy - Workflow validation & recovery"
    log "  ✅ Enhanced Netlify Functions Redundancy - Function validation & recovery"
    log "  ✅ PM2 Redundancy Ecosystem - Process management"
    
    log "📁 Logs available in: $LOGS_DIR"
    log "📋 Status report: $STATUS_FILE"
    log "🔄 Use './automation/start-enhanced-redundancy-system.sh status' to check status"
    log "🔄 Use './automation/start-enhanced-redundancy-system.sh health' to check health"
    log "🔄 Use './automation/start-enhanced-redundancy-system.sh logs' to view logs"
}

# Main function
main() {
    case "${1:-start}" in
        start)
            start_system
            ;;
        stop)
            stop_all_systems
            ;;
        restart)
            stop_all_systems
            sleep 5
            start_system
            ;;
        status)
            show_status
            ;;
        health)
            show_health
            ;;
        logs)
            show_logs
            ;;
        *)
            echo -e "${CYAN}Enhanced Redundancy Automation System${NC}"
            echo ""
            echo "Usage: $0 [command]"
            echo ""
            echo "Commands:"
            echo "  start     - Start all enhanced redundancy systems"
            echo "  stop      - Stop all enhanced redundancy systems"
            echo "  restart   - Restart all enhanced redundancy systems"
            echo "  status    - Show system status"
            echo "  health    - Show system health"
            echo "  logs      - Show system logs"
            echo ""
            echo "Features:"
            echo "  ✅ Enhanced Redundancy Master - Comprehensive orchestration"
            echo "  ✅ Enhanced PM2 Redundancy - Advanced process management"
            echo "  ✅ Enhanced GitHub Actions Redundancy - Workflow validation"
            echo "  ✅ Enhanced Netlify Functions Redundancy - Function validation"
            echo "  ✅ Automatic health monitoring and recovery"
            echo "  ✅ Comprehensive logging and reporting"
            echo ""
            echo "Logs: $LOGS_DIR"
            echo "Status: $STATUS_FILE"
            ;;
    esac
}

# Run main function
main "$@"