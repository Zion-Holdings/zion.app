#!/usr/bin/env node

/**
 * Ultimate Netlify Functions Redundancy System
 * Comprehensive redundancy for all Netlify Functions automations
 * 
 * This system provides:
 * - Function manifest monitoring and validation
 * - Auto-regeneration of function manifests
 * - Function deployment health checks
 * - Backup function management
 * - Cross-function dependency monitoring
 * - Automated recovery mechanisms
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class UltimateNetlifyFunctionsRedundancy {
  constructor() {
    this.config = {
      logLevel: process.env.NETLIFY_REDUNDANCY_LOG_LEVEL || 'INFO',
      healthCheckInterval: parseInt(process.env.NETLIFY_HEALTH_CHECK_INTERVAL) || 120000,
      maxFailures: parseInt(process.env.NETLIFY_MAX_FAILURES) || 3,
      autoRegenerate: process.env.NETLIFY_AUTO_REGENERATE !== 'false',
      deploymentCheck: process.env.NETLIFY_DEPLOYMENT_CHECK !== 'false',
      logRotation: process.env.NETLIFY_LOG_ROTATION !== 'false'
    };
    
    this.status = {
      healthy: false,
      functions: [],
      manifest: null,
      lastCheck: null,
      failures: 0,
      lastRegeneration: null
    };
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    
    this.log('INFO', 'Ultimate Netlify Functions Redundancy System initialized');
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
    const logFile = path.join(this.logDir, 'ultimate-netlify-functions-redundancy.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async checkNetlifyDirectory() {
    try {
      this.log('INFO', 'Checking Netlify directory structure...');
      
      const netlifyDir = path.join(process.cwd(), 'netlify');
      if (!fs.existsSync(netlifyDir)) {
        this.log('WARN', 'Netlify directory not found');
        return false;
      }
      
      const functionsDir = path.join(netlifyDir, 'functions');
      if (!fs.existsSync(functionsDir)) {
        this.log('WARN', 'Netlify functions directory not found');
        return false;
      }
      
      this.log('INFO', 'Netlify directory structure validated');
      return true;
    } catch (error) {
      this.log('ERROR', 'Failed to check Netlify directory', error.message);
      return false;
    }
  }

  async checkFunctionsManifest() {
    try {
      this.log('INFO', 'Checking Netlify functions manifest...');
      
      const manifestPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.json');
      if (!fs.existsSync(manifestPath)) {
        this.log('WARN', 'Functions manifest not found');
        return false;
      }
      
      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      this.status.manifest = manifest;
      this.status.functions = manifest.functions || [];
      this.status.lastCheck = new Date();
      
      this.log('INFO', `Functions manifest loaded with ${this.status.functions.length} functions`);
      
      // Validate manifest structure
      if (!manifest.generatedAt) {
        this.log('WARN', 'Manifest missing generation timestamp');
      }
      
      if (!Array.isArray(manifest.functions)) {
        this.log('ERROR', 'Manifest functions field is not an array');
        return false;
      }
      
      return true;
    } catch (error) {
      this.log('ERROR', 'Failed to check functions manifest', error.message);
      return false;
    }
  }

  async validateFunctionFiles() {
    try {
      this.log('INFO', 'Validating function files...');
      
      const functionsDir = path.join(process.cwd(), 'netlify/functions');
      const functionFiles = fs.readdirSync(functionsDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'));
      
      const validFunctions = [];
      const invalidFunctions = [];
      
      for (const funcName of this.status.functions) {
        const funcFile = path.join(functionsDir, `${funcName}.js`);
        const funcFileTs = path.join(functionsDir, `${funcName}.ts`);
        
        if (fs.existsSync(funcFile) || fs.existsSync(funcFileTs)) {
          validFunctions.push(funcName);
        } else {
          invalidFunctions.push(funcName);
          this.log('WARN', `Function file missing for: ${funcName}`);
        }
      }
      
      this.log('INFO', `Function validation: ${validFunctions.length} valid, ${invalidFunctions.length} invalid`);
      
      if (invalidFunctions.length > 0) {
        this.log('WARN', `Invalid functions: ${invalidFunctions.join(', ')}`);
      }
      
      return validFunctions.length > 0;
    } catch (error) {
      this.log('ERROR', 'Failed to validate function files', error.message);
      return false;
    }
  }

  async checkManifestAge() {
    try {
      if (!this.status.manifest || !this.status.manifest.generatedAt) {
        this.log('WARN', 'Cannot check manifest age - no timestamp available');
        return false;
      }
      
      const manifestAge = Date.now() - new Date(this.status.manifest.generatedAt).getTime();
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours
      
      if (manifestAge > maxAge) {
        this.log('WARN', `Functions manifest is stale (age: ${Math.round(manifestAge / (60 * 60 * 1000))} hours)`);
        return false;
      }
      
      this.log('INFO', `Functions manifest is fresh (age: ${Math.round(manifestAge / (60 * 1000))} minutes)`);
      return true;
    } catch (error) {
      this.log('ERROR', 'Failed to check manifest age', error.message);
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log('INFO', 'Regenerating Netlify functions manifest...');
      
      const manifestScript = path.join(process.cwd(), 'scripts', 'generate-netlify-functions-manifest.cjs');
      if (!fs.existsSync(manifestScript)) {
        this.log('ERROR', 'Manifest generation script not found');
        return false;
      }
      
      execSync(`node ${manifestScript}`, { stdio: 'pipe' });
      
      // Verify manifest was regenerated
      const manifestPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const newManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        this.status.manifest = newManifest;
        this.status.functions = newManifest.functions || [];
        this.status.lastRegeneration = new Date();
        
        this.log('SUCCESS', `Functions manifest regenerated with ${this.status.functions.length} functions`);
        return true;
      } else {
        this.log('ERROR', 'Manifest regeneration failed - file not created');
        return false;
      }
    } catch (error) {
      this.log('ERROR', 'Failed to regenerate functions manifest', error.message);
      return false;
    }
  }

  async checkFunctionDependencies() {
    try {
      this.log('INFO', 'Checking function dependencies...');
      
      const functionsDir = path.join(process.cwd(), 'netlify/functions');
      const dependencyIssues = [];
      
      for (const funcName of this.status.functions) {
        const funcFile = path.join(functionsDir, `${funcName}.js`);
        const funcFileTs = path.join(functionsDir, `${funcName}.ts`);
        
        const filePath = fs.existsSync(funcFile) ? funcFile : funcFileTs;
        if (filePath) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for common dependency issues
            if (content.includes('require(') || content.includes('import ')) {
              // Basic dependency check - could be enhanced with actual dependency analysis
              this.log('DEBUG', `Function ${funcName} has dependencies`);
            }
            
            // Check for syntax errors
            try {
              if (filePath.endsWith('.js')) {
                require(filePath);
              }
            } catch (syntaxError) {
              dependencyIssues.push(`${funcName}: syntax error - ${syntaxError.message}`);
            }
          } catch (readError) {
            dependencyIssues.push(`${funcName}: read error - ${readError.message}`);
          }
        }
      }
      
      if (dependencyIssues.length > 0) {
        this.log('WARN', `Found ${dependencyIssues.length} dependency issues:`, dependencyIssues);
        return false;
      }
      
      this.log('INFO', 'Function dependencies validated successfully');
      return true;
    } catch (error) {
      this.log('ERROR', 'Failed to check function dependencies', error.message);
      return false;
    }
  }

  async performHealthCheck() {
    try {
      this.log('INFO', 'Performing comprehensive health check...');
      
      const checks = [
        await this.checkNetlifyDirectory(),
        await this.checkFunctionsManifest(),
        await this.validateFunctionFiles(),
        await this.checkManifestAge(),
        await this.checkFunctionDependencies()
      ];
      
      const healthyChecks = checks.filter(Boolean).length;
      const totalChecks = checks.length;
      
      this.status.healthy = healthyChecks === totalChecks;
      
      this.log('INFO', `Health check completed: ${healthyChecks}/${totalChecks} checks passed`);
      
      if (!this.status.healthy) {
        this.status.failures++;
        this.log('WARN', `Health check failed (failures: ${this.status.failures})`);
        
        // Auto-recovery if enabled
        if (this.config.autoRegenerate && this.status.failures >= this.config.maxFailures) {
          this.log('INFO', 'Attempting auto-recovery...');
          await this.performRecovery();
        }
      } else {
        this.status.failures = 0;
        this.log('SUCCESS', 'All health checks passed');
      }
      
      return this.status.healthy;
    } catch (error) {
      this.log('ERROR', 'Health check failed', error.message);
      this.status.healthy = false;
      this.status.failures++;
      return false;
    }
  }

  async performRecovery() {
    try {
      this.log('INFO', 'Performing recovery procedures...');
      
      // Try to regenerate manifest
      if (await this.regenerateFunctionsManifest()) {
        this.log('SUCCESS', 'Recovery successful - manifest regenerated');
        this.status.failures = 0;
        return true;
      }
      
      // If manifest regeneration fails, try to restore from backup
      this.log('INFO', 'Attempting to restore from backup...');
      if (await this.restoreFromBackup()) {
        this.log('SUCCESS', 'Recovery successful - restored from backup');
        this.status.failures = 0;
        return true;
      }
      
      this.log('ERROR', 'Recovery failed');
      return false;
    } catch (error) {
      this.log('ERROR', 'Recovery procedure failed', error.message);
      return false;
    }
  }

  async restoreFromBackup() {
    try {
      this.log('INFO', 'Attempting to restore from backup...');
      
      const backupPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.backup.json');
      if (!fs.existsSync(backupPath)) {
        this.log('WARN', 'No backup manifest found');
        return false;
      }
      
      const manifestPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.json');
      fs.copyFileSync(backupPath, manifestPath);
      
      this.log('INFO', 'Manifest restored from backup');
      
      // Re-validate
      return await this.checkFunctionsManifest();
    } catch (error) {
      this.log('ERROR', 'Failed to restore from backup', error.message);
      return false;
    }
  }

  async createBackup() {
    try {
      this.log('INFO', 'Creating backup of functions manifest...');
      
      const manifestPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.json');
      const backupPath = path.join(process.cwd(), 'netlify/functions/functions-manifest.backup.json');
      
      if (fs.existsSync(manifestPath)) {
        fs.copyFileSync(manifestPath, backupPath);
        this.log('SUCCESS', 'Backup created successfully');
        return true;
      } else {
        this.log('WARN', 'No manifest to backup');
        return false;
      }
    } catch (error) {
      this.log('ERROR', 'Failed to create backup', error.message);
      return false;
    }
  }

  async startMonitoring() {
    this.log('INFO', 'Starting Netlify Functions monitoring...');
    
    // Create initial backup
    await this.createBackup();
    
    // Start health monitoring
    cron.schedule(`*/${Math.floor(this.config.healthCheckInterval / 1000)} * * * * *`, async () => {
      await this.performHealthCheck();
    });
    
    // Create periodic backups (every 6 hours)
    cron.schedule('0 */6 * * *', async () => {
      await this.createBackup();
    });
    
    this.log('INFO', 'Netlify Functions monitoring started successfully');
  }

  async stopMonitoring() {
    this.log('INFO', 'Stopping Netlify Functions monitoring...');
    
    // Stop all cron jobs
    cron.getTasks().forEach(task => task.stop());
    
    this.log('INFO', 'Netlify Functions monitoring stopped');
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
        await this.performHealthCheck();
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'regenerate':
        await this.regenerateFunctionsManifest();
        break;
      case 'backup':
        await this.createBackup();
        break;
      case 'restore':
        await this.restoreFromBackup();
        break;
      case 'recovery':
        await this.performRecovery();
        break;
      default:
        console.log('Available commands: start, stop, status, health, regenerate, backup, restore, recovery');
        break;
    }
  }
}

// Main execution
if (require.main === module) {
  const redundancy = new UltimateNetlifyFunctionsRedundancy();
  const command = process.argv[2] || 'start';
  
  redundancy.runCommand(command).catch(error => {
    console.error('Error:', error.message);
    process.exit(1);
  });
}

module.exports = UltimateNetlifyFunctionsRedundancy;