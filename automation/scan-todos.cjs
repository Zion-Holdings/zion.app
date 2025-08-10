#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const https = require('https');

const LABEL = 'autobot:todo';

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', '.next', 'dist', 'build', 'coverage'].includes(entry.name)) continue;
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

function scanTodos(root) {
  const todos = [];
  const files = walk(root);
  const re = /(TODO|FIXME)\s*:?\s*(.*)/i;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.yml', '.yaml', '.json'].includes(ext)) continue;
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, idx) => {
      const m = line.match(re);
      if (m) {
        const summary = (m[2] || '').trim().slice(0, 120) || 'General TODO';
        const title = `[TODO] ${summary}`;
        const body = `Found in \`${path.relative(root, file)}:${idx + 1}\`\n\n> ${line.trim()}`;
        const key = `${file}:${idx + 1}`;
        todos.push({ title, body, key });
      }
    });
  }
  return todos;
}

function ghRequest(method, urlPath, token, body) {
  const [owner, repo] = (process.env.GITHUB_REPOSITORY || '').split('/');
  const options = {
    hostname: 'api.github.com',
    path: `/repos/${owner}/${repo}${urlPath}`,
    method,
    headers: {
      'User-Agent': 'zion-autobot',
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${token}`,
    },
  };
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: data ? JSON.parse(data) : {} }); }
        catch { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token || !process.env.GITHUB_REPOSITORY) {
    console.log('Missing GITHUB_TOKEN or GITHUB_REPOSITORY; skipping.');
    return;
  }

  // Ensure label exists
  await ghRequest('POST', `/labels`, token, { name: LABEL, color: 'ededed' }).catch(() => {});

  // Fetch existing autobot TODO issues map
  const existing = await ghRequest('GET', `/issues?labels=${encodeURIComponent(LABEL)}&state=open&per_page=100`, token);
  const existingBodies = new Set((existing.data || []).map((i) => i.body));

  const todos = scanTodos(process.cwd());
  let created = 0;
  for (const t of todos) {
    if (existingBodies.has(t.body)) continue;
    const res = await ghRequest('POST', `/issues`, token, { title: t.title, body: t.body, labels: [LABEL] });
    if (res.status >= 200 && res.status < 300) created++;
  }
  console.log(`Created ${created} issues.`);
}

main().catch((e) => { console.error(e); process.exit(1); });