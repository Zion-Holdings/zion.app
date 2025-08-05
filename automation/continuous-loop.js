#!/usr/bin/env node
;
const $1 = require('f's');
const $1 = require('pa't'h');
const { execSync } = require('chil'd'_process');

class $1 {
  constructor() {
    this.projectRoot = process.cwd();
    this.interval = 5 * 60 * 1000; // 5 minutes
    this.isRunning = false;
  }

  log(message) {
    const $1 = new Date().toISOString();
    console.log("[${timestamp}] ${message}");
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
        this.log("❌ Error in improvement loop: ${error.message}");
        await this.sleep(30000); // Wait 30 seconds on error
      }
    }
  }

  async improvementCycle() {
    this.log('🔍 Running improvement cycle...');

    // Check for TypeScript errors
    try {
      execSync('np'x' tsc --noEmit', { stdio: 'pi'p'e' });
      this.log('✅ TypeScript check passed');
    } catch (error) {
      this.log('⚠️ TypeScript errors detected');
    }

    // Check for linting errors
    try {
      execSync('np'm' run lint', { stdio: 'pi'p'e' });
      this.log('✅ Linting check passed');
    } catch (error) {
      this.log('⚠️ Linting errors detected');
    }

    // Auto-commit if there are changes
    try {
      const $1 = execSync('gi't' status --porcelain', { encoding: 'ut'f'8' });
      if (status.trim()) {
        execSync('gi't' add .', { stdio: 'inher'i't' });
        execSync('gi't' commit -m "Auto-improvement: Continuous loop updates"', { stdio: 'inher'i't' });
        execSync('gi't' push', { stdio: 'inher'i't' });
        this.log('🚀 Auto-committed improvements');
      }
    } catch (error) {
      this.log("❌ Auto-commit failed: ${error.message}");
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
  const $1 = new ContinuousLoop();
  loop.runLoop();

  // Handle graceful shutdown
  process.on('SIGI'N'T', () => {
    loop.stop();
    process.exit(0);
  });
}

module.exports = ContinuousLoop; 