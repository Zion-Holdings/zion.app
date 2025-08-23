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

      const { execSync } = require('child_process');

      logger.warn('📦 Installing build dependencies for Netlify...');

      // List of essential build dependencies
      const buildDeps = [
        'typescript',
        '@types/node',
        '@types/react',
        '@types/react-dom',
        '@swc/core',
        '@swc/helpers',
      ];

      try {
        logger.warn('Installing:', buildDeps.join(', '));
        execSync(
          `npm install ${buildDeps.join(' ')} --save-dev --legacy-peer-deps`,
          {
            stdio: 'inherit',
          },
        );
        logger.warn('✅ Build dependencies installed successfully');
      } catch (_error) {
        logger.error(
          '❌ Failed to install build dependencies:',
          _error.message,
        );
        process.exit(1);
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
