#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class ErrorFixingLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.agents = [];
    this.isRunning = false;
  }

  async launchAllAgents() {
    if (this.isRunning) {
      console.log('⚠️ Error fixing agents are already running');
      return;
    }

    this.isRunning = true;
    console.log('🚀 Launching all error fixing agents...');

    try {
      // Launch syntax error fixing agent
      const syntaxAgent = spawn('node', ['automation/syntax-error-fixing-agent.js'], {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      this.agents.push(syntaxAgent);

      // Wait a bit before launching next agent
      await this.sleep(2000);

      // Launch linting error fixing agent
      const lintingAgent = spawn('node', ['automation/linting-error-fixing-agent.js'], {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      this.agents.push(lintingAgent);

      console.log('✅ All error fixing agents launched successfully');

      // Handle agent termination
      this.agents.forEach(agent => {
        agent.on('exit', (code) => {
          console.log(`Agent exited with code ${code}`);
        });
      });

    } catch (error) {
      console.error('❌ Error launching agents:', error);
      this.isRunning = false;
    }
  }

  async stopAllAgents() {
    console.log('🛑 Stopping all error fixing agents...');
    
    this.agents.forEach(agent => {
      if (!agent.killed) {
        agent.kill('SIGTERM');
      }
    });

    this.isRunning = false;
    console.log('✅ All agents stopped');
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  if (global.launcher) {
    await global.launcher.stopAllAgents();
  }
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  if (global.launcher) {
    await global.launcher.stopAllAgents();
  }
  process.exit(0);
});

// Run the launcher
const launcher = new ErrorFixingLauncher();
global.launcher = launcher;

// Check command line arguments
const args = process.argv.slice(2);
if (args.includes('--stop')) {
  launcher.stopAllAgents();
} else {
  launcher.launchAllAgents();
}