#!/usr/bin/env node

/**
 * Unified Automation Launcher
 *
 * This system coordinates all automation components:
 * - Git automation (commit, push, conflict resolution)
 * - Performance monitoring
 * - Security scanning
 * - Code quality enforcement
 * - Intelligent decision making
 * - Error recovery and self-healing
 */

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class UnifiedAutomationLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.processes = new Map();
    this.logFile = path.join(__dirname, 'logs', 'unified-automation.log');
    this.statusFile = path.join(__dirname, '.unified-automation-status.json');
    this.ensureDirectories();
    this.initializeStatus();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'automation-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }

    // Fallback configuration
    return {
      gitManager: { enabled: true },
      intelligentGit: { enabled: true },
      enhancedGit: { enabled: true },
      monitoring: { enabled: true },
      dashboard: { enabled: true, port: 3001 },
    };
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  initializeStatus() {
    if (!fs.existsSync(this.statusFile)) {
      const initialStatus = {
        isRunning: false,
        components: {},
        startTime: null,
        lastUpdate: new Date().toISOString(),
        errors: [],
        performance: {},
      };
      fs.writeFileSync(this.statusFile, JSON.stringify(initialStatus, null, 2));
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }

    if (level === 'error') {
      console.error(`❌ ${message}`);
    } else if (level === 'warn') {
      console.warn(`⚠️ ${message}`);
    } else if (level === 'success') {
      console.log(`✅ ${message}`);
    } else {
      console.log(`ℹ️ ${message}`);
    }
  }

  updateStatus(component, status) {
    try {
      const currentStatus = JSON.parse(
        fs.readFileSync(this.statusFile, 'utf8'),
      );
      currentStatus.components[component] = {
        ...status,
        lastUpdate: new Date().toISOString(),
      };
      currentStatus.lastUpdate = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(currentStatus, null, 2));
    } catch (error) {
      this.log(`Error updating status: ${error.message}`, 'warn');
    }
  }

  async startComponent(name, scriptPath, args = []) {
    if (this.processes.has(name)) {
      this.log(`Component ${name} is already running`, 'warn');
      return false;
    }

    try {
      this.log(`Starting component: ${name}`);

      const process = spawn('node', [scriptPath, ...args], {
        cwd: this.projectRoot,
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false,
      });

      this.processes.set(name, process);

      process.stdout.on('data', (data) => {
        this.log(`[${name}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        this.log(`[${name}] ERROR: ${data.toString().trim()}`, 'error');
      });

      process.on('close', (code) => {
        this.log(`Component ${name} exited with code ${code}`);
        this.processes.delete(name);
        this.updateStatus(name, { status: 'stopped', exitCode: code });
      });

      process.on('error', (error) => {
        this.log(`Component ${name} error: ${error.message}`, 'error');
        this.processes.delete(name);
        this.updateStatus(name, { status: 'error', error: error.message });
      });

      // Wait a moment to check if process started successfully
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (process.exitCode === null) {
        this.updateStatus(name, { status: 'running', pid: process.pid });
        this.log(`Component ${name} started successfully`, 'success');
        return true;
      } else {
        this.log(`Component ${name} failed to start`, 'error');
        return false;
      }
    } catch (error) {
      this.log(`Error starting component ${name}: ${error.message}`, 'error');
      return false;
    }
  }

  async stopComponent(name) {
    const process = this.processes.get(name);
    if (!process) {
      this.log(`Component ${name} is not running`, 'warn');
      return false;
    }

    try {
      this.log(`Stopping component: ${name}`);
      process.kill('SIGTERM');

      // Wait for graceful shutdown
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          process.kill('SIGKILL');
          resolve();
        }, 5000);

        process.on('close', () => {
          clearTimeout(timeout);
          resolve();
        });
      });

      this.processes.delete(name);
      this.updateStatus(name, { status: 'stopped' });
      this.log(`Component ${name} stopped successfully`, 'success');
      return true;
    } catch (error) {
      this.log(`Error stopping component ${name}: ${error.message}`, 'error');
      return false;
    }
  }

  async startGitAutomation() {
    const components = [];

    if (this.config.gitManager?.enabled) {
      components.push({
        name: 'gitManager',
        script: path.join(__dirname, 'autonomous-git-manager.js'),
        args: ['watch'],
      });
    }

    if (this.config.intelligentGit?.enabled) {
      components.push({
        name: 'intelligentGit',
        script: path.join(__dirname, 'intelligent-git-orchestrator.js'),
        args: ['watch'],
      });
    }

    if (this.config.enhancedGit?.enabled) {
      components.push({
        name: 'enhancedGit',
        script: path.join(__dirname, 'enhanced-git-automation.js'),
        args: ['watch'],
      });
    }

    for (const component of components) {
      await this.startComponent(
        component.name,
        component.script,
        component.args,
      );
    }
  }

  async startMonitoring() {
    if (this.config.monitoring?.enabled) {
      // Start performance monitoring
      await this.startComponent(
        'performanceMonitor',
        path.join(__dirname, 'performance', 'monitor.js'),
      );

      // Start health checks
      await this.startComponent(
        'healthChecker',
        path.join(__dirname, 'core', 'health-checker.js'),
      );
    }
  }

  async startDashboard() {
    if (this.config.dashboard?.enabled) {
      await this.startComponent(
        'dashboard',
        path.join(__dirname, 'dashboard', 'server.js'),
      );
    }
  }

  async startSecurityScanner() {
    if (this.config.security?.enabled) {
      await this.startComponent(
        'securityScanner',
        path.join(__dirname, 'security', 'scanner.js'),
      );
    }
  }

  async startCodeQualityEnforcer() {
    if (this.config.tasks?.codeQualityEnforcer?.enabled) {
      await this.startComponent(
        'codeQuality',
        path.join(__dirname, 'core', 'code-quality-enforcer.js'),
      );
    }
  }

  async startAll() {
    this.log('🚀 Starting Unified Automation System...');

    const startTime = new Date();
    this.updateStatus('system', {
      status: 'starting',
      startTime: startTime.toISOString(),
    });

    try {
      // Start core components
      await this.startGitAutomation();
      await this.startMonitoring();
      await this.startDashboard();
      await this.startSecurityScanner();
      await this.startCodeQualityEnforcer();

      this.updateStatus('system', {
        status: 'running',
        startTime: startTime.toISOString(),
        components: Array.from(this.processes.keys()),
      });

      this.log('✅ Unified Automation System started successfully!', 'success');
      this.log(
        `📊 Dashboard available at: http://localhost:${this.config.dashboard?.port || 3001}`,
      );

      return true;
    } catch (error) {
      this.log(
        `❌ Failed to start Unified Automation System: ${error.message}`,
        'error',
      );
      this.updateStatus('system', {
        status: 'error',
        error: error.message,
        startTime: startTime.toISOString(),
      });
      return false;
    }
  }

  async stopAll() {
    this.log('🛑 Stopping Unified Automation System...');

    const stopPromises = Array.from(this.processes.keys()).map((name) =>
      this.stopComponent(name),
    );

    await Promise.all(stopPromises);

    this.updateStatus('system', {
      status: 'stopped',
      stopTime: new Date().toISOString(),
    });

    this.log('✅ Unified Automation System stopped successfully', 'success');
  }

  async restart() {
    this.log('🔄 Restarting Unified Automation System...');
    await this.stopAll();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await this.startAll();
  }

  getStatus() {
    try {
      const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
      return {
        ...status,
        runningComponents: Array.from(this.processes.keys()),
        totalComponents: this.processes.size,
      };
    } catch (error) {
      return null;
    }
  }

  async executeGitOperation(operation) {
    this.log(`Executing git operation: ${operation}`);

    const gitManager = this.processes.get('gitManager');
    if (gitManager) {
      // Send command to git manager
      gitManager.stdin.write(`${operation}\n`);
      return true;
    } else {
      // Execute directly if git manager is not running
      const scriptPath = path.join(__dirname, 'autonomous-git-manager.js');
      const { spawn } = require('child_process');

      return new Promise((resolve) => {
        const process = spawn('node', [scriptPath, operation], {
          cwd: this.projectRoot,
          stdio: 'pipe',
        });

        process.on('close', (code) => {
          resolve(code === 0);
        });
      });
    }
  }
}

// Main execution
const launcher = new UnifiedAutomationLauncher();
const command = process.argv[2] || 'start';

switch (command) {
  case 'start':
    launcher.startAll().catch((error) => {
      console.error('Failed to start automation system:', error.message);
      process.exit(1);
    });
    break;
  case 'stop':
    launcher.stopAll().catch((error) => {
      console.error('Failed to stop automation system:', error.message);
      process.exit(1);
    });
    break;
  case 'restart':
    launcher.restart().catch((error) => {
      console.error('Failed to restart automation system:', error.message);
      process.exit(1);
    });
    break;
  case 'status':
    const status = launcher.getStatus();
    console.log('Unified Automation Status:', JSON.stringify(status, null, 2));
    break;
  case 'commit':
    launcher.executeGitOperation('execute').catch((error) => {
      console.error('Git operation failed:', error.message);
      process.exit(1);
    });
    break;
  case 'watch':
    launcher.startGitAutomation().catch((error) => {
      console.error('Failed to start git automation:', error.message);
      process.exit(1);
    });
    break;
  default:
    console.log(`
🚀 Unified Automation Launcher

Usage:
  node automation/unified-automation-launcher.js [command]

Commands:
  start         - Start all automation components
  stop          - Stop all automation components
  restart       - Restart all automation components
  status        - Show system status
  commit        - Execute git commit operation
  watch         - Start git automation in watch mode

Features:
  ✅ Coordinated git automation
  ✅ Performance monitoring
  ✅ Security scanning
  ✅ Code quality enforcement
  ✅ Intelligent decision making
  ✅ Error recovery and self-healing

Examples:
  node automation/unified-automation-launcher.js start
  node automation/unified-automation-launcher.js status
        `);
    break;
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  await launcher.stopAll();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  await launcher.stopAll();
  process.exit(0);
});

module.exports = UnifiedAutomationLauncher;
