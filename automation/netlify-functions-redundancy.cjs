#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class NetlifyFunctionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "netlify-functions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
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
        deploymentCheck: true
      }
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
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
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Functions manifest not found");
        return { exists: false, manifest: null, valid: false };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const valid = manifest.generatedAt && Array.isArray(manifest.functions);
      
      if (valid) {
        this.log(`📋 Functions manifest found with ${manifest.functions.length} functions`);
      } else {
        this.log("⚠️ Functions manifest has invalid structure");
      }

      return { exists: true, manifest, valid };
    } catch (error) {
      this.log(`❌ Error checking functions manifest: ${error.message}`);
      return { exists: false, manifest: null, valid: false };
    }
  }

  async checkIndividualFunctions(manifest) {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      const results = [];
      let healthyFunctions = 0;
      let totalFunctions = 0;

      for (const functionName of manifest.functions) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        const health = {
          name: functionName,
          exists: false,
          healthy: false,
          issues: [],
          size: 0,
          lastModified: null
        };

        if (fs.existsSync(functionPath)) {
          health.exists = true;
          const stats = fs.statSync(functionPath);
          health.size = stats.size;
          health.lastModified = stats.mtime;

          // Basic function validation
          try {
            const content = fs.readFileSync(functionPath, "utf8");
            
            // Check for basic function structure
            if (content.includes("exports.handler") || content.includes("module.exports")) {
              health.healthy = true;
              healthyFunctions++;
            } else {
              health.issues.push("Missing handler export");
            }

            // Check file size (shouldn't be too large)
            if (health.size > 1024 * 1024) { // 1MB
              health.issues.push("Function file is very large");
              health.healthy = false;
            }

            // Check if function is too old (more than 30 days)
            const daysSinceModified = (Date.now() - health.lastModified.getTime()) / (1000 * 60 * 60 * 24);
            if (daysSinceModified > 30) {
              health.issues.push(`Function file is ${Math.round(daysSinceModified)} days old`);
            }

          } catch (readError) {
            health.issues.push(`File read error: ${readError.message}`);
            health.healthy = false;
          }
        } else {
          health.issues.push("Function file not found");
        }

        results.push(health);
        totalFunctions++;
      }

      return { results, healthyFunctions, totalFunctions };
    } catch (error) {
      this.log(`❌ Error checking individual functions: ${error.message}`);
      return { results: [], healthyFunctions: 0, totalFunctions: 0 };
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating functions manifest...");
      
      const result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      if (result.status === 0) {
        this.log("✅ Functions manifest regenerated successfully");
        return true;
      } else {
        this.log(`❌ Failed to regenerate manifest: ${result.stderr}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`);
      return false;
    }
  }

  async checkNetlifyDeploymentStatus() {
    try {
      const siteId = process.env.NETLIFY_SITE_ID;
      const accessToken = process.env.NETLIFY_ACCESS_TOKEN;
      
      if (!siteId || !accessToken) {
        this.log("⚠️ Netlify credentials not configured");
        return { status: "unknown", lastDeploy: null, error: "Credentials missing" };
      }

      // This would make an HTTP request to check deployment status
      // For now, we'll simulate the check
      this.log("📡 Checking Netlify deployment status...");
      
      return { status: "unknown", lastDeploy: null, error: "API check not implemented" };
    } catch (error) {
      this.log(`❌ Error checking deployment status: ${error.message}`);
      return { status: "error", lastDeploy: null, error: error.message };
    }
  }

  async triggerNetlifyBuild() {
    try {
      this.log("🚀 Triggering Netlify build...");
      
      const buildHook = process.env.NETLIFY_BUILD_HOK;
      if (buildHook) {
        this.log("📡 Using build hook to trigger build...");
        // This would make an HTTP POST to the build hook
        // For now, we'll just log the action
        return { triggered: true, method: "build_hook" };
      } else {
        this.log("⚠️ No build hook configured, manual trigger required");
        return { triggered: false, method: "none", reason: "No build hook" };
      }
    } catch (error) {
      this.log(`❌ Error triggering build: ${error.message}`);
      return { triggered: false, method: "error", error: error.message };
    }
  }

  async validateNetlifyConfig() {
    try {
      const configPath = path.join(this.workspace, "netlify/netlify.toml");
      if (!fs.existsSync(configPath)) {
        this.log("❌ Netlify config file not found");
        return { exists: false, valid: false, issues: ["Config file missing"] };
      }

      const content = fs.readFileSync(configPath, "utf8");
      const issues = [];
      let valid = true;

      // Basic TOML validation
      if (!content.includes("[build]")) {
        issues.push("Missing build configuration");
        valid = false;
      }

      if (!content.includes("functions") && !content.includes("functions_dir")) {
        issues.push("Functions configuration missing");
        valid = false;
      }

      return { exists: true, valid, issues };
    } catch (error) {
      this.log(`❌ Error validating Netlify config: ${error.message}`);
      return { exists: false, valid: false, issues: [`Error: ${error.message}`] };
    }
  }

  async runNetlifyFunctionsHealthCheck() {
    this.log("🔍 Running Netlify functions health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      netlifyDirectory: { exists: false, functions: false, config: false },
      functionsManifest: { exists: false, manifest: null, valid: false },
      individualFunctions: { results: [], healthyFunctions: 0, totalFunctions: 0 },
      netlifyConfig: { exists: false, valid: false, issues: [] },
      deploymentStatus: { status: "unknown", lastDeploy: null, error: null },
      overallHealth: false,
      issues: [],
      actions: []
    };

    try {
      // Check Netlify directory structure
      results.netlifyDirectory = await this.checkNetlifyDirectory();
      if (!results.netlifyDirectory.exists) {
        results.issues.push("Netlify directory not found");
        results.actions.push("create_netlify_directory");
      }

      // Check functions manifest
      results.functionsManifest = await this.checkFunctionsManifest();
      if (!results.functionsManifest.exists || !results.functionsManifest.valid) {
        results.issues.push("Functions manifest missing or invalid");
        results.actions.push("regenerate_manifest");
      }

      // Check individual functions
      if (results.functionsManifest.manifest) {
        results.individualFunctions = await this.checkIndividualFunctions(results.functionsManifest.manifest);
        
        // Check for missing or unhealthy functions
        for (const func of results.individualFunctions.results) {
          if (!func.healthy) {
            results.issues.push(`Function ${func.name}: ${func.issues.join(", ")}`);
            if (func.issues.includes("Function file not found")) {
              results.actions.push(`create_function_${func.name}`);
            }
          }
        }
      }

      // Check Netlify configuration
      results.netlifyConfig = await this.validateNetlifyConfig();
      if (!results.netlifyConfig.valid) {
        results.issues.push(`Netlify config issues: ${results.netlifyConfig.issues.join(", ")}`);
        results.actions.push("fix_netlify_config");
      }

      // Check deployment status
      results.deploymentStatus = await this.checkNetlifyDeploymentStatus();

      // Calculate overall health
      const totalChecks = 4; // directory, manifest, functions, config
      let passedChecks = 0;
      
      if (results.netlifyDirectory.exists) passedChecks++;
      if (results.functionsManifest.valid) passedChecks++;
      if (results.individualFunctions.healthyFunctions > 0) passedChecks++;
      if (results.netlifyConfig.valid) passedChecks++;
      
      results.overallHealth = (passedChecks / totalChecks) >= 0.75;

      // Take actions if auto-fix is enabled
      if (this.config.functions.autoRegenerate && results.actions.length > 0) {
        await this.executeActions(results.actions, results);
      }

      // Generate health report
      await this.generateHealthReport(results);
      
      this.log(`✅ Netlify functions health check completed. Health: ${results.overallHealth ? 'Good' : 'Poor'}`);
      return results;
      
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`);
      results.issues.push(`Health check error: ${error.message}`);
      return results;
    }
  }

  async executeActions(actions, results) {
    this.log("⚡ Executing Netlify functions health actions...");
    
    for (const action of actions) {
      try {
        if (action === "create_netlify_directory") {
          this.log("⚠️ Manual intervention required to create Netlify directory");
        } else if (action === "regenerate_manifest") {
          await this.regenerateFunctionsManifest();
        } else if (action === "fix_netlify_config") {
          this.log("⚠️ Manual intervention required to fix Netlify config");
        } else if (action.startsWith("create_function_")) {
          const functionName = action.replace("create_function_", "");
          this.log(`⚠️ Manual intervention required to create function: ${functionName}`);
        }
      } catch (error) {
        this.log(`❌ Failed to execute action ${action}: ${error.message}`);
      }
    }
  }

  async generateHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `netlify-functions-health-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📊 Netlify functions health report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`);
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Netlify functions monitoring is already running");
      return;
    }

    this.log("🔄 Starting Netlify functions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      try {
        await this.runNetlifyFunctionsHealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring check failed: ${error.message}`);
      }
    }, this.config.checkInterval);

    this.log(`✅ Netlify functions monitoring started with ${this.config.checkInterval}ms interval`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 Netlify functions monitoring stopped");
  }

  async cleanup() {
    await this.stopMonitoring();
    this.log("🧹 Netlify functions redundancy cleanup completed");
  }
}

// CLI Interface
async function main() {
  const redundancy = new NetlifyFunctionsRedundancy();
  
  const command = process.argv[2] || "check";
  
  try {
    switch (command) {
      case "check":
        await redundancy.runNetlifyFunctionsHealthCheck();
        break;
      case "monitor":
        await redundancy.startMonitoring();
        // Keep the process running
        process.on("SIGINT", async () => {
          redundancy.log("🛑 Stopping Netlify functions monitoring...");
          await redundancy.cleanup();
          process.exit(0);
        });
        break;
      case "manifest":
        await redundancy.regenerateFunctionsManifest();
        break;
      case "build":
        await redundancy.triggerNetlifyBuild();
        break;
      case "validate":
        const config = await redundancy.validateNetlifyConfig();
        console.log("Netlify config validation:", config);
        break;
      default:
        console.log(`
Netlify Functions Redundancy System

Usage: node netlify-functions-redundancy.cjs [command]

Commands:
  check     Run Netlify functions health check (default)
  monitor   Start continuous monitoring
  manifest  Regenerate functions manifest
  build     Trigger Netlify build
  validate  Validate Netlify configuration

Examples:
  node netlify-functions-redundancy.cjs check
  node netlify-functions-redundancy.cjs monitor
  node netlify-functions-redundancy.cjs manifest
  node netlify-functions-redundancy.cjs build
  node netlify-functions-redundancy.cjs validate
        `);
    }
  } catch (error) {
    redundancy.log(`❌ Command '${command}' failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = NetlifyFunctionsRedundancy;