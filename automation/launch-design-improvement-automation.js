const fs = require('fs-extra');
const path = require('path');
const cron = require('node-cron');
const DesignImprovementAutomationSystem = require('./design-improvement-automation-system');
const LayoutOptimizationAgent = require('./design-improvement-agents/layout-optimization-agent');
const NavigationEnhancementAgent = require('./design-improvement-agents/navigation-enhancement-agent');
const VisualDesignEnhancementAgent = require('./design-improvement-agents/visual-design-enhancement-agent');

class DesignImprovementLauncher {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      logsDir: path.join(process.cwd(), 'automation/design-improvement-logs'),
      statusFile: path.join(process.cwd(), 'automation/design-improvement-status.json'),
      pidFile: path.join(process.cwd(), 'automation/design-improvement-pid.txt'),
      cronSchedule: '*/30 * * * *', // Every 30 minutes
      agents: {
        layout: new LayoutOptimizationAgent(),
        navigation: new NavigationEnhancementAgent(),
        visualDesign: new VisualDesignEnhancementAgent()
      }
    };
    
    this.system = new DesignImprovementAutomationSystem();
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.config.logsDir,
      path.dirname(this.config.statusFile),
      path.dirname(this.config.pidFile)
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirpSync(dir);
      }
    });
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      type,
      message,
      system: 'design-improvement-launcher'
    };

    const logFile = path.join(this.config.logsDir, `launcher-${new Date().toISOString().split('T')[0]}.json`);
    
    try {
      let logs = [];
      if (fs.existsSync(logFile)) {
        logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
      }
      logs.push(logEntry);
      fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
    } catch (error) {
      console.error('Failed to write log:', error);
    }

    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async startAgent(agentName, agent) {
    try {
      this.log(`Starting ${agentName} agent...`);
      
      let result;
      switch (agentName) {
        case 'layout':
          result = await agent.optimizeLayout();
          break;
        case 'navigation':
          result = await agent.enhanceNavigation();
          break;
        case 'visualDesign':
          result = await agent.enhanceVisualDesign();
          break;
        default:
          throw new Error(`Unknown agent: ${agentName}`);
      }

      if (result.success) {
        this.log(`${agentName} agent completed successfully: ${result.changes.join(', ')}`);
      } else {
        this.log(`${agentName} agent failed: ${result.error}`, 'error');
      }

      return result;
    } catch (error) {
      this.log(`${agentName} agent failed: ${error.message}`, 'error');
      return { success: false, error: error.message };
    }
  }

  async runImprovementCycle() {
    try {
      this.log('Starting design improvement cycle...');
      
      const results = {};
      
      // Run layout optimization
      results.layout = await this.startAgent('layout', this.config.agents.layout);
      
      // Run navigation enhancement
      results.navigation = await this.startAgent('navigation', this.config.agents.navigation);
      
      // Run visual design enhancement
      results.visualDesign = await this.startAgent('visualDesign', this.config.agents.visualDesign);
      
      // Generate cycle report
      await this.generateCycleReport(results);
      
      this.log('Design improvement cycle completed');
      return results;
    } catch (error) {
      this.log(`Improvement cycle failed: ${error.message}`, 'error');
      return null;
    }
  }

  async generateCycleReport(results) {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        cycle: 'design-improvement',
        results,
        summary: {
          totalAgents: Object.keys(results).length,
          successfulAgents: Object.values(results).filter(r => r.success).length,
          failedAgents: Object.values(results).filter(r => !r.success).length
        }
      };

      const reportFile = path.join(this.config.logsDir, `cycle-report-${Date.now()}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

      this.log(`Cycle report generated: ${reportFile}`);
    } catch (error) {
      this.log(`Failed to generate cycle report: ${error.message}`, 'error');
    }
  }

  async startContinuousImprovement() {
    this.log('Starting continuous design improvement system...');
    
    // Save PID
    fs.writeFileSync(this.config.pidFile, process.pid.toString());
    
    // Start cron job for regular improvements
    cron.schedule(this.config.cronSchedule, async () => {
      this.log('Running scheduled design improvement cycle...');
      await this.runImprovementCycle();
    });

    // Run initial improvement cycle
    await this.runImprovementCycle();

    this.log('Continuous design improvement system started successfully');
    
    // Keep the process running
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully...');
      this.stop();
    });

    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully...');
      this.stop();
    });
  }

  async startSingleImprovement(improvementType) {
    this.log(`Starting single improvement: ${improvementType}`);
    
    let agent;
    let agentName;
    
    switch (improvementType) {
      case 'layout':
        agent = this.config.agents.layout;
        agentName = 'layout';
        break;
      case 'navigation':
        agent = this.config.agents.navigation;
        agentName = 'navigation';
        break;
      case 'visual-design':
        agent = this.config.agents.visualDesign;
        agentName = 'visualDesign';
        break;
      default:
        this.log(`Unknown improvement type: ${improvementType}`, 'error');
        return;
    }
    
    const result = await this.startAgent(agentName, agent);
    
    if (result.success) {
      this.log(`Single improvement completed successfully: ${result.changes.join(', ')}`);
    } else {
      this.log(`Single improvement failed: ${result.error}`, 'error');
    }
    
    return result;
  }

  stop() {
    this.log('Stopping design improvement launcher...');
    
    // Remove PID file
    if (fs.existsSync(this.config.pidFile)) {
      fs.unlinkSync(this.config.pidFile);
    }
    
    process.exit(0);
  }

  async getStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        const status = JSON.parse(fs.readFileSync(this.config.statusFile, 'utf8'));
        return status;
      }
      return { status: 'No status file found' };
    } catch (error) {
      return { status: 'Error reading status', error: error.message };
    }
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
const launcher = new DesignImprovementLauncher();

if (args.length === 0) {
  // Start continuous improvement
  launcher.startContinuousImprovement();
} else {
  const command = args[0];
  
  switch (command) {
    case 'start':
      launcher.startContinuousImprovement();
      break;
    case 'layout':
      launcher.startSingleImprovement('layout');
      break;
    case 'navigation':
      launcher.startSingleImprovement('navigation');
      break;
    case 'visual-design':
      launcher.startSingleImprovement('visual-design');
      break;
    case 'cycle':
      launcher.runImprovementCycle();
      break;
    case 'status':
      launcher.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case 'stop':
      launcher.stop();
      break;
    default:
      console.log(`
Design Improvement Automation Launcher

Usage:
  node launch-design-improvement-automation.js [command]

Commands:
  start           Start continuous improvement system
  layout          Run layout optimization
  navigation      Run navigation enhancement
  visual-design   Run visual design enhancement
  cycle           Run a single improvement cycle
  status          Get system status
  stop            Stop the system

Examples:
  node launch-design-improvement-automation.js start
  node launch-design-improvement-automation.js layout
  node launch-design-improvement-automation.js status
      `);
      break;
  }
}

module.exports = DesignImprovementLauncher;
