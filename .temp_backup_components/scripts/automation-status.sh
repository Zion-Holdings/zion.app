
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

# Zion App Automation Status Script
# This script shows the status of all automation jobs

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "🚀 Zion App Automation Status"
echo "=============================="
echo "Project: $PROJECT_PATH"
echo "Time: $(date)"
echo ""

# Check if cron jobs are installed
echo "📋 Cron Jobs Status:"
if crontab -l 2>/dev/null | grep -q "zion-app-automation"; then
    echo "✅ Automation cron jobs are installed"
    echo ""
    echo "📅 Scheduled Jobs:"
    crontab -l 2>/dev/null | grep -E "(zion-app-automation|master-automation)" | while read -r line; do
        echo "   $line"
    done
else
    echo "❌ Automation cron jobs are not installed"
fi

echo ""
echo "📊 Recent Logs:"
echo "==============="

# Check recent log files
for logfile in logs/cron-*.log; do
    if [ -f "$logfile" ]; then
        echo ""
        echo "📄 $(basename "$logfile"):"
        echo "   Last modified: $(stat -f "%Sm" "$logfile" 2>/dev/null || stat -c "%y" "$logfile" 2>/dev/null)"
        echo "   Size: $(du -h "$logfile" | cut -f1)"
        echo "   Last 3 lines:"
        tail -3 "$logfile" 2>/dev/null | sed 's/^/     /' || echo "     (empty or unreadable)"
    fi
done

echo ""
echo "🏥 Health Check:"
echo "================"

# Check if the app is running
if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
    echo "✅ App is running and responding"
    HEALTH_RESPONSE=$(curl -s http://localhost:3001/api/health)
    echo "   Response: $HEALTH_RESPONSE"
else
    echo "❌ App is not responding"
fi

echo ""
echo "📈 Automation Summary:"
echo "======================"

# Check automation summary if it exists
if [ -f "automation/scheduler-summary.json" ]; then
    echo "✅ Automation summary available:"
    cat automation/scheduler-summary.json | jq -r '. | "   Total Cycles: \(.totalCycles)\n   Success Rate: \(.successRate)%\n   Last Run: \(.lastRun)\n   Next Run: \(.nextRun)"' 2>/dev/null || echo "   (summary file exists but cannot be parsed)"
else
    echo "❌ No automation summary available"
fi

echo ""
echo "🔧 Quick Commands:"
echo "=================="
echo "   View all logs: tail -f logs/cron-*.log"
echo "   Check cron jobs: crontab -l"
echo "   Remove automation jobs: ./scripts/remove-cron-automation.sh"
echo "   Start manual automation: ./scripts/start-master-automation.sh"
<<<<<<< HEAD
echo "   View master scheduler logs: tail -f logs/master-automation-scheduler.log"
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

=======
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
