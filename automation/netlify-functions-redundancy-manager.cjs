#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "netlify-functions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      // Netlify functions directory
      functionsDir: path.join(this.workspace, "netlify/functions"),
      
      // Functions manifest file
      manifestFile: "functions-manifest.json",
      
      // Expected functions based on the manifest
      expectedFunctions: [
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
      
      // Function validation rules
      validationRules: {
        requiredExports: ["exports.handler", "module.exports"],
        maxFileSize: 100 * 1024, // 100KB
        maxFunctionDuration: 30000, // 30 seconds
        requiredStructure: ["function", "async", "await"]
      },
      
      // Monitoring intervals
      intervals: {
        functionHealth: 120000,     // 2 minutes
        manifestValidation: 300000, // 5 minutes
        overallHealth: 900000       // 15 minutes
      },
      
      // Recovery settings
      recovery: {
        maxAttempts: 3,
        retryDelay: 15000,          // 15 seconds
        regenerateManifest: true
      }
    };
    
    this.monitoring = false;
    this.checkIntervals = new Map();
    this.functionHealth = new Map();
    this.manifestStatus = new Map();
    this.recoveryAttempts = new Map();
    this.lastManifestRegeneration = new Date();
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

  // Check if functions directory exists
  checkFunctionsDirectory() {
    if (!fs.existsSync(this.config.functionsDir)) {
      this.log("Netlify functions directory not found", "ERROR");
      return false;
    }
    return true;
  }

  // Get list of existing function files
  getExistingFunctions() {
    try {
      if (!this.checkFunctionsDirectory()) {
        return [];
      }
      
      const files = fs.readdirSync(this.config.functionsDir);
      return files.filter(file => file.endsWith('.js') || file.endsWith('.mjs'));
    } catch (error) {
      this.log(`Failed to read functions directory: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Validate individual function
  validateFunction(functionName) {
    try {
      const functionPath = path.join(this.config.functionsDir, `${functionName}.js`);
      
      if (!fs.existsSync(functionPath)) {
        return {
          valid: false,
          errors: [`Function file not found: ${functionName}.js`]
        };
      }
      
      const stats = fs.statSync(functionPath);
      const content = fs.readFileSync(functionPath, "utf8");
      
      const validation = {
        valid: true,
        errors: [],
        warnings: [],
        info: {
          size: stats.size,
          lastModified: stats.mtime,
          lines: content.split('\n').length
        }
      };
      
      // Check file size
      if (stats.size > this.config.validationRules.maxFileSize) {
        validation.warnings.push(`File size (${stats.size} bytes) exceeds recommended limit`);
      }
      
      // Check for required exports
      let hasValidExport = false;
      for (const exportPattern of this.config.validationRules.requiredExports) {
        if (content.includes(exportPattern)) {
          hasValidExport = true;
          break;
        }
      }
      
      if (!hasValidExport) {
        validation.errors.push("Missing required export (exports.handler or module.exports)");
        validation.valid = false;
      }
      
      // Check for basic function structure
      if (!content.includes('function') && !content.includes('=>')) {
        validation.warnings.push("File may not contain function definitions");
      }
      
      // Check for async/await usage (recommended for Netlify functions)
      if (!content.includes('async') && !content.includes('await')) {
        validation.warnings.push("Function may not be async (recommended for Netlify)");
      }
      
      // Check for common Netlify function patterns
      if (!content.includes('exports.handler') && !content.includes('module.exports')) {
        validation.errors.push("Missing Netlify function handler export");
        validation.valid = false;
      }
      
      // Check for proper error handling
      if (!content.includes('try') && !content.includes('catch')) {
        validation.warnings.push("Function may lack proper error handling");
      }
      
      // Check for proper response format
      if (!content.includes('statusCode') && !content.includes('body')) {
        validation.warnings.push("Function may not return proper Netlify response format");
      }
      
      return validation;
      
    } catch (error) {
      return {
        valid: false,
        errors: [`Validation failed: ${error.message}`]
      };
    }
  }

  // Validate functions manifest
  validateFunctionsManifest() {
    try {
      this.log("Validating functions manifest", "INFO");
      
      const manifestPath = path.join(this.config.functionsDir, this.config.manifestFile);
      
      if (!fs.existsSync(manifestPath)) {
        this.log("Functions manifest not found", "WARN");
        return {
          valid: false,
          errors: ["Functions manifest not found"],
          manifest: null
        };
      }
      
      const manifestContent = fs.readFileSync(manifestPath, "utf8");
      let manifest;
      
      try {
        manifest = JSON.parse(manifestContent);
      } catch (error) {
        return {
          valid: false,
          errors: [`Invalid JSON in manifest: ${error.message}`],
          manifest: null
        };
      }
      
      const validation = {
        valid: true,
        errors: [],
        warnings: [],
        manifest: manifest
      };
      
      // Check required manifest fields
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        validation.errors.push("Manifest missing or invalid functions array");
        validation.valid = false;
      }
      
      if (!manifest.generatedAt) {
        validation.warnings.push("Manifest missing generation timestamp");
      }
      
      // Check if manifest functions match expected functions
      if (manifest.functions) {
        const missingFunctions = this.config.expectedFunctions.filter(
          expected => !manifest.functions.includes(expected)
        );
        
        if (missingFunctions.length > 0) {
          validation.warnings.push(`Manifest missing functions: ${missingFunctions.join(', ')}`);
        }
        
        const extraFunctions = manifest.functions.filter(
          func => !this.config.expectedFunctions.includes(func)
        );
        
        if (extraFunctions.length > 0) {
          validation.warnings.push(`Manifest contains extra functions: ${extraFunctions.join(', ')}`);
        }
      }
      
      // Check manifest age
      if (manifest.generatedAt) {
        try {
          const generatedAt = new Date(manifest.generatedAt);
          const now = new Date();
          const ageHours = (now - generatedAt) / (1000 * 60 * 60);
          
          if (ageHours > 24) {
            validation.warnings.push(`Manifest is ${ageHours.toFixed(1)} hours old`);
          }
        } catch (error) {
          validation.warnings.push("Could not parse manifest generation time");
        }
      }
      
      this.manifestStatus.set("manifest", validation);
      
      if (validation.valid) {
        this.log("Functions manifest is valid", "INFO");
      } else {
        this.log("Functions manifest has validation issues", "WARN");
      }
      
      return validation;
      
    } catch (error) {
      this.log(`Manifest validation failed: ${error.message}`, "ERROR");
      return {
        valid: false,
        error: error.message,
        manifest: null
      };
    }
  }

  // Regenerate functions manifest
  async regenerateFunctionsManifest() {
    try {
      this.log("Regenerating functions manifest", "INFO");
      
      const manifestScript = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      
      if (!fs.existsSync(manifestScript)) {
        this.log("Manifest generation script not found", "ERROR");
        return false;
      }
      
      const result = await this.runCommand("node", [manifestScript]);
      
      if (result.status === 0) {
        this.log("Functions manifest regenerated successfully", "INFO");
        this.lastManifestRegeneration = new Date();
        return true;
      } else {
        this.log(`Failed to regenerate manifest: ${result.stderr}`, "ERROR");
        return false;
      }
      
    } catch (error) {
      this.log(`Manifest regeneration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Check function file integrity
  async checkFunctionIntegrity() {
    try {
      this.log("Checking function file integrity", "INFO");
      
      const existingFunctions = this.getExistingFunctions();
      const integrityResults = {};
      let overallHealthy = true;
      
      for (const functionName of this.config.expectedFunctions) {
        const functionFile = `${functionName}.js`;
        const functionPath = path.join(this.config.functionsDir, functionFile);
        
        const integrity = {
          exists: fs.existsSync(functionPath),
          accessible: false,
          valid: false,
          issues: []
        };
        
        if (integrity.exists) {
          try {
            // Check if file is readable
            fs.accessSync(functionPath, fs.constants.R_OK);
            integrity.accessible = true;
            
            // Validate function
            const validation = this.validateFunction(functionName);
            integrity.valid = validation.valid;
            
            if (!validation.valid) {
              integrity.issues.push(...validation.errors);
              overallHealthy = false;
            }
            
            if (validation.warnings.length > 0) {
              integrity.issues.push(...validation.warnings);
            }
            
          } catch (error) {
            integrity.issues.push(`File access error: ${error.message}`);
            overallHealthy = false;
          }
        } else {
          integrity.issues.push("Function file not found");
          overallHealthy = false;
        }
        
        integrityResults[functionName] = integrity;
      }
      
      // Check for orphaned function files
      const orphanedFunctions = existingFunctions.filter(
        func => !this.config.expectedFunctions.includes(func.replace('.js', ''))
      );
      
      if (orphanedFunctions.length > 0) {
        integrityResults.orphaned = {
          functions: orphanedFunctions,
          warning: "Found function files not in expected list"
        };
      }
      
      if (overallHealthy) {
        this.log("All function files are healthy", "INFO");
      } else {
        this.log("Some function files have issues", "WARN");
      }
      
      return {
        overall: overallHealthy,
        functions: integrityResults
      };
      
    } catch (error) {
      this.log(`Function integrity check failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Test function execution (basic syntax check)
  async testFunctionExecution(functionName) {
    try {
      const functionPath = path.join(this.config.functionsDir, `${functionName}.js`);
      
      if (!fs.existsSync(functionPath)) {
        return {
          testable: false,
          error: "Function file not found"
        };
      }
      
      // Basic syntax check using Node.js
      const result = await this.runCommand("node", ["--check", functionPath]);
      
      if (result.status === 0) {
        return {
          testable: true,
          syntaxValid: true,
          message: "Function syntax is valid"
        };
      } else {
        return {
          testable: true,
          syntaxValid: false,
          error: result.stderr || "Syntax check failed"
        };
      }
      
    } catch (error) {
      return {
        testable: false,
        error: error.message
      };
    }
  }

  // Perform recovery actions
  async performRecovery() {
    try {
      this.log("Performing Netlify functions recovery", "INFO");
      
      const recoveryResults = {
        timestamp: new Date().toISOString(),
        actions: [],
        success: true
      };
      
      // Check manifest
      const manifestValidation = this.validateFunctionsManifest();
      if (!manifestValidation.valid || !manifestValidation.manifest) {
        this.log("Regenerating functions manifest", "INFO");
        
        const manifestRegenerated = await this.regenerateFunctionsManifest();
        if (manifestRegenerated) {
          recoveryResults.actions.push("Functions manifest regenerated");
        } else {
          recoveryResults.actions.push("Failed to regenerate functions manifest");
          recoveryResults.success = false;
        }
      }
      
      // Check function integrity
      const integrityResults = await this.checkFunctionIntegrity();
      if (!integrityResults.overall) {
        recoveryResults.actions.push("Function integrity issues detected");
        recoveryResults.success = false;
      }
      
      // Test critical functions
      const criticalFunctions = [
        "netlify-auto-healer-runner",
        "continuous-orchestrator",
        "automation-matrix"
      ];
      
      for (const functionName of criticalFunctions) {
        const testResult = await this.testFunctionExecution(functionName);
        if (!testResult.testable || !testResult.syntaxValid) {
          recoveryResults.actions.push(`Critical function ${functionName} has issues`);
          recoveryResults.success = false;
        }
      }
      
      if (recoveryResults.success) {
        this.log("Netlify functions recovery completed successfully", "INFO");
      } else {
        this.log("Netlify functions recovery completed with issues", "WARN");
      }
      
      return recoveryResults;
      
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Overall health check
  async checkOverallHealth() {
    try {
      this.log("Performing overall Netlify functions health check", "INFO");
      
      // Check functions directory
      if (!this.checkFunctionsDirectory()) {
        return {
          overall: false,
          error: "Functions directory not found"
        };
      }
      
      // Validate manifest
      const manifestValidation = this.validateFunctionsManifest();
      
      // Check function integrity
      const integrityResults = await this.checkFunctionIntegrity();
      
      // Test sample functions
      const sampleFunctions = this.config.expectedFunctions.slice(0, 5); // Test first 5
      const testResults = {};
      
      for (const functionName of sampleFunctions) {
        testResults[functionName] = await this.testFunctionExecution(functionName);
      }
      
      const overallHealth = {
        timestamp: new Date().toISOString(),
        functionsDirectory: true,
        manifest: manifestValidation,
        integrity: integrityResults,
        testResults: testResults,
        overall: manifestValidation.valid && integrityResults.overall
      };
      
      if (overallHealth.overall) {
        this.log("All Netlify functions systems are healthy", "INFO");
      } else {
        this.log("Some Netlify functions systems have issues", "WARN");
        
        // Trigger recovery if needed
        const recoveryAttempts = this.recoveryAttempts.get("overall") || 0;
        if (recoveryAttempts < this.config.recovery.maxAttempts) {
          this.log(`Triggering recovery (attempt ${recoveryAttempts + 1})`, "INFO");
          this.recoveryAttempts.set("overall", recoveryAttempts + 1);
          
          setTimeout(async () => {
            await this.performRecovery();
          }, this.config.recovery.retryDelay);
        } else {
          this.log("Maximum recovery attempts exceeded", "ERROR");
        }
      }
      
      return overallHealth;
      
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting Netlify functions redundancy monitoring", "INFO");
    
    // Start function health monitoring
    this.checkIntervals.set("function", setInterval(async () => {
      await this.checkFunctionIntegrity();
    }, this.config.intervals.functionHealth));
    
    // Start manifest validation monitoring
    this.checkIntervals.set("manifest", setInterval(async () => {
      this.validateFunctionsManifest();
    }, this.config.intervals.manifestValidation));
    
    // Start overall health monitoring
    this.checkIntervals.set("overall", setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.overallHealth));
    
    this.log("Netlify functions redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("Monitoring not started", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    // Clear all intervals
    for (const [name, interval] of this.checkIntervals) {
      clearInterval(interval);
      this.log(`Stopped ${name} monitoring`, "INFO");
    }
    this.checkIntervals.clear();
    
    this.log("Netlify functions redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      functionHealth: Object.fromEntries(this.functionHealth),
      manifestStatus: Object.fromEntries(this.manifestStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      lastManifestRegeneration: this.lastManifestRegeneration,
      config: this.config
    };
  }

  // Run once
  async runOnce() {
    this.log("Running Netlify functions redundancy check once", "INFO");
    return await this.checkOverallHealth();
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.start();
      break;
    case "stop":
      manager.stop();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "once":
      manager.runOnce().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.checkOverallHealth().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "recovery":
      manager.performRecovery().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
      });
      break;
    case "regenerate":
      manager.regenerateFunctionsManifest().then(success => {
        console.log(JSON.stringify({ success }, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node netlify-functions-redundancy-manager.cjs [start|stop|status|once|health|recovery|regenerate]");
      process.exit(1);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;