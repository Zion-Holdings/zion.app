const fs = require("fs");
const path = require("path");
const { spawn, execSync } = require("child_process");
const { v4: uuidv4 } = require("uuid");
const cron = require("node-cron");

// Batch processing for optimized file operations
const writeBatch = {
  queue: [],
  maxSize: 100,
  flushInterval: 5000,

  add(filePath, content) {
    this.queue.push({ filePath, content, timestamp: Date.now() });
    if (this.queue.length >= this.maxSize) {
      this.flush();
    }
  },

  flush() {
    if (this.queue.length === 0) return;

    this.queue.forEach((item) => {
      try {
        fs.writeFileSync(item.filePath, item.content);
      } catch (error) {
        console.error(`Error writing file ${item.filePath}:`, error.message);
      }
    });

    this.queue = [];
  },
};

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

class GitSyncAutomation {
  constructor() {
    this.id = "git-sync-automation";
    this.version = "2.0";
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
    const directories = ["sync-logs", "sync-status", "sync-reports"];

    directories.forEach((dir) => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log("🔄 Initializing Git Sync Automation...");
      await this.checkGitStatus();
      this.status = "running";
      console.log("✅ Git Sync Automation initialized successfully");
    } catch (error) {
      console.error(
        "❌ Failed to initialize Git Sync Automation: ",
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

    console.log("🔄 Starting auto-commit...");
    console.log("🚀 Starting auto-push...");

    // Start monitoring
    this.startMonitoring();
  }

  async performAutoCommit() {
    try {
      console.log("🔄 Performing auto-commit...");
      const changedFiles = this.getChangedFiles();

      if (changedFiles.length > 0) {
        execSync("git add .", { stdio: "pipe" });

        const commitMessage = `${this.config.commitMessagePrefix}: ${new Date().toISOString()} - ${changedFiles.length} files`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: "pipe" });
        console.log("✅ Auto-commit successful");
      } else {
        console.log("✅ No changes to commit");
      }
    } catch (error) {
      console.error("❌ Auto-commit failed: ", error.message);
      await this.handleError("commit", error);
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
      "sync-logs",
      `error-${Date.now()}.json`,
    );
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));

    if (operation === "commit") {
      // Retry commit after error
      setTimeout(() => this.performAutoCommit(), 10000);
    } else if (operation === "push") {
      // Retry push after error
      setTimeout(() => this.performAutoPush(), 15000);
    }
  }

  startMonitoring() {
    // Set up auto-commit monitoring (every 30 seconds)
    setInterval(() => {
      this.performAutoCommit();
    }, 30000);

    // Set up auto-push monitoring (every 60 seconds)
    setInterval(() => {
      this.performAutoPush();
    }, 60000);
  }

  generateReport() {
    const statusPath = path.join(
      __dirname,
      "sync-status",
      "current-status.json",
    );

    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      version: this.version,
      uptime: process.uptime(),
    };

    fs.writeFileSync(statusPath, JSON.stringify(report, null, 2));
    console.log("📊 Generated sync report");
  }

  async shutdown() {
    console.log("🛑 Shutting down Git Sync Automation...");
    this.status = "stopped";
    this.generateReport();
    console.log("✅ Git Sync Automation shutdown complete");
  }
}

// Signal handlers
process.on("SIGTERM", async () => {
  console.log("🛑 Received SIGTERM, shutting down...");
  await gitSync.shutdown();
  process.exit(0);
});

process.on("SIGINT", async () => {
  console.log("🛑 Received SIGINT, shutting down...");
  await gitSync.shutdown();
  process.exit(0);
});

// Initialize and start
const gitSync = new GitSyncAutomation();

gitSync
  .initialize()
  .then(() => {
    gitSync.start();
  })
  .catch((error) => {
    console.error("❌ Failed to start Git Sync Automation: ", error.message);
    process.exit(1);
  });
