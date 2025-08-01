const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Import all automation agents
const AutonomousImprovementAgent = require('./autonomous-improvement-agent');
const ContentGenerationAutomation = require('./content-generation-automation');
const AutonomousAnalytics = require('./autonomous-analytics');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.statusFile = path.join(this.projectRoot, 'automation/orchestrator-status.json');
    
    this.agents = {
      improvement: new AutonomousImprovementAgent(),
      content: new ContentGenerationAutomation(),
      analytics: new AutonomousAnalytics()
    };
    
    this.ensureDirectories();
    this.loadStatus();
  }

  ensureDirectories() {
    const dirs = [
      'automation/logs',
      'automation/backups',
      'automation/status'
    ];
    
    dirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
      }
    });
  }

  loadStatus() {
    if (fs.existsSync(this.statusFile)) {
      this.status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
    } else {
      this.status = {
        isRunning: false,
        lastStart: null,
        agentStatus: {},
        totalImprovements: 0,
        totalContentGenerated: 0,
        totalAnalyticsReports: 0,
        errors: [],
        performance: {
          uptime: 0,
          cyclesCompleted: 0,
          lastCycle: null
        }
      };
    }
  }

  saveStatus() {
    fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
  }

  async startAllAgents() {
    console.log('🚀 Starting all autonomous agents...');
    
    this.status.isRunning = true;
    this.status.lastStart = new Date().toISOString();
    this.saveStatus();

    // Start improvement agent
    this.startAgent('improvement', async () => {
      await this.agents.improvement.runContinuousImprovement();
    });

    // Start content generation agent
    this.startAgent('content', async () => {
      await this.agents.content.runContinuousGeneration();
    });

    // Start analytics agent
    this.startAgent('analytics', async () => {
      await this.agents.analytics.runContinuousAnalytics();
    });

    // Start monitoring
    this.startMonitoring();
  }

  startAgent(name, agentFunction) {
    console.log(`🤖 Starting ${name} agent...`);
    
    this.status.agentStatus[name] = {
      isRunning: true,
      lastStart: new Date().toISOString(),
      errors: [],
      cyclesCompleted: 0
    };
    this.saveStatus();

    agentFunction().catch(error => {
      console.error(`❌ Error in ${name} agent:`, error);
      this.status.agentStatus[name].errors.push({
        timestamp: new Date().toISOString(),
        error: error.message
      });
      this.status.errors.push({
        agent: name,
        timestamp: new Date().toISOString(),
        error: error.message
      });
      this.saveStatus();
    });
  }

  async startMonitoring() {
    console.log('📊 Starting monitoring system...');
    
    setInterval(() => {
      this.updatePerformanceMetrics();
      this.checkAgentHealth();
      this.generateSystemReport();
    }, 300000); // Every 5 minutes
  }

  updatePerformanceMetrics() {
    const now = new Date();
    const lastStart = new Date(this.status.lastStart);
    this.status.performance.uptime = (now - lastStart) / 1000; // seconds
    
    Object.keys(this.status.agentStatus).forEach(agentName => {
      if (this.status.agentStatus[agentName].isRunning) {
        this.status.agentStatus[agentName].cyclesCompleted++;
      }
    });
    
    this.status.performance.lastCycle = now.toISOString();
    this.status.performance.cyclesCompleted++;
    this.saveStatus();
  }

  checkAgentHealth() {
    Object.keys(this.status.agentStatus).forEach(agentName => {
      const agent = this.status.agentStatus[agentName];
      
      // Check if agent has too many errors
      if (agent.errors.length > 5) {
        console.warn(`⚠️ Agent ${agentName} has ${agent.errors.length} errors`);
      }
      
      // Check if agent has been running for too long without activity
      const lastActivity = new Date(agent.lastStart);
      const hoursSinceActivity = (new Date() - lastActivity) / (1000 * 60 * 60);
      
      if (hoursSinceActivity > 24) {
        console.warn(`⚠️ Agent ${agentName} has been running for ${hoursSinceActivity.toFixed(1)} hours`);
      }
    });
  }

  async generateSystemReport() {
    console.log('📋 Generating system report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: {
        isRunning: this.status.isRunning,
        uptime: this.status.performance.uptime,
        totalCycles: this.status.performance.cyclesCompleted
      },
      agentStatus: this.status.agentStatus,
      metrics: {
        totalImprovements: this.status.totalImprovements,
        totalContentGenerated: this.status.totalContentGenerated,
        totalAnalyticsReports: this.status.totalAnalyticsReports
      },
      errors: this.status.errors.slice(-10), // Last 10 errors
      recommendations: this.generateSystemRecommendations()
    };
    
    const reportPath = path.join(this.logsDir, `system-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Keep only last 10 reports
    const reports = fs.readdirSync(this.logsDir)
      .filter(file => file.startsWith('system-report-'))
      .sort()
      .reverse()
      .slice(10);
    
    reports.forEach(file => {
      fs.unlinkSync(path.join(this.logsDir, file));
    });
    
    return report;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    // Check for high error rates
    const totalErrors = this.status.errors.length;
    if (totalErrors > 10) {
      recommendations.push({
        type: 'error',
        priority: 'high',
        title: 'High Error Rate',
        description: `System has ${totalErrors} errors. Review logs and implement fixes.`,
        action: 'Review error logs and implement fixes'
      });
    }
    
    // Check agent performance
    Object.keys(this.status.agentStatus).forEach(agentName => {
      const agent = this.status.agentStatus[agentName];
      if (agent.errors.length > 3) {
        recommendations.push({
          type: 'agent',
          priority: 'medium',
          title: `${agentName} Agent Issues`,
          description: `${agentName} agent has ${agent.errors.length} errors.`,
          action: `Review and fix ${agentName} agent issues`
        });
      }
    });
    
    return recommendations;
  }

  async stopAllAgents() {
    console.log('🛑 Stopping all autonomous agents...');
    
    this.status.isRunning = false;
    this.saveStatus();
    
    // Generate final report
    await this.generateSystemReport();
    
    console.log('✅ All agents stopped');
  }

  async runOrchestrator() {
    console.log('🎼 Starting automation orchestrator...');
    
    try {
      // Start all agents
      await this.startAllAgents();
      
      // Keep orchestrator running
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, stopping orchestrator...');
        await this.stopAllAgents();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, stopping orchestrator...');
        await this.stopAllAgents();
        process.exit(0);
      });
      
      // Keep the process alive
      setInterval(() => {
        // Heartbeat
        console.log('💓 Orchestrator heartbeat...');
      }, 300000); // Every 5 minutes
      
    } catch (error) {
      console.error('❌ Error in orchestrator:', error);
      await this.stopAllAgents();
      process.exit(1);
    }
  }

  async createCronJobs() {
    console.log('⏰ Creating cron jobs for automation...');
    
    const cronJobs = [
      {
        name: 'automation-start',
        schedule: '0 0 * * *', // Daily at midnight
        command: 'node automation/automation-orchestrator.js start'
      },
      {
        name: 'backup-system',
        schedule: '0 2 * * *', // Daily at 2 AM
        command: 'node automation/backup-system.js'
      },
      {
        name: 'health-check',
        schedule: '*/30 * * * *', // Every 30 minutes
        command: 'node automation/health-check.js'
      }
    ];
    
    const cronFile = path.join(this.projectRoot, 'automation/crontab.txt');
    let cronContent = '# Automation cron jobs\n\n';
    
    cronJobs.forEach(job => {
      cronContent += `${job.schedule} cd ${this.projectRoot} && ${job.command}\n`;
    });
    
    fs.writeFileSync(cronFile, cronContent);
    console.log('✅ Cron jobs created');
    
    return cronJobs;
  }

  async setupContinuousDeployment() {
    console.log('🚀 Setting up continuous deployment...');
    
    // Create GitHub Actions workflow
    const workflowContent = `name: Autonomous Improvement Pipeline

on:
  push:
    branches: [ main ]
  schedule:
    - cron: '0 */6 * * *' # Every 6 hours

jobs:
  autonomous-improvement:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run autonomous improvement agent
      run: node automation/autonomous-improvement-agent.js
      env:
        OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
        SUPABASE_URL: \${{ secrets.SUPABASE_URL }}
        SUPABASE_ANON_KEY: \${{ secrets.SUPABASE_ANON_KEY }}
    
    - name: Run content generation
      run: node automation/content-generation-automation.js
      env:
        OPENAI_API_KEY: \${{ secrets.OPENAI_API_KEY }}
    
    - name: Run analytics
      run: node automation/autonomous-analytics.js
    
    - name: Deploy to Netlify
      run: |
        git config --global user.name "Autonomous Agent"
        git config --global user.email "agent@bolt.new"
        git add .
        git commit -m "🤖 Autonomous improvement cycle" || exit 0
        git push origin main
`;
    
    const workflowPath = path.join(this.projectRoot, '.github/workflows/autonomous-improvement.yml');
    const workflowDir = path.dirname(workflowPath);
    
    if (!fs.existsSync(workflowDir)) {
      fs.mkdirSync(workflowDir, { recursive: true });
    }
    
    fs.writeFileSync(workflowPath, workflowContent);
    console.log('✅ GitHub Actions workflow created');
  }
}

// Export for use in other modules
module.exports = AutomationOrchestrator;

// Run if called directly
if (require.main === module) {
  const orchestrator = new AutomationOrchestrator();
  
  const command = process.argv[2];
  
  if (command === 'start') {
    orchestrator.runOrchestrator().catch(console.error);
  } else if (command === 'setup') {
    orchestrator.createCronJobs();
    orchestrator.setupContinuousDeployment();
  } else {
    console.log('Usage: node automation-orchestrator.js [start|setup]');
  }
} 