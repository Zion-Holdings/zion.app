#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class AutonomousGuardian {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'autonomous-guardian.log');
    this.stateFile = path.join(__dirname, 'logs', 'autonomous-guardian-state.json');
    this.ensureLogDirectory();
    this.child = null;
    this.gitSyncIntervalMs = 60 * 1000; // 1 minute
    this.healthCheckIntervalMs = 5000; // 5 seconds
    this.launcherScript = path.join(__dirname, 'launch-all-automation.cjs');
    this.lastStartAt = null;
    this.intervals = [];
  }

  ensureLogDirectory() {
    const dir = path.dirname(this.logFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  log(message) {
    const ts = new Date().toISOString();
    const msg = `[${ts}] ${message}\n`;
    process.stdout.write(message + '\n');
    fs.appendFileSync(this.logFile, msg);
  }

  writeState(extra = {}) {
    const base = {
      pid: this.child?.pid || null,
      running: !!this.child && !this.child.killed,
      lastStartAt: this.lastStartAt,
      uptimeMs: this.lastStartAt ? Date.now() - this.lastStartAt : 0,
      launcherScript: this.launcherScript,
      gitSyncIntervalMs: this.gitSyncIntervalMs,
      healthCheckIntervalMs: this.healthCheckIntervalMs
    };
    const state = { ...base, ...extra };
    fs.writeFileSync(this.stateFile, JSON.stringify(state, null, 2));
  }

  startLauncher() {
    if (!fs.existsSync(this.launcherScript)) {
      this.log(`❌ Launcher script not found at ${this.launcherScript}`);
      return null;
    }

    this.log('🚀 Starting automation launcher...');
    const child = spawn('node', [this.launcherScript, 'start'], {
      stdio: ['ignore', 'pipe', 'pipe'],
      detached: false,
      env: { ...process.env }
    });

    child.stdout.on('data', (data) => this.log(`[launcher] ${data.toString().trim()}`));
    child.stderr.on('data', (data) => this.log(`[launcher] ERROR: ${data.toString().trim()}`));

    child.on('close', (code) => {
      this.log(`⚠️ Launcher exited with code ${code}`);
      this.child = null;
      this.writeState({ lastExitCode: code });
    });

    child.on('error', (err) => {
      this.log(`❌ Launcher process error: ${err.message}`);
      this.child = null;
      this.writeState({ lastError: err.message });
    });

    this.child = child;
    this.lastStartAt = Date.now();
    this.writeState();
    this.log(`✅ Launcher started (pid ${child.pid})`);
    return child;
  }

  startGitSyncLoop() {
    const syncScript = path.join(__dirname, 'git-sync.cjs');
    const tick = () => {
      try {
        if (fs.existsSync(syncScript)) {
          this.log('🔗 Running periodic git sync...');
          spawn('node', [syncScript], { stdio: 'ignore', detached: false });
        }
      } catch (e) {
        this.log(`❌ Git sync failed: ${e.message}`);
      }
    };
    tick(); // run immediately
    const id = setInterval(tick, this.gitSyncIntervalMs);
    this.intervals.push(id);
  }

  startHealthMonitor() {
    const id = setInterval(() => {
      try {
        const running = !!this.child && !this.child.killed;
        if (!running) {
          this.log('🔄 Launcher not running, restarting...');
          this.startLauncher();
        }
        this.writeState();
      } catch (e) {
        this.log(`❌ Health monitor error: ${e.message}`);
      }
    }, this.healthCheckIntervalMs);
    this.intervals.push(id);
  }

  async start() {
    this.startLauncher();
    this.startGitSyncLoop();
    this.startHealthMonitor();
    this.log('🧭 Autonomous Guardian started.');
  }

  async stop() {
    this.log('🛑 Stopping Autonomous Guardian...');
    for (const id of this.intervals) clearInterval(id);
    this.intervals = [];

    if (this.child && !this.child.killed) {
      this.log('🛑 Stopping launcher...');
      this.child.kill('SIGTERM');
    }
    this.child = null;
    this.writeState({ stopped: true });
    this.log('✅ Stopped');
  }

  status() {
    let state = null;
    try {
      state = JSON.parse(fs.readFileSync(this.stateFile, 'utf8'));
    } catch (_) {
      state = null;
    }
    if (!state) {
      this.log('ℹ️ No state found. Guardian may not be running.');
      return;
    }
    this.log(`📊 Status: running=${state.running} pid=${state.pid} uptimeMs=${state.uptimeMs}`);
  }
}

const guardian = new AutonomousGuardian();
const command = process.argv[2] || 'start';

(async () => {
  switch (command) {
    case 'start':
      await guardian.start();
      // Keep process alive
      process.stdin.resume();
      break;
    case 'stop':
      await guardian.stop();
      process.exit(0);
      break;
    case 'status':
      guardian.status();
      process.exit(0);
      break;
    default:
      console.log('Usage: node autonomous-guardian.cjs [start|stop|status]');
      process.exit(1);
  }
})();