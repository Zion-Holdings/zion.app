#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FUNCTIONS_DIR = path.resolve(__dirname, '..', 'netlify', 'functions');
const MANIFEST_PATH = path.join(FUNCTIONS_DIR, 'functions-manifest.json');

function generateFunctionTemplate(functionName) {
  return `exports.handler = async function(event, context) {
  try {
    console.log('${functionName} function triggered');
    
    // Basic ${functionName} logic
    const result = {
      statusCode: 200,
      body: JSON.stringify({
        message: '${functionName} executed successfully',
        timestamp: new Date().toISOString(),
        function: '${functionName}'
      })
    };
    
    return result;
  } catch (error) {
    console.error('Error in ${functionName}:', error);
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
  try {
    // Read the manifest
    const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
    const functionNames = manifest.functions || [];
    
    console.log(`Found ${functionNames.length} functions in manifest`);
    
    // Get existing function files
    const existingFiles = fs.readdirSync(FUNCTIONS_DIR)
      .filter(f => f.endsWith('.js'))
      .map(f => f.replace('.js', ''));
    
    console.log(`Found ${existingFiles.length} existing function files`);
    
    // Find missing functions
    const missingFunctions = functionNames.filter(name => !existingFiles.includes(name));
    
    if (missingFunctions.length === 0) {
      console.log('All functions already exist!');
      return;
    }
    
    console.log(`Creating ${missingFunctions.length} missing functions...`);
    
    // Create missing functions
    for (const functionName of missingFunctions) {
      const filePath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
      const template = generateFunctionTemplate(functionName);
      
      fs.writeFileSync(filePath, template);
      console.log(`Created: ${functionName}.js`);
    }
    
    console.log('Done!');
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}