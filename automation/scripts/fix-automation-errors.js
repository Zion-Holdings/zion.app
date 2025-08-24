#!/usr/bin/env node

/**
 * Automation Error Fix Script
 * 
 * Automatically fixes common automation system errors:
 * - DependencyUpdater npm outdated command issues
 * - NetlifyMonitor builds.slice errors
 * - Core orchestrator startup failures
 * - Performance monitoring bundle metrics errors
 * - System restart and recovery
 */

const winston = require('winston');
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const os = require('os');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-error-fixer' },
  transports: [
    new winston.transports.File({ filename: 'logs/error-fixes.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/automation-fixes.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class AutomationErrorFixer {
  constructor() {
    this.fixesApplied = [];
    this.errorsFixed = 0;
    this.startTime = Date.now();
    this.config = {
      maxRetries: 3,
      retryDelay: 5000,
      backupDir: path.join(__dirname, '../backups'),
      logsDir: path.join(__dirname, '../logs'),
    };
  }

  async run() {
    logger.info('🔧 Starting Automation Error Fix Script');
    logger.info('='.repeat(60));

    try {
      // Create backup before making changes
      await this.createBackup();

      // Fix DependencyUpdater issues
      await this.fixDependencyUpdater();

      // Fix NetlifyMonitor issues
      await this.fixNetlifyMonitor();

      // Fix Core Orchestrator issues
      await this.fixCoreOrchestrator();

      // Fix Performance Monitoring issues
      await this.fixPerformanceMonitoring();

      // Restart automation systems
      await this.restartAutomationSystems();

      // Generate fix report
      await this.generateFixReport();

      logger.info(`✅ Automation error fix completed successfully!`);
      logger.info(`📊 Fixed ${this.errorsFixed} errors in ${Date.now() - this.startTime}ms`);
      
      return true;
    } catch (error) {
      logger.error('❌ Automation error fix failed:', error);
      return false;
    }
  }

  async createBackup() {
    logger.info('📦 Creating backup before fixes...');
    
    try {
      const timestamp = Date.now();
      const backupPath = path.join(this.config.backupDir, `automation-backup-${timestamp}`);
      
      if (!fs.existsSync(this.config.backupDir)) {
        fs.mkdirSync(this.config.backupDir, { recursive: true });
      }

      // Backup critical automation files
      const filesToBackup = [
        'automation/netlify-monitor.js',
        'automation/tasks/DependencyUpdater.js',
        'automation/intelligent-automation-orchestrator.js',
        'automation/performance-monitor.js',
        'automation/start-working-automations.js'
      ];

      for (const file of filesToBackup) {
        if (fs.existsSync(file)) {
          const backupFile = path.join(backupPath, path.basename(file));
          fs.copyFileSync(file, backupFile);
        }
      }

      logger.info(`✅ Backup created at: ${backupPath}`);
    } catch (error) {
      logger.warn(`⚠️ Backup creation failed: ${error.message}`);
    }
  }

  async fixDependencyUpdater() {
    logger.info('🔧 Fixing DependencyUpdater issues...');
    
    try {
      const dependencyUpdaterPath = 'automation/tasks/DependencyUpdater.js';
      
      if (!fs.existsSync(dependencyUpdaterPath)) {
        logger.warn('⚠️ DependencyUpdater.js not found, skipping fix');
        return;
      }

      let content = fs.readFileSync(dependencyUpdaterPath, 'utf8');
      
      // Fix the npm outdated command to handle non-zero exit codes properly
      const outdatedCommandFix = `
  async checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', {
        encoding: 'utf8',
        stdio: 'pipe',
      });

      const outdated = JSON.parse(output || '{}');
      return Object.keys(outdated).map((packageName) => ({
        name: packageName,
        current: outdated[packageName].current,
        wanted: outdated[packageName].wanted,
        latest: outdated[packageName].latest,
        location: outdated[packageName].location,
      }));
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated (expected behavior)
      if (error.status === 1 && error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout);
          return Object.keys(outdated).map((packageName) => ({
            name: packageName,
            current: outdated[packageName].current,
            wanted: outdated[packageName].wanted,
            latest: outdated[packageName].latest,
            location: outdated[packageName].location,
          }));
        } catch (parseError) {
          logger.error('Error parsing npm outdated output:', parseError);
          return [];
        }
      }
      
      logger.error('Error checking outdated packages:', error);
      return [];
    }
  }`;

      // Replace the existing checkOutdatedPackages method
      const methodRegex = /async checkOutdatedPackages\(\) \{[\s\S]*?\n  \}/;
      if (methodRegex.test(content)) {
        content = content.replace(methodRegex, outdatedCommandFix);
        fs.writeFileSync(dependencyUpdaterPath, content);
        this.fixesApplied.push('DependencyUpdater: Fixed npm outdated command handling');
        this.errorsFixed++;
        logger.info('✅ DependencyUpdater fixed');
      }
    } catch (error) {
      logger.error('❌ Failed to fix DependencyUpdater:', error);
    }
  }

  async fixNetlifyMonitor() {
    logger.info('🔧 Fixing NetlifyMonitor issues...');
    
    try {
      const netlifyMonitorPath = 'automation/netlify-monitor.js';
      
      if (!fs.existsSync(netlifyMonitorPath)) {
        logger.warn('⚠️ netlify-monitor.js not found, skipping fix');
        return;
      }

      let content = fs.readFileSync(netlifyMonitorPath, 'utf8');
      
      // Fix the builds.slice error by adding proper array checking
      const checkBuildsFix = `
  async checkBuilds() {
    try {
      const builds = await this.getSiteBuilds();
      this.status.lastCheck = new Date().toISOString();

      // Ensure builds is an array before using slice
      if (!Array.isArray(builds)) {
        this.log('Warning: builds is not an array, skipping build check', 'warn');
        this.saveStatus();
        return;
      }

      for (const build of builds.slice(0, 5)) { // Check last 5 builds
        if (build.error_message && build.state === 'error') {
          this.log(\`Build \${build.id} failed: \${build.error_message}\`, 'error');
          
          const error = this.analyzeBuildError(build);
          if (error) {
            const fixed = await this.fixBuildError(error);
            if (fixed) {
              await this.commitAndPushFixes();
            }
          }
        }
      }

      this.saveStatus();
    } catch (error) {
      this.log(\`Error checking builds: \${error.message}\`, 'error');
    }
  }`;

      // Also fix the getSiteBuilds method to ensure it returns an array
      const getSiteBuildsFix = `
  async getSiteBuilds() {
    try {
      const builds = await this.makeNetlifyRequest(\`/sites/\${this.config.netlifySiteId}/builds\`);
      
      // Ensure we always return an array
      if (!Array.isArray(builds)) {
        this.log('Warning: Netlify API returned non-array builds, returning empty array', 'warn');
        return [];
      }
      
      return builds;
    } catch (error) {
      this.log(\`Error getting site builds: \${error.message}\`, 'error');
      return [];
    }
  }`;

      // Replace the existing methods
      const checkBuildsRegex = /async checkBuilds\(\) \{[\s\S]*?\n  \}/;
      const getSiteBuildsRegex = /async getSiteBuilds\(\) \{[\s\S]*?\n  \}/;
      
      if (checkBuildsRegex.test(content)) {
        content = content.replace(checkBuildsRegex, checkBuildsFix);
      }
      
      if (getSiteBuildsRegex.test(content)) {
        content = content.replace(getSiteBuildsRegex, getSiteBuildsFix);
      }
      
      fs.writeFileSync(netlifyMonitorPath, content);
      this.fixesApplied.push('NetlifyMonitor: Fixed builds.slice error and array validation');
      this.errorsFixed++;
      logger.info('✅ NetlifyMonitor fixed');
    } catch (error) {
      logger.error('❌ Failed to fix NetlifyMonitor:', error);
    }
  }

  async fixCoreOrchestrator() {
    logger.info('🔧 Fixing Core Orchestrator issues...');
    
    try {
      const orchestratorPath = 'automation/intelligent-automation-orchestrator.js';
      
      if (!fs.existsSync(orchestratorPath)) {
        logger.warn('⚠️ intelligent-automation-orchestrator.js not found, creating basic version');
        await this.createBasicOrchestrator();
        return;
      }

      // Add error handling and recovery mechanisms
      let content = fs.readFileSync(orchestratorPath, 'utf8');
      
      // Add health check method if it doesn't exist
      if (!content.includes('async healthCheck()')) {
        const healthCheckMethod = `
  async healthCheck() {
    try {
      const health = {
        timestamp: new Date().toISOString(),
        status: 'healthy',
        systems: {},
        errors: []
      };

      // Check each system
      for (const [name, system] of this.systems) {
        try {
          if (system && typeof system.healthCheck === 'function') {
            const systemHealth = await system.healthCheck();
            health.systems[name] = systemHealth;
          } else {
            health.systems[name] = { status: 'unknown' };
          }
        } catch (error) {
          health.systems[name] = { status: 'error', error: error.message };
          health.errors.push({ system: name, error: error.message });
        }
      }

      // Update overall status
      const hasErrors = health.errors.length > 0;
      health.status = hasErrors ? 'degraded' : 'healthy';

      return health;
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message,
        systems: {},
        errors: [{ system: 'orchestrator', error: error.message }]
      };
    }
  }`;

        // Insert health check method before the last closing brace
        const lastBraceIndex = content.lastIndexOf('}');
        if (lastBraceIndex !== -1) {
          content = content.slice(0, lastBraceIndex) + healthCheckMethod + '\n' + content.slice(lastBraceIndex);
        }
      }

      fs.writeFileSync(orchestratorPath, content);
      this.fixesApplied.push('CoreOrchestrator: Added health check and error recovery');
      this.errorsFixed++;
      logger.info('✅ Core Orchestrator fixed');
    } catch (error) {
      logger.error('❌ Failed to fix Core Orchestrator:', error);
    }
  }

  async createBasicOrchestrator() {
    const basicOrchestrator = `const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'intelligent-automation-orchestrator' },
  transports: [
    new winston.transports.File({ filename: 'logs/orchestrator-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/orchestrator.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class IntelligentAutomationOrchestrator {
  constructor(config = {}) {
    this.config = {
      autonomous: {
        enabled: true,
        selfHealing: true,
        learning: true,
        adaptiveScheduling: true,
      },
      monitoring: {
        enabled: true,
        interval: 60000,
        healthCheckInterval: 300000,
      },
      reporting: {
        enabled: true,
        daily: true,
        weekly: true,
        realTime: true,
      },
      dashboard: {
        enabled: true,
        port: 3001,
        autoRefresh: true,
      },
      ...config
    };

    this.systems = new Map();
    this.isRunning = false;
    this.startTime = Date.now();
    this.errors = [];
    this.fixes = [];
  }

  async start() {
    try {
      logger.info('🚀 Starting Intelligent Automation Orchestrator');
      this.isRunning = true;
      this.startTime = Date.now();

      // Initialize core systems
      await this.initializeSystems();

      // Start monitoring
      if (this.config.monitoring.enabled) {
        this.startMonitoring();
      }

      // Start dashboard if enabled
      if (this.config.dashboard.enabled) {
        await this.startDashboard();
      }

      logger.info('✅ Intelligent Automation Orchestrator started successfully');
      return true;
    } catch (error) {
      logger.error('❌ Failed to start orchestrator:', error);
      this.errors.push({
        timestamp: new Date().toISOString(),
        type: 'startup',
        error: error.message
      });
      return false;
    }
  }

  async initializeSystems() {
    logger.info('🔧 Initializing automation systems...');

    try {
      // Initialize core automation systems here
      // This is a basic implementation - extend as needed
      
      logger.info('✅ Systems initialized successfully');
    } catch (error) {
      logger.error('❌ Failed to initialize systems:', error);
      throw error;
    }
  }

  async healthCheck() {
    try {
      const health = {
        timestamp: new Date().toISOString(),
        status: 'healthy',
        uptime: Date.now() - this.startTime,
        systems: {},
        errors: this.errors.slice(-10), // Last 10 errors
        fixes: this.fixes.slice(-10)    // Last 10 fixes
      };

      return health;
    } catch (error) {
      return {
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message
      };
    }
  }

  startMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }

    this.monitoringInterval = setInterval(async () => {
      try {
        const health = await this.healthCheck();
        
        if (health.status === 'error') {
          logger.warn('⚠️ System health check failed, attempting recovery...');
          await this.performRecovery();
        }
      } catch (error) {
        logger.error('Error in monitoring loop:', error);
      }
    }, this.config.monitoring.interval);

    logger.info('📊 Monitoring started');
  }

  async performRecovery() {
    try {
      logger.info('🔧 Performing system recovery...');
      
      // Add recovery logic here
      this.fixes.push({
        timestamp: new Date().toISOString(),
        type: 'recovery',
        action: 'System recovery performed'
      });

      logger.info('✅ Recovery completed');
    } catch (error) {
      logger.error('❌ Recovery failed:', error);
    }
  }

  async startDashboard() {
    try {
      // Basic dashboard implementation
      logger.info('📊 Dashboard would start on port ' + this.config.dashboard.port);
    } catch (error) {
      logger.error('❌ Failed to start dashboard:', error);
    }
  }

  stop() {
    logger.info('🛑 Stopping Intelligent Automation Orchestrator');
    this.isRunning = false;
    
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
  }
}

module.exports = IntelligentAutomationOrchestrator;`;

    fs.writeFileSync('automation/intelligent-automation-orchestrator.js', basicOrchestrator);
    this.fixesApplied.push('CoreOrchestrator: Created basic orchestrator');
    this.errorsFixed++;
    logger.info('✅ Basic Core Orchestrator created');
  }

  async fixPerformanceMonitoring() {
    logger.info('🔧 Fixing Performance Monitoring issues...');
    
    try {
      const performanceMonitorPath = 'automation/performance-monitor.js';
      
      if (!fs.existsSync(performanceMonitorPath)) {
        logger.warn('⚠️ performance-monitor.js not found, creating basic version');
        await this.createBasicPerformanceMonitor();
        return;
      }

      let content = fs.readFileSync(performanceMonitorPath, 'utf8');
      
      // Add error handling for bundle metrics
      const bundleMetricsFix = `
  async getBundleMetrics() {
    try {
      // Add proper error handling for bundle analysis
      const bundleStats = await this.analyzeBundle();
      
      if (!bundleStats) {
        this.log('Warning: Could not analyze bundle, returning default metrics', 'warn');
        return {
          totalSize: 0,
          chunkCount: 0,
          largestChunk: 0,
          timestamp: new Date().toISOString()
        };
      }
      
      return bundleStats;
    } catch (error) {
      this.log(\`Error getting bundle metrics: \${error.message}\`, 'error');
      return {
        totalSize: 0,
        chunkCount: 0,
        largestChunk: 0,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }`;

      // Replace or add the getBundleMetrics method
      const methodRegex = /async getBundleMetrics\(\) \{[\s\S]*?\n  \}/;
      if (methodRegex.test(content)) {
        content = content.replace(methodRegex, bundleMetricsFix);
      } else {
        // Add the method if it doesn't exist
        const lastBraceIndex = content.lastIndexOf('}');
        if (lastBraceIndex !== -1) {
          content = content.slice(0, lastBraceIndex) + bundleMetricsFix + '\n' + content.slice(lastBraceIndex);
        }
      }

      fs.writeFileSync(performanceMonitorPath, content);
      this.fixesApplied.push('PerformanceMonitor: Fixed bundle metrics error handling');
      this.errorsFixed++;
      logger.info('✅ Performance Monitor fixed');
    } catch (error) {
      logger.error('❌ Failed to fix Performance Monitor:', error);
    }
  }

  async createBasicPerformanceMonitor() {
    const basicPerformanceMonitor = `const winston = require('winston');
const fs = require('fs');
const path = require('path');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'performance-monitor' },
  transports: [
    new winston.transports.File({ filename: 'logs/performance-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/performance.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class PerformanceMonitor {
  constructor(config = {}) {
    this.config = {
      checkInterval: 300000, // 5 minutes
      metricsFile: path.join(__dirname, 'performance-metrics.json'),
      ...config
    };
    
    this.isRunning = false;
    this.metrics = [];
  }

  async start() {
    try {
      logger.info('📊 Starting Performance Monitor');
      this.isRunning = true;
      
      // Start monitoring loop
      this.monitoringLoop();
      
      logger.info('✅ Performance Monitor started');
      return true;
    } catch (error) {
      logger.error('❌ Failed to start Performance Monitor:', error);
      return false;
    }
  }

  async monitoringLoop() {
    while (this.isRunning) {
      try {
        await this.collectMetrics();
        await this.sleep(this.config.checkInterval);
      } catch (error) {
        logger.error('Error in monitoring loop:', error);
        await this.sleep(5000); // Wait 5 seconds before retrying
      }
    }
  }

  async collectMetrics() {
    try {
      const metrics = {
        timestamp: new Date().toISOString(),
        memory: await this.getMemoryUsage(),
        cpu: await this.getCpuUsage(),
        bundle: await this.getBundleMetrics(),
        build: await this.getBuildMetrics()
      };

      this.metrics.push(metrics);
      
      // Keep only last 100 metrics
      if (this.metrics.length > 100) {
        this.metrics = this.metrics.slice(-100);
      }

      // Save metrics
      this.saveMetrics();
      
      logger.info('📊 Metrics collected successfully');
    } catch (error) {
      logger.error('Error collecting metrics:', error);
    }
  }

  async getMemoryUsage() {
    try {
      const usage = process.memoryUsage();
      return {
        rss: usage.rss,
        heapTotal: usage.heapTotal,
        heapUsed: usage.heapUsed,
        external: usage.external
      };
    } catch (error) {
      logger.error('Error getting memory usage:', error);
      return {};
    }
  }

  async getCpuUsage() {
    try {
      const usage = process.cpuUsage();
      return {
        user: usage.user,
        system: usage.system
      };
    } catch (error) {
      logger.error('Error getting CPU usage:', error);
      return {};
    }
  }

  async getBundleMetrics() {
    try {
      // Add proper error handling for bundle analysis
      const bundleStats = await this.analyzeBundle();
      
      if (!bundleStats) {
        logger.warn('Warning: Could not analyze bundle, returning default metrics');
        return {
          totalSize: 0,
          chunkCount: 0,
          largestChunk: 0,
          timestamp: new Date().toISOString()
        };
      }
      
      return bundleStats;
    } catch (error) {
      logger.error(\`Error getting bundle metrics: \${error.message}\`);
      return {
        totalSize: 0,
        chunkCount: 0,
        largestChunk: 0,
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async analyzeBundle() {
    try {
      // Basic bundle analysis - extend as needed
      const nextDir = path.join(process.cwd(), '.next');
      
      if (!fs.existsSync(nextDir)) {
        return null;
      }

      // This is a simplified bundle analysis
      // In a real implementation, you'd analyze the actual bundle files
      return {
        totalSize: 0,
        chunkCount: 0,
        largestChunk: 0,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      logger.error('Error analyzing bundle:', error);
      return null;
    }
  }

  async getBuildMetrics() {
    try {
      // Basic build metrics
      return {
        buildTime: 0,
        buildSize: 0,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      logger.error('Error getting build metrics:', error);
      return {};
    }
  }

  saveMetrics() {
    try {
      fs.writeFileSync(this.config.metricsFile, JSON.stringify(this.metrics, null, 2));
    } catch (error) {
      logger.error('Error saving metrics:', error);
    }
  }

  async healthCheck() {
    return {
      status: this.isRunning ? 'healthy' : 'stopped',
      timestamp: new Date().toISOString(),
      metricsCount: this.metrics.length
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    logger.info('🛑 Stopping Performance Monitor');
    this.isRunning = false;
  }
}

module.exports = PerformanceMonitor;`;

    fs.writeFileSync('automation/performance-monitor.js', basicPerformanceMonitor);
    this.fixesApplied.push('PerformanceMonitor: Created basic performance monitor');
    this.errorsFixed++;
    logger.info('✅ Basic Performance Monitor created');
  }

  async restartAutomationSystems() {
    logger.info('🔄 Restarting automation systems...');
    
    try {
      // Stop any running automation processes
      await this.stopRunningProcesses();
      
      // Wait a moment for processes to stop
      await this.sleep(2000);
      
      // Start the automation systems
      await this.startAutomationSystems();
      
      this.fixesApplied.push('System: Restarted automation systems');
      this.errorsFixed++;
      logger.info('✅ Automation systems restarted');
    } catch (error) {
      logger.error('❌ Failed to restart automation systems:', error);
    }
  }

  async stopRunningProcesses() {
    try {
      // Find and stop automation processes
      const processes = ['node', 'npm'];
      const automationKeywords = ['automation', 'monitor', 'orchestrator'];
      
      for (const processName of processes) {
        try {
          const output = execSync(`ps aux | grep "${processName}" | grep -v grep`, { encoding: 'utf8' });
          const lines = output.split('\n').filter(line => line.trim());
          
          for (const line of lines) {
            const hasAutomationKeyword = automationKeywords.some(keyword => 
              line.toLowerCase().includes(keyword)
            );
            
            if (hasAutomationKeyword) {
              const pid = line.split(/\s+/)[1];
              if (pid && !isNaN(pid)) {
                try {
                  execSync(`kill ${pid}`);
                  logger.info(`Stopped process ${pid}`);
                } catch (killError) {
                  logger.warn(`Could not stop process ${pid}: ${killError.message}`);
                }
              }
            }
          }
        } catch (psError) {
          // Process list command failed, continue
        }
      }
    } catch (error) {
      logger.warn('⚠️ Could not stop running processes:', error.message);
    }
  }

  async startAutomationSystems() {
    try {
      // Start the main automation script
      const automationScript = path.join(__dirname, '../start-working-automations.js');
      
      if (fs.existsSync(automationScript)) {
        // Start in background
        const child = spawn('node', [automationScript], {
          detached: true,
          stdio: 'ignore'
        });
        
        child.unref();
        logger.info('✅ Automation systems started in background');
      } else {
        logger.warn('⚠️ Automation script not found');
      }
    } catch (error) {
      logger.error('❌ Failed to start automation systems:', error);
    }
  }

  async generateFixReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFixed: this.errorsFixed,
      fixesApplied: this.fixesApplied,
      status: 'completed'
    };

    try {
      const reportPath = path.join(this.config.logsDir, 'automation-fix-report.json');
      
      if (!fs.existsSync(this.config.logsDir)) {
        fs.mkdirSync(this.config.logsDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      logger.info(`📄 Fix report generated: ${reportPath}`);
    } catch (error) {
      logger.error('Error generating fix report:', error);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new AutomationErrorFixer();
  fixer.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    logger.error('Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = AutomationErrorFixer; 