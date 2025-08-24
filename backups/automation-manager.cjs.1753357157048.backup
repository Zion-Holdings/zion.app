
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


const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
class AutomationManager {
  constructor() {
    this.logsDir = path.join(__dirname, '..', 'logs');
    this.automationDir = path.join(__dirname, '..', 'automation');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    logger.info(`[${timestamp}] [${type}] ${message}`);
  }

  async runCommand(command, description) {
    return new Promise((resolve, reject) => {
      this.log(`🔄 Running: ${description}`);

      exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
        if (error) {
          this.log(`❌ Error in ${description}: ${error.message}`, 'ERROR');
          reject(error);
        } else {
          this.log(`✅ Completed: ${description}`);
          resolve(stdout);
        }
      });
    });
  }

  async status() {
    this.log('📊 Checking automation status...');

    // Check if automation processes are running
    const { exec } = require('child_process');
    exec(
      'ps aux | grep -E "(automation|netlify|master-automation)" | grep -v grep',
      (error, stdout) => {
        if (stdout.trim()) {
          this.log('🟢 Automation processes are running:');
          logger.info(stdout);
        } else {
          this.log('🔴 No automation processes are running');
        }
      },
    );

    // Check cron jobs
    exec('crontab -l', (error, stdout) => {
      if (stdout.includes('Zion App') || stdout.includes('automation')) {
        this.log('🟢 Automation cron jobs are active');
      } else {
        this.log('🔴 No automation cron jobs found');
      }
    });

    // Check port usage
    exec('lsof -i :3002 -i :3003 -i :3004 -i :3005', (error, stdout) => {
      if (stdout.trim()) {
        this.log('📡 Port usage:');
        logger.info(stdout);
      }
    });
  }

  async start() {
    this.log('🚀 Starting automation system...');

    try {
      // Start the main automation scheduler
      await this.runCommand(
        'npm run master-automation',
        'Master automation scheduler',
      );

      // Set up cron jobs
      await this.runCommand('npm run setup-cron', 'Cron job setup');

      this.log('✅ Automation system started successfully');
    } catch (error) {
      this.log('❌ Failed to start automation system', 'ERROR');
    }
  }

  async stop() {
    this.log('🛑 Stopping automation system...');

    try {
      // Kill automation processes
      await this.runCommand(
        'pkill -f "master-automation"',
        'Kill automation processes',
      );

      // Remove cron jobs
      await this.runCommand('npm run remove-cron', 'Remove cron jobs');

      this.log('✅ Automation system stopped successfully');
    } catch (error) {
      this.log('❌ Failed to stop automation system', 'ERROR');
    }
  }

  async clean() {
    this.log('🧹 Cleaning automation files...');

    try {
      // Clean automation logs
      await this.runCommand(
        'cd automation && npm run clean',
        'Clean automation logs',
      );

      // Clean main logs
      await this.runCommand(
        'rm -f logs/cron-*.log logs/automation-*.log',
        'Clean main logs',
      );

      this.log('✅ Automation files cleaned successfully');
    } catch (error) {
      this.log('❌ Failed to clean automation files', 'ERROR');
    }
  }

  async restart() {
    this.log('🔄 Restarting automation system...');

    try {
      await this.stop();
      await new Promise((resolve) => 
const timeoutId = setTimeout(resolve,  2000);
// Store timeoutId for cleanup if needed
); // Wait 2 seconds
      await this.start();

      this.log('✅ Automation system restarted successfully');
    } catch (error) {
      this.log('❌ Failed to restart automation system', 'ERROR');
    }
  }

  showHelp() {
    logger.info(`
🤖 Zion App Automation Manager

Usage: node scripts/automation-manager.cjs [command]

Commands:
  status    - Show current automation status
  start     - Start the automation system
  stop      - Stop the automation system
  restart   - Restart the automation system
  clean     - Clean automation logs and files
  help      - Show this help message

Examples:
  node scripts/automation-manager.cjs status
  node scripts/automation-manager.cjs start
  node scripts/automation-manager.cjs stop
    `);
  }
}

async function main() {
  const manager = new AutomationManager()
const command = process.argv[2] || 'help';

  switch (command) {
    case 'status':
      await manager.status();
      break;
    case 'start':
      await manager.start();
      break;
    case 'stop':
      await manager.stop();
      break;
    case 'restart':
      await manager.restart();
      break;
    case 'clean':
      await manager.clean();
      break;
    case 'help':
    default:
      manager.showHelp();
      break;
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationManager;
