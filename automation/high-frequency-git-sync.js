const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,

  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.value;
    }
    return null;
  },

  setCached(key, value) {
    this.cache.set(key, { value, timestamp: Date.now() });
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  },
};

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === "true";

class HighFrequencyGitSync {
  constructor() {
    this.id = "high-frequency-git-sync";
    this.version = "3.0";
    this.status = "initializing";
    this.config = {
      commitMessagePrefix: "Auto-sync",
      includePatterns: [
        "automation/**",
        "pages/**",
        "components/**",
        "utils/**",
        "styles/**",
        "scripts/**",
      ],
      excludePatterns: [
        "automation/logs/**",
        "automation/temp/**",
        "automation/backups/**",
        "automation/reports/**",
        "node_modules/**",
        ".git/**",
        "*.log",
        "*.pid",
      ],
    };
    this.setupDirectories();
  }

  setupDirectories() {
    const directories = [
      "high-frequency-sync-logs",
      "high-frequency-sync-status",
      "high-frequency-sync-reports",
    ];

    directories.forEach((dir) => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log("🔄 Initializing High Frequency Git Sync...");
      await this.checkGitStatus();
      this.status = "running";
      console.log("✅ High Frequency Git Sync initialized successfully");
    } catch (error) {
      console.error(
        "❌ Failed to initialize High Frequency Git Sync: ",
        error.message,
      );
      this.status = "error";
    }
  }

  async checkGitStatus() {
    try {
      execSync("git status", { stdio: "pipe" });
      console.log("✅ Git repository status OK");
    } catch (error) {
      console.error("❌ Git repository status check failed: ", error.message);
    }
  }

  async start() {
    console.log("👀 Starting file watching...");
    const watchDirs = [
      "pages",
      "components",
      "utils",
      "styles",
      "scripts",
      "automation",
    ];

    console.log("🔄 Starting high-frequency sync...");
    console.log("🚀 Starting auto-push...");

    // Start monitoring
    this.startMonitoring();
  }

  async performHighFrequencySync() {
    try {
      console.log("🔄 Performing high-frequency sync...");
      const changedFiles = this.getChangedFiles();

      if (changedFiles.length > 0) {
        execSync("git add .", { stdio: "pipe" });

        const commitMessage = `${this.config.commitMessagePrefix}: ${new Date().toISOString()} - ${changedFiles.length} files`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: "pipe" });
        console.log("✅ High-frequency sync successful");
      } else {
        console.log("✅ No changes to sync");
      }
    } catch (error) {
      console.error("❌ High-frequency sync failed: ", error.message);
      await this.handleError("sync", error);
    }
  }

  async performAutoPush() {
    try {
      console.log("🚀 Performing auto-push...");

      const commitsToPush = execSync("git log --oneline origin/main..HEAD", {
        encoding: "utf8",
      });

      if (commitsToPush.trim()) {
        execSync("git push origin main", { stdio: "pipe" });
        console.log("✅ Auto-push successful");
      } else {
        console.log("✅ No commits to push");
      }
    } catch (error) {
      console.error("❌ Auto-push failed: ", error.message);
      await this.handleError("push", error);
    }
  }

  getChangedFiles() {
    try {
      const status = execSync("git status --porcelain", {
        encoding: "utf8",
      });
      const files = status
        .trim()
        .split("\n")
        .filter((line) => line.trim());
      return files.map((file) => file.substring(3));
    } catch (error) {
      console.error("❌ Error getting changed files: ", error.message);
      return [];
    }
  }

  shouldIncludeFile(filePath) {
    return this.config.includePatterns.some((pattern) => {
      const regex = new RegExp(
        pattern.replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*"),
      );
      return regex.test(filePath);
    });
  }

  shouldExcludeFile(filePath) {
    return this.config.excludePatterns.some((pattern) => {
      const regex = new RegExp(
        pattern.replace(/\*\*/g, ".*").replace(/\*/g, "[^/]*"),
      );
      return regex.test(filePath);
    });
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
      "high-frequency-sync-logs",
      `error-${Date.now()}.json`,
    );
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));

    if (operation === "sync") {
      // Retry sync after error
      setTimeout(() => this.performHighFrequencySync(), 5000);
    } else if (operation === "push") {
      // Retry push after error
      setTimeout(() => this.performAutoPush(), 10000);
    }
  }

  startMonitoring() {
    // Set up high-frequency monitoring (every 5 seconds)
    setInterval(() => {
      this.performHighFrequencySync();
    }, 5000);

    // Set up auto-push monitoring (every 10 seconds)
    setInterval(() => {
      this.performAutoPush();
    }, 10000);
  }

  generateReport() {
    const statusPath = path.join(
      __dirname,
      "high-frequency-sync-status",
      "current-status.json",
    );

    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      version: this.version,
      uptime: process.uptime(),
    };

    fs.writeFileSync(statusPath, JSON.stringify(report, null, 2));
    console.log("📊 Generated high-frequency sync report");
  }

  async shutdown() {
    console.log("🛑 Shutting down High Frequency Git Sync...");
    this.status = "stopped";
    this.generateReport();
    console.log("✅ High Frequency Git Sync shutdown complete");
  }
}

// Signal handlers
process.on("SIGTERM", async () => {
  console.log("🛑 Received SIGTERM, shutting down...");
  await highFreqSync.shutdown();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("🛑 Received SIGINT, shutting down...");
  await highFreqSync.shutdown();
  process.exit(0);
});

// Initialize and start
const highFreqSync = new HighFrequencyGitSync();

highFreqSync
  .initialize()
  .then(() => {
    highFreqSync.start();
  })
  .catch((error) => {
    console.error(
      "❌ Failed to start High Frequency Git Sync: ",
      error.message,
    );
    process.exit(1);
  });
