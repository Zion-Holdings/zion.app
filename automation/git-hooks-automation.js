#!/usr/bin/env node

/**
 * Git Hooks Automation System
 * Automates the setup and management of Git hooks for code quality
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class GitHooksAutomationSystem {
  constructor() {
    this.projectRoot = process.cwd();
    this.hooksDir = path.join(this.projectRoot, ".git", "hooks");
    this.packageJsonPath = path.join(this.projectRoot, "package.json");
    this.huskyDir = path.join(this.projectRoot, ".husky");

    this.config = {
      autoCommit: true,
      preCommitChecks: ["lint", "test"],
      prePushChecks: ["lint", "test", "build"],
      commitMsgChecks: ["conventional-commits"],
    };
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async installHusky() {
    try {
      this.log("info", "Installing Husky...");
      execSync("npm install --save-dev husky", { stdio: "inherit" });

      // Initialize Husky
      execSync("npx husky install", { stdio: "inherit" });

      this.log("info", "Husky installed and initialized successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to install Husky: ${error.message}`);
      return false;
    }
  }

  async createPreCommitHook() {
    try {
      this.log("info", "Creating pre-commit hook...");

      const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Run lint-staged
npx lint-staged

# Run additional checks
echo "Running pre-commit checks..."

# Run markdown linting
if command -v npx >/dev/null 2>&1; then
    npx markdownlint-cli "**/*.md" --fix || true
fi

# Run ESLint
if command -v npx >/dev/null 2>&1; then
    npx eslint "**/*.{js,ts,tsx}" --fix || true
fi

# Run Prettier
if command -v npx >/dev/null 2>&1; then
    npx prettier --write "**/*.{js,ts,tsx,json,md}" || true
fi

echo "Pre-commit checks completed"
`;

      const hookPath = path.join(this.huskyDir, "pre-commit");
      fs.writeFileSync(hookPath, hookContent);
      fs.chmodSync(hookPath, "755");

      this.log("info", "Pre-commit hook created successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to create pre-commit hook: ${error.message}`);
      return false;
    }
  }

  async createPrePushHook() {
    try {
      this.log("info", "Creating pre-push hook...");

      const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "Running pre-push checks..."

# Run tests
if [ -f "package.json" ]; then
    npm test || exit 1
fi

# Run build check
if [ -f "package.json" ]; then
    npm run build || exit 1
fi

# Run type checking
if command -v npx >/dev/null 2>&1; then
    npx tsc --noEmit || exit 1
fi

echo "Pre-push checks completed"
`;

      const hookPath = path.join(this.huskyDir, "pre-push");
      fs.writeFileSync(hookPath, hookContent);
      fs.chmodSync(hookPath, "755");

      this.log("info", "Pre-push hook created successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to create pre-push hook: ${error.message}`);
      return false;
    }
  }

  async createCommitMsgHook() {
    try {
      this.log("info", "Creating commit-msg hook...");

      const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Conventional commits validation
commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\\(.+\\))?: .{1,50}'

if ! grep -qE "$commit_regex" "$1"; then
    echo "ERROR: Commit message format is invalid."
    echo "Expected format: <type>(<scope>): <description>"
    echo "Types: feat, fix, docs, style, refactor, test, chore"
    echo "Example: feat(auth): add login functionality"
    exit 1
fi

echo "Commit message validation passed"
`;

      const hookPath = path.join(this.huskyDir, "commit-msg");
      fs.writeFileSync(hookPath, hookContent);
      fs.chmodSync(hookPath, "755");

      this.log("info", "Commit-msg hook created successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to create commit-msg hook: ${error.message}`);
      return false;
    }
  }

  async createPostCommitHook() {
    try {
      this.log("info", "Creating post-commit hook...");

      const hookContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo "Running post-commit actions..."

# Update git sync automation if it exists
if [ -f "automation/git-sync-automation.js" ]; then
    node automation/git-sync-automation.js sync
fi

# Log commit information
echo "Commit $(git rev-parse --short HEAD) completed at $(date)"
echo "Files changed:"
git diff-tree --no-commit-id --name-only -r HEAD

echo "Post-commit actions completed"
`;

      const hookPath = path.join(this.huskyDir, "post-commit");
      fs.writeFileSync(hookPath, hookContent);
      fs.chmodSync(hookPath, "755");

      this.log("info", "Post-commit hook created successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to create post-commit hook: ${error.message}`);
      return false;
    }
  }

  async setupLintStaged() {
    try {
      this.log("info", "Setting up lint-staged...");

      // Install lint-staged
      execSync("npm install --save-dev lint-staged", { stdio: "inherit" });

      // Read existing package.json
      let packageJson = {};
      if (fs.existsSync(this.packageJsonPath)) {
        packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, "utf8"));
      }

      // Add lint-staged configuration
      packageJson["lint-staged"] = {
        "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"],
        "*.md": ["markdownlint-cli --fix"],
        "*.{json,yml,yaml}": ["prettier --write"],
      };

      // Write updated package.json
      fs.writeFileSync(
        this.packageJsonPath,
        JSON.stringify(packageJson, null, 2),
      );

      this.log("info", "Lint-staged configured successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to setup lint-staged: ${error.message}`);
      return false;
    }
  }

  async runPreCommitChecks() {
    try {
      this.log("info", "Running pre-commit checks...");

      // Run lint-staged
      execSync("npx lint-staged", { stdio: "inherit" });

      // Run markdown linting
      execSync('npx markdownlint-cli "**/*.md" --fix', { stdio: "inherit" });

      // Run ESLint
      execSync('npx eslint "**/*.{js,ts,tsx}" --fix', { stdio: "inherit" });

      // Run Prettier
      execSync('npx prettier --write "**/*.{js,ts,tsx,json,md}"', {
        stdio: "inherit",
      });

      this.log("info", "Pre-commit checks completed successfully");
      return true;
    } catch (error) {
      this.log("error", `Pre-commit checks failed: ${error.message}`);
      return false;
    }
  }

  async runPrePushChecks() {
    try {
      this.log("info", "Running pre-push checks...");

      // Run tests
      execSync("npm test", { stdio: "inherit" });

      // Run build
      execSync("npm run build", { stdio: "inherit" });

      // Run type checking
      execSync("npx tsc --noEmit", { stdio: "inherit" });

      this.log("info", "Pre-push checks completed successfully");
      return true;
    } catch (error) {
      this.log("error", `Pre-push checks failed: ${error.message}`);
      return false;
    }
  }

  async setupAllHooks() {
    try {
      this.log("info", "Setting up all git hooks...");

      // Install Husky
      if (!(await this.installHusky())) {
        return false;
      }

      // Setup lint-staged
      if (!(await this.setupLintStaged())) {
        return false;
      }

      // Create hooks
      const hooks = [
        this.createPreCommitHook(),
        this.createPrePushHook(),
        this.createCommitMsgHook(),
        this.createPostCommitHook(),
      ];

      const results = await Promise.all(hooks);
      const success = results.every((result) => result);

      if (success) {
        this.log("info", "All git hooks setup completed successfully");
      } else {
        this.log("error", "Some git hooks failed to setup");
      }

      return success;
    } catch (error) {
      this.log("error", `Failed to setup git hooks: ${error.message}`);
      return false;
    }
  }

  async removeHooks() {
    try {
      this.log("info", "Removing git hooks...");

      const hookFiles = ["pre-commit", "pre-push", "commit-msg", "post-commit"];

      for (const hookFile of hookFiles) {
        const hookPath = path.join(this.huskyDir, hookFile);
        if (fs.existsSync(hookPath)) {
          fs.unlinkSync(hookPath);
          this.log("info", `Removed ${hookFile} hook`);
        }
      }

      this.log("info", "Git hooks removed successfully");
      return true;
    } catch (error) {
      this.log("error", `Failed to remove git hooks: ${error.message}`);
      return false;
    }
  }

  getStatus() {
    const hooks = ["pre-commit", "pre-push", "commit-msg", "post-commit"];
    const status = {};

    for (const hook of hooks) {
      const hookPath = path.join(this.huskyDir, hook);
      status[hook] = fs.existsSync(hookPath);
    }

    return {
      hooks: status,
      huskyInstalled: fs.existsSync(this.huskyDir),
      lintStagedConfigured:
        fs.existsSync(this.packageJsonPath) &&
        JSON.parse(
          fs.readFileSync(this.packageJsonPath, "utf8"),
        ).hasOwnProperty("lint-staged"),
    };
  }
}

// CLI interface
if (require.main === module) {
  const system = new GitHooksAutomationSystem();

  const command = process.argv[2];

  switch (command) {
    case "setup":
      system.setupAllHooks();
      break;
    case "remove":
      system.removeHooks();
      break;
    case "pre-commit":
      system.runPreCommitChecks();
      break;
    case "pre-push":
      system.runPrePushChecks();
      break;
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    default:
      console.log(
        "Usage: node git-hooks-automation.js [setup|remove|pre-commit|pre-push|status]",
      );
      console.log("  setup      - Setup all git hooks");
      console.log("  remove     - Remove all git hooks");
      console.log("  pre-commit - Run pre-commit checks");
      console.log("  pre-push   - Run pre-push checks");
      console.log("  status     - Show hooks status");
  }
}

module.exports = GitHooksAutomationSystem;
