#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class GenericSyncAgent {
  constructor(agentId, type, config) {
    this.agentId = agentId;
    this.type = type;
    this.config = config;
    this.isRunning = false;
    this.metrics = {
      itemsSynced: 0,
      errors: 0,
      lastSync: null,
      startTime: new Date().toISOString()
    };
    
    this.syncInterval = config.syncInterval || 30000;
    this.projectRoot = process.cwd();
  }

  async start() {
    console.log(`🚀 Starting Generic Sync Agent ${this.agentId} (${this.type})`);
    this.isRunning = true;
    
    // Ensure directories exist
    this.ensureDirectories();
    
    // Start continuous sync loop
    this.startSyncLoop();
  }

  ensureDirectories() {
    const dirs = [
      path.join(this.projectRoot, 'pages'),
      path.join(this.projectRoot, 'components'),
      path.join(this.projectRoot, 'automation', 'generated-content'),
      path.join(this.projectRoot, 'automation', 'generated-pages'),
      path.join(this.projectRoot, 'automation', 'generated-components')
    ];
    
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  startSyncLoop() {
    console.log(`🔄 Generic Sync Agent ${this.agentId} starting sync loop...`);
    
    const syncLoop = async () => {
      if (!this.isRunning) return;
      
      try {
        await this.performSync();
        await this.sleep(this.syncInterval);
        syncLoop();
      } catch (error) {
        console.error(`❌ Generic Sync Agent ${this.agentId} error:`, error);
        this.metrics.errors++;
        await this.sleep(5000); // Wait 5 seconds on error
        syncLoop();
      }
    };
    
    syncLoop();
  }

  async performSync() {
    console.log(`🔄 Generic Sync Agent ${this.agentId} (${this.type}) performing sync...`);
    
    try {
      // Detect items to sync based on agent type
      const itemsToSync = await this.detectItemsToSync();
      
      if (itemsToSync.length === 0) {
        console.log(`🔄 Generic Sync Agent ${this.agentId} (${this.type}): No items to sync`);
        return;
      }
      
      console.log(`🔄 Generic Sync Agent ${this.agentId} (${this.type}) found ${itemsToSync.length} items to sync`);
      
      // Sync each item
      for (const item of itemsToSync) {
        await this.syncItem(item);
      }
      
      // Update metrics
      this.metrics.itemsSynced += itemsToSync.length;
      this.metrics.lastSync = new Date().toISOString();
      
      console.log(`✅ Generic Sync Agent ${this.agentId} (${this.type}) synced ${itemsToSync.length} items`);
      
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} (${this.type}) sync error:`, error);
      this.metrics.errors++;
      throw error;
    }
  }

  async detectItemsToSync() {
    const items = [];
    
    try {
      switch (this.type) {
        case 'api-sync':
          items.push(...await this.detectApiItems());
          break;
        case 'state-sync':
          items.push(...await this.detectStateItems());
          break;
        case 'auth-sync':
          items.push(...await this.detectAuthItems());
          break;
        case 'ui-sync':
          items.push(...await this.detectUIItems());
          break;
        case 'performance-sync':
          items.push(...await this.detectPerformanceItems());
          break;
        default:
          items.push(...await this.detectGenericItems());
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting items:`, error);
    }
    
    return items;
  }

  async detectApiItems() {
    const apiItems = [];
    
    try {
      // Check for new API endpoints
      const apiDir = path.join(this.projectRoot, 'pages', 'api');
      if (fs.existsSync(apiDir)) {
        const files = fs.readdirSync(apiDir);
        for (const file of files) {
          if (file.endsWith('.js') || file.endsWith('.ts')) {
            const filePath = path.join(apiDir, file);
            const lastModified = fs.statSync(filePath).mtime;
            const timeSinceModified = Date.now() - lastModified.getTime();
            
            if (timeSinceModified < 300000) { // 5 minutes
              apiItems.push({
                path: filePath,
                type: 'api-endpoint',
                lastModified: lastModified.toISOString()
              });
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting API items:`, error);
    }
    
    return apiItems;
  }

  async detectStateItems() {
    const stateItems = [];
    
    try {
      // Check for state management files
      const stateDirs = [
        path.join(this.projectRoot, 'src', 'contexts'),
        path.join(this.projectRoot, 'src', 'store'),
        path.join(this.projectRoot, 'utils')
      ];
      
      for (const stateDir of stateDirs) {
        if (fs.existsSync(stateDir)) {
          const files = this.getAllFiles(stateDir);
          for (const file of files) {
            if (file.includes('context') || file.includes('store') || file.includes('state')) {
              const lastModified = fs.statSync(file).mtime;
              const timeSinceModified = Date.now() - lastModified.getTime();
              
              if (timeSinceModified < 300000) { // 5 minutes
                stateItems.push({
                  path: file,
                  type: 'state-management',
                  lastModified: lastModified.toISOString()
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting state items:`, error);
    }
    
    return stateItems;
  }

  async detectAuthItems() {
    const authItems = [];
    
    try {
      // Check for authentication related files
      const authDirs = [
        path.join(this.projectRoot, 'pages', 'auth'),
        path.join(this.projectRoot, 'utils'),
        path.join(this.projectRoot, 'src', 'utils')
      ];
      
      for (const authDir of authDirs) {
        if (fs.existsSync(authDir)) {
          const files = this.getAllFiles(authDir);
          for (const file of files) {
            if (file.includes('auth') || file.includes('supabase')) {
              const lastModified = fs.statSync(file).mtime;
              const timeSinceModified = Date.now() - lastModified.getTime();
              
              if (timeSinceModified < 300000) { // 5 minutes
                authItems.push({
                  path: file,
                  type: 'auth-management',
                  lastModified: lastModified.toISOString()
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting auth items:`, error);
    }
    
    return authItems;
  }

  async detectUIItems() {
    const uiItems = [];
    
    try {
      // Check for UI related files
      const uiDirs = [
        path.join(this.projectRoot, 'components'),
        path.join(this.projectRoot, 'styles'),
        path.join(this.projectRoot, 'pages')
      ];
      
      for (const uiDir of uiDirs) {
        if (fs.existsSync(uiDir)) {
          const files = this.getAllFiles(uiDir);
          for (const file of files) {
            if (file.endsWith('.css') || file.endsWith('.scss') || file.includes('ui')) {
              const lastModified = fs.statSync(file).mtime;
              const timeSinceModified = Date.now() - lastModified.getTime();
              
              if (timeSinceModified < 300000) { // 5 minutes
                uiItems.push({
                  path: file,
                  type: 'ui-component',
                  lastModified: lastModified.toISOString()
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting UI items:`, error);
    }
    
    return uiItems;
  }

  async detectPerformanceItems() {
    const performanceItems = [];
    
    try {
      // Check for performance related files
      const performanceDirs = [
        path.join(this.projectRoot, 'pages'),
        path.join(this.projectRoot, 'components'),
        path.join(this.projectRoot, 'utils')
      ];
      
      for (const perfDir of performanceDirs) {
        if (fs.existsSync(perfDir)) {
          const files = this.getAllFiles(perfDir);
          for (const file of files) {
            if (file.includes('performance') || file.includes('optimization')) {
              const lastModified = fs.statSync(file).mtime;
              const timeSinceModified = Date.now() - lastModified.getTime();
              
              if (timeSinceModified < 300000) { // 5 minutes
                performanceItems.push({
                  path: file,
                  type: 'performance-optimization',
                  lastModified: lastModified.toISOString()
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting performance items:`, error);
    }
    
    return performanceItems;
  }

  async detectGenericItems() {
    const genericItems = [];
    
    try {
      // Check for any recently modified files
      const dirs = [
        path.join(this.projectRoot, 'pages'),
        path.join(this.projectRoot, 'components'),
        path.join(this.projectRoot, 'utils')
      ];
      
      for (const dir of dirs) {
        if (fs.existsSync(dir)) {
          const files = this.getAllFiles(dir);
          for (const file of files) {
            const lastModified = fs.statSync(file).mtime;
            const timeSinceModified = Date.now() - lastModified.getTime();
            
            if (timeSinceModified < 300000) { // 5 minutes
              genericItems.push({
                path: file,
                type: 'generic',
                lastModified: lastModified.toISOString()
              });
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} error detecting generic items:`, error);
    }
    
    return genericItems;
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

  async syncItem(item) {
    try {
      console.log(`🔄 Generic Sync Agent ${this.agentId} (${this.type}) syncing item: ${path.basename(item.path)}`);
      
      // Read the file content
      const content = fs.readFileSync(item.path, 'utf8');
      
      // Apply any improvements based on type
      const improvedContent = this.improveContent(content, item.type);
      
      // Write back if changed
      if (improvedContent !== content) {
        fs.writeFileSync(item.path, improvedContent);
        console.log(`✅ Generic Sync Agent ${this.agentId} (${this.type}) improved item: ${path.basename(item.path)}`);
      }
      
      // Auto-commit if enabled
      if (this.config.autoCommit) {
        await this.commitItemSync(path.basename(item.path));
      }
      
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} (${this.type}) failed to sync item:`, error);
      throw error;
    }
  }

  improveContent(content, type) {
    let improved = content;
    
    switch (type) {
      case 'api-endpoint':
        improved = this.improveApiContent(content);
        break;
      case 'state-management':
        improved = this.improveStateContent(content);
        break;
      case 'auth-management':
        improved = this.improveAuthContent(content);
        break;
      case 'ui-component':
        improved = this.improveUIContent(content);
        break;
      case 'performance-optimization':
        improved = this.improvePerformanceContent(content);
        break;
      default:
        improved = this.improveGenericContent(content);
    }
    
    return improved;
  }

  improveApiContent(content) {
    // Add error handling and validation
    let improved = content;
    
    if (!improved.includes('try {') && !improved.includes('catch')) {
      improved = improved.replace(
        /export default async function handler\(req, res\) {/,
        `export default async function handler(req, res) {
  try {`
      );
      improved = improved.replace(
        /res\.json\(/g,
        `  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
  
  res.json(`
      );
    }
    
    return improved;
  }

  improveStateContent(content) {
    // Add proper TypeScript types and error handling
    let improved = content;
    
    if (!improved.includes('interface') && improved.includes('useState')) {
      improved = improved.replace(
        /const \[([^,]+), set([^\]]+)\] = useState\(/g,
        `interface ${content.match(/export default function ([^{]+)/)?.[1] || 'Component'}State {
  // Add your state types here
}

const [state, setState] = useState<${content.match(/export default function ([^{]+)/)?.[1] || 'Component'}State>(`
      );
    }
    
    return improved;
  }

  improveAuthContent(content) {
    // Add proper authentication error handling
    let improved = content;
    
    if (!improved.includes('try {') && improved.includes('supabase')) {
      improved = improved.replace(
        /const \{ data, error \} = await supabase\./g,
        `try {
    const { data, error } = await supabase.`
      );
      improved = improved.replace(
        /if \(error\) throw error;/g,
        `if (error) {
      console.error('Auth Error:', error);
      throw error;
    }
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }`
      );
    }
    
    return improved;
  }

  improveUIContent(content) {
    // Add responsive design and accessibility
    let improved = content;
    
    if (!improved.includes('className') && improved.includes('div')) {
      improved = improved.replace(
        /<div>/g,
        `<div className="w-full">`
      );
    }
    
    if (!improved.includes('aria-label') && improved.includes('button')) {
      improved = improved.replace(
        /<button>/g,
        `<button aria-label="Button">`
      );
    }
    
    return improved;
  }

  improvePerformanceContent(content) {
    // Add performance optimizations
    let improved = content;
    
    if (!improved.includes('React.memo') && improved.includes('export default function')) {
      improved = improved.replace(
        /export default function ([^{]+)/g,
        `const $1 = React.memo(function $1`
      );
      improved = improved.replace(
        /export default ([^{]+);/g,
        `export default React.memo($1);`
      );
    }
    
    return improved;
  }

  improveGenericContent(content) {
    // Generic improvements
    let improved = content;
    
    // Remove extra whitespace
    improved = improved.replace(/\n{3,}/g, '\n\n');
    
    // Ensure proper semicolons
    improved = improved.replace(/([^;])\n/g, '$1;\n');
    
    return improved;
  }

  async commitItemSync(itemName) {
    try {
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "Auto-sync ${this.type}: ${itemName}"`, { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`🚀 Generic Sync Agent ${this.agentId} (${this.type}) committed sync: ${itemName}`);
    } catch (error) {
      console.error(`❌ Generic Sync Agent ${this.agentId} (${this.type}) commit error:`, error);
    }
  }

  async stop() {
    console.log(`🛑 Stopping Generic Sync Agent ${this.agentId} (${this.type})`);
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

  const agent = new GenericSyncAgent(agentId, type, config);
  
  // Handle graceful shutdown
  process.on('SIGTERM', async () => {
    console.log(`🛑 Generic Sync Agent ${agentId} received SIGTERM`);
    await agent.stop();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    console.log(`🛑 Generic Sync Agent ${agentId} received SIGINT`);
    await agent.stop();
    process.exit(0);
  });

  agent.start().catch(error => {
    console.error(`❌ Generic Sync Agent ${agentId} failed to start:`, error);
    process.exit(1);
  });
}

module.exports = GenericSyncAgent; 