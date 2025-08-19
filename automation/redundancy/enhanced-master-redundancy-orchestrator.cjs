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
    this.systemHealth = 'unknown';
    this.orchestratorActive = false;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-MASTER] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-master-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllManagers() {
    this.log('Starting all enhanced redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting ${name} enhanced manager...`);
        
        // Start the manager in a controlled way
        if (name === 'pm2') {
          await manager.startBackupProcesses();
          manager.startHealthMonitoring();
        } else if (name === 'github') {
          await manager.createBackupWorkflows();
          await manager.createEmergencyBackupWorkflows();
          await manager.createHealthCheckWorkflows();
          manager.startHealthMonitoring();
        } else if (name === 'netlify') {
          await manager.createBackupFunctions();
          await manager.createEmergencyBackupFunctions();
          await manager.createHealthCheckFunctions();
          manager.startHealthMonitoring();
        }
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy',
          lastCheck: new Date()
        });
        
        this.log(`${name} enhanced manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start ${name} enhanced manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message,
          lastCheck: new Date()
        });
      }
    }
    
    this.log('All enhanced managers startup completed');
    return true;
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

    // Recovery attempt every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.attemptSystemRecovery();
    });

    // System report generation every hour
    cron.schedule('0 * * * *', async () => {
      await this.generateSystemReport();
    });

    this.log('Enhanced health monitoring started');
  }

  async checkAllManagerHealth() {
    this.log('Checking all enhanced manager health...');
    
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getStatus();
        const health = status.status === 'active' ? 'healthy' : 'unhealthy';
        
        const managerInfo = this.managerStatus.get(name);
        if (managerInfo) {
          managerInfo.health = health;
          managerInfo.lastCheck = new Date();
          managerInfo.lastStatus = status;
        }
        
        if (health === 'unhealthy') {
          this.log(`Manager ${name} health check failed`, 'WARN');
          this.healthChecks.set(name, {
            status: 'failed',
            timestamp: new Date(),
            attempts: (this.healthChecks.get(name)?.attempts || 0) + 1
          });
        }
        
      } catch (error) {
        this.log(`Health check failed for ${name} manager: ${error.message}`, 'ERROR');
        const managerInfo = this.managerStatus.get(name);
        if (managerInfo) {
          managerInfo.health = 'failed';
          managerInfo.lastCheck = new Date();
          managerInfo.lastError = error.message;
        }
      }
    }
  }

  async fullSystemHealthCheck() {
    this.log('Running full system health check...');
    
    let healthyCount = 0;
    let totalCount = 0;
    
    for (const [name, managerInfo] of this.managerStatus) {
      totalCount++;
      if (managerInfo.health === 'healthy') {
        healthyCount++;
      }
    }
    
    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    
    // Update system health
    if (healthPercentage >= 90) {
      this.systemHealth = 'excellent';
    } else if (healthPercentage >= 75) {
      this.systemHealth = 'good';
    } else if (healthPercentage >= 50) {
      this.systemHealth = 'fair';
    } else if (healthPercentage >= 25) {
      this.systemHealth = 'poor';
    } else {
      this.systemHealth = 'critical';
    }
    
    this.log(`Full system health: ${healthPercentage.toFixed(1)}% (${healthyCount}/${totalCount}) - ${this.systemHealth}`);
    
    // Trigger alerts for poor health
    if (healthPercentage < 50) {
      this.log('System health below 50%, triggering alert', 'WARN');
      await this.triggerSystemAlert('poor-health', healthPercentage);
    }
  }

  async comprehensiveSystemHealthCheck() {
    this.log('Running comprehensive system health check...');
    
    try {
      // Get detailed status from all managers
      const systemStatus = {
        timestamp: new Date().toISOString(),
        overallHealth: this.systemHealth,
        managers: {},
        summary: {
          totalManagers: this.managers.size,
          healthyManagers: 0,
          unhealthyManagers: 0,
          failedManagers: 0
        }
      };
      
      for (const [name, manager] of this.managers) {
        try {
          const status = await manager.getStatus();
          systemStatus.managers[name] = status;
          
          if (status.status === 'active') {
            systemStatus.summary.healthyManagers++;
          } else if (status.status === 'inactive') {
            systemStatus.summary.unhealthyManagers++;
          } else {
            systemStatus.summary.failedManagers++;
          }
          
        } catch (error) {
          this.log(`Failed to get status from ${name} manager: ${error.message}`, 'ERROR');
          systemStatus.managers[name] = { error: error.message, status: 'error' };
          systemStatus.summary.failedManagers++;
        }
      }
      
      // Save comprehensive status
      const statusPath = path.join(this.logDir, 'comprehensive-system-status.json');
      fs.writeFileSync(statusPath, JSON.stringify(systemStatus, null, 2));
      
      this.log('Comprehensive system health check completed');
      
      // Trigger recovery if needed
      if (systemStatus.summary.failedManagers > 0) {
        this.log(`${systemStatus.summary.failedManagers} managers failed, initiating recovery`, 'WARN');
        await this.attemptSystemRecovery();
      }
      
    } catch (error) {
      this.log(`Comprehensive health check failed: ${error.message}`, 'ERROR');
    }
  }

  async attemptSystemRecovery() {
    this.log('Attempting system recovery...');
    
    for (const [name, managerInfo] of this.managerStatus) {
      if (managerInfo.health === 'failed' || managerInfo.health === 'unhealthy') {
        const attempts = this.recoveryAttempts.get(name) || 0;
        
        if (attempts < 3) {
          this.log(`Attempting recovery for ${name} manager (attempt ${attempts + 1})`);
          
          try {
            const recovered = await this.recoverManager(name);
            if (recovered) {
              this.log(`Successfully recovered ${name} manager`);
              this.recoveryAttempts.set(name, 0);
              managerInfo.health = 'healthy';
              managerInfo.status = 'running';
            } else {
              this.recoveryAttempts.set(name, attempts + 1);
            }
          } catch (error) {
            this.log(`Recovery failed for ${name} manager: ${error.message}`, 'ERROR');
            this.recoveryAttempts.set(name, attempts + 1);
          }
        } else {
          this.log(`Max recovery attempts reached for ${name} manager`, 'ERROR');
        }
      }
    }
  }

  async recoverManager(name) {
    this.log(`Recovering manager: ${name}`);
    
    try {
      const manager = this.managers.get(name);
      if (!manager) {
        throw new Error(`Manager ${name} not found`);
      }
      
      // Stop the manager first
      if (name === 'pm2') {
        await manager.stopAllBackupProcesses();
      } else if (name === 'github') {
        await manager.stopAllBackupWorkflows();
      } else if (name === 'netlify') {
        await manager.stopAllBackupFunctions();
      }
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart the manager
      if (name === 'pm2') {
        await manager.startBackupProcesses();
        manager.startHealthMonitoring();
      } else if (name === 'github') {
        await manager.createBackupWorkflows();
        await manager.createEmergencyBackupWorkflows();
        await manager.createHealthCheckWorkflows();
        manager.startHealthMonitoring();
      } else if (name === 'netlify') {
        await manager.createBackupFunctions();
        await manager.createEmergencyBackupFunctions();
        await manager.createHealthCheckFunctions();
        manager.startHealthMonitoring();
      }
      
      return true;
      
    } catch (error) {
      this.log(`Manager recovery failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async triggerSystemAlert(alertType, data) {
    this.log(`Triggering system alert: ${alertType}`, 'WARN');
    
    const alert = {
      type: alertType,
      timestamp: new Date().toISOString(),
      data: data,
      severity: alertType === 'critical' ? 'high' : 'medium'
    };
    
    // Save alert to log
    const alertPath = path.join(this.logDir, 'system-alerts.log');
    fs.appendFileSync(alertPath, JSON.stringify(alert) + '\n');
    
    // Log alert details
    this.log(`System alert triggered: ${JSON.stringify(alert)}`, 'WARN');
    
    // For critical alerts, attempt emergency recovery
    if (alertType === 'critical' || data < 25) {
      this.log('Critical alert detected, initiating emergency recovery', 'ERROR');
      await this.emergencyRecovery();
    }
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery...');
    
    try {
      // Stop all managers
      for (const [name, manager] of this.managers) {
        this.log(`Stopping ${name} manager for emergency recovery`);
        
        if (name === 'pm2') {
          await manager.stopAllBackupProcesses();
        } else if (name === 'github') {
          await manager.stopAllBackupWorkflows();
        } else if (name === 'netlify') {
          await manager.stopAllBackupFunctions();
        }
      }
      
      // Clear all tracking
      this.managerStatus.clear();
      this.healthChecks.clear();
      this.recoveryAttempts.clear();
      
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

  async generateSystemReport() {
    this.log('Generating enhanced system report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        systemHealth: this.systemHealth,
        orchestratorStatus: this.orchestratorActive ? 'active' : 'inactive',
        managers: {},
        healthChecks: Array.from(this.healthChecks.entries()).map(([name, info]) => ({
          name,
          status: info.status,
          timestamp: info.timestamp,
          attempts: info.attempts
        })),
        recoveryAttempts: Array.from(this.recoveryAttempts.entries()).map(([name, attempts]) => ({
          name,
          attempts
        })),
        summary: {
          totalManagers: this.managers.size,
          healthyManagers: 0,
          unhealthyManagers: 0,
          failedManagers: 0
        }
      };
      
      // Collect manager statuses
      for (const [name, managerInfo] of this.managerStatus) {
        report.managers[name] = {
          status: managerInfo.status,
          health: managerInfo.health,
          started: managerInfo.started,
          lastCheck: managerInfo.lastCheck,
          lastError: managerInfo.lastError
        };
        
        if (managerInfo.health === 'healthy') {
          report.summary.healthyManagers++;
        } else if (managerInfo.health === 'unhealthy') {
          report.summary.unhealthyManagers++;
        } else {
          report.summary.failedManagers++;
        }
      }
      
      // Save report
      const reportPath = path.join(this.logDir, 'enhanced-system-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Enhanced system report generated: ${reportPath}`);
      
      return report;
      
    } catch (error) {
      this.log(`Failed to generate system report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async startOrchestrator() {
    if (this.orchestratorActive) {
      this.log('Orchestrator already active');
      return;
    }
    
    this.log('Starting enhanced master redundancy orchestrator...');
    
    try {
      // Start all managers
      await this.startAllManagers();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      this.orchestratorActive = true;
      
      this.log('Enhanced master redundancy orchestrator started successfully');
      
      // Generate initial report
      await this.generateSystemReport();
      
    } catch (error) {
      this.log(`Failed to start orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stopOrchestrator() {
    this.log('Stopping enhanced master redundancy orchestrator...');
    
    try {
      // Stop all managers
      for (const [name, manager] of this.managers) {
        this.log(`Stopping ${name} manager`);
        
        if (name === 'pm2') {
          await manager.stopAllBackupProcesses();
        } else if (name === 'github') {
          await manager.stopAllBackupWorkflows();
        } else if (name === 'netlify') {
          await manager.stopAllBackupFunctions();
        }
      }
      
      // Clear tracking
      this.managerStatus.clear();
      this.healthChecks.clear();
      this.recoveryAttempts.clear();
      this.orchestratorActive = false;
      
      this.log('Enhanced master redundancy orchestrator stopped');
      
    } catch (error) {
      this.log(`Failed to stop orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async getStatus() {
    const status = {
      orchestrator: 'Enhanced Master Redundancy Orchestrator',
      status: this.orchestratorActive ? 'active' : 'inactive',
      systemHealth: this.systemHealth,
      managers: Array.from(this.managerStatus.entries()).map(([name, info]) => ({
        name,
        status: info.status,
        health: info.health,
        started: info.started,
        lastCheck: info.lastCheck,
        lastError: info.lastError
      })),
      healthChecks: Array.from(this.healthChecks.entries()).map(([name, info]) => ({
        name,
        status: info.status,
        timestamp: info.timestamp,
        attempts: info.attempts
      })),
      recoveryAttempts: Array.from(this.recoveryAttempts.entries()).map(([name, attempts]) => ({
        name,
        attempts
      }))
    };
    
    return status;
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive enhanced system report...');
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        orchestrator: await this.getStatus(),
        detailedManagerReports: {}
      };
      
      // Get detailed reports from each manager
      for (const [name, manager] of this.managers) {
        try {
          const managerReport = await manager.generateReport();
          report.detailedManagerReports[name] = managerReport;
        } catch (error) {
          this.log(`Failed to get report from ${name} manager: ${error.message}`, 'ERROR');
          report.detailedManagerReports[name] = { error: error.message };
        }
      }
      
      // Save comprehensive report
      const reportPath = path.join(this.logDir, 'comprehensive-enhanced-system-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Comprehensive enhanced system report generated: ${reportPath}`);
      
      return report;
      
    } catch (error) {
      this.log(`Failed to generate comprehensive report: ${error.message}`, 'ERROR');
      return null;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new EnhancedMasterRedundancyOrchestrator();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.startOrchestrator().then(() => {
        console.log('Enhanced master redundancy orchestrator started');
      }).catch(error => {
        console.error('Failed to start orchestrator:', error.message);
        process.exit(1);
      });
      break;
    case 'stop':
      orchestrator.stopOrchestrator().then(() => {
        console.log('Enhanced master redundancy orchestrator stopped');
      }).catch(error => {
        console.error('Failed to stop orchestrator:', error.message);
        process.exit(1);
      });
      break;
    case 'status':
      orchestrator.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case 'report':
      orchestrator.generateSystemReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'comprehensive':
      orchestrator.generateComprehensiveReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'health':
      orchestrator.fullSystemHealthCheck();
      break;
    case 'recovery':
      orchestrator.attemptSystemRecovery();
      break;
    case 'emergency':
      orchestrator.emergencyRecovery();
      break;
    default:
      console.log('Usage: node enhanced-master-redundancy-orchestrator.cjs [start|stop|status|report|comprehensive|health|recovery|emergency]');
  }
}

module.exports = EnhancedMasterRedundancyOrchestrator;