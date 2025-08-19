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
    
    this.config = {
      manifestFile: "netlify/functions/functions-manifest.json",
      healthCheckInterval: 120000,
      maxFailureThreshold: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      autoRegenerate: true,
      backupFunctions: true,
      functionValidation: true,
      deploymentCheck: true,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        backupCreation: true
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastCheck = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
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

  async checkFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return { exists: false, valid: false, functions: [] };
      }

      const manifestContent = fs.readFileSync(manifestPath, "utf8");
      let manifest;
      
      try {
        manifest = JSON.parse(manifestContent);
      } catch (parseError) {
        this.log(`❌ Failed to parse functions manifest: ${parseError.message}`, "ERROR");
        return { exists: true, valid: false, functions: [] };
      }

      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("⚠️ Functions manifest is invalid or missing functions array", "WARN");
        return { exists: true, valid: false, functions: [] };
      }

      this.log(`✅ Functions manifest is valid with ${manifest.functions.length} functions`);
      return { exists: true, valid: true, functions: manifest.functions };
    } catch (error) {
      this.log(`❌ Error checking functions manifest: ${error.message}`, "ERROR");
      return { exists: false, valid: false, functions: [] };
    }
  }

  async validateIndividualFunctions() {
    try {
      const manifestCheck = await this.checkFunctionsManifest();
      if (!manifestCheck.valid) {
        return {};
      }

      const functionsDir = path.join(this.workspace, "netlify/functions");
      const validationResults = {};

      for (const functionName of manifestCheck.functions) {
        const functionPath = path.join(functionsDir, functionName);
        const validation = await this.validateFunction(functionName, functionPath);
        validationResults[functionName] = validation;
      }

      return validationResults;
    } catch (error) {
      this.log(`❌ Error validating individual functions: ${error.message}`, "ERROR");
      return {};
    }
  }

  async validateFunction(functionName, functionPath) {
    try {
      if (!fs.existsSync(functionPath)) {
        return { exists: false, valid: false, errors: ["Function directory not found"] };
      }

      const errors = [];
      let isValid = true;

      // Check if it's a directory or file
      const stats = fs.statSync(functionPath);
      if (stats.isDirectory()) {
        // Check for index.js or index.ts
        const indexFiles = ["index.js", "index.ts", "index.mjs"];
        const hasIndex = indexFiles.some(file => fs.existsSync(path.join(functionPath, file)));
        
        if (!hasIndex) {
          errors.push("Missing index file (index.js, index.ts, or index.mjs)");
          isValid = false;
        }

        // Check package.json if it exists
        const packagePath = path.join(functionPath, "package.json");
        if (fs.existsSync(packagePath)) {
          try {
            const packageContent = JSON.parse(fs.readFileSync(packagePath, "utf8"));
            if (!packageContent.main && !packageContent.exports) {
              errors.push("Package.json missing main or exports field");
              isValid = false;
            }
          } catch (parseError) {
            errors.push("Invalid package.json");
            isValid = false;
          }
        }
      } else if (stats.isFile()) {
        // Check file extension
        const ext = path.extname(functionPath);
        if (!['.js', '.ts', '.mjs'].includes(ext)) {
          errors.push(`Invalid file extension: ${ext}`);
          isValid = false;
        }
      }

      if (isValid) {
        this.log(`✅ Function ${functionName} is valid`);
      } else {
        this.log(`⚠️ Function ${functionName} has issues: ${errors.join(", ")}`, "WARN");
      }

      return { exists: true, valid: isValid, errors: errors };
    } catch (error) {
      this.log(`❌ Error validating function ${functionName}: ${error.message}`, "ERROR");
      return { exists: false, valid: false, errors: [error.message] };
    }
  }

  async regenerateFunctionsManifest() {
    if (!this.config.autoRegenerate) {
      return false;
    }

    this.log("🔄 Regenerating Netlify functions manifest...");
    
    try {
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Netlify functions manifest regenerated successfully");
        return true;
      } else {
        this.log(`❌ Failed to regenerate functions manifest: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error regenerating functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createBackupFunctions() {
    if (!this.config.backupFunctions) {
      return;
    }

    this.log("🔄 Creating backup functions...");
    
    try {
      const backupDir = path.join(this.workspace, "netlify/functions/backup");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const functionsDir = path.join(this.workspace, "netlify/functions");
      const manifestCheck = await this.checkFunctionsManifest();
      
      if (manifestCheck.valid) {
        for (const functionName of manifestCheck.functions) {
          const functionPath = path.join(functionsDir, functionName);
          const backupPath = path.join(backupDir, functionName);
          
          if (fs.existsSync(functionPath)) {
            // Copy function directory/file
            if (fs.statSync(functionPath).isDirectory()) {
              await this.copyDirectory(functionPath, backupPath);
            } else {
              fs.copyFileSync(functionPath, backupPath);
            }
            this.log(`✅ Created backup for function ${functionName}`);
          }
        }
      }

      // Backup manifest
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      const backupManifestPath = path.join(backupDir, "functions-manifest.backup.json");
      
      if (fs.existsSync(manifestPath)) {
        fs.copyFileSync(manifestPath, backupManifestPath);
        this.log("✅ Created backup for functions manifest");
      }

      this.log("✅ All backup functions created successfully");
    } catch (error) {
      this.log(`❌ Error creating backup functions: ${error.message}`, "ERROR");
    }
  }

  async copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        await this.copyDirectory(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }

  async checkDeploymentStatus() {
    if (!this.config.deploymentCheck) {
      return { deployed: true, status: "Deployment check disabled" };
    }

    try {
      this.log("🔍 Checking Netlify deployment status...");
      
      // This would typically check Netlify API for deployment status
      // For now, we'll simulate the check and check local build status
      
      const buildDir = path.join(this.workspace, ".netlify");
      const hasBuildDir = fs.existsSync(buildDir);
      
      if (hasBuildDir) {
        this.log("✅ Netlify build directory exists");
        return { deployed: true, status: "Build directory found" };
      } else {
        this.log("⚠️ Netlify build directory not found", "WARN");
        return { deployed: false, status: "Build directory missing" };
      }
    } catch (error) {
      this.log(`❌ Error checking deployment status: ${error.message}`, "ERROR");
      return { deployed: false, status: `Error: ${error.message}` };
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive Netlify functions health check...");
    
    const results = {
      netlifyDirectory: false,
      functionsDirectory: false,
      configFile: false,
      manifestExists: false,
      manifestValid: false,
      functionCount: 0,
      functionValidation: {},
      backupFunctions: false,
      deploymentStatus: {},
      timestamp: new Date().toISOString()
    };

    // Check Netlify directory structure
    const dirCheck = await this.checkNetlifyDirectory();
    results.netlifyDirectory = dirCheck.exists;
    results.functionsDirectory = dirCheck.functions;
    results.configFile = dirCheck.config;

    // Check functions manifest
    const manifestCheck = await this.checkFunctionsManifest();
    results.manifestExists = manifestCheck.exists;
    results.manifestValid = manifestCheck.valid;
    results.functionCount = manifestCheck.functions.length;

    // Validate individual functions
    if (manifestCheck.valid) {
      results.functionValidation = await this.validateIndividualFunctions();
    }

    // Check backup functions
    const backupDir = path.join(this.workspace, "netlify/functions/backup");
    results.backupFunctions = fs.existsSync(backupDir);

    // Check deployment status
    results.deploymentStatus = await this.checkDeploymentStatus();

    // Log results
    this.log(`📊 Comprehensive Health Check Results:
    - Netlify Directory: ${results.netlifyDirectory ? '✅ Exists' : '❌ Missing'}
    - Functions Directory: ${results.functionsDirectory ? '✅ Exists' : '❌ Missing'}
    - Config File: ${results.configFile ? '✅ Exists' : '❌ Missing'}
    - Manifest Exists: ${results.manifestExists ? '✅ Yes' : '❌ No'}
    - Manifest Valid: ${results.manifestValid ? '✅ Yes' : '❌ No'}
    - Function Count: ${results.functionCount}
    - Backup Functions: ${results.backupFunctions ? '✅ Created' : '❌ Missing'}
    - Deployment Status: ${results.deploymentStatus.deployed ? '✅ Deployed' : '❌ Not Deployed'}`);

    // Save health check results
    const healthCheckFile = path.join(this.logDir, `netlify-functions-health-check-${new Date().toISOString().split('T')[0]}.json`);
    try {
      fs.writeFileSync(healthCheckFile, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save health check results: ${error.message}`, "ERROR");
    }

    return results;
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency Netlify functions recovery...");
    
    try {
      // Regenerate functions manifest
      await this.regenerateFunctionsManifest();
      
      // Create backup functions
      await this.createBackupFunctions();
      
      // Validate all functions
      const manifestCheck = await this.checkFunctionsManifest();
      if (manifestCheck.valid) {
        await this.validateIndividualFunctions();
      }
      
      // Check deployment status
      await this.checkDeploymentStatus();
      
      this.log("✅ Emergency Netlify functions recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency Netlify functions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced Netlify functions redundancy monitoring...");
    this.monitoring = true;

    // Initial setup
    await this.createBackupFunctions();

    // Initial health check
    await this.performComprehensiveHealthCheck();

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    this.log(`✅ Enhanced Netlify functions redundancy monitoring started with ${this.config.healthCheckInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("🛑 Enhanced Netlify functions redundancy monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up enhanced Netlify functions redundancy system...");
    
    try {
      await this.stopMonitoring();
      
      // Remove backup functions directory
      const backupDir = path.join(this.workspace, "netlify/functions/backup");
      if (fs.existsSync(backupDir)) {
        fs.rmSync(backupDir, { recursive: true, force: true });
        this.log("🗑️ Removed backup functions directory");
      }
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Error during cleanup: ${error.message}`, "ERROR");
    }
  }
}

// Start the enhanced Netlify functions redundancy system
if (require.main === module) {
  const system = new EnhancedNetlifyFunctionsRedundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    system.log("🛑 Shutting down enhanced Netlify functions redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    system.log("🛑 Shutting down enhanced Netlify functions redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  system.startMonitoring();
}

module.exports = EnhancedNetlifyFunctionsRedundancy;