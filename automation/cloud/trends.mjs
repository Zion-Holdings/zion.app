#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';

function requestJson(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const opts = { hostname: u.hostname, path: u.pathname + u.search, headers: { 'User-Agent': 'zion-autonomy-bot', ...headers } };
    https
      .get(opts, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
        });
      })
      .on('error', reject);
  });
}

async function fetchHNFrontPage(limit = 20) {
  const ids = await requestJson('https://hacker-news.firebaseio.com/v0/topstories.json');
  const top = ids.slice(0, limit);
  const stories = await Promise.all(
    top.map((id) => requestJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).catch(() => null))
  );
  return stories.filter(Boolean).map((s) => ({ id: s.id, title: s.title, url: s.url || `https://news.ycombinator.com/item?id=${s.id}`, score: s.score, by: s.by }));
}

async function fetchGitHubTrending(limit = 20) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const query = encodeURIComponent(`created:>${since}`);
  const api = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=${limit}`;
  const headers = token ? { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json' } : { Accept: 'application/vnd.github+json' };
  const json = await requestJson(api, headers);
  const items = (json.items || []).map((r) => ({ name: r.full_name, stars: r.stargazers_count, url: r.html_url, description: r.description, language: r.language }));
  return items;
}

function writeOutputs(data) {
  const outDir = path.join(process.cwd(), 'data', 'reports');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const jsonPath = path.join(outDir, 'trends.json');
  fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), ...data }, null, 2), 'utf8');

  const mdLines = ['# Autonomy Trends', '', `Generated: ${new Date().toISOString()}`, '', '## Hacker News Front Page'];
  for (const s of data.hn) mdLines.push(`- [${s.title}](${s.url}) — score ${s.score}`);
  mdLines.push('', '## GitHub Trending (last 7 days)');
  for (const r of data.gh) mdLines.push(`- [${r.name}](${r.url}) (${r.language || 'n/a'}) — ⭐ ${r.stars}`);
  const mdPath = path.join(outDir, 'trends.md');
  fs.writeFileSync(mdPath, mdLines.join('\n') + '\n', 'utf8');
  console.log('Wrote', jsonPath, 'and', mdPath);
}

async function main() {
  const [hn, gh] = await Promise.all([fetchHNFrontPage(20), fetchGitHubTrending(20)]);
  writeOutputs({ hn, gh });
}

main().catch((e) => { console.error('trends failed', e); process.exit(1); });