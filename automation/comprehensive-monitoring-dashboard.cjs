#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const readline = require("readline");

class ComprehensiveMonitoringDashboard {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      refreshInterval: 5000, // 5 seconds
      maxLogLines: 50,
      services: {
        pm2: {
          name: "PM2 Process Management",
          processes: ["zion-auto-sync", "zion-auto-sync-cron", "redundancy-automation-system", "redundancy-health-monitor", "redundancy-git-sync", "redundancy-build-monitor", "comprehensive-redundancy-orchestrator"],
          status: "unknown"
        },
        githubActions: {
          name: "GitHub Actions Workflows",
          workflows: [".github/workflows/marketing-sync.yml", ".github/workflows/sync-health.yml"],
          status: "unknown"
        },
        netlifyFunctions: {
          name: "Netlify Functions",
          manifestFile: "netlify/functions/functions-manifest.json",
          status: "unknown"
        },
        git: {
          name: "Git Synchronization",
          status: "unknown"
        },
        build: {
          name: "Build Health",
          status: "unknown"
        }
      }
    };
    
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    this.monitoring = false;
    this.refreshInterval = null;
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
    
    const logFile = path.join(this.logDir, `monitoring-dashboard-${new Date().toISOString().split('T')[0]}.log`);
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
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || 10000,
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

  clearScreen() {
    console.clear();
    console.log("\x1Bc");
  }

  printHeader() {
    console.log("\n");
    console.log("╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗");
    console.log("║                                    COMPREHENSIVE MONITORING DASHBOARD                               ║");
    console.log("║                                    PM2 • GitHub Actions • Netlify Functions                        ║");
    console.log("╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝");
    console.log("");
  }

  printStatusBar() {
    const timestamp = new Date().toLocaleString();
    console.log(`📊 System Status - ${timestamp} | 🔄 Auto-refresh: ${this.monitoring ? 'ON' : 'OFF'} | Press 'q' to quit, 'r' to refresh`);
    console.log("─".repeat(120));
    console.log("");
  }

  async getPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status === 0) {
        const processes = JSON.parse(result.stdout);
        const status = {
          total: processes.length,
          online: processes.filter(p => p.pm2_env.status === "online").length,
          stopped: processes.filter(p => p.pm2_env.status === "stopped").length,
          errored: processes.filter(p => p.pm2_env.status === "errored").length,
          processes: []
        };

        for (const processName of this.config.services.pm2.processes) {
          const process = processes.find(p => p.name === processName);
          if (process) {
            status.processes.push({
              name: process.name,
              status: process.pm2_env.status,
              uptime: process.pm2_env.pm_uptime,
              memory: process.monit.memory,
              cpu: process.monit.cpu
            });
          } else {
            status.processes.push({
              name: processName,
              status: "not_found",
              uptime: 0,
              memory: 0,
              cpu: 0
            });
          }
        }

        return status;
      }
      return null;
    } catch (error) {
      this.log(`Error getting PM2 status: ${error.message}`, "ERROR");
      return null;
    }
  }

  async getGitHubActionsStatus() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        return { status: "not_found", workflows: [] };
      }

      const workflows = [];
      for (const workflow of this.config.services.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const content = fs.readFileSync(workflow, 'utf8');
          const isValid = content.includes('name:') && content.includes('on:');
          workflows.push({
            name: path.basename(workflow),
            exists: true,
            valid: isValid,
            size: fs.statSync(workflow).size
          });
        } else {
          workflows.push({
            name: path.basename(workflow),
            exists: false,
            valid: false,
            size: 0
          });
        }
      }

      return { status: "found", workflows };
    } catch (error) {
      this.log(`Error getting GitHub Actions status: ${error.message}`, "ERROR");
      return { status: "error", workflows: [] };
    }
  }

  async getNetlifyFunctionsStatus() {
    try {
      const manifestFile = this.config.services.netlifyFunctions.manifestFile;
      if (!fs.existsSync(manifestFile)) {
        return { status: "manifest_not_found", functions: [], lastGenerated: null };
      }

      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const lastGenerated = new Date(manifest.generatedAt);
      const age = Date.now() - lastGenerated.getTime();
      const isStale = age > 3600000; // 1 hour

      return {
        status: "found",
        functions: manifest.functions || [],
        lastGenerated: lastGenerated,
        isStale: isStale,
        totalFunctions: (manifest.functions || []).length
      };
    } catch (error) {
      this.log(`Error getting Netlify functions status: ${error.message}`, "ERROR");
      return { status: "error", functions: [], lastGenerated: null };
    }
  }

  async getGitStatus() {
    try {
      const status = await this.runCommand("git", ["status", "--porcelain"]);
      const branch = await this.runCommand("git", ["branch", "--show-current"]);
      const aheadBehind = await this.runCommand("git", ["rev-list", "--left-right", "--count", "HEAD...origin/main"]);
      
      let gitStatus = "unknown";
      let changes = 0;
      let currentBranch = "unknown";
      let syncStatus = "unknown";

      if (status.status === 0) {
        changes = status.stdout.split('\n').filter(line => line.trim()).length;
        gitStatus = changes > 0 ? "dirty" : "clean";
      }

      if (branch.status === 0) {
        currentBranch = branch.stdout.trim();
      }

      if (aheadBehind.status === 0) {
        const [ahead, behind] = aheadBehind.stdout.trim().split('\t').map(Number);
        if (ahead > 0 && behind > 0) {
          syncStatus = "diverged";
        } else if (ahead > 0) {
          syncStatus = "ahead";
        } else if (behind > 0) {
          syncStatus = "behind";
        } else {
          syncStatus = "up_to_date";
        }
      }

      return {
        status: gitStatus,
        changes: changes,
        branch: currentBranch,
        syncStatus: syncStatus
      };
    } catch (error) {
      this.log(`Error getting Git status: ${error.message}`, "ERROR");
      return { status: "error", changes: 0, branch: "unknown", syncStatus: "unknown" };
    }
  }

  async getBuildStatus() {
    try {
      if (!fs.existsSync("package.json")) {
        return { status: "package_not_found", scripts: [], dependencies: false };
      }

      const packageJson = JSON.parse(fs.readFileSync("package.json", 'utf8'));
      const scripts = packageJson.scripts || {};
      const hasBuildScript = !!scripts.build;
      const hasHealthCheck = !!scripts["build:health-check"];
      const hasTestScript = !!scripts.test;
      const hasDependencies = fs.existsSync("node_modules");

      return {
        status: "found",
        scripts: {
          build: hasBuildScript,
          healthCheck: hasHealthCheck,
          test: hasTestScript
        },
        dependencies: hasDependencies,
        totalScripts: Object.keys(scripts).length
      };
    } catch (error) {
      this.log(`Error getting build status: ${error.message}`, "ERROR");
      return { status: "error", scripts: {}, dependencies: false };
    }
  }

  printPM2Status(pm2Status) {
    if (!pm2Status) {
      console.log("❌ PM2 Status: Unable to retrieve");
      return;
    }

    console.log("🔄 PM2 Process Management");
    console.log("─".repeat(80));
    console.log(`📊 Total Processes: ${pm2Status.total} | 🟢 Online: ${pm2Status.online} | 🟡 Stopped: ${pm2Status.stopped} | 🔴 Errored: ${pm2Status.errored}`);
    console.log("");

    for (const process of pm2Status.processes) {
      const statusIcon = process.status === "online" ? "🟢" : 
                        process.status === "stopped" ? "🟡" : 
                        process.status === "errored" ? "🔴" : "⚪";
      
      const uptime = process.uptime ? Math.floor(process.uptime / 1000) : 0;
      const memory = process.memory ? Math.round(process.memory / 1024 / 1024) : 0;
      
      console.log(`${statusIcon} ${process.name.padEnd(35)} | Status: ${process.status.padEnd(10)} | Uptime: ${uptime}s | Memory: ${memory}MB`);
    }
    console.log("");
  }

  printGitHubActionsStatus(ghStatus) {
    console.log("🚀 GitHub Actions Workflows");
    console.log("─".repeat(80));
    
    if (ghStatus.status === "not_found") {
      console.log("❌ Workflows directory not found");
    } else if (ghStatus.status === "error") {
      console.log("❌ Error retrieving workflow status");
    } else {
      console.log(`📁 Found ${ghStatus.workflows.length} workflow(s)`);
      console.log("");
      
      for (const workflow of ghStatus.workflows) {
        const statusIcon = workflow.exists && workflow.valid ? "✅" : 
                          workflow.exists && !workflow.valid ? "⚠️" : "❌";
        
        console.log(`${statusIcon} ${workflow.name.padEnd(40)} | Exists: ${workflow.exists.toString().padEnd(5)} | Valid: ${workflow.valid.toString().padEnd(5)} | Size: ${workflow.size} bytes`);
      }
    }
    console.log("");
  }

  printNetlifyFunctionsStatus(netlifyStatus) {
    console.log("⚡ Netlify Functions");
    console.log("─".repeat(80));
    
    if (netlifyStatus.status === "manifest_not_found") {
      console.log("❌ Functions manifest not found");
    } else if (netlifyStatus.status === "error") {
      console.log("❌ Error retrieving functions status");
    } else {
      const freshnessIcon = netlifyStatus.isStale ? "⚠️" : "✅";
      const lastGen = netlifyStatus.lastGenerated ? netlifyStatus.lastGenerated.toLocaleString() : "unknown";
      
      console.log(`${freshnessIcon} Total Functions: ${netlifyStatus.totalFunctions} | Last Generated: ${lastGen}`);
      console.log(`📁 Status: ${netlifyStatus.isStale ? 'Stale (needs regeneration)' : 'Fresh'}`);
      
      if (netlifyStatus.functions.length > 0) {
        console.log("");
        console.log("📋 Sample Functions:");
        const sampleFunctions = netlifyStatus.functions.slice(0, 10);
        for (const func of sampleFunctions) {
          console.log(`   • ${func}`);
        }
        if (netlifyStatus.functions.length > 10) {
          console.log(`   ... and ${netlifyStatus.functions.length - 10} more`);
        }
      }
    }
    console.log("");
  }

  printGitStatus(gitStatus) {
    console.log("📚 Git Repository Status");
    console.log("─".repeat(80));
    
    if (gitStatus.status === "error") {
      console.log("❌ Error retrieving Git status");
    } else {
      const statusIcon = gitStatus.status === "clean" ? "✅" : "⚠️";
      const syncIcon = gitStatus.syncStatus === "up_to_date" ? "✅" : 
                      gitStatus.syncStatus === "behind" ? "⬇️" : 
                      gitStatus.syncStatus === "ahead" ? "⬆️" : "🔄";
      
      console.log(`${statusIcon} Working Directory: ${gitStatus.status} | Changes: ${gitStatus.changes}`);
      console.log(`${syncIcon} Branch: ${gitStatus.branch} | Sync Status: ${gitStatus.syncStatus}`);
    }
    console.log("");
  }

  printBuildStatus(buildStatus) {
    console.log("🔨 Build System Status");
    console.log("─".repeat(80));
    
    if (buildStatus.status === "package_not_found") {
      console.log("❌ package.json not found");
    } else if (buildStatus.status === "error") {
      console.log("❌ Error retrieving build status");
    } else {
      const depsIcon = buildStatus.dependencies ? "✅" : "❌";
      const buildIcon = buildStatus.scripts.build ? "✅" : "❌";
      const healthIcon = buildStatus.scripts.healthCheck ? "✅" : "❌";
      const testIcon = buildStatus.scripts.test ? "✅" : "❌";
      
      console.log(`${depsIcon} Dependencies: ${buildStatus.dependencies ? 'Installed' : 'Missing'}`);
      console.log(`${buildIcon} Build Script: ${buildStatus.scripts.build ? 'Available' : 'Missing'}`);
      console.log(`${healthIcon} Health Check: ${buildStatus.scripts.healthCheck ? 'Available' : 'Missing'}`);
      console.log(`${testIcon} Test Script: ${buildStatus.scripts.test ? 'Available' : 'Missing'}`);
      console.log(`📊 Total Scripts: ${buildStatus.totalScripts}`);
    }
    console.log("");
  }

  printRecentLogs() {
    console.log("📝 Recent System Logs");
    console.log("─".repeat(80));
    
    try {
      const logFiles = fs.readdirSync(this.logDir)
        .filter(file => file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.logDir, file),
          stats: fs.statSync(path.join(this.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      if (logFiles.length === 0) {
        console.log("No log files found");
        return;
      }

      // Get the most recent log file
      const mostRecentLog = logFiles[0];
      const logContent = fs.readFileSync(mostRecentLog.path, 'utf8')
        .split('\n')
        .filter(line => line.trim())
        .slice(-this.config.maxLogLines);

      console.log(`📄 ${mostRecentLog.name} (last ${logContent.length} lines):`);
      console.log("");
      
      for (const line of logContent) {
        if (line.includes('[ERROR]')) {
          console.log(`🔴 ${line}`);
        } else if (line.includes('[WARN]')) {
          console.log(`🟡 ${line}`);
        } else if (line.includes('[SUCCESS]')) {
          console.log(`🟢 ${line}`);
        } else {
          console.log(`   ${line}`);
        }
      }
    } catch (error) {
      console.log(`❌ Error reading logs: ${error.message}`);
    }
    console.log("");
  }

  async refreshDashboard() {
    this.clearScreen();
    this.printHeader();
    this.printStatusBar();

    try {
      // Get all statuses in parallel
      const [pm2Status, ghStatus, netlifyStatus, gitStatus, buildStatus] = await Promise.all([
        this.getPM2Status(),
        this.getGitHubActionsStatus(),
        this.getNetlifyFunctionsStatus(),
        this.getGitStatus(),
        this.getBuildStatus()
      ]);

      // Print all statuses
      this.printPM2Status(pm2Status);
      this.printGitHubActionsStatus(ghStatus);
      this.printNetlifyFunctionsStatus(netlifyStatus);
      this.printGitStatus(gitStatus);
      this.printBuildStatus(buildStatus);
      this.printRecentLogs();

      // Print footer
      console.log("─".repeat(120));
      console.log("💡 Commands: 'q' = quit, 'r' = refresh, 's' = stop/start auto-refresh, 'h' = help");
      console.log("");

    } catch (error) {
      this.log(`Error refreshing dashboard: ${error.message}`, "ERROR");
    }
  }

  startAutoRefresh() {
    if (this.monitoring) {
      return;
    }

    this.monitoring = true;
    this.refreshInterval = setInterval(async () => {
      await this.refreshDashboard();
    }, this.config.refreshInterval);

    this.log("Auto-refresh started", "INFO");
  }

  stopAutoRefresh() {
    if (!this.monitoring) {
      return;
    }

    this.monitoring = false;
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
      this.refreshInterval = null;
    }

    this.log("Auto-refresh stopped", "INFO");
  }

  async handleUserInput() {
    this.rl.question('', async (input) => {
      const command = input.trim().toLowerCase();
      
      switch (command) {
        case 'q':
        case 'quit':
        case 'exit':
          this.stopAutoRefresh();
          this.rl.close();
          process.exit(0);
          break;
          
        case 'r':
        case 'refresh':
          await this.refreshDashboard();
          break;
          
        case 's':
        case 'start':
        case 'stop':
          if (this.monitoring) {
            this.stopAutoRefresh();
          } else {
            this.startAutoRefresh();
          }
          break;
          
        case 'h':
        case 'help':
          console.log("\n📖 Available Commands:");
          console.log("  q, quit, exit  - Exit the dashboard");
          console.log("  r, refresh     - Refresh the dashboard");
          console.log("  s, start/stop  - Toggle auto-refresh");
          console.log("  h, help        - Show this help");
          console.log("");
          break;
          
        default:
          if (command) {
            console.log(`❌ Unknown command: ${command}. Type 'h' for help.`);
          }
          break;
      }
      
      // Continue listening for input
      this.handleUserInput();
    });
  }

  async start() {
    this.log("Starting comprehensive monitoring dashboard...", "INFO");
    
    // Initial dashboard display
    await this.refreshDashboard();
    
    // Start auto-refresh
    this.startAutoRefresh();
    
    // Start listening for user input
    this.handleUserInput();
    
    this.log("Dashboard started successfully", "INFO");
  }
}

// Export the class
module.exports = ComprehensiveMonitoringDashboard;

// If run directly, start the dashboard
if (require.main === module) {
  const dashboard = new ComprehensiveMonitoringDashboard();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    dashboard.log("Shutting down monitoring dashboard...", "INFO");
    dashboard.stopAutoRefresh();
    dashboard.rl.close();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    dashboard.log("Shutting down monitoring dashboard...", "INFO");
    dashboard.stopAutoRefresh();
    dashboard.rl.close();
    process.exit(0);
  });
  
  dashboard.start();
}