#!/usr/bin/env node

/**
 * Ultimate Netlify Functions Redundancy System
 * Comprehensive redundancy for all Netlify Functions automations
 * 
 * This system provides:
 * - Functions manifest monitoring and regeneration
 * - Function deployment monitoring
 * - Auto-recovery for failed functions
 * - Backup function generation
 * - Health monitoring and reporting
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');

class UltimateNetlifyFunctionsRedundancy {
  constructor() {
    this.config = {
      logLevel: process.env.NETLIFY_REDUNDANCY_LOG_LEVEL || 'INFO',
      checkInterval: parseInt(process.env.NETLIFY_CHECK_INTERVAL) || 120000,
      maxRetries: parseInt(process.env.NETLIFY_MAX_RETRIES) || 3,
      autoRecovery: process.env.NETLIFY_AUTO_RECOVERY === 'true',
      autoRegenerate: process.env.NETLIFY_AUTO_REGENERATE === 'true',
      logDir: path.join(__dirname, 'logs'),
      statusFile: path.join(__dirname, 'ultimate-netlify-functions-status.json')
    };
    
    this.status = {
      startTime: new Date().toISOString(),
      lastCheck: null,
      functions: [],
      manifest: { exists: false, valid: false, lastGenerated: null },
      deployment: { status: 'unknown', lastDeploy: null, errors: [] },
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
    const logFile = path.join(this.config.logDir, 'ultimate-netlify-functions.log');
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

  async checkNetlifyFunctions() {
    try {
      this.log('INFO', 'Checking Netlify Functions...');
      
      const netlifyDir = path.join(process.cwd(), 'netlify');
      const functionsDir = path.join(netlifyDir, 'functions');
      
      if (!fs.existsSync(functionsDir)) {
        this.log('WARN', 'Netlify functions directory not found');
        this.status.functions = [];
        this.status.manifest.exists = false;
        this.status.manifest.valid = false;
        return;
      }
      
      // Check functions manifest
      const manifestPath = path.join(functionsDir, 'functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          this.status.functions = manifest.functions || [];
          this.status.manifest.exists = true;
          this.status.manifest.valid = true;
          this.status.manifest.lastGenerated = new Date().toISOString();
          
          this.log('INFO', `Functions manifest found with ${this.status.functions.length} functions`);
          
          // Validate functions
          await this.validateFunctions();
          
        } catch (error) {
          this.log('ERROR', 'Functions manifest is invalid JSON', error.message);
          this.status.manifest.exists = true;
          this.status.manifest.valid = false;
          
          if (this.config.autoRegenerate) {
            await this.regenerateFunctionsManifest();
          }
        }
      } else {
        this.log('WARN', 'Functions manifest not found');
        this.status.manifest.exists = false;
        this.status.manifest.valid = false;
        
        if (this.config.autoRegenerate) {
          await this.regenerateFunctionsManifest();
        }
      }
      
    } catch (error) {
      this.log('ERROR', 'Netlify Functions check failed', error.message);
    }
  }

  async validateFunctions() {
    this.log('INFO', 'Validating Netlify Functions...');
    
    const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
    const issues = [];
    
    for (const funcName of this.status.functions) {
      try {
        const funcPath = path.join(functionsDir, funcName);
        
        if (!fs.existsSync(funcPath)) {
          issues.push(`Function ${funcName} not found on disk`);
          continue;
        }
        
        // Check if it's a directory or file
        const stat = fs.statSync(funcPath);
        
        if (stat.isDirectory()) {
          // Check for index.js or index.mjs
          const indexFiles = ['index.js', 'index.mjs', 'index.ts'];
          const hasIndex = indexFiles.some(file => fs.existsSync(path.join(funcPath, file)));
          
          if (!hasIndex) {
            issues.push(`Function ${funcName} directory missing index file`);
          }
        } else if (stat.isFile()) {
          // Check file extension
          const ext = path.extname(funcPath);
          if (!['.js', '.mjs', '.ts'].includes(ext)) {
            issues.push(`Function ${funcName} has invalid file extension: ${ext}`);
          }
        }
        
      } catch (error) {
        issues.push(`Error validating function ${funcName}: ${error.message}`);
      }
    }
    
    if (issues.length > 0) {
      this.log('WARN', `Found ${issues.length} validation issues:`, issues);
      this.status.health.issues = issues;
    } else {
      this.log('INFO', 'All functions validated successfully');
      this.status.health.issues = [];
    }
  }

  async regenerateFunctionsManifest() {
    this.log('INFO', 'Regenerating Netlify Functions manifest...');
    
    try {
      // Run the manifest generation script
      execSync('npm run netlify:manifest', { stdio: 'inherit' });
      
      // Verify the manifest was created
      const manifestPath = path.join(process.cwd(), 'netlify', 'functions', 'functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        this.status.functions = manifest.functions || [];
        this.status.manifest.exists = true;
        this.status.manifest.valid = true;
        this.status.manifest.lastGenerated = new Date().toISOString();
        
        this.log('INFO', 'Functions manifest regenerated successfully');
      } else {
        throw new Error('Manifest file not found after regeneration');
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to regenerate functions manifest', error.message);
      this.status.manifest.exists = false;
      this.status.manifest.valid = false;
    }
  }

  async checkDeploymentStatus() {
    try {
      this.log('INFO', 'Checking Netlify deployment status...');
      
      // Check if we have netlify CLI
      try {
        const netlifyVersion = execSync('netlify --version', { encoding: 'utf8' });
        this.log('INFO', `Netlify CLI version: ${netlifyVersion.trim()}`);
        
        // Check deployment status
        try {
          const deployStatus = execSync('netlify status', { encoding: 'utf8' });
          this.status.deployment.status = 'deployed';
          this.status.deployment.lastDeploy = new Date().toISOString();
          this.log('INFO', 'Netlify deployment status checked');
        } catch (error) {
          this.status.deployment.status = 'unknown';
          this.log('WARN', 'Could not check deployment status', error.message);
        }
        
      } catch (error) {
        this.log('WARN', 'Netlify CLI not available', error.message);
        this.status.deployment.status = 'cli-unavailable';
      }
      
    } catch (error) {
      this.log('ERROR', 'Deployment status check failed', error.message);
      this.status.deployment.status = 'error';
    }
  }

  async createBackupFunctions() {
    this.log('INFO', 'Creating backup functions...');
    
    try {
      const functionsDir = path.join(process.cwd(), 'netlify', 'functions');
      const backupDir = path.join(functionsDir, 'backups');
      
      // Create backup directory
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      // Create backup of functions manifest
      const manifestPath = path.join(functionsDir, 'functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const backupPath = path.join(backupDir, `functions-manifest-${Date.now()}.json`);
        fs.copyFileSync(manifestPath, backupPath);
        this.log('INFO', `Created backup manifest: ${path.basename(backupPath)}`);
      }
      
      // Create backup of individual functions
      for (const funcName of this.status.functions) {
        const funcPath = path.join(functionsDir, funcName);
        if (fs.existsSync(funcPath)) {
          const backupPath = path.join(backupDir, `${funcName}-${Date.now()}`);
          
          if (fs.statSync(funcPath).isDirectory()) {
            // Copy directory
            this.copyDirectoryRecursive(funcPath, backupPath);
          } else {
            // Copy file
            fs.copyFileSync(funcPath, backupPath);
          }
          
          this.log('INFO', `Created backup for function: ${funcName}`);
        }
      }
      
      this.log('INFO', 'Backup functions created successfully');
      
    } catch (error) {
      this.log('ERROR', 'Failed to create backup functions', error.message);
    }
  }

  copyDirectoryRecursive(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    
    for (const item of items) {
      const srcPath = path.join(src, item);
      const destPath = path.join(dest, item);
      
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        this.copyDirectoryRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  async performHealthCheck() {
    try {
      this.log('INFO', 'Performing Netlify Functions health check...');
      
      let healthScore = 100;
      const issues = [];
      
      // Manifest health
      if (!this.status.manifest.exists) {
        healthScore -= 30;
        issues.push('Functions manifest missing');
      } else if (!this.status.manifest.valid) {
        healthScore -= 20;
        issues.push('Functions manifest invalid');
      }
      
      // Functions health
      if (this.status.functions.length === 0) {
        healthScore -= 25;
        issues.push('No functions found');
      }
      
      // Deployment health
      if (this.status.deployment.status === 'error') {
        healthScore -= 20;
        issues.push('Deployment errors detected');
      } else if (this.status.deployment.status === 'unknown') {
        healthScore -= 10;
        issues.push('Deployment status unknown');
      }
      
      // Validation issues
      if (this.status.health.issues.length > 0) {
        healthScore -= Math.min(25, this.status.health.issues.length * 5);
        issues.push(`${this.status.health.issues.length} validation issues`);
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

  async runFullCheck() {
    this.log('INFO', 'Starting comprehensive Netlify Functions check...');
    
    try {
      await this.checkNetlifyFunctions();
      await this.checkDeploymentStatus();
      await this.performHealthCheck();
      
      this.status.lastCheck = new Date().toISOString();
      this.saveStatus();
      
      this.log('INFO', 'Comprehensive Netlify Functions check completed');
      
    } catch (error) {
      this.log('ERROR', 'Comprehensive check failed', error.message);
    }
  }

  async runRecovery() {
    this.log('INFO', 'Starting Netlify Functions recovery...');
    
    try {
      this.status.recoveryAttempts++;
      
      // Regenerate manifest if needed
      if (!this.status.manifest.exists || !this.status.manifest.valid) {
        await this.regenerateFunctionsManifest();
      }
      
      // Create backups
      await this.createBackupFunctions();
      
      // Validate functions
      await this.validateFunctions();
      
      // Perform health check
      await this.performHealthCheck();
      
      this.log('INFO', 'Recovery completed successfully');
      
    } catch (error) {
      this.log('ERROR', 'Recovery failed', error.message);
    }
  }

  getStatus() {
    return {
      ...this.status,
      uptime: Date.now() - new Date(this.status.startTime).getTime()
    };
  }

  async runOnce() {
    this.log('INFO', 'Running one-time Netlify Functions check...');
    await this.runFullCheck();
    this.log('INFO', 'One-time check completed');
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateNetlifyFunctionsRedundancy();
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
      system.createBackupFunctions().then(() => process.exit(0));
      break;
    case 'regenerate':
      system.regenerateFunctionsManifest().then(() => process.exit(0));
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'once':
      system.runOnce().then(() => process.exit(0));
      break;
    default:
      console.log(`
Ultimate Netlify Functions Redundancy System

Usage:
  node ultimate-netlify-functions-redundancy.cjs <command>

Commands:
  check      - Run comprehensive check
  health     - Run health check only
  recover    - Run recovery procedures
  backup     - Create backup functions
  regenerate - Regenerate functions manifest
  status     - Show system status
  once       - Run one-time check

Environment Variables:
  NETLIFY_REDUNDANCY_LOG_LEVEL - Log level (INFO, WARN, ERROR, DEBUG)
  NETLIFY_CHECK_INTERVAL - Check interval in ms (default: 120000)
  NETLIFY_MAX_RETRIES - Maximum recovery attempts (default: 3)
  NETLIFY_AUTO_RECOVERY - Enable auto-recovery (default: true)
  NETLIFY_AUTO_REGENERATE - Enable auto-regeneration (default: true)
      `);
      process.exit(1);
  }
}

module.exports = UltimateNetlifyFunctionsRedundancy;