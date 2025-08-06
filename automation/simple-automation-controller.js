#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SimpleAutomationController {
  constructor() {
    this.workingSystems = [
      'continuous-working-automation.js'
    ];
    this.blockedSystems = [
      'deep-analysis-agent.js',
      'project-development-autonomous-factory.js',
      'automation-monitor-and-maintainer.js',
      'variation-content-agents-factory.js',
      'ultimate-automation-launcher.js',
      'ultimate-automation-fixer.js',
      'ultimate-automation-factory.js'
    ];
  }

  async start() {
    console.log('🚀 Starting Simple Automation Controller...');
    console.log('✅ Only working systems will be started');
    console.log('🔴 Problematic systems are blocked');
    
    // Start the continuous working automation
    const { spawn } = require('child_process');
    const child = spawn('node', ['continuous-working-automation.js'], {
      stdio: 'inherit',
      detached: true
    });
    
    child.unref();
    console.log('🟢 Continuous working automation started');
  }

  async stop() {
    console.log('🛑 Stopping all automation processes...');
    
    const { exec } = require('child_process');
    exec('pkill -f "continuous-working-automation"', (error) => {
      if (error) {
        console.log('⚠️  No processes to stop');
      } else {
        console.log('✅ All processes stopped');
      }
    });
  }

  async status() {
    console.log('\n📊 Simple Automation Status:');
    console.log('==================================================');
    
    console.log('\n🟢 Working Systems:');
    this.workingSystems.forEach(system => {
      console.log(`🟢 ${system}`);
    });
    
    console.log('\n🔴 Blocked Systems:');
    this.blockedSystems.forEach(system => {
      console.log(`🔴 ${system} (blocked)`);
    });
    
    // Check if continuous automation is running
    const { exec } = require('child_process');
    exec('ps aux | grep "continuous-working-automation" | grep -v grep', (error, stdout) => {
      if (stdout.trim()) {
        console.log('\n📈 Running Processes:');
        console.log('🟢 continuous-working-automation.js (running)');
      } else {
        console.log('\n📈 Running Processes:');
        console.log('⚪ No processes currently running');
      }
    });
  }
}

// Main execution
const controller = new SimpleAutomationController();
const command = process.argv[2];

(async () => {
  try {
    switch (command) {
      case 'start':
        await controller.start();
        break;
      case 'stop':
        await controller.stop();
        break;
      case 'status':
        await controller.status();
        break;
      default:
        console.log('Usage: node simple-automation-controller.js [start|stop|status]');
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
})();
