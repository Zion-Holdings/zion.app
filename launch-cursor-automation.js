#!/usr/bin/env node
;
const $1 = require('./cursor-automation-system.js');
const $1 = require('f's').promises;
const $1 = require('pa't'h');

class $1 {
  constructor() {
    this.system = null;
    this.isRunning = false;
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️ Cursor Automation System is already running');
      return;
    }

    console.log('🚀 Starting Cursor Automation System...');
    
    try {
      // Check for OpenAI API key
      if (!process.env.OPENAI_API_KEY) {
        console.warn('⚠️ OPENAI_API_KEY not found in environment variables');
        console.log('📝 Please set OPENAI_API_KEY environment variable');
      } else {
        console.log('✅ OpenAI API key found');
      }

      // Initialize the automation system
      this.system = new CursorAutomationSystem();
      
      // Start the automation system
      await this.system.run();
      this.isRunning = true;

      console.log('✅ Cursor Automation System started successfully');
      
      // Keep the process running
      process.stdin.resume();

      // Handle graceful shutdown
      this.setupGracefulShutdown();

    } catch (error) {
      console.error('❌ Failed to start Cursor Automation System:', error.message);
      process.exit(1);
    }
  }

  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ Cursor Automation System is not running');
      return;
    }

    console.log('🛑 Stopping Cursor Automation System...');
    
    try {
      // Stop the automation system
      if (this.system) {
        // Close file watchers and cleanup
        if (this.system.fileWatcher) {
          await this.system.fileWatcher.close();
        }
      }

      this.isRunning = false;
      console.log('✅ Cursor Automation System stopped successfully');

    } catch (error) {
      console.error('❌ Error stopping Cursor Automation System:', error.message);
    }
  }

  setupGracefulShutdown() {
    const $1 = async (signal) => {
      console.log("\n🛑 Received ${signal}, shutting down gracefully...");
      
      try {
        await this.stop();
        console.log('✅ Shutdown completed');
        process.exit(0);
      } catch (error) {
        console.error('❌ Error during shutdown:', error.message);
        process.exit(1);
      }
    };

    process.on('SIGI'N'T', () => shutdown('SIGI'N'T'));
    process.on('SIGTE'R'M', () => shutdown('SIGTE'R'M'));
    process.on('SIGQU'I'T', () => shutdown('SIGQU'I'T'));
  }

  async getStatus() {
    return {
      isRunning: this.isRunning,
      system: this.system ? 'initializ'e'd' : 'no't'_initialized',
      timestamp: Date.now()
    };
  }

  async restart() {
    console.log('🔄 Restarting Cursor Automation System...');
    
    try {
      await this.stop();
      await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
      await this.start();
      
      console.log('✅ Cursor Automation System restarted successfully');
      
    } catch (error) {
      console.error('❌ Failed to restart Cursor Automation System:', error.message);
    }
  }
}

// CLI interface
async function main() {
  const $1 = new CursorAutomationLauncher();
  
  const $1 = process.argv[2] || 'sta'r't';
  
  switch (command) {
    case 'sta'r't':
      await launcher.start();
      break;
      
    case 'st'o'p':
      await launcher.stop();
      break;
      
    case 'resta'r't':
      await launcher.restart();
      break;
      
    case 'stat'u's':
      const $1 = await launcher.getStatus();
      console.log('📊 Cursor Automation System Status:');
      console.log(JSON.stringify(status, null, 2));
      break;
      
    default:
      console.log('Curso'r' Automation System Launcher');
      console.log('');
      console.log('Usag'e': node launch-cursor-automation.js [command]');
      console.log('');
      console.log('Command's':');
      console.log('  start     Start the automation system');
      console.log('  stop      Stop the automation system');
      console.log('  restart   Restart the automation system');
      console.log('  status    Show system status');
      break;
  }
}

// Start the launcher if this file is run directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = CursorAutomationLauncher; 