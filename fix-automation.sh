#!/bin/bash

# Zion App Automation Fix Script
# This script fixes common automation system issues

set -e

echo "🔧 Fixing Zion App Automation Systems..."
echo "======================================="

# Change to project directory
cd "$(dirname "$0")"

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    exit 1
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p automation/logs
mkdir -p automation/data
mkdir -p logs

# Fix npm dependencies
echo "📦 Checking and fixing dependencies..."
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
else
    echo "Dependencies already installed"
fi

# Check for missing packages
echo "🔍 Checking for missing packages..."
if ! node -e "require('async')" 2>/dev/null; then
    echo "Installing missing async package..."
    npm install async --save
fi

# Fix common syntax errors
echo "🔧 Fixing common syntax errors..."

# Fix package.json if corrupted
if [ -f "automation/continuous-improvement/package.json" ]; then
    echo "Checking continuous-improvement package.json..."
    if ! node -e "JSON.parse(require('fs').readFileSync('automation/continuous-improvement/package.json', 'utf8'))" 2>/dev/null; then
        echo "Fixing corrupted package.json..."
        cat > automation/continuous-improvement/package.json << 'EOF'
{
  "name": "zion-continuous-improvement",
  "version": "1.0.0",
  "description": "Automatic continuous improvement system for Zion App",
  "main": "index.js",
  "scripts": {
    "start": "node start.js",
    "dev": "nodemon start.js",
    "test": "jest --passWithNoTests",
    "test-system": "node test-system.js",
    "lint": "eslint .",
    "monitor": "node monitor.js",
    "improve": "node improve.js",
    "status": "./scripts/status.sh"
  },
  "dependencies": {
    "axios": "^1.6.0",
    "chalk": "^4.1.2",
    "commander": "^11.1.0",
    "cron": "^3.1.6",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "lighthouse": "^11.4.0",
    "node-cron": "^3.0.3",
    "simple-git": "^3.20.0",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "eslint": "^8.54.0",
    "jest": "^29.7.0",
    "nodemon": "^3.0.1"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": [
    "automation",
    "continuous-improvement",
    "monitoring",
    "ai",
    "cursor"
  ],
  "author": "Zion App Team",
  "license": "MIT"
}
EOF
    fi
fi

# Run tests to check if fixes worked
echo "🧪 Running tests to verify fixes..."
if node automation/test-all-automations.js > /dev/null 2>&1; then
    echo "✅ Tests passed after fixes!"
else
    echo "⚠️  Some issues may still exist. Check the test output above."
fi

echo ""
echo "🔧 Fix process completed!"
echo "📊 Run './test-automation.sh' to verify all systems are working"
echo "🚀 Run './start-automation.sh' to start the automation systems" 