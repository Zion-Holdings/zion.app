// scripts/merge-redirects.cjs
// Merges root _redirects into public/_redirects, deduplicating rules.
// Ensures all redirect rules (navigation + service-specific) ship to the
// exported artifact and GitHub Pages deployment.
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const rootRedirects = path.join(repo, '_redirects');
const publicRedirects = path.join(repo, 'public/_redirects');

function readLines(p) {
  if (!fs.existsSync(p)) return [];
  return fs.readFileSync(p, 'utf8').split(/\r?\n/);
}

const rootLines = readLines(rootRedirects);
const publicLines = readLines(publicRedirects);

// Collect existing public rules (stripped) for dedup
const existing = new Set();
publicLines.forEach(l => {
  const trimmed = l.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    existing.add(trimmed);
  }
});

// Build merged output: public lines first, then append root lines not already present
const merged = [];
publicLines.forEach(l => {
  const trimmed = l.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    merged.push(trimmed);
  } else if (trimmed.startsWith('#') || trimmed === '') {
    // preserve comments and blank lines only from public
  }
});

rootLines.forEach(l => {
  const trimmed = l.trim();
  if (trimmed && !trimmed.startsWith('#') && !existing.has(trimmed)) {
    merged.push(trimmed);
    existing.add(trimmed);
  }
});

fs.mkdirSync(path.dirname(publicRedirects), { recursive: true });
fs.writeFileSync(publicRedirects, merged.join('\n') + '\n', 'utf8');

const ruleCount = merged.filter(l => l.trim() && !l.trim().startsWith('#')).length;
console.log(`[merge-redirects] ${ruleCount} total rules in public/_redirects`);
