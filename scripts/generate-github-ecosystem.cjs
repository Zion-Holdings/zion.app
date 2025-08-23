#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const GH = process.env.GITHUB_TOKEN || '';

async function searchRepos(q) {
  try {
    const { data } = await axios.get('https://api.github.com/search/repositories', {
      params: { q, sort: 'stars', order: 'desc', per_page: 10 },
      headers: GH ? { Authorization: `token ${GH}` } : undefined,
      timeout: 15000,
    });
    return (data.items || []).map(r => ({ full_name: r.full_name, stars: r.stargazers_count, html_url: r.html_url }));
  } catch (e) {
    return [];
  }
}

async function main() {
  const topics = ['nextjs', 'react', 'openai', 'tailwindcss'];
  const results = {};
  for (const t of topics) {
    results[t] = await searchRepos(`topic:${t}`);
  }
  const out = { updatedAt: new Date().toISOString(), topics: results };
  const target = path.join(__dirname, '..', 'data', 'automation', 'github.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2));
  console.log('Wrote', target);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});