#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Import the enhanced redundancy managers
const EnhancedPM2RedundancyManager = require('./enhanced-pm2-redundancy-manager.cjs');
const EnhancedGitHubActionsRedundancyManager = require('./enhanced-github-actions-redundancy-manager.cjs');
const EnhancedNetlifyFunctionsRedundancyManager = require('./enhanced-netlify-functions-redundancy-manager.cjs');

class EnhancedMasterRedundancyOrchestrator {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    // Initialize enhanced managers
    this.pm2Manager = new EnhancedPM2RedundancyManager();
    this.githubManager = new EnhancedGitHubActionsRedundancyManager();
    this.netlifyManager = new EnhancedNetlifyFunctionsRedundancyManager();
    
    this.managers = new Map([
      ['pm2', this.pm2Manager],
      ['github', this.githubManager],
      ['netlify', this.netlifyManager]
    ]);
    
    this.managerStatus = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 5;
    
    // System-wide health tracking
    this.systemHealth = {
      overall: 'healthy',
      lastCheck: new Date(),
      uptime: new Date(),
      totalOperations: 0,
      successfulOperations: 0,
      failedOperations: 0,
      lastRecovery: null
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-MASTER-REDUNDANCY] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-master-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllManagers() {
    this.log('Starting all enhanced redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting ${name} manager...`);
        
        // Start the manager in a controlled way
        if (name === 'pm2') {
          await manager.start();
        } else if (name === 'github') {
          await manager.start();
        } else if (name === 'netlify') {
          await manager.start();
        }
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy',
          recoveryAttempts: 0
        });
        
        this.log(`${name} manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message,
          recoveryAttempts: 0
        });
      }
    }
    
    this.log('All enhanced managers startup completed');
  }

  async startHealthMonitoring() {
    this.log('Starting enhanced health monitoring for all managers...');
    
    // Monitor manager health every 3 minutes
    cron.schedule('*/3 * * * *', async () => {
      await this.checkAllManagerHealth();
    });

    // Full system health check every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.fullSystemHealthCheck();
    });

    // Comprehensive system health check every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.comprehensiveSystemHealthCheck();
    });

    // Recovery attempt every 10 minutes
    cron.schedule('*/10 * * * *', async () => {
      await this.attemptSystemRecovery();
    });

    // System report generation every hour
    cron.schedule('0 * * * *', async () => {
      await this.generateSystemReport();
    });
  }

  async checkAllManagerHealth() {
    this.log('Checking all manager health...');
    
    let healthyManagers = 0;
    let totalManagers = 0;
    
    for (const [name, manager] of this.managers) {
      try {
        totalManagers++;
        
        // Get manager status
        const status = await manager.status();
        const health = this.assessManagerHealth(status);
        
        // Update manager status
        const managerInfo = this.managerStatus.get(name);
        if (managerInfo) {
          managerInfo.health = health;
          managerInfo.lastCheck = new Date();
          managerInfo.lastStatus = status;
          this.managerStatus.set(name, managerInfo);
        }
        
        if (health === 'healthy') {
          healthyManagers++;
        }
        
      } catch (error) {
        this.log(`Health check failed for ${name} manager: ${error.message}`, 'ERROR');
        
        const managerInfo = this.managerStatus.get(name);
        if (managerInfo) {
          managerInfo.health = 'unhealthy';
          managerInfo.lastCheck = new Date();
          managerInfo.lastError = error.message;
          this.managerStatus.set(name, managerInfo);
        }
      }
    }
    
    // Update system health
    const healthPercentage = totalManagers > 0 ? (healthyManagers / totalManagers) * 100 : 0;
    
    if (healthPercentage >= 80) {
      this.systemHealth.overall = 'healthy';
    } else if (healthPercentage >= 50) {
      this.systemHealth.overall = 'degraded';
    } else {
      this.systemHealth.overall = 'critical';
    }
    
    this.systemHealth.lastCheck = new Date();
    
    this.log(`Manager health check complete: ${healthyManagers}/${totalManagers} healthy (${healthPercentage.toFixed(1)}%)`);
  }

  assessManagerHealth(status) {
    if (!status) return 'unknown';
    
    // Assess health based on manager type and status
    if (status.totalProcesses || status.totalWorkflows || status.totalFunctions) {
      const total = status.totalProcesses || status.totalWorkflows || status.totalFunctions;
      const healthy = status.healthyProcesses || status.healthyWorkflows || status.healthyFunctions || 0;
      const healthPercentage = total > 0 ? (healthy / total) * 100 : 0;
      
      if (healthPercentage >= 90) return 'healthy';
      if (healthPercentage >= 70) return 'degraded';
      if (healthPercentage >= 50) return 'unhealthy';
      return 'critical';
    }
    
    return 'unknown';
  }

  async fullSystemHealthCheck() {
    this.log('Running full system health check...');
    
    // Check each manager's comprehensive health
    for (const [name, manager] of this.managers) {
      try {
        if (name === 'pm2') {
          await manager.comprehensiveHealthCheck();
        } else if (name === 'github') {
          await manager.comprehensiveHealthCheck();
        } else if (name === 'netlify') {
          await manager.comprehensiveHealthCheck();
        }
      } catch (error) {
        this.log(`Full health check failed for ${name} manager: ${error.message}`, 'ERROR');
      }
    }
    
    // Update system metrics
    this.systemHealth.totalOperations++;
    this.systemHealth.successfulOperations++;
    
    this.log('Full system health check completed');
  }

  async comprehensiveSystemHealthCheck() {
    this.log('Running comprehensive system health check...');
    
    // Generate comprehensive reports from all managers
    const reports = {};
    
    for (const [name, manager] of this.managers) {
      try {
        if (name === 'pm2') {
          reports.pm2 = await manager.generateHealthReport();
        } else if (name === 'github') {
          reports.github = await manager.generateHealthReport();
        } else if (name === 'netlify') {
          reports.netlify = await manager.generateHealthReport();
        }
      } catch (error) {
        this.log(`Comprehensive report generation failed for ${name} manager: ${error.message}`, 'ERROR');
      }
    }
    
    // Generate system-wide comprehensive report
    await this.generateComprehensiveSystemReport(reports);
    
    this.log('Comprehensive system health check completed');
  }

  async attemptSystemRecovery() {
    this.log('Attempting system recovery...');
    
    for (const [name, managerInfo] of this.managerStatus) {
      if (managerInfo.health !== 'healthy' && managerInfo.recoveryAttempts < this.maxRecoveryAttempts) {
        try {
          await this.recoverManager(name);
        } catch (error) {
          this.log(`Recovery failed for ${name} manager: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async recoverManager(managerName) {
    const managerInfo = this.managerStatus.get(managerName);
    if (!managerInfo) return;

    this.log(`Attempting recovery for ${managerName} manager...`);
    
    try {
      const manager = this.managers.get(managerName);
      if (!manager) {
        throw new Error(`Manager ${managerName} not found`);
      }
      
      // Attempt restart
      await manager.restart();
      
      // Update manager info
      managerInfo.recoveryAttempts++;
      managerInfo.lastRecovery = new Date();
      managerInfo.health = 'healthy';
      managerInfo.status = 'running';
      
      this.managerStatus.set(managerName, managerInfo);
      
      // Update system health
      this.systemHealth.lastRecovery = new Date();
      this.systemHealth.successfulOperations++;
      
      this.log(`Recovery successful for ${managerName} manager`);
      
    } catch (error) {
      this.log(`Recovery failed for ${managerName} manager: ${error.message}`, 'ERROR');
      
      managerInfo.health = 'failed';
      managerInfo.lastError = error.message;
      this.managerStatus.set(managerName, managerInfo);
      
      // Update system health
      this.systemHealth.failedOperations++;
    }
  }

  async generateSystemReport() {
    this.log('Generating system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      managers: {},
      summary: {
        totalManagers: this.managers.size,
        healthyManagers: 0,
        unhealthyManagers: 0,
        failedManagers: 0
      }
    };
    
    // Collect manager reports
    for (const [name, managerInfo] of this.managerStatus) {
      report.managers[name] = {
        status: managerInfo.status,
        health: managerInfo.health,
        started: managerInfo.started,
        lastCheck: managerInfo.lastCheck,
        recoveryAttempts: managerInfo.recoveryAttempts,
        lastRecovery: managerInfo.lastRecovery,
        lastError: managerInfo.lastError
      };
      
      // Update summary
      switch (managerInfo.health) {
        case 'healthy':
          report.summary.healthyManagers++;
          break;
        case 'unhealthy':
        case 'degraded':
          report.summary.unhealthyManagers++;
          break;
        case 'failed':
        case 'critical':
          report.summary.failedManagers++;
          break;
      }
    }
    
    const reportPath = path.join(this.logDir, 'enhanced-system-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`System report generated: ${reportPath}`);
    return report;
  }

  async generateComprehensiveSystemReport(managerReports) {
    this.log('Generating comprehensive system report...');
    
    const comprehensiveReport = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      managerReports: managerReports,
      systemMetrics: {
        uptime: Date.now() - this.systemHealth.uptime.getTime(),
        totalOperations: this.systemHealth.totalOperations,
        successfulOperations: this.systemHealth.successfulOperations,
        failedOperations: this.systemHealth.failedOperations,
        successRate: this.systemHealth.totalOperations > 0 ? 
          (this.systemHealth.successfulOperations / this.systemHealth.totalOperations) * 100 : 0
      }
    };
    
    const reportPath = path.join(this.logDir, 'enhanced-comprehensive-system-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(comprehensiveReport, null, 2));
    
    this.log(`Comprehensive system report generated: ${reportPath}`);
    return comprehensiveReport;
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery procedures...');
    
    try {
      // Stop all managers
      for (const [name, manager] of this.managers) {
        try {
          await manager.stop();
          this.log(`Stopped ${name} manager`);
        } catch (error) {
          this.log(`Failed to stop ${name} manager: ${error.message}`, 'ERROR');
        }
      }
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Restart all managers
      await this.startAllManagers();
      
      this.log('Emergency recovery completed');
      
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async start() {
    this.log('Starting Enhanced Master Redundancy Orchestrator...');
    
    try {
      await this.startAllManagers();
      await this.startHealthMonitoring();
      
      this.log('Enhanced Master Redundancy Orchestrator started successfully');
      
      // Initial health check
      setTimeout(async () => {
        await this.checkAllManagerHealth();
        await this.generateSystemReport();
      }, 15000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced Master Redundancy Orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stop() {
    this.log('Stopping Enhanced Master Redundancy Orchestrator...');
    
    for (const [name, manager] of this.managers) {
      try {
        await manager.stop();
        this.log(`Stopped ${name} manager`);
      } catch (error) {
        this.log(`Failed to stop ${name} manager: ${error.message}`, 'ERROR');
      }
    }
    
    this.log('Enhanced Master Redundancy Orchestrator stopped');
  }

  async status() {
    const report = await this.generateSystemReport();
    
    console.log('\n=== Enhanced Master Redundancy Orchestrator Status ===');
    console.log(`System Health: ${this.systemHealth.overall.toUpperCase()}`);
    console.log(`Uptime: ${Math.floor((Date.now() - this.systemHealth.uptime.getTime()) / (1000 * 60 * 60))} hours`);
    console.log(`Success Rate: ${report.systemMetrics?.successRate?.toFixed(1) || 0}%`);
    console.log('\nManager Status:');
    
    for (const [name, managerInfo] of this.managerStatus) {
      const status = managerInfo.status || 'unknown';
      const health = managerInfo.health || 'unknown';
      console.log(`  ${name}: ${status} (${health})`);
    }
    
    console.log('\nSummary:');
    console.log(`  Total Managers: ${report.summary.totalManagers}`);
    console.log(`  Healthy: ${report.summary.healthyManagers}`);
    console.log(`  Unhealthy: ${report.summary.unhealthyManagers}`);
    console.log(`  Failed: ${report.summary.failedManagers}`);
    console.log('=====================================================\n');
    
    return report;
  }

  async restart() {
    this.log('Restarting Enhanced Master Redundancy Orchestrator...');
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 10000));
    await this.start();
  }

  async emergency() {
    this.log('Emergency mode activated - initiating full system recovery...');
    await this.emergencyRecovery();
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new EnhancedMasterRedundancyOrchestrator();
  const command = process.argv[2] || 'start';
  
  (async () => {
    try {
      switch (command) {
        case 'start':
          await orchestrator.start();
          break;
        case 'stop':
          await orchestrator.stop();
          break;
        case 'status':
          await orchestrator.status();
          break;
        case 'restart':
          await orchestrator.restart();
          break;
        case 'report':
          await orchestrator.generateSystemReport();
          break;
        case 'comprehensive':
          await orchestrator.comprehensiveSystemHealthCheck();
          break;
        case 'emergency':
          await orchestrator.emergency();
          break;
        default:
          console.log('Usage: node enhanced-master-redundancy-orchestrator.cjs [start|stop|status|restart|report|comprehensive|emergency]');
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  })();
}

module.exports = EnhancedMasterRedundancyOrchestrator;