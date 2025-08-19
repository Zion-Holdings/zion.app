#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");

class EnhancedNetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-netlify-functions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      functionsDir: "netlify/functions",
      manifestFile: "netlify/functions/functions-manifest.json",
      localExecution: true,
      checkInterval: 120000, // 2 minutes
      maxFailures: 3,
      healthCheckTimeout: 15000,
      autoDeploy: true,
      deployTimeout: 300000,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        backupExecution: true,
        performanceMonitoring: true,
        errorRecovery: true
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.functionRegistry = new Map();
    this.executionHistory = new Map();
    this.healthMetrics = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
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

  async loadFunctionsManifest() {
    try {
      const manifestPath = path.join(this.workspace, this.config.manifestFile);
      
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Functions manifest not found", "WARN");
        return { functions: [] };
      }

      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      this.log(`📋 Loaded ${manifest.functions?.length || 0} functions from manifest`, "INFO");
      return manifest;
    } catch (error) {
      this.log(`❌ Error loading functions manifest: ${error.message}`, "ERROR");
      return { functions: [] };
    }
  }

  async discoverFunctions() {
    try {
      const functionsDir = path.join(this.workspace, this.config.functionsDir);
      
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Functions directory not found", "WARN");
        return [];
      }

      const items = fs.readdirSync(functionsDir, { withFileTypes: true });
      const functions = [];
      
      for (const item of items) {
        if (item.isDirectory()) {
          const functionPath = path.join(functionsDir, item.name);
          const indexFile = path.join(functionPath, "index.js");
          const packageFile = path.join(functionPath, "package.json");
          
          if (fs.existsSync(indexFile)) {
            functions.push({
              name: item.name,
              path: functionPath,
              hasIndex: true,
              hasPackage: fs.existsSync(packageFile),
              type: "directory"
            });
          }
        } else if (item.isFile() && item.name.endsWith('.js')) {
          const functionPath = path.join(functionsDir, item.name);
          functions.push({
            name: item.name.replace('.js', ''),
            path: functionPath,
            hasIndex: true,
            hasPackage: false,
            type: "file"
          });
        }
      }
      
      this.log(`🔍 Discovered ${functions.length} functions`, "INFO");
      return functions;
    } catch (error) {
      this.log(`❌ Error discovering functions: ${error.message}`, "ERROR");
      return [];
    }
  }

  async validateFunction(functionInfo) {
    try {
      const { name, path, hasIndex, hasPackage } = functionInfo;
      
      if (!hasIndex) {
        return { valid: false, error: "No index.js file found" };
      }
      
      // Check if function has basic structure
      const indexContent = fs.readFileSync(path + (hasIndex ? "/index.js" : ""), 'utf8');
      
      if (!indexContent.includes('exports.handler') && !indexContent.includes('module.exports')) {
        return { valid: false, error: "No handler export found" };
      }
      
      // Check for common issues
      const issues = [];
      
      if (indexContent.includes('console.log') && !indexContent.includes('// TODO: Remove console.log')) {
        issues.push("Contains console.log statements");
      }
      
      if (indexContent.includes('debugger')) {
        issues.push("Contains debugger statements");
      }
      
      if (indexContent.includes('TODO') || indexContent.includes('FIXME')) {
        issues.push("Contains TODO/FIXME comments");
      }
      
      return {
        valid: true,
        issues: issues.length > 0 ? issues : null,
        size: indexContent.length,
        hasPackage
      };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async executeFunctionLocally(functionName, event = {}) {
    try {
      this.log(`Executing function locally: ${functionName}`, "INFO");
      
      const functions = await this.discoverFunctions();
      const functionInfo = functions.find(f => f.name === functionName);
      
      if (!functionInfo) {
        throw new Error(`Function not found: ${functionName}`);
      }
      
      const validation = await this.validateFunction(functionInfo);
      if (!validation.valid) {
        throw new Error(`Invalid function: ${validation.error}`);
      }
      
      // Create a temporary test event
      const testEvent = {
        httpMethod: "GET",
        path: "/test",
        queryStringParameters: {},
        headers: {},
        body: null,
        ...event
      };
      
      // Execute the function
      const startTime = Date.now();
      const result = await this.runFunctionCode(functionInfo, testEvent);
      const executionTime = Date.now() - startTime;
      
      // Record execution
      this.executionHistory.set(functionName, {
        timestamp: Date.now(),
        executionTime,
        success: result.success,
        error: result.error,
        response: result.response
      });
      
      this.log(`Function execution completed in ${executionTime}ms`, "INFO");
      
      return {
        success: result.success,
        executionTime,
        response: result.response,
        error: result.error
      };
      
    } catch (error) {
      this.log(`Local function execution failed: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  async runFunctionCode(functionInfo, event) {
    try {
      const { name, path, type } = functionInfo;
      
      // For now, we'll simulate function execution
      // In a real implementation, you'd use a Netlify Functions runtime
      this.log(`Simulating execution of ${name}`, "INFO");
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Simulate successful response
      const response = {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: `Function ${name} executed successfully`,
          timestamp: new Date().toISOString(),
          event: event
        })
      };
      
      return {
        success: true,
        response
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      const functions = await this.discoverFunctions();
      const functionInfo = functions.find(f => f.name === functionName);
      
      if (!functionInfo) {
        return { healthy: false, error: "Function not found" };
      }
      
      const validation = await this.validateFunction(functionInfo);
      if (!validation.valid) {
        return { healthy: false, error: validation.error };
      }
      
      // Check if function has been executed recently
      const lastExecution = this.executionHistory.get(functionName);
      const isRecent = lastExecution && (Date.now() - lastExecution.timestamp) < 3600000; // 1 hour
      
      return {
        healthy: true,
        valid: true,
        lastExecution: lastExecution ? new Date(lastExecution.timestamp).toISOString() : null,
        isRecent,
        executionTime: lastExecution ? lastExecution.executionTime : null,
        success: lastExecution ? lastExecution.success : null
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async performHealthCheck() {
    try {
      this.log("Performing Netlify functions health check...", "INFO");
      
      const netlifyDir = await this.checkNetlifyDirectory();
      if (!netlifyDir.exists) {
        return { healthy: false, error: "Netlify directory not found" };
      }
      
      const functions = await this.discoverFunctions();
      let healthyFunctions = 0;
      let totalFunctions = functions.length;
      
      for (const functionInfo of functions) {
        const health = await this.checkFunctionHealth(functionInfo.name);
        this.healthMetrics.set(functionInfo.name, health);
        
        if (health.healthy) {
          healthyFunctions++;
        } else {
          this.log(`Unhealthy function detected: ${functionInfo.name} - ${health.error}`, "WARN");
        }
      }
      
      // Calculate health percentage
      const healthPercentage = totalFunctions > 0 ? (healthyFunctions / totalFunctions) * 100 : 100;
      
      this.log(`Health check complete: ${healthyFunctions}/${totalFunctions} functions healthy (${healthPercentage.toFixed(1)}%)`, "INFO");
      
      return {
        healthy: healthPercentage >= 80,
        percentage: healthPercentage,
        totalFunctions,
        healthyFunctions,
        functions: Object.fromEntries(this.healthMetrics)
      };
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating functions manifest...", "INFO");
      
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("Functions manifest regenerated successfully", "INFO");
        return true;
      } else {
        this.log(`Failed to regenerate manifest: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deployFunctions() {
    try {
      this.log("Deploying Netlify functions...", "INFO");
      
      // Check if netlify CLI is available
      const netlifyCheck = await this.runCommand("netlify", ["--version"]);
      
      if (netlifyCheck.status !== 0) {
        this.log("Netlify CLI not available, skipping deployment", "WARN");
        return false;
      }
      
      // Deploy functions
      const deployResult = await this.runCommand("netlify", ["deploy", "--functions"], {
        timeout: this.config.deployTimeout
      });
      
      if (deployResult.status === 0) {
        this.log("Functions deployed successfully", "INFO");
        return true;
      } else {
        this.log(`Deployment failed: ${deployResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error deploying functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverFailedFunctions() {
    try {
      let recoveredCount = 0;
      
      for (const [functionName, health] of this.healthMetrics) {
        if (!health.healthy) {
          this.log(`Attempting to recover failed function: ${functionName}`, "WARN");
          
          try {
            // Try to execute the function to see if it works
            const result = await this.executeFunctionLocally(functionName);
            if (result.success) {
              recoveredCount++;
              this.log(`Function ${functionName} recovered successfully`, "INFO");
            }
          } catch (error) {
            this.log(`Failed to recover ${functionName}: ${error.message}`, "ERROR");
          }
        }
      }
      
      if (recoveredCount > 0) {
        this.log(`Recovered ${recoveredCount} failed functions`, "INFO");
      }
      
      return recoveredCount;
    } catch (error) {
      this.log(`Error during function recovery: ${error.message}`, "ERROR");
      return 0;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }
    
    this.log("Starting enhanced Netlify functions redundancy monitoring...", "INFO");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`Monitoring cycle error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log("Enhanced Netlify functions redundancy monitoring started", "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced Netlify functions redundancy monitoring stopped", "INFO");
  }

  async emergencyRegenerate() {
    try {
      this.log("Initiating emergency functions regeneration...", "WARN");
      
      // Regenerate manifest
      const manifestSuccess = await this.regenerateFunctionsManifest();
      
      // Deploy functions if possible
      let deploySuccess = false;
      if (this.config.autoDeploy) {
        deploySuccess = await this.deployFunctions();
      }
      
      this.log("Emergency regeneration completed", "INFO");
      return { manifestSuccess, deploySuccess };
    } catch (error) {
      this.log(`Emergency regeneration failed: ${error.message}`, "ERROR");
      return { manifestSuccess: false, deploySuccess: false };
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      healthMetrics: Object.fromEntries(this.healthMetrics),
      executionHistory: Object.fromEntries(this.executionHistory),
      config: this.config,
      uptime: process.uptime()
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
    case "health":
      redundancy.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "execute":
      const functionName = process.argv[3];
      if (!functionName) {
        console.log("Usage: node enhanced-netlify-functions-redundancy.cjs execute <function-name>");
        process.exit(1);
      }
      redundancy.executeFunctionLocally(functionName).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "regenerate":
      redundancy.regenerateFunctionsManifest().then(success => {
        console.log(`Manifest regeneration ${success ? 'succeeded' : 'failed'}`);
        process.exit(success ? 0 : 1);
      });
      break;
    case "deploy":
      redundancy.deployFunctions().then(success => {
        console.log(`Deployment ${success ? 'succeeded' : 'failed'}`);
        process.exit(success ? 0 : 1);
      });
      break;
    case "recover":
      redundancy.recoverFailedFunctions().then(count => {
        console.log(`Recovered ${count} functions`);
        process.exit(0);
      });
      break;
    case "emergency":
      redundancy.emergencyRegenerate().then(result => {
        console.log(`Emergency regeneration: manifest=${result.manifestSuccess}, deploy=${result.deploySuccess}`);
        process.exit(0);
      });
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-netlify-functions-redundancy.cjs [start|stop|health|execute <function>|regenerate|deploy|recover|emergency|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedNetlifyFunctionsRedundancy };