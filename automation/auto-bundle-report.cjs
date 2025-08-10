#!/usr/bin/env node
/* eslint-disable no-console */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function run(cmd) { return execSync(cmd, { stdio: 'pipe' }).toString() }

try {
  const out = run('npm run build')
  const lines = out.split(/\r?\n/)
  const startIdx = lines.findIndex(l => l.trim().startsWith('Page'))
  const reportLines = startIdx >= 0 ? lines.slice(startIdx) : lines.slice(-200)
  const outDir = path.join(process.cwd(), 'public', 'reports')
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'bundle-report.txt'), reportLines.join('\n'))
  const runGit = (c) => execSync(c, { stdio: 'pipe' }).toString().trim()
  runGit('git add -A')
  runGit('git config user.name "zion-bot"')
  runGit('git config user.email "bot@zion.app"')
  runGit('git commit -m "chore(automation): update bundle report" || true')
  try { runGit('git push') } catch {}
  console.log('[bundle] report updated')
} catch (e) {
  console.log('[bundle] non-fatal', e.message)
}