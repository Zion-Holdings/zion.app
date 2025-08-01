const fs = require('fs');
const path = require('path');
const ContinuousContentGenerator = require('./continuous-content-generator.js');

class ContinuousContentLauncher {
  constructor() {
    this.generator = null;
    this.isRunning = false;
    this.logFile = path.join(__dirname, 'logs', 'continuous-content-launcher.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [CONTENT-LAUNCHER] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] [CONTENT-LAUNCHER] ${message}`);
  }

  async start() {
    try {
      this.log('Starting Continuous Content Generator...');
      
      this.generator = new ContinuousContentGenerator();
      await this.generator.initialize();
      
      this.isRunning = true;
      this.log('Continuous Content Generator started successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      this.log(`Failed to start Continuous Content Generator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async stop() {
    try {
      this.log('Stopping Continuous Content Generator...');
      
      if (this.generator) {
        await this.generator.saveAnalytics();
      }
      
      this.isRunning = false;
      this.log('Continuous Content Generator stopped successfully');
      
      process.exit(0);
      
    } catch (error) {
      this.log(`Error stopping Continuous Content Generator: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }

  keepAlive() {
    // Keep the process running
    setInterval(() => {
      if (!this.isRunning) {
        this.log('Content generator stopped, exiting...');
        process.exit(0);
      }
    }, 60000); // Check every minute
  }

  async runOnce() {
    try {
      this.log('Running content generation once...');
      
      this.generator = new ContinuousContentGenerator();
      const results = await this.generator.startContentGeneration();
      
      this.log(`Content generation completed: ${JSON.stringify(results)}`);
      return results;
      
    } catch (error) {
      this.log(`Error in runOnce: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Handle process signals
process.on('SIGINT', async () => {
  console.log('\nReceived SIGINT, shutting down gracefully...');
  if (global.launcher) {
    await global.launcher.stop();
  }
});

process.on('SIGTERM', async () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...');
  if (global.launcher) {
    await global.launcher.stop();
  }
});

// Export for use in other modules
module.exports = ContinuousContentLauncher;

// Run if called directly
if (require.main === module) {
  const launcher = new ContinuousContentLauncher();
  global.launcher = launcher;
  
  // Check if run once mode is requested
  if (process.argv.includes('--once')) {
    launcher.runOnce()
      .then(() => {
        console.log('✅ Content generation completed');
        process.exit(0);
      })
      .catch((error) => {
        console.error('❌ Content generation failed:', error.message);
        process.exit(1);
      });
  } else {
    launcher.start()
      .catch((error) => {
        console.error('❌ Failed to start content generator:', error.message);
        process.exit(1);
      });
  }
} 