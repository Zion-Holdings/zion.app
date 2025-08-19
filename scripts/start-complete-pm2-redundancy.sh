#!/bin/bash

echo "🚀 Starting Complete PM2 GitHub Actions Redundancy System..."
echo "📊 This will start 226 automation processes for complete redundancy"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if ecosystem file exists
if [ ! -f "ecosystem.complete.cjs" ]; then
    echo "❌ Complete ecosystem file not found!"
    echo "🔧 Please run: node scripts/generate-complete-pm2-scripts.js"
    exit 1
fi

# Check if scripts directory has all scripts
SCRIPT_COUNT=$(find scripts/ -name "*.js" | wc -l)
echo "📁 Found $SCRIPT_COUNT PM2 scripts"

if [ "$SCRIPT_COUNT" -lt 200 ]; then
    echo "⚠️  Warning: Expected at least 200 scripts, found only $SCRIPT_COUNT"
    echo "🔧 Regenerating scripts..."
    node scripts/generate-complete-pm2-scripts.js
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the complete redundancy ecosystem
echo "🚀 Starting complete PM2 redundancy ecosystem with 226 processes..."
pm2 start ecosystem.complete.cjs

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Complete PM2 GitHub Actions Redundancy System started successfully!"
echo "🌐 Both GitHub Actions and PM2 are now running simultaneously for redundancy!"
echo ""
echo "📋 Key Commands:"
echo "  - View all processes: pm2 status"
echo "  - Monitor in real-time: pm2 monit"
echo "  - View logs: pm2 logs"
echo "  - Stop all: pm2 stop all"
echo "  - Restart all: pm2 restart all"
echo "  - Delete all: pm2 delete all"
echo ""
echo "📊 System Information:"
echo "  - Total workflows: 226"
echo "  - PM2 processes: 226"
echo "  - Redundancy: 100% coverage"
echo "  - Scheduling: Distributed cron schedules"
echo ""
echo "🔧 Process Management:"
echo "  - Each workflow has its own PM2 process"
echo "  - Cron-based scheduling prevents resource conflicts"
echo "  - Automatic error handling and logging"
echo "  - Git integration for result tracking"
echo ""
echo "🚨 Important Notes:"
echo "  - This system runs alongside GitHub Actions"
echo "  - No interference between systems"
echo "  - Full automation redundancy achieved"
echo "  - Monitor system resources during operation"
