#!/usr/bin/env node

/**
 * Zion App - Monitoring Module
 *
 * Dedicated monitoring system that collects metrics and triggers improvements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const axios = require('axios');
const cron = require('node-cron');
const winston = require('winston');

// Import automation modules
const AutonomousCommitPush = require('../autonomous-commit-push.js');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

class ContinuousImprovementMonitor {
  constructor() {
    this.metrics = {};
    this.history = [];
    this.isMonitoring = false;
    this.interval = null;
  }

  async start() {
    if (this.isMonitoring) {
      logger.info('⚠️ Monitor is already running');
      return;
    }

    this.isMonitoring = true;
    logger.info('🚀 Starting continuous improvement monitor...');

    // Start monitoring loop
    this.interval = setInterval(async () => {
      await this.collectMetrics();
    }, 300000); // Every 5 minutes

    // Initial collection
    await this.collectMetrics();

    // Schedule daily improvements
    cron.schedule('0 2 * * *', () => {
      this.triggerImprovements();
    });

    logger.info('✅ Continuous improvement monitor started');
  }

  async stop() {
    if (!this.isMonitoring) {
      logger.info('⚠️ Monitor is not running');
      return;
    }

    this.isMonitoring = false;
    if (this.interval) {
      clearInterval(this.interval);
    }
    logger.info('🛑 Continuous improvement monitor stopped');
  }

  async collectMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        codeQuality: await this.getCodeQualityMetrics(),
        performance: await this.getPerformanceMetrics(),
        security: await this.getSecurityMetrics(),
        dependencies: await this.getDependencyMetrics(),
        build: await this.getBuildMetrics(),
        alerts: [],
      };

      // Check for issues and generate alerts
      this.checkForIssues(metrics);

      this.metrics = metrics;
      this.history.push(metrics);

      // Keep only last 100 entries
      if (this.history.length > 100) {
        this.history = this.history.slice(-100);
      }

      // Save metrics
      await this.saveMetrics(metrics);

      logger.info('📊 Metrics collected successfully');
    } catch (error) {
      logger.error('❌ Error collecting metrics:', error);
    }
  }

  async getCodeQualityMetrics() {
    const metrics = {
      lintErrors: 0,
      lintWarnings: 0,
      testCoverage: 0,
      complexity: 0,
    };

    try {
      // Run ESLint
      try {
        const lintResult = execSync('npm run lint', { encoding: 'utf8' });
        const errorMatches = lintResult.match(/error/g);
        const warningMatches = lintResult.match(/warning/g);
        metrics.lintErrors = errorMatches ? errorMatches.length : 0;
        metrics.lintWarnings = warningMatches ? warningMatches.length : 0;
      } catch (error) {
        const output = error.stdout || error.stderr || '';
        const errorMatches = output.match(/error/g);
        const warningMatches = output.match(/warning/g);
        metrics.lintErrors = errorMatches ? errorMatches.length : 0;
        metrics.lintWarnings = warningMatches ? warningMatches.length : 0;
      }

      // Run test coverage
      try {
        const coverageResult = execSync('npm run test:coverage', {
          encoding: 'utf8',
        });
        const coverageMatch = coverageResult.match(/(\d+)%/);
        metrics.testCoverage = coverageMatch ? parseInt(coverageMatch[1]) : 0;
      } catch (error) {
        logger.warn('Failed to get test coverage:', error.message);
      }
    } catch (error) {
      logger.error('Error getting code quality metrics:', error);
    }

    return metrics;
  }

  async getPerformanceMetrics() {
    const metrics = {
      bundleSize: 0,
      loadTime: 0,
      lighthouseScore: 0,
    };

    try {
      // Analyze bundle size
      try {
        const buildResult = execSync('npm run build', { encoding: 'utf8' });
        // Parse bundle size from build output
        const sizeMatch = buildResult.match(/Bundle Size: (\d+\.?\d*) KB/);
        metrics.bundleSize = sizeMatch ? parseFloat(sizeMatch[1]) : 0;
      } catch (error) {
        logger.warn('Failed to analyze bundle size:', error.message);
      }

      // Run Lighthouse audit
      try {
        const lighthouseResult = execSync(
          'npx lighthouse http://localhost:3000 --output=json --chrome-flags="--headless"',
          { encoding: 'utf8' },
        );
        const data = JSON.parse(lighthouseResult);
        metrics.lighthouseScore = Math.round(
          data.lhr.categories.performance.score * 100,
        );
        metrics.loadTime =
          data.lhr.audits['first-contentful-paint'].numericValue;
      } catch (error) {
        logger.warn('Failed to run Lighthouse audit:', error.message);
      }
    } catch (error) {
      logger.error('Error getting performance metrics:', error);
    }

    return metrics;
  }

  async getSecurityMetrics() {
    const metrics = {
      vulnerabilities: 0,
      outdatedPackages: 0,
    };

    try {
      // Run security audit
      try {
        const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
        const data = JSON.parse(auditResult);
        metrics.vulnerabilities = Object.keys(
          data.vulnerabilities || {},
        ).length;
      } catch (error) {
        logger.warn('Failed to run security audit:', error.message);
      }

      // Check for outdated packages
      try {
        const outdatedResult = execSync('npm outdated --json', {
          encoding: 'utf8',
        });
        const data = JSON.parse(outdatedResult);
        metrics.outdatedPackages = Object.keys(data).length;
      } catch (error) {
        logger.warn('Failed to check outdated packages:', error.message);
      }
    } catch (error) {
      logger.error('Error getting security metrics:', error);
    }

    return metrics;
  }

  async getDependencyMetrics() {
    const metrics = {
      totalPackages: 0,
      outdatedPackages: 0,
      vulnerablePackages: 0,
    };

    try {
      // Count total packages
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies,
      };
      metrics.totalPackages = Object.keys(allDeps).length;

      // Check outdated packages
      try {
        const outdatedResult = execSync('npm outdated --json', {
          encoding: 'utf8',
        });
        const data = JSON.parse(outdatedResult);
        metrics.outdatedPackages = Object.keys(data).length;
      } catch (error) {
        // No outdated packages
      }

      // Check vulnerable packages
      try {
        const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
        const data = JSON.parse(auditResult);
        metrics.vulnerablePackages = Object.keys(
          data.vulnerabilities || {},
        ).length;
      } catch (error) {
        // No vulnerabilities
      }
    } catch (error) {
      logger.error('Error getting dependency metrics:', error);
    }

    return metrics;
  }

  async getBuildMetrics() {
    const metrics = {
      buildTime: 0,
      buildSuccess: false,
      lastBuild: null,
    };

    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: 'pipe' });
      metrics.buildTime = Date.now() - startTime;
      metrics.buildSuccess = true;
      metrics.lastBuild = new Date().toISOString();
    } catch (error) {
      metrics.buildSuccess = false;
      logger.warn('Build failed:', error.message);
    }

    return metrics;
  }

  checkForIssues(metrics) {
    // Code quality issues
    if (metrics.codeQuality.lintErrors > 10) {
      metrics.alerts.push({
        type: 'code_quality',
        severity: 'high',
        message: `High number of lint errors: ${metrics.codeQuality.lintErrors}`,
        action: 'Run lint fixes and review code quality',
      });
    }

    if (metrics.codeQuality.testCoverage < 80) {
      metrics.alerts.push({
        type: 'code_quality',
        severity: 'medium',
        message: `Low test coverage: ${metrics.codeQuality.testCoverage}%`,
        action: 'Add more tests to improve coverage',
      });
    }

    // Performance issues
    if (metrics.performance.bundleSize > 1000) {
      metrics.alerts.push({
        type: 'performance',
        severity: 'medium',
        message: `Large bundle size: ${metrics.performance.bundleSize} KB`,
        action: 'Optimize bundle size and implement code splitting',
      });
    }

    if (metrics.performance.lighthouseScore < 80) {
      metrics.alerts.push({
        type: 'performance',
        severity: 'high',
        message: `Low Lighthouse score: ${metrics.performance.lighthouseScore}`,
        action: 'Optimize performance and accessibility',
      });
    }

    // Security issues
    if (metrics.security.vulnerabilities > 0) {
      metrics.alerts.push({
        type: 'security',
        severity: 'high',
        message: `Security vulnerabilities detected: ${metrics.security.vulnerabilities}`,
        action: 'Run npm audit fix and review dependencies',
      });
    }

    if (metrics.security.outdatedPackages > 10) {
      metrics.alerts.push({
        type: 'security',
        severity: 'medium',
        message: `Many outdated packages: ${metrics.security.outdatedPackages}`,
        action: 'Update dependencies to latest versions',
      });
    }
  }

  async saveMetrics(metrics) {
    try {
      const reportPath = path.join(__dirname, 'monitor-report.json');
      await fs.promises.writeFile(reportPath, JSON.stringify(metrics, null, 2));
    } catch (error) {
      logger.error('Failed to save metrics:', error);
    }
  }

  async triggerImprovements() {
    logger.info('🔄 Triggering automated improvements...');

    try {
      // Trigger autonomous commit and push
      const commitPush = new AutonomousCommitPush();
      await commitPush.execute();

      logger.info('✅ Automated improvements completed');
    } catch (error) {
      logger.error('❌ Failed to trigger improvements:', error);
    }
  }

  async monitorCodeQuality() {
    logger.info('🔍 Monitoring code quality...');

    try {
      const metrics = await this.getCodeQualityMetrics();

      if (metrics.lintErrors > 0) {
        logger.warn(`Found ${metrics.lintErrors} lint errors`);
        // Could trigger automatic fixes here
      }

      if (metrics.testCoverage < 80) {
        logger.warn(`Test coverage is ${metrics.testCoverage}%`);
        // Could trigger test generation here
      }
    } catch (error) {
      logger.error('Error monitoring code quality:', error);
    }
  }

  // File watcher for immediate feedback
  watchFiles() {
    const chokidar = require('chokidar');

    const watcher = chokidar.watch(
      [
        'src/**/*.{ts,tsx,js,jsx}',
        'pages/**/*.{ts,tsx,js,jsx}',
        'components/**/*.{ts,tsx,js,jsx}',
      ],
      {
        ignored: /node_modules/,
        persistent: true,
      },
    );

    watcher.on('change', (filename) => {
      logger.info(`File changed: ${filename}`);

      // Trigger immediate code quality check for changed files
      if (
        filename.endsWith('.tsx') ||
        filename.endsWith('.ts') ||
        filename.endsWith('.js')
      ) {
        const timeoutId = setTimeout(() => {
          this.monitorCodeQuality();
        }, 5000); // Wait 5 seconds for file to be saved
      }
    });

    logger.info('👀 File watcher started');
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new ContinuousImprovementMonitor();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      monitor.start();
      break;
    case 'stop':
      monitor.stop();
      break;
    case 'watch':
      monitor.watchFiles();
      break;
    case 'improve':
      monitor.triggerImprovements();
      break;
    default:
      logger.info('Usage: node monitor.js [start|stop|watch|improve]');
  }
}

module.exports = ContinuousImprovementMonitor;
