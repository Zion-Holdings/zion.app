
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

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
class AutomationStatusChecker {
  constructor() {
    this.processes = [
      'ai-app-improver.cjs',
      'continuous-optimization.cjs',
      'automation-monitor.cjs',
      'ai-error-fixer.cjs',
      'performance-optimizer.cjs',
      'security-scanner.cjs',
      'code-quality-enhancer.cjs',
      'dependency-manager.cjs',
      'build-optimizer.cjs',
      'test-automation.cjs',
      'ultimate-automation-master.cjs',
    ];
  }

  log(message, type = 'info') {
    const colors = {
      info: '\x1b[36m',
      success: '\x1b[32m',
      error: '\x1b[31m',
      warning: '\x1b[33m',
      reset: '\x1b[0m',
    };
    logger.info(`${colors[type]}${message}${colors.reset}`);
  }

  checkProcessStatus(processName) {
    try {
      const result = execSync(`ps aux | grep "${processName}" | grep -v grep`, {
        encoding: 'utf8',
      });
      return result.trim().split('\n').length;
    } catch (error) {
      return 0;
    }
  }

  async checkAllProcesses() {
    logger.info('\n🤖 AUTOMATION STATUS CHECKER');
    logger.info('================================\n');

    let totalRunning = 0;
    let totalProcesses = this.processes.length;

    for (const process of this.processes) {
      const count = this.checkProcessStatus(process)
const status = count > 0 ? '✅ RUNNING' : '❌ STOPPED'
const instances = count > 0 ? ` (${count} instances)` : '';

      this.log(
        `${status} ${process}${instances}`,
        count > 0 ? 'success' : 'error',
      );
      totalRunning += count;
    }

    logger.info('\n📊 SUMMARY');
    logger.info('==========');
    this.log(`Total Processes: ${totalProcesses}`, 'info');
    this.log(
      `Running Instances: ${totalRunning}`,
      totalRunning > 0 ? 'success' : 'error',
    );
    this.log(
      `Coverage: ${Math.round((totalRunning / totalProcesses) * 100)}%`,
      totalRunning > 0 ? 'success' : 'error',
    );

    // Check automation reports
    this.checkAutomationReports();

    return {
      totalProcesses,
      totalRunning,
      coverage: Math.round((totalRunning / totalProcesses) * 100),
    };
  }

  checkAutomationReports() {
    logger.info('\n📈 AUTOMATION REPORTS');
    logger.info('====================')
const reportFiles = [
      'automation/ai-improvement-report.json',
      'automation/health-report.json',
      'automation/optimization-report.json',
      'automation/performance-report.json',
    ];

    for (const file of reportFiles) {
      try {
        if (fs.existsSync(file)) {
          const data = JSON.parse(fs.readFileSync(file, 'utf8'))
const timestamp = new Date(
            data.timestamp || Date.now(),
          ).toLocaleString();
          this.log(`✅ ${file} - Last updated: ${timestamp}`, 'success');
        } else {
          this.log(`❌ ${file} - Not found`, 'error');
        }
      } catch (error) {
        this.log(`⚠️ ${file} - Error reading: ${error.message}`, 'warning');
      }
    }
  }

  async startContinuousMonitoring() {
    logger.info('\n🔄 Starting continuous monitoring...\n');

    setInterval(async () => {
      console.clear();
      await this.checkAllProcesses();
    }, 10000); // Every 10 seconds
  }
}

// Run status check
const checker = new AutomationStatusChecker();

if (process.argv.includes('--continuous')) {
  checker.startContinuousMonitoring();
} else {
  checker.checkAllProcesses();
}
