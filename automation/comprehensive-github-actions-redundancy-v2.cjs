#!/usr/bin/env node

/**
 * Comprehensive GitHub Actions Redundancy System V2
 * Complete redundancy coverage for all GitHub Actions workflows
 * Enhanced monitoring, validation, and backup capabilities
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');
const yaml = require('js-yaml');

class ComprehensiveGitHubActionsRedundancyV2 {
  constructor() {
    this.config = {
      logLevel: process.env.GITHUB_REDUNDANCY_LOG_LEVEL || 'INFO',
      healthCheckInterval: parseInt(process.env.GITHUB_HEALTH_CHECK_INTERVAL) || 60000,
      maxFailures: parseInt(process.env.GITHUB_MAX_FAILURES) || 3,
      autoTrigger: process.env.GITHUB_AUTO_TRIGGER === 'true',
      backupTriggers: process.env.GITHUB_BACKUP_TRIGGERS === 'true',
      workflowValidation: process.env.GITHUB_WORKFLOW_VALIDATION === 'true',
      apiHealthCheck: process.env.GITHUB_API_HEALTH_CHECK === 'true',
      backupInterval: parseInt(process.env.GITHUB_BACKUP_INTERVAL) || 300000
    };
    
    this.workflows = {
      active: [],
      backup: [],
      failed: [],
      invalid: []
    };
    
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.backupDir = path.join(process.cwd(), '.github', 'workflows', 'backups');
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    this.setupLogging();
    
    this.failureCounts = new Map();
    this.workflowHistory = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupLogging() {
    const logFile = path.join(this.logDir, 'comprehensive-github-actions-redundancy-v2.log');
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
    this.log('INFO', 'Starting Comprehensive GitHub Actions Redundancy System V2...');
    
    try {
      // Initialize GitHub Actions redundancy
      await this.initializeGitHubActionsRedundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start backup system
      this.startBackupSystem();
      
      this.log('INFO', 'Comprehensive GitHub Actions Redundancy System V2 started successfully');
      
      // Keep the process alive
      setInterval(() => {}, 1000);
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Comprehensive GitHub Actions Redundancy System V2', error);
      process.exit(1);
    }
  }

  async initializeGitHubActionsRedundancy() {
    this.log('INFO', 'Initializing GitHub Actions Redundancy System...');
    
    try {
      // Check GitHub Actions directory
      await this.checkWorkflowsDirectory();
      
      // Discover workflows
      await this.discoverWorkflows();
      
      // Validate workflows
      if (this.config.workflowValidation) {
        await this.validateWorkflows();
      }
      
      // Create backup directory
      this.ensureBackupDirectory();
      
      // Create initial backups
      await this.createWorkflowBackups();
      
      this.log('INFO', 'GitHub Actions Redundancy System initialized successfully');
    } catch (error) {
      this.log('ERROR', 'Failed to initialize GitHub Actions Redundancy System', error);
    }
  }

  async checkWorkflowsDirectory() {
    if (!fs.existsSync(this.workflowsDir)) {
      this.log('WARN', 'GitHub Actions workflows directory not found, creating...');
      fs.mkdirSync(this.workflowsDir, { recursive: true });
    }
    
    this.log('INFO', `GitHub Actions workflows directory: ${this.workflowsDir}`);
  }

  async discoverWorkflows() {
    this.log('INFO', 'Discovering GitHub Actions workflows...');
    
    try {
      const workflowFiles = fs.readdirSync(this.workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .filter(file => !file.includes('backup'));
      
      this.workflows.active = workflowFiles;
      this.log('INFO', `Discovered ${workflowFiles.length} active workflows: ${workflowFiles.join(', ')}`);
      
    } catch (error) {
      this.log('ERROR', 'Failed to discover workflows', error);
    }
  }

  async validateWorkflows() {
    this.log('INFO', 'Validating GitHub Actions workflows...');
    
    this.workflows.invalid = [];
    
    for (const workflow of this.workflows.active) {
      try {
        const workflowPath = path.join(this.workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, 'utf8');
        
        // Basic YAML validation
        const parsed = yaml.load(content);
        
        // Check required fields
        if (!parsed.name || !parsed.on) {
          this.workflows.invalid.push({
            file: workflow,
            reason: 'Missing required fields (name or on)'
          });
          continue;
        }
        
        // Check trigger configuration
        if (!parsed.on.schedule && !parsed.on.push && !parsed.on.pull_request && !parsed.on.workflow_dispatch) {
          this.workflows.invalid.push({
            file: workflow,
            reason: 'No valid triggers configured'
          });
          continue;
        }
        
        // Check jobs configuration
        if (!parsed.jobs || Object.keys(parsed.jobs).length === 0) {
          this.workflows.invalid.push({
            file: workflow,
            reason: 'No jobs configured'
          });
          continue;
        }
        
        this.log('INFO', `Workflow ${workflow} is valid`);
        
      } catch (error) {
        this.workflows.invalid.push({
          file: workflow,
          reason: `YAML parsing error: ${error.message}`
        });
      }
    }
    
    if (this.workflows.invalid.length > 0) {
      this.log('WARN', `Found ${this.workflows.invalid.length} invalid workflows`, this.workflows.invalid);
    }
  }

  ensureBackupDirectory() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
      this.log('INFO', 'Created workflows backup directory');
    }
  }

  async createWorkflowBackups() {
    this.log('INFO', 'Creating workflow backups...');
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      for (const workflow of this.workflows.active) {
        const sourcePath = path.join(this.workflowsDir, workflow);
        const backupPath = path.join(this.backupDir, `${workflow}.backup-${timestamp}`);
        
        fs.copyFileSync(sourcePath, backupPath);
        this.log('INFO', `Created backup for ${workflow}: ${backupPath}`);
      }
      
      // Clean old backups
      this.cleanOldBackups();
      
    } catch (error) {
      this.log('ERROR', 'Failed to create workflow backups', error);
    }
  }

  cleanOldBackups() {
    try {
      const files = fs.readdirSync(this.backupDir)
        .filter(file => file.includes('.backup-'))
        .map(file => ({
          name: file,
          path: path.join(this.backupDir, file),
          time: fs.statSync(path.join(this.backupDir, file)).mtime.getTime()
        }))
        .sort((a, b) => b.time - a.time);
      
      // Keep last 20 backups
      for (let i = 20; i < files.length; i++) {
        fs.unlinkSync(files[i].path);
        this.log('INFO', `Removed old backup: ${files[i].name}`);
      }
    } catch (error) {
      this.log('ERROR', 'Failed to clean old backups', error);
    }
  }

  startMonitoring() {
    this.log('INFO', 'Starting GitHub Actions workflow monitoring...');
    
    // Monitor workflows every minute
    cron.schedule('0 * * * * *', () => {
      this.monitorWorkflows();
    });
    
    // Monitor workflow changes every 5 minutes
    cron.schedule('0 */5 * * * *', () => {
      this.monitorWorkflowChanges();
    });
  }

  startHealthChecks() {
    this.log('INFO', 'Starting GitHub Actions health checks...');
    
    // Run initial health check
    this.performHealthCheck();
    
    // Schedule regular health checks
    cron.schedule('*/3 * * * *', () => {
      this.performHealthCheck();
    });
  }

  startBackupSystem() {
    this.log('INFO', 'Starting GitHub Actions backup system...');
    
    // Create backups every 5 minutes
    cron.schedule('*/5 * * * *', () => {
      this.createWorkflowBackups();
    });
  }

  async monitorWorkflows() {
    try {
      // Check if workflows are accessible
      const currentWorkflows = fs.readdirSync(this.workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
        .filter(file => !file.includes('backup'));
      
      // Check for new workflows
      const newWorkflows = currentWorkflows.filter(w => !this.workflows.active.includes(w));
      if (newWorkflows.length > 0) {
        this.log('INFO', `New workflows detected: ${newWorkflows.join(', ')}`);
        this.workflows.active = currentWorkflows;
        
        // Validate new workflows
        if (this.config.workflowValidation) {
          await this.validateWorkflows();
        }
      }
      
      // Check for deleted workflows
      const deletedWorkflows = this.workflows.active.filter(w => !currentWorkflows.includes(w));
      if (deletedWorkflows.length > 0) {
        this.log('WARN', `Workflows deleted: ${deletedWorkflows.join(', ')}`);
        this.workflows.active = currentWorkflows;
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor workflows', error);
    }
  }

  async monitorWorkflowChanges() {
    try {
      for (const workflow of this.workflows.active) {
        const workflowPath = path.join(this.workflowsDir, workflow);
        const currentContent = fs.readFileSync(workflowPath, 'utf8');
        
        // Check if workflow content has changed
        if (!this.workflowHistory.has(workflow)) {
          this.workflowHistory.set(workflow, currentContent);
          continue;
        }
        
        const previousContent = this.workflowHistory.get(workflow);
        if (currentContent !== previousContent) {
          this.log('INFO', `Workflow ${workflow} has been modified`);
          
          // Update history
          this.workflowHistory.set(workflow, currentContent);
          
          // Create backup of modified workflow
          if (this.config.backupTriggers) {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupPath = path.join(this.backupDir, `${workflow}.modified-${timestamp}`);
            fs.copyFileSync(workflowPath, backupPath);
            this.log('INFO', `Created backup of modified workflow: ${backupPath}`);
          }
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to monitor workflow changes', error);
    }
  }

  async performHealthCheck() {
    this.log('INFO', 'Performing GitHub Actions health check...');
    
    try {
      const healthStatus = {
        totalWorkflows: this.workflows.active.length,
        validWorkflows: this.workflows.active.length - this.workflows.invalid.length,
        invalidWorkflows: this.workflows.invalid.length,
        healthScore: 0,
        issues: []
      };
      
      // Calculate health score
      if (healthStatus.totalWorkflows > 0) {
        healthStatus.healthScore = (healthStatus.validWorkflows / healthStatus.totalWorkflows) * 100;
      }
      
      // Identify issues
      if (healthStatus.invalidWorkflows > 0) {
        healthStatus.issues.push(`${healthStatus.invalidWorkflows} invalid workflows`);
      }
      
      if (healthStatus.totalWorkflows === 0) {
        healthStatus.issues.push('No workflows found');
      }
      
      if (healthStatus.healthScore < 75) {
        healthStatus.issues.push('Overall health score below 75%');
      }
      
      this.log('INFO', `Health check completed - Score: ${healthStatus.healthScore.toFixed(1)}%`, healthStatus);
      
      // Take action if health is poor
      if (healthStatus.healthScore < 75) {
        await this.performRecoveryActions();
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform health check', error);
    }
  }

  async performRecoveryActions() {
    this.log('INFO', 'Performing recovery actions...');
    
    try {
      // Attempt to fix invalid workflows
      if (this.workflows.invalid.length > 0) {
        await this.attemptWorkflowRecovery();
      }
      
      // Restore from backups if needed
      if (this.workflows.active.length === 0) {
        await this.restoreFromBackups();
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform recovery actions', error);
    }
  }

  async attemptWorkflowRecovery() {
    this.log('INFO', 'Attempting to recover invalid workflows...');
    
    for (const invalidWorkflow of this.workflows.invalid) {
      try {
        const workflowPath = path.join(this.workflowsDir, invalidWorkflow.file);
        const content = fs.readFileSync(workflowPath, 'utf8');
        
        // Try to fix common issues
        let fixedContent = content;
        
        // Fix missing name
        if (!content.includes('name:')) {
          const workflowName = invalidWorkflow.file.replace(/\.(yml|yaml)$/, '');
          fixedContent = `name: ${workflowName}\n${content}`;
        }
        
        // Fix missing triggers
        if (!content.includes('on:')) {
          fixedContent += '\n\non:\n  workflow_dispatch:\n';
        }
        
        // Fix missing jobs
        if (!content.includes('jobs:')) {
          fixedContent += '\n\njobs:\n  default:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Default step\n        run: echo "Workflow executed"\n';
        }
        
        // Write fixed content
        if (fixedContent !== content) {
          fs.writeFileSync(workflowPath, fixedContent);
          this.log('INFO', `Attempted to fix workflow: ${invalidWorkflow.file}`);
        }
        
      } catch (error) {
        this.log('ERROR', `Failed to fix workflow: ${invalidWorkflow.file}`, error);
      }
    }
  }

  async restoreFromBackups() {
    this.log('INFO', 'Attempting to restore workflows from backups...');
    
    try {
      const backupFiles = fs.readdirSync(this.backupDir)
        .filter(file => file.includes('.backup-'))
        .sort()
        .reverse();
      
      if (backupFiles.length > 0) {
        const latestBackup = backupFiles[0];
        const backupPath = path.join(this.backupDir, latestBackup);
        
        // Extract workflow name from backup filename
        const workflowName = latestBackup.replace(/\.backup-.*$/, '');
        const targetPath = path.join(this.workflowsDir, workflowName);
        
        fs.copyFileSync(backupPath, targetPath);
        this.log('INFO', `Restored workflow from backup: ${workflowName}`);
        
        // Refresh workflow list
        await this.discoverWorkflows();
      }
    } catch (error) {
      this.log('ERROR', 'Failed to restore from backups', error);
    }
  }

  async triggerWorkflow(workflowName) {
    if (!this.config.autoTrigger) {
      this.log('INFO', `Auto-trigger disabled, skipping workflow: ${workflowName}`);
      return;
    }
    
    try {
      this.log('INFO', `Triggering workflow: ${workflowName}`);
      
      // Use GitHub CLI if available
      try {
        execSync(`gh workflow run ${workflowName}`, { stdio: 'pipe' });
        this.log('INFO', `Successfully triggered workflow: ${workflowName}`);
      } catch (error) {
        // Fallback to manual trigger
        this.log('WARN', `GitHub CLI not available, manual trigger required for: ${workflowName}`);
      }
      
    } catch (error) {
      this.log('ERROR', `Failed to trigger workflow: ${workflowName}`, error);
    }
  }

  getStatus() {
    return {
      workflows: this.workflows,
      config: this.config,
      failureCounts: Object.fromEntries(this.failureCounts),
      health: {
        total: this.workflows.active.length,
        valid: this.workflows.active.length - this.workflows.invalid.length,
        invalid: this.workflows.invalid.length,
        healthScore: this.workflows.active.length > 0 ? 
          ((this.workflows.active.length - this.workflows.invalid.length) / this.workflows.active.length) * 100 : 0
      }
    };
  }

  async stop() {
    this.log('INFO', 'Stopping Comprehensive GitHub Actions Redundancy System V2...');
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveGitHubActionsRedundancyV2();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.stop();
  });
  
  process.on('SIGTERM', async () => {
    await system.stop();
  });
  
  // Start the system
  system.start().catch(error => {
    console.error('Failed to start Comprehensive GitHub Actions Redundancy System V2:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveGitHubActionsRedundancyV2;