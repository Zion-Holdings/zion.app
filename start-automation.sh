#!/bin/bash

echo "🤖 Starting Zion App Automation Systems..."

# Create log directories
mkdir -p logs automation/logs scripts/logs

# Start Cursor Chat Automation
echo "📱 Starting Cursor Chat Automation..."
node scripts/cursor-chat-automation.js start &

# Start Main Automation System
echo "⚙️ Starting Main Automation System..."
node automation/index.js &

# Start Continuous Improvement
echo "🔄 Starting Continuous Improvement..."
node automation/continuous-improvement/start.js &

# Start Watchdog
echo "🐕 Starting Watchdog..."
node scripts/watchdog.js &

echo "✅ All automation systems started!"
echo "📊 Monitor logs in the logs/ directory"
echo "🔗 Dashboard: http://localhost:3001/dashboard"
