#!/bin/bash

# Comprehensive Automation Startup Script
# This script starts all automation systems

echo "🚀 Starting Comprehensive Automation System..."

# Set environment variables
export NODE_ENV=production
export HIGH_SPEED_MODE=true
export AUTOMATION_MODE=comprehensive

# Create necessary directories
mkdir -p automation/logs
mkdir -p automation/pids
mkdir -p automation/status-data
mkdir -p automation/health-reports
mkdir -p automation/monitoring-data
mkdir -p automation/performance-data
mkdir -p automation/error-logs
mkdir -p automation/maintenance-logs

# Function to start a system
start_system() {
    local system_name=$1
    local script_path=$2
    local description=$3
    
    echo "🔄 Starting $system_name..."
    
    if [ -f "$script_path" ]; then
        # Start the system in background
        nohup node "$script_path" > "automation/logs/${system_name}.log" 2>&1 &
        local pid=$!
        
        # Save PID
        echo $pid > "automation/pids/${system_name}.pid"
        
        echo "✅ $system_name started (PID: $pid)"
    else
        echo "⚠️  Script not found: $script_path"
    fi
}

# Start core systems
start_system "autonomous-system" "automation/start-autonomous-system.js" "Main autonomous system"
start_system "ultimate-automation-launcher" "automation/ultimate-automation-launcher.js" "Ultimate automation launcher"
start_system "automation-monitor" "automation/automation-monitor-and-maintainer-factory.js" "Automation monitor and maintainer"
start_system "master-orchestrator" "automation/master-responsive-automation-orchestrator.js" "Master responsive automation orchestrator"
start_system "content-generator" "automation/new-content-generation-automation.js" "Content generation automation"
start_system "performance-monitor" "automation/performance-monitor.js" "Performance monitoring system"
start_system "link-checker" "automation/link-checking-orchestrator.js" "Link checking system"
start_system "monetization-system" "automation/monetization-orchestrator.js" "Monetization automation system"
start_system "intelligent-system" "automation/intelligent-automation-system.js" "Intelligent automation system"
start_system "enhanced-system" "automation/enhanced-autonomous-system.js" "Enhanced autonomous system"

# Start the comprehensive launcher
echo "🚀 Starting Comprehensive Automation Launcher..."
nohup node automation/comprehensive-automation-launcher.js > automation/logs/comprehensive-launcher.log 2>&1 &
comprehensive_pid=$!
echo $comprehensive_pid > automation/pids/comprehensive-launcher.pid

echo "✅ Comprehensive Automation System started!"
echo "📊 Check logs in automation/logs/"
echo "📊 Check PIDs in automation/pids/"
echo "📊 Check status in automation/status-data/"

# Wait a moment and show status
sleep 5
echo ""
echo "📊 Current Status:"
echo "=================="
for pid_file in automation/pids/*.pid; do
    if [ -f "$pid_file" ]; then
        system_name=$(basename "$pid_file" .pid)
        pid=$(cat "$pid_file")
        if ps -p $pid > /dev/null 2>&1; then
            echo "✅ $system_name (PID: $pid) - RUNNING"
        else
            echo "❌ $system_name (PID: $pid) - STOPPED"
        fi
    fi
done

echo ""
echo "🎯 All automation systems are now running!"
echo "💡 Use 'ps aux | grep node' to see all running processes"
echo "💡 Use 'tail -f automation/logs/*.log' to monitor logs"
echo "💡 Use './automation/stop-all-automations.sh' to stop all systems"
