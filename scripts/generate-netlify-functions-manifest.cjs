#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function listFunctions(dir) {
  const entries = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  return entries.map(f => f.replace(/\.js$/, ''));
}

(function main() {
  const root = process.cwd();
  const fnDir = path.join(root, 'netlify', 'functions');
  const out = path.join(fnDir, 'functions-manifest.json');
  const names = listFunctions(fnDir).filter(n => n !== 'functions-manifest');
  const json = { generatedAt: new Date().toISOString(), functions: names.sort() };
  fs.writeFileSync(out, JSON.stringify(json, null, 2), 'utf8');
  console.log(`Wrote manifest with ${names.length} functions.`);
})();