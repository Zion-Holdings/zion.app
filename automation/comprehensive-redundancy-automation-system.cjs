#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyAutomationSystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-automation.log");
    this.statusFile = path.join(this.workspace, "automation/comprehensive-redundancy-status.json");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems with full coverage
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // All PM2 Process Groups with complete coverage
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator"
        ],
        fastads: ["fast-ads-orchestrator", "fast-ads-scheduler"],
        cron: ["cron-automation-system", "cron-scheduler"],
        enhanced: [
          "enhanced-pm2-redundancy-manager",
          "enhanced-github-actions-redundancy-manager",
          "enhanced-netlify-functions-redundancy-manager"
        ],
        comprehensive: [
          "comprehensive-pm2-redundancy",
          "comprehensive-github-actions-redundancy",
          "comprehensive-netlify-functions-redundancy"
        ],
        ultimate: [
          "ultimate-redundancy-master",
          "ultimate-redundancy-orchestrator"
        ]
      },
      
      // All GitHub Actions Workflows with complete coverage
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions from manifest with complete coverage
      netlifyFunctions: [
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
      
      // Redundancy intervals (in minutes)
      intervals: {
        pm2: 5,
        github: 15,
        netlify: 10,
        health: 2,
        backup: 60
      }
    };
    
    this.status = {
      lastUpdate: new Date().toISOString(),
      pm2: { status: "unknown", processes: {}, lastCheck: null },
      github: { status: "unknown", workflows: {}, lastCheck: null },
      netlify: { status: "unknown", functions: {}, lastCheck: null },
      health: { status: "unknown", score: 0, lastCheck: null },
      redundancy: { status: "unknown", coverage: 0, lastCheck: null }
    };
    
    this.loadStatus();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    
    if (level === "ERROR") {
      console.error(`[${timestamp}] [${level}] ${message}`);
    } else if (level === "WARN") {
      console.warn(`[${timestamp}] [${level}] ${message}`);
    } else {
      console.log(`[${timestamp}] [${level}] ${message}`);
    }
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        this.status = { ...this.status, ...JSON.parse(fs.readFileSync(this.statusFile, 'utf8')) };
      }
    } catch (error) {
      this.log(`Failed to load status: ${error.message}`, "ERROR");
    }
  }

  saveStatus() {
    try {
      this.status.lastUpdate = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to save status: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Redundancy() {
    this.log("Checking PM2 redundancy coverage...");
    
    try {
      // Check PM2 status
      const pm2Status = execSync("pm2 status", { encoding: 'utf8' });
      const pm2Processes = [];
      
      // Parse PM2 status output manually since --json might not be available
      const lines = pm2Status.split('\n');
      for (const line of lines) {
        if (line.includes('│') && !line.includes('App name')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4) {
            pm2Processes.push({
              name: parts[0],
              pm2_env: {
                status: parts[1] === 'online' ? 'online' : 'offline',
                pm_uptime: Date.now()
              },
              monit: {
                memory: 0,
                cpu: 0
              }
            });
          }
        }
      }
      
      let coverage = 0;
      let totalProcesses = 0;
      let runningProcesses = 0;
      
      // Check each ecosystem
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          totalProcesses++;
          try {
            const ecosystemConfig = require(path.resolve(ecosystem));
            if (ecosystemConfig.apps) {
              for (const app of ecosystemConfig.apps) {
                const process = pm2Processes.find(p => p.name === app.name);
                if (process && process.pm2_env && process.pm2_env.status === "online") {
                  runningProcesses++;
                  this.status.pm2.processes[app.name] = {
                    status: "online",
                    ecosystem: ecosystem,
                    uptime: process.pm2_env.pm_uptime,
                    memory: process.monit.memory,
                    cpu: process.monit.cpu
                  };
                } else {
                  this.status.pm2.processes[app.name] = {
                    status: "offline",
                    ecosystem: ecosystem,
                    error: "Process not running"
                  };
                }
              }
            }
          } catch (error) {
            this.log(`Failed to load ecosystem ${ecosystem}: ${error.message}`, "ERROR");
          }
        }
      }
      
      coverage = totalProcesses > 0 ? (runningProcesses / totalProcesses) * 100 : 0;
      
      this.status.pm2.status = coverage >= 80 ? "healthy" : coverage >= 50 ? "degraded" : "critical";
      this.status.pm2.lastCheck = new Date().toISOString();
      
      this.log(`PM2 redundancy coverage: ${coverage.toFixed(1)}% (${runningProcesses}/${totalProcesses})`);
      
      return { coverage, status: this.status.pm2.status };
    } catch (error) {
      this.log(`PM2 redundancy check failed: ${error.message}`, "ERROR");
      this.status.pm2.status = "error";
      this.status.pm2.lastCheck = new Date().toISOString();
      return { coverage: 0, status: "error" };
    }
  }

  async checkGitHubActionsRedundancy() {
    this.log("Checking GitHub Actions redundancy coverage...");
    
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      let coverage = 0;
      let totalWorkflows = 0;
      let activeWorkflows = 0;
      
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));
        totalWorkflows = workflowFiles.length;
        
        for (const workflow of workflowFiles) {
          try {
            const workflowPath = path.join(workflowsDir, workflow);
            const workflowContent = fs.readFileSync(workflowPath, 'utf8');
            
            // Check if workflow has backup
            const hasBackup = workflowFiles.some(f => f.includes('backup') && f.includes(workflow.replace('.yml', '')));
            const isActive = !workflowContent.includes('disabled: true');
            
            if (isActive) {
              activeWorkflows++;
              this.status.github.workflows[workflow] = {
                status: "active",
                hasBackup: hasBackup,
                lastModified: fs.statSync(workflowPath).mtime.toISOString()
              };
            } else {
              this.status.github.workflows[workflow] = {
                status: "disabled",
                hasBackup: hasBackup,
                lastModified: fs.statSync(workflowPath).mtime.toISOString()
              };
            }
          } catch (error) {
            this.log(`Failed to check workflow ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
      
      coverage = totalWorkflows > 0 ? (activeWorkflows / totalWorkflows) * 100 : 0;
      
      this.status.github.status = coverage >= 80 ? "healthy" : coverage >= 50 ? "degraded" : "critical";
      this.status.github.lastCheck = new Date().toISOString();
      
      this.log(`GitHub Actions redundancy coverage: ${coverage.toFixed(1)}% (${activeWorkflows}/${totalWorkflows})`);
      
      return { coverage, status: this.status.github.status };
    } catch (error) {
      this.log(`GitHub Actions redundancy check failed: ${error.message}`, "ERROR");
      this.status.github.status = "error";
      this.status.github.lastCheck = new Date().toISOString();
      return { coverage: 0, status: "error" };
    }
  }

  async checkNetlifyFunctionsRedundancy() {
    this.log("Checking Netlify Functions redundancy coverage...");
    
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      let coverage = 0;
      let totalFunctions = 0;
      let activeFunctions = 0;
      
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          if (manifest.functions && Array.isArray(manifest.functions)) {
            totalFunctions = manifest.functions.length;
            
            for (const funcName of manifest.functions) {
              // Check if function file exists
              const funcPath = path.join(functionsDir, `${funcName}.js`);
              const funcPathCjs = path.join(functionsDir, `${funcName}.cjs`);
              
              let funcExists = false;
              let funcStatus = "missing";
              
              if (fs.existsSync(funcPath) || fs.existsSync(funcPathCjs)) {
                funcExists = true;
                const actualPath = fs.existsSync(funcPath) ? funcPath : funcPathCjs;
                
                try {
                  const funcContent = fs.readFileSync(actualPath, 'utf8');
                  
                  // Check if function is properly structured
                  const hasExports = funcContent.includes('exports.handler') || funcContent.includes('module.exports');
                  const hasErrorHandling = funcContent.includes('try') && funcContent.includes('catch');
                  const hasLogging = funcContent.includes('console.log') || funcContent.includes('console.error');
                  
                  if (hasExports && hasErrorHandling && hasLogging) {
                    activeFunctions++;
                    funcStatus = "active";
                  } else {
                    funcStatus = "incomplete";
                  }
                  
                  this.status.netlify.functions[funcName] = {
                    status: funcStatus,
                    hasExports,
                    hasErrorHandling,
                    hasLogging,
                    lastModified: fs.statSync(actualPath).mtime.toISOString()
                  };
                } catch (error) {
                  this.status.netlify.functions[funcName] = {
                    status: "error",
                    error: error.message,
                    lastModified: new Date().toISOString()
                  };
                }
              } else {
                this.status.netlify.functions[funcName] = {
                  status: "missing",
                  error: "Function file not found",
                  lastModified: new Date().toISOString()
                };
              }
            }
          }
        } catch (error) {
          this.log(`Failed to parse functions manifest: ${error.message}`, "ERROR");
        }
      }
      
      coverage = totalFunctions > 0 ? (activeFunctions / totalFunctions) * 100 : 0;
      
      this.status.netlify.status = coverage >= 80 ? "healthy" : coverage >= 50 ? "degraded" : "critical";
      this.status.netlify.lastCheck = new Date().toISOString();
      
      this.log(`Netlify Functions redundancy coverage: ${coverage.toFixed(1)}% (${activeFunctions}/${totalFunctions})`);
      
      return { coverage, status: this.status.netlify.status };
    } catch (error) {
      this.log(`Netlify Functions redundancy check failed: ${error.message}`, "ERROR");
      this.status.netlify.status = "error";
      this.status.netlify.lastCheck = new Date().toISOString();
      return { coverage: 0, status: "error" };
    }
  }

  async checkOverallHealth() {
    this.log("Checking overall system health...");
    
    try {
      const pm2Health = await this.checkPM2Redundancy();
      const githubHealth = await this.checkGitHubActionsRedundancy();
      const netlifyHealth = await this.checkNetlifyFunctionsRedundancy();
      
      // Calculate overall health score
      const totalCoverage = (pm2Health.coverage + githubHealth.coverage + netlifyHealth.coverage) / 3;
      
      let overallStatus = "unknown";
      if (totalCoverage >= 80) overallStatus = "healthy";
      else if (totalCoverage >= 60) overallStatus = "degraded";
      else if (totalCoverage >= 40) overallStatus = "critical";
      else overallStatus = "failed";
      
      this.status.health.status = overallStatus;
      this.status.health.score = totalCoverage;
      this.status.health.lastCheck = new Date().toISOString();
      
      this.status.redundancy.status = overallStatus;
      this.status.redundancy.coverage = totalCoverage;
      this.status.redundancy.lastCheck = new Date().toISOString();
      
      this.log(`Overall health score: ${totalCoverage.toFixed(1)}% - Status: ${overallStatus}`);
      
      this.saveStatus();
      
      return { score: totalCoverage, status: overallStatus };
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return { score: 0, status: "error" };
    }
  }

  async startRedundancyMonitoring() {
    this.log("Starting comprehensive redundancy monitoring...");
    
    // Start monitoring loops
    setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.health * 60 * 1000);
    
    setInterval(async () => {
      await this.checkPM2Redundancy();
    }, this.config.intervals.pm2 * 60 * 1000);
    
    setInterval(async () => {
      await this.checkGitHubActionsRedundancy();
    }, this.config.intervals.github * 60 * 1000);
    
    setInterval(async () => {
      await this.checkNetlifyFunctionsRedundancy();
    }, this.config.intervals.netlify * 60 * 1000);
    
    // Initial health check
    await this.checkOverallHealth();
    
    this.log("Comprehensive redundancy monitoring started successfully");
  }

  async createRedundancyBackups() {
    this.log("Creating redundancy backups...");
    
    try {
      const backupDir = path.join(this.workspace, "automation/backups/redundancy");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      // Backup PM2 ecosystems
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          const backupPath = path.join(backupDir, `${ecosystem}.${timestamp}.backup`);
          fs.copyFileSync(ecosystem, backupPath);
        }
      }
      
      // Backup GitHub workflows
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (fs.existsSync(workflowsDir)) {
        const workflowsBackupDir = path.join(backupDir, `workflows.${timestamp}`);
        fs.mkdirSync(workflowsBackupDir, { recursive: true });
        
        const workflowFiles = fs.readdirSync(workflowsDir);
        for (const workflow of workflowFiles) {
          if (workflow.endsWith('.yml')) {
            fs.copyFileSync(
              path.join(workflowsDir, workflow),
              path.join(workflowsBackupDir, workflow)
            );
          }
        }
      }
      
      // Backup Netlify functions
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (fs.existsSync(functionsDir)) {
        const functionsBackupDir = path.join(backupDir, `functions.${timestamp}`);
        fs.mkdirSync(functionsBackupDir, { recursive: true });
        
        const functionFiles = fs.readdirSync(functionsDir);
        for (const func of functionFiles) {
          if (func.endsWith('.js') || func.endsWith('.cjs')) {
            fs.copyFileSync(
              path.join(functionsDir, func),
              path.join(functionsBackupDir, func)
            );
          }
        }
      }
      
      this.log("Redundancy backups created successfully");
      return true;
    } catch (error) {
      this.log(`Failed to create redundancy backups: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return this.status;
  }

  async runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
        cwd: this.workspace
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
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        reject(error);
      });
    });
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveRedundancyAutomationSystem();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      system.startRedundancyMonitoring();
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.checkOverallHealth().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'backup':
      system.createRedundancyBackups().then(result => {
        console.log(result ? 'Backups created successfully' : 'Backup failed');
      });
      break;
    case 'pm2':
      system.checkPM2Redundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'github':
      system.checkGitHubActionsRedundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    case 'netlify':
      system.checkNetlifyFunctionsRedundancy().then(result => {
        console.log(JSON.stringify(result, null, 2));
      });
      break;
    default:
      console.log(`
Comprehensive Redundancy Automation System

Usage: node comprehensive-redundancy-automation-system.cjs <command>

Commands:
  start     - Start redundancy monitoring
  status    - Show system status
  health    - Check overall health
  backup    - Create redundancy backups
  pm2       - Check PM2 redundancy
  github    - Check GitHub Actions redundancy
  netlify   - Check Netlify Functions redundancy

Examples:
  node comprehensive-redundancy-automation-system.cjs start
  node comprehensive-redundancy-automation-system.cjs status
      `);
  }
}

module.exports = ComprehensiveRedundancyAutomationSystem;