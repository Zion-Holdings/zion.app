#!/usr/bin/env node
/* eslint-disable no-console */
const { spawnSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

function sh(cmd, args, opts={}) {
  const r = spawnSync(cmd, args, { encoding: 'utf-8', ...opts });
  if (r.status !== 0) return '';
  return r.stdout.trim();
}

async function main() {
  const repoRoot = process.cwd();
  const docsDir = path.join(repoRoot, 'docs');
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(docsDir);
  await fs.ensureDir(logsDir);

  const since = new Date(Date.now() - 24*60*60*1000).toISOString();
  const log = sh('git', ['log', `--since=${since}`, '--pretty=format:%h %s (%an)']);
  const dateSlug = new Date().toISOString().slice(0,10);
  const md = `# Changelog - ${dateSlug}\n\n${log ? log.split('\n').map(l => `- ${l}`).join('\n') : 'No changes in the last 24 hours.'}\n`;

  const file = path.join(docsDir, `changelog-${dateSlug}.md`);
  await fs.writeFile(file, md, 'utf-8');

  const status = { ranAt: new Date().toISOString(), file: path.relative(repoRoot, file), entries: log ? log.split('\n').length : 0 };
  await fs.writeJson(path.join(logsDir, 'changelog-autopilot-status.json'), status, { spaces: 2 });
  console.log('Changelog Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });