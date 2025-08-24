#!/bin/bash

# Zion App Automation Starter Script
# This script starts all working automation systems

set -e

echo "🚀 Starting Zion App Automation Systems..."
echo "=========================================="

# Change to project directory
cd "$(dirname "$0")"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Check if npm dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create logs directory if it doesn't exist
mkdir -p automation/logs
mkdir -p automation/data

# Start the working automation systems
echo "🤖 Starting automation systems..."
node automation/start-working-automations.js &

# Store the PID
echo $! > automation/automation.pid

echo "✅ Automation systems started successfully!"
echo "📊 Dashboard: http://localhost:3001"
echo "📋 Health check: http://localhost:3001/health"
echo "🛑 To stop: kill \$(cat automation/automation.pid)"
