#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.config = {
      netlifyDir: "netlify",
      functionsDir: "netlify/functions",
      manifestFile: "netlify/functions/functions-manifest.json",
      backupDir: "automation/backups/netlify-functions",
      healthCheckInterval: 120000,
      maxFailureThreshold: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      autoRegenerate: true,
      deploymentCheck: true,
      logRotation: true,
      maxLogSize: 10 * 1024 * 1024, // 10MB
      maxLogFiles: 30
    };
    
    this.ensureDirectories();
    this.initializeMonitoring();
  }

  ensureDirectories() {
    // Ensure backup directory exists
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
    
    // Ensure logs directory exists
    const logsDir = "automation/logs";
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join("automation/logs", `enhanced-netlify-functions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
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

  async backupNetlifyFiles() {
    this.log("💾 Creating backup of Netlify files...");
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    
    try {
      // Backup functions manifest
      if (fs.existsSync(this.config.manifestFile)) {
        const backupPath = path.join(this.config.backupDir, `functions-manifest.${timestamp}.backup`);
        fs.copyFileSync(this.config.manifestFile, backupPath);
        this.log(`✅ Backed up functions manifest to ${backupPath}`);
      }
      
      // Backup netlify.toml if it exists
      const netlifyConfig = path.join(this.config.netlifyDir, "netlify.toml");
      if (fs.existsSync(netlifyConfig)) {
        const backupPath = path.join(this.config.backupDir, `netlify.toml.${timestamp}.backup`);
        fs.copyFileSync(netlifyConfig, backupPath);
        this.log(`✅ Backed up netlify.toml to ${backupPath}`);
      }
      
      // Clean up old backups
      await this.cleanupOldBackups();
      
    } catch (error) {
      this.log(`❌ Failed to backup Netlify files: ${error.message}`, "ERROR");
    }
  }

  async cleanupOldBackups() {
    try {
      const files = fs.readdirSync(this.config.backupDir)
        .filter(file => file.endsWith('.backup'))
        .sort()
        .reverse();
      
      if (files.length > 20) { // Keep last 20 backups
        const filesToDelete = files.slice(20);
        for (const file of filesToDelete) {
          fs.unlinkSync(path.join(this.config.backupDir, file));
          this.log(`🗑️ Cleaned up old backup: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not cleanup old backups: ${error.message}`, "WARN");
    }
  }

  async checkNetlifyDirectoryStructure() {
    try {
      this.log("🔍 Checking Netlify directory structure...");
      
      // Check if netlify directory exists
      if (!fs.existsSync(this.config.netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return { exists: false, functions: false, config: false };
      }
      
      // Check if functions directory exists
      const functionsDir = this.config.functionsDir;
      const functionsExists = fs.existsSync(functionsDir);
      
      // Check if netlify.toml exists
      const netlifyConfig = path.join(this.config.netlifyDir, "netlify.toml");
      const configExists = fs.existsSync(netlifyConfig);
      
      this.log(`📁 Netlify directory: ${this.config.netlifyDir} ${fs.existsSync(this.config.netlifyDir) ? '✅' : '❌'}`);
      this.log(`📁 Functions directory: ${functionsDir} ${functionsExists ? '✅' : '❌'}`);
      this.log(`📁 Netlify config: ${netlifyConfig} ${configExists ? '✅' : '❌'}`);
      
      return {
        exists: true,
        functions: functionsExists,
        config: configExists
      };
    } catch (error) {
      this.log(`❌ Directory structure check failed: ${error.message}`, "ERROR");
      return { exists: false, functions: false, config: false };
    }
  }

  async validateFunctionsManifest() {
    try {
      this.log("🔍 Validating functions manifest...");
      
      const manifestPath = this.config.manifestFile;
      
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Functions manifest not found", "ERROR");
        return { exists: false, valid: false, functions: 0, age: null };
      }
      
      // Check file syntax
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        
        // Basic validation
        if (!manifest.functions || !Array.isArray(manifest.functions)) {
          this.log("❌ Functions manifest has invalid structure", "ERROR");
          return { exists: true, valid: false, functions: 0, age: null };
        }
        
        if (!manifest.generatedAt) {
          this.log("❌ Functions manifest missing generation timestamp", "ERROR");
          return { exists: true, valid: false, functions: manifest.functions.length, age: null };
        }
        
        // Check manifest age
        const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
        const maxAge = 24 * 60 * 60 * 1000; // 24 hours
        
        this.log(`✅ Functions manifest is valid with ${manifest.functions.length} functions`);
        this.log(`⏰ Manifest age: ${Math.round(manifestAge / (1000 * 60 * 60))} hours`);
        
        return {
          exists: true,
          valid: true,
          functions: manifest.functions.length,
          age: manifestAge,
          outdated: manifestAge > maxAge
        };
      } catch (error) {
        this.log(`❌ Functions manifest has syntax errors: ${error.message}`, "ERROR");
        return { exists: true, valid: false, functions: 0, age: null };
      }
    } catch (error) {
      this.log(`❌ Manifest validation failed: ${error.message}`, "ERROR");
      return { exists: false, valid: false, functions: 0, age: null };
    }
  }

  async checkNetlifyCLI() {
    try {
      this.log("🔍 Checking Netlify CLI availability...");
      
      const netlifyResult = await this.runCommand("netlify", ["--version"]);
      
      if (netlifyResult.status === 0) {
        this.log("✅ Netlify CLI is available and working");
        return true;
      } else {
        this.log("⚠️ Netlify CLI not available or not configured", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`⚠️ Netlify CLI check failed: ${error.message}`, "WARN");
      return false;
    }
  }

  async checkNetlifyStatus() {
    try {
      this.log("🔍 Checking Netlify deployment status...");
      
      const statusResult = await this.runCommand("netlify", ["status"]);
      
      if (statusResult.status === 0) {
        this.log("✅ Netlify status check successful");
        
        // Parse status output for useful information
        const output = statusResult.stdout;
        if (output.includes("Site ID:")) {
          const siteIdMatch = output.match(/Site ID:\s*([a-f0-9-]+)/);
          if (siteIdMatch) {
            this.log(`🌐 Site ID: ${siteIdMatch[1]}`);
          }
        }
        
        return true;
      } else {
        this.log("⚠️ Netlify status check failed", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`⚠️ Netlify status check failed: ${error.message}`, "WARN");
      return false;
    }
  }

  async checkDeploymentStatus() {
    try {
      this.log("🔍 Checking Netlify deployment status...");
      
      const deployResult = await this.runCommand("netlify", ["api", "listSiteDeploys"]);
      
      if (deployResult.status === 0) {
        this.log("✅ Netlify deployment status check successful");
        
        try {
          const deployments = JSON.parse(deployResult.stdout);
          if (deployments && deployments.length > 0) {
            const latestDeploy = deployments[0];
            this.log(`🚀 Latest deployment: ${latestDeploy.id} (${latestDeploy.status})`);
            
            if (latestDeploy.status === 'ready') {
              this.log("✅ Latest deployment is ready");
              return true;
            } else if (latestDeploy.status === 'error') {
              this.log("❌ Latest deployment has errors", "ERROR");
              return false;
            } else {
              this.log(`⚠️ Latest deployment status: ${latestDeploy.status}`, "WARN");
              return false;
            }
          }
        } catch (parseError) {
          this.log("⚠️ Could not parse deployment data", "WARN");
        }
        
        return true;
      } else {
        this.log("⚠️ Netlify deployment status check failed", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`⚠️ Deployment status check failed: ${error.message}`, "WARN");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      // Check if the manifest generator script exists
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(manifestScript)) {
        this.log("📜 Using existing manifest generator script");
        const result = await this.runCommand("node", [manifestScript]);
        
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully using script");
          return true;
        } else {
          this.log(`❌ Script-based regeneration failed: ${result.stderr}`, "ERROR");
        }
      }
      
      // Fallback: manual manifest generation
      this.log("📜 Generating manifest manually...");
      await this.generateManualManifest();
      
      return true;
    } catch (error) {
      this.log(`❌ Manifest regeneration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateManualManifest() {
    try {
      this.log("📜 Generating manual functions manifest...");
      
      const functionsDir = this.config.functionsDir;
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found", "ERROR");
        return false;
      }
      
      // Scan for function files
      const functionFiles = [];
      const scanDir = (dir) => {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDir(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.mjs')) {
            const relativePath = path.relative(functionsDir, fullPath);
            const functionName = relativePath.replace(/\.(js|ts|mjs)$/, '');
            functionFiles.push(functionName);
          }
        }
      };
      
      scanDir(functionsDir);
      
      // Create manifest
      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: functionFiles,
        totalFunctions: functionFiles.length,
        generatedBy: "enhanced-netlify-functions-redundancy"
      };
      
      // Write manifest
      fs.writeFileSync(this.config.manifestFile, JSON.stringify(manifest, null, 2));
      this.log(`✅ Manual manifest generated with ${functionFiles.length} functions`);
      
      return true;
    } catch (error) {
      this.log(`❌ Manual manifest generation failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateNetlifyConfiguration() {
    try {
      this.log("🔍 Validating Netlify configuration...");
      
      const netlifyConfig = path.join(this.config.netlifyDir, "netlify.toml");
      
      if (!fs.existsSync(netlifyConfig)) {
        this.log("⚠️ Netlify configuration file not found", "WARN");
        return false;
      }
      
      // Basic TOML validation (simple check)
      const configContent = fs.readFileSync(netlifyConfig, 'utf8');
      
      if (configContent.includes('[build]') || configContent.includes('[functions]')) {
        this.log("✅ Netlify configuration appears valid");
        return true;
      } else {
        this.log("⚠️ Netlify configuration may be incomplete", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Configuration validation failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerNetlifyRecovery() {
    try {
      this.log("🔄 Triggering Netlify functions recovery...");
      
      // Backup current files
      await this.backupNetlifyFiles();
      
      // Regenerate functions manifest if needed
      const manifestCheck = await this.validateFunctionsManifest();
      if (!manifestCheck.valid || manifestCheck.outdated) {
        this.log("🔄 Regenerating functions manifest...");
        await this.regenerateFunctionsManifest();
      }
      
      // Validate configuration
      await this.validateNetlifyConfiguration();
      
      // Check deployment status
      if (this.config.deploymentCheck) {
        await this.checkDeploymentStatus();
      }
      
      // Trigger deployment if needed
      if (this.config.autoDeploy) {
        this.log("🔄 Triggering Netlify deployment...");
        await this.runCommand("git", ["add", "."]);
        await this.runCommand("git", ["commit", "-m", "chore: update netlify functions and configuration"]);
        await this.runCommand("git", ["push", "origin", "main"]);
      }
      
      this.log("✅ Netlify recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Netlify recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive Netlify functions health check...");
    
    const results = {
      directoryStructure: {},
      functionsManifest: {},
      netlifyCLI: false,
      netlifyStatus: false,
      deploymentStatus: false,
      configuration: false,
      timestamp: new Date().toISOString()
    };
    
    try {
      // Check directory structure
      results.directoryStructure = await this.checkNetlifyDirectoryStructure();
      
      // Check functions manifest
      results.functionsManifest = await this.validateFunctionsManifest();
      
      // Check Netlify CLI
      results.netlifyCLI = await this.checkNetlifyCLI();
      
      // Check Netlify status
      if (results.netlifyCLI) {
        results.netlifyStatus = await this.checkNetlifyStatus();
        results.deploymentStatus = await this.checkDeploymentStatus();
      }
      
      // Check configuration
      results.configuration = await this.validateNetlifyConfiguration();
      
      // Log results
      this.log("📊 Netlify Functions Health Check Results:");
      this.log(`  Directory Structure: ${results.directoryStructure.exists ? '✅' : '❌'}`);
      this.log(`  Functions Directory: ${results.directoryStructure.functions ? '✅' : '❌'}`);
      this.log(`  Netlify Config: ${results.directoryStructure.config ? '✅' : '❌'}`);
      this.log(`  Functions Manifest: ${results.functionsManifest.valid ? '✅' : '❌'} (${results.functionsManifest.functions} functions)`);
      this.log(`  Netlify CLI: ${results.netlifyCLI ? '✅' : '❌'}`);
      this.log(`  Netlify Status: ${results.netlifyStatus ? '✅' : '❌'}`);
      this.log(`  Deployment Status: ${results.deploymentStatus ? '✅' : '❌'}`);
      this.log(`  Configuration: ${results.configuration ? '✅' : '❌'}`);
      
      // Save results
      this.saveHealthCheckResults(results);
      
      // Trigger recovery if needed
      if (!results.directoryStructure.exists || !results.directoryStructure.functions || 
          !results.functionsManifest.valid || !results.configuration) {
        await this.triggerNetlifyRecovery();
      }
      
      return results;
    } catch (error) {
      this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
      return results;
    }
  }

  saveHealthCheckResults(results) {
    try {
      const resultsFile = path.join("automation/logs", "netlify-functions-health-check-results.json");
      const existingResults = fs.existsSync(resultsFile) ? 
        JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : [];
      
      existingResults.push(results);
      
      // Keep only last 100 results
      if (existingResults.length > 100) {
        existingResults.splice(0, existingResults.length - 100);
      }
      
      fs.writeFileSync(resultsFile, JSON.stringify(existingResults, null, 2));
    } catch (error) {
      this.log(`⚠️ Could not save health check results: ${error.message}`, "WARN");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing enhanced Netlify functions monitoring...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log("✅ Enhanced Netlify functions monitoring initialized");
  }

  async gracefulShutdown() {
    this.log("🔄 Shutting down enhanced Netlify functions redundancy system...");
    
    // Backup files before shutdown
    await this.backupNetlifyFiles();
    
    this.log("✅ Enhanced Netlify functions redundancy system shut down gracefully");
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  if (global.enhancedNetlifyFunctionsRedundancy) {
    global.enhancedNetlifyFunctionsRedundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  if (global.enhancedNetlifyFunctionsRedundancy) {
    global.enhancedNetlifyFunctionsRedundancy.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

// Start the system
if (require.main === module) {
  global.enhancedNetlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = EnhancedNetlifyFunctionsRedundancy;