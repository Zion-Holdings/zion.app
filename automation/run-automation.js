#!/usr/bin/env node

const AutomationOrchestrator = require('./automation-orchestrator');

async function main() {
  console.log('🤖 Zion Automation System Starting...');
  console.log('=' .repeat(50));
  
  const orchestrator = new AutomationOrchestrator();
  
  // Parse command line arguments
  const args = process.argv.slice(2);
  const mode = args[0] || 'cycle';
  
  try {
    switch (mode) {
      case 'cycle':
        console.log('🔄 Running single automation cycle...');
        await orchestrator.runFullAutomationCycle();
        break;
        
      case 'continuous':
        console.log('🔄 Starting continuous automation...');
        await orchestrator.runContinuousAutomation();
        break;
        
      case 'content':
        console.log('📝 Running content generation only...');
        await orchestrator.runContentGeneration();
        break;
        
      case 'improve':
        console.log('🔧 Running code improvement only...');
        await orchestrator.runCodeImprovement();
        break;
        
      case 'analytics':
        console.log('📊 Running analytics only...');
        await orchestrator.runAnalytics();
        break;
        
      case 'build':
        console.log('🏗️ Running build and deploy only...');
        await orchestrator.runBuildAndDeploy();
        break;
        
      default:
        console.log('❌ Unknown mode. Available modes:');
        console.log('  cycle      - Run full automation cycle');
        console.log('  continuous - Run continuous automation');
        console.log('  content    - Content generation only');
        console.log('  improve    - Code improvement only');
        console.log('  analytics  - Analytics only');
        console.log('  build      - Build and deploy only');
        process.exit(1);
    }
    
    console.log('✅ Automation completed successfully!');
    
  } catch (error) {
    console.error('❌ Automation failed:', error.message);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down automation gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down automation gracefully...');
  process.exit(0);
});

// Run the main function
main(); 