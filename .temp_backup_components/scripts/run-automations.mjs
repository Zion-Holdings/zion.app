import fs from 'fs';
import path from 'path';

let OpenAIClient = null;
try {
  const { OpenAI } = await import('openai');
  if (process.env.OPENAI_API_KEY) {
    OpenAIClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
} catch {}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function readJson(filePath, fallback) {
  try { return JSON.parse(fs.readFileSync(filePath, 'utf-8')); } catch { return fallback; }
}

async function generateTrends() {
  const file = path.join(process.cwd(), 'data', 'ai-trends.json');
  const existing = readJson(file, []);
  const now = new Date();
  const id = `trend_${now.toISOString().slice(0,10)}`;
  const date = now.toISOString();

  if (existing.find(x => x.id === id)) return; // avoid duplicate for the day

  let title = 'Daily AI/Cloud Trend Brief';
  let summary = 'Fallback: Daily synthesized overview of AI, cloud, and developer tooling trends.';
  let highlights = [
    'Model efficiency and inference optimization remain top-of-mind.',
    'Teams seek practical RAG patterns and evaluation frameworks.',
    'Platform and security automation continues to accelerate.'
  ];
  let tags = ['ai','cloud','devtools'];

  if (OpenAIClient) {
    const prompt = 'Provide a concise 3-5 bullet analysis of current AI/cloud/devtools trends for today with a 1-2 sentence executive summary. Format as JSON with fields: title, summary, highlights (array), tags (array). Keep neutral tone.';
    const resp = await OpenAIClient.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful analyst generating actionable daily briefs.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
    });
    const content = resp.choices?.[0]?.message?.content || '';
    try {
      const parsed = JSON.parse(content);
      title = parsed.title || title;
      summary = parsed.summary || summary;
      highlights = Array.isArray(parsed.highlights) ? parsed.highlights : highlights;
      tags = Array.isArray(parsed.tags) ? parsed.tags : tags;
    } catch {}
  }

  const record = { id, date, title, summary, highlights, tags };
  existing.push(record);
  existing.sort((a, b) => (a.date < b.date ? 1 : -1));
  writeJson(file, existing);
  console.log('Generated trends:', record.id);
}

async function generateTalentSummaries() {
  const talent = await import('../data/talent.ts');
  const outFile = path.join(process.cwd(), 'data', 'talent_ai.json');
  const now = new Date().toISOString();
  const summaries = [];

  for (const t of talent.TALENT_PROFILES) {
    let summary = `${t.name} excels as ${t.title}. Core strengths: ${t.skills.slice(0,5).join(', ')}.`;
    if (OpenAIClient) {
      const prompt = `Write a crisp 3-4 sentence professional summary tailored to a client evaluating ${t.name} (title: ${t.title}, skills: ${t.skills.join(', ')}). Emphasize outcomes and reliability.`;
      const resp = await OpenAIClient.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You write concise, client-friendly talent summaries.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.4,
      });
      summary = resp.choices?.[0]?.message?.content?.trim() || summary;
    }
    summaries.push({ slug: t.slug, summary });
  }

  writeJson(outFile, { generatedAt: now, summaries });
  console.log('Updated talent summaries:', summaries.length);
}

// New: News Digest from RSS feeds using built-in fetch
async function generateNewsDigest() {
  const feeds = [
    'https://hnrss.org/frontpage',
    'https://aws.amazon.com/about-aws/whats-new/recent/feed/',
    'https://azure.microsoft.com/en-us/updates/feed/',
  ];
  const items = [];
  for (const url of feeds) {
    try {
      const res = await fetch(url);
      const xml = await res.text();
      const entryRegex = /<item>[\s\S]*?<title>([\s\S]*?)<\/title>[\s\S]*?<link>([\s\S]*?)<\/link>[\s\S]*?<description>([\s\S]*?)<\/description>[\s\S]*?<\/item>/gi;
      let m;
      let count = 0;
      while ((m = entryRegex.exec(xml)) && count < 5) {
        const title = m[1].replace(/<!\[CDATA\[|\]\]>/g, '').trim();
        const link = m[2].trim();
        const desc = m[3].replace(/<!\[CDATA\[|\]\]>/g, '').replace(/<[^>]+>/g, '').trim();
        items.push({ source: new URL(url).hostname, title, url: link, summary: desc.slice(0, 280), tags: [] });
        count++;
      }
    } catch {}
  }

  let summarized = items;
  if (OpenAIClient && items.length) {
    const prompt = `Summarize the following headlines and descriptions into concise items with 1-2 sentence summaries and 2-3 short tags. Return JSON array of {title, url, summary, tags}.\n\n${items.map(i=>`- ${i.title}: ${i.summary}`).join('\n')}`;
    try {
      const resp = await OpenAIClient.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You distill tech news into concise summaries.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
      });
      const content = resp.choices?.[0]?.message?.content || '';
      summarized = JSON.parse(content);
      summarized = summarized.map((x) => ({ source: 'digest', title: x.title, url: x.url || '#', summary: x.summary, tags: x.tags || [] }));
    } catch {}
  }

  const outFile = path.join(process.cwd(), 'data', 'news-digest.json');
  writeJson(outFile, { generatedAt: new Date().toISOString(), items: summarized.slice(0, 15) });
  console.log('Updated news digest:', summarized.length);
}

// New: Repo health via GitHub API
async function generateRepoHealth() {
  const ghToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const headers = ghToken ? { Authorization: `Bearer ${ghToken}` } : {};
  const repos = [];
  const repoList = [process.env.GITHUB_REPOSITORY || 'Zion-Holdings/zion.app'];
  for (const full of repoList) {
    try {
      const r = await fetch(`https://api.github.com/repos/${full}`, { headers });
      const repo = await r.json();
      const pulls = await fetch(`https://api.github.com/repos/${full}/pulls?state=open&per_page=1`, { headers }).then(x=>x.json());
      const issues = await fetch(`https://api.github.com/repos/${full}/issues?state=open&per_page=1`, { headers }).then(x=>x.json());
      repos.push({
        fullName: repo.full_name,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        openIssues: Array.isArray(issues) ? issues.length : 0,
        openPRs: Array.isArray(pulls) ? pulls.length : 0,
        defaultBranch: repo.default_branch,
        latestCommitAt: repo.pushed_at,
      });
    } catch {}
  }
  const outFile = path.join(process.cwd(), 'data', 'repo-health.json');
  writeJson(outFile, { generatedAt: new Date().toISOString(), repos });
  console.log('Updated repo health:', repos.length);
}

// New: Dependency radar via npm registry
async function generateDepRadar() {
  const pkgPath = path.join(process.cwd(), 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const outdated = [];
  async function latestOf(name) {
    try { const r = await fetch(`https://registry.npmjs.org/${name}`); const j = await r.json(); return j['dist-tags']?.latest || ''; } catch { return ''; }
  }
  for (const [name, current] of Object.entries(pkg.dependencies || {})) {
    const latest = await latestOf(name);
    if (latest && latest !== current) outdated.push({ name, current, latest, type: 'dependency' });
  }
  for (const [name, current] of Object.entries(pkg.devDependencies || {})) {
    const latest = await latestOf(name);
    if (latest && latest !== current) outdated.push({ name, current, latest, type: 'devDependency' });
  }
  const outFile = path.join(process.cwd(), 'data', 'dep-radar.json');
  writeJson(outFile, { generatedAt: new Date().toISOString(), outdated });
  console.log('Updated dependency radar:', outdated.length);
}

// New: Site map intelligence by scanning pages directory
async function generateSiteMapIntel() {
  const pagesDir = path.join(process.cwd(), 'pages');
  function walk(dir, acc) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full, acc);
      else if (e.isFile() && (e.name.endsWith('.tsx') || e.name.endsWith('.ts') || e.name.endsWith('.js'))) {
        const rel = full.replace(pagesDir, '').replace(/index\.(tsx|ts|js)$/,'').replace(/\.(tsx|ts|js)$/,'');
        const route = rel === '' ? '/' : rel;
        const stat = fs.statSync(full);
        acc.push({ path: route, lastModified: stat.mtime.toISOString() });
      }
    }
    return acc;
  }
  const routes = walk(pagesDir, []).sort((a, b) => a.path.localeCompare(b.path));
  const outFile = path.join(process.cwd(), 'data', 'site-map.json');
  writeJson(outFile, { generatedAt: new Date().toISOString(), routes });
  console.log('Updated site map intelligence:', routes.length);
}

await generateTrends();
await generateTalentSummaries();
await generateNewsDigest();
await generateRepoHealth();
await generateDepRadar();
await generateSiteMapIntel();
console.log('Automations complete.');