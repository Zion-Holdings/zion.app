#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ContinuousLoop {
  constructor() {
    this.projectRoot = process.cwd();
    this.interval = 5 * 60 * 1000; // 5 minutes
    this.isRunning = false;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runLoop() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.log('🔄 Starting continuous improvement loop...');

    while (this.isRunning) {
      try {
        await this.improvementCycle();
        await this.sleep(this.interval);
      } catch (error) {
        this.log(`❌ Error in improvement loop: ${error.message}`);
        await this.sleep(30000); // Wait 30 seconds on error
      }
    }
  }

  async improvementCycle() {
    this.log('🔍 Running improvement cycle...');

    // Check for TypeScript errors
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      this.log('✅ TypeScript check passed');
    } catch (error) {
      this.log('⚠️ TypeScript errors detected');
    }

    // Check for linting errors
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('✅ Linting check passed');
    } catch (error) {
      this.log('⚠️ Linting errors detected');
    }

    // Auto-commit if there are changes
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      if (status.trim()) {
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "Auto-improvement: Continuous loop updates"', { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        this.log('🚀 Auto-committed improvements');
      }
    } catch (error) {
      this.log(`❌ Auto-commit failed: ${error.message}`);
    }

    this.log('✅ Improvement cycle completed');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  stop() {
    this.isRunning = false;
    this.log('⏹️ Stopping improvement loop...');
  }
}

// Run the loop
if (require.main === module) {
  const loop = new ContinuousLoop();
  loop.runLoop();

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    loop.stop();
    process.exit(0);
  });
}

module.exports = ContinuousLoop; 