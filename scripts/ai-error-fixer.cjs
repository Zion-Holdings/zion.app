#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class AIErrorFixer {
  constructor() {
    this.fixes = 0;
    this.startTime = Date.now();
  }

  log(msg, type = 'info') {
    const colors = { info: '\x1b[36m', success: '\x1b[32m', error: '\x1b[31m', warning: '\x1b[33m', reset: '\x1b[0m' };
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

  async detectAndFix() {
    this.log('🔍 Detecting errors...', 'info');
    const lint = await this.runCommand('npx eslint src/ --ext .js,.jsx,.ts,.tsx');
    if (lint.output && lint.output.includes('error')) {
      this.log('❌ Errors found, attempting to fix...', 'error');
      await this.runCommand('npx eslint src/ --ext .js,.jsx,.ts,.tsx --fix');
      this.fixes++;
      this.log('✅ Errors fixed', 'success');
    } else {
      this.log('No errors found', 'success');
    }
  }

  async generateReport() {
    const runtime = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      runtime,
      fixes: this.fixes
    };
    fs.writeFileSync('automation/error-fixer-report.json', JSON.stringify(report, null, 2));
  }

  async runCycle() {
    await this.detectAndFix();
    await this.generateReport();
  }

  async start() {
    this.log('🚀 Starting AI Error Fixer...', 'success');
    await this.runCycle();
    setInterval(async () => {
      await this.runCycle();
    }, 10 * 60 * 1000);
  }
}

const fixer = new AIErrorFixer();
fixer.start().catch(console.error); 