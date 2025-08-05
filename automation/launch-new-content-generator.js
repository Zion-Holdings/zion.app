#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

class NewContentGeneratorLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.generatorProcess = null;
    this.isRunning = false;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] 🚀 ${message}`);
  }

  async start() {
    if (this.isRunning) {
      this.log('New Content Generator is already running');
      return;
    }

    this.log('Starting New Content Generator...');
    
    try {
      // Start the new content generator
      this.generatorProcess = spawn('node', ['automation/new-content-generator.js'], {
        cwd: this.projectRoot,
        stdio: 'inherit',
        env: { ...process.env, NODE_ENV: 'production' }
      });

      this.isRunning = true;

      this.generatorProcess.on('close', (code) => {
        this.log(`New Content Generator exited with code ${code}`);
        this.isRunning = false;
      });

      this.generatorProcess.on('error', (error) => {
        this.log(`Error in New Content Generator: ${error.message}`);
        this.isRunning = false;
      });

      this.log('✅ New Content Generator started successfully');
    } catch (error) {
      this.log(`❌ Error starting New Content Generator: ${error.message}`);
      this.isRunning = false;
    }
  }

  stop() {
    if (this.generatorProcess) {
      this.generatorProcess.kill();
      this.log('New Content Generator stopped');
    }
    this.isRunning = false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      processId: this.generatorProcess ? this.generatorProcess.pid : null
    };
  }
}

// Start the launcher if run directly
if (require.main === module) {
  const launcher = new NewContentGeneratorLauncher();
  launcher.start();
}

module.exports = NewContentGeneratorLauncher; 