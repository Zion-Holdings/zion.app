#!/bin/bash

# Start Project Development Automation System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "🚀 Starting Project Development Automation System..."

# Start the factory
cd "$SCRIPT_DIR"
node project-development-autonomous-factory.js &

# Start the cron job
./cron-jobs/project-development-automation-cron.sh start

echo "✅ Project Development Automation System started successfully!"
echo "📊 Check logs at: $SCRIPT_DIR/project-development-logs/"
echo "📈 Check reports at: $SCRIPT_DIR/project-development-reports/"
