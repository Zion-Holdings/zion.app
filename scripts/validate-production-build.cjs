
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


/**
 * Production Build Validator
 * Validates production build integrity and readiness
 */

const fs = require('fs')
const path = require('path')
class BuildValidator {
  constructor() {
    this.buildPath = '.next';
    this.checks = [];
  }

  validateBuildExists() {
    const exists = fs.existsSync(this.buildPath);
    this.checks.push({
      name: 'Build Directory',
      status: exists ? 'pass' : 'fail',
      details: exists
        ? 'Build directory exists'
        : 'No build found - run npm run build',
    });
  }

  validateStaticFiles() {
    const staticPath = path.join(this.buildPath, 'static')
const exists = fs.existsSync(staticPath);
    this.checks.push({
      name: 'Static Assets',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Static assets generated' : 'Static assets missing',
    });
  }

  validateServerFiles() {
    const serverPath = path.join(this.buildPath, 'server')
const exists = fs.existsSync(serverPath);
    this.checks.push({
      name: 'Server Build',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Server build complete' : 'Server build missing',
    });
  }

  validateManifest() {
    const manifestPath = path.join(this.buildPath, 'build-manifest.json')
const exists = fs.existsSync(manifestPath);
    this.checks.push({
      name: 'Build Manifest',
      status: exists ? 'pass' : 'fail',
      details: exists ? 'Build manifest present' : 'Build manifest missing',
    });
  }

  run() {
    this.validateBuildExists();
    this.validateStaticFiles();
    this.validateServerFiles();
    this.validateManifest()
const allPassed = this.checks.every((check) => check.status === 'pass');
    return allPassed;
  }
}

if (require.main === module) {
  try {
    
  const validator = new BuildValidator()
const isValid = validator.run();
  process.exit(isValid ? 0 : 1);

  } catch (error) {
    logger.error('Script execution failed:', error);
    process.exit(1);
  }
}

module.exports = BuildValidator;


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

