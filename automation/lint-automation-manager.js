#!/usr/bin/env node

const { spawn, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomationManager {
  constructor() {
    this.projectRoot = process.cwd();
    this.processes = new Map();
    this.isRunning = false;
  }

  async init() {
    console.log('🚀 Initializing Lint Automation Manager...');
    console.log('✅ Lint Automation Manager initialized');
  }

  async startAllServices() {
    if (this.isRunning) {
      console.log('⚠️  Services already running');
      return;
    }

    console.log('🔄 Starting all lint automation services...');
    
    try {
      await this.startLintFixer();
      await this.startLintMonitor();
      await this.startContinuousMode();
      
      this.isRunning = true;
      console.log('✅ All lint automation services started successfully');
      
    } catch (error) {
      console.error('❌ Failed to start services:', error.message);
      throw error;
    }
  }

  async startLintFixer() {
    const fixerPath = path.join(this.projectRoot, 'automation', 'lint-error-fixer.js');
    
    if (!fs.existsSync(fixerPath)) {
      console.error('❌ Lint error fixer not found');
      return;
    }
    
    const process = spawn('node', [fixerPath, 'continuous'], {
      stdio: 'pipe',
      cwd: this.projectRoot
    });
    
    process.stdout.on('data', (data) => {
      console.log(`🔧 Fixer: ${data.toString().trim()}`);
    });
    
    process.stderr.on('data', (data) => {
      console.error(`❌ Fixer Error: ${data.toString().trim()}`);
    });
    
    process.on('close', (code) => {
      console.log(`🔧 Fixer process exited with code ${code}`);
      this.processes.delete('fixer');
    });
    
    this.processes.set('fixer', process);
    console.log('✅ Lint error fixer started');
  }

  async startLintMonitor() {
    const monitorPath = path.join(this.projectRoot, 'automation', 'lint-monitor.js');
    
    if (!fs.existsSync(monitorPath)) {
      console.error('❌ Lint monitor not found');
      return;
    }
    
    const process = spawn('node', [monitorPath, 'monitor'], {
      stdio: 'pipe',
      cwd: this.projectRoot
    });
    
    process.stdout.on('data', (data) => {
      console.log(`📊 Monitor: ${data.toString().trim()}`);
    });
    
    process.stderr.on('data', (data) => {
      console.error(`❌ Monitor Error: ${data.toString().trim()}`);
    });
    
    process.on('close', (code) => {
      console.log(`📊 Monitor process exited with code ${code}`);
      this.processes.delete('monitor');
    });
    
    this.processes.set('monitor', process);
    console.log('✅ Lint monitor started');
  }

  async startContinuousMode() {
    console.log('🔄 Starting continuous mode...');
    
    setInterval(async () => {
      await this.runPeriodicCheck();
    }, 15000); // Check every 15 seconds
    
    console.log('✅ Continuous mode started');
  }

  async runPeriodicCheck() {
    try {
      console.log('🔍 Running periodic lint check...');
      
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', {
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result) {
        console.log('⚠️  Lint errors found, triggering fix...');
        await this.triggerFix();
      } else {
        console.log('✅ No lint errors found');
      }
      
    } catch (error) {
      if (error.status === 1) {
        console.log('🔧 Lint errors detected, triggering fix...');
        await this.triggerFix();
      } else {
        console.error('❌ Periodic check failed:', error.message);
      }
    }
  }

  async triggerFix() {
    try {
      console.log('🔧 Triggering automatic fix...');
      
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', {
        stdio: 'inherit'
      });
      
      console.log('✅ Automatic fix completed');
      
    } catch (error) {
      console.error('❌ Automatic fix failed:', error.message);
    }
  }

  async stopAllServices() {
    console.log('🛑 Stopping all lint automation services...');
    
    for (const [name, process] of this.processes) {
      console.log(`🛑 Stopping ${name}...`);
      process.kill('SIGTERM');
    }
    
    this.processes.clear();
    this.isRunning = false;
    
    console.log('✅ All services stopped');
  }

  async restartServices() {
    console.log('🔄 Restarting all services...');
    await this.stopAllServices();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.startAllServices();
  }
}

async function main() {
  const manager = new LintAutomationManager();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'start';
  
  try {
    await manager.init();
    
    switch (command) {
      case 'start':
        await manager.startAllServices();
        break;
      case 'stop':
        await manager.stopAllServices();
        break;
      case 'restart':
        await manager.restartServices();
        break;
      case 'check':
        await manager.runPeriodicCheck();
        break;
      default:
        console.log('Available commands: start, stop, restart, check');
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintAutomationManager;