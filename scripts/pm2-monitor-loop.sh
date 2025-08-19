#!/bin/bash

echo "🔄 Starting PM2 monitoring loop..."
echo "📊 This will continuously monitor and restart stopped processes"

while true; do
    echo "$(date): Checking PM2 processes..."
    
    # Check for stopped processes
    stopped_count=$(pm2 status | grep "stopped" | wc -l)
    
    if [ $stopped_count -gt 0 ]; then
        echo "⚠️  Found $stopped_count stopped processes. Restarting..."
        pm2 restart all
        sleep 5
    else
        echo "✅ All processes are running"
    fi
    
    # Wait 5 minutes before next check
    sleep 300
done
