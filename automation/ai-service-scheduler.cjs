#!/usr/bin/env node

/**
 * AI Service Scheduler - Automated Service Generation Scheduler
 * 
 * This script integrates with the existing automation system to:
 * - Schedule AI service generation at optimal intervals
 * - Monitor service creation performance
 * - Integrate with existing automation workflows
 * - Provide intelligent scheduling based on market conditions
 */

const fs = require('fs');
const path = require('path');
const AIServiceGenerator = require('./ai-service-generator.cjs');

// Configuration
const SCHEDULER_CONFIG = {
  // Service generation intervals (in minutes)
  intervals: {
    highDemand: 30,      // Every 30 minutes during high demand
    normalDemand: 120,   // Every 2 hours during normal demand
    lowDemand: 480       // Every 8 hours during low demand
  },
  
  // Market condition thresholds
  thresholds: {
    highDemand: 70,      // Demand score > 70 = high demand
    normalDemand: 40,    // Demand score 40-70 = normal demand
    lowDemand: 40        // Demand score < 40 = low demand
  },
  
  // Maximum services per day
  maxServicesPerDay: 12,
  
  // Log file
  logFile: 'automation/logs/ai-service-scheduler.log'
};

class AIServiceScheduler {
  constructor() {
    this.lastRun = null;
    this.servicesCreatedToday = 0;
    this.marketConditions = 'normal';
    this.isRunning = false;
  }

  async start() {
    console.log('🚀 AI Service Scheduler: Starting automated service generation...');
    
    try {
      // Initialize scheduler
      await this.initialize();
      
      // Start the main scheduling loop
      await this.schedulingLoop();
      
    } catch (error) {
      console.error('❌ Scheduler failed to start:', error.message);
      this.logError('Scheduler startup failed', error);
      throw error;
    }
  }

  async initialize() {
    // Ensure log directory exists
    const logDir = path.dirname(SCHEDULER_CONFIG.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Load previous state
    await this.loadState();
    
    // Reset daily counter if it's a new day
    this.resetDailyCounter();
    
    console.log('✅ Scheduler initialized');
    this.logInfo('Scheduler initialized', {
      lastRun: this.lastRun,
      servicesCreatedToday: this.servicesCreatedToday,
      marketConditions: this.marketConditions
    });
  }

  async schedulingLoop() {
    console.log('🔄 Starting scheduling loop...');
    
    while (true) {
      try {
        // Check if we should generate services
        if (await this.shouldGenerateServices()) {
          await this.generateServices();
        }
        
        // Wait for next interval
        const interval = this.getCurrentInterval();
        console.log(`⏰ Next service generation check in ${interval} minutes`);
        await this.sleep(interval * 60 * 1000);
        
      } catch (error) {
        console.error('❌ Error in scheduling loop:', error.message);
        this.logError('Scheduling loop error', error);
        
        // Wait before retrying
        await this.sleep(5 * 60 * 1000); // 5 minutes
      }
    }
  }

  async shouldGenerateServices() {
    // Check if we've reached daily limit
    if (this.servicesCreatedToday >= SCHEDULER_CONFIG.maxServicesPerDay) {
      console.log('📊 Daily service limit reached, skipping generation');
      return false;
    }
    
    // Check if enough time has passed since last run
    if (this.lastRun) {
      const timeSinceLastRun = Date.now() - this.lastRun;
      const minInterval = this.getCurrentInterval() * 60 * 1000;
      
      if (timeSinceLastRun < minInterval) {
        return false;
      }
    }
    
    // Check market conditions
    const marketScore = await this.analyzeMarketConditions();
    if (marketScore < 20) {
      console.log('📉 Market conditions unfavorable, skipping generation');
      return false;
    }
    
    return true;
  }

  async generateServices() {
    if (this.isRunning) {
      console.log('⚠️ Service generation already in progress, skipping');
      return;
    }
    
    this.isRunning = true;
    console.log('🏗️ Starting AI service generation...');
    
    try {
      const generator = new AIServiceGenerator();
      await generator.generate();
      
      // Update scheduler state
      this.lastRun = Date.now();
      this.servicesCreatedToday += generator.servicesCreated.length;
      await this.saveState();
      
      // Log success
      this.logInfo('Service generation completed', {
        servicesCreated: generator.servicesCreated.length,
        servicesCreatedToday: this.servicesCreatedToday,
        totalServicesCreated: this.servicesCreatedToday
      });
      
      console.log(`✅ Generated ${generator.servicesCreated.length} new services`);
      
    } catch (error) {
      console.error('❌ Service generation failed:', error.message);
      this.logError('Service generation failed', error);
      
    } finally {
      this.isRunning = false;
    }
  }

  async analyzeMarketConditions() {
    try {
      // Simulate market analysis (in a real system, this would call external APIs)
      const marketScore = Math.random() * 100;
      
      // Update market conditions
      if (marketScore > SCHEDULER_CONFIG.thresholds.highDemand) {
        this.marketConditions = 'high';
      } else if (marketScore > SCHEDULER_CONFIG.thresholds.normalDemand) {
        this.marketConditions = 'normal';
      } else {
        this.marketConditions = 'low';
      }
      
      console.log(`📊 Market analysis: Score ${marketScore.toFixed(1)}, Conditions: ${this.marketConditions}`);
      return marketScore;
      
    } catch (error) {
      console.error('❌ Market analysis failed:', error.message);
      return 50; // Default to normal conditions
    }
  }

  getCurrentInterval() {
    switch (this.marketConditions) {
      case 'high':
        return SCHEDULER_CONFIG.intervals.highDemand;
      case 'low':
        return SCHEDULER_CONFIG.intervals.lowDemand;
      default:
        return SCHEDULER_CONFIG.intervals.normalDemand;
    }
  }

  resetDailyCounter() {
    const now = new Date();
    const lastRunDate = this.lastRun ? new Date(this.lastRun) : null;
    
    if (!lastRunDate || lastRunDate.getDate() !== now.getDate()) {
      this.servicesCreatedToday = 0;
      console.log('📅 New day detected, resetting service counter');
    }
  }

  async loadState() {
    try {
      const stateFile = 'automation/ai-service-scheduler-state.json';
      if (fs.existsSync(stateFile)) {
        const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
        this.lastRun = state.lastRun;
        this.servicesCreatedToday = state.servicesCreatedToday || 0;
        this.marketConditions = state.marketConditions || 'normal';
        console.log('📂 Loaded scheduler state');
      }
    } catch (error) {
      console.warn('⚠️ Could not load scheduler state:', error.message);
    }
  }

  async saveState() {
    try {
      const state = {
        lastRun: this.lastRun,
        servicesCreatedToday: this.servicesCreatedToday,
        marketConditions: this.marketConditions,
        lastUpdated: new Date().toISOString()
      };
      
      const stateFile = 'automation/ai-service-scheduler-state.json';
      fs.writeFileSync(stateFile, JSON.stringify(state, null, 2));
      
    } catch (error) {
      console.error('❌ Could not save scheduler state:', error.message);
    }
  }

  logInfo(message, data = {}) {
    this.log('INFO', message, data);
  }

  logError(message, error) {
    this.log('ERROR', message, {
      error: error.message,
      stack: error.stack,
      ...error
    });
  }

  log(level, message, data) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      data
    };
    
    // Console output
    console.log(`[${timestamp}] ${level}: ${message}`);
    
    // File logging
    try {
      const logLine = JSON.stringify(logEntry) + '\n';
      fs.appendFileSync(SCHEDULER_CONFIG.logFile, logLine);
    } catch (error) {
      console.error('❌ Failed to write to log file:', error.message);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Public methods for external control
  async forceGenerate() {
    console.log('🔄 Force generating services...');
    await this.generateServices();
  }

  async getStatus() {
    return {
      isRunning: this.isRunning,
      lastRun: this.lastRun,
      servicesCreatedToday: this.servicesCreatedToday,
      marketConditions: this.marketConditions,
      nextCheckIn: this.getCurrentInterval(),
      dailyLimit: SCHEDULER_CONFIG.maxServicesPerDay
    };
  }

  async stop() {
    console.log('🛑 Stopping AI Service Scheduler...');
    this.isRunning = false;
    process.exit(0);
  }
}

// Main execution
async function main() {
  const scheduler = new AIServiceScheduler();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await scheduler.stop();
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await scheduler.stop();
  });
  
  try {
    await scheduler.start();
  } catch (error) {
    console.error('❌ Scheduler failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = AIServiceScheduler;