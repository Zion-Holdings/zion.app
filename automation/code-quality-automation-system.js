#!/usr/bin/env node

/**
 * Code Quality Automation System
 * Continuously monitors and fixes various code quality issues
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const chokidar = require("chokidar");

class CodeQualityAutomationSystem {
  constructor() {
    this.config = {
      watchPatterns: ["**/*.md", "**/*.js", "**/*.ts", "**/*.tsx"],
      ignorePatterns: ["**/node_modules/**", "**/.git/**"],
      fixInterval: 60000,
      autoCommit: true,
    };

    this.status = {
      isRunning: false,
      lastFixTime: null,
      totalErrorsFixed: 0,
    };

    this.logFile = path.join(__dirname, "logs", "code-quality-automation.log");
    this.statusFile = path.join(
      __dirname,
      "status",
      "code-quality-status.json",
    );

    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [path.dirname(this.logFile), path.dirname(this.statusFile)];

    dirs.forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    console.log(logMessage);

    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  async installDependencies() {
    try {
      this.log("info", "Installing code quality dependencies...");
      execSync("npm install --save-dev markdownlint-cli eslint prettier", {
        stdio: "inherit",
      });
      this.log("info", "Dependencies installed successfully");
    } catch (error) {
      this.log("error", `Failed to install dependencies: ${error.message}`);
    }
  }

  async fixMarkdownErrors() {
    try {
      this.log("info", "Fixing markdown errors...");
      execSync('npx markdownlint-cli "**/*.md" --fix', { stdio: "inherit" });
      this.log("info", "Markdown errors fixed");
      return true;
    } catch (error) {
      this.log("error", `Failed to fix markdown errors: ${error.message}`);
      return false;
    }
  }

  async fixESLintErrors() {
    try {
      this.log("info", "Fixing ESLint errors...");
      execSync('npx eslint "**/*.{js,ts,tsx}" --fix', { stdio: "inherit" });
      this.log("info", "ESLint errors fixed");
      return true;
    } catch (error) {
      this.log("error", `Failed to fix ESLint errors: ${error.message}`);
      return false;
    }
  }

  async fixPrettierErrors() {
    try {
      this.log("info", "Fixing Prettier formatting...");
      execSync('npx prettier --write "**/*.{js,ts,tsx,json,md}"', {
        stdio: "inherit",
      });
      this.log("info", "Prettier formatting fixed");
      return true;
    } catch (error) {
      this.log("error", `Failed to fix Prettier errors: ${error.message}`);
      return false;
    }
  }

  async autoCommitChanges() {
    if (!this.config.autoCommit) return;

    try {
      const status = execSync("git status --porcelain", { encoding: "utf8" });

      if (status.trim()) {
        execSync("git add .", { stdio: "inherit" });
        execSync('git commit -m "Auto-fix: Code quality improvements"', {
          stdio: "inherit",
        });
        this.log("info", "Changes auto-committed successfully");
      }
    } catch (error) {
      this.log("error", `Failed to auto-commit changes: ${error.message}`);
    }
  }

  async runFixCycle() {
    try {
      this.log("info", "Running code quality fix cycle...");

      let fixed = 0;

      // Fix markdown errors
      if (await this.fixMarkdownErrors()) fixed++;

      // Fix ESLint errors
      if (await this.fixESLintErrors()) fixed++;

      // Fix Prettier errors
      if (await this.fixPrettierErrors()) fixed++;

      // Auto-commit if changes were made
      if (fixed > 0) {
        await this.autoCommitChanges();
      }

      this.status.totalErrorsFixed += fixed;
      this.status.lastFixTime = new Date().toISOString();

      this.log("info", `Fixed ${fixed} error types in this cycle`);
    } catch (error) {
      this.log("error", `Error in fix cycle: ${error.message}`);
    }
  }

  async startWatching() {
    this.log("info", "Starting code quality automation system...");

    // Install dependencies
    await this.installDependencies();

    // Initial fix
    await this.runFixCycle();

    // Set up file watching
    const watcher = chokidar.watch(this.config.watchPatterns, {
      ignored: this.config.ignorePatterns,
      persistent: true,
    });

    watcher.on("change", async (filePath) => {
      this.log("info", `File changed: ${filePath}`);
      await this.runFixCycle();
    });

    // Set up periodic fixes
    setInterval(async () => {
      await this.runFixCycle();
    }, this.config.fixInterval);

    this.status.isRunning = true;

    this.log("info", "Code quality automation system is now running");

    // Keep the process alive
    process.on("SIGINT", () => {
      this.log("info", "Shutting down code quality automation system...");
      watcher.close();
      this.status.isRunning = false;
      process.exit(0);
    });
  }

  getStatus() {
    return {
      ...this.status,
      config: this.config,
    };
  }
}

// CLI interface
if (require.main === module) {
  const system = new CodeQualityAutomationSystem();

  const command = process.argv[2];

  switch (command) {
    case "start":
      system.startWatching();
      break;
    case "fix":
      system.runFixCycle();
      break;
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    default:
      console.log(
        "Usage: node code-quality-automation-system.js [start|fix|status]",
      );
      console.log("  start  - Start the automation system");
      console.log("  fix    - Run a single fix cycle");
      console.log("  status - Show system status");
  }
}

module.exports = CodeQualityAutomationSystem;
