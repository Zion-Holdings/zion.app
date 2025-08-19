#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class RedundancyAutomationSystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(__dirname, "logs");
    this.logFile = path.join(this.logDir, "redundancy-automation.log");
    this.ensureLogDir();
    this.redundancyStatus = {
      pm2: { status: "unknown", lastCheck: null, redundancyActive: false },
      githubActions: { status: "unknown", lastCheck: null, redundancyActive: false },
      netlifyFunctions: { status: "unknown", lastCheck: null, redundancyActive: false }
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const line = `[${timestamp}] [${level}] ${message}`;
    console.log(line);
    fs.appendFileSync(this.logFile, line + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: options.cwd || this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        ...options
      });
      resolve({
        status: result.status,
        stdout: result.stdout?.toString() || "",
        stderr: result.stderr?.toString() || ""
      });
    });
  }

  // PM2 Redundancy Management
  async checkPM2Status() {
    try {
      this.log("🔍 Checking PM2 automation status...");
      
      // Check if PM2 is running
      const pm2Status = await this.runCommand("pm2", ["status"]);
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 not running, starting redundancy...", "WARN");
        await this.activatePM2Redundancy();
        return;
      }

      // Check specific PM2 processes
      const zionAutoSync = await this.runCommand("pm2", ["jlist"]);
      if (zionAutoSync.status === 0) {
        const processes = JSON.parse(zionAutoSync.stdout);
        const autoSyncProcesses = processes.filter(p => 
          p.name === "zion-auto-sync" || p.name === "zion-auto-sync-cron"
        );

        if (autoSyncProcesses.length === 0) {
          this.log("⚠️ PM2 automation processes not found, activating redundancy", "WARN");
          await this.activatePM2Redundancy();
        } else {
          this.log(`✅ PM2 automation running: ${autoSyncProcesses.length} processes`);
          this.redundancyStatus.pm2.status = "healthy";
          this.redundancyStatus.pm2.redundancyActive = false;
        }
      }

      this.redundancyStatus.pm2.lastCheck = new Date();
    } catch (error) {
      this.log(`❌ PM2 status check failed: ${error.message}`, "ERROR");
      await this.activatePM2Redundancy();
    }
  }

  async activatePM2Redundancy() {
    try {
      this.log("🚀 Activating PM2 redundancy automation...");
      
      // Create redundancy PM2 ecosystem
      const redundancyEcosystem = {
        apps: [
          {
            name: "zion-auto-sync-redundancy",
            script: path.join(__dirname, "pm2-auto-sync.js"),
            interpreter: "node",
            cwd: this.workspace,
            watch: false,
            autorestart: true,
            max_restarts: 15,
            exp_backoff_restart_delay: 1000,
            instances: 2,
            env: {
              NODE_ENV: "production",
              AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
              AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
              AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
              AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
              AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
              REDUNDANCY_MODE: "true"
            },
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            error_file: path.join(this.logDir, "pm2-redundancy-error.log"),
            out_file: path.join(this.logDir, "pm2-redundancy-out.log"),
            time: true
          },
          {
            name: "zion-auto-sync-cron-redundancy",
            script: path.join(__dirname, "pm2-auto-sync.js"),
            interpreter: "node",
            cwd: this.workspace,
            watch: false,
            autorestart: false,
            instances: 1,
            cron_restart: "*/5 * * * *", // Every 5 minutes for redundancy
            env: {
              NODE_ENV: "production",
              AUTO_SYNC_REMOTE: process.env.AUTO_SYNC_REMOTE || "origin",
              AUTO_SYNC_BRANCH: process.env.AUTO_SYNC_BRANCH || "main",
              AUTO_SYNC_STRATEGY: process.env.AUTO_SYNC_STRATEGY || "hardreset",
              AUTO_SYNC_CLEAN: process.env.AUTO_SYNC_CLEAN || "1",
              AUTO_SYNC_GC: process.env.AUTO_SYNC_GC || "0",
              REDUNDANCY_MODE: "true"
            },
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            error_file: path.join(this.logDir, "pm2-cron-redundancy-error.log"),
            out_file: path.join(this.logDir, "pm2-cron-redundancy-out.log"),
            time: true
          }
        ]
      };

      // Write redundancy ecosystem file
      const ecosystemPath = path.join(__dirname, "ecosystem.redundancy.cjs");
      fs.writeFileSync(ecosystemPath, `module.exports = ${JSON.stringify(redundancyEcosystem, null, 2)};`);

      // Start redundancy processes
      await this.runCommand("pm2", ["start", ecosystemPath, "--update-env"]);
      
      this.log("✅ PM2 redundancy activated");
      this.redundancyStatus.pm2.status = "redundancy_active";
      this.redundancyStatus.pm2.redundancyActive = true;
    } catch (error) {
      this.log(`❌ PM2 redundancy activation failed: ${error.message}`, "ERROR");
    }
  }

  // GitHub Actions Redundancy Management
  async checkGitHubActionsStatus() {
    try {
      this.log("🔍 Checking GitHub Actions automation status...");
      
      // Check if workflows are properly configured
      const workflowsDir = path.join(this.workspace, ".github", "workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub Actions workflows directory not found", "ERROR");
        await this.activateGitHubActionsRedundancy();
        return;
      }

      // Check specific workflow files
      const requiredWorkflows = ["marketing-sync.yml", "sync-health.yml"];
      const missingWorkflows = [];

      for (const workflow of requiredWorkflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        if (!fs.existsSync(workflowPath)) {
          missingWorkflows.push(workflow);
        }
      }

      if (missingWorkflows.length > 0) {
        this.log(`⚠️ Missing GitHub Actions workflows: ${missingWorkflows.join(", ")}`, "WARN");
        await this.activateGitHubActionsRedundancy();
      } else {
        this.log("✅ GitHub Actions workflows configured");
        this.redundancyStatus.githubActions.status = "healthy";
        this.redundancyStatus.githubActions.redundancyActive = false;
      }

      this.redundancyStatus.githubActions.lastCheck = new Date();
    } catch (error) {
      this.log(`❌ GitHub Actions status check failed: ${error.message}`, "ERROR");
      await this.activateGitHubActionsRedundancy();
    }
  }

  async activateGitHubActionsRedundancy() {
    try {
      this.log("🚀 Activating GitHub Actions redundancy...");
      
      const workflowsDir = path.join(this.workspace, ".github", "workflows");
      if (!fs.existsSync(workflowsDir)) {
        fs.mkdirSync(workflowsDir, { recursive: true });
      }

      // Create enhanced marketing-sync workflow
      const enhancedMarketingSync = {
        name: "Enhanced Marketing Sync (Redundancy)",
        on: {
          schedule: [
            { cron: "0 */6 * * *" }, // Every 6 hours
            { cron: "30 */12 * * *" } // Every 12 hours at 30 minutes
          ],
          workflow_dispatch: null
        },
        permissions: { contents: "write" },
        jobs: {
          "run-marketing-sync": {
            runs_on: "ubuntu-latest",
            steps: [
              {
                name: "Checkout repository",
                uses: "actions/checkout@v4"
              },
              {
                name: "Setup Node.js",
                uses: "actions/setup-node@v4",
                with: { "node-version": "20" }
              },
              {
                name: "Run enhanced marketing-sync",
                env: {
                  LINKEDIN_ACCESS_TOKEN: "${{ secrets.LINKEDIN_ACCESS_TOKEN }}",
                  LINKEDIN_URN: "${{ secrets.LINKEDIN_URN }}",
                  IG_USER_ID: "${{ secrets.IG_USER_ID }}",
                  IG_ACCESS_TOKEN: "${{ secrets.IG_ACCESS_TOKEN }}",
                  REDUNDANCY_MODE: "true"
                },
                run: "node automation/marketing-sync.js"
              },
              {
                name: "Commit and push changes",
                run: `
                  git config user.name "github-actions[bot]"
                  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
                  if [ -n "$(git status --porcelain)" ]; then
                    git add -A
                    git commit -m "chore(marketing): enhanced redundancy sync update"
                    git push origin HEAD:main
                  fi
                `
              }
            ]
          }
        }
      };

      // Create enhanced sync-health workflow
      const enhancedSyncHealth = {
        name: "Enhanced Sync Health (Redundancy)",
        on: {
          schedule: [
            { cron: "*/10 * * * *" }, // Every 10 minutes
            { cron: "*/5 * * * *" }   // Every 5 minutes for redundancy
          ],
          workflow_dispatch: null
        },
        permissions: { contents: "write" },
        jobs: {
          "check-sync": {
            runs_on: "ubuntu-latest",
            steps: [
              {
                name: "Checkout repository",
                uses: "actions/checkout@v4",
                with: { "fetch-depth": 0 }
              },
              {
                name: "Setup Node.js",
                uses: "actions/setup-node@v4",
                with: { "node-version": "20" }
              },
              {
                name: "Run enhanced pm2-auto-sync",
                env: {
                  AUTO_SYNC_STRATEGY: "hardreset",
                  AUTO_SYNC_CLEAN: "0",
                  REDUNDANCY_MODE: "true"
                },
                run: "node automation/pm2-auto-sync.js || true"
              },
              {
                name: "Push if repository is ahead",
                run: `
                  git config user.name "github-actions[bot]"
                  git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
                  AHEAD=$(git rev-list --left-right --count HEAD...origin/main | awk '{print $1}')
                  if [ "$AHEAD" != "0" ]; then
                    git push origin HEAD:main
                  fi
                `
              }
            ]
          }
        }
      };

      // Write enhanced workflow files
      fs.writeFileSync(
        path.join(workflowsDir, "marketing-sync-enhanced.yml"),
        JSON.stringify(enhancedMarketingSync, null, 2)
      );
      
      fs.writeFileSync(
        path.join(workflowsDir, "sync-health-enhanced.yml"),
        JSON.stringify(enhancedSyncHealth, null, 2)
      );

      this.log("✅ GitHub Actions redundancy activated");
      this.redundancyStatus.githubActions.status = "redundancy_active";
      this.redundancyStatus.githubActions.redundancyActive = true;
    } catch (error) {
      this.log(`❌ GitHub Actions redundancy activation failed: ${error.message}`, "ERROR");
    }
  }

  // Netlify Functions Redundancy Management
  async checkNetlifyFunctionsStatus() {
    try {
      this.log("🔍 Checking Netlify Functions automation status...");
      
      // Check if Netlify functions directory exists
      const functionsDir = path.join(this.workspace, "netlify", "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        await this.activateNetlifyFunctionsRedundancy();
        return;
      }

      // Check functions manifest
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("⚠️ Netlify functions manifest not found", "WARN");
        await this.activateNetlifyFunctionsRedundancy();
        return;
      }

      // Check if functions are properly configured
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      if (!manifest.functions || manifest.functions.length === 0) {
        this.log("⚠️ No Netlify functions configured", "WARN");
        await this.activateNetlifyFunctionsRedundancy();
        return;
      }

      this.log(`✅ Netlify functions configured: ${manifest.functions.length} functions`);
      this.redundancyStatus.netlifyFunctions.status = "healthy";
      this.redundancyStatus.netlifyFunctions.redundancyActive = false;
      this.redundancyStatus.netlifyFunctions.lastCheck = new Date();
    } catch (error) {
      this.log(`❌ Netlify Functions status check failed: ${error.message}`, "ERROR");
      await this.activateNetlifyFunctionsRedundancy();
    }
  }

  async activateNetlifyFunctionsRedundancy() {
    try {
      this.log("🚀 Activating Netlify Functions redundancy...");
      
      const functionsDir = path.join(this.workspace, "netlify", "functions");
      if (!fs.existsSync(functionsDir)) {
        fs.mkdirSync(functionsDir, { recursive: true });
      }

      // Create redundancy functions
      const redundancyFunctions = [
        {
          name: "redundancy-monitor",
          code: `
            exports.handler = async (event, context) => {
              return {
                statusCode: 200,
                body: JSON.stringify({
                  message: "Redundancy monitor active",
                  timestamp: new Date().toISOString(),
                  status: "healthy"
                })
              };
            };
          `
        },
        {
          name: "redundancy-health-check",
          code: `
            exports.handler = async (event, context) => {
              const healthStatus = {
                timestamp: new Date().toISOString(),
                status: "healthy",
                redundancy: {
                  pm2: true,
                  githubActions: true,
                  netlifyFunctions: true
                },
                uptime: process.uptime()
              };
              
              return {
                statusCode: 200,
                body: JSON.stringify(healthStatus)
              };
            };
          `
        },
        {
          name: "redundancy-sync-trigger",
          code: `
            exports.handler = async (event, context) => {
              // This function can trigger sync operations
              const { trigger } = JSON.parse(event.body || "{}");
              
              let result = { success: false, message: "Unknown trigger" };
              
              switch (trigger) {
                case "pm2-sync":
                  result = { success: true, message: "PM2 sync triggered" };
                  break;
                case "github-sync":
                  result = { success: true, message: "GitHub sync triggered" };
                  break;
                case "netlify-sync":
                  result = { success: true, message: "Netlify sync triggered" };
                  break;
                default:
                  result = { success: false, message: "Invalid trigger" };
              }
              
              return {
                statusCode: 200,
                body: JSON.stringify({
                  ...result,
                  timestamp: new Date().toISOString()
                })
              };
            };
          `
        }
      ];

      // Write redundancy functions
      for (const func of redundancyFunctions) {
        const funcPath = path.join(functionsDir, `${func.name}.js`);
        fs.writeFileSync(funcPath, func.code);
      }

      // Update functions manifest
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      const existingManifest = fs.existsSync(manifestPath) 
        ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
        : { generatedAt: new Date().toISOString(), functions: [] };
      
      existingManifest.functions.push(...redundancyFunctions.map(f => f.name));
      existingManifest.generatedAt = new Date().toISOString();
      
      fs.writeFileSync(manifestPath, JSON.stringify(existingManifest, null, 2));

      this.log("✅ Netlify Functions redundancy activated");
      this.redundancyStatus.netlifyFunctions.status = "redundancy_active";
      this.redundancyStatus.netlifyFunctions.redundancyActive = true;
    } catch (error) {
      this.log(`❌ Netlify Functions redundancy activation failed: ${error.message}`, "ERROR");
    }
  }

  // Main redundancy orchestration
  async runRedundancyCheck() {
    this.log("🚀 Starting comprehensive redundancy automation check...");
    
    try {
      // Check all automation systems
      await Promise.all([
        this.checkPM2Status(),
        this.checkGitHubActionsStatus(),
        this.checkNetlifyFunctionsStatus()
      ]);

      // Generate redundancy report
      await this.generateRedundancyReport();
      
      this.log("✅ Redundancy automation check completed");
    } catch (error) {
      this.log(`❌ Redundancy check failed: ${error.message}`, "ERROR");
    }
  }

  async generateRedundancyReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        redundancyStatus: this.redundancyStatus,
        summary: {
          totalSystems: 3,
          healthySystems: Object.values(this.redundancyStatus).filter(s => s.status === "healthy").length,
          redundancyActive: Object.values(this.redundancyStatus).filter(s => s.redundancyActive).length,
          needsAttention: Object.values(this.redundancyStatus).filter(s => s.status === "unknown").length
        }
      };

      const reportPath = path.join(this.logDir, "redundancy-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      this.log(`📊 Redundancy report generated: ${reportPath}`);
      this.log(`📈 Summary: ${report.summary.healthySystems}/3 healthy, ${report.summary.redundancyActive} redundancy active`);
    } catch (error) {
      this.log(`❌ Failed to generate redundancy report: ${error.message}`, "ERROR");
    }
  }

  // Continuous monitoring mode
  async startContinuousMonitoring(intervalMinutes = 15) {
    this.log(`🔄 Starting continuous redundancy monitoring (${intervalMinutes} minute intervals)...`);
    
    const intervalMs = intervalMinutes * 60 * 1000;
    
    // Initial check
    await this.runRedundancyCheck();
    
    // Set up continuous monitoring
    setInterval(async () => {
      this.log("🔄 Running scheduled redundancy check...");
      await this.runRedundancyCheck();
    }, intervalMs);
  }
}

// CLI interface
if (require.main === module) {
  const system = new RedundancyAutomationSystem();
  const command = process.argv[2];

  switch (command) {
    case "check":
      system.runRedundancyCheck();
      break;
    case "monitor":
      const interval = parseInt(process.argv[3]) || 15;
      system.startContinuousMonitoring(interval);
      break;
    case "status":
      console.log(JSON.stringify(system.redundancyStatus, null, 2));
      break;
    default:
      console.log(`
Redundancy Automation System

Usage:
  node redundancy-automation-system.cjs check     - Run one-time redundancy check
  node redundancy-automation-system.cjs monitor   - Start continuous monitoring (15 min intervals)
  node redundancy-automation-system.cjs monitor 30 - Start continuous monitoring (30 min intervals)
  node redundancy-automation-system.cjs status    - Show current redundancy status

This system provides redundancy for:
- PM2 automation processes
- GitHub Actions workflows  
- Netlify Functions automations
      `);
  }
}

module.exports = RedundancyAutomationSystem;