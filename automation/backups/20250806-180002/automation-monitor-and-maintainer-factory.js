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

const fs = require(('fs'););
const path = require(('path'););
const { spawn, exec } = require('child_process');
const cron = require(('node-cron'););
const { EventEmitter } = require('events');

class AutomationMonitorAndMaintainerFactory extends EventEmitter {
  constructor() {
    super();
    this.factoryId = `automation-monitor-maintainer-${Date.now()}`;
    this.status = 'initializing';
    this.agents = new Map();
    this.monitoringData = {
      systems: new Map(),
      healthMetrics: new Map(),
      errorLogs: new Map(),
      performanceMetrics: new Map(),
      maintenanceHistory: []
    };
    
    this.config = {
      healthCheckInterval: '*/2 * * * *', // Every 2 minutes
      errorThreshold: 3,
      performanceThreshold: 0.8,
      maxRetries: 3,
      backupInterval: '0 */6 * * *', // Every 6 hours
      cleanupInterval: '0 2 * * *', // Daily at 2 AM
      reportInterval: '0 */1 * * *' // Every hour
    };
    
    this.cronJobs = {};
    this.initializeFactory();
  }

  initializeFactory() {
    console.log(`🏭 [${this.factoryId}] Initializing Automation Monitor and Maintainer Factory...`);
    
    this.createMonitoringAgents();
    this.setupCronJobs();
    this.loadSystemRegistry();
    
    this.status = 'active';
    console.log(`✅ [${this.factoryId}] Factory initialized successfully`);
  }

  createMonitoringAgents() {
    const agentTypes = [
      'system-health-monitor',
      'error-detection-agent',
      'performance-optimizer',
      'maintenance-scheduler',
      'recovery-agent',
      'backup-manager',
      'cleanup-agent',
      'report-generator'
    ];

    agentTypes.forEach(agentType => {
      const agent = this.createAgent(agentType);
      this.agents.set(agentType, agent);
    });
  }

  createAgent(type) {
    return {
      id: `${type}-${Date.now()}`,
      type: type,
      status: 'active',
      capabilities: this.getAgentCapabilities(type),
      performance: {
        accuracy: 0.95,
        speed: 100,
        reliability: 0.98
      },
      execute: async (task) => {
        return await this.executeAgentTask(type, task);
      }
    };
  }

  getAgentCapabilities(type) {
    const capabilities = {
      'system-health-monitor': ['health-check', 'system-scan', 'metrics-collection'],
      'error-detection-agent': ['error-scan', 'issue-identification', 'alert-generation'],
      'performance-optimizer': ['performance-analysis', 'optimization-suggestions', 'resource-management'],
      'maintenance-scheduler': ['maintenance-planning', 'schedule-management', 'priority-assessment'],
      'recovery-agent': ['error-recovery', 'system-restart', 'backup-restoration'],
      'backup-manager': ['backup-creation', 'backup-verification', 'backup-cleanup'],
      'cleanup-agent': ['file-cleanup', 'log-rotation', 'temp-cleanup'],
      'report-generator': ['report-creation', 'data-analysis', 'trend-identification']
    };
    return capabilities[type] || [];
  }

  async executeAgentTask(type, task) {
    switch (type) {
      case 'system-health-monitor':
        return await this.performSystemHealthCheck();
      case 'error-detection-agent':
        return await this.detectErrors();
      case 'performance-optimizer':
        return await this.optimizePerformance();
      case 'maintenance-scheduler':
        return await this.scheduleMaintenance();
      case 'recovery-agent':
        return await this.performRecovery();
      case 'backup-manager':
        return await this.manageBackups();
      case 'cleanup-agent':
        return await this.performCleanup();
      case 'report-generator':
        return await this.generateReport();
      default: throw new Error(`Unknown agent type: ${type}`);
    }
  }

  setupCronJobs() {
    this.cronJobs = {
      'health-check': {
        schedule: this.config.healthCheckInterval,
        job: () => this.comprehensiveHealthCheck(),
        description: 'Comprehensive health check of all automation systems'
      },
      'error-detection': {
        schedule: '*/1 * * * *', // Every minute
        job: () => this.detectAndHandleErrors(),
        description: 'Continuous error detection and handling'
      },
      'performance-optimization': {
        schedule: '*/5 * * * *', // Every 5 minutes
        job: () => this.optimizeSystemPerformance(),
        description: 'Performance optimization and resource management'
      },
      'maintenance-scheduling': {
        schedule: '0 */2 * * *', // Every 2 hours
        job: () => this.scheduleSystemMaintenance(),
        description: 'Maintenance scheduling and planning'
      },
      'backup-management': {
        schedule: this.config.backupInterval,
        job: () => this.manageSystemBackups(),
        description: 'Backup creation and management'
      },
      'cleanup-operations': {
        schedule: this.config.cleanupInterval,
        job: () => this.performSystemCleanup(),
        description: 'System cleanup and maintenance'
      },
      'report-generation': {
        schedule: this.config.reportInterval,
        job: () => this.generateSystemReport(),
        description: 'System report generation and analysis'
      }
    };

    Object.entries(this.cronJobs).forEach(([name, job]) => {
      cron.schedule(job.schedule, () => {
        try {
          job.job();
        } catch (error) {
          console.error(`❌ Error in cron job ${name}:`, error);
          this.logError(name, error);
        }
      });
      console.log(`✅ Started cron job: ${name} (${job.description})`);
    });
  }

  loadSystemRegistry() {
    this.systemRegistry = {
      factories: this.scanForFactories(),
      agents: this.scanForAgents(),
      scripts: this.scanForScripts(),
      cronJobs: this.scanForCronJobs()
    };
    
    console.log(`📋 Loaded system registry: ${this.systemRegistry.factories.length} factories, ${this.systemRegistry.agents.length} agents, ${this.systemRegistry.scripts.length} scripts, ${this.systemRegistry.cronJobs.length} cron jobs`);
  }

  scanForFactories() {
    const factories = [];
    const automationDir = path.join(__dirname);
    
    try {
      const files = fs.readdirSync(automationDir);
      files.forEach(file => {
        if (file.includes('-factory.js') && !file.includes('monitor')) {
          factories.push({
            name: file,
            path: path.join(automationDir, file),
            type: 'factory'
          });
        }
      });
    } catch (error) {
      console.error('Error scanning for factories: ', error);
    }
    
    return factories;
  }

  scanForAgents() {
    const agents = [];
    const agentsDir = path.join(__dirname, 'agents');
    
    try {
      if (fs.existsSync(agentsDir)) {
        const files = fs.readdirSync(agentsDir);
        files.forEach(file => {
          if (file.endsWith('.js')) {
            agents.push({
              name: file,
              path: path.join(agentsDir, file),
              type: 'agent'
            });
          }
        });
      }
    } catch (error) {
      console.error('Error scanning for agents: ', error);
    }
    
    return agents;
  }

  scanForScripts() {
    const scripts = [];
    const automationDir = __dirname;
    
    try {
      const files = fs.readdirSync(automationDir);
      files.forEach(file => {
        if (file.endsWith('.js') && !file.includes('factory') && !file.includes('agent')) {
          scripts.push({
            name: file,
            path: path.join(automationDir, file),
            type: 'script'
          });
        }
      });
    } catch (error) {
      console.error('Error scanning for scripts: ', error);
    }
    
    return scripts;
  }

  scanForCronJobs() {
    const cronJobs = [];
    const cronDir = path.join(__dirname, 'cron-jobs');
    
    try {
      if (fs.existsSync(cronDir)) {
        const files = fs.readdirSync(cronDir);
        files.forEach(file => {
          if (file.endsWith('.sh')) {
            cronJobs.push({
              name: file,
              path: path.join(cronDir, file),
              type: 'cron'
            });
          }
        });
      }
    } catch (error) {
      console.error('Error scanning for cron jobs: ', error);
    }
    
    return cronJobs;
  }

  async comprehensiveHealthCheck() {
    console.log('🏥 Starting comprehensive health check...');
    
    const healthReport = {
      timestamp: new Date().toISOString(),
      systems: [],
      overallHealth: 0,
      issues: [],
      recommendations: []
    };

    // Check factories
    for (const factory of this.systemRegistry.factories) {
      const health = await this.checkSystemHealth(factory);
      healthReport.systems.push(health);
    }

    // Check agents
    for (const agent of this.systemRegistry.agents) {
      const health = await this.checkSystemHealth(agent);
      healthReport.systems.push(health);
    }

    // Check scripts
    for (const script of this.systemRegistry.scripts) {
      const health = await this.checkSystemHealth(script);
      healthReport.systems.push(health);
    }

    // Check cron jobs
    for (const cronJob of this.systemRegistry.cronJobs) {
      const health = await this.checkSystemHealth(cronJob);
      healthReport.systems.push(health);
    }

    // Calculate overall health
    const healthy = healthReport.systems.filter(s => s.status === 'healthy');
    healthReport.overallHealth = healthy.length / healthReport.systems.length;

    // Generate recommendations
    healthReport.recommendations = this.generateRecommendations(healthReport);

    // Save health report
    await this.saveHealthReport(healthReport);

    console.log(`📊 Health check completed: ${healthy.length}/${healthReport.systems.length} systems healthy (${(healthReport.overallHealth * 100).toFixed(1)}%)`);

    return healthReport;
  }

  async checkSystemHealth(system) {
    const health = {
      name: system.name,
      type: system.type,
      status: 'unknown',
      lastCheck: new Date().toISOString(),
      errors: [],
      performance: 0,
      recommendations: []
    };

    try {
      // Check if file exists
      if (!fs.existsSync(system.path)) {
        health.status = 'missing';
        health.errors.push('File not found');
        return health;
      }

      // Check file syntax
      const syntaxCheck = await this.checkFileSyntax(system.path);
      if (!syntaxCheck.valid) {
        health.status = 'error';
        health.errors.push(`Syntax error: ${syntaxCheck.error}`);
        return health;
      }

      // Check if process is running (for factories and agents)
      if (system.type === 'factory' || system.type === 'agent') {
        const processCheck = await this.checkProcessStatus(system.name);
        health.status = processCheck.running ? 'healthy' : 'stopped';
        health.performance = processCheck.performance || 0;
      } else {
        health.status = 'healthy';
        health.performance = 1.0;
      }

      // Check for common issues
      const issues = await this.detectCommonIssues(system);
      if (issues.length > 0) {
        health.errors.push(...issues);
        if (health.status === 'healthy') {
          health.status = 'warning';
        }
      }

    } catch (error) {
      health.status = 'error';
      health.errors.push(`Health check failed: ${error.message}`);
    }

    return health;
  }

  async checkFileSyntax(filePath) {
    return new Promise((resolve) => {
      exec(`node -c "${filePath}"`, (error) => {
        resolve({
          valid: !error,
          error: error ? error.message : null
        });
      });
    });
  }

  async checkProcessStatus(processName) {
    return new Promise((resolve) => {
      exec(`pgrep -f "${processName}"`, (error, stdout) => {
        resolve({
          running: !error && stdout.trim() !== '',
          performance: !error ? 1.0 : 0.0
        });
      });
    });
  }

  async detectCommonIssues(system) {
    const issues = [];
    
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      
      // Check for common error patterns
      const errorPatterns = [
        /console\.error/,
        /throw new Error/,
        /process\.exit/,
        /undefined/,
        /null/,
        /NaN/
      ];

      errorPatterns.forEach(pattern => {
        if (pattern.test(content)) {
          issues.push(`Potential issue detected: ${pattern.source}`);
        }
      });

      // Check for missing dependencies
      const requirePattern = /require\(['"]([^'"]+)['"]\)/g;
      const requires = [...content.matchAll(requirePattern)].map(match => match[1]);
      
      for (const req of requires) {
        if (!req.startsWith('.') && !req.startsWith('/')) {
          try {
            require.resolve(req);
          } catch (error) {
            issues.push(`Missing dependency: ${req}`);
          }
        }
      }

    } catch (error) {
      issues.push(`File read error: ${error.message}`);
    }

    return issues;
  }

  generateRecommendations(healthReport) {
    const recommendations = [];

    // Systems with errors
    const errorSystems = healthReport.systems.filter(s => s.status === 'error');
    if (errorSystems.length > 0) {
      recommendations.push({
        type: 'critical',
        message: `Fix ${errorSystems.length} systems with errors`,
        systems: errorSystems.map(s => s.name)
      });
    }

    // Systems with warnings
    const warningSystems = healthReport.systems.filter(s => s.status === 'warning');
    if (warningSystems.length > 0) {
      recommendations.push({
        type: 'warning',
        message: `Review ${warningSystems.length} systems with warnings`,
        systems: warningSystems.map(s => s.name)
      });
    }

    // Stopped systems
    const stoppedSystems = healthReport.systems.filter(s => s.status === 'stopped');
    if (stoppedSystems.length > 0) {
      recommendations.push({
        type: 'info',
        message: `Restart ${stoppedSystems.length} stopped systems`,
        systems: stoppedSystems.map(s => s.name)
      });
    }

    // Performance optimization
    const lowPerformanceSystems = healthReport.systems.filter(s => s.performance < 0.8);
    if (lowPerformanceSystems.length > 0) {
      recommendations.push({
        type: 'optimization',
        message: `Optimize ${lowPerformanceSystems.length} low-performance systems`,
        systems: lowPerformanceSystems.map(s => s.name)
      });
    }

    return recommendations;
  }

  async detectAndHandleErrors() {
    console.log('🔍 Detecting and handling errors...');
    
    const healthReport = await this.comprehensiveHealthCheck();
    const errorSystems = healthReport.systems.filter(s => s.status === 'error');
    
    for (const system of errorSystems) {
      await this.handleSystemError(system);
    }
  }

  async handleSystemError(system) {
    console.log(`🛠️ Handling error in system: ${system.name}`);
    
    try {
      // Stop the system if it's running
      await this.stopSystem(system);
      
      // Attempt to fix the error
      const fixed = await this.fixSystemError(system);
      
      if (fixed) {
        // Restart the system
        await this.startSystem(system);
        console.log(`✅ Successfully fixed and restarted: ${system.name}`);
      } else {
        console.log(`❌ Failed to fix: ${system.name}`);
        this.logError(system.name, new Error('Failed to fix system error'));
      }
    } catch (error) {
      console.error(`❌ Error handling system ${system.name}:`, error);
      this.logError(system.name, error);
    }
  }

  async stopSystem(system) {
    return new Promise((resolve) => {
      exec(`pkill -f "${system.name}"`, (error) => {
        resolve(!error);
      });
    });
  }

  async startSystem(system) {
    return new Promise((resolve) => {
      const child = spawn('node', [system.path], {
        stdio: 'pipe',
        detached: true
      });
      
      child.on('error', (error) => {
        console.error(`❌ Failed to start ${system.name}:`, error);
        resolve(false);
      });
      
      child.on('spawn', () => {
        console.log(`✅ Started ${system.name}`);
        resolve(true);
      });
    });
  }

  async fixSystemError(system) {
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      let fixed = false;
      
      // Fix common syntax errors
      let fixedContent = content;
      
      // Fix missing semicolons
      fixedContent = fixedContent.replace(/([^;])\n/g, '$1;\n');
      
      // Fix missing quotes
      fixedContent = fixedContent.replace(/require\(([^'"]+)\)/g, 'require(\'$1\')');
      
      // Fix console.log statements
      fixedContent = fixedContent.replace(/console\.log\(([^)]+)\)/g, 'console.log($1)');
      
      // Fix template literals
      fixedContent = fixedContent.replace(/\$\{([^}]+)\}/g, '${$1}');
      
      if (fixedContent !== content) {
        fs.writeFileSync(system.path, fixedContent);
        fixed = true;
      }
      
      return fixed;
    } catch (error) {
      console.error(`❌ Failed to fix ${system.name}:`, error);
      return false;
    }
  }

  async optimizeSystemPerformance() {
    console.log('⚡ Optimizing system performance...');
    
    const healthReport = await this.comprehensiveHealthCheck();
    const lowPerformanceSystems = healthReport.systems.filter(s => s.performance < 0.8);
    
    for (const system of lowPerformanceSystems) {
      await this.optimizeSystem(system);
    }
  }

  async optimizeSystem(system) {
    console.log(`🔧 Optimizing system: ${system.name}`);
    
    try {
      const content = fs.readFileSync(system.path, 'utf8');
      let optimized = false;
      
      // Optimize imports
      let optimizedContent = content;
      
      // Remove unused imports
      const importPattern = /const\s+(\w+)\s*=\s*require\([^)]+\)/g;
      const imports = [...optimizedContent.matchAll(importPattern)];
      
      for (const importMatch of imports) {
        const importName = importMatch[1];
        const usagePattern = new RegExp(`\\b${importName}\\b`, 'g');
        const usages = optimizedContent.match(usagePattern);
        
        if (!usages || usages.length <= 1) {
          optimizedContent = optimizedContent.replace(importMatch[0] + '\n', '');
          optimized = true;
        }
      }
      
      // Optimize loops and conditions
      optimizedContent = optimizedContent.replace(/for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*(\w+)\.length\s*;\s*i\+\+\)/g, 'for (const item of $1)');
      
      if (optimizedContent !== content) {
        fs.writeFileSync(system.path, optimizedContent);
        console.log(`✅ Optimized: ${system.name}`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to optimize ${system.name}:`, error);
    }
  }

  async scheduleSystemMaintenance() {
    console.log('📅 Scheduling system maintenance...');
    
    const maintenanceTasks = [
      {
        name: 'Cleanup temporary files',
        schedule: '0 2 * * *',
        action: () => this.cleanupTempFiles()
      },
      {
        name: 'Rotate log files',
        schedule: '0 3 * * *',
        action: () => this.rotateLogFiles()
      },
      {
        name: 'Update dependencies',
        schedule: '0 4 * * 0',
        action: () => this.updateDependencies()
      },
      {
        name: 'Backup systems',
        schedule: '0 1 * * *',
        action: () => this.backupSystems()
      }
    ];

    for (const task of maintenanceTasks) {
      cron.schedule(task.schedule, () => {
        try {
          task.action();
        } catch (error) {
          console.error(`❌ Maintenance task failed: ${task.name}`, error);
        }
      });
    }
  }

  async manageSystemBackups() {
    console.log('💾 Managing system backups...');
    
    const backupDir = path.join(__dirname, 'backups', new Date().toISOString().split('T')[0]);
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // Backup all systems
    for (const system of [...this.systemRegistry.factories, ...this.systemRegistry.agents, ...this.systemRegistry.scripts]) {
      try {
        const backupPath = path.join(backupDir, system.name);
        fs.copyFileSync(system.path, backupPath);
      } catch (error) {
        console.error(`❌ Failed to backup ${system.name}:`, error);
      }
    }
    
    console.log(`✅ Backup completed: ${backupDir}`);
  }

  async performSystemCleanup() {
    console.log('🧹 Performing system cleanup...');
    
    // Cleanup temporary files
    await this.cleanupTempFiles();
    
    // Rotate log files
    await this.rotateLogFiles();
    
    // Cleanup old backups
    await this.cleanupOldBackups();
    
    console.log('✅ System cleanup completed');
  }

  async cleanupTempFiles() {
    const tempDirs = ['temp', 'cache', 'logs'];
    
    for (const dir of tempDirs) {
      const tempDir = path.join(__dirname, dir);
      if (fs.existsSync(tempDir)) {
        try {
          const files = fs.readdirSync(tempDir);
          for (const file of files) {
            const filePath = path.join(tempDir, file);
            const stats = fs.statSync(filePath);
            const age = Date.now() - stats.mtime.getTime();
            
            // Delete files older than 7 days
            if (age > 7 * 24 * 60 * 60 * 1000) {
              fs.unlinkSync(filePath);
            }
          }
        } catch (error) {
          console.error(`❌ Failed to cleanup ${dir}:`, error);
        }
      }
    }
  }

  async rotateLogFiles() {
    const logDir = path.join(__dirname, 'logs');
    
    if (fs.existsSync(logDir)) {
      try {
        const files = fs.readdirSync(logDir);
        for (const file of files) {
          if (file.endsWith('.log')) {
            const filePath = path.join(logDir, file);
            const stats = fs.statSync(filePath);
            const size = stats.size;
            
            // Rotate files larger than 10MB
            if (size > 10 * 1024 * 1024) {
              const rotatedPath = filePath + '.' + new Date().toISOString().split('T')[0];
              fs.renameSync(filePath, rotatedPath);
            }
          }
        }
      } catch (error) {
        console.error('❌ Failed to rotate log files: ', error);
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
          
          // Delete backups older than 30 days
          if (age > 30 * 24 * 60 * 60 * 1000) {
            fs.rmSync(dirPath, { recursive: true });
          }
        }
      } catch (error) {
        console.error('❌ Failed to cleanup old backups: ', error);
      }
    }
  }

  async generateSystemReport() {
    console.log('📊 Generating system report...');
    
    const healthReport = await this.comprehensiveHealthCheck();
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalSystems: healthReport.systems.length,
        healthySystems: healthReport.systems.filter(s => s.status === 'healthy').length,
        errorSystems: healthReport.systems.filter(s => s.status === 'error').length,
        warningSystems: healthReport.systems.filter(s => s.status === 'warning').length,
        stoppedSystems: healthReport.systems.filter(s => s.status === 'stopped').length,
        overallHealth: healthReport.overallHealth
      },
      systems: healthReport.systems,
      recommendations: healthReport.recommendations,
      performance: {
        averagePerformance: healthReport.systems.reduce((sum, s) => sum + s.performance, 0) / healthReport.systems.length,
        topPerformers: healthReport.systems.filter(s => s.performance > 0.9).map(s => s.name),
        lowPerformers: healthReport.systems.filter(s => s.performance < 0.7).map(s => s.name)
      }
    };
    
    // Save report
    const reportDir = path.join(__dirname, 'reports');
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const reportPath = path.join(reportDir, `system-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📄 Report saved: ${reportPath}`);
    return report;
  }

  async saveHealthReport(report) {
    const healthDir = path.join(__dirname, 'health-reports');
    if (!fs.existsSync(healthDir)) {
      fs.mkdirSync(healthDir, { recursive: true });
    }
    
    const reportPath = path.join(healthDir, `health-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  }

  logError(system, error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      system: system,
      error: error.message,
      stack: error.stack
    };
    
    const errorDir = path.join(__dirname, 'error-logs');
    if (!fs.existsSync(errorDir)) {
      fs.mkdirSync(errorDir, { recursive: true });
    }
    
    const errorPath = path.join(errorDir, `error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
  }

  start() {
    console.log('🚀 Starting Automation Monitor and Maintainer Factory...');
    this.status = 'running';
    console.log('🎉 Automation Monitor and Maintainer Factory is now running!');
  }

  stop() {
    console.log('🛑 Stopping Automation Monitor and Maintainer Factory...');
    this.status = 'stopped';
    
    // Stop all cron jobs
    Object.keys(this.cronJobs).forEach(name => {
      cron.getTasks().forEach(task => {
        if (task.name === name) {
          task.stop();
        }
      });
    });
    
    console.log('✅ Automation Monitor and Maintainer Factory stopped');
  }

  getStatus() {
    return {
      factoryId: this.factoryId,
      status: this.status,
      agents: this.agents.size,
      systems: this.systemRegistry ? Object.keys(this.systemRegistry).length : 0,
      lastHealthCheck: this.monitoringData.healthMetrics.get('lastCheck') || 'Never'
    };
  }
}

// Export the factory
module.exports = AutomationMonitorAndMaintainerFactory;

// Start the factory if this file is run directly
if (require.main === module) {
  const factory = new AutomationMonitorAndMaintainerFactory();
  factory.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    factory.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    factory.stop();
    process.exit(0);
  });
}
