
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


const fs = require('fs')
const path = require('path')
class AutomationMonitor {
  constructor() {
    this.logFile = 'logs/automation.log';
  }

  log(message) {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] ${message}`;
    logger.info(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  start() {
    this.log('🚀 Automation monitor started');
    setInterval(() => {
      this.log('✅ Automation system running normally');
    }, 60000); // Log every minute
  }
}

if (require.main === module) {
  try {
    
  const monitor = new AutomationMonitor();
  monitor.start();

  } catch (error) {
    console.error('Script execution failed:', error);
    process.exit(1);
  }
}

module.exports = AutomationMonitor;


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

