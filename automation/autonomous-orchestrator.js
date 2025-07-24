#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutonomousOrchestrator {
  constructor() {
    this.processes = new Map();
    this.isRunning = false;
    this.maxRestartAttempts = 10;
    this.restartDelay = 10000; // 10 seconds
    this.scripts = [
      {
        name: efficient-improvement-system',
        path: automation/efficient-improvement-system.js',
        args: [],
        autoRestart: true,
        memoryLimit: 512
      },
      {
        name: syntax-fixer',
        path: automation/syntax-fixer.js',
        args: [],
        autoRestart: true,
        memoryLimit: 256
      },
      {
        name: monitor-system',
        path: automation/monitor-improvement-system.js',
        args: ['monitor'],
        autoRestart: true,
        memoryLimit: 128
      }
    ];
    this.projectRoot = process.cwd();
    this.logDir = path.join(this.projectRoot, logs');
    this.pidFile = path.join(this.projectRoot, automation', .orchestrator.pid');
  }

  async start() {
    console.log('🚀 [Orchestrator] Entering start());
    this.isRunning = true;
    await this.setup();
    fs.writeFileSync(this.pidFile, process.pid.toString());
    await this.startAllScripts();
    this.startMonitoring();
    this.setupGracefulShutdown();
    console.log('✅ [Orchestrator] All automation scripts launched');
    setInterval(() => this.checkProcessHealth(), 30000);
  }

  async setup() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
    const automationDir = path.join(this.projectRoot, automation');
    if (!fs.existsSync(automationDir)) {
      fs.mkdirSync(automationDir, { recursive: true });
    }
  }

  async startAllScripts() {
    for (const script of this.scripts) {
      console.log(`[Orchestrator] Launching script: ${script.name}`);
      await this.startScript(script);
      console.log(`[Orchestrator] Launched script: ${script.name}`);
    }
  }

  async startScript(script) {
    try {
      if (!fs.existsSync(script.path)) {
        console.log(`⚠️ Script ${script.path} not found.`);
        return;
      }
      const proc = spawn('node', [script.path, ...script.args], {
        stdio: ['ignore', ignore', ignore'],
        detached: false,
        env: {
          ...process.env,
          NODE_OPTIONS: `--max-old-space-size=${script.memoryLimit}`
        }
      });
      proc.on('exit', (code, signal) => {
        console.log(`❌ ${script.name} exited with code ${code}, signal ${signal}`);
        this.handleProcessExit(script);
      });
      proc.on('error', (error) => {
        console.error(`❌ ${script.name} error:`, error.message);
        this.handleProcessExit(script);
      });
      this.processes.set(script.name, {
        process: proc,
        script,
        restartCount: 0
      });
      console.log(`✅ ${script.name} started (PID: ${proc.pid})`);
    } catch (error) {
      console.error(`❌ Failed to start ${script.name}:`, error.message);
    }
  }

  handleProcessExit(script) {
    const procInfo = this.processes.get(script.name);
    if (!procInfo) return;
    if (script.autoRestart && procInfo.restartCount < this.maxRestartAttempts) {
      procInfo.restartCount++
      setTimeout(() => this.startScript(script), this.restartDelay);
    } else {
      this.processes.delete(script.name);
    }
  }

  startMonitoring() {
    setInterval(() => this.checkProcessHealth(), 30000);
  }

  checkProcessHealth() {
    for (const [name, procInfo] of this.processes) {
      if (procInfo.process.killed) {
        this.handleProcessExit(procInfo.script);
      }
    }
  }

  setupGracefulShutdown() {
    process.on('SIGINT', async () => {
      await this.stop();
      process.exit(0);
    });
    process.on('SIGTERM', async () => {
      await this.stop();
      process.exit(0);
    });
  }

  async stop() {
    this.isRunning = false;
    for (const [name, procInfo] of this.processes) {
      try {
        procInfo.process.kill('SIGTERM');
      } catch (e) {}
    }
    if (fs.existsSync(this.pidFile)) {
      fs.unlinkSync(this.pidFile);
    }
    console.log('✅ Orchestrator stopped');
  }

  getStatus() {
    const status = {
      isRunning: this.isRunning,
      processes: {},
      totalProcesses: this.processes.size
    };
    for (const [name, procInfo] of this.processes) {
      status.processes[name] = {
        pid: procInfo.process.pid,
        restartCount: procInfo.restartCount,
        isAlive: !procInfo.process.killed
      };
    }
    return status;
  }
}

if (require.main === module) {
  const orchestrator = new AutonomousOrchestrator();
  const args = process.argv.slice(2);
  const command = args[0];
  if (command === start') {
    orchestrator.start().catch(error => {
      console.error('❌ Failed to start orchestrator:', error);
      process.exit(1);
    });
  } else if (command === stop') {
    orchestrator.stop().catch(error => {
      console.error('❌ Failed to stop orchestrator:', error);
      process.exit(1);
    });
  } else if (command === status') {
    const status = orchestrator.getStatus();
    console.log('📊 Orchestrator Status:', JSON.stringify(status, null, 2));
  } else {
    console.log('Usage:');
    console.log('  node automation/autonomous-orchestrator.js start   - Start all automation scripts');
    console.log('  node automation/autonomous-orchestrator.js stop    - Stop all automation scripts');
    console.log('  node automation/autonomous-orchestrator.js status  - Show status of all scripts');
  }
} 