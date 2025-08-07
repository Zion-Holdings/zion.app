#!/bin/bash

# Lint Automation Startup Script
echo "🚀 Starting Lint Automation System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Create automation directory if it doesn't exist
mkdir -p automation
mkdir -p automation/logs

# Make automation scripts executable
chmod +x automation/lint-error-fixer.js
chmod +x automation/lint-monitor.js
chmod +x automation/lint-automation-manager.js

# Install basic dependencies if needed
echo "📦 Checking basic dependencies..."
npm install --save-dev eslint@^7.23.0 eslint-config-next@^11.1.4 chokidar@^4.0.3 --legacy-peer-deps --force

# Start the lint automation manager
echo "🔄 Starting lint automation manager..."
node automation/lint-automation-manager.js start

echo "✅ Lint automation system started successfully!"
echo "📊 The system will continuously monitor and fix lint errors."
echo "🛑 Press Ctrl+C to stop the automation."
