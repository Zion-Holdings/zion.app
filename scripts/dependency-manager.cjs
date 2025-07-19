#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class DependencyManager {
  constructor() {
    this.updates = 0;
    this.startTime = Date.now();
  }

  log(msg, type = 'info') {
    const colors = {
      info: '\x1b[36m',
      success: '\x1b[32m',
      error: '\x1b[31m',
      warning: '\x1b[33m',
      reset: '\x1b[0m',
    };
    const timestamp = new Date().toISOString();
    console.log(`${colors[type]}[${timestamp}] ${msg}${colors.reset}`);
  }

  async runCommand(cmd) {
    try {
      const result = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
      return { success: true, output: result };
    } catch (e) {
      return { success: false, error: e.message };
    }
  }

  async manageDependencies() {
    this.log('📦 Managing dependencies...', 'info');

    // Check for outdated packages
    const outdated = await this.runCommand('npm outdated --json');
    if (outdated.success && outdated.output.trim()) {
      this.log('Found outdated dependencies', 'warning');
      await this.runCommand('npm update');
      this.updates++;
    }

    // Check for security vulnerabilities
    const audit = await this.runCommand('npm audit --json');
    if (audit.success && audit.output.includes('vulnerabilities')) {
      this.log('Found security vulnerabilities', 'error');
      await this.runCommand('npm audit fix --force');
      this.updates++;
    }

    this.log('✅ Dependencies managed', 'success');
  }

  async generateReport() {
    const runtime = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      runtime,
      updates: this.updates,
    };
    fs.writeFileSync(
      'automation/dependency-report.json',
      JSON.stringify(report, null, 2),
    );
  }

  async runCycle() {
    await this.manageDependencies();
    await this.generateReport();
  }

  async start() {
    this.log('🚀 Starting Dependency Manager...', 'success');
    await this.runCycle();
    setInterval(
      async () => {
        await this.runCycle();
      },
      30 * 60 * 1000,
    ); // Every 30 minutes
  }
}

const manager = new DependencyManager();
manager.start().catch(console.error);
