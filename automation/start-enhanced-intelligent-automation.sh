#!/bin/bash

# Enhanced Intelligent Automation System Startup Script
# This script launches the enhanced intelligent automation system with AI integration, learning capabilities, and intelligent diversification

echo "🚀 Starting Enhanced Intelligent Automation System..."

# Set up environment
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Create necessary directories
mkdir -p enhanced-system
mkdir -p ai-engine
mkdir -p learning-system
mkdir -p content-generator
mkdir -p diversification-engine
mkdir -p evolution-tracker
mkdir -p performance-monitor
mkdir -p logs

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js to run the enhanced intelligent automation system."
    exit 1
fi

# Check if required files exist
REQUIRED_FILES=(
    "enhanced-intelligent-automation-system.js"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Required file not found: $file"
        exit 1
    fi
done

# Create PID file
PID_FILE="enhanced-intelligent-automation.pid"

# Check if system is already running
if [ -f "$PID_FILE" ]; then
    PID=$(cat "$PID_FILE")
    if ps -p "$PID" > /dev/null 2>&1; then
        echo "⚠️ Enhanced Intelligent Automation System is already running (PID: $PID)"
        echo "   To stop the system, run: ./stop-enhanced-intelligent-automation.sh"
        exit 1
    else
        echo "🧹 Cleaning up stale PID file..."
        rm -f "$PID_FILE"
    fi
fi

# Start the enhanced intelligent automation system
echo "🔧 Launching Enhanced Intelligent Automation System..."
node enhanced-intelligent-automation-system.js > logs/enhanced-intelligent-automation.log 2>&1 &
PID=$!

# Save PID
echo $PID > "$PID_FILE"

# Wait a moment to check if the process started successfully
sleep 3

if ps -p "$PID" > /dev/null 2>&1; then
    echo "✅ Enhanced Intelligent Automation System started successfully!"
    echo "   PID: $PID"
    echo "   Log file: logs/enhanced-intelligent-automation.log"
    echo "   To stop the system, run: ./stop-enhanced-intelligent-automation.sh"
    echo ""
    echo "🔍 System Components:"
    echo "   - AI Engine with Learning Capabilities"
    echo "   - Intelligent Content Generator"
    echo "   - Diversification Engine"
    echo "   - Evolution Tracker"
    echo "   - Performance Monitor"
    echo ""
    echo "📊 Monitoring:"
    echo "   - Health monitoring every 30 seconds"
    echo "   - System reports every 5 minutes"
    echo "   - Optimization checks every 10 minutes"
    echo ""
    echo "🎯 Enhanced Features:"
    echo "   - AI-powered content generation"
    echo "   - Machine learning and pattern recognition"
    echo "   - Intelligent diversification strategies"
    echo "   - Evolution tracking and acceleration"
    echo "   - Performance optimization and analytics"
else
    echo "❌ Failed to start Enhanced Intelligent Automation System"
    echo "   Check logs/enhanced-intelligent-automation.log for details"
    rm -f "$PID_FILE"
    exit 1
fi

# Function to handle cleanup on script exit
cleanup() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if ps -p "$PID" > /dev/null 2>&1; then
            echo "🛑 Stopping Enhanced Intelligent Automation System..."
            kill "$PID"
            rm -f "$PID_FILE"
        fi
    fi
}

# Set up signal handlers
trap cleanup EXIT INT TERM

# Keep script running to maintain the process
echo "🔄 Enhanced Intelligent Automation System is running. Press Ctrl+C to stop."
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