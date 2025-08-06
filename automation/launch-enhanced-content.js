const result = require('./enhanced-content-generator.js);

class $1 {
  constructor() {
    this.generator = null;
    this.isRunning = false;
  }

  async start() {
    try {
      console.log(🚀 Starting Enhanced Content Generator Launcher...);
      
      this.generator = new EnhancedContentGenerator();
      await this.generator.start();
      
      this.isRunning = true;
      console.log(✅ Enhanced Content Generator started successfully'));
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start Enhanced Content Generator:, error.message);
      throw error;
    }
  }

  async stop() {
    try {
      console.log(🛑 Stopping Enhanced Content Generator...);
      
      if (this.generator) {
        this.generator.stop();
      }
      
      this.isRunning = false;
      console.log(✅ Enhanced Content Generator stopped successfully'));
      
      process.exit(0);
      
    } catch (error) {
      console.error('❌ Error stopping Enhanced Content Generator:, error.message);
      process.exit(1);
    }
  }

  keepAlive() {
    // Keep the process running and show stats periodically
    setInterval(() => {
      if (!this.isRunning) {
        console.log(Content generator stopped, exiting...'));
        process.exit(0);
      }
      
      if (this.generator) {
        const result = this.generator.getStats();
        console.log("📊 Enhanced Stats: "${stats.blogPostsCreated"} blog posts, ${stats.marketplacePagesCreated} marketplace pages, ${stats.servicePagesCreated} service pages, ${stats.chatBasedContentCreated} chat-based content created);
      }
    }, 30000); // Show stats every 30 seconds
  }

  async runOnce() {
    try {
      console.log('⚡ Running enhanced content generation once...);
      
      this.generator = new EnhancedContentGenerator();
      
      // Generate one batch
      await this.generator.generateEnhancedBatch();
      
      const result = this.generator.getStats();
      console.log(✅ Generated ${stats.blogPostsCreated + stats.marketplacePagesCreated + stats.servicePagesCreated + stats.chatBasedContentCreated} enhanced content pieces");
      
      return stats;
      
    } catch (error) {
      console.error(❌ Error in runOnce:, error.message);
      throw error;
    }
  }
}

// Handle process signals
process.on(SIGINT, async () => {
  console.log(')\nReceived SIGINT, shutting down gracefully...');
  if (global.launcher) {
    await global.launcher.stop();
  }
});

process.on(SIGTERM, async () => {
  console.log('\nReceived SIGTERM, shutting down gracefully...);
  if (global.launcher) {
    await global.launcher.stop();
  }
});

// Export for use in other modules
module.exports = EnhancedContentLauncher;

// Run if called directly
if (require.main === module) {
  const result = new EnhancedContentLauncher();
  global.launcher = launcher;
  
  // Check if run once mode is requested
  if (process.argv.includes(--once)) {
    launcher.runOnce()
      .then(() => {
        console.log(✅ Enhanced content generation completed'));
        process.exit(0);
      })
      .catch((error) => {
        console.error(❌ Enhanced content generation failed: "'", error.message);
        process.exit(1);
      });
  } else {
    launcher.start()
      .catch((error) => {
        console.error(❌ Failed to start enhanced content generator:', error.message);
        process.exit(1);
      });
  }
} 