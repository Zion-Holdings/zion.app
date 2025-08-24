#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch {}
}

function loadJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function saveJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
}

function nowIso() {
  return new Date().toISOString();
}

function generateInventions(baseUrl) {
  const timestamp = nowIso();
  const inventions = [
    {
      id: 'lighthouse-auditor',
      name: 'Autonomous Lighthouse Auditor',
      description: 'Runs headless Lighthouse audits on key routes, stores reports, and opens follow-up improvements.',
      href: `${baseUrl}/.netlify/functions/autonomous-cloud-inventions`,
      category: 'observability',
      cadence: '6h',
      createdAt: timestamp
    },
    {
      id: 'auto-dep-remediator',
      name: 'Auto Dependency Remediator',
      description: 'Analyzes vulnerabilities and proposes safe upgrades with rollback plans.',
      href: `${baseUrl}/.netlify/functions/autonomous-cloud-inventions`,
      category: 'security',
      cadence: 'daily',
      createdAt: timestamp
    },
    {
      id: 'ux-microcopy-refiner',
      name: 'UX Microcopy Refiner',
      description: 'Curates and refines microcopy for clarity, brevity and tone, proposing conservative edits.',
      href: `${baseUrl}/.netlify/functions/autonomous-cloud-inventions`,
      category: 'content',
      cadence: 'daily',
      createdAt: timestamp
    }
  ];
  return { generatedAt: timestamp, baseUrl, items: inventions };
}

(function main() {
  const workspaceRoot = path.resolve(__dirname, '..');
  const publicDir = path.join(workspaceRoot, 'public');
  const automationDir = path.join(publicDir, 'automation');
  ensureDir(automationDir);

  const baseUrl = process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '';
  const filePath = path.join(automationDir, 'inventions.json');

  const prev = loadJson(filePath, { generatedAt: null, baseUrl, items: [] });
  const next = generateInventions(baseUrl || '');

  // Merge by unique id, prefer latest description and timestamps
  const idToItem = new Map();
  for (const it of [...prev.items, ...next.items]) {
    idToItem.set(it.id, { ...idToItem.get(it.id), ...it });
  }

  const merged = { generatedAt: nowIso(), baseUrl: next.baseUrl, items: Array.from(idToItem.values()) };
  saveJson(filePath, merged);

  process.stdout.write(`Autonomous Cloud Inventions updated: ${merged.items.length} items\n`);
  process.stdout.write(`Written to: ${path.relative(workspaceRoot, filePath)}\n`);
})();