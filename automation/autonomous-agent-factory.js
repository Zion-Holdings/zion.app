const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class AutonomousAgentFactory {
  constructor() {
    this.agents = new Map();
    this.agentTypes = {
      'deep-search': {
        capabilities: ['web-scraping', 'data-analysis', 'pattern-recognition'],
        services: ['market-research', 'competitive-analysis', 'trend-detection'],
        dependencies: ['puppeteer', 'cheerio', 'axios'],
        config: {
          maxConcurrentSearches: 5,
          searchDepth: 3,
          timeout: 30000,
          retryAttempts: 3
        }
      },
      'content-generation': {
        capabilities: ['ai-writing', 'seo-optimization', 'content-planning'],
        services: ['blog-posts', 'product-descriptions', 'social-media-content'],
        dependencies: ['openai', 'markdown'],
        config: {
          maxContentLength: 2000,
          seoOptimization: true,
          plagiarismCheck: true
        }
      },
      'marketing-automation': {
        capabilities: ['campaign-management', 'email-automation', 'lead-scoring'],
        services: ['email-campaigns', 'social-media-management', 'lead-generation'],
        dependencies: ['nodemailer', 'mailchimp-api'],
        config: {
          maxEmailsPerHour: 100,
          autoFollowUp: true,
          leadScoring: true
        }
      },
      'sales-intelligence': {
        capabilities: ['lead-qualification', 'crm-integration', 'sales-analytics'],
        services: ['lead-scoring', 'pipeline-management', 'sales-reporting'],
        dependencies: ['hubspot-api', 'salesforce-api'],
        config: {
          leadScoringThreshold: 0.7,
          autoQualification: true,
          crmSync: true
        }
      },
      'analytics-agent': {
        capabilities: ['data-collection', 'performance-tracking', 'kpi-monitoring'],
        services: ['performance-analytics', 'trend-analysis', 'reporting'],
        dependencies: ['google-analytics', 'mixpanel'],
        config: {
          dataRetentionDays: 90,
          realTimeTracking: true,
          automatedReporting: true
        }
      },
      'web-research': {
        capabilities: ['web-scraping', 'data-collection', 'market-research'],
        services: ['competitive-analysis', 'trend-identification', 'data-mining'],
        dependencies: ['puppeteer', 'cheerio', 'axios'],
        config: {
          maxConcurrentScrapes: 3,
          respectRobotsTxt: true,
          rateLimiting: true
        }
      },
      'social-media-manager': {
        capabilities: ['content-scheduling', 'engagement-monitoring', 'audience-analysis'],
        services: ['post-scheduling', 'hashtag-optimization', 'engagement-tracking'],
        dependencies: ['twitter-api', 'facebook-api', 'instagram-api'],
        config: {
          maxPostsPerDay: 10,
          autoEngagement: true,
          hashtagOptimization: true
        }
      },
      'seo-optimizer': {
        capabilities: ['keyword-research', 'on-page-optimization', 'technical-seo'],
        services: ['keyword-analysis', 'seo-audits', 'ranking-tracking'],
        dependencies: ['google-search-console', 'semrush-api'],
        config: {
          keywordTrackingLimit: 100,
          autoOptimization: true,
          technicalAudits: true
        }
      },
      'customer-support': {
        capabilities: ['ticket-management', 'auto-responses', 'knowledge-base'],
        services: ['ticket-handling', 'faq-management', 'satisfaction-tracking'],
        dependencies: ['zendesk-api', 'intercom-api'],
        config: {
          autoResponseThreshold: 0.8,
          escalationRules: true,
          satisfactionTracking: true
        }
      },
      'data-processor': {
        capabilities: ['data-cleaning', 'etl-processes', 'report-generation'],
        services: ['data-validation', 'quality-assurance', 'automated-reports'],
        dependencies: ['pandas', 'numpy', 'csv-parser'],
        config: {
          dataValidationRules: true,
          autoBackup: true,
          qualityThreshold: 0.95
        }
      },
      'quality-assurance': {
        capabilities: ['content-review', 'error-detection', 'quality-scoring'],
        services: ['content-audits', 'error-prevention', 'improvement-suggestions'],
        dependencies: ['spell-check', 'grammar-check', 'plagiarism-detector'],
        config: {
          qualityThreshold: 0.9,
          autoCorrection: true,
          reviewWorkflow: true
        }
      },
      'orchestrator': {
        capabilities: ['task-distribution', 'workload-balancing', 'performance-monitoring'],
        services: ['agent-coordination', 'resource-management', 'system-optimization'],
        dependencies: ['redis', 'message-queue'],
        config: {
          maxConcurrentTasks: 20,
          loadBalancing: true,
          autoScaling: true
        }
      },
      'monitor': {
        capabilities: ['system-monitoring', 'health-checks', 'alert-management'],
        services: ['performance-tracking', 'error-detection', 'system-recovery'],
        dependencies: ['prometheus', 'grafana'],
        config: {
          healthCheckInterval: 30000,
          alertThresholds: true,
          autoRecovery: true
        }
      }
    };
    this.loadAgentRegistry();
  }

  async createAgent(type, config = {}) {
    if (!this.agentTypes[type]) {
      throw new Error(`Unknown agent type: ${type}`);
    }

    const agentId = uuidv4();
    const agentType = this.agentTypes[type];
    
    const agent = {
      id: agentId,
      type: type,
      name: config.name || `${type}-agent-${agentId.slice(0, 8)}`,
      status: 'created',
      capabilities: [...agentType.capabilities, ...(config.capabilities || [])],
      services: [...agentType.services, ...(config.services || [])],
      dependencies: agentType.dependencies,
      config: { ...agentType.config, ...config.config },
      createdAt: new Date(),
      lastActive: new Date(),
      performance: {
        tasksCompleted: 0,
        tasksFailed: 0,
        averageResponseTime: 0,
        uptime: 0
      },
      logs: [],
      health: {
        status: 'healthy',
        lastCheck: new Date(),
        errors: []
      }
    };

    this.agents.set(agentId, agent);
    await this.saveAgentRegistry();
    
    console.log(`Created agent: ${agent.name} (${agentId})`);
    return agentId;
  }

  async startAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    try {
      agent.status = 'starting';
      agent.lastActive = new Date();
      
      // Create agent process
      const agentScript = this.getAgentScript(agent.type);
      const agentProcess = spawn('node', [agentScript], {
        stdio: ['pipe', 'pipe', 'pipe'],
        env: {
          ...process.env,
          AGENT_ID: agentId,
          AGENT_TYPE: agent.type,
          AGENT_CONFIG: JSON.stringify(agent.config)
        }
      });

      agent.process = agentProcess;
      agent.status = 'running';
      agent.pid = agentProcess.pid;

      // Handle process events
      agentProcess.on('exit', (code) => {
        this.handleAgentExit(agentId, code);
      });

      agentProcess.on('error', (error) => {
        this.handleAgentError(agentId, error);
      });

      // Log agent output
      agentProcess.stdout.on('data', (data) => {
        this.logAgentOutput(agentId, 'stdout', data.toString());
      });

      agentProcess.stderr.on('data', (data) => {
        this.logAgentOutput(agentId, 'stderr', data.toString());
      });

      await this.saveAgentRegistry();
      console.log(`Started agent: ${agent.name} (PID: ${agentProcess.pid})`);
      
      return true;
    } catch (error) {
      agent.status = 'error';
      agent.health.errors.push({
        timestamp: new Date(),
        error: error.message
      });
      await this.saveAgentRegistry();
      throw error;
    }
  }

  async stopAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    if (agent.process) {
      agent.process.kill('SIGTERM');
      agent.status = 'stopping';
      
      // Wait for graceful shutdown
      setTimeout(() => {
        if (agent.process && !agent.process.killed) {
          agent.process.kill('SIGKILL');
        }
      }, 5000);
    }

    agent.status = 'stopped';
    agent.lastActive = new Date();
    await this.saveAgentRegistry();
    
    console.log(`Stopped agent: ${agent.name}`);
    return true;
  }

  async restartAgent(agentId) {
    await this.stopAgent(agentId);
    await new Promise(resolve => setTimeout(resolve, 2000));
    return await this.startAgent(agentId);
  }

  async deleteAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    if (agent.status === 'running') {
      await this.stopAgent(agentId);
    }

    this.agents.delete(agentId);
    await this.saveAgentRegistry();
    
    console.log(`Deleted agent: ${agent.name}`);
    return true;
  }

  getAgent(agentId) {
    return this.agents.get(agentId);
  }

  getAllAgents() {
    return Array.from(this.agents.values());
  }

  getAgentsByType(type) {
    return Array.from(this.agents.values()).filter(agent => agent.type === type);
  }

  getRunningAgents() {
    return Array.from(this.agents.values()).filter(agent => agent.status === 'running');
  }

  async updateAgentConfig(agentId, newConfig) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    agent.config = { ...agent.config, ...newConfig };
    await this.saveAgentRegistry();
    
    console.log(`Updated config for agent: ${agent.name}`);
    return true;
  }

  async getAgentPerformance(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    return {
      id: agentId,
      name: agent.name,
      type: agent.type,
      status: agent.status,
      performance: agent.performance,
      health: agent.health,
      uptime: agent.status === 'running' ? Date.now() - agent.lastActive.getTime() : 0
    };
  }

  async getSystemMetrics() {
    const agents = this.getAllAgents();
    const runningAgents = this.getRunningAgents();
    
    const totalTasks = agents.reduce((sum, agent) => sum + agent.performance.tasksCompleted, 0);
    const failedTasks = agents.reduce((sum, agent) => sum + agent.performance.tasksFailed, 0);
    const avgResponseTime = agents.length > 0 
      ? agents.reduce((sum, agent) => sum + agent.performance.averageResponseTime, 0) / agents.length 
      : 0;

    return {
      totalAgents: agents.length,
      runningAgents: runningAgents.length,
      systemHealth: this.calculateSystemHealth(),
      totalTasksCompleted: totalTasks,
      totalTasksFailed: failedTasks,
      averageResponseTime: avgResponseTime,
      efficiency: runningAgents.length / Math.max(agents.length, 1),
      errorRate: totalTasks > 0 ? (failedTasks / totalTasks) * 100 : 0
    };
  }

  calculateSystemHealth() {
    const agents = this.getAllAgents();
    const errorCount = agents.filter(agent => agent.health.status === 'error').length;
    const warningCount = agents.filter(agent => agent.health.status === 'warning').length;
    
    if (errorCount > agents.length * 0.2) return 'critical';
    if (errorCount > 0 || warningCount > agents.length * 0.3) return 'warning';
    return 'good';
  }

  getAgentScript(type) {
    const scriptMap = {
      'deep-search': 'agents/deep-search-agent.js',
      'content-generation': 'agents/content-generation-agent.js',
      'marketing-automation': 'agents/marketing-automation-agent.js',
      'sales-intelligence': 'agents/sales-intelligence-agent.js',
      'analytics-agent': 'agents/analytics-agent.js',
      'web-research': 'agents/web-research-agent.js',
      'social-media-manager': 'agents/social-media-manager-agent.js',
      'seo-optimizer': 'agents/seo-optimizer-agent.js',
      'customer-support': 'agents/customer-support-agent.js',
      'data-processor': 'agents/data-processor-agent.js',
      'quality-assurance': 'agents/quality-assurance-agent.js',
      'orchestrator': 'agents/orchestrator-agent.js',
      'monitor': 'agents/monitor-agent.js'
    };

    return path.join(__dirname, scriptMap[type] || 'agents/generic-agent.js');
  }

  handleAgentExit(agentId, code) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'stopped';
      agent.lastActive = new Date();
      agent.health.status = code === 0 ? 'healthy' : 'error';
      agent.health.errors.push({
        timestamp: new Date(),
        error: `Process exited with code ${code}`
      });
      this.saveAgentRegistry();
    }
  }

  handleAgentError(agentId, error) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'error';
      agent.health.status = 'error';
      agent.health.errors.push({
        timestamp: new Date(),
        error: error.message
      });
      this.saveAgentRegistry();
    }
  }

  logAgentOutput(agentId, type, data) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.logs.push({
        timestamp: new Date(),
        type: type,
        message: data.trim()
      });

      // Keep only last 100 logs
      if (agent.logs.length > 100) {
        agent.logs = agent.logs.slice(-100);
      }
    }
  }

  async loadAgentRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'agent-registry.json');
      if (fs.existsSync(registryPath)) {
        const data = fs.readFileSync(registryPath, 'utf8');
        const registry = JSON.parse(data);
        this.agents = new Map(registry.map(agent => [agent.id, agent]));
      }
    } catch (error) {
      console.error('Error loading agent registry:', error);
    }
  }

  async saveAgentRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data');
      if (!fs.existsSync(registryPath)) {
        fs.mkdirSync(registryPath, { recursive: true });
      }

      const registry = Array.from(this.agents.values());
      fs.writeFileSync(
        path.join(registryPath, 'agent-registry.json'),
        JSON.stringify(registry, null, 2)
      );
    } catch (error) {
      console.error('Error saving agent registry:', error);
    }
  }

  async createAgentTemplate(type, templateConfig) {
    const template = {
      type: type,
      config: templateConfig,
      createdAt: new Date(),
      version: '1.0.0'
    };

    const templatesPath = path.join(__dirname, 'templates');
    if (!fs.existsSync(templatesPath)) {
      fs.mkdirSync(templatesPath, { recursive: true });
    }

    fs.writeFileSync(
      path.join(templatesPath, `${type}-template.json`),
      JSON.stringify(template, null, 2)
    );

    return template;
  }

  async createAgentFromTemplate(templateName, config = {}) {
    const templatePath = path.join(__dirname, 'templates', `${templateName}-template.json`);
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template not found: ${templateName}`);
    }

    const template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
    const mergedConfig = { ...template.config, ...config };
    
    return await this.createAgent(template.type, mergedConfig);
  }

  async batchCreateAgents(agentSpecs) {
    const results = [];
    for (const spec of agentSpecs) {
      try {
        const agentId = await this.createAgent(spec.type, spec.config);
        if (spec.autoStart) {
          await this.startAgent(agentId);
        }
        results.push({ success: true, agentId, spec });
      } catch (error) {
        results.push({ success: false, error: error.message, spec });
      }
    }
    return results;
  }

  async healthCheck() {
    const results = [];
    for (const [agentId, agent] of this.agents) {
      try {
        const health = await this.checkAgentHealth(agentId);
        results.push({ agentId, health });
      } catch (error) {
        results.push({ agentId, health: { status: 'error', error: error.message } });
      }
    }
    return results;
  }

  async checkAgentHealth(agentId) {
    const agent = this.agents.get(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    const health = {
      status: 'unknown',
      lastCheck: new Date(),
      uptime: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      errors: []
    };

    if (agent.status === 'running' && agent.process) {
      try {
        // Check if process is still alive
        const isAlive = !agent.process.killed;
        health.status = isAlive ? 'healthy' : 'dead';
        health.uptime = Date.now() - agent.lastActive.getTime();
        
        // Update agent health
        agent.health = health;
        agent.lastActive = new Date();
      } catch (error) {
        health.status = 'error';
        health.errors.push(error.message);
      }
    } else {
      health.status = agent.status;
    }

    return health;
  }
}

module.exports = AutonomousAgentFactory; 