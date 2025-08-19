#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const REGISTRY = path.join(process.cwd(), 'public', 'automation', 'new-content-registry.json');
const OUT = path.join(process.cwd(), 'public', 'automation', 'new-content-ads.json');

function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

function main() {
  const reg = readJson(REGISTRY, { items: [] });
  const items = (reg.items || []).slice(0, 60).map(i => ({ title: i.title, desc: i.subtitle, href: i.path }));
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ items, updatedAt: new Date().toISOString() }, null, 2));
  console.log('ads updated');
}

main();


