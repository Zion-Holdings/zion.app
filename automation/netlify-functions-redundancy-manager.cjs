#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "netlify-functions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      // Netlify functions directory
      functionsDir: path.join(this.workspace, "netlify/functions"),
      
      // Expected functions from manifest
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
        requiredExports: ["handler", "exports.handler"],
        requiredImports: ["require", "import"],
        minFileSize: 100, // Minimum file size in bytes
        maxFileSize: 1024 * 1024, // Maximum file size in bytes (1MB)
        requiredStructure: ["function", "module.exports", "exports"]
      },
      
      // Health check intervals
      healthCheckInterval: 120000, // 2 minutes
      manifestRegenerationInterval: 600000, // 10 minutes
      
      // Error thresholds
      maxValidationErrors: 5,
      maxFunctionFailures: 3
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.manifestInterval = null;
    this.healthHistory = new Map();
    this.errorCounts = new Map();
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
    
    this.log("Netlify functions directory found", "INFO");
    return true;
  }

  // List all function files
  listFunctionFiles() {
    try {
      if (!fs.existsSync(this.config.functionsDir)) {
        return [];
      }
      
      const files = fs.readdirSync(this.config.functionsDir);
      return files.filter(file => file.endsWith('.js') || file.endsWith('.mjs'));
    } catch (error) {
      this.log(`Failed to list function files: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Get functions manifest
  getFunctionsManifest() {
    try {
      const manifestPath = path.join(this.config.functionsDir, "functions-manifest.json");
      
      if (!fs.existsSync(manifestPath)) {
        this.log("Functions manifest not found", "WARN");
        return null;
      }
      
      const manifestContent = fs.readFileSync(manifestPath, 'utf8');
      const manifest = JSON.parse(manifestContent);
      
      this.log(`Functions manifest loaded with ${manifest.functions?.length || 0} functions`, "INFO");
      return manifest;
    } catch (error) {
      this.log(`Failed to load functions manifest: ${error.message}`, "ERROR");
      return null;
    }
  }

  // Validate individual function
  async validateFunction(filename) {
    try {
      const filepath = path.join(this.config.functionsDir, filename);
      
      if (!fs.existsSync(filepath)) {
        return {
          valid: false,
          error: "File not found",
          filename: filename
        };
      }
      
      const stats = fs.statSync(filepath);
      const content = fs.readFileSync(filepath, 'utf8');
      
      const validation = {
        valid: true,
        filename: filename,
        size: stats.size,
        lastModified: stats.mtime,
        errors: []
      };
      
      // Check file size
      if (stats.size < this.config.validationRules.minFileSize) {
        validation.errors.push(`File too small: ${stats.size} bytes`);
        validation.valid = false;
      }
      
      if (stats.size > this.config.validationRules.maxFileSize) {
        validation.errors.push(`File too large: ${stats.size} bytes`);
        validation.valid = false;
      }
      
      // Check for required exports
      const hasHandlerExport = this.config.validationRules.requiredExports.some(exportPattern => {
        if (exportPattern.includes('.')) {
          return content.includes(exportPattern);
        } else {
          return content.includes(`exports.${exportPattern}`) || content.includes(`module.exports.${exportPattern}`);
        }
      });
      
      if (!hasHandlerExport) {
        validation.errors.push("Missing handler export");
        validation.valid = false;
      }
      
      // Check for required structure
      const hasRequiredStructure = this.config.validationRules.requiredStructure.some(pattern => 
        content.includes(pattern)
      );
      
      if (!hasRequiredStructure) {
        validation.errors.push("Missing required structure patterns");
        validation.valid = false;
      }
      
      // Check for basic syntax (try to parse as JavaScript)
      try {
        // Basic syntax check - look for common syntax errors
        if (content.includes('function') && !content.includes('{')) {
          validation.errors.push("Potential syntax error: function without body");
          validation.valid = false;
        }
        
        if (content.includes('exports.') && !content.includes('=')) {
          validation.errors.push("Potential syntax error: incomplete export");
          validation.valid = false;
        }
        
      } catch (syntaxError) {
        validation.errors.push(`Syntax error: ${syntaxError.message}`);
        validation.valid = false;
      }
      
      return validation;
      
    } catch (error) {
      return {
        valid: false,
        error: error.message,
        filename: filename
      };
    }
  }

  // Validate all functions
  async validateAllFunctions() {
    try {
      this.log("Validating all Netlify functions", "INFO");
      
      const functionFiles = this.listFunctionFiles();
      if (functionFiles.length === 0) {
        this.log("No function files found", "WARN");
        return { valid: false, functions: [] };
      }
      
      const validationResults = [];
      let overallValid = true;
      
      for (const filename of functionFiles) {
        const result = await this.validateFunction(filename);
        validationResults.push(result);
        
        if (!result.valid) {
          overallValid = false;
          this.log(`Function ${filename} validation failed: ${result.errors?.join(', ') || result.error}`, "ERROR");
          
          // Increment error count
          const currentCount = this.errorCounts.get(filename) || 0;
          this.errorCounts.set(filename, currentCount + 1);
        } else {
          this.log(`Function ${filename} validation passed`, "INFO");
          // Reset error count on success
          this.errorCounts.set(filename, 0);
        }
      }
      
      return {
        valid: overallValid,
        functions: validationResults,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      this.log(`Function validation failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  // Check function dependencies
  async checkFunctionDependencies() {
    try {
      this.log("Checking function dependencies", "INFO");
      
      const functionFiles = this.listFunctionFiles();
      const dependencyResults = {};
      
      for (const filename of functionFiles) {
        const filepath = path.join(this.config.functionsDir, filename);
        const content = fs.readFileSync(filepath, 'utf8');
        
        // Extract require statements
        const requireMatches = content.match(/require\(['"`]([^'"`]+)['"`]\)/g) || [];
        const importMatches = content.match(/import\s+.*from\s+['"`]([^'"`]+)['"`]/g) || [];
        
        const dependencies = [
          ...requireMatches.map(match => match.replace(/require\(['"`]([^'"`]+)['"`]\)/, '$1')),
          ...importMatches.map(match => match.replace(/import\s+.*from\s+['"`]([^'"`]+)['"`]/, '$1'))
        ];
        
        dependencyResults[filename] = {
          dependencies: dependencies,
          count: dependencies.length
        };
      }
      
      return dependencyResults;
      
    } catch (error) {
      this.log(`Function dependency check failed: ${error.message}`, "ERROR");
      return {};
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
        this.lastManifestRegeneration = new Date();
        this.log("Functions manifest regenerated successfully", "INFO");
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

  // Check function performance (basic metrics)
  async checkFunctionPerformance() {
    try {
      this.log("Checking function performance metrics", "INFO");
      
      const functionFiles = this.listFunctionFiles();
      const performanceResults = {};
      
      for (const filename of functionFiles) {
        const filepath = path.join(this.config.functionsDir, filename);
        const stats = fs.statSync(filepath);
        const content = fs.readFileSync(filepath, 'utf8');
        
        // Basic performance metrics
        const lines = content.split('\n').length;
        const complexity = this.calculateComplexity(content);
        
        performanceResults[filename] = {
          size: stats.size,
          lines: lines,
          complexity: complexity,
          lastModified: stats.mtime
        };
      }
      
      return performanceResults;
      
    } catch (error) {
      this.log(`Function performance check failed: ${error.message}`, "ERROR");
      return {};
    }
  }

  // Calculate basic complexity metric
  calculateComplexity(content) {
    let complexity = 0;
    
    // Count control structures
    const controlStructures = ['if', 'else', 'for', 'while', 'switch', 'case', 'catch', 'finally'];
    for (const structure of controlStructures) {
      const regex = new RegExp(`\\b${structure}\\b`, 'g');
      const matches = content.match(regex);
      if (matches) {
        complexity += matches.length;
      }
    }
    
    // Count function definitions
    const functionMatches = content.match(/function\s+\w+|=>|function\s*\(/g);
    if (functionMatches) {
      complexity += functionMatches.length;
    }
    
    return complexity;
  }

  // Check for missing functions
  async checkMissingFunctions() {
    try {
      this.log("Checking for missing functions", "INFO");
      
      const manifest = this.getFunctionsManifest();
      const existingFunctions = this.listFunctionFiles().map(f => f.replace('.js', '').replace('.mjs', ''));
      
      const missingFunctions = this.config.expectedFunctions.filter(expected => 
        !existingFunctions.includes(expected)
      );
      
      const extraFunctions = existingFunctions.filter(existing => 
        !this.config.expectedFunctions.includes(existing)
      );
      
      return {
        missing: missingFunctions,
        extra: extraFunctions,
        expected: this.config.expectedFunctions.length,
        existing: existingFunctions.length,
        coverage: ((existingFunctions.length / this.config.expectedFunctions.length) * 100).toFixed(2)
      };
      
    } catch (error) {
      this.log(`Missing functions check failed: ${error.message}`, "ERROR");
      return { missing: [], extra: [], coverage: 0 };
    }
  }

  // Perform comprehensive health check
  async performHealthCheck() {
    try {
      this.log("Performing Netlify functions health check", "INFO");
      
      // Check functions directory
      if (!this.checkFunctionsDirectory()) {
        return { valid: false, error: "Functions directory not found" };
      }
      
      // Validate all functions
      const validationResult = await this.validateAllFunctions();
      
      // Check dependencies
      const dependencyResult = await this.checkFunctionDependencies();
      
      // Check performance
      const performanceResult = await this.checkFunctionPerformance();
      
      // Check for missing functions
      const missingResult = await this.checkMissingFunctions();
      
      // Check manifest
      const manifest = this.getFunctionsManifest();
      
      // Determine overall health
      const overallHealth = validationResult.valid && manifest !== null;
      
      const healthResult = {
        timestamp: new Date().toISOString(),
        valid: overallHealth,
        validation: validationResult,
        dependencies: dependencyResult,
        performance: performanceResult,
        missing: missingResult,
        manifest: manifest ? { functions: manifest.functions?.length || 0 } : null,
        errorCounts: Object.fromEntries(this.errorCounts)
      };
      
      this.healthHistory.set("netlify-functions", healthResult);
      
      if (overallHealth) {
        this.log("All Netlify functions healthy", "INFO");
      } else {
        this.log("Some Netlify functions unhealthy", "WARN");
      }
      
      return healthResult;
      
    } catch (error) {
      this.log(`Netlify functions health check failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("Netlify functions redundancy monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting Netlify functions redundancy monitoring", "INFO");
    
    // Start health check monitoring
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    // Start manifest regeneration monitoring
    this.manifestInterval = setInterval(async () => {
      await this.regenerateFunctionsManifest();
    }, this.config.manifestRegenerationInterval);
    
    this.log("Netlify functions redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("Netlify functions redundancy monitoring not running", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    if (this.manifestInterval) {
      clearInterval(this.manifestInterval);
      this.manifestInterval = null;
    }
    
    this.log("Netlify functions redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      health: this.healthHistory.get("netlify-functions") || null,
      errorCounts: Object.fromEntries(this.errorCounts),
      lastManifestRegeneration: this.lastManifestRegeneration,
      config: this.config
    };
  }

  // Run health check once
  async runOnce() {
    this.log("Running Netlify functions health check once", "INFO");
    return await this.performHealthCheck();
  }

  // Force manifest regeneration
  async forceManifestRegeneration() {
    this.log("Forcing functions manifest regeneration", "INFO");
    return await this.regenerateFunctionsManifest();
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
      manager.runOnce().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "manifest":
      manager.forceManifestRegeneration().then(result => {
        console.log(JSON.stringify({ regenerated: result }, null, 2));
        process.exit(0);
      });
      break;
    case "validate":
      manager.validateAllFunctions().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node netlify-functions-redundancy-manager.cjs [start|stop|status|once|health|manifest|validate]");
      process.exit(1);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;