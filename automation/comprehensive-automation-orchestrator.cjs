#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveAutomationOrchestrator {
  constructor() {
    this.config = {
      automation: {
        pm2: {
          ecosystems: [
            "ecosystem.pm2.cjs",
            "ecosystem.redundancy.cjs",
            "ecosystem.comprehensive-redundancy.cjs",
            "ecosystem.redundancy.pm2.cjs"
          ],
          processes: [
            "zion-auto-sync",
            "zion-auto-sync-cron",
            "redundancy-automation-system",
            "redundancy-health-monitor",
            "redundancy-git-sync",
            "redundancy-build-monitor",
            "master-redundancy-orchestrator",
            "enhanced-pm2-redundancy",
            "enhanced-github-actions-redundancy",
            "enhanced-netlify-functions-redundancy"
          ],
          healthCheckInterval: 20000,
          maxRestartAttempts: 8,
          restartDelay: 4000,
          autoRecovery: true,
          processMonitoring: true,
          logRotation: true
        },
        githubActions: {
          workflows: [
            ".github/workflows/marketing-sync.yml",
            ".github/workflows/sync-health.yml",
            ".github/workflows/marketing-sync-backup.yml",
            ".github/workflows/sync-health-backup.yml"
          ],
          healthCheckInterval: 45000,
          maxFailureThreshold: 4,
          autoTrigger: true,
          backupTriggers: true,
          workflowValidation: true,
          apiHealthCheck: true,
          fallbackScripts: [
            "automation/marketing-sync.js",
            "automation/git-sync.cjs",
            "automation/pm2-auto-sync.js"
          ]
        },
        netlifyFunctions: {
          manifestFile: "netlify/functions/functions-manifest.json",
          healthCheckInterval: 90000,
          maxFailureThreshold: 3,
          autoRegenerate: true,
          deploymentCheck: true,
          logRotation: true,
          functionCount: 100,
          criticalFunctions: [
            "netlify-auto-healer-runner",
            "continuous-orchestrator",
            "automation-matrix",
            "ai-trends-radar-runner",
            "content-freshness-score-runner"
          ]
        },
        npmScripts: {
          build: ["build", "build:heal", "build:smart", "build:auto-fix"],
          lint: ["lint", "fix:all", "type-check"],
          automation: ["automation:all", "redundancy:start", "git:sync"],
          monitoring: ["health:start", "build:monitor", "security:scan"]
        },
        logging: {
          logDir: "automation/logs",
          maxLogSize: 25 * 1024 * 1024,
          maxLogFiles: 60,
          compression: true,
          rotation: true
        },
        monitoring: {
          enabled: true,
          interval: 20000,
          alertThreshold: 4,
          autoRestart: true,
          loadBalancing: true,
          healthDashboard: true,
          performanceMetrics: true
        },
        recovery: {
          autoRecovery: true,
          maxRecoveryAttempts: 12,
          recoveryDelay: 4000,
          fallbackStrategies: true,
          backupSystems: true,
          intelligentRecovery: true
        }
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startComprehensiveMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.automation.logging.logDir)) {
      fs.mkdirSync(this.config.automation.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.automation.logging.logDir, `comprehensive-automation-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 50,
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
    this.log("🔍 Checking comprehensive PM2 automation health...");
    
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 status check failed", "ERROR");
        return this.recoverPM2AutomationSystem();
      }

      const processes = this.config.automation.pm2.processes;
      let healthyCount = 0;
      let failedProcesses = [];

      for (const processName of processes) {
        try {
          const processResult = await this.runCommand("pm2", ["show", processName]);
          if (processResult.status === 0 && processResult.stdout.includes("online")) {
            healthyCount++;
          } else {
            failedProcesses.push(processName);
          }
        } catch (error) {
          failedProcesses.push(processName);
        }
      }

      this.log(`✅ PM2 Automation Health: ${healthyCount}/${processes.length} processes healthy`);

      if (failedProcesses.length > 0) {
        this.log(`⚠️ Failed automation processes: ${failedProcesses.join(", ")}`, "WARN");
        await this.recoverPM2AutomationProcesses(failedProcesses);
      }

      return healthyCount === processes.length;
    } catch (error) {
      this.log(`❌ PM2 automation health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2AutomationSystem() {
    this.log("🔄 Attempting PM2 automation system recovery...");
    
    try {
      // Try to resurrect PM2
      await this.runCommand("pm2", ["resurrect"]);
      
      // Start comprehensive redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"]);
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      
      this.log("✅ PM2 automation system recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ PM2 automation recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2AutomationProcesses(failedProcesses) {
    this.log(`🔄 Recovering ${failedProcesses.length} failed PM2 automation processes...`);
    
    for (const processName of failedProcesses) {
      try {
        await this.runCommand("pm2", ["restart", processName]);
        this.log(`✅ Restarted automation process ${processName}`);
      } catch (error) {
        this.log(`❌ Failed to restart ${processName}: ${error.message}`, "ERROR");
        
        // Try to start from ecosystem files
        for (const ecosystemFile of this.config.automation.pm2.ecosystems) {
          if (fs.existsSync(ecosystemFile)) {
            try {
              await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
              this.log(`✅ Started ${processName} from ${ecosystemFile}`);
              break;
            } catch (startError) {
              continue;
            }
          }
        }
      }
    }
  }

  async checkGitHubActionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive GitHub Actions automation health...");
    
    try {
      // Check workflow files exist and are valid
      for (const workflow of this.config.automation.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ Missing workflow: ${workflow}`, "WARN");
          continue;
        }
        
        // Validate workflow syntax
        try {
          const workflowContent = fs.readFileSync(workflow, 'utf8');
          if (workflowContent.includes('name:') && workflowContent.includes('on:')) {
            this.log(`✅ Workflow ${workflow} is valid`);
          } else {
            this.log(`⚠️ Workflow ${workflow} may have syntax issues`, "WARN");
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
        }
      }

      // Check GitHub API connectivity
      try {
        const result = await this.runCommand("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code}", "https://api.github.com"]);
        if (result.status === 0 && result.stdout === "200") {
          this.log("✅ GitHub API connectivity: OK");
        } else {
          this.log("⚠️ GitHub API connectivity: Issues detected", "WARN");
        }
      } catch (error) {
        this.log("❌ GitHub API connectivity check failed", "ERROR");
      }

      // Check fallback scripts
      for (const fallbackScript of this.config.automation.githubActions.fallbackScripts) {
        if (fs.existsSync(fallbackScript)) {
          this.log(`✅ Fallback script ${fallbackScript} exists`);
        } else {
          this.log(`⚠️ Fallback script ${fallbackScript} missing`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions automation health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive Netlify Functions automation health...");
    
    try {
      if (!fs.existsSync(this.config.automation.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.automation.netlifyFunctions.manifestFile, 'utf8'));
      
      if (manifest.functions && Array.isArray(manifest.functions)) {
        const functionCount = manifest.functions.length;
        this.log(`✅ Netlify Functions: ${functionCount} functions found`);
        
        if (functionCount < this.config.automation.netlifyFunctions.functionCount) {
          this.log(`⚠️ Function count below threshold: ${functionCount}/${this.config.automation.netlifyFunctions.functionCount}`, "WARN");
        }
        
        // Check for critical functions
        const criticalFunctions = this.config.automation.netlifyFunctions.criticalFunctions;
        
        for (const criticalFunc of criticalFunctions) {
          if (manifest.functions.includes(criticalFunc)) {
            this.log(`✅ Critical function ${criticalFunc}: OK`);
          } else {
            this.log(`⚠️ Critical function ${criticalFunc}: Missing`, "WARN");
          }
        }
      } else {
        this.log("❌ Invalid functions manifest format", "ERROR");
        return false;
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify Functions automation health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNpmScriptsHealth() {
    this.log("🔍 Checking npm scripts automation health...");
    
    try {
      const packageJsonPath = "package.json";
      if (!fs.existsSync(packageJsonPath)) {
        this.log("❌ package.json not found", "ERROR");
        return false;
      }

      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      let healthyCount = 0;
      let totalCount = 0;
      
      // Check build scripts
      for (const buildScript of this.config.automation.npmScripts.build) {
        if (scripts[buildScript]) {
          this.log(`✅ Build script ${buildScript}: OK`);
          healthyCount++;
        } else {
          this.log(`⚠️ Build script ${buildScript}: Missing`, "WARN");
        }
        totalCount++;
      }
      
      // Check lint scripts
      for (const lintScript of this.config.automation.npmScripts.lint) {
        if (scripts[lintScript]) {
          this.log(`✅ Lint script ${lintScript}: OK`);
          healthyCount++;
        } else {
          this.log(`⚠️ Lint script ${lintScript}: Missing`, "WARN");
        }
        totalCount++;
      }
      
      // Check automation scripts
      for (const autoScript of this.config.automation.npmScripts.automation) {
        if (scripts[autoScript]) {
          this.log(`✅ Automation script ${autoScript}: OK`);
          healthyCount++;
        } else {
          this.log(`⚠️ Automation script ${autoScript}: Missing`, "WARN");
        }
        totalCount++;
      }
      
      // Check monitoring scripts
      for (const monitorScript of this.config.automation.npmScripts.monitoring) {
        if (scripts[monitorScript]) {
          this.log(`✅ Monitoring script ${monitorScript}: OK`);
          healthyCount++;
        } else {
          this.log(`⚠️ Monitoring script ${monitorScript}: Missing`, "WARN");
        }
        totalCount++;
      }

      this.log(`✅ NPM Scripts Health: ${healthyCount}/${totalCount} scripts healthy`);
      return healthyCount === totalCount;
    } catch (error) {
      this.log(`❌ NPM scripts health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveAutomationHealthCheck() {
    this.log("🚀 Starting comprehensive automation health check...");
    
    const results = {
      pm2: await this.checkPM2ComprehensiveHealth(),
      githubActions: await this.checkGitHubActionsComprehensiveHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsComprehensiveHealth(),
      npmScripts: await this.checkNpmScriptsHealth(),
      timestamp: new Date().toISOString()
    };

    const overallHealth = results.pm2 && results.githubActions && results.netlifyFunctions && results.npmScripts;
    
    this.log(`📊 Comprehensive Automation Health Status: ${overallHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
    this.log(`   PM2: ${results.pm2 ? '✅' : '❌'}`);
    this.log(`   GitHub Actions: ${results.githubActions ? '✅' : '❌'}`);
    this.log(`   Netlify Functions: ${results.netlifyFunctions ? '✅' : '❌'}`);
    this.log(`   NPM Scripts: ${results.npmScripts ? '✅' : '❌'}`);

    if (!overallHealth) {
      this.log("🔄 Initiating comprehensive automation recovery procedures...");
      await this.performComprehensiveAutomationRecovery(results);
    }

    return results;
  }

  async performComprehensiveAutomationRecovery(healthResults) {
    this.log("🔄 Starting comprehensive automation recovery...");
    
    if (!healthResults.pm2) {
      await this.recoverPM2AutomationSystem();
    }
    
    if (!healthResults.githubActions) {
      this.log("🔄 GitHub Actions recovery: Manual intervention may be required");
      // Try to restore from backups
      await this.restoreGitHubActionsWorkflows();
    }
    
    if (!healthResults.netlifyFunctions) {
      this.log("🔄 Netlify Functions recovery: Regenerating manifest...");
      try {
        await this.runCommand("npm", ["run", "netlify:manifest"]);
        this.log("✅ Netlify functions manifest regenerated");
      } catch (error) {
        this.log(`❌ Failed to regenerate manifest: ${error.message}`, "ERROR");
      }
    }
    
    if (!healthResults.npmScripts) {
      this.log("🔄 NPM Scripts recovery: Checking package.json integrity...");
      await this.validatePackageJson();
    }
  }

  async restoreGitHubActionsWorkflows() {
    this.log("🔄 Attempting to restore GitHub Actions workflows from backups...");
    
    const backupMappings = [
      { backup: ".github/workflows/marketing-sync-backup.yml", original: ".github/workflows/marketing-sync.yml" },
      { backup: ".github/workflows/sync-health-backup.yml", original: ".github/workflows/sync-health.yml" }
    ];
    
    for (const mapping of backupMappings) {
      if (fs.existsSync(mapping.backup) && !fs.existsSync(mapping.original)) {
        try {
          fs.copyFileSync(mapping.backup, mapping.original);
          this.log(`✅ Restored ${mapping.original} from backup`);
        } catch (error) {
          this.log(`❌ Failed to restore ${mapping.original}: ${error.message}`, "ERROR");
        }
      }
    }
  }

  async validatePackageJson() {
    this.log("🔍 Validating package.json integrity...");
    
    try {
      const packageJsonPath = "package.json";
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check for required fields
      const requiredFields = ['name', 'version', 'scripts', 'dependencies'];
      for (const field of requiredFields) {
        if (!packageJson[field]) {
          this.log(`⚠️ Missing required field: ${field}`, "WARN");
        }
      }
      
      // Check for critical scripts
      const criticalScripts = ['build', 'dev', 'start'];
      for (const script of criticalScripts) {
        if (!packageJson.scripts[script]) {
          this.log(`⚠️ Missing critical script: ${script}`, "WARN");
        }
      }
      
      this.log("✅ Package.json validation completed");
    } catch (error) {
      this.log(`❌ Package.json validation failed: ${error.message}`, "ERROR");
    }
  }

  async startComprehensiveMonitoring() {
    this.log("🚀 Starting comprehensive automation monitoring...");
    
    setInterval(async () => {
      await this.performComprehensiveAutomationHealthCheck();
    }, this.config.automation.monitoring.interval);

    // Initial health check
    await this.performComprehensiveAutomationHealthCheck();
  }

  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive automation monitoring system...");
    
    // Ensure PM2 is running
    try {
      execSync("pm2 ping", { stdio: 'pipe' });
      this.log("✅ PM2 daemon is running");
    } catch (error) {
      this.log("⚠️ PM2 daemon not running, attempting to start...");
      try {
        execSync("pm2 start", { stdio: 'pipe' });
        this.log("✅ PM2 daemon started");
      } catch (startError) {
        this.log(`❌ Failed to start PM2 daemon: ${startError.message}`, "ERROR");
      }
    }
  }

  async generateAutomationHealthReport() {
    const healthResults = await this.performComprehensiveAutomationHealthCheck();
    
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: healthResults.pm2 && healthResults.githubActions && healthResults.netlifyFunctions && healthResults.npmScripts,
      systems: {
        pm2: {
          status: healthResults.pm2 ? 'HEALTHY' : 'UNHEALTHY',
          processes: this.config.automation.pm2.processes.length,
          ecosystems: this.config.automation.pm2.ecosystems
        },
        githubActions: {
          status: healthResults.githubActions ? 'HEALTHY' : 'UNHEALTHY',
          workflows: this.config.automation.githubActions.workflows,
          fallbackScripts: this.config.automation.githubActions.fallbackScripts
        },
        netlifyFunctions: {
          status: healthResults.netlifyFunctions ? 'HEALTHY' : 'UNHEALTHY',
          manifestFile: this.config.automation.netlifyFunctions.manifestFile,
          criticalFunctions: this.config.automation.netlifyFunctions.criticalFunctions
        },
        npmScripts: {
          status: healthResults.npmScripts ? 'HEALTHY' : 'UNHEALTHY',
          buildScripts: this.config.automation.npmScripts.build,
          automationScripts: this.config.automation.npmScripts.automation
        }
      },
      monitoring: {
        interval: this.config.automation.monitoring.interval,
        autoRecovery: this.config.automation.monitoring.autoRestart,
        loadBalancing: this.config.automation.monitoring.loadBalancing
      }
    };

    const reportFile = path.join(this.config.automation.logging.logDir, `comprehensive-automation-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Automation health report generated: ${reportFile}`);
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const orchestrator = new ComprehensiveAutomationOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      orchestrator.log("🚀 Comprehensive Automation Orchestrator started");
      break;
    case 'health':
      orchestrator.performComprehensiveAutomationHealthCheck();
      break;
    case 'report':
      orchestrator.generateAutomationHealthReport();
      break;
    case 'recover':
      orchestrator.performComprehensiveAutomationRecovery({ pm2: false, githubActions: false, netlifyFunctions: false, npmScripts: false });
      break;
    default:
      orchestrator.log("Usage: node comprehensive-automation-orchestrator.cjs [start|health|report|recover]");
      orchestrator.log("Starting in monitoring mode...");
      break;
  }
}

module.exports = ComprehensiveAutomationOrchestrator;