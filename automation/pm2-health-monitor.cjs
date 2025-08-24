#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2HealthMonitor {
  constructor() {
    this.logsDir = path.join(process.cwd(), "automation", "logs");
    this.metricsDir = path.join(process.cwd(), "automation", "metrics");
    this.ensureDirectories();
    this.monitoring = false;
    this.metrics = {
      startTime: new Date().toISOString(),
      checks: 0,
      failures: 0,
      recoveries: 0,
      lastCheck: null,
      processHealth: {}
    };
  }

  ensureDirectories() {
    [this.logsDir, this.metricsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] PM2-HEALTH: ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, "pm2-health-monitor.log");
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  runCommand(command, args = []) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  getPM2Processes() {
    const result = this.runCommand("pm2", ["jlist"]);
    if (!result.success) {
      this.log(`Failed to get PM2 processes: ${result.stderr}`);
      return [];
    }
    
    try {
      return JSON.parse(result.stdout);
    } catch (error) {
      this.log(`Failed to parse PM2 processes: ${error.message}`);
      return [];
    }
  }

  getSystemMetrics() {
    const processes = this.getPM2Processes();
    const metrics = {
      totalProcesses: processes.length,
      running: 0,
      stopped: 0,
      errored: 0,
      restarting: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      uptime: 0
    };

    processes.forEach(process => {
      if (process.pm2_env) {
        const status = process.pm2_env.status;
        switch (status) {
          case "online":
            metrics.running++;
            break;
          case "stopped":
            metrics.stopped++;
            break;
          case "errored":
            metrics.errored++;
            break;
          case "restarting":
            metrics.restarting++;
            break;
        }

        if (process.monit) {
          metrics.memoryUsage += process.monit.memory || 0;
          metrics.cpuUsage += process.monit.cpu || 0;
        }

        if (process.pm2_env.pm_uptime) {
          const uptime = Date.now() - process.pm2_env.pm_uptime;
          metrics.uptime = Math.max(metrics.uptime, uptime);
        }
      }
    });

    return metrics;
  }

  checkProcessHealth() {
    const processes = this.getPM2Processes();
    const healthReport = {
      timestamp: new Date().toISOString(),
      overall: "healthy",
      issues: [],
      recommendations: []
    };

    processes.forEach(process => {
      if (process.pm2_env) {
        const processName = process.name;
        const status = process.pm2_env.status;
        const restarts = process.pm2_env.restart_time || 0;
        const uptime = process.pm2_env.pm_uptime ? Date.now() - process.pm2_env.pm_uptime : 0;

        // Check for problematic patterns
        if (status === "errored") {
          healthReport.overall = "unhealthy";
          healthReport.issues.push(`${processName}: Process is in error state`);
        }

        if (restarts > 10) {
          healthReport.overall = "degraded";
          healthReport.issues.push(`${processName}: High restart count (${restarts})`);
          healthReport.recommendations.push(`Investigate ${processName} for stability issues`);
        }

        if (uptime < 60000 && status === "online") { // Less than 1 minute uptime
          healthReport.issues.push(`${processName}: Recently restarted`);
        }

        // Check memory usage
        if (process.monit && process.monit.memory > 500 * 1024 * 1024) { // > 500MB
          healthReport.recommendations.push(`${processName}: High memory usage (${Math.round(process.monit.memory / 1024 / 1024)}MB)`);
        }
      }
    });

    return healthReport;
  }

  attemptRecovery() {
    this.log("Attempting to recover failed processes...");
    
    const processes = this.getPM2Processes();
    let recovered = 0;

    processes.forEach(process => {
      if (process.pm2_env && process.pm2_env.status === "errored") {
        this.log(`Attempting to restart failed process: ${process.name}`);
        const result = this.runCommand("pm2", ["restart", process.name]);
        
        if (result.success) {
          this.log(`Successfully restarted ${process.name}`);
          recovered++;
        } else {
          this.log(`Failed to restart ${processName}: ${result.stderr}`);
        }
      }
    });

    if (recovered > 0) {
      this.metrics.recoveries++;
      this.log(`Recovery completed: ${recovered} processes restarted`);
    }

    return recovered;
  }

  saveMetrics() {
    const metricsFile = path.join(this.metricsDir, "pm2-health-metrics.json");
    const metricsData = {
      ...this.metrics,
      lastUpdate: new Date().toISOString(),
      systemMetrics: this.getSystemMetrics(),
      healthReport: this.checkProcessHealth()
    };

    try {
      fs.writeFileSync(metricsFile, JSON.stringify(metricsData, null, 2));
    } catch (error) {
      this.log(`Failed to save metrics: ${error.message}`);
    }
  }

  generateHealthReport() {
    const healthReport = this.checkProcessHealth();
    const systemMetrics = this.getSystemMetrics();
    
    const report = {
      timestamp: new Date().toISOString(),
      overall: healthReport.overall,
      summary: {
        totalProcesses: systemMetrics.totalProcesses,
        running: systemMetrics.running,
        stopped: systemMetrics.stopped,
        errored: systemMetrics.errored,
        restarting: systemMetrics.restarting
      },
      issues: healthReport.issues,
      recommendations: healthReport.recommendations,
      metrics: {
        checks: this.metrics.checks,
        failures: this.metrics.failures,
        recoveries: this.metrics.recoveries,
        uptime: Date.now() - new Date(this.metrics.startTime).getTime()
      }
    };

    const reportFile = path.join(this.metricsDir, "pm2-health-report.json");
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`Health report saved to: ${reportFile}`);
    } catch (error) {
      this.log(`Failed to save health report: ${error.message}`);
    }

    return report;
  }

  async monitor() {
    this.monitoring = true;
    this.log("Starting PM2 health monitoring...");

    while (this.monitoring) {
      try {
        this.metrics.lastCheck = new Date().toISOString();
        this.metrics.checks++;

        // Check process health
        const healthReport = this.checkProcessHealth();
        
        if (healthReport.overall !== "healthy") {
          this.log(`Health check failed: ${healthReport.issues.join(", ")}`);
          this.metrics.failures++;
          
          // Attempt recovery
          const recovered = this.attemptRecovery();
          if (recovered > 0) {
            this.log(`Recovery successful: ${recovered} processes recovered`);
          }
        } else {
          this.log("Health check passed - all processes healthy");
        }

        // Save metrics and generate report
        this.saveMetrics();
        this.generateHealthReport();

        // Wait before next check
        await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds

      } catch (error) {
        this.log(`Monitoring error: ${error.message}`);
        this.metrics.failures++;
        await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds on error
      }
    }
  }

  stop() {
    this.monitoring = false;
    this.log("Stopping PM2 health monitoring...");
  }

  run() {
    const command = process.argv[2];
    
    switch (command) {
      case "start":
        this.monitor();
        break;
      case "check":
        const healthReport = this.checkProcessHealth();
        console.log(JSON.stringify(healthReport, null, 2));
        break;
      case "metrics":
        const metrics = this.getSystemMetrics();
        console.log(JSON.stringify(metrics, null, 2));
        break;
      case "report":
        const report = this.generateHealthReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case "recover":
        this.attemptRecovery();
        break;
      default:
        this.log("Available commands: start, check, metrics, report, recover");
        this.log("Usage: node automation/pm2-health-monitor.cjs <command>");
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new PM2HealthMonitor();
  monitor.run();
}

module.exports = PM2HealthMonitor;