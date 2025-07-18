#!/bin/bash

# Zion App Self-Healing System Startup Script
# Starts all monitoring and healing systems

set -e

echo "🚀 Starting Zion App Self-Healing System..."

# Ensure we're in the project root
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Create logs directory if it doesn't exist
mkdir -p logs

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

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Install chokidar if not present (for file watching)
if ! npm list chokidar &> /dev/null; then
    echo "📦 Installing chokidar for file watching..."
    npm install chokidar
fi

# Function to handle cleanup on exit
cleanup() {
    echo "🛑 Shutting down monitoring systems..."
    kill $HEALTH_PID $BUILD_PID $SELF_HEAL_PID 2>/dev/null || true
    exit 0
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

echo "🔍 Starting health monitor..."
node scripts/health-monitor.cjs &
HEALTH_PID=$!

echo "🔧 Starting build monitor..."
node scripts/build-monitor.cjs &
BUILD_PID=$!

echo "🩹 Starting self-healing system..."
node scripts/self-healing.cjs &
SELF_HEAL_PID=$!

echo "✅ All monitoring systems started successfully!"
echo "📊 Health Monitor PID: $HEALTH_PID"
echo "🔨 Build Monitor PID: $BUILD_PID"
echo "🩹 Self-Healing PID: $SELF_HEAL_PID"
echo ""
echo "Press Ctrl+C to stop all systems"

# Wait for all background processes
wait 