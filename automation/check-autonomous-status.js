#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class AutonomousStatusChecker {
  constructor() {
    this.statusFile = path.join(__dirname, 'status', 'autonomous-status.json');
    this.ensureStatusDirectory();
  }

  ensureStatusDirectory() {
    const statusDir = path.dirname(this.statusFile);
    if (!fs.existsSync(statusDir)) {
      fs.mkdirSync(statusDir, { recursive: true });
    }
  }

  async checkSystemStatus() {
    console.log('🔍 [Autonomous Status Checker] Checking system status...');
    console.log('=' * 60);

    try {
      // Check if status file exists
      if (fs.existsSync(this.statusFile)) {
        const statusData = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
        this.displayStatus(statusData);
      } else {
        console.log('❌ No status file found. System may not be running.');
        console.log('💡 Run "npm run autonomous" to start the system.');
      }

      // Check for running processes
      await this.checkRunningProcesses();

      // Check for recent logs
      await this.checkRecentLogs();

    } catch (error) {
      console.error('❌ Error checking system status:', error);
    }
  }

  displayStatus(statusData) {
    console.log('📊 System Status:');
    console.log(`   Overall Health: ${statusData.systemHealth || 'Unknown'}%`);
    console.log(`   Total Agents: ${statusData.totalAgents || 0}`);
    console.log(`   Active Agents: ${statusData.activeAgents || 0}`);
    console.log(`   Total Orchestrators: ${statusData.totalOrchestrators || 0}`);
    console.log(`   Active Orchestrators: ${statusData.activeOrchestrators || 0}`);
    console.log(`   System Uptime: ${statusData.systemUptime || 'Unknown'}`);
    console.log(`   Last Update: ${statusData.lastUpdate || 'Unknown'}`);
    console.log('');

    if (statusData.automations && statusData.automations.length > 0) {
      console.log('🤖 Active Automations:');
      statusData.automations.forEach(automation => {
        const statusIcon = automation.status === 'running' ? '🟢' : '🔴';
        console.log(`   ${statusIcon} ${automation.name} (${automation.status}) - Health: ${automation.health}%`);
      });
      console.log('');
    }

    if (statusData.cronJobs && statusData.cronJobs.length > 0) {
      console.log('⏰ Cron Jobs:');
      statusData.cronJobs.forEach(job => {
        const statusIcon = job.enabled ? '🟢' : '🔴';
        console.log(`   ${statusIcon} ${job.name} - ${job.status} (Next: ${job.nextRun})`);
      });
      console.log('');
    }

    if (statusData.researchFindings && statusData.researchFindings.length > 0) {
      console.log('🔬 Recent Research Findings:');
      statusData.researchFindings.slice(0, 3).forEach(finding => {
        console.log(`   📄 ${finding.title} (${finding.impact} impact)`);
      });
      console.log('');
    }
  }

  async checkRunningProcesses() {
    console.log('🔍 Checking for running processes...');
    
    try {
      const { exec } = require('child_process');
      
      // Check for Node.js processes running our automation scripts
      exec('ps aux | grep -E "(launch-enhanced-autonomous-system|enhanced-autonomous-system|enhanced-cron-system)" | grep -v grep', (error, stdout, stderr) => {
        if (stdout) {
          console.log('✅ Found running automation processes:');
          console.log(stdout);
        } else {
          console.log('❌ No running automation processes found.');
        }
      });
    } catch (error) {
      console.log('⚠️  Could not check running processes.');
    }
  }

  async checkRecentLogs() {
    console.log('📋 Checking recent logs...');
    
    try {
      const logDir = path.join(__dirname, 'logs');
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir)
          .filter(file => file.endsWith('.log'))
          .sort((a, b) => {
            const statA = fs.statSync(path.join(logDir, a));
            const statB = fs.statSync(path.join(logDir, b));
            return statB.mtime.getTime() - statA.mtime.getTime();
          });

        if (logFiles.length > 0) {
          console.log('📄 Recent log files:');
          logFiles.slice(0, 5).forEach(file => {
            const stat = fs.statSync(path.join(logDir, file));
            console.log(`   📄 ${file} (${stat.mtime.toLocaleString()})`);
          });
        } else {
          console.log('📄 No log files found.');
        }
      } else {
        console.log('📄 No logs directory found.');
      }
    } catch (error) {
      console.log('⚠️  Could not check recent logs.');
    }
  }

  async generateMockStatus() {
    console.log('🎭 Generating mock status for demonstration...');
    
    const mockStatus = {
      systemHealth: 94,
      totalAgents: 12,
      activeAgents: 10,
      totalOrchestrators: 3,
      activeOrchestrators: 3,
      systemUptime: '5d 2h 15m',
      lastUpdate: new Date().toISOString(),
      automations: [
        {
          name: 'Master Automation Controller',
          status: 'running',
          health: 95
        },
        {
          name: 'Autonomous Agent Factory',
          status: 'running',
          health: 92
        },
        {
          name: 'Content Generation Agent',
          status: 'running',
          health: 88
        },
        {
          name: 'AI Research Agent',
          status: 'running',
          health: 90
        },
        {
          name: 'Enhanced Autonomous System',
          status: 'running',
          health: 93
        }
      ],
      cronJobs: [
        {
          name: 'Autonomous Agent Creation',
          status: 'active',
          enabled: true,
          nextRun: '5 minutes'
        },
        {
          name: 'System Health Check',
          status: 'active',
          enabled: true,
          nextRun: '30 seconds'
        },
        {
          name: 'Research and Discovery',
          status: 'active',
          enabled: true,
          nextRun: '1 hour'
        }
      ],
      researchFindings: [
        {
          title: 'Multi-modal AI Agents',
          impact: 'high'
        },
        {
          title: 'Autonomous Agent Swarms',
          impact: 'medium'
        },
        {
          title: 'Self-Improving AI Systems',
          impact: 'high'
        }
      ]
    };

    fs.writeFileSync(this.statusFile, JSON.stringify(mockStatus, null, 2));
    console.log('✅ Mock status generated successfully!');
    
    return mockStatus;
  }
}

// Main execution
async function main() {
  const checker = new AutonomousStatusChecker();
  
  // Check if --mock flag is provided
  if (process.argv.includes('--mock')) {
    await checker.generateMockStatus();
  }
  
  await checker.checkSystemStatus();
}

// Run the checker if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = AutonomousStatusChecker; 