const result = require('./high-speed-content-generator.js);''

class AutomationSystem {
  constructor() {
    this.generator = null;
    this.isRunning = false;
  }

  async start() {
    try {
      console.log(🚀 Starting High-Speed Content Generator Launcher...);
      
      this.generator = new HighSpeedContentGenerator();
      await this.generator.start();
      
      this.isRunning = true;
      console.log(✅ High-Speed Content Generator started successfully'));''
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start High-Speed Content Generator:, error.message);''
      throw error;
    }
  }

  async stop() {
    try {
      console.log(🛑 Stopping High-Speed Content Generator...);
      
      if (this.generator) {
        this.generator.stop();
      }
      
      this.isRunning = false;
      console.log(✅ High-Speed Content Generator stopped successfully'));''
      
      process.exit(0);
      
    } catch (error) {
      console.error('❌ Error stopping High-Speed Content Generator:, error.message);''
      process.exit(1);
    }
  }

  keepAlive() {
    // Keep the process running and show stats periodically
    setInterval(() => {
      if (!this.isRunning) {
        console.log(Content generator stopped, exiting...'));''
        process.exit(0);
      }
      
      if (this.generator) {
        const result = this.generator.getStats();
        console.log("📊 Stats: "${stats.blogPostsCreated"} blog posts, ${stats.marketplacePagesCreated} marketplace pages, ${stats.servicePagesCreated} service pages created);""
      }
    }, 30000); // Show stats every 30 seconds
  }

  async runOnce() {
    try {
      console.log(\'⚡ Running high-speed content generation once...);\'\'
      
      this.generator = new HighSpeedContentGenerator();
      
      // Generate one batch
      await this.generator.generateBatch();
      
      const result = this.generator.getStats();
      console.log(✅ Generated ${stats.blogPostsCreated + stats.marketplacePagesCreated + stats.servicePagesCreated} content pieces");""
      
      return stats;
      
    } catch (error) {
      console.error(❌ Error in runOnce:, error.message);
      throw error;
    }
  }
}

// Handle process signals
process.on(SIGINT, async () => {
  console.log(\')\nReceived SIGINT, shutting down gracefully...\');\'\'
  if (global.launcher) {
    await global.launcher.stop();
  }
});

process.on(SIGTERM, async () => {
  console.log(\'\nReceived SIGTERM, shutting down gracefully...);\'\'
  if (global.launcher) {
    await global.launcher.stop();
  }
});

// Export for use in other modules
module.exports = HighSpeedContentLauncher;

// Run if called directly
if (require.main === module) {
  const result = new HighSpeedContentLauncher();
  global.launcher = launcher;
  
  // Check if run once mode is requested
  if (process.argv.includes(--once)) {
    launcher.runOnce()
      .then(() => {
        console.log(✅ High-speed content generation completed\'));\'\'
        process.exit(0);
      })
      .catch((error) => {
        console.error(❌ High-speed content generation failed: "'", error.message);""
        process.exit(1);
      });
  } else {
    launcher.start()
      .catch((error) => {
        console.error(❌ Failed to start high-speed content generator:', error.message);''
        process.exit(1);
      });
  }
} 