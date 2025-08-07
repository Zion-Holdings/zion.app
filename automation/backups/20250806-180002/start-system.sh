#!/bin/bash

# Autonomous Automation System Startup Script
# Zion Tech Group

echo "🚀 Starting Autonomous Automation System..."
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the automation directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
fi

# Check if required files exist
REQUIRED_FILES=(
    "start-autonomous-system.js"
    "responsive-content-agents-factory.js"
    "autonomous-automation-orchestrator.js"
    "evolved-content-generator.js"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Required file not found: $file"
        exit 1
    fi
done

echo "✅ All required files found"

# Create necessary directories
mkdir -p autonomous-system
mkdir -p responsive-agents
mkdir -p automation-scripts
mkdir -p cron-jobs
mkdir -p backups
mkdir -p evolution

echo "📁 Created necessary directories"

# Set environment variables if not already set
if [ -z "$GOOGLE_AI_API_KEY" ]; then
    echo "⚠️  GOOGLE_AI_API_KEY not set. Some AI features may be limited."
    echo "   Set it with: export GOOGLE_AI_API_KEY='your-api-key'"
fi

# Start the autonomous system
echo "🎯 Launching Autonomous Automation System..."
echo "=========================================="

# Run the system
node start-autonomous-system.js

# Handle exit
echo ""
echo "🛑 Autonomous Automation System stopped"
echo "======================================" 