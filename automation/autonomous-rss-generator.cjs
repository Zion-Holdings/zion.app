#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function rss(channel, items) {
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const header = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>`;
  const footer = `</channel></rss>`;
  const ch = [`<title>${esc(channel.title)}</title>`,`<link>${esc(channel.link)}</link>`,`<description>${esc(channel.description)}</description>`];
  const its = items.map((it)=> `
    <item>
      <title>${esc(it.title)}</title>
      <link>${esc(it.link)}</link>
      <description>${esc(it.description||'')}</description>
      <pubDate>${new Date(it.date).toUTCString()}</pubDate>
      <guid>${esc(it.link)}</guid>
    </item>`);
  return [header, ...ch, ...its, footer].join('\n');
}

async function main(){
  const root = process.cwd();
  const reports = path.join(root, 'data', 'reports');
  const publicDir = path.join(root, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  let insights = null; let changelog = null;
  try { insights = JSON.parse(fs.readFileSync(path.join(reports, 'academy-insights.json'), 'utf8')); } catch {}
  try { changelog = JSON.parse(fs.readFileSync(path.join(reports, 'changelog.json'), 'utf8')); } catch {}

  const base = process.env.SELF_BASE_URL || 'https://zion.app';

  if (insights) {
    const items = (insights.trendingTopics||[]).slice(0,20).map((t)=> ({
      title: t.title,
      link: t.url || `${base}/academy/insights`,
      description: 'Trending topic from Academy Insights',
      date: insights.generatedAt
    }));
    const xml = rss({ title: 'Zion Academy Insights', link: `${base}/academy/insights`, description: 'Autonomous insights feed' }, items);
    fs.writeFileSync(path.join(publicDir, 'academy-insights.xml'), xml);
  }

  if (changelog) {
    const items = (changelog.changes||[]).slice(0,20).map((c)=> ({
      title: c.message,
      link: `${base}/admin/changelog#${c.hash}`,
      description: `Commit ${c.hash}`,
      date: c.when
    }));
    const xml = rss({ title: 'Zion Changelog', link: `${base}/admin/changelog`, description: 'Recent changes feed' }, items);
    fs.writeFileSync(path.join(publicDir, 'changelog.xml'), xml);
  }

  console.log('RSS feeds updated.');
}

main().catch((e)=>{ console.error(e); process.exitCode = 1; });