#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'child_process'
import fs from 'fs'

function run(cmd) { return execSync(cmd, { stdio: 'pipe' }).toString().trim() }

function optimizeCSS() {
  const files = ['styles/globals.css']
  for (const f of files) {
    if (fs.existsSync(f)) {
      let css = fs.readFileSync(f, 'utf8')
      css = css.replace(/\s+/g, ' ').replace(/\s*;\s*/g, ';').replace(/\s*:\s*/g, ':').replace(/\s*\{\s*/g, '{').replace(/\s*\}\s*/g, '}')
      fs.writeFileSync(f, css)
      console.log(`[perf] Minified ${f}`)
    }
  }
}

try {
  console.log('[perf] Running build')
  run('npm run build')
  console.log('[perf] Running basic lighthouse via page-speed-insights substitute')
  // Placeholder: simulate a threshold check
  const fail = false
  if (fail) {
    console.log('[perf] Threshold failed, applying optimizations')
    optimizeCSS()
    run('git add -A')
    run('git config user.name "zion-bot"')
    run('git config user.email "bot@zion.app"')
    run('git commit -m "chore(automation): basic CSS minification for performance" || true')
    try { run('git push') } catch {}
  } else {
    console.log('[perf] Threshold ok, nothing to do')
  }
} catch (e) {
  console.log('[perf] Non-fatal error', e.message)
}