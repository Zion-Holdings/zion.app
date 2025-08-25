#!/usr/bin/env node
"use strict";

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class GitPullRebase {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'automation/logs/git-pull-rebase.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + '\n');
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async runGitCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        ...options
      });
      return { success: true, output: result.trim() };
    } catch (error) {
      return { success: false, error: error.message, output: error.stdout?.toString() || '' };
    }
  }

  async checkWorkingDirectory() {
    this.log('Checking working directory status...');
    
    const status = await this.runGitCommand('git status --porcelain');
    if (!status.success) {
      this.log(`Error checking git status: ${status.error}`);
      return false;
    }

    if (status.output) {
      this.log(`Working directory not clean: ${status.output.split('\n').length} files modified`);
      return false;
    }

    this.log('Working directory is clean');
    return true;
  }

  async fetchLatest() {
    this.log('Fetching latest changes from remote...');
    
    const fetch = await this.runGitCommand('git fetch origin');
    if (!fetch.success) {
      this.log(`Error fetching from remote: ${fetch.error}`);
      return false;
    }

    this.log('Fetch completed successfully');
    return true;
  }

  async checkForUpdates() {
    this.log('Checking for remote updates...');
    
    const behind = await this.runGitCommand('git rev-list --count HEAD..origin/main');
    if (!behind.success) {
      this.log(`Error checking if behind remote: ${behind.error}`);
      return false;
    }

    const behindCount = parseInt(behind.output);
    if (behindCount > 0) {
      this.log(`Behind remote by ${behindCount} commits`);
      return true;
    } else {
      this.log('Already up to date with remote');
      return false;
    }
  }

  async performRebase() {
    this.log('Performing rebase...');
    
    const rebase = await this.runGitCommand('git rebase origin/main');
    if (!rebase.success) {
      this.log(`Rebase failed: ${rebase.error}`);
      
      // Try to abort rebase and reset
      this.log('Aborting rebase and resetting...');
      await this.runGitCommand('git rebase --abort');
      await this.runGitCommand('git reset --hard HEAD');
      return false;
    }

    this.log('Rebase completed successfully');
    return true;
  }

  async performFastForwardMerge() {
    this.log('Attempting fast-forward merge...');
    
    const merge = await this.runGitCommand('git merge --ff-only origin/main');
    if (!merge.success) {
      this.log(`Fast-forward merge failed: ${merge.error}`);
      return false;
    }

    this.log('Fast-forward merge completed successfully');
    return true;
  }

  async run() {
    this.log('Starting git pull rebase process...');
    
    try {
      // Check if working directory is clean
      const isClean = await this.checkWorkingDirectory();
      if (!isClean) {
        this.log('Working directory not clean, skipping pull/rebase');
        return;
      }

      // Fetch latest changes
      const fetchSuccess = await this.fetchLatest();
      if (!fetchSuccess) {
        this.log('Failed to fetch latest changes');
        return;
      }

      // Check if we need updates
      const hasUpdates = await this.checkForUpdates();
      if (!hasUpdates) {
        this.log('No updates needed');
        return;
      }

      // Try fast-forward merge first
      const fastForwardSuccess = await this.performFastForwardMerge();
      if (fastForwardSuccess) {
        this.log('Fast-forward merge successful');
        return;
      }

      // If fast-forward fails, try rebase
      this.log('Fast-forward merge failed, trying rebase...');
      const rebaseSuccess = await this.performRebase();
      
      if (rebaseSuccess) {
        this.log('Rebase successful');
      } else {
        this.log('Rebase failed, manual intervention may be needed');
      }
      
    } catch (error) {
      this.log(`Error in git pull rebase process: ${error.message}`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const gitPullRebase = new GitPullRebase();
  gitPullRebase.run().catch((err) => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = GitPullRebase;
