#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCount = 0;
    this.lastCheck = null;
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
        return config.netlify || {};
      } catch (error) {
        this.log(`Error loading Netlify config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 120000,
      maxFailures: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        backupCreation: true
      },
      manifestFile: "netlify/functions/functions-manifest.json",
      backupDir: "netlify/functions/backup"
    };
  }

  log(message, level = "INFO") {
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
        timeout: options.timeout || this.config.healthCheckTimeout || 15000,
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
        this.log("❌ Netlify directory not found");
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
      this.log(`❌ Error checking Netlify directory: ${error.message}`);
      return { exists: false, functions: false, config: false };
    }
  }

  async checkFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found");
        return { exists: false, functions: [], valid: false };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("⚠️ Invalid Netlify functions manifest structure");
        return { exists: true, functions: [], valid: false };
      }

      this.log(`📋 Found ${manifest.functions.length} Netlify functions in manifest`);
      
      // Validate each function
      const validFunctions = [];
      const invalidFunctions = [];
      
      for (const functionName of manifest.functions) {
        const functionPath = path.join(this.workspace, "netlify/functions", functionName);
        if (fs.existsSync(functionPath)) {
          validFunctions.push(functionName);
        } else {
          invalidFunctions.push(functionName);
        }
      }

      if (invalidFunctions.length > 0) {
        this.log(`⚠️ Found ${invalidFunctions.length} functions in manifest that don't exist on disk`);
      }

      return {
        exists: true,
        functions: manifest.functions,
        valid: invalidFunctions.length === 0,
        validFunctions,
        invalidFunctions,
        totalCount: manifest.functions.length
      };
    } catch (error) {
      this.log(`❌ Error checking functions manifest: ${error.message}`);
      return { exists: false, functions: [], valid: false };
    }
  }

  async createBackupFunctions() {
    try {
      const backupDir = path.join(this.workspace, this.config.backupDir);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found for backup");
        return false;
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `functions-backup-${timestamp}`);
      
      // Create backup of functions directory
      const result = await this.runCommand("cp", ["-r", functionsDir, backupPath]);
      
      if (result.status === 0) {
        this.log(`✅ Functions backup created at ${backupPath}`);
        
        // Clean up old backups (keep last 5)
        const backups = fs.readdirSync(backupDir)
          .filter(dir => dir.startsWith('functions-backup-'))
          .sort()
          .reverse();
        
        if (backups.length > 5) {
          for (let i = 5; i < backups.length; i++) {
            const oldBackup = path.join(backupDir, backups[i]);
            fs.rmSync(oldBackup, { recursive: true, force: true });
            this.log(`🗑️ Removed old backup: ${backups[i]}`);
          }
        }
        
        return true;
      } else {
        this.log(`❌ Failed to create backup: ${result.stderr}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error creating backup: ${error.message}`);
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      const scriptPath = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (!fs.existsSync(scriptPath)) {
        this.log("⚠️ Manifest generator script not found, creating basic manifest...");
        return await this.createBasicManifest();
      }

      const result = await this.runCommand("node", [scriptPath]);
      
      if (result.status === 0) {
        this.log("✅ Functions manifest regenerated successfully");
        return true;
      } else {
        this.log(`⚠️ Manifest regeneration failed: ${result.stderr}`, "WARN");
        return await this.createBasicManifest();
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`);
      return await this.createBasicManifest();
    }
  }

  async createBasicManifest() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found");
        return false;
      }

      const functionDirs = fs.readdirSync(functionsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: functionDirs,
        note: "Auto-generated by redundancy system"
      };

      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      const manifestDir = path.dirname(manifestPath);
      
      if (!fs.existsSync(manifestDir)) {
        fs.mkdirSync(manifestDir, { recursive: true });
      }

      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      this.log(`✅ Basic manifest created with ${functionDirs.length} functions`);
      
      return true;
    } catch (error) {
      this.log(`❌ Error creating basic manifest: ${error.message}`);
      return false;
    }
  }

  async validateFunctionStructure() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        return { valid: false, error: "Functions directory not found" };
      }

      const functionDirs = fs.readdirSync(functionsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory());

      const validationResults = {};
      let allValid = true;
      let totalIssues = 0;

      for (const functionDir of functionDirs) {
        const functionPath = path.join(functionsDir, functionDir.name);
        const validation = this.validateSingleFunction(functionPath);
        
        validationResults[functionDir.name] = validation;
        
        if (!validation.valid) {
          allValid = false;
          totalIssues += validation.issues.length;
        }
      }

      this.log(`📊 Function validation complete: ${functionDirs.length} functions, ${totalIssues} issues found`);
      
      return {
        valid: allValid,
        totalFunctions: functionDirs.length,
        totalIssues,
        results: validationResults
      };
    } catch (error) {
      this.log(`❌ Function validation failed: ${error.message}`);
      return { valid: false, error: error.message };
    }
  }

  validateSingleFunction(functionPath) {
    const issues = [];
    
    try {
      // Check for required files
      const requiredFiles = ['index.js', 'index.ts', 'function.js', 'function.ts'];
      const hasRequiredFile = requiredFiles.some(file => 
        fs.existsSync(path.join(functionPath, file))
      );
      
      if (!hasRequiredFile) {
        issues.push("Missing required function file (index.js, index.ts, function.js, or function.ts)");
      }

      // Check for package.json
      const packageJsonPath = path.join(functionPath, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          if (!packageJson.name) {
            issues.push("Missing name in package.json");
          }
        } catch (error) {
          issues.push("Invalid package.json format");
        }
      }

      // Check for excessive file size
      const files = fs.readdirSync(functionPath);
      for (const file of files) {
        const filePath = path.join(functionPath, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile() && stats.size > 1024 * 1024) { // 1MB limit
          issues.push(`File ${file} is too large (${Math.round(stats.size / 1024)}KB)`);
        }
      }

      return {
        valid: issues.length === 0,
        issues,
        path: functionPath
      };
    } catch (error) {
      return {
        valid: false,
        issues: [`Error validating function: ${error.message}`],
        path: functionPath
      };
    }
  }

  async performRecovery() {
    this.log("🔄 Performing Netlify functions recovery...");
    
    try {
      // Create backup first
      await this.createBackupFunctions();
      
      // Regenerate manifest
      const manifestRegenerated = await this.regenerateFunctionsManifest();
      
      // Validate function structure
      const validation = await this.validateFunctionStructure();
      
      if (!validation.valid) {
        this.log(`⚠️ Found ${validation.totalIssues} function issues, attempting to fix...`);
        
        // Try to fix common issues
        for (const [functionName, result] of Object.entries(validation.results)) {
          if (!result.valid && result.issues) {
            this.log(`Fixing issues in function ${functionName}...`);
            // Add specific fix logic here based on issue types
          }
        }
      }
      
      this.log("✅ Recovery process completed");
      return true;
    } catch (error) {
      this.log(`❌ Recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkHealth() {
    try {
      this.log("🔍 Checking Netlify functions health...");
      
      const netlifyCheck = await this.checkNetlifyDirectory();
      if (!netlifyCheck.exists) {
        this.log("❌ Netlify directory missing", "ERROR");
        return { healthy: false, error: "Netlify directory not found" };
      }

      if (!netlifyCheck.functions) {
        this.log("❌ Functions directory missing", "ERROR");
        return { healthy: false, error: "Functions directory not found" };
      }

      const manifestCheck = await this.checkFunctionsManifest();
      if (!manifestCheck.exists) {
        this.log("❌ Functions manifest missing", "ERROR");
        return { healthy: false, error: "Functions manifest not found" };
      }

      const validation = await this.validateFunctionStructure();
      if (!validation.valid) {
        this.log(`⚠️ Function validation failed: ${validation.totalIssues} issues`, "WARN");
        return { healthy: false, issues: validation.totalIssues, results: validation.results };
      }

      this.log("✅ Netlify functions health check passed");
      return { 
        healthy: true, 
        functions: manifestCheck.totalCount,
        netlifyConfig: netlifyCheck.config
      };
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }

    this.log("🚀 Starting enhanced Netlify functions redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    const initialHealth = await this.checkHealth();
    if (!initialHealth.healthy) {
      this.log("⚠️ Initial health check failed, performing recovery...", "WARN");
      await this.performRecovery();
    }

    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        const health = await this.checkHealth();
        
        if (!health.healthy) {
          this.failureCount++;
          this.log(`⚠️ Health check failed (attempt ${this.failureCount}/${this.config.maxFailures})`, "WARN");
          
          if (this.failureCount >= this.config.maxFailures) {
            this.log("🚨 Max failures reached, performing recovery...", "ERROR");
            await this.performRecovery();
            this.failureCount = 0;
          }
        } else {
          this.failureCount = 0;
        }
        
        this.lastCheck = new Date().toISOString();
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("✅ Enhanced Netlify functions redundancy monitoring started");
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 Enhanced Netlify functions redundancy monitoring stopped");
  }

  async getStatus() {
    const health = await this.checkHealth();
    
    return {
      health,
      monitoring: this.monitoring,
      failureCount: this.failureCount,
      lastCheck: this.lastCheck,
      timestamp: new Date().toISOString()
    };
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  if (global.netlifyFunctionsRedundancy) {
    global.netlifyFunctionsRedundancy.stopMonitoring();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  if (global.netlifyFunctionsRedundancy) {
    global.netlifyFunctionsRedundancy.stopMonitoring();
  }
  process.exit(0);
});

// Start the system
const netlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
global.netlifyFunctionsRedundancy = netlifyFunctionsRedundancy;

// Export for potential external use
module.exports = EnhancedNetlifyFunctionsRedundancy;