#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"],
        processes: ["zion-auto-sync", "zion-auto-sync-cron", "redundancy-automation-system", "redundancy-health-monitor", "redundancy-git-sync", "redundancy-build-monitor"],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs"
        ]
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
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
        ]
      },
      monitoring: {
        healthCheckInterval: 300000, // 5 minutes
        alertThreshold: 0.8,
        logRetention: 30,
        metrics: {
          enabled: true,
          collectSystemMetrics: true,
          collectProcessMetrics: true,
          collectDeploymentMetrics: true
        }
      },
      redundancy: {
        failoverEnabled: true,
        maxConcurrentChecks: 3,
        checkTimeout: 60000,
        retryAttempts: 3,
        retryDelay: 10000,
        circuitBreaker: {
          enabled: true,
          failureThreshold: 5,
          recoveryTimeout: 300000
        }
      }
    };
    
    this.circuitBreaker = {
      pm2: { failures: 0, lastFailure: 0, state: 'CLOSED' },
      githubActions: { failures: 0, lastFailure: 0, state: 'CLOSED' },
      netlifyFunctions: { failures: 0, lastFailure: 0, state: 'CLOSED' }
    };
    
    this.initializeMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.logDir, `comprehensive-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    try {
      fs.appendFileSync(logFile, logEntry + "\n");
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

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Checking comprehensive PM2 health...");
    
    try {
      // Check PM2 daemon status
      const pm2Status = await this.runCommand("pm2", ["status"]);
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 daemon not running, attempting to start...", "WARN");
        await this.runCommand("pm2", ["start"]);
        return false;
      }

      // Check all ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (!fs.existsSync(ecosystemFile)) {
          this.log(`❌ PM2 ecosystem file ${ecosystemFile} not found`, "WARN");
          continue;
        }
      }

      // Check all required processes
      const processes = await this.runCommand("pm2", ["jlist"]);
      if (processes.status === 0) {
        const pm2Processes = JSON.parse(processes.stdout);
        const requiredProcesses = this.config.pm2.processes;
        let allHealthy = true;

        for (const processName of requiredProcesses) {
          const targetProcess = pm2Processes.find(p => p.name === processName);
          if (!targetProcess) {
            this.log(`❌ PM2 process ${processName} not found, starting...`, "WARN");
            await this.runCommand("pm2", ["start", "ecosystem.redundancy.cjs"]);
            allHealthy = false;
          } else if (targetProcess.pm2_env.status !== "online") {
            this.log(`❌ PM2 process ${processName} not online (${targetProcess.pm2_env.status}), restarting...`, "WARN");
            await this.runCommand("pm2", ["restart", processName]);
            allHealthy = false;
          } else {
            this.log(`✅ PM2 process ${processName} is healthy`);
          }
        }

        return allHealthy;
      }

      return false;
    } catch (error) {
      this.log(`❌ PM2 comprehensive health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive GitHub Actions health...");
    
    try {
      // Check workflows directory
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      // Validate each workflow
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`❌ GitHub Actions workflow ${workflow} not found`, "WARN");
          continue;
        }

        const workflowContent = fs.readFileSync(workflow, 'utf8');
        
        // Basic syntax validation
        if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
          this.log(`❌ GitHub Actions workflow ${workflow} has invalid syntax`, "ERROR");
          continue;
        }

        // Check for required environment variables
        if (workflow.includes('marketing-sync') && !workflowContent.includes('LINKEDIN_ACCESS_TOKEN')) {
          this.log(`⚠️ GitHub Actions workflow ${workflow} missing required environment variables`, "WARN");
        }

        this.log(`✅ GitHub Actions workflow ${workflow} is valid`);
      }

      // Check fallback scripts
      for (const fallbackScript of this.config.githubActions.fallbackScripts) {
        if (!fs.existsSync(fallbackScript)) {
          this.log(`❌ Fallback script ${fallbackScript} not found`, "WARN");
        } else {
          this.log(`✅ Fallback script ${fallbackScript} is available`);
        }
      }

      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions comprehensive health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive Netlify functions health...");
    
    try {
      // Check Netlify directory structure
      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      const functionsDir = path.join(netlifyDir, "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }

      // Check functions manifest
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify functions manifest not found, regenerating...", "WARN");
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("❌ Netlify functions manifest is invalid", "ERROR");
        return false;
      }

      // Check if all required functions are present
      const missingFunctions = this.config.netlifyFunctions.functions.filter(
        func => !manifest.functions.includes(func)
      );

      if (missingFunctions.length > 0) {
        this.log(`⚠️ Missing Netlify functions: ${missingFunctions.join(', ')}`, "WARN");
      }

      // Check manifest freshness
      const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
      if (manifestAge > 3600000) { // 1 hour
        this.log("⚠️ Netlify functions manifest is stale, regenerating...", "WARN");
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }

      this.log(`✅ Netlify functions manifest is healthy with ${manifest.functions.length} functions`);
      return true;
    } catch (error) {
      this.log(`❌ Netlify functions comprehensive health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveGitSync() {
    this.log("🔄 Performing comprehensive Git synchronization...");
    
    try {
      // Check git status
      const gitStatus = await this.runCommand("git", ["status"]);
      if (gitStatus.status !== 0) {
        this.log("❌ Not in a git repository", "ERROR");
        return false;
      }

      // Fetch latest changes
      const fetchResult = await this.runCommand("git", ["fetch", "--prune", "origin"]);
      if (fetchResult.status !== 0) {
        this.log("❌ Git fetch failed", "ERROR");
        return false;
      }

      // Check if we're behind origin/main
      const behindCheck = await this.runCommand("git", ["rev-list", "--left-right", "--count", "HEAD...origin/main"]);
      if (behindCheck.status === 0) {
        const [ahead, behind] = behindCheck.stdout.trim().split('\t').map(Number);
        
        if (behind > 0) {
          this.log(`📥 Repository is ${behind} commits behind origin/main, pulling...`, "INFO");
          
          // Stash any local changes
          await this.runCommand("git", ["stash", "push", "-u", "-m", `comprehensive-sync-${Date.now()}`]);
          
          // Pull latest changes
          const pullResult = await this.runCommand("git", ["pull", "origin", "main"]);
          if (pullResult.status !== 0) {
            this.log("❌ Git pull failed", "ERROR");
            return false;
          }
          
          this.log("✅ Successfully pulled latest changes", "INFO");
        } else {
          this.log("✅ Repository is up to date with origin/main");
        }
      }

      return true;
    } catch (error) {
      this.log(`❌ Comprehensive Git sync error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveBuildHealthCheck() {
    this.log("🔍 Performing comprehensive build health check...");
    
    try {
      // Check package.json
      if (!fs.existsSync("package.json")) {
        this.log("❌ package.json not found", "ERROR");
        return false;
      }

      const packageJson = JSON.parse(fs.readFileSync("package.json", 'utf8'));
      
      // Check build scripts
      if (!packageJson.scripts || !packageJson.scripts.build) {
        this.log("❌ Build script not found in package.json", "ERROR");
        return false;
      }

      // Check dependencies
      if (!fs.existsSync("node_modules")) {
        this.log("⚠️ node_modules not found, installing dependencies...", "WARN");
        const installResult = await this.runCommand("npm", ["install"]);
        if (installResult.status !== 0) {
          this.log("❌ Dependency installation failed", "ERROR");
          return false;
        }
        this.log("✅ Dependencies installed successfully");
      }

      // Check for health check scripts
      const healthCheckScripts = ["build:health-check", "build:validate", "test"];
      for (const script of healthCheckScripts) {
        if (packageJson.scripts[script]) {
          this.log(`✅ Health check script ${script} is available`);
        }
      }

      // Run basic health check if available
      if (packageJson.scripts["build:health-check"]) {
        this.log("🔍 Running build health check...", "INFO");
        const healthCheckResult = await this.runCommand("npm", ["run", "build:health-check"]);
        if (healthCheckResult.status !== 0) {
          this.log("⚠️ Build health check failed", "WARN");
          return false;
        }
        this.log("✅ Build health check passed");
      }

      return true;
    } catch (error) {
      this.log(`❌ Comprehensive build health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check cycle...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      gitSync: false,
      buildHealth: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Run all health checks in parallel
      const [pm2Health, githubHealth, netlifyHealth, gitSyncResult, buildHealth] = await Promise.all([
        this.checkPM2ComprehensiveHealth(),
        this.checkGitHubActionsComprehensiveHealth(),
        this.checkNetlifyFunctionsComprehensiveHealth(),
        this.performComprehensiveGitSync(),
        this.performComprehensiveBuildHealthCheck()
      ]);

      results.pm2 = pm2Health;
      results.githubActions = githubHealth;
      results.netlifyFunctions = netlifyHealth;
      results.gitSync = gitSyncResult;
      results.buildHealth = buildHealth;

      // Log results
      this.log("📊 Comprehensive health check results:", "INFO");
      this.log(`  PM2: ${pm2Health ? '✅ HEALTHY' : '❌ UNHEALTHY'}`, "INFO");
      this.log(`  GitHub Actions: ${githubHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`, "INFO");
      this.log(`  Netlify Functions: ${netlifyHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`, "INFO");
      this.log(`  Git Sync: ${gitSyncResult ? '✅ SUCCESS' : '❌ FAILED'}`, "INFO");
      this.log(`  Build Health: ${buildHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`, "INFO");

      // Update circuit breaker states
      this.updateCircuitBreaker('pm2', pm2Health);
      this.updateCircuitBreaker('githubActions', githubHealth);
      this.updateCircuitBreaker('netlifyFunctions', netlifyHealth);

      return results;
    } catch (error) {
      this.log(`❌ Comprehensive health check error: ${error.message}`, "ERROR");
      return results;
    }
  }

  updateCircuitBreaker(service, success) {
    if (success) {
      this.circuitBreaker[service].failures = 0;
      this.circuitBreaker[service].state = 'CLOSED';
    } else {
      this.circuitBreaker[service].failures++;
      this.circuitBreaker[service].lastFailure = Date.now();
      
      if (this.circuitBreaker[service].failures >= this.config.redundancy.circuitBreaker.failureThreshold) {
        this.circuitBreaker[service].state = 'OPEN';
        this.log(`🚨 Circuit breaker OPEN for ${service}`, "WARN");
      }
    }
  }

  async emergencyRecovery() {
    this.log("🚨 Initiating emergency recovery procedures...", "WARN");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Clear PM2 logs
      await this.runCommand("pm2", ["flush"]);
      
      // Restart PM2 processes with redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem.redundancy.cjs"]);
      
      // Regenerate Netlify functions manifest
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }
      
      // Force comprehensive Git sync
      await this.performComprehensiveGitSync();
      
      // Reset circuit breakers
      Object.keys(this.circuitBreaker).forEach(service => {
        this.circuitBreaker[service].failures = 0;
        this.circuitBreaker[service].state = 'CLOSED';
      });
      
      this.log("✅ Emergency recovery completed", "INFO");
      return true;
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  initializeMonitoring() {
    this.log("🚀 Initializing comprehensive redundancy orchestrator...", "INFO");
    
    // Start monitoring loops
    this.startPM2Monitoring();
    this.startGitHubActionsMonitoring();
    this.startNetlifyFunctionsMonitoring();
    this.startComprehensiveHealthChecks();
    
    this.log("✅ Comprehensive redundancy orchestrator initialized", "INFO");
  }

  startPM2Monitoring() {
    setInterval(async () => {
      try {
        if (this.circuitBreaker.pm2.state !== 'OPEN') {
          await this.checkPM2ComprehensiveHealth();
        }
      } catch (error) {
        this.log(`❌ PM2 monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.pm2.healthCheckInterval);
  }

  startGitHubActionsMonitoring() {
    setInterval(async () => {
      try {
        if (this.circuitBreaker.githubActions.state !== 'OPEN') {
          await this.checkGitHubActionsComprehensiveHealth();
        }
      } catch (error) {
        this.log(`❌ GitHub Actions monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.githubActions.healthCheckInterval);
  }

  startNetlifyFunctionsMonitoring() {
    setInterval(async () => {
      try {
        if (this.circuitBreaker.netlifyFunctions.state !== 'OPEN') {
          await this.checkNetlifyFunctionsComprehensiveHealth();
        }
      } catch (error) {
        this.log(`❌ Netlify functions monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.netlifyFunctions.healthCheckInterval);
  }

  startComprehensiveHealthChecks() {
    // Run comprehensive health check every 5 minutes
    setInterval(async () => {
      try {
        await this.runComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Comprehensive health check error: ${error.message}`, "ERROR");
      }
    }, this.config.monitoring.healthCheckInterval);
  }

  getStatus() {
    return {
      system: "Comprehensive Redundancy Orchestrator",
      version: "2.0.0",
      status: "running",
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      config: this.config,
      circuitBreaker: this.circuitBreaker,
      timestamp: new Date().toISOString()
    };
  }
}

// Export the class
module.exports = ComprehensiveRedundancyOrchestrator;

// If run directly, start the system
if (require.main === module) {
  const orchestrator = new ComprehensiveRedundancyOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    orchestrator.log("🛑 Shutting down comprehensive redundancy orchestrator...", "INFO");
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    orchestrator.log("🛑 Shutting down comprehensive redundancy orchestrator...", "INFO");
    process.exit(0);
  });
  
  orchestrator.log("✅ Comprehensive redundancy orchestrator started", "INFO");
}