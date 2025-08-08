#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const OUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'spec-dev');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function extractPrompts(html) {
  const $ = cheerio.load(html || '');
  const text = $('body').text();
  const lines = text.split(/\n+/).map(s => s.trim()).filter(Boolean);
  const tasks = [];
  lines.forEach((l) => {
    if (/create|build|fix|improve|add|implement/i.test(l) && l.length > 20) tasks.push(l);
  });
  return tasks.slice(0, 50);
}

function toActions(tasks, discoveredUrls) {
  const actions = [];
  for (const t of tasks) {
    actions.push({ type: 'dev_task', prompt: t });
  }
  // ensure discovered site pages are visible on homepage/navigation
  actions.push({ type: 'homepage_advertise', pages: (discoveredUrls || []).slice(0, 200) });
  return actions;
}

function main() {
  ensureDir(OUT_DIR);
  const chatRaw = path.join(OUT_DIR, 'chat-raw.html');
  const siteCrawl = path.join(OUT_DIR, 'site-crawl.json');
  const html = fs.existsSync(chatRaw) ? fs.readFileSync(chatRaw, 'utf8') : '';
  const discovered = fs.existsSync(siteCrawl) ? JSON.parse(fs.readFileSync(siteCrawl, 'utf8')).discovered : [];
  const prompts = extractPrompts(html);
  const actions = toActions(prompts, discovered);
  const out = path.join(OUT_DIR, 'spec-dev-actions.json');
  fs.writeFileSync(out, JSON.stringify({ timestamp: new Date().toISOString(), prompts, actions }, null, 2));
  console.log(`Spec-dev analyzer: ${actions.length} action(s)`);
}

main();


