#!/usr/bin/env node
/* eslint-disable no-console */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function run(cmd) { return execSync(cmd, { stdio: 'pipe' }).toString().trim() }

try {
  try { run('npx cspell --version') } catch { console.log('[typo] installing cspell'); run('npm i -D cspell') }
  const outDir = path.join(process.cwd(), 'public', 'reports')
  fs.mkdirSync(outDir, { recursive: true })
  const report = path.join(outDir, 'typo-report.txt')
  const output = run('npx cspell "**/*.{ts,tsx,js,jsx,md,mdx}" --no-progress || true')
  fs.writeFileSync(report, output)
  run('git add -A')
  run('git config user.name "zion-bot"')
  run('git config user.email "bot@zion.app"')
  run('git commit -m "chore(automation): update typo report" || true')
  try { run('git push') } catch {}
  console.log('[typo] report updated')
} catch (e) {
  console.log('[typo] non-fatal', e.message)
}