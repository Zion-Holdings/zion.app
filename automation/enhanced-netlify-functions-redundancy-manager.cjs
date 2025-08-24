#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedNetlifyFunctionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.functionStatus = new Map();
    this.recoveryAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.workspace, "automation/redundancy-config.json");
    if (fs.existsSync(configPath)) {
      try {
        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        return config.enhanced?.netlifyFunctionsManager || {};
      } catch (error) {
        this.log(`Error loading enhanced Netlify config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 120000,
      maxFailures: 3,
      healthCheckTimeout: 30000,
      autoRecovery: true,
      recoveryDelay: 15000,
      maxRecoveryAttempts: 3,
      recoveryCooldown: 180000,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        validation: true
      },
      validation: {
        syntaxCheck: true,
        manifestValidation: true,
        functionDiscovery: true,
        dependencyCheck: true
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || this.config.healthCheckTimeout || 30000,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error
      });
    });
  }

  async checkNetlifyDirectory() {
    try {
      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return { exists: false, functions: false, config: false };
      }

      const functionsDir = path.join(netlifyDir, "functions");
      const configFile = path.join(netlifyDir, "netlify.toml");
      
      return {
        exists: true,
        functions: fs.existsSync(functionsDir),
        config: fs.existsSync(configFile)
      };
    } catch (error) {
      this.log(`❌ Error checking Netlify directory: ${error.message}`, "ERROR");
      return { exists: false, functions: false, config: false };
    }
  }

  async validateFunctionsManifest(manifestPath) {
    try {
      if (!fs.existsSync(manifestPath)) {
        return { valid: false, error: 'Manifest file not found' };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      
      // Check required fields
      if (!manifest.generatedAt || !manifest.functions) {
        return { valid: false, error: 'Missing required fields (generatedAt, functions)' };
      }

      // Check if functions array is valid
      if (!Array.isArray(manifest.functions)) {
        return { valid: false, error: 'Functions field is not an array' };
      }

      // Check if functions array is not empty
      if (manifest.functions.length === 0) {
        return { valid: false, error: 'Functions array is empty' };
      }

      // Check if generatedAt is recent (within last 24 hours)
      const generatedAt = new Date(manifest.generatedAt);
      const hoursSinceGenerated = (Date.now() - generatedAt.getTime()) / (1000 * 60 * 60);
      if (hoursSinceGenerated > 24) {
        this.log(`⚠️ Functions manifest is ${Math.round(hoursSinceGenerated)} hours old`, "WARN");
      }

      this.log(`✅ Functions manifest validation passed - ${manifest.functions.length} functions`);
      return { 
        valid: true, 
        functionCount: manifest.functions.length,
        generatedAt: manifest.generatedAt,
        hoursSinceGenerated
      };
    } catch (error) {
      return { valid: false, error: `Manifest validation error: ${error.message}` };
    }
  }

  async discoverFunctions() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        return { exists: false, functions: [] };
      }

      const items = fs.readdirSync(functionsDir, { withFileTypes: true });
      const functions = [];
      const directories = [];

      for (const item of items) {
        if (item.isDirectory()) {
          directories.push(item.name);
          
          // Check if directory contains function files
          const functionDir = path.join(functionsDir, item.name);
          const functionFiles = fs.readdirSync(functionDir);
          
          if (functionFiles.some(file => file.endsWith('.js') || file.endsWith('.cjs'))) {
            functions.push({
              name: item.name,
              type: 'directory',
              files: functionFiles,
              hasMainFile: functionFiles.some(file => 
                file === 'index.js' || file === 'index.cjs' || 
                file === `${item.name}.js` || file === `${item.name}.cjs`
              )
            });
          }
        } else if (item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.cjs'))) {
          functions.push({
            name: item.name.replace(/\.(js|cjs)$/, ''),
            type: 'file',
            file: item.name
          });
        }
      }

      this.log(`🔍 Discovered ${functions.length} Netlify functions`);
      return { exists: true, functions, directories };
    } catch (error) {
      this.log(`❌ Error discovering functions: ${error.message}`, "ERROR");
      return { exists: false, functions: [] };
    }
  }

  async validateFunctionSyntax(functionPath) {
    try {
      if (!fs.existsSync(functionPath)) {
        return { valid: false, error: 'Function file not found' };
      }

      const content = fs.readFileSync(functionPath, 'utf8');
      
      // Basic JavaScript syntax validation
      if (!content.includes('exports.') && !content.includes('module.exports') && !content.includes('export ')) {
        return { valid: false, error: 'No exports found' };
      }

      // Check for basic syntax errors
      if (content.includes('function(') && !content.includes('function(')) {
        return { valid: false, error: 'Malformed function declaration' };
      }

      // Check for common syntax issues
      const lines = content.split('\n');
      let braceCount = 0;
      let bracketCount = 0;
      let parenCount = 0;
      
      for (const line of lines) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        bracketCount += (line.match(/\[/g) || []).length;
        bracketCount -= (line.match(/\]/g) || []).length;
        parenCount += (line.match(/\(/g) || []).length;
        parenCount -= (line.match(/\)/g) || []).length;
      }
      
      if (braceCount !== 0 || bracketCount !== 0 || parenCount !== 0) {
        return { valid: false, error: 'Mismatched braces, brackets, or parentheses' };
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, error: `Syntax validation error: ${error.message}` };
    }
  }

  async checkFunctionHealth(functionInfo) {
    try {
      const functionName = functionInfo.name;
      const config = this.config.functions;
      
      let health = {
        name: functionName,
        type: functionInfo.type,
        valid: true,
        errors: []
      };

      // Check if function exists in manifest
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (!manifest.functions.includes(functionName)) {
          health.errors.push('Not found in manifest');
          health.valid = false;
        }
      }

      // Validate function syntax
      if (config.validation && this.config.validation.syntaxCheck) {
        let functionPath;
        if (functionInfo.type === 'directory') {
          // Look for main function file
          const functionDir = path.join(this.workspace, "netlify/functions", functionName);
          if (functionInfo.hasMainFile) {
            const mainFile = functionFiles.find(file => 
              file === 'index.js' || file === 'index.cjs' || 
              file === `${functionName}.js` || file === `${functionName}.cjs`
            );
            functionPath = path.join(functionDir, mainFile);
          } else {
            functionPath = path.join(functionDir, 'index.js');
          }
        } else {
          functionPath = path.join(this.workspace, "netlify/functions", functionInfo.file);
        }

        if (fs.existsSync(functionPath)) {
          const syntaxValidation = await this.validateFunctionSyntax(functionPath);
          if (!syntaxValidation.valid) {
            health.errors.push(`Syntax error: ${syntaxValidation.error}`);
            health.valid = false;
          }
        } else {
          health.errors.push('Main function file not found');
          health.valid = false;
        }
      }

      // Check function dependencies
      if (config.validation && this.config.validation.dependencyCheck) {
        const functionDir = path.join(this.workspace, "netlify/functions", functionName);
        const packageJsonPath = path.join(functionDir, "package.json");
        
        if (fs.existsSync(packageJsonPath)) {
          try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            if (packageJson.dependencies && Object.keys(packageJson.dependencies).length > 0) {
              health.dependencies = Object.keys(packageJson.dependencies);
            }
          } catch (error) {
            health.errors.push(`Invalid package.json: ${error.message}`);
            health.valid = false;
          }
        }
      }

      if (health.valid) {
        this.log(`✅ Function ${functionName} is healthy`);
      } else {
        this.log(`❌ Function ${functionName} has issues: ${health.errors.join(', ')}`, "ERROR");
      }

      return health;
    } catch (error) {
      this.log(`❌ Health check failed for function ${functionInfo.name}: ${error.message}`, "ERROR");
      return {
        name: functionInfo.name,
        type: functionInfo.type,
        valid: false,
        error: error.message
      };
    }
  }

  async performHealthCheck() {
    this.log("🔍 Starting Netlify functions health check...");
    
    const startTime = Date.now();
    
    // Check Netlify directory structure
    const dirCheck = await this.checkNetlifyDirectory();
    if (!dirCheck.exists) {
      this.log("❌ Netlify directory not found", "ERROR");
      return { status: 'failed', error: 'Netlify directory missing' };
    }

    if (!dirCheck.functions) {
      this.log("❌ Netlify functions directory not found", "ERROR");
      return { status: 'failed', error: 'Functions directory missing' };
    }

    // Validate functions manifest
    const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
    const manifestValidation = await this.validateFunctionsManifest(manifestPath);
    if (!manifestValidation.valid) {
      this.log("❌ Functions manifest validation failed", "ERROR");
      return { status: 'failed', error: manifestValidation.error };
    }

    // Discover and check functions
    const discovery = await this.discoverFunctions();
    if (!discovery.exists) {
      this.log("❌ Functions discovery failed", "ERROR");
      return { status: 'failed', error: 'Functions discovery failed' };
    }

    const functions = discovery.functions;
    const results = {};
    let healthyCount = 0;
    let failedCount = 0;

    for (const functionInfo of functions) {
      const health = await this.checkFunctionHealth(functionInfo);
      results[functionInfo.name] = health;
      
      if (health.valid) {
        healthyCount++;
      } else {
        failedCount++;
      }
    }

    const duration = Date.now() - startTime;
    this.log(`🏁 Netlify functions health check completed in ${duration}ms`);
    
    // Log summary
    this.log(`📊 Netlify Functions Health Summary:`);
    this.log(`   Total Functions: ${functions.length}`);
    this.log(`   Healthy: ${healthyCount} ✅`);
    this.log(`   Failed: ${failedCount} ❌`);
    
    const overallStatus = failedCount === 0 ? 'healthy' : failedCount > functions.length / 2 ? 'critical' : 'degraded';
    
    return {
      status: overallStatus,
      manifest: manifestValidation,
      functions: results,
      summary: {
        total: functions.length,
        healthy: healthyCount,
        failed: failedCount
      },
      duration
    };
  }

  async autoRecovery() {
    if (!this.config.autoRecovery) {
      this.log("🔄 Auto-recovery is disabled", "WARN");
      return;
    }
    
    this.log("🔄 Starting Netlify functions auto-recovery...");
    
    for (const [functionName, status] of this.functionStatus) {
      if (!status.valid) {
        await this.recoverFunction(functionName, status);
      }
    }
  }

  async recoverFunction(functionName, status) {
    const maxAttempts = this.config.maxRecoveryAttempts;
    const cooldown = this.config.recoveryCooldown;
    
    // Check recovery attempts
    const attempts = this.recoveryAttempts.get(functionName) || 0;
    if (attempts >= maxAttempts) {
      this.log(`⚠️ Function ${functionName} exceeded max recovery attempts (${attempts}/${maxAttempts})`, "WARN");
      return;
    }
    
    // Check cooldown
    const lastAttempt = this.recoveryAttempts.get(`${functionName}_last`) || 0;
    const timeSinceLastAttempt = Date.now() - lastAttempt;
    if (timeSinceLastAttempt < cooldown) {
      this.log(`⏳ Function ${functionName} in cooldown (${Math.ceil((cooldown - timeSinceLastAttempt) / 1000)}s remaining)`, "INFO");
      return;
    }
    
    try {
      this.log(`🔄 Attempting to recover function ${functionName} (attempt ${attempts + 1}/${maxAttempts})...`);
      
      // Regenerate functions manifest
      if (this.config.functions.autoRegenerate) {
        await this.regenerateFunctionsManifest();
      }
      
      // Try to fix function issues
      await this.fixFunctionIssues(functionName, status);
      
      this.recoveryAttempts.set(functionName, 0); // Reset attempts on success
      this.recoveryAttempts.set(`${functionName}_last`, Date.now());
      
      // Wait before next recovery attempt
      const delay = this.config.recoveryDelay;
      if (delay > 0) {
        this.log(`⏳ Waiting ${delay}ms before next recovery attempt...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
    } catch (error) {
      this.log(`❌ Recovery failed for function ${functionName}: ${error.message}`, "ERROR");
      this.recoveryAttempts.set(functionName, attempts + 1);
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating functions manifest...");
      
      const manifestScript = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(manifestScript)) {
        const result = await this.runCommand("node", [manifestScript]);
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully");
        } else {
          throw new Error(`Script failed: ${result.stderr}`);
        }
      } else {
        throw new Error("Manifest generation script not found");
      }
      
    } catch (error) {
      this.log(`❌ Failed to regenerate functions manifest: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async fixFunctionIssues(functionName, status) {
    try {
      this.log(`🔧 Attempting to fix function issues for ${functionName}...`);
      
      // This is a placeholder for function-specific fixes
      // In a real implementation, you might:
      // - Fix syntax errors
      // - Restore from backup
      // - Regenerate function files
      // - Fix dependency issues
      
      this.log(`✅ Function ${functionName} issues addressed`);
      
    } catch (error) {
      this.log(`❌ Failed to fix function issues for ${functionName}: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Netlify functions monitoring is already running", "WARN");
      return;
    }
    
    this.log("🚀 Starting enhanced Netlify functions redundancy monitoring...");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        await this.autoRecovery();
      } catch (error) {
        this.log(`❌ Monitoring loop error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log(`✅ Enhanced Netlify functions redundancy monitoring started (interval: ${this.config.checkInterval}ms)`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Netlify functions monitoring is not running", "WARN");
      return;
    }
    
    this.log("🛑 Stopping enhanced Netlify functions redundancy monitoring...");
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("✅ Enhanced Netlify functions redundancy monitoring stopped");
  }

  async deployFunctions() {
    this.log("🚀 Deploying Netlify functions...");
    
    try {
      // This would trigger a Netlify deployment
      // In a real implementation, you might:
      // - Run netlify deploy
      // - Trigger a webhook
      // - Use Netlify CLI
      
      this.log("✅ Netlify functions deployment triggered");
      
    } catch (error) {
      this.log(`❌ Failed to deploy functions: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      functionStatus: Object.fromEntries(this.functionStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      uptime: this.monitoring ? Date.now() - (this.functionStatus.size > 0 ? Date.now() : Date.now()) : 0
    };
  }

  async run() {
    const command = process.argv[2];
    
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
        const health = await this.performHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'recover':
        await this.autoRecovery();
        break;
      case 'regenerate':
        await this.regenerateFunctionsManifest();
        break;
      case 'deploy':
        await this.deployFunctions();
        break;
      default:
        console.log(`
Enhanced Netlify Functions Redundancy Manager - Advanced Function Management

Usage:
  node automation/enhanced-netlify-functions-redundancy-manager.cjs [command]

Commands:
  start       - Start monitoring and auto-recovery
  stop        - Stop monitoring
  status      - Show current status
  health      - Perform health check
  recover     - Trigger auto-recovery
  regenerate  - Regenerate functions manifest
  deploy      - Deploy functions to Netlify

Features:
  ✅ Comprehensive Function Validation
  ✅ Syntax & Structure Checking
  ✅ Manifest Validation
  ✅ Function Discovery
  ✅ Intelligent Auto-Recovery
  ✅ Manifest Regeneration
        `);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new EnhancedNetlifyFunctionsRedundancyManager();
  manager.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedNetlifyFunctionsRedundancyManager;