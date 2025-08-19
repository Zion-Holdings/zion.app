#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Import the enhanced redundancy managers
const { EnhancedPM2RedundancyManager } = require('./enhanced-pm2-redundancy-manager.cjs');
const { EnhancedGitHubActionsRedundancyManager } = require('./enhanced-github-actions-redundancy-manager.cjs');
const { EnhancedNetlifyFunctionsRedundancyManager } = require('./enhanced-netlify-functions-redundancy-manager.cjs');

class EnhancedMasterRedundancyOrchestrator {
  constructor() {
    // Use a more robust path resolution
    this.baseDir = process.cwd() || __dirname || '.';
    this.logDir = path.resolve(this.baseDir, 'automation', 'logs');
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
    this.startTime = new Date();
    
    // Performance metrics
    this.metrics = {
      totalHealthChecks: 0,
      successfulRecoveries: 0,
      failedRecoveries: 0,
      systemUptime: 0,
      lastFullCheck: null
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [MASTER-ORCHESTRATOR] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'master-redundancy-orchestrator.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllManagers() {
    this.log('Starting all enhanced redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting ${name} manager...`);
        
        // Start the manager
        await manager.start();
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy',
          lastCheck: new Date()
        });
        
        this.log(`${name} manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message,
          lastCheck: new Date()
        });
      }
    }
    
    this.log('All managers startup completed');
  }

  async startHealthMonitoring() {
    this.log('Starting comprehensive health monitoring for all managers...');
    
    // Monitor manager health every 2 minutes
    cron.schedule('*/2 * * * *', async () => {
      await this.checkAllManagerHealth();
    });

    // Full system health check every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.fullSystemHealthCheck();
    });

    // Performance metrics collection every hour
    cron.schedule('0 * * * *', async () => {
      await this.collectPerformanceMetrics();
    });

    // System status report every 4 hours
    cron.schedule('0 */4 * * *', async () => {
      await this.generateSystemStatusReport();
    });
  }

  async checkAllManagerHealth() {
    this.log('Performing health check on all managers...');
    this.metrics.totalHealthChecks++;
    
    const healthPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        const healthPromise = manager.getSystemStatus().then(status => {
          return { name, status, success: true };
        }).catch(error => {
          return { name, error: error.message, success: false };
        });
        
        healthPromises.push(healthPromise);
      } catch (error) {
        this.log(`Error initiating health check for ${name}: ${error.message}`, 'ERROR');
      }
    }
    
    // Wait for all health checks to complete
    const results = await Promise.allSettled(healthPromises);
    
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const { name, status, success, error } = result.value;
        
        if (success) {
          this.managerStatus.set(name, {
            ...this.managerStatus.get(name),
            health: status.overallHealth,
            lastCheck: new Date(),
            lastStatus: status
          });
          
          this.healthChecks.set(name, status);
        } else {
          this.log(`Health check failed for ${name}: ${error}`, 'ERROR');
          this.managerStatus.set(name, {
            ...this.managerStatus.get(name),
            health: 'unhealthy',
            lastCheck: new Date(),
            error
          });
        }
      } else {
        this.log(`Health check promise rejected for manager`, 'ERROR');
      }
    }
    
    // Update overall system health
    this.updateSystemHealth();
  }

  updateSystemHealth() {
    let healthyManagers = 0;
    let totalManagers = 0;
    
    for (const [name, status] of this.managerStatus) {
      totalManagers++;
      if (status.health === 'healthy') {
        healthyManagers++;
      }
    }
    
    const healthRatio = healthyManagers / totalManagers;
    
    if (healthRatio === 1) {
      this.systemHealth = 'healthy';
    } else if (healthRatio >= 0.66) {
      this.systemHealth = 'degraded';
    } else {
      this.systemHealth = 'unhealthy';
    }
    
    this.log(`System health updated: ${this.systemHealth} (${healthyManagers}/${totalManagers} managers healthy)`);
  }

  async fullSystemHealthCheck() {
    this.log('Performing full system health check...');
    this.metrics.lastFullCheck = new Date();
    
    // Check each manager's detailed status
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getSystemStatus();
        this.log(`${name} manager status: ${status.overallHealth}`);
        
        // Log detailed metrics if available
        if (status.recoveryStats) {
          this.log(`${name} recovery stats: ${JSON.stringify(status.recoveryStats)}`);
        }
        
        // Update metrics
        if (status.recoveryStats) {
          this.metrics.successfulRecoveries += status.recoveryStats.successfulRecoveries || 0;
          this.metrics.failedRecoveries += status.recoveryStats.failedRecoveries || 0;
        }
        
      } catch (error) {
        this.log(`Error during full health check for ${name}: ${error.message}`, 'ERROR');
      }
    }
    
    // Generate health summary
    await this.generateHealthSummary();
  }

  async generateHealthSummary() {
    const summary = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      uptime: Date.now() - this.startTime.getTime(),
      managers: {},
      overallMetrics: this.metrics
    };
    
    // Collect manager summaries
    for (const [name, status] of this.managerStatus) {
      summary.managers[name] = {
        status: status.status,
        health: status.health,
        uptime: status.started ? Date.now() - status.started.getTime() : 0,
        lastCheck: status.lastCheck
      };
    }
    
    // Write summary to file
    const summaryPath = path.join(this.logDir, 'health-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    this.log('Health summary generated and saved');
  }

  async collectPerformanceMetrics() {
    this.log('Collecting performance metrics...');
    
    const metrics = {
      timestamp: new Date().toISOString(),
      systemUptime: Date.now() - this.startTime.getTime(),
      managerPerformance: {},
      systemHealth: this.systemHealth,
      totalHealthChecks: this.metrics.totalHealthChecks
    };
    
    // Collect performance data from each manager
    for (const [name, manager] of this.managers) {
      try {
        const status = await manager.getSystemStatus();
        metrics.managerPerformance[name] = {
          health: status.overallHealth,
          recoveryStats: status.recoveryStats || {},
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        this.log(`Error collecting metrics for ${name}: ${error.message}`, 'ERROR');
        metrics.managerPerformance[name] = {
          error: error.message,
          timestamp: new Date().toISOString()
        };
      }
    }
    
    // Write metrics to file
    const metricsPath = path.join(this.logDir, 'performance-metrics.json');
    fs.writeFileSync(metricsPath, JSON.stringify(metrics, null, 2));
    
    this.log('Performance metrics collected and saved');
  }

  async generateSystemStatusReport() {
    this.log('Generating comprehensive system status report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemOverview: {
        health: this.systemHealth,
        uptime: Date.now() - this.startTime.getTime(),
        totalManagers: this.managers.size,
        activeManagers: Array.from(this.managerStatus.values()).filter(s => s.status === 'running').length
      },
      managerDetails: {},
      systemMetrics: this.metrics,
      recommendations: []
    };
    
    // Collect detailed manager information
    for (const [name, status] of this.managerStatus) {
      const healthData = this.healthChecks.get(name);
      
      report.managerDetails[name] = {
        status: status.status,
        health: status.health,
        uptime: status.started ? Date.now() - status.started.getTime() : 0,
        lastCheck: status.lastCheck,
        details: healthData || null
      };
    }
    
    // Generate recommendations
    report.recommendations = this.generateRecommendations();
    
    // Write report to file
    const reportPath = path.join(this.logDir, 'system-status-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Also create a human-readable version
    const humanReport = this.generateHumanReadableReport(report);
    const humanReportPath = path.join(this.logDir, 'system-status-report.md');
    fs.writeFileSync(humanReportPath, humanReport);
    
    this.log('System status report generated and saved');
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for unhealthy managers
    for (const [name, status] of this.managerStatus) {
      if (status.health === 'unhealthy') {
        recommendations.push({
          priority: 'high',
          category: 'health',
          message: `Manager ${name} is unhealthy and requires immediate attention`,
          action: `Investigate and restart ${name} manager if necessary`
        });
      } else if (status.health === 'degraded') {
        recommendations.push({
          priority: 'medium',
          category: 'health',
          message: `Manager ${name} is in degraded state`,
          action: `Monitor ${name} manager closely and investigate performance issues`
        });
      }
    }
    
    // Check for high recovery attempts
    if (this.metrics.failedRecoveries > this.metrics.successfulRecoveries) {
      recommendations.push({
        priority: 'medium',
        category: 'recovery',
        message: 'System has more failed recoveries than successful ones',
        action: 'Review recovery mechanisms and improve error handling'
      });
    }
    
    // Check system uptime
    const uptimeHours = (Date.now() - this.startTime.getTime()) / (1000 * 60 * 60);
    if (uptimeHours > 24) {
      recommendations.push({
        priority: 'low',
        category: 'maintenance',
        message: 'System has been running for over 24 hours',
        action: 'Consider scheduled maintenance or restart for optimal performance'
      });
    }
    
    return recommendations;
  }

  generateHumanReadableReport(report) {
    let markdown = `# System Status Report\n\n`;
    markdown += `**Generated:** ${report.timestamp}\n`;
    markdown += `**System Health:** ${report.systemOverview.health}\n`;
    markdown += `**Uptime:** ${Math.round(report.systemOverview.uptime / (1000 * 60 * 60))} hours\n\n`;
    
    markdown += `## Manager Status\n\n`;
    for (const [name, details] of Object.entries(report.managerDetails)) {
      markdown += `### ${name}\n`;
      markdown += `- **Status:** ${details.status}\n`;
      markdown += `- **Health:** ${details.health}\n`;
      markdown += `- **Uptime:** ${Math.round(details.uptime / (1000 * 60))} minutes\n`;
      markdown += `- **Last Check:** ${details.lastCheck}\n\n`;
    }
    
    markdown += `## System Metrics\n\n`;
    markdown += `- **Total Health Checks:** ${report.systemMetrics.totalHealthChecks}\n`;
    markdown += `- **Successful Recoveries:** ${report.systemMetrics.successfulRecoveries}\n`;
    markdown += `- **Failed Recoveries:** ${report.systemMetrics.failedRecoveries}\n\n`;
    
    if (report.recommendations.length > 0) {
      markdown += `## Recommendations\n\n`;
      for (const rec of report.recommendations) {
        markdown += `### ${rec.priority.toUpperCase()} Priority\n`;
        markdown += `**${rec.message}**\n`;
        markdown += `**Action:** ${rec.action}\n\n`;
      }
    }
    
    return markdown;
  }

  async start() {
    this.log('Starting Enhanced Master Redundancy Orchestrator...');
    
    try {
      // Start all managers
      await this.startAllManagers();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      this.log('Enhanced Master Redundancy Orchestrator started successfully');
      
      // Keep the process alive and update uptime
      setInterval(() => {
        this.metrics.systemUptime = Date.now() - this.startTime.getTime();
      }, 60000);
      
    } catch (error) {
      this.log(`Failed to start Enhanced Master Redundancy Orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async getSystemStatus() {
    return {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      uptime: Date.now() - this.startTime.getTime(),
      managers: Object.fromEntries(this.managerStatus),
      metrics: this.metrics
    };
  }
}

// Export for use in other modules
module.exports = { EnhancedMasterRedundancyOrchestrator };

// If run directly, start the orchestrator
if (require.main === module) {
  const orchestrator = new EnhancedMasterRedundancyOrchestrator();
  orchestrator.start().catch(error => {
    console.error('Failed to start Enhanced Master Redundancy Orchestrator:', error);
    process.exit(1);
  });
}