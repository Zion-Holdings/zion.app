const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const EventEmitter = require('events');

class FrontendSyncAgentFactory extends EventEmitter {
  constructor() {
    super();
    this.syncAgents = new Map();
    this.syncAgentTypes = {
      'page-sync': {
        capabilities: ['page-generation', 'content-sync', 'route-management'],
        services: ['dynamic-page-creation', 'content-updates', 'navigation-sync'],
        dependencies: ['next.js', 'react', 'typescript'],
        config: {
          maxConcurrentPages: 10,
          syncInterval: 30000, // 30 seconds
          autoCommit: true,
          realTimeUpdates: true
        }
      },
      'component-sync': {
        capabilities: ['component-generation', 'ui-sync', 'style-updates'],
        services: ['dynamic-components', 'ui-improvements', 'style-sync'],
        dependencies: ['react', 'tailwindcss', 'styled-components'],
        config: {
          maxConcurrentComponents: 15,
          syncInterval: 20000, // 20 seconds
          autoCommit: true,
          hotReload: true
        }
      },
      'api-sync': {
        capabilities: ['api-generation', 'endpoint-sync', 'data-flow'],
        services: ['dynamic-apis', 'endpoint-updates', 'data-sync'],
        dependencies: ['next.js', 'axios', 'swr'],
        config: {
          maxConcurrentApis: 8,
          syncInterval: 25000, // 25 seconds
          autoCommit: true,
          cacheManagement: true
        }
      },
      'content-sync': {
        capabilities: ['content-generation', 'seo-sync', 'metadata-updates'],
        services: ['dynamic-content', 'seo-improvements', 'meta-sync'],
        dependencies: ['next-seo', 'markdown', 'frontmatter'],
        config: {
          maxConcurrentContent: 20,
          syncInterval: 40000, // 40 seconds
          autoCommit: true,
          seoOptimization: true
        }
      },
      'state-sync': {
        capabilities: ['state-management', 'context-sync', 'data-flow'],
        services: ['global-state', 'context-updates', 'data-management'],
        dependencies: ['react-context', 'zustand', 'redux'],
        config: {
          maxConcurrentStates: 5,
          syncInterval: 15000, // 15 seconds
          autoCommit: true,
          realTimeSync: true
        }
      },
      'auth-sync': {
        capabilities: ['auth-management', 'session-sync', 'permission-updates'],
        services: ['authentication', 'session-management', 'permission-sync'],
        dependencies: ['supabase', 'next-auth', 'jwt'],
        config: {
          maxConcurrentAuth: 3,
          syncInterval: 10000, // 10 seconds
          autoCommit: true,
          secureSync: true
        }
      },
      'ui-sync': {
        capabilities: ['ui-generation', 'design-sync', 'theme-updates'],
        services: ['dynamic-ui', 'design-improvements', 'theme-sync'],
        dependencies: ['tailwindcss', 'framer-motion', 'radix-ui'],
        config: {
          maxConcurrentUI: 12,
          syncInterval: 35000, // 35 seconds
          autoCommit: true,
          responsiveDesign: true
        }
      },
      'performance-sync': {
        capabilities: ['performance-monitoring', 'optimization-sync', 'metrics-updates'],
        services: ['performance-tracking', 'optimization-improvements', 'metrics-sync'],
        dependencies: ['web-vitals', 'lighthouse', 'core-web-vitals'],
        config: {
          maxConcurrentMetrics: 6,
          syncInterval: 60000, // 1 minute
          autoCommit: true,
          performanceTracking: true
        }
      }
    };
    
    this.syncRegistry = new Map();
    this.syncMetrics = {
      totalAgentsCreated: 0,
      totalSyncsPerformed: 0,
      totalErrors: 0,
      lastSyncTime: null,
      systemHealth: 'unknown'
    };
    
    this.loadSyncRegistry();
  }

  async createSyncAgent(type, config = {}) {
    if (!this.syncAgentTypes[type]) {
      throw new Error(`Unknown sync agent type: ${type}`);
    }

    const agentId = uuidv4();
    const agentConfig = {
      ...this.syncAgentTypes[type].config,
      ...config,
      id: agentId,
      type: type,
      createdAt: new Date().toISOString(),
      status: 'created'
    };

    const agent = {
      id: agentId,
      type: type,
      config: agentConfig,
      process: null,
      status: 'created',
      metrics: {
        syncsPerformed: 0,
        errors: 0,
        lastSync: null,
        startTime: null
      }
    };

    this.syncAgents.set(agentId, agent);
    this.syncRegistry.set(agentId, agent);
    this.syncMetrics.totalAgentsCreated++;

    console.log(`🔄 Created sync agent ${agentId} of type ${type}`);
    this.emit('agentCreated', { agentId, type, config: agentConfig });

    return agentId;
  }

  async startSyncAgent(agentId) {
    const agent = this.syncAgents.get(agentId);
    if (!agent) {
      throw new Error(`Sync agent ${agentId} not found`);
    }

    if (agent.status === 'running') {
      console.log(`⚠️ Sync agent ${agentId} is already running`);
      return;
    }

    try {
      const scriptPath = this.getSyncAgentScript(agent.type);
      const args = [
        scriptPath,
        '--agent-id', agentId,
        '--type', agent.type,
        '--config', JSON.stringify(agent.config)
      ];

      agent.process = spawn('node', args, {
        stdio: ['pipe', 'pipe', 'pipe'],
        cwd: __dirname
      });

      agent.status = 'running';
      agent.metrics.startTime = new Date().toISOString();

      agent.process.stdout.on('data', (data) => {
        this.logSyncAgentOutput(agentId, 'stdout', data.toString());
      });

      agent.process.stderr.on('data', (data) => {
        this.logSyncAgentOutput(agentId, 'stderr', data.toString());
      });

      agent.process.on('exit', (code) => {
        this.handleSyncAgentExit(agentId, code);
      });

      agent.process.on('error', (error) => {
        this.handleSyncAgentError(agentId, error);
      });

      console.log(`🚀 Started sync agent ${agentId} (${agent.type})`);
      this.emit('agentStarted', { agentId, type: agent.type });

    } catch (error) {
      console.error(`❌ Failed to start sync agent ${agentId}:`, error);
      agent.status = 'error';
      agent.metrics.errors++;
      this.syncMetrics.totalErrors++;
      throw error;
    }
  }

  async stopSyncAgent(agentId) {
    const agent = this.syncAgents.get(agentId);
    if (!agent) {
      throw new Error(`Sync agent ${agentId} not found`);
    }

    if (agent.process) {
      agent.process.kill('SIGTERM');
      agent.status = 'stopped';
      console.log(`🛑 Stopped sync agent ${agentId}`);
      this.emit('agentStopped', { agentId, type: agent.type });
    }
  }

  async restartSyncAgent(agentId) {
    await this.stopSyncAgent(agentId);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await this.startSyncAgent(agentId);
  }

  async deleteSyncAgent(agentId) {
    await this.stopSyncAgent(agentId);
    this.syncAgents.delete(agentId);
    this.syncRegistry.delete(agentId);
    console.log(`🗑️ Deleted sync agent ${agentId}`);
    this.emit('agentDeleted', { agentId });
  }

  getSyncAgent(agentId) {
    return this.syncAgents.get(agentId);
  }

  getAllSyncAgents() {
    return Array.from(this.syncAgents.values());
  }

  getSyncAgentsByType(type) {
    return Array.from(this.syncAgents.values()).filter(agent => agent.type === type);
  }

  getRunningSyncAgents() {
    return Array.from(this.syncAgents.values()).filter(agent => agent.status === 'running');
  }

  async updateSyncAgentConfig(agentId, newConfig) {
    const agent = this.syncAgents.get(agentId);
    if (!agent) {
      throw new Error(`Sync agent ${agentId} not found`);
    }

    agent.config = { ...agent.config, ...newConfig };
    this.syncRegistry.set(agentId, agent);
    await this.saveSyncRegistry();

    console.log(`⚙️ Updated config for sync agent ${agentId}`);
    this.emit('agentConfigUpdated', { agentId, config: agent.config });
  }

  async getSyncAgentPerformance(agentId) {
    const agent = this.syncAgents.get(agentId);
    if (!agent) {
      throw new Error(`Sync agent ${agentId} not found`);
    }

    return {
      id: agentId,
      type: agent.type,
      status: agent.status,
      metrics: agent.metrics,
      uptime: agent.metrics.startTime ? Date.now() - new Date(agent.metrics.startTime).getTime() : 0,
      syncRate: agent.metrics.syncsPerformed / (agent.metrics.startTime ? (Date.now() - new Date(agent.metrics.startTime).getTime()) / 1000 : 1)
    };
  }

  async getSystemSyncMetrics() {
    const runningAgents = this.getRunningSyncAgents();
    const totalSyncs = Array.from(this.syncAgents.values()).reduce((sum, agent) => sum + agent.metrics.syncsPerformed, 0);
    const totalErrors = Array.from(this.syncAgents.values()).reduce((sum, agent) => sum + agent.metrics.errors, 0);

    return {
      totalAgents: this.syncAgents.size,
      runningAgents: runningAgents.length,
      totalSyncs,
      totalErrors,
      errorRate: totalSyncs > 0 ? (totalErrors / totalSyncs) * 100 : 0,
      lastUpdate: new Date().toISOString(),
      systemHealth: this.calculateSystemHealth()
    };
  }

  calculateSystemHealth() {
    const runningAgents = this.getRunningSyncAgents();
    const totalAgents = this.syncAgents.size;
    
    if (totalAgents === 0) return 'unknown';
    if (runningAgents.length === totalAgents) return 'excellent';
    if (runningAgents.length >= totalAgents * 0.8) return 'good';
    if (runningAgents.length >= totalAgents * 0.5) return 'fair';
    return 'poor';
  }

  getSyncAgentScript(type) {
    const scriptMap = {
      'page-sync': 'agents/page-sync-agent.js',
      'component-sync': 'agents/component-sync-agent.js',
      'api-sync': 'agents/api-sync-agent.js',
      'content-sync': 'agents/content-sync-agent.js',
      'state-sync': 'agents/state-sync-agent.js',
      'auth-sync': 'agents/auth-sync-agent.js',
      'ui-sync': 'agents/ui-sync-agent.js',
      'performance-sync': 'agents/performance-sync-agent.js'
    };

    return path.join(__dirname, scriptMap[type] || 'agents/generic-sync-agent.js');
  }

  handleSyncAgentExit(agentId, code) {
    const agent = this.syncAgents.get(agentId);
    if (agent) {
      agent.status = 'exited';
      agent.process = null;
      console.log(`🔄 Sync agent ${agentId} exited with code ${code}`);
      this.emit('agentExited', { agentId, code });
    }
  }

  handleSyncAgentError(agentId, error) {
    const agent = this.syncAgents.get(agentId);
    if (agent) {
      agent.metrics.errors++;
      this.syncMetrics.totalErrors++;
      console.error(`❌ Sync agent ${agentId} error:`, error);
      this.emit('agentError', { agentId, error });
    }
  }

  logSyncAgentOutput(agentId, type, data) {
    const logDir = path.join(__dirname, 'logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }

    const logFile = path.join(logDir, `sync-agent-${agentId}.log`);
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${data}`;

    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async loadSyncRegistry() {
    try {
      const registryFile = path.join(__dirname, 'data', 'sync-registry.json');
      if (fs.existsSync(registryFile)) {
        const data = fs.readFileSync(registryFile, 'utf8');
        const registry = JSON.parse(data);
        this.syncRegistry = new Map(Object.entries(registry));
        console.log(`📋 Loaded sync registry with ${this.syncRegistry.size} agents`);
      }
    } catch (error) {
      console.error('❌ Error loading sync registry:', error);
    }
  }

  async saveSyncRegistry() {
    try {
      const dataDir = path.join(__dirname, 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const registryFile = path.join(dataDir, 'sync-registry.json');
      const registry = Object.fromEntries(this.syncRegistry);
      fs.writeFileSync(registryFile, JSON.stringify(registry, null, 2));
    } catch (error) {
      console.error('❌ Error saving sync registry:', error);
    }
  }

  async createSyncAgentTemplate(type, templateConfig) {
    const templateId = uuidv4();
    const template = {
      id: templateId,
      type: type,
      config: templateConfig,
      createdAt: new Date().toISOString()
    };

    const templatesFile = path.join(__dirname, 'data', 'sync-templates.json');
    let templates = {};
    
    if (fs.existsSync(templatesFile)) {
      templates = JSON.parse(fs.readFileSync(templatesFile, 'utf8'));
    }

    templates[templateId] = template;
    fs.writeFileSync(templatesFile, JSON.stringify(templates, null, 2));

    console.log(`📝 Created sync agent template ${templateId} for type ${type}`);
    return templateId;
  }

  async createSyncAgentFromTemplate(templateName, config = {}) {
    const templatesFile = path.join(__dirname, 'data', 'sync-templates.json');
    if (!fs.existsSync(templatesFile)) {
      throw new Error('No sync templates found');
    }

    const templates = JSON.parse(fs.readFileSync(templatesFile, 'utf8'));
    const template = templates[templateName];

    if (!template) {
      throw new Error(`Sync template ${templateName} not found`);
    }

    const mergedConfig = { ...template.config, ...config };
    return await this.createSyncAgent(template.type, mergedConfig);
  }

  async batchCreateSyncAgents(agentSpecs) {
    const createdAgents = [];
    
    for (const spec of agentSpecs) {
      try {
        const agentId = await this.createSyncAgent(spec.type, spec.config);
        createdAgents.push({ id: agentId, type: spec.type, status: 'created' });
      } catch (error) {
        console.error(`❌ Failed to create sync agent ${spec.type}:`, error);
      }
    }

    console.log(`🔄 Batch created ${createdAgents.length} sync agents`);
    return createdAgents;
  }

  async healthCheck() {
    const health = {
      status: 'healthy',
      agents: this.syncAgents.size,
      running: this.getRunningSyncAgents().length,
      errors: this.syncMetrics.totalErrors,
      lastUpdate: new Date().toISOString()
    };

    if (health.running === 0 && health.agents > 0) {
      health.status = 'warning';
    }

    if (health.errors > 10) {
      health.status = 'critical';
    }

    return health;
  }

  async checkSyncAgentHealth(agentId) {
    const agent = this.syncAgents.get(agentId);
    if (!agent) {
      return { status: 'not_found' };
    }

    const health = {
      id: agentId,
      type: agent.type,
      status: agent.status,
      uptime: agent.metrics.startTime ? Date.now() - new Date(agent.metrics.startTime).getTime() : 0,
      syncsPerformed: agent.metrics.syncsPerformed,
      errors: agent.metrics.errors,
      lastSync: agent.metrics.lastSync
    };

    if (agent.status === 'running' && agent.process) {
      health.processAlive = !agent.process.killed;
    }

    return health;
  }
}

module.exports = FrontendSyncAgentFactory; 