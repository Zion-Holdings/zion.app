#!/usr/bin/env node
/**
 * Generate a static service index for use in build processes.
 * Reads app/data/servicesData.json and outputs a summary index.
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const servicesPath = path.join(repo, 'app/data/servicesData.json');
const indexPath = path.join(repo, 'app/data/service-index.json');

if (!fs.existsSync(servicesPath)) {
  console.error('servicesData.json not found');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(servicesPath, 'utf8'));
const index = {
  total: data.length,
  categories: {},
  generatedAt: new Date().toISOString(),
};

for (const svc of data) {
  const cat = svc.category || 'uncategorized';
  if (!index.categories[cat]) {
    index.categories[cat] = 0;
  }
  index.categories[cat]++;
}

fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
console.log(`Generated service-index.json: ${data.length} services across ${Object.keys(index.categories).length} categories`);
