#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const COMMUNITY_DIR = path.join(process.cwd(), 'data', 'community');
const DB = path.join(COMMUNITY_DIR, 'db.json');
const BACKUPS = path.join(COMMUNITY_DIR, 'backups');

if (!fs.existsSync(COMMUNITY_DIR)) fs.mkdirSync(COMMUNITY_DIR, { recursive: true });
if (!fs.existsSync(BACKUPS)) fs.mkdirSync(BACKUPS, { recursive: true });

const ts = new Date().toISOString().replace(/[:.]/g, '-');
const dest = path.join(BACKUPS, `db-${ts}.json`);

if (!fs.existsSync(DB)) {
  console.log('No db.json found, skipping backup');
  process.exit(0);
}

fs.copyFileSync(DB, dest);
console.log('✅ Community backup created:', dest);

// prune old backups (keep last 30)
const files = fs.readdirSync(BACKUPS).filter(f => f.endsWith('.json')).sort();
while (files.length > 30) {
  const oldest = files.shift();
  if (oldest) {
    fs.unlinkSync(path.join(BACKUPS, oldest));
    console.log('🧹 Pruned', oldest);
  }
}