#!/bin/bash

# Simple Continuous Development Startup Script
# This script starts the simple continuous development system

set -e

echo "🚀 Starting Simple Continuous Development System"
echo "📅 Started at: $(date)"
echo "🖥️  Host: $(hostname)"
echo "📁 Directory: $(pwd)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the project root."
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed or not in PATH"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is not installed or not in PATH"
    exit 1
fi

# Check if git is available
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed or not in PATH"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create logs directory if it doesn't exist
mkdir -p logs

# Function to handle graceful shutdown
cleanup() {
    echo ""
    echo "🛑 Received shutdown signal, cleaning up..."
    
    if [ ! -z "$CONTINUOUS_PID" ]; then
        echo "🛑 Stopping continuous development process (PID: $CONTINUOUS_PID)"
        kill -TERM $CONTINUOUS_PID 2>/dev/null || true
        
        # Wait for process to terminate
        for i in {1..10}; do
            if ! kill -0 $CONTINUOUS_PID 2>/dev/null; then
                break
            fi
            sleep 1
        done
        
        # Force kill if still running
        if kill -0 $CONTINUOUS_PID 2>/dev/null; then
            echo "🛑 Force killing process"
            kill -KILL $CONTINUOUS_PID 2>/dev/null || true
        fi
    fi
    
    echo "✅ Cleanup complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start the simple continuous development system
echo "🚀 Starting simple continuous development system..."

node scripts/simple-continuous-dev.cjs > logs/simple-continuous-dev.log 2>&1 &
CONTINUOUS_PID=$!

echo "📝 Simple continuous development process started with PID: $CONTINUOUS_PID"
echo "📋 Logs are being written to: logs/simple-continuous-dev.log"

# Wait a moment for the process to start
sleep 5

# Check if the process is still running
if kill -0 $CONTINUOUS_PID 2>/dev/null; then
    echo "✅ Simple continuous development system is running"
    echo "👀 Monitoring logs..."
    
    # Monitor the logs
    tail -f logs/simple-continuous-dev.log
else
    echo "❌ Simple continuous development system failed to start"
    exit 1
fi 