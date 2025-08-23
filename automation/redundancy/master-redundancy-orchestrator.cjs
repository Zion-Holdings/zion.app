#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

// Import the redundancy managers
const PM2RedundancyManager = require('./pm2-redundancy-manager.cjs');
const GitHubActionsRedundancyManager = require('./github-actions-redundancy-manager.cjs');
const NetlifyFunctionsRedundancyManager = require('./netlify-functions-redundancy-manager.cjs');

class MasterRedundancyOrchestrator {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ensureLogDir();
    
    // Initialize managers
    this.pm2Manager = new PM2RedundancyManager();
    this.githubManager = new GitHubActionsRedundancyManager();
    this.netlifyManager = new NetlifyFunctionsRedundancyManager();
    
    this.managers = new Map([
      ['pm2', this.pm2Manager],
      ['github', this.githubManager],
      ['netlify', this.netlifyManager]
    ]);
    
    this.managerStatus = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [MASTER] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'master-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async startAllManagers() {
    this.log('Starting all redundancy managers...');
    
    const startPromises = [];
    
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Starting ${name} manager...`);
        
        // Start the manager in a controlled way
        if (name === 'pm2') {
          await manager.startBackupProcesses();
        } else if (name === 'github') {
          await manager.createBackupWorkflows();
        } else if (name === 'netlify') {
          await manager.createBackupFunctions();
        }
        
        this.managerStatus.set(name, {
          status: 'running',
          started: new Date(),
          health: 'healthy'
        });
        
        this.log(`${name} manager started successfully`);
        
      } catch (error) {
        this.log(`Failed to start ${name} manager: ${error.message}`, 'ERROR');
        this.managerStatus.set(name, {
          status: 'failed',
          started: new Date(),
          health: 'unhealthy',
          error: error.message
        });
      }
    }
    
    this.log('All managers startup completed');
  }

  async startHealthMonitoring() {
    this.log('Starting health monitoring for all managers...');
    
    // Monitor manager health every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
      await this.checkAllManagerHealth();
    });

    // Full system health check every hour
    cron.schedule('0 * * * *', async () => {
      await this.fullSystemHealthCheck();
    });

    // Generate comprehensive reports every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.generateComprehensiveReport();
    });
  }

  async checkAllManagerHealth() {
    this.log('Checking health of all managers...');
    
    for (const [name, manager] of this.managers) {
      try {
        const status = this.managerStatus.get(name);
        if (!status || status.status !== 'running') {
          continue;
        }

        // Check manager-specific health
        let health = 'healthy';
        
        if (name === 'pm2') {
          const pm2Status = await manager.checkPM2Status();
          health = pm2Status ? 'healthy' : 'unhealthy';
        } else if (name === 'github') {
          await manager.checkWorkflowHealth();
          const healthyCount = Array.from(manager.backupWorkflows.values())
            .filter(w => w.health === 'healthy').length;
          health = healthyCount > 0 ? 'healthy' : 'unhealthy';
        } else if (name === 'netlify') {
          await manager.checkFunctionHealth();
          const healthyCount = Array.from(manager.backupFunctions.values())
            .filter(f => f.health === 'healthy').length;
          health = healthyCount > 0 ? 'healthy' : 'unhealthy';
        }

        // Update status
        status.health = health;
        status.lastCheck = new Date();
        
        if (health === 'unhealthy') {
          this.log(`Manager ${name} is unhealthy, attempting recovery`, 'WARN');
          await this.recoverManager(name, manager);
        }

      } catch (error) {
        this.log(`Health check failed for ${name}: ${error.message}`, 'ERROR');
        const status = this.managerStatus.get(name);
        if (status) {
          status.health = 'unhealthy';
          status.lastError = error.message;
        }
      }
    }
  }

  async recoverManager(name, manager) {
    this.log(`Recovering manager: ${name}`);
    
    const attempts = this.recoveryAttempts.get(name) || 0;
    if (attempts >= 3) {
      this.log(`Max recovery attempts reached for ${name}`, 'ERROR');
      return;
    }

    this.recoveryAttempts.set(name, attempts + 1);
    
    try {
      // Attempt recovery based on manager type
      if (name === 'pm2') {
        await manager.startBackupProcesses();
      } else if (name === 'github') {
        await manager.createBackupWorkflows();
      } else if (name === 'netlify') {
        await manager.createBackupFunctions();
      }
      
      this.log(`Manager ${name} recovered successfully`);
      
      // Update status
      const status = this.managerStatus.get(name);
      if (status) {
        status.health = 'healthy';
        status.lastRecovery = new Date();
      }
      
    } catch (error) {
      this.log(`Recovery failed for ${name}: ${error.message}`, 'ERROR');
    }
  }

  async fullSystemHealthCheck() {
    this.log('Running full system health check...');
    
    // Check if all managers are running
    const runningManagers = Array.from(this.managerStatus.values())
      .filter(status => status.status === 'running');
    
    if (runningManagers.length < this.managers.size) {
      this.log('Some managers are not running, attempting restart', 'WARN');
      await this.restartFailedManagers();
    }
    
    // Check overall system health
    const healthyManagers = runningManagers.filter(status => status.health === 'healthy');
    const healthPercentage = (healthyManagers.length / this.managers.size) * 100;
    
    this.log(`System health: ${healthPercentage.toFixed(1)}% (${healthyManagers.length}/${this.managers.size} managers healthy)`);
    
    if (healthPercentage < 50) {
      this.log('System health is critically low, initiating emergency recovery', 'ERROR');
      await this.emergencyRecovery();
    }
  }

  async restartFailedManagers() {
    this.log('Restarting failed managers...');
    
    for (const [name, status] of this.managerStatus) {
      if (status.status === 'failed') {
        this.log(`Restarting failed manager: ${name}`);
        
        try {
          const manager = this.managers.get(name);
          if (manager) {
            if (name === 'pm2') {
              await manager.startBackupProcesses();
            } else if (name === 'github') {
              await manager.createBackupWorkflows();
            } else if (name === 'netlify') {
              await manager.createBackupFunctions();
            }
            
            status.status = 'running';
            status.health = 'healthy';
            status.lastRestart = new Date();
            
            this.log(`Manager ${name} restarted successfully`);
          }
        } catch (error) {
          this.log(`Failed to restart ${name}: ${error.message}`, 'ERROR');
        }
      }
    }
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery...');
    
    // Stop all managers
    for (const [name, manager] of this.managers) {
      try {
        this.log(`Stopping ${name} manager for emergency recovery`);
        // Note: Individual managers don't have stop methods, so we'll just mark them as stopped
        this.managerStatus.set(name, {
          status: 'stopped',
          stopped: new Date(),
          health: 'unknown'
        });
      } catch (error) {
        this.log(`Failed to stop ${name}: ${error.message}`, 'ERROR');
      }
    }
    
    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Restart all managers
    await this.startAllManagers();
    
    this.log('Emergency recovery completed');
  }

  async generateComprehensiveReport() {
    this.log('Generating comprehensive redundancy report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: {
        totalManagers: this.managers.size,
        runningManagers: Array.from(this.managerStatus.values()).filter(s => s.status === 'running').length,
        healthyManagers: Array.from(this.managerStatus.values()).filter(s => s.health === 'healthy').length
      },
      managerStatus: Object.fromEntries(this.managerStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      detailedReports: {}
    };
    
    // Generate individual manager reports
    for (const [name, manager] of this.managers) {
      try {
        if (name === 'pm2') {
          report.detailedReports[name] = await manager.generateReport();
        } else if (name === 'github') {
          report.detailedReports[name] = await manager.generateReport();
        } else if (name === 'netlify') {
          report.detailedReports[name] = await manager.generateReport();
        }
      } catch (error) {
        this.log(`Failed to generate report for ${name}: ${error.message}`, 'ERROR');
        report.detailedReports[name] = { error: error.message };
      }
    }
    
    // Write comprehensive report
    const reportPath = path.join(this.logDir, 'comprehensive-redundancy-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive report generated: ${reportPath}`);
    return report;
  }

  async start() {
    this.log('Starting Master Redundancy Orchestrator...');
    
    try {
      // Start all managers
      await this.startAllManagers();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      this.log('Master Redundancy Orchestrator started successfully');
      
      // Generate initial report
      await this.generateComprehensiveReport();
      
      // Keep the process running
      setInterval(async () => {
        await this.generateComprehensiveReport();
      }, 7200000); // Every 2 hours
      
    } catch (error) {
      this.log(`Failed to start Master Redundancy Orchestrator: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  async stop() {
    this.log('Stopping Master Redundancy Orchestrator...');
    
    // Note: Individual managers don't have stop methods
    // This is mainly for cleanup and status updates
    
    for (const [name, status] of this.managerStatus) {
      status.status = 'stopped';
      status.stopped = new Date();
    }
    
    this.log('Master Redundancy Orchestrator stopped');
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'stop':
      orchestrator.stop();
      break;
    case 'status':
      console.log('Manager Status:', Object.fromEntries(orchestrator.managerStatus));
      break;
    case 'health':
      orchestrator.checkAllManagerHealth();
      break;
    case 'report':
      orchestrator.generateComprehensiveReport().then(report => {
        console.log('Comprehensive Report:', JSON.stringify(report, null, 2));
      });
      break;
    case 'recovery':
      orchestrator.emergencyRecovery();
      break;
    default:
      console.log('Usage: node master-redundancy-orchestrator.cjs [start|stop|status|health|report|recovery]');
      process.exit(1);
  }
}

module.exports = MasterRedundancyOrchestrator;