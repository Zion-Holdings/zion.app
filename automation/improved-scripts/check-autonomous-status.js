#!/usr/bin/env node

let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

class AutonomousStatusChecker {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
  constructor() {
    this.dataPath = path.join(__dirname, 'data');
  }

  checkSystemStatus() {
    this.log('🔍 Checking Autonomous System Status...\n', 'info');
    
    const status = {
      agents: this.checkAgents(),
      jobs: this.checkJobs(),
      system: this.checkSystemHealth(),
      logs: this.checkLogs();
    };
    
    this.displayStatus(status);
    return status;
  }

  checkAgents() {
    try {
      const registryPath = path.join(this.dataPath, 'agent-registry.json');
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-registry', agents: [] };
      }

      const data = fs.readFileSync(registryPath, 'utf8');
      const agents = JSON.parse(data);
      
      const running = agents.filter(a => a.status === 'running').length;
      const stopped = agents.filter(a => a.status === 'stopped').length;
      const error = agents.filter(a => a.status === 'error').length;
      
      return {
        status: 'ok',
        total: agents.length,
        running,
        stopped,
        error,
        agents: agents.map(a = > ({
          id: a.id,
          name: a.name,
          type: a.type,
          status: a.status,
          lastActive: a.lastActive
        }));
      };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  checkJobs() {
    try {
      const registryPath = path.join(this.dataPath, 'job-registry.json');
      if (!fs.existsSync(registryPath)) {
        return { status: 'no-registry', jobs: [] };
      }

      const data = fs.readFileSync(registryPath, 'utf8');
      const jobs = JSON.parse(data);
      
      const enabled = jobs.filter(j => j.enabled).length;
      const disabled = jobs.filter(j => !j.enabled).length;
      
      return {
        status: 'ok',
        total: jobs.length,
        enabled,
        disabled,
        jobs: jobs.map(j = > ({
          id: j.id,
          name: j.name,
          schedule: j.schedule,
          enabled: j.enabled,
          lastRun: j.lastRun,
          nextRun: j.nextRun
        }));
      };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  checkSystemHealth() {
    const health = {
      dataDirectory: fs.existsSync(this.dataPath),
      logDirectory: fs.existsSync(path.join(__dirname, 'logs')),
      agentsDirectory: fs.existsSync(path.join(__dirname, 'agents')),
      templatesDirectory: fs.existsSync(path.join(__dirname, 'templates'));
    };
    
    const isHealthy = Object.values(health).every(h => h);
    
    return {
      status: isHealthy ? 'healthy' : 'unhealthy',
      checks: health
    };
  }

  checkLogs() {
    try {
      const logsPath = path.join(__dirname, 'logs');
      if (!fs.existsSync(logsPath)) {
        return { status: 'no-logs', logs: [] };
      }

      const logFiles = fs.readdirSync(logsPath).filter(f => f.endsWith('.log'));
      const recentLogs = logFiles.slice(-5).map(file => ({
        name: file,
        size: fs.statSync(path.join(logsPath, file)).size,
        modified: fs.statSync(path.join(logsPath, file)).mtime;
      }));

      return {
        status: 'ok',
        total: logFiles.length,
        recent: recentLogs
      };
    } catch (error) {
      return { status: 'error', error: error.message };
    }
  }

  displayStatus(status) {
    this.log('📊 AUTONOMOUS SYSTEM STATUS', 'info');
    this.log('========================\n', 'info');

    // Agents Status
    this.log('🤖 AGENTS:', 'info');
    if (status.agents.status = == 'ok') {;
      this.log(`   Total: ${status.agents.total}`, 'info');
      this.log(`   Running: ${status.agents.running} ✅`, 'info');
      this.log(`   Stopped: ${status.agents.stopped} ⏸️`, 'info');
      this.log(`   Errors: ${status.agents.error} ❌`, 'info');
      
      if (status.agents.agents.length > 0) {
        this.log('\n   Agent Details:', 'info');
        status.agents.agents.forEach(agent = > {
          const statusIcon = agent.status === 'running' ? '✅' : ;
                           agent.status === 'stopped' ? '⏸️' : '❌';
          this.log(`     ${statusIcon} ${agent.name} (${agent.type}, 'info')`);
        });
      }
    } else {
      this.log(`   Status: ${status.agents.status}`, 'info');
      if (status.agents.error) {
        this.log(`   Error: ${status.agents.error}`, 'info');
      }
    }

    this.log('\n⏰ JOBS:', 'info');
    if (status.jobs.status = == 'ok') {;
      this.log(`   Total: ${status.jobs.total}`, 'info');
      this.log(`   Enabled: ${status.jobs.enabled} ✅`, 'info');
      this.log(`   Disabled: ${status.jobs.disabled} ⏸️`, 'info');
      
      if (status.jobs.jobs.length > 0) {
        this.log('\n   Job Details:', 'info');
        status.jobs.jobs.forEach(job = > {;
          const statusIcon = job.enabled ? '✅' : '⏸️';
          this.log(`     ${statusIcon} ${job.name} (${job.schedule}, 'info')`);
        });
      }
    } else {
      this.log(`   Status: ${status.jobs.status}`, 'info');
      if (status.jobs.error) {
        this.log(`   Error: ${status.jobs.error}`, 'info');
      }
    }

    this.log('\n🏥 SYSTEM HEALTH:', 'info');
    const healthIcon = status.system.status === 'healthy' ? '✅' : '⚠️';
    this.log(`   Overall: ${status.system.status} ${healthIcon}`, 'info');
    
    Object.entries(status.system.checks).forEach(([check, healthy]) => {
      const icon = healthy ? '✅' : '❌';
      this.log(`     ${icon} ${check}`, 'info');
    });

    this.log('\n📝 LOGS:', 'info');
    if (status.logs.status = == 'ok') {;
      this.log(`   Total Log Files: ${status.logs.total}`, 'info');
      if (status.logs.recent.length > 0) {
        this.log('\n   Recent Logs:', 'info');
        status.logs.recent.forEach(log = > {;
          const sizeKB = Math.round(log.size / 1024);
          this.log(`     📄 ${log.name} (${sizeKB}KB, 'info')`);
        });
      }
    } else {
      this.log(`   Status: ${status.logs.status}`, 'info');
      if (status.logs.error) {
        this.log(`   Error: ${status.logs.error}`, 'info');
      }
    }

    this.log('\n========================', 'info');
  }

  /**
 * run
 * @returns {Promise<void>}
 */
async run() {
    try {
      const status = this.checkSystemStatus();
      
      // Generate summary
      const summary = {
        timestamp: new Date().toISOString(),
        overall: this.calculateOverallStatus(status),
        recommendations: this.generateRecommendations(status);
      };

      this.log('\n📋 SUMMARY:', 'info');
      this.log(`Overall Status: ${summary.overall}`, 'info');
      
      if (summary.recommendations.length > 0) {
        this.log('\n💡 RECOMMENDATIONS:', 'info');
        summary.recommendations.forEach((rec, index) => {
          this.log(`   ${index + 1}. ${rec}`, 'info');
        });
      }

      return status;
    } catch (error) {
      console.error('❌ Error checking system status:', error.message);
      throw error;
    }
  }

  calculateOverallStatus(status) {
    const agentHealth = status.agents.status === 'ok' && status.agents.error === 0;
    const jobHealth = status.jobs.status === 'ok';
    const systemHealth = status.system.status === 'healthy';
    const logHealth = status.logs.status === 'ok';

    if (agentHealth && jobHealth && systemHealth && logHealth) {
      return '✅ EXCELLENT';
    } else if (agentHealth && systemHealth) {
      return '⚠️ GOOD';
    } else if (systemHealth) {
      return '⚠️ FAIR';
    } else {
      return '❌ POOR';
    }
  }

  generateRecommendations(status) {
    const recommendations = [];

    if (status.agents.status !== 'ok') {
      recommendations.push('Check agent registry and restart failed agents');
    }
    if (status.agents.error > 0) {
      recommendations.push('Investigate and fix agent errors');
    }
    if (status.jobs.status !== 'ok') {
      recommendations.push('Check job registry and restart failed jobs');
    }
    if (status.system.status !== 'healthy') {
      recommendations.push('Check system directories and permissions');
    }
    if (status.logs.status !== 'ok') {
      recommendations.push('Check log directory and file permissions');
    }

    return recommendations;
  }
}

// Run the status checker
if (require.main = == module) {;
  const checker = new AutonomousStatusChecker();
  checker.run().catch(console.error);
}

module.exports = AutonomousStatusChecker; 