#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
const manifestPath = path.join(functionsDir, 'functions-manifest.json');

function listFunctions() {
  const files = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  const names = files
    .map(f => f.replace(/\.(js|ts)$/,'').trim())
    .filter(name => !name.startsWith('_'))
    .sort();
  return names;
}

function main() {
  const names = listFunctions();
  const manifest = { generatedAt: new Date().toISOString(), functions: names };
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`Updated functions manifest with ${names.length} entries.`);
}

main();