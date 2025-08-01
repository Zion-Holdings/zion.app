const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const cheerio = require('cheerio');

class LinkCheckingAgentFactory {
  constructor() {
    this.agents = new Map();
    this.agentTypes = {
      'link-validator': {
        capabilities: ['link-validation', 'http-status-checking', 'redirect-tracking'],
        services: ['broken-link-detection', 'link-health-monitoring', 'url-validation'],
        dependencies: ['axios', 'cheerio', 'puppeteer'],
        config: {
          maxConcurrentChecks: 10,
          timeout: 15000,
          retryAttempts: 3,
          followRedirects: true,
          checkImages: true,
          checkExternalLinks: true
        }
      },
      'link-fixer': {
        capabilities: ['link-repair', 'redirect-handling', 'url-normalization'],
        services: ['broken-link-fixing', 'redirect-implementation', 'url-optimization'],
        dependencies: ['axios', 'cheerio', 'puppeteer'],
        config: {
          maxFixesPerHour: 50,
          backupBeforeFix: true,
          validateAfterFix: true,
          createRedirects: true
        }
      },
      'link-monitor': {
        capabilities: ['continuous-monitoring', 'link-health-tracking', 'alert-generation'],
        services: ['real-time-monitoring', 'health-reporting', 'alert-management'],
        dependencies: ['axios', 'node-cron', 'nodemailer'],
        config: {
          checkInterval: 300000, // 5 minutes
          alertThreshold: 5,
          reportGeneration: true,
          emailAlerts: true
        }
      },
      'link-analyzer': {
        capabilities: ['link-analysis', 'pattern-recognition', 'trend-detection'],
        services: ['link-quality-analysis', 'seo-impact-assessment', 'user-experience-analysis'],
        dependencies: ['axios', 'cheerio', 'analytics'],
        config: {
          analyzeInternalLinks: true,
          analyzeExternalLinks: true,
          seoImpactAnalysis: true,
          userExperienceScoring: true
        }
      },
      'link-orchestrator': {
        capabilities: ['task-coordination', 'agent-management', 'workflow-orchestration'],
        services: ['link-checking-coordination', 'agent-scheduling', 'result-aggregation'],
        dependencies: ['node-cron', 'database', 'messaging'],
        config: {
          maxConcurrentAgents: 5,
          taskDistribution: true,
          resultAggregation: true,
          performanceOptimization: true
        }
      }
    };
    this.baseUrl = process.env.BASE_URL || 'https://ziontechgroup.netlify.app';
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-checking-agents',
      'link-reports',
      'link-backups',
      'link-logs',
      'link-data'
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
      status: 'created',
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

    agent.status = 'starting';
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

    const child = spawn('node', [scriptPath], {
      env,
      stdio: ['pipe', 'pipe', 'pipe']
    });

    agent.process = child;
    agent.status = 'running';
    agent.pid = child.pid;

    child.stdout.on('data', (data) => {
      this.logAgentOutput(agentId, 'stdout', data.toString());
    });

    child.stderr.on('data', (data) => {
      this.logAgentOutput(agentId, 'stderr', data.toString());
    });

    child.on('exit', (code) => {
      this.handleAgentExit(agentId, code);
    });

    child.on('error', (error) => {
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
      agent.process.kill('SIGTERM');
      agent.status = 'stopping';
    } else {
      agent.status = 'stopped';
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
      'link-validator': path.join(__dirname, 'link-checking-agents', 'link-validator-agent.js'),
      'link-fixer': path.join(__dirname, 'link-checking-agents', 'link-fixer-agent.js'),
      'link-monitor': path.join(__dirname, 'link-checking-agents', 'link-monitor-agent.js'),
      'link-analyzer': path.join(__dirname, 'link-checking-agents', 'link-analyzer-agent.js'),
      'link-orchestrator': path.join(__dirname, 'link-checking-agents', 'link-orchestrator-agent.js')
    };
    return scripts[type];
  }

  async createLinkValidatorAgent(config = {}) {
    return await this.createAgent('link-validator', config);
  }

  async createLinkFixerAgent(config = {}) {
    return await this.createAgent('link-fixer', config);
  }

  async createLinkMonitorAgent(config = {}) {
    return await this.createAgent('link-monitor', config);
  }

  async createLinkAnalyzerAgent(config = {}) {
    return await this.createAgent('link-analyzer', config);
  }

  async createLinkOrchestratorAgent(config = {}) {
    return await this.createAgent('link-orchestrator', config);
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
    return Array.from(this.agents.values()).filter(agent => agent.status === 'running');
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
    const runningAgents = agents.filter(a => a.status === 'running');
    
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
      status: 'healthy',
      issues: [],
      recommendations: []
    };

    if (metrics.totalErrors > 0) {
      health.status = 'warning';
      health.issues.push(`High error rate: ${metrics.totalErrors} errors`);
    }

    if (metrics.successRate < 90) {
      health.status = 'warning';
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
      agent.status = 'stopped';
      agent.lastActive = new Date();
      console.log(`🔗 Link agent ${agentId} exited with code ${code}`);
      this.saveAgentRegistry();
    }
  }

  handleAgentError(agentId, error) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'error';
      agent.lastActive = new Date();
      agent.stats.errors++;
      console.error(`🔗 Link agent ${agentId} error:`, error.message);
      this.saveAgentRegistry();
    }
  }

  logAgentOutput(agentId, type, data) {
    const logPath = path.join(__dirname, 'link-logs', `${agentId}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`;
    
    fs.appendFileSync(logPath, logEntry);
    
    if (type === 'stderr') {
      console.error(`🔗 ${agentId}: ${data}`);
    }
  }

  async saveAgentRegistry() {
    const registryPath = path.join(__dirname, 'link-checking-agents', 'agent-registry.json');
    const registry = {
      agents: Array.from(this.agents.entries()),
      lastUpdated: new Date().toISOString()
    };
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
  }

  async loadAgentRegistry() {
    const registryPath = path.join(__dirname, 'link-checking-agents', 'agent-registry.json');
    if (fs.existsSync(registryPath)) {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
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

    const reportPath = path.join(__dirname, 'link-reports', `link-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }
}

module.exports = LinkCheckingAgentFactory; 