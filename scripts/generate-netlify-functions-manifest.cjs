#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
const manifestPath = path.join(functionsDir, 'functions-manifest.json');

function listFunctions() {
  if (!fs.existsSync(functionsDir)) {
    console.log('Functions directory not found, creating empty manifest');
    return [];
  }
  
  const files = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  const names = files
    .map(f => f.replace(/\.(js|ts)$/,'').trim())
    .filter(name => !name.startsWith('_'))
    .sort();
  return names;
}

function main() {
  const names = listFunctions();
  const manifest = { 
    generatedAt: new Date().toISOString(), 
    functions: names 
  };
  
  // Ensure the directory exists
  const manifestDir = path.dirname(manifestPath);
  if (!fs.existsSync(manifestDir)) {
    fs.mkdirSync(manifestDir, { recursive: true });
  }
  
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated functions manifest with ${names.length} entries.`);
}

main();
