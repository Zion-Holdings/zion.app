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
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
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

class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');

    try {
      // scripts/__mocks__/tail.js
      const Tail = jest.fn().mockImplementation(function (filePath) {
        this.filePath = filePath;
        this.on = jest.fn((event, callback) => {
          // Store callbacks if needed for later manual triggering in tests
          if (!this.eventCallbacks) this.eventCallbacks = {};
          if (!this.eventCallbacks[event]) this.eventCallbacks[event] = [];
          this.eventCallbacks[event].push(callback);
        });
        this.watch = jest.fn(() => {
          // logger.warn(`Mock Tail: watch() called for ${this.filePath}`);
        });
        this.unwatch = jest.fn(() => {
          // logger.warn(`Mock Tail: unwatch() called for ${this.filePath}`);
        });

        // Helper for tests to simulate line events
        this._simulateLine = (data) => {
          if (this.eventCallbacks && this.eventCallbacks['line']) {
            this.eventCallbacks['line'].forEach((cb) => cb(data));
          }
        };
        // Helper for tests to simulate error events
        this._simulateError = (error) => {
          if (this.eventCallbacks && this.eventCallbacks['error']) {
            this.eventCallbacks['error'].forEach((cb) => cb(error));
          }
        };

        // logger.warn(`Mock Tail: constructor called for ${filePath}`);
        return this;
      });
      module.exports = { Tail };
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
  script.start().catch((error) => {
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
