#!/bin/bash

echo "🔍 AI Service Factory Status Check"
echo "⏰ Time: $(date)"
echo ""

echo "📊 PM2 Process Status:"
pm2 status
echo ""

echo "🔄 Background Process Status:"
ps aux | grep start-ai-service-factory | grep -v grep
echo ""

echo "📈 Recent Log Activity:"
tail -20 ai-service-factory.log
echo ""

echo "🌐 Web Interface Status:"
curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:3000/ || echo "Web interface not accessible"
echo ""

echo "📁 Generated Reports:"
ls -la public/automation/ | head -10
echo ""

echo "✅ Status check complete!"