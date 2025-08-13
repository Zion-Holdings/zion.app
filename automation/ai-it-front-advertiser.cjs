#!/usr/bin/env node

'use strict';

// AI/IT Front Advertiser (new)
// - Reads public/automation/new-content-registry.json
// - Ensures links are featured on Reports index page list injection file

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REGISTRY = path.join(ROOT, 'public', 'automation', 'new-content-registry.json');
const AD_OUT = path.join(ROOT, 'public', 'automation', 'new-content-ads.json');

function safeReadJson(file, fallback) {
  try {
    if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {}
  return fallback;
}

function main() {
  const reg = safeReadJson(REGISTRY, { items: [] });
  const items = (reg.items || []).slice(0, 50);
  const payload = items.map(i => ({
    title: i.title,
    desc: i.subtitle,
    href: i.path
  }));
  fs.mkdirSync(path.dirname(AD_OUT), { recursive: true });
  fs.writeFileSync(AD_OUT, JSON.stringify({ items: payload, updatedAt: new Date().toISOString() }, null, 2));
  console.log('ai-it-front-advertiser: wrote', path.relative(ROOT, AD_OUT));
}

main();


