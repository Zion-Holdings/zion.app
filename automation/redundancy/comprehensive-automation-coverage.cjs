#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { spawnSync } = require('child_process');

// Import existing redundancy managers
const PM2RedundancyManager = require('./pm2-redundancy-manager.cjs');
const GitHubActionsRedundancyManager = require('./github-actions-redundancy-manager.cjs');
const NetlifyFunctionsRedundancyManager = require('./netlify-functions-redundancy-manager.cjs');
const EnhancedCoverageManager = require('./enhanced-coverage-manager.cjs');

class ComprehensiveAutomationCoverage {
  constructor() {
    this.rootDir = process.cwd();
    this.logDir = path.join(this.rootDir, 'automation', 'logs');
    this.ensureLogDir();
    
    // Initialize all managers
    this.pm2Manager = new PM2RedundancyManager();
    this.githubManager = new GitHubActionsRedundancyManager();
    this.netlifyManager = new NetlifyFunctionsRedundancyManager();
    this.enhancedManager = new EnhancedCoverageManager();
    
    this.managers = new Map([
      ['pm2', this.pm2Manager],
      ['github', this.githubManager],
      ['netlify', this.netlifyManager],
      ['enhanced', this.enhancedManager]
    ]);
    
    this.coverageStatus = {
      pm2: { status: 'unknown', lastCheck: null, coverage: 0 },
      githubActions: { status: 'unknown', lastCheck: null, coverage: 0 },
      netlifyFunctions: { status: 'unknown', lastCheck: null, coverage: 0 },
      cronJobs: { status: 'unknown', lastCheck: null, coverage: 0 },
      packageScripts: { status: 'unknown', lastCheck: null, coverage: 0 },
      automationScripts: { status: 'unknown', lastCheck: null, coverage: 0 }
    };
    
    this.systemHealth = 'unknown';
    this.lastFullCheck = null;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE-COVERAGE] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'comprehensive-coverage.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllCoverageSystems() {
    this.log('Starting comprehensive automation coverage systems...');
    
    try {
      // Start enhanced coverage manager first
      this.log('Starting enhanced coverage manager...');
      await this.enhancedManager.startFullCoverage();
      
      // Start existing redundancy managers
      this.log('Starting PM2 redundancy manager...');
      await this.pm2Manager.startBackupProcesses();
      
      this.log('Starting GitHub Actions redundancy manager...');
      await this.githubManager.createBackupWorkflows();
      
      this.log('Starting Netlify Functions redundancy manager...');
      await this.netlifyManager.createBackupFunctions();
      
      this.log('All coverage systems started successfully');
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
    } catch (error) {
      this.log(`Failed to start coverage systems: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async startHealthMonitoring() {
    this.log('Starting comprehensive health monitoring...');
    
    // Monitor all systems every 15 minutes
    cron.schedule('*/15 * * * *', async () => {
      await this.checkAllSystemsHealth();
    });
    
    // Full system coverage check every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.performFullCoverageCheck();
    });
    
    // Emergency recovery check every hour
    cron.schedule('0 * * * *', async () => {
      await this.checkEmergencyRecovery();
    });
  }

  async checkAllSystemsHealth() {
    this.log('Checking all systems health...');
    
    const healthChecks = [];
    
    // Check PM2 redundancy
    try {
      const pm2Health = await this.pm2Manager.checkHealth();
      this.coverageStatus.pm2.status = pm2Health.status;
      this.coverageStatus.pm2.lastCheck = new Date().toISOString();
      this.coverageStatus.pm2.coverage = pm2Health.coverage || 0;
      healthChecks.push({ system: 'pm2', status: pm2Health.status });
    } catch (error) {
      this.coverageStatus.pm2.status = 'error';
      this.coverageStatus.pm2.lastCheck = new Date().toISOString();
      healthChecks.push({ system: 'pm2', status: 'error', error: error.message });
    }
    
    // Check GitHub Actions redundancy
    try {
      const githubHealth = await this.githubManager.checkHealth();
      this.coverageStatus.githubActions.status = githubHealth.status;
      this.coverageStatus.githubActions.lastCheck = new Date().toISOString();
      this.coverageStatus.githubActions.coverage = githubHealth.coverage || 0;
      healthChecks.push({ system: 'github', status: githubHealth.status });
    } catch (error) {
      this.coverageStatus.githubActions.status = 'error';
      this.coverageStatus.githubActions.lastCheck = new Date().toISOString();
      healthChecks.push({ system: 'github', status: 'error', error: error.message });
    }
    
    // Check Netlify Functions redundancy
    try {
      const netlifyHealth = await this.netlifyManager.checkHealth();
      this.coverageStatus.netlifyFunctions.status = netlifyHealth.status;
      this.coverageStatus.netlifyFunctions.lastCheck = new Date().toISOString();
      this.coverageStatus.netlifyFunctions.coverage = netlifyHealth.coverage || 0;
      healthChecks.push({ system: 'netlify', status: netlifyHealth.status });
    } catch (error) {
      this.coverageStatus.netlifyFunctions.status = 'error';
      this.coverageStatus.netlifyFunctions.lastCheck = new Date().toISOString();
      healthChecks.push({ system: 'netlify', status: 'error', error: error.message });
    }
    
    // Check enhanced coverage
    try {
      const enhancedHealth = await this.enhancedManager.checkCoverageHealth();
      this.coverageStatus.cronJobs.status = enhancedHealth.status;
      this.coverageStatus.packageScripts.status = enhancedHealth.status;
      this.coverageStatus.automationScripts.status = enhancedHealth.status;
      this.coverageStatus.cronJobs.lastCheck = new Date().toISOString();
      this.coverageStatus.packageScripts.lastCheck = new Date().toISOString();
      this.coverageStatus.automationScripts.lastCheck = new Date().toISOString();
      healthChecks.push({ system: 'enhanced', status: enhancedHealth.status });
    } catch (error) {
      this.coverageStatus.cronJobs.status = 'error';
      this.coverageStatus.packageScripts.status = 'error';
      this.coverageStatus.automationScripts.status = 'error';
      this.coverageStatus.cronJobs.lastCheck = new Date().toISOString();
      this.coverageStatus.packageScripts.lastCheck = new Date().toISOString();
      this.coverageStatus.automationScripts.lastCheck = new Date().toISOString();
      healthChecks.push({ system: 'enhanced', status: 'error', error: error.message });
    }
    
    // Determine overall system health
    const healthySystems = healthChecks.filter(check => check.status === 'healthy').length;
    const totalSystems = healthChecks.length;
    
    if (healthySystems === totalSystems) {
      this.systemHealth = 'healthy';
    } else if (healthySystems >= totalSystems * 0.7) {
      this.systemHealth = 'degraded';
    } else {
      this.systemHealth = 'critical';
    }
    
    this.log(`System health: ${this.systemHealth} (${healthySystems}/${totalSystems} systems healthy)`);
    
    // Log any issues
    const issues = healthChecks.filter(check => check.status !== 'healthy');
    if (issues.length > 0) {
      this.log(`Health issues detected: ${issues.map(i => `${i.system}: ${i.status}`).join(', ')}`, 'WARN');
    }
    
    return {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      healthChecks,
      coverageStatus: this.coverageStatus
    };
  }

  async performFullCoverageCheck() {
    this.log('Performing full coverage check...');
    
    try {
      // Run enhanced coverage analysis
      await this.enhancedManager.startFullCoverage();
      
      // Update coverage status
      const enhancedReport = await this.enhancedManager.generateCoverageReport();
      
      // Update individual system statuses
      for (const [category, status] of Object.entries(enhancedReport.coverage)) {
        if (this.coverageStatus[category]) {
          this.coverageStatus[category].coverage = status.backupProcesses?.length || 
                                                  status.backupWorkflows?.length || 
                                                  status.backupFunctions?.length || 
                                                  status.backupJobs?.length || 
                                                  status.backupScripts?.length || 0;
        }
      }
      
      this.lastFullCheck = new Date().toISOString();
      this.log('Full coverage check completed successfully');
      
      // Generate comprehensive report
      await this.generateComprehensiveReport();
      
    } catch (error) {
      this.log(`Full coverage check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkEmergencyRecovery() {
    this.log('Checking emergency recovery needs...');
    
    try {
      // Check if any critical systems are down
      const criticalIssues = Object.entries(this.coverageStatus)
        .filter(([_, status]) => status.status === 'error' || status.status === 'critical')
        .map(([category, _]) => category);
      
      if (criticalIssues.length > 0) {
        this.log(`Critical issues detected in: ${criticalIssues.join(', ')}`, 'ERROR');
        
        // Attempt emergency recovery
        await this.performEmergencyRecovery(criticalIssues);
      } else {
        this.log('No emergency recovery needed');
      }
      
    } catch (error) {
      this.log(`Emergency recovery check failed: ${error.message}`, 'ERROR');
    }
  }

  async performEmergencyRecovery(criticalCategories) {
    this.log(`Performing emergency recovery for: ${criticalCategories.join(', ')}`);
    
    for (const category of criticalCategories) {
      try {
        this.log(`Recovering ${category}...`);
        
        switch (category) {
          case 'pm2':
            await this.pm2Manager.startBackupProcesses();
            break;
          case 'github':
            await this.githubManager.createBackupWorkflows();
            break;
          case 'netlify':
            await this.netlifyManager.createBackupFunctions();
            break;
          case 'cronJobs':
          case 'packageScripts':
          case 'automationScripts':
            await this.enhancedManager.startFullCoverage();
            break;
        }
        
        this.log(`${category} recovery completed`);
        
      } catch (error) {
        this.log(`Failed to recover ${category}: ${error.message}`, 'ERROR');
      }
    }
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive coverage report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      lastFullCheck: this.lastFullCheck,
      coverageStatus: this.coverageStatus,
      summary: {
        totalCategories: Object.keys(this.coverageStatus).length,
        healthyCategories: Object.values(this.coverageStatus).filter(s => s.status === 'healthy').length,
        totalCoverage: Object.values(this.coverageStatus).reduce((sum, s) => sum + (s.coverage || 0), 0),
        averageCoverage: Math.round(
          Object.values(this.coverageStatus).reduce((sum, s) => sum + (s.coverage || 0), 0) / 
          Object.keys(this.coverageStatus).length
        )
      },
      recommendations: this.generateRecommendations()
    };
    
    const reportPath = path.join(this.logDir, 'comprehensive-coverage-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive report generated: ${reportPath}`);
    this.log(`Overall health: ${report.systemHealth}, Average coverage: ${report.summary.averageCoverage}`);
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check for low coverage areas
    for (const [category, status] of Object.entries(this.coverageStatus)) {
      if (status.coverage < 2) {
        recommendations.push(`Increase redundancy coverage for ${category} (current: ${status.coverage})`);
      }
      
      if (status.status === 'error' || status.status === 'critical') {
        recommendations.push(`Investigate and fix issues in ${category} system`);
      }
    }
    
    // Check for stale health checks
    const now = new Date();
    for (const [category, status] of Object.entries(this.coverageStatus)) {
      if (status.lastCheck) {
        const lastCheck = new Date(status.lastCheck);
        const hoursSinceCheck = (now - lastCheck) / (1000 * 60 * 60);
        
        if (hoursSinceCheck > 6) {
          recommendations.push(`Health check for ${category} is stale (${Math.round(hoursSinceCheck)} hours old)`);
        }
      }
    }
    
    if (recommendations.length === 0) {
      recommendations.push('All systems are healthy and well-covered');
    }
    
    return recommendations;
  }

  async getStatus() {
    return {
      timestamp: new Date().toISOString(),
      systemHealth: this.systemHealth,
      coverageStatus: this.coverageStatus,
      lastFullCheck: this.lastFullCheck,
      managers: Array.from(this.managers.keys())
    };
  }

  async stopAllSystems() {
    this.log('Stopping all coverage systems...');
    
    try {
      // Stop PM2 backup processes
      await this.pm2Manager.stopAllBackupProcesses();
      
      // Note: GitHub Actions and Netlify Functions are external and can't be stopped programmatically
      this.log('Coverage systems stopped');
      
    } catch (error) {
      this.log(`Failed to stop systems: ${error.message}`, 'ERROR');
    }
  }
}

// CLI interface
if (require.main === module) {
  const coverage = new ComprehensiveAutomationCoverage();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      coverage.startAllCoverageSystems()
        .then(() => {
          console.log('Comprehensive automation coverage started successfully');
          process.exit(0);
        })
        .catch(error => {
          console.error('Failed to start coverage:', error);
          process.exit(1);
        });
      break;
      
    case 'status':
      coverage.getStatus()
        .then(status => {
          console.log('Coverage status:', JSON.stringify(status, null, 2));
          process.exit(0);
        })
        .catch(error => {
          console.error('Failed to get status:', error);
          process.exit(1);
        });
      break;
      
    case 'health':
      coverage.checkAllSystemsHealth()
        .then(health => {
          console.log('System health:', JSON.stringify(health, null, 2));
          process.exit(0);
        })
        .catch(error => {
          console.error('Health check failed:', error);
          process.exit(1);
        });
      break;
      
    case 'report':
      coverage.generateComprehensiveReport()
        .then(report => {
          console.log('Report generated successfully');
          process.exit(0);
        })
        .catch(error => {
          console.error('Report generation failed:', error);
          process.exit(1);
        });
      break;
      
    case 'stop':
      coverage.stopAllSystems()
        .then(() => {
          console.log('Coverage systems stopped');
          process.exit(0);
        })
        .catch(error => {
          console.error('Failed to stop systems:', error);
          process.exit(1);
        });
      break;
      
    default:
      console.log('Usage: node comprehensive-automation-coverage.cjs [start|status|health|report|stop]');
      process.exit(1);
  }
}

module.exports = ComprehensiveAutomationCoverage;