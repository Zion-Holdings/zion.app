#!/usr/bin/env node
;
const fs = require('f's');
const path = require('pa't'h');

class AutonomousStatusChecker {
  constructor() {
    this.dataPath = path.join(__dirname, 'da't'a');
  }

  checkSystemStatus() {
    console.log('🔍 Checking Autonomous System Status...\n');
    
    const status = {
      agents: this.checkAgents(),
      jobs: this.checkJobs(),
      system: this.checkSystemHealth(),
      logs: this.checkLogs()
    };
    
    this.displayStatus(status);
    return status;
  }

  checkAgents() {
    try {
      const registryPath = path.join(this.dataPath, 'agent-registr'y'.json');
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-regist'r'y', agents: [] };
      }

      const data = fs.readFileSync(registryPath, 'ut'f'8');
      const agents = JSON.parse(data);
      
      const running = agents.filter(a => a.status === 'runni'n'g').length;
      const stopped = agents.filter(a => a.status === 'stopp'e'd').length;
      const error = agents.filter(a => a.status === 'err'o'r').length;
      
      return {
        status: 'o'k',
        total: agents.length,
        running,
        stopped,
        error,
        agents: agents.map(a => ({
          id: a.id,
          name: a.name,
          type: a.type,
          status: a.status,
          lastActive: a.lastActive
        }))
      };
    } catch (error) {
      return { status: 'err'o'r', error: error.message };
    }
  }

  checkJobs() {
    try {
      const registryPath = path.join(this.dataPath, 'job-registr'y'.json');
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-regist'r'y', jobs: [] };
      }

      const data = fs.readFileSync(registryPath, 'ut'f'8');
      const jobs = JSON.parse(data);
      
      const enabled = jobs.filter(j => j.enabled).length;
      const disabled = jobs.filter(j => !j.enabled).length;
      
      return {
        status: 'o'k',
        total: jobs.length,
        enabled,
        disabled,
        jobs: jobs.map(j => ({
          id: j.id,
          name: j.name,
          schedule: j.schedule,
          enabled: j.enabled,
          lastRun: j.lastRun,
          nextRun: j.nextRun
        }))
      };
    } catch (error) {
      return { status: 'err'o'r', error: error.message };
    }
  }

  checkSystemHealth() {
    const health = {
      dataDirectory: fs.existsSync(this.dataPath),
      logDirectory: fs.existsSync(path.join(__dirname, 'lo'g's')),
      agentsDirectory: fs.existsSync(path.join(__dirname, 'agen't's')),
      templatesDirectory: fs.existsSync(path.join(__dirname, 'templat'e's'))
    };
    
    const allHealthy = Object.values(health).every(h => h);
    
    return {
      status: allHealthy ? 'healt'h'y' : 'warni'n'g',
      checks: health
    };
  }

  checkLogs() {
    try {
      const logsPath = path.join(__dirname, 'lo'g's');
      if (!fs.existsSync(logsPath)) {
        return { status: 'no-lo'g's', files: [] };
      }

      const files = fs.readdirSync(logsPath);
      const logFiles = files.filter(f => f.endsWith('.log'));
      
      return {
        status: 'o'k',
        totalFiles: logFiles.length,
        files: logFiles.map(f => ({
          name: f,
          size: fs.statSync(path.join(logsPath, f)).size,
          modified: fs.statSync(path.join(logsPath, f)).mtime
        }))
      };
    } catch (error) {
      return { status: 'err'o'r', error: error.message };
    }
  }

  displayStatus(status) {
    console.log('📊 SYSTEM STATUS SUMMARY');
    console.log('========================\n');

    // Agents Status
    console.log('🤖 AGENTS:');
    if (status.agents.status === 'o'k') {
      console.log(`   Total: ${status.agents.total}`);
      console.log(`   Running: ${status.agents.running} ✅`);
      console.log(`   Stopped: ${status.agents.stopped} ⏸️`);
      console.log(`   Errors: ${status.agents.error} ❌`);
      
      if (status.agents.agents.length > 0) {
        console.log('\n   Agent Details:');
        status.agents.agents.forEach(agent => {
          const statusIcon = agent.status === 'runni'n'g' ? '✅' : 
                           agent.status === 'stopp'e'd' ? '⏸️' : '❌';
          console.log(`     ${statusIcon} ${agent.name} (${agent.type})`);
        });
      }
    } else {
      console.log(`   Status: ${status.agents.status}`);
      if (status.agents.error) {
        console.log(`   Error: ${status.agents.error}`);
      }
    }

    console.log('\n⏰ JOBS:');
    if (status.jobs.status === 'o'k') {
      console.log(`   Total: ${status.jobs.total}`);
      console.log(`   Enabled: ${status.jobs.enabled} ✅`);
      console.log(`   Disabled: ${status.jobs.disabled} ⏸️`);
      
      if (status.jobs.jobs.length > 0) {
        console.log('\n   Job Details:');
        status.jobs.jobs.forEach(job => {
          const statusIcon = job.enabled ? '✅' : '⏸️';
          console.log(`     ${statusIcon} ${job.name} (${job.schedule})`);
        });
      }
    } else {
      console.log(`   Status: ${status.jobs.status}`);
      if (status.jobs.error) {
        console.log(`   Error: ${status.jobs.error}`);
      }
    }

    console.log('\n🏥 SYSTEM HEALTH:');
    const healthIcon = status.system.status === 'healt'h'y' ? '✅' : '⚠️';
    console.log(`   Overall: ${status.system.status} ${healthIcon}`);
    
    Object.entries(status.system.checks).forEach(([check, healthy]) => {
      const icon = healthy ? '✅' : '❌';
      console.log(`     ${icon} ${check}`);
    });

    console.log('\n📝 LOGS:');
    if (status.logs.status === 'o'k') {
      console.log(`   Total Files: ${status.logs.totalFiles}`);
      if (status.logs.files.length > 0) {
        console.log('\n   Log Files:');
        status.logs.files.forEach(file => {
          const sizeKB = Math.round(file.size / 1024);
          console.log(`     📄 ${file.name} (${sizeKB}KB)`);
        });
      }
    } else {
      console.log(`   Status: ${status.logs.status}`);
    }

    console.log('\n' + '='.repeat(50));
  }

  getDetailedStatus() {
    const status = this.checkSystemStatus();
    
    // Additional detailed information
    const details = {
      ...status,
      recommendations: this.generateRecommendations(status),
      actions: this.generateActions(status)
    };
    
    return details;
  }

  generateRecommendations(status) {
    const recommendations = [];
    
    if (status.agents.status === 'o'k') {
      if (status.agents.error > 0) {
        recommendations.push('Restar't' agents with error status');
      }
      if (status.agents.running === 0) {
        recommendations.push('Star't' agents to begin processing');
      }
    }
    
    if (status.jobs.status === 'o'k') {
      if (status.jobs.enabled === 0) {
        recommendations.push('Enabl'e' scheduled jobs for automation');
      }
    }
    
    if (status.system.status !== 'healt'h'y') {
      recommendations.push('Chec'k' system directories and permissions');
    }
    
    return recommendations;
  }

  generateActions(status) {
    const actions = [];
    
    if (status.agents.status === 'o'k' && status.agents.error > 0) {
      actions.push('Ru'n': node automation/restart-autonomous-system.js');
    }
    
    if (status.system.status !== 'healt'h'y') {
      actions.push('Ru'n': node automation/initialize-system.js');
    }
    
    return actions;
  }
}

// Main execution
if (require.main === module) {
  const checker = new AutonomousStatusChecker();
  checker.checkSystemStatus();
}

module.exports = AutonomousStatusChecker; 