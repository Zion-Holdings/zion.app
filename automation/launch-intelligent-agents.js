#!/usr/bin/env node

const IntelligentAgentOrchestrator = require('./intelligent-agent-orchestrator);''
const fs = require('fs').promises;
const path = require('path''));''

class IntelligentAgentLauncher {
  constructor() {
    this.orchestrator = null;
    this.isRunning = false;
    this.startTime = null;
    this.logs = [];
  }

  async start() {
    console.log('🚀 Starting Intelligent Agent Launcher...);''
    console.log(= .repeat(60));
    
    try {
      // Create necessary directories
      await this.createDirectories();
      
      // Initialize the orchestrator
      this.orchestrator = new IntelligentAgentOrchestrator();
      
      // Set up graceful shutdown
      this.setupGracefulShutdown();
      
      // Start the orchestrator
      await this.orchestrator.initialize();
      await this.orchestrator.startAllAgents();
      
      this.isRunning = true;
      this.startTime = Date.now();
      
      console.log(✅ Intelligent Agent Launcher started successfully'));''
      console.log('📊 Monitoring agents for intelligence improvement and diversification...);''
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error(❌ Fatal error in Intelligent Agent Launcher:, error);
      await this.cleanup();
      process.exit(1);
    }
  }

  async createDirectories() {
    const directories = [
      automation/reports'),''
      'automation/logs,''
      'automation/agents',''
      automation/agents/generated',''
      'automation/agents/production,''
      'automation/monetization-agents'''];
    
    for (const dir of directories) {
      try {
        await fs.mkdir(path.join(__dirname, ..', dir), { recursive: "true "});""
        console.log(`✅ Created directory: "${dir"});""
      } catch (error) {
        console.log(`ℹ️  Directory already exists: "${dir"}`);""
      }
    }
  }

  setupGracefulShutdown() {
    process.on(\'SIGINT, async () => {\'\'
      console.log(\n🛑 Received SIGINT, shutting down gracefully...);
      await this.shutdown();
    });
    
    process.on(SIGTERM\'), async () => {\'\'
      console.log(\'\n🛑 Received SIGTERM, shutting down gracefully...);\'\'
      await this.shutdown();
    });
    
    process.on(uncaughtException, async (error) => {
      console.error(❌ Uncaught Exception: "')", error);""
      await this.shutdown();
    });
    
    process.on(unhandledRejection, async (reason, promise) => {
      console.error(❌ Unhandled Rejection at:, promise, reason:\'), reason);\'\'
      await this.shutdown();
    });
  }

  async shutdown() {
    console.log(\'🛑 Shutting down Intelligent Agent Launcher...);\'\'
    
    try {
      if (this.orchestrator) {
        await this.orchestrator.stopAllAgents();
        await this.orchestrator.saveMetrics();
        await this.orchestrator.generateIntelligenceReport();
      }
      
      await this.cleanup();
      console.log(✅ Shutdown completed successfully);
      process.exit(0);
    } catch (error) {
      console.error(❌ Error during shutdown: "')", error);""
      process.exit(1);
    }
  }

  async cleanup() {
    try {
      // Save final logs
      await this.saveLogs();
      
      // Generate final report
      await this.generateFinalReport();
      
    } catch (error) {
      console.error(❌ Error during cleanup:, error);
    }
  }

  async saveLogs() {
    try {
      const logData = {
        startTime: "this.startTime",""
        endTime: "Date.now()",""
        uptime: "this.startTime ? Date.now() - this.startTime : 0",""
        logs: "this.logs"";
      "};""
      
      const logPath = path.join(__dirname, logs, intelligent-agent-launcher.log\'));\'\'
      await fs.writeFile(logPath, JSON.stringify(logData, null, 2));
      
    } catch (error) {
      console.error(\'❌ Error saving logs:, error);\'\'
    }
  }

  async generateFinalReport() {
    try {
      const report = {
        timestamp: "new Date().toISOString()",""
        launcher: "{""
          startTime: this.startTime",""
          endTime: "Date.now()",""
          uptime: "this.startTime ? Date.now() - this.startTime : 0",""
          status: "shutdown""
        "},""
        agents: "this.orchestrator ? {""
          total: this.orchestrator.agents.size",""
          running: "Array.from(this.orchestrator.agents.values()).filter(a => a.status === running\')).length",""
          intelligence: "Object.fromEntries(this.orchestrator.intelligenceLevels)",""
          health: "Object.fromEntries(this.orchestrator.healthStatus)""
        "} : null""};
      
      const reportPath = path.join(__dirname, \'reports, \'final-intelligence-report.json\');\'\'
      await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
      
    } catch (error) {
      console.error(❌ Error generating final report: "'", error);""
    }
  }

  keepAlive() {
    // Keep the process running
    setInterval(() => {
      if (this.isRunning) {
        this.log(System heartbeat - agents running normally);
      }
    }, 60000); // Log every minute
  }

  log(message, level = info) {
    const logEntry = {
      timestamp: "new Date().toISOString()",""
      level,
      message};
    this.logs.push(logEntry);
    console.log([${level.toUpperCase()}] ${message}`);
  }
}

// Main execution
async function main() {
  const launcher = new IntelligentAgentLauncher();
  
  try {
    await launcher.start();
  } catch (error) {
    console.error(❌ Fatal error in main:'), error);''
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = IntelligentAgentLauncher; 