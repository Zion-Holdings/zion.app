#!/bin/bash

echo "🚀 Starting Minimal PM2 GitHub Actions Redundancy System..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Check if ecosystem file exists
if [ ! -f "ecosystem.minimal.cjs" ]; then
    echo "❌ Minimal ecosystem file not found!"
    exit 1
fi

# Stop any existing PM2 processes
echo "🛑 Stopping existing PM2 processes..."
pm2 stop all 2>/dev/null || true
pm2 delete all 2>/dev/null || true

# Start the minimal redundancy ecosystem
echo "🚀 Starting minimal PM2 redundancy ecosystem..."
pm2 start ecosystem.minimal.cjs

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Show status
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Minimal PM2 GitHub Actions Redundancy System started successfully!"
echo "📋 Commands:"
echo "  - View logs: pm2 logs"
echo "  - Monitor: pm2 monit"
echo "  - Stop all: pm2 stop all"
echo "  - Restart all: pm2 restart all"
echo "  - Delete all: pm2 delete all"
echo ""
echo "🌐 Both GitHub Actions and PM2 are now running simultaneously for redundancy!"
echo "🔧 This is a minimal setup with 5 key processes. Use ecosystem.github-actions-redundancy.cjs for full 92 processes."
