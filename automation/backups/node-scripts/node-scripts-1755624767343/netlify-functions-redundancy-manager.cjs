#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "netlify-functions-redundancy-manager.log");
    this.ensureLogDir();
    
    this.config = {
      functionsDir: "netlify/functions",
      manifestFile: "netlify/functions/functions-manifest.json",
      functions: [
        "a11y-alt-text-runner",
        "adaptive-orchestrator",
        "ai-changelog-runner",
        "ai-trends-radar-runner",
        "anchor-links-auto-fixer",
        "auto-discovery-runner",
        "auto-scheduler",
        "automation-matrix",
        "autonomous-invention-orchestrator",
        "autonomous-meta-orchestrator",
        "broken-image-scanner",
        "broken-image-scanner-runner",
        "canonical-auditor",
        "cloud_deep_research",
        "cloud_orchestrator",
        "code-smell-audit-runner",
        "component-coupling-graph-runner",
        "component-props-docs-runner",
        "component-size-report",
        "content-freshness-score-runner",
        "continuous-front-runner",
        "continuous-orchestrator",
        "dead-code-audit",
        "dead-code-report",
        "deps-auto-upgrade-runner",
        "docs-index-runner",
        "docs-search-index-runner",
        "duplicate-media-finder-runner",
        "external-link-check-runner",
        "fast-front-promoter",
        "fast-orchestrator",
        "feature-advertiser",
        "features-capabilities-benefits-advertiser",
        "front-ads-promoter",
        "front-enhancer",
        "front-index-futurizer",
        "front-index-orchestrator",
        "front-index-scheduler",
        "front-maximizer",
        "front-visionary-expander",
        "frontpage-enhancer",
        "frontpage-scheduler",
        "headers-enforcer",
        "home-visionary-expander",
        "homepage-advertiser-scheduler",
        "homepage-enhancer",
        "homepage-updater",
        "homepage-updater-scheduler",
        "homepage_advertiser",
        "hyper-front-index-accelerator",
        "image-optimizer-runner",
        "innovation-lab",
        "innovations-promoter",
        "intelligent-meta-orchestrator",
        "internal-link-graph-runner",
        "knowledge-pack-runner",
        "license-compliance-auditor",
        "link-and-health-scheduler",
        "link-crawler",
        "maintenance-scheduler",
        "marketing-and-features-promo",
        "marketing-scheduler",
        "media-og-and-optimize",
        "metadata-optimizer-runner",
        "netlify-auto-healer-runner",
        "newsroom-auto-publisher",
        "newsroom-runner",
        "og-image-update-runner",
        "orphan-pages-detector",
        "pagespeed-insights-runner",
        "readme-advertiser",
        "repo-knowledge-graph-runner",
        "repo-radar-and-graph",
        "repo-radar-runner",
        "revenue-ideas-lab",
        "roadmap-curator",
        "robots-auditor",
        "schedule-content-index",
        "schedule-homepage",
        "schedule-knowledge-graph",
        "schedule-site-health",
        "security-audit",
        "security-audit-runner",
        "seo-audit-runner",
        "site-404-map-runner",
        "site-crawler",
        "sitemap_runner",
        "stale-content-auditor-runner",
        "todo-scanner-runner",
        "todo-summary-runner",
        "topic-cluster-builder-runner",
        "topics-map-runner",
        "trigger-all-and-commit",
        "ui-enhancer",
        "ultrafast-front-orchestrator",
        "ultrafast-orchestrator",
        "unused-media-scanner"
      ],
      healthCheckInterval: 60000, // 1 minute
      maxRetries: 3,
      retryDelay: 30000, // 30 seconds
      functionTimeout: 30000, // 30 seconds
      manifestRegenerationInterval: 300000, // 5 minutes
      backupFunctionInterval: 600000, // 10 minutes
      healthThreshold: 90 // 90% functions must be healthy
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.functionHealth = new Map();
    this.healthHistory = new Map();
    this.lastManifestRegeneration = Date.now();
    this.lastBackupFunctionCheck = Date.now();
    this.backupFunctions = new Map();
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
        maxBuffer: 1024 * 1024 * 20,
        timeout: options.timeout || 30000,
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

  async checkFunctionFile(functionName) {
    const functionFile = path.join(this.workspace, this.config.functionsDir, `${functionName}.js`);
    if (!fs.existsSync(functionFile)) {
      return { exists: false, path: functionFile };
    }
    
    try {
      const stats = fs.statSync(functionFile);
      return {
        exists: true,
        path: functionFile,
        size: stats.size,
        modified: stats.mtime,
        isFile: stats.isFile()
      };
    } catch (error) {
      return { exists: false, path: functionFile, error: error.message };
    }
  }

  async validateFunctionFile(functionName) {
    try {
      const functionInfo = await this.checkFunctionFile(functionName);
      
      if (!functionInfo.exists) {
        this.log(`Function file not found: ${functionName}`, "WARN");
        return false;
      }
      
      if (!functionInfo.isFile) {
        this.log(`Function path is not a file: ${functionName}`, "WARN");
        return false;
      }
      
      if (functionInfo.size === 0) {
        this.log(`Function file is empty: ${functionName}`, "WARN");
        return false;
      }
      
      // Read and validate function content
      const content = fs.readFileSync(functionInfo.path, 'utf8');
      
      // Check for required exports
      if (!content.includes('exports.handler') && !content.includes('module.exports')) {
        this.log(`Function ${functionName} missing handler export`, "WARN");
        return false;
      }
      
      // Check for basic function structure
      if (!content.includes('function') && !content.includes('=>')) {
        this.log(`Function ${functionName} appears to be missing function definition`, "WARN");
        return false;
      }
      
      // Check for common issues
      if (content.includes('console.error') && !content.includes('console.log')) {
        this.log(`Function ${functionName} has error logging but no success logging`, "INFO");
      }
      
      return true;
    } catch (error) {
      this.log(`Error validating function file ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async testFunctionLocally(functionName) {
    try {
      const functionFile = path.join(this.workspace, this.config.functionsDir, `${functionName}.js`);
      
      if (!fs.existsSync(functionFile)) {
        return { success: false, error: "Function file not found" };
      }
      
      // Create a simple test context
      const testContext = {
        callbackWaitsForEmptyEventLoop: false,
        functionName: functionName,
        functionVersion: "1.0.0",
        invokedFunctionArn: `arn:aws:lambda:us-east-1:123456789012:function:${functionName}`,
        memoryLimitInMB: "128",
        awsRequestId: "test-request-id",
        logGroupName: `/aws/lambda/${functionName}`,
        logStreamName: "test-log-stream",
        getRemainingTimeInMillis: () => this.config.functionTimeout,
        done: () => {},
        fail: () => {},
        succeed: () => {}
      };
      
      // Create a test event
      const testEvent = {
        httpMethod: "GET",
        path: "/test",
        headers: {},
        queryStringParameters: {},
        body: null,
        isBase64Encoded: false
      };
      
      // Try to require and test the function
      try {
        const functionModule = require(functionFile);
        
        if (typeof functionModule.handler === 'function') {
          // Test with a timeout
          const testPromise = new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
              reject(new Error("Function execution timeout"));
            }, this.config.functionTimeout);
            
            try {
              functionModule.handler(testEvent, testContext, (error, result) => {
                clearTimeout(timeout);
                if (error) {
                  resolve({ success: false, error: error.message });
                } else {
                  resolve({ success: true, result: result });
                }
              });
            } catch (error) {
              clearTimeout(timeout);
              resolve({ success: false, error: error.message });
            }
          });
          
          return await testPromise;
        } else {
          return { success: false, error: "Handler function not found" };
        }
      } catch (requireError) {
        return { success: false, error: `Module require failed: ${requireError.message}` };
      }
      
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async createBackupFunction(functionName) {
    try {
      const functionFile = path.join(this.workspace, this.config.functionsDir, `${functionName}.js`);
      const backupFile = path.join(this.workspace, this.config.functionsDir, `${functionName}-backup.js`);
      
      if (fs.existsSync(functionFile) && !fs.existsSync(backupFile)) {
        const content = fs.readFileSync(functionFile, 'utf8');
        
        // Create backup with timestamp
        const timestamp = new Date().toISOString();
        const backupContent = `// Backup of ${functionName} created at ${timestamp}\n// Original function preserved for redundancy\n\n${content}`;
        
        fs.writeFileSync(backupFile, backupContent);
        this.log(`Created backup function: ${functionName}-backup.js`);
        
        this.backupFunctions.set(functionName, {
          backupFile: backupFile,
          created: timestamp,
          originalSize: content.length
        });
        
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`Error creating backup function for ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating Netlify functions manifest...");
      
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("Successfully regenerated Netlify functions manifest");
        this.lastManifestRegeneration = Date.now();
        return true;
      } else {
        this.log("Failed to regenerate Netlify functions manifest", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating Netlify functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      // Check file existence and validation
      const isValid = await this.validateFunctionFile(functionName);
      if (!isValid) {
        return { healthy: false, reason: "validation_failed" };
      }
      
      // Test function locally
      const testResult = await this.testFunctionLocally(functionName);
      if (!testResult.success) {
        return { healthy: false, reason: "test_failed", error: testResult.error };
      }
      
      return { healthy: true, reason: "all_checks_passed" };
      
    } catch (error) {
      return { healthy: false, reason: "exception", error: error.message };
    }
  }

  async manageFunctionHealth() {
    this.log("Managing Netlify functions health...");
    
    let healthyFunctions = 0;
    let totalFunctions = this.config.functions.length;
    
    for (const functionName of this.config.functions) {
      try {
        const health = await this.checkFunctionHealth(functionName);
        
        this.functionHealth.set(functionName, {
          ...health,
          lastCheck: Date.now(),
          timestamp: new Date().toISOString()
        });
        
        if (health.healthy) {
          healthyFunctions++;
          this.log(`Function ${functionName} is healthy`);
        } else {
          this.log(`Function ${functionName} is unhealthy: ${health.reason}`, "WARN");
          
          // Try to create backup if function is unhealthy
          if (health.reason === "validation_failed" || health.reason === "test_failed") {
            await this.createBackupFunction(functionName);
          }
        }
        
      } catch (error) {
        this.log(`Error checking function health for ${functionName}: ${error.message}`, "ERROR");
        this.functionHealth.set(functionName, {
          healthy: false,
          reason: "check_error",
          error: error.message,
          lastCheck: Date.now(),
          timestamp: new Date().toISOString()
        });
      }
    }
    
    const healthPercentage = (healthyFunctions / totalFunctions) * 100;
    this.log(`Netlify functions health: ${healthyFunctions}/${totalFunctions} (${healthPercentage.toFixed(1)}%)`);
    
    // Regenerate manifest if health is below threshold
    if (healthPercentage < this.config.healthThreshold) {
      this.log(`Functions health below threshold (${healthPercentage.toFixed(1)}% < ${this.config.healthThreshold}%), regenerating manifest...`);
      await this.regenerateFunctionsManifest();
    }
    
    return { healthyFunctions, totalFunctions, healthPercentage };
  }

  async manageBackupFunctions() {
    const now = Date.now();
    
    if (now - this.lastBackupFunctionCheck >= this.config.backupFunctionInterval) {
      this.log("Managing backup functions...");
      
      for (const functionName of this.config.functions) {
        try {
          const health = this.functionHealth.get(functionName);
          
          if (health && !health.healthy) {
            // Create backup for unhealthy functions
            await this.createBackupFunction(functionName);
          }
          
          // Check if backup exists and is older than 24 hours
          const backupInfo = this.backupFunctions.get(functionName);
          if (backupInfo) {
            const backupAge = now - new Date(backupInfo.created).getTime();
            const maxBackupAge = 24 * 60 * 60 * 1000; // 24 hours
            
            if (backupAge > maxBackupAge) {
              // Remove old backup
              try {
                fs.unlinkSync(backupInfo.backupFile);
                this.backupFunctions.delete(functionName);
                this.log(`Removed old backup function: ${functionName}-backup.js`);
              } catch (error) {
                this.log(`Error removing old backup function ${functionName}-backup.js: ${error.message}`, "WARN");
              }
            }
          }
          
        } catch (error) {
          this.log(`Error managing backup function for ${functionName}: ${error.message}`, "ERROR");
        }
      }
      
      this.lastBackupFunctionCheck = now;
    }
  }

  async checkOverallHealth() {
    this.log("Checking Netlify functions system health...");
    
    const health = {
      timestamp: new Date().toISOString(),
      functions: {},
      summary: {
        total: this.config.functions.length,
        healthy: 0,
        unhealthy: 0,
        backupCount: this.backupFunctions.size
      }
    };
    
    for (const functionName of this.config.functions) {
      const functionHealth = this.functionHealth.get(functionName);
      if (functionHealth) {
        health.functions[functionName] = functionHealth;
        
        if (functionHealth.healthy) {
          health.summary.healthy++;
        } else {
          health.summary.unhealthy++;
        }
      }
    }
    
    // Store health history
    this.healthHistory.set(Date.now(), health);
    
    // Clean old health history
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
    for (const [timestamp] of this.healthHistory) {
      if (timestamp < cutoff) {
        this.healthHistory.delete(timestamp);
      }
    }
    
    return health;
  }

  async orchestrate() {
    this.log("Starting Netlify functions redundancy orchestration...");
    
    try {
      // Check and manage function health
      const healthResult = await this.manageFunctionHealth();
      
      // Manage backup functions
      await this.manageBackupFunctions();
      
      // Regenerate manifest if needed
      const now = Date.now();
      if (now - this.lastManifestRegeneration >= this.config.manifestRegenerationInterval) {
        await this.regenerateFunctionsManifest();
      }
      
      // Check overall health
      const health = await this.checkOverallHealth();
      
      this.log(`Netlify functions system health: ${health.summary.healthy}/${health.summary.total} functions healthy`);
      
      if (health.summary.unhealthy > 0) {
        this.log(`Warning: ${health.summary.unhealthy} functions are unhealthy`, "WARN");
      }
      
      if (health.summary.backupCount > 0) {
        this.log(`Info: ${health.summary.backupCount} backup functions available`);
      }
      
    } catch (error) {
      this.log(`Error during Netlify functions orchestration: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("Netlify functions monitoring is already running");
      return;
    }
    
    this.log("Starting Netlify functions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.orchestrate();
    }, this.config.healthCheckInterval);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("Stopped Netlify functions redundancy monitoring");
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      lastHealthCheck: this.healthHistory.size > 0 ? 
        Array.from(this.healthHistory.keys()).pop() : null,
      functionHealth: Object.fromEntries(this.functionHealth),
      backupFunctions: Object.fromEntries(this.backupFunctions),
      lastManifestRegeneration: this.lastManifestRegeneration,
      lastBackupFunctionCheck: this.lastBackupFunctionCheck,
      config: this.config
    };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      healthHistory: Array.from(this.healthHistory.entries()).slice(-10), // Last 10 entries
      recommendations: []
    };
    
    // Generate recommendations based on health history
    if (this.healthHistory.size > 0) {
      const recentHealth = Array.from(this.healthHistory.values()).slice(-5);
      
      const totalFunctions = recentHealth.reduce((sum, h) => sum + h.summary.total, 0);
      const totalHealthy = recentHealth.reduce((sum, h) => sum + h.summary.healthy, 0);
      const totalUnhealthy = recentHealth.reduce((sum, h) => sum + h.summary.unhealthy, 0);
      
      if (totalUnhealthy > 0) {
        report.recommendations.push("Some functions are unhealthy - investigate and fix issues");
      }
      
      if (totalHealthy < totalFunctions * 0.8) {
        report.recommendations.push("Many functions are unhealthy - check function implementations");
      }
      
      if (recentHealth.some(h => h.summary.backupCount === 0)) {
        report.recommendations.push("No backup functions available - consider creating backups for critical functions");
      }
    }
    
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.startMonitoring();
      break;
    case "stop":
      manager.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(manager.generateReport(), null, 2));
      break;
    case "once":
      manager.orchestrate().then(() => {
        console.log("Netlify functions orchestration completed");
        process.exit(0);
      }).catch(error => {
        console.error("Netlify functions orchestration failed:", error);
        process.exit(1);
      });
      break;
    case "create-backups":
      Promise.all(manager.config.functions.map(name => manager.createBackupFunction(name)))
        .then(() => {
          console.log("Backup functions creation completed");
          process.exit(0);
        })
        .catch(error => {
          console.error("Backup functions creation failed:", error);
          process.exit(1);
        });
      break;
    case "regenerate-manifest":
      manager.regenerateFunctionsManifest().then(() => {
        console.log("Functions manifest regeneration completed");
        process.exit(0);
      }).catch(error => {
        console.error("Functions manifest regeneration failed:", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node netlify-functions-redundancy-manager.cjs [start|stop|status|report|once|create-backups|regenerate-manifest]");
      process.exit(1);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;