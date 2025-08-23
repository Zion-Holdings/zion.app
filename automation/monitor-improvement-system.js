
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


const fs = require('fs');
const path = require('path');

class ImprovementSystemMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'efficient-improvement-report.json');
  }

  async monitor() {
    logger.info('📊 Monitoring Improvement System...');
    
    setInterval(async () => {
      await this.checkStatus();
    }, 10000); // Check every 10 seconds
  }

  async checkStatus() {
    try {
      // Check if the system is running
      const { execSync } = require('child_process');
      const isRunning = execSync('ps aux | grep efficient-improvement-system | grep -v grep', { stdio: 'pipe' }).toString().trim();
      
      if (isRunning) {
        logger.info(`🟢 System is running - ${new Date().toISOString()}`);
        
        // Check for recent reports
        await this.checkReports();
        
        // Check git status
        await this.checkGitStatus();
        
      } else {
        logger.info(`🔴 System is not running - ${new Date().toISOString()}`);
      }
      
    } catch (error) {
      logger.info(`❌ Error checking status: ${error.message}`);
    }
  }

  async checkReports() {
    try {
      const reportsDir = path.join(this.projectRoot, 'reports');
      if (fs.existsSync(reportsDir)) {
        const files = fs.readdirSync(reportsDir);
        const recentFiles = files.filter(f => f.endsWith('.json')).slice(-5);
        
        if (recentFiles.length > 0) {
          logger.info(`📄 Recent reports: ${recentFiles.join(', )}`);
        }
      }
    } catch (error) {
      logger.info(`❌ Error checking reports: ${error.message}`);
    }
  }

  async checkGitStatus() {
    try {
      const { execSync } = require('child_process');
      const status = execSync('git status --porcelain', { stdio: 'pipe' }).toString().trim();
      
      if (status) {
        logger.info(`📝 Git changes detected: ${status.split('\n').length} files modified`);
      } else {
        logger.info('✅ Git working directory clean');
      }
    } catch (error) {
      logger.info(`❌ Error checking git status: ${error.message}`);
    }
  }

  async showSummary() {
    try {
      if (fs.existsSync(this.reportPath)) {
        const report = JSON.parse(fs.readFileSync(this.reportPath, 'utf8'));
        
        logger.info('\n📊 Improvement System Summary');
        logger.info('============================');
        logger.info(`Total Cycles: ${report.summary.totalCycles}`);
        logger.info(`Total Improvements: ${report.summary.totalImprovements}`);
        logger.info(`Total Errors: ${report.summary.totalErrors}`);
        logger.info(`Duration: ${Math.round(report.summary.duration / 1000)} seconds`);
        
        if (report.improvements.length > 0) {
          logger.info('\nRecent Improvements:');
          report.improvements.slice(-5).forEach(imp => {
            logger.info(`  - ${imp.type} (${imp.priority}): ${imp.description}`);
          });
        }
        
        if (report.errors.length > 0) {
          logger.info('\nRecent Errors:');
          report.errors.slice(-3).forEach(err => {
            logger.info(`  - Cycle ${err.cycle}: ${err.error}`);
          });
        }
      } else {
        logger.info('No report found yet. System may still be running.');
      }
    } catch (error) {
      logger.info(`❌ Error reading report: ${error.message}`);
    }
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new ImprovementSystemMonitor();
  
  const args = process.argv.slice(2);
  const command = args[0];
  
  if (command === 'monitor') {
    logger.info('🔍 Starting continuous monitoring...');
    monitor.monitor();
  } else if (command === 'summary') {
    monitor.showSummary();
  } else {
    logger.info('Usage:');
    logger.info('  node monitor-improvement-system.js monitor  - Start continuous monitoring');
    logger.info('  node monitor-improvement-system.js summary  - Show current summary');
  }
}

module.exports = ImprovementSystemMonitor; 