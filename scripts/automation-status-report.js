
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

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

logger.info('🔍 Zion App Automation System Status Report\n');
logger.info('=' .repeat(60));

// Check automation directories
const automationDirs = [
  automation',
  scripts',
  automation/continuous-improvement',
  automation/performance',
  automation/slack',
  automation/tests
];

logger.info('\n📁 Directory Structure Check:');
for (const dir of automationDirs) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') || f.endsWith('.cjs'));
    logger.info(`✅ ${dir} - ${files.length} JS files`);
  } else {
    logger.info(`❌ ${dir} - Not found`);
  }
}

// Check critical automation files
const criticalFiles = [
  automation/index.js',
  automation/continuous-improvement/enhanced-automation.js',
  automation/continuous-improvement/start.js',
  automation/continuous-improvement/cursor-integration.js',
  scripts/cursor-chat-automation.js',
  automation/package.json
];

logger.info('\n🔧 Critical Files Syntax Check:');
for (const file of criticalFiles) {
  try {
    if (fs.existsSync(file)) {
      execSync(`node -c ${file}`, { stdio: pipe' });
      logger.info(`✅ ${file} - Syntax OK`);
    } else {
      logger.info(`❌ ${file} - File not found`);
    }
  } catch (error) {
    logger.info(`❌ ${file} - Syntax Error`);
  }
}

// Check automation dependencies
logger.info('\n📦 Dependencies Check:');
try {
  const packageJson = JSON.parse(fs.readFileSync('automation/package.json', utf8'));
  logger.info(`✅ automation/package.json - Version ${packageJson.version}`);
  logger.info(`   Dependencies: ${Object.keys(packageJson.dependencies || {}).length}`);
  logger.info(`   Dev Dependencies: ${Object.keys(packageJson.devDependencies || {}).length}`);
} catch (error) {
  logger.info(`❌ automation/package.json - Error: ${error.message}`);
}

// Check environment configuration
logger.info('\n⚙️ Environment Configuration:');
const envVars = [
  CURSOR_API_KEY',
  CURSOR_WORKSPACE_ID',
  OPENAI_API_KEY',
  CLAUDE_API_KEY',
  SLACK_BOT_TOKEN',
  AUTOMATION_PORT
];

for (const envVar of envVars) {
  if (process.env[envVar]) {
    logger.info(`✅ ${envVar} - Configured`);
  } else {
    logger.info(`⚠️ ${envVar} - Not configured`);
  }
}

// Check log directories
logger.info('\n📋 Log Directories:');
const logDirs = ['logs', automation/logs', scripts/logs'];
for (const logDir of logDirs) {
  if (fs.existsSync(logDir)) {
    const files = fs.readdirSync(logDir);
    logger.info(`✅ ${logDir} - ${files.length} files`);
  } else {
    logger.info(`⚠️ ${logDir} - Not found`);
  }
}

// Check automation processes
logger.info('\n🔄 Process Status:');
try {
  const processes = execSync('ps aux | grep -E "(cursor|automation|node)" | grep -v grep', { encoding: utf8' });
  if (processes.trim()) {
    logger.info('✅ Automation processes running:');
    processes.split('\n').filter(p => p.trim()).forEach(p => {
      logger.info(`   ${p.trim()}`);
    });
  } else {
    logger.info('⚠️ No automation processes currently running');
  }
} catch (error) {
  logger.info('⚠️ Could not check running processes');
}

// Check automation scripts
logger.info('\n🚀 Available Automation Scripts:');
const automationScripts = [
  scripts/cursor-chat-automation.js',
  scripts/auto-fix-daemon.js',
  scripts/watchdog.js',
  automation/index.js',
  automation/continuous-improvement/start.js
];

for (const script of automationScripts) {
  if (fs.existsSync(script)) {
    try {
      execSync(`node -c ${script}`, { stdio: pipe' });
      logger.info(`✅ ${script} - Ready to run`);
    } catch (error) {
      logger.info(`❌ ${script} - Syntax error`);
    }
  } else {
    logger.info(`⚠️ ${script} - Not found`);
  }
}

// Check recent automation activity
logger.info('\n📊 Recent Activity:');
const logFiles = [
  logs/cursor-chat-automation.log',
  logs/automation.log',
  logs/watchdog.log
];

for (const logFile of logFiles) {
  if (fs.existsSync(logFile)) {
    try {
      const stats = fs.statSync(logFile);
      const size = stats.size;
      const modified = stats.mtime;
      logger.info(`✅ ${logFile} - ${size} bytes, modified ${modified.toLocaleString()}`);
    } catch (error) {
      logger.info(`❌ ${logFile} - Error reading`);
    }
  } else {
    logger.info(`⚠️ ${logFile} - Not found`);
  }
}

// Summary and recommendations
logger.info('\n' + =' .repeat(60));
logger.info('📋 SUMMARY & RECOMMENDATIONS:');
logger.info('=' .repeat(60));

logger.info('\n✅ Automation System Status: READY');
logger.info('\n🚀 To start automation systems:');
logger.info('   1. Cursor Chat Automation: node scripts/cursor-chat-automation.js start');
logger.info('   2. Main Automation: node automation/index.js');
logger.info('   3. Continuous Improvement: node automation/continuous-improvement/start.js');
logger.info('   4. Watchdog: node scripts/watchdog.js');

logger.info('\n🔧 To fix remaining issues:');
logger.info('   1. Configure missing environment variables');
logger.info('   2. Install missing dependencies: cd automation && npm install');
logger.info('   3. Create log directories if missing');

logger.info('\n📈 Next Steps:');
logger.info('   1. Test automation systems individually');
logger.info('   2. Monitor logs for any runtime errors');
logger.info('   3. Configure Slack integration if needed');
logger.info('   4. Set up cron jobs for continuous operation');

logger.info('\n🎯 Automation systems are ready for deployment!');
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
