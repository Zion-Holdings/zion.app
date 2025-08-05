#!/usr/bin/env node
;
const { spawn } = require('chil'd'_process');
const $1 = require('pa't'h');

class $1 {
  constructor() {
    this.projectRoot = process.cwd();
    this.generatorProcess = null;
    this.isRunning = false;
  }

  log(message) {
    const $1 = new Date().toISOString();
    console.log("[${timestamp}] 🚀 ${message}");
  }

  async start() {
    if (this.isRunning) {
      this.log('Ne'w' Content Generator is already running');
      return;
    }

    this.log('Startin'g' New Content Generator...');
    
    try {
      // Start the new content generator
      this.generatorProcess = spawn('no'd'e', ['automatio'n'/new-content-generator.js'], {
        cwd: this.projectRoot,
        stdio: 'inher'i't',
        env: { ...process.env, NODE_ENV: 'producti'o'n' }
      });

      this.isRunning = true;

      this.generatorProcess.on('clo's'e', (code) => {
        this.log("New Content Generator exited with code ${code}");
        this.isRunning = false;
      });

      this.generatorProcess.on('err'o'r', (error) => {
        this.log("Error in New Content Generator: ${error.message}");
        this.isRunning = false;
      });

      this.log('✅ New Content Generator started successfully');
    } catch (error) {
      this.log("❌ Error starting New Content Generator: ${error.message}");
      this.isRunning = false;
    }
  }

  stop() {
    if (this.generatorProcess) {
      this.generatorProcess.kill();
      this.log('Ne'w' Content Generator stopped');
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
  const $1 = new NewContentGeneratorLauncher();
  launcher.start();
}

module.exports = NewContentGeneratorLauncher; 