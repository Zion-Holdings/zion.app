#!/usr/bin/env node

const WebsiteAutomationOrchestrator = require('./website-automation-orchestrator');
const fs = require('fs').promises;
const path = require('path');

async function main() {
  console.log('🚀 Starting Zion Tech Group Website Automation System');
  console.log('=' .repeat(60));
  
  try {
    // Create necessary directories
    await createDirectories();
    
    // Initialize the orchestrator
    const orchestrator = new WebsiteAutomationOrchestrator();
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');
      orchestrator.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      orchestrator.stop();
      process.exit(0);
    });
    
    // Start continuous monitoring
    await orchestrator.startContinuousMonitoring();
    
  } catch (error) {
    console.error('❌ Fatal error in automation system:', error);
    process.exit(1);
  }
}

async function createDirectories() {
  const directories = [
    'automation/reports',
    'automation/generated-content',
    'automation/fixes',
    'automation/fixes/meta-descriptions',
    'automation/fixes/seo',
    'automation/fixes/performance',
    'automation/logs'
  ];
  
  for (const dir of directories) {
    try {
      await fs.mkdir(path.join(__dirname, '..', dir), { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    } catch (error) {
      console.log(`ℹ️  Directory already exists: ${dir}`);
    }
  }
}

// Run the automation system
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = { main }; 