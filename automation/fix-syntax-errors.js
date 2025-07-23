
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

#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixAllFiles() {
    logger.info('🔧 Fixing syntax errors in automation files...');
    
    const filesToFix = [
      test-all-automations.js',
      core/IntelligentAutomationOrchestrator.js',
      core/AutonomousAutomationManager.js',
      core/TaskScheduler.js',
      core/NotificationManager.js',
      core/AnomalyDetector.js',
      core/ReportGenerator.js',
      netlify-monitor.js',
      netlify-error-fixer.js',
      netlify-build-automation.js',
      performance/monitor.js',
      performance/frontend-fix.js',
      continuous-improvement/enhanced-automation.js',
      continuous-improvement/monitor.js',
      continuous-improvement/improve.js',
      tasks/DependencyUpdater.js
    ];

    for (const file of filesToFix) {
      try {
        await this.fixFile(file);
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }

    this.printReport();
  }

  async fixFile(filePath) {
    try {
      const content = await fs.readFile(filePath, utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = this.fixTrailingQuotes(fixedContent);
      fixedContent = this.fixUnclosedStrings(fixedContent);
      fixedContent = this.fixMissingQuotes(fixedContent);
      fixedContent = this.fixExtraSemicolons(fixedContent);

      if (fixedContent !== content) {
        await fs.writeFile(filePath, fixedContent, utf8');
        this.fixedFiles.push(filePath);
        logger.info(`✅ Fixed: ${filePath}`);
      } else {
        logger.info(`✅ No issues: ${filePath}`);
      }
    } catch (error) {
      throw new Error(`Failed to fix ${filePath}: ${error.message}`);
    }
  }

  fixTrailingQuotes(content) {
    // Remove trailing single quotes (any number of them)
    return content.replace(/;+$/gm, ;)
                  .replace(/'+$/gm, )
                  .replace(/;+$/gm, ;);
  }

  fixUnclosedStrings(content) {
    // Fix common unclosed string patterns
    return content.replace(/= ([a-zA-Z_][a-zA-Z0-9_]*);/g, "= $1';")
                  .replace(/= ([a-zA-Z_][a-zA-Z0-9_]*)/g, "= $1';");
  }

  fixMissingQuotes(content) {
    // Fix missing quotes around string values
    return content.replace(/= ([a-zA-Z_][a-zA-Z0-9_]*);/g, "= $1';")
                  .replace(/status: ([a-zA-Z_][a-zA-Z0-9_]*)/g, "status: $1'")
                  .replace(/level: ([a-zA-Z_][a-zA-Z0-9_]*)/g, "level: $1'");
  }

  fixExtraSemicolons(content) {
    // Remove extra semicolons followed by quotes
    return content.replace(/;+'+$/gm, ;);
  }

  printReport() {
    logger.info('\n📊 Syntax Fix Report');
    logger.info('='.repeat(50));
    logger.info(`Files fixed: ${this.fixedFiles.length}`);
    logger.info(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      logger.info('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => logger.info(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      logger.info('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => logger.info(`  - ${file}: ${error}`));
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().catch(error => {
    logger.error('Fixer failed:', error);
    process.exit(1);
  });
}

module.exports = SyntaxErrorFixer; 

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

