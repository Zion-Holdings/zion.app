#!/bin/bash

# Frontend Sync Automation Setup Script
# This script sets up and launches all frontend sync automation systems

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
AUTOMATION_DIR="$PROJECT_ROOT/automation"
LOG_DIR="$AUTOMATION_DIR/frontend-sync-logs"
PID_DIR="$AUTOMATION_DIR/frontend-sync-pids"
STATUS_DIR="$AUTOMATION_DIR/frontend-sync-status"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
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

# Create necessary directories
create_directories() {
    log "Creating necessary directories..."
    
    mkdir -p "$LOG_DIR" "$PID_DIR" "$STATUS_DIR"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-agents"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-automations"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-generators"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-monitors"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-analytics"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-reports"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-backups"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-status"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-logs"
    mkdir -p "$AUTOMATION_DIR/frontend-sync-pids"
    mkdir -p "$AUTOMATION_DIR/data"
    
    log "Directories created successfully"
}

# Check dependencies
check_dependencies() {
    log "Checking dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check required npm packages
    cd "$PROJECT_ROOT"
    if [ ! -f "package.json" ]; then
        warn "package.json not found, creating basic package.json..."
        cat > package.json << EOF
{
  "name": "frontend-sync-automation",
  "version": "1.0.0",
  "description": "Frontend Sync Automation System",
  "main": "index.js",
  "scripts": {
    "start": "node automation/frontend-sync-autonomous-factory.js",
    "orchestrator": "node automation/frontend-sync-automation-orchestrator.js",
    "monitor": "node automation/continuous-monitor.js",
    "setup": "./automation/setup-frontend-sync-automation.sh",
    "stop": "./automation/cron-jobs/frontend-sync-continuous-automation.sh stop",
    "status": "./automation/cron-jobs/frontend-sync-continuous-automation.sh status"
  },
  "dependencies": {
    "chokidar": "^3.5.3",
    "cron": "^2.4.4",
    "node-cron": "^3.0.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "@types/node": "^18.0.0"
  }
}
EOF
    fi
    
    # Install dependencies
    log "Installing dependencies..."
    npm install
    
    log "Dependencies checked and installed successfully"
}

# Create configuration files
create_configs() {
    log "Creating configuration files..."
    
    # Frontend sync config
    cat > "$AUTOMATION_DIR/frontend-sync-config.json" << EOF
{
  "watchDirectories": [
    "pages",
    "components",
    "styles",
    "utils",
    "hooks",
    "public",
    "src"
  ],
  "watchExtensions": [".tsx", ".ts", ".js", ".jsx", ".css", ".scss", ".json"],
  "ignorePatterns": [
    "node_modules",
    ".git",
    ".next",
    "out",
    "dist",
    "build",
    "*.log",
    "*.pid"
  ],
  "syncInterval": 5000,
  "maxConcurrentSyncs": 5,
  "autoCommit": true,
  "autoDeploy": false,
  "healthCheckInterval": 30000,
  "performanceMonitoring": true,
  "errorRecovery": true,
  "backupBeforeSync": true
}
EOF

    # Automation orchestrator config
    cat > "$AUTOMATION_DIR/frontend-sync-automation-config.json" << EOF
{
  "autoCreateFactories": true,
  "autoImproveFactories": true,
  "autoMonitorFactories": true,
  "autoScaleFactories": true,
  "factoryCreationInterval": 300000,
  "improvementInterval": 600000,
  "monitoringInterval": 30000,
  "scalingInterval": 300000,
  "maxFactories": 50,
  "maxAutomations": 100,
  "performanceThreshold": 0.8,
  "errorThreshold": 0.1,
  "autoCommit": true,
  "autoDeploy": false,
  "backupInterval": 3600000,
  "cleanupInterval": 86400000,
  "analyticsEnabled": true,
  "reportingEnabled": true
}
EOF

    # Continuous monitor config
    cat > "$AUTOMATION_DIR/continuous-monitor-config.json" << EOF
{
  "checkInterval": 60000,
  "improvementInterval": 300000,
  "alertInterval": 300000,
  "maxImprovements": 10,
  "performanceThreshold": 0.8,
  "errorThreshold": 0.1,
  "autoImprove": true,
  "autoAlert": true,
  "autoCommit": true,
  "backupBeforeImprovement": true,
  "monitoringEnabled": true,
  "improvementEnabled": true,
  "alertingEnabled": true
}
EOF

    log "Configuration files created successfully"
}

# Start the automation systems
start_systems() {
    log "Starting frontend sync automation systems..."
    
    cd "$PROJECT_ROOT"
    
    # Start frontend sync factory
    log "Starting Frontend Sync Autonomous Factory..."
    nohup node "$AUTOMATION_DIR/frontend-sync-autonomous-factory.js" > "$LOG_DIR/frontend-sync-factory.log" 2>&1 &
    echo $! > "$PID_DIR/frontend-sync-factory.pid"
    log "Frontend Sync Factory started with PID $(cat $PID_DIR/frontend-sync-factory.pid)"
    
    # Wait a bit for factory to initialize
    sleep 3
    
    # Start automation orchestrator
    log "Starting Frontend Sync Automation Orchestrator..."
    nohup node "$AUTOMATION_DIR/frontend-sync-automation-orchestrator.js" > "$LOG_DIR/automation-orchestrator.log" 2>&1 &
    echo $! > "$PID_DIR/automation-orchestrator.pid"
    log "Automation Orchestrator started with PID $(cat $PID_DIR/automation-orchestrator.pid)"
    
    # Wait a bit for orchestrator to initialize
    sleep 3
    
    # Start continuous monitor
    log "Starting Continuous Monitor..."
    nohup node "$AUTOMATION_DIR/continuous-monitor.js" > "$LOG_DIR/continuous-monitor.log" 2>&1 &
    echo $! > "$PID_DIR/continuous-monitor.pid"
    log "Continuous Monitor started with PID $(cat $PID_DIR/continuous-monitor.pid)"
    
    # Start continuous automation script
    log "Starting Continuous Automation Script..."
    nohup bash "$AUTOMATION_DIR/cron-jobs/frontend-sync-continuous-automation.sh" start > "$LOG_DIR/continuous-automation.log" 2>&1 &
    echo $! > "$PID_DIR/continuous-automation.pid"
    log "Continuous Automation Script started with PID $(cat $PID_DIR/continuous-automation.pid)"
    
    log "All systems started successfully"
}

# Check system status
check_status() {
    log "Checking system status..."
    
    local all_running=true
    
    for pid_file in "$PID_DIR"/*.pid; do
        if [ -f "$pid_file" ]; then
            local name=$(basename "$pid_file" .pid)
            local pid=$(cat "$pid_file")
            
            if ps -p "$pid" > /dev/null 2>&1; then
                log "✅ $name: RUNNING (PID: $pid)"
            else
                error "❌ $name: STOPPED (PID: $pid)"
                all_running=false
            fi
        fi
    done
    
    if [ "$all_running" = true ]; then
        log "All systems are running successfully"
    else
        warn "Some systems are not running properly"
    fi
}

# Create systemd service (optional)
create_systemd_service() {
    if [ "$1" = "--systemd" ]; then
        log "Creating systemd service..."
        
        local service_name="frontend-sync-automation"
        local service_file="/etc/systemd/system/${service_name}.service"
        
        sudo tee "$service_file" > /dev/null << EOF
[Unit]
Description=Frontend Sync Automation System
After=network.target

[Service]
Type=simple
User=$USER
WorkingDirectory=$PROJECT_ROOT
ExecStart=$PROJECT_ROOT/automation/cron-jobs/frontend-sync-continuous-automation.sh start
ExecStop=$PROJECT_ROOT/automation/cron-jobs/frontend-sync-continuous-automation.sh stop
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

        sudo systemctl daemon-reload
        sudo systemctl enable "$service_name"
        
        log "Systemd service created and enabled"
        log "To start: sudo systemctl start $service_name"
        log "To stop: sudo systemctl stop $service_name"
        log "To check status: sudo systemctl status $service_name"
    fi
}

# Create cron job
create_cron_job() {
    if [ "$1" = "--cron" ]; then
        log "Creating cron job..."
        
        local cron_job="*/5 * * * * cd $PROJECT_ROOT && $PROJECT_ROOT/automation/cron-jobs/frontend-sync-continuous-automation.sh start > /dev/null 2>&1"
        
        # Add to crontab
        (crontab -l 2>/dev/null; echo "$cron_job") | crontab -
        
        log "Cron job created successfully"
        log "Cron job will run every 5 minutes"
    fi
}

# Show usage
show_usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --help              Show this help message"
    echo "  --setup             Setup the automation system"
    echo "  --start             Start all automation systems"
    echo "  --stop              Stop all automation systems"
    echo "  --restart           Restart all automation systems"
    echo "  --status            Check status of all systems"
    echo "  --systemd           Create systemd service"
    echo "  --cron              Create cron job"
    echo "  --full              Full setup and start"
    echo ""
    echo "Examples:"
    echo "  $0 --setup          # Setup the system"
    echo "  $0 --start          # Start all systems"
    echo "  $0 --full           # Full setup and start"
    echo "  $0 --systemd        # Create systemd service"
    echo "  $0 --cron           # Create cron job"
}

# Main execution
main() {
    case "${1:-}" in
        "--help")
            show_usage
            ;;
        "--setup")
            log "Setting up Frontend Sync Automation System..."
            create_directories
            check_dependencies
            create_configs
            log "Setup completed successfully"
            ;;
        "--start")
            log "Starting Frontend Sync Automation System..."
            start_systems
            sleep 5
            check_status
            ;;
        "--stop")
            log "Stopping Frontend Sync Automation System..."
            bash "$AUTOMATION_DIR/cron-jobs/frontend-sync-continuous-automation.sh" stop
            log "All systems stopped"
            ;;
        "--restart")
            log "Restarting Frontend Sync Automation System..."
            bash "$AUTOMATION_DIR/cron-jobs/frontend-sync-continuous-automation.sh" stop
            sleep 3
            start_systems
            sleep 5
            check_status
            ;;
        "--status")
            check_status
            ;;
        "--systemd")
            create_systemd_service "$1"
            ;;
        "--cron")
            create_cron_job "$1"
            ;;
        "--full")
            log "Performing full setup and start..."
            create_directories
            check_dependencies
            create_configs
            start_systems
            sleep 5
            check_status
            log "Full setup and start completed"
            ;;
        *)
            error "Invalid option: $1"
            show_usage
            exit 1
            ;;
    esac
}

# Run main function
main "$@" 