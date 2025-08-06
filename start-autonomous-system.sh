#!/bin/bash

# Enhanced Autonomous System Startup Script
# Zion Tech Group

echo "🚀 Starting Enhanced Autonomous System..."
echo "=========================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ package.json not found. Please run this script from the project root directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p automation/logs
mkdir -p automation/status
mkdir -p automation/backups

# Check system status
echo "🔍 Checking system status..."
npm run autonomous:status -- --mock

# Start the autonomous system
echo "🤖 Starting autonomous system..."
echo "   - Admin Dashboard: http://localhost:3000/admin-dashboard"
echo "   - Login: kleber@ziontechgroup.com"
echo "   - Password: Tw2.R5u&2!sDfeW"
echo ""
echo "📊 To check system status: npm run autonomous:status"
echo "🛑 To stop the system: Ctrl+C"
echo ""

# Start the autonomous system
npm run autonomous 