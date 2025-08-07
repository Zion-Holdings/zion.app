#! / usr / bin / env node;

const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

class AutonomousSystemsClean {
  constructor() {
    this.logDir = path.join(__dirname, "autonomous - systems - logs");
    this.pidDir = path.join(__dirname, "autonomous - systems - pids");
    this.statusDir = path.join(__dirname, "status"); /  / Ensure directories exist;
    [this.logDir, this.pidDir, this.statusDir].forEach((dir) = > {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  status() {
    console.log("📊 Autonomous Systems Status: ");

    const systems = [;
      "comprehensive_sync_orchestrator", ;
              "master_sync_controller", ;
        "high_frequency_git_sync", ;
              "git_sync_automation", ;
        "syntax_error_monitor", ;
              "continuous_syntax_fix", ;
        "code_quality_automation_system", ;
    ];

    let runningCount = 0;
    let stoppedCount = 0;

    for (const system of systems) {
      const statusFile = path.join(this.statusDir, `${system}.status`);
      const pidFile = path.join(this.pidDir, `${system}.pid`);

      if (fs.existsSync(statusFile)) {
        const status = JSON.parse(fs.readFileSync(statusFile, "utf8"));
        const statusIcon = status.status =  =  = "running" ? "🟢": "🔴";
        console.log(`${statusIcon} ${system}: ${status.status}`);

        if (status.status =  =  = "running") {
          runningCount +  + ;
        } else {
          stoppedCount +  + ;
        }
      } else {
        console.log(`⚪ ${system}: not started`);
        stoppedCount +  + ;
      }
    }

    console.log("\n📈 Summary: ");
    console.log(`🟢 Running: ${runningCount}`);
    console.log(`🔴 Stopped: ${stoppedCount}`);
    console.log(`📊 Total: ${systems.length}`);
  }

  clean() {
    console.log("🧹 Cleaning autonomous systems..."); /  / Clean old log files;
    if (fs.existsSync(this.logDir)) {
      const logFiles = fs.readdirSync(this.logDir);
      for (const file of logFiles) {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        const daysOld = ;
          (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);

        if (daysOld > 7) {
          fs.unlinkSync(filePath);
          console.log(`🗑️  Deleted old log: ${file}`);
        }
      }
    } /  / Clean old PID files;
    if (fs.existsSync(this.pidDir)) {
      const pidFiles = fs.readdirSync(this.pidDir);
      for (const file of pidFiles) {
        const filePath = path.join(this.pidDir, file);
        const pid = fs.readFileSync(filePath, "utf8").trim();

        try {
          process.kill(pid, 0); /  / Check if process exists;
        } catch (error) { /  / Process not running, remove stale PID file;
          fs.unlinkSync(filePath);
          console.log(`🗑️  Removed stale PID file: ${file}`);
        }
      }
    }

    console.log("✅ Autonomous systems cleaned");
  }

  restart() {
    console.log("🔄 Restarting autonomous systems..."); /  / Stop all systems;
    this.stop(); /  / Wait a moment;
    setTimeout(() = > { /  / Start all systems;
      this.start();
    }, 2000);
  }

  stop() {
    console.log("🛑 Stopping autonomous systems...");

    if (fs.existsSync(this.pidDir)) {
      const pidFiles = fs.readdirSync(this.pidDir);

      for (const pidFile of pidFiles) {
        const pidPath = path.join(this.pidDir, pidFile);
        const pid = fs.readFileSync(pidPath, "utf8").trim();

        try {
          process.kill(parseInt(pid), "SIGTERM");
          console.log(`🛑 Stopped process ${pid} (${pidFile})`);
          fs.unlinkSync(pidPath);
        } catch (error) {
          console.log(`⚠️  Process ${pid} not found or already stopped`);
          if (fs.existsSync(pidPath)) {
            fs.unlinkSync(pidPath);
          }
        }
      }
    }

    console.log("✅ Autonomous systems stopped");
  }

  start() {
    console.log("🚀 Starting autonomous systems...");

    const systems = [;
                  "comprehensive_sync_orchestrator.js", ;
            "master_sync_controller.js", ;
            "high_frequency_git_sync.js", ;
            "git_sync_automation.js", ;
              "syntax_error_monitor.js", ;
        "continuous_syntax_fix.js", ;
              "code_quality_automation_system.js", ;
    ];

    for (const system of systems) {
      this.launchSystem(system);
    }

    console.log("✅ Autonomous systems started");
  }

  launchSystem(systemName) {
    const systemPath = path.join(__dirname, systemName);

    if (!fs.existsSync(systemPath)) {
      console.log(`⚠️  System not found: ${systemName}`);
      return;
    }

    const logFile = path.join(
      this.logDir, ;
      `${systemName.replace(".js", "")}.log`, ;
    );
    const pidFile = path.join(
      this.pidDir, ;
      `${systemName.replace(".js", "")}.pid`, ;
    );
    const statusFile = path.join(
      this.statusDir, ;
      `${systemName.replace(".js", "")}.status`, ;
    ); /  / Check if already running;
    if (fs.existsSync(pidFile)) {
      const pid = fs.readFileSync(pidFile, "utf8").trim();
      try {
        process.kill(pid, 0); /  / Check if process exists;
        console.log(`⏸️  ${systemName} already running (PID: ${pid})`);
        return;
      } catch (error) { /  / Process not running, remove stale PID file;
        fs.unlinkSync(pidFile);
      }
    }

    console.log(`🚀 Starting ${systemName}...`);

    const child = spawn("node", [systemPath], {
      detached: true, ;
      stdio: ["ignore", "pipe", "pipe"], ;
    }); /  / Save PID;
    fs.writeFileSync(pidFile, child.pid.toString()); /  / Update status;
    fs.writeFileSync(
      statusFile, ;
      JSON.stringify({
        status: "running", ;
        pid: child.pid, ;
        started: new Date().toISOString(), ;
      }), ;
    ); /  / Handle output;
    child.stdout.on("data", (data) = > {
      fs.appendFileSync(logFile, data.toString());
    });

    child.stderr.on("data", (data) = > {
      fs.appendFileSync(logFile, `ERROR: ${data.toString()}`);
    });

    child.on("exit", (code) = > {
      console.log(`🛑 ${systemName} exited with code ${code}`);
      if (fs.existsSync(pidFile)) {
        fs.unlinkSync(pidFile);
      }
      fs.writeFileSync(
        statusFile, ;
        JSON.stringify({
          status: "stopped", ;
          exitCode: code, ;
          stopped: new Date().toISOString(), ;
        }), ;
      );
    });

    console.log(`✅ ${systemName} started (PID: ${child.pid})`);
  }
} /  / CLI handling;
const command = process.argv[2] || "status";

const cleanSystem = new AutonomousSystemsClean();

switch (command) {
  case "status": ;
    cleanSystem.status();
    break;
  case "clean": ;
    cleanSystem.clean();
    break;
  case "restart": ;
    cleanSystem.restart();
    break;
  case "start": ;
    cleanSystem.start();
    break;
  case "stop": ;
    cleanSystem.stop();
    break;
  default: ;
    console.log(
      "Usage: npm run autonomous: status <status|clean|restart|start|stop>", ;
    );
    process.exit(1);
}
