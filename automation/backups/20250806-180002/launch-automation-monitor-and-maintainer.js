#!/usr/bin/env node

/**
 * Automation Monitor and Maintainer Launcher
 * 
 * This script launches and manages the Automation Monitor and Maintainer Factory
 * which continuously monitors all project automation systems.
 */

const fs = require(('fs'););
const path = require(('path'););
const { spawn, exec } = require('child_process');
const cron = require(('node-cron'););

class AutomationMonitorAndMaintainerLauncher {
  constructor() {
    this.launcherId = `automation-monitor-launcher-${Date.now()}`;
    this.status = 'initializing';
    this.factory = null;
    this.config = {
      healthCheckInterval: '*/5 * * * *', // Every 5 minutes
      reportInterval: '0 */2 * * *', // Every 2 hours
      backupInterval: '0 */6 * * *', // Every 6 hours
      cleanupInterval: '0 2 * * *', // Daily at 2 AM
      maxRetries: 3,
      restartDelay: 5000 // 5 seconds
    };
    
    this.metrics = {
      startTime: null,
      healthChecks: 0,
      errorsFixed: 0,
      systemsRestarted: 0,
      reportsGenerated: 0,
      backupsCreated: 0
    };
    
    this.initializeLauncher();
  }

  initializeLauncher() {
    console.log(`🚀 [${this.launcherId}] Initializing Automation Monitor and Maintainer Launcher...`);
    
    this.setupDirectories();
    this.setupCronJobs();
    this.loadConfiguration();
    
    this.status = 'ready';
    console.log(`✅ [${this.launcherId}] Launcher initialized successfully`);
  }

  setupDirectories() {
    const directories = [
      'logs',
      'reports',
      'backups',
      'health-reports',
      'error-logs',
      'monitoring-data',
      'maintenance-logs'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`📁 Created directory: ${dir}`);
      }
    });
  }

  setupCronJobs() {
    this.cronJobs = {
      'launcher-health-check': {
        schedule: this.config.healthCheckInterval,
        job: () => this.performLauncherHealthCheck(),
        description: 'Launcher health check and monitoring'
      },
      'system-report': {
        schedule: this.config.reportInterval,
        job: () => this.generateSystemReport(),
        description: 'Generate comprehensive system report'
      },
      'system-backup': {
        schedule: this.config.backupInterval,
        job: () => this.createSystemBackup(),
        description: 'Create system backup'
      },
      'system-cleanup': {
        schedule: this.config.cleanupInterval,
        job: () => this.performSystemCleanup(),
        description: 'Perform system cleanup'
      }
    };

    Object.entries(this.cronJobs).forEach(([name, job]) => {
      cron.schedule(job.schedule, () => {
        try {
          job.job();
        } catch (error) {
          console.error(`❌ Error in launcher cron job ${name}:`, error);
          this.logError(name, error);
        }
      });
      console.log(`✅ Started launcher cron job: ${name} (${job.description})`);
    });
  }

  loadConfiguration() {
    const configPath = path.join(__dirname, 'automation-monitor-config.json');
    
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.config = { ...this.config, ...config };
        console.log('📋 Loaded configuration from file');
      } catch (error) {
        console.error('❌ Failed to load configuration: ', error);
      }
    } else {
      // Create default configuration
      this.saveConfiguration();
    }
  }

  saveConfiguration() {
    const configPath = path.join(__dirname, 'automation-monitor-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
    console.log('💾 Saved configuration to file');
  }

  async startFactory() {
    console.log('🏭 Starting Automation Monitor and Maintainer Factory...');
    
    try {
      const FactoryClass = require(('./automation-monitor-and-maintainer-factory.js'););
      this.factory = new FactoryClass();
      this.factory.start();
      
      this.metrics.startTime = new Date().toISOString();
      this.status = 'running';
      
      console.log('✅ Factory started successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to start factory: ', error);
      this.logError('factory-start', error);
      return false;
    }
  }

  async stopFactory() {
    console.log('🛑 Stopping Automation Monitor and Maintainer Factory...');
    
    try {
      if (this.factory) {
        this.factory.stop();
        this.factory = null;
      }
      
      this.status = 'stopped';
      console.log('✅ Factory stopped successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to stop factory: ', error);
      this.logError('factory-stop', error);
      return false;
    }
  }

  async restartFactory() {
    console.log('🔄 Restarting Automation Monitor and Maintainer Factory...');
    
    await this.stopFactory();
    
    // Wait before restarting
    await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
    
    const success = await this.startFactory();
    if (success) {
      this.metrics.systemsRestarted++;
      console.log('✅ Factory restarted successfully');
    }
    
    return success;
  }

  async performLauncherHealthCheck() {
    console.log('🏥 Performing launcher health check...');
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      launcherId: this.launcherId,
      status: this.status,
      factoryStatus: this.factory ? this.factory.getStatus() : null,
      metrics: this.metrics,
      issues: []
    };

    // Check launcher status
    if (this.status !== 'running') {
      healthReport.issues.push('Launcher not running');
    }

    // Check factory status
    if (!this.factory) {
      healthReport.issues.push('Factory not initialized');
    } else {
      const factoryStatus = this.factory.getStatus();
      if (factoryStatus.status !== 'running') {
        healthReport.issues.push('Factory not running');
      }
    }

    // Check system resources
    const resourceCheck = await this.checkSystemResources();
    healthReport.resources = resourceCheck;

    if (resourceCheck.memoryUsage > 0.9) {
      healthReport.issues.push('High memory usage');
    }

    if (resourceCheck.cpuUsage > 0.8) {
      healthReport.issues.push('High CPU usage');
    }

    // Save health report
    await this.saveHealthReport(healthReport);
    
    this.metrics.healthChecks++;
    
    console.log(`📊 Launcher health check completed: ${healthReport.issues.length} issues found`);
    
    return healthReport;
  }

  async checkSystemResources() {
    return new Promise((resolve) => {
      exec('ps -o %mem,%cpu -p $$', (error, stdout) => {
        if (error) {
          resolve({
            memoryUsage: 0,
            cpuUsage: 0,
            error: error.message
          });
        } else {
          const lines = stdout.trim().split('\n');
          if (lines.length > 1) {
            const [memory, cpu] = lines[1].trim().split(/\s+/);
            resolve({
              memoryUsage: parseFloat(memory) / 100,
              cpuUsage: parseFloat(cpu) / 100
            });
          } else {
            resolve({
              memoryUsage: 0,
              cpuUsage: 0
            });
          }
        }
      });
    });
  }

  async generateSystemReport() {
    console.log('📊 Generating comprehensive system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      launcher: {
        id: this.launcherId,
        status: this.status,
        metrics: this.metrics
      },
      factory: this.factory ? this.factory.getStatus() : null,
      systems: await this.scanAllSystems(),
      recommendations: []
    };

    // Generate recommendations
    if (this.metrics.errorsFixed > 0) {
      report.recommendations.push({
        type: 'info',
        message: `${this.metrics.errorsFixed} errors have been fixed automatically`
      });
    }

    if (this.metrics.systemsRestarted > 0) {
      report.recommendations.push({
        type: 'warning',
        message: `${this.metrics.systemsRestarted} systems have been restarted`
      });
    }

    // Save report
    const reportPath = path.join(__dirname, 'reports', `launcher-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.metrics.reportsGenerated++;
    
    console.log(`📄 Launcher report saved: ${reportPath}`);
    return report;
  }

  async scanAllSystems() {
    const systems = {
      factories: [],
      agents: [],
      scripts: [],
      cronJobs: []
    };

    // Scan for factories
    const automationDir = __dirname;
    try {
      const files = fs.readdirSync(automationDir);
      files.forEach(file => {
        if (file.includes('-factory.js') && !file.includes('monitor')) {
          systems.factories.push({
            name: file,
            path: path.join(automationDir, file),
            status: 'unknown'
          });
        }
      });
    } catch (error) {
      console.error('Error scanning factories: ', error);
    }

    // Scan for agents
    const agentsDir = path.join(automationDir, 'agents');
    if (fs.existsSync(agentsDir)) {
      try {
        const files = fs.readdirSync(agentsDir);
        files.forEach(file => {
          if (file.endsWith('.js')) {
            systems.agents.push({
              name: file,
              path: path.join(agentsDir, file),
              status: 'unknown'
            });
          }
        });
      } catch (error) {
        console.error('Error scanning agents: ', error);
      }
    }

    // Scan for scripts
    try {
      const files = fs.readdirSync(automationDir);
      files.forEach(file => {
        if (file.endsWith('.js') && !file.includes('factory') && !file.includes('agent') && !file.includes('launch')) {
          systems.scripts.push({
            name: file,
            path: path.join(automationDir, file),
            status: 'unknown'
          });
        }
      });
    } catch (error) {
      console.error('Error scanning scripts: ', error);
    }

    // Scan for cron jobs
    const cronDir = path.join(automationDir, 'cron-jobs');
    if (fs.existsSync(cronDir)) {
      try {
        const files = fs.readdirSync(cronDir);
        files.forEach(file => {
          if (file.endsWith('.sh')) {
            systems.cronJobs.push({
              name: file,
              path: path.join(cronDir, file),
              status: 'unknown'
            });
          }
        });
      } catch (error) {
        console.error('Error scanning cron jobs: ', error);
      }
    }

    return systems;
  }

  async createSystemBackup() {
    console.log('💾 Creating system backup...');
    
    const backupDir = path.join(__dirname, 'backups', new Date().toISOString().split('T')[0]);
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Backup all automation files
    const automationDir = __dirname;
    const backupFiles = [];
    
    try {
      const files = fs.readdirSync(automationDir);
      files.forEach(file => {
        if (file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.sh')) {
          const sourcePath = path.join(automationDir, file);
          const backupPath = path.join(backupDir, file);
          
          try {
            fs.copyFileSync(sourcePath, backupPath);
            backupFiles.push(file);
          } catch (error) {
            console.error(`❌ Failed to backup ${file}:`, error);
          }
        }
      });
      
      this.metrics.backupsCreated++;
      console.log(`✅ Backup completed: ${backupFiles.length} files backed up to ${backupDir}`);
      
    } catch (error) {
      console.error('❌ Failed to create backup: ', error);
      this.logError('backup-creation', error);
    }
  }

  async performSystemCleanup() {
    console.log('🧹 Performing system cleanup...');
    
    // Cleanup old reports
    await this.cleanupOldReports();
    
    // Cleanup old backups
    await this.cleanupOldBackups();
    
    // Cleanup old logs
    await this.cleanupOldLogs();
    
    console.log('✅ System cleanup completed');
  }

  async cleanupOldReports() {
    const reportsDir = path.join(__dirname, 'reports');
    
    if (fs.existsSync(reportsDir)) {
      try {
        const files = fs.readdirSync(reportsDir);
        for (const file of files) {
          const filePath = path.join(reportsDir, file);
          const stats = fs.statSync(filePath);
          const age = Date.now() - stats.mtime.getTime();
          
          // Delete reports older than 30 days
          if (age > 30 * 24 * 60 * 60 * 1000) {
            fs.unlinkSync(filePath);
          }
        }
      } catch (error) {
        console.error('❌ Failed to cleanup old reports: ', error);
      }
    }
  }

  async cleanupOldBackups() {
    const backupDir = path.join(__dirname, 'backups');
    
    if (fs.existsSync(backupDir)) {
      try {
        const dirs = fs.readdirSync(backupDir);
        for (const dir of dirs) {
          const dirPath = path.join(backupDir, dir);
          const stats = fs.statSync(dirPath);
          const age = Date.now() - stats.mtime.getTime();
          
          // Delete backups older than 60 days
          if (age > 60 * 24 * 60 * 60 * 1000) {
            fs.rmSync(dirPath, { recursive: true });
          }
        }
      } catch (error) {
        console.error('❌ Failed to cleanup old backups: ', error);
      }
    }
  }

  async cleanupOldLogs() {
    const logDirs = ['logs', 'error-logs', 'health-reports', 'maintenance-logs'];
    
    for (const logDir of logDirs) {
      const dirPath = path.join(__dirname, logDir);
      
      if (fs.existsSync(dirPath)) {
        try {
          const files = fs.readdirSync(dirPath);
          for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stats = fs.statSync(filePath);
            const age = Date.now() - stats.mtime.getTime();
            
            // Delete logs older than 14 days
            if (age > 14 * 24 * 60 * 60 * 1000) {
              fs.unlinkSync(filePath);
            }
          }
        } catch (error) {
          console.error(`❌ Failed to cleanup old logs in ${logDir}:`, error);
        }
      }
    }
  }

  async saveHealthReport(report) {
    const healthDir = path.join(__dirname, 'health-reports');
    if (!fs.existsSync(healthDir)) {
      fs.mkdirSync(healthDir, { recursive: true });
    }
    
    const reportPath = path.join(healthDir, `launcher-health-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  logError(context, error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context: context,
      error: error.message,
      stack: error.stack
    };
    
    const errorDir = path.join(__dirname, 'error-logs');
    if (!fs.existsSync(errorDir)) {
      fs.mkdirSync(errorDir, { recursive: true });
    }
    
    const errorPath = path.join(errorDir, `launcher-error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
  }

  getStatus() {
    return {
      launcherId: this.launcherId,
      status: this.status,
      factoryStatus: this.factory ? this.factory.getStatus() : null,
      metrics: this.metrics,
      uptime: this.metrics.startTime ? Date.now() - new Date(this.metrics.startTime).getTime() : 0
    };
  }

  async start() {
    console.log('🚀 Starting Automation Monitor and Maintainer Launcher...');
    
    const success = await this.startFactory();
    if (success) {
      this.status = 'running';
      console.log('🎉 Automation Monitor and Maintainer Launcher is now running!');
    } else {
      console.log('❌ Failed to start launcher');
    }
  }

  async stop() {
    console.log('🛑 Stopping Automation Monitor and Maintainer Launcher...');
    
    await this.stopFactory();
    this.status = 'stopped';
    
    // Stop all cron jobs
    Object.keys(this.cronJobs).forEach(name => {
      cron.getTasks().forEach(task => {
        if (task.name === name) {
          task.stop();
        }
      });
    });
    
    console.log('✅ Automation Monitor and Maintainer Launcher stopped');
  }

  async restart() {
    console.log('🔄 Restarting Automation Monitor and Maintainer Launcher...');
    
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
    await this.start();
  }
}

// Export the launcher
module.exports = AutomationMonitorAndMaintainerLauncher;

// Start the launcher if this file is run directly
if (require.main === module) {
  const launcher = new AutomationMonitorAndMaintainerLauncher();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'start':
      launcher.start();
      break;
    case 'stop':
      launcher.stop();
      break;
    case 'restart':
      launcher.restart();
      break;
    case 'status':
      console.log(JSON.stringify(launcher.getStatus(), null, 2));
      break;
    case 'health':
      launcher.performLauncherHealthCheck().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'report':
      launcher.generateSystemReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    default: launcher.start();
  }
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await launcher.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await launcher.stop();
    process.exit(0);
  });
}
