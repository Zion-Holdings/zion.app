#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SOURCES = [
  'https://news.ycombinator.com/',
  'https://www.reddit.com/r/MachineLearning/',
  'https://www.techmeme.com/',
];

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'ZionBot/1.0' } });
  return await res.text();
}

async function summarize(contents) {
  const prompt = `You are an industry analyst. Given raw HTML/text snapshots from tech sources, extract the top 8 trends relevant to AI marketplaces, developer tooling, cloud infra, and compliance. Produce a concise Markdown report with sections: Key Trends, Opportunities for Zion Marketplace (actionable), Risks, and Suggested Landing Topics.`;
  const input = contents.map((c, i) => `SOURCE ${i + 1} START\n${c.slice(0, 12000)}\nSOURCE ${i + 1} END`).join('\n\n');
  const resp = await client.chat.completions.create({ model: 'gpt-4o-mini', temperature: 0.3, messages: [ { role: 'system', content: prompt }, { role: 'user', content: input } ] });
  return resp.choices?.[0]?.message?.content || '';
}

async function main() {
  const snaps = [];
  for (const u of SOURCES) {
    try { snaps.push(await fetchText(u)); } catch (e) { console.warn('Fetch failed', u); }
  }
  const md = await summarize(snaps);
  const dir = path.join(process.cwd(), 'data', 'reports', 'market-intel');
  fs.mkdirSync(dir, { recursive: true });
  const ts = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const file = path.join(dir, `report-${ts.getFullYear()}${pad(ts.getMonth()+1)}${pad(ts.getDate())}.md`);
  fs.writeFileSync(file, md || '# Market Intelligence\n\n(No content)');
  console.log('Wrote', file);
}

main().catch((e) => { console.error(e); process.exit(1); });