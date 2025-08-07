#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class LintAutomationManager {
  constructor() {
    this.isRunning = false;
    this.watcher = null;
    this.logFile = path.join(__dirname, 'logs', 'lint-automation.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runLint() {
    try {
      this.log('🔍 Running ESLint...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Lint completed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Lint errors found: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  async fixLintErrors() {
    try {
      this.log('🔧 Attempting to fix lint errors...');
      const result = execSync('npm run lint -- --fix', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Lint errors fixed successfully');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed to fix lint errors: ${error.message}`);
      return { success: false, output: error.stdout || error.message };
    }
  }

  startFileWatcher() {
    this.log('👀 Starting file watcher...');
    
    const watcher = chokidar.watch([
      'pages/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}',
      'hooks/**/*.{js,jsx,ts,tsx}'
    ], {
      ignored: /(node_modules|\.git|\.next)/,
      persistent: true
    });

    let debounceTimer;
    watcher.on('change', (filePath) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(async () => {
        this.log(`📝 File changed: ${filePath}`);
        await this.handleFileChange(filePath);
      }, 1000);
    });

    this.watcher = watcher;
    this.log('✅ File watcher started');
  }

  async handleFileChange(filePath) {
    this.log(`🔍 Checking file: ${filePath}`);
    
    // Run lint on the specific file
    try {
      const result = execSync(`npx eslint "${filePath}" --fix`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Fixed issues in: ${filePath}`);
    } catch (error) {
      this.log(`❌ Issues found in ${filePath}: ${error.stdout || error.message}`);
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('⚠️ Automation is already running');
      return;
    }

    this.isRunning = true;
    this.log('🚀 Starting Lint Automation Manager...');

    // Initial lint check
    const initialResult = await this.runLint();
    if (!initialResult.success) {
      await this.fixLintErrors();
    }

    // Start file watcher
    this.startFileWatcher();

    // Periodic full project lint
    setInterval(async () => {
      if (this.isRunning) {
        this.log('🔄 Running periodic lint check...');
        await this.runLint();
      }
    }, 5 * 60 * 1000); // Every 5 minutes

    this.log('✅ Lint Automation Manager started successfully');
  }

  stop() {
    this.isRunning = false;
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
    this.log('🛑 Lint Automation Manager stopped');
  }

  status() {
    const status = this.isRunning ? 'Running' : 'Stopped';
    this.log(`📊 Status: ${status}`);
    return { running: this.isRunning };
  }
}

// CLI handling
const manager = new LintAutomationManager();
const command = process.argv[2];

switch (command) {
  case 'start':
    manager.start();
    break;
  case 'stop':
    manager.stop();
    process.exit(0);
    break;
  case 'status':
    manager.status();
    process.exit(0);
    break;
  default:
    console.log('Usage: node lint-automation-manager.js [start|stop|status]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  manager.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  manager.stop();
  process.exit(0);
});
