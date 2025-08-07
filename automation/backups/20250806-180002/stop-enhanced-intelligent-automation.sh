#!/bin/bash

# Enhanced Intelligent Automation System Stop Script

echo "🛑 Stopping Enhanced Intelligent Automation System..."

PID_FILE="enhanced-intelligent-automation.pid"

if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "🔄 Stopping process (PID: $PID)..."
        kill "$PID"
        
        # Wait for process to stop
        sleep 2
        
        if ps -p "$PID" > /dev/null 2>&1; then
            echo "⚠️ Process still running, force stopping..."
            kill -9 "$PID"
        fi
        
        rm -f "$PID_FILE"
        echo "✅ Enhanced Intelligent Automation System stopped successfully!"
    else
        echo "⚠️ Process not found, cleaning up PID file..."
        rm -f "$PID_FILE"
    fi
else
    echo "⚠️ PID file not found, system may not be running"
fi 