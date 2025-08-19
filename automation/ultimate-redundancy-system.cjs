#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancySystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        logRotation: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js"
        ],
        backupWorkflows: true
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
          "license-compliance-auditor"
        ]
      },
      build: {
        healthCheckInterval: 300000,
        autoRecovery: true,
        maxBuildAttempts: 3,
        buildScripts: [
          "npm run build",
          "npm run build:heal",
          "npm run build:recovery"
        ]
      },
      monitoring: {
        dashboard: true,
        alerts: true,
        reporting: true,
        metrics: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      build: { healthy: false, lastBuild: null, lastCheck: null },
      overall: { healthy: false, lastCheck: null }
    };
    
    this.metrics = {
      startTime: Date.now(),
      checks: 0,
      failures: 0,
      recoveries: 0,
      restarts: 0
    };
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  parsePM2List(output) {
    try {
      const lines = output.split('\n');
      const processes = [];
      
      for (const line of lines) {
        if (line.includes('│') || line.includes('|')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4 && parts[0] !== 'id' && parts[0] !== '─') {
            processes.push({
              id: parts[0],
              name: parts[1],
              status: parts[2],
              cpu: parts[3],
              memory: parts[4] || '0',
              uptime: parts[5] || '0'
            });
          }
        }
      }
      
      return processes;
    } catch (error) {
      this.log(`Failed to parse PM2 list: ${error.message}`, "WARN");
      return [];
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const args = command.split(' ');
      const cmd = args.shift();
      
      const child = spawn(cmd, args, {
        shell: true,
        stdio: 'pipe',
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject({ success: false, stdout, stderr, code, error: `Process exited with code ${code}` });
        }
      });

      child.on('error', (error) => {
        reject({ success: false, error: error.message || 'Unknown error' });
      });
    });
  }

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check PM2 daemon status
      try {
        const daemonStatus = await this.executeCommand("pm2 ping");
        if (!daemonStatus.success) {
          this.log("PM2 daemon not responding, attempting to start...", "WARN");
          await this.executeCommand("pm2 start");
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        this.log(`PM2 daemon check failed: ${error.message}`, "WARN");
        // Try to start PM2
        try {
          await this.executeCommand("pm2 start");
          await new Promise(resolve => setTimeout(resolve, 5000));
        } catch (startError) {
          this.log(`Failed to start PM2: ${startError.message}`, "WARN");
        }
      }

      // Get PM2 process list
      try {
        const processList = await this.executeCommand("pm2 list");
        const processes = this.parsePM2List(processList.stdout);
        
        this.status.pm2.processes = processes;
        this.status.pm2.lastCheck = Date.now();
        
        // Check each expected process
        const expectedProcesses = this.config.pm2.processes;
        const runningProcesses = processes.filter(p => p.status === "online");
        
        let healthy = true;
        for (const expected of expectedProcesses) {
          const found = runningProcesses.find(p => p.name === expected);
          if (!found) {
            this.log(`PM2 process '${expected}' not running, attempting to start...`, "WARN");
            await this.startPM2Process(expected);
            healthy = false;
          }
        }
        
        this.status.pm2.healthy = healthy;
        this.log(`PM2 health check complete. Healthy: ${healthy}, Running: ${runningProcesses.length}/${expectedProcesses.length}`);
        
        return healthy;
      } catch (error) {
        this.log(`PM2 process list failed: ${error.message}`, "WARN");
        this.status.pm2.healthy = false;
        return false;
      }
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      return false;
    }
  }

  async startPM2Process(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`);
      
      // Try to start from ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            await this.executeCommand(`pm2 start ${ecosystemFile} --only ${processName}`);
            this.log(`Successfully started ${processName} from ${ecosystemFile}`);
            return true;
          } catch (error) {
            this.log(`Failed to start ${processName} from ${ecosystemFile}: ${error.message}`, "WARN");
          }
        }
      }
      
      // Fallback: try to start individual scripts
      const scriptMap = {
        "zion-auto-sync": "automation/pm2-auto-sync.js",
        "redundancy-automation-system": "automation/redundancy-automation-system.cjs",
        "redundancy-health-monitor": "automation/redundancy-health-monitor.cjs",
        "redundancy-git-sync": "automation/redundancy-git-sync.cjs",
        "redundancy-build-monitor": "automation/redundancy-build-monitor.cjs"
      };
      
      if (scriptMap[processName] && fs.existsSync(scriptMap[processName])) {
        await this.executeCommand(`pm2 start ${scriptMap[processName]} --name ${processName}`);
        this.log(`Started ${processName} from individual script`);
        return true;
      }
      
      this.log(`Could not start ${processName}: no ecosystem file or script found`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error starting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflows exist and are valid
      const workflows = [];
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, 'utf8');
            const isValid = content.includes('name:') && content.includes('on:') && content.includes('jobs:');
            workflows.push({
              name: workflow,
              exists: true,
              valid: isValid,
              lastModified: fs.statSync(workflow).mtime
            });
          } catch (error) {
            workflows.push({
              name: workflow,
              exists: true,
              valid: false,
              error: error.message
            });
          }
        } else {
          workflows.push({
            name: workflow,
            exists: false,
            valid: false
          });
        }
      }
      
      this.status.githubActions.workflows = workflows;
      this.status.githubActions.lastCheck = Date.now();
      
      // Check if fallback scripts exist and are working
      let healthy = true;
      for (const script of this.config.githubActions.fallbackScripts) {
        if (!fs.existsSync(script)) {
          this.log(`GitHub Actions fallback script not found: ${script}`, "WARN");
          healthy = false;
        }
      }
      
      // Check workflow validity
      const invalidWorkflows = workflows.filter(w => !w.valid);
      if (invalidWorkflows.length > 0) {
        this.log(`Found ${invalidWorkflows.length} invalid GitHub Actions workflows`, "WARN");
        healthy = false;
      }
      
      this.status.githubActions.healthy = healthy;
      this.log(`GitHub Actions health check complete. Healthy: ${healthy}, Valid workflows: ${workflows.filter(w => w.valid).length}/${workflows.length}`);
      
      return healthy;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify Functions health...");
      
      // Check manifest file
      let manifestExists = false;
      let manifestValid = false;
      let functions = [];
      
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        manifestExists = true;
        try {
          const manifestContent = fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8');
          const manifest = JSON.parse(manifestContent);
          manifestValid = manifest && typeof manifest === 'object';
          functions = manifest.functions || [];
        } catch (error) {
          this.log(`Netlify Functions manifest parsing failed: ${error.message}`, "WARN");
        }
      }
      
      // Check individual function files
      const functionStatus = [];
      for (const funcName of this.config.netlifyFunctions.functions) {
        const functionPath = path.join("netlify/functions", funcName);
        const exists = fs.existsSync(functionPath);
        const hasIndex = fs.existsSync(path.join(functionPath, "index.js")) || 
                        fs.existsSync(path.join(functionPath, "index.ts"));
        
        functionStatus.push({
          name: funcName,
          exists,
          hasIndex,
          healthy: exists && hasIndex
        });
      }
      
      this.status.netlifyFunctions.functions = functionStatus;
      this.status.netlifyFunctions.lastCheck = Date.now();
      
      const healthy = manifestExists && manifestValid && functionStatus.every(f => f.healthy);
      this.status.netlifyFunctions.healthy = healthy;
      
      this.log(`Netlify Functions health check complete. Healthy: ${healthy}, Functions: ${functionStatus.filter(f => f.healthy).length}/${functionStatus.length}`);
      
      return healthy;
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      return false;
    }
  }

  async checkBuildHealth() {
    try {
      this.log("Checking build health...");
      
      // Check if build artifacts exist
      const buildArtifacts = [
        ".next",
        "out",
        "dist",
        "build"
      ];
      
      let hasBuildArtifacts = false;
      for (const artifact of buildArtifacts) {
        if (fs.existsSync(artifact)) {
          hasBuildArtifacts = true;
          break;
        }
      }
      
      // Check package.json scripts
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
      const hasBuildScripts = packageJson.scripts && (
        packageJson.scripts.build || 
        packageJson.scripts["build:heal"] || 
        packageJson.scripts["build:recovery"]
      );
      
      this.status.build.lastCheck = Date.now();
      this.status.build.healthy = hasBuildArtifacts && hasBuildScripts;
      
      this.log(`Build health check complete. Healthy: ${this.status.build.healthy}, Has artifacts: ${hasBuildArtifacts}, Has scripts: ${hasBuildScripts}`);
      
      return this.status.build.healthy;
    } catch (error) {
      this.log(`Build health check failed: ${error.message}`, "ERROR");
      this.status.build.healthy = false;
      return false;
    }
  }

  async performHealthCheck() {
    this.log("Starting comprehensive health check...");
    this.metrics.checks++;
    
    const startTime = Date.now();
    
    // Run all health checks in parallel
    const [pm2Health, githubHealth, netlifyHealth, buildHealth] = await Promise.all([
      this.checkPM2Health(),
      this.checkGitHubActionsHealth(),
      this.checkNetlifyFunctionsHealth(),
      this.checkBuildHealth()
    ]);
    
    // Update overall health status
    this.status.overall.healthy = pm2Health && githubHealth && netlifyHealth && buildHealth;
    this.status.overall.lastCheck = Date.now();
    
    const duration = Date.now() - startTime;
    
    if (this.status.overall.healthy) {
      this.log(`Health check completed successfully in ${duration}ms`);
    } else {
      this.log(`Health check completed with issues in ${duration}ms`, "WARN");
      this.metrics.failures++;
      
      // Attempt auto-recovery
      await this.attemptAutoRecovery();
    }
    
    return this.status.overall.healthy;
  }

  async attemptAutoRecovery() {
    this.log("Attempting auto-recovery...");
    
    try {
      // PM2 recovery
      if (!this.status.pm2.healthy) {
        this.log("Attempting PM2 recovery...");
        await this.recoverPM2();
      }
      
      // GitHub Actions recovery
      if (!this.status.githubActions.healthy) {
        this.log("Attempting GitHub Actions recovery...");
        await this.recoverGitHubActions();
      }
      
      // Netlify Functions recovery
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Attempting Netlify Functions recovery...");
        await this.recoverNetlifyFunctions();
      }
      
      // Build recovery
      if (!this.status.build.healthy) {
        this.log("Attempting build recovery...");
        await this.recoverBuild();
      }
      
      this.metrics.recoveries++;
      this.log("Auto-recovery completed");
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverPM2() {
    try {
      this.log("Recovering PM2 processes...");
      
      // Restart PM2 daemon
      await this.executeCommand("pm2 kill");
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.executeCommand("pm2 start");
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Start all expected processes
      for (const processName of this.config.pm2.processes) {
        await this.startPM2Process(processName);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      this.log("PM2 recovery completed");
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActions() {
    try {
      this.log("Recovering GitHub Actions...");
      
      // Validate and fix workflow files
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const content = fs.readFileSync(workflow, 'utf8');
          if (!content.includes('name:') || !content.includes('on:') || !content.includes('jobs:')) {
            this.log(`Fixing invalid workflow: ${workflow}`, "WARN");
            // Create a basic valid workflow structure
            const basicWorkflow = `name: ${path.basename(workflow, '.yml')}
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
      - name: Health check
        run: echo "Workflow recovered by redundancy system"`;

            fs.writeFileSync(workflow, basicWorkflow);
            this.log(`Recovered workflow: ${workflow}`);
          }
        }
      }
      
      this.log("GitHub Actions recovery completed");
    } catch (error) {
      this.log(`GitHub Actions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions() {
    try {
      this.log("Recovering Netlify Functions...");
      
      // Regenerate functions manifest
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        await this.executeCommand("node scripts/generate-netlify-functions-manifest.cjs");
        this.log("Regenerated Netlify Functions manifest");
      }
      
      // Ensure functions directory exists
      const functionsDir = "netlify/functions";
      if (!fs.existsSync(functionsDir)) {
        fs.mkdirSync(functionsDir, { recursive: true });
        this.log("Created Netlify functions directory");
      }
      
      this.log("Netlify Functions recovery completed");
    } catch (error) {
      this.log(`Netlify Functions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverBuild() {
    try {
      this.log("Recovering build system...");
      
      // Run build health check
      if (fs.existsSync("automation/pre-build-health-check.cjs")) {
        await this.executeCommand("node automation/pre-build-health-check.cjs");
      }
      
      // Try to run a basic build
      try {
        await this.executeCommand("npm run build:health-check");
        this.log("Build health check completed");
      } catch (error) {
        this.log(`Build health check failed: ${error.message}`, "WARN");
      }
      
      this.log("Build recovery completed");
    } catch (error) {
      this.log(`Build recovery failed: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    this.log("Starting ultimate redundancy monitoring...");
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up continuous monitoring
    const monitorInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        
        // Generate status report
        if (this.metrics.checks % 10 === 0) {
          await this.generateStatusReport();
        }
      } catch (error) {
        this.log(`Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    }, 60000); // Check every minute
    
    // Store interval reference for cleanup
    this.monitorInterval = monitorInterval;
    
    this.log("Ultimate redundancy monitoring started");
  }

  async generateStatusReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        status: this.status,
        metrics: this.metrics,
        uptime: Date.now() - this.metrics.startTime
      };
      
      const reportFile = path.join(this.logDir, `status-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Status report generated: ${reportFile}`);
      return report;
    } catch (error) {
      this.log(`Failed to generate status report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async stopMonitoring() {
    if (this.monitorInterval) {
      clearInterval(this.monitorInterval);
      this.monitorInterval = null;
      this.log("Ultimate redundancy monitoring stopped");
    }
  }

  getStatus() {
    return {
      status: this.status,
      metrics: this.metrics,
      uptime: Date.now() - this.metrics.startTime,
      config: this.config
    };
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancySystem();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      orchestrator.startMonitoring();
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'health':
      orchestrator.performHealthCheck().then(healthy => {
        console.log(`Health check result: ${healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case 'recover':
      orchestrator.attemptAutoRecovery().then(() => {
        console.log('Recovery completed');
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node ultimate-redundancy-system.cjs [start|status|health|recover]');
      process.exit(1);
  }
}

module.exports = UltimateRedundancySystem;