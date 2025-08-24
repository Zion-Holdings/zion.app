#!/bin/bash

# Cursor Multi-Computer Communication Startup Script

echo "🚀 Starting Cursor Multi-Computer Communication..."

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

# Navigate to project directory
cd "$(dirname "$0")/.."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the communication system
echo "🔌 Starting Cursor communication system..."
npm run cursor:start

echo "✅ Cursor Multi-Computer Communication started successfully!"
echo "📊 Status: http://localhost:3002/status"
echo "💬 Chat: npm run cursor:chat <category> <prompt>"
echo "🔧 Fix: npm run cursor:fix <type>"
