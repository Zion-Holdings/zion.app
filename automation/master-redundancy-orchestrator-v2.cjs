#!/usr/bin/env node

/**
 * Master Redundancy Orchestrator V2
 * Coordinates all redundancy systems (PM2, GitHub Actions, Netlify Functions)
 * Provides unified monitoring, control, and orchestration
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

// Import redundancy systems
const UltimateRedundancySystemV2 = require('./ultimate-redundancy-system-v2.cjs');
const ComprehensivePM2RedundancyV2 = require('./comprehensive-pm2-redundancy-v2.cjs');
const ComprehensiveGitHubActionsRedundancyV2 = require('./comprehensive-github-actions-redundancy-v2.cjs');
const ComprehensiveNetlifyFunctionsRedundancyV2 = require('./comprehensive-netlify-functions-redundancy-v2.cjs');

class MasterRedundancyOrchestratorV2 {
  constructor() {
    this.config = {
      logLevel: process.env.MASTER_REDUNDANCY_LOG_LEVEL || 'INFO',
      orchestrationInterval: parseInt(process.env.MASTER_ORCHESTRATION_INTERVAL) || 60000,
      autoRecovery: process.env.MASTER_AUTO_RECOVERY === 'true',
      loadBalancing: process.env.MASTER_LOAD_BALANCING === 'true',
      healthCheckInterval: parseInt(process.env.MASTER_HEALTH_CHECK_INTERVAL) || 30000,
      backupInterval: parseInt(process.env.MASTER_BACKUP_INTERVAL) || 300000
    };
    
    this.systems = {
      ultimate: null,
      pm2: null,
      github: null,
      netlify: null
    };
    
    this.overallStatus = {
      healthy: false,
      score: 0,
      systems: {},
      lastCheck: null,
      issues: []
    };
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    this.setupLogging();
    
    this.systemHistory = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupLogging() {
    const logFile = path.join(this.logDir, 'master-redundancy-orchestrator-v2.log');
    this.log = (level, message, data = null) => {
      const timestamp = new Date().toISOString();
      const logEntry = {
        timestamp,
        level,
        message,
        data
      };
      
      console.log(`[${timestamp}] [${level}] ${message}`);
      fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
    };
  }

  async start() {
    this.log('INFO', 'Starting Master Redundancy Orchestrator V2...');
    
    try {
      // Initialize all redundancy systems
      await this.initializeAllSystems();
      
      // Start orchestration
      this.startOrchestration();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start backup system
      this.startBackupSystem();
      
      this.log('INFO', 'Master Redundancy Orchestrator V2 started successfully');
      
      // Keep the process alive
      setInterval(() => {}, 1000);
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Master Redundancy Orchestrator V2', error);
      process.exit(1);
    }
  }

  async initializeAllSystems() {
    this.log('INFO', 'Initializing all redundancy systems...');
    
    try {
      // Initialize Ultimate Redundancy System
      this.systems.ultimate = new UltimateRedundancySystemV2();
      await this.systems.ultimate.start();
      this.log('INFO', 'Ultimate Redundancy System initialized');
      
      // Initialize PM2 Redundancy System
      this.systems.pm2 = new ComprehensivePM2RedundancyV2();
      await this.systems.pm2.start();
      this.log('INFO', 'PM2 Redundancy System initialized');
      
      // Initialize GitHub Actions Redundancy System
      this.systems.github = new ComprehensiveGitHubActionsRedundancyV2();
      await this.systems.github.start();
      this.log('INFO', 'GitHub Actions Redundancy System initialized');
      
      // Initialize Netlify Functions Redundancy System
      this.systems.netlify = new ComprehensiveNetlifyFunctionsRedundancyV2();
      await this.systems.netlify.start();
      this.log('INFO', 'Netlify Functions Redundancy System initialized');
      
      this.log('INFO', 'All redundancy systems initialized successfully');
    } catch (error) {
      this.log('ERROR', 'Failed to initialize all redundancy systems', error);
      throw error;
    }
  }

  startOrchestration() {
    this.log('INFO', 'Starting redundancy orchestration...');
    
    // Orchestrate systems every minute
    cron.schedule('0 * * * * *', () => {
      this.orchestrateSystems();
    });
    
    // Monitor system interactions every 2 minutes
    cron.schedule('0 */2 * * * *', () => {
      this.monitorSystemInteractions();
    });
  }

  startHealthChecks() {
    this.log('INFO', 'Starting master health checks...');
    
    // Run initial health check
    this.performMasterHealthCheck();
    
    // Schedule regular health checks
    cron.schedule('*/2 * * * *', () => {
      this.performMasterHealthCheck();
    });
  }

  startBackupSystem() {
    this.log('INFO', 'Starting master backup system...');
    
    // Create master backups every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.createMasterBackup();
    });
  }

  async orchestrateSystems() {
    try {
      this.log('INFO', 'Orchestrating redundancy systems...');
      
      // Get status from all systems
      const systemStatuses = {};
      
      if (this.systems.ultimate) {
        systemStatuses.ultimate = this.systems.ultimate.getStatus();
      }
      
      if (this.systems.pm2) {
        systemStatuses.pm2 = this.systems.pm2.getStatus();
      }
      
      if (this.systems.github) {
        systemStatuses.github = this.systems.github.getStatus();
      }
      
      if (this.systems.netlify) {
        systemStatuses.netlify = this.systems.netlify.getStatus();
      }
      
      // Analyze system interactions
      await this.analyzeSystemInteractions(systemStatuses);
      
      // Perform load balancing if enabled
      if (this.config.loadBalancing) {
        await this.performLoadBalancing(systemStatuses);
      }
      
      // Update overall status
      this.updateOverallStatus(systemStatuses);
      
    } catch (error) {
      this.log('ERROR', 'Failed to orchestrate systems', error);
    }
  }

  async analyzeSystemInteractions(systemStatuses) {
    try {
      // Check for interdependencies
      const interactions = [];
      
      // PM2 and GitHub Actions interaction
      if (systemStatuses.pm2 && systemStatuses.github) {
        const pm2Health = systemStatuses.pm2.health.healthScore;
        const githubHealth = systemStatuses.github.health.healthScore;
        
        if (pm2Health < 50 && githubHealth < 50) {
          interactions.push({
            type: 'critical',
            systems: ['pm2', 'github'],
            description: 'Both PM2 and GitHub Actions systems are unhealthy'
          });
        }
      }
      
      // Netlify and PM2 interaction
      if (systemStatuses.netlify && systemStatuses.pm2) {
        const netlifyHealth = systemStatuses.netlify.health.healthScore;
        const pm2Health = systemStatuses.pm2.health.healthScore;
        
        if (netlifyHealth < 50 && pm2Health < 50) {
          interactions.push({
            type: 'critical',
            systems: ['netlify', 'pm2'],
            description: 'Both Netlify Functions and PM2 systems are unhealthy'
          });
        }
      }
      
      // Log interactions
      if (interactions.length > 0) {
        this.log('WARN', 'System interaction issues detected', interactions);
        
        // Take action if auto-recovery is enabled
        if (this.config.autoRecovery) {
          await this.handleSystemInteractions(interactions);
        }
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to analyze system interactions', error);
    }
  }

  async handleSystemInteractions(interactions) {
    this.log('INFO', 'Handling system interaction issues...');
    
    for (const interaction of interactions) {
      try {
        if (interaction.type === 'critical') {
          // Restart critical systems
          for (const systemName of interaction.systems) {
            if (this.systems[systemName]) {
              this.log('INFO', `Restarting critical system: ${systemName}`);
              await this.restartSystem(systemName);
            }
          }
        }
      } catch (error) {
        this.log('ERROR', `Failed to handle interaction: ${interaction.description}`, error);
      }
    }
  }

  async restartSystem(systemName) {
    try {
      if (this.systems[systemName]) {
        // Stop the system
        await this.systems[systemName].stop();
        
        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Restart the system
        await this.systems[systemName].start();
        
        this.log('INFO', `Successfully restarted system: ${systemName}`);
      }
    } catch (error) {
      this.log('ERROR', `Failed to restart system: ${systemName}`, error);
    }
  }

  async performLoadBalancing(systemStatuses) {
    try {
      // Check system resource usage
      const resourceUsage = {};
      
      if (systemStatuses.pm2) {
        resourceUsage.pm2 = {
          memory: systemStatuses.pm2.processes.running.reduce((sum, proc) => sum + (proc.memory || 0), 0),
          cpu: systemStatuses.pm2.processes.running.reduce((sum, proc) => sum + (proc.cpu || 0), 0),
          processes: systemStatuses.pm2.processes.running.length
        };
      }
      
      // Identify overloaded systems
      const overloadedSystems = [];
      
      if (resourceUsage.pm2 && resourceUsage.pm2.memory > 1000) {
        overloadedSystems.push({
          system: 'pm2',
          issue: 'High memory usage',
          value: resourceUsage.pm2.memory
        });
      }
      
      if (resourceUsage.pm2 && resourceUsage.pm2.cpu > 80) {
        overloadedSystems.push({
          system: 'pm2',
          issue: 'High CPU usage',
          value: resourceUsage.pm2.cpu
        });
      }
      
      // Take load balancing actions
      if (overloadedSystems.length > 0) {
        this.log('WARN', 'Load balancing required', overloadedSystems);
        await this.performLoadBalancingActions(overloadedSystems);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform load balancing', error);
    }
  }

  async performLoadBalancingActions(overloadedSystems) {
    for (const overloaded of overloadedSystems) {
      try {
        if (overloaded.system === 'pm2') {
          if (overloaded.issue === 'High memory usage') {
            // Restart memory-intensive processes
            this.log('INFO', 'Restarting memory-intensive PM2 processes for load balancing');
            execSync('pm2 restart all', { stdio: 'pipe' });
          } else if (overloaded.issue === 'High CPU usage') {
            // Scale down processes
            this.log('INFO', 'Scaling down PM2 processes for load balancing');
            execSync('pm2 scale all 1', { stdio: 'pipe' });
          }
        }
      } catch (error) {
        this.log('ERROR', `Failed to perform load balancing action for ${overloaded.system}`, error);
      }
    }
  }

  updateOverallStatus(systemStatuses) {
    try {
      const scores = [];
      const issues = [];
      
      // Calculate overall health score
      for (const [systemName, status] of Object.entries(systemStatuses)) {
        if (status.health && status.health.healthScore !== undefined) {
          scores.push(status.health.healthScore);
          
          // Track issues
          if (status.health.healthScore < 75) {
            issues.push(`${systemName}: Health score ${status.health.healthScore.toFixed(1)}%`);
          }
        }
      }
      
      // Calculate overall score
      const overallScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 0;
      
      this.overallStatus = {
        healthy: overallScore >= 75,
        score: overallScore,
        systems: systemStatuses,
        lastCheck: new Date(),
        issues: issues
      };
      
      this.log('INFO', `Overall health score: ${overallScore.toFixed(1)}% (${scores.length} systems monitored)`);
      
      if (issues.length > 0) {
        this.log('WARN', `Issues detected: ${issues.join(', ')}`);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to update overall status', error);
    }
  }

  async monitorSystemInteractions() {
    try {
      // Check for system conflicts
      const conflicts = [];
      
      // Check if multiple systems are trying to control the same resources
      if (this.systems.pm2 && this.systems.ultimate) {
        const pm2Status = this.systems.pm2.getStatus();
        const ultimateStatus = this.systems.ultimate.getStatus();
        
        // Check for PM2 process conflicts
        if (pm2Status.processes && ultimateStatus.pm2) {
          const pm2Processes = pm2Status.processes.running.map(p => p.name);
          const ultimateProcesses = ultimateStatus.pm2.processes.map(p => p.name);
          
          const conflicts = pm2Processes.filter(name => ultimateProcesses.includes(name));
          if (conflicts.length > 0) {
            this.log('WARN', `Process conflicts detected: ${conflicts.join(', ')}`);
          }
        }
      }
      
      // Resolve conflicts if found
      if (conflicts.length > 0) {
        await this.resolveSystemConflicts(conflicts);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor system interactions', error);
    }
  }

  async resolveSystemConflicts(conflicts) {
    this.log('INFO', 'Resolving system conflicts...');
    
    try {
      // Prioritize Ultimate Redundancy System for conflict resolution
      if (this.systems.ultimate) {
        for (const conflict of conflicts) {
          this.log('INFO', `Resolving conflict for: ${conflict}`);
          // Let Ultimate system handle the conflict
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to resolve system conflicts', error);
    }
  }

  async performMasterHealthCheck() {
    this.log('INFO', 'Performing master health check...');
    
    try {
      const healthStatus = {
        systems: {},
        overall: this.overallStatus,
        recommendations: []
      };
      
      // Check each system
      for (const [systemName, system] of Object.entries(this.systems)) {
        if (system && typeof system.getStatus === 'function') {
          try {
            const status = system.getStatus();
            healthStatus.systems[systemName] = status;
            
            // Generate recommendations
            if (status.health && status.health.healthScore < 75) {
              healthStatus.recommendations.push({
                system: systemName,
                action: 'Investigate and repair',
                priority: 'high'
              });
            }
          } catch (error) {
            healthStatus.systems[systemName] = { error: error.message };
            healthStatus.recommendations.push({
              system: systemName,
              action: 'Restart system',
              priority: 'critical'
            });
          }
        }
      }
      
      // Log health status
      this.log('INFO', 'Master health check completed', healthStatus);
      
      // Take action on recommendations
      if (healthStatus.recommendations.length > 0) {
        await this.executeRecommendations(healthStatus.recommendations);
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform master health check', error);
    }
  }

  async executeRecommendations(recommendations) {
    this.log('INFO', 'Executing health check recommendations...');
    
    for (const recommendation of recommendations) {
      try {
        if (recommendation.priority === 'critical') {
          this.log('WARN', `Executing critical recommendation: ${recommendation.action} for ${recommendation.system}`);
          
          if (recommendation.action === 'Restart system' && this.systems[recommendation.system]) {
            await this.restartSystem(recommendation.system);
          }
        }
      } catch (error) {
        this.log('ERROR', `Failed to execute recommendation: ${recommendation.action}`, error);
      }
    }
  }

  async createMasterBackup() {
    try {
      this.log('INFO', 'Creating master backup...');
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.logDir, 'master-backups');
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      // Backup system statuses
      const backupData = {
        timestamp: timestamp,
        overallStatus: this.overallStatus,
        systemStatuses: {}
      };
      
      for (const [systemName, system] of Object.entries(this.systems)) {
        if (system && typeof system.getStatus === 'function') {
          try {
            backupData.systemStatuses[systemName] = system.getStatus();
          } catch (error) {
            backupData.systemStatuses[systemName] = { error: error.message };
          }
        }
      }
      
      const backupFile = path.join(backupDir, `master-backup-${timestamp}.json`);
      fs.writeFileSync(backupFile, JSON.stringify(backupData, null, 2));
      
      this.log('INFO', `Master backup created: ${backupFile}`);
      
      // Clean old backups
      this.cleanOldMasterBackups(backupDir, 20);
      
    } catch (error) {
      this.log('ERROR', 'Failed to create master backup', error);
    }
  }

  cleanOldMasterBackups(backupDir, keepCount) {
    try {
      const files = fs.readdirSync(backupDir)
        .filter(file => file.startsWith('master-backup-'))
        .map(file => ({
          name: file,
          path: path.join(backupDir, file),
          time: fs.statSync(path.join(backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Remove old backups
      for (let i = keepCount; i < files.length; i++) {
        fs.unlinkSync(files[i].path);
        this.log('INFO', `Removed old master backup: ${files[i].name}`);
      }
    } catch (error) {
      this.log('ERROR', 'Failed to clean old master backups', error);
    }
  }

  getStatus() {
    return {
      overall: this.overallStatus,
      systems: Object.fromEntries(
        Object.entries(this.systems).map(([name, system]) => [
          name,
          system && typeof system.getStatus === 'function' ? system.getStatus() : { error: 'System not accessible' }
        ])
      ),
      config: this.config,
      recommendations: this.overallStatus.issues.map(issue => ({
        action: 'Investigate',
        description: issue,
        priority: 'medium'
      }))
    };
  }

  async stop() {
    this.log('INFO', 'Stopping Master Redundancy Orchestrator V2...');
    
    try {
      // Stop all systems
      for (const [name, system] of Object.entries(this.systems)) {
        if (system && typeof system.stop === 'function') {
          try {
            await system.stop();
            this.log('INFO', `Stopped system: ${name}`);
          } catch (error) {
            this.log('ERROR', `Failed to stop system: ${name}`, error);
          }
        }
      }
      
      this.log('INFO', 'Master Redundancy Orchestrator V2 stopped successfully');
      process.exit(0);
      
    } catch (error) {
      this.log('ERROR', 'Failed to stop Master Redundancy Orchestrator V2', error);
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestratorV2();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await orchestrator.stop();
  });
  
  process.on('SIGTERM', async () => {
    await orchestrator.stop();
  });
  
  // Start the orchestrator
  orchestrator.start().catch(error => {
    console.error('Failed to start Master Redundancy Orchestrator V2:', error);
    process.exit(1);
  });
}

module.exports = MasterRedundancyOrchestratorV2;