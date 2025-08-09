#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = process.cwd();
const IGNORE_DIRS = new Set(['.git', 'node_modules', '.next', 'out', 'dist', 'build', '.husky', '.github']);
const TODO_REGEX = /(TODO|FIXME)\s*:?\s*(.*)/i;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (e.name.startsWith('.')) {
      if (IGNORE_DIRS.has(e.name)) continue;
    }
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      files.push(...walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function rel(p) { return p.replace(ROOT, '').replace(/\\/g, '/'); }

function collectTodos() {
  const files = walk(ROOT);
  const items = [];
  for (const f of files) {
    const ext = path.extname(f).toLowerCase();
    if (!['.ts', '.tsx', '.js', '.jsx', '.md', '.cjs', '.mjs', '.json'].includes(ext)) continue;
    try {
      const text = fs.readFileSync(f, 'utf8');
      const lines = text.split(/\r?\n/);
      lines.forEach((line, idx) => {
        const m = line.match(TODO_REGEX);
        if (m) {
          items.push({
            type: m[1].toUpperCase(),
            text: m[2].trim(),
            file: rel(f),
            line: idx + 1,
          });
        }
      });
    } catch {}
  }
  return items;
}

function writeIndex(items) {
  const out = [];
  out.push('# TODO / FIXME Index', '', 'Auto-generated from repository comments.', '');
  const grouped = items.reduce((acc, it) => {
    (acc[it.type] = acc[it.type] || []).push(it);
    return acc;
  }, {});
  for (const type of Object.keys(grouped)) {
    out.push(`## ${type}`, '');
    for (const it of grouped[type]) {
      out.push(`- ${it.text} (${it.file}:${it.line})`);
    }
    out.push('');
  }
  const docsDir = path.join(ROOT, 'docs');
  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
  fs.writeFileSync(path.join(docsDir, 'TODO_INDEX.md'), out.join('\n'));
  console.log('todo-issue-bot: wrote docs/TODO_INDEX.md');
}

function createIssue(token, repo, title, body) {
  return new Promise((resolve) => {
    const data = JSON.stringify({ title, body });
    const [owner, name] = repo.split('/');
    const options = {
      hostname: 'api.github.com',
      path: `/repos/${owner}/${name}/issues`,
      method: 'POST',
      headers: {
        'User-Agent': 'todo-issue-bot',
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
    };
    const req = https.request(options, (res) => {
      res.on('data', () => {});
      res.on('end', () => resolve());
    });
    req.on('error', () => resolve());
    req.write(data);
    req.end();
  });
}

function main() {
  const items = collectTodos();
  writeIndex(items);
  const create = process.env.CREATE_ISSUES === 'true';
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const repo = process.env.GITHUB_REPOSITORY || '';
  if (create && token && repo && items.length) {
    // Only create issues for top N to avoid spam
    const top = items.slice(0, 10);
    Promise.all(top.map((it) => createIssue(token, repo, `${it.type}: ${it.text}`, `${it.file}:${it.line}`)))
      .then(() => console.log('todo-issue-bot: created issues'))
      .catch(() => console.log('todo-issue-bot: failed to create some issues'));
  }
}

if (require.main === module) main();