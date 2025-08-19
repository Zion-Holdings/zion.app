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
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.functionStatus = new Map();
    this.lastExecutionTimes = new Map();
    this.failureCounts = new Map();
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
      localExecution: true,
      functions: {
        autoRegenerate: true,
        healthCheck: true,
        deploymentCheck: true,
        localExecution: true
      },
      monitoring: {
        checkManifest: true,
        validateFunctions: true,
        checkDependencies: true,
        autoFix: true,
        resourceMonitoring: true
      },
      localExecutionConfig: {
        nodeVersion: "20",
        timeout: 300000,
        maxRetries: 2,
        environment: "development"
      }
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
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("Functions manifest not found, attempting to regenerate", "WARN");
        await this.regenerateFunctionsManifest();
        return [];
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      return manifest.functions || [];
    } catch (error) {
      this.log(`Error loading functions manifest: ${error.message}`, "ERROR");
      return [];
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating Netlify functions manifest", "INFO");
      
      const result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      if (result.status === 0) {
        this.log("Successfully regenerated functions manifest", "INFO");
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

  async validateFunction(functionName) {
    try {
      const functionPath = path.join(this.workspace, "netlify/functions", functionName);
      
      if (!fs.existsSync(functionPath)) {
        return { valid: false, reason: "Function directory not found" };
      }

      // Check for function files
      const files = fs.readdirSync(functionPath);
      const hasIndex = files.some(file => file.includes("index") || file.includes("main"));
      const hasPackageJson = files.includes("package.json");
      
      if (!hasIndex) {
        return { valid: false, reason: "No main function file found" };
      }

      // Check package.json if it exists
      if (hasPackageJson) {
        const packagePath = path.join(functionPath, "package.json");
        try {
          const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
          if (!packageJson.main && !packageJson.exports) {
            this.log(`⚠️  Function ${functionName} package.json missing main entry`, "WARN");
          }
        } catch (error) {
          this.log(`⚠️  Invalid package.json in ${functionName}: ${error.message}`, "WARN");
        }
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, reason: `Validation error: ${error.message}` };
    }
  }

  async checkFunctionDependencies(functionName) {
    try {
      const functionPath = path.join(this.workspace, "netlify/functions", functionName);
      const packagePath = path.join(functionPath, "package.json");
      
      if (!fs.existsSync(packagePath)) {
        return { dependencies: [], count: 0, hasDependencies: false };
      }

      const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
      const dependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };

      const dependencyList = Object.keys(dependencies);
      return {
        dependencies: dependencyList,
        count: dependencyList.length,
        hasDependencies: true
      };
    } catch (error) {
      this.log(`Error checking dependencies for ${functionName}: ${error.message}`, "ERROR");
      return { dependencies: [], count: 0, hasDependencies: false };
    }
  }

  async executeFunctionLocally(functionName) {
    if (!this.config.localExecution) {
      this.log(`Local execution disabled for ${functionName}`, "INFO");
      return false;
    }

    try {
      this.log(`Executing function ${functionName} locally`, "INFO");
      
      const functionPath = path.join(this.workspace, "netlify/functions", functionName);
      if (!fs.existsSync(functionPath)) {
        this.log(`Function directory ${functionPath} not found`, "ERROR");
        return false;
      }

      // Find the main function file
      const files = fs.readdirSync(functionPath);
      const mainFile = files.find(file => 
        file.includes("index") || file.includes("main") || file.endsWith(".js")
      );

      if (!mainFile) {
        this.log(`No main function file found in ${functionName}`, "ERROR");
        return false;
      }

      const mainFilePath = path.join(functionPath, mainFile);
      
      // Check if it's a CommonJS or ES module
      const content = fs.readFileSync(mainFilePath, "utf8");
      const isESModule = content.includes("export") || content.includes("import");
      
      // Execute the function
      const result = await this.runCommand("node", [mainFilePath], {
        timeout: this.config.localExecutionConfig.timeout,
        env: {
          ...process.env,
          NODE_ENV: this.config.localExecutionConfig.environment
        }
      });

      if (result.status === 0) {
        this.log(`Successfully executed ${functionName} locally`, "INFO");
        this.lastExecutionTimes.set(functionName, new Date().toISOString());
        return true;
      } else {
        this.log(`Failed to execute ${functionName} locally: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error executing function ${functionName} locally: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      const validation = await this.validateFunction(functionName);
      if (!validation.valid) {
        return { healthy: false, reason: validation.reason };
      }

      // Check dependencies
      const dependencies = await this.checkFunctionDependencies(functionName);
      if (dependencies.hasDependencies && dependencies.count === 0) {
        this.log(`⚠️  Function ${functionName} has package.json but no dependencies`, "WARN");
      }

      // Check if function should be executed based on schedule or triggers
      if (this.shouldFunctionExecute(functionName)) {
        this.log(`Function ${functionName} should execute, running locally`, "INFO");
        await this.executeFunctionLocally(functionName);
      }

      return { healthy: true };
    } catch (error) {
      return { healthy: false, reason: `Health check error: ${error.message}` };
    }
  }

  shouldFunctionExecute(functionName) {
    try {
      const lastExecution = this.lastExecutionTimes.get(functionName);
      if (!lastExecution) return true;

      const lastExecutionTime = new Date(lastExecution);
      const now = new Date();
      const timeSinceLastExecution = now - lastExecutionTime;

      // Check if function should run based on its type
      if (functionName.includes("scheduler") || functionName.includes("cron")) {
        // Scheduler functions should run every hour
        return timeSinceLastExecution >= 60 * 60 * 1000;
      } else if (functionName.includes("daily")) {
        // Daily functions should run every 24 hours
        return timeSinceLastExecution >= 24 * 60 * 60 * 1000;
      } else if (functionName.includes("weekly")) {
        // Weekly functions should run every 7 days
        return timeSinceLastExecution >= 7 * 24 * 60 * 60 * 1000;
      }

      // Default: run every 6 hours for other functions
      return timeSinceLastExecution >= 6 * 60 * 60 * 1000;
    } catch (error) {
      this.log(`Error determining execution schedule for ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllFunctions() {
    this.log("Starting comprehensive Netlify functions health check...", "INFO");
    
    const netlifyDir = await this.checkNetlifyDirectory();
    if (!netlifyDir.exists || !netlifyDir.functions) {
      this.log("Netlify functions directory not found, cannot proceed", "ERROR");
      return 0;
    }

    const functions = await this.loadFunctionsManifest();
    if (functions.length === 0) {
      this.log("No functions found in manifest", "WARN");
      return 0;
    }

    let issuesFound = 0;
    this.log(`Found ${functions.length} functions to check`, "INFO");

    for (const functionName of functions) {
      try {
        const health = await this.checkFunctionHealth(functionName);
        
        if (!health.healthy) {
          this.log(`Function ${functionName} unhealthy: ${health.reason}`, "WARN");
          issuesFound++;
          
          // Attempt auto-fix if enabled
          if (this.config.monitoring.autoFix) {
            await this.attemptFunctionFix(functionName);
          }
        } else {
          this.log(`Function ${functionName} is healthy`, "INFO");
          this.failureCounts.set(functionName, 0);
        }
      } catch (error) {
        this.log(`Error checking function ${functionName}: ${error.message}`, "ERROR");
        issuesFound++;
      }
    }

    if (issuesFound === 0) {
      this.log("All Netlify functions are healthy", "INFO");
    } else {
      this.log(`Found ${issuesFound} function issues`, "WARN");
    }

    return issuesFound;
  }

  async attemptFunctionFix(functionName) {
    try {
      this.log(`Attempting to fix function ${functionName}`, "INFO");
      
      // Try local execution as a fix
      if (this.config.localExecution) {
        const success = await this.executeFunctionLocally(functionName);
        if (success) {
          this.log(`Successfully fixed function ${functionName} via local execution`, "INFO");
          return true;
        }
      }

      // Check if function needs dependency installation
      const dependencies = await this.checkFunctionDependencies(functionName);
      if (dependencies.hasDependencies && dependencies.count > 0) {
        const functionPath = path.join(this.workspace, "netlify/functions", functionName);
        const packagePath = path.join(functionPath, "package.json");
        
        if (fs.existsSync(packagePath)) {
          this.log(`Installing dependencies for ${functionName}`, "INFO");
          const result = await this.runCommand("npm", ["install"], {
            cwd: functionPath,
            timeout: 60000
          });
          
          if (result.status === 0) {
            this.log(`Successfully installed dependencies for ${functionName}`, "INFO");
            return true;
          }
        }
      }

      return false;
    } catch (error) {
      this.log(`Error attempting to fix function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced Netlify functions redundancy monitoring", "INFO");

    const monitor = async () => {
      if (!this.monitoring) return;
      
      try {
        await this.checkAllFunctions();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }

      this.checkInterval = setTimeout(monitor, this.config.checkInterval);
    };

    await monitor();
  }

  async stopMonitoring() {
    this.monitoring = false;
    if (this.checkInterval) {
      clearTimeout(this.checkInterval);
      this.checkInterval = null;
    }
    this.log("Stopped enhanced Netlify functions redundancy monitoring", "INFO");
  }

  async triggerFunction(functionName) {
    try {
      this.log(`Manually triggering function ${functionName}`, "INFO");
      
      if (this.config.localExecution) {
        return await this.executeFunctionLocally(functionName);
      } else {
        this.log("Local execution disabled, cannot trigger function", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`Error triggering function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deployFunctions() {
    if (!this.config.autoDeploy) {
      this.log("Auto-deploy disabled", "INFO");
      return false;
    }

    try {
      this.log("Deploying Netlify functions", "INFO");
      
      const result = await this.runCommand("netlify", ["deploy", "--prod"], {
        timeout: this.config.deployTimeout
      });

      if (result.status === 0) {
        this.log("Successfully deployed Netlify functions", "INFO");
        return true;
      } else {
        this.log(`Failed to deploy functions: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error deploying functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateHealthReport() {
    const netlifyDir = await this.checkNetlifyDirectory();
    const functions = await this.loadFunctionsManifest();
    const report = {
      timestamp: new Date().toISOString(),
      netlifyDirectory: netlifyDir.exists,
      functionsDirectory: netlifyDir.functions,
      totalFunctions: functions.length,
      functionHealth: {},
      issues: [],
      recommendations: []
    };

    for (const functionName of functions) {
      const health = await this.checkFunctionHealth(functionName);
      const dependencies = await this.checkFunctionDependencies(functionName);
      
      report.functionHealth[functionName] = {
        healthy: health.healthy,
        reason: health.reason || null,
        dependencies: dependencies.dependencies,
        lastExecution: this.lastExecutionTimes.get(functionName) || null,
        failureCount: this.failureCounts.get(functionName) || 0
      };

      if (!health.healthy) {
        report.issues.push(`${functionName}: ${health.reason}`);
      }
    }

    if (report.issues.length > 0) {
      report.recommendations.push("Enable auto-fix for automatic function recovery");
      report.recommendations.push("Check function dependencies and package.json files");
      report.recommendations.push("Verify function syntax and exports");
      report.recommendations.push("Consider regenerating functions manifest");
    }

    return report;
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
    case "trigger":
      const functionName = process.argv[3];
      if (!functionName) {
        console.log("Usage: node enhanced-netlify-functions-redundancy.cjs trigger <function-name>");
        process.exit(1);
      }
      redundancy.triggerFunction(functionName);
      break;
    case "deploy":
      redundancy.deployFunctions();
      break;
    case "manifest":
      redundancy.regenerateFunctionsManifest();
      break;
    case "report":
      redundancy.generateHealthReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log("Usage: node enhanced-netlify-functions-redundancy.cjs [start|stop|check|trigger <function>|deploy|manifest|report]");
      process.exit(1);
  }
}

module.exports = { EnhancedNetlifyFunctionsRedundancy };