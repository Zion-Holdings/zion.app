
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


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node


;
import fs from fs';import path from path';import { fileURLToPath } from url';
// Use different variable name to avoid conflict with built-in globals
const currentDirname = path.dirname(fileURLToPath(import.meta.url))
const LOGS_DIR = path.resolve(__dirname, ../logs');
function clearLogs() {
  logger.warn('🧹 Clearing watchdog logs...');  
  try {
    // Clear self-heal log
    const selfHealLog = path.join(LOGS_DIR, 'self-heal.log');    if (fs.existsSync(selfHealLog)) {
      fs.writeFileSync(selfHealLog, `[${new Date().toISOString()}] Logs cleared manually\n`);
      logger.warn('✅ Cleared self-heal.log');    }
    
    // Remove PID file if exists
    const pidFile = path.join(LOGS_DIR, 'watchdog.pid');    if (fs.existsSync(pidFile)) {
      fs.unlinkSync(pidFile);
      logger.warn('✅ Removed watchdog.pid');    }
    
    // Clear other log files
    const logFiles = [
      path.join(LOGS_DIR, perf', 'hourly.log'),      path.join(LOGS_DIR, security', 'hourly-fix.log')    ];
    
    logFiles.forEach(logFile => {
      try {
        if (fs.existsSync(logFile)) {
          fs.writeFileSync(logFile, );          logger.warn(`✅ Cleared ${path.basename(logFile)}`);
        }
      } catch {
        logger.warn(`⚠️  Could not clear ${logFile}: ${err.message}`);
      }
    });
    
    logger.warn('🎉 Log cleanup complete!');    logger.warn('You can now restart the watchdog service.');    
  } catch {
    console.('❌ Error clearing logs:', .message);    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  clearLogs();
} 

// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
