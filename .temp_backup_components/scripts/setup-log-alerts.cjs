class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');

    try {
      const winston = require('winston');

      const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.errors({ stack: true }),
          winston.format.json(),
        ),
        defaultMeta: { service: 'automation-script' },
        transports: [
          new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
          }),
          new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
      });

      if (process.env.NODE_ENV !== 'production') {
        logger.add(
          new winston.transports.Console({
            format: winston.format.simple(),
          }),
        );
      }

      const fs = require('fs');
      const path = require('path');
      const { ErrorMonitor, CONFIG } = require('./error-monitor.cjs');

      async function main() {
        const monitor = new ErrorMonitor();
        if (!monitor.init()) {
          process.exit(1);
        }
        await monitor.readLogs();
        const criticals = monitor.errors.filter(
          (e) =>
            e.level === 'critical' ||
            monitor.containsCriticalKeyword(e.message),
        );
        if (criticals.length > 0) {
          const alertMsg = `[ALERT] [${new Date().toISOString()}] CRITICAL ERRORS DETECTED: ${criticals.length}\n`;
          const alertFile = path.join(CONFIG.logsDir, 'alerts.log');
          fs.appendFileSync(alertFile, alertMsg);
          logger.warn(alertMsg.trim());
        } else {
          logger.warn('No critical errors found.');
        }
      }

      if (require.main === module) {
        main().catch((err) => {
          logger.error('Failed to setup log alerts:', err);
          process.exit(1);
        });
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
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch((error) => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
