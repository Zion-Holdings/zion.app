#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class AutomationStatusChecker {
  constructor() {
    this.automationSystems = new Map();
    this.statusData = new Map();
    this.healthMetrics = new Map();
    this.performanceData = new Map();
    this.isRunning = false;
    this.logs = [];
    
    // Automation systems to monitor
    this.systemTypes = [
      'ultimate-automation-factory',
      'intelligent-automation-orchestrator',
      'continuous-improvement',
      'enhanced-diversification',
      'intelligent-agent-orchestrator',
      'master-automation-coordinator'
    ];
  }

  async initialize() {
    console.log('📊 Initializing Automation Status Checker...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Initialize status monitoring
      await this.initializeStatusMonitoring();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start performance tracking
      this.startPerformanceTracking();
      
      this.isRunning = true;
      console.log('✅ Automation Status Checker initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Automation Status Checker:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'status-data',
      'health-logs',
      'performance-logs',
      'system-logs',
      'reports'
    ];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, dir);
      try {
        await fs.mkdir(dirPath, { recursive: true });
      } catch (error) {
        // Directory might already exist
      }
    }
  }

  async initializeStatusMonitoring() {
    console.log('📊 Initializing status monitoring...');
    
    for (const systemType of this.systemTypes) {
      await this.initializeSystemMonitoring(systemType);
    }
  }

  async initializeSystemMonitoring(systemType) {
    console.log(`📊 Initializing monitoring for ${systemType}...`);
    
    const system = {
      type: systemType,
      isActive: false,
      lastCheck: null,
      health: 'unknown',
      performance: 0,
      uptime: 0,
      errorCount: 0,
      successCount: 0
    };
    
    this.automationSystems.set(systemType, system);
    
    console.log(`✅ Monitoring initialized for ${systemType}`);
  }

  startContinuousMonitoring() {
    setInterval(() => {
      this.checkAllSystems();
    }, 30000); // Check every 30 seconds
  }

  startHealthChecks() {
    setInterval(() => {
      this.performHealthChecks();
    }, 60000); // Health check every minute
  }

  startPerformanceTracking() {
    setInterval(() => {
      this.trackPerformance();
    }, 120000); // Performance tracking every 2 minutes
  }

  async checkAllSystems() {
    console.log('📊 Checking all automation systems...');
    
    for (const [systemType, system] of this.automationSystems) {
      try {
        await this.checkSystemStatus(systemType);
      } catch (error) {
        console.error(`❌ Failed to check ${systemType}:`, error);
        system.errorCount++;
      }
    }
    
    // Generate status report
    await this.generateStatusReport();
  }

  async checkSystemStatus(systemType) {
    const system = this.automationSystems.get(systemType);
    if (!system) return;
    
    console.log(`📊 Checking status of ${systemType}...`);
    
    try {
      // Check if system process is running
      const isRunning = await this.checkProcessStatus(systemType);
      system.isActive = isRunning;
      
      // Check system health
      const health = await this.checkSystemHealth(systemType);
      system.health = health;
      
      // Check performance
      const performance = await this.checkSystemPerformance(systemType);
      system.performance = performance;
      
      // Update timestamps
      system.lastCheck = new Date().toISOString();
      system.uptime = Date.now() - (system.startTime || Date.now());
      
      if (isRunning && health === 'healthy') {
        system.successCount++;
      } else {
        system.errorCount++;
      }
      
      console.log(`✅ ${systemType} status: ${isRunning ? 'Running' : 'Stopped'}, Health: ${health}, Performance: ${performance}`);
      
    } catch (error) {
      console.error(`❌ Error checking ${systemType}:`, error);
      system.health = 'error';
      system.errorCount++;
    }
  }

  async checkProcessStatus(systemType) {
    try {
      // Check if system script exists and is running
      const scriptPath = path.join(__dirname, `${systemType}.js`);
      const scriptExists = await fs.access(scriptPath).then(() => true).catch(() => false);
      
      if (!scriptExists) {
        return false;
      }
      
      // Check if process is running (basic check)
      const { stdout } = await execAsync(`ps aux | grep "${systemType}" | grep -v grep`);
      return stdout.trim().length > 0;
      
    } catch (error) {
      return false;
    }
  }

  async checkSystemHealth(systemType) {
    try {
      // Check for system-specific health indicators
      const healthIndicators = await this.getHealthIndicators(systemType);
      
      if (healthIndicators.errorCount > 5) {
        return 'critical';
      } else if (healthIndicators.errorCount > 2) {
        return 'warning';
      } else if (healthIndicators.successRate > 0.9) {
        return 'healthy';
      } else {
        return 'degraded';
      }
      
    } catch (error) {
      return 'unknown';
    }
  }

  async getHealthIndicators(systemType) {
    try {
      // Try to read system-specific health data
      const healthPath = path.join(__dirname, 'health-logs', `${systemType}-health.json`);
      const healthData = await fs.readFile(healthPath, 'utf8');
      return JSON.parse(healthData);
    } catch (error) {
      // Return default indicators if no data available
      return {
        errorCount: 0,
        successRate: 0.8,
        uptime: 0,
        memoryUsage: 0
      };
    }
  }

  async checkSystemPerformance(systemType) {
    try {
      // Check system performance metrics
      const performanceMetrics = await this.getPerformanceMetrics(systemType);
      
      // Calculate performance score
      let score = 1.0;
      
      // Deduct points for errors
      score -= performanceMetrics.errorCount * 0.1;
      
      // Add points for success rate
      score += performanceMetrics.successRate * 0.2;
      
      // Add points for uptime
      score += Math.min(performanceMetrics.uptime / 3600000, 1) * 0.1; // 1 hour = 1 point
      
      return Math.max(0, Math.min(1, score));
      
    } catch (error) {
      return 0.5; // Default performance score
    }
  }

  async getPerformanceMetrics(systemType) {
    try {
      // Try to read system-specific performance data
      const performancePath = path.join(__dirname, 'performance-data', `${systemType}-performance.json`);
      const performanceData = await fs.readFile(performancePath, 'utf8');
      return JSON.parse(performanceData);
    } catch (error) {
      // Return default metrics if no data available
      return {
        errorCount: 0,
        successRate: 0.8,
        uptime: 0,
        memoryUsage: 0,
        cpuUsage: 0
      };
    }
  }

  async performHealthChecks() {
    console.log('🏥 Performing health checks...');
    
    for (const [systemType, system] of this.automationSystems) {
      try {
        const health = await this.performDetailedHealthCheck(systemType);
        system.health = health;
        
        // Log health status
        await this.logHealthStatus(systemType, health);
        
      } catch (error) {
        console.error(`❌ Health check failed for ${systemType}:`, error);
        system.health = 'error';
      }
    }
  }

  async performDetailedHealthCheck(systemType) {
    try {
      // Check system-specific health indicators
      const indicators = await this.getHealthIndicators(systemType);
      
      // Check memory usage
      const memoryUsage = indicators.memoryUsage || 0;
      if (memoryUsage > 0.9) {
        return 'critical';
      }
      
      // Check error rate
      const errorRate = indicators.errorCount / Math.max(indicators.successCount + indicators.errorCount, 1);
      if (errorRate > 0.3) {
        return 'critical';
      } else if (errorRate > 0.1) {
        return 'warning';
      }
      
      // Check uptime
      const uptimeHours = indicators.uptime / 3600000;
      if (uptimeHours < 0.1) {
        return 'degraded';
      }
      
      return 'healthy';
      
    } catch (error) {
      return 'unknown';
    }
  }

  async logHealthStatus(systemType, health) {
    const healthLog = {
      systemType,
      health,
      timestamp: new Date().toISOString(),
      indicators: await this.getHealthIndicators(systemType)
    };
    
    const logPath = path.join(__dirname, 'health-logs', `health-${Date.now()}.json`);
    await fs.writeFile(logPath, JSON.stringify(healthLog, null, 2));
  }

  async trackPerformance() {
    console.log('📈 Tracking performance...');
    
    for (const [systemType, system] of this.automationSystems) {
      try {
        const performance = await this.calculatePerformanceScore(systemType);
        system.performance = performance;
        
        // Update performance data
        this.performanceData.set(systemType, {
          performance,
          timestamp: new Date().toISOString(),
          metrics: await this.getPerformanceMetrics(systemType)
        });
        
      } catch (error) {
        console.error(`❌ Performance tracking failed for ${systemType}:`, error);
      }
    }
    
    // Save performance data
    await this.savePerformanceData();
  }

  async calculatePerformanceScore(systemType) {
    const system = this.automationSystems.get(systemType);
    if (!system) return 0;
    
    let score = 1.0;
    
    // Deduct points for errors
    score -= system.errorCount * 0.05;
    
    // Add points for successes
    score += system.successCount * 0.01;
    
    // Add points for uptime
    score += Math.min(system.uptime / 3600000, 1) * 0.1;
    
    // Add points for health
    const healthScores = {
      'healthy': 0.2,
      'warning': 0.1,
      'degraded': 0.05,
      'critical': -0.2,
      'error': -0.3,
      'unknown': 0
    };
    
    score += healthScores[system.health] || 0;
    
    return Math.max(0, Math.min(1, score));
  }

  async savePerformanceData() {
    const performancePath = path.join(__dirname, 'performance-data', 'performance.json');
    const data = Object.fromEntries(this.performanceData);
    await fs.writeFile(performancePath, JSON.stringify(data, null, 2));
  }

  async generateStatusReport() {
    console.log('📊 Generating status report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systems: {},
      summary: {
        totalSystems: this.automationSystems.size,
        activeSystems: 0,
        healthySystems: 0,
        warningSystems: 0,
        criticalSystems: 0,
        averagePerformance: 0
      }
    };
    
    let totalPerformance = 0;
    
    for (const [systemType, system] of this.automationSystems) {
      report.systems[systemType] = {
        isActive: system.isActive,
        health: system.health,
        performance: system.performance,
        uptime: system.uptime,
        errorCount: system.errorCount,
        successCount: system.successCount,
        lastCheck: system.lastCheck
      };
      
      if (system.isActive) {
        report.summary.activeSystems++;
      }
      
      if (system.health === 'healthy') {
        report.summary.healthySystems++;
      } else if (system.health === 'warning') {
        report.summary.warningSystems++;
      } else if (system.health === 'critical') {
        report.summary.criticalSystems++;
      }
      
      totalPerformance += system.performance;
    }
    
    report.summary.averagePerformance = totalPerformance / this.automationSystems.size;
    
    // Save report
    const reportPath = path.join(__dirname, 'reports', `status-report-${Date.now()}.json`);
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    // Display summary
    this.displayStatusSummary(report.summary);
  }

  displayStatusSummary(summary) {
    console.log('\n📊 AUTOMATION SYSTEMS STATUS SUMMARY');
    console.log('=====================================');
    console.log(`Total Systems: ${summary.totalSystems}`);
    console.log(`Active Systems: ${summary.activeSystems}`);
    console.log(`Healthy Systems: ${summary.healthySystems}`);
    console.log(`Warning Systems: ${summary.warningSystems}`);
    console.log(`Critical Systems: ${summary.criticalSystems}`);
    console.log(`Average Performance: ${(summary.averagePerformance * 100).toFixed(1)}%`);
    console.log('=====================================\n');
  }

  async getSystemStatus() {
    const status = {
      isRunning: this.isRunning,
      totalSystems: this.automationSystems.size,
      activeSystems: 0,
      healthySystems: 0,
      averagePerformance: 0
    };
    
    let totalPerformance = 0;
    
    for (const system of this.automationSystems.values()) {
      if (system.isActive) {
        status.activeSystems++;
      }
      
      if (system.health === 'healthy') {
        status.healthySystems++;
      }
      
      totalPerformance += system.performance;
    }
    
    status.averagePerformance = totalPerformance / this.automationSystems.size;
    
    return status;
  }

  async saveSystemState() {
    const state = {
      automationSystems: Object.fromEntries(this.automationSystems),
      statusData: Object.fromEntries(this.statusData),
      healthMetrics: Object.fromEntries(this.healthMetrics),
      performanceData: Object.fromEntries(this.performanceData),
      timestamp: new Date().toISOString()
    };
    
    const statePath = path.join(__dirname, 'status-checker-state.json');
    await fs.writeFile(statePath, JSON.stringify(state, null, 2));
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message
    };
    
    this.logs.push(logEntry);
    
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-1000);
    }
  }
}

// Main execution
async function main() {
  const statusChecker = new AutomationStatusChecker();
  await statusChecker.initialize();
  
  // Keep running
  setInterval(() => {
    // Continuous operation
  }, 60000);
  
  // Save state periodically
  setInterval(() => {
    statusChecker.saveSystemState();
  }, 300000);
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationStatusChecker;

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('🛑 Shutting down check-automation-status gracefully...');
  process.exit(0);
});