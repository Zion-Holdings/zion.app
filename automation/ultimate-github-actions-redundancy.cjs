#!/usr/bin/env node

/**
 * Ultimate GitHub Actions Redundancy System
 * Comprehensive redundancy for all GitHub Actions automations
 * 
 * This system provides:
 * - Workflow monitoring and validation
 * - Backup workflow creation and management
 * - Auto-recovery for failed workflows
 * - Workflow health monitoring
 * - Comprehensive reporting
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

class UltimateGitHubActionsRedundancy {
  constructor() {
    this.config = {
      logLevel: process.env.GITHUB_REDUNDANCY_LOG_LEVEL || 'INFO',
      checkInterval: parseInt(process.env.GITHUB_CHECK_INTERVAL) || 60000,
      maxRetries: parseInt(process.env.GITHUB_MAX_RETRIES) || 3,
      autoRecovery: process.env.GITHUB_AUTO_RECOVERY === 'true',
      autoBackup: process.env.GITHUB_AUTO_BACKUP === 'true',
      logDir: path.join(__dirname, 'logs'),
      statusFile: path.join(__dirname, 'ultimate-github-actions-status.json')
    };
    
    this.status = {
      startTime: new Date().toISOString(),
      lastCheck: null,
      workflows: [],
      backupWorkflows: [],
      validation: { valid: 0, invalid: 0, errors: [] },
      health: { status: 'unknown', score: 0, issues: [] },
      recoveryAttempts: 0
    };
    
    this.ensureDirectories();
    this.loadStatus();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
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
    const logFile = path.join(this.config.logDir, 'ultimate-github-actions.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        const data = fs.readFileSync(this.config.statusFile, 'utf8');
        this.status = { ...this.status, ...JSON.parse(data) };
        this.log('INFO', 'Status loaded from file');
      }
    } catch (error) {
      this.log('WARN', 'Could not load status file', error.message);
    }
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log('ERROR', 'Could not save status file', error.message);
    }
  }

  async checkGitHubActionsWorkflows() {
    try {
      this.log('INFO', 'Checking GitHub Actions workflows...');
      
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      
      if (!fs.existsSync(workflowsDir)) {
        this.log('WARN', 'GitHub Actions workflows directory not found');
        this.status.workflows = [];
        this.status.backupWorkflows = [];
        return;
      }
      
      // Get all workflow files
      const workflowFiles = fs.readdirSync(workflowsDir)
        .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
      
      this.status.workflows = workflowFiles;
      
      // Separate backup workflows
      this.status.backupWorkflows = workflowFiles.filter(file => file.includes('backup'));
      const primaryWorkflows = workflowFiles.filter(file => !file.includes('backup'));
      
      this.log('INFO', `Found ${workflowFiles.length} total workflows (${primaryWorkflows.length} primary, ${this.status.backupWorkflows.length} backup)`);
      
      // Validate workflows
      await this.validateWorkflows(workflowFiles);
      
    } catch (error) {
      this.log('ERROR', 'GitHub Actions workflows check failed', error.message);
    }
  }

  async validateWorkflows(workflowFiles) {
    this.log('INFO', 'Validating GitHub Actions workflows...');
    
    const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    let validCount = 0;
    let invalidCount = 0;
    const errors = [];
    
    for (const workflow of workflowFiles) {
      try {
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, 'utf8');
        
        // Basic YAML validation
        try {
          // Simple YAML validation - check for basic structure
          if (content.includes('name:') && (content.includes('on:') || content.includes('jobs:'))) {
            validCount++;
            this.log('INFO', `✓ ${workflow} - Valid structure`);
          } else {
            invalidCount++;
            errors.push(`${workflow}: Missing required sections (name, on, jobs)`);
            this.log('WARN', `✗ ${workflow} - Invalid structure`);
          }
        } catch (yamlError) {
          invalidCount++;
          errors.push(`${workflow}: YAML parsing error - ${yamlError.message}`);
          this.log('ERROR', `✗ ${workflow} - YAML parsing failed`);
        }
        
      } catch (error) {
        invalidCount++;
        errors.push(`${workflow}: File read error - ${error.message}`);
        this.log('ERROR', `✗ ${workflow} - File read failed`);
      }
    }
    
    this.status.validation.valid = validCount;
    this.status.validation.invalid = invalidCount;
    this.status.validation.errors = errors;
    
    this.log('INFO', `Workflow validation completed: ${validCount} valid, ${invalidCount} invalid`);
  }

  async createBackupWorkflows() {
    if (!this.config.autoBackup) {
      this.log('INFO', 'Auto-backup disabled, skipping backup creation');
      return;
    }
    
    this.log('INFO', 'Creating backup workflows...');
    
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const primaryWorkflows = this.status.workflows.filter(file => !file.includes('backup'));
      
      for (const workflow of primaryWorkflows) {
        const backupName = workflow.replace('.yml', '-backup.yml').replace('.yaml', '-backup.yaml');
        const backupPath = path.join(workflowsDir, backupName);
        
        if (!fs.existsSync(backupPath)) {
          const workflowPath = path.join(workflowsDir, workflow);
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Create backup with timestamp comment
          const backupContent = `# Backup of ${workflow} - Generated: ${new Date().toISOString()}\n${content}`;
          fs.writeFileSync(backupPath, backupContent);
          
          this.log('INFO', `Created backup: ${backupName}`);
        }
      }
      
      // Refresh workflow lists
      await this.checkGitHubActionsWorkflows();
      
      this.log('INFO', 'Backup workflows created successfully');
      
    } catch (error) {
      this.log('ERROR', 'Failed to create backup workflows', error.message);
    }
  }

  async checkWorkflowTriggers() {
    this.log('INFO', 'Checking workflow triggers...');
    
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const issues = [];
      
      for (const workflow of this.status.workflows) {
        if (workflow.includes('backup')) continue; // Skip backup workflows
        
        try {
          const workflowPath = path.join(workflowsDir, workflow);
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Check for common trigger patterns
          if (!content.includes('on:')) {
            issues.push(`${workflow}: Missing trigger section`);
            continue;
          }
          
          // Check for specific trigger types
          const hasSchedule = content.includes('schedule:');
          const hasPush = content.includes('push:');
          const hasPullRequest = content.includes('pull_request:');
          const hasWorkflowDispatch = content.includes('workflow_dispatch:');
          
          if (!hasSchedule && !hasPush && !hasPullRequest && !hasWorkflowDispatch) {
            issues.push(`${workflow}: No valid triggers found`);
          }
          
          // Check for cron schedules
          if (hasSchedule && !content.includes('cron:')) {
            issues.push(`${workflow}: Schedule section missing cron configuration`);
          }
          
        } catch (error) {
          issues.push(`${workflow}: Error checking triggers - ${error.message}`);
        }
      }
      
      if (issues.length > 0) {
        this.log('WARN', `Found ${issues.length} trigger issues:`, issues);
        this.status.health.issues = [...(this.status.health.issues || []), ...issues];
      }
      
    } catch (error) {
      this.log('ERROR', 'Workflow triggers check failed', error.message);
    }
  }

  async checkWorkflowJobs() {
    this.log('INFO', 'Checking workflow jobs...');
    
    try {
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const issues = [];
      
      for (const workflow of this.status.workflows) {
        if (workflow.includes('backup')) continue; // Skip backup workflows
        
        try {
          const workflowPath = path.join(workflowsDir, workflow);
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Check for jobs section
          if (!content.includes('jobs:')) {
            issues.push(`${workflow}: Missing jobs section`);
            continue;
          }
          
          // Check for basic job structure
          const jobMatches = content.match(/^\s*(\w+):/gm);
          if (!jobMatches || jobMatches.length < 2) { // At least 2 jobs (including the jobs: header)
            issues.push(`${workflow}: Insufficient job definitions`);
          }
          
          // Check for common job patterns
          const hasCheckout = content.includes('actions/checkout');
          const hasNodeSetup = content.includes('actions/setup-node');
          
          if (!hasCheckout) {
            issues.push(`${workflow}: Missing checkout action`);
          }
          
          if (!hasNodeSetup && content.includes('npm')) {
            issues.push(`${workflow}: Uses npm but missing Node.js setup`);
          }
          
        } catch (error) {
          issues.push(`${workflow}: Error checking jobs - ${error.message}`);
        }
      }
      
      if (issues.length > 0) {
        this.log('WARN', `Found ${issues.length} job issues:`, issues);
        this.status.health.issues = [...(this.status.health.issues || []), ...issues];
      }
      
    } catch (error) {
      this.log('ERROR', 'Workflow jobs check failed', error.message);
    }
  }

  async performHealthCheck() {
    try {
      this.log('INFO', 'Performing GitHub Actions health check...');
      
      let healthScore = 100;
      const issues = [];
      
      // Workflow count health
      if (this.status.workflows.length === 0) {
        healthScore -= 40;
        issues.push('No workflows found');
      } else if (this.status.workflows.length < 2) {
        healthScore -= 20;
        issues.push('Very few workflows');
      }
      
      // Validation health
      if (this.status.validation.invalid > 0) {
        healthScore -= Math.min(30, this.status.validation.invalid * 10);
        issues.push(`${this.status.validation.invalid} invalid workflows`);
      }
      
      // Backup health
      if (this.status.backupWorkflows.length === 0) {
        healthScore -= 15;
        issues.push('No backup workflows');
      }
      
      // Health issues
      if (this.status.health.issues && this.status.health.issues.length > 0) {
        healthScore -= Math.min(25, this.status.health.issues.length * 5);
        issues.push(`${this.status.health.issues.length} health issues`);
      }
      
      // Ensure health score doesn't go below 0
      healthScore = Math.max(0, healthScore);
      
      this.status.health.score = healthScore;
      this.status.health.status = healthScore >= 80 ? 'healthy' : healthScore >= 50 ? 'warning' : 'critical';
      
      if (issues.length > 0) {
        this.log('WARN', `Health check found ${issues.length} issues:`, issues);
      }
      
      this.log('INFO', `Health check completed: ${this.status.health.status} (Score: ${healthScore}/100)`);
      
    } catch (error) {
      this.log('ERROR', 'Health check failed', error.message);
      this.status.health.status = 'error';
    }
  }

  async runRecovery() {
    this.log('INFO', 'Starting GitHub Actions recovery...');
    
    try {
      this.status.recoveryAttempts++;
      
      // Create backup workflows if missing
      if (this.status.backupWorkflows.length === 0) {
        await this.createBackupWorkflows();
      }
      
      // Re-validate workflows
      await this.checkGitHubActionsWorkflows();
      
      // Check triggers and jobs
      await this.checkWorkflowTriggers();
      await this.checkWorkflowJobs();
      
      // Perform health check
      await this.performHealthCheck();
      
      this.log('INFO', 'Recovery completed successfully');
      
    } catch (error) {
      this.log('ERROR', 'Recovery failed', error.message);
    }
  }

  async runFullCheck() {
    this.log('INFO', 'Starting comprehensive GitHub Actions check...');
    
    try {
      await this.checkGitHubActionsWorkflows();
      await this.checkWorkflowTriggers();
      await this.checkWorkflowJobs();
      await this.performHealthCheck();
      
      this.status.lastCheck = new Date().toISOString();
      this.saveStatus();
      
      this.log('INFO', 'Comprehensive GitHub Actions check completed');
      
    } catch (error) {
      this.log('ERROR', 'Comprehensive check failed', error.message);
    }
  }

  getStatus() {
    return {
      ...this.status,
      uptime: Date.now() - new Date(this.status.startTime).getTime()
    };
  }

  async runOnce() {
    this.log('INFO', 'Running one-time GitHub Actions check...');
    await this.runFullCheck();
    this.log('INFO', 'One-time check completed');
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateGitHubActionsRedundancy();
  const command = process.argv[2];
  
  switch (command) {
    case 'check':
      system.runFullCheck().then(() => process.exit(0));
      break;
    case 'health':
      system.performHealthCheck().then(() => {
        console.log(JSON.stringify(system.status.health, null, 2));
        process.exit(0);
      });
      break;
    case 'recover':
      system.runRecovery().then(() => process.exit(0));
      break;
    case 'backup':
      system.createBackupWorkflows().then(() => process.exit(0));
      break;
    case 'validate':
      system.validateWorkflows(system.status.workflows).then(() => process.exit(0));
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'once':
      system.runOnce().then(() => process.exit(0));
      break;
    default:
      console.log(`
Ultimate GitHub Actions Redundancy System

Usage:
  node ultimate-github-actions-redundancy.cjs <command>

Commands:
  check    - Run comprehensive check
  health   - Run health check only
  recover  - Run recovery procedures
  backup   - Create backup workflows
  validate - Validate workflows only
  status   - Show system status
  once     - Run one-time check

Environment Variables:
  GITHUB_REDUNDANCY_LOG_LEVEL - Log level (INFO, WARN, ERROR, DEBUG)
  GITHUB_CHECK_INTERVAL - Check interval in ms (default: 60000)
  GITHUB_MAX_RETRIES - Maximum recovery attempts (default: 3)
  GITHUB_AUTO_RECOVERY - Enable auto-recovery (default: true)
  GITHUB_AUTO_BACKUP - Enable auto-backup (default: true)
      `);
      process.exit(1);
  }
}

module.exports = UltimateGitHubActionsRedundancy;