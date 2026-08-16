#!/usr/bin/env node
/**Search for broken canonical patterns in app/services/ .tsx files*/
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SVC_DIR = path.join(ROOT, 'app', 'services');

const files = fs.readdirSync(SVC_DIR).filter(f => f.endsWith('.tsx'));
let broken = 0;

for (const file of files) {
  const content = fs.readFileSync(path.join(SVC_DIR, file), 'utf8');
  // Look for canonical without closing backtick
  if (/canonical:.*services.*\$\{service\.id\}/.test(content) && !/canonical:.*services.*\$\{service\.id\}\/.*\`/.test(content)) {
    console.log(`BROKEN: ${file}`);
    const match = content.match(/canonical:.*$/m);
    if (match) console.log(`  Line: ${match[0]}`);
    broken++;
    if (broken >= 5) break;
  }
}

if (broken === 0) {
  console.log('No broken canonical patterns found in .tsx files');
}
console.log(`\nChecked ${files.length} .tsx files, found ${broken} broken`);
