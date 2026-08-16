#!/usr/bin/env node
/**
 * Validate all workflows by parsing YAML
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const workflowsDir = '.github/workflows';
const files = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml'));

let broken = 0;
let ok = 0;

files.forEach(file => {
  const filePath = path.join(workflowsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    yaml.load(content, { filename: file });
    ok++;
  } catch (e) {
    console.log(`BROKEN: ${file} - ${e.message.slice(0, 80)}`);
    broken++;
  }
});

console.log(`---`);
console.log(`Total: ${files.length}, OK: ${ok}, Broken: ${broken}`);
