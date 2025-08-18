const fs = require('fs');
const path = require('path');

async function testFunction(name) {
  try {
    const func = require(`./netlify/functions/${name}.js`);
    const result = await func.handler({}, {});
    console.log(`✅ ${name}: ${result.statusCode}`);
    return { name, status: 'success', statusCode: result.statusCode };
  } catch (error) {
    console.log(`❌ ${name}: ${error.message}`);
    return { name, status: 'error', error: error.message };
  }
}

async function main() {
  // Test a selection of functions that are most likely to have issues
  const functions = [
    'sitemap_runner',
    'netlify-auto-healer-runner',
    'fast-orchestrator',
    'marketing-and-features-promo',
    'ultrafast-orchestrator',
    'autonomous-meta-orchestrator',
    'continuous-orchestrator',
    'front-index-orchestrator',
    'fast-front-promoter',
    'frontpage-enhancer'
  ];

  console.log('Testing selected functions...\n');
  
  const results = [];
  for (const func of functions) {
    const result = await testFunction(func);
    results.push(result);
  }
  
  console.log('\n=== SUMMARY ===');
  const success = results.filter(r => r.status === 'success').length;
  const errors = results.filter(r => r.status === 'error').length;
  
  console.log(`Total tested: ${results.length}`);
  console.log(`✅ Success: ${success}`);
  console.log(`❌ Errors: ${errors}`);
  
  if (errors > 0) {
    console.log('\n=== ERROR DETAILS ===');
    results.filter(r => r.status === 'error').forEach(r => {
      console.log(`${r.name}: ${r.error}`);
    });
  }
}

main().catch(console.error);