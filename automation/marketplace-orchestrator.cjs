#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'marketplace');
const SOLUTIONS_DIR = path.join(DATA_DIR, 'solutions');
const LOG_DIR = path.join(__dirname, 'logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function log(message) {
  ensureDir(LOG_DIR);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(path.join(LOG_DIR, 'marketplace-orchestrator.log'), line);
}

function run(cmd, args, opts = {}) {
  log(`▶ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8', ...opts });
  if (res.stdout) fs.appendFileSync(path.join(LOG_DIR, 'marketplace-orchestrator.log'), res.stdout);
  if (res.stderr) fs.appendFileSync(path.join(LOG_DIR, 'marketplace-orchestrator.log'), res.stderr);
  if (res.status !== 0) log(`⚠️ Exit ${res.status}`);
  return res.status === 0;
}

function buildIndex() {
  ensureDir(SOLUTIONS_DIR);
  const entries = [];
  for (const file of fs.readdirSync(SOLUTIONS_DIR)) {
    if (!file.endsWith('.json')) continue;
    const full = path.join(SOLUTIONS_DIR, file);
    try {
      const data = JSON.parse(fs.readFileSync(full, 'utf8'));
      entries.push({
        slug: data.slug,
        title: data.title,
        summary: data.summary,
        priceUSD: data?.pricing?.priceUSD ?? (Array.isArray(data?.pricing?.tiers) ? data.pricing.tiers[0]?.priceUSD : undefined),
        tags: data.tags || [],
        status: data.status || 'draft',
        createdAt: data.createdAt
      });
    } catch (e) {
      log(`Failed to read ${file}: ${e.message}`);
    }
  }
  entries.sort((a,b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  const indexPath = path.join(DATA_DIR, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify({ timestamp: new Date().toISOString(), solutions: entries }, null, 2));
  log(`🗂️ Wrote index: ${indexPath} (${entries.length} items)`);
}

function cycle() {
  run('node', [path.join(__dirname, 'market-research-trends.cjs')]);
  run('node', [path.join(__dirname, 'intelligent-solutions-factory.cjs')]);
  buildIndex();
}

function start(mode = 'once') {
  log('🚀 Marketplace Orchestrator started');
  if (mode === 'continuous') {
    const loop = () => { cycle(); setTimeout(loop, 60 * 60 * 1000); };
    loop();
  } else {
    cycle();
  }
}

if (require.main === module) start(process.argv[2] || 'once');

module.exports = { start, buildIndex };