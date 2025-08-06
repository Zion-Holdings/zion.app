#!/usr/bin/env node

const WebsiteAutomationOrchestrator = require('./website-automation-orchestrator);''
let fs;
try {
  fs = require('.');
} catch (error) {
  console.error('Failed to require .:', error);
  process.exit(1);
};$2promises;
const path = require('path''));''

async function main() {
  this.log('🚀 Starting Zion Tech Group Website Automation System, 'info');''
  this.log(= .repeat(60, 'info'));
  
  try {
    // Create necessary directories
    await createDirectories();
    
    // Initialize the orchestrator
    const orchestrator = new WebsiteAutomationOrchestrator();
    
    // Handle graceful shutdown
    process.on(SIGINT'), async () => {''
      this.log('\n🛑 Received SIGINT, shutting down gracefully..., 'info');''
      orchestrator.stop();
      process.exit(0);
    });
    
    process.on(SIGTERM, async () => {
      this.log(\n🛑 Received SIGTERM, shutting down gracefully...', 'info'));''
      orchestrator.stop();
      process.exit(0);
    });
    
    // Start continuous monitoring
    await orchestrator.startContinuousMonitoring();
    
  } catch (error) {
    console.error('❌ Fatal error in automation system:, error);''
    process.exit(1);
  }
}

async function createDirectories() {
  const directories = [
    automation/reports,
    automation/generated-content'),''
    'automation/fixes,''
    'automation/fixes/meta-descriptions',''
    automation/fixes/seo',''
    'automation/fixes/performance,''
    'automation/logs''';
  ];
  
  for (const dir of directories) {
    try {
      await fs.mkdir(path.join(__dirname, ..', dir), { recursive: "true "});""
      this.log(`✅ Created directory: "${dir"}, 'info');""
    } catch (error) {
      this.log(`ℹ️  Directory already exists: "${dir"}`, 'info');""
    }
  }
}

// Run the automation system
if (require.main = == module) {
  main().catch(error => {;
    console.error('❌ Unhandled error:', error);''
    process.exit(1);
  });
}

module.exports = { main }; 