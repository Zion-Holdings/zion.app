#!/usr/bin/env node

const ContentOrchestrator = require('./content-orchestrator');
const ContentIntegrationAgent = require('./content-integration-agent');
const fs = require('fs');
const path = require('path');

class AutomatedContentSystem {
  constructor() {
    this.orchestrator = new ContentOrchestrator();
    this.integrator = new ContentIntegrationAgent();
    this.logFile = path.join(__dirname, 'logs', 'automated-content-system.log');
  }

  async runFullWorkflow() {
    console.log('🤖 Starting Automated Content System');
    console.log('=' .repeat(60));
    
    const startTime = new Date();
    this.log(`Automated content system started at: ${startTime.toISOString()}`);

    try {
      // Step 1: Generate all content
      console.log('\n📝 Step 1: Generating Content');
      console.log('-' .repeat(40));
      const generationResults = await this.orchestrator.generateAllContent();
      
      // Step 2: Integrate content into application
      console.log('\n🔗 Step 2: Integrating Content');
      console.log('-' .repeat(40));
      await this.integrator.integrateAllContent();
      
      // Step 3: Build and deploy
      console.log('\n🚀 Step 3: Building Application');
      console.log('-' .repeat(40));
      await this.buildAndDeploy();
      
      const endTime = new Date();
      const duration = endTime - startTime;
      
      console.log('\n✅ Automated Content System Completed Successfully!');
      console.log(`📊 Generated: ${generationResults.summary.totalGenerated} content pieces`);
      console.log(`📄 Created: ${this.countGeneratedPages()} pages`);
      console.log(`⏱️  Total Duration: ${duration}ms`);
      
      this.log(`Automated content system completed at: ${endTime.toISOString()}`);
      this.log(`Total duration: ${duration}ms`);
      
      return {
        generation: generationResults,
        pages: this.countGeneratedPages(),
        duration: duration
      };
      
    } catch (error) {
      console.error('❌ Automated content system failed:', error);
      this.log(`Error: ${error.message}`);
      throw error;
    }
  }

  async generateAndIntegrate() {
    console.log('🔄 Running Generate & Integrate Workflow');
    
    try {
      // Generate content
      const generationResults = await this.orchestrator.generateAllContent();
      
      // Integrate content
      await this.integrator.integrateAllContent();
      
      console.log('✅ Generate & Integrate completed successfully!');
      return generationResults;
      
    } catch (error) {
      console.error('❌ Generate & Integrate failed:', error);
      throw error;
    }
  }

  async generateSpecificContent(category, customData = {}) {
    console.log(`🎯 Generating specific content for: ${category}`);
    
    try {
      const results = await this.orchestrator.generateContentForCategory(category, customData);
      await this.integrator.integrateAllContent();
      
      console.log(`✅ Specific content generation completed for: ${category}`);
      return results;
      
    } catch (error) {
      console.error(`❌ Specific content generation failed for ${category}:`, error);
      throw error;
    }
  }

  async buildAndDeploy() {
    console.log('🔨 Building application...');
    
    try {
      // Change to project root
      const projectRoot = path.join(__dirname, '..');
      process.chdir(projectRoot);
      
      // Install dependencies if needed
      if (!fs.existsSync('node_modules')) {
        console.log('📦 Installing dependencies...');
        const { execSync } = require('child_process');
        execSync('npm install', { stdio: 'inherit' });
      }
      
      // Build the application
      console.log('🔨 Building Next.js application...');
      const { execSync } = require('child_process');
      execSync('npm run build', { stdio: 'inherit' });
      
      console.log('✅ Build completed successfully!');
      
      // Export static files
      console.log('📤 Exporting static files...');
      execSync('npm run export', { stdio: 'inherit' });
      
      console.log('✅ Export completed successfully!');
      
    } catch (error) {
      console.error('❌ Build failed:', error);
      throw error;
    }
  }

  countGeneratedPages() {
    const pagesDir = path.join(__dirname, '..', 'pages');
    let count = 0;
    
    const countPages = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          countPages(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          count++;
        }
      });
    };
    
    countPages(pagesDir);
    return count;
  }

  async scheduleAutomation(schedule) {
    console.log('📅 Setting up automated content generation schedule...');
    
    try {
      const cronExpression = schedule.cron || '0 2 * * *'; // Default: daily at 2 AM
      const scheduleConfig = {
        cron: cronExpression,
        enabled: true,
        lastRun: null,
        nextRun: this.calculateNextRun(cronExpression),
        categories: schedule.categories || ['marketplace', 'blog', 'product'],
        customData: schedule.customData || {}
      };
      
      const schedulePath = path.join(__dirname, 'automation-schedule.json');
      fs.writeFileSync(schedulePath, JSON.stringify(scheduleConfig, null, 2));
      
      console.log('✅ Automation schedule configured successfully!');
      console.log(`⏰ Next run: ${scheduleConfig.nextRun}`);
      
      return scheduleConfig;
      
    } catch (error) {
      console.error('❌ Failed to configure automation schedule:', error);
      throw error;
    }
  }

  calculateNextRun(cronExpression) {
    // Simple next run calculation (in a real implementation, you'd use a cron parser)
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(2, 0, 0, 0);
    return tomorrow.toISOString();
  }

  async runScheduledAutomation() {
    console.log('⏰ Running scheduled automation...');
    
    try {
      const schedulePath = path.join(__dirname, 'automation-schedule.json');
      
      if (!fs.existsSync(schedulePath)) {
        console.log('📅 No automation schedule found. Creating default schedule...');
        await this.scheduleAutomation({
          cron: '0 2 * * *',
          categories: ['marketplace', 'blog', 'product']
        });
      }
      
      const schedule = JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
      
      if (!schedule.enabled) {
        console.log('⏸️  Automation is disabled');
        return;
      }
      
      // Run the full workflow
      await this.runFullWorkflow();
      
      // Update last run time
      schedule.lastRun = new Date().toISOString();
      schedule.nextRun = this.calculateNextRun(schedule.cron);
      fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));
      
      console.log('✅ Scheduled automation completed successfully!');
      
    } catch (error) {
      console.error('❌ Scheduled automation failed:', error);
      throw error;
    }
  }

  async cleanupAndOptimize() {
    console.log('🧹 Running cleanup and optimization...');
    
    try {
      // Clean up old content
      const cleanupResults = await this.orchestrator.cleanupOldContent(30);
      
      // Optimize generated content
      await this.optimizeGeneratedContent();
      
      // Update content memory
      await this.updateContentMemory();
      
      console.log('✅ Cleanup and optimization completed!');
      return cleanupResults;
      
    } catch (error) {
      console.error('❌ Cleanup and optimization failed:', error);
      throw error;
    }
  }

  async optimizeGeneratedContent() {
    console.log('⚡ Optimizing generated content...');
    
    const generatedContentDir = path.join(__dirname, 'generated-content');
    
    if (!fs.existsSync(generatedContentDir)) return;
    
    // Optimize JSON files
    const files = fs.readdirSync(generatedContentDir, { recursive: true });
    
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(generatedContentDir, file);
        try {
          const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
          
          // Add optimization metadata
          content.optimized = true;
          content.optimizedAt = new Date().toISOString();
          content.size = JSON.stringify(content).length;
          
          fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
        } catch (error) {
          console.error(`Error optimizing ${file}:`, error);
        }
      }
    });
    
    console.log('✅ Content optimization completed!');
  }

  async updateContentMemory() {
    console.log('🧠 Updating content memory...');
    
    try {
      const newMemory = {
        memories: [
          {
            id: `automated-content-${Date.now()}`,
            content: "Automated content generation system successfully created and integrated content into the Zion AI marketplace platform.",
            tags: ["automation", "content", "generation", "integration"],
            priority: "high",
            timestamp: new Date().toISOString()
          }
        ],
        rules: [
          {
            id: "automated-content-workflow",
            category: "automation",
            rule: "The automated content system generates marketplace, blog, and product content, then integrates it into the Next.js application.",
            priority: "high",
            appliesTo: ["content", "generation", "integration", "automation"],
            timestamp: new Date().toISOString()
          }
        ]
      };
      
      await this.orchestrator.updateContentMemory(newMemory);
      console.log('✅ Content memory updated successfully!');
      
    } catch (error) {
      console.error('❌ Failed to update content memory:', error);
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    // Write to log file
    fs.appendFileSync(this.logFile, logMessage);
  }

  getSystemStatus() {
    const stats = this.orchestrator.getContentStatistics();
    const pages = this.countGeneratedPages();
    
    return {
      contentFiles: stats.totalFiles,
      marketplaceFiles: stats.marketplaceFiles,
      blogFiles: stats.blogFiles,
      productFiles: stats.productFiles,
      generatedPages: pages,
      lastGenerated: stats.lastGenerated,
      systemStatus: 'operational'
    };
  }
}

// Main execution
async function main() {
  const system = new AutomatedContentSystem();
  
  // Parse command line arguments
  const args = process.argv.slice(2);
  const command = args[0];
  
  try {
    switch (command) {
      case 'full':
        await system.runFullWorkflow();
        break;
        
      case 'generate':
        await system.generateAndIntegrate();
        break;
        
      case 'marketplace':
        await system.generateSpecificContent('marketplace');
        break;
        
      case 'blog':
        await system.generateSpecificContent('blog');
        break;
        
      case 'product':
        await system.generateSpecificContent('product');
        break;
        
      case 'schedule':
        const schedule = JSON.parse(args[1] || '{}');
        await system.scheduleAutomation(schedule);
        break;
        
      case 'scheduled':
        await system.runScheduledAutomation();
        break;
        
      case 'cleanup':
        await system.cleanupAndOptimize();
        break;
        
      case 'status':
        const status = system.getSystemStatus();
        console.log('📊 System Status:');
        console.log(JSON.stringify(status, null, 2));
        break;
        
      case 'help':
        console.log(`
🤖 Automated Content System

Usage:
  node automated-content-system.js [command] [options]

Commands:
  full                    Run complete workflow (generate, integrate, build)
  generate                Generate and integrate content
  marketplace             Generate marketplace content only
  blog                    Generate blog content only
  product                 Generate product content only
  schedule <config>       Set up automation schedule
  scheduled               Run scheduled automation
  cleanup                 Clean up and optimize content
  status                  Show system status
  help                    Show this help message

Examples:
  node automated-content-system.js full
  node automated-content-system.js generate
  node automated-content-system.js marketplace
  node automated-content-system.js schedule '{"cron":"0 2 * * *","categories":["marketplace","blog"]}'
  node automated-content-system.js status
        `);
        break;
        
      default:
        if (!command) {
          // Default to full workflow
          await system.runFullWorkflow();
        } else {
          console.error(`❌ Unknown command: ${command}`);
          console.log('Use "help" to see available commands');
          process.exit(1);
        }
    }
    
  } catch (error) {
    console.error('❌ Automated content system failed:', error);
    process.exit(1);
  }
}

// Run if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = AutomatedContentSystem; 