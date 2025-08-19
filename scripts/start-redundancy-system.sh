#!/bin/bash

# Redundancy System Startup Script
# This script starts the complete redundancy automation system

set -e

echo "🚀 Starting Zion Tech Group Redundancy Automation System..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    local status=$1
    local message=$2
    case $status in
        "info") echo -e "${BLUE}ℹ️  $message${NC}" ;;
        "success") echo -e "${GREEN}✅ $message${NC}" ;;
        "warning") echo -e "${YELLOW}⚠️  $message${NC}" ;;
        "error") echo -e "${RED}❌ $message${NC}" ;;
    esac
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_status "error" "This script must be run from the project root directory"
    exit 1
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    print_status "error" "PM2 is not installed. Please install it first: npm install -g pm2"
    exit 1
fi

# Check if Node.js is available
if ! command -v node &> /dev/null; then
    print_status "error" "Node.js is not installed or not in PATH"
    exit 1
fi

print_status "info" "Checking system requirements..."

# Create necessary directories
print_status "info" "Creating log directories..."
mkdir -p automation/logs
mkdir -p automation/redundancy

# Check if redundancy ecosystem file exists
if [ ! -f "ecosystem.redundancy.pm2.cjs" ]; then
    print_status "error" "Redundancy ecosystem file not found: ecosystem.redundancy.pm2.cjs"
    exit 1
fi

# Check if redundancy scripts exist
print_status "info" "Verifying redundancy scripts..."
REDUNDANCY_SCRIPTS=(
    "automation/redundancy/marketing-sync-redundancy.js"
    "automation/redundancy/sync-health-redundancy.js"
    "automation/redundancy/netlify-functions-redundancy.js"
    "automation/redundancy/build-monitor-redundancy.js"
    "automation/redundancy/content-quality-redundancy.js"
    "automation/redundancy/security-scanner-redundancy.js"
    "automation/redundancy/performance-monitor-redundancy.js"
    "automation/redundancy/dependency-monitor-redundancy.js"
    "automation/redundancy/health-orchestrator-redundancy.js"
    "automation/redundancy-unified-orchestrator.js"
)

MISSING_SCRIPTS=()
for script in "${REDUNDANCY_SCRIPTS[@]}"; do
    if [ ! -f "$script" ]; then
        MISSING_SCRIPTS+=("$script")
    fi
done

if [ ${#MISSING_SCRIPTS[@]} -gt 0 ]; then
    print_status "warning" "Some redundancy scripts are missing:"
    for script in "${MISSING_SCRIPTS[@]}"; do
        echo "  - $script"
    done
    print_status "warning" "Continuing with available scripts..."
fi

# Stop any existing PM2 processes
print_status "info" "Stopping existing PM2 processes..."
pm2 stop ecosystem.redundancy.pm2.cjs 2>/dev/null || true
pm2 delete ecosystem.redundancy.pm2.cjs 2>/dev/null || true

# Start the redundancy system
print_status "info" "Starting PM2 redundancy system..."
pm2 start ecosystem.redundancy.pm2.cjs --update-env

if [ $? -eq 0 ]; then
    print_status "success" "PM2 redundancy system started successfully!"
else
    print_status "error" "Failed to start PM2 redundancy system"
    exit 1
fi

# Wait a moment for processes to start
print_status "info" "Waiting for processes to initialize..."
sleep 5

# Check status
print_status "info" "Checking redundancy system status..."
pm2 status

# Show redundancy processes specifically
print_status "info" "Redundancy processes status:"
pm2 status | grep redundancy || echo "No redundancy processes found"

# Run unified orchestrator test
print_status "info" "Running redundancy system test..."
node automation/redundancy-unified-orchestrator.js test

# Show helpful information
echo ""
echo "🎉 Redundancy System Started Successfully!"
echo "=================================================="
echo ""
echo "📋 Available Commands:"
echo "  pm2 status                                    - Check PM2 status"
echo "  pm2 logs                                      - View all logs"
echo "  pm2 logs redundancy-*                         - View redundancy logs"
echo "  node automation/redundancy-unified-orchestrator.js status  - Check redundancy status"
echo "  node automation/redundancy-unified-orchestrator.js report  - Generate report"
echo ""
echo "📁 Log Files:"
echo "  automation/logs/                              - PM2 log files"
echo "  *-redundancy-report.md                        - Individual redundancy reports"
echo "  unified-redundancy-report.md                  - Unified system report"
echo ""
echo "🔄 Redundancy Coverage:"
echo "  • PM2 Processes: 9 redundancy processes"
echo "  • GitHub Actions: 2 workflows backed up"
echo "  • Netlify Functions: 100+ functions orchestrated"
echo ""
echo "🚨 To stop the system:"
echo "  pm2 stop ecosystem.redundancy.pm2.cjs"
echo "  pm2 delete ecosystem.redundancy.pm2.cjs"
echo ""
echo "📚 For more information, see:"
echo "  - ecosystem.redundancy.pm2.cjs"
echo "  - automation/redundancy-unified-orchestrator.js"
echo ""

print_status "success" "Redundancy system is now running and monitoring all automation!"
print_status "info" "The system will automatically restart processes and provide redundancy for:"
echo "  • Marketing sync automation"
echo "  • Sync health monitoring"
echo "  • Build monitoring"
echo "  • Netlify functions orchestration"
echo "  • Content quality monitoring"
echo "  • Security scanning"
echo "  • Performance monitoring"
echo "  • Dependency monitoring"
echo "  • Health orchestration"
echo ""
print_status "info" "All processes are configured with automatic restart and cron scheduling for maximum reliability."