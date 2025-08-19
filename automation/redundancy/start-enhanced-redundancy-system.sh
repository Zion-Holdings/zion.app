#!/bin/bash

# Enhanced Redundancy Automation System Startup Script
# This script starts the comprehensive redundancy system for all PM2, GitHub Actions, and Netlify Functions automations

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
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
LOG_DIR="$PROJECT_ROOT/automation/logs"
REDUNDANCY_DIR="$SCRIPT_DIR"
ENHANCED_ORCHESTRATOR="$REDUNDANCY_DIR/enhanced-master-redundancy-orchestrator.cjs"

# Function to print colored output
print_status() {
    local color=$1
    local message=$2
    echo -e "${color}[$(date '+%Y-%m-%d %H:%M:%S')] ${message}${NC}"
}

# Function to check prerequisites
check_prerequisites() {
    print_status $BLUE "🔍 Checking prerequisites..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        print_status $RED "❌ Node.js is not installed or not in PATH"
        exit 1
    fi
    
    # Check Node.js version
    local node_version=$(node --version | cut -d'v' -f2)
    local required_version="20.18.1"
    
    if ! node -e "
        const current = process.version.slice(1).split('.').map(Number);
        const required = '$required_version'.split('.').map(Number);
        const isCompatible = current[0] > required[0] || 
                           (current[0] === required[0] && current[1] > required[1]) ||
                           (current[0] === required[0] && current[1] === required[1] && current[2] >= required[2]);
        process.exit(isCompatible ? 0 : 1);
    "; then
        print_status $RED "❌ Node.js version $node_version is below required version $required_version"
        exit 1
    fi
    
    print_status $GREEN "✅ Node.js version $node_version is compatible"
    
    # Check if npm is available
    if ! command -v npm &> /dev/null; then
        print_status $RED "❌ npm is not installed or not in PATH"
        exit 1
    fi
    
    print_status $GREEN "✅ npm is available"
    
    # Check if PM2 is available
    if ! command -v pm2 &> /dev/null; then
        print_status $YELLOW "⚠️  PM2 is not installed, will attempt to install it"
        npm install -g pm2 || {
            print_status $RED "❌ Failed to install PM2"
            exit 1
        }
    fi
    
    print_status $GREEN "✅ PM2 is available"
    
    # Check if required directories exist
    if [ ! -d "$PROJECT_ROOT" ]; then
        print_status $RED "❌ Project root directory not found: $PROJECT_ROOT"
        exit 1
    fi
    
    if [ ! -d "$REDUNDANCY_DIR" ]; then
        print_status $RED "❌ Redundancy directory not found: $REDUNDANCY_DIR"
        exit 1
    fi
    
    # Create log directory if it doesn't exist
    mkdir -p "$LOG_DIR"
    
    print_status $GREEN "✅ All prerequisites satisfied"
}

# Function to install dependencies
install_dependencies() {
    print_status $BLUE "📦 Installing dependencies..."
    
    cd "$PROJECT_ROOT"
    
    # Install node-cron if not already installed
    if ! node -e "require('node-cron')" 2>/dev/null; then
        print_status $YELLOW "Installing node-cron..."
        npm install node-cron || {
            print_status $RED "❌ Failed to install node-cron"
            exit 1
        }
    fi
    
    print_status $GREEN "✅ Dependencies installed"
}

# Function to start the enhanced redundancy system
start_enhanced_system() {
    print_status $BLUE "🚀 Starting Enhanced Redundancy Automation System..."
    
    cd "$PROJECT_ROOT"
    
    # Check if the enhanced orchestrator exists
    if [ ! -f "$ENHANCED_ORCHESTRATOR" ]; then
        print_status $RED "❌ Enhanced orchestrator not found: $ENHANCED_ORCHESTRATOR"
        exit 1
    fi
    
    # Start the enhanced master redundancy orchestrator
    print_status $CYAN "🎯 Launching Enhanced Master Redundancy Orchestrator..."
    
    # Create a startup script that will run the orchestrator
    local startup_script="$REDUNDANCY_DIR/startup-enhanced-orchestrator.js"
    
    cat > "$startup_script" << 'EOF'
#!/usr/bin/env node
'use strict';

const EnhancedMasterRedundancyOrchestrator = require('./enhanced-master-redundancy-orchestrator.cjs');

async function main() {
    console.log('🚀 Enhanced Redundancy Automation System Starting...');
    
    try {
        const orchestrator = new EnhancedMasterRedundancyOrchestrator();
        
        // Start all enhanced managers
        await orchestrator.startAllEnhancedManagers();
        
        // Start enhanced health monitoring
        await orchestrator.startEnhancedHealthMonitoring();
        
        console.log('✅ Enhanced Redundancy Automation System started successfully');
        console.log('📊 System is now monitoring and managing all automation redundancies');
        console.log('🔍 Health checks will run every 2 minutes');
        console.log('📈 Full system health checks will run every 30 minutes');
        console.log('🔍 Comprehensive audits will run every 2 hours');
        console.log('🧹 Daily maintenance will run at 2 AM');
        
        // Keep the process running
        process.on('SIGINT', async () => {
            console.log('\n🛑 Received SIGINT, shutting down gracefully...');
            await orchestrator.stopAllEnhancedManagers();
            process.exit(0);
        });
        
        process.on('SIGTERM', async () => {
            console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
            await orchestrator.stopAllEnhancedManagers();
            process.exit(0);
        });
        
        // Log system status every 5 minutes
        setInterval(async () => {
            try {
                const status = await orchestrator.getEnhancedStatus();
                console.log(`📊 System Status: ${status.systemHealth} | Emergency Mode: ${status.emergencyMode} | Uptime: ${Math.floor(status.uptime / 60)}m`);
            } catch (error) {
                console.error('❌ Failed to get system status:', error.message);
            }
        }, 5 * 60 * 1000);
        
    } catch (error) {
        console.error('❌ Failed to start Enhanced Redundancy Automation System:', error);
        process.exit(1);
    }
}

main().catch(error => {
    console.error('❌ Fatal error in Enhanced Redundancy Automation System:', error);
    process.exit(1);
});
EOF
    
    chmod +x "$startup_script"
    
    # Start the system in the background
    print_status $CYAN "🎯 Starting enhanced redundancy orchestrator in background..."
    
    nohup node "$startup_script" > "$LOG_DIR/enhanced-redundancy-startup.log" 2>&1 &
    local pid=$!
    
    # Wait a moment for the system to start
    sleep 3
    
    # Check if the process is running
    if kill -0 $pid 2>/dev/null; then
        print_status $GREEN "✅ Enhanced Redundancy Automation System started successfully (PID: $pid)"
        echo $pid > "$REDUNDANCY_DIR/enhanced-redundancy.pid"
        
        # Show initial status
        print_status $CYAN "📊 Checking initial system status..."
        sleep 2
        
        if [ -f "$LOG_DIR/enhanced-redundancy-startup.log" ]; then
            tail -n 20 "$LOG_DIR/enhanced-redundancy-startup.log" | while read line; do
                if [[ $line == *"✅"* ]]; then
                    print_status $GREEN "$line"
                elif [[ $line == *"❌"* ]]; then
                    print_status $RED "$line"
                elif [[ $line == *"⚠️"* ]]; then
                    print_status $YELLOW "$line"
                else
                    print_status $CYAN "$line"
                fi
            done
        fi
        
    else
        print_status $RED "❌ Failed to start Enhanced Redundancy Automation System"
        exit 1
    fi
}

# Function to show system information
show_system_info() {
    print_status $BLUE "📋 Enhanced Redundancy Automation System Information"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🎯 Purpose: Comprehensive redundancy coverage for all automation systems"
    echo "🔧 Components: PM2, GitHub Actions, Netlify Functions"
    echo "📁 Project Root: $PROJECT_ROOT"
    echo "📁 Redundancy Dir: $REDUNDANCY_DIR"
    echo "📁 Log Directory: $LOG_DIR"
    echo "🚀 Enhanced Orchestrator: $ENHANCED_ORCHESTRATOR"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
}

# Function to check if system is already running
check_if_running() {
    local pid_file="$REDUNDANCY_DIR/enhanced-redundancy.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        if kill -0 $pid 2>/dev/null; then
            print_status $YELLOW "⚠️  Enhanced Redundancy Automation System is already running (PID: $pid)"
            read -p "Do you want to restart it? (y/N): " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                print_status $BLUE "🔄 Stopping existing system..."
                kill $pid 2>/dev/null || true
                rm -f "$pid_file"
                sleep 2
            else
                print_status $BLUE "ℹ️  System already running, exiting"
                exit 0
            fi
        else
            print_status $YELLOW "⚠️  Found stale PID file, removing..."
            rm -f "$pid_file"
        fi
    fi
}

# Main execution
main() {
    echo ""
    print_status $PURPLE "🚀 Enhanced Redundancy Automation System Startup"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    
    show_system_info
    
    # Check if system is already running
    check_if_running
    
    # Check prerequisites
    check_prerequisites
    
    # Install dependencies
    install_dependencies
    
    # Start the enhanced system
    start_enhanced_system
    
    echo ""
    print_status $GREEN "🎉 Enhanced Redundancy Automation System startup completed!"
    echo ""
    print_status $CYAN "📊 To monitor the system:"
    echo "   • View logs: tail -f $LOG_DIR/enhanced-redundancy-startup.log"
    echo "   • Check status: pm2 status"
    echo "   • View backup workflows: ls -la .github/workflows/backup/"
    echo "   • View backup functions: ls -la netlify/functions/backup/"
    echo ""
    print_status $CYAN "🛑 To stop the system:"
    echo "   • Run: $REDUNDANCY_DIR/stop-enhanced-redundancy-system.sh"
    echo "   • Or manually: kill \$(cat $REDUNDANCY_DIR/enhanced-redundancy.pid)"
    echo ""
}

# Run main function
main "$@"