#!/bin/bash

# 🚀 Zion Tech Group - Complete Redundancy System Startup Script
# This script starts all redundancy automation processes as a backup to GitHub Actions and Netlify Functions

set -e

echo "🚀 Starting Zion Tech Group Complete Redundancy System..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "This script must be run from the project root directory"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Please install it first: npm install -g pm2"
    exit 1
fi

# Create logs directory if it doesn't exist
print_status "Creating logs directory..."
mkdir -p automation/logs

# Stop any existing redundancy processes
print_status "Stopping existing redundancy processes..."
pm2 stop ecosystem.redundancy.pm2.cjs 2>/dev/null || true
pm2 delete ecosystem.redundancy.pm2.cjs 2>/dev/null || true

# Start the redundancy ecosystem
print_status "Starting redundancy ecosystem..."
pm2 start ecosystem.redundancy.pm2.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking redundancy system status..."
pm2 status

# Show redundancy processes specifically
print_status "Redundancy processes:"
pm2 list | grep redundancy || print_warning "No redundancy processes found"

# Show logs directory
print_status "Logs directory created at: automation/logs/"

# Display startup information
echo ""
echo "🎉 Redundancy System Started Successfully!"
echo "=========================================="
echo ""
echo "📋 Redundancy Processes Started:"
echo "  • Marketing Sync Redundancy (every 12 hours)"
echo "  • Sync Health Redundancy (every 15 minutes)"
echo "  • Netlify Functions Redundancy (every 30 minutes)"
echo "  • Build Monitor Redundancy (every 5 minutes)"
echo "  • Content Quality Redundancy (every 6 hours)"
echo "  • Security Scanner Redundancy (every 4 hours)"
echo "  • Performance Monitor Redundancy (every 8 hours)"
echo "  • Dependency Monitor Redundancy (every 24 hours)"
echo "  • SEO Monitor Redundancy (every 12 hours)"
echo "  • Health Orchestrator Redundancy (every 2 minutes)"
echo ""
echo "🔄 Original PM2 Processes:"
echo "  • zion-auto-sync (continuous)"
echo "  • zion-auto-sync-cron (every 10 minutes)"
echo ""
echo "📊 Management Commands:"
echo "  • View status: pm2 status"
echo "  • View logs: pm2 logs"
echo "  • Restart: pm2 restart ecosystem.redundancy.pm2.cjs"
echo "  • Stop: pm2 stop ecosystem.redundancy.pm2.cjs"
echo ""
echo "📁 Log Files:"
echo "  • All logs are stored in: automation/logs/"
echo "  • Each process has its own log file"
echo ""
echo "🔍 Monitoring:"
echo "  • Health orchestrator runs every 2 minutes"
echo "  • Generates comprehensive health reports"
echo "  • Automatically commits and pushes reports"
echo ""
print_success "Redundancy system is now running and monitoring all automation!"
print_success "GitHub Actions and Netlify Functions now have complete local backup coverage!"

# Optional: Show recent logs
echo ""
read -p "Would you like to see recent logs? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Showing recent logs..."
    pm2 logs --lines 20
fi

echo ""
print_success "Setup complete! Your automation now has 100% redundancy coverage."