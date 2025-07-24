
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
const path = require('path');

// Port mapping to avoid conflicts
const PORT_MAPPING = {
  3002: 3003, // Main app uses 3002, automation uses 3003
  3001: 3004, // Reserve 3001 for health checks, use 3004 for other services
  3003: 3005, // Move automation from 3003 to 3005
  3004: 3006, // Move other services to 3006
  3005: 3007, // Move remaining services to 3007
}
function updatePortsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;

    for (const [oldPort, newPort] of Object.entries(PORT_MAPPING)) {
      const oldRegex = new RegExp(`:${oldPort}`, 'g');
      if (oldRegex.test(content)) {
        content = content.replace(oldRegex, `:${newPort}`);
        updated = true;
        logger.info(`  Updated port ${oldPort} -> ${newPort}`);
      }
    }

    if (updated) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function fixPortConflicts() {
  logger.info('🔧 Fixing port conflicts in automation scripts...')
const scriptsDir = path.join(__dirname)
const files = fs
    .readdirSync(scriptsDir)
    .filter((file) => file.endsWith('.cjs') || file.endsWith('.js'));

  let updatedFiles = 0;

  for (const file of files) {
    const filePath = path.join(scriptsDir, file);
    logger.info(`\n📁 Processing: ${file}`);

    if (updatePortsInFile(filePath)) {
      updatedFiles++;
    }
  }

  logger.info(`\n✅ Updated ${updatedFiles} files to fix port conflicts`);
  logger.info('\n📋 New port mapping:');
  logger.info('  Main App: 3002');
  logger.info('  Automation: 3003');
  logger.info('  Health Checks: 3001');
  logger.info('  Other Services: 3004-3007');
}

if (require.main === module) {
  fixPortConflicts();
}

module.exports = { fixPortConflicts, PORT_MAPPING };
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
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
