#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const { searchWeb, fetchAndExtract } = require('./lib/web-research.cjs');
const { summarizeWithOpenAI } = require('./lib/summarize.cjs');

const ROOT = path.resolve(__dirname, '..');
const UPDATES_DIR = path.join(ROOT, 'pages', 'reports', 'updates');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listLatestUpdateFile() {
  ensureDir(UPDATES_DIR);
  const files = fs.readdirSync(UPDATES_DIR).filter((f) => f.endsWith('.tsx'));
  if (!files.length) return null;
  const fulls = files.map((f) => ({ f, m: fs.statSync(path.join(UPDATES_DIR, f)).mtimeMs }));
  fulls.sort((a, b) => b.m - a.m);
  return path.join(UPDATES_DIR, fulls[0].f);
}

function ensureResearchSection(source) {
  if (source.includes('id="research-snapshot"')) return source;
  const insertAt = source.lastIndexOf('</main>');
  if (insertAt === -1) return source;
  const section = [
    '        <section className="mt-10">',
    '          <h2>Research Snapshot</h2>',
    '          <p className="text-white/70">This update includes a brief snapshot of recent web insights gathered automatically.</p>',
    '          <div id="research-snapshot"></div>',
    '        </section>',
  ].join('\n');
  return source.slice(0, insertAt) + section + '\n' + source.slice(insertAt);
}

async function buildBullets() {
  const queries = [
    'AI automation content generation best practices 2025',
    'marketing automation LLM research summary',
    'site content quality improvement with web research',
  ];
  const results = [];
  for (const q of queries) {
    // eslint-disable-next-line no-await-in-loop
    const r = await searchWeb(q);
    if (Array.isArray(r)) results.push(...r.slice(0, 2));
  }
  const picked = results.slice(0, 3);
  const bullets = [];
  for (const it of picked) {
    // eslint-disable-next-line no-await-in-loop
    const text = await fetchAndExtract(it.url);
    if (!text) continue;
    // eslint-disable-next-line no-await-in-loop
    const s = await summarizeWithOpenAI(text, { bullets: true });
    bullets.push(`- ${it.title}: ${s}`);
  }
  return bullets;
}

async function injectResearch(filePath) {
  const abs = filePath || listLatestUpdateFile();
  if (!abs || !fs.existsSync(abs)) return false;
  let content = fs.readFileSync(abs, 'utf8');
  const withSection = ensureResearchSection(content);
  if (withSection !== content) {
    fs.writeFileSync(abs, withSection, 'utf8');
    content = withSection;
  }
  const bullets = await buildBullets();
  if (!bullets.length) return false;
  const marker = '<div id="research-snapshot"></div>';
  const idx = content.indexOf(marker);
  if (idx === -1) return false;
  const list = [
    '          <ul className="list-disc">',
    ...bullets.map((b) => `            <li>${b}</li>`),
    '          </ul>',
  ].join('\n');
  const updated = content.replace(marker, list);
  if (updated !== content) {
    fs.writeFileSync(abs, updated, 'utf8');
    return true;
  }
  return false;
}

(async function main() {
  try {
    const target = process.argv[2] && path.resolve(process.argv[2]);
    await injectResearch(target);
    process.exit(0);
  } catch (e) {
    process.exit(0); // best-effort, non-fatal
  }
})();


