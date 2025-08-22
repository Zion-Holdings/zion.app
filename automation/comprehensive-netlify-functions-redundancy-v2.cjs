#!/usr/bin/env node

/**
 * Comprehensive Netlify Functions Redundancy System V2
 * Complete redundancy coverage for all Netlify functions
 * Enhanced monitoring, validation, and deployment capabilities
 */

const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');
const cron = require('node-cron');

class ComprehensiveNetlifyFunctionsRedundancyV2 {
  constructor() {
    this.config = {
      logLevel: process.env.NETLIFY_REDUNDANCY_LOG_LEVEL || 'INFO',
      healthCheckInterval: parseInt(process.env.NETLIFY_HEALTH_CHECK_INTERVAL) || 120000,
      maxFailures: parseInt(process.env.NETLIFY_MAX_FAILURES) || 3,
      autoDeploy: process.env.NETLIFY_AUTO_DEPLOY === 'true',
      autoRegenerate: process.env.NETLIFY_AUTO_REGENERATE === 'true',
      deploymentCheck: process.env.NETLIFY_DEPLOYMENT_CHECK === 'true',
      manifestValidation: process.env.NETLIFY_MANIFEST_VALIDATION === 'true',
      backupInterval: parseInt(process.env.NETLIFY_BACKUP_INTERVAL) || 600000
    };
    
    this.functions = {
      active: [],
      backup: [],
      failed: [],
      invalid: [],
      deployed: []
    };
    
    this.functionsDir = path.join(process.cwd(), 'netlify', 'functions');
    this.backupDir = path.join(process.cwd(), 'netlify', 'functions', 'backups');
    this.manifestPath = path.join(this.functionsDir, 'functions-manifest.json');
    
    this.logDir = path.join(__dirname, 'logs');
    this.ensureLogDirectory();
    this.setupLogging();
    
    this.failureCounts = new Map();
    this.functionHistory = new Map();
    this.deploymentHistory = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  setupLogging() {
    const logFile = path.join(this.logDir, 'comprehensive-netlify-functions-redundancy-v2.log');
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
    this.log('INFO', 'Starting Comprehensive Netlify Functions Redundancy System V2...');
    
    try {
      // Initialize Netlify functions redundancy
      await this.initializeNetlifyFunctionsRedundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      // Start health checks
      this.startHealthChecks();
      
      // Start backup system
      this.startBackupSystem();
      
      this.log('INFO', 'Comprehensive Netlify Functions Redundancy System V2 started successfully');
      
      // Keep the process alive
      setInterval(() => {}, 1000);
      
    } catch (error) {
      this.log('ERROR', 'Failed to start Comprehensive Netlify Functions Redundancy System V2', error);
      process.exit(1);
    }
  }

  async initializeNetlifyFunctionsRedundancy() {
    this.log('INFO', 'Initializing Netlify Functions Redundancy System...');
    
    try {
      // Check Netlify functions directory
      await this.checkFunctionsDirectory();
      
      // Discover functions
      await this.discoverFunctions();
      
      // Validate functions
      if (this.config.manifestValidation) {
        await this.validateFunctions();
      }
      
      // Create backup directory
      this.ensureBackupDirectory();
      
      // Create initial backups
      await this.createFunctionBackups();
      
      // Check deployment status
      if (this.config.deploymentCheck) {
        await this.checkDeploymentStatus();
      }
      
      this.log('INFO', 'Netlify Functions Redundancy System initialized successfully');
    } catch (error) {
      this.log('ERROR', 'Failed to initialize Netlify Functions Redundancy System', error);
    }
  }

  async checkFunctionsDirectory() {
    if (!fs.existsSync(this.functionsDir)) {
      this.log('WARN', 'Netlify functions directory not found, creating...');
      fs.mkdirSync(this.functionsDir, { recursive: true });
    }
    
    this.log('INFO', `Netlify functions directory: ${this.functionsDir}`);
  }

  async discoverFunctions() {
    this.log('INFO', 'Discovering Netlify functions...');
    
    try {
      const functionFiles = fs.readdirSync(this.functionsDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        .filter(file => !file.includes('backup') && !file.includes('manifest'));
      
      this.functions.active = functionFiles;
      this.log('INFO', `Discovered ${functionFiles.length} active functions: ${functionFiles.join(', ')}`);
      
    } catch (error) {
      this.log('ERROR', 'Failed to discover functions', error);
    }
  }

  async validateFunctions() {
    this.log('INFO', 'Validating Netlify functions...');
    
    this.functions.invalid = [];
    
    for (const func of this.functions.active) {
      try {
        const funcPath = path.join(this.functionsDir, func);
        const content = fs.readFileSync(funcPath, 'utf8');
        
        // Basic validation
        let isValid = true;
        let reason = '';
        
        // Check if it's a valid JavaScript/TypeScript file
        if (!content.trim()) {
          isValid = false;
          reason = 'Empty file';
        }
        
        // Check for basic function structure
        if (!content.includes('exports.handler') && !content.includes('export default') && !content.includes('module.exports')) {
          isValid = false;
          reason = 'No handler export found';
        }
        
        // Check for syntax errors (basic check)
        try {
          if (func.endsWith('.js')) {
            require(funcPath);
          }
        } catch (error) {
          isValid = false;
          reason = `Syntax error: ${error.message}`;
        }
        
        if (!isValid) {
          this.functions.invalid.push({
            file: func,
            reason: reason
          });
        } else {
          this.log('INFO', `Function ${func} is valid`);
        }
        
      } catch (error) {
        this.functions.invalid.push({
          file: func,
          reason: `File read error: ${error.message}`
        });
      }
    }
    
    if (this.functions.invalid.length > 0) {
      this.log('WARN', `Found ${this.functions.invalid.length} invalid functions`, this.functions.invalid);
    }
  }

  ensureBackupDirectory() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
      this.log('INFO', 'Created functions backup directory');
    }
  }

  async createFunctionBackups() {
    this.log('INFO', 'Creating function backups...');
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      for (const func of this.functions.active) {
        const sourcePath = path.join(this.functionsDir, func);
        const backupPath = path.join(this.backupDir, `${func}.backup-${timestamp}`);
        
        fs.copyFileSync(sourcePath, backupPath);
        this.log('INFO', `Created backup for ${func}: ${backupPath}`);
      }
      
      // Clean old backups
      this.cleanOldBackups();
      
    } catch (error) {
      this.log('ERROR', 'Failed to create function backups', error);
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
      
      // Keep last 30 backups
      for (let i = 30; i < files.length; i++) {
        fs.unlinkSync(files[i].path);
        this.log('INFO', `Removed old backup: ${files[i].name}`);
      }
    } catch (error) {
      this.log('ERROR', 'Failed to clean old backups', error);
    }
  }

  async checkDeploymentStatus() {
    this.log('INFO', 'Checking Netlify deployment status...');
    
    try {
      // Check if Netlify CLI is available
      try {
        execSync('netlify --version', { stdio: 'pipe' });
        this.log('INFO', 'Netlify CLI is available');
        
        // Get deployment status
        const status = execSync('netlify status', { encoding: 'utf8', stdio: 'pipe' });
        this.log('INFO', 'Netlify status retrieved', { status: status.trim() });
        
        // Check if site is linked
        if (status.includes('No site id specified')) {
          this.log('WARN', 'Netlify site not linked, attempting to link...');
          await this.linkNetlifySite();
        }
        
      } catch (error) {
        this.log('WARN', 'Netlify CLI not available, skipping deployment checks');
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to check deployment status', error);
    }
  }

  async linkNetlifySite() {
    try {
      // Try to link to existing site
      execSync('netlify link', { stdio: 'pipe' });
      this.log('INFO', 'Successfully linked to Netlify site');
    } catch (error) {
      this.log('WARN', 'Failed to link to Netlify site, manual linking required');
    }
  }

  startMonitoring() {
    this.log('INFO', 'Starting Netlify functions monitoring...');
    
    // Monitor functions every 2 minutes
    cron.schedule('0 */2 * * * *', () => {
      this.monitorFunctions();
    });
    
    // Monitor function changes every 10 minutes
    cron.schedule('0 */10 * * * *', () => {
      this.monitorFunctionChanges();
    });
  }

  startHealthChecks() {
    this.log('INFO', 'Starting Netlify functions health checks...');
    
    // Run initial health check
    this.performHealthCheck();
    
    // Schedule regular health checks
    cron.schedule('*/5 * * * *', () => {
      this.performHealthCheck();
    });
  }

  startBackupSystem() {
    this.log('INFO', 'Starting Netlify functions backup system...');
    
    // Create backups every 10 minutes
    cron.schedule('*/10 * * * *', () => {
      this.createFunctionBackups();
    });
  }

  async monitorFunctions() {
    try {
      // Check if functions are accessible
      const currentFunctions = fs.readdirSync(this.functionsDir)
        .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
        .filter(file => !file.includes('backup') && !file.includes('manifest'));
      
      // Check for new functions
      const newFunctions = currentFunctions.filter(f => !this.functions.active.includes(f));
      if (newFunctions.length > 0) {
        this.log('INFO', `New functions detected: ${newFunctions.join(', ')}`);
        this.functions.active = currentFunctions;
        
        // Validate new functions
        if (this.config.manifestValidation) {
          await this.validateFunctions();
        }
      }
      
      // Check for deleted functions
      const deletedFunctions = this.functions.active.filter(f => !currentFunctions.includes(f));
      if (deletedFunctions.length > 0) {
        this.log('WARN', `Functions deleted: ${deletedFunctions.join(', ')}`);
        this.functions.active = currentFunctions;
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to monitor functions', error);
    }
  }

  async monitorFunctionChanges() {
    try {
      for (const func of this.functions.active) {
        const funcPath = path.join(this.functionsDir, func);
        const currentContent = fs.readFileSync(funcPath, 'utf8');
        
        // Check if function content has changed
        if (!this.functionHistory.has(func)) {
          this.functionHistory.set(func, currentContent);
          continue;
        }
        
        const previousContent = this.functionHistory.get(func);
        if (currentContent !== previousContent) {
          this.log('INFO', `Function ${func} has been modified`);
          
          // Update history
          this.functionHistory.set(func, currentContent);
          
          // Create backup of modified function
          const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
          const backupPath = path.join(this.backupDir, `${func}.modified-${timestamp}`);
          fs.copyFileSync(funcPath, backupPath);
          this.log('INFO', `Created backup of modified function: ${backupPath}`);
          
          // Auto-deploy if enabled
          if (this.config.autoDeploy) {
            await this.deployFunction(func);
          }
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to monitor function changes', error);
    }
  }

  async performHealthCheck() {
    this.log('INFO', 'Performing Netlify functions health check...');
    
    try {
      const healthStatus = {
        totalFunctions: this.functions.active.length,
        validFunctions: this.functions.active.length - this.functions.invalid.length,
        invalidFunctions: this.functions.invalid.length,
        deployedFunctions: this.functions.deployed.length,
        healthScore: 0,
        issues: []
      };
      
      // Calculate health score
      if (healthStatus.totalFunctions > 0) {
        healthStatus.healthScore = (healthStatus.validFunctions / healthStatus.totalFunctions) * 100;
      }
      
      // Identify issues
      if (healthStatus.invalidFunctions > 0) {
        healthStatus.issues.push(`${healthStatus.invalidFunctions} invalid functions`);
      }
      
      if (healthStatus.totalFunctions === 0) {
        healthStatus.issues.push('No functions found');
      }
      
      if (healthStatus.healthScore < 75) {
        healthStatus.issues.push('Overall health score below 75%');
      }
      
      if (healthStatus.deployedFunctions < healthStatus.validFunctions) {
        healthStatus.issues.push(`${healthStatus.validFunctions - healthStatus.deployedFunctions} functions not deployed`);
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
      // Attempt to fix invalid functions
      if (this.functions.invalid.length > 0) {
        await this.attemptFunctionRecovery();
      }
      
      // Restore from backups if needed
      if (this.functions.active.length === 0) {
        await this.restoreFromBackups();
      }
      
      // Deploy functions if needed
      if (this.config.autoDeploy) {
        await this.deployAllFunctions();
      }
      
    } catch (error) {
      this.log('ERROR', 'Failed to perform recovery actions', error);
    }
  }

  async attemptFunctionRecovery() {
    this.log('INFO', 'Attempting to recover invalid functions...');
    
    for (const invalidFunction of this.functions.invalid) {
      try {
        const funcPath = path.join(this.functionsDir, invalidFunction.file);
        const content = fs.readFileSync(funcPath, 'utf8');
        
        // Try to fix common issues
        let fixedContent = content;
        
        // Fix empty files
        if (!content.trim()) {
          fixedContent = `exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Function recovered" })
  };
};`;
        }
        
        // Fix missing handler
        if (!content.includes('exports.handler') && !content.includes('export default') && !content.includes('module.exports')) {
          if (content.includes('function') || content.includes('const') || content.includes('let') || content.includes('var')) {
            fixedContent = `${content}

exports.handler = async function(event, context) {
  try {
    // Call the main function if it exists
    if (typeof main === 'function') {
      return await main(event, context);
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Function executed" })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};`;
          }
        }
        
        // Write fixed content
        if (fixedContent !== content) {
          fs.writeFileSync(funcPath, fixedContent);
          this.log('INFO', `Attempted to fix function: ${invalidFunction.file}`);
        }
        
      } catch (error) {
        this.log('ERROR', `Failed to fix function: ${invalidFunction.file}`, error);
      }
    }
  }

  async restoreFromBackups() {
    this.log('INFO', 'Attempting to restore functions from backups...');
    
    try {
      const backupFiles = fs.readdirSync(this.backupDir)
        .filter(file => file.includes('.backup-'))
        .sort()
        .reverse();
      
      if (backupFiles.length > 0) {
        const latestBackup = backupFiles[0];
        const backupPath = path.join(this.backupDir, latestBackup);
        
        // Extract function name from backup filename
        const functionName = latestBackup.replace(/\.backup-.*$/, '');
        const targetPath = path.join(this.functionsDir, functionName);
        
        fs.copyFileSync(backupPath, targetPath);
        this.log('INFO', `Restored function from backup: ${functionName}`);
        
        // Refresh function list
        await this.discoverFunctions();
      }
    } catch (error) {
      this.log('ERROR', 'Failed to restore from backups', error);
    }
  }

  async deployFunction(functionName) {
    if (!this.config.autoDeploy) {
      this.log('INFO', `Auto-deploy disabled, skipping function: ${functionName}`);
      return;
    }
    
    try {
      this.log('INFO', `Deploying function: ${functionName}`);
      
      // Use Netlify CLI if available
      try {
        execSync('netlify deploy --prod --functions', { stdio: 'pipe' });
        this.log('INFO', `Successfully deployed function: ${functionName}`);
        
        // Update deployment history
        this.deploymentHistory.set(functionName, new Date());
        this.functions.deployed.push(functionName);
        
      } catch (error) {
        this.log('WARN', `Netlify CLI not available, manual deployment required for: ${functionName}`);
      }
      
    } catch (error) {
      this.log('ERROR', `Failed to deploy function: ${functionName}`, error);
    }
  }

  async deployAllFunctions() {
    this.log('INFO', 'Deploying all functions...');
    
    try {
      for (const func of this.functions.active) {
        if (!this.functions.deployed.includes(func)) {
          await this.deployFunction(func);
        }
      }
    } catch (error) {
      this.log('ERROR', 'Failed to deploy all functions', error);
    }
  }

  async regenerateManifest() {
    if (!this.config.autoRegenerate) {
      this.log('INFO', 'Auto-regenerate disabled, skipping manifest regeneration');
      return;
    }
    
    try {
      this.log('INFO', 'Regenerating functions manifest...');
      
      // Generate manifest from active functions
      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: this.functions.active.filter(f => !this.functions.invalid.includes(f))
      };
      
      // Write manifest
      fs.writeFileSync(this.manifestPath, JSON.stringify(manifest, null, 2));
      this.log('INFO', 'Functions manifest regenerated successfully');
      
    } catch (error) {
      this.log('ERROR', 'Failed to regenerate functions manifest', error);
    }
  }

  getStatus() {
    return {
      functions: this.functions,
      config: this.config,
      failureCounts: Object.fromEntries(this.failureCounts),
      deploymentHistory: Object.fromEntries(this.deploymentHistory),
      health: {
        total: this.functions.active.length,
        valid: this.functions.active.length - this.functions.invalid.length,
        invalid: this.functions.invalid.length,
        deployed: this.functions.deployed.length,
        healthScore: this.functions.active.length > 0 ? 
          ((this.functions.active.length - this.functions.invalid.length) / this.functions.active.length) * 100 : 0
      }
    };
  }

  async stop() {
    this.log('INFO', 'Stopping Comprehensive Netlify Functions Redundancy System V2...');
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveNetlifyFunctionsRedundancyV2();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.stop();
  });
  
  process.on('SIGTERM', async () => {
    await system.stop();
  });
  
  // Start the system
  system.start().catch(error => {
    console.error('Failed to start Comprehensive Netlify Functions Redundancy System V2:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveNetlifyFunctionsRedundancyV2;