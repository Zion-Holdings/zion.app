#!/bin/bash

# AI Service Factory Continuous Operation Startup Script
# This script ensures the system runs 24/7 with automatic restarts

echo "🚀 Starting AI Service Factory Continuous Operation..."
echo "⏰ Started at: $(date)"

# Set environment variables
export SERVICE_FACTORY_ENABLED=true
export AUTO_DEPLOYMENT_ENABLED=true
export QUALITY_THRESHOLD=80
export MAX_CONCURRENT_SERVICES=10
export CONTINUOUS_OPERATION=true
export NODE_ENV=production

# Function to start PM2 ecosystem
start_pm2_ecosystem() {
    echo "📊 Starting PM2 ecosystem..."
    cd /workspace
    pm2 start ecosystem.config.js
    pm2 save
    echo "✅ PM2 ecosystem started and saved"
}

# Function to check if PM2 is running
check_pm2_status() {
    if ! pm2 ping > /dev/null 2>&1; then
        echo "⚠️  PM2 is not running, restarting..."
        start_pm2_ecosystem
    fi
}

# Function to run continuous automation cycle
run_automation_cycle() {
    echo "🤖 Running automation cycle at $(date)..."
    
    cd /workspace
    
    # Run the ultimate service factory
    echo "🚀 Running service factory pipeline..."
    npm run ultimate:run || echo "⚠️  Service factory pipeline failed, continuing..."
    
    # Update service catalog
    echo "📚 Updating service catalog..."
    npm run catalog:update || echo "⚠️  Catalog update failed, continuing..."
    
    # Run performance optimization
    echo "⚡ Running performance optimization..."
    npm run performance:optimize || echo "⚠️  Performance optimization failed, continuing..."
    
    # Run integration testing
    echo "🧪 Running integration tests..."
    npm run integration:test || echo "⚠️  Integration testing failed, continuing..."
    
    # Generate dashboard
    echo "📊 Generating dashboard..."
    npm run dashboard:generate || echo "⚠️  Dashboard generation failed, continuing..."
    
    # Check system health
    echo "🏥 Checking system health..."
    npm run ultimate:health || echo "⚠️  Health check failed, continuing..."
    
    echo "✅ Automation cycle complete at $(date)"
}

# Function to monitor and restart failed processes
monitor_processes() {
    echo "🔍 Monitoring processes..."
    
    # Check PM2 status
    check_pm2_status
    
    # Get PM2 status
    pm2 status
    
    # Check if any processes are errored
    if pm2 jlist | grep -q '"status":"errored"'; then
        echo "⚠️  Found errored processes, restarting..."
        pm2 restart all
        pm2 save
    fi
    
    echo "✅ Process monitoring complete"
}

# Function to handle graceful shutdown
cleanup() {
    echo "🛑 Shutting down AI Service Factory..."
    pm2 stop all
    pm2 save
    echo "✅ Shutdown complete"
    exit 0
}

# Set up signal handlers
trap cleanup SIGTERM SIGINT

# Start the system
echo "🚀 Initializing AI Service Factory..."

# Start PM2 ecosystem
start_pm2_ecosystem

# Main continuous operation loop
echo "🔄 Starting continuous operation loop..."
while true; do
    # Monitor processes
    monitor_processes
    
    # Run automation cycle
    run_automation_cycle
    
    echo "⏰ Next cycle in 6 hours..."
    echo "🔄 Current time: $(date)"
    echo "📊 System status:"
    pm2 status
    
    # Wait 6 hours before next cycle
    sleep 21600
done