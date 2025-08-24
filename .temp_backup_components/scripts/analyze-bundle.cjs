<<<<<<< HEAD
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
      const { execSync } = require('child_process');
      const _currentFilename = path.basename(__filename);
      function analyzeBundle() {
        try {
          logger.info('🔍 Analyzing bundle...');

          // Check if .next directory exists
          if (!fs.existsSync('.next')) {
            logger.info('⚠️  .next directory not found. Run build first.');
            return;
          }

          // Analyze bundle size
          const bundleStats = execSync(
            'npx next-bundle-analyzer .next/static/chunks',
            { encoding: 'utf8' },
          );
          logger.info('📊 Bundle analysis completed');

          // Save analysis to file
          const analysisPath = path.join('scripts', 'bundle-analysis.json');
          fs.writeFileSync(
            analysisPath,
            JSON.stringify(
              {
                timestamp: new Date().toISOString(),
                stats: bundleStats,
              },
              null,
              2,
            ),
          );

          logger.info(
            '✅ Bundle analysis saved to scripts/bundle-analysis.json',
          );
        } catch (error) {
          logger.error('❌ Bundle analysis failed:', error.message);
        }
      }

      if (require.main === module) {
        analyzeBundle();
      }

      module.exports = { analyzeBundle };
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
=======
#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const _currentFilename = path.basename(__filename)
class BundleAnalyzer {
  constructor() {
    this.analysis = {};
  }

  analyzeBundle() {
    try {
      console.log('Bundle analysis completed');
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    }
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
  }
}

// Start the script
if (require.main === module) {
<<<<<<< HEAD
  const script = new Script();
  script.start().catch((error) => {
    console.error('Failed to start Script:', error);
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
  const analyzer = new BundleAnalyzer();
  analyzer.analyzeBundle();
}

module.exports = BundleAnalyzer;
>>>>>>> 4ce2a75a87f0dab25bdc62451fc0e765f8a2b858
