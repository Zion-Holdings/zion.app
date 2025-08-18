#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');
const MANIFEST_PATH = path.join(FUNCTIONS_DIR, 'functions-manifest.json');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function generateFunctionCode(functionName) {
  return `exports.handler = async function(event, context) {
  try {
    console.log('🤖 ${functionName} function triggered');
    
    // Basic function logic - can be expanded later
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: '${functionName} function executed successfully',
        timestamp: new Date().toISOString(),
        function: '${functionName}'
      })
    };
    
    return result;
  } catch (error) {
    console.error('❌ ${functionName} function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message,
        function: '${functionName}'
      })
    };
  }
};
`;
}

function main() {
  ensureDir(FUNCTIONS_DIR);
  
  // Read the manifest
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const functions = manifest.functions || [];
  
  console.log(`📋 Found ${functions.length} functions in manifest`);
  
  let created = 0;
  let skipped = 0;
  
  for (const functionName of functions) {
    const functionPath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
    
    if (fs.existsSync(functionPath)) {
      console.log(`⏭️  Skipping ${functionName} (already exists)`);
      skipped++;
      continue;
    }
    
    try {
      fs.writeFileSync(functionPath, generateFunctionCode(functionName));
      console.log(`✅ Created ${functionName}.js`);
      created++;
    } catch (error) {
      console.error(`❌ Failed to create ${functionName}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Created: ${created}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Total: ${functions.length}`);
  
  if (created > 0) {
    console.log(`\n🎉 Generated ${created} new functions!`);
  }
}

main();