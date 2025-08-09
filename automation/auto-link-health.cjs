#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'child_process'

function run(cmd) { return execSync(cmd, { stdio: 'pipe' }).toString().trim() }

try {
  console.log('[links] scanning')
  run('node automation/site-link-crawler.cjs')
  console.log('[links] fixing')
  run('node automation/site-link-fixer.cjs')
  const diff = run('git status --porcelain')
  if (diff.length === 0) { console.log('[links] no changes'); process.exit(0) }
  run('git add -A')
  run('git config user.name "zion-bot"')
  run('git config user.email "bot@zion.app"')
  run('git commit -m "chore(automation): fix broken links and references" || true')
  try { run('git push') } catch {}
  console.log('[links] done')
} catch (e) {
  console.log('[links] non-fatal', e.message)
}