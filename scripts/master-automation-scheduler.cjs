
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
class MasterAutomationScheduler {
  constructor() {
    this.automations = [];
    this.scheduler = null;
    this.isRunning = false;
    this.lastRun = null;
    this.nextRun = null;
    this.runCount = 0;
    this.successCount = 0;
    this.errorCount = 0;
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    logger.info(`[${timestamp}] [${type}] ${message}`);
  }

  async start() {
    this.log('🚀 Starting Master Automation Scheduler');
    this.log('📋 This system will run all automation scripts every 30 minutes');

    await this.initialize();
    this.startScheduler();
    this.startHealthMonitoring();

    this.log('✅ Master Automation Scheduler started');
  }

  async initialize() {
    this.log('🔧 Initializing automation system...');

    // Define all automation scripts to run
    this.automations = [
      {
        name: 'Zion App Maintainer',
        command: 'npm run maintain',
        description: 'Main application maintenance and optimization',
      },
      {
        name: 'Complete Zion Automation',
        command: 'npm run automate',
        description: 'Comprehensive automation and fixes',
      },
      {
        name: 'TypeScript Check',
        command: 'npm run typecheck',
        description: 'TypeScript type checking and validation',
      },
      {
        name: 'Linting Fix',
        command: 'npm run lint:fix',
        description: 'ESLint fixes and code formatting',
      },
      {
        name: 'Code Formatting',
        command: 'npm run format',
        description: 'Prettier code formatting',
      },
      {
        name: 'Security Audit',
        command: 'npm audit --audit-level moderate',
        description: 'Security vulnerability scanning',
      },
      {
        name: 'Dependency Check',
        command: 'npm ls --depth=0',
        description: 'Dependency health check',
      },
      {
        name: 'Build Test',
        command: 'npm run build',
        description: 'Production build test',
      },
    ];

    // Create automation directory if it doesn't exist
    if (!fs.existsSync('automation')) {
      fs.mkdirSync('automation', { recursive: true });
    }

    // Create logs directory if it doesn't exist
    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs', { recursive: true });
    }

    this.log(
      `✅ Initialized with ${this.automations.length} automation scripts`,
    );
  }

  startScheduler() {
    this.log('⏰ Starting 30-minute automation scheduler...');

    // Run immediately on start
    this.runAllAutomations();

    // Schedule to run every 30 minutes
    this.scheduler = setInterval(
      () => {
        this.runAllAutomations();
      },
      30 * 60 * 1000,
    ); // 30 minutes in milliseconds

    this.isRunning = true;
    this.updateNextRun();
  }

  async runAllAutomations() {
    this.log('🔄 Starting automation cycle...');
    this.lastRun = new Date();
    this.runCount++
const results = {
      timestamp: this.lastRun.toISOString(),
      cycle: this.runCount,
      automations: [],
      summary: {
        total: this.automations.length,
        successful: 0,
        failed: 0,
        duration: 0,
      },
    }
const startTime = Date.now();

    for (const automation of this.automations) {
      try {
        const result = await this.runAutomation(automation);
        results.automations.push(result);

        if (result.success) {
          this.successCount++;
          results.summary.successful++;
          this.log(`✅ ${automation.name} completed successfully`);
        } else {
          this.errorCount++;
          results.summary.failed++;
          this.log(`❌ ${automation.name} failed: ${result.error}`, 'ERROR');
        }
      } catch (error) {
        this.errorCount++;
        results.summary.failed++
const result = {
          name: automation.name,
          success: false,
          error: error.message,
          duration: 0,
          output: '',
        };
        results.automations.push(result);
        this.log(`❌ ${automation.name} crashed: ${error.message}`, 'ERROR');
      }
    }

    results.summary.duration = Date.now() - startTime;

    // Save results
    await this.saveResults(results);

    // Update next run time
    this.updateNextRun();

    this.log(
      `📊 Automation cycle completed: ${results.summary.successful}/${results.summary.total} successful`,
    );
    this.log(`⏱️  Total duration: ${results.summary.duration}ms`);
  }

  async runAutomation(automation) {
    const startTime = Date.now();

    try {
      this.log(`🔧 Running: ${automation.name}`)
const { stdout, stderr } = await this.execCommand(automation.command)
const duration = Date.now() - startTime;

      // Consider it successful if no error was thrown, even if there are warnings
      const success = !stderr || !stderr.includes('error');

      return {
        name: automation.name,
        success,
        duration,
        output: stdout || '',
        error: stderr || '',
        command: automation.command,
      };
    } catch (error) {
      const duration = Date.now() - startTime;

      return {
        name: automation.name,
        success: false,
        duration,
        output: error.stdout || '',
        error: error.message,
        command: automation.command,
      };
    }
  }

  async saveResults(results) {
    try {
      // Save detailed results
      const resultsFile = `automation/cycle-${results.cycle}-${new Date().toISOString().split('T')[0]}.json`;
      fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));

      // Update summary file
      const summary = {
        lastUpdated: new Date().toISOString(),
        totalCycles: this.runCount,
        totalSuccess: this.successCount,
        totalErrors: this.errorCount,
        successRate:
          this.runCount > 0
            ? (
                (this.successCount / (this.successCount + this.errorCount)) *
                100
              ).toFixed(2)
            : 0,
        lastRun: this.lastRun?.toISOString(),
        nextRun: this.nextRun?.toISOString(),
        isRunning: this.isRunning,
      };

      fs.writeFileSync(
        'automation/scheduler-summary.json',
        JSON.stringify(summary, null, 2),
      );

      this.log(`💾 Results saved to ${resultsFile}`);
    } catch (error) {
      this.log(`❌ Failed to save results: ${error.message}`, 'ERROR');
    }
  }

  updateNextRun() {
    if (this.lastRun) {
      this.nextRun = new Date(this.lastRun.getTime() + 30 * 60 * 1000);
    }
  }

  startHealthMonitoring() {
    this.log('🏥 Starting health monitoring...');

    setInterval(() => {
      const now = new Date()
const status = {
        timestamp: now.toISOString(),
        isRunning: this.isRunning,
        lastRun: this.lastRun?.toISOString(),
        nextRun: this.nextRun?.toISOString(),
        runCount: this.runCount,
        successCount: this.successCount,
        errorCount: this.errorCount,
        successRate:
          this.runCount > 0
            ? (
                (this.successCount /
                  (this.runCount * this.automations.length)) *
                100
              ).toFixed(2)
            : 0,
      };

      fs.writeFileSync(
        'automation/scheduler-health.json',
        JSON.stringify(status, null, 2),
      );
    }, 60000); // Update health every minute
  }

  async execCommand(command) {
    return new Promise((resolve, reject) => {
      exec(
        command,
        {
          cwd: process.cwd(),
          timeout: 300000, // 5 minute timeout per automation
        },
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
          } else {
            resolve({ stdout, stderr });
          }
        },
      );
    });
  }

  async stop() {
    this.log('🛑 Stopping Master Automation Scheduler...');

    if (this.scheduler) {
      clearInterval(this.scheduler);
    }

    this.isRunning = false;

    // Save final status
    const finalStatus = {
      timestamp: new Date().toISOString(),
      isRunning: false,
      totalCycles: this.runCount,
      totalSuccess: this.successCount,
      totalErrors: this.errorCount,
      successRate:
        this.runCount > 0
          ? (
              (this.successCount / (this.successCount + this.errorCount)) *
              100
            ).toFixed(2)
          : 0,
    };

    fs.writeFileSync(
      'automation/scheduler-final-status.json',
      JSON.stringify(finalStatus, null, 2),
    );

    this.log('✅ Master Automation Scheduler stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      lastRun: this.lastRun?.toISOString(),
      nextRun: this.nextRun?.toISOString(),
      runCount: this.runCount,
      successCount: this.successCount,
      errorCount: this.errorCount,
      successRate:
        this.runCount > 0
          ? (
              (this.successCount / (this.runCount * this.automations.length)) *
              100
            ).toFixed(2)
          : 0,
    };
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  if (global.masterScheduler) {
    await global.masterScheduler.stop();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  if (global.masterScheduler) {
    await global.masterScheduler.stop();
  }
  process.exit(0);
});

// Start the master automation scheduler
const masterScheduler = new MasterAutomationScheduler();
global.masterScheduler = masterScheduler;

masterScheduler.start().catch((error) => {
  logger.error('❌ Failed to start master automation scheduler:', error);
  process.exit(1);
});
