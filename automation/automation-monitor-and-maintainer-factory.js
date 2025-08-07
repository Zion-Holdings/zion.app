#!/usr/bin/env node

/**
 * Automation Monitor and Maintainer Factory
 * 
 * This system continuously monitors all project automation factories, agents, scripts, and cron jobs.
 * It keeps running systems that are working fine and stops/fixes those with errors.
 * 
 * Features: * - Comprehensive health monitoring of all automation systems
 * - Automatic error detection and recovery
 * - Performance optimization
 * - System maintenance and cleanup
 * - Real-time reporting and alerting
 */

const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');
const cron = require('node-cron');

class AutomationMonitorAndMaintainerFactory {
  constructor() {
    this.config = {
      healthCheckInterval: '*/2 * * * *', // Every 2 minutes
      errorThreshold: 3,
      performanceThreshold: 0.8,
      maxRetries: 3,
      backupInterval: '0 */6 * * *', // Every 6 hours
      cleanupInterval: '0 2 * * *', // Daily at 2 AM
      reportInterval: '0 */1 * * *' // Every hour
    };
    
    this.monitoringData = {
      factories: [],
      agents: [],
      scripts: [],
      cronJobs: [],
      errors: [],
      performance: {},
      health: {}
    };
    
    this.logDir = path.join(__dirname, 'logs');
    this.reportsDir = path.join(__dirname, 'reports');
    this.healthReportsDir = path.join(__dirname, 'health-reports');
    this.errorLogsDir = path.join(__dirname, 'error-logs');
    this.backupsDir = path.join(__dirname, 'backups');
    this.monitoringDataDir = path.join(__dirname, 'monitoring-data');
    this.maintenanceLogsDir = path.join(__dirname, 'maintenance-logs');
    
    this.ensureDirectories();
  }

  async ensureDirectories() {
    const dirs = [
      this.logDir, this.reportsDir, this.healthReportsDir,
      this.errorLogsDir, this.backupsDir, this.monitoringDataDir,
      this.maintenanceLogsDir
    ];
    
    for (const dir of dirs) {
      await fs.ensureDir(dir);
    }
  }

  async log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}\n`;
    
    await fs.appendFile(path.join(this.logDir, `${type}.log`), logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
  }

  async discoverAutomationComponents() {
    await this.log('🔍 Discovering automation components...');
    
    try {
      // Discover factories
      const factoryFiles = await this.findFiles('**/factory*.js');
      this.monitoringData.factories = factoryFiles.map(file => ({
        path: file,
        name: path.basename(file, '.js'),
        status: 'unknown',
        lastCheck: null,
        errors: [],
        performance: {}
      }));

      // Discover agents
      const agentFiles = await this.findFiles('**/agent*.js');
      this.monitoringData.agents = agentFiles.map(file => ({
        path: file,
        name: path.basename(file, '.js'),
        status: 'unknown',
        lastCheck: null,
        errors: [],
        performance: {}
      }));

      // Discover scripts
      const scriptFiles = await this.findFiles('**/*.js').filter(file => 
        !file.includes('node_modules') && 
        !file.includes('.next') &&
        (file.includes('automation') || file.includes('script') || file.includes('fix'))
      );
      this.monitoringData.scripts = scriptFiles.map(file => ({
        path: file,
        name: path.basename(file, '.js'),
        status: 'unknown',
        lastCheck: null,
        errors: [],
        performance: {}
      }));

      // Discover cron jobs
      const cronFiles = await this.findFiles('**/*.sh').filter(file => 
        file.includes('cron') || file.includes('automation')
      );
      this.monitoringData.cronJobs = cronFiles.map(file => ({
        path: file,
        name: path.basename(file, '.sh'),
        status: 'unknown',
        lastCheck: null,
        errors: [],
        performance: {}
      }));

      await this.log(`✅ Discovered ${this.monitoringData.factories.length} factories, ${this.monitoringData.agents.length} agents, ${this.monitoringData.scripts.length} scripts, ${this.monitoringData.cronJobs.length} cron jobs`);
      
    } catch (error) {
      await this.log(`❌ Error discovering components: ${error.message}`, 'error');
    }
  }

  async findFiles(pattern) {
    const glob = require('glob');
    return new Promise((resolve, reject) => {
      glob(pattern, { ignore: ['node_modules/**', '.next/**'] }, (err, files) => {
        if (err) reject(err);
        else resolve(files);
      });
    });
  }

  async checkComponentHealth(component) {
    try {
      const startTime = Date.now();
      
      // Check if file exists
      if (!await fs.pathExists(component.path)) {
        component.status = 'missing';
        component.errors.push('File not found');
        return;
      }

      // Check syntax
      const syntaxCheck = await this.checkSyntax(component.path);
      if (!syntaxCheck.valid) {
        component.status = 'syntax_error';
        component.errors.push(`Syntax error: ${syntaxCheck.error}`);
        return;
      }

      // Check dependencies
      const dependencyCheck = await this.checkDependencies(component.path);
      if (!dependencyCheck.valid) {
        component.status = 'dependency_error';
        component.errors.push(`Dependency error: ${dependencyCheck.error}`);
        return;
      }

      // Check if running (for processes)
      if (component.type === 'agent' || component.type === 'factory') {
        const runningCheck = await this.checkIfRunning(component.path);
        component.status = runningCheck.running ? 'running' : 'stopped';
        if (!runningCheck.running) {
          component.errors.push('Process not running');
        }
      } else {
        component.status = 'healthy';
      }

      const endTime = Date.now();
      component.performance.lastCheckTime = endTime - startTime;
      component.lastCheck = new Date().toISOString();

    } catch (error) {
      component.status = 'error';
      component.errors.push(`Health check error: ${error.message}`);
    }
  }

  async checkSyntax(filePath) {
    return new Promise((resolve) => {
      exec(`node -c "${filePath}"`, (error) => {
        resolve({
          valid: !error,
          error: error ? error.message : null
        });
      });
    });
  }

  async checkDependencies(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      const requireMatches = content.match(/require\(['"]([^'"]+)['"]\)/g);
      
      if (!requireMatches) {
        return { valid: true, error: null };
      }

      for (const match of requireMatches) {
        const moduleName = match.match(/require\(['"]([^'"]+)['"]\)/)[1];
        
        // Skip built-in modules
        if (moduleName.startsWith('.') || moduleName.startsWith('/')) {
          continue;
        }

        try {
          require.resolve(moduleName);
        } catch (error) {
          return {
            valid: false,
            error: `Missing dependency: ${moduleName}`
          };
        }
      }

      return { valid: true, error: null };
    } catch (error) {
      return {
        valid: false,
        error: `Dependency check error: ${error.message}`
      };
    }
  }

  async checkIfRunning(filePath) {
    return new Promise((resolve) => {
      exec(`ps aux | grep "${path.basename(filePath)}" | grep -v grep`, (error, stdout) => {
        resolve({
          running: !error && stdout.trim().length > 0,
          processes: stdout.trim().split('\n').filter(line => line.length > 0)
        });
      });
    });
  }

  async fixComponent(component) {
    await this.log(`🔧 Fixing component: ${component.name}`);
    
    try {
      if (component.status === 'syntax_error') {
        await this.fixSyntaxErrors(component);
      } else if (component.status === 'dependency_error') {
        await this.fixDependencies(component);
      } else if (component.status === 'stopped') {
        await this.restartComponent(component);
      }

      // Re-check health after fixing
      await this.checkComponentHealth(component);
      
      if (component.status === 'healthy' || component.status === 'running') {
        await this.log(`✅ Successfully fixed ${component.name}`);
      } else {
        await this.log(`❌ Failed to fix ${component.name}`, 'error');
      }

    } catch (error) {
      await this.log(`❌ Error fixing ${component.name}: ${error.message}`, 'error');
    }
  }

  async fixSyntaxErrors(component) {
    try {
      const content = await fs.readFile(component.path, 'utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = fixedContent
        .replace(/const \.\/.*? = require\('path';/g, 'const path = require(\'path\');')
        .replace(/console\.log\('.*?';/g, 'console.log(\'Fixed syntax\');')
        .replace(/require\(['"]\.\/.*?['"]\)/g, 'require(\'./path\')')
        .replace(/module\.exports = \{/g, 'module.exports = {')
        .replace(/,\s*,/g, ',')
        .replace(/,\s*}/g, '}');

      await fs.writeFile(component.path, fixedContent);
      component.errors = component.errors.filter(error => !error.includes('Syntax error'));
      
    } catch (error) {
      throw new Error(`Syntax fix error: ${error.message}`);
    }
  }

  async fixDependencies(component) {
    try {
      const content = await fs.readFile(component.path, 'utf8');
      let fixedContent = content;

      // Fix common dependency issues
      fixedContent = fixedContent
        .replace(/require\(['"]fs-extra['"]\)/g, 'const fs = require(\'fs-extra\')')
        .replace(/require\(['"]path['"]\)/g, 'const path = require(\'path\')')
        .replace(/require\(['"]child_process['"]\)/g, 'const { exec } = require(\'child_process\')')
        .replace(/require\(['"]node-cron['"]\)/g, 'const cron = require(\'node-cron\')');

      await fs.writeFile(component.path, fixedContent);
      component.errors = component.errors.filter(error => !error.includes('Dependency error'));
      
    } catch (error) {
      throw new Error(`Dependency fix error: ${error.message}`);
    }
  }

  async restartComponent(component) {
    try {
      if (component.type === 'agent' || component.type === 'factory') {
        // Kill existing process
        await this.killProcess(component.path);
        
        // Start new process
        await this.startProcess(component.path);
      }
      
    } catch (error) {
      throw new Error(`Restart error: ${error.message}`);
    }
  }

  async killProcess(filePath) {
    return new Promise((resolve) => {
      exec(`pkill -f "${path.basename(filePath)}"`, () => {
        resolve();
      });
    });
  }

  async startProcess(filePath) {
    return new Promise((resolve, reject) => {
      exec(`node "${filePath}"`, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  async monitorAllComponents() {
    await this.log('🔍 Starting comprehensive component monitoring...');
    
    const allComponents = [
      ...this.monitoringData.factories.map(f => ({ ...f, type: 'factory' })),
      ...this.monitoringData.agents.map(a => ({ ...a, type: 'agent' })),
      ...this.monitoringData.scripts.map(s => ({ ...s, type: 'script' })),
      ...this.monitoringData.cronJobs.map(c => ({ ...c, type: 'cron' }))
    ];

    for (const component of allComponents) {
      await this.checkComponentHealth(component);
      
      if (component.status !== 'healthy' && component.status !== 'running') {
        await this.log(`⚠️ Component ${component.name} has issues: ${component.status}`, 'warn');
        
        if (component.errors.length > 0) {
          await this.fixComponent(component);
        }
      }
    }

    await this.generateHealthReport();
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.monitoringData.factories.length + this.monitoringData.agents.length + 
  this.monitoringData.scripts.length + this.monitoringData.cronJobs.length,
        healthy: 0,
        running: 0,
        errors: 0,
        fixed: 0
      },
      components: {
        factories: this.monitoringData.factories,
        agents: this.monitoringData.agents,
        scripts: this.monitoringData.scripts,
        cronJobs: this.monitoringData.cronJobs
      }
    };

    // Calculate summary
    const allComponents = [
      ...this.monitoringData.factories,
      ...this.monitoringData.agents,
      ...this.monitoringData.scripts,
      ...this.monitoringData.cronJobs
    ];

    report.summary.healthy = allComponents.filter(c => c.status === 'healthy').length;
    report.summary.running = allComponents.filter(c => c.status === 'running').length;
    report.summary.errors = allComponents.filter(c => c.status !== 'healthy' && c.status !== 'running').length;

    const reportPath = path.join(this.healthReportsDir, `health-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    await this.log(`📊 Health report generated: ${reportPath}`);
    await this.log(`📈 Summary: ${report.summary.healthy + report.summary.running} healthy, ${report.summary.errors} with issues`);
  }

  async startMonitoring() {
    await this.log('🚀 Starting Automation Monitor and Maintainer Factory...');
    
    // Initial discovery
    await this.discoverAutomationComponents();
    
    // Start health check cron job
    cron.schedule(this.config.healthCheckInterval, async () => {
      await this.monitorAllComponents();
    });

    // Start backup cron job
    cron.schedule(this.config.backupInterval, async () => {
      await this.createBackup();
    });

    // Start cleanup cron job
    cron.schedule(this.config.cleanupInterval, async () => {
      await this.performCleanup();
    });

    // Start report generation cron job
    cron.schedule(this.config.reportInterval, async () => {
      await this.generateComprehensiveReport();
    });

    await this.log('✅ Automation Monitor and Maintainer Factory started successfully');
  }

  async createBackup() {
    try {
      const backupDir = path.join(this.backupsDir, `backup-${Date.now()}`);
      await fs.ensureDir(backupDir);
      
      // Backup monitoring data
      await fs.writeFile(
        path.join(backupDir, 'monitoring-data.json'),
        JSON.stringify(this.monitoringData, null, 2)
      );
      
      // Backup logs
      await fs.copy(this.logDir, path.join(backupDir, 'logs'));
      
      await this.log(`💾 Backup created: ${backupDir}`);
    } catch (error) {
      await this.log(`❌ Backup error: ${error.message}`, 'error');
    }
  }

  async performCleanup() {
    try {
      // Clean old logs (keep last 7 days)
      const logFiles = await fs.readdir(this.logDir);
      const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
      
      for (const file of logFiles) {
        const filePath = path.join(this.logDir, file);
        const stats = await fs.stat(filePath);
        if (stats.mtime.getTime() < weekAgo) {
          await fs.remove(filePath);
        }
      }
      
      // Clean old reports (keep last 30 days)
      const reportFiles = await fs.readdir(this.reportsDir);
      const monthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      
      for (const file of reportFiles) {
        const filePath = path.join(this.reportsDir, file);
        const stats = await fs.stat(filePath);
        if (stats.mtime.getTime() < monthAgo) {
          await fs.remove(filePath);
        }
      }
      
      await this.log('🧹 Cleanup completed');
    } catch (error) {
      await this.log(`❌ Cleanup error: ${error.message}`, 'error');
    }
  }

  async generateComprehensiveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: 'active',
      monitoringData: this.monitoringData,
      performance: {
        cpu: process.cpuUsage(),
        memory: process.memoryUsage(),
        uptime: process.uptime()
      }
    };

    const reportPath = path.join(this.reportsDir, `comprehensive-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    await this.log(`📊 Comprehensive report generated: ${reportPath}`);
  }
}

// Export the factory
module.exports = AutomationMonitorAndMaintainerFactory;

// If run directly, start the factory
if (require.main === module) {
  const factory = new AutomationMonitorAndMaintainerFactory();
  factory.startMonitoring().catch(console.error);
}