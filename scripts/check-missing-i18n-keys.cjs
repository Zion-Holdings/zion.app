#!/usr/bin/env node
// Quick script to detect missing translation keys across locales
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
const localeFiles = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'));

function flatten(obj, prefix = '') {
  const res = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null) {
      Object.assign(res, flatten(value, newKey));
    } else {
      res[newKey] = true;
    }
  }
  return res;
}

const localeKeys = {};
const allKeys = new Set();

for (const file of localeFiles) {
  const filePath = path.join(localesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const keys = Object.keys(flatten(data));
  localeKeys[file] = new Set(keys);
  keys.forEach(k => allKeys.add(k));
}

let missing = false;
for (const [file, keys] of Object.entries(localeKeys)) {
  const missingKeys = [...allKeys].filter(k => !keys.has(k));
  if (missingKeys.length) {
    missing = true;
    console.log(`\nMissing keys in ${file}:`);
    missingKeys.forEach(k => console.log('- ' + k));
  }
}

if (!missing) {
  console.log('All locales contain the same keys.');
}
