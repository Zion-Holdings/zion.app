#!/usr/bin/env node

/**
 * Ultimate Redundancy Master Automation System
 * Comprehensive redundancy for all PM2, GitHub Actions, and Netlify Functions automations
 * 
 * This system provides:
 * - PM2 process monitoring and auto-recovery
 * - GitHub Actions workflow monitoring and backup triggers
 * - Netlify Functions monitoring and auto-regeneration
 * - Cross-system health monitoring and orchestration
 * - Automated failover and recovery mechanisms
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancyMaster {
  constructor() {
    this.config = {
      logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO',
      pm2CheckInterval: parseInt(process.env.PM2_CHECK_INTERVAL) || 30000,
      githubCheckInterval: parseInt(process.env.GITHUB_CHECK_INTERVAL) || 60000,
      netlifyCheckInterval: parseInt(process.env.NETLIFY_CHECK_INTERVAL) || 120000,
      healthCheckInterval: parseInt(process.env.HEALTH_CHECK_INTERVAL) || 300000,
      autoRecovery: process.env.AUTO_RECOVERY !== 'false',
      loadBalancing: process.env.LOAD_BALANCING !== 'false'
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      github: { healthy: false, workflows: [], lastCheck: null },
      netlify: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, lastCheck: null }
    };
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    
    this.log('INFO', 'Ultimate Redundancy Master System initialized');
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(level, message, data = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    console.log(`[${timestamp}] [${level}] ${message}`);
    
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
    
    // Write to log file
    const logFile = path.join(this.logDir, 'ultimate-redundancy-master.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async checkPM2Health() {
    try {
      this.log('INFO', 'Checking PM2 health...');
      
      // Check if PM2 is running
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const pm2Data = JSON.parse(pm2Status);
      
      const processes = pm2Data.processes || [];
      const healthyProcesses = processes.filter(p => p.pm2_env && p.pm2_env.status === 'online');
      
      this.status.pm2 = {
        healthy: healthyProcesses.length > 0,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env?.status || 'unknown',
          pm_id: p.pm_id,
          memory: p.monit?.memory || 0,
          cpu: p.monit?.cpu || 0
        })),
        lastCheck: new Date()
      };
      
      this.log('INFO', `PM2 health check completed. Healthy processes: ${healthyProcesses.length}/${processes.length}`);
      
      // Auto-recovery for failed processes
      if (this.config.autoRecovery) {
        const failedProcesses = processes.filter(p => p.pm2_env && p.pm2_env.status !== 'online');
        if (failedProcesses.length > 0) {
          this.log('WARN', `Found ${failedProcesses.length} failed processes, attempting recovery...`);
          await this.recoverPM2Processes(failedProcesses);
        }
      }
      
      return this.status.pm2.healthy;
    } catch (error) {
      this.log('ERROR', 'PM2 health check failed', error.message);
      this.status.pm2.healthy = false;
      this.status.pm2.lastCheck = new Date();
      return false;
    }
  }

  async recoverPM2Processes(failedProcesses) {
    for (const process of failedProcesses) {
      try {
        this.log('INFO', `Attempting to recover PM2 process: ${process.name}`);
        
        // Try to restart the process
        execSync(`pm2 restart ${process.name}`, { stdio: 'pipe' });
        this.log('INFO', `Successfully restarted PM2 process: ${process.name}`);
        
        // Wait a moment for the process to stabilize
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        // Verify the process is now healthy
        const newStatus = execSync(`pm2 status ${process.name} --json`, { encoding: 'utf8' });
        const newData = JSON.parse(newStatus);
        
        if (newData.processes && newData.processes[0]?.pm2_env?.status === 'online') {
          this.log('INFO', `PM2 process ${process.name} recovered successfully`);
        } else {
          this.log('WARN', `PM2 process ${process.name} recovery failed`);
        }
      } catch (error) {
        this.log('ERROR', `Failed to recover PM2 process ${process.name}`, error.message);
      }
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log('INFO', 'Checking GitHub Actions health...');
      
      // Check if we're in a git repository
      if (!fs.existsSync(path.join(process.cwd(), '.git'))) {
        this.log('WARN', 'Not in a git repository, skipping GitHub Actions check');
        return false;
      }
      
      // Check if .github/workflows directory exists
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (!fs.existsSync(workflowsDir)) {
        this.log('WARN', 'No GitHub Actions workflows found');
        return false;
      }
      
      // List all workflow files
      const workflowFiles = fs.readdirSync(workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      this.status.github.workflows = workflowFiles;
      this.status.github.lastCheck = new Date();
      
      // Check if workflows are properly configured
      let healthyWorkflows = 0;
      for (const workflow of workflowFiles) {
        try {
          const workflowPath = path.join(workflowsDir, workflow);
          const workflowContent = fs.readFileSync(workflowPath, 'utf8');
          
          // Basic validation
          if (workflowContent.includes('on:') && workflowContent.includes('jobs:')) {
            healthyWorkflows++;
          }
        } catch (error) {
          this.log('WARN', `Failed to read workflow ${workflow}`, error.message);
        }
      }
      
      this.status.github.healthy = healthyWorkflows > 0;
      this.log('INFO', `GitHub Actions health check completed. Healthy workflows: ${healthyWorkflows}/${workflowFiles.length}`);
      
      // Auto-trigger backup workflows if needed
      if (this.config.autoRecovery && this.status.github.healthy) {
        await this.triggerGitHubBackupWorkflows();
      }
      
      return this.status.github.healthy;
    } catch (error) {
      this.log('ERROR', 'GitHub Actions health check failed', error.message);
      this.status.github.healthy = false;
      this.status.github.lastCheck = new Date();
      return false;
    }
  }

  async triggerGitHubBackupWorkflows() {
    try {
      // Check if there are backup workflows
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const backupWorkflows = fs.readdirSync(workflowsDir)
        .filter(file => file.includes('backup') && (file.endsWith('.yml') || file.endsWith('.yaml')));
      
      if (backupWorkflows.length > 0) {
        this.log('INFO', `Found ${backupWorkflows.length} backup workflows, checking if they need to be triggered`);
        
        // This would typically involve GitHub API calls to trigger workflows
        // For now, we'll just log the information
        this.log('INFO', 'Backup workflows available for manual triggering if needed');
      }
    } catch (error) {
      this.log('ERROR', 'Failed to trigger GitHub backup workflows', error.message);
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log('INFO', 'Checking Netlify Functions health...');
      
      // Check if netlify directory exists
      const netlifyDir = path.join(process.cwd(), 'netlify');
      if (!fs.existsSync(netlifyDir)) {
        this.log('WARN', 'No Netlify directory found');
        return false;
      }
      
      // Check functions directory
      const functionsDir = path.join(netlifyDir, 'functions');
      if (!fs.existsSync(functionsDir)) {
        this.log('WARN', 'No Netlify functions directory found');
        return false;
      }
      
      // Check functions manifest
      const manifestPath = path.join(functionsDir, 'functions-manifest.json');
      if (!fs.existsSync(manifestPath)) {
        this.log('WARN', 'No Netlify functions manifest found');
        return false;
      }
      
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const functions = manifest.functions || [];
        
        this.status.netlify.functions = functions;
        this.status.netlify.lastCheck = new Date();
        this.status.netlify.healthy = functions.length > 0;
        
        this.log('INFO', `Netlify Functions health check completed. Functions found: ${functions.length}`);
        
        // Auto-regenerate manifest if needed
        if (this.config.autoRecovery && functions.length === 0) {
          this.log('INFO', 'No functions found, attempting to regenerate manifest...');
          await this.regenerateNetlifyManifest();
        }
        
        return this.status.netlify.healthy;
      } catch (error) {
        this.log('ERROR', 'Failed to parse Netlify functions manifest', error.message);
        return false;
      }
    } catch (error) {
      this.log('ERROR', 'Netlify Functions health check failed', error.message);
      this.status.netlify.healthy = false;
      this.status.netlify.lastCheck = new Date();
      return false;
    }
  }

  async regenerateNetlifyManifest() {
    try {
      this.log('INFO', 'Regenerating Netlify functions manifest...');
      
      // Check if the manifest generation script exists
      const manifestScript = path.join(process.cwd(), 'scripts', 'generate-netlify-functions-manifest.cjs');
      if (fs.existsSync(manifestScript)) {
        execSync(`node ${manifestScript}`, { stdio: 'pipe' });
        this.log('INFO', 'Netlify functions manifest regenerated successfully');
        
        // Re-check the manifest
        await this.checkNetlifyFunctionsHealth();
      } else {
        this.log('WARN', 'Netlify functions manifest generation script not found');
      }
    } catch (error) {
      this.log('ERROR', 'Failed to regenerate Netlify functions manifest', error.message);
    }
  }

  async performOverallHealthCheck() {
    try {
      this.log('INFO', 'Performing overall health check...');
      
      const pm2Healthy = await this.checkPM2Health();
      const githubHealthy = await this.checkGitHubActionsHealth();
      const netlifyHealthy = await this.checkNetlifyFunctionsHealth();
      
      this.status.overall.healthy = pm2Healthy && githubHealthy && netlifyHealthy;
      this.status.overall.lastCheck = new Date();
      
      this.log('INFO', `Overall health check completed. Status: ${this.status.overall.healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      this.log('INFO', `PM2: ${pm2Healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      this.log('INFO', `GitHub Actions: ${githubHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      this.log('INFO', `Netlify Functions: ${netlifyHealthy ? 'HEALTHY' : 'UNHEALTHY'}`);
      
      return this.status.overall.healthy;
    } catch (error) {
      this.log('ERROR', 'Overall health check failed', error.message);
      this.status.overall.healthy = false;
      this.status.overall.lastCheck = new Date();
      return false;
    }
  }

  async startMonitoring() {
    this.log('INFO', 'Starting ultimate redundancy monitoring...');
    
    // Start PM2 monitoring
    cron.schedule(`*/${Math.floor(this.config.pm2CheckInterval / 1000)} * * * * *`, async () => {
      await this.checkPM2Health();
    });
    
    // Start GitHub Actions monitoring
    cron.schedule(`*/${Math.floor(this.config.githubCheckInterval / 1000)} * * * * *`, async () => {
      await this.checkGitHubActionsHealth();
    });
    
    // Start Netlify Functions monitoring
    cron.schedule(`*/${Math.floor(this.config.netlifyCheckInterval / 1000)} * * * * *`, async () => {
      await this.checkNetlifyFunctionsHealth();
    });
    
    // Start overall health monitoring
    cron.schedule(`*/${Math.floor(this.config.healthCheckInterval / 1000)} * * * * *`, async () => {
      await this.performOverallHealthCheck();
    });
    
    this.log('INFO', 'Ultimate redundancy monitoring started successfully');
  }

  async stopMonitoring() {
    this.log('INFO', 'Stopping ultimate redundancy monitoring...');
    
    // Stop all cron jobs
    cron.getTasks().forEach(task => task.stop());
    
    this.log('INFO', 'Ultimate redundancy monitoring stopped');
  }

  getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
  }

  async runCommand(command, args = []) {
    switch (command) {
      case 'start':
        await this.startMonitoring();
        break;
      case 'stop':
        await this.stopMonitoring();
        break;
      case 'status':
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'health':
        await this.performOverallHealthCheck();
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'pm2':
        await this.checkPM2Health();
        console.log(JSON.stringify(this.status.pm2, null, 2));
        break;
      case 'github':
        await this.checkGitHubActionsHealth();
        console.log(JSON.stringify(this.status.github, null, 2));
        break;
      case 'netlify':
        await this.checkNetlifyFunctionsHealth();
        console.log(JSON.stringify(this.status.netlify, null, 2));
        break;
      default:
        console.log('Available commands: start, stop, status, health, pm2, github, netlify');
        break;
    }
  }
}

// Main execution
if (require.main === module) {
  const master = new UltimateRedundancyMaster();
  const command = process.argv[2] || 'start';
  
  master.runCommand(command).catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = UltimateRedundancyMaster;