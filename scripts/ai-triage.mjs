#!/usr/bin/env node
import https from 'https';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const GH_TOKEN = process.env.GITHUB_TOKEN || '';
const REPO = process.env.GITHUB_REPOSITORY || '';

if (!OPENAI_API_KEY || !GH_TOKEN || !REPO) {
  console.log('Missing OPENAI_API_KEY or GITHUB_TOKEN or REPO');
  process.exit(0);
}

function gh(path, method = 'GET', body) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'User-Agent': 'zion-autobot',
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    }, (res) => {
      let data = '';
      res.on('data', (d) => data += d);
      res.on('end', () => resolve({ status: res.statusCode, json: data ? JSON.parse(data) : {} }));
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function fetchItems() {
  const since = new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString();
  const issues = await gh(`/repos/${REPO}/issues?since=${since}&state=open&per_page=50`);
  return Array.isArray(issues.json) ? issues.json : [];
}

async function suggest(item) {
  const text = `Title: ${item.title}\nBody: ${item.body || ''}`;
  const prompt = `Classify GitHub issue/PR and suggest labels. Return JSON { labels: string[], priority: 'P0'|'P1'|'P2'|'P3', area?: string }.\n${text}`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0 })
  });
  const json = await res.json();
  try { return JSON.parse(json?.choices?.[0]?.message?.content || '{}'); } catch { return { labels: [] }; }
}

async function applyLabels(number, labels) {
  if (!labels?.length) return;
  await gh(`/repos/${REPO}/issues/${number}/labels`, 'POST', { labels });
}

async function main() {
  const items = await fetchItems();
  for (const it of items) {
    // Skip if already labeled
    if (it.labels?.length) continue;
    const s = await suggest(it);
    const labels = Array.from(new Set([...(s.labels || []), s.priority || ''])).filter(Boolean);
    await applyLabels(it.number, labels);
    await new Promise(r => setTimeout(r, 500));
  }
  console.log('✅ AI triage completed');
}

main().catch((e) => { console.error(e); process.exit(0); });