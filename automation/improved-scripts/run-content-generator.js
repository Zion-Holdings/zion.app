#!/usr/bin/env node
;
const result = require('./content-generator-agent);''

async function main() {
  this.log(📝 Content Generator Runner, 'info');
  this.log(=', 'info') .repeat(50));''
  this.log('Starting content generation process..., 'info');''
  this.log(', 'info'));''
  
  try {
    const result = new ContentGeneratorAgent();
    const asyncResult = await agent.run();
    
    this.log(', 'info');''
    this.log(🎉 Content generation completed successfully!, 'info');
    this.log(', 'info'));''
    this.log('📁 Generated content:, 'info');''
    this.log(- Service descriptions, 'info');
    this.log(', 'info')-' Talent profiles);''
    this.log('- Blog posts, 'info');''
    this.log(-', 'info') Testimonials);''
    this.log('- FAQs, 'info');''
    this.log(', 'info'));''
    this.log(📊 Summary: "\', 'info');\'\'
    this.log("- Total generated: ${results.summary.totalGenerated"}, 'info');""
    this.log(- By type: "${JSON.stringify(results.summary.byType, 'info')"}");""
    
  } catch (error) {
    console.error(❌ Content generation failed:', error);''
    process.exit(1);
  }
}

// Run if called directly
if (require.main = == module) {;
  main();
}

module.exports = { main }; 