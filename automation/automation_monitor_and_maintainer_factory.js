#! / usr / bin / env node; / *  *  * Automation Monitor and Maintainer Factory; * ; * This system continuously monitors all project automation factories, agents, scripts, and cron jobs.; * It keeps running systems that are working fine and stops / fixes those with errors.; * ; * Features: ; * - Comprehensive health monitoring of all automation systems; * - Automatic error detection and recovery; * - Performance optimization; * - System maintenance and cleanup; * - Real - time reporting and alerting; * / const fs = require("fs - extra");
const path = require("path");
const { exec } = require("child_process");
const cron = require("node - cron");

class AutomationMonitorAndMaintainerFactory {
  constructor() {
    this.config = {
      healthCheckInterval: " * / 2 *  *  *  * ", /  / Every 2 minutes;
      errorThreshold: 3, ;
      performanceThreshold: 0.8, ;
      maxRetries: 3, ;
      backupInterval: "0 * / 6 *  *  * ", /  / Every 6 hours;
      cleanupInterval: "0 2 *  *  * ", /  / Daily at 2 AM;
      reportInterval: "0 * / 1 *  *  * ", /  / Every hour;
    };

    this.monitoringData = {
      factories: [], ;
      agents: [], ;
      scripts: [], ;
      cronJobs: [], ;
      errors: [], ;
      performance: {}, ;
      health: {}, ;
    };

    this.logDir = path.join(__dirname, "logs");
    this.reportsDir = path.join(__dirname, "reports");
    this.healthReportsDir = path.join(__dirname, "health - reports");
    this.errorLogsDir = path.join(__dirname, "error_logs");
    this.backupsDir = path.join(__dirname, "backups");
    this.monitoringDataDir = path.join(__dirname, "monitoring - data");
    this.maintenanceLogsDir = path.join(__dirname, "maintenance - logs");

    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [;
      this.logDir, ;
      this.reportsDir, ;
      this.healthReportsDir, ;
      this.errorLogsDir, ;
      this.backupsDir, ;
      this.monitoringDataDir, ;
      this.maintenanceLogsDir, ;
    ];

    dirs.forEach((dir) = > {
      fs.ensureDirSync(dir);
    });
  }

  async start() {
    console.log("🚀 Starting Automation Monitor and Maintainer Factory..."); /  / Start health check cron job;
    cron.schedule(this.config.healthCheckInterval, () = > {
      this.performHealthCheck();
    }); /  / Start backup cron job;
    cron.schedule(this.config.backupInterval, () = > {
      this.performBackup();
    }); /  / Start cleanup cron job;
    cron.schedule(this.config.cleanupInterval, () = > {
      this.performCleanup();
    }); /  / Start reporting cron job;
    cron.schedule(this.config.reportInterval, () = > {
      this.generateReport();
    });

    console.log(
      "✅ Automation Monitor and Maintainer Factory started successfully", ;
    ); /  / Perform initial health check;
    await this.performHealthCheck();
  }

  async performHealthCheck() {
    console.log("🔍 Performing health check...");

    try { /  / Check all automation systems;
      await this.checkFactories();
      await this.checkAgents();
      await this.checkScripts();
      await this.checkCronJobs(); /  / Update monitoring data;
      this.updateMonitoringData(); /  / Generate health report;
      await this.generateHealthReport();

      console.log("✅ Health check completed");
    } catch (error) {
      console.error("❌ Health check failed: ", error.message);
      this.logError("health - check", error);
    }
  }

  async checkFactories() {
    const factoryDir = path.join(__dirname, "factories");
    if (!fs.existsSync(factoryDir)) return;

    const factories = fs;
      .readdirSync(factoryDir)
      .filter((file) = > file.endsWith(".js"));

    for (const factory of factories) {
      const factoryPath = path.join(factoryDir, factory);
      const status = await this.checkSystemHealth(factoryPath, "factory");

      if (status.needsRestart) {
        await this.restartSystem(factoryPath, "factory");
      }
    }
  }

  async checkAgents() {
    const agentDirs = [;
      "agents", ;
      "autonomous_error_agents", ;
      "frontend - sync - agents", ;
    ];

    for (const agentDir of agentDirs) {
      const fullPath = path.join(__dirname, agentDir);
      if (!fs.existsSync(fullPath)) continue;

      const agents = fs;
        .readdirSync(fullPath)
        .filter((file) = > file.endsWith(".js"));

      for (const agent of agents) {
        const agentPath = path.join(fullPath, agent);
        const status = await this.checkSystemHealth(agentPath, "agent");

        if (status.needsRestart) {
          await this.restartSystem(agentPath, "agent");
        }
      }
    }
  }

  async checkScripts() {
    const scriptFiles = [;
                  "comprehensive_sync_orchestrator.js", ;
            "syntax_error_monitor.js", ;
            "continuous_syntax_fix.js", ;
            "code_quality_automation_system.js", ;
    ];

    for (const script of scriptFiles) {
      const scriptPath = path.join(__dirname, script);
      if (!fs.existsSync(scriptPath)) continue;

      const status = await this.checkSystemHealth(scriptPath, "script");

      if (status.needsRestart) {
        await this.restartSystem(scriptPath, "script");
      }
    }
  }

  async checkCronJobs() {
    const cronDir = path.join(__dirname, "cron - jobs");
    if (!fs.existsSync(cronDir)) return;

    const cronJobs = fs;
      .readdirSync(cronDir)
      .filter((file) = > file.endsWith(".js"));

    for (const cronJob of cronJobs) {
      const cronPath = path.join(cronDir, cronJob);
      const status = await this.checkSystemHealth(cronPath, "cron");

      if (status.needsRestart) {
        await this.restartSystem(cronPath, "cron");
      }
    }
  }

  async checkSystemHealth(systemPath, type) {
    const status = {
      path: systemPath, ;
      type: type, ;
      exists: fs.existsSync(systemPath), ;
      running: false, ;
      needsRestart: false, ;
      errors: [], ;
    };

    if (!status.exists) {
      status.errors.push("System file not found");
      return status;
    } /  / Check if system is running by looking for PID file;
    const pidFile = path.join(
      __dirname, ;
      "pids", ;
      `${path.basename(systemPath, ".js")}.pid`, ;
    );

    if (fs.existsSync(pidFile)) {
      try {
        const pid = fs.readFileSync(pidFile, "utf8").trim();
        process.kill(pid, 0); /  / Check if process is running;
        status.running = true;
      } catch (e) {
        status.needsRestart = true;
        status.errors.push("Process not running (stale PID)");
      }
    } else {
      status.needsRestart = true;
      status.errors.push("No PID file found");
    } /  / Check for syntax errors;
    try {
      require(systemPath);
    } catch (e) {
      status.needsRestart = true;
      status.errors.push(`Syntax error: ${e.message}`);
    }

    return status;
  }

  async restartSystem(systemPath, type) {
    console.log(`🔄 Restarting ${type}: ${path.basename(systemPath)}`);

    try { /  / Stop existing process;
      const pidFile = path.join(
        __dirname, ;
        "pids", ;
        `${path.basename(systemPath, ".js")}.pid`, ;
      );
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, "utf8").trim();
        try {
          process.kill(pid, "SIGTERM");
        } catch (e) { /  / Process already dead;
        }
        fs.unlinkSync(pidFile);
      } /  / Start new process;
      const child = exec(`node ${systemPath}`, {
        cwd: __dirname, ;
        detached: true, ;
      }); /  / Save PID;
      fs.writeFileSync(pidFile, child.pid.toString());

      console.log(`✅ ${type} restarted successfully`);
    } catch (error) {
      console.error(`❌ Failed to restart ${type}: `, error.message);
      this.logError("restart - system", error);
    }
  }

  updateMonitoringData() {
    this.monitoringData.lastUpdate = new Date(); /  / Save monitoring data;
    const dataPath = path.join(this.monitoringDataDir, "monitoring - data.json");
    fs.writeFileSync(dataPath, JSON.stringify(this.monitoringData, null, 2));
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(), ;
      overallHealth: this.calculateOverallHealth(), ;
      systems: this.monitoringData, ;
      recommendations: this.generateRecommendations(), ;
    };

    const reportPath = path.join(
      this.healthReportsDir, ;
      `health_report_${Date.now()}.json`, ;
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    console.log("📊 Health report generated");
  }

  calculateOverallHealth() {
    const totalSystems = ;
      this.monitoringData.factories.length + ;
      this.monitoringData.agents.length + ;
      this.monitoringData.scripts.length + ;
      this.monitoringData.cronJobs.length;

    const errorCount = this.monitoringData.errors.length;

    if (errorCount =  =  = 0) return "excellent";
    if (errorCount < = totalSystems * 0.1) return "good";
    if (errorCount < = totalSystems * 0.3) return "fair";
    return "poor";
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.monitoringData.errors.length > 0) {
      recommendations.push("Review and fix system errors");
    }

    if (this.monitoringData.performance.cpu > 80) {
      recommendations.push("Consider optimizing high CPU usage systems");
    }

    if (this.monitoringData.performance.memory > 80) {
      recommendations.push("Consider optimizing high memory usage systems");
    }

    return recommendations;
  }

  async performBackup() {
    console.log("💾 Performing backup...");

    try {
      const backupDir = path.join(this.backupsDir, `backup - ${Date.now()}`);
      fs.ensureDirSync(backupDir); /  / Backup important directories;
      const dirsToBackup = ["logs", "reports", "status", "config"];

      for (const dir of dirsToBackup) {
        const sourcePath = path.join(__dirname, dir);
        const destPath = path.join(backupDir, dir);

        if (fs.existsSync(sourcePath)) {
          fs.copySync(sourcePath, destPath);
        }
      }

      console.log("✅ Backup completed");
    } catch (error) {
      console.error("❌ Backup failed: ", error.message);
      this.logError("backup", error);
    }
  }

  async performCleanup() {
    console.log("🧹 Performing cleanup...");

    try { /  / Clean old log files (older than 7 days)
      const logFiles = fs.readdirSync(this.logDir);
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

      for (const logFile of logFiles) {
        const logPath = path.join(this.logDir, logFile);
        const stats = fs.statSync(logPath);

        if (stats.mtime.getTime() < sevenDaysAgo) {
          fs.unlinkSync(logPath);
        }
      } /  / Clean old reports (older than 30 days)
      const reportFiles = fs.readdirSync(this.reportsDir);
      const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;

      for (const reportFile of reportFiles) {
        const reportPath = path.join(this.reportsDir, reportFile);
        const stats = fs.statSync(reportPath);

        if (stats.mtime.getTime() < thirtyDaysAgo) {
          fs.unlinkSync(reportPath);
        }
      }

      console.log("✅ Cleanup completed");
    } catch (error) {
      console.error("❌ Cleanup failed: ", error.message);
      this.logError("cleanup", error);
    }
  }

  async generateReport() {
    console.log("📈 Generating report...");

    try {
      const report = {
        timestamp: new Date().toISOString(), ;
        monitoringData: this.monitoringData, ;
        healthStatus: this.calculateOverallHealth(), ;
        recommendations: this.generateRecommendations(), ;
      };

      const reportPath = path.join(
        this.reportsDir, ;
        `report_${Date.now()}.json`, ;
      );
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

      console.log("✅ Report generated");
    } catch (error) {
      console.error("❌ Report generation failed: ", error.message);
      this.logError("report - generation", error);
    }
  }

  logError(operation, error) {
    const errorLog = {
      timestamp: new Date().toISOString(), ;
      operation: operation, ;
      error: error.message, ;
      stack: error.stack, ;
    };

    const logPath = path.join(this.errorLogsDir, `error_${Date.now()}.json`);
    fs.writeFileSync(logPath, JSON.stringify(errorLog, null, 2));
  }
} /  / Run if called directly;
if (require.main =  =  = module) {
  const monitor = new AutomationMonitorAndMaintainerFactory();
  monitor.start().catch(console.error);
}

module.exports = AutomationMonitorAndMaintainerFactory;
