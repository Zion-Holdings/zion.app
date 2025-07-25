
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
      #!/usr/bin/env node
// Quick script to detect missing translation keys across locales
const fs = require('fs')
const path = require('path')
const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales')
const localeFiles = fs
  .readdirSync(localesDir)
  .filter((f) => f.endsWith('.json'))
function flatten(obj, prefix = '') {
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(res, flatten(value, newKey));
    } else {
      res[newKey] = true;
    }
  }
  return res;
}

const localeKeys = {}
const allKeys = new Set();

for (const _file of localeFiles) {
  const filePath = path.join(localesDir, file)
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
const keys = Object.keys(flatten(data));
  localeKeys[file] = new Set(keys);
  keys.forEach((k) => allKeys.add(k));
}

let missing = false;
for (const [file, keys] of Object.entries(localeKeys)) {
  const missingKeys = [...allKeys].filter((k) => !keys.has(k));
  if (missingKeys.length) {
    missing = true;
  }
}

if (!missing) {
  logger.warn('✅ All translation keys are present across all locales');
}
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

