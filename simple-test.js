const fs = require('fs');
const path = require('path');

async function testFunction(name) {
  try {
    const func = require(`./netlify/functions/${name}.js`);
    const result = await func.handler({}, {});
    console.log(`✅ ${name}: ${result.statusCode}`);
    return true;
  } catch (error) {
    console.log(`❌ ${name}: ${error.message}`);
    return false;
  }
}

async function main() {
  const functions = [
    'test-function',
    'homepage_advertiser',
    'front-enhancer',
    'cloud_orchestrator'
  ];

  console.log('Testing key functions...\n');
  
  let success = 0;
  for (const func of functions) {
    if (await testFunction(func)) success++;
  }
  
  console.log(`\nResults: ${success}/${functions.length} functions working`);
}

main().catch(console.error);