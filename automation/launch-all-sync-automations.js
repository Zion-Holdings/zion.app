const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");
const { v4: uuidv4 } = require("uuid");

class SyncAutomationLauncher {
  constructor() {
    this.id = "sync-automation-launcher";
    this.version = "2.0";
    this.status = "initializing";
    this.syncScripts = [
      {
        name: "git-sync-automation.js",
        description: "Basic git sync automation",
        priority: "high",
      },
      {
        name: "high-frequency-git-sync.js",
        description: "High-frequency git sync",
        priority: "high",
      },
      {
        name: "comprehensive-sync-orchestrator.js",
        description: "Comprehensive sync orchestrator",
        priority: "medium",
      },
      {
        name: "master-sync-controller.js",
        description: "Master sync controller",
        priority: "medium",
      },
      {
        name: "ensure-sync-running.js",
        description: "Sync ensurance monitor",
        priority: "high",
      },
    ];
    this.setupDirectories();
  }

  setupDirectories() {
    const directories = ["pids", "logs", "launcher-status", "launcher-reports"];

    directories.forEach((dir) => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log("🚀 Initializing Sync Automation Launcher...");

      // Check git repository status
      try {
        execSync("git status", { stdio: "pipe" });
        console.log("✅ Git repository status OK");
      } catch (error) {
        console.log("❌ Not in a git repository");
        throw new Error("Not in a git repository");
      }

      this.status = "running";
      console.log("✅ Sync Automation Launcher initialized successfully");
    } catch (error) {
      console.error(
        "❌ Error initializing Sync Automation Launcher: ",
        error.message,
      );
      this.status = "error";
      throw error;
    }
  }

  async start() {
    console.log("👀 Starting sync automation launcher...");

    // Start all sync scripts
    for (const script of this.syncScripts) {
      await this.startScript(script);
    }

    // Start health monitoring
    this.startHealthMonitoring();

    console.log("✅ All sync automations started successfully");
  }

  async startScript(script) {
    try {
      console.log(`🚀 Starting ${script.name}...`);

      // Kill existing process if running
      await this.killExistingProcess(script.name);

      // Start new process
      const child = spawn("node", [script.name], {
        detached: true,
        stdio: "ignore",
        cwd: path.resolve(__dirname, ".."),
      });

      // Write PID to file
      const pidPath = path.join(__dirname, "pids", `${script.name}.pid`);
      fs.writeFileSync(pidPath, child.pid.toString());

      console.log(`✅ Started ${script.name} with PID: ${child.pid}`);

      child.unref();

      // Handle process events
      child.on("error", (error) => {
        this.handleProcessError(script.name, error);
      });

      child.on("exit", (code, signal) => {
        this.handleProcessExit(script.name, code, signal);
      });
    } catch (error) {
      console.error(`❌ Failed to start ${script.name}:`, error.message);
      await this.handleError("start", error);
    }
  }

  async killExistingProcess(scriptName) {
    try {
      const pidPath = path.join(__dirname, "pids", `${scriptName}.pid`);

      if (fs.existsSync(pidPath)) {
        const pid = fs.readFileSync(pidPath, "utf8").trim();

        try {
          execSync(`kill ${pid}`, { stdio: "pipe" });
          console.log(`🛑 Killed existing process ${scriptName} (PID: ${pid})`);
        } catch (error) {
          // Process might already be dead
          console.log(
            `ℹ️ Process ${scriptName} (PID: ${pid}) was already stopped`,
          );
        }

        // Remove PID file
        fs.unlinkSync(pidPath);
      }
    } catch (error) {
      console.error(`❌ Error killing process ${scriptName}:`, error.message);
    }
  }

  handleProcessError(scriptName, error) {
    console.error(`❌ Process error for ${scriptName}:`, error.message);

    const errorLog = {
      timestamp: new Date().toISOString(),
      scriptName,
      error: error.message,
      type: "process_error",
    };

    const errorPath = path.join(__dirname, "logs", `error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
  }

  handleProcessExit(scriptName, code, signal) {
    console.log(
      `ℹ️ Process ${scriptName} exited with code ${code} and signal ${signal}`,
    );

    const exitLog = {
      timestamp: new Date().toISOString(),
      scriptName,
      exitCode: code,
      signal,
      type: "process_exit",
    };

    const exitPath = path.join(__dirname, "logs", `exit-${Date.now()}.json`);
    fs.writeFileSync(exitPath, JSON.stringify(exitLog, null, 2));

    // Restart the process after a delay
    setTimeout(() => {
      const script = this.syncScripts.find((s) => s.name === scriptName);
      if (script) {
        console.log(`🔄 Restarting ${scriptName}...`);
        this.startScript(script);
      }
    }, 5000);
  }

  startHealthMonitoring() {
    // Set up health monitoring (every 30 seconds)
    setInterval(async () => {
      console.log("🔍 Checking sync processes health...");

      for (const script of this.syncScripts) {
        await this.checkAllProcesses(script.name);
      }

      console.log("✅ Sync processes health check completed");
    }, 30000);
  }

  async checkAllProcesses(scriptName) {
    try {
      const pidPath = path.join(__dirname, "pids", `${scriptName}.pid`);

      if (!fs.existsSync(pidPath)) {
        console.log(`❌ PID file not found for ${scriptName}, restarting...`);
        const script = this.syncScripts.find((s) => s.name === scriptName);
        if (script) {
          await this.restartProcess(script);
        }
        return;
      }

      const pid = fs.readFileSync(pidPath, "utf8").trim();

      try {
        execSync(`ps -p ${pid}`, { stdio: "pipe" });
        console.log(`✅ Process ${scriptName} (PID: ${pid}) is running`);
      } catch (error) {
        console.log(
          `❌ Process ${scriptName} (PID: ${pid}) is not running, restarting...`,
        );
        const script = this.syncScripts.find((s) => s.name === scriptName);
        if (script) {
          await this.restartProcess(script);
        }
      }
    } catch (error) {
      console.error(`❌ Error checking process ${scriptName}:`, error.message);
    }
  }

  async restartProcess(script) {
    try {
      console.log(`🔄 Restarting ${script.name}...`);
      await this.startScript(script);
    } catch (error) {
      console.error(`❌ Failed to restart ${script.name}:`, error.message);
    }
  }

  async handleError(operation, error) {
    console.error(`❌ Error in ${operation}:`, error.message);

    const errorLog = {
      timestamp: new Date().toISOString(),
      operation,
      error: error.message,
      stack: error.stack,
    };

    const errorPath = path.join(
      __dirname,
      "logs",
      `launcher-error-${Date.now()}.json`,
    );
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
  }

  generateReport() {
    const statusPath = path.join(
      __dirname,
      "launcher-status",
      "current-status.json",
    );

    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      version: this.version,
      uptime: process.uptime(),
      scripts: this.syncScripts.map((script) => ({
        name: script.name,
        description: script.description,
        priority: script.priority,
      })),
    };

    fs.writeFileSync(statusPath, JSON.stringify(report, null, 2));
    console.log("📊 Generated launcher report");
  }

  async shutdown() {
    console.log("🛑 Shutting down Sync Automation Launcher...");

    // Kill all running processes
    for (const script of this.syncScripts) {
      await this.killExistingProcess(script.name);
    }

    this.status = "stopped";
    this.generateReport();
    console.log("✅ Sync Automation Launcher shutdown complete");
  }
}

// Signal handlers
process.on("SIGTERM", async () => {
  console.log("🛑 Received SIGTERM, shutting down...");
  await launcher.shutdown();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("🛑 Received SIGINT, shutting down...");
  await launcher.shutdown();
  process.exit(0);
});

// Initialize and start
const launcher = new SyncAutomationLauncher();

launcher
  .initialize()
  .then(() => {
    launcher.start();
  })
  .catch((error) => {
    console.error(
      "❌ Sync Automation Launcher initialization failed: ",
      error.message,
    );
    process.exit(1);
  });
