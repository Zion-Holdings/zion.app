#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync, spawn } from 'child_process';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class LintMonitor {
  constructor() {
    this.isRunning = false;
    this.watcher = null;
    this.errorCount = 0;
    this.lastCheck = null;
    this.logFile = path.join(__dirname, 'logs', 'lint-monitor.log');
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

  async checkLintStatus() {
    try {
      this.log('🔍 Checking lint status...');
      const result = execSync('npm run lint', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.errorCount = 0;
      this.lastCheck = new Date();
      this.log('✅ Lint check passed - no errors found');
      return { success: true, errors: 0 };
    } catch (error) {
      const errorOutput = error.stdout || error.message;
      const errorLines = errorOutput.split('\n').filter(line => 
        line.includes('error') || line.includes('Error')
      );
      
      this.errorCount = errorLines.length;
      this.lastCheck = new Date();
      this.log(`❌ Lint check failed - ${this.errorCount} errors found`);
      
      return { success: false, errors: this.errorCount, output: errorOutput };
    }
  }

  async autoFix() {
    try {
      this.log('🔧 Attempting auto-fix...');
      const result = execSync('npm run lint -- --fix', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log('✅ Auto-fix completed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Auto-fix failed: ${error.message}`);
      return false;
    }
  }

  startContinuousMonitoring() {
    this.log('👀 Starting continuous lint monitoring...');
    
    // Check every 30 seconds
    const checkInterval = setInterval(async () => {
      if (!this.isRunning) {
        clearInterval(checkInterval);
        return;
      }

      const status = await this.checkLintStatus();
      
      if (!status.success && status.errors > 0) {
        this.log(`🚨 Found ${status.errors} lint errors - attempting auto-fix...`);
        const fixed = await this.autoFix();
        
        if (fixed) {
          // Re-check after fix
          setTimeout(async () => {
            await this.checkLintStatus();
          }, 2000);
        }
      }
    }, 30000);

    // Store interval for cleanup
    this.checkInterval = checkInterval;
  }

  startFileWatcher() {
    this.log('📁 Starting file watcher...');
    
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
      }, 2000);
    });

    this.watcher = watcher;
    this.log('✅ File watcher started');
  }

  async handleFileChange(filePath) {
    this.log(`🔍 Checking file: ${filePath}`);
    
    try {
      // Check if the specific file has lint issues
      const result = execSync(`npx eslint "${filePath}"`, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ File ${filePath} passed lint check`);
    } catch (error) {
      this.log(`❌ Lint issues found in ${filePath}`);
      
      // Try to auto-fix the specific file
      try {
        execSync(`npx eslint "${filePath}" --fix`, { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        this.log(`✅ Auto-fixed issues in ${filePath}`);
      } catch (fixError) {
        this.log(`❌ Failed to auto-fix ${filePath}: ${fixError.message}`);
      }
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('⚠️ Monitor is already running');
      return;
    }

    this.isRunning = true;
    this.log('🚀 Starting Lint Monitor...');

    // Initial check
    await this.checkLintStatus();

    // Start continuous monitoring
    this.startContinuousMonitoring();

    // Start file watcher
    this.startFileWatcher();

    this.log('✅ Lint Monitor started successfully');
  }

  stop() {
    this.isRunning = false;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    if (this.watcher) {
      this.watcher.close();
      this.watcher = null;
    }
    
    this.log('🛑 Lint Monitor stopped');
  }

  status() {
    const status = {
      running: this.isRunning,
      errorCount: this.errorCount,
      lastCheck: this.lastCheck,
      uptime: this.isRunning ? Date.now() - (this.lastCheck?.getTime() || Date.now()) : 0
    };
    
    this.log(`📊 Status: ${status.running ? 'Running' : 'Stopped'}`);
    this.log(`📊 Error Count: ${status.errorCount}`);
    this.log(`📊 Last Check: ${status.lastCheck?.toISOString() || 'Never'}`);
    
    return status;
  }

  getStats() {
    const stats = {
      totalChecks: 0,
      totalErrors: 0,
      autoFixes: 0,
      filesWatched: 0
    };

    try {
      const logContent = fs.readFileSync(this.logFile, 'utf8');
      const lines = logContent.split('\n');
      
      stats.totalChecks = lines.filter(line => line.includes('Checking lint status')).length;
      stats.totalErrors = lines.filter(line => line.includes('errors found')).length;
      stats.autoFixes = lines.filter(line => line.includes('Auto-fix completed')).length;
      stats.filesWatched = lines.filter(line => line.includes('File changed')).length;
    } catch (error) {
      this.log('❌ Could not read stats from log file');
    }

    return stats;
  }
}

// CLI handling
const monitor = new LintMonitor();
const command = process.argv[2];

switch (command) {
  case 'start':
    monitor.start();
    break;
  case 'stop':
    monitor.stop();
    process.exit(0);
    break;
  case 'status':
    monitor.status();
    process.exit(0);
    break;
  case 'stats':
    const stats = monitor.getStats();
    console.log('📊 Monitor Statistics:');
    console.log(`- Total Checks: ${stats.totalChecks}`);
    console.log(`- Total Errors: ${stats.totalErrors}`);
    console.log(`- Auto Fixes: ${stats.autoFixes}`);
    console.log(`- Files Watched: ${stats.filesWatched}`);
    process.exit(0);
    break;
  default:
    console.log('Usage: node lint-monitor.js [start|stop|status|stats]');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  monitor.stop();
  process.exit(0);
});

process.on('SIGTERM', () => {
  monitor.stop();
  process.exit(0);
});
