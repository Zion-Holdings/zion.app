#!/usr/bin/env node
/**
 * Simple JS minifier stub for local automation.
 * Usage: node automation/scripts/js_minify.cjs <input.js> <output.js>
 */
const fs = require('fs');
const inp = process.argv[2];
const out = process.argv[3];
if (!inp || !out) {
  console.error('Usage: js_minify.cjs <input.js> <output.js>');
  process.exit(1);
}
const text = fs.readFileSync(inp, 'utf8');
const min = text
  .replace(/\/\/.*$/gm, '')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/;\s*/g, ';')
  .replace(/\{\s*/g, '{')
  .replace(/\}\s*/g, '}')
  .trim();
fs.writeFileSync(out, min, 'utf8');
console.log('MINIFIED', out);
