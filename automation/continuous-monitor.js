#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');

class ContinuousMonitor {
  constructor() {
    this.monitorId = 'continuous-monitor';
    this.version = '1.0.0';
    this.status = 'initializing';
    this.projectRoot = process.cwd();
    this.automationDir = path.join(this.projectRoot, 'automation');
    this.monitoredSystems = new Map();
    this.improvements = new Map();
    this.alerts = [];
    this.metrics = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      improvementsApplied: 0,
      systemsMonitored: 0,
      lastCheck: null
    };
    
    this.config = this.loadConfig();
    this.ensureDirectories();
  }

  loadConfig() {
    const configPath = path.join(this.automationDir, 'continuous-monitor-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    return {
      checkInterval: 60000, // 1 minute
      improvementInterval: 300000, // 5 minutes
      alertInterval: 300000, // 5 minutes
      maxImprovements: 10,
      performanceThreshold: 0.8,
      errorThreshold: 0.1,
      autoImprove: true,
      autoAlert: true,
      autoCommit: true,
      backupBeforeImprovement: true,
      monitoringEnabled: true,
      improvementEnabled: true,
      alertingEnabled: true
    };
  }

  ensureDirectories() {
    const directories = [
      'continuous-monitor-logs',
      'continuous-monitor-reports',
      'continuous-monitor-improvements',
      'continuous-monitor-alerts',
      'continuous-monitor-status'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(this.automationDir, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing Continuous Monitor...');
    
    try {
      // Discover automation systems
      await this.discoverAutomationSystems();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start improvements
      if (this.config.improvementEnabled) {
        this.startImprovements();
      }
      
      // Start alerting
      if (this.config.alertingEnabled) {
        this.startAlerting();
      }
      
      // Start cron jobs
      this.startCronJobs();
      
      this.status = 'running';
      console.log('✅ Continuous Monitor initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing monitor:', error);
      this.status = 'error';
      throw error;
    }
  }

  async discoverAutomationSystems() {
    console.log('🔍 Discovering automation systems...');
    
    const systems = [
      'frontend-sync-autonomous-factory.js',
      'frontend-sync-automation-orchestrator.js',
      'autonomous-agent-orchestrator.js',
      'autonomous-factory-generator.js',
      'enhanced-automation-orchestrator.js',
      'continuous-automation-orchestrator.js'
    ];
    
    for (const system of systems) {
      const systemPath = path.join(this.automationDir, system);
      if (fs.existsSync(systemPath)) {
        this.monitoredSystems.set(system, {
          path: systemPath,
          status: 'discovered',
          lastCheck: null,
          performance: 0,
          errors: [],
          improvements: []
        });
        console.log(`✅ Discovered: ${system}`);
      }
    }
    
    this.metrics.systemsMonitored = this.monitoredSystems.size;
  }

  startMonitoring() {
    if (!this.config.monitoringEnabled) {
      return;
    }
    
    console.log('👀 Starting continuous monitoring...');
    
    setInterval(() => {
      this.performMonitoring();
    }, this.config.checkInterval);
  }

  async performMonitoring() {
    console.log('🔍 Performing monitoring check...');
    
    this.metrics.totalChecks++;
    this.metrics.lastCheck = new Date().toISOString();
    
    try {
      for (const [name, system] of this.monitoredSystems) {
        await this.checkSystem(name, system);
      }
      
      this.metrics.successfulChecks++;
      console.log('✅ Monitoring check completed');
      
    } catch (error) {
      this.metrics.failedChecks++;
      console.error('❌ Monitoring check failed:', error);
    }
  }

  async checkSystem(name, system) {
    try {
      // Check if system file exists
      if (!fs.existsSync(system.path)) {
        system.status = 'missing';
        system.errors.push(`System file not found: ${system.path}`);
        return;
      }
      
      // Check if system is running (if it has a PID file)
      const pidFile = path.join(this.automationDir, 'frontend-sync-pids', `${name.replace('.js', '')}.pid`);
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, 'utf8').trim();
        try {
          execSync(`ps -p ${pid}`, { stdio: 'pipe' });
          system.status = 'running';
        } catch (error) {
          system.status = 'stopped';
          system.errors.push(`Process not running: PID ${pid}`);
        }
      } else {
        system.status = 'unknown';
      }
      
      // Check system performance
      await this.checkSystemPerformance(name, system);
      
      // Check for errors
      await this.checkSystemErrors(name, system);
      
      system.lastCheck = new Date().toISOString();
      
    } catch (error) {
      system.status = 'error';
      system.errors.push(`Check failed: ${error.message}`);
    }
  }

  async checkSystemPerformance(name, system) {
    // Analyze system performance based on logs and metrics
    const logPath = path.join(this.automationDir, 'frontend-sync-logs', `${name.replace('.js', '')}.log`);
    
    if (fs.existsSync(logPath)) {
      const logContent = fs.readFileSync(logPath, 'utf8');
      const lines = logContent.split('\n');
      
      // Calculate performance metrics
      const errorCount = lines.filter(line => line.includes('ERROR') || line.includes('❌')).length;
      const successCount = lines.filter(line => line.includes('✅') || line.includes('SUCCESS')).length;
      const totalLines = lines.length;
      
      if (totalLines > 0) {
        system.performance = successCount / (successCount + errorCount);
      }
    }
  }

  async checkSystemErrors(name, system) {
    // Check for recent errors in logs
    const logPath = path.join(this.automationDir, 'frontend-sync-logs', `${name.replace('.js', '')}.log`);
    
    if (fs.existsSync(logPath)) {
      const logContent = fs.readFileSync(logPath, 'utf8');
      const lines = logContent.split('\n').slice(-100); // Last 100 lines
      
      const recentErrors = lines.filter(line => 
        line.includes('ERROR') || 
        line.includes('❌') || 
        line.includes('Exception') ||
        line.includes('Error:')
      );
      
      if (recentErrors.length > 0) {
        system.errors = recentErrors.slice(-5); // Keep last 5 errors
      }
    }
  }

  startImprovements() {
    if (!this.config.improvementEnabled) {
      return;
    }
    
    console.log('🔧 Starting continuous improvements...');
    
    setInterval(() => {
      this.performImprovements();
    }, this.config.improvementInterval);
  }

  async performImprovements() {
    console.log('🔧 Performing improvements...');
    
    try {
      for (const [name, system] of this.monitoredSystems) {
        if (system.performance < this.config.performanceThreshold || system.errors.length > 0) {
          await this.improveSystem(name, system);
        }
      }
      
      console.log('✅ Improvements completed');
      
    } catch (error) {
      console.error('❌ Improvements failed:', error);
    }
  }

  async improveSystem(name, system) {
    console.log(`🔧 Improving system: ${name}`);
    
    try {
      // Create backup before improvement
      if (this.config.backupBeforeImprovement) {
        await this.createBackup(name, system);
      }
      
      // Generate improvements
      const improvements = await this.generateImprovements(name, system);
      
      // Apply improvements
      for (const improvement of improvements) {
        await this.applyImprovement(name, system, improvement);
        this.metrics.improvementsApplied++;
      }
      
      system.improvements.push(...improvements);
      
      // Auto commit if enabled
      if (this.config.autoCommit) {
        await this.autoCommit(`Improved ${name}`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to improve ${name}:`, error);
    }
  }

  async createBackup(name, system) {
    const backupDir = path.join(this.automationDir, 'continuous-monitor-improvements', 'backups');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupDir, `${name}-${timestamp}.js`);
    
    fs.copyFileSync(system.path, backupPath);
    console.log(`💾 Created backup: ${backupPath}`);
  }

  async generateImprovements(name, system) {
    const improvements = [];
    
    // Performance improvements
    if (system.performance < this.config.performanceThreshold) {
      improvements.push({
        type: 'performance',
        description: 'Optimize system performance',
        priority: 'high'
      });
    }
    
    // Error recovery improvements
    if (system.errors.length > 0) {
      improvements.push({
        type: 'error-recovery',
        description: 'Add error handling and recovery',
        priority: 'critical'
      });
    }
    
    // Code quality improvements
    improvements.push({
      type: 'code-quality',
      description: 'Improve code quality and maintainability',
      priority: 'medium'
    });
    
    return improvements.slice(0, this.config.maxImprovements);
  }

  async applyImprovement(name, system, improvement) {
    console.log(`🔧 Applying improvement to ${name}: ${improvement.type}`);
    
    try {
      const systemCode = fs.readFileSync(system.path, 'utf8');
      let improvedCode = systemCode;
      
      switch (improvement.type) {
        case 'performance':
          improvedCode = this.applyPerformanceImprovements(systemCode);
          break;
        case 'error-recovery':
          improvedCode = this.applyErrorRecoveryImprovements(systemCode);
          break;
        case 'code-quality':
          improvedCode = this.applyCodeQualityImprovements(systemCode);
          break;
      }
      
      if (improvedCode !== systemCode) {
        fs.writeFileSync(system.path, improvedCode);
        console.log(`✅ Applied ${improvement.type} improvement to ${name}`);
      }
      
    } catch (error) {
      console.error(`❌ Failed to apply improvement to ${name}:`, error);
    }
  }

  applyPerformanceImprovements(code) {
    // Add performance monitoring
    const performanceMonitoring = `
  // Performance monitoring
  const startTime = Date.now();
  const memoryUsage = process.memoryUsage();
  
  // ... existing code ...
  
  // Performance logging
  const endTime = Date.now();
  const executionTime = endTime - startTime;
  console.log(\`⚡ Performance: \${executionTime}ms, Memory: \${memoryUsage.heapUsed / 1024 / 1024}MB\`);
`;
    
    // Add performance monitoring to main functions
    return code.replace(/async\s+(\w+)\s*\([^)]*\)\s*{/g, (match, funcName) => {
      return `${match}
  const startTime = Date.now();
  const memoryUsage = process.memoryUsage();
  
  try {
    // ... existing code ...
    
    const endTime = Date.now();
    const executionTime = endTime - startTime;
    console.log(\`⚡ ${funcName} performance: \${executionTime}ms, Memory: \${memoryUsage.heapUsed / 1024 / 1024}MB\`);
  } catch (error) {
    console.error(\`❌ ${funcName} failed: \${error.message}\`);
    throw error;
  }`;
    });
  }

  applyErrorRecoveryImprovements(code) {
    // Add comprehensive error handling
    const errorHandling = `
  // Error handling and recovery
  process.on('uncaughtException', (error) => {
    console.error('❌ Uncaught Exception:', error);
    // Attempt graceful shutdown
    this.shutdown().catch(console.error);
  });
  
  process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  });
`;
    
    // Add error handling to constructor
    return code.replace(/constructor\s*\([^)]*\)\s*{/g, (match) => {
      return `${match}
    ${errorHandling}`;
    });
  }

  applyCodeQualityImprovements(code) {
    // Add JSDoc comments
    const jsdocTemplate = `
/**
 * @description ${this.extractClassName(code)} - Automated system for continuous improvement
 * @version ${this.extractVersion(code) || '1.0.0'}
 * @author Continuous Monitor
 * @since ${new Date().toISOString().split('T')[0]}
 */
`;
    
    // Add JSDoc to class
    return code.replace(/class\s+(\w+)/g, (match, className) => {
      return `${jsdocTemplate}${match}`;
    });
  }

  extractClassName(code) {
    const match = code.match(/class\s+(\w+)/);
    return match ? match[1] : 'UnknownClass';
  }

  extractVersion(code) {
    const match = code.match(/version\s*=\s*['"]([^'"]+)['"]/);
    return match ? match[1] : null;
  }

  startAlerting() {
    if (!this.config.alertingEnabled) {
      return;
    }
    
    console.log('🚨 Starting alerting system...');
    
    setInterval(() => {
      this.checkAlerts();
    }, this.config.alertInterval);
  }

  async checkAlerts() {
    console.log('🚨 Checking for alerts...');
    
    for (const [name, system] of this.monitoredSystems) {
      // Check for critical issues
      if (system.status === 'error' || system.errors.length > 5) {
        await this.createAlert(name, 'critical', `System ${name} has critical issues`);
      }
      
      // Check for performance issues
      if (system.performance < this.config.performanceThreshold) {
        await this.createAlert(name, 'warning', `System ${name} has performance issues`);
      }
      
      // Check for stopped systems
      if (system.status === 'stopped') {
        await this.createAlert(name, 'info', `System ${name} is stopped`);
      }
    }
  }

  async createAlert(name, level, message) {
    const alert = {
      id: uuidv4(),
      name,
      level,
      message,
      timestamp: new Date().toISOString(),
      acknowledged: false
    };
    
    this.alerts.push(alert);
    
    const alertPath = path.join(this.automationDir, 'continuous-monitor-alerts', `alert-${alert.id}.json`);
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
    
    console.log(`🚨 Alert created: ${level.toUpperCase()} - ${message}`);
  }

  startCronJobs() {
    console.log('⏰ Starting cron jobs...');
    
    // Generate reports every hour
    cron.schedule('0 * * * *', () => {
      this.generateReport();
    });
    
    // Cleanup old data daily
    cron.schedule('0 2 * * *', () => {
      this.cleanup();
    });
    
    // Health check every 10 minutes
    cron.schedule('*/10 * * * *', () => {
      this.performHealthCheck();
    });
  }

  async generateReport() {
    console.log('📊 Generating monitoring report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      systems: Array.from(this.monitoredSystems.entries()).map(([name, system]) => ({
        name,
        status: system.status,
        performance: system.performance,
        errorCount: system.errors.length,
        lastCheck: system.lastCheck
      })),
      alerts: this.alerts.length,
      improvements: this.metrics.improvementsApplied
    };
    
    const reportPath = path.join(this.automationDir, 'continuous-monitor-reports', `report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('✅ Monitoring report generated');
  }

  async cleanup() {
    console.log('🧹 Cleaning up old data...');
    
    // Clean up old reports (keep last 7 days)
    const reportsDir = path.join(this.automationDir, 'continuous-monitor-reports');
    if (fs.existsSync(reportsDir)) {
      const files = fs.readdirSync(reportsDir);
      const now = Date.now();
      const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days
      
      for (const file of files) {
        const filePath = path.join(reportsDir, file);
        const stats = fs.statSync(filePath);
        
        if (now - stats.mtime.getTime() > maxAge) {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted old report: ${file}`);
        }
      }
    }
    
    // Clean up old alerts (keep last 3 days)
    const alertsDir = path.join(this.automationDir, 'continuous-monitor-alerts');
    if (fs.existsSync(alertsDir)) {
      const files = fs.readdirSync(alertsDir);
      const now = Date.now();
      const maxAge = 3 * 24 * 60 * 60 * 1000; // 3 days
      
      for (const file of files) {
        const filePath = path.join(alertsDir, file);
        const stats = fs.statSync(filePath);
        
        if (now - stats.mtime.getTime() > maxAge) {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted old alert: ${file}`);
        }
      }
    }
  }

  async performHealthCheck() {
    console.log('🏥 Performing health check...');
    
    const health = {
      timestamp: new Date().toISOString(),
      status: this.status,
      systemsMonitored: this.monitoredSystems.size,
      activeSystems: Array.from(this.monitoredSystems.values()).filter(s => s.status === 'running').length,
      totalAlerts: this.alerts.length,
      metrics: this.metrics
    };
    
    const healthPath = path.join(this.automationDir, 'continuous-monitor-status', 'health.json');
    fs.writeFileSync(healthPath, JSON.stringify(health, null, 2));
    
    console.log('✅ Health check completed');
  }

  async autoCommit(message) {
    try {
      execSync(`git add .`, { cwd: this.projectRoot });
      execSync(`git commit -m "${message}"`, { cwd: this.projectRoot });
      console.log(`💾 Auto-committed: ${message}`);
    } catch (error) {
      console.warn(`⚠️  Auto-commit failed: ${error.message}`);
    }
  }

  getStatus() {
    return {
      monitorId: this.monitorId,
      version: this.version,
      status: this.status,
      systemsMonitored: this.monitoredSystems.size,
      metrics: this.metrics,
      alerts: this.alerts.length
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Continuous Monitor...');
    
    this.status = 'stopped';
    console.log('✅ Continuous Monitor shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const monitor = new ContinuousMonitor();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await monitor.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await monitor.shutdown();
    process.exit(0);
  });
  
  monitor.initialize().catch(error => {
    console.error('❌ Monitor initialization failed:', error);
    process.exit(1);
  });
}

module.exports = ContinuousMonitor; 