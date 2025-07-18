#!/bin/bash

# Zion App Self-Healing System Stop Script
# Stops all monitoring and healing systems

echo "🛑 Stopping Zion App Self-Healing System..."

# Find and kill monitoring processes
echo "🔍 Finding monitoring processes..."

# Kill health monitor
HEALTH_PIDS=$(pgrep -f "health-monitor.cjs" || true)
if [ ! -z "$HEALTH_PIDS" ]; then
    echo "🩺 Stopping health monitor (PIDs: $HEALTH_PIDS)..."
    kill $HEALTH_PIDS 2>/dev/null || true
else
    echo "ℹ️  Health monitor not running"
fi

# Kill build monitor
BUILD_PIDS=$(pgrep -f "build-monitor.cjs" || true)
if [ ! -z "$BUILD_PIDS" ]; then
    echo "🔨 Stopping build monitor (PIDs: $BUILD_PIDS)..."
    kill $BUILD_PIDS 2>/dev/null || true
else
    echo "ℹ️  Build monitor not running"
fi

# Kill self-healing system
HEALING_PIDS=$(pgrep -f "self-healing.cjs" || true)
if [ ! -z "$HEALING_PIDS" ]; then
    echo "🩹 Stopping self-healing system (PIDs: $HEALING_PIDS)..."
    kill $HEALING_PIDS 2>/dev/null || true
else
    echo "ℹ️  Self-healing system not running"
fi

# Wait a moment for processes to terminate
sleep 2

# Force kill any remaining processes
REMAINING_PIDS=$(pgrep -f "monitor.cjs\|healing.cjs" || true)
if [ ! -z "$REMAINING_PIDS" ]; then
    echo "💀 Force killing remaining processes (PIDs: $REMAINING_PIDS)..."
    kill -9 $REMAINING_PIDS 2>/dev/null || true
fi

echo "✅ All monitoring systems stopped successfully!"

# Show final status
echo ""
echo "📊 Final Status:"
echo "Health Monitor: $(pgrep -f "health-monitor.cjs" >/dev/null && echo "❌ Still running" || echo "✅ Stopped")"
echo "Build Monitor: $(pgrep -f "build-monitor.cjs" >/dev/null && echo "❌ Still running" || echo "✅ Stopped")"
echo "Self-Healing: $(pgrep -f "self-healing.cjs" >/dev/null && echo "❌ Still running" || echo "✅ Stopped")" 