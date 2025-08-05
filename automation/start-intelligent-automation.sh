#!/bin/bash

# Intelligent Automation System Startup Script
# This script launches the enhanced automation system with anti-repetition and evolution capabilities

echo "🚀 Starting Intelligent Automation System..."

# Set up environment
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Create necessary directories
mkdir -p logs
mkdir -p intelligent-launcher
mkdir -p anti-repetition-engine
mkdir -p evolution-tracker
mkdir -p diversification-strategies
mkdir -p growth-analytics

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to run the intelligent automation system."
    exit 1
fi

# Check if required files exist
REQUIRED_FILES=(
    "launch-intelligent-automation.js"
    "enhanced-automation-orchestrator.js"
    "anti-repetition-engine.js"
    "intelligent-evolution-tracker.js"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Required file not found: $file"
        exit 1
    fi
done

# Create PID file
PID_FILE="intelligent-automation.pid"

# Check if system is already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️ Intelligent Automation System is already running (PID: $PID)"
        echo "   To stop the system, run: ./stop-intelligent-automation.sh"
        exit 1
    else
        echo "🧹 Cleaning up stale PID file..."
        rm -f "$PID_FILE"
    fi
fi

# Start the intelligent automation system
echo "🔧 Launching Intelligent Automation System..."
node launch-intelligent-automation.js > logs/intelligent-automation.log 2>&1 &
PID=$!

# Save PID
echo $PID > "$PID_FILE"

# Wait a moment to check if the process started successfully
sleep 2

if ps -p "$PID" > /dev/null 2>&1; then
    echo "✅ Intelligent Automation System started successfully!"
    echo "   PID: $PID"
    echo "   Log file: logs/intelligent-automation.log"
    echo "   To stop the system, run: ./stop-intelligent-automation.sh"
    echo ""
    echo "🔍 System Components:"
    echo "   - Enhanced Automation Orchestrator"
    echo "   - Anti-Repetition Engine"
    echo "   - Intelligent Evolution Tracker"
    echo ""
    echo "📊 Monitoring:"
    echo "   - Health monitoring every 2 minutes"
    echo "   - System reports every 10 minutes"
    echo "   - Optimization checks every 5 minutes"
    echo ""
    echo "🎯 Features:"
    echo "   - Intelligent content diversification"
    echo "   - Anti-repetition mechanisms"
    echo "   - Evolution tracking and acceleration"
    echo "   - Growth analytics and optimization"
else
    echo "❌ Failed to start Intelligent Automation System"
    echo "   Check logs/intelligent-automation.log for details"
    rm -f "$PID_FILE"
    exit 1
fi

# Function to handle cleanup on script exit
cleanup() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo "🛑 Stopping Intelligent Automation System..."
            kill "$PID"
            rm -f "$PID_FILE"
        fi
    fi
}

# Set up signal handlers
trap cleanup EXIT INT TERM

# Keep script running to maintain the process
echo "🔄 System is running. Press Ctrl+C to stop."
while true; do
    if [ ! -f "$PID_FILE" ]; then
        echo "⚠️ PID file not found, system may have stopped"
        break
    fi
    
    PID=$(cat "$PID_FILE")
    if ! ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️ Process not found, system may have stopped"
        break
    fi
    
    sleep 10
done 