
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/bin/bash

# Zion App Self-Healing System Status Script
# Shows the status of all monitoring and healing systems

echo "📊 Zion App Self-Healing System Status"
echo "======================================"

# Check if logs directory exists
if [ ! -d "logs" ]; then
    echo "❌ Logs directory not found. Systems may not have been started."
    exit 1
fi

# Function to check process status
check_process() {
    local name=$1
    local pattern=$2
    local pids=$(pgrep -f "$pattern" 2>/dev/null || true)
    
    if [ ! -z "$pids" ]; then
        echo "✅ $name is running (PIDs: $pids)"
        return 0
    else
        echo "❌ $name is not running"
        return 1
    fi
}

# Check each monitoring system
echo ""
echo "🔍 Process Status:"
HEALTH_RUNNING=false
BUILD_RUNNING=false
HEALING_RUNNING=false

if check_process "Health Monitor" "health-monitor.cjs"; then
    HEALTH_RUNNING=true
fi

if check_process "Build Monitor" "build-monitor.cjs"; then
    BUILD_RUNNING=true
fi

if check_process "Self-Healing System" "self-healing.cjs"; then
    HEALING_RUNNING=true
fi

# Check log files
echo ""
echo "📝 Log Files:"
if [ -f "logs/build.log" ]; then
    echo "✅ Build log exists"
    echo "   Last modified: $(stat -c %y logs/build.log 2>/dev/null || stat -f %Sm logs/build.log 2>/dev/null || echo "Unknown")"
else
    echo "❌ Build log not found"
fi

if [ -f "logs/errors.log" ]; then
    echo "✅ Error log exists"
    echo "   Last modified: $(stat -c %y logs/errors.log 2>/dev/null || stat -f %Sm logs/errors.log 2>/dev/null || echo "Unknown")"
else
    echo "❌ Error log not found"
fi

if [ -f "logs/health-metrics.json" ]; then
    echo "✅ Health metrics exist"
    echo "   Last modified: $(stat -c %y logs/health-metrics.json 2>/dev/null || stat -f %Sm logs/health-metrics.json 2>/dev/null || echo "Unknown")"
else
    echo "❌ Health metrics not found"
fi

# Show recent activity
echo ""
echo "🕒 Recent Activity:"

# Show last few lines of build log
if [ -f "logs/build.log" ]; then
    echo "📋 Last 5 build log entries:"
    tail -5 logs/build.log 2>/dev/null || echo "   No recent build activity"
fi

# Show last few lines of error log
if [ -f "logs/errors.log" ]; then
    echo ""
    echo "🚨 Last 5 error log entries:"
    tail -5 logs/errors.log 2>/dev/null || echo "   No recent errors"
fi

# Show health metrics if available
if [ -f "logs/health-metrics.json" ]; then
    echo ""
    echo "💓 Latest Health Metrics:"
    if command -v jq &> /dev/null; then
        jq '.' logs/health-metrics.json 2>/dev/null || echo "   Invalid JSON format"
    else
        cat logs/health-metrics.json
    fi
fi

# Overall status
echo ""
echo "🎯 Overall Status:"
if [ "$HEALTH_RUNNING" = true ] && [ "$BUILD_RUNNING" = true ] && [ "$HEALING_RUNNING" = true ]; then
    echo "✅ All systems are running normally"
    exit 0
elif [ "$HEALTH_RUNNING" = true ] || [ "$BUILD_RUNNING" = true ] || [ "$HEALING_RUNNING" = true ]; then
    echo "⚠️  Some systems are running, others are down"
    exit 1
else
    echo "❌ All systems are down"
    exit 1
fi
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

