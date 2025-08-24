/* Autonomous Tech Radar
   Curates trending technologies from public sources and writes a digest JSON for the site.
*/

const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'zion-automation/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'zion-automation/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function getPypiTop() {
  try {
    const url = 'https://hugovk.github.io/top-pypi-packages/top-pypi-packages-30-days.json';
    const data = await fetchJson(url);
    const items = (data.rows || []).slice(0, 20).map((r) => ({
      source: 'PyPI',
      name: r.project,
      url: `https://pypi.org/project/${r.project}/`,
      downloads: r.downloads,
    }));
    return items;
  } catch (e) {
    console.warn('PyPI fetch failed:', e.message);
    return [];
  }
}

async function getCratesTop() {
  try {
    const url = 'https://crates.io/api/v1/crates?page=1&sort=downloads&per_page=20';
    const data = await fetchJson(url);
    const items = (data.crates || []).map((c) => ({
      source: 'crates.io',
      name: c.id,
      url: `https://crates.io/crates/${c.id}`,
      downloads: c.downloads,
      description: c.description || '',
    }));
    return items;
  } catch (e) {
    console.warn('crates.io fetch failed:', e.message);
    return [];
  }
}

async function getGithubTrendingByLang(lang) {
  try {
    const html = await fetchText(`https://github.com/trending/${encodeURIComponent(lang)}?since=daily`);
    const $ = cheerio.load(html);
    const items = [];
    $('article.Box-row').slice(0, 10).each((_, el) => {
      const a = $(el).find('h2 a');
      const href = 'https://github.com' + a.attr('href').trim();
      const title = a.text().replace(/\s+/g, ' ').trim();
      const desc = $(el).find('p').text().trim();
      items.push({ source: `GitHub Trending (${lang})`, name: title, url: href, description: desc });
    });
    return items;
  } catch (e) {
    console.warn(`GitHub Trending ${lang} fetch failed:`, e.message);
    return [];
  }
}

async function run() {
  const started = new Date();
  const [py, rs, js, ts, pytr, rusttr] = await Promise.all([
    getPypiTop(),
    getCratesTop(),
    getGithubTrendingByLang('javascript'),
    getGithubTrendingByLang('typescript'),
    getGithubTrendingByLang('python'),
    getGithubTrendingByLang('rust'),
  ]);

  const digest = {
    generatedAt: started.toISOString(),
    ecosystems: {
      pypi: py,
      crates: rs,
      github: { javascript: js, typescript: ts, python: pytr, rust: rusttr },
    },
  };

  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'tech-radar.json');
  await fs.writeJson(outFile, digest, { spaces: 2 });

  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  const logFile = path.join(logDir, 'tech-radar.log');
  const durationMs = Date.now() - started.getTime();
  await fs.appendFile(logFile, `[${new Date().toISOString()}] durationMs=${durationMs}\n`);
  console.log(`Tech Radar generated -> ${outFile}`);
}

run().catch((e) => {
  console.error('Tech Radar failed:', e);
  process.exitCode = 1;
});