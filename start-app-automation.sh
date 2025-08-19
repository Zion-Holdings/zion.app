#!/bin/bash

# App Automation System Startup Script
# This script provides an easy way to run the complete automation system

set -e

echo "🚀 Starting App Automation System..."
echo "=================================="

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed or not in PATH"
    echo "Please install Node.js 20+ and try again"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version 20+ is required. Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) detected"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root."
    exit 1
fi

echo "✅ Project root detected"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "✅ Dependencies already installed"
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p automation/reports
mkdir -p automation/agents
mkdir -p automation/templates
mkdir -p .github/workflows

echo "🎯 Choose an option:"
echo "1. Run complete automation system (recommended)"
echo "2. Run content crawler only"
echo "3. Run agent factory only"
echo "4. Run content analysis and agent creation"
echo "5. Check system status"
echo "6. View latest report"
echo "7. Exit"

read -p "Enter your choice (1-7): " choice

case $choice in
    1)
        echo "🚀 Running complete automation system..."
        npm run app:full
        ;;
    2)
        echo "🔍 Running content crawler..."
        npm run app:crawl
        ;;
    3)
        echo "🏭 Running agent factory..."
        npm run app:agents
        ;;
    4)
        echo "📊 Running content analysis and agent creation..."
        npm run app:analyze
        ;;
    5)
        echo "📈 Checking system status..."
        npm run app:status
        ;;
    6)
        echo "📋 Viewing latest report..."
        npm run app:report
        ;;
    7)
        echo "👋 Exiting..."
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "🎉 Operation completed!"
echo ""
echo "📁 Generated files:"
echo "- Reports: automation/reports/"
echo "- Agents: automation/agents/"
echo "- Workflows: .github/workflows/"
echo ""
echo "📚 Next steps:"
echo "1. Review the generated reports"
echo "2. Customize agent configurations"
echo "3. Test the generated workflows"
echo "4. Integrate with your development process"
echo ""
echo "💡 For more information, see: automation/README.md"
