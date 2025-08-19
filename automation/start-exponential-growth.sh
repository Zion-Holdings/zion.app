#!/bin/bash

# 🚀 Exponential Development Growth Automation Startup Script
# This script starts the autonomous development agent system

set -e

echo "🚀 Starting Exponential Development Growth Automation System..."
echo "================================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node --version)"
    echo "   Please upgrade Node.js to continue."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if we're in the right directory
if [ ! -f "exponential-growth-automation.cjs" ]; then
    echo "❌ Please run this script from the automation directory"
    echo "   cd automation && ./start-exponential-growth.sh"
    exit 1
fi

# Install dependencies if package.json exists
if [ -f "package.json" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p agents capabilities reports config

# Check if agents already exist
AGENT_COUNT=$(find agents -name "*.json" 2>/dev/null | wc -l)
if [ "$AGENT_COUNT" -gt 0 ]; then
    echo "🤖 Found $AGENT_COUNT existing agents"
else
    echo "🤖 No existing agents found - will start fresh"
fi

echo ""
echo "🚀 Starting Exponential Growth Automation..."
echo "   Press Ctrl+C to stop the system"
echo ""

# Start the exponential growth automation
node exponential-growth-automation.cjs start
