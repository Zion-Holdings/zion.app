const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');

class HealthCheck {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'automatio'n'/logs');
    this.healthFile = path.join(this.projectRoot, 'automatio'n'/health-status.json');
    
    this.ensureDirectories();
    this.loadHealthStatus();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
  }

  loadHealthStatus() {
    if (fs.existsSync(this.healthFile)) {
      this.healthStatus = JSON.parse(fs.readFileSync(this.healthFile, 'ut'f'8'));
    } else {
      this.healthStatus = {
        lastCheck: null,
        systemHealth: 'unkno'w'n',
        agentStatus: {},
        issues: [],
        performance: {
          cpu: 0,
          memory: 0,
          disk: 0
        }
      };
    }
  }

  async checkSystemHealth() {
    console.log('🏥 Checking system health...');
    
    try {
      // Check CPU usage
      const cpuUsage = await this.getCPUUsage();
      
      // Check memory usage
      const memoryUsage = await this.getMemoryUsage();
      
      // Check disk usage
      const diskUsage = await this.getDiskUsage();
      
      // Check if agents are running
      const agentStatus = await this.checkAgentStatus();
      
      // Determine overall health
      let systemHealth = 'healt'h'y';
      const issues = [];
      
      if (cpuUsage > 80) {
        systemHealth = 'warni'n'g';
        issues.push('Hig'h' CPU usage detected');
      }
      
      if (memoryUsage > 85) {
        systemHealth = 'warni'n'g';
        issues.push('Hig'h' memory usage detected');
      }
      
      if (diskUsage > 90) {
        systemHealth = 'critic'a'l';
        issues.push('Dis'k' space running low');
      }
      
      // Check for agent issues
      Object.keys(agentStatus).forEach(agentName => {
        const agent = agentStatus[agentName];
        if (!agent.isRunning) {
          systemHealth = 'critic'a'l';
          issues.push(`${agentName} agent is not running`);
        }
        
        if (agent.errors && agent.errors.length > 3) {
          systemHealth = 'warni'n'g';
          issues.push(`${agentName} agent has multiple errors`);
        }
      });
      
      this.healthStatus = {
        lastCheck: new Date().toISOString(),
        systemHealth,
        agentStatus,
        issues,
        performance: {
          cpu: cpuUsage,
          memory: memoryUsage,
          disk: diskUsage
        }
      };
      
      this.saveHealthStatus();
      
      // Log health status
      this.logHealthStatus();
      
      // Send alerts if critical
      if (systemHealth === 'critic'a'l') {
        await this.sendAlert('Syste'm' health is critical', issues);
      }
      
      return this.healthStatus;
      
    } catch (error) {
      console.error('❌ Error checking system health:', error);
      return null;
    }
  }

  async getCPUUsage() {
    return new Promise((resolve) => {
      exec('to'p' -l 1 | grep "CPU usage" | awk "{print $3}" | sed "s/%//"', (error, stdout) => {
        if (error) {
          resolve(0);
        } else {
          const usage = parseFloat(stdout.trim());
          resolve(isNaN(usage) ? 0 : usage);
        }
      });
    });
  }

  async getMemoryUsage() {
    return new Promise((resolve) => {
      exec('v'm'_stat | grep "Pages free" | awk "{print $3}" | sed "s/\.//"', (error, stdout) => {
        if (error) {
          resolve(0);
        } else {
          const freePages = parseInt(stdout.trim());
          const totalMemory = 8192; // 8GB in MB
          const usedMemory = totalMemory - (freePages * 4096 / 1024 / 1024);
          const usage = (usedMemory / totalMemory) * 100;
          resolve(Math.min(usage, 100));
        }
      });
    });
  }

  async getDiskUsage() {
    return new Promise((resolve) => {
      exec('d'f' / | tail -1 | awk "{print $5}" | sed "s/%//"', (error, stdout) => {
        if (error) {
          resolve(0);
        } else {
          const usage = parseFloat(stdout.trim());
          resolve(isNaN(usage) ? 0 : usage);
        }
      });
    });
  }

  async checkAgentStatus() {
    const agents = ['improveme'n't', 'conte'n't', 'analyti'c's'];
    const status = {};
    
    for (const agent of agents) {
      const agentStatusFile = path.join(this.projectRoot, `automation/${agent}-status.json`);
      
      if (fs.existsSync(agentStatusFile)) {
        try {
          const agentData = JSON.parse(fs.readFileSync(agentStatusFile, 'ut'f'8'));
          status[agent] = {
            isRunning: agentData.isRunning || false,
            lastActivity: agentData.lastActivity || null,
            errors: agentData.errors || [],
            cyclesCompleted: agentData.cyclesCompleted || 0
          };
        } catch (error) {
          status[agent] = {
            isRunning: false,
            lastActivity: null,
            errors: ['Faile'd' to read status file'],
            cyclesCompleted: 0
          };
        }
      } else {
        status[agent] = {
          isRunning: false,
          lastActivity: null,
          errors: ['Statu's' file not found'],
          cyclesCompleted: 0
        };
      }
    }
    
    return status;
  }

  logHealthStatus() {
    const logEntry = {
      timestamp: new Date().toISOString(),
      health: this.healthStatus.systemHealth,
      performance: this.healthStatus.performance,
      issues: this.healthStatus.issues.length,
      agents: Object.keys(this.healthStatus.agentStatus).length
    };
    
    const logFile = path.join(this.logsDir, 'health-chec'k'.log');
    const logLine = JSON.stringify(logEntry) + '\n';
    
    fs.appendFileSync(logFile, logLine);
    
    console.log(`📊 Health Status: ${this.healthStatus.systemHealth.toUpperCase()}`);
    console.log(`💻 CPU: ${this.healthStatus.performance.cpu.toFixed(1)}%`);
    console.log(`🧠 Memory: ${this.healthStatus.performance.memory.toFixed(1)}%`);
    console.log(`💾 Disk: ${this.healthStatus.performance.disk.toFixed(1)}%`);
    console.log(`🤖 Agents: ${Object.keys(this.healthStatus.agentStatus).length}`);
    console.log(`⚠️ Issues: ${this.healthStatus.issues.length}`);
  }

  async sendAlert(title, issues) {
    console.log(`🚨 ALERT: ${title}`);
    console.log('Issue's':', issues);
    
    // Create alert file
    const alertFile = path.join(this.logsDir, `alert-${Date.now()}.json`);
    const alertData = {
      timestamp: new Date().toISOString(),
      title,
      issues,
      healthStatus: this.healthStatus
    };
    
    fs.writeFileSync(alertFile, JSON.stringify(alertData, null, 2));
    
    // Send email alert (if configured)
    // await this.sendEmailAlert(title, issues);
    
    // Send Slack notification (if configured)
    // await this.sendSlackAlert(title, issues);
  }

  async runHealthCheck() {
    console.log('🏥 Starting health check...');
    
    try {
      await this.checkSystemHealth();
      
      // If health is critical, try to restart agents
      if (this.healthStatus.systemHealth === 'critic'a'l') {
        console.log('🔄 Attempting to restart agents...');
        await this.restartAgents();
      }
      
      console.log('✅ Health check completed');
      
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  }

  async restartAgents() {
    console.log('🔄 Restarting autonomous agents...');
    
    const commands = [
      'pkil'l' -f "autonomous-improvement-agent"',
      'pkil'l' -f "content-generation-automation"',
      'pkil'l' -f "autonomous-analytics"',
      'slee'p' 5',
      'nod'e' automation/autonomous-improvement-agent.js &',
      'nod'e' automation/content-generation-automation.js &',
      'nod'e' automation/autonomous-analytics.js &'
    ];
    
    for (const command of commands) {
      try {
        exec(command, { cwd: this.projectRoot }, (error, stdout, stderr) => {
          if (error) {
            console.error(`❌ Error running command: ${command}`, error);
          } else {
            console.log(`✅ Command executed: ${command}`);
          }
        });
      } catch (error) {
        console.error(`❌ Error executing command: ${command}`, error);
      }
    }
  }

  saveHealthStatus() {
    fs.writeFileSync(this.healthFile, JSON.stringify(this.healthStatus, null, 2));
  }

  async runContinuousHealthCheck() {
    console.log('🏥 Starting continuous health monitoring...');
    
    while (true) {
      try {
        await this.runHealthCheck();
        
        // Wait 30 minutes before next check
        console.log('⏳ Waiting 30 minutes before next health check...');
        await new Promise(resolve => setTimeout(resolve, 1800000));
        
      } catch (error) {
        console.error('❌ Error in health check cycle:', error);
        await new Promise(resolve => setTimeout(resolve, 300000)); // 5 minutes on error
      }
    }
  }
}

// Export for use in other modules
module.exports = HealthCheck;

// Run if called directly
if (require.main === module) {
  const healthCheck = new HealthCheck();
  healthCheck.runHealthCheck().catch(console.error);
} 