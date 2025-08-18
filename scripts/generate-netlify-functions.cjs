#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');
const MANIFEST_PATH = path.join(FUNCTIONS_DIR, 'functions-manifest.json');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch (_) {}
}

function generateFunctionTemplate(functionName) {
  return `exports.handler = async function(event, context) {
  try {
    console.log('🚀 ${functionName} function triggered');
    
    // TODO: Implement ${functionName} logic here
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: '${functionName} completed successfully',
        timestamp: new Date().toISOString(),
        function: '${functionName}'
      })
    };
    
    console.log('✅ ${functionName} completed successfully');
    return result;
    
  } catch (error) {
    console.error('❌ ${functionName} failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: '${functionName} failed',
        message: error.message,
        function: '${functionName}'
      })
    };
  }
};
`;
}

function generateAllFunctions() {
  ensureDir(FUNCTIONS_DIR);
  
  // Read the manifest to get all function names
  let manifest;
  try {
    const manifestContent = fs.readFileSync(MANIFEST_PATH, 'utf8');
    manifest = JSON.parse(manifestContent);
  } catch (error) {
    console.error('❌ Failed to read functions manifest:', error.message);
    process.exit(1);
  }
  
  const functionNames = manifest.functions || [];
  console.log(`📋 Found ${functionNames.length} functions to generate`);
  
  let created = 0;
  let skipped = 0;
  
  for (const functionName of functionNames) {
    const functionPath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
    
    if (fs.existsSync(functionPath)) {
      console.log(`⏭️  Skipping existing: ${functionName}`);
      skipped++;
      continue;
    }
    
    try {
      const template = generateFunctionTemplate(functionName);
      fs.writeFileSync(functionPath, template);
      console.log(`✅ Created: ${functionName}`);
      created++;
    } catch (error) {
      console.error(`❌ Failed to create ${functionName}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Created: ${created}`);
  console.log(`  ⏭️  Skipped: ${skipped}`);
  console.log(`  📁 Total: ${functionNames.length}`);
  
  if (created > 0) {
    console.log(`\n🎉 Successfully generated ${created} Netlify functions!`);
  }
}

// Run the generator
generateAllFunctions();