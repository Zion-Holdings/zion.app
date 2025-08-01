#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComponentSyncAgent {
  constructor(agentId, type, config) {
    this.agentId = agentId;
    this.type = type;
    this.config = config;
    this.isRunning = false;
    this.metrics = {
      componentsSynced: 0,
      errors: 0,
      lastSync: null,
      startTime: new Date().toISOString()
    };
    
    this.componentsDir = path.join(process.cwd(), 'components');
    this.generatedComponentsDir = path.join(process.cwd(), 'automation', 'generated-components');
    this.syncInterval = config.syncInterval || 20000;
  }

  async start() {
    console.log(`🚀 Starting Component Sync Agent ${this.agentId}`);
    this.isRunning = true;
    
    // Ensure directories exist
    this.ensureDirectories();
    
    // Start continuous sync loop
    this.startSyncLoop();
  }

  ensureDirectories() {
    const dirs = [this.componentsDir, this.generatedComponentsDir];
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  startSyncLoop() {
    console.log(`🔄 Component Sync Agent ${this.agentId} starting sync loop...`);
    
    const syncLoop = async () => {
      if (!this.isRunning) return;
      
      try {
        await this.performComponentSync();
        await this.sleep(this.syncInterval);
        syncLoop();
      } catch (error) {
        console.error(`❌ Component Sync Agent ${this.agentId} error:`, error);
        this.metrics.errors++;
        await this.sleep(5000); // Wait 5 seconds on error
        syncLoop();
      }
    };
    
    syncLoop();
  }

  async performComponentSync() {
    console.log(`🧩 Component Sync Agent ${this.agentId} performing sync...`);
    
    try {
      // Detect new components
      const newComponents = await this.detectNewComponents();
      
      if (newComponents.length === 0) {
        console.log(`🧩 Component Sync Agent ${this.agentId}: No new components to sync`);
        return;
      }
      
      console.log(`🧩 Component Sync Agent ${this.agentId} found ${newComponents.length} new components`);
      
      // Sync each component
      for (const component of newComponents) {
        await this.syncComponent(component);
      }
      
      // Update metrics
      this.metrics.componentsSynced += newComponents.length;
      this.metrics.lastSync = new Date().toISOString();
      
      console.log(`✅ Component Sync Agent ${this.agentId} synced ${newComponents.length} components`);
      
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} sync error:`, error);
      this.metrics.errors++;
      throw error;
    }
  }

  async detectNewComponents() {
    const newComponents = [];
    
    try {
      // Check generated components directory
      if (fs.existsSync(this.generatedComponentsDir)) {
        const files = fs.readdirSync(this.generatedComponentsDir);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const sourcePath = path.join(this.generatedComponentsDir, file);
            const targetPath = path.join(this.componentsDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newComponents.push({
                source: sourcePath,
                target: targetPath,
                name: file,
                type: 'generated'
              });
            }
          }
        }
      }
      
      // Check for dynamic components from content generation
      const dynamicComponents = await this.detectDynamicComponents();
      newComponents.push(...dynamicComponents);
      
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} error detecting components:`, error);
    }
    
    return newComponents;
  }

  async detectDynamicComponents() {
    const dynamicComponents = [];
    
    try {
      // Check generated content directory for component definitions
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      if (fs.existsSync(generatedContentDir)) {
        const files = fs.readdirSync(generatedContentDir);
        for (const file of files) {
          if (file.endsWith('.json')) {
            const contentPath = path.join(generatedContentDir, file);
            const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
            
            if (content.type === 'component' && content.status === 'pending') {
              const componentContent = this.generateComponentContent(content);
              const targetPath = path.join(this.componentsDir, `${content.name}.tsx`);
              
              if (!fs.existsSync(targetPath)) {
                dynamicComponents.push({
                  content: componentContent,
                  target: targetPath,
                  name: `${content.name}.tsx`,
                  type: 'dynamic',
                  metadata: content
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} error detecting dynamic components:`, error);
    }
    
    return dynamicComponents;
  }

  generateComponentContent(componentData) {
    const { name, props = [], children, style, className = '' } = componentData;
    
    const propsInterface = props.length > 0 
      ? `interface ${name}Props {
  ${props.map(prop => `${prop.name}${prop.optional ? '?' : ''}: ${prop.type};`).join('\n  ')}
}`
      : `interface ${name}Props {}`;

    const propsDestructuring = props.length > 0 
      ? `{ ${props.map(prop => prop.name).join(', ')} }`
      : '{}';

    const childrenProp = children ? ', children' : '';
    const childrenDestructuring = children ? ', children' : '';

    return `import React from 'react';

${propsInterface}

const ${name}: React.FC<${name}Props> = (${propsDestructuring}${childrenDestructuring}) => {
  return (
    <div className="${className}" style={${JSON.stringify(style || {})}}>
      ${children || ''}
    </div>
  );
};

export default ${name};
`;
  }

  async syncComponent(component) {
    try {
      console.log(`🧩 Component Sync Agent ${this.agentId} syncing component: ${component.name}`);
      
      if (component.type === 'generated') {
        // Copy file from source to target
        fs.copyFileSync(component.source, component.target);
        console.log(`✅ Component Sync Agent ${this.agentId} copied component: ${component.name}`);
      } else if (component.type === 'dynamic') {
        // Write generated content to target
        fs.writeFileSync(component.target, component.content);
        console.log(`✅ Component Sync Agent ${this.agentId} generated component: ${component.name}`);
        
        // Update metadata status
        if (component.metadata) {
          await this.updateComponentStatus(component.metadata, 'synced');
        }
      }
      
      // Auto-commit if enabled
      if (this.config.autoCommit) {
        await this.commitComponentSync(component.name);
      }
      
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} failed to sync component ${component.name}:`, error);
      throw error;
    }
  }

  async updateComponentStatus(componentData, status) {
    try {
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      const metadataFile = path.join(generatedContentDir, `${componentData.name}-metadata.json`);
      
      const updatedData = {
        ...componentData,
        status: status,
        syncedAt: new Date().toISOString()
      };
      
      fs.writeFileSync(metadataFile, JSON.stringify(updatedData, null, 2));
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} error updating component status:`, error);
    }
  }

  async commitComponentSync(componentName) {
    try {
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "Auto-sync component: ${componentName}"`, { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`🚀 Component Sync Agent ${this.agentId} committed component sync: ${componentName}`);
    } catch (error) {
      console.error(`❌ Component Sync Agent ${this.agentId} commit error:`, error);
    }
  }

  async stop() {
    console.log(`🛑 Stopping Component Sync Agent ${this.agentId}`);
    this.isRunning = false;
  }

  getMetrics() {
    return {
      agentId: this.agentId,
      type: this.type,
      isRunning: this.isRunning,
      metrics: this.metrics,
      uptime: this.metrics.startTime ? Date.now() - new Date(this.metrics.startTime).getTime() : 0
    };
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const agentId = args[args.indexOf('--agent-id') + 1];
  const type = args[args.indexOf('--type') + 1];
  const configArg = args[args.indexOf('--config') + 1];
  const config = JSON.parse(configArg || '{}');

  const agent = new ComponentSyncAgent(agentId, type, config);
  
  // Handle graceful shutdown
  process.on('SIGTERM', async () => {
    console.log(`🛑 Component Sync Agent ${agentId} received SIGTERM`);
    await agent.stop();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    console.log(`🛑 Component Sync Agent ${agentId} received SIGINT`);
    await agent.stop();
    process.exit(0);
  });

  agent.start().catch(error => {
    console.error(`❌ Component Sync Agent ${agentId} failed to start:`, error);
    process.exit(1);
  });
}

module.exports = ComponentSyncAgent; 