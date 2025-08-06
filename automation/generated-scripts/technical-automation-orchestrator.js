#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class TechnicalAutomationOrchestrator {
  constructor() {
    this.factoryType = 'technical-automation';
    this.capabilities = ["code-optimizer","test-automator","deployment-manager","performance-monitor"];
    this.intelligenceLevel = 0.92;
    this.evolutionRate = 0.12;
    this.isRunning = false;
    this.logs = [];
    this.activeProcesses = new Map();
    
    this.initialize();
  }

  async initialize() {
    console.log(`🎼 Initializing ${this.factoryType} orchestrator...`);
    
    try {
      await this.loadCapabilities();
      this.startOrchestration();
      
      this.isRunning = true;
      console.log(`✅ ${this.factoryType} orchestrator initialized successfully`);
    } catch (error) {
      console.error(`❌ Error initializing ${this.factoryType} orchestrator:`, error);
      throw error;
    }
  }

  async loadCapabilities() {
    console.log(`📦 Loading ${this.capabilities.length} capabilities...`);
    
    for (const capability of this.capabilities) {
      try {
        const scriptPath = path.join(__dirname, `${this.factoryType}-${capability}.js`);
        const automation = require(scriptPath);
        
        this.activeProcesses.set(capability, automation);
        console.log(`✅ Loaded capability: ${capability}`);
      } catch (error) {
        console.error(`❌ Failed to load capability ${capability}:`, error);
      }
    }
  }

  startOrchestration() {
    setInterval(async () => {
      if (this.isRunning) {
        await this.orchestrateCapabilities();
      }
    }, 60000);
  }

  async orchestrateCapabilities() {
    console.log(`🎼 Orchestrating ${this.capabilities.length} capabilities...`);
    
    const results = [];
    
    for (const [capability, automation] of this.activeProcesses) {
      try {
        const status = await automation.getStatus();
        results.push({
          capability,
          status: status.isRunning ? 'running' : 'stopped',
          performance: status.performanceMetrics
        });
      } catch (error) {
        console.error(`❌ Error checking capability ${capability}:`, error);
        results.push({
          capability,
          status: 'error',
          error: error.message
        });
      }
    }
    
    this.log(`Orchestration completed: ${results.length} capabilities checked`, 'info');
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      factoryType: this.factoryType
    };
    
    this.logs.push(logEntry);
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async getStatus() {
    return {
      factoryType: this.factoryType,
      isRunning: this.isRunning,
      activeCapabilities: this.activeProcesses.size,
      intelligenceLevel: this.intelligenceLevel,
      evolutionRate: this.evolutionRate
    };
  }
}

const orchestrator = new TechnicalAutomationOrchestrator();

process.on('SIGINT', async () => {
  console.log('🛑 Shutting down orchestrator gracefully...');
  orchestrator.isRunning = false;
  process.exit(0);
});

module.exports = orchestrator;
