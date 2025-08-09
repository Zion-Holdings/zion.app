#!/usr/bin/env node
/*
  Auto Market Intel: Fetch public signals (HN RSS + GitHub Trending HTML) and produce
  a summarized JSON report for the site to consume.
*/
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchHNFrontpage() {
  try {
    const url = 'https://hnrss.org/frontpage';
    const { data } = await axios.get(url, { timeout: 15000 });
    const titles = Array.from(data.matchAll(/<title><!\[CDATA\[(.*?)\]\]><\/title>/g))
      .slice(1) // skip feed title
      .map((m) => m[1]);
    return titles;
  } catch (e) {
    return [];
  }
}

async function fetchGitHubTrending() {
  try {
    const url = 'https://github.com/trending';
    const { data } = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'Mozilla/5.0' } });
    const $ = cheerio.load(data);
    const repos = [];
    $('article.Box-row').each((_, el) => {
      const repo = $(el).find('h2 a').text().trim().replace(/\s+/g, '');
      const desc = $(el).find('p').text().trim();
      const lang = $(el).find('[itemprop="programmingLanguage"]').text().trim();
      repos.push({ repo, desc, lang });
    });
    return repos;
  } catch (e) {
    return [];
  }
}

function deriveInsights({ hnTitles, ghTrending }) {
  const lowerTitles = hnTitles.map((t) => t.toLowerCase());
  const keywords = ['ai', 'ml', 'llm', 'rag', 'openai', 'langchain', 'vector', 'kubernetes', 'terraform', 'security'];
  const keywordCounts = Object.fromEntries(keywords.map((k) => [k, 0]));
  for (const t of lowerTitles) {
    for (const k of keywords) {
      if (t.includes(k)) keywordCounts[k]++;
    }
  }
  const topLangs = {};
  for (const r of ghTrending) {
    if (!r.lang) continue;
    topLangs[r.lang] = (topLangs[r.lang] || 0) + 1;
  }
  const topLanguages = Object.entries(topLangs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([lang, count]) => ({ lang, count }));
  return { keywordCounts, topLanguages };
}

async function main() {
  const hnTitles = await fetchHNFrontpage();
  const ghTrending = await fetchGitHubTrending();
  const insights = deriveInsights({ hnTitles, ghTrending });
  const outDir = path.join(process.cwd(), 'data', 'automation');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    sources: {
      hnFrontpage: hnTitles.slice(0, 30),
      githubTrending: ghTrending.slice(0, 30),
    },
    insights,
  };
  fs.writeFileSync(path.join(outDir, 'market-intel.json'), JSON.stringify(payload, null, 2), 'utf8');
  console.log('[auto-market-intel] Wrote data/automation/market-intel.json');
}

main().catch((e) => {
  console.error('auto-market-intel failed', e);
  process.exit(1);
});