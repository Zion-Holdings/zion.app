#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function main() {
  const functionsDir = path.join(__dirname, '..', 'netlify', 'functions');
  const files = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js'));
  const names = files.map(f => path.basename(f, '.js')).sort();
  const manifest = {
    generatedAt: new Date().toISOString(),
    functions: names
  };
  const outPath = path.join(functionsDir, 'functions-manifest.json');
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
  console.log('Wrote manifest with', names.length, 'functions to', outPath);
}

main();