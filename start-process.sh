#!/bin/bash

# Starter Script for Comprehensive Merge and Build Process
echo "🚀 Starting Comprehensive Merge and Build Process Setup"
echo "⏰ Started at: $(date)"
echo "---"

# Make all scripts executable
echo "🔧 Making scripts executable..."
chmod +x comprehensive-merge-and-build.sh
chmod +x improve-codebase.sh
chmod +x smart-merge-prs.sh
chmod +x continue-merge-process.sh
chmod +x resolve-merge-conflicts.sh

echo "✅ All scripts are now executable"

# Check prerequisites
echo "🔍 Checking prerequisites..."
echo ""

# Check if jq is installed
if command -v jq > /dev/null 2>&1; then
    echo "✅ jq is installed"
else
    echo "⚠️  jq is not installed. Installing..."
    if command -v apt-get > /dev/null 2>&1; then
        sudo apt-get update && sudo apt-get install -y jq
    elif command -v yum > /dev/null 2>&1; then
        sudo yum install -y jq
    elif command -v brew > /dev/null 2>&1; then
        brew install jq
    else
        echo "❌ Could not install jq automatically. Please install it manually."
        echo "   Visit: https://stedolan.github.io/jq/download/"
    fi
fi

# Check if Node.js is installed
if command -v node > /dev/null 2>&1; then
    echo "✅ Node.js is installed: $(node --version)"
else
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is available
if command -v npm > /dev/null 2>&1; then
    echo "✅ npm is available: $(npm --version)"
else
    echo "❌ npm is not available. Please install npm first."
    exit 1
fi

# Check Git status
echo ""
echo "🔍 Checking Git repository status..."
if git status > /dev/null 2>&1; then
    echo "✅ Git repository is accessible"
    echo "📍 Current branch: $(git branch --show-current)"
    echo "📍 Remote origin: $(git remote get-url origin)"
else
    echo "❌ Git repository is not accessible"
    exit 1
fi

echo ""
echo "🎯 Ready to start the process!"
echo ""
echo "📋 Available options:"
echo "1. 🚀 Run comprehensive process (recommended): ./comprehensive-merge-and-build.sh"
echo "2. 🔄 Run smart merge only: ./smart-merge-prs.sh"
echo "3. 🔧 Run improvements only: ./improve-codebase.sh"
echo "4. 🏥 Run health check: ./health-check.sh"
echo ""
echo "📖 For detailed instructions, see: EXECUTION_GUIDE.md"
echo ""
echo "🚀 To start the full process, run:"
echo "   ./comprehensive-merge-and-build.sh"
echo ""
echo "⏰ Setup completed at: $(date)"