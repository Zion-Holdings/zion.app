#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class EnhancedAutoCommitPush {
  constructor(options = {}) {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.interval = null;
    this.intervalMs = options.intervalMs || 60 * 1000; // Default: 1 minute
    this.logFile = path.join(this.projectRoot, 'logs', 'auto-commit.log');
    this.configFile = path.join(this.projectRoot, 'config', 'auto-commit.json');
    this.ensureDirectories();
    this.loadConfig();
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    const configDir = path.dirname(this.configFile);
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    if (!fs.existsSync(configDir)) {
      fs.mkdirSync(configDir, { recursive: true });
    }
  }

  loadConfig() {
    try {
      if (fs.existsSync(this.configFile)) {
        this.config = JSON.parse(fs.readFileSync(this.configFile, 'utf8'));
      } else {
        this.config = {
          enabled: true,
          commitMessage: 'Auto-commit: {timestamp}',
          excludePatterns: [
            'node_modules/**',
            'logs/**',
            'temp/**',
            '*.log',
            '.env.local',
            '.env.production'
          ],
          maxRetries: 3,
          retryDelay: 5000
        };
        this.saveConfig();
      }
    } catch (error) {
      this.log(`Error loading config: ${error.message}`);
      this.config = { enabled: true };
    }
  }

  saveConfig() {
    try {
      fs.writeFileSync(this.configFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.log(`Error saving config: ${error.message}`);
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async executeCommand(command, options = {}) {
    const defaultOptions = {
      cwd: this.projectRoot,
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 30000
    };

    try {
      const result = execSync(command, { ...defaultOptions, ...options });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message, 
        code: error.status || error.code 
      };
    }
  }

  async checkGitStatus() {
    const result = await this.executeCommand('git status --porcelain');
    if (!result.success) {
      this.log(`Error checking git status: ${result.error}`, 'ERROR');
      return '';
    }
    return result.output.trim();
  }

  async hasChanges() {
    const status = await this.checkGitStatus();
    return status.length > 0;
  }

  shouldExcludeFile(filePath) {
    if (!this.config.excludePatterns) return false;
    
    return this.config.excludePatterns.some(pattern => {
      if (pattern.includes('**')) {
        const regex = new RegExp(pattern.replace(/\*\*/g, '.*'));
        return regex.test(filePath);
      }
      return filePath.includes(pattern);
    });
  }

  async getChangedFiles() {
    const status = await this.checkGitStatus();
    if (!status) return [];

    return status.split('\n')
      .filter(line => line.trim())
      .map(line => {
        const status = line.substring(0, 2).trim();
        const file = line.substring(3);
        return { status, file };
      })
      .filter(({ file }) => !this.shouldExcludeFile(file));
  }

  async commitChanges() {
    try {
      const changedFiles = await this.getChangedFiles();
      if (changedFiles.length === 0) {
        this.log('No changes to commit after filtering', 'INFO');
        return true;
      }

      this.log(`Found ${changedFiles.length} files to commit`, 'INFO');

      // Add all changes
      const addResult = await this.executeCommand('git add .');
      if (!addResult.success) {
        this.log(`Error adding files: ${addResult.error}`, 'ERROR');
        return false;
      }

      // Create commit message
      const timestamp = new Date().toISOString();
      const commitMessage = this.config.commitMessage.replace('{timestamp}', timestamp);

      // Commit changes
      const commitResult = await this.executeCommand(`git commit -m "${commitMessage}"`);
      if (!commitResult.success) {
        this.log(`Error committing changes: ${commitResult.error}`, 'ERROR');
        return false;
      }

      this.log(`Committed ${changedFiles.length} files: ${commitMessage}`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Error in commit process: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async pushChanges(retryCount = 0) {
    try {
      // Get current branch
      const branchResult = await this.executeCommand('git branch --show-current');
      if (!branchResult.success) {
        this.log(`Error getting current branch: ${branchResult.error}`, 'ERROR');
        return false;
      }

      const currentBranch = branchResult.output.trim();

      // Push to current branch
      const pushResult = await this.executeCommand(`git push origin ${currentBranch}`);
      if (!pushResult.success) {
        if (retryCount < this.config.maxRetries) {
          this.log(`Push failed, retrying in ${this.config.retryDelay}ms (attempt ${retryCount + 1}/${this.config.maxRetries})`, 'WARN');
          await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
          return this.pushChanges(retryCount + 1);
        } else {
          this.log(`Push failed after ${this.config.maxRetries} attempts: ${pushResult.error}`, 'ERROR');
          return false;
        }
      }

      this.log(`Pushed changes to ${currentBranch}`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Error in push process: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async performAutoCommit() {
    if (!this.config.enabled) {
      this.log('Auto-commit is disabled in config', 'INFO');
      return;
    }

    try {
      // Check if there are any changes
      if (!(await this.hasChanges())) {
        this.log('No changes detected, skipping commit', 'INFO');
        return;
      }

      this.log('Changes detected, starting auto-commit process...', 'INFO');

      // Commit changes
      const commitSuccess = await this.commitChanges();
      if (!commitSuccess) {
        this.log('Failed to commit changes, skipping push', 'ERROR');
        return;
      }

      // Push changes
      const pushSuccess = await this.pushChanges();
      if (pushSuccess) {
        this.log('Auto-commit and push completed successfully', 'SUCCESS');
      } else {
        this.log('Auto-commit completed but push failed', 'WARN');
      }

    } catch (error) {
      this.log(`Error in auto-commit process: ${error.message}`, 'ERROR');
    }
  }

  start() {
    if (this.isRunning) {
      this.log('Auto-commit is already running', 'WARN');
      return;
    }

    this.isRunning = true;
    this.log(`Starting auto-commit automation (every ${this.intervalMs / 1000} seconds)...`, 'INFO');

    // Perform initial check
    this.performAutoCommit();

    // Set up interval
    this.interval = setInterval(() => {
      this.performAutoCommit();
    }, this.intervalMs);

    this.log('Auto-commit automation started successfully', 'SUCCESS');
  }

  stop() {
    if (!this.isRunning) {
      this.log('Auto-commit is not running', 'WARN');
      return;
    }

    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    this.isRunning = false;
    this.log('Auto-commit automation stopped', 'INFO');
  }

  status() {
    const status = this.isRunning ? 'RUNNING' : 'STOPPED';
    this.log(`Auto-commit status: ${status}`, 'INFO');
    return this.isRunning;
  }

  async analyze() {
    this.log('=== Auto-Commit Analysis ===', 'INFO');
    
    // Check git status
    const hasChanges = await this.hasChanges();
    this.log(`Has uncommitted changes: ${hasChanges}`, 'INFO');
    
    if (hasChanges) {
      const changedFiles = await this.getChangedFiles();
      this.log(`Changed files (${changedFiles.length}):`, 'INFO');
      changedFiles.forEach(({ status, file }) => {
        this.log(`  ${status} ${file}`, 'INFO');
      });
    }

    // Check current branch
    const branchResult = await this.executeCommand('git branch --show-current');
    if (branchResult.success) {
      this.log(`Current branch: ${branchResult.output.trim()}`, 'INFO');
    } else {
      this.log(`Error getting current branch: ${branchResult.error}`, 'ERROR');
    }

    // Check remote status
    const remoteResult = await this.executeCommand('git remote -v');
    if (remoteResult.success) {
      this.log(`Remote repositories:\n${remoteResult.output}`, 'INFO');
    } else {
      this.log(`Error checking remote status: ${remoteResult.error}`, 'ERROR');
    }

    // Show config
    this.log(`Configuration:`, 'INFO');
    this.log(`  Enabled: ${this.config.enabled}`, 'INFO');
    this.log(`  Interval: ${this.intervalMs / 1000} seconds`, 'INFO');
    this.log(`  Max retries: ${this.config.maxRetries}`, 'INFO');
    this.log(`  Exclude patterns: ${this.config.excludePatterns?.length || 0}`, 'INFO');

    this.log('=== Analysis Complete ===', 'INFO');
  }

  updateConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
    this.saveConfig();
    this.log('Configuration updated', 'INFO');
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    console.log('Usage: node auto-commit-push-enhanced.cjs [start|stop|status|analyze|config]');
    console.log('');
    console.log('Commands:');
    console.log('  start   - Start auto-commit automation (commits and pushes every minute)');
    console.log('  stop    - Stop auto-commit automation');
    console.log('  status  - Show current status');
    console.log('  analyze - Analyze current git state and configuration');
    console.log('  config  - Show current configuration');
    process.exit(1);
  }

  const autoCommit = new EnhancedAutoCommitPush();

  switch (command) {
    case 'start':
      autoCommit.start();
      break;
    case 'stop':
      autoCommit.stop();
      break;
    case 'status':
      autoCommit.status();
      break;
    case 'analyze':
      autoCommit.analyze();
      break;
    case 'config':
      console.log('Current configuration:');
      console.log(JSON.stringify(autoCommit.config, null, 2));
      break;
    default:
      console.log(`Unknown command: ${command}`);
      console.log('Available commands: start, stop, status, analyze, config');
      process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  const autoCommit = new EnhancedAutoCommitPush();
  autoCommit.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  const autoCommit = new EnhancedAutoCommitPush();
  autoCommit.stop();
  process.exit(0);
});

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = EnhancedAutoCommitPush; 