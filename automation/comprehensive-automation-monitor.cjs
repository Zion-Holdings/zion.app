#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const http = require("http");
const url = require("url");

class ComprehensiveAutomationMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-automation-monitor.log");
    this.statusFile = path.join(this.workspace, "automation/automation-monitor-status.json");
    this.ensureLogDir();
    
    this.config = {
      // Monitoring Configuration
      monitoring: {
        enabled: true,
        interval: 30000, // 30 seconds
        alertThresholds: {
          cpu: 80,
          memory: 75,
          disk: 85,
          responseTime: 5000
        },
        retention: {
          metrics: 1000,
          alerts: 100
        }
      },
      
      // PM2 Monitoring
      pm2: {
        enabled: true,
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-master-orchestrator",
          "redundancy-health-monitor",
          "comprehensive-redundancy-orchestrator",
          "ultimate-redundancy-master"
        ],
        metrics: ["cpu", "memory", "uptime", "restarts", "status"]
      },
      
      // GitHub Actions Monitoring
      github: {
        enabled: true,
        workflows: [
          "marketing-sync",
          "sync-health",
          "marketing-sync-backup",
          "sync-health-backup"
        ],
        metrics: ["lastRun", "status", "duration", "successRate"]
      },
      
      // Netlify Functions Monitoring
      netlify: {
        enabled: true,
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
        metrics: ["availability", "responseTime", "errorRate", "lastExecution"]
      },
      
      // System Monitoring
      system: {
        enabled: true,
        metrics: ["cpu", "memory", "disk", "network", "processes"]
      },
      
      // Web Dashboard Configuration
      dashboard: {
        enabled: true,
        port: 3001,
        host: "localhost",
        refreshInterval: 5000
      }
    };
    
    this.metrics = {
      pm2: {},
      github: {},
      netlify: {},
      system: {},
      alerts: [],
      lastUpdate: null
    };
    
    this.isRunning = false;
    this.monitoringInterval = null;
    this.httpServer = null;
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
    console.log(`[${level}] ${message}`);
  }

  async start() {
    if (this.isRunning) {
      this.log("Monitor is already running", "WARN");
      return;
    }

    this.log("Starting Comprehensive Automation Monitor...", "INFO");
    this.isRunning = true;

    // Start monitoring
    this.startMonitoring();
    
    // Start web dashboard if enabled
    if (this.config.dashboard.enabled) {
      this.startWebDashboard();
    }
    
    this.log("Comprehensive Automation Monitor started successfully", "INFO");
  }

  async stop() {
    if (!this.isRunning) {
      this.log("Monitor is not running", "WARN");
      return;
    }

    this.log("Stopping Comprehensive Automation Monitor...", "INFO");
    this.isRunning = false;

    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }

    if (this.httpServer) {
      this.httpServer.close();
      this.httpServer = null;
    }

    this.log("Comprehensive Automation Monitor stopped", "INFO");
  }

  startMonitoring() {
    this.log("Starting monitoring...", "INFO");
    
    // Perform initial monitoring
    this.performMonitoring();
    
    // Set up interval
    this.monitoringInterval = setInterval(() => {
      if (this.isRunning) {
        this.performMonitoring();
      }
    }, this.config.monitoring.interval);
  }

  async performMonitoring() {
    try {
      this.log("Performing comprehensive monitoring...", "INFO");
      
      // Monitor all components
      await Promise.allSettled([
        this.monitorPM2(),
        this.monitorGitHubActions(),
        this.monitorNetlifyFunctions(),
        this.monitorSystem()
      ]);
      
      // Check for alerts
      this.checkAlerts();
      
      // Update status
      this.updateStatus();
      
      this.metrics.lastUpdate = new Date().toISOString();
      this.log("Monitoring completed", "INFO");
      
    } catch (error) {
      this.log(`Monitoring failed: ${error.message}`, "ERROR");
    }
  }

  async monitorPM2() {
    if (!this.config.pm2.enabled) return;
    
    try {
      const pm2Status = execSync("pm2 status --json", { encoding: "utf8" });
      const processes = JSON.parse(pm2Status);
      
      this.metrics.pm2 = {
        timestamp: new Date().toISOString(),
        processes: {},
        summary: {
          total: processes.length,
          online: 0,
          offline: 0,
          errored: 0
        }
      };
      
      processes.forEach(proc => {
        const processName = proc.name;
        const isMonitored = this.config.pm2.processes.includes(processName);
        
        if (isMonitored) {
          this.metrics.pm2.processes[processName] = {
            status: proc.pm2_env.status,
            cpu: proc.monit.cpu || 0,
            memory: proc.monit.memory || 0,
            uptime: proc.pm2_env.pm_uptime || 0,
            restarts: proc.pm2_env.restart_time || 0,
            pid: proc.pid,
            pm_id: proc.pm_id
          };
          
          // Update summary
          switch (proc.pm2_env.status) {
            case "online":
              this.metrics.pm2.summary.online++;
              break;
            case "offline":
              this.metrics.pm2.summary.offline++;
              break;
            case "errored":
              this.metrics.pm2.summary.errored++;
              break;
          }
        }
      });
      
    } catch (error) {
      this.log(`PM2 monitoring failed: ${error.message}`, "ERROR");
      this.metrics.pm2 = {
        timestamp: new Date().toISOString(),
        error: error.message,
        processes: {},
        summary: { total: 0, online: 0, offline: 0, errored: 0 }
      };
    }
  }

  async monitorGitHubActions() {
    if (!this.config.github.enabled) return;
    
    try {
      this.metrics.github = {
        timestamp: new Date().toISOString(),
        workflows: {},
        summary: {
          total: this.config.github.workflows.length,
          available: 0,
          missing: 0
        }
      };
      
      for (const workflow of this.config.github.workflows) {
        const workflowFile = `.github/workflows/${workflow}.yml`;
        const exists = fs.existsSync(workflowFile);
        
        this.metrics.github.workflows[workflow] = {
          exists,
          lastModified: exists ? fs.statSync(workflowFile).mtime.toISOString() : null,
          size: exists ? fs.statSync(workflowFile).size : 0
        };
        
        if (exists) {
          this.metrics.github.summary.available++;
        } else {
          this.metrics.github.summary.missing++;
        }
      }
      
    } catch (error) {
      this.log(`GitHub Actions monitoring failed: ${error.message}`, "ERROR");
      this.metrics.github = {
        timestamp: new Date().toISOString(),
        error: error.message,
        workflows: {},
        summary: { total: 0, available: 0, missing: 0 }
      };
    }
  }

  async monitorNetlifyFunctions() {
    if (!this.config.netlify.enabled) return;
    
    try {
      this.metrics.netlify = {
        timestamp: new Date().toISOString(),
        functions: {},
        summary: {
          total: this.config.netlify.functions.length,
          available: 0,
          missing: 0
        }
      };
      
      const manifestPath = "netlify/functions/functions-manifest.json";
      let manifest = null;
      
      if (fs.existsSync(manifestPath)) {
        try {
          manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        } catch (error) {
          this.log(`Failed to parse Netlify manifest: ${error.message}`, "WARN");
        }
      }
      
      for (const func of this.config.netlify.functions) {
        const isAvailable = manifest && manifest.functions && manifest.functions.includes(func);
        
        this.metrics.netlify.functions[func] = {
          available: isAvailable,
          lastModified: manifest ? new Date(manifest.generatedAt || Date.now()).toISOString() : null
        };
        
        if (isAvailable) {
          this.metrics.netlify.summary.available++;
        } else {
          this.metrics.netlify.summary.missing++;
        }
      }
      
    } catch (error) {
      this.log(`Netlify Functions monitoring failed: ${error.message}`, "ERROR");
      this.metrics.netlify = {
        timestamp: new Date().toISOString(),
        error: error.message,
        functions: {},
        summary: { total: 0, available: 0, missing: 0 }
      };
    }
  }

  async monitorSystem() {
    if (!this.config.system.enabled) return;
    
    try {
      this.metrics.system = {
        timestamp: new Date().toISOString(),
        cpu: await this.getCPUUsage(),
        memory: await this.getMemoryUsage(),
        disk: await this.getDiskUsage(),
        processes: await this.getProcessCount(),
        uptime: process.uptime()
      };
      
    } catch (error) {
      this.log(`System monitoring failed: ${error.message}`, "ERROR");
      this.metrics.system = {
        timestamp: new Date().toISOString(),
        error: error.message
      };
    }
  }

  async getCPUUsage() {
    try {
      const topOutput = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1", { encoding: "utf8" });
      return parseFloat(topOutput.trim());
    } catch {
      return 0;
    }
  }

  async getMemoryUsage() {
    try {
      const freeOutput = execSync("free | grep Mem | awk '{printf \"%.1f\", $3/$2 * 100.0}'", { encoding: "utf8" });
      return parseFloat(freeOutput.trim());
    } catch {
      return 0;
    }
  }

  async getDiskUsage() {
    try {
      const dfOutput = execSync("df / | tail -1 | awk '{print $5}' | cut -d'%' -f1", { encoding: "utf8" });
      return parseFloat(dfOutput.trim());
    } catch {
      return 0;
    }
  }

  async getProcessCount() {
    try {
      const psOutput = execSync("ps aux | wc -l", { encoding: "utf8" });
      return parseInt(psOutput.trim()) - 1; // Subtract header line
    } catch {
      return 0;
    }
  }

  checkAlerts() {
    const alerts = [];
    
    // Check PM2 alerts
    if (this.metrics.pm2.processes) {
      Object.entries(this.metrics.pm2.processes).forEach(([name, proc]) => {
        if (proc.status !== "online") {
          alerts.push({
            timestamp: new Date().toISOString(),
            level: "WARNING",
            component: "PM2",
            message: `Process ${name} is ${proc.status}`,
            details: proc
          });
        }
        
        if (proc.cpu > this.config.monitoring.alertThresholds.cpu) {
          alerts.push({
            timestamp: new Date().toISOString(),
            level: "WARNING",
            component: "PM2",
            message: `Process ${name} high CPU usage: ${proc.cpu}%`,
            details: proc
          });
        }
        
        if (proc.memory > this.config.monitoring.alertThresholds.memory * 1024 * 1024) {
          alerts.push({
            timestamp: new Date().toISOString(),
            level: "WARNING",
            component: "PM2",
            message: `Process ${name} high memory usage: ${(proc.memory / 1024 / 1024).toFixed(2)}MB`,
            details: proc
          });
        }
      });
    }
    
    // Check system alerts
    if (this.metrics.system.cpu > this.config.monitoring.alertThresholds.cpu) {
      alerts.push({
        timestamp: new Date().toISOString(),
        level: "WARNING",
        component: "System",
        message: `High CPU usage: ${this.metrics.system.cpu}%`,
        details: this.metrics.system
      });
    }
    
    if (this.metrics.system.memory > this.config.monitoring.alertThresholds.memory) {
      alerts.push({
        timestamp: new Date().toISOString(),
        level: "WARNING",
        component: "System",
        message: `High memory usage: ${this.metrics.system.memory}%`,
        details: this.metrics.system
      });
    }
    
    if (this.metrics.system.disk > this.config.monitoring.alertThresholds.disk) {
      alerts.push({
        timestamp: new Date().toISOString(),
        level: "WARNING",
        component: "System",
        message: `High disk usage: ${this.metrics.system.disk}%`,
        details: this.metrics.system
      });
    }
    
    // Add new alerts
    this.metrics.alerts.push(...alerts);
    
    // Trim alerts to retention limit
    if (this.metrics.alerts.length > this.config.monitoring.retention.alerts) {
      this.metrics.alerts = this.metrics.alerts.slice(-this.config.monitoring.retention.alerts);
    }
    
    // Log alerts
    alerts.forEach(alert => {
      this.log(`${alert.component}: ${alert.message}`, alert.level);
    });
  }

  startWebDashboard() {
    this.log(`Starting web dashboard on ${this.config.dashboard.host}:${this.config.dashboard.port}`, "INFO");
    
    this.httpServer = http.createServer((req, res) => {
      const parsedUrl = url.parse(req.url, true);
      const path = parsedUrl.pathname;
      
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
      
      if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
      }
      
      switch (path) {
        case '/':
        case '/metrics':
          res.writeHead(200);
          res.end(JSON.stringify(this.metrics, null, 2));
          break;
          
        case '/status':
          res.writeHead(200);
          res.end(JSON.stringify({
            status: "running",
            uptime: process.uptime(),
            lastUpdate: this.metrics.lastUpdate,
            config: this.config
          }, null, 2));
          break;
          
        case '/health':
          res.writeHead(200);
          res.end(JSON.stringify({
            status: "healthy",
            timestamp: new Date().toISOString()
          }, null, 2));
          break;
          
        default:
          res.writeHead(404);
          res.end(JSON.stringify({ error: "Not found" }, null, 2));
      }
    });
    
    this.httpServer.listen(this.config.dashboard.port, this.config.dashboard.host, () => {
      this.log(`Web dashboard started on http://${this.config.dashboard.host}:${this.config.dashboard.port}`, "INFO");
    });
    
    this.httpServer.on('error', (error) => {
      this.log(`Web dashboard error: ${error.message}`, "ERROR");
    });
  }

  updateStatus() {
    try {
      fs.writeFileSync(this.statusFile, JSON.stringify({
        status: "running",
        lastUpdate: this.metrics.lastUpdate,
        summary: {
          pm2: this.metrics.pm2.summary || {},
          github: this.metrics.github.summary || {},
          netlify: this.metrics.netlify.summary || {},
          system: this.metrics.system || {},
          alerts: this.metrics.alerts.length
        }
      }, null, 2));
    } catch (error) {
      this.log(`Failed to update status file: ${error.message}`, "ERROR");
    }
  }

  getMetrics() {
    return this.metrics;
  }

  getStatus() {
    return {
      status: "running",
      lastUpdate: this.metrics.lastUpdate,
      summary: {
        pm2: this.metrics.pm2.summary || {},
        github: this.metrics.github.summary || {},
        netlify: this.metrics.netlify.summary || {},
        system: this.metrics.system || {},
        alerts: this.metrics.alerts.length
      }
    };
  }
}

// CLI Interface
if (require.main === module) {
  const monitor = new ComprehensiveAutomationMonitor();
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      monitor.start().catch(console.error);
      break;
    case "stop":
      monitor.stop().catch(console.error);
      break;
    case "status":
      console.log(JSON.stringify(monitor.getStatus(), null, 2));
      break;
    case "metrics":
      console.log(JSON.stringify(monitor.getMetrics(), null, 2));
      break;
    default:
      console.log("Usage: node comprehensive-automation-monitor.cjs [start|stop|status|metrics]");
      process.exit(1);
  }
}

module.exports = ComprehensiveAutomationMonitor;