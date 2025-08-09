#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
  try { return execSync(cmd, { encoding: 'utf8' }).trim(); } catch { return ''; }
}

function getTopChanges(hours = 72) {
  const format = '%s';
  const raw = run(`git log --since="${hours} hours" --pretty=format:"${format}"`);
  if (!raw) return [];
  return raw.split('\n').filter(Boolean).slice(0, 50);
}

function section(title, body) {
  return `\n## ${title}\n\n${body}\n`;
}

(function main() {
  try {
    const changes = getTopChanges(72);
    const highlights = changes
      .map((s) => s.replace(/^\w+(\(.*?\))?:\s*/i, ''))
      .filter(Boolean)
      .slice(0, 10)
      .map((c) => `- ${c}`)
      .join('\n');

    const header = '# Zion OS Media Release (Draft)\n';
    const intro = 'Zion OS announces new autonomous capabilities shipped in the past 72 hours, advancing governance, growth, and developer productivity.';
    const features = highlights || '- Stability and DX improvements';
    const cta = 'Learn more at /roadmap and /marketplace. Media kit: /media-kit. Press: press@zion.xyz';

    const content = [
      header,
      section('Overview', intro),
      section('Top updates', features),
      section('Call to action', cta),
      '\n—\nAuto-generated; edit as needed.'
    ].join('\n');

    const docsDir = path.join(process.cwd(), 'docs');
    fs.mkdirSync(docsDir, { recursive: true });
    const outPath = path.join(docsDir, 'MEDIA_RELEASE.md');
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Media release drafted at ${outPath}`);
  } catch (e) {
    console.error('auto-media-release failed:', e.message);
    process.exit(0);
  }
})();