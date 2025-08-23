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
      netlifyDir: "netlify",
      functionsDir: "netlify/functions",
      manifestFile: "netlify/functions/functions-manifest.json",
      configFile: "netlify/netlify.toml",
      checkInterval: 120000, // 2 minutes
      maxFailures: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000, // 5 minutes
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        backupExecution: true
      },
      backupStrategies: [
        "local-execution",
        "function-regeneration",
        "deployment-trigger"
      ],
      localExecution: {
        enabled: true,
        timeout: 60000, // 1 minute
        retryAttempts: 2
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastRunTimes = new Map();
    this.functionStatus = new Map();
    this.manifestData = null;
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
      const netlifyDir = path.join(this.workspace, this.config.netlifyDir);
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

  async loadFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Functions manifest not found", "ERROR");
        return null;
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      this.manifestData = JSON.parse(manifestContent);
      
      this.log(`📋 Loaded functions manifest with ${this.manifestData.functions.length} functions`);
      return this.manifestData;
    } catch (error) {
      this.log(`❌ Error loading functions manifest: ${error.message}`, "ERROR");
      return null;
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      this.log(`Checking health of function: ${functionName}`);
      
      const functionDir = path.join(this.workspace, this.config.functionsDir, functionName);
      
      if (!fs.existsSync(functionDir)) {
        this.log(`❌ Function directory not found: ${functionName}`, "ERROR");
        return false;
      }

      // Check for required function files
      const requiredFiles = ['index.js', 'index.cjs', 'index.mjs'];
      let hasMainFile = false;
      
      for (const file of requiredFiles) {
        if (fs.existsSync(path.join(functionDir, file))) {
          hasMainFile = true;
          break;
        }
      }
      
      if (!hasMainFile) {
        this.log(`❌ Function ${functionName} missing main file`, "ERROR");
        return false;
      }

      // Check function configuration
      const configFile = path.join(functionDir, 'netlify.toml');
      if (fs.existsSync(configFile)) {
        this.log(`⚙️ Function ${functionName} has configuration file`);
      }

      // Check function dependencies
      const packageFile = path.join(functionDir, 'package.json');
      if (fs.existsSync(packageFile)) {
        try {
          const packageData = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
          if (packageData.dependencies) {
            this.log(`📦 Function ${functionName} has ${Object.keys(packageData.dependencies).length} dependencies`);
          }
        } catch (error) {
          this.log(`⚠️ Function ${functionName} has invalid package.json`, "WARN");
        }
      }

      this.log(`✅ Function ${functionName} is healthy`);
      return true;
    } catch (error) {
      this.log(`❌ Error checking function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async executeFunctionLocally(functionName) {
    try {
      this.log(`Executing function ${functionName} locally...`);
      
      const functionDir = path.join(this.workspace, this.config.functionsDir, functionName);
      
      if (!fs.existsSync(functionDir)) {
        throw new Error(`Function directory not found: ${functionName}`);
      }

      // Find the main function file
      const mainFiles = ['index.js', 'index.cjs', 'index.mjs'];
      let mainFile = null;
      
      for (const file of mainFiles) {
        if (fs.existsSync(path.join(functionDir, file))) {
          mainFile = file;
          break;
        }
      }
      
      if (!mainFile) {
        throw new Error(`No main file found for function: ${functionName}`);
      }

      // Check if function has dependencies
      const packageFile = path.join(functionDir, 'package.json');
      if (fs.existsSync(packageFile)) {
        this.log(`Installing dependencies for ${functionName}...`);
        const installResult = await this.runCommand("npm", ["install"], {
          cwd: functionDir,
          timeout: 120000 // 2 minutes for npm install
        });
        
        if (installResult.status !== 0) {
          this.log(`⚠️ Dependency installation failed for ${functionName}: ${installResult.stderr}`, "WARN");
        }
      }

      // Execute the function
      const result = await this.runCommand("node", [mainFile], {
        cwd: functionDir,
        timeout: this.config.localExecution.timeout
      });
      
      if (result.status === 0) {
        this.log(`✅ Local execution of ${functionName} completed successfully`);
        this.lastRunTimes.set(functionName, new Date());
        return true;
      } else {
        this.log(`❌ Local execution of ${functionName} failed: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error executing function ${functionName} locally: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating functions manifest...");
      
      const scriptPath = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand("node", [scriptPath], {
          timeout: 60000
        });
        
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully");
          
          // Reload the manifest
          await this.loadFunctionsManifest();
          return true;
        } else {
          this.log(`❌ Functions manifest regeneration failed: ${result.stderr}`, "ERROR");
          return false;
        }
      } else {
        this.log("⚠️ Functions manifest generation script not found", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error regenerating functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerNetlifyDeploy() {
    try {
      this.log("Triggering Netlify deployment...");
      
      // Check if netlify CLI is available
      const netlifyCheck = await this.runCommand("netlify", ["--version"]);
      
      if (netlifyCheck.status === 0) {
        // Trigger build and deploy
        const deployResult = await this.runCommand("netlify", ["build", "--prod"], {
          timeout: this.config.deployTimeout
        });
        
        if (deployResult.status === 0) {
          this.log("✅ Netlify deployment triggered successfully");
          return true;
        } else {
          this.log(`❌ Netlify deployment failed: ${deployResult.stderr}`, "ERROR");
          return false;
        }
      } else {
        this.log("⚠️ Netlify CLI not available, skipping deployment trigger", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error triggering Netlify deployment: ${error.message}`, "ERROR");
      return false;
    }
  }

  async backupFunctionExecution(functionName) {
    try {
      this.log(`Executing backup strategy for function ${functionName}...`);
      
      let success = false;
      
      // Try local execution first
      if (this.config.localExecution.enabled) {
        this.log(`🔄 Attempting local execution as backup...`);
        success = await this.executeFunctionLocally(functionName);
        
        if (success) {
          this.log(`✅ Backup execution successful for ${functionName}`);
          return true;
        }
      }
      
      // Try function regeneration
      if (this.config.functions.autoRegenerate) {
        this.log(`🔄 Attempting function regeneration as backup...`);
        success = await this.regenerateFunctionsManifest();
        
        if (success) {
          this.log(`✅ Function regeneration successful for ${functionName}`);
          return true;
        }
      }
      
      // Try deployment trigger
      if (this.config.autoDeploy) {
        this.log(`🚀 Attempting deployment trigger as backup...`);
        success = await this.triggerNetlifyDeploy();
        
        if (success) {
          this.log(`✅ Deployment trigger successful for ${functionName}`);
          return true;
        }
      }
      
      this.log(`❌ All backup strategies failed for ${functionName}`, "ERROR");
      return false;
    } catch (error) {
      this.log(`❌ Error in backup execution for ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllFunctions() {
    this.log("Starting comprehensive Netlify functions health check...");
    
    const { exists, functions } = await this.checkNetlifyDirectory();
    if (!exists || !functions) {
      this.log("❌ Cannot check functions - directory not found", "ERROR");
      return false;
    }
    
    // Load functions manifest
    const manifest = await this.loadFunctionsManifest();
    if (!manifest) {
      this.log("❌ Cannot check functions - manifest not available", "ERROR");
      return false;
    }
    
    let healthyCount = 0;
    const totalFunctions = manifest.functions.length;
    
    for (const functionName of manifest.functions) {
      try {
        const isHealthy = await this.checkFunctionHealth(functionName);
        
        if (isHealthy) {
          healthyCount++;
          this.functionStatus.set(functionName, "healthy");
          
          // Reset failure count for healthy functions
          this.failureCounts.set(functionName, 0);
        } else {
          this.functionStatus.set(functionName, "unhealthy");
          
          // Increment failure count
          const failureCount = (this.failureCounts.get(functionName) || 0) + 1;
          this.failureCounts.set(functionName, failureCount);
          
          this.log(`⚠️ Function ${functionName} failure count: ${failureCount}/${this.config.maxFailures}`, "WARN");
          
          // If max failures reached, try backup execution
          if (failureCount >= this.config.maxFailures) {
            this.log(`🚨 Max failures reached for ${functionName}, attempting backup execution...`, "ERROR");
            await this.backupFunctionExecution(functionName);
          }
        }
        
        // Small delay between checks
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        this.log(`❌ Error checking function ${functionName}: ${error.message}`, "ERROR");
        this.functionStatus.set(functionName, "error");
      }
    }
    
    this.log(`📊 Netlify functions health check complete: ${healthyCount}/${totalFunctions} functions healthy`);
    return healthyCount === totalFunctions;
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }
    
    this.log("Starting enhanced Netlify functions redundancy monitoring...");
    this.monitoring = true;
    
    // Initial health check
    await this.checkAllFunctions();
    
    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.checkAllFunctions();
      } catch (error) {
        this.log(`Error during functions health check: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log("Enhanced Netlify functions redundancy monitoring started");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced Netlify functions redundancy monitoring stopped");
  }

  async emergencyRegeneration() {
    this.log("Performing emergency functions regeneration...");
    
    try {
      // Regenerate manifest
      await this.regenerateFunctionsManifest();
      
      // Trigger deployment
      if (this.config.autoDeploy) {
        await this.triggerNetlifyDeploy();
      }
      
      this.log("Emergency functions regeneration completed");
      return true;
    } catch (error) {
      this.log(`Emergency functions regeneration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      totalFunctions: this.manifestData ? this.manifestData.functions.length : 0,
      functionStatus: Object.fromEntries(this.functionStatus),
      failureCounts: Object.fromEntries(this.failureCounts),
      lastRunTimes: Object.fromEntries(
        Array.from(this.lastRunTimes.entries()).map(([k, v]) => [k, v.toISOString()])
      ),
      config: this.config
    };
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new EnhancedNetlifyFunctionsRedundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "stop":
      redundancy.stopMonitoring();
      break;
    case "check":
      redundancy.checkAllFunctions();
      break;
    case "regenerate":
      redundancy.emergencyRegeneration();
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-netlify-functions-redundancy.cjs [start|stop|check|regenerate|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedNetlifyFunctionsRedundancy };