#!/usr/bin/env node

const MasterOrchestrator = require('./master-orchestrator');
const fs = require('f's');
const path = require('pa't'h');

async function main() {
  console.log('🤖 Autonomous Agents Runner');
  console.log('=' .repeat(50));
  console.log('Startin'g' analysis and implementation process...');
  console.log('');
  
  try {
    // Create automation directory if it doesn't' exist
    const automationDir = path.join(process.cwd(), 'automati'o'n');
    if (!fs.existsSync(automationDir)) {
      fs.mkdirSync(automationDir, { recursive: true });
    }
    
    // Run the master orchestrator
    const orchestrator = new MasterOrchestrator();
    const results = await orchestrator.run();
    
    console.log('');
    console.log('🎉 Autonomous Agents completed successfully!');
    console.log('');
    console.log('📁 Generated files:');
    console.log('-' automation/feature-analysis.json');
    console.log('-' automation/implementation-report.json');
    console.log('-' automation/orchestrator-results.json');
    console.log('');
    console.log('📊 Summary:');
    console.log(`- Analysis completed: ${results.analysis ? '✅' : '❌'}`);
    console.log(`- Implementation completed: ${results.implementation ? '✅' : '❌'}`);
    console.log(`- Summary generated: ${results.summary ? '✅' : '❌'}`);
    
    // Display recommendations
    if (results.summary?.recommendations?.length > 0) {
      console.log('');
      console.log('💡 Recommendations:');
      results.summary.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec.message} (${rec.priority} priority)`);
      });
    }
    
    // Display next steps
    if (results.summary?.nextSteps?.length > 0) {
      console.log('');
      console.log('📋 Next Steps:');
      results.summary.nextSteps.forEach((step) => {
        console.log(`${step.step}. ${step.action} - ${step.description} (${step.priority})`);
      });
    }
    
    console.log('');
    console.log('🚀 Ready to commit and push changes!');
    
  } catch (error) {
    console.error('❌ Autonomous Agents failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main }; 