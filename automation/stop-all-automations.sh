#!/bin/bash

# Comprehensive Automation Stop Script
# This script stops all automation systems

echo "🛑 Stopping Comprehensive Automation System..."

# Function to stop a system
stop_system() {
    local system_name=$1
    local pid_file="automation/pids/${system_name}.pid"
    
    if [ -f "$pid_file" ]; then
        local pid=$(cat "$pid_file")
        echo "🛑 Stopping $system_name (PID: $pid)..."
        
        if ps -p $pid > /dev/null 2>&1; then
            # Try graceful shutdown first
            kill -TERM $pid
            
            # Wait a bit for graceful shutdown
            sleep 3
            
            # Check if still running
            if ps -p $pid > /dev/null 2>&1; then
                echo "⚠️  Force killing $system_name..."
                kill -KILL $pid
            fi
            
            echo "✅ $system_name stopped"
        else
            echo "⚠️  $system_name was not running"
        fi
        
        # Remove PID file
        rm -f "$pid_file"
    else
        echo "⚠️  No PID file found for $system_name"
    fi
}

# Stop all systems
stop_system "comprehensive-launcher"
stop_system "autonomous-system"
stop_system "ultimate-automation-launcher"
stop_system "automation-monitor"
stop_system "master-orchestrator"
stop_system "content-generator"
stop_system "performance-monitor"
stop_system "link-checker"
stop_system "monetization-system"
stop_system "intelligent-system"
stop_system "enhanced-system"

# Kill any remaining node processes related to automation
echo "🧹 Cleaning up any remaining automation processes..."
pkill -f "automation/.*\.js" || true

# Wait a moment and check for any remaining processes
sleep 2
remaining_processes=$(ps aux | grep -E "automation/.*\.js" | grep -v grep | wc -l)

if [ $remaining_processes -eq 0 ]; then
    echo "✅ All automation systems stopped successfully!"
else
    echo "⚠️  $remaining_processes automation processes still running"
    ps aux | grep -E "automation/.*\.js" | grep -v grep
fi

echo ""
echo "📊 Cleanup completed!"
echo "💡 All automation systems have been stopped"
