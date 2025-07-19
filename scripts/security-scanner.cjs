#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.vulnerabilities = 0;
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: '\x1b[36m',
      success: '\x1b[32m',
      error: '\x1b[31m',
      warning: '\x1b[33m',
      reset: '\x1b[0m',
    };
    console.log(`${colors[type]}[${timestamp}] ${message}${colors.reset}`);
  }

  async runCommand(command) {
    try {
      const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async scanDependencies() {
    this.log('🔒 Scanning dependencies for vulnerabilities...', 'info');
    const auditResult = await this.runCommand('npm audit --json');
    if (auditResult.success) {
      const audit = JSON.parse(auditResult.output);
      if (audit.metadata && audit.metadata.vulnerabilities) {
        const total = Object.values(audit.metadata.vulnerabilities).reduce(
          (a, b) => a + b,
          0,
        );
        this.vulnerabilities += total;
        this.log(
          `Found ${total} vulnerabilities`,
          total > 0 ? 'error' : 'success',
        );
      }
    }
  }

  async scanSecrets() {
    this.log('🔑 Scanning for secrets in code...', 'info');
    const secretsResult = await this.runCommand(
      'grep -r "password\|secret\|key" --include="*.js" --include="*.ts" --include="*.tsx" src/ 2>/dev/null | grep -v "//" | head -5 || true',
    );
    if (secretsResult.success && secretsResult.output.trim()) {
      this.log('Potential secrets found in code!', 'error');
      this.vulnerabilities++;
    } else {
      this.log('No secrets found in code.', 'success');
    }
  }

  async scanConfig() {
    this.log('🛡️ Scanning config files for security best practices...', 'info');
    // Example: check for secure headers in next.config.js
    const config = fs.readFileSync('next.config.js', 'utf8');
    if (!config.includes('headers')) {
      this.log('Security headers not set in next.config.js', 'warning');
      this.vulnerabilities++;
    }
  }

  async generateReport() {
    const runtime = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      runtime: runtime,
      vulnerabilities: this.vulnerabilities,
      uptime: Math.round(runtime / 1000),
    };
    fs.writeFileSync(
      'automation/security-report.json',
      JSON.stringify(report, null, 2),
    );
  }

  async runCycle() {
    this.log('🚀 Starting security scan cycle...', 'info');
    await this.scanDependencies();
    await this.scanSecrets();
    await this.scanConfig();
    await this.generateReport();
    this.log(
      `✅ Security scan cycle completed. Total vulnerabilities: ${this.vulnerabilities}`,
      'success',
    );
  }

  async start() {
    this.log('🚀 Starting Security Scanner...', 'success');
    await this.runCycle();
    setInterval(
      async () => {
        await this.runCycle();
      },
      15 * 60 * 1000,
    ); // Every 15 minutes
    this.log('🎯 Security Scanner is now running continuously', 'success');
  }
}

const scanner = new SecurityScanner();
scanner.start().catch(console.error);
