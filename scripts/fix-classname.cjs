#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const TARGET_DIR = path.join(ROOT, 'pages', 'reports');

function listTsxFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) out.push(...listTsxFiles(full));
    else if (entry.endsWith('.tsx')) out.push(full);
  }
  return out;
}

function fixFile(filePath) {
  let src = fs.readFileSync(filePath, 'utf8');
  const before = src;
  // Replace common JSX mistakes: class -> className
  src = src.replace(/\bclass=\"/g, 'className="');
  src = src.replace(/\bclass=\'/g, "className='");
  // Also replace inside escaped strings within template literals
  src = src.replace(/class=\\\"/g, 'className=\\"');
  if (src !== before) {
    fs.writeFileSync(filePath, src, 'utf8');
    return true;
  }
  return false;
}

function main() {
  const files = listTsxFiles(TARGET_DIR);
  let changed = 0;
  for (const f of files) if (fixFile(f)) changed++;
  console.log(`fix-classname: processed ${files.length} files, changed ${changed}`);
}

if (require.main === module) main();


