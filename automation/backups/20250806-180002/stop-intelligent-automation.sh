#!/bin/bash

# Intelligent Automation System Stop Script
# This script gracefully stops the intelligent automation system

echo "🛑 Stopping Intelligent Automation System..."

# Set up environment
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

PID_FILE="intelligent-automation.pid"

# Check if PID file exists
if [ ! -f "$PID_FILE" ]; then
    echo "⚠️ PID file not found. System may not be running."
    exit 1
fi

# Read PID from file
PID=$(cat "$PID_FILE")

# Check if process is running
if ! ps -p "$PID" > /dev/null 2>&1; then
    echo "⚠️ Process not found. System may have already stopped."
    rm -f "$PID_FILE"
    exit 1
fi

echo "🔧 Stopping process (PID: $PID)..."

# Send SIGTERM signal for graceful shutdown
kill -TERM "$PID"

# Wait for graceful shutdown (up to 30 seconds)
echo "⏳ Waiting for graceful shutdown..."
for i in {1..30}; do
    if ! ps -p "$PID" > /dev/null 2>&1; then
        echo "✅ Intelligent Automation System stopped gracefully"
        rm -f "$PID_FILE"
        exit 0
    fi
    sleep 1
done

# If graceful shutdown failed, force kill
echo "⚠️ Graceful shutdown failed, forcing termination..."
kill -KILL "$PID"

# Wait a moment for force kill
sleep 2

if ! ps -p "$PID" > /dev/null 2>&1; then
    echo "✅ Intelligent Automation System stopped (forced)"
    rm -f "$PID_FILE"
else
    echo "❌ Failed to stop Intelligent Automation System"
    exit 1
fi 