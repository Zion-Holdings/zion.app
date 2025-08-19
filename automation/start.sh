#!/bin/bash

echo "🚀 Starting Cursor Intelligence System..."

# Start the continuous runner in the background
echo "🧠 Starting continuous runner..."
node automation/cursor-intelligence-continuous-runner.cjs start &

# Start the monitor
echo "📊 Starting monitor..."
node automation/cursor-intelligence-monitor.cjs &

echo "✅ System started! Monitor at http://localhost:3001"
echo "🔄 Continuous runner is generating conversations every 5 minutes"
echo "🛑 Press Ctrl+C to stop all processes"

# Wait for all background processes
wait
