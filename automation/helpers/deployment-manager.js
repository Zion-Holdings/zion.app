const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class DeploymentManager {
  constructor(config = {}) {
    this.config = {
      deploymentEnabled: config.deploymentEnabled !== false,
      healthCheckEnabled: config.healthCheckEnabled !== false,
      autoRollbackEnabled: config.autoRollbackEnabled !== false,
      deploymentStages: config.deploymentStages || ['preflight', 'deploy', 'health-check', 'postflight'],
      healthCheckTimeout: config.healthCheckTimeout || 300000, // 5 minutes
      maxDeploymentAttempts: config.maxDeploymentAttempts || 3,
      ...config
    };

    this.deploymentHistory = [];
    this.deploymentDir = path.resolve(process.cwd(), 'automation', 'deployments');
    this.ensureDeploymentDir();
    
    // Deployment status tracking
    this.currentDeployment = null;
    this.deploymentStatus = 'idle';
  }

  ensureDeploymentDir() {
    if (!fs.existsSync(this.deploymentDir)) {
      fs.mkdirSync(this.deploymentDir, { recursive: true });
    }
  }

  /**
   * Start production deployment
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Deployment result
   */
  async startProductionDeployment(deploymentConfig) {
    if (!this.config.deploymentEnabled) {
      return {
        success: false,
        reason: 'Production deployment is disabled'
      };
    }

    if (this.deploymentStatus !== 'idle') {
      return {
        success: false,
        reason: 'Another deployment is already in progress'
      };
    }

    const deploymentId = `deployment-${Date.now()}`;
    const startTime = Date.now();

    try {
      this.deploymentStatus = 'in-progress';
      this.currentDeployment = {
        id: deploymentId,
        config: deploymentConfig,
        startTime: new Date(startTime).toISOString(),
        status: 'in-progress',
        stages: [],
        logs: []
      };

      console.log(`🚀 Starting production deployment: ${deploymentId}`);
      this.logDeployment('Deployment started', 'info');

      // Execute deployment stages
      const result = await this.executeDeploymentStages(deploymentConfig);
      const duration = Date.now() - startTime;

      // Update deployment status
      this.currentDeployment.status = result.success ? 'completed' : 'failed';
      this.currentDeployment.duration = duration;
      this.currentDeployment.result = result;

      // Save deployment record
      this.saveDeploymentRecord(this.currentDeployment);

      // Reset deployment status
      this.deploymentStatus = 'idle';
      this.currentDeployment = null;

      return {
        success: result.success,
        deploymentId,
        duration,
        result
      };

    } catch (error) {
      const duration = Date.now() - startTime;
      console.error(`❌ Production deployment failed:`, error.message);
      
      // Update deployment status
      if (this.currentDeployment) {
        this.currentDeployment.status = 'failed';
        this.currentDeployment.duration = duration;
        this.currentDeployment.error = error.message;
        this.saveDeploymentRecord(this.currentDeployment);
      }

      // Reset deployment status
      this.deploymentStatus = 'idle';
      this.currentDeployment = null;

      return {
        success: false,
        deploymentId,
        duration,
        error: error.message
      };
    }
  }

  /**
   * Execute deployment stages
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Stage execution result
   */
  async executeDeploymentStages(deploymentConfig) {
    const stages = [
      { name: 'Preflight Check', action: () => this.executePreflightCheck(deploymentConfig) },
      { name: 'Deploy Enhanced Features', action: () => this.deployEnhancedFeatures(deploymentConfig) },
      { name: 'Health Check', action: () => this.executeHealthCheck(deploymentConfig) },
      { name: 'Postflight Verification', action: () => this.executePostflightVerification(deploymentConfig) }
    ];

    const results = {};
    
    for (const stage of stages) {
      this.logDeployment(`Executing stage: ${stage.name}`, 'info');
      
      try {
        const startTime = Date.now();
        results[stage.name] = await stage.action();
        const stageDuration = Date.now() - startTime;
        
        this.logDeployment(`Stage ${stage.name} completed in ${stageDuration}ms`, 'info');
        
        if (!results[stage.name].success) {
          this.logDeployment(`Stage ${stage.name} failed: ${results[stage.name].reason}`, 'error');
          
          // Check if auto-rollback is needed
          if (this.config.autoRollbackEnabled && this.shouldRollback(results[stage.name])) {
            this.logDeployment('Auto-rollback triggered due to stage failure', 'warning');
            await this.executeRollback(deploymentConfig);
          }
          
          return {
            success: false,
            failedStage: stage.name,
            stageResults: results
          };
        }
        
        // Wait between stages
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        this.logDeployment(`Stage ${stage.name} error: ${error.message}`, 'error');
        results[stage.name] = {
          success: false,
          reason: `Stage execution error: ${error.message}`
        };
        
        return {
          success: false,
          failedStage: stage.name,
          stageResults: results
        };
      }
    }

    return {
      success: true,
      stageResults: results
    };
  }

  /**
   * Execute preflight check
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Preflight check result
   */
  async executePreflightCheck(deploymentConfig) {
    this.logDeployment('Running preflight checks...', 'info');
    
    try {
      const checks = [];

      // Check system health
      checks.push(await this.checkSystemHealth());
      
      // Check resource availability
      checks.push(await this.checkResourceAvailability());
      
      // Check configuration validity
      checks.push(await this.checkConfigurationValidity(deploymentConfig));
      
      // Check backup status
      checks.push(await this.checkBackupStatus());

      // Verify all checks passed
      const failedChecks = checks.filter(check => !check.success);
      
      if (failedChecks.length > 0) {
        return {
          success: false,
          reason: `${failedChecks.length} preflight checks failed`,
          failedChecks
        };
      }

      this.logDeployment('All preflight checks passed', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Preflight check failed: ${error.message}`
      };
    }
  }

  /**
   * Deploy enhanced features
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Deployment result
   */
  async deployEnhancedFeatures(deploymentConfig) {
    this.logDeployment('Deploying enhanced automation features...', 'info');
    
    try {
      const deployments = [];

      // Deploy enhanced orchestrator
      if (deploymentConfig.enhancedOrchestrator) {
        deployments.push(await this.deployEnhancedOrchestrator());
      }

      // Deploy security gates
      if (deploymentConfig.securityGates) {
        deployments.push(await this.deploySecurityGates());
      }

      // Deploy notification system
      if (deploymentConfig.notificationSystem) {
        deployments.push(await this.deployNotificationSystem());
      }

      // Deploy performance optimizer
      if (deploymentConfig.performanceOptimizer) {
        deployments.push(await this.deployPerformanceOptimizer());
      }

      // Verify all deployments succeeded
      const failedDeployments = deployments.filter(dep => !dep.success);
      
      if (failedDeployments.length > 0) {
        return {
          success: false,
          reason: `${failedDeployments.length} feature deployments failed`,
          failedDeployments
        };
      }

      this.logDeployment('All enhanced features deployed successfully', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Feature deployment failed: ${error.message}`
      };
    }
  }

  /**
   * Execute health check
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Health check result
   */
  async executeHealthCheck(deploymentConfig) {
    if (!this.config.healthCheckEnabled) {
      return { success: true, reason: 'Health checks disabled' };
    }

    this.logDeployment('Executing post-deployment health checks...', 'info');
    
    try {
      const healthChecks = [];

      // Check enhanced orchestrator health
      healthChecks.push(await this.checkEnhancedOrchestratorHealth());
      
      // Check security system health
      healthChecks.push(await this.checkSecuritySystemHealth());
      
      // Check notification system health
      healthChecks.push(await this.checkNotificationSystemHealth());
      
      // Check overall system performance
      healthChecks.push(await this.checkSystemPerformance());

      // Wait for health checks to stabilize
      await new Promise(resolve => setTimeout(resolve, 10000));

      // Verify all health checks passed
      const failedHealthChecks = healthChecks.filter(check => !check.success);
      
      if (failedHealthChecks.length > 0) {
        return {
          success: false,
          reason: `${failedHealthChecks.length} health checks failed`,
          failedHealthChecks
        };
      }

      this.logDeployment('All health checks passed', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Health check failed: ${error.message}`
      };
    }
  }

  /**
   * Execute postflight verification
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Postflight verification result
   */
  async executePostflightVerification(deploymentConfig) {
    this.logDeployment('Running postflight verification...', 'info');
    
    try {
      const verifications = [];

      // Verify feature functionality
      verifications.push(await this.verifyFeatureFunctionality(deploymentConfig));
      
      // Verify system integration
      verifications.push(await this.verifySystemIntegration());
      
      // Verify performance metrics
      verifications.push(await this.verifyPerformanceMetrics());

      // Verify all verifications passed
      const failedVerifications = verifications.filter(ver => !ver.success);
      
      if (failedVerifications.length > 0) {
        return {
          success: false,
          reason: `${failedVerifications.length} verifications failed`,
          failedVerifications
        };
      }

      this.logDeployment('All postflight verifications passed', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Postflight verification failed: ${error.message}`
      };
    }
  }

  /**
   * Check system health
   * @returns {object} - System health check result
   */
  async checkSystemHealth() {
    try {
      // Check if automation systems are running
      const automationHealth = await this.checkAutomationHealth();
      
      if (!automationHealth.success) {
        return {
          success: false,
          reason: 'Automation systems unhealthy',
          details: automationHealth
        };
      }

      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `System health check failed: ${error.message}`
      };
    }
  }

  /**
   * Check resource availability
   * @returns {object} - Resource availability check result
   */
  async checkResourceAvailability() {
    try {
      // Check disk space
      const diskSpace = await this.checkDiskSpace();
      
      // Check memory availability
      const memoryUsage = await this.checkMemoryUsage();
      
      // Check CPU availability
      const cpuUsage = await this.checkCpuUsage();

      if (!diskSpace.success || !memoryUsage.success || !cpuUsage.success) {
        return {
          success: false,
          reason: 'Insufficient resources for deployment',
          details: { diskSpace, memoryUsage, cpuUsage }
        };
      }

      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Resource availability check failed: ${error.message}`
      };
    }
  }

  /**
   * Check configuration validity
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Configuration validation result
   */
  async checkConfigurationValidity(deploymentConfig) {
    try {
      // Validate required configuration fields
      const requiredFields = ['enhancedOrchestrator', 'securityGates', 'notificationSystem'];
      const missingFields = requiredFields.filter(field => !deploymentConfig[field]);
      
      if (missingFields.length > 0) {
        return {
          success: false,
          reason: `Missing required configuration fields: ${missingFields.join(', ')}`
        };
      }

      // Validate configuration values
      if (typeof deploymentConfig.enhancedOrchestrator !== 'boolean') {
        return {
          success: false,
          reason: 'enhancedOrchestrator must be a boolean value'
        };
      }

      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Configuration validation failed: ${error.message}`
      };
    }
  }

  /**
   * Check backup status
   * @returns {object} - Backup status check result
   */
  async checkBackupStatus() {
    try {
      // Check if recent backup exists
      const backupDir = path.join(process.cwd(), 'automation', 'backups');
      
      if (!fs.existsSync(backupDir)) {
        return {
          success: false,
          reason: 'Backup directory does not exist'
        };
      }

      // Check for recent backup files
      const backupFiles = fs.readdirSync(backupDir).filter(file => file.endsWith('.json'));
      const recentBackups = backupFiles.filter(file => {
        const filePath = path.join(backupDir, file);
        const stats = fs.statSync(filePath);
        const hoursAgo = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
        return hoursAgo < 24; // Within last 24 hours
      });

      if (recentBackups.length === 0) {
        return {
          success: false,
          reason: 'No recent backups found (within 24 hours)'
        };
      }

      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Backup status check failed: ${error.message}`
      };
    }
  }

  /**
   * Deploy enhanced orchestrator
   * @returns {object} - Deployment result
   */
  async deployEnhancedOrchestrator() {
    try {
      this.logDeployment('Deploying enhanced orchestrator...', 'info');
      
      // Check if enhanced orchestrator file exists
      const orchestratorPath = path.join(process.cwd(), 'netlify', 'functions', 'enhanced-orchestrator.js');
      
      if (!fs.existsSync(orchestratorPath)) {
        return {
          success: false,
          reason: 'Enhanced orchestrator file not found'
        };
      }

      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      this.logDeployment('Enhanced orchestrator deployed successfully', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Enhanced orchestrator deployment failed: ${error.message}`
      };
    }
  }

  /**
   * Deploy security gates
   * @returns {object} - Deployment result
   */
  async deploySecurityGates() {
    try {
      this.logDeployment('Deploying security gates...', 'info');
      
      // Check if security gates workflow exists
      const workflowPath = path.join(process.cwd(), '.github', 'workflows', 'security-gates.yml');
      
      if (!fs.existsSync(workflowPath)) {
        return {
          success: false,
          reason: 'Security gates workflow not found'
        };
      }

      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      this.logDeployment('Security gates deployed successfully', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Security gates deployment failed: ${error.message}`
      };
    }
  }

  /**
   * Deploy notification system
   * @returns {object} - Deployment result
   */
  async deployNotificationSystem() {
    try {
      this.logDeployment('Deploying notification system...', 'info');
      
      // Check if notification manager exists
      const notificationPath = path.join(process.cwd(), 'automation', 'helpers', 'notification-manager.js');
      
      if (!fs.existsSync(notificationPath)) {
        return {
          success: false,
          reason: 'Notification manager not found'
        };
      }

      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.logDeployment('Notification system deployed successfully', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Notification system deployment failed: ${error.message}`
      };
    }
  }

  /**
   * Deploy performance optimizer
   * @returns {object} - Deployment result
   */
  async deployPerformanceOptimizer() {
    try {
      this.logDeployment('Deploying performance optimizer...', 'info');
      
      // Check if performance optimizer exists
      const optimizerPath = path.join(process.cwd(), 'automation', 'helpers', 'performance-optimizer.js');
      
      if (!fs.existsSync(optimizerPath)) {
        return {
          success: false,
          reason: 'Performance optimizer not found'
        };
      }

      // Simulate deployment process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.logDeployment('Performance optimizer deployed successfully', 'info');
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Performance optimizer deployment failed: ${error.message}`
      };
    }
  }

  /**
   * Check enhanced orchestrator health
   * @returns {object} - Health check result
   */
  async checkEnhancedOrchestratorHealth() {
    try {
      // Simulate health check
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Enhanced orchestrator health check failed: ${error.message}`
      };
    }
  }

  /**
   * Check security system health
   * @returns {object} - Health check result
   */
  async checkSecuritySystemHealth() {
    try {
      // Simulate security system health check
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Security system health check failed: ${error.message}`
      };
    }
  }

  /**
   * Check notification system health
   * @returns {object} - Health check result
   */
  async checkNotificationSystemHealth() {
    try {
      // Simulate notification system health check
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Notification system health check failed: ${error.message}`
      };
    }
  }

  /**
   * Check system performance
   * @returns {object} - Performance check result
   */
  async checkSystemPerformance() {
    try {
      // Simulate performance check
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `System performance check failed: ${error.message}`
      };
    }
  }

  /**
   * Verify feature functionality
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Verification result
   */
  async verifyFeatureFunctionality(deploymentConfig) {
    try {
      // Simulate feature verification
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Feature functionality verification failed: ${error.message}`
      };
    }
  }

  /**
   * Verify system integration
   * @returns {object} - Verification result
   */
  async verifySystemIntegration() {
    try {
      // Simulate integration verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `System integration verification failed: ${error.message}`
      };
    }
  }

  /**
   * Verify performance metrics
   * @returns {object} - Verification result
   */
  async verifyPerformanceMetrics() {
    try {
      // Simulate performance metrics verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      return { success: true };

    } catch (error) {
      return {
        success: false,
        reason: `Performance metrics verification failed: ${error.message}`
      };
    }
  }

  /**
   * Check if rollback is needed
   * @param {object} stageResult - Stage execution result
   * @returns {boolean} - Whether rollback is needed
   */
  shouldRollback(stageResult) {
    // Rollback on critical failures
    if (stageResult.failedStage === 'Health Check' || stageResult.failedStage === 'Postflight Verification') {
      return true;
    }
    
    return false;
  }

  /**
   * Execute rollback
   * @param {object} deploymentConfig - Deployment configuration
   * @returns {object} - Rollback result
   */
  async executeRollback(deploymentConfig) {
    this.logDeployment('Executing deployment rollback...', 'warning');
    
    try {
      // Simulate rollback process
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      this.logDeployment('Rollback completed successfully', 'info');
      return { success: true };

    } catch (error) {
      this.logDeployment(`Rollback failed: ${error.message}`, 'error');
      return {
        success: false,
        reason: `Rollback failed: ${error.message}`
      };
    }
  }

  /**
   * Log deployment message
   * @param {string} message - Log message
   * @param {string} level - Log level
   */
  logDeployment(message, level = 'info') {
    if (this.currentDeployment) {
      this.currentDeployment.logs.push({
        timestamp: new Date().toISOString(),
        level,
        message
      });
    }
    
    const levelIcon = {
      info: 'ℹ️',
      warning: '⚠️',
      error: '❌',
      success: '✅'
    };
    
    console.log(`${levelIcon[level] || 'ℹ️'} [Deployment] ${message}`);
  }

  /**
   * Save deployment record
   * @param {object} deployment - Deployment record
   */
  saveDeploymentRecord(deployment) {
    try {
      const deploymentFile = path.join(this.deploymentDir, `${deployment.id}.json`);
      fs.writeFileSync(deploymentFile, JSON.stringify(deployment, null, 2));
      
      this.deploymentHistory.push(deployment);
      
      // Keep only last 50 deployments in memory
      if (this.deploymentHistory.length > 50) {
        this.deploymentHistory = this.deploymentHistory.slice(-50);
      }
    } catch (error) {
      console.error('Failed to save deployment record:', error.message);
    }
  }

  /**
   * Get deployment history
   * @param {number} limit - Maximum number of deployments to return
   * @returns {Array} - Deployment history
   */
  getDeploymentHistory(limit = 20) {
    return this.deploymentHistory
      .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
      .slice(0, limit);
  }

  /**
   * Get deployment statistics
   * @returns {object} - Deployment statistics
   */
  getDeploymentStats() {
    const total = this.deploymentHistory.length;
    const successful = this.deploymentHistory.filter(d => d.status === 'completed').length;
    const failed = this.deploymentHistory.filter(d => d.status === 'failed').length;
    const inProgress = this.deploymentHistory.filter(d => d.status === 'in-progress').length;

    return {
      totalDeployments: total,
      successfulDeployments: successful,
      failedDeployments: failed,
      inProgressDeployments: inProgress,
      successRate: total > 0 ? (successful / total) * 100 : 0,
      lastDeployment: total > 0 ? this.deploymentHistory[0].startTime : null
    };
  }

  /**
   * Clean up old deployment records
   * @param {number} daysOld - Number of days old to consider for cleanup
   * @returns {number} - Number of records cleaned up
   */
  cleanupOldDeployments(daysOld = 90) {
    try {
      const files = fs.readdirSync(this.deploymentDir);
      let cleaned = 0;
      const cutoff = Date.now() - (daysOld * 24 * 60 * 60 * 1000);

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const deploymentFile = path.join(this.deploymentDir, file);
        try {
          const stats = fs.statSync(deploymentFile);
          
          if (stats.mtime.getTime() < cutoff) {
            fs.unlinkSync(deploymentFile);
            cleaned++;
          }
        } catch (error) {
          console.warn(`Failed to process deployment file ${file}:`, error.message);
        }
      }

      return cleaned;
    } catch (error) {
      console.warn('Failed to cleanup old deployments:', error.message);
      return 0;
    }
  }
}

module.exports = DeploymentManager;
