#!/bin/bash

# Cursor Intelligence System Startup Script
# This script starts the entire autonomous intelligence system

set -e

echo "🚀 Starting Cursor Intelligence System..."

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "📁 Project directory: $PROJECT_DIR"

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p automation/logs
mkdir -p automation/cursor-conversations/active
mkdir -p automation/cursor-conversations/completed
mkdir -p automation/cursor-conversations/templates
mkdir -p automation/cursor-tasks
mkdir -p automation/cursor-agents
mkdir -p automation/cursor-knowledge

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "⚠️  PM2 not found. Installing PM2..."
    npm install -g pm2
fi

# Check if the system is already running
if pm2 list | grep -q "cursor-intelligence"; then
    echo "🔄 Stopping existing processes..."
    pm2 stop cursor-intelligence-runner cursor-intelligence-monitor 2>/dev/null || true
    pm2 delete cursor-intelligence-runner cursor-intelligence-monitor 2>/dev/null || true
fi

# Start the continuous runner
echo "🧠 Starting Cursor Intelligence Continuous Runner..."
pm2 start automation/ecosystem.config.js

# Wait a moment for processes to start
sleep 3

# Check if processes are running
if pm2 list | grep -q "cursor-intelligence-runner"; then
    echo "✅ Continuous runner started successfully"
else
    echo "❌ Failed to start continuous runner"
    exit 1
fi

if pm2 list | grep -q "cursor-intelligence-monitor"; then
    echo "✅ Monitor started successfully"
else
    echo "❌ Failed to start monitor"
    exit 1
fi

# Save PM2 configuration
pm2 save

# Show status
echo ""
echo "📊 System Status:"
echo "=================="
pm2 list | grep cursor-intelligence

echo ""
echo "🌐 Monitor Dashboard: http://localhost:3001"
echo "🔌 API Endpoint: http://localhost:3001/api/status"
echo "📝 PM2 Logs: pm2 logs cursor-intelligence-runner"
echo "📊 PM2 Monitor: pm2 monit"

echo ""
echo "🎯 The Cursor Intelligence System is now running autonomously!"
echo "   It will:"
echo "   • Generate conversations every 5 minutes"
echo "   • Run intelligence amplification cycles"
echo "   • Synthesize knowledge from patterns"
echo "   • Monitor system health continuously"
echo "   • Automatically recover from failures"
echo ""
echo "🔄 To stop the system: pm2 stop cursor-intelligence-runner cursor-intelligence-monitor"
echo "🔄 To restart: pm2 restart cursor-intelligence-runner cursor-intelligence-monitor"
echo "🔄 To view logs: pm2 logs cursor-intelligence-runner"
echo "🔄 To monitor: pm2 monit"

# Keep the script running to show logs
echo ""
echo "📝 Showing real-time logs (Press Ctrl+C to exit but keep system running)..."
echo ""

# Show logs for a few seconds then exit
timeout 10 pm2 logs cursor-intelligence-runner --lines 20 || true

echo ""
echo "✅ Startup complete! The system is running in the background."
echo "   Use the monitor dashboard at http://localhost:3001 to control the system."
