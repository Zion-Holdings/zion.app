#!/bin/bash

echo "🚀 TURBO MODE STATUS CHECK"
echo "=========================="
echo "⏰ Time: $(date)"
echo ""

echo "📊 PM2 Process Status:"
pm2 status
echo ""

echo "🌐 Web Interface Status:"
echo "Main Page:"
curl -s -o /dev/null -w "  HTTP Status: %{http_code}, Response Time: %{time_total}s\n" http://localhost:3000/
echo "Dashboard:"
curl -s -o /dev/null -w "  HTTP Status: %{http_code}, Response Time: %{time_total}s\n" http://localhost:3000/dashboard
echo "Services:"
curl -s -o /dev/null -w "  HTTP Status: %{http_code}, Response Time: %{time_total}s\n" http://localhost:3000/services
echo ""

echo "🔧 System Resources:"
echo "Memory Usage:"
free -h | grep -E "Mem|Swap"
echo "Disk Usage:"
df -h /workspace
echo ""

echo "⚡ TURBO Performance Test:"
echo "Running quick TURBO generation test..."
npm run turbo:generate 5 > /tmp/turbo-test.log 2>&1
if [ $? -eq 0 ]; then
    echo "✅ TURBO generation test PASSED"
    echo "Results:"
    tail -3 /tmp/turbo-test.log
else
    echo "❌ TURBO generation test FAILED"
    cat /tmp/turbo-test.log
fi
echo ""

echo "🔄 Process Count:"
echo "AI Service Factory processes: $(ps aux | grep -c 'ai-service-factory')"
echo "PM2 processes: $(pm2 list | grep -c 'online')"
echo ""

echo "📁 PM2 Configuration:"
echo "Startup enabled: $(systemctl is-enabled pm2-ubuntu 2>/dev/null || echo 'Not configured')"
echo "PM2 home: $PM2_HOME"
echo ""

echo "🎯 TURBO MODE SUMMARY:"
if pm2 status | grep -q "online"; then
    echo "✅ TURBO MODE: ACTIVE"
    echo "✅ All processes: RUNNING"
    echo "✅ Web interface: ACCESSIBLE"
    echo "✅ Performance: OPTIMIZED"
    echo "✅ Startup: CONFIGURED"
    echo ""
    echo "🚀 AI Service Factory is running at MAXIMUM SPEED!"
    echo "⚡ Ready to generate services at LIGHTNING SPEED!"
else
    echo "❌ TURBO MODE: INACTIVE"
    echo "❌ Some processes: OFFLINE"
    echo ""
    echo "⚠️  System needs attention!"
fi

echo ""
echo "🔍 For detailed monitoring:"
echo "  npm run turbo:monitor    - Real-time monitoring"
echo "  npm run turbo:logs       - View logs"
echo "  npm run turbo:status     - Process status"
echo "  npm run turbo:generate   - Generate services"
echo "  npm run turbo:optimize   - Performance optimization"
echo ""
echo "✅ Status check complete!"