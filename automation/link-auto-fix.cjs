#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (p.endsWith('.md') || p.endsWith('.mdx') || p.endsWith('.tsx') || p.endsWith('.ts') || p.endsWith('.html')) out.push(p);
  }
  return out;
}

function findLinks(text) {
  const urls = new Set();
  const regex = /(https?:\/\/[\w\.-]+[\w\-\./?#%=&]*)/gi;
  let m; while ((m = regex.exec(text))) urls.add(m[1]);
  return Array.from(urls);
}

async function check(url) {
  try {
    const res = await fetch(url, { method: 'HEAD' });
    return res.status < 400;
  } catch { return false; }
}

async function suggestFix(broken) {
  const prompt = `Fix these broken URLs by suggesting correct current equivalents. Return JSON array of {from,to,notes}.`;
  const input = broken.join('\n');
  const resp = await client.chat.completions.create({ model: 'gpt-4o-mini', temperature: 0.3, messages: [ { role: 'system', content: prompt }, { role: 'user', content: input } ] });
  try { return JSON.parse(resp.choices?.[0]?.message?.content || '[]'); } catch { return []; }
}

async function main() {
  const files = walk(path.join(process.cwd()));
  const brokenMap = new Map();
  for (const f of files) {
    const txt = fs.readFileSync(f, 'utf8');
    const urls = findLinks(txt);
    const bad = [];
    for (const u of urls) { if (!(await check(u))) bad.push(u); }
    if (bad.length) brokenMap.set(f, bad);
  }

  const allBroken = Array.from(brokenMap.values()).flat();
  if (allBroken.length === 0) { console.log('No broken links found'); return; }

  const fixes = await suggestFix(allBroken);
  const report = [];

  for (const [file, list] of brokenMap.entries()) {
    let txt = fs.readFileSync(file, 'utf8');
    for (const b of list) {
      const fix = fixes.find((x) => x.from === b);
      if (fix && fix.to && txt.includes(b)) {
        txt = txt.split(b).join(fix.to);
        report.push({ file, from: b, to: fix.to });
      }
    }
    fs.writeFileSync(file, txt);
  }

  const outDir = path.join(process.cwd(), 'data', 'reports', 'link-auto-fix');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, `report-${Date.now()}.json`), JSON.stringify(report, null, 2));
  console.log('Fixes:', report.length);
}

main().catch((e) => { console.error(e); process.exit(1); });