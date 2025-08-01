#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const FrontendSyncOrchestrator = require('./frontend-sync-orchestrator');
const FrontendSyncAgentFactory = require('./frontend-sync-agent-factory');

class FrontendSyncIntegrator {
  constructor() {
    this.orchestrator = null;
    this.factory = null;
    this.isIntegrated = false;
    this.integrationStatus = {
      status: 'not_integrated',
      startTime: null,
      lastSync: null,
      syncCount: 0
    };
  }

  async integrateWithExistingSystem() {
    console.log('🔗 Integrating Frontend Sync System with existing autonomous system...');
    
    try {
      // Initialize frontend sync components
      this.orchestrator = new FrontendSyncOrchestrator();
      this.factory = new FrontendSyncAgentFactory();
      
      // Set up integration event listeners
      this.setupIntegrationListeners();
      
      // Start the frontend sync orchestration
      await this.orchestrator.startFrontendSyncOrchestration();
      
      // Update integration status
      this.isIntegrated = true;
      this.integrationStatus.status = 'integrated';
      this.integrationStatus.startTime = new Date().toISOString();
      
      console.log('✅ FrontFrontend Sync System integrated successfully');
      
      // Start continuous integration monitoring
      this.startIntegrationMonitoring();
      
      return true;
      
    } catch (error) {
      console.error('❌ Failed to integrate Frontend Sync System:', error);
      this.integrationStatus.status = 'error';
      throw error;
    }
  }

  setupIntegrationListeners() {
    // Listen for sync agent events
    this.orchestrator.on('syncAgentCreated', (data) => {
      console.log(`🔗 Integration: Sync agent created - ${data.agentId} (${data.type})`);
      this.logIntegrationEvent('agent_created', data);
    });

    this.orchestrator.on('syncAgentStarted', (data) => {
      console.log(`🔗 Integration: Sync agent started - ${data.agentId} (${data.type})`);
      this.logIntegrationEvent('agent_started', data);
    });

    this.orchestrator.on('syncAgentError', (data) => {
      console.error(`🔗 Integration: Sync agent error - ${data.agentId}`, data.error);
      this.logIntegrationEvent('agent_error', data);
    });
  }

  startIntegrationMonitoring() {
    console.log('🔍 Starting integration monitoring...');
    
    setInterval(async () => {
      if (!this.isIntegrated) return;
      
      try {
        // Check integration health
        const health = await this.checkIntegrationHealth();
        
        // Log integration status
        console.log(`📊 Integration Health:`, {
          status: health.status,
          agents: health.agentCount,
          syncs: this.integrationStatus.syncCount,
          lastSync: this.integrationStatus.lastSync
        });
        
        // Save integration status
        this.saveIntegrationStatus(health);
        
        // Trigger sync if needed
        await this.triggerSyncIfNeeded();
        
      } catch (error) {
        console.error('❌ Integration monitoring error:', error);
      }
    }, 60000); // Check every minute
  }

  async checkIntegrationHealth() {
    try {
      const orchestratorStatus = await this.orchestrator.getSyncOrchestratorStatus();
      const factoryHealth = await this.factory.healthCheck();
      
      return {
        status: orchestratorStatus.health.status === 'healthy' && factoryHealth.status === 'healthy' ? 'healthy' : 'warning',
        agentCount: orchestratorStatus.metrics.totalAgents,
        runningAgents: orchestratorStatus.metrics.runningAgents,
        totalSyncs: orchestratorStatus.metrics.totalSyncs,
        errors: orchestratorStatus.metrics.totalErrors,
        lastUpdate: new Date().toISOString()
      };
    } catch (error) {
      console.error('❌ Error checking integration health:', error);
      return {
        status: 'error',
        error: error.message,
        lastUpdate: new Date().toISOString()
      };
    }
  }

  async triggerSyncIfNeeded() {
    try {
      // Check if there are any pending improvements that need to be synced
      const pendingImprovements = await this.detectPendingImprovements();
      
      if (pendingImprovements.length > 0) {
        console.log(`🔄 Integration: Found ${pendingImprovements.length} pending improvements, triggering sync...`);
        
        // Trigger sync for each improvement type
        for (const improvement of pendingImprovements) {
          await this.triggerSyncForImprovement(improvement);
        }
      }
    } catch (error) {
      console.error('❌ Error triggering sync:', error);
    }
  }

  async detectPendingImprovements() {
    const improvements = [];
    
    try {
      // Check for new pages
      const newPages = await this.detectNewPages();
      if (newPages.length > 0) {
        improvements.push({ type: 'pages', items: newPages });
      }
      
      // Check for new components
      const newComponents = await this.detectNewComponents();
      if (newComponents.length > 0) {
        improvements.push({ type: 'components', items: newComponents });
      }
      
      // Check for new content
      const newContent = await this.detectNewContent();
      if (newContent.length > 0) {
        improvements.push({ type: 'content', items: newContent });
      }
      
    } catch (error) {
      console.error('❌ Error detecting pending improvements:', error);
    }
    
    return improvements;
  }

  async detectNewPages() {
    const newPages = [];
    
    try {
      const pagesDir = path.join(process.cwd(), 'pages');
      const generatedPagesDir = path.join(process.cwd(), 'automation', 'generated-pages');
      
      // Check generated pages directory
      if (fs.existsSync(generatedPagesDir)) {
        const files = fs.readdirSync(generatedPagesDir);
        for (const file) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const sourcePath = path.join(generatedPagesDir, file);
            const targetPath = path.join(pagesDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newPages.push({ source: sourcePath, target: targetPath, name: file });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Error detecting new pages:', error);
    }
    
    return newPages;
  }

  async detectNewComponents() {
    const newComponents = [];
    
    try {
      const componentsDir = path.join(process.cwd(), 'components');
      const generatedComponentsDir = path.join(process.cwd(), 'automation', 'generated-components');
      
      // Check generated components directory
      if (fs.existsSync(generatedComponentsDir)) {
        const files = fs.readdirSync(generatedComponentsDir);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const sourcePath = path.join(generatedComponentsDir, file);
            const targetPath = path.join(componentsDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newComponents.push({ source: sourcePath, target: targetPath, name: file });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Error detecting new components:', error);
    }
    
    return newComponents;
  }

  async detectNewContent() {
    const newContent = [];
    
    try {
      const contentDirs = [
        path.join(process.cwd(), 'pages'),
        path.join(process.cwd(), 'components'),
        path.join(process.cwd(), 'automation', 'generated-content')
      ];
      
      for (const contentDir of contentDirs) {
        if (fs.existsSync(contentDir)) {
          const files = this.getAllFiles(contentDir);
          for (const file of files) {
            if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.md')) {
              const lastModified = fs.statSync(file).mtime;
              const timeSinceModified = Date.now() - lastModified.getTime();
              
              // Check if content has been updated recently (within 5 minutes)
              if (timeSinceModified < 300000) {
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

  async triggerSyncForImprovement(improvement) {
    try {
      console.log(`🔄 Integration: Triggering sync for ${improvement.type} improvements`);
      
      switch (improvement.type) {
        case 'pages':
          await this.syncPages(improvement.items);
          break;
        case 'components':
          await this.syncComponents(improvement.items);
          break;
        case 'content':
          await this.syncContent(improvement.items);
          break;
        default:
          console.log(`⚠️ Integration: Unknown improvement type: ${improvement.type}`);
      }
      
      // Update integration status
      this.integrationStatus.lastSync = new Date().toISOString();
      this.integrationStatus.syncCount++;
      
    } catch (error) {
      console.error(`❌ Integration: Error triggering sync for ${improvement.type}:`, error);
    }
  }

  async syncPages(pages) {
    console.log(`📄 Integration: Syncing ${pages.length} pages...`);
    
    for (const page of pages) {
      try {
        fs.copyFileSync(page.source, page.target);
        console.log(`✅ Integration: Synced page ${page.name}`);
        
        // Commit the change
        await this.commitChange(`Integration: Sync page ${page.name}`);
        
      } catch (error) {
        console.error(`❌ Integration: Failed to sync page ${page.name}:`, error);
      }
    }
  }

  async syncComponents(components) {
    console.log(`🧩 Integration: Syncing ${components.length} components...`);
    
    for (const component of components) {
      try {
        fs.copyFileSync(component.source, component.target);
        console.log(`✅ Integration: Synced component ${component.name}`);
        
        // Commit the change
        await this.commitChange(`Integration: Sync component ${component.name}`);
        
      } catch (error) {
        console.error(`❌ Integration: Failed to sync component ${component.name}:`, error);
      }
    }
  }

  async syncContent(contentItems) {
    console.log(`📝 Integration: Syncing ${contentItems.length} content items...`);
    
    for (const content of contentItems) {
      try {
        // Read and improve content
        const currentContent = fs.readFileSync(content.path, 'utf8');
        const improvedContent = this.improveContent(currentContent);
        
        if (improvedContent !== currentContent) {
          fs.writeFileSync(content.path, improvedContent);
          console.log(`✅ Integration: Improved content ${path.basename(content.path)}`);
          
          // Commit the change
          await this.commitChange(`Integration: Improve content ${path.basename(content.path)}`);
        }
        
      } catch (error) {
        console.error(`❌ Integration: Failed to sync content ${path.basename(content.path)}:`, error);
      }
    }
  }

  improveContent(content) {
    // Apply content improvements
    let improved = content;
    
    // Ensure proper markdown formatting
    improved = improved.replace(/\n{3,}/g, '\n\n');
    
    // Ensure proper heading structure
    improved = improved.replace(/^### (.*$)/gm, '## $1');
    
    // Ensure proper list formatting
    improved = improved.replace(/^\* (.*$)/gm, '- $1');
    
    return improved;
  }

  async commitChange(message) {
    try {
      const { execSync } = require('child_process');
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "${message}"`, { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`🚀 Integration: Committed change: ${message}`);
    } catch (error) {
      console.error('❌ Integration: Commit error:', error);
    }
  }

  logIntegrationEvent(eventType, data) {
    try {
      const logDir = path.join(__dirname, 'logs');
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      
      const logFile = path.join(logDir, 'frontend-sync-integration.log');
      const timestamp = new Date().toISOString();
      const logEntry = `[${timestamp}] [${eventType.toUpperCase()}] ${JSON.stringify(data)}\n`;
      
      fs.appendFileSync(logFile, logEntry);
      
    } catch (error) {
      console.error('❌ Error logging integration event:', error);
    }
  }

  saveIntegrationStatus(health) {
    try {
      const dataDir = path.join(__dirname, 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const statusFile = path.join(dataDir, 'frontend-sync-integration-status.json');
      const statusData = {
        integrationStatus: this.integrationStatus,
        health: health,
        timestamp: new Date().toISOString()
      };
      
      fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
      
    } catch (error) {
      console.error('❌ Error saving integration status:', error);
    }
  }

  async stop() {
    console.log('🛑 Stopping Frontend Sync Integration...');
    
    try {
      if (this.orchestrator) {
        await this.orchestrator.stopFrontendSyncOrchestration();
      }
      
      this.isIntegrated = false;
      this.integrationStatus.status = 'stopped';
      
      console.log('✅ Frontend Sync Integration stopped');
      
    } catch (error) {
      console.error('❌ Error stopping Frontend Sync Integration:', error);
      throw error;
    }
  }

  async getStatus() {
    if (!this.orchestrator) {
      return {
        status: 'not_integrated',
        integrationStatus: this.integrationStatus
      };
    }
    
    try {
      const health = await this.checkIntegrationHealth();
      
      return {
        status: this.isIntegrated ? 'integrated' : 'not_integrated',
        integrationStatus: this.integrationStatus,
        health: health
      };
      
    } catch (error) {
      console.error('❌ Error getting integration status:', error);
      return {
        status: 'error',
        integrationStatus: this.integrationStatus,
        error: error.message
      };
    }
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0] || 'start';
  
  const integrator = new FrontendSyncIntegrator();
  
  switch (command) {
    case 'start':
      integrator.integrateWithExistingSystem().then(() => {
        console.log('✅ Frontend Sync Integration started');
        // Keep the process running
        process.on('SIGTERM', async () => {
          console.log('🛑 Frontend Sync Integration received SIGTERM');
          await integrator.stop();
          process.exit(0);
        });
        process.on('SIGINT', async () => {
          console.log('🛑 Frontend Sync Integration received SIGINT');
          await integrator.stop();
          process.exit(0);
        });
      }).catch(error => {
        console.error('❌ Failed to start Frontend Sync Integration:', error);
        process.exit(1);
      });
      break;
      
    case 'stop':
      integrator.stop().then(() => {
        console.log('✅ Frontend Sync Integration stopped');
        process.exit(0);
      }).catch(error => {
        console.error('❌ Failed to stop Frontend Sync Integration:', error);
        process.exit(1);
      });
      break;
      
    case 'status':
      integrator.getStatus().then(status => {
        console.log('📊 Frontend Sync Integration Status:');
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      }).catch(error => {
        console.error('❌ Failed to get integration status:', error);
        process.exit(1);
      });
      break;
      
    default:
      console.log('Usage: node integrate-frontend-sync.js [start|stop|status]');
      process.exit(1);
  }
}

module.exports = FrontendSyncIntegrator; 