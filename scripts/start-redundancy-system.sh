#!/bin/bash

# Redundancy System Startup Script
# This script starts the complete PM2 redundancy system

set -e

echo "🚀 Starting Zion Tech Group Redundancy System..."

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
if [ ! -f "ecosystem.redundancy.cjs" ]; then
    print_error "ecosystem.redundancy.cjs not found. Please run this script from the project root."
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_error "PM2 is not installed. Please install PM2 first: npm install -g pm2"
    exit 1
fi

# Create logs directory
print_status "Creating logs directory..."
mkdir -p automation/logs

# Stop any existing PM2 processes
print_status "Stopping existing PM2 processes..."
pm2 stop ecosystem.redundancy.cjs 2>/dev/null || true
pm2 delete ecosystem.redundancy.cjs 2>/dev/null || true

# Start the redundancy system
print_status "Starting redundancy system with PM2..."
pm2 start ecosystem.redundancy.cjs --update-env

# Wait a moment for processes to start
sleep 3

# Check status
print_status "Checking PM2 status..."
pm2 status

# Show logs
print_status "Recent logs from redundancy processes:"
pm2 logs --lines 20

print_success "Redundancy system started successfully!"
print_status "Use 'pm2 status' to check process status"
print_status "Use 'pm2 logs' to view logs"
print_status "Use 'pm2 stop ecosystem.redundancy.cjs' to stop the system"

# Show running processes
echo ""
print_status "Running redundancy processes:"
pm2 list | grep -E "(redundancy|zion-auto-sync)" || print_warning "No redundancy processes found"

echo ""
print_success "🎉 Redundancy system is now running!"
print_status "The system will automatically:"
print_status "  - Provide backup for GitHub Actions workflows"
print_status "  - Monitor and maintain Netlify functions"
print_status "  - Ensure build automation continues"
print_status "  - Generate content and security reports"
print_status "  - Monitor overall system health"
print_status "  - Manage failover between systems"