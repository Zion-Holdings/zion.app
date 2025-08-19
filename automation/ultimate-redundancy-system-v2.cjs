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
      // Check PM2 status
      const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
      const pm2Processes = JSON.parse(pm2Status);
      
      this.status.pm2.processes = pm2Processes;
      this.status.pm2.healthy = pm2Processes.length > 0;
      this.status.pm2.lastCheck = new Date();
      
      // Start PM2 redundancy monitoring
      this.startPM2Monitoring();
      
      this.log('INFO', 'PM2 Redundancy System initialized');
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
        
        // Start GitHub Actions monitoring
        this.startGitHubActionsMonitoring();
        
        this.log('INFO', `GitHub Actions Redundancy System initialized with ${workflowFiles.length} workflows`);
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
        
        // Start Netlify Functions monitoring
        this.startNetlifyFunctionsMonitoring();
        
        this.log('INFO', `Netlify Functions Redundancy System initialized with ${functionFiles.length} functions`);
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
          .filter(file => file.endsWith('.cjs') || file.endsWith('.js'))
          .filter(file => !file.includes('redundancy') && !file.includes('test'));
        
        this.status.custom.scripts = automationFiles;
        this.status.custom.healthy = automationFiles.length > 0;
        this.status.custom.lastCheck = new Date();
        
        // Start custom automation monitoring
        this.startCustomAutomationMonitoring();
        
        this.log('INFO', `Custom Automation Redundancy System initialized with ${automationFiles.length} scripts`);
      }
    } catch (error) {
      this.log('ERROR', 'Failed to initialize Custom Automation Redundancy System', error);
    }
  }

  startPM2Monitoring() {
    // Monitor PM2 processes every 30 seconds
    setInterval(async () => {
      try {
        const pm2Status = execSync('pm2 status --json', { encoding: 'utf8' });
        const pm2Processes = JSON.parse(pm2Status);
        
        this.status.pm2.processes = pm2Processes;
        this.status.pm2.lastCheck = new Date();
        
        // Check for failed processes and restart them
        const failedProcesses = pm2Processes.filter(proc => proc.pm2_env.status === 'errored');
        if (failedProcesses.length > 0 && this.config.autoRecovery) {
          this.log('WARN', `Found ${failedProcesses.length} failed PM2 processes, attempting recovery...`);
          failedProcesses.forEach(proc => {
            try {
              execSync(`pm2 restart ${proc.name}`);
              this.log('INFO', `Restarted PM2 process: ${proc.name}`);
            } catch (error) {
              this.log('ERROR', `Failed to restart PM2 process: ${proc.name}`, error);
            }
          });
        }
        
        this.status.pm2.healthy = pm2Processes.length > 0 && failedProcesses.length === 0;
        
      } catch (error) {
        this.log('ERROR', 'PM2 monitoring error', error);
        this.status.pm2.healthy = false;
      }
    }, 30000);
  }

  startGitHubActionsMonitoring() {
    // Monitor GitHub Actions workflows every minute
    setInterval(async () => {
      try {
        const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
        if (fs.existsSync(workflowsDir)) {
          const workflowFiles = fs.readdirSync(workflowsDir)
            .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
          
          this.status.github.workflows = workflowFiles;
          this.status.github.lastCheck = new Date();
          this.status.github.healthy = workflowFiles.length > 0;
          
          // Validate workflow files
          workflowFiles.forEach(workflow => {
            try {
              const workflowPath = path.join(workflowsDir, workflow);
              const content = fs.readFileSync(workflowPath, 'utf8');
              
              // Basic validation
              if (!content.includes('name:') || !content.includes('on:')) {
                this.log('WARN', `Invalid workflow file detected: ${workflow}`);
              }
            } catch (error) {
              this.log('ERROR', `Failed to validate workflow: ${workflow}`, error);
            }
          });
        }
      } catch (error) {
        this.log('ERROR', 'GitHub Actions monitoring error', error);
        this.status.github.healthy = false;
      }
    }, 60000);
  }

  startNetlifyFunctionsMonitoring() {
    // Monitor Netlify Functions every 2 minutes
    setInterval(async () => {
      try {
        const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
        if (fs.existsSync(functionsDir)) {
          const functionFiles = fs.readdirSync(functionsDir)
            .filter(file => file.endsWith('.js') || file.endsWith('.ts'));
          
          this.status.netlify.functions = functionFiles;
          this.status.netlify.lastCheck = new Date();
          this.status.netlify.healthy = functionFiles.length > 0;
          
          // Check function manifest
          const manifestPath = path.join(functionsDir, 'functions-manifest.json');
          if (fs.existsSync(manifestPath)) {
            try {
              const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
              if (manifest.functions && manifest.functions.length > 0) {
                this.log('INFO', `Netlify Functions manifest contains ${manifest.functions.length} functions`);
              }
            } catch (error) {
              this.log('ERROR', 'Failed to parse Netlify Functions manifest', error);
            }
          }
        }
      } catch (error) {
        this.log('ERROR', 'Netlify Functions monitoring error', error);
        this.status.netlify.healthy = false;
      }
    }, 120000);
  }

  startCustomAutomationMonitoring() {
    // Monitor custom automation scripts every 5 minutes
    setInterval(async () => {
      try {
        const automationDir = path.join(process.cwd(), 'automation');
        if (fs.existsSync(automationDir)) {
          const automationFiles = fs.readdirSync(automationDir)
            .filter(file => file.endsWith('.cjs') || file.endsWith('.js'))
            .filter(file => !file.includes('redundancy') && !file.includes('test'));
          
          this.status.custom.scripts = automationFiles;
          this.status.custom.lastCheck = new Date();
          this.status.custom.healthy = automationFiles.length > 0;
          
          // Check script syntax
          automationFiles.forEach(script => {
            try {
              const scriptPath = path.join(automationDir, script);
              const content = fs.readFileSync(scriptPath, 'utf8');
              
              // Basic syntax validation
              if (content.includes('require(') || content.includes('import ')) {
                // Try to load the module to check for syntax errors
                require(scriptPath);
              }
            } catch (error) {
              this.log('ERROR', `Syntax error in automation script: ${script}`, error);
            }
          });
        }
      } catch (error) {
        this.log('ERROR', 'Custom automation monitoring error', error);
        this.status.custom.healthy = false;
      }
    }, 300000);
  }

  startMonitoring() {
    // Overall system monitoring every 10 seconds
    setInterval(() => {
      try {
        const healthySystems = [
          this.status.pm2.healthy,
          this.status.github.healthy,
          this.status.netlify.healthy,
          this.status.custom.healthy
        ].filter(Boolean).length;
        
        this.status.overall.score = (healthySystems / 4) * 100;
        this.status.overall.healthy = this.status.overall.score >= 75;
        this.status.overall.lastCheck = new Date();
        
        if (this.status.overall.healthy) {
          this.log('INFO', `System health: ${this.status.overall.score.toFixed(1)}% (${healthySystems}/4 systems healthy)`);
        } else {
          this.log('WARN', `System health degraded: ${this.status.overall.score.toFixed(1)}% (${healthySystems}/4 systems healthy)`);
        }
        
      } catch (error) {
        this.log('ERROR', 'Overall monitoring error', error);
      }
    }, 10000);
  }

  startHealthChecks() {
    // Comprehensive health check every minute
    setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log('ERROR', 'Health check failed', error);
      }
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    this.log('INFO', 'Performing comprehensive health check...');
    
    try {
      // Check system resources
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      if (memoryUsage.heapUsed > 500 * 1024 * 1024) { // 500MB
        this.log('WARN', 'High memory usage detected', memoryUsage);
      }
      
      // Check disk space
      const diskUsage = execSync('df -h .', { encoding: 'utf8' });
      this.log('INFO', 'Disk usage:', diskUsage);
      
      // Check network connectivity
      try {
        execSync('ping -c 1 8.8.8.8', { stdio: 'ignore' });
      } catch (error) {
        this.log('WARN', 'Network connectivity issues detected');
      }
      
      // Check Git status
      try {
        const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
        if (gitStatus.trim()) {
          this.log('INFO', 'Git repository has uncommitted changes');
        }
      } catch (error) {
        this.log('WARN', 'Git status check failed', error);
      }
      
      this.log('INFO', 'Health check completed successfully');
      
    } catch (error) {
      this.log('ERROR', 'Health check failed', error);
    }
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

  async stop() {
    this.log('INFO', 'Stopping Ultimate Redundancy System V2...');
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the system if this file is run directly
if (require.main === module) {
  const system = new UltimateRedundancySystemV2();
  system.start().catch(console.error);
}

module.exports = UltimateRedundancySystemV2;