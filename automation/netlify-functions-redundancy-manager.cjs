#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.config = {
      // Netlify functions configuration
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functionsDir: "netlify/functions",
        criticalFunctions: [
          "netlify-auto-healer-runner",
          "continuous-orchestrator",
          "automation-matrix",
          "maintenance-scheduler",
          "netlify-auto-healer-runner",
          "continuous-front-runner",
          "front-index-orchestrator",
          "homepage-updater",
          "marketing-scheduler",
          "link-and-health-scheduler"
        ],
        healthCheckInterval: 120000, // 2 minutes
        maxFailureThreshold: 2
      },
      
      // Backup npm scripts for Netlify operations
      backupScripts: {
        trigger: [
          "netlify:trigger",
          "netlify:manifest"
        ],
        build: [
          "build",
          "build:smart",
          "build:orchestrator"
        ],
        deploy: [
          "export",
          "start"
        ]
      },
      
      // Function execution scripts
      functionScripts: {
        "netlify-auto-healer-runner": "automation/enhanced-netlify-healer.cjs",
        "continuous-orchestrator": "automation/continuous-orchestrator.cjs",
        "automation-matrix": "automation/automation-matrix.cjs",
        "maintenance-scheduler": "automation/maintenance-scheduler.cjs",
        "continuous-front-runner": "automation/continuous-front-runner.cjs",
        "front-index-orchestrator": "automation/front-index-orchestrator.cjs",
        "homepage-updater": "automation/homepage-updater.cjs",
        "marketing-scheduler": "automation/marketing-scheduler.cjs",
        "link-and-health-scheduler": "automation/link-and-health-scheduler.cjs"
      },
      
      // Health check configuration
      healthCheck: {
        interval: 120000, // 2 minutes
        maxFailureThreshold: 2,
        functionValidation: true,
        manifestValidation: true
      },
      
      // Logging configuration
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.functionStatus = new Map();
    this.failureCounts = new Map();
    this.lastRunTimes = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `netlify-functions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  validateManifestFile() {
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        return { valid: false, error: "Manifest file not found" };
      }
      
      const content = fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8');
      
      try {
        const manifest = JSON.parse(content);
        
        if (!manifest.functions || !Array.isArray(manifest.functions)) {
          return { valid: false, error: "Invalid functions array in manifest" };
        }
        
        if (!manifest.generatedAt) {
          return { valid: false, error: "Missing generation timestamp" };
        }
        
        return { valid: true, manifest };
      } catch (jsonError) {
        return { valid: false, error: `JSON parsing error: ${jsonError.message}` };
      }
    } catch (error) {
      return { valid: false, error: `File read error: ${error.message}` };
    }
  }

  async checkFunctionHealth(functionName) {
    this.log(`Checking function health: ${functionName}`);
    
    try {
      // Check if function exists in manifest
      const manifestValidation = this.validateManifestFile();
      if (!manifestValidation.valid) {
        this.log(`Manifest validation failed: ${manifestValidation.error}`, "ERROR");
        return false;
      }
      
      const manifest = manifestValidation.manifest;
      const functionExists = manifest.functions.includes(functionName);
      
      if (!functionExists) {
        this.log(`Function ${functionName} not found in manifest`, "WARN");
        return false;
      }
      
      // Check if function file exists
      const functionFile = path.join(this.config.netlifyFunctions.functionsDir, `${functionName}.js`);
      if (!fs.existsSync(functionFile)) {
        this.log(`Function file not found: ${functionFile}`, "ERROR");
        return false;
      }
      
      // Check if function has a backup script
      const backupScript = this.config.functionScripts[functionName];
      if (backupScript && fs.existsSync(backupScript)) {
        this.log(`Function ${functionName} has backup script: ${backupScript}`);
      }
      
      this.log(`Function ${functionName} is healthy`);
      return true;
    } catch (error) {
      this.log(`Error checking function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllFunctions() {
    this.log("Checking health of all Netlify functions...");
    
    const results = {};
    let allHealthy = true;
    
    for (const functionName of this.config.netlifyFunctions.criticalFunctions) {
      const isHealthy = await this.checkFunctionHealth(functionName);
      results[functionName] = isHealthy;
      
      if (!isHealthy) {
        allHealthy = false;
        this.failureCounts.set(functionName, (this.failureCounts.get(functionName) || 0) + 1);
      } else {
        this.failureCounts.set(functionName, 0);
      }
      
      this.functionStatus.set(functionName, {
        healthy: isHealthy,
        lastCheck: new Date().toISOString(),
        failureCount: this.failureCounts.get(functionName) || 0
      });
    }
    
    if (allHealthy) {
      this.log("All Netlify functions are healthy");
    } else {
      this.log("Some Netlify functions are unhealthy, check logs for details", "WARN");
    }
    
    return results;
  }

  async executeFunction(functionName) {
    this.log(`Executing function: ${functionName}`);
    
    try {
      // Try to execute the function directly if it exists
      const functionFile = path.join(this.config.netlifyFunctions.functionsDir, `${functionName}.js`);
      if (fs.existsSync(functionFile)) {
        const result = await this.runCommand("node", [functionFile]);
        if (result.status === 0) {
          this.log(`Successfully executed function ${functionName}`);
          this.lastRunTimes.set(functionName, new Date().toISOString());
          return true;
        }
      }
      
      // Try backup script
      const backupScript = this.config.functionScripts[functionName];
      if (backupScript && fs.existsSync(backupScript)) {
        const result = await this.runCommand("node", [backupScript]);
        if (result.status === 0) {
          this.log(`Successfully executed backup script for ${functionName}: ${backupScript}`);
          this.lastRunTimes.set(functionName, new Date().toISOString());
          return true;
        }
      }
      
      // Try npm scripts as backup
      for (const script of this.config.backupScripts.trigger) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          if (result.status === 0) {
            this.log(`Successfully executed backup script: ${script}`);
            return true;
          }
        } catch (error) {
          this.log(`Error running backup script ${script}: ${error.message}`, "WARN");
        }
      }
      
      this.log(`Failed to execute function ${functionName} with all methods`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error executing function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async executeAllFunctions() {
    this.log("Executing all Netlify functions...");
    
    const results = {};
    
    for (const functionName of this.config.netlifyFunctions.criticalFunctions) {
      const success = await this.executeFunction(functionName);
      results[functionName] = success;
      
      if (success) {
        this.log(`Successfully executed function: ${functionName}`);
      } else {
        this.log(`Failed to execute function: ${functionName}`, "ERROR");
      }
      
      // Add delay between executions
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    return results;
  }

  async testBackupScripts() {
    this.log("Testing backup scripts...");
    
    const results = {};
    
    for (const category in this.config.backupScripts) {
      results[category] = {};
      
      for (const script of this.config.backupScripts[category]) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          results[category][script] = {
            success: result.status === 0,
            status: result.status,
            output: result.stdout
          };
          
          if (result.status === 0) {
            this.log(`Backup script ${script} is working`);
          } else {
            this.log(`Backup script ${script} failed`, "WARN");
          }
        } catch (error) {
          results[category][script] = {
            success: false,
            error: error.message
          };
          this.log(`Error testing backup script ${script}: ${error.message}`, "ERROR");
        }
      }
    }
    
    return results;
  }

  async regenerateManifest() {
    this.log("Regenerating Netlify functions manifest...");
    
    try {
      // Try npm script first
      let result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      if (result.status === 0) {
        this.log("Successfully regenerated manifest via npm script");
        return true;
      }
      
      // Try direct script execution
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(manifestScript)) {
        result = await this.runCommand("node", [manifestScript]);
        if (result.status === 0) {
          this.log("Successfully regenerated manifest via direct script");
          return true;
        }
      }
      
      // Try to manually create a basic manifest
      this.log("Attempting to create basic manifest manually", "WARN");
      
      const functionsDir = this.config.netlifyFunctions.functionsDir;
      if (fs.existsSync(functionsDir)) {
        const functions = fs.readdirSync(functionsDir)
          .filter(file => file.endsWith('.js'))
          .map(file => file.replace('.js', ''));
        
        const manifest = {
          generatedAt: new Date().toISOString(),
          functions: functions
        };
        
        const manifestContent = JSON.stringify(manifest, null, 2);
        fs.writeFileSync(this.config.netlifyFunctions.manifestFile, manifestContent);
        
        this.log("Successfully created basic manifest manually");
        return true;
      }
      
      this.log("Failed to regenerate manifest with all methods", "ERROR");
      return false;
    } catch (error) {
      this.log(`Error regenerating manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerNetlifyDeploy() {
    this.log("Triggering Netlify deployment...");
    
    try {
      // Try npm scripts first
      for (const script of this.config.backupScripts.trigger) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          if (result.status === 0) {
            this.log(`Successfully triggered deployment via script: ${script}`);
            return true;
          }
        } catch (error) {
          this.log(`Error running trigger script ${script}: ${error.message}`, "WARN");
        }
      }
      
      // Try build commands
      for (const script of this.config.backupScripts.build) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          if (result.status === 0) {
            this.log(`Successfully triggered build via script: ${script}`);
            return true;
          }
        } catch (error) {
          this.log(`Error running build script ${script}: ${error.message}`, "WARN");
        }
      }
      
      this.log("Failed to trigger Netlify deployment with all methods", "ERROR");
      return false;
    } catch (error) {
      this.log(`Error triggering Netlify deployment: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      functions: {},
      backupScripts: {},
      manifest: this.validateManifestFile(),
      summary: {
        totalFunctions: this.config.netlifyFunctions.criticalFunctions.length,
        healthyFunctions: 0,
        unhealthyFunctions: 0,
        lastRunTimes: Object.fromEntries(this.lastRunTimes)
      }
    };
    
    // Function status
    for (const [functionName, status] of this.functionStatus) {
      report.functions[functionName] = status;
      
      if (status.healthy) {
        report.summary.healthyFunctions++;
      } else {
        report.summary.unhealthyFunctions++;
      }
    }
    
    // Test backup scripts
    report.backupScripts = await this.testBackupScripts();
    
    const reportFile = path.join(this.config.logging.logDir, `netlify-functions-health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportFile}`);
    return report;
  }

  async startMonitoring() {
    this.log("Starting Netlify functions redundancy monitoring...");
    
    // Initial health check
    await this.checkAllFunctions();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.checkAllFunctions();
    }, this.config.healthCheck.interval);
    
    // Set up periodic function execution
    setInterval(async () => {
      await this.executeAllFunctions();
    }, 600000); // 10 minutes
    
    // Set up periodic manifest regeneration
    setInterval(async () => {
      await this.regenerateManifest();
    }, 1800000); // 30 minutes
    
    // Set up periodic report generation
    setInterval(async () => {
      await this.generateHealthReport();
    }, 600000); // 10 minutes
    
    this.log("Netlify functions redundancy monitoring started");
  }

  async start() {
    this.log("Starting Netlify Functions Redundancy Manager...");
    
    try {
      // Check all functions
      await this.checkAllFunctions();
      
      // Regenerate manifest if needed
      const manifestValidation = this.validateManifestFile();
      if (!manifestValidation.valid) {
        this.log("Manifest is invalid, attempting to regenerate", "WARN");
        await this.regenerateManifest();
      }
      
      // Test backup scripts
      await this.testBackupScripts();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.log("Netlify Functions Redundancy Manager started successfully");
      
      // Keep the process running
      setInterval(() => {
        this.log("Netlify Functions Redundancy Manager heartbeat");
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Error starting Netlify Functions Redundancy Manager: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start();
      break;
    case 'monitor':
      manager.startMonitoring();
      break;
    case 'health':
      manager.checkAllFunctions();
      break;
    case 'execute':
      manager.executeAllFunctions();
      break;
    case 'execute-function':
      const functionName = process.argv[3];
      if (functionName) {
        manager.executeFunction(functionName);
      } else {
        console.log("Please specify a function name to execute");
      }
      break;
    case 'regenerate-manifest':
      manager.regenerateManifest();
      break;
    case 'trigger-deploy':
      manager.triggerNetlifyDeploy();
      break;
    case 'test-backups':
      manager.testBackupScripts();
      break;
    case 'report':
      manager.generateHealthReport();
      break;
    default:
      console.log(`
Netlify Functions Redundancy Manager

Usage: node netlify-functions-redundancy-manager.cjs [command]

Commands:
  start               Start the manager and monitoring (default)
  monitor             Start monitoring only
  health              Check health of all functions
  execute             Execute all functions
  execute-function <name> Execute a specific function
  regenerate-manifest Regenerate functions manifest
  trigger-deploy      Trigger Netlify deployment
  test-backups        Test all backup scripts
  report              Generate health report
      `);
      process.exit(0);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;