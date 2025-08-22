#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveNetlifyFunctionsRedundancy {
  constructor() {
    this.config = {
      functions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functionsDir: "netlify/functions",
        backupDir: "automation/backup-functions",
        healthCheckInterval: 120000,
        autoHealing: true,
        functionTimeout: 30000,
        maxFailureThreshold: 2
      },
      monitoring: {
        systemHealthCheckInterval: 300000,
        functionValidationInterval: 600000,
        autoRecovery: true,
        backupFunctions: true
      },
      logging: {
        logDir: "automation/logs",
        logLevel: process.env.NETLIFY_FUNCTIONS_REDUNDANCY_LOG_LEVEL || "INFO"
      },
      build: {
        autoBuild: true,
        buildTimeout: 300000,
        buildRetries: 3
      }
    };
    
    this.ensureLogDirectory();
    this.ensureBackupDirectory();
    this.functionStatus = new Map();
    this.failureCounts = new Map();
    this.initializeMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  ensureBackupDirectory() {
    if (!fs.existsSync(this.config.functions.backupDir)) {
      fs.mkdirSync(this.config.functions.backupDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [NETLIFY-FUNCTIONS-REDUNDANCY] ${message}`;
    
    if (this.shouldLog(level)) {
      console.log(logEntry);
    }
    
    const logFile = path.join(this.config.logging.logDir, `netlify-functions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  shouldLog(level) {
    const levels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
    const currentLevel = levels[this.config.logging.logLevel] || 1;
    return levels[level] >= currentLevel;
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: options.timeout || this.config.functions.functionTimeout,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error,
        timedOut: result.signal === 'SIGTERM'
      });
    });
  }

  async loadFunctionsManifest() {
    try {
      if (!fs.existsSync(this.config.functions.manifestFile)) {
        this.log("Functions manifest not found", "ERROR");
        return null;
      }

      const manifestContent = fs.readFileSync(this.config.functions.manifestFile, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("Invalid functions manifest format", "ERROR");
        return null;
      }

      return manifest;
    } catch (error) {
      this.log(`Failed to load functions manifest: ${error.message}`, "ERROR");
      return null;
    }
  }

  async validateFunction(functionName) {
    try {
      // Check if function file exists
      const functionFile = path.join(this.config.functions.functionsDir, `${functionName}.js`);
      const functionFileCjs = path.join(this.config.functions.functionsDir, `${functionName}.cjs`);
      
      if (!fs.existsSync(functionFile) && !fs.existsSync(functionFileCjs)) {
        this.log(`Function file for ${functionName} not found`, "WARN");
        return { valid: false, reason: "file_not_found" };
      }

      // Check if function is properly exported
      const actualFile = fs.existsSync(functionFile) ? functionFile : functionFileCjs;
      const functionContent = fs.readFileSync(actualFile, 'utf8');
      
      // Basic validation - check for exports
      const hasExports = functionContent.includes('exports.') || 
                        functionContent.includes('module.exports') ||
                        functionContent.includes('export default') ||
                        functionContent.includes('export function');
      
      if (!hasExports) {
        this.log(`Function ${functionName} missing exports`, "WARN");
        return { valid: false, reason: "missing_exports" };
      }

      // Check for basic function structure
      const hasFunction = functionContent.includes('function') || 
                         functionContent.includes('=>') ||
                         functionContent.includes('async');
      
      if (!hasFunction) {
        this.log(`Function ${functionName} missing function definition`, "WARN");
        return { valid: false, reason: "missing_function" };
      }

      this.log(`Function ${functionName} validation passed`);
      return { valid: true, reason: "valid" };
    } catch (error) {
      this.log(`Function validation failed for ${functionName}: ${error.message}`, "ERROR");
      return { valid: false, reason: "validation_error" };
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      const validation = await this.validateFunction(functionName);
      
      if (!validation.valid) {
        this.functionStatus.set(functionName, { 
          status: "invalid", 
          healthy: false, 
          reason: validation.reason,
          lastCheck: Date.now() 
        });
        return { status: "invalid", healthy: false, reason: validation.reason };
      }

      // Check if function can be loaded without syntax errors
      try {
        const functionFile = path.join(this.config.functions.functionsDir, `${functionName}.js`);
        const functionFileCjs = path.join(this.config.functions.functionsDir, `${functionName}.cjs`);
        const actualFile = fs.existsSync(functionFile) ? functionFile : functionFileCjs;
        
        // Try to require the function to check for syntax errors
        require(actualFile);
        
        this.functionStatus.set(functionName, { 
          status: "healthy", 
          healthy: true, 
          lastCheck: Date.now() 
        });
        
        return { status: "healthy", healthy: true };
      } catch (requireError) {
        this.log(`Function ${functionName} has syntax errors: ${requireError.message}`, "WARN");
        
        this.functionStatus.set(functionName, { 
          status: "syntax_error", 
          healthy: false, 
          reason: "syntax_error",
          lastCheck: Date.now() 
        });
        
        return { status: "syntax_error", healthy: false, reason: "syntax_error" };
      }
    } catch (error) {
      this.log(`Health check failed for function ${functionName}: ${error.message}`, "ERROR");
      return { status: "error", healthy: false, reason: "check_error" };
    }
  }

  async backupFunction(functionName) {
    try {
      const functionFile = path.join(this.config.functions.functionsDir, `${functionName}.js`);
      const functionFileCjs = path.join(this.config.functions.functionsDir, `${functionName}.cjs`);
      const actualFile = fs.existsSync(functionFile) ? functionFile : functionFileCjs;
      
      if (!fs.existsSync(actualFile)) {
        this.log(`Cannot backup function ${functionName}: file not found`, "WARN");
        return false;
      }

      const backupFile = path.join(this.config.functions.backupDir, `${functionName}-backup.js`);
      const functionContent = fs.readFileSync(actualFile, 'utf8');
      
      // Add backup header
      const backupContent = `// Backup of ${functionName} created at ${new Date().toISOString()}\n// Original file: ${actualFile}\n\n${functionContent}`;
      
      fs.writeFileSync(backupFile, backupContent);
      this.log(`Function ${functionName} backed up to ${backupFile}`);
      
      return true;
    } catch (error) {
      this.log(`Failed to backup function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreFunctionFromBackup(functionName) {
    try {
      const backupFile = path.join(this.config.functions.backupDir, `${functionName}-backup.js`);
      
      if (!fs.existsSync(backupFile)) {
        this.log(`Backup file for ${functionName} not found`, "WARN");
        return false;
      }

      const functionFile = path.join(this.config.functions.functionsDir, `${functionName}.js`);
      const backupContent = fs.readFileSync(backupFile, 'utf8');
      
      // Remove backup header and restore original content
      const originalContent = backupContent.replace(/^\/\/ Backup of .+\n\/\/ Original file: .+\n\n/, '');
      
      fs.writeFileSync(functionFile, originalContent);
      this.log(`Function ${functionName} restored from backup`);
      
      return true;
    } catch (error) {
      this.log(`Failed to restore function ${functionName} from backup: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating functions manifest...");
      
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(manifestScript)) {
        const result = await this.runCommand("node", [manifestScript]);
        if (result.status === 0) {
          this.log("Functions manifest regenerated successfully");
          return true;
        } else {
          this.log("Failed to regenerate functions manifest", "ERROR");
          return false;
        }
      } else {
        this.log("Functions manifest generation script not found", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerNetlifyBuild() {
    try {
      this.log("Triggering Netlify build...");
      
      // Try to trigger build via Netlify CLI if available
      try {
        const result = await this.runCommand("netlify", ["build"]);
        if (result.status === 0) {
          this.log("Netlify build completed successfully");
          return true;
        }
      } catch (error) {
        this.log("Netlify CLI not available, using alternative build method", "WARN");
      }
      
      // Alternative: run npm build script
      if (fs.existsSync("package.json")) {
        const result = await this.runCommand("npm", ["run", "build"]);
        if (result.status === 0) {
          this.log("Build completed via npm script");
          return true;
        }
      }
      
      this.log("Failed to trigger build", "ERROR");
      return false;
    } catch (error) {
      this.log(`Error triggering build: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performFunctionRecovery(functionName) {
    const failures = this.failureCounts.get(functionName) || 0;
    
    if (failures >= this.config.functions.maxFailureThreshold) {
      this.log(`Max failure threshold reached for ${functionName}, attempting recovery`, "WARN");
      
      // Try to restore from backup first
      let recovered = await this.restoreFunctionFromBackup(functionName);
      
      if (!recovered) {
        // If no backup, try to regenerate the function
        this.log(`No backup available for ${functionName}, attempting regeneration`, "WARN");
        recovered = await this.regenerateFunctionsManifest();
      }
      
      if (recovered) {
        this.failureCounts.set(functionName, 0);
        this.log(`Function ${functionName} recovered successfully`);
        return true;
      } else {
        this.log(`Function ${functionName} recovery failed`, "ERROR");
        return false;
      }
    }
    
    return false;
  }

  async checkAllFunctions() {
    this.log("Checking all Netlify functions...");
    
    const manifest = await this.loadFunctionsManifest();
    if (!manifest) {
      this.log("Cannot check functions: manifest not available", "ERROR");
      return false;
    }

    let allHealthy = true;
    
    for (const functionName of manifest.functions) {
      const functionHealth = await this.checkFunctionHealth(functionName);
      
      if (!functionHealth.healthy) {
        allHealthy = false;
        this.log(`Function ${functionName} is unhealthy (${functionHealth.status})`, "WARN");
        
        // Increment failure count
        const currentFailures = this.failureCounts.get(functionName) || 0;
        this.failureCounts.set(functionName, currentFailures + 1);
        
        // Attempt recovery if enabled
        if (this.config.monitoring.autoRecovery) {
          await this.performFunctionRecovery(functionName);
        }
      } else {
        // Reset failure count for healthy functions
        this.failureCounts.set(functionName, 0);
        this.log(`Function ${functionName} is healthy`);
      }
    }
    
    if (allHealthy) {
      this.log("All Netlify functions are healthy");
    } else {
      this.log("Some Netlify functions need attention", "WARN");
    }
    
    return allHealthy;
  }

  async createBackupFunctions() {
    if (!this.config.monitoring.backupFunctions) {
      return;
    }
    
    this.log("Creating backup functions...");
    
    const manifest = await this.loadFunctionsManifest();
    if (!manifest) {
      return;
    }
    
    for (const functionName of manifest.functions) {
      await this.backupFunction(functionName);
    }
    
    this.log("Backup functions creation completed");
  }

  async performFullRecovery() {
    this.log("Performing full Netlify functions recovery...");
    
    try {
      // Regenerate functions manifest
      await this.regenerateFunctionsManifest();
      
      // Trigger build if enabled
      if (this.config.build.autoBuild) {
        await this.triggerNetlifyBuild();
      }
      
      // Reset failure counts
      this.failureCounts.clear();
      
      this.log("Full Netlify functions recovery completed");
      return true;
    } catch (error) {
      this.log(`Full recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  initializeMonitoring() {
    this.log("Initializing Netlify functions redundancy monitoring...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("Received SIGINT, shutting down gracefully...");
      this.shutdown();
    });
    
    process.on('SIGTERM', () => {
      this.log("Received SIGTERM, shutting down gracefully...");
      this.shutdown();
    });
    
    // Start periodic health checks
    setInterval(() => {
      this.checkAllFunctions();
    }, this.config.functions.healthCheckInterval);
    
    // Start periodic function validation
    setInterval(() => {
      this.validateAllFunctions();
    }, this.config.monitoring.functionValidationInterval);
    
    // Initial setup
    setTimeout(async () => {
      await this.createBackupFunctions();
      await this.checkAllFunctions();
    }, 5000);
  }

  async validateAllFunctions() {
    this.log("Validating all functions...");
    
    const manifest = await this.loadFunctionsManifest();
    if (!manifest) {
      return false;
    }
    
    let allValid = true;
    
    for (const functionName of manifest.functions) {
      const validation = await this.validateFunction(functionName);
      if (!validation.valid) {
        allValid = false;
      }
    }
    
    if (allValid) {
      this.log("All functions validation passed");
    } else {
      this.log("Some functions have validation issues", "WARN");
    }
    
    return allValid;
  }

  async shutdown() {
    this.log("Shutting down Netlify functions redundancy system...");
    
    // Save final status
    const statusFile = path.join(this.config.logging.logDir, "netlify-functions-redundancy-status.json");
    const statusData = {
      functionStatus: Object.fromEntries(this.functionStatus),
      failureCounts: Object.fromEntries(this.failureCounts),
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
    
    this.log("Netlify functions redundancy system shutdown complete");
    process.exit(0);
  }

  getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      functionStatus: Object.fromEntries(this.functionStatus),
      failureCounts: Object.fromEntries(this.failureCounts),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  async runRecovery() {
    this.log("Running Netlify functions recovery...");
    return await this.performFullRecovery();
  }
}

// Start the system if this file is run directly
if (require.main === module) {
  const system = new ComprehensiveNetlifyFunctionsRedundancy();
  
  // Keep the process alive
  process.stdin.resume();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    system.shutdown();
  });
}

module.exports = ComprehensiveNetlifyFunctionsRedundancy;