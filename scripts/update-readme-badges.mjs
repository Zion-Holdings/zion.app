import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const README = path.join(ROOT, 'README.md');
const WORKFLOWS = path.join(ROOT, '.github', 'workflows');
const CATALOG = path.join(ROOT, 'public', 'automation-catalog.json');

function countAutomations() {
  let files = [];
  if (fs.existsSync(WORKFLOWS)) {
    files = fs.readdirSync(WORKFLOWS).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  }
  return files.length;
}

function loadCatalogTime() {
  try {
    const json = JSON.parse(fs.readFileSync(CATALOG, 'utf8'));
    return json.generatedAt || null;
  } catch {
    return null;
  }
}

function upsertReadme(content) {
  fs.writeFileSync(README, content, 'utf8');
}

function render(readmeBody = '') {
  const automations = countAutomations();
  const catTime = loadCatalogTime();
  const markers = { start: '<!-- BADGES:START -->', end: '<!-- BADGES:END -->' };
  const badges = [
    `![Automations](https://img.shields.io/badge/automations-${automations}-blue)`,
    `![Node](https://img.shields.io/badge/node-20.x-green)`,
    `![CI](https://github.com/Zion-Holdings/zion.app/actions/workflows/ci.yml/badge.svg)`
  ].join(' ');

  const lines = [
    markers.start,
    '',
    badges,
    '',
    catTime ? `Last catalog update: ${catTime}` : '',
    markers.end
  ].filter(Boolean);

  if (readmeBody.includes(markers.start) && readmeBody.includes(markers.end)) {
    const before = readmeBody.split(markers.start)[0];
    const after = readmeBody.split(markers.end)[1] || '';
    return `${before}${lines.join('\n')}\n${after}`.trim() + '\n';
  }

  const header = readmeBody || '# Zion AI Marketplace\n\nModern AI marketplace with autonomous cloud automations.';
  return `${header}\n\n${lines.join('\n')}\n`;
}

function main() {
  const existing = fs.existsSync(README) ? fs.readFileSync(README, 'utf8') : '';
  const updated = render(existing);
  upsertReadme(updated);
  console.log('README badges updated.');
}

main();