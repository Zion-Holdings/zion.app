
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

# Log Rotation Script for Zion App Automation
# This script rotates automation logs to prevent disk space issues

set -e

PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LOGS_DIR="$PROJECT_PATH/logs"
BACKUP_DIR="$PROJECT_PATH/logs/backup"

# Create backup directory
mkdir -p "$BACKUP_DIR"

# Get current date for backup
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)

echo "🔄 Rotating automation logs..."

# Rotate log files
for logfile in "$LOGS_DIR"/cron-*.log; do
    if [ -f "$logfile" ]; then
        filename=$(basename "$logfile")
        backup_file="$BACKUP_DIR/${filename%.log}_${BACKUP_DATE}.log"
        
        # Move current log to backup
        mv "$logfile" "$backup_file"
        
        # Create new empty log file
        touch "$logfile"
        
        echo "   Rotated: $filename -> $(basename "$backup_file")"
    fi
done

# Rotate master automation scheduler log
if [ -f "$LOGS_DIR/master-automation-scheduler.log" ]; then
    backup_file="$BACKUP_DIR/master-automation-scheduler_${BACKUP_DATE}.log"
    mv "$LOGS_DIR/master-automation-scheduler.log" "$backup_file"
    touch "$LOGS_DIR/master-automation-scheduler.log"
    echo "   Rotated: master-automation-scheduler.log -> $(basename "$backup_file")"
fi

# Keep only last 7 days of backups
find "$BACKUP_DIR" -name "*.log" -mtime +7 -delete 2>/dev/null || true

echo "✅ Log rotation completed"
echo "📁 Backup location: $BACKUP_DIR"
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

