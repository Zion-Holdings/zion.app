const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const EventEmitter = require('events');
const FrontendSyncAgentFactory = require('./frontend-sync-agent-factory');

class FrontendSyncOrchestrator extends EventEmitter {
  constructor() {
    super();
    this.syncFactory = new FrontendSyncAgentFactory();
    this.isRunning = false;
    this.syncQueue = [];
    this.activeSyncs = new Map();
    this.syncMetrics = {
      totalSyncs: 0,
      successfulSyncs: 0,
      failedSyncs: 0,
      lastSyncTime: null,
      averageSyncTime: 0
    };
    
    this.config = {
      maxConcurrentSyncs: 5,
      syncInterval: 30000, // 30 seconds
      retryAttempts: 3,
      retryDelay: 5000, // 5 seconds
      autoCommit: true,
      realTimeUpdates: true
    };
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.syncFactory.on('agentCreated', (data) => {
      console.log(`🔄 Sync agent created: ${data.agentId} (${data.type})`);
      this.emit('syncAgentCreated', data);
    });

    this.syncFactory.on('agentStarted', (data) => {
      console.log(`🚀 Sync agent started: ${data.agentId} (${data.type})`);
      this.emit('syncAgentStarted', data);
    });

    this.syncFactory.on('agentStopped', (data) => {
      console.log(`🛑 Sync agent stopped: ${data.agentId} (${data.type})`);
      this.emit('syncAgentStopped', data);
    });

    this.syncFactory.on('agentError', (data) => {
      console.error(`❌ Sync agent error: ${data.agentId}`, data.error);
      this.emit('syncAgentError', data);
    });
  }

  async startFrontendSyncOrchestration() {
    console.log('🚀 Starting Frontend Sync Orchestration...');
    this.isRunning = true;

    try {
      // Create initial sync agents
      await this.createInitialSyncAgents();
      
      // Start all sync agents
      await this.startAllSyncAgents();
      
      // Begin continuous sync monitoring
      this.startContinuousSyncMonitoring();
      
      console.log('✅ Frontend Sync Orchestration started successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to start frontend sync orchestration:', error);
      throw error;
    }
  }

  async createInitialSyncAgents() {
    console.log('🔄 Creating initial frontend sync agents...');
    
    const initialAgents = [
      { type: 'page-sync', config: { priority: 'high' } },
      { type: 'component-sync', config: { priority: 'high' } },
      { type: 'api-sync', config: { priority: 'medium' } },
      { type: 'content-sync', config: { priority: 'high' } },
      { type: 'state-sync', config: { priority: 'medium' } },
      { type: 'auth-sync', config: { priority: 'low' } },
      { type: 'ui-sync', config: { priority: 'medium' } },
      { type: 'performance-sync', config: { priority: 'low' } }
    ];

    for (const agentSpec of initialAgents) {
      try {
        await this.syncFactory.createSyncAgent(agentSpec.type, agentSpec.config);
      } catch (error) {
        console.error(`❌ Failed to create sync agent ${agentSpec.type}:`, error);
      }
    }

    console.log('✅ Initial sync agents created');
  }

  async startAllSyncAgents() {
    console.log('🚀 Starting all sync agents...');
    
    const agents = this.syncFactory.getAllSyncAgents();
    
    for (const agent of agents) {
      try {
        await this.syncFactory.startSyncAgent(agent.id);
      } catch (error) {
        console.error(`❌ Failed to start sync agent ${agent.id}:`, error);
      }
    }

    console.log(`✅ Started ${agents.length} sync agents`);
  }

  startContinuousSyncMonitoring() {
    console.log('🔍 Starting continuous sync monitoring...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.performSyncCycle();
      } catch (error) {
        console.error('❌ Error in sync cycle:', error);
      }
    }, this.config.syncInterval);
  }

  async performSyncCycle() {
    console.log('🔄 Performing sync cycle...');
    
    try {
      // Check for new pages and improvements
      const newPages = await this.detectNewPages();
      const newComponents = await this.detectNewComponents();
      const newContent = await this.detectNewContent();
      
      // Queue sync tasks
      if (newPages.length > 0) {
        this.queueSyncTask('page-sync', { pages: newPages });
      }
      
      if (newComponents.length > 0) {
        this.queueSyncTask('component-sync', { components: newComponents });
      }
      
      if (newContent.length > 0) {
        this.queueSyncTask('content-sync', { content: newContent });
      }
      
      // Process sync queue
      await this.processSyncQueue();
      
      // Update metrics
      this.syncMetrics.lastSyncTime = new Date().toISOString();
      this.syncMetrics.totalSyncs++;
      
      console.log('✅ Sync cycle completed');
      
    } catch (error) {
      console.error('❌ Error in sync cycle:', error);
      this.syncMetrics.failedSyncs++;
    }
  }

  async detectNewPages() {
    const pagesDir = path.join(process.cwd(), 'pages');
    const generatedPagesDir = path.join(process.cwd(), 'automation', 'generated-pages');
    
    const newPages = [];
    
    try {
      // Check generated pages directory
      if (fs.existsSync(generatedPagesDir)) {
        const files = fs.readdirSync(generatedPagesDir);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const pagePath = path.join(generatedPagesDir, file);
            const targetPath = path.join(pagesDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newPages.push({
                source: pagePath,
                target: targetPath,
                name: file,
                type: 'generated'
              });
            }
          }
        }
      }
      
      // Check for dynamic page generation
      const dynamicPages = await this.detectDynamicPages();
      newPages.push(...dynamicPages);
      
    } catch (error) {
      console.error('❌ Error detecting new pages:', error);
    }
    
    return newPages;
  }

  async detectNewComponents() {
    const componentsDir = path.join(process.cwd(), 'components');
    const generatedComponentsDir = path.join(process.cwd(), 'automation', 'generated-components');
    
    const newComponents = [];
    
    try {
      // Check generated components directory
      if (fs.existsSync(generatedComponentsDir)) {
        const files = fs.readdirSync(generatedComponentsDir);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const componentPath = path.join(generatedComponentsDir, file);
            const targetPath = path.join(componentsDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newComponents.push({
                source: componentPath,
                target: targetPath,
                name: file,
                type: 'generated'
              });
            }
          }
        }
      }
      
      // Check for dynamic component generation
      const dynamicComponents = await this.detectDynamicComponents();
      newComponents.push(...dynamicComponents);
      
    } catch (error) {
      console.error('❌ Error detecting new components:', error);
    }
    
    return newComponents;
  }

  async detectNewContent() {
    const contentDirs = [
      path.join(process.cwd(), 'pages'),
      path.join(process.cwd(), 'components'),
      path.join(process.cwd(), 'automation', 'generated-content')
    ];
    
    const newContent = [];
    
    try {
      for (const contentDir of contentDirs) {
        if (fs.existsSync(contentDir)) {
          const files = this.getAllFiles(contentDir);
          for (const file of files) {
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.md')) {
              const content = fs.readFileSync(file, 'utf8');
              const lastModified = fs.statSync(file).mtime;
              
              // Check if content has been updated recently
              const timeSinceModified = Date.now() - lastModified.getTime();
              if (timeSinceModified < 300000) { // 5 minutes
                newContent.push({
                  path: file,
                  lastModified: lastModified.toISOString(),
                  type: 'updated'
                });
              }
            }
          }
        }
      }
      
    } catch (error) {
      console.error('❌ Error detecting new content:', error);
    }
    
    return newContent;
  }

  getAllFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  async detectDynamicPages() {
    // This would integrate with the existing content generation system
    const dynamicPages = [];
    
    try {
      // Check for new pages generated by the autonomous system
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      if (fs.existsSync(generatedContentDir)) {
        const files = fs.readdirSync(generatedContentDir);
        for (const file of files) {
          if (file.endsWith('.json')) {
            const content = JSON.parse(fs.readFileSync(path.join(generatedContentDir, file), 'utf8'));
            if (content.type === 'page' && content.status === 'pending') {
              dynamicPages.push({
                source: content,
                target: path.join(process.cwd(), 'pages', `${content.slug}.tsx`),
                name: `${content.slug}.tsx`,
                type: 'dynamic'
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Error detecting dynamic pages:', error);
    }
    
    return dynamicPages;
  }

  async detectDynamicComponents() {
    // This would integrate with the existing component generation system
    const dynamicComponents = [];
    
    try {
      // Check for new components generated by the autonomous system
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      if (fs.existsSync(generatedContentDir)) {
        const files = fs.readdirSync(generatedContentDir);
        for (const file of files) {
          if (file.endsWith('.json')) {
            const content = JSON.parse(fs.readFileSync(path.join(generatedContentDir, file), 'utf8'));
            if (content.type === 'component' && content.status === 'pending') {
              dynamicComponents.push({
                source: content,
                target: path.join(process.cwd(), 'components', `${content.name}.tsx`),
                name: `${content.name}.tsx`,
                type: 'dynamic'
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Error detecting dynamic components:', error);
    }
    
    return dynamicComponents;
  }

  queueSyncTask(type, data) {
    const taskId = `sync-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const task = {
      id: taskId,
      type: type,
      data: data,
      status: 'queued',
      createdAt: new Date().toISOString(),
      attempts: 0
    };
    
    this.syncQueue.push(task);
    console.log(`📋 Queued sync task ${taskId} (${type})`);
  }

  async processSyncQueue() {
    while (this.syncQueue.length > 0 && this.activeSyncs.size < this.config.maxConcurrentSyncs) {
      const task = this.syncQueue.shift();
      await this.executeSyncTask(task);
    }
  }

  async executeSyncTask(task) {
    const startTime = Date.now();
    task.status = 'running';
    this.activeSyncs.set(task.id, task);
    
    try {
      console.log(`🔄 Executing sync task ${task.id} (${task.type})`);
      
      // Find appropriate sync agent
      const agents = this.syncFactory.getSyncAgentsByType(task.type);
      if (agents.length === 0) {
        throw new Error(`No sync agents available for type ${task.type}`);
      }
      
      // Use the first available agent
      const agent = agents[0];
      
      // Execute the sync operation
      await this.performSyncOperation(agent, task);
      
      // Mark task as completed
      task.status = 'completed';
      task.completedAt = new Date().toISOString();
      task.duration = Date.now() - startTime;
      
      this.syncMetrics.successfulSyncs++;
      console.log(`✅ Sync task ${task.id} completed in ${task.duration}ms`);
      
    } catch (error) {
      console.error(`❌ Sync task ${task.id} failed:`, error);
      task.status = 'failed';
      task.error = error.message;
      task.attempts++;
      
      this.syncMetrics.failedSyncs++;
      
      // Retry if attempts < max retries
      if (task.attempts < this.config.retryAttempts) {
        console.log(`🔄 Retrying sync task ${task.id} (attempt ${task.attempts + 1})`);
        setTimeout(() => {
          this.syncQueue.unshift(task);
        }, this.config.retryDelay);
      }
      
    } finally {
      this.activeSyncs.delete(task.id);
    }
  }

  async performSyncOperation(agent, task) {
    switch (task.type) {
      case 'page-sync':
        await this.syncPages(agent, task.data);
        break;
      case 'component-sync':
        await this.syncComponents(agent, task.data);
        break;
      case 'content-sync':
        await this.syncContent(agent, task.data);
        break;
      case 'api-sync':
        await this.syncApis(agent, task.data);
        break;
      case 'state-sync':
        await this.syncState(agent, task.data);
        break;
      case 'auth-sync':
        await this.syncAuth(agent, task.data);
        break;
      case 'ui-sync':
        await this.syncUI(agent, task.data);
        break;
      case 'performance-sync':
        await this.syncPerformance(agent, task.data);
        break;
      default:
        throw new Error(`Unknown sync type: ${task.type}`);
    }
  }

  async syncPages(agent, data) {
    console.log(`📄 Syncing ${data.pages.length} pages...`);
    
    for (const page of data.pages) {
      try {
        // Copy page to target location
        fs.copyFileSync(page.source, page.target);
        
        // Update agent metrics
        agent.metrics.syncsPerformed++;
        agent.metrics.lastSync = new Date().toISOString();
        
        console.log(`✅ Synced page: ${page.name}`);
        
        // Auto-commit if enabled
        if (this.config.autoCommit) {
          await this.commitChanges(`Sync page: ${page.name}`);
        }
        
      } catch (error) {
        console.error(`❌ Failed to sync page ${page.name}:`, error);
        throw error;
      }
    }
  }

  async syncComponents(agent, data) {
    console.log(`🧩 Syncing ${data.components.length} components...`);
    
    for (const component of data.components) {
      try {
        // Copy component to target location
        fs.copyFileSync(component.source, component.target);
        
        // Update agent metrics
        agent.metrics.syncsPerformed++;
        agent.metrics.lastSync = new Date().toISOString();
        
        console.log(`✅ Synced component: ${component.name}`);
        
        // Auto-commit if enabled
        if (this.config.autoCommit) {
          await this.commitChanges(`Sync component: ${component.name}`);
        }
        
      } catch (error) {
        console.error(`❌ Failed to sync component ${component.name}:`, error);
        throw error;
      }
    }
  }

  async syncContent(agent, data) {
    console.log(`📝 Syncing ${data.content.length} content items...`);
    
    for (const content of data.content) {
      try {
        // Update content file
        const contentData = fs.readFileSync(content.path, 'utf8');
        // Apply any content transformations here
        fs.writeFileSync(content.path, contentData);
        
        // Update agent metrics
        agent.metrics.syncsPerformed++;
        agent.metrics.lastSync = new Date().toISOString();
        
        console.log(`✅ Synced content: ${path.basename(content.path)}`);
        
        // Auto-commit if enabled
        if (this.config.autoCommit) {
          await this.commitChanges(`Sync content: ${path.basename(content.path)}`);
        }
        
      } catch (error) {
        console.error(`❌ Failed to sync content ${path.basename(content.path)}:`, error);
        throw error;
      }
    }
  }

  async syncApis(agent, data) {
    console.log(`🔌 Syncing APIs...`);
    // API sync implementation
    agent.metrics.syncsPerformed++;
    agent.metrics.lastSync = new Date().toISOString();
  }

  async syncState(agent, data) {
    console.log(`🔄 Syncing state...`);
    // State sync implementation
    agent.metrics.syncsPerformed++;
    agent.metrics.lastSync = new Date().toISOString();
  }

  async syncAuth(agent, data) {
    console.log(`🔐 Syncing auth...`);
    // Auth sync implementation
    agent.metrics.syncsPerformed++;
    agent.metrics.lastSync = new Date().toISOString();
  }

  async syncUI(agent, data) {
    console.log(`🎨 Syncing UI...`);
    // UI sync implementation
    agent.metrics.syncsPerformed++;
    agent.metrics.lastSync = new Date().toISOString();
  }

  async syncPerformance(agent, data) {
    console.log(`⚡ Syncing performance...`);
    // Performance sync implementation
    agent.metrics.syncsPerformed++;
    agent.metrics.lastSync = new Date().toISOString();
  }

  async commitChanges(message) {
    try {
      const { execSync } = require('child_process');
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "${message}"`, { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`🚀 Committed and pushed changes: ${message}`);
    } catch (error) {
      console.error('❌ Failed to commit changes:', error);
    }
  }

  async stopFrontendSyncOrchestration() {
    console.log('🛑 Stopping Frontend Sync Orchestration...');
    this.isRunning = false;
    
    // Stop all sync agents
    const agents = this.syncFactory.getAllSyncAgents();
    for (const agent of agents) {
      try {
        await this.syncFactory.stopSyncAgent(agent.id);
      } catch (error) {
        console.error(`❌ Failed to stop sync agent ${agent.id}:`, error);
      }
    }
    
    console.log('✅ Frontend Sync Orchestration stopped');
  }

  async getSyncOrchestratorStatus() {
    const metrics = await this.syncFactory.getSystemSyncMetrics();
    const health = await this.syncFactory.healthCheck();
    
    return {
      isRunning: this.isRunning,
      queueLength: this.syncQueue.length,
      activeSyncs: this.activeSyncs.size,
      metrics: this.syncMetrics,
      agentMetrics: metrics,
      health: health
    };
  }
}

module.exports = FrontendSyncOrchestrator; 