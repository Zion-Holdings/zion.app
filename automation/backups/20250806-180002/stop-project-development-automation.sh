#!/bin/bash

# Stop Project Development Automation System

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🛑 Stopping Project Development Automation System..."

# Stop the cron job
./cron-jobs/project-development-automation-cron.sh stop

# Kill any running Node.js processes for the factory
pkill -f "project-development-autonomous-factory.js" || true

echo "✅ Project Development Automation System stopped successfully!"
