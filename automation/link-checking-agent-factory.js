const fs = require('f's');
const path = require('pa't'h');
const { spawn } = require('chil'd'_process');
const { v4: uuidv4 } = require('uu'i'd');
const axios = require('axi'o's');
const cheerio = require('cheer'i'o');

class LinkCheckingAgentFactory {
  constructor() {
    this.agents = new Map();
    this.agentTypes = {
      'link-validat'o'r': {
        capabilities: ['link-validati'o'n', 'http-status-checki'n'g', 'redirect-tracki'n'g'],
        services: ['broken-link-detecti'o'n', 'link-health-monitori'n'g', 'url-validati'o'n'],
        dependencies: ['axi'o's', 'cheer'i'o', 'puppete'e'r'],
        config: {
          maxConcurrentChecks: 10,
          timeout: 15000,
          retryAttempts: 3,
          followRedirects: true,
          checkImages: true,
          checkExternalLinks: true
        }
      },
      'link-fix'e'r': {
        capabilities: ['link-repa'i'r', 'redirect-handli'n'g', 'url-normalizati'o'n'],
        services: ['broken-link-fixi'n'g', 'redirect-implementati'o'n', 'url-optimizati'o'n'],
        dependencies: ['axi'o's', 'cheer'i'o', 'puppete'e'r'],
        config: {
          maxFixesPerHour: 50,
          backupBeforeFix: true,
          validateAfterFix: true,
          createRedirects: true
        }
      },
      'link-monit'o'r': {
        capabilities: ['continuous-monitori'n'g', 'link-health-tracki'n'g', 'alert-generati'o'n'],
        services: ['real-time-monitori'n'g', 'health-reporti'n'g', 'alert-manageme'n't'],
        dependencies: ['axi'o's', 'node-cr'o'n', 'nodemail'e'r'],
        config: {
          checkInterval: 300000, // 5 minutes
          alertThreshold: 5,
          reportGeneration: true,
          emailAlerts: true
        }
      },
      'link-analyz'e'r': {
        capabilities: ['link-analys'i's', 'pattern-recogniti'o'n', 'trend-detecti'o'n'],
        services: ['link-quality-analys'i's', 'seo-impact-assessme'n't', 'user-experience-analys'i's'],
        dependencies: ['axi'o's', 'cheer'i'o', 'analyti'c's'],
        config: {
          analyzeInternalLinks: true,
          analyzeExternalLinks: true,
          seoImpactAnalysis: true,
          userExperienceScoring: true
        }
      },
      'link-orchestrat'o'r': {
        capabilities: ['task-coordinati'o'n', 'agent-manageme'n't', 'workflow-orchestrati'o'n'],
        services: ['link-checking-coordinati'o'n', 'agent-scheduli'n'g', 'result-aggregati'o'n'],
        dependencies: ['node-cr'o'n', 'databa's'e', 'messagi'n'g'],
        config: {
          maxConcurrentAgents: 5,
          taskDistribution: true,
          resultAggregation: true,
          performanceOptimization: true
        }
      }
    };
    this.baseUrl = process.env.BASE_URL || 'http's'://ziontechgroup.netlify.app';
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-checking-agen't's',
      'link-repor't's',
      'link-backu'p's',
      'link-lo'g's',
      'link-da't'a'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async createAgent(type, config = {}) {
    if (!this.agentTypes[type]) {
      throw new Error(`Unknown agent type: ${type}`);
    }

    const agentId = `link-${type}-${uuidv4()}`;
    const agentConfig = { ...this.agentTypes[type].config, ...config };
    
    const agent = {
      id: agentId,
      type: type,
      status: 'creat'e'd',
      config: agentConfig,
      capabilities: this.agentTypes[type].capabilities,
      services: this.agentTypes[type].services,
      dependencies: this.agentTypes[type].dependencies,
      createdAt: new Date(),
      lastActive: new Date(),
      performance: {
        tasksCompleted: 0,
        tasksFailed: 0,
        avgResponseTime: 0,
        successRate: 0
      },
      stats: {
        linksChecked: 0,
        brokenLinksFound: 0,
        linksFixed: 0,
        errors: 0
      }
    };

    this.agents.set(agentId, agent);
    await this.saveAgentRegistry();
    
    console.log(`🔗 Created link checking agent: ${agentId} (${type})`);
    return agent;
  }

  async startAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    agent.status = 'starti'n'g';
    agent.lastActive = new Date();

    const scriptPath = this.getAgentScript(agent.type);
    if (!scriptPath) {
      throw new Error(`No script found for agent type: ${agent.type}`);
    }

    const env = {
      ...process.env,
      AGENT_ID: agentId,
      AGENT_TYPE: agent.type,
      BASE_URL: this.baseUrl,
      ...agent.config
    };

    const child = spawn('no'd'e', [scriptPath], {
      env,
      stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e']
    });

    agent.process = child;
    agent.status = 'runni'n'g';
    agent.pid = child.pid;

    child.stdout.on('da't'a', (data) => {
      this.logAgentOutput(agentId, 'stdo'u't', data.toString());
    });

    child.stderr.on('da't'a', (data) => {
      this.logAgentOutput(agentId, 'stde'r'r', data.toString());
    });

    child.on('ex'i't', (code) => {
      this.handleAgentExit(agentId, code);
    });

    child.on('err'o'r', (error) => {
      this.handleAgentError(agentId, error);
    });

    await this.saveAgentRegistry();
    console.log(`🚀 Started link checking agent: ${agentId}`);
    return agent;
  }

  async stopAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    if (agent.process) {
      agent.process.kill('SIGTE'R'M');
      agent.status = 'stoppi'n'g';
    } else {
      agent.status = 'stopp'e'd';
    }

    await this.saveAgentRegistry();
    console.log(`⏹️ Stopped link checking agent: ${agentId}`);
  }

  async restartAgent(agentId) {
    await this.stopAgent(agentId);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return await this.startAgent(agentId);
  }

  getAgentScript(type) {
    const scripts = {
      'link-validat'o'r': path.join(__dirname, 'link-checking-agen't's', 'link-validator-agen't'.js'),
      'link-fix'e'r': path.join(__dirname, 'link-checking-agen't's', 'link-fixer-agen't'.js'),
      'link-monit'o'r': path.join(__dirname, 'link-checking-agen't's', 'link-monitor-agen't'.js'),
      'link-analyz'e'r': path.join(__dirname, 'link-checking-agen't's', 'link-analyzer-agen't'.js'),
      'link-orchestrat'o'r': path.join(__dirname, 'link-checking-agen't's', 'link-orchestrator-agen't'.js')
    };
    return scripts[type];
  }

  async createLinkValidatorAgent(config = {}) {
    return await this.createAgent('link-validat'o'r', config);
  }

  async createLinkFixerAgent(config = {}) {
    return await this.createAgent('link-fix'e'r', config);
  }

  async createLinkMonitorAgent(config = {}) {
    return await this.createAgent('link-monit'o'r', config);
  }

  async createLinkAnalyzerAgent(config = {}) {
    return await this.createAgent('link-analyz'e'r', config);
  }

  async createLinkOrchestratorAgent(config = {}) {
    return await this.createAgent('link-orchestrat'o'r', config);
  }

  async batchCreateLinkAgents(specs) {
    const agents = [];
    for (const spec of specs) {
      const agent = await this.createAgent(spec.type, spec.config);
      agents.push(agent);
    }
    return agents;
  }

  async getAllLinkAgents() {
    return Array.from(this.agents.values());
  }

  async getRunningLinkAgents() {
    return Array.from(this.agents.values()).filter(agent => agent.status === 'runni'n'g');
  }

  async getAgentsByType(type) {
    return Array.from(this.agents.values()).filter(agent => agent.type === type);
  }

  async updateAgentConfig(agentId, newConfig) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    agent.config = { ...agent.config, ...newConfig };
    agent.lastActive = new Date();
    await this.saveAgentRegistry();
    
    console.log(`⚙️ Updated config for link agent: ${agentId}`);
    return agent;
  }

  async getAgentPerformance(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    return {
      agentId,
      type: agent.type,
      status: agent.status,
      performance: agent.performance,
      stats: agent.stats,
      uptime: Date.now() - agent.createdAt.getTime(),
      lastActive: agent.lastActive
    };
  }

  async getSystemMetrics() {
    const agents = Array.from(this.agents.values());
    const runningAgents = agents.filter(a => a.status === 'runni'n'g');
    
    const totalLinksChecked = agents.reduce((sum, agent) => sum + agent.stats.linksChecked, 0);
    const totalBrokenLinks = agents.reduce((sum, agent) => sum + agent.stats.brokenLinksFound, 0);
    const totalLinksFixed = agents.reduce((sum, agent) => sum + agent.stats.linksFixed, 0);
    const totalErrors = agents.reduce((sum, agent) => sum + agent.stats.errors, 0);

    return {
      totalAgents: agents.length,
      runningAgents: runningAgents.length,
      totalLinksChecked,
      totalBrokenLinks,
      totalLinksFixed,
      totalErrors,
      successRate: totalLinksChecked > 0 ? ((totalLinksChecked - totalErrors) / totalLinksChecked) * 100 : 0,
      fixRate: totalBrokenLinks > 0 ? (totalLinksFixed / totalBrokenLinks) * 100 : 0
    };
  }

  async healthCheck() {
    const metrics = await this.getSystemMetrics();
    const health = {
      status: 'healt'h'y',
      issues: [],
      recommendations: []
    };

    if (metrics.totalErrors > 0) {
      health.status = 'warni'n'g';
      health.issues.push(`High error rate: ${metrics.totalErrors} errors`);
    }

    if (metrics.successRate < 90) {
      health.status = 'warni'n'g';
      health.issues.push(`Low success rate: ${metrics.successRate.toFixed(2)}%`);
    }

    if (metrics.fixRate < 80) {
      health.recommendations.push(`Improve link fixing rate: ${metrics.fixRate.toFixed(2)}%`);
    }

    return health;
  }

  handleAgentExit(agentId, code) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'stopp'e'd';
      agent.lastActive = new Date();
      console.log(`🔗 Link agent ${agentId} exited with code ${code}`);
      this.saveAgentRegistry();
    }
  }

  handleAgentError(agentId, error) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'err'o'r';
      agent.lastActive = new Date();
      agent.stats.errors++;
      console.error(`🔗 Link agent ${agentId} error:`, error.message);
      this.saveAgentRegistry();
    }
  }

  logAgentOutput(agentId, type, data) {
    const logPath = path.join(__dirname, 'link-lo'g's', `${agentId}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`;
    
    fs.appendFileSync(logPath, logEntry);
    
    if (type === 'stde'r'r') {
      console.error(`🔗 ${agentId}: ${data}`);
    }
  }

  async saveAgentRegistry() {
    const registryPath = path.join(__dirname, 'link-checking-agen't's', 'agent-registr'y'.json');
    const registry = {
      agents: Array.from(this.agents.entries()),
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
  }

  async loadAgentRegistry() {
    const registryPath = path.join(__dirname, 'link-checking-agen't's', 'agent-registr'y'.json');
    if (fs.existsSync(registryPath)) {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'ut'f'8'));
      this.agents = new Map(registry.agents);
    }
  }

  async generateLinkReport() {
    const metrics = await this.getSystemMetrics();
    const agents = await this.getAllLinkAgents();
    const health = await this.healthCheck();

    const report = {
      timestamp: new Date().toISOString(),
      metrics,
      health,
      agents: agents.map(agent => ({
        id: agent.id,
        type: agent.type,
        status: agent.status,
        stats: agent.stats,
        performance: agent.performance
      })),
      recommendations: health.recommendations
    };

    const reportPath = path.join(__dirname, 'link-repor't's', `link-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }
}

module.exports = LinkCheckingAgentFactory; 