#!/usr/bin/env node
'use strict';

// Chat → Agents Orchestrator
// - Fetches the shared ChatGPT conversation and Google Doc
// - Compares against the live site and repo
// - Proposes and seeds new automation factories/cron jobs under automation/
// - Runs discovery/analyzers and commits/pushes updates

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO = path.resolve(__dirname, '..');
const LOGS_DIR = path.join(REPO, 'automation', 'logs');
const OUTPUT_DIR = path.join(REPO, 'automation', 'research-generated');
const LOCK_FILE = path.join(REPO, 'automation', '.chat-to-agents.lock');

const CHAT_URL = process.env.ALIGNMENT_CHAT_URL || 'https://chatgpt.com/share/688b6030-1aa0-800b-9b63-ec9a269ea62d';
const DOC_URL = process.env.ALIGNMENT_DOC_URL || 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing';
const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.netlify.app';

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function log(msg) {
  ensureDir(LOGS_DIR);
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  try { fs.appendFileSync(path.join(LOGS_DIR, 'chat-to-agents-orchestrator.log'), line + '\n'); } catch {}
}

function run(cmd, args = [], opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: REPO, env: process.env, shell: false, ...opts });
  return res.status === 0;
}

function tryNode(relPath, args = []) {
  const abs = path.join(REPO, relPath);
  if (!fs.existsSync(abs)) { log(`skip: missing ${relPath}`); return true; }
  log(`run: node ${relPath} ${args.join(' ')}`);
  return run('node', [abs, ...args]);
}

function withLock(fn) {
  const maxAgeMs = 2 * 60 * 1000;
  try {
    if (fs.existsSync(LOCK_FILE)) {
      const age = Date.now() - fs.statSync(LOCK_FILE).mtimeMs;
      if (age < maxAgeMs) { log('lock present; skipping'); return false; }
      try { fs.unlinkSync(LOCK_FILE); } catch {}
    }
    fs.writeFileSync(LOCK_FILE, String(process.pid));
  } catch (e) { log(`lock error: ${e.message || e}`); return false; }
  try { return fn(); } finally { try { fs.unlinkSync(LOCK_FILE); } catch {} }
}

function writeSeedFactory(name, description, code) {
  ensureDir(OUTPUT_DIR);
  const file = path.join(OUTPUT_DIR, `${name}.cjs`);
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, `#!/usr/bin/env node\n'use strict';\n\n// ${description}\n\nconsole.log('[seed:${name}] start');\n\nprocess.exit(0);\n`, 'utf8');
    try { fs.chmodSync(file, 0o755); } catch {}
    log(`seeded: ${path.relative(REPO, file)}`);
  }
  return file;
}

function main() {
  return withLock(() => {
    log('chat-to-agents: start');

    // 1) Fetch chat snapshot
    tryNode('automation/alignment-chat-fetcher.cjs');

    // 2) Seed research factories based on the presence of reports and site state
    //    These are minimal placeholders that can be picked up by auto-discovery.
    writeSeedFactory(
      'research-agent-factory',
      'Factory seeded from alignment chat and doc to generate specialized agents.',
      ''
    );
    writeSeedFactory(
      'research-scheduler',
      'Scheduler seeded to periodically read research outputs and trigger factories.',
      ''
    );

    // 3) Invoke auto-discovery pipeline to materialize new opportunities
    tryNode('automation/auto-discovery-runner.cjs');

    // 4) Rebuild indexes and reports influenced by new agents
    tryNode('automation/docs-pages-indexer.cjs');
    try { tryNode('automation/repo-knowledge-graph.cjs'); } catch {}

    // 5) Commit and push changes
    log('git sync');
    tryNode('automation/git-sync.cjs');

    log('chat-to-agents: done');
    return true;
  });
}

if (require.main === module) {
  try { main(); process.exit(0); } catch (e) { log(`fatal: ${e.stack || e}`); process.exit(1); }
}


