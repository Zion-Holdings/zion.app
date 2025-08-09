#!/usr/bin/env node
/* eslint-disable no-console */
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

function run(cmd) { return execSync(cmd, { stdio: 'pipe' }).toString().trim() }

try {
  const since = '24 hours ago'
  const log = run(`git log --since="${since}" --pretty=format:"- %s (%h)"`)
  if (!log) { console.log('[changelog] no recent commits'); process.exit(0) }
  const date = new Date().toISOString().split('T')[0]
  const entry = `\n## ${date}\n\n${log}\n`
  const file = path.join(process.cwd(), 'CHANGELOG.md')
  let before = ''
  if (fs.existsSync(file)) before = fs.readFileSync(file, 'utf8')
  const content = `# Changelog\n${entry}${before.replace(/^# Changelog\n?/, '')}`
  if (content !== before) {
    fs.writeFileSync(file, content)
    run('git add CHANGELOG.md')
    run('git config user.name "zion-bot"')
    run('git config user.email "bot@zion.app"')
    run('git commit -m "chore(automation): update changelog" || true')
    try { run('git push') } catch {}
    console.log('[changelog] updated')
  } else {
    console.log('[changelog] unchanged')
  }
} catch (e) {
  console.log('[changelog] non-fatal', e.message)
}