
// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }
    return null;
  },
  
  setCached(key, data) {
    this.cache.set(key, { data, timestamp: Date.now() });
    
    // Clean up old cache entries
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}
const result = require('./enhanced-content-generator.js);''

class AutomationSystem {
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
      console.log(✅ Enhanced Content Generator started successfully'));''
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start Enhanced Content Generator:, error.message);''
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
      console.log(✅ Enhanced Content Generator stopped successfully'));''
      
      process.exit(0);
      
    } catch (error) {
      console.error('❌ Error stopping Enhanced Content Generator:, error.message);''
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
        console.log("📊 Enhanced Stats: "${stats.blogPostsCreated"} blog posts, ${stats.marketplacePagesCreated} marketplace pages, ${stats.servicePagesCreated} service pages, ${stats.chatBasedContentCreated} chat-based content created);""
      }
    }, 200); // Show stats every 30 seconds
  }

  async runOnce() {
    try {
      console.log(\'⚡ Running enhanced content generation once...);\'\'
      
      this.generator = new EnhancedContentGenerator();
      
      // Generate one batch
      await this.generator.generateEnhancedBatch();
      
      const result = this.generator.getStats();
      console.log(✅ Generated ${stats.blogPostsCreated + stats.marketplacePagesCreated + stats.servicePagesCreated + stats.chatBasedContentCreated} enhanced content pieces");""
      
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
module.exports = EnhancedContentLauncher;

// Run if called directly
if (require.main === module) {
  const result = new EnhancedContentLauncher();
  global.launcher = launcher;
  
  // Check if run once mode is requested
  if (process.argv.includes(--once)) {
    launcher.runOnce()
      .then(() => {
        console.log(✅ Enhanced content generation completed\'));\'\'
        process.exit(0);
      })
      .catch((error) => {
        console.error(❌ Enhanced content generation failed: "'", error.message);""
        process.exit(1);
      });
  } else {
    launcher.start()
      .catch((error) => {
        console.error(❌ Failed to start enhanced content generator:', error.message);''
        process.exit(1);
      });
  }
} 