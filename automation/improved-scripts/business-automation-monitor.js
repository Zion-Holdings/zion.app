#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class Business-automationMonitor {
  constructor() {
    this.factoryType = 'business-automation';
    this.capabilities = ["data-analysis","reporting","process-optimization","decision-support"];
    this.intelligenceLevel = 0.75;
    this.evolutionRate = 0.1;
    this.isRunning = false;
    this.logs = [];
    this.healthMetrics = {
      overallHealth: 1.0,
      capabilityHealth: new Map(),
      lastCheck: null,
      uptime: 0
    };
    
    this.initializeMonitor();
  }

  async initializeMonitor() {
    console.log(`📊 Initializing ${this.factoryType} monitor...`);
    
    try {
      this.startMonitoring();
      
      this.isRunning = true;
      console.log(`✅ ${this.factoryType} monitor initialized successfully`);
    } catch (error) {
      console.error(`❌ Error initializing ${this.factoryType} monitor:`, error);
      throw error;
    }
  }

  startMonitoring() {
    setInterval(async () => {
      if (this.isRunning) {
        await this.checkHealth();
      }
    }, 30000);
  }

  async checkHealth() {
    console.log(`🏥 Checking health of ${this.factoryType} factory...`);
    
    const healthResults = [];
    let overallHealth = 1.0;
    
    for (const capability of this.capabilities) {
      try {
        const scriptPath = path.join(__dirname, `${this.factoryType}-${capability}-automation.js`);
        
        const scriptExists = await fs.access(scriptPath).then(() => true).catch(() => false);
        
        if (scriptExists) {
          try {
            const automation = require(scriptPath);
            const status = await automation.getStatus();
            
            const health = {
              capability,
              status: 'healthy',
              isRunning: status.isRunning,
              performance: status.performanceMetrics,
              lastCheck: new Date()
            };
            
            healthResults.push(health);
            this.healthMetrics.capabilityHealth.set(capability, health);
          } catch (error) {
            const health = {
              capability,
              status: 'error',
              error: error.message,
              lastCheck: new Date()
            };
            
            healthResults.push(health);
            this.healthMetrics.capabilityHealth.set(capability, health);
            overallHealth -= 0.1;
          }
        } else {
          const health = {
            capability,
            status: 'missing',
            error: 'Script not found',
            lastCheck: new Date()
          };
          
          healthResults.push(health);
          this.healthMetrics.capabilityHealth.set(capability, health);
          overallHealth -= 0.1;
        }
      } catch (error) {
        console.error(`❌ Error checking capability ${capability}:`, error);
        
        const health = {
          capability,
          status: 'error',
          error: error.message,
          lastCheck: new Date()
        };
        
        healthResults.push(health);
        this.healthMetrics.capabilityHealth.set(capability, health);
        overallHealth -= 0.1;
      }
    }
    
    this.healthMetrics.overallHealth = Math.max(0, overallHealth);
    this.healthMetrics.lastCheck = new Date();
    
    this.log(`Health check completed: ${this.healthMetrics.overallHealth.toFixed(2)} overall health`, 'info');
    await this.saveHealthMetrics(healthResults);
  }

  async saveHealthMetrics(healthResults) {
    const metricsPath = path.join(__dirname, 'health-metrics.json');
    const data = {
      timestamp: new Date().toISOString(),
      factoryType: this.factoryType,
      overallHealth: this.healthMetrics.overallHealth,
      healthResults: healthResults
    };
    
    try {
      await fs.writeFile(metricsPath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('❌ Error saving health metrics:', error);
    }
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
      healthMetrics: this.healthMetrics,
      intelligenceLevel: this.intelligenceLevel,
      evolutionRate: this.evolutionRate
    };
  }
}

const monitor = new Business-automationMonitor();

process.on('SIGINT', async () => {
  console.log('🛑 Shutting down monitor gracefully...');
  monitor.isRunning = false;
  process.exit(0);
});

module.exports = monitor;
