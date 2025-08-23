#!/bin/bash

echo "🛑 Stopping Zion App Automation Systems..."

# Kill automation processes
pkill -f "cursor-chat-automation.js"
pkill -f "automation/index.js"
pkill -f "automation/continuous-improvement/start.js"
pkill -f "scripts/watchdog.js"

echo "✅ All automation systems stopped!"
