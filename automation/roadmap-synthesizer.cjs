#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function parseTodos(md) {
  const lines = md.split(/\r?\n/);
  return lines.filter(l => /^[-*]\s+\[?\s?[xX ]\]?\s+/.test(l) || /^[-*]\s+/.test(l)).slice(0, 50);
}

function extractHighlights(md) {
  const lines = md.split(/\r?\n/);
  const highlights = [];
  for (const l of lines) {
    if (/^#+\s/.test(l)) continue;
    if (/\b(feat|fix|perf|docs|refactor)\b/i.test(l)) highlights.push(l.trim());
    if (highlights.length >= 50) break;
  }
  return highlights;
}

function main() {
  const root = process.cwd();
  const todoPath = path.join(root, 'docs', 'TODO_REPORT.md');
  const changelogPath = path.join(root, 'docs', 'CHANGELOG_AI.md');

  const todos = parseTodos(read(todoPath));
  const changes = extractHighlights(read(changelogPath));

  const roadmapMd = [
    '# Autonomous Roadmap (auto)',
    '',
    'This roadmap is synthesized automatically from TODO reports and recent AI changelog highlights. Edit manually as needed; it will be refreshed periodically.',
    '',
    '## Near-term',
    ...todos.slice(0, 10).map(t => `- ${t.replace(/^[-*]\s+/,'')}`),
    '',
    '## Next',
    ...todos.slice(10, 25).map(t => `- ${t.replace(/^[-*]\s+/,'')}`),
    '',
    '## Later',
    ...todos.slice(25).map(t => `- ${t.replace(/^[-*]\s+/,'')}`),
    '',
    '---',
    '',
    '## Recent Highlights',
    ...changes.slice(0, 20).map(c => `- ${c}`),
  ].join('\n');

  ensureDir(path.join(root, 'docs'));
  fs.writeFileSync(path.join(root, 'docs', 'ROADMAP_AUTO.md'), roadmapMd, 'utf8');

  const outDir = path.join(root, 'public', 'reports', 'roadmap');
  ensureDir(outDir);
  const json = {
    generatedAt: new Date().toISOString(),
    totals: { todos: todos.length, highlights: changes.length },
    nearTerm: todos.slice(0, 10),
    next: todos.slice(10, 25),
    later: todos.slice(25),
    highlights: changes.slice(0, 50),
  };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify(json, null, 2), 'utf8');
  fs.writeFileSync(path.join(outDir, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Roadmap (auto)</title><style>body{font-family:system-ui;padding:24px;max-width:880px;margin:auto;background:#0b1020;color:#e6e9ef} h1,h2{color:#fff}</style><h1>Roadmap (auto)</h1><p>Generated at ${json.generatedAt}</p><h2>Near-term</h2><ul>${json.nearTerm.map(i=>`<li>${i}</li>`).join('')}</ul><h2>Next</h2><ul>${json.next.map(i=>`<li>${i}</li>`).join('')}</ul><h2>Later</h2><ul>${json.later.map(i=>`<li>${i}</li>`).join('')}</ul><h2>Highlights</h2><ul>${json.highlights.map(i=>`<li>${i}</li>`).join('')}</ul>`, 'utf8');

  console.log('Roadmap synthesized.');
}

main();