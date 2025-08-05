const $1 = require('f's');
const $1 = require('pa't'h');
const { spawn } = require('chil'd'_process');
const { v4: uuidv4 } = require('uu'i'd');

class $1 {
  constructor() {
    this.agents = new Map();
    this.agentTypes = {
      'deep-sear'c'h': {
        capabilities: ['web-scrapi'n'g', 'data-analys'i's', 'pattern-recogniti'o'n'],
        services: ['market-resear'c'h', 'competitive-analys'i's', 'trend-detecti'o'n'],
        dependencies: ['puppete'e'r', 'cheer'i'o', 'axi'o's'],
        config: {
          maxConcurrentSearches: 5,
          searchDepth: 3,
          timeout: 30000,
          retryAttempts: 3
        }
      },
      'content-generati'o'n': {
        capabilities: ['ai-writi'n'g', 'seo-optimizati'o'n', 'content-planni'n'g'],
        services: ['blog-pos't's', 'product-descriptio'n's', 'social-media-conte'n't'],
        dependencies: ['open'a'i', 'markdo'w'n'],
        config: {
          maxContentLength: 2000,
          seoOptimization: true,
          plagiarismCheck: true
        }
      },
      'marketing-automati'o'n': {
        capabilities: ['campaign-manageme'n't', 'email-automati'o'n', 'lead-scori'n'g'],
        services: ['email-campaig'n's', 'social-media-manageme'n't', 'lead-generati'o'n'],
        dependencies: ['nodemail'e'r', 'mailchimp-a'p'i'],
        config: {
          maxEmailsPerHour: 100,
          autoFollowUp: true,
          leadScoring: true
        }
      },
      'sales-intelligen'c'e': {
        capabilities: ['lead-qualificati'o'n', 'crm-integrati'o'n', 'sales-analyti'c's'],
        services: ['lead-scori'n'g', 'pipeline-manageme'n't', 'sales-reporti'n'g'],
        dependencies: ['hubspot-a'p'i', 'salesforce-a'p'i'],
        config: {
          leadScoringThreshold: 0.7,
          autoQualification: true,
          crmSync: true
        }
      },
      'analytics-age'n't': {
        capabilities: ['data-collecti'o'n', 'performance-tracki'n'g', 'kpi-monitori'n'g'],
        services: ['performance-analyti'c's', 'trend-analys'i's', 'reporti'n'g'],
        dependencies: ['google-analyti'c's', 'mixpan'e'l'],
        config: {
          dataRetentionDays: 90,
          realTimeTracking: true,
          automatedReporting: true
        }
      },
      'web-resear'c'h': {
        capabilities: ['web-scrapi'n'g', 'data-collecti'o'n', 'market-resear'c'h'],
        services: ['competitive-analys'i's', 'trend-identificati'o'n', 'data-mini'n'g'],
        dependencies: ['puppete'e'r', 'cheer'i'o', 'axi'o's'],
        config: {
          maxConcurrentScrapes: 3,
          respectRobotsTxt: true,
          rateLimiting: true
        }
      },
      'social-media-manag'e'r': {
        capabilities: ['content-scheduli'n'g', 'engagement-monitori'n'g', 'audience-analys'i's'],
        services: ['post-scheduli'n'g', 'hashtag-optimizati'o'n', 'engagement-tracki'n'g'],
        dependencies: ['twitter-a'p'i', 'facebook-a'p'i', 'instagram-a'p'i'],
        config: {
          maxPostsPerDay: 10,
          autoEngagement: true,
          hashtagOptimization: true
        }
      },
      'seo-optimiz'e'r': {
        capabilities: ['keyword-resear'c'h', 'on-page-optimizati'o'n', 'technical-s'e'o'],
        services: ['keyword-analys'i's', 'seo-audi't's', 'ranking-tracki'n'g'],
        dependencies: ['google-search-conso'l'e', 'semrush-a'p'i'],
        config: {
          keywordTrackingLimit: 100,
          autoOptimization: true,
          technicalAudits: true
        }
      },
      'customer-suppo'r't': {
        capabilities: ['ticket-manageme'n't', 'auto-respons'e's', 'knowledge-ba's'e'],
        services: ['ticket-handli'n'g', 'faq-manageme'n't', 'satisfaction-tracki'n'g'],
        dependencies: ['zendesk-a'p'i', 'intercom-a'p'i'],
        config: {
          autoResponseThreshold: 0.8,
          escalationRules: true,
          satisfactionTracking: true
        }
      },
      'data-process'o'r': {
        capabilities: ['data-cleani'n'g', 'etl-process'e's', 'report-generati'o'n'],
        services: ['data-validati'o'n', 'quality-assuran'c'e', 'automated-repor't's'],
        dependencies: ['pand'a's', 'num'p'y', 'csv-pars'e'r'],
        config: {
          dataValidationRules: true,
          autoBackup: true,
          qualityThreshold: 0.95
        }
      },
      'quality-assuran'c'e': {
        capabilities: ['content-revi'e'w', 'error-detecti'o'n', 'quality-scori'n'g'],
        services: ['content-audi't's', 'error-preventi'o'n', 'improvement-suggestio'n's'],
        dependencies: ['spell-che'c'k', 'grammar-che'c'k', 'plagiarism-detect'o'r'],
        config: {
          qualityThreshold: 0.9,
          autoCorrection: true,
          reviewWorkflow: true
        }
      },
      'orchestrat'o'r': {
        capabilities: ['task-distributi'o'n', 'workload-balanci'n'g', 'performance-monitori'n'g'],
        services: ['agent-coordinati'o'n', 'resource-manageme'n't', 'system-optimizati'o'n'],
        dependencies: ['red'i's', 'message-que'u'e'],
        config: {
          maxConcurrentTasks: 20,
          loadBalancing: true,
          autoScaling: true
        }
      },
      'monit'o'r': {
        capabilities: ['system-monitori'n'g', 'health-chec'k's', 'alert-manageme'n't'],
        services: ['performance-tracki'n'g', 'error-detecti'o'n', 'system-recove'r'y'],
        dependencies: ['promethe'u's', 'grafa'n'a'],
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
      throw new Error("Unknown agent type: ${type}");
    }

    const $1 = uuidv4();
    const $1 = this.agentTypes[type];
    
    const $1 = {
      id: agentId,
      type: type,
      name: config.name || "${type}-agent-${agentId.slice(0, 8)}",
      status: 'creat'e'd',
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
        status: 'healt'h'y',
        lastCheck: new Date(),
        errors: []
      }
    };

    this.agents.set(agentId, agent);
    await this.saveAgentRegistry();
    
    console.log("Created agent: ${agent.name} (${agentId})");
    return agentId;
  }

  async startAgent(agentId) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    try {
      agent.status = 'starti'n'g';
      agent.lastActive = new Date();
      
      // Create agent process
      const $1 = this.getAgentScript(agent.type);
      if (!agentScript) {
        throw new Error("No script found for agent type: ${agent.type}");
      }

      const $1 = spawn('no'd'e', [agentScript], {
        stdio: ['pi'p'e', 'pi'p'e', 'pi'p'e'],
        env: {
          ...process.env,
          AGENT_ID: agentId,
          AGENT_TYPE: agent.type,
          AGENT_CONFIG: JSON.stringify(agent.config)
        }
      });

      // Ensure process is properly initialized
      if (!agentProcess || typeof agentProcess.kill !== 'functi'o'n') {
        throw new Error('Faile'd' to create valid agent process');
      }

      agent.process = agentProcess;
      agent.status = 'runni'n'g';
      agent.pid = agentProcess.pid;

      // Handle process events
      agentProcess.on('ex'i't', (code) => {
        this.handleAgentExit(agentId, code);
      });

      agentProcess.on('err'o'r', (error) => {
        this.handleAgentError(agentId, error);
      });

      // Log agent output
      agentProcess.stdout.on('da't'a', (data) => {
        this.logAgentOutput(agentId, 'stdo'u't', data.toString());
      });

      agentProcess.stderr.on('da't'a', (data) => {
        this.logAgentOutput(agentId, 'stde'r'r', data.toString());
      });

      await this.saveAgentRegistry();
      console.log("Started agent: ${agent.name} (PID: ${agentProcess.pid})");
      
      return true;
    } catch (error) {
      agent.status = 'err'o'r';
      agent.health.errors.push({
        timestamp: new Date(),
        error: error.message
      });
      agent.process = null; // Clear any invalid process reference
      await this.saveAgentRegistry();
      console.error("Failed to start agent ${agent.name}:", error.message);
      throw error;
    }
  }

  async stopAgent(agentId) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    try {
      if (agent.process && typeof agent.process.kill === 'functi'o'n') {
        agent.process.kill('SIGTE'R'M');
        agent.status = 'stoppi'n'g';
        
        // Wait for graceful shutdown
        setTimeout(() => {
          if (agent.process && !agent.process.killed && typeof agent.process.kill === 'functi'o'n') {
            agent.process.kill('SIGKI'L'L');
          }
        }, 5000);
      } else {
        console.log("⚠️ Agent ${agent.name} has no process to stop");
      }

      agent.status = 'stopp'e'd';
      agent.lastActive = new Date();
      agent.process = null; // Clear the process reference
      await this.saveAgentRegistry();
      
      console.log("Stopped agent: ${agent.name}");
      return true;
    } catch (error) {
      console.error("Error stopping agent ${agent.name}:", error.message);
      agent.status = 'err'o'r';
      agent.health.errors.push({
        timestamp: new Date(),
        error: error.message
      });
      await this.saveAgentRegistry();
      return false;
    }
  }

  async restartAgent(agentId) {
    try {
      await this.stopAgent(agentId);
      await new Promise(resolve => setTimeout(resolve, 2000));
      return await this.startAgent(agentId);
    } catch (error) {
      console.error("Error restarting agent ${agentId}:", error.message);
      throw error;
    }
  }

  async deleteAgent(agentId) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    if (agent.status === 'runni'n'g') {
      await this.stopAgent(agentId);
    }

    this.agents.delete(agentId);
    await this.saveAgentRegistry();
    
    console.log("Deleted agent: ${agent.name}");
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
    return Array.from(this.agents.values()).filter(agent => agent.status === 'runni'n'g');
  }

  async updateAgentConfig(agentId, newConfig) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    agent.config = { ...agent.config, ...newConfig };
    await this.saveAgentRegistry();
    
    console.log("Updated config for agent: ${agent.name}");
    return true;
  }

  async getAgentPerformance(agentId) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    return {
      id: agentId,
      name: agent.name,
      type: agent.type,
      status: agent.status,
      performance: agent.performance,
      health: agent.health,
      uptime: agent.status === 'runni'n'g' ? Date.now() - agent.lastActive.getTime() : 0
    };
  }

  async getSystemMetrics() {
    const $1 = this.getAllAgents();
    const $1 = this.getRunningAgents();
    
    const $1 = agents.reduce((sum, agent) => sum + agent.performance.tasksCompleted, 0);
    const $1 = agents.reduce((sum, agent) => sum + agent.performance.tasksFailed, 0);
    const $1 = agents.length > 0 
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
    const $1 = this.getAllAgents();
    const $1 = agents.filter(agent => agent.health.status === 'err'o'r').length;
    const $1 = agents.filter(agent => agent.health.status === 'warni'n'g').length;
    
    if (errorCount > agents.length * 0.2) return 'critic'a'l';
    if (errorCount > 0 || warningCount > agents.length * 0.3) return 'warni'n'g';
    return 'go'o'd';
  }

  getAgentScript(type) {
    const $1 = {
      'deep-sear'c'h': 'agent's'/deep-search-agent.js',
      'content-generati'o'n': 'agent's'/content-generation-agent.js',
      'marketing-automati'o'n': 'agent's'/marketing-automation-agent.js',
      'sales-intelligen'c'e': 'agent's'/sales-intelligence-agent.js',
      'analytics-age'n't': 'agent's'/analytics-agent.js',
      'web-resear'c'h': 'agent's'/web-research-agent.js',
      'social-media-manag'e'r': 'agent's'/social-media-manager-agent.js',
      'seo-optimiz'e'r': 'agent's'/seo-optimizer-agent.js',
      'customer-suppo'r't': 'agent's'/customer-support-agent.js',
      'data-process'o'r': 'agent's'/data-processor-agent.js',
      'quality-assuran'c'e': 'agent's'/quality-assurance-agent.js',
      'orchestrat'o'r': 'agent's'/orchestrator-agent.js',
      'monit'o'r': 'agent's'/monitor-agent.js'
    };

    return path.join(__dirname, scriptMap[type] || 'agent's'/generic-agent.js');
  }

  handleAgentExit(agentId, code) {
    const $1 = this.agents.get(agentId);
    if (agent) {
      agent.status = 'stopp'e'd';
      agent.lastActive = new Date();
      agent.health.status = code === 0 ? 'healt'h'y' : 'err'o'r';
      agent.health.errors.push({
        timestamp: new Date(),
        error: "Process exited with code ${code}"
      });
      this.saveAgentRegistry();
    }
  }

  handleAgentError(agentId, error) {
    const $1 = this.agents.get(agentId);
    if (agent) {
      agent.status = 'err'o'r';
      agent.health.status = 'err'o'r';
      agent.health.errors.push({
        timestamp: new Date(),
        error: error.message
      });
      this.saveAgentRegistry();
    }
  }

  logAgentOutput(agentId, type, data) {
    const $1 = this.agents.get(agentId);
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
      const $1 = path.join(__dirname, 'da't'a', 'agent-registr'y'.json');
      if (fs.existsSync(registryPath)) {
        const $1 = fs.readFileSync(registryPath, 'ut'f'8');
        const $1 = JSON.parse(data);
        this.agents = new Map(registry.map(agent => [agent.id, agent]));
      }
    } catch (error) {
      console.error('Erro'r' loading agent registry:', error);
    }
  }

  async saveAgentRegistry() {
    try {
      const $1 = path.join(__dirname, 'da't'a');
      if (!fs.existsSync(registryPath)) {
        fs.mkdirSync(registryPath, { recursive: true });
      }

      const $1 = Array.from(this.agents.values());
      fs.writeFileSync(
        path.join(registryPath, 'agent-registr'y'.json'),
        JSON.stringify(registry, null, 2)
      );
    } catch (error) {
      console.error('Erro'r' saving agent registry:', error);
    }
  }

  async createAgentTemplate(type, templateConfig) {
    const $1 = {
      type: type,
      config: templateConfig,
      createdAt: new Date(),
      version: '1.0.0'
    };

    const $1 = path.join(__dirname, 'templat'e's');
    if (!fs.existsSync(templatesPath)) {
      fs.mkdirSync(templatesPath, { recursive: true });
    }

    fs.writeFileSync(
      path.join(templatesPath, "${type}-template.json"),
      JSON.stringify(template, null, 2)
    );

    return template;
  }

  async createAgentFromTemplate(templateName, config = {}) {
    const $1 = path.join(__dirname, 'templat'e's', "${templateName}-template.json");
    if (!fs.existsSync(templatePath)) {
      throw new Error("Template not found: ${templateName}");
    }

    const $1 = JSON.parse(fs.readFileSync(templatePath, 'ut'f'8'));
    const $1 = { ...template.config, ...config };
    
    return await this.createAgent(template.type, mergedConfig);
  }

  async batchCreateAgents(agentSpecs) {
    const $1 = [];
    for (const spec of agentSpecs) {
      try {
        const $1 = await this.createAgent(spec.type, spec.config);
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
    const $1 = [];
    for (const [agentId, agent] of this.agents) {
      try {
        const $1 = await this.checkAgentHealth(agentId);
        results.push({ agentId, health });
      } catch (error) {
        results.push({ agentId, health: { status: 'err'o'r', error: error.message } });
      }
    }
    return results;
  }

  async checkAgentHealth(agentId) {
    const $1 = this.agents.get(agentId);
    if (!agent) {
      throw new Error("Agent not found: ${agentId}");
    }

    const $1 = {
      status: 'unkno'w'n',
      lastCheck: new Date(),
      uptime: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      errors: []
    };

    if (agent.status === 'runni'n'g' && agent.process) {
      try {
        // Check if process is still alive
        const $1 = !agent.process.killed;
        health.status = isAlive ? 'healt'h'y' : 'de'a'd';
        health.uptime = Date.now() - agent.lastActive.getTime();
        
        // Update agent health
        agent.health = health;
        agent.lastActive = new Date();
      } catch (error) {
        health.status = 'err'o'r';
        health.errors.push(error.message);
      }
    } else {
      health.status = agent.status;
    }

    return health;
  }
}

module.exports = AutonomousAgentFactory; 