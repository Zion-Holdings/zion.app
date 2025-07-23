#!/usr/bin/env node

/**
 * Zion App - Unified Automation Manager
 * 
 * A command-line interface for managing the enhanced automation system.
 * Provides easy access to all automation features and monitoring capabilities.
 */

const fs = require('fs').promises;
const path = require('path');
const { spawn, execSync } = require('child_process');
const readline = require('readline');

class AutomationManager {
  constructor() {
    // Determine the correct paths based on current working directory
    const currentDir = process.cwd();
    const isInAutomationDir = currentDir.endsWith('automation');
    
    this.config = {
      automationDir: isInAutomationDir ? currentDir : path.join(currentDir, 'automation'),
      scriptsDir: isInAutomationDir ? path.join(currentDir, '..', 'scripts') : path.join(currentDir, 'scripts'),
      logsDir: isInAutomationDir ? path.join(currentDir, '..', 'logs') : path.join(currentDir, 'logs'),
      port: process.env.AUTOMATION_PORT || 3001
    };
    
    this.processes = new Map();
    this.isRunning = false;
  }

  /**
   * Main CLI interface
   */
  async run() {
    const args = process.argv.slice(2);
    const command = args[0];

    console.log('🤖 Zion App - Unified Automation Manager\n');

    switch (command) {
      case 'start':
        await this.startSystem();
        break;
      case 'stop':
        await this.stopSystem();
        break;
      case 'restart':
        await this.restartSystem();
        break;
      case 'status':
        await this.showStatus();
        break;
      case 'logs':
        await this.showLogs();
        break;
      case 'dashboard':
        await this.openDashboard();
        break;
      case 'test':
        await this.runTests();
        break;
      case 'setup':
        await this.setupSystem();
        break;
      case 'clean':
        await this.cleanup();
        break;
      case 'help':
        this.showHelp();
        break;
      default:
        this.showHelp();
        break;
    }
  }

  /**
   * Start the automation system
   */
  async startSystem() {
    console.log('🚀 Starting Zion App Automation System...\n');

    try {
      // Check if system is already running
      if (await this.isSystemRunning()) {
        console.log('⚠️  Automation system is already running');
        return;
      }

      // Start the enhanced automation system
      const automationProcess = spawn('node', [
        path.join(this.config.automationDir, 'autonomous-system.js')
      ], {
        stdio: 'pipe',
        detached: false
      });

      this.processes.set('automation', automationProcess);

      automationProcess.stdout.on('data', (data) => {
        console.log(`[AUTOMATION] ${data.toString().trim()}`);
      });

      automationProcess.stderr.on('data', (data) => {
        console.error(`[AUTOMATION ERROR] ${data.toString().trim()}`);
      });

      automationProcess.on('close', (code) => {
        console.log(`[AUTOMATION] Process exited with code ${code}`);
        this.processes.delete('automation');
      });

      // Wait for system to start
      await this.waitForSystemStart();

      console.log('✅ Automation system started successfully');
      console.log(`📊 Dashboard available at: http://localhost:${this.config.port}`);
      console.log(`🔗 API available at: http://localhost:${this.config.port}/api`);

    } catch (error) {
      console.error('❌ Failed to start automation system:', error.message);
      process.exit(1);
    }
  }

  /**
   * Stop the automation system
   */
  async stopSystem() {
    console.log('🛑 Stopping Zion App Automation System...\n');

    try {
      // Stop automation process
      const automationProcess = this.processes.get('automation');
      if (automationProcess) {
        automationProcess.kill('SIGTERM');
        this.processes.delete('automation');
      }

      // Kill any remaining processes
      await this.killRemainingProcesses();

      console.log('✅ Automation system stopped successfully');

    } catch (error) {
      console.error('❌ Failed to stop automation system:', error.message);
    }
  }

  /**
   * Restart the automation system
   */
  async restartSystem() {
    console.log('🔄 Restarting Zion App Automation System...\n');
    
    await this.stopSystem();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    await this.startSystem();
  }

  /**
   * Show system status
   */
  async showStatus() {
    console.log('📊 Zion App Automation System Status\n');

    try {
      // Check if system is running
      const isRunning = await this.isSystemRunning();
      console.log(`System Status: ${isRunning ? '🟢 Running' : '🔴 Stopped'}`);

      if (isRunning) {
        // Get system status from API
        const response = await fetch(`http://localhost:${this.config.port}/api/status`)
        const data = await response.json();

        console.log('\n📈 System Metrics:');
        console.log(`  Total Tasks: ${data.system.totalTasks}`);
        console.log(`  Successful Tasks: ${data.system.successfulTasks}`);
        console.log(`  Failed Tasks: ${data.system.failedTasks}`);
        console.log(`  Queue Length: ${data.queueLength}`);
        console.log(`  Active Tasks: ${data.currentTasks.length}`);

        if (data.system.uptime) {
          const hours = Math.floor(data.system.uptime / 3600000)
          const minutes = Math.floor((data.system.uptime % 3600000) / 60000);
          console.log(`  Uptime: ${hours}h ${minutes}m`);
        }

        console.log('\n🔄 Current Tasks:');
        if (data.currentTasks.length === 0) {
          console.log('  No active tasks');
        } else {
          data.currentTasks.forEach(task => {
            console.log(`  • ${task.type} (${task.priority} priority)`);
          });
        }

        console.log('\n📋 Recent Activity:')
        const recentTasks = [...data.completedTasks, ...data.failedTasks]
          .sort((a, b) => b.completedAt - a.completedAt)
          .slice(0, 5);

        recentTasks.forEach(task => {
          const status = task.status === 'completed' ? '✅' : '❌';
          const time = new Date(task.completedAt).toLocaleTimeString();
          console.log(`  ${status} ${task.type} - ${time}`);
        });

      } else {
        console.log('\n💡 To start the system, run: npm run automation:start');
      }

    } catch (error) {
      console.error('❌ Failed to get system status:', error.message);
    }
  }

  /**
   * Show system logs
   */
  async showLogs() {
    console.log('📝 Zion App Automation System Logs\n');

    try {
      const logFile = path.join(this.config.logsDir, 'automation.log');
      
      if (await this.fileExists(logFile)) {
        const logs = await fs.readFile(logFile, 'utf8')
        const lines = logs.split('\n').filter(line => line.trim());
        
        // Show last 50 lines
        const recentLogs = lines.slice(-50);
        
        recentLogs.forEach(line => {
          console.log(line);
        });
        
        console.log(`\n📄 Showing last ${recentLogs.length} log entries`);
        console.log(`📁 Full log file: ${logFile}`);
      } else {
        console.log('📄 No log file found');
      }

    } catch (error) {
      console.error('❌ Failed to read logs:', error.message);
    }
  }

  /**
   * Open the dashboard
   */
  async openDashboard() {
    console.log('🌐 Opening Automation Dashboard...\n')
    const dashboardUrl = `http://localhost:${this.config.port}`;
    
    try {
      // Check if system is running
      if (!(await this.isSystemRunning())) {
        console.log('⚠️  Automation system is not running. Starting...');
        await this.startSystem();
        await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for startup
      }

      // Open dashboard in default browser
      const { platform } = require('os');
      let command;

      switch (platform()) {
        case 'darwin':
          command = 'open';
          break;
        case 'win32':
          command = 'start';
          break;
        default:
          command = 'xdg-open';
      }

      execSync(`${command} ${dashboardUrl}`);
      console.log(`✅ Dashboard opened: ${dashboardUrl}`);

    } catch (error) {
      console.error('❌ Failed to open dashboard:', error.message);
      console.log(`📊 Manual access: ${dashboardUrl}`);
    }
  }

  /**
   * Run automation tests
   */
  async runTests() {
    console.log('🧪 Running Automation System Tests...\n');

    try {
      // Run test suite
      const testProcess = spawn('npm', ['test'], {
        stdio: 'inherit',
        cwd: this.config.automationDir
      });

      testProcess.on('close', (code) => {
        if (code === 0) {
          console.log('\n✅ All tests passed');
        } else {
          console.log('\n❌ Some tests failed');
          process.exit(code);
        }
      });

    } catch (error) {
      console.error('❌ Failed to run tests:', error.message);
    }
  }

  /**
   * Setup the automation system
   */
  async setupSystem() {
    console.log('🔧 Setting up Zion App Automation System...\n');

    try {
      // Create required directories
      const dirs = [
        this.config.logsDir,
        path.join(this.config.automationDir, 'logs'),
        path.join(this.config.automationDir, 'reports'),
        path.join(this.config.automationDir, 'temp'),
        path.join(this.config.automationDir, 'backups')
      ];

      for (const dir of dirs) {
        await fs.mkdir(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
      }

      // Install dependencies
      console.log('\n📦 Installing dependencies...');
      execSync('npm install', { 
        stdio: 'inherit', 
        cwd: this.config.automationDir 
      });

      // Create environment file if it doesn't exist
      const envFile = path.join(this.config.automationDir, '.env');
      if (!(await this.fileExists(envFile))) {
        const envTemplate = `# Zion App Automation System Configuration

# System Configuration
AUTOMATION_PORT=3001
LOG_LEVEL=info
ENABLE_DASHBOARD=true
ENABLE_WEBSOCKET=true

# AI Configuration
CURSOR_AI_ENABLED=false
CURSOR_API_KEY=your_cursor_api_key_here
CURSOR_WORKSPACE_ID=your_workspace_id_here

OPENAI_ENABLED=false
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4-turbo-preview

CLAUDE_ENABLED=false
CLAUDE_API_KEY=your_claude_api_key_here
CLAUDE_MODEL=claude-3-sonnet-20240229

# Optional: Local AI
LOCAL_AI_ENABLED=false
LOCAL_AI_ENDPOINT=http://localhost:11434
LOCAL_AI_MODEL=codellama:7b

# Optional: Slack Integration
SLACK_BOT_TOKEN=your_slack_bot_token_here
SLACK_SIGNING_SECRET=your_slack_signing_secret_here
`;

        await fs.writeFile(envFile, envTemplate);
        console.log('✅ Created environment file');
      }

      console.log('\n🎉 Setup completed successfully!');
      console.log('\n📝 Next steps:');
      console.log('  1. Edit the environment file with your API keys');
      console.log('  2. Run: npm run automation:start');
      console.log('  3. Open dashboard: npm run automation:dashboard');

    } catch (error) {
      console.error('❌ Setup failed:', error.message);
    }
  }

  /**
   * Cleanup system
   */
  async cleanup() {
    console.log('🧹 Cleaning up Zion App Automation System...\n');

    try {
      // Stop all processes
      await this.stopSystem();

      // Clean log files
      const logFiles = await fs.readdir(this.config.logsDir);
      for (const file of logFiles) {
        if (file.endsWith('.log')) {
          await fs.unlink(path.join(this.config.logsDir, file));
          console.log(`🗑️  Deleted log file: ${file}`);
        }
      }

      // Clean temporary files
      const tempDir = path.join(this.config.automationDir, 'temp');
      if (await this.fileExists(tempDir)) {
        const tempFiles = await fs.readdir(tempDir);
        for (const file of tempFiles) {
          await fs.unlink(path.join(tempDir, file));
          console.log(`🗑️  Deleted temp file: ${file}`);
        }
      }

      console.log('✅ Cleanup completed successfully');

    } catch (error) {
      console.error('❌ Cleanup failed:', error.message);
    }
  }

  /**
   * Show help information
   */
  showHelp() {
    console.log('🤖 Zion App - Unified Automation Manager\n');
    console.log('Usage: npm run automation <command>\n');
    console.log('Commands:');
    console.log('  start      Start the automation system');
    console.log('  stop       Stop the automation system');
    console.log('  restart    Restart the automation system');
    console.log('  status     Show system status and metrics');
    console.log('  logs       Show system logs');
    console.log('  dashboard  Open the web dashboard');
    console.log('  test       Run automation tests');
    console.log('  setup      Setup the automation system');
    console.log('  clean      Cleanup logs and temporary files');
    console.log('  help       Show this help message\n');
    console.log('Examples:');
    console.log('  npm run automation:start');
    console.log('  npm run automation:status');
    console.log('  npm run automation:dashboard\n');
    console.log('📊 Dashboard: http://localhost:3001');
    console.log('📚 Documentation: See automation/README.md');
  }

  /**
   * Check if system is running
   */
  async isSystemRunning() {
    try {
      // Check if the automation process is still running
      const automationProcess = this.processes.get('automation');
      if (automationProcess && !automationProcess.killed) {
        return true;
      }
      
      // Also try to check if there's a web server (optional)
      try {
        const response = await fetch(`http://localhost:${this.config.port}/health`);
        return response.ok;
      } catch {
        // Web server not available, but process might still be running
        return automationProcess && !automationProcess.killed;
      }
    } catch {
      return false;
    }
  }

  /**
   * Wait for system to start
   */
  async waitForSystemStart() {
    const maxAttempts = 60; // Increase timeout to 60 seconds
    let attempts = 0;

    while (attempts < maxAttempts) {
      if (await this.isSystemRunning()) {
        return true;
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      attempts++;
    }

    throw new Error('System failed to start within 60 seconds');
  }

  /**
   * Kill remaining processes
   */
  async killRemainingProcesses() {
    try {
      // Kill processes on the automation port
      execSync(`lsof -ti:${this.config.port} | xargs kill -9`, { stdio: 'ignore' });
    } catch {
      // Ignore errors if no processes found
    }
  }

  /**
   * Check if file exists
   */
  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}

// Run the manager
if (require.main === module) {
  const manager = new AutomationManager();
  manager.run().catch(error => {
    console.error('❌ Automation manager failed:', error.message);
    process.exit(1);
  });
}

module.exports = AutomationManager; 