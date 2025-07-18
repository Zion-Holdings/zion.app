#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

class AutomationMonitor {
  constructor() {
    this.processes = [
      'ai-app-improver.cjs',
      'continuous-optimization.cjs',
      'performance-optimizer.cjs',
      'security-scanner.cjs',
      'code-quality-enhancer.cjs',
      'dependency-manager.cjs',
      'build-optimizer.cjs',
      'test-automation.cjs',
      'ultimate-automation-master.cjs'
    ];
    this.startTime = Date.now();
  }

  log(msg, type = 'info') {
    const colors = { info: '\x1b[36m', success: '\x1b[32m', error: '\x1b[31m', warning: '\x1b[33m', reset: '\x1b[0m' };
    const timestamp = new Date().toISOString();
    console.log(`${colors[type]}[${timestamp}] ${msg}${colors.reset}`);
  }

  checkProcess(proc) {
    try {
      const result = execSync(`ps aux | grep "${proc}" | grep -v grep`, { encoding: 'utf8' });
      return result.trim().split('\n').length;
    } catch {
      return 0;
    }
  }

  async monitor() {
    let running = 0;
    for (const proc of this.processes) {
      const count = this.checkProcess(proc);
      if (count > 0) {
        this.log(`✅ ${proc} running (${count})`, 'success');
        running += count;
      } else {
        this.log(`❌ ${proc} not running`, 'error');
      }
    }
    const report = {
      timestamp: new Date().toISOString(),
      running,
      total: this.processes.length
    };
    fs.writeFileSync('automation/monitor-report.json', JSON.stringify(report, null, 2));
  }

  async start() {
    this.log('🚀 Starting Automation Monitor...', 'success');
    await this.monitor();
    setInterval(async () => {
      await this.monitor();
    }, 5 * 60 * 1000);
  }
}

const monitor = new AutomationMonitor();
monitor.start().catch(console.error); 