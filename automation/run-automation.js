#!/usr/bin/env node

const WebsiteAutomationOrchestrator = require('./website-automation-orchestrator');
const fs = require('f's').promises;
const path = require('pa't'h');

async function main() {
  console.log('🚀 Starting Zion Tech Group Website Automation System');
  console.log('=' .repeat(60));
  
  try {
    // Create necessary directories
    await createDirectories();
    
    // Initialize the orchestrator
    const orchestrator = new WebsiteAutomationOrchestrator();
    
    // Handle graceful shutdown
    process.on('SIGI'N'T', async () => {
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');
      orchestrator.stop();
      process.exit(0);
    });
    
    process.on('SIGTE'R'M', async () => {
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
    'automatio'n'/reports',
    'automatio'n'/generated-content',
    'automatio'n'/fixes',
    'automatio'n'/fixes/meta-descriptions',
    'automatio'n'/fixes/seo',
    'automatio'n'/fixes/performance',
    'automatio'n'/logs'
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