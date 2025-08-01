#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PageSyncAgent {
  constructor(agentId, type, config) {
    this.agentId = agentId;
    this.type = type;
    this.config = config;
    this.isRunning = false;
    this.metrics = {
      pagesSynced: 0,
      errors: 0,
      lastSync: null,
      startTime: new Date().toISOString()
    };
    
    this.pagesDir = path.join(process.cwd(), 'pages');
    this.generatedPagesDir = path.join(process.cwd(), 'automation', 'generated-pages');
    this.syncInterval = config.syncInterval || 30000;
  }

  async start() {
    console.log(`🚀 Starting Page Sync Agent ${this.agentId}`);
    this.isRunning = true;
    
    // Ensure directories exist
    this.ensureDirectories();
    
    // Start continuous sync loop
    this.startSyncLoop();
  }

  ensureDirectories() {
    const dirs = [this.pagesDir, this.generatedPagesDir];
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    }
  }

  startSyncLoop() {
    console.log(`🔄 Page Sync Agent ${this.agentId} starting sync loop...`);
    
    const syncLoop = async () => {
      if (!this.isRunning) return;
      
      try {
        await this.performPageSync();
        await this.sleep(this.syncInterval);
        syncLoop();
      } catch (error) {
        console.error(`❌ Page Sync Agent ${this.agentId} error:`, error);
        this.metrics.errors++;
        await this.sleep(5000); // Wait 5 seconds on error
        syncLoop();
      }
    };
    
    syncLoop();
  }

  async performPageSync() {
    console.log(`📄 Page Sync Agent ${this.agentId} performing sync...`);
    
    try {
      // Detect new pages
      const newPages = await this.detectNewPages();
      
      if (newPages.length === 0) {
        console.log(`📄 Page Sync Agent ${this.agentId}: No new pages to sync`);
        return;
      }
      
      console.log(`📄 Page Sync Agent ${this.agentId} found ${newPages.length} new pages`);
      
      // Sync each page
      for (const page of newPages) {
        await this.syncPage(page);
      }
      
      // Update metrics
      this.metrics.pagesSynced += newPages.length;
      this.metrics.lastSync = new Date().toISOString();
      
      console.log(`✅ Page Sync Agent ${this.agentId} synced ${newPages.length} pages`);
      
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} sync error:`, error);
      this.metrics.errors++;
      throw error;
    }
  }

  async detectNewPages() {
    const newPages = [];
    
    try {
      // Check generated pages directory
      if (fs.existsSync(this.generatedPagesDir)) {
        const files = fs.readdirSync(this.generatedPagesDir);
        for (const file of files) {
          if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            const sourcePath = path.join(this.generatedPagesDir, file);
            const targetPath = path.join(this.pagesDir, file);
            
            if (!fs.existsSync(targetPath)) {
              newPages.push({
                source: sourcePath,
                target: targetPath,
                name: file,
                type: 'generated'
              });
            }
          }
        }
      }
      
      // Check for dynamic pages from content generation
      const dynamicPages = await this.detectDynamicPages();
      newPages.push(...dynamicPages);
      
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} error detecting pages:`, error);
    }
    
    return newPages;
  }

  async detectDynamicPages() {
    const dynamicPages = [];
    
    try {
      // Check generated content directory for page definitions
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      if (fs.existsSync(generatedContentDir)) {
        const files = fs.readdirSync(generatedContentDir);
        for (const file of files) {
          if (file.endsWith('.json')) {
            const contentPath = path.join(generatedContentDir, file);
            const content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
            
            if (content.type === 'page' && content.status === 'pending') {
              const pageContent = this.generatePageContent(content);
              const targetPath = path.join(this.pagesDir, `${content.slug}.tsx`);
              
              if (!fs.existsSync(targetPath)) {
                dynamicPages.push({
                  content: pageContent,
                  target: targetPath,
                  name: `${content.slug}.tsx`,
                  type: 'dynamic',
                  metadata: content
                });
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} error detecting dynamic pages:`, error);
    }
    
    return dynamicPages;
  }

  generatePageContent(pageData) {
    const { title, description, content, slug, layout = 'default' } = pageData;
    
    return `import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

interface ${title.replace(/\s+/g, '')}PageProps {
  // Add your props here
}

const ${title.replace(/\s+/g, '')}Page: NextPage<${title.replace(/\s+/g, '')}PageProps> = () => {
  return (
    <>
      <Head>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ${title}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            ${content}
          </div>
        </div>
      </main>
    </>
  );
};

export default ${title.replace(/\s+/g, '')}Page;
`;
  }

  async syncPage(page) {
    try {
      console.log(`📄 Page Sync Agent ${this.agentId} syncing page: ${page.name}`);
      
      if (page.type === 'generated') {
        // Copy file from source to target
        fs.copyFileSync(page.source, page.target);
        console.log(`✅ Page Sync Agent ${this.agentId} copied page: ${page.name}`);
      } else if (page.type === 'dynamic') {
        // Write generated content to target
        fs.writeFileSync(page.target, page.content);
        console.log(`✅ Page Sync Agent ${this.agentId} generated page: ${page.name}`);
        
        // Update metadata status
        if (page.metadata) {
          await this.updatePageStatus(page.metadata, 'synced');
        }
      }
      
      // Auto-commit if enabled
      if (this.config.autoCommit) {
        await this.commitPageSync(page.name);
      }
      
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} failed to sync page ${page.name}:`, error);
      throw error;
    }
  }

  async updatePageStatus(pageData, status) {
    try {
      const generatedContentDir = path.join(process.cwd(), 'automation', 'generated-content');
      const metadataFile = path.join(generatedContentDir, `${pageData.slug}-metadata.json`);
      
      const updatedData = {
        ...pageData,
        status: status,
        syncedAt: new Date().toISOString()
      };
      
      fs.writeFileSync(metadataFile, JSON.stringify(updatedData, null, 2));
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} error updating page status:`, error);
    }
  }

  async commitPageSync(pageName) {
    try {
      execSync('git add .', { stdio: 'pipe' });
      execSync(`git commit -m "Auto-sync page: ${pageName}"`, { stdio: 'pipe' });
      execSync('git push', { stdio: 'pipe' });
      console.log(`🚀 Page Sync Agent ${this.agentId} committed page sync: ${pageName}`);
    } catch (error) {
      console.error(`❌ Page Sync Agent ${this.agentId} commit error:`, error);
    }
  }

  async stop() {
    console.log(`🛑 Stopping Page Sync Agent ${this.agentId}`);
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

  const agent = new PageSyncAgent(agentId, type, config);
  
  // Handle graceful shutdown
  process.on('SIGTERM', async () => {
    console.log(`🛑 Page Sync Agent ${agentId} received SIGTERM`);
    await agent.stop();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    console.log(`🛑 Page Sync Agent ${agentId} received SIGINT`);
    await agent.stop();
    process.exit(0);
  });

  agent.start().catch(error => {
    console.error(`❌ Page Sync Agent ${agentId} failed to start:`, error);
    process.exit(1);
  });
}

module.exports = PageSyncAgent; 