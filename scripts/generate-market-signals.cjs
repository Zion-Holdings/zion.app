#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function npmDownloads(pkg) {
  try {
    const to = new Date();
    const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const url = `https://api.npmjs.org/downloads/point/${from.toISOString().slice(0,10)}:${to.toISOString().slice(0,10)}/${pkg}`;
    const { data } = await axios.get(url, { timeout: 10000 });
    return { package: pkg, downloads: data.downloads || 0 };
  } catch (e) {
    return { package: pkg, downloads: 0 };
  }
}

async function githubTrendingLanguages() {
  try {
    const { data } = await axios.get('https://github.com/trending', { timeout: 15000, headers: { 'User-Agent': 'automation-bot' } });
    const langs = [];
    const matches = String(data).match(/lang\-([A-Za-z\+\#]+)/g) || [];
    const count = matches.reduce((acc, m) => { const k = m.replace('lang-',''); acc[k] = (acc[k]||0)+1; return acc; }, {});
    Object.entries(count).forEach(([language, mentions]) => langs.push({ language, mentions }));
    langs.sort((a,b) => b.mentions - a.mentions);
    return langs.slice(0, 10);
  } catch (e) {
    return [];
  }
}

async function main() {
  const pkgs = ['next', 'react', 'tailwindcss', 'axios', 'openai'];
  const downloads = await Promise.all(pkgs.map(npmDownloads));
  const trending = await githubTrendingLanguages();
  const out = {
    updatedAt: new Date().toISOString(),
    metrics: {
      npmDownloads: downloads,
      githubTrending: trending,
    }
  };
  const target = path.join(__dirname, '..', 'data', 'automation', 'market.json');
  fs.writeFileSync(target, JSON.stringify(out, null, 2));
  console.log('Wrote', target);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});