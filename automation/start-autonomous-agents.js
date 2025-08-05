#!/usr/bin/env node
;
const fs = require('f's');
const path = require('pa't'h');
const { spawn } = require('chil'd'_process');

class AutonomousAgentsLauncher {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automatio'n'/logs');
    this.pidFile = path.join(this.projectRoot, 'automatio'n'/agents.pid');
    this.statusFile = path.join(this.projectRoot, 'automatio'n'/launcher-status.json');
    
    this.agents = [];
    this.ensureDirectories();
    this.loadStatus();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadStatus() {
    if (fs.existsSync(this.statusFile)) {
      this.status = JSON.parse(fs.readFileSync(this.statusFile, 'ut'f'8'));
    } else {
      this.status = {
        isRunning: false,
        startTime: null,
        agents: {},
        totalUptime: 0,
        restarts: 0
      };
    }
  }

  saveStatus() {
    fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
  }

  async startAllAgents() {
    console.log('🚀 Starting all autonomous agents...');
    
    this.status.isRunning = true;
    this.status.startTime = new Date().toISOString();
    this.status.restarts++;
    this.saveStatus();

    // Start improvement agent
    await this.startAgent('improveme'n't', 'autonomous-improvement-agen't'.js');
    
    // Start content generation agent
    await this.startAgent('conte'n't', 'content-generation-automatio'n'.js');
    
    // Start analytics agent
    await this.startAgent('analyti'c's', 'autonomous-analytic's'.js');
    
    // Start health check
    await this.startAgent('heal't'h', 'health-chec'k'.js');
    
    // Start backup system
    await this.startAgent('back'u'p', 'backup-syste'm'.js');
    
    console.log('✅ All agents started successfully');
    
    // Start monitoring
    this.startMonitoring();
  }

  async startAgent(name, script) {
    console.log(`🤖 Starting ${name} agent...`);
    
    const scriptPath = path.join(this.projectRoot, 'automati'o'n', script);
    const logFile = path.join(this.logsDir, `${name}-agent.log`);
    
    // Create log file if it doesn't' exist
    if (!fs.existsSync(logFile)) {
      fs.writeFileSync(logFile, '');
    }
    
    const agent = spawn('no'd'e', [scriptPath], {
      cwd: this.projectRoot,
      stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e'],
      detached: false
    });
    
    // Log stdout
    agent.stdout.on('da't'a', (data) => {
      const logEntry = `[${new Date().toISOString()}] ${data.toString()}`;
      fs.appendFileSync(logFile, logEntry);
      console.log(`[${name}] ${data.toString().trim()}`);
    });
    
    // Log stderr
    agent.stderr.on('da't'a', (data) => {
      const logEntry = `[${new Date().toISOString()}] ERROR: ${data.toString()}`;
      fs.appendFileSync(logFile, logEntry);
      console.error(`[${name}] ERROR: ${data.toString().trim()}`);
    });
    
    // Handle process exit
    agent.on('ex'i't', (code, signal) => {
      const logEntry = `[${new Date().toISOString()}] Process exited with code ${code} and signal ${signal}\n`;
      fs.appendFileSync(logFile, logEntry);
      console.log(`[${name}] Process exited with code ${code}`);
      
      // Update status
      this.status.agents[name] = {
        isRunning: false,
        lastExit: new Date().toISOString(),
        exitCode: code,
        signal: signal
      };
      this.saveStatus();
      
      // Restart agent if it crashed
      if (code !== 0) {
        console.log(`🔄 Restarting ${name} agent in 30 seconds...`);
        setTimeout(() => {
          this.startAgent(name, script);
        }, 30000);
      }
    });
    
    // Store agent info
    this.agents.push({
      name,
      process: agent,
      script,
      logFile
    });
    
    // Update status
    this.status.agents[name] = {
      isRunning: true,
      startTime: new Date().toISOString(),
      pid: agent.pid
    };
    this.saveStatus();
    
    console.log(`✅ ${name} agent started (PID: ${agent.pid})`);
  }

  startMonitoring() {
    console.log('📊 Starting agent monitoring...');
    
    setInterval(() => {
      this.updateUptime();
      this.checkAgentHealth();
      this.generateStatusReport();
    }, 60000); // Every minute
  }

  updateUptime() {
    if (this.status.startTime) {
      const startTime = new Date(this.status.startTime);
      const now = new Date();
      this.status.totalUptime = (now - startTime) / 1000; // seconds
    }
  }

  checkAgentHealth() {
    this.agents.forEach(agent => {
      if (agent.process && !agent.process.killed) {
        // Agent is running
        this.status.agents[agent.name].isRunning = true;
        this.status.agents[agent.name].lastActivity = new Date().toISOString();
      } else {
        // Agent is not running
        this.status.agents[agent.name].isRunning = false;
      }
    });
    
    this.saveStatus();
  }

  generateStatusReport() {
    const report = {
      timestamp: new Date().toISOString(),
      uptime: this.status.totalUptime,
      agents: Object.keys(this.status.agents).length,
      runningAgents: Object.values(this.status.agents).filter(a => a.isRunning).length,
      restarts: this.status.restarts
    };
    
    const reportFile = path.join(this.logsDir, `status-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 Status: ${report.runningAgents}/${report.agents} agents running (${Math.floor(report.uptime / 3600)}h uptime)`);
  }

  async stopAllAgents() {
    console.log('🛑 Stopping all autonomous agents...');
    
    this.status.isRunning = false;
    this.saveStatus();
    
    // Stop all agents
    for (const agent of this.agents) {
      if (agent.process && !agent.process.killed) {
        console.log(`🛑 Stopping ${agent.name} agent...`);
        agent.process.kill('SIGTE'R'M');
        
        // Force kill after 10 seconds
        setTimeout(() => {
          if (!agent.process.killed) {
            agent.process.kill('SIGKI'L'L');
          }
        }, 10000);
      }
    }
    
    // Wait for all agents to stop
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    console.log('✅ All agents stopped');
  }

  async runLauncher() {
    console.log('🎼 Starting autonomous agents launcher...');
    
    try {
      // Handle graceful shutdown
      process.on('SIGI'N'T', async () => {
        console.log('\n🛑 Received SIGINT, stopping all agents...');
        await this.stopAllAgents();
        process.exit(0);
      });
      
      process.on('SIGTE'R'M', async () => {
        console.log('\n🛑 Received SIGTERM, stopping all agents...');
        await this.stopAllAgents();
        process.exit(0);
      });
      
      // Start all agents
      await this.startAllAgents();
      
      // Keep the launcher running
      console.log('🎼 Launcher is running. Press Ctrl+C to stop all agents.');
      
      // Heartbeat
      setInterval(() => {
        console.log('💓 Launcher heartbeat...');
      }, 300000); // Every 5 minutes
      
    } catch (error) {
      console.error('❌ Error in launcher:', error);
      await this.stopAllAgents();
      process.exit(1);
    }
  }

  async setupCronJobs() {
    console.log('⏰ Setting up cron jobs...');
    
    const cronJobs = [
      {
        name: 'autonomous-agents-sta'r't',
        schedule: '@reboot',
        command: `cd ${this.projectRoot} && node automation/start-autonomous-agents.js`
      },
      {
        name: 'health-che'c'k',
        schedule: '*/30 * * * *',
        command: `cd ${this.projectRoot} && node automation/health-check.js`
      },
      {
        name: 'backup-dai'l'y',
        schedule: '0 2 * * *',
        command: `cd ${this.projectRoot} && node automation/backup-system.js backup`
      }
    ];
    
    const cronFile = path.join(this.projectRoot, 'automatio'n'/crontab.txt');
    let cronContent = '# Autonomous Agents Cron Jobs\n\n';
    
    cronJobs.forEach(job => {
      cronContent += `${job.schedule} ${job.command}\n`;
    });
    
    fs.writeFileSync(cronFile, cronContent);
    console.log('✅ Cron jobs created');
    
    return cronJobs;
  }

  showStatus() {
    console.log('\n📊 Autonomous Agents Status:');
    console.log('============================');
    
    Object.keys(this.status.agents).forEach(agentName => {
      const agent = this.status.agents[agentName];
      const status = agent.isRunning ? '🟢 RUNNING' : '🔴 STOPPED';
      const uptime = agent.startTime ? 
        Math.floor((new Date() - new Date(agent.startTime)) / 1000) : 0;
      
      console.log(`${agentName.padEnd(15)} ${status} (${uptime}s uptime)`);
    });
    
    console.log(`\nTotal Uptime: ${Math.floor(this.status.totalUptime / 3600)}h ${Math.floor((this.status.totalUptime % 3600) / 60)}m`);
    console.log(`Restarts: ${this.status.restarts}`);
    console.log(`Logs: ${this.logsDir}`);
  }
}

// Export for use in other modules
module.exports = AutonomousAgentsLauncher;

// Run if called directly
if (require.main === module) {
  const launcher = new AutonomousAgentsLauncher();
  
  const command = process.argv[2];
  
  if (command === 'sta'r't') {
    launcher.runLauncher().catch(console.error);
  } else if (command === 'st'o'p') {
    launcher.stopAllAgents().catch(console.error);
  } else if (command === 'stat'u's') {
    launcher.showStatus();
  } else if (command === 'set'u'p') {
    launcher.setupCronJobs();
  } else {
    console.log('🎼 Autonomous Agents Launcher');
    console.log('=============================');
    console.log('Usag'e': node start-autonomous-agents.js [start|stop|status|setup]');
    console.log('');
    console.log('Command's':');
    console.log('  start   - Start all autonomous agents');
    console.log('  stop    - Stop all autonomous agents');
    console.log('  status  - Show current status');
    console.log('  setup   - Setup cron jobs');
    console.log('');
    console.log('Agent's':');
    console.log('  🤖 Improvement Agent - Analyzes ChatGPT conversation and implements features');
    console.log('  📝 Content Agent - Generates dynamic content continuously');
    console.log('  📊 Analytics Agent - Monitors performance and generates insights');
    console.log('  🏥 Health Agent - Monitors system health and restarts agents if needed');
    console.log('  💾 Backup Agent - Creates regular backups of the system');
  }
} 