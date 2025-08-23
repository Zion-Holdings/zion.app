#!/bin/bash

echo "🚀 Starting AI Service Factory Continuous Operation..."

# Set environment variables for continuous operation
export SERVICE_FACTORY_ENABLED=true
export AUTO_DEPLOYMENT_ENABLED=true
export QUALITY_THRESHOLD=80
export MAX_CONCURRENT_SERVICES=10
export CONTINUOUS_OPERATION=true

# Start PM2 ecosystem
echo "📊 Starting PM2 ecosystem..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Set up PM2 startup script
pm2 startup

# Start the continuous automation loop
echo "🤖 Starting continuous automation loop..."
while true; do
    echo "⏰ $(date): Running continuous automation cycle..."
    
    # Run the ultimate service factory
    echo "🚀 Running service factory pipeline..."
    npm run ultimate:run
    
    # Update service catalog
    echo "📚 Updating service catalog..."
    npm run catalog:update
    
    # Run performance optimization
    echo "⚡ Running performance optimization..."
    npm run performance:optimize
    
    # Run integration testing
    echo "🧪 Running integration tests..."
    npm run integration:test
    
    # Generate dashboard
    echo "📊 Generating dashboard..."
    npm run dashboard:generate
    
    # Check system health
    echo "🏥 Checking system health..."
    npm run ultimate:health
    
    echo "✅ Cycle complete. Waiting 6 hours before next cycle..."
    sleep 21600  # 6 hours
done