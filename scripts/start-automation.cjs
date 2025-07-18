#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

class AutomationStarter {
  constructor() {
    this.processes = new Map();
    this.config = {
      comprehensiveAutomation: { port: 3001, script: 'comprehensive-app-automation.cjs' },
      aiImprovement: { port: 3002, script: 'ai-continuous-improvement.cjs' },
      cursorDelegator: { port: 3005, script: 'cursor-ai-delegator.cjs' },
      coordinator: { port: 3003, script: 'multi-computer-coordinator.cjs' }
    };
  }

  async start() {
    console.log('🚀 Starting Comprehensive Automation System...');
    
    try {
      // Start all automation processes
      await this.startComprehensiveAutomation();
      await this.startAIImprovement();
      await this.startCursorDelegator();
      await this.startCoordinator();
      
      console.log('✅ All automation systems started successfully!');
      console.log('📊 Dashboard URLs:');
      console.log(`   - Comprehensive Automation: http://localhost:${this.config.comprehensiveAutomation.port}/health`);
      console.log(`   - AI Improvement: http://localhost:${this.config.aiImprovement.port}/health`);
      console.log(`   - Cursor Delegator: http://localhost:${this.config.cursorDelegator.port}/health`);
      console.log(`   - Multi-Computer Coordinator: http://localhost:${this.config.coordinator.port}/health`);
      
      // Start monitoring
      this.startMonitoring();
      
    } catch (error) {
      console.error('❌ Failed to start automation systems:', error);
      await this.stop();
      process.exit(1);
    }
  }

  async startComprehensiveAutomation() {
    console.log('🔧 Starting Comprehensive App Automation...');
    
    const process = spawn('node', [
      path.join(__dirname, this.config.comprehensiveAutomation.script),
      'start'
    ], {
      stdio: 'pipe',
      detached: false
    });

    this.processes.set('comprehensive', process);
    
    process.stdout.on('data', (data) => {
      console.log(`[Comprehensive] ${data.toString().trim()}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`[Comprehensive Error] ${data.toString().trim()}`);
    });

    process.on('close', (code) => {
      console.log(`[Comprehensive] Process exited with code ${code}`);
      this.processes.delete('comprehensive');
    });

    // Wait for process to start
    await this.waitForProcess(process, 'Comprehensive Automation');
  }

  async startAIImprovement() {
    console.log('🤖 Starting AI Continuous Improvement...');
    
    const process = spawn('node', [
      path.join(__dirname, this.config.aiImprovement.script),
      'start'
    ], {
      stdio: 'pipe',
      detached: false
    });

    this.processes.set('ai', process);
    
    process.stdout.on('data', (data) => {
      console.log(`[AI] ${data.toString().trim()}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`[AI Error] ${data.toString().trim()}`);
    });

    process.on('close', (code) => {
      console.log(`[AI] Process exited with code ${code}`);
      this.processes.delete('ai');
    });

    // Wait for process to start
    await this.waitForProcess(process, 'AI Improvement');
  }

  async startCursorDelegator() {
    console.log('📝 Starting Cursor AI Delegator...');
    
    const process = spawn('node', [
      path.join(__dirname, this.config.cursorDelegator.script),
      'start'
    ], {
      stdio: 'pipe',
      detached: false
    });

    this.processes.set('cursor', process);
    
    process.stdout.on('data', (data) => {
      console.log(`[Cursor] ${data.toString().trim()}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`[Cursor Error] ${data.toString().trim()}`);
    });

    process.on('close', (code) => {
      console.log(`[Cursor] Process exited with code ${code}`);
      this.processes.delete('cursor');
    });

    // Wait for process to start
    await this.waitForProcess(process, 'Cursor Delegator');
  }

  async startCoordinator() {
    console.log('🌐 Starting Multi-Computer Coordinator...');
    
    const process = spawn('node', [
      path.join(__dirname, this.config.coordinator.script),
      'start'
    ], {
      stdio: 'pipe',
      detached: false
    });

    this.processes.set('coordinator', process);
    
    process.stdout.on('data', (data) => {
      console.log(`[Coordinator] ${data.toString().trim()}`);
    });

    process.stderr.on('data', (data) => {
      console.error(`[Coordinator Error] ${data.toString().trim()}`);
    });

    process.on('close', (code) => {
      console.log(`[Coordinator] Process exited with code ${code}`);
      this.processes.delete('coordinator');
    });

    // Wait for process to start
    await this.waitForProcess(process, 'Coordinator');
  }

  async waitForProcess(process, name) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`${name} failed to start within 30 seconds`));
      }, 30000);

      process.stdout.on('data', (data) => {
        const output = data.toString();
        if (output.includes('running on port') || output.includes('started successfully')) {
          clearTimeout(timeout);
          resolve();
        }
      });

      process.on('error', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  startMonitoring() {
    // Monitor processes every 30 seconds
    setInterval(() => {
      console.log(`📊 Process Status: ${this.processes.size} processes running`);
      
      for (const [name, process] of this.processes) {
        if (process.killed) {
          console.log(`⚠️ Process ${name} has died, restarting...`);
          this.restartProcess(name);
        }
      }
    }, 30000);
  }

  async restartProcess(name) {
    console.log(`🔄 Restarting ${name}...`);
    
    const process = this.processes.get(name);
    if (process) {
      process.kill();
      this.processes.delete(name);
    }

    // Wait a bit before restarting
    await new Promise(resolve => setTimeout(resolve, 2000));

    switch (name) {
      case 'comprehensive':
        await this.startComprehensiveAutomation();
        break;
      case 'ai':
        await this.startAIImprovement();
        break;
      case 'cursor':
        await this.startCursorDelegator();
        break;
      case 'coordinator':
        await this.startCoordinator();
        break;
    }
  }

  async stop() {
    console.log('🛑 Stopping all automation processes...');
    
    for (const [name, process] of this.processes) {
      console.log(`Stopping ${name}...`);
      process.kill();
    }
    
    this.processes.clear();
    console.log('✅ All processes stopped');
  }

  getStatus() {
    const status = {};
    
    for (const [name, process] of this.processes) {
      status[name] = {
        running: !process.killed,
        pid: process.pid
      };
    }
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const starter = new AutomationStarter();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      starter.start();
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await starter.stop();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await starter.stop();
        process.exit(0);
      });
      break;
      
    case 'stop':
      starter.stop();
      break;
      
    case 'status':
      const status = starter.getStatus();
      console.log('Automation Status:');
      console.log(JSON.stringify(status, null, 2));
      break;
      
    default:
      console.log('Usage: node start-automation.cjs [start|stop|status]');
  }
}

module.exports = AutomationStarter; 