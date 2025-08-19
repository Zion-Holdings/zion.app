#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyMaster {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "ultimate-redundancy-master.log");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // All PM2 Process Groups
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
        ]
      },
      
      // All GitHub Actions Workflows
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions from manifest
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
      
      // All automation scripts
      automationScripts: [
        "pm2-auto-sync.js",
        "marketing-sync.js",
        "git-sync.cjs",
        "redundancy-automation-system.cjs",
        "redundancy-health-monitor.cjs",
        "redundancy-git-sync.cjs",
        "redundancy-build-monitor.cjs",
        "pm2-redundancy-monitor.cjs",
        "comprehensive-redundancy-orchestrator.cjs",
        "github-actions-redundancy-manager.cjs",
        "netlify-functions-redundancy-manager.cjs",
        "pm2-redundancy-manager.cjs",
        "ultimate-redundancy-master.cjs",
        "build-failure-recovery.cjs",
        "comprehensive-github-actions-redundancy.cjs",
        "comprehensive-monitoring-dashboard.cjs",
        "comprehensive-netlify-functions-redundancy.cjs",
        "comprehensive-pm2-redundancy.cjs",
        "comprehensive-redundancy-system.cjs",
        "continuous-build-monitor.cjs",
        "enhanced-git-sync-orchestrator.cjs",
        "enhanced-github-actions-redundancy.cjs",
        "enhanced-netlify-functions-redundancy.cjs",
        "enhanced-netlify-healer.cjs",
        "enhanced-pm2-redundancy.cjs",
        "footer-injector.cjs",
        "git-sync-cron.sh",
        "git-sync.cjs",
        "github-actions-backup-manager.cjs",
        "github-actions-redundancy.cjs",
        "netlify-functions-redundancy.cjs",
        "nextjs-page-validator.cjs",
        "master-build-orchestrator.cjs",
        "master-redundancy-orchestrator.cjs",
        "pre-build-health-check.cjs",
        "redundancy-config.json"
      ]
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], ecosystems: [] },
      github: { healthy: false, workflows: [], backups: [] },
      netlify: { healthy: false, functions: [], manifest: null },
      automation: { healthy: false, scripts: [], logs: [] }
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  async executeCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
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
        resolve({
          code,
          stdout: stdout.trim(),
          stderr: stderr.trim(),
          success: code === 0
        });
      });
    });
  }

  async checkPM2Status() {
    this.log("Checking PM2 status...");
    
    try {
      // Check PM2 daemon
      const pm2Status = await this.executeCommand('pm2', ['status']);
      if (!pm2Status.success) {
        this.log("PM2 daemon not running, starting...", "WARN");
        await this.executeCommand('pm2', ['start']);
      }
      
      // Check all ecosystems
      for (const ecosystem of this.config.pm2Ecosystems) {
        const ecosystemPath = path.join(this.workspace, ecosystem);
        if (fs.existsSync(ecosystemPath)) {
          this.log(`Checking ecosystem: ${ecosystem}`);
          
          // Try to start/restart ecosystem
          const result = await this.executeCommand('pm2', ['start', ecosystem, '--update-env']);
          if (result.success) {
            this.log(`Successfully started ecosystem: ${ecosystem}`);
          } else {
            this.log(`Failed to start ecosystem: ${ecosystem}`, "ERROR");
          }
        }
      }
      
      // Check process groups
      const pm2List = await this.executeCommand('pm2', ['list']);
      if (pm2List.success) {
        this.status.pm2.processes = pm2List.stdout.split('\n').filter(line => line.trim());
        this.status.pm2.healthy = this.status.pm2.processes.length > 0;
      }
      
    } catch (error) {
      this.log(`PM2 check failed: ${error.message}`, "ERROR");
    }
  }

  async checkGitHubActions() {
    this.log("Checking GitHub Actions workflows...");
    
    try {
      const workflowsDir = path.join(this.workspace, '.github/workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
        
        for (const workflow of workflows) {
          const workflowPath = path.join(workflowsDir, workflow);
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Check if workflow has proper triggers
          if (content.includes('schedule:') || content.includes('workflow_dispatch:')) {
            this.log(`Workflow ${workflow} has proper triggers`);
          } else {
            this.log(`Workflow ${workflow} missing triggers`, "WARN");
          }
          
          // Check for backup workflows
          if (workflow.includes('backup')) {
            this.status.github.backups.push(workflow);
          } else {
            this.status.github.workflows.push(workflow);
          }
        }
        
        this.status.github.healthy = this.status.github.workflows.length > 0;
      }
      
    } catch (error) {
      this.log(`GitHub Actions check failed: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyFunctions() {
    this.log("Checking Netlify functions...");
    
    try {
      const manifestPath = path.join(this.workspace, 'netlify/functions/functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        this.status.netlify.manifest = manifest;
        this.status.netlify.functions = manifest.functions || [];
        
        // Check if functions directory exists
        const functionsDir = path.join(this.workspace, 'netlify/functions');
        if (fs.existsSync(functionsDir)) {
          const functionFiles = fs.readdirSync(functionsDir).filter(file => file.endsWith('.js') || file.endsWith('.cjs'));
          this.log(`Found ${functionFiles.length} function files`);
        }
        
        this.status.netlify.healthy = this.status.netlify.functions.length > 0;
      }
      
    } catch (error) {
      this.log(`Netlify functions check failed: ${error.message}`, "ERROR");
    }
  }

  async checkAutomationScripts() {
    this.log("Checking automation scripts...");
    
    try {
      const automationDir = path.join(this.workspace, 'automation');
      if (fs.existsSync(automationDir)) {
        const scripts = fs.readdirSync(automationDir).filter(file => 
          file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.sh')
        );
        
        this.status.automation.scripts = scripts;
        
        // Check log files
        const logsDir = path.join(automationDir, 'logs');
        if (fs.existsSync(logsDir)) {
          const logFiles = fs.readdirSync(logsDir).filter(file => file.endsWith('.log'));
          this.status.automation.logs = logFiles;
        }
        
        this.status.automation.healthy = this.status.automation.scripts.length > 0;
      }
      
    } catch (error) {
      this.log(`Automation scripts check failed: ${error.message}`, "ERROR");
    }
  }

  async createRedundancyBackups() {
    this.log("Creating redundancy backups...");
    
    try {
      const backupDir = path.join(this.workspace, 'automation/backups/ultimate-redundancy');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      
      // Backup PM2 ecosystems
      for (const ecosystem of this.config.pm2Ecosystems) {
        const sourcePath = path.join(this.workspace, ecosystem);
        if (fs.existsSync(sourcePath)) {
          const backupPath = path.join(backupDir, `${ecosystem}.${timestamp}.backup`);
          fs.copyFileSync(sourcePath, backupPath);
          this.log(`Backed up ${ecosystem}`);
        }
      }
      
      // Backup GitHub workflows
      const workflowsDir = path.join(this.workspace, '.github/workflows');
      if (fs.existsSync(workflowsDir)) {
        const workflowsBackupDir = path.join(backupDir, 'github-workflows', timestamp);
        fs.mkdirSync(workflowsBackupDir, { recursive: true });
        
        const workflows = fs.readdirSync(workflowsDir);
        for (const workflow of workflows) {
          const sourcePath = path.join(workflowsDir, workflow);
          const backupPath = path.join(workflowsBackupDir, workflow);
          fs.copyFileSync(sourcePath, backupPath);
        }
        this.log("Backed up GitHub workflows");
      }
      
      // Backup Netlify functions manifest
      const manifestPath = path.join(this.workspace, 'netlify/functions/functions-manifest.json');
      if (fs.existsSync(manifestPath)) {
        const backupPath = path.join(backupDir, `functions-manifest.${timestamp}.backup`);
        fs.copyFileSync(manifestPath, backupPath);
        this.log("Backed up Netlify functions manifest");
      }
      
      this.log("Redundancy backups created successfully");
      
    } catch (error) {
      this.log(`Failed to create redundancy backups: ${error.message}`, "ERROR");
    }
  }

  async startRedundancyServices() {
    this.log("Starting redundancy services...");
    
    try {
      // Start PM2 redundancy processes
      const pm2RedundancyScripts = [
        'pm2-redundancy-monitor.cjs',
        'comprehensive-redundancy-orchestrator.cjs',
        'github-actions-redundancy-manager.cjs',
        'netlify-functions-redundancy-manager.cjs'
      ];
      
      for (const script of pm2RedundancyScripts) {
        const scriptPath = path.join(this.workspace, 'automation', script);
        if (fs.existsSync(scriptPath)) {
          this.log(`Starting ${script}`);
          await this.executeCommand('node', [scriptPath, 'start']);
        }
      }
      
      // Start monitoring processes
      const monitoringScripts = [
        'redundancy-health-monitor.cjs',
        'redundancy-build-monitor.cjs',
        'continuous-build-monitor.cjs'
      ];
      
      for (const script of monitoringScripts) {
        const scriptPath = path.join(this.workspace, 'automation', script);
        if (fs.existsSync(scriptPath)) {
          this.log(`Starting ${script}`);
          await this.executeCommand('node', [scriptPath, 'start']);
        }
      }
      
      this.log("Redundancy services started");
      
    } catch (error) {
      this.log(`Failed to start redundancy services: ${error.message}`, "ERROR");
    }
  }

  async generateHealthReport() {
    this.log("Generating health report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: this.status.pm2.healthy && this.status.github.healthy && this.status.netlify.healthy && this.status.automation.healthy,
      pm2: {
        healthy: this.status.pm2.healthy,
        ecosystems: this.config.pm2Ecosystems,
        processes: this.status.pm2.processes.length,
        status: this.status.pm2
      },
      github: {
        healthy: this.status.github.healthy,
        workflows: this.status.github.workflows,
        backups: this.status.github.backups,
        status: this.status.github
      },
      netlify: {
        healthy: this.status.netlify.healthy,
        functions: this.status.netlify.functions.length,
        manifest: this.status.netlify.manifest ? 'Present' : 'Missing',
        status: this.status.netlify
      },
      automation: {
        healthy: this.status.automation.healthy,
        scripts: this.status.automation.scripts.length,
        logs: this.status.automation.logs.length,
        status: this.status.automation
      }
    };
    
    const reportPath = path.join(this.workspace, 'automation/logs/ultimate-redundancy-health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportPath}`);
    return report;
  }

  async runFullCheck() {
    this.log("=== ULTIMATE REDUNDANCY MASTER - FULL SYSTEM CHECK ===");
    
    await this.checkPM2Status();
    await this.checkGitHubActions();
    await this.checkNetlifyFunctions();
    await this.checkAutomationScripts();
    await this.createRedundancyBackups();
    await this.startRedundancyServices();
    
    const report = await this.generateHealthReport();
    
    this.log("=== CHECK COMPLETE ===");
    this.log(`Overall Health: ${report.overallHealth ? 'HEALTHY' : 'UNHEALTHY'}`);
    this.log(`PM2: ${report.pm2.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${report.pm2.processes} processes)`);
    this.log(`GitHub Actions: ${report.github.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${report.github.workflows.length} workflows)`);
    this.log(`Netlify Functions: ${report.netlify.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${report.netlify.functions} functions)`);
    this.log(`Automation Scripts: ${report.automation.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${report.automation.scripts.length} scripts)`);
    
    return report;
  }

  async startContinuousMonitoring() {
    this.log("Starting continuous monitoring...");
    
    // Run full check every 5 minutes
    setInterval(async () => {
      await this.runFullCheck();
    }, 5 * 60 * 1000);
    
    // Run initial check
    await this.runFullCheck();
    
    this.log("Continuous monitoring started");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancyMaster();
  const command = process.argv[2] || 'check';
  
  switch (command) {
    case 'check':
      orchestrator.runFullCheck().then(() => process.exit(0));
      break;
    case 'monitor':
      orchestrator.startContinuousMonitoring();
      break;
    case 'start':
      orchestrator.startRedundancyServices().then(() => process.exit(0));
      break;
    case 'backup':
      orchestrator.createRedundancyBackups().then(() => process.exit(0));
      break;
    case 'health':
      orchestrator.generateHealthReport().then(() => process.exit(0));
      break;
    default:
      console.log(`
Ultimate Redundancy Master - Usage:
  node ultimate-redundancy-master.cjs [command]

Commands:
  check     - Run full system check
  monitor   - Start continuous monitoring
  start     - Start redundancy services
  backup    - Create redundancy backups
  health    - Generate health report

Examples:
  node ultimate-redundancy-master.cjs check
  node ultimate-redundancy-master.cjs monitor
      `);
      process.exit(1);
  }
}

module.exports = UltimateRedundancyMaster;