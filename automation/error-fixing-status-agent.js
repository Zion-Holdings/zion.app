#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ErrorFixingStatusAgent {
  constructor() {
    this.projectRoot = process.cwd();
    this.statusDir = path.join(this.projectRoot, 'automation', 'error-fixing-status');
    this.logsDir = path.join(this.projectRoot, 'automation', 'error-fixing-logs');
  }

  async generateStatusReport() {
    try {
      console.log('📊 Generating error fixing status report...');
      
      const report = {
        timestamp: new Date().toISOString(),
        agents: await this.getAgentStatus(),
        errors: await this.getCurrentErrors(),
        recommendations: await this.getRecommendations()
      };

      const reportPath = path.join(this.statusDir, 'status-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log('✅ Status report generated');
      return report;
    } catch (error) {
      console.error('❌ Error generating status report:', error);
    }
  }

  async getAgentStatus() {
    const agents = [
      { name: 'syntax-error-fixing-agent', pidFile: 'syntax-agent.pid' },
      { name: 'linting-error-fixing-agent', pidFile: 'linting-agent.pid' },
      { name: 'continuous-error-monitoring-agent', pidFile: 'monitoring-agent.pid' }
    ];

    const status = [];
    for (const agent of agents) {
      const pidFile = path.join(this.projectRoot, 'automation', 'error-fixing-pids', agent.pidFile);
      const isRunning = fs.existsSync(pidFile);
      
      status.push({
        name: agent.name,
        running: isRunning,
        pid: isRunning ? fs.readFileSync(pidFile, 'utf8').trim() : null
      });
    }

    return status;
  }

  async getCurrentErrors() {
    try {
      const lintResult = execSync('npm run lint', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });

      const errorLines = lintResult.split('\n').filter(line => 
        line.includes('Error') || line.includes('Warning')
      );

      return {
        totalErrors: errorLines.length,
        errors: errorLines.slice(0, 10) // Show first 10 errors
      };
    } catch (error) {
      return {
        totalErrors: 'unknown',
        errors: ['Unable to determine errors']
      };
    }
  }

  async getRecommendations() {
    const recommendations = [];
    
    // Check if agents are running
    const agentStatus = await this.getAgentStatus();
    const runningAgents = agentStatus.filter(agent => agent.running);
    
    if (runningAgents.length === 0) {
      recommendations.push('Start error fixing agents to automatically fix issues');
    }
    
    // Check for recent errors
    const currentErrors = await this.getCurrentErrors();
    if (currentErrors.totalErrors > 0) {
      recommendations.push('Run manual error fixing to address current issues');
    }
    
    return recommendations;
  }
}

// Run the status agent
const statusAgent = new ErrorFixingStatusAgent();
statusAgent.generateStatusReport().catch(console.error);