#!/usr/bin/env node

'use strict';

/*
  Cursor Autonomous Content Orchestrator
  - Crawls https://ziontechgroup.com to identify content gaps
  - Generates intelligent prompts for Cursor background agents
  - Orchestrates autonomous content completion
  - Maintains continuous improvement cycles
  - Integrates with existing cloud factories and automation systems

  Environment Variables:
  - CURSOR_API_KEY: API key for Cursor agent communication
  - CANONICAL_URL: Base URL to crawl (defaults to https://ziontechgroup.com)
  - MAX_CONCURRENT_AGENTS: Maximum concurrent Cursor agent tasks (default: 5)
  - CONTENT_GENERATION_BUDGET: Daily budget for content generation (default: $10)
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_BASE_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const CURSOR_API_BASE = 'https://cursor.com/api/agents';
const MAX_CONCURRENT_AGENTS = parseInt(process.env.MAX_CONCURRENT_AGENTS || '5');
const CONTENT_GENERATION_BUDGET = parseFloat(process.env.CONTENT_GENERATION_BUDGET || '10.00');

class CursorAutonomousOrchestrator {
  constructor() {
    this.baseUrl = DEFAULT_BASE_URL;
    this.logsDir = path.join(process.cwd(), 'automation', 'logs');
    this.cursorDir = path.join(process.cwd(), 'automation', 'cursor-agents');
    this.contentRegistryPath = path.join(process.cwd(), 'public', 'automation', 'content-registry.json');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir, this.cursorDir].forEach(dir => {
      fs.mkdirSync(dir, { recursive: true });
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.logsDir, 'cursor-autonomous-orchestrator.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async crawlSiteForContentGaps() {
    this.log('Starting site crawl for content gap analysis...');
    
    try {
      // Run existing cloud crawlers
      this.runCommand('node', ['automation/cloud-site-crawler.cjs']);
      this.runCommand('node', ['automation/cloud-dossier-crawler.cjs']);
      
      // Analyze crawl results for gaps
      const gaps = this.analyzeContentGaps();
      this.log(`Identified ${gaps.length} content gaps`);
      
      return gaps;
    } catch (error) {
      this.log(`Error during site crawl: ${error.message}`, 'ERROR');
      return [];
    }
  }

  analyzeContentGaps() {
    const gaps = [];
    
    try {
      // Read latest crawl results
      const crawlLogs = this.getLatestCrawlLogs();
      
      // Analyze existing content structure
      const existingContent = this.analyzeExistingContent();
      
      // Identify missing content types
      const missingTypes = this.identifyMissingContentTypes(existingContent);
      
      // Analyze content depth and quality
      const qualityGaps = this.analyzeContentQuality(crawlLogs);
      
      // Generate gap analysis
      gaps.push(...missingTypes, ...qualityGaps);
      
    } catch (error) {
      this.log(`Error analyzing content gaps: ${error.message}`, 'ERROR');
    }
    
    return gaps;
  }

  getLatestCrawlLogs() {
    const logsDir = this.logsDir;
    const files = fs.readdirSync(logsDir)
      .filter(f => f.startsWith('cloud-') && f.endsWith('.json'))
      .sort()
      .reverse();
    
    if (files.length === 0) return [];
    
    const latest = path.join(logsDir, files[0]);
    try {
      return JSON.parse(fs.readFileSync(latest, 'utf8'));
    } catch {
      return [];
    }
  }

  analyzeExistingContent() {
    const content = {
      pages: 0,
      reports: 0,
      updates: 0,
      insights: 0,
      patterns: 0,
      guides: 0,
      cases: 0,
      blueprints: 0,
      playbooks: 0,
      dossiers: 0
    };
    
    try {
      const reportsDir = path.join(process.cwd(), 'pages', 'reports');
      if (fs.existsSync(reportsDir)) {
        const categories = fs.readdirSync(reportsDir);
        categories.forEach(category => {
          const categoryPath = path.join(reportsDir, category);
          if (fs.statSync(categoryPath).isDirectory()) {
            const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.tsx'));
            content[category] = files.length;
            content.reports += files.length;
          }
        });
      }
      
      const pagesDir = path.join(process.cwd(), 'pages');
      if (fs.existsSync(pagesDir)) {
        const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));
        content.pages = files.length;
      }
    } catch (error) {
      this.log(`Error analyzing existing content: ${error.message}`, 'ERROR');
    }
    
    return content;
  }

  identifyMissingContentTypes(existingContent) {
    const gaps = [];
    const targetContent = {
      updates: 100,
      insights: 50,
      patterns: 75,
      guides: 100,
      cases: 75,
      blueprints: 50,
      playbooks: 50,
      dossiers: 25
    };
    
    Object.entries(targetContent).forEach(([type, target]) => {
      const current = existingContent[type] || 0;
      if (current < target) {
        gaps.push({
          type: 'missing_content',
          category: type,
          current,
          target,
          priority: target - current,
          description: `Need ${target - current} more ${type} pages`
        });
      }
    });
    
    return gaps;
  }

  analyzeContentQuality(crawlLogs) {
    const gaps = [];
    
    try {
      if (crawlLogs.results && Array.isArray(crawlLogs.results)) {
        crawlLogs.results.forEach(result => {
          if (result.text && result.text.length < 500) {
            gaps.push({
              type: 'content_quality',
              url: result.url,
              currentLength: result.text.length,
              targetLength: 1000,
              priority: 3,
              description: `Content too short (${result.text.length} chars), needs expansion`
            });
          }
        });
      }
    } catch (error) {
      this.log(`Error analyzing content quality: ${error.message}`, 'ERROR');
    }
    
    return gaps;
  }

  generateCursorAgentPrompts(gaps) {
    this.log('Generating Cursor agent prompts for content completion...');
    
    const prompts = [];
    
    gaps.forEach((gap, index) => {
      const prompt = this.createCursorPrompt(gap, index);
      prompts.push(prompt);
    });
    
    // Save prompts for Cursor agents
    this.saveCursorPrompts(prompts);
    
    return prompts;
  }

  createCursorPrompt(gap, index) {
    const basePrompt = `You are a content generation agent for Zion Tech Group (https://ziontechgroup.com).

TASK: Complete missing content based on the following gap analysis:

GAP TYPE: ${gap.type}
CATEGORY: ${gap.category || 'N/A'}
PRIORITY: ${gap.priority}
DESCRIPTION: ${gap.description}

REQUIREMENTS:
- Create high-quality, SEO-optimized content
- Follow the existing site's design patterns and tone
- Include relevant keywords and internal links
- Ensure content is valuable and actionable
- Maintain consistency with existing content structure

CONTEXT:
- Site: https://ziontechgroup.com
- Technology focus: AI, cloud computing, automation, digital transformation
- Target audience: Business leaders, developers, IT professionals
- Content style: Professional, informative, forward-thinking

Please generate the missing content and provide it in a format that can be directly integrated into the site.`;

    return {
      id: `cursor-prompt-${Date.now()}-${index}`,
      gap,
      prompt: basePrompt,
      status: 'pending',
      createdAt: new Date().toISOString(),
      priority: gap.priority
    };
  }

  saveCursorPrompts(prompts) {
    const promptsFile = path.join(this.cursorDir, 'pending-prompts.json');
    fs.writeFileSync(promptsFile, JSON.stringify(prompts, null, 2));
    this.log(`Saved ${prompts.length} Cursor agent prompts`);
  }

  async dispatchToCursorAgents(prompts) {
    this.log('Dispatching prompts to Cursor background agents...');
    
    // Sort by priority
    const sortedPrompts = prompts.sort((a, b) => b.priority - a.priority);
    
    // Process in batches to respect concurrency limits
    const batches = this.chunkArray(sortedPrompts, MAX_CONCURRENT_AGENTS);
    
    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];
      this.log(`Processing batch ${i + 1}/${batches.length} with ${batch.length} prompts`);
      
      await Promise.all(batch.map(prompt => this.sendToCursorAgent(prompt)));
      
      // Small delay between batches
      if (i < batches.length - 1) {
        await this.sleep(2000);
      }
    }
  }

  async sendToCursorAgent(prompt) {
    try {
      // Simulate sending to Cursor agent (replace with actual API call)
      this.log(`Sending prompt ${prompt.id} to Cursor agent`);
      
      // Update prompt status
      prompt.status = 'sent';
      prompt.sentAt = new Date().toISOString();
      
      // Save updated status
      this.updatePromptStatus(prompt);
      
      // Simulate agent processing time
      await this.sleep(1000 + Math.random() * 2000);
      
      return { success: true, promptId: prompt.id };
    } catch (error) {
      this.log(`Error sending prompt to Cursor agent: ${error.message}`, 'ERROR');
      prompt.status = 'failed';
      prompt.error = error.message;
      this.updatePromptStatus(prompt);
      return { success: false, promptId: prompt.id, error: error.message };
    }
  }

  updatePromptStatus(prompt) {
    const promptsFile = path.join(this.cursorDir, 'pending-prompts.json');
    try {
      const prompts = JSON.parse(fs.readFileSync(promptsFile, 'utf8'));
      const index = prompts.findIndex(p => p.id === prompt.id);
      if (index !== -1) {
        prompts[index] = prompt;
        fs.writeFileSync(promptsFile, JSON.stringify(prompts, null, 2));
      }
    } catch (error) {
      this.log(`Error updating prompt status: ${error.message}`, 'ERROR');
    }
  }

  chunkArray(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  runCommand(command, args, options = {}) {
    const result = spawnSync(command, args, {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: process.env,
      ...options
    });
    
    if (result.status !== 0) {
      this.log(`Command failed: ${command} ${args.join(' ')}`, 'WARN');
    }
    
    return result.status === 0;
  }

  async orchestrateContentGeneration() {
    this.log('Starting content generation orchestration...');
    
    try {
      // 1. Crawl site for content gaps
      const gaps = await this.crawlSiteForContentGaps();
      
      if (gaps.length === 0) {
        this.log('No content gaps identified. Site appears complete.');
        return;
      }
      
      // 2. Generate Cursor agent prompts
      const prompts = this.generateCursorAgentPrompts(gaps);
      
      // 3. Dispatch to Cursor agents
      await this.dispatchToCursorAgents(prompts);
      
      // 4. Trigger existing content factories
      this.triggerContentFactories();
      
      // 5. Update content registry
      this.updateContentRegistry();
      
      // 6. Commit and push changes
      this.runCommand('node', ['automation/git-sync.cjs']);
      
      this.log('Content generation orchestration completed successfully');
      
    } catch (error) {
      this.log(`Error during content generation orchestration: ${error.message}`, 'ERROR');
    }
  }

  triggerContentFactories() {
    this.log('Triggering existing content factories...');
    
    const factories = [
      'cloud-content-factory.cjs',
      'cloud-deep-research-factory.cjs',
      'cloud-playbook-factory.cjs',
      'cloud-blueprint-factory.cjs',
      'cloud-dossier-factory.cjs',
      'ai-content-factory.cjs'
    ];
    
    factories.forEach(factory => {
      try {
        this.runCommand('node', [`automation/${factory}`]);
      } catch (error) {
        this.log(`Error running factory ${factory}: ${error.message}`, 'WARN');
      }
    });
  }

  updateContentRegistry() {
    try {
      const registryPath = this.contentRegistryPath;
      let registry = { items: [] };
      
      if (fs.existsSync(registryPath)) {
        registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
      }
      
      // Add autonomous content entries
      const now = new Date().toISOString();
      registry.items.unshift({
        title: 'Autonomous Content Generation',
        href: '/automation',
        desc: 'AI-powered content completion via Cursor agents',
        createdAt: now,
        source: 'cursor-autonomous-orchestrator'
      });
      
      // Keep registry manageable
      registry.items = registry.items.slice(0, 100);
      
      fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
      this.log('Updated content registry');
      
    } catch (error) {
      this.log(`Error updating content registry: ${error.message}`, 'ERROR');
    }
  }

  async runContinuousMode() {
    this.log('Starting continuous autonomous content generation mode...');
    
    const intervalMs = 15 * 60 * 1000; // 15 minutes
    
    while (true) {
      try {
        await this.orchestrateContentGeneration();
        this.log(`Waiting ${intervalMs / 1000 / 60} minutes until next cycle...`);
        await this.sleep(intervalMs);
      } catch (error) {
        this.log(`Error in continuous mode: ${error.message}`, 'ERROR');
        await this.sleep(5 * 60 * 1000); // Wait 5 minutes on error
      }
    }
  }
}

async function main() {
  const orchestrator = new CursorAutonomousOrchestrator();
  
  const mode = process.argv[2] || 'single';
  
  if (mode === 'continuous') {
    await orchestrator.runContinuousMode();
  } else {
    await orchestrator.orchestrateContentGeneration();
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { CursorAutonomousOrchestrator };
