#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');

class MasterErrorFixingLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.agents = [];
    this.isRunning = false;
    this.agentConfigs = [
      {
        name: 'parsing-error-fixing-agent',
        script: 'automation/parsing-error-fixing-agent.js',
        description: 'Fixes parsing errors like missing semicolons, unterminated strings, etc.'
      },
      {
        name: 'syntax-error-fixing-agent',
        script: 'automation/syntax-error-fixing-agent.js',
        description: 'Fixes syntax errors in TypeScript/JavaScript files'
      },
      {
        name: 'linting-error-fixing-agent',
        script: 'automation/linting-error-fixing-agent.js',
        description: 'Fixes linting errors using ESLint auto-fix'
      },
      {
        name: 'comprehensive-error-fixing-system',
        script: 'automation/comprehensive-error-fixing-system.js',
        description: 'Comprehensive error fixing system that orchestrates all agents'
      },
      {
        name: 'continuous-error-monitoring-agent',
        script: 'automation/continuous-error-monitoring-agent.js',
        description: 'Continuously monitors for errors and triggers fixes'
      }
    ];
  }

  async launchAllAgents() {
    if (this.isRunning) {
      console.log('⚠️ Error fixing agents are already running');
      return;
    }

    this.isRunning = true;
    console.log('🚀 Launching all error fixing agents...');

    try {
      // Launch each agent with a delay between them
      for (const config of this.agentConfigs) {
        console.log(`🔧 Starting ${config.name}...`);
        
        const agent = spawn('node', [config.script], {
          cwd: this.projectRoot,
          stdio: 'inherit'
        });
        
        this.agents.push({
          name: config.name,
          process: agent,
          config: config
        });

        // Wait a bit before launching next agent
        await this.sleep(3000);
      }

      console.log('✅ All error fixing agents launched successfully');

      // Handle agent termination
      this.agents.forEach(agent => {
        agent.process.on('exit', (code) => {
          console.log(`Agent ${agent.name} exited with code ${code}`);
        });
      });

    } catch (error) {
      console.error('❌ Error launching agents:', error);
      this.isRunning = false;
    }
  }

  async launchSpecificAgent(agentName) {
    const config = this.agentConfigs.find(c => c.name === agentName);
    if (!config) {
      console.error(`❌ Agent ${agentName} not found`);
      return;
    }

    console.log(`🔧 Starting ${agentName}...`);
    
    try {
      execSync(`node ${config.script}`, {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      console.log(`✅ ${agentName} completed successfully`);
    } catch (error) {
      console.error(`❌ Error running ${agentName}:`, error.message);
    }
  }

  async runComprehensiveFix() {
    console.log('🚀 Running comprehensive error fix...');
    
    try {
      execSync('node automation/comprehensive-error-fixing-system.js', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      console.log('✅ Comprehensive error fix completed');
    } catch (error) {
      console.error('❌ Error in comprehensive fix:', error.message);
    }
  }

  async runCronJob() {
    console.log('⏰ Running error fixing cron job...');
    
    try {
      execSync('./automation/error-fixing-cron-enhanced.sh', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      console.log('✅ Cron job completed');
    } catch (error) {
      console.error('❌ Error in cron job:', error.message);
    }
  }

  async generateStatusReport() {
    console.log('📊 Generating status report...');
    
    try {
      execSync('node automation/error-fixing-status-agent.js', {
        cwd: this.projectRoot,
        stdio: 'inherit'
      });
      console.log('✅ Status report generated');
    } catch (error) {
      console.error('❌ Error generating status report:', error.message);
    }
  }

  async stopAllAgents() {
    console.log('🛑 Stopping all error fixing agents...');
    
    this.agents.forEach(agent => {
      if (!agent.process.killed) {
        agent.process.kill('SIGTERM');
      }
    });

    this.isRunning = false;
    console.log('✅ All agents stopped');
  }

  showHelp() {
    console.log(`
🚀 Master Error Fixing Launcher

Usage:
  node automation/master-error-fixing-launcher.js [command] [options]

Commands:
  --all                    Launch all error fixing agents
  --comprehensive          Run comprehensive error fix
  --cron                   Run cron job
  --status                 Generate status report
  --stop                   Stop all running agents
  --agent <name>           Run specific agent
  --help                   Show this help

Available Agents:
${this.agentConfigs.map(config => `  ${config.name}: ${config.description}`).join('\n')}

Examples:
  node automation/master-error-fixing-launcher.js --all
  node automation/master-error-fixing-launcher.js --comprehensive
  node automation/master-error-fixing-launcher.js --agent parsing-error-fixing-agent
  node automation/master-error-fixing-launcher.js --cron
  node automation/master-error-fixing-launcher.js --status
`);
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
const launcher = new MasterErrorFixingLauncher();

if (args.includes('--help') || args.length === 0) {
  launcher.showHelp();
} else if (args.includes('--all')) {
  launcher.launchAllAgents();
} else if (args.includes('--comprehensive')) {
  launcher.runComprehensiveFix();
} else if (args.includes('--cron')) {
  launcher.runCronJob();
} else if (args.includes('--status')) {
  launcher.generateStatusReport();
} else if (args.includes('--stop')) {
  launcher.stopAllAgents();
} else if (args.includes('--agent')) {
  const agentIndex = args.indexOf('--agent');
  if (agentIndex + 1 < args.length) {
    const agentName = args[agentIndex + 1];
    launcher.launchSpecificAgent(agentName);
  } else {
    console.error('❌ Please specify an agent name');
  }
} else {
  console.error('❌ Unknown command. Use --help for usage information.');
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  await launcher.stopAllAgents();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  await launcher.stopAllAgents();
  process.exit(0);
});
