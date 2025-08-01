#!/usr/bin/env node

const ContentGeneratorAgent = require('./content-generator-agent');

async function main() {
  console.log('📝 Content Generator Runner');
  console.log('=' .repeat(50));
  console.log('Starting content generation process...');
  console.log('');
  
  try {
    const agent = new ContentGeneratorAgent();
    const results = await agent.run();
    
    console.log('');
    console.log('🎉 Content generation completed successfully!');
    console.log('');
    console.log('📁 Generated content:');
    console.log('- Service descriptions');
    console.log('- Talent profiles');
    console.log('- Blog posts');
    console.log('- Testimonials');
    console.log('- FAQs');
    console.log('');
    console.log('📊 Summary:');
    console.log(`- Total generated: ${results.summary.totalGenerated}`);
    console.log(`- By type: ${JSON.stringify(results.summary.byType)}`);
    
  } catch (error) {
    console.error('❌ Content generation failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main }; 