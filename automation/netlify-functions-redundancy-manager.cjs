#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");

class NetlifyFunctionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.netlifyDir = path.join(this.workspace, "netlify");
    this.functionsDir = path.join(this.netlifyDir, "functions");
    this.logDir = path.join(this.workspace, "automation/logs");
    
    this.ensureDirectories();
    
    this.logger = this.createLogger();
    
    this.expectedFunctions = [
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
    ];
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  createLogger() {
    const logFile = path.join(this.logDir, "netlify-functions-redundancy.log");
    return {
      info: (msg) => this.log("INFO", msg, logFile),
      warn: (msg) => this.log("WARN", msg, logFile),
      error: (msg) => this.log("ERROR", msg, logFile),
      debug: (msg) => this.log("DEBUG", msg, logFile)
    };
  }

  log(level, message, logFile) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(logFile, logEntry);
    } catch (err) {
      console.error(`Failed to write to log file: ${err.message}`);
    }
    
    console.log(`[${level}] ${message}`);
  }

  async scanFunctions() {
    this.logger.info("Scanning Netlify Functions directory...");
    
    const results = {
      timestamp: new Date().toISOString(),
      totalExpected: this.expectedFunctions.length,
      found: [],
      missing: [],
      invalid: [],
      manifest: null
    };
    
    try {
      // Check if functions directory exists
      if (!fs.existsSync(this.functionsDir)) {
        this.logger.warn("Netlify Functions directory not found");
        results.missing = this.expectedFunctions;
        return results;
      }
      
      // Scan for function files
      const files = fs.readdirSync(this.functionsDir);
      const jsFiles = files.filter(f => f.endsWith('.js'));
      
      this.logger.info(`Found ${jsFiles.length} JavaScript files in functions directory`);
      
      // Check each expected function
      for (const expectedFunc of this.expectedFunctions) {
        const funcFile = path.join(this.functionsDir, `${expectedFunc}.js`);
        
        if (fs.existsSync(funcFile)) {
          try {
            const stats = fs.statSync(funcFile);
            const content = fs.readFileSync(funcFile, "utf8");
            
            // Basic validation
            let isValid = true;
            let validationErrors = [];
            
            // Check if it's a valid function
            if (!content.includes("exports.handler") && !content.includes("module.exports")) {
              isValid = false;
              validationErrors.push("Missing handler export");
            }
            
            // Check file size
            if (stats.size < 100) {
              isValid = false;
              validationErrors.push("File too small, likely empty or incomplete");
            }
            
            if (isValid) {
              results.found.push({
                name: expectedFunc,
                file: `${expectedFunc}.js`,
                size: stats.size,
                lastModified: stats.mtime,
                path: funcFile
              });
            } else {
              results.invalid.push({
                name: expectedFunc,
                file: `${expectedFunc}.js`,
                errors: validationErrors,
                path: funcFile
              });
            }
          } catch (error) {
            results.invalid.push({
              name: expectedFunc,
              file: `${expectedFunc}.js`,
              errors: [`File read error: ${error.message}`],
              path: funcFile
            });
          }
        } else {
          results.missing.push(expectedFunc);
        }
      }
      
      // Check manifest file
      const manifestFile = path.join(this.functionsDir, "functions-manifest.json");
      if (fs.existsSync(manifestFile)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
          results.manifest = {
            exists: true,
            generatedAt: manifest.generatedAt,
            functionCount: manifest.functions ? manifest.functions.length : 0,
            functions: manifest.functions || []
          };
        } catch (error) {
          results.manifest = {
            exists: true,
            error: `Failed to parse manifest: ${error.message}`
          };
        }
      } else {
        results.manifest = {
          exists: false,
          error: "Manifest file not found"
        };
      }
      
      this.logger.info(`Scan completed: ${results.found.length} found, ${results.missing.length} missing, ${results.invalid.length} invalid`);
      
    } catch (error) {
      this.logger.error(`Function scan failed: ${error.message}`);
      throw error;
    }
    
    return results;
  }

  async regenerateManifest() {
    this.logger.info("Regenerating Netlify Functions manifest...");
    
    try {
      // Run the manifest generation script
      const result = spawnSync("npm", ["run", "netlify:manifest"], {
        cwd: this.workspace,
        stdio: "pipe",
        encoding: "utf8"
      });
      
      if (result.status === 0) {
        this.logger.info("Manifest regenerated successfully");
        
        // Verify the manifest was created
        const manifestFile = path.join(this.functionsDir, "functions-manifest.json");
        if (fs.existsSync(manifestFile)) {
          const manifest = JSON.parse(fs.readFileSync(manifestFile, "utf8"));
          this.logger.info(`New manifest contains ${manifest.functions ? manifest.functions.length : 0} functions`);
          return { success: true, functionCount: manifest.functions ? manifest.functions.length : 0 };
        } else {
          throw new Error("Manifest file not found after regeneration");
        }
      } else {
        throw new Error(`Manifest generation failed: ${result.stderr}`);
      }
    } catch (error) {
      this.logger.error(`Failed to regenerate manifest: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async validateFunctions() {
    this.logger.info("Validating Netlify Functions...");
    
    const scanResults = await this.scanFunctions();
    const validationResults = {
      timestamp: new Date().toISOString(),
      overall: {
        healthy: false,
        score: 0,
        issues: []
      },
      functions: scanResults.found,
      missing: scanResults.missing,
      invalid: scanResults.invalid,
      manifest: scanResults.manifest
    };
    
    // Calculate health score
    const totalFunctions = scanResults.totalExpected;
    const foundFunctions = scanResults.found.length;
    const invalidFunctions = scanResults.invalid.length;
    
    let score = 0;
    const issues = [];
    
    // Score based on found functions
    if (foundFunctions > 0) {
      score += (foundFunctions / totalFunctions) * 60; // 60% for found functions
    }
    
    // Penalty for invalid functions
    if (invalidFunctions > 0) {
      score -= (invalidFunctions / totalFunctions) * 20; // 20% penalty for invalid
      issues.push(`${invalidFunctions} functions are invalid`);
    }
    
    // Penalty for missing functions
    if (scanResults.missing.length > 0) {
      score -= (scanResults.missing.length / totalFunctions) * 20; // 20% penalty for missing
      issues.push(`${scanResults.missing.length} functions are missing`);
    }
    
    // Check manifest
    if (scanResults.manifest && scanResults.manifest.exists) {
      if (scanResults.manifest.functionCount === foundFunctions) {
        score += 10; // 10% bonus for accurate manifest
      } else {
        score -= 10; // 10% penalty for inaccurate manifest
        issues.push("Manifest function count doesn't match actual functions");
      }
    } else {
      score -= 10; // 10% penalty for missing manifest
      issues.push("Functions manifest is missing");
    }
    
    // Ensure score is within bounds
    score = Math.max(0, Math.min(100, score));
    
    validationResults.overall.score = Math.round(score);
    validationResults.overall.healthy = score >= 80;
    validationResults.overall.issues = issues;
    
    this.logger.info(`Validation completed: Score ${score}/100, Healthy: ${validationResults.overall.healthy}`);
    
    return validationResults;
  }

  async deployFunctions() {
    this.logger.info("Deploying Netlify Functions...");
    
    try {
      // Check if Netlify CLI is available
      const netlifyCheck = spawnSync("netlify", ["--version"], { stdio: "pipe" });
      if (netlifyCheck.status !== 0) {
        this.logger.warn("Netlify CLI not found, attempting to install...");
        execSync("npm install -g netlify-cli", { stdio: "inherit" });
      }
      
      // Build the project first
      this.logger.info("Building project...");
      const buildResult = spawnSync("npm", ["run", "build"], {
        cwd: this.workspace,
        stdio: "pipe",
        encoding: "utf8"
      });
      
      if (buildResult.status !== 0) {
        throw new Error(`Build failed: ${buildResult.stderr}`);
      }
      
      this.logger.info("Build completed successfully");
      
      // Deploy to Netlify
      this.logger.info("Deploying to Netlify...");
      const deployResult = spawnSync("netlify", ["deploy", "--prod"], {
        cwd: this.workspace,
        stdio: "pipe",
        encoding: "utf8"
      });
      
      if (deployResult.status === 0) {
        this.logger.info("Deployment completed successfully");
        return { success: true, output: deployResult.stdout };
      } else {
        throw new Error(`Deployment failed: ${deployResult.stderr}`);
      }
    } catch (error) {
      this.logger.error(`Function deployment failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async checkDeploymentStatus() {
    this.logger.info("Checking Netlify deployment status...");
    
    try {
      // Check if Netlify CLI is available
      const netlifyCheck = spawnSync("netlify", ["--version"], { stdio: "pipe" });
      if (netlifyCheck.status !== 0) {
        return { success: false, error: "Netlify CLI not available" };
      }
      
      // Get deployment status
      const statusResult = spawnSync("netlify", ["status"], {
        cwd: this.workspace,
        stdio: "pipe",
        encoding: "utf8"
      });
      
      if (statusResult.status === 0) {
        this.logger.info("Deployment status retrieved");
        return { success: true, status: statusResult.stdout };
      } else {
        throw new Error(`Status check failed: ${statusResult.stderr}`);
      }
    } catch (error) {
      this.logger.error(`Deployment status check failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runHealthCheck() {
    this.logger.info("Running Netlify Functions health check...");
    
    try {
      const validationResults = await this.validateFunctions();
      const deploymentStatus = await this.checkDeploymentStatus();
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        validation: validationResults,
        deployment: deploymentStatus,
        overall: {
          healthy: validationResults.overall.healthy && deploymentStatus.success,
          score: validationResults.overall.score,
          issues: [
            ...validationResults.overall.issues,
            ...(deploymentStatus.success ? [] : [deploymentStatus.error])
          ]
        }
      };
      
      // Save health report
      const reportFile = path.join(this.logDir, "netlify-functions-health.json");
      fs.writeFileSync(reportFile, JSON.stringify(healthReport, null, 2));
      
      this.logger.info(`Health check completed: Overall healthy: ${healthReport.overall.healthy}`);
      
      return healthReport;
    } catch (error) {
      this.logger.error(`Health check failed: ${error.message}`);
      throw error;
    }
  }

  async performRecovery() {
    this.logger.info("Performing Netlify Functions recovery...");
    
    try {
      const recoverySteps = [];
      
      // Step 1: Regenerate manifest
      this.logger.info("Step 1: Regenerating functions manifest...");
      const manifestResult = await this.regenerateManifest();
      recoverySteps.push({ step: "manifest_regeneration", success: manifestResult.success });
      
      // Step 2: Validate functions
      this.logger.info("Step 2: Validating functions...");
      const validationResults = await this.validateFunctions();
      recoverySteps.push({ step: "function_validation", success: validationResults.overall.healthy });
      
      // Step 3: Deploy if needed
      if (validationResults.overall.healthy) {
        this.logger.info("Step 3: Deploying functions...");
        const deployResult = await this.deployFunctions();
        recoverySteps.push({ step: "function_deployment", success: deployResult.success });
      } else {
        recoverySteps.push({ step: "function_deployment", success: false, reason: "Validation failed" });
      }
      
      // Step 4: Final health check
      this.logger.info("Step 4: Final health check...");
      const finalHealth = await this.runHealthCheck();
      recoverySteps.push({ step: "final_health_check", success: finalHealth.overall.healthy });
      
      const recoveryReport = {
        timestamp: new Date().toISOString(),
        steps: recoverySteps,
        overall: {
          successful: recoverySteps.filter(s => s.success).length,
          total: recoverySteps.length,
          success: recoverySteps.every(s => s.success)
        }
      };
      
      this.logger.info(`Recovery completed: ${recoveryReport.overall.successful}/${recoveryReport.overall.total} steps successful`);
      
      return recoveryReport;
    } catch (error) {
      this.logger.error(`Recovery failed: ${error.message}`);
      throw error;
    }
  }

  async runMaintenanceCycle() {
    this.logger.info("Starting Netlify Functions maintenance cycle...");
    
    try {
      // Step 1: Health check
      const healthCheck = await this.runHealthCheck();
      
      // Step 2: Recovery if needed
      let recoveryReport = null;
      if (!healthCheck.overall.healthy) {
        this.logger.info("Health check failed, starting recovery...");
        recoveryReport = await this.performRecovery();
      }
      
      // Step 3: Final status
      const finalStatus = await this.scanFunctions();
      
      const cycleReport = {
        timestamp: new Date().toISOString(),
        initialHealth: healthCheck,
        recovery: recoveryReport,
        finalStatus: finalStatus,
        summary: {
          startedHealthy: healthCheck.overall.healthy,
          recoveryNeeded: !!recoveryReport,
          recoverySuccessful: recoveryReport ? recoveryReport.overall.success : null,
          finalHealthy: finalStatus.found.length >= finalStatus.totalExpected * 0.8
        }
      };
      
      this.logger.info("Maintenance cycle completed");
      return cycleReport;
    } catch (error) {
      this.logger.error(`Maintenance cycle failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new NetlifyFunctionsRedundancyManager();
  
  const command = process.argv[2];
  
  switch (command) {
    case "scan":
      manager.scanFunctions().then(results => {
        console.log("Scan results:", JSON.stringify(results, null, 2));
      });
      break;
      
    case "validate":
      manager.validateFunctions().then(results => {
        console.log("Validation results:", JSON.stringify(results, null, 2));
      });
      break;
      
    case "manifest":
      manager.regenerateManifest().then(result => {
        console.log("Manifest regeneration result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "deploy":
      manager.deployFunctions().then(result => {
        console.log("Deployment result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "status":
      manager.checkDeploymentStatus().then(result => {
        console.log("Deployment status:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "health":
      manager.runHealthCheck().then(result => {
        console.log("Health check result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "recover":
      manager.performRecovery().then(result => {
        console.log("Recovery result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "maintenance":
      manager.runMaintenanceCycle().then(result => {
        console.log("Maintenance cycle result:", JSON.stringify(result, null, 2));
      });
      break;
      
    default:
      console.log("Usage: node netlify-functions-redundancy-manager.cjs [scan|validate|manifest|deploy|status|health|recover|maintenance]");
      process.exit(1);
  }
}

module.exports = NetlifyFunctionsRedundancyManager;