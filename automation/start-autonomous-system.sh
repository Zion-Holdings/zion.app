#!/bin/bash

# Netlify Autonomous System Startup Script
# This script starts the autonomous automation system and keeps it running

set -e

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
LOG_DIR="$SCRIPT_DIR/logs"
PID_FILE="$LOG_DIR/autonomous-manager.pid"
LOG_FILE="$LOG_DIR/startup.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

# Function to log errors
error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

# Function to log success
success() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS:${NC} $1" | tee -a "$LOG_FILE"
}

# Function to log warnings
warning() {
    echo -e "${YELLOW}[$(date '+%Y-%M-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

# Create log directory if it doesn't exist
mkdir -p "$LOG_DIR"

log "🚀 Starting Netlify Autonomous System..."
log "📁 Project root: $PROJECT_ROOT"
log "📁 Script directory: $SCRIPT_DIR"
log "📁 Log directory: $LOG_DIR"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    error "Node.js is not installed or not in PATH"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version)
log "📦 Node.js version: $NODE_VERSION"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    error "npm is not installed or not in PATH"
    exit 1
fi

# Check if the project has required dependencies
if [ ! -f "$PROJECT_ROOT/package.json" ]; then
    error "package.json not found in project root"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "$PROJECT_ROOT/node_modules" ]; then
    log "📦 Installing dependencies..."
    cd "$PROJECT_ROOT"
    npm ci
    cd "$SCRIPT_DIR"
fi

# Check if autonomous manager is already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        warning "Autonomous manager is already running (PID: $PID)"
        log "Use './stop-autonomous-system.sh' to stop it first"
        exit 1
    else
        log "Removing stale PID file"
        rm -f "$PID_FILE"
    fi
fi

# Function to start the autonomous manager
start_autonomous_manager() {
    log "🔧 Starting autonomous manager..."
    
    cd "$PROJECT_ROOT"
    
    # Start the autonomous manager in the background
    nohup node automation/netlify-autonomous-manager.cjs start > "$LOG_DIR/autonomous-manager.log" 2>&1 &
    
    AUTONOMOUS_PID=$!
    echo $AUTONOMOUS_PID > "$PID_FILE"
    
    log "✅ Autonomous manager started with PID: $AUTONOMOUS_PID"
    
    # Wait a moment for the process to start
    sleep 3
    
    # Check if the process is still running
    if ps -p "$AUTONOMOUS_PID" > /dev/null 2>&1; then
        success "Autonomous manager is running successfully"
        log "📊 PID: $AUTONOMOUS_PID"
        log "📁 PID file: $PID_FILE"
        log "📁 Log file: $LOG_DIR/autonomous-manager.log"
        log "🔄 Use './stop-autonomous-system.sh' to stop the system"
        log "📊 Use './status-autonomous-system.sh' to check status"
    else
        error "Autonomous manager failed to start"
        rm -f "$PID_FILE"
        exit 1
    fi
}

# Function to start continuous monitoring
start_continuous_monitoring() {
    log "📊 Starting continuous monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Start continuous monitoring in the background
    nohup node automation/netlify-continuous-monitor.cjs start > "$LOG_DIR/continuous-monitor.log" 2>&1 &
    
    MONITOR_PID=$!
    echo $MONITOR_PID > "$LOG_DIR/continuous-monitor.pid"
    
    log "✅ Continuous monitoring started with PID: $MONITOR_PID"
}

# Function to start scheduled optimization
start_scheduled_optimization() {
    log "⏰ Starting scheduled optimization..."
    
    cd "$PROJECT_ROOT"
    
    # Start scheduled optimization in the background
    nohup node -e "
        const artifactOptimizer = require('./automation/netlify-build-artifact-optimizer.cjs');
        
        setInterval(async () => {
            try {
                console.log('Running scheduled optimization...');
                const optimizer = new artifactOptimizer();
                const result = await optimizer.runFullOptimization();
                console.log('Scheduled optimization completed:', result.summary.totalSavingsFormatted);
            } catch (error) {
                console.error('Scheduled optimization failed:', error.message);
            }
        }, 2 * 60 * 60 * 1000); // Every 2 hours
        
        console.log('Scheduled optimization started (every 2 hours)');
        
        // Keep the process alive
        process.stdin.resume();
    " > "$LOG_DIR/scheduled-optimization.log" 2>&1 &
    
    OPTIMIZATION_PID=$!
    echo $OPTIMIZATION_PID > "$LOG_DIR/scheduled-optimization.pid"
    
    log "✅ Scheduled optimization started with PID: $OPTIMIZATION_PID"
}

# Function to monitor system health
monitor_system_health() {
    log "🏥 Starting system health monitoring..."
    
    cd "$PROJECT_ROOT"
    
    # Start health monitoring in the background
    nohup node -e "
        const orchestrator = require('./automation/netlify-intelligent-build-orchestrator.cjs');
        
        setInterval(async () => {
            try {
                console.log('Running health check...');
                const health = await orchestrator.prototype.runHealthCheck.call({});
                console.log('Health check completed:', health.overall);
                
                if (health.overall === 'poor') {
                    console.error('System health is poor, triggering recovery...');
                    // Could trigger recovery actions here
                }
            } catch (error) {
                console.error('Health check failed:', error.message);
            }
        }, 5 * 60 * 1000); // Every 5 minutes
        
        console.log('System health monitoring started (every 5 minutes)');
        
        // Keep the process alive
        process.stdin.resume();
    " > "$LOG_DIR/health-monitoring.log" 2>&1 &
    
    HEALTH_PID=$!
    echo $HEALTH_PID > "$LOG_DIR/health-monitoring.pid"
    
    log "✅ System health monitoring started with PID: $HEALTH_PID"
}

# Main startup sequence
main() {
    log "🔄 Starting all autonomous system components..."
    
    # Start autonomous manager
    start_autonomous_manager
    
    # Wait for autonomous manager to fully start
    sleep 5
    
    # Start continuous monitoring
    start_continuous_monitoring
    
    # Start scheduled optimization
    start_scheduled_optimization
    
    # Start system health monitoring
    monitor_system_health
    
    # Final status check
    sleep 3
    
    log "🎉 Netlify Autonomous System started successfully!"
    log ""
    log "📊 System Status:"
    log "   ✅ Autonomous Manager: Running (PID: $(cat "$PID_FILE"))"
    log "   ✅ Continuous Monitoring: Running (PID: $(cat "$LOG_DIR/continuous-monitor.pid"))"
    log "   ✅ Scheduled Optimization: Running (PID: $(cat "$LOG_DIR/scheduled-optimization.pid"))"
    log "   ✅ Health Monitoring: Running (PID: $(cat "$LOG_DIR/health-monitoring.pid"))"
    log ""
    log "📁 Log Files:"
    log "   📄 Autonomous Manager: $LOG_DIR/autonomous-manager.log"
    log "   📄 Continuous Monitor: $LOG_DIR/continuous-monitor.log"
    log "   📄 Scheduled Optimization: $LOG_DIR/scheduled-optimization.log"
    log "   📄 Health Monitoring: $LOG_DIR/health-monitoring.log"
    log ""
    log "🔧 Management Commands:"
    log "   🛑 Stop system: ./stop-autonomous-system.sh"
    log "   📊 Check status: ./status-autonomous-system.sh"
    log "   🔄 Restart system: ./restart-autonomous-system.sh"
    log ""
    log "🚀 System is now running autonomously and continuously!"
    
    # Keep the script running to maintain the background processes
    log "🔄 Monitoring system processes..."
    
    while true; do
        # Check if autonomous manager is still running
        if [ -f "$PID_FILE" ]; then
            PID=$(cat "$PID_FILE")
            if ! ps -p "$PID" > /dev/null 2>&1; then
                error "Autonomous manager process died unexpectedly"
                log "Attempting to restart..."
                start_autonomous_manager
            fi
        fi
        
        # Sleep for 30 seconds before next check
        sleep 30
    done
}

# Handle script interruption
trap 'log "🛑 Received interrupt signal, shutting down..."; exit 0' INT TERM

# Run main function
main "$@"
