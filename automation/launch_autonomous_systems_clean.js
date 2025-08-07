#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutonomousSystemsClean {
  constructor() {
    this.logDir = path.join(__dirname, "autonomous-systems-logs");
    this.pidDir = path.join(__dirname, "autonomous-systems-pids");
    this.statusDir = path.join(__dirname, "status");
    
    // Ensure directories exist
    [this.logDir, this.pidDir, this.statusDir].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  status() {
    console.log("📊 Autonomous Systems Status: ");

    const systems = [
      "comprehensive_sync_orchestrator",
      "master_sync_controller",
      "high_frequency_git_sync",
      "git_sync_automation",
      "syntax_error_monitor",
      "continuous_syntax_fix",
      "code_quality_automation_system",
    ];

    let runningCount = 0;
    let stoppedCount = 0;

    for (const system of systems) {
      const statusFile = path.join(this.statusDir, `${system}.status`);
      const pidFile = path.join(this.pidDir, `${system}.pid`);

      if (fs.existsSync(statusFile)) {
        const status = JSON.parse(fs.readFileSync(statusFile, "utf8"));
        const statusIcon = status.status === "running" ? "🟢" : "🔴";
        console.log(`${statusIcon} ${system}: ${status.status}`);

        if (status.status === "running") {
          runningCount++;
        } else {
          stoppedCount++;
        }
      } else {
        console.log(`⚪ ${system}: not started`);
        stoppedCount++;
      }
    }

    console.log("\n📈 Summary: ");
    console.log(`🟢 Running: ${runningCount}`);
    console.log(`🔴 Stopped: ${stoppedCount}`);
    console.log(`📊 Total: ${systems.length}`);
  }

  clean() {
    console.log("🧹 Cleaning autonomous systems...");
    
    // Clean old log files
    if (fs.existsSync(this.logDir)) {
      const logFiles = fs.readdirSync(this.logDir);
      for (const file of logFiles) {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        const daysOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);

        if (daysOld > 7) {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted old log: ${file}`);
        }
      }
    }
    
    // Clean old PID files
    if (fs.existsSync(this.pidDir)) {
      const pidFiles = fs.readdirSync(this.pidDir);
      for (const file of pidFiles) {
        const filePath = path.join(this.pidDir, file);
        const pid = fs.readFileSync(filePath, "utf8").trim();

        try {
          process.kill(pid, 0); // Check if process exists
        } catch (error) { // Process not running, remove stale PID file
          fs.unlinkSync(filePath);
          console.log(`🗑️  Removed stale PID file: ${file}`);
        }
      }
    }

    console.log("✅ Autonomous systems cleaned");
  }

  restart() {
    console.log("🔄 Restarting autonomous systems...");
    
    // Stop all systems
    this.stop();
    
    // Wait a moment
    setTimeout(() => {
      // Start all systems
      this.start();
    }, 2000);
  }

  stop() {
    console.log("🛑 Stopping autonomous systems...");
    
    const systems = [
      "comprehensive_sync_orchestrator",
      "master_sync_controller", 
      "high_frequency_git_sync",
      "git_sync_automation",
      "syntax_error_monitor",
      "continuous_syntax_fix",
      "code_quality_automation_system",
    ];

    for (const system of systems) {
      const pidFile = path.join(this.pidDir, `${system}.pid`);
      const statusFile = path.join(this.statusDir, `${system}.status`);

      if (fs.existsSync(pidFile)) {
        try {
          const pid = fs.readFileSync(pidFile, "utf8").trim();
          process.kill(pid, "SIGTERM");
          console.log(`🛑 Stopped ${system} (PID: ${pid})`);
        } catch (error) {
          console.log(`⚠️  Could not stop ${system}: ${error.message}`);
        }
        
        // Update status
        if (fs.existsSync(statusFile)) {
          const status = JSON.parse(fs.readFileSync(statusFile, "utf8"));
          status.status = "stopped";
          status.stoppedAt = new Date().toISOString();
          fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
        }
      }
    }

    console.log("✅ All autonomous systems stopped");
  }

  start() {
    console.log("🚀 Starting autonomous systems...");
    
    const systems = [
      "comprehensive_sync_orchestrator",
      "master_sync_controller",
      "high_frequency_git_sync", 
      "git_sync_automation",
      "syntax_error_monitor",
      "continuous_syntax_fix",
      "code_quality_automation_system",
    ];

    for (const system of systems) {
      this.startSystem(system);
    }

    console.log("✅ All autonomous systems started");
  }

  startSystem(systemName) {
    const scriptPath = path.join(__dirname, `${systemName}.js`);
    const logFile = path.join(this.logDir, `${systemName}.log`);
    const pidFile = path.join(this.pidDir, `${systemName}.pid`);
    const statusFile = path.join(this.statusDir, `${systemName}.status`);

    if (!fs.existsSync(scriptPath)) {
      console.log(`⚠️  Script not found: ${scriptPath}`);
      return;
    }

    try {
      // Check if already running
      if (fs.existsSync(pidFile)) {
        const pid = fs.readFileSync(pidFile, "utf8").trim();
        try {
          process.kill(pid, 0); // Check if process exists
          console.log(`⚠️  ${systemName} is already running (PID: ${pid})`);
          return;
        } catch (error) {
          // Process not running, remove stale PID file
          fs.unlinkSync(pidFile);
        }
      }

      // Start the process
      const child = spawn("node", [scriptPath], {
        detached: true,
        stdio: ["ignore", "pipe", "pipe"]
      });

      // Save PID
      fs.writeFileSync(pidFile, child.pid.toString());

      // Update status
      const status = {
        status: "running",
        startedAt: new Date().toISOString(),
        pid: child.pid
      };
      fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));

      console.log(`🚀 Started ${systemName} (PID: ${child.pid})`);

      // Handle output
      child.stdout.on("data", (data) => {
        fs.appendFileSync(logFile, data.toString());
      });

      child.stderr.on("data", (data) => {
        fs.appendFileSync(logFile, `ERROR: ${data.toString()}`);
      });

      child.on("close", (code) => {
        console.log(`📝 ${systemName} exited with code ${code}`);
        
        // Update status
        const status = {
          status: "stopped",
          stoppedAt: new Date().toISOString(),
          exitCode: code
        };
        fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
        
        // Remove PID file
        if (fs.existsSync(pidFile)) {
          fs.unlinkSync(pidFile);
        }
      });

    } catch (error) {
      console.log(`❌ Failed to start ${systemName}: ${error.message}`);
    }
  }
}

// CLI interface
const args = process.argv.slice(2);
const command = args[0];

const cleaner = new AutonomousSystemsClean();

switch (command) {
  case "status":
    cleaner.status();
    break;
  case "clean":
    cleaner.clean();
    break;
  case "restart":
    cleaner.restart();
    break;
  case "stop":
    cleaner.stop();
    break;
  case "start":
    cleaner.start();
    break;
  default:
    console.log("Usage: node launch_autonomous_systems_clean.js [status|clean|restart|stop|start]");
    console.log("  status  - Show status of all autonomous systems");
    console.log("  clean   - Clean old logs and stale PID files");
    console.log("  restart - Restart all autonomous systems");
    console.log("  stop    - Stop all autonomous systems");
    console.log("  start   - Start all autonomous systems");
    process.exit(1);
}
