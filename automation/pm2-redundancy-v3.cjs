#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyV3 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "pm2-redundancy-v3.log");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems
      ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs",
        "ecosystem.comprehensive-redundancy-v3.pm2.cjs"
      ],
      
      // Critical PM2 Processes
      criticalProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "comprehensive-redundancy-v3",
        "redundancy-automation-system",
        "redundancy-health-monitor"
      ],
      
      // Process Groups
      processGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator",
          "comprehensive-redundancy-v3"
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
      
      // Recovery strategies
      recoveryStrategies: {
        restart: ["zion-auto-sync", "zion-auto-sync-cron"],
        ecosystemRestart: ["comprehensive-redundancy-v3", "redundancy-automation-system"],
        fullRestart: ["redundancy-health-monitor", "pm2-redundancy-monitor"]
      },
      
      // Monitoring intervals
      intervals: {
        healthCheck: 30000, // 30 seconds
        recoveryCheck: 60000, // 1 minute
        reportGeneration: 300000 // 5 minutes
      }
    };
    
    this.status = {
      pm2Daemon: false,
      processes: [],
      ecosystems: [],
      lastCheck: null,
      lastRecovery: null,
      recoveryCount: 0
    };
    
    this.log("PM2 Redundancy V3 initialized");
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

  async checkPM2Daemon() {
    try {
      const result = spawnSync("pm2", ["status"], { encoding: "utf8" });
      this.status.pm2Daemon = result.status === 0;
      
      if (!this.status.pm2Daemon) {
        this.log("PM2 daemon not running, attempting to start", "WARN");
        spawnSync("pm2", ["start"], { encoding: "utf8" });
        // Wait a moment and check again
        await new Promise(resolve => setTimeout(resolve, 2000));
        const retryResult = spawnSync("pm2", ["status"], { encoding: "utf8" });
        this.status.pm2Daemon = retryResult.status === 0;
      }
      
      return this.status.pm2Daemon;
    } catch (error) {
      this.log(`PM2 daemon check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const result = spawnSync("pm2", ["jlist"], { encoding: "utf8" });
      if (result.status === 0) {
        this.status.processes = JSON.parse(result.stdout);
        return this.status.processes;
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkEcosystems() {
    try {
      const ecosystemStatus = [];
      
      for (const ecosystem of this.config.ecosystems) {
        if (fs.existsSync(ecosystem)) {
          try {
            const stats = fs.statSync(ecosystem);
            ecosystemStatus.push({
              name: ecosystem,
              exists: true,
              lastModified: stats.mtime,
              size: stats.size
            });
          } catch (error) {
            ecosystemStatus.push({
              name: ecosystem,
              exists: false,
              error: error.message
            });
          }
        } else {
          ecosystemStatus.push({
            name: ecosystem,
            exists: false
          });
        }
      }
      
      this.status.ecosystems = ecosystemStatus;
      return ecosystemStatus;
    } catch (error) {
      this.log(`Ecosystem check failed: ${error.message}`, "ERROR");
      return [];
    }
  }

  async startEcosystem(ecosystemName) {
    try {
      this.log(`Starting ecosystem: ${ecosystemName}`);
      const result = spawnSync("pm2", ["start", ecosystemName, "--update-env"], { encoding: "utf8" });
      
      if (result.status === 0) {
        this.log(`Successfully started ecosystem: ${ecosystemName}`);
        return true;
      } else {
        this.log(`Failed to start ecosystem ${ecosystemName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting ecosystem ${ecosystemName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`Restarting process: ${processName}`);
      const result = spawnSync("pm2", ["restart", processName], { encoding: "utf8" });
      
      if (result.status === 0) {
        this.log(`Successfully restarted process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to restart process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopProcess(processName) {
    try {
      this.log(`Stopping process: ${processName}`);
      const result = spawnSync("pm2", ["stop", processName], { encoding: "utf8" });
      
      if (result.status === 0) {
        this.log(`Successfully stopped process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to stop process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error stopping process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deleteProcess(processName) {
    try {
      this.log(`Deleting process: ${processName}`);
      const result = spawnSync("pm2", ["delete", processName], { encoding: "utf8" });
      
      if (result.status === 0) {
        this.log(`Successfully deleted process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to delete process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error deleting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performRecovery() {
    try {
      this.log("Performing PM2 recovery...");
      this.status.lastRecovery = new Date();
      this.status.recoveryCount++;
      
      // Check PM2 daemon first
      if (!(await this.checkPM2Daemon())) {
        this.log("PM2 daemon recovery failed", "ERROR");
        return false;
      }
      
      // Get current processes
      const processes = await this.getPM2Processes();
      const processNames = processes.map(p => p.name);
      
      // Check critical processes
      let recoveryNeeded = false;
      for (const critical of this.config.criticalProcesses) {
        if (!processNames.includes(critical)) {
          this.log(`Critical process missing: ${critical}`, "WARN");
          recoveryNeeded = true;
          
          // Try to start from ecosystem if available
          let started = false;
          for (const ecosystem of this.config.ecosystems) {
            if (fs.existsSync(ecosystem)) {
              if (await this.startEcosystem(ecosystem)) {
                started = true;
                break;
              }
            }
          }
          
          if (!started) {
            this.log(`Failed to recover critical process: ${critical}`, "ERROR");
          }
        }
      }
      
      // Check for stuck processes
      for (const process of processes) {
        if (process.pm2_env && process.pm2_env.status === "errored") {
          this.log(`Process in error state: ${process.name}`, "WARN");
          recoveryNeeded = true;
          
          if (this.config.recoveryStrategies.restart.includes(process.name)) {
            await this.restartProcess(process.name);
          } else if (this.config.recoveryStrategies.fullRestart.includes(process.name)) {
            await this.stopProcess(process.name);
            await this.deleteProcess(process.name);
            // Will be restarted by ecosystem
          }
        }
      }
      
      if (!recoveryNeeded) {
        this.log("No recovery actions needed");
      }
      
      return true;
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        pm2Daemon: this.status.pm2Daemon,
        processes: {
          total: this.status.processes.length,
          running: this.status.processes.filter(p => p.pm2_env && p.pm2_env.status === "online").length,
          stopped: this.status.processes.filter(p => p.pm2_env && p.pm2_env.status === "stopped").length,
          errored: this.status.processes.filter(p => p.pm2_env && p.pm2_env.status === "errored").length
        },
        ecosystems: {
          total: this.status.ecosystems.length,
          existing: this.status.ecosystems.filter(e => e.exists).length,
          missing: this.status.ecosystems.filter(e => !e.exists).length
        },
        recovery: {
          lastRecovery: this.status.lastRecovery,
          recoveryCount: this.status.recoveryCount
        },
        lastCheck: this.status.lastCheck
      };
      
      // Save report
      const reportPath = path.join(this.logDir, "pm2-redundancy-v3-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`PM2 redundancy report generated: ${report.processes.running}/${report.processes.total} processes running`);
      return report;
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startMonitoring() {
    this.log("Starting PM2 redundancy monitoring...");
    
    // Start health monitoring
    setInterval(async () => {
      await this.checkPM2Daemon();
      await this.getPM2Processes();
      await this.checkEcosystems();
      this.status.lastCheck = new Date();
    }, this.config.intervals.healthCheck);

    // Start recovery monitoring
    setInterval(async () => {
      await this.performRecovery();
    }, this.config.intervals.recoveryCheck);

    // Start report generation
    setInterval(async () => {
      await this.generateReport();
    }, this.config.intervals.reportGeneration);

    // Initial checks
    await this.checkPM2Daemon();
    await this.getPM2Processes();
    await this.checkEcosystems();
    await this.performRecovery();
    
    this.log("PM2 redundancy monitoring started");
  }

  async getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }

  async stop() {
    this.log("Stopping PM2 redundancy monitoring...");
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new PM2RedundancyV3();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "status":
      redundancy.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "recovery":
      redundancy.performRecovery().then(success => {
        console.log(`Recovery ${success ? 'completed' : 'failed'}`);
        process.exit(success ? 0 : 1);
      });
      break;
    case "report":
      redundancy.generateReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      });
      break;
    case "check":
      Promise.all([
        redundancy.checkPM2Daemon(),
        redundancy.getPM2Processes(),
        redundancy.checkEcosystems()
      ]).then(() => {
        redundancy.getStatus().then(status => {
          console.log(JSON.stringify(status, null, 2));
          process.exit(0);
        });
      });
      break;
    default:
      console.log("Usage: node pm2-redundancy-v3.cjs [start|status|recovery|report|check]");
      process.exit(1);
  }
}

module.exports = PM2RedundancyV3;