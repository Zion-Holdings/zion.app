#!/bin/bash

# Uninstall Project Development Automation System

echo "🗑️ Uninstalling Project Development Automation System..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Stop the system
print_status "Stopping automation system..."
./stop-project-development-automation.sh

# Remove cron jobs
print_status "Removing cron jobs..."
crontab -l 2>/dev/null | grep -v "Project Development Automation System" | crontab -

# Remove directories (optional - uncomment if you want to remove all data)
# print_status "Removing directories..."
# rm -rf project-development-agents
# rm -rf project-development-reports
# rm -rf project-development-logs
# rm -rf project-development-data
# rm -rf project-development-status
# rm -rf project-development-pids
# rm -rf project-development-backups

# Remove scripts
print_status "Removing scripts..."
rm -f start-project-development-automation.sh
rm -f stop-project-development-automation.sh
rm -f status-project-development-automation.sh
rm -f uninstall-project-development-automation.sh
rm -f project-development-config.json
rm -f PROJECT_DEVELOPMENT_AUTOMATION_README.md

print_success "Project Development Automation System uninstalled successfully!"
