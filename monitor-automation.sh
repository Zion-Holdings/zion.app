#!/bin/bash

# Zion App Automation Monitor Script
# This script monitors the health of automation systems

set -e

echo "📊 Monitoring Zion App Automation Systems..."
echo "==========================================="

# Change to project directory
cd "$(dirname "$0")"

# Function to check if automation is running
check_automation_status() {
    echo "🔍 Checking automation system status..."
    
    # Check if PID file exists
    if [ -f "automation/automation.pid" ]; then
        PID=$(cat automation/automation.pid)
        if ps -p $PID > /dev/null 2>&1; then
            echo "✅ Automation process is running (PID: $PID)"
        else
            echo "❌ Automation process is not running (PID: $PID)"
            return 1
        fi
    else
        echo "❌ No automation PID file found"
        return 1
    fi
    
    # Check dashboard health
    echo "🌐 Checking dashboard health..."
    if curl -s http://localhost:3001/health > /dev/null 2>&1; then
        echo "✅ Dashboard is responding"
        
        # Get detailed health info
        HEALTH_DATA=$(curl -s http://localhost:3001/health)
        echo "📊 Health Data:"
        echo "$HEALTH_DATA" | jq '.' 2>/dev/null || echo "$HEALTH_DATA"
    else
        echo "❌ Dashboard is not responding"
        return 1
    fi
    
    return 0
}

# Function to show system logs
show_logs() {
    echo ""
    echo "📋 Recent Logs:"
    echo "=============="
    
    if [ -f "automation/logs/combined.log" ]; then
        echo "Combined Logs (last 10 lines):"
        tail -10 automation/logs/combined.log
    fi
    
    if [ -f "automation/logs/error.log" ]; then
        echo ""
        echo "Error Logs (last 10 lines):"
        tail -10 automation/logs/error.log
    fi
}

# Function to show system resources
show_resources() {
    echo ""
    echo "💻 System Resources:"
    echo "==================="
    
    # Check disk usage
    echo "Disk Usage:"
    df -h . | head -2
    
    # Check memory usage
    echo ""
    echo "Memory Usage:"
    free -h 2>/dev/null || echo "Memory info not available"
    
    # Check if automation process is using resources
    if [ -f "automation/automation.pid" ]; then
        PID=$(cat automation/automation.pid)
        if ps -p $PID > /dev/null 2>&1; then
            echo ""
            echo "Automation Process Resources:"
            ps -p $PID -o pid,ppid,cmd,%cpu,%mem,etime
        fi
    fi
}

# Function to restart automation
restart_automation() {
    echo "🔄 Restarting automation systems..."
    
    # Stop current automation
    if [ -f "automation/automation.pid" ]; then
        PID=$(cat automation/automation.pid)
        if ps -p $PID > /dev/null 2>&1; then
            echo "Stopping automation process (PID: $PID)..."
            kill $PID
            sleep 2
        fi
    fi
    
    # Start automation
    echo "Starting automation systems..."
    ./start-automation.sh
    
    # Wait a moment and check status
    sleep 5
    check_automation_status
}

# Main monitoring logic
case "${1:-status}" in
    "status")
        check_automation_status
        if [ $? -eq 0 ]; then
            show_logs
            show_resources
        fi
        ;;
    "logs")
        show_logs
        ;;
    "resources")
        show_resources
        ;;
    "restart")
        restart_automation
        ;;
    "health")
        if curl -s http://localhost:3001/health > /dev/null 2>&1; then
            curl -s http://localhost:3001/health | jq '.' 2>/dev/null || curl -s http://localhost:3001/health
        else
            echo "❌ Health endpoint not responding"
            exit 1
        fi
        ;;
    *)
        echo "Usage: $0 {status|logs|resources|restart|health}"
        echo ""
        echo "Commands:"
        echo "  status   - Show overall system status (default)"
        echo "  logs     - Show recent logs"
        echo "  resources - Show system resource usage"
        echo "  restart  - Restart automation systems"
        echo "  health   - Show detailed health data"
        exit 1
        ;;
esac 