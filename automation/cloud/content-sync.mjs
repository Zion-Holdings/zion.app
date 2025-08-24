#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';

function ghRequest(pathname, token) {
  const options = {
    hostname: 'api.github.com',
    path: pathname,
    headers: {
      'User-Agent': 'zion-autonomy-bot',
      'Accept': 'application/vnd.github+json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
  return new Promise((resolve, reject) => {
    https
      .get(options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
        });
      })
      .on('error', reject);
  });
}

async function main() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const query = encodeURIComponent('stars:>50000');
  const result = await ghRequest(`/search/repositories?q=${query}&sort=stars&order=desc&per_page=10`, token);
  const items = (result.items || []).map((r) => ({
    name: r.full_name,
    stars: r.stargazers_count,
    url: r.html_url,
    description: r.description,
    language: r.language,
  }));
  const outDir = path.join(process.cwd(), 'data', 'reports');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'top-repos.json');
  const payload = { generatedAt: new Date().toISOString(), items };
  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8');
  console.log('Wrote', outPath, 'with', items.length, 'items');
}

main().catch((e) => {
  console.error('content-sync failed', e);
  process.exit(1);
});