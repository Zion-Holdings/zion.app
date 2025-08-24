
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

// Dependency Update Automation Script (Frontend)
const { execSync } = require('child_process');

try {
  logger.info('Checking for outdated npm packages...');
  execSync('npm outdated', { stdio: 'inherit' });
  logger.info('Updating npm packages...');
  execSync('npm update', { stdio: 'inherit' });
  logger.info('Dependency update complete.');
} catch (err) {
  logger.error('Error updating dependencies:', err);
}
