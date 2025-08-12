#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
const manifestPath = path.join(functionsDir, 'functions-manifest.json');

function listFunctions() {
  const files = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.ts'));
  const names = files
    .map(f => path.basename(f, path.extname(f)))
    .filter(name => !name.endsWith('.d'))
    .sort();
  return names;
}

function writeManifest(names) {
  const data = {
    generatedAt: new Date().toISOString(),
    functions: names
  };
  fs.writeFileSync(manifestPath, JSON.stringify(data, null, 2) + '\n');
}

try {
  const names = listFunctions();
  writeManifest(names);
  console.log(`Updated functions manifest with ${names.length} functions`);
} catch (e) {
  console.error('Failed to generate functions manifest:', e);
  process.exit(1);
}