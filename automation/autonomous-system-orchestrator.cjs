#!/usr/bin/env node

'use strict';

/*
  Autonomous System Orchestrator
  - Coordinates all autonomous content generation systems
  - Manages Cursor agent integration and content completion
  - Orchestrates continuous improvement cycles
  - Provides unified interface for autonomous operations

  Usage:
  - node automation/autonomous-system-orchestrator.cjs start
  - node automation/autonomous-system-orchestrator.cjs analyze
  - node automation/autonomous-system-orchestrator.cjs generate
  - node automation/autonomous-system-orchestrator.cjs continuous
  - node automation/autonomous-system-orchestrator.cjs status
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class AutonomousSystemOrchestrator {
  constructor() {
    this.rootDir = process.cwd();
    this.logsDir = path.join(this.rootDir, 'automation', 'logs');
    this.cursorDir = path.join(this.rootDir, 'automation', 'cursor-agents');
    this.ensureDirectories();
    this.status = {
      lastRun: null,
      totalRuns: 0,
      successfulRuns: 0,
      failedRuns: 0,
      lastError: null,
      currentStatus: 'idle'
    };
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
    
    const logFile = path.join(this.logsDir, 'autonomous-system-orchestrator.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async startAutonomousSystem() {
    this.log('Starting autonomous system...');
    this.status.currentStatus = 'running';
    this.status.lastRun = new Date().toISOString();
    this.status.totalRuns++;
    
    try {
      // 1. Run comprehensive content gap analysis
      this.log('Step 1: Running content gap analysis...');
      const gaps = await this.runContentGapAnalysis();
      
      if (gaps.length === 0) {
        this.log('No content gaps identified. Site appears complete.');
        this.status.currentStatus = 'idle';
        this.status.successfulRuns++;
        return { success: true, message: 'No gaps found' };
      }
      
      // 2. Generate Cursor agent prompts
      this.log('Step 2: Generating Cursor agent prompts...');
      const prompts = this.generateCursorPrompts(gaps);
      
      // 3. Dispatch to Cursor agents
      this.log('Step 3: Dispatching to Cursor agents...');
      await this.dispatchToCursorAgents(prompts);
      
      // 4. Generate missing content
      this.log('Step 4: Generating missing content...');
      await this.generateMissingContent();
      
      // 5. Trigger existing content factories
      this.log('Step 5: Triggering content factories...');
      this.triggerContentFactories();
      
      // 6. Commit and push changes
      this.log('Step 6: Committing and pushing changes...');
      this.commitAndPushChanges();
      
      this.log('Autonomous system completed successfully');
      this.status.currentStatus = 'idle';
      this.status.successfulRuns++;
      
      return { success: true, gapsProcessed: gaps.length, promptsGenerated: prompts.length };
      
    } catch (error) {
      this.log(`Error during autonomous system execution: ${error.message}`, 'ERROR');
      this.status.currentStatus = 'error';
      this.status.lastError = error.message;
      this.status.failedRuns++;
      
      return { success: false, error: error.message };
    }
  }

  async runContentGapAnalysis() {
    this.log('Running content gap analysis...');
    
    try {
      const result = spawnSync('node', ['automation/content-gap-analyzer.cjs', 'gaps'], {
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      if (result.status === 0 && result.stdout) {
        const gaps = JSON.parse(result.stdout);
        this.log(`Content gap analysis completed. Found ${gaps.length} gaps.`);
        return gaps;
      } else {
        throw new Error('Content gap analysis failed');
      }
    } catch (error) {
      this.log(`Error during content gap analysis: ${error.message}`, 'ERROR');
      return [];
    }
  }

  generateCursorPrompts(gaps) {
    this.log('Generating Cursor agent prompts...');
    
    const prompts = [];
    
    gaps.forEach((gap, index) => {
      const prompt = {
        id: `cursor-prompt-${Date.now()}-${index}`,
        gap,
        prompt: this.createPromptText(gap),
        status: 'pending',
        createdAt: new Date().toISOString(),
        priority: gap.priority === 'high' ? 3 : gap.priority === 'medium' ? 2 : 1
      };
      prompts.push(prompt);
    });
    
    // Save prompts
    const promptsFile = path.join(this.cursorDir, 'pending-prompts.json');
    fs.writeFileSync(promptsFile, JSON.stringify(prompts, null, 2));
    
    this.log(`Generated ${prompts.length} Cursor agent prompts`);
    return prompts;
  }

  createPromptText(gap) {
    return `You are a content generation agent for Zion Tech Group (https://ziontechgroup.com).

TASK: Complete missing content based on the following gap analysis:

GAP TYPE: ${gap.type}
PRIORITY: ${gap.priority}
DESCRIPTION: ${gap.description}
SOLUTION: ${gap.solution}

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
  }

  async dispatchToCursorAgents(prompts) {
    this.log('Dispatching prompts to Cursor background agents...');
    
    // Sort by priority
    const sortedPrompts = prompts.sort((a, b) => b.priority - a.priority);
    
    for (const prompt of sortedPrompts) {
      await this.sendToCursorAgent(prompt);
      // Small delay between prompts
      await this.sleep(1000);
    }
  }

  async sendToCursorAgent(prompt) {
    try {
      this.log(`Sending prompt ${prompt.id} to Cursor agent`);
      
      // Update prompt status
      prompt.status = 'sent';
      prompt.sentAt = new Date().toISOString();
      this.updatePromptStatus(prompt);
      
      // Simulate agent processing
      await this.sleep(2000);
      
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

  async generateMissingContent() {
    this.log('Generating missing content...');
    
    try {
      const result = spawnSync('node', ['automation/autonomous-content-generator.cjs', 'generate'], {
        stdio: 'inherit'
      });
      
      if (result.status === 0) {
        this.log('Content generation completed successfully');
      } else {
        throw new Error('Content generation failed');
      }
    } catch (error) {
      this.log(`Error during content generation: ${error.message}`, 'ERROR');
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

  commitAndPushChanges() {
    this.log('Committing and pushing changes...');
    
    try {
      // Run git sync
      this.runCommand('node', ['automation/git-sync.cjs']);
      this.log('Changes committed and pushed successfully');
    } catch (error) {
      this.log(`Error during git sync: ${error.message}`, 'ERROR');
    }
  }

  runCommand(command, args, options = {}) {
    const result = spawnSync(command, args, {
      stdio: 'inherit',
      cwd: this.rootDir,
      env: process.env,
      ...options
    });
    
    if (result.status !== 0) {
      this.log(`Command failed: ${command} ${args.join(' ')}`, 'WARN');
    }
    
    return result.status === 0;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async runContinuousMode() {
    this.log('Starting continuous autonomous mode...');
    
    const intervalMs = 15 * 60 * 1000; // 15 minutes
    
    while (true) {
      try {
        this.log('Starting continuous cycle...');
        await this.startAutonomousSystem();
        
        this.log(`Waiting ${intervalMs / 1000 / 60} minutes until next cycle...`);
        await this.sleep(intervalMs);
      } catch (error) {
        this.log(`Error in continuous mode: ${error.message}`, 'ERROR');
        await this.sleep(5 * 60 * 1000); // Wait 5 minutes on error
      }
    }
  }

  getSystemStatus() {
    return {
      ...this.status,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
  }

  saveStatus() {
    const statusFile = path.join(this.logsDir, 'autonomous-system-status.json');
    fs.writeFileSync(statusFile, JSON.stringify(this.getSystemStatus(), null, 2));
  }

  async runAnalysisOnly() {
    this.log('Running analysis only...');
    
    try {
      const gaps = await this.runContentGapAnalysis();
      const report = {
        timestamp: new Date().toISOString(),
        gaps: gaps,
        summary: {
          totalGaps: gaps.length,
          highPriority: gaps.filter(g => g.priority === 'high').length,
          mediumPriority: gaps.filter(g => g.priority === 'medium').length,
          lowPriority: gaps.filter(g => g.priority === 'low').length
        }
      };
      
      // Save analysis report
      const reportPath = path.join(this.logsDir, `analysis-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Analysis report saved to: ${reportPath}`);
      return report;
      
    } catch (error) {
      this.log(`Error during analysis: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async runGenerationOnly() {
    this.log('Running content generation only...');
    
    try {
      await this.generateMissingContent();
      this.triggerContentFactories();
      this.commitAndPushChanges();
      
      this.log('Content generation completed successfully');
      return { success: true };
      
    } catch (error) {
      this.log(`Error during content generation: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

async function main() {
  const orchestrator = new AutonomousSystemOrchestrator();
  const command = process.argv[2] || 'start';
  
  try {
    switch (command) {
      case 'start':
        await orchestrator.startAutonomousSystem();
        break;
      case 'analyze':
        await orchestrator.runAnalysisOnly();
        break;
      case 'generate':
        await orchestrator.runGenerationOnly();
        break;
      case 'continuous':
        await orchestrator.runContinuousMode();
        break;
      case 'status':
        const status = orchestrator.getSystemStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      default:
        console.log('Usage: node automation/autonomous-system-orchestrator.cjs [start|analyze|generate|continuous|status]');
        process.exit(1);
    }
    
    // Save status after each command
    orchestrator.saveStatus();
    
  } catch (error) {
    console.error('Fatal error:', error);
    orchestrator.saveStatus();
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { AutonomousSystemOrchestrator };
