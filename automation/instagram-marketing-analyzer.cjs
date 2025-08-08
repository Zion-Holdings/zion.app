#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'instagram-marketing-analyzer.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(LOG, line);
}

function analyzeFeatures() {
  try {
    const featuresDir = path.join(__dirname, '..', 'data', 'page-metadata');
    const outputsDir = path.join(__dirname, 'instagram-agents');
    if (!fs.existsSync(outputsDir)) fs.mkdirSync(outputsDir, { recursive: true });

    const files = fs.existsSync(featuresDir) ? fs.readdirSync(featuresDir) : [];
    const highlights = [];

    for (const file of files) {
      if (!file.endsWith('.json')) continue;
      const json = JSON.parse(fs.readFileSync(path.join(featuresDir, file), 'utf8'));
      const title = json.title || file.replace(/\.json$/, '');
      const description = json.description || '';
      const route = json.route || `/${file.replace(/\.json$/, '')}`;
      highlights.push({ title, description, route });
    }

    const reportPath = path.join(outputsDir, 'highlights.json');
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), highlights }, null, 2));
    log(`✅ Generated highlights: ${reportPath}`);
  } catch (e) {
    log(`❌ Analyzer error: ${e.message}`);
    process.exitCode = 1;
  }
}

analyzeFeatures();


