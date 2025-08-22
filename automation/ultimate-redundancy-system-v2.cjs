#!/usr/bin/env node

/**
 * Ultimate Redundancy System V2
 * Comprehensive redundancy coverage for all automation systems
 * Covers PM2, GitHub Actions, Netlify Functions, and all custom automations
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateRedundancySystemV2 {
  constructor() {
    this.config = {
      logLevel: process.env.REDUNDANCY_LOG_LEVEL || 'INFO',
      checkInterval: parseInt(process.env.REDUNDANCY_CHECK_INTERVAL) || 30000,
      maxRetries: parseInt(process.env.REDUNDANCY_MAX_RETRIES) || 5,
      autoRecovery: process.env.REDUNDANCY_AUTO_RECOVERY === 'true',
      loadBalancing: process.env.REDUNDANCY_LOAD_BALANCING === 'true',
      healthCheckInterval: parseInt(process.env.REDUNDANCY_HEALTH_CHECK_INTERVAL) || 60000
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      github: { healthy: false, workflows: [], lastCheck: null },
      netlify: { healthy: false, functions: [], lastCheck: null },
      custom: { healthy: false, scripts: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastCheck: null }
    };
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    this.setupLogging();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupLogging() {
    const logFile = path.join(this.logDir, 'ultimate-redundancy-v2.log');
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
    this.log('INFO', 'Starting Ultimate Redundancy System V2...');
    
    try {
      // Initialize all redundancy systems
      await this.initializePM2Redundancy();
      await this.initializeGitHubActionsRedundancy();
      await this.initializeNetlifyFunctionsRedundancy();
      await this.initializeCustomAutomationRedundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      this.log('INFO', 'Ultimate Redundancy System V2 started successfully');
      
      // Keep the process alive
      setInterval(() => {}, 1000);
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Ultimate Redundancy System V2', error);
      process.exit(1);
    }
  }

  async initializePM2Redundancy() {
    this.log('INFO', 'Initializing PM2 Redundancy System...');
    
    try {
      // Check PM2 status - try JSON first, fallback to text
      let pm2Status;
      let pm2Processes = [];
      
      try {
        pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        pm2Processes = JSON.parse(pm2Status);
      } catch (jsonError) {
        this.log('WARN', 'PM2 JSON output not supported, using text parsing');
        try {
          pm2Status = execSync('pm2 status', { encoding: 'utf8' });
          pm2Processes = this.parsePM2TextOutput(pm2Status);
        } catch (textError) {
          this.log('ERROR', 'Failed to get PM2 status', textError);
          pm2Processes = [];
        }
      }
      
      this.status.pm2.processes = pm2Processes;
      this.status.pm2.healthy = pm2Processes.length > 0;
      this.status.pm2.lastCheck = new Date();
      
      // Start PM2 redundancy monitoring
      cron.schedule('*/30 * * * * *', () => this.monitorPM2Redundancy());
      
      this.log('INFO', 'PM2 Redundancy System initialized successfully');
    } catch (error) {
      this.log('ERROR', 'Failed to initialize PM2 Redundancy System', error);
    }
  }

  async initializeGitHubActionsRedundancy() {
    this.log('INFO', 'Initializing GitHub Actions Redundancy System...');
    
    try {
      // Check GitHub Actions workflows
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir)
          .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
        
        this.status.github.workflows = workflowFiles;
        this.status.github.healthy = workflowFiles.length > 0;
        this.status.github.lastCheck = new Date();
        
        // Start GitHub Actions redundancy monitoring
        cron.schedule('*/45 * * * * *', () => this.monitorGitHubActionsRedundancy());
        
        this.log('INFO', 'GitHub Actions Redundancy System initialized successfully');
      }
    } catch (error) {
      this.log('ERROR', 'Failed to initialize GitHub Actions Redundancy System', error);
    }
  }

  async initializeNetlifyFunctionsRedundancy() {
    this.log('INFO', 'Initializing Netlify Functions Redundancy System...');
    
    try {
      // Check Netlify functions
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      if (fs.existsSync(functionsDir)) {
        const functionFiles = fs.readdirSync(functionsDir)
          .filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        
        this.status.netlify.functions = functionFiles;
        this.status.netlify.healthy = functionFiles.length > 0;
        this.status.netlify.lastCheck = new Date();
        
        // Start Netlify functions redundancy monitoring
        cron.schedule('*/60 * * * * *', () => this.monitorNetlifyFunctionsRedundancy());
        
        this.log('INFO', 'Netlify Functions Redundancy System initialized successfully');
      }
    } catch (error) {
      this.log('ERROR', 'Failed to initialize Netlify Functions Redundancy System', error);
    }
  }

  async initializeCustomAutomationRedundancy() {
    this.log('INFO', 'Initializing Custom Automation Redundancy System...');
    
    try {
      // Check custom automation scripts
      const automationDir = path.join(process.cwd(), 'automation');
      if (fs.existsSync(automationDir)) {
        const automationFiles = fs.readdirSync(automationDir)
          .filter(file => file.endsWith('.cjs') || file.endsWith('.js'));
        
        this.status.custom.scripts = automationFiles;
        this.status.custom.healthy = automationFiles.length > 0;
        this.status.custom.lastCheck = new Date();
        
        // Start custom automation redundancy monitoring
        cron.schedule('*/90 * * * * *', () => this.monitorCustomAutomationRedundancy());
        
        this.log('INFO', 'Custom Automation Redundancy System initialized successfully');
      }
    } catch (error) {
      this.log('ERROR', 'Failed to initialize Custom Automation Redundancy System', error);
    }
  }

  async monitorPM2Redundancy() {
    try {
      let pm2Status;
      let pm2Processes = [];
      
      try {
        pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        pm2Processes = JSON.parse(pm2Status);
      } catch (jsonError) {
        try {
          pm2Status = execSync('pm2 status', { encoding: 'utf8' });
          pm2Processes = this.parsePM2TextOutput(pm2Status);
        } catch (textError) {
          this.log('ERROR', 'Failed to get PM2 status', textError);
          this.status.pm2.healthy = false;
          return;
        }
      }
      
      // Check for failed processes
      const failedProcesses = pm2Processes.filter(proc => 
        proc.pm2_env && proc.pm2_env.status === 'errored'
      );
      
      if (failedProcesses.length > 0) {
        this.log('WARN', `Found ${failedProcesses.length} failed PM2 processes`, failedProcesses);
        
        if (this.config.autoRecovery) {
          await this.recoverPM2Processes(failedProcesses);
        }
      }
      
      this.status.pm2.processes = pm2Processes;
      this.status.pm2.healthy = failedProcesses.length === 0;
      this.status.pm2.lastCheck = new Date();
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor PM2 redundancy', error);
      this.status.pm2.healthy = false;
    }
  }

  async monitorGitHubActionsRedundancy() {
    try {
      // Check if workflows are accessible and valid
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir)
          .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
        
        // Validate workflow files
        const validWorkflows = [];
        for (const workflow of workflowFiles) {
          try {
            const workflowPath = path.join(workflowsDir, workflow);
            const content = fs.readFileSync(workflowPath, 'utf8');
            if (content.includes('name:') && content.includes('on:')) {
              validWorkflows.push(workflow);
            }
          } catch (error) {
            this.log('WARN', `Invalid workflow file: ${workflow}`, error);
          }
        }
        
        this.status.github.workflows = validWorkflows;
        this.status.github.healthy = validWorkflows.length > 0;
        this.status.github.lastCheck = new Date();
        
        if (validWorkflows.length < workflowFiles.length) {
          this.log('WARN', `Some workflow files are invalid: ${workflowFiles.length - validWorkflows.length} invalid`);
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to monitor GitHub Actions redundancy', error);
      this.status.github.healthy = false;
    }
  }

  async monitorNetlifyFunctionsRedundancy() {
    try {
      // Check Netlify functions health
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      if (fs.existsSync(functionsDir)) {
        const functionFiles = fs.readdirSync(functionsDir)
          .filter(file => file.endsWith('.js') || file.endsWith('.ts'));
        
        // Check if functions manifest exists and is valid
        const manifestPath = path.join(functionsDir, 'functions-manifest.json');
        let manifestValid = false;
        
        if (fs.existsSync(manifestPath)) {
          try {
            const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
            manifestValid = manifest.functions && Array.isArray(manifest.functions);
          } catch (error) {
            this.log('WARN', 'Invalid functions manifest', error);
          }
        }
        
        this.status.netlify.functions = functionFiles;
        this.status.netlify.healthy = functionFiles.length > 0 && manifestValid;
        this.status.netlify.lastCheck = new Date();
        
        if (!manifestValid) {
          this.log('WARN', 'Netlify functions manifest is invalid or missing');
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to monitor Netlify functions redundancy', error);
      this.status.netlify.healthy = false;
    }
  }

  async monitorCustomAutomationRedundancy() {
    try {
      // Check custom automation scripts health
      const automationDir = path.join(process.cwd(), 'automation');
      if (fs.existsSync(automationDir)) {
        const automationFiles = fs.readdirSync(automationDir)
          .filter(file => file.endsWith('.cjs') || file.endsWith('.js'));
        
        // Check if critical automation files exist
        const criticalFiles = [
          'pm2-auto-sync.js',
          'git-sync.cjs',
          'master-redundancy-orchestrator.cjs',
          'enhanced-pm2-redundancy.cjs'
        ];
        
        const missingCriticalFiles = criticalFiles.filter(file => 
          !automationFiles.includes(file)
        );
        
        this.status.custom.scripts = automationFiles;
        this.status.custom.healthy = missingCriticalFiles.length === 0;
        this.status.custom.lastCheck = new Date();
        
        if (missingCriticalFiles.length > 0) {
          this.log('WARN', `Missing critical automation files: ${missingCriticalFiles.join(', ')}`);
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to monitor custom automation redundancy', error);
      this.status.custom.healthy = false;
    }
  }

  async recoverPM2Processes(failedProcesses) {
    this.log('INFO', `Attempting to recover ${failedProcesses.length} failed PM2 processes...`);
    
    for (const process of failedProcesses) {
      try {
        if (process.name) {
          execSync(`pm2 restart ${process.name}`, { stdio: 'pipe' });
          this.log('INFO', `Successfully restarted PM2 process: ${process.name}`);
        }
      } catch (error) {
        this.log('ERROR', `Failed to restart PM2 process: ${process.name}`, error);
      }
    }
  }

  startMonitoring() {
    this.log('INFO', 'Starting comprehensive monitoring...');
    
    // Monitor overall system health
    setInterval(() => {
      this.updateOverallHealth();
    }, this.config.healthCheckInterval);
  }

  startHealthChecks() {
    this.log('INFO', 'Starting health checks...');
    
    // Run initial health check
    this.updateOverallHealth();
    
    // Schedule regular health checks
    cron.schedule('*/5 * * * *', () => {
      this.updateOverallHealth();
    });
  }

  updateOverallHealth() {
    const checks = [
      this.status.pm2.healthy,
      this.status.github.healthy,
      this.status.netlify.healthy,
      this.status.custom.healthy
    ];
    
    const healthyChecks = checks.filter(check => check === true).length;
    const totalChecks = checks.length;
    const healthScore = (healthyChecks / totalChecks) * 100;
    
    this.status.overall.healthy = healthScore >= 75;
    this.status.overall.score = healthScore;
    this.status.overall.lastCheck = new Date();
    
    this.log('INFO', `Overall health score: ${healthScore.toFixed(1)}% (${healthyChecks}/${totalChecks} systems healthy)`);
    
    // Log detailed status
    if (this.config.logLevel === 'DEBUG') {
      this.log('DEBUG', 'Detailed system status', this.status);
    }
  }

  getStatus() {
    return this.status;
  }

        parsePM2TextOutput(textOutput) {
        try {
          const lines = textOutput.split('\n');
          const processes = [];
          
          for (const line of lines) {
            // Skip header lines and empty lines
            if (line.includes('┌─') || line.includes('├─') || line.includes('└─') || line.includes('─') || !line.trim()) {
              continue;
            }
            
            // Skip column headers
            if (line.includes('id') && line.includes('name') && line.includes('status')) {
              continue;
            }
            
            // Process line - look for lines with pipe separators
            if (line.includes('│')) {
              const parts = line.split('│').map(part => part.trim()).filter(part => part.length > 0);
              
              if (parts.length >= 9) {
                // Strip ANSI color codes from the ID field
                const cleanId = parts[0].replace(/\u001b\[[0-9;]*m/g, '');
                const cleanStatus = parts[8].replace(/\u001b\[[0-9;]*m/g, '');
                
                const process = {
                  pm_id: parseInt(cleanId) || 0,
                  name: parts[1] || 'unknown',
                  pm2_env: {
                    status: cleanStatus || 'unknown', // status is at index 8
                    pm_uptime: 0,
                    restart_time: parseInt(parts[7]) || 0 // restart count is at index 7
                  },
                  monit: {
                    memory: 0,
                    cpu: 0
                  }
                };
                
                // Try to parse memory and CPU if available
                if (parts[9] && parts[9] !== 'N/A' && parts[9] !== '0%') {
                  const cpuStr = parts[9].replace('%', '');
                  process.monit.cpu = parseFloat(cpuStr) || 0;
                }
                
                if (parts[10] && parts[10] !== 'N/A') {
                  const memStr = parts[10].replace('mb', '').replace('MB', '');
                  process.monit.memory = parseFloat(memStr) || 0;
                }
                
                // Only add if we have a valid process ID (0 is valid in PM2)
                if (process.pm_id >= 0) {
                  processes.push(process);
                }
              }
            }
          }
          
          this.log('INFO', `Parsed ${processes.length} PM2 processes from text output`);
          return processes;
        } catch (error) {
          this.log('ERROR', 'Failed to parse PM2 text output', error);
          return [];
        }
      }

  async stop() {
    this.log('INFO', 'Stopping Ultimate Redundancy System V2...');
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancySystemV2();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.stop();
  });
  
  process.on('SIGTERM', async () => {
    await system.stop();
  });
  
  // Start the system
  system.start().catch(error => {
    console.error('Failed to start Ultimate Redundancy System V2:', error);
    process.exit(1);
  });
}

module.exports = UltimateRedundancySystemV2;