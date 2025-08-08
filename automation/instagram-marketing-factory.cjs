#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'logs', 'instagram-marketing-factory.log');
if (!fs.existsSync(path.dirname(LOG))) fs.mkdirSync(path.dirname(LOG), { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(LOG, line);
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function generateCaptions() {
  const agentsDir = path.join(__dirname, 'instagram-agents');
  ensureDir(agentsDir);

  const highlightsPath = path.join(agentsDir, 'highlights.json');
  const appUrl = process.env.APP_MARKETING_URL || 'https://ziontechgroup.com';

  let highlights = { highlights: [] };
  if (fs.existsSync(highlightsPath)) {
    try {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, 'utf8'));
    } catch (e) {
      log(`⚠️ Failed to parse highlights: ${e.message}`);
    }
  }

  const captions = highlights.highlights.map((h) => {
    const lines = [
      `Unlock productivity with ${h.title} by Zion` ,
      h.description ? h.description : 'Supercharge your workflow with our modern, secure platform.',
      `Explore more: ${appUrl}${h.route}`,
      '#SaaS #Productivity #Startup #WebApp #ZionTechGroup'
    ];
    return lines.join('\n');
  });

  const captionsPath = path.join(agentsDir, 'captions.json');
  fs.writeFileSync(captionsPath, JSON.stringify({ generatedAt: new Date().toISOString(), captions }, null, 2));
  log(`✅ Generated captions: ${captionsPath}`);
}

generateCaptions();


