#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHNIdeas() {
  try {
    const url = 'https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30';
    const { data } = await axios.get(url, { timeout: 15000 });
    return (data.hits || []).map(h => ({
      title: h.title || h.story_title || 'Untitled',
      url: h.url || h.story_url || '',
      score: Number(h.points || 0) / 100,
      tags: ['hn'],
    }));
  } catch (e) {
    return [];
  }
}

async function fetchArXivAI() {
  try {
    const url = 'https://arxiv.org/list/cs.AI/recent';
    const { data } = await axios.get(url, { timeout: 15000 });
    const $ = cheerio.load(data);
    const items = [];
    $('dl > dt').each((i, el) => {
      const dd = $(el).next('dd');
      const title = dd.find('div.list-title').text().replace('Title:', '').trim();
      const link = 'https://arxiv.org' + ($(el).find('a').attr('href') || '');
      if (title) {
        items.push({ title, url: link, score: 0.4, tags: ['arxiv'] });
      }
    });
    return items.slice(0, 20);
  } catch (e) {
    return [];
  }
}

async function fetchGitHubTrending() {
  try {
    const url = 'https://github.com/trending';
    const { data } = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'automation-bot' } });
    const $ = cheerio.load(data);
    const items = [];
    $('article.Box-row').each((i, el) => {
      const repo = $(el).find('h2 a').text().replace(/\s+/g, '').trim();
      const href = 'https://github.com' + ($(el).find('h2 a').attr('href') || '');
      const desc = $(el).find('p').text().trim();
      if (repo) items.push({ title: repo, url: href, score: 0.3, tags: ['github', 'trending'], summary: desc });
    });
    return items.slice(0, 20);
  } catch (e) {
    return [];
  }
}

function rankAndSummarize(items) {
  // naive rank blend: normalize by source and length
  return items
    .map(it => ({ ...it, score: Math.min(1, Math.max(0, it.score || 0.3)) }))
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 30)
    .map(it => ({
      title: it.title,
      url: it.url,
      score: Number((it.score || 0).toFixed(2)),
      tags: it.tags || [],
      summary: it.summary || '',
    }));
}

async function main() {
  const results = await Promise.all([
    fetchHNIdeas(),
    fetchArXivAI(),
    fetchGitHubTrending(),
  ]);
  const items = results.flat();
  const ranked = rankAndSummarize(items);
  const out = {
    updatedAt: new Date().toISOString(),
    source: 'automation-scripts',
    items: ranked,
  };
  const target = path.join(__dirname, '..', 'data', 'automation', 'ideas.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2));
  console.log('Wrote', target);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});