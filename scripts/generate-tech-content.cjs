#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function fetchDevTo() {
  try {
    const url = 'https://dev.to/api/articles?per_page=20&top=1';
    const { data } = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'automation-bot' } });
    return (data || []).map(a => ({
      source: 'dev.to',
      title: a.title,
      url: a.url,
      tags: (a.tag_list || []).slice(0, 5),
      score: Math.min(1, (a.public_reactions_count || 0) / 100),
    }));
  } catch (e) {
    return [];
  }
}

async function fetchRedditProgramming() {
  try {
    const url = 'https://www.reddit.com/r/programming/top.json?limit=20&t=day';
    const { data } = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'automation-bot' } });
    const items = ((data || {}).data || {}).children || [];
    return items.map(i => ({
      source: 'reddit',
      title: i.data.title,
      url: 'https://www.reddit.com' + i.data.permalink,
      tags: ['reddit', 'programming'],
      score: Math.min(1, (i.data.ups || 0) / 1000),
    }));
  } catch (e) {
    return [];
  }
}

function rank(items) {
  return items
    .map(it => ({ ...it, score: Math.min(1, Math.max(0, it.score || 0.3)) }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 30);
}

async function main() {
  const [devto, reddit] = await Promise.all([fetchDevTo(), fetchRedditProgramming()]);
  const ranked = rank([...devto, ...reddit]);
  const out = { updatedAt: new Date().toISOString(), items: ranked };
  const target = path.join(__dirname, '..', 'data', 'automation', 'content.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2));
  console.log('Wrote', target);
}

main().catch(err => { console.error(err); process.exit(1); });