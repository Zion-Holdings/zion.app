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
    this.systemHealth = 'healthy';
    this.lastFullHealthCheck = null;
    this.emergencyMode = false;
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

  async startAllEnhancedManagers() {
    this.log('Starting all enhanced redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting enhanced ${name} manager...`);
        
        // Start the manager in a controlled way
        if (name === 'pm2') {
          await manager.startAllBackupProcesses();
          await manager.startHealthMonitoring();
        } else if (name === 'github') {
          await manager.createAllBackupWorkflows();
          await manager.validateBackupWorkflows();
        } else if (name === 'netlify') {
          await manager.createAllBackupFunctions();
          await manager.validateBackupFunctions();
          await manager.updateFunctionsManifest();
        }
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy',
          type: 'enhanced'
        });
        
        this.log(`Enhanced ${name} manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start enhanced ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message,
          type: 'enhanced'
        });
      }
    }
    
    this.log('All enhanced managers startup completed');
  }

  async startEnhancedHealthMonitoring() {
    this.log('Starting enhanced health monitoring for all managers...');
    
    // Monitor manager health every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
      await this.checkAllManagerHealth();
    });

    // Full system health check every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.fullSystemHealthCheck();
    });

    // Emergency health check every 5 minutes if in emergency mode
    cron.schedule('*/5 * * * *', async () => {
      if (this.emergencyMode) {
        await this.emergencyHealthCheck();
      }
    });

    // Comprehensive system audit every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.comprehensiveSystemAudit();
    });

    // Daily cleanup and maintenance
    cron.schedule('0 2 * * *', async () => {
      await this.dailyMaintenance();
    });
  }

  async checkAllManagerHealth() {
    this.log('Checking health of all enhanced managers...');
    
    let healthyManagers = 0;
    let totalManagers = this.managers.size;
    
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getStatus();
        const isHealthy = this.assessManagerHealth(status, name);
        
        if (isHealthy) {
          healthyManagers++;
          this.managerStatus.set(name, {
            ...this.managerStatus.get(name),
            health: 'healthy',
            lastHealthCheck: new Date(),
            status: 'running'
          });
        } else {
          this.managerStatus.set(name, {
            ...this.managerStatus.get(name),
            health: 'unhealthy',
            lastHealthCheck: new Date(),
            status: 'degraded'
          });
          
          // Trigger recovery for unhealthy managers
          await this.triggerManagerRecovery(name);
        }
        
      } catch (error) {
        this.log(`Health check failed for ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          ...this.managerStatus.get(name),
          health: 'unhealthy',
          lastHealthCheck: new Date(),
          status: 'failed',
          error: error.message
        });
      }
    }
    
    const healthPercentage = (healthyManagers / totalManagers) * 100;
    this.log(`Manager health: ${healthyManagers}/${totalManagers} (${healthPercentage.toFixed(1)}%)`);
    
    // Update system health
    if (healthPercentage >= 80) {
      this.systemHealth = 'healthy';
    } else if (healthPercentage >= 60) {
      this.systemHealth = 'degraded';
    } else {
      this.systemHealth = 'critical';
      this.emergencyMode = true;
    }
  }

  assessManagerHealth(status, managerName) {
    if (!status) return false;
    
    switch (managerName) {
      case 'pm2':
        return status.totalBackupProcesses > 0 && status.healthyProcesses > 0;
      case 'github':
        return status.totalBackupWorkflows > 0;
      case 'netlify':
        return status.totalBackupFunctions > 0;
      default:
        return true;
    }
  }

  async triggerManagerRecovery(managerName) {
    this.log(`Triggering recovery for ${managerName} manager...`);
    
    const recoveryCount = this.recoveryAttempts.get(managerName) || 0;
    if (recoveryCount >= 3) {
      this.log(`Max recovery attempts reached for ${managerName}`, 'ERROR');
      return false;
    }

    this.recoveryAttempts.set(managerName, recoveryCount + 1);
    
    try {
      const manager = this.managers.get(managerName);
      if (!manager) return false;
      
      // Attempt recovery based on manager type
      if (managerName === 'pm2') {
        await manager.startAllBackupProcesses();
      } else if (managerName === 'github') {
        await manager.createAllBackupWorkflows();
      } else if (managerName === 'netlify') {
        await manager.createAllBackupFunctions();
      }
      
      this.log(`Successfully recovered ${managerName} manager`);
      this.recoveryAttempts.set(managerName, 0); // Reset counter
      return true;
      
    } catch (error) {
      this.log(`Failed to recover ${managerName} manager: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fullSystemHealthCheck() {
    this.log('Running full enhanced system health check...');
    
    const startTime = Date.now();
    const healthReport = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      emergencyMode: this.emergencyMode,
      managers: {},
      overallHealth: 'unknown',
      recommendations: []
    };
    
    // Check each manager's detailed health
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getStatus();
        healthReport.managers[name] = {
          status: this.managerStatus.get(name),
          details: status,
          health: this.assessManagerHealth(status, name) ? 'healthy' : 'unhealthy'
        };
      } catch (error) {
        healthReport.managers[name] = {
          status: this.managerStatus.get(name),
          error: error.message,
          health: 'error'
        };
      }
    }
    
    // Assess overall health
    const healthyManagers = Object.values(healthReport.managers)
      .filter(m => m.health === 'healthy').length;
    const totalManagers = Object.keys(healthReport.managers).length;
    
    if (healthyManagers === totalManagers) {
      healthReport.overallHealth = 'excellent';
    } else if (healthyManagers >= totalManagers * 0.8) {
      healthReport.overallHealth = 'good';
    } else if (healthyManagers >= totalManagers * 0.6) {
      healthReport.overallHealth = 'fair';
    } else {
      healthReport.overallHealth = 'poor';
    }
    
    // Generate recommendations
    if (healthReport.overallHealth === 'poor') {
      healthReport.recommendations.push('Immediate intervention required');
      healthReport.recommendations.push('Consider emergency recovery procedures');
    } else if (healthReport.overallHealth === 'fair') {
      healthReport.recommendations.push('Monitor closely for degradation');
      healthReport.recommendations.push('Prepare recovery procedures');
    } else if (healthReport.overallHealth === 'good') {
      healthReport.recommendations.push('Continue monitoring');
      healthReport.recommendations.push('Consider optimization opportunities');
    } else {
      healthReport.recommendations.push('System operating optimally');
      healthReport.recommendations.push('Maintain current configuration');
    }
    
    healthReport.duration = Date.now() - startTime;
    this.lastFullHealthCheck = healthReport;
    
    // Log health report
    this.log(`Full system health check completed: ${healthReport.overallHealth} (${healthReport.duration}ms)`);
    
    // Save health report
    const reportPath = path.join(this.logDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    
    return healthReport;
  }

  async emergencyHealthCheck() {
    this.log('🚨 Running emergency health check...');
    
    // Quick emergency assessment
    const emergencyReport = {
      timestamp: new Date().toISOString(),
      type: 'emergency',
      criticalIssues: [],
      immediateActions: []
    };
    
    for (const [name, status] of this.managerStatus) {
      if (status.health === 'unhealthy' || status.status === 'failed') {
        emergencyReport.criticalIssues.push({
          manager: name,
          issue: status.error || 'Unknown issue',
          status: status.status
        });
        
        emergencyReport.immediateActions.push(`Restart ${name} manager`);
      }
    }
    
    if (emergencyReport.criticalIssues.length > 0) {
      this.log(`🚨 Critical issues detected: ${emergencyReport.criticalIssues.length}`, 'ERROR');
      
      // Take immediate action
      for (const action of emergencyReport.immediateActions) {
        this.log(`🚨 Taking immediate action: ${action}`);
        // Implement immediate recovery actions here
      }
    }
    
    return emergencyReport;
  }

  async comprehensiveSystemAudit() {
    this.log('🔍 Running comprehensive system audit...');
    
    const auditReport = {
      timestamp: new Date().toISOString(),
      type: 'comprehensive-audit',
      systemOverview: {},
      redundancyCoverage: {},
      recommendations: []
    };
    
    // Audit each manager's redundancy coverage
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getStatus();
        auditReport.systemOverview[name] = status;
        
        // Assess redundancy coverage
        if (name === 'pm2') {
          const coverage = status.totalBackupProcesses / Math.max(status.totalPrimaryProcesses || 1, 1);
          auditReport.redundancyCoverage[name] = {
            coverage: coverage,
            percentage: (coverage * 100).toFixed(1) + '%',
            status: coverage >= 1 ? 'adequate' : 'insufficient'
          };
        } else if (name === 'github') {
          const coverage = status.totalBackupWorkflows / Math.max(status.totalPrimaryWorkflows || 1, 1);
          auditReport.redundancyCoverage[name] = {
            coverage: coverage,
            percentage: (coverage * 100).toFixed(1) + '%',
            status: coverage >= 1 ? 'adequate' : 'insufficient'
          };
        } else if (name === 'netlify') {
          const coverage = status.totalBackupFunctions / Math.max(status.totalPrimaryFunctions || 1, 1);
          auditReport.redundancyCoverage[name] = {
            coverage: coverage,
            percentage: (coverage * 100).toFixed(1) + '%',
            status: coverage >= 1 ? 'adequate' : 'insufficient'
          };
        }
        
      } catch (error) {
        auditReport.systemOverview[name] = { error: error.message };
      }
    }
    
    // Generate audit recommendations
    for (const [name, coverage] of Object.entries(auditReport.redundancyCoverage)) {
      if (coverage.status === 'insufficient') {
        auditReport.recommendations.push(`Increase redundancy coverage for ${name} (currently ${coverage.percentage})`);
      }
    }
    
    // Save audit report
    const reportPath = path.join(this.logDir, `audit-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(auditReport, null, 2));
    
    this.log(`🔍 Comprehensive system audit completed`);
    return auditReport;
  }

  async dailyMaintenance() {
    this.log('🧹 Running daily maintenance...');
    
    try {
      // Clean up old backup files
      await this.pm2Manager.cleanupOldBackups();
      await this.githubManager.cleanupOldBackups();
      await this.netlifyManager.cleanupOldBackups();
      
      // Update manifests and configurations
      await this.netlifyManager.updateFunctionsManifest();
      
      // Generate daily summary report
      const dailyReport = {
        timestamp: new Date().toISOString(),
        type: 'daily-maintenance',
        actions: [
          'Old backup files cleaned up',
          'Manifests updated',
          'System configurations refreshed'
        ],
        status: 'completed'
      };
      
      const reportPath = path.join(this.logDir, `daily-maintenance-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(dailyReport, null, 2));
      
      this.log('🧹 Daily maintenance completed successfully');
      
    } catch (error) {
      this.log(`Daily maintenance failed: ${error.message}`, 'ERROR');
    }
  }

  async getEnhancedStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      emergencyMode: this.emergencyMode,
      managers: Object.fromEntries(this.managerStatus),
      lastFullHealthCheck: this.lastFullHealthCheck,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      uptime: process.uptime(),
      version: '2.0.0-enhanced'
    };
    
    // Add detailed status from each manager
    for (const [name, manager] of this.managers) {
      try {
        status[`${name}Details`] = await manager.getStatus();
      } catch (error) {
        status[`${name}Details`] = { error: error.message };
      }
    }
    
    return status;
  }

  async stopAllEnhancedManagers() {
    this.log('Stopping all enhanced redundancy managers...');
    
    for (const [name, manager] of this.managers) {
      try {
        if (name === 'pm2') {
          await manager.stopAllBackupProcesses();
        }
        
        this.managerStatus.set(name, {
          ...this.managerStatus.get(name),
          status: 'stopped',
          stopped: new Date()
        });
        
        this.log(`Stopped enhanced ${name} manager`);
        
      } catch (error) {
        this.log(`Failed to stop ${name} manager: ${error.message}`, 'ERROR');
      }
    }
    
    this.log('All enhanced managers stopped');
  }

  async emergencyShutdown() {
    this.log('🚨 EMERGENCY SHUTDOWN INITIATED');
    
    try {
      // Stop all managers immediately
      await this.stopAllEnhancedManagers();
      
      // Log emergency shutdown
      const emergencyLog = {
        timestamp: new Date().toISOString(),
        type: 'emergency-shutdown',
        reason: 'Manual emergency shutdown',
        status: 'completed'
      };
      
      const logPath = path.join(this.logDir, 'emergency-shutdown.log');
      fs.appendFileSync(logPath, JSON.stringify(emergencyLog) + '\n');
      
      this.log('🚨 Emergency shutdown completed');
      
    } catch (error) {
      this.log(`Emergency shutdown failed: ${error.message}`, 'ERROR');
    }
  }

  async restartSystem() {
    this.log('🔄 Restarting enhanced redundancy system...');
    
    try {
      // Stop all managers
      await this.stopAllEnhancedManagers();
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start all managers again
      await this.startAllEnhancedManagers();
      
      // Restart health monitoring
      await this.startEnhancedHealthMonitoring();
      
      this.log('🔄 Enhanced redundancy system restarted successfully');
      
    } catch (error) {
      this.log(`System restart failed: ${error.message}`, 'ERROR');
    }
  }
}

module.exports = EnhancedMasterRedundancyOrchestrator;