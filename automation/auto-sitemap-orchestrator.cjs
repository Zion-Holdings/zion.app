#!/usr/bin/env node
/* eslint-disable no-console */
import { execSync } from 'child_process'
import fs from 'fs'

function run(cmd) {
  return execSync(cmd, { stdio: 'pipe' }).toString().trim()
}

function changed() {
  try {
    const diff = run('git status --porcelain')
    return diff.includes('scripts/generate-sitemap.mjs') || diff.includes('sitemap') || diff.length > 0
  } catch { return false }
}

try {
  console.log('[sitemap] generating...')
  run('node scripts/generate-sitemap.mjs')
  if (!changed()) {
    console.log('[sitemap] no changes')
    process.exit(0)
  }
  console.log('[sitemap] committing changes')
  run('git add -A')
  run('git config user.name "zion-bot"')
  run('git config user.email "bot@zion.app"')
  run('git commit -m "chore(automation): update sitemap and related files" || true')
  try {
    run('git push')
  } catch (e) {
    console.log('[sitemap] push failed (likely no permissions in PR), skipping')
  }
  console.log('[sitemap] done')
} catch (e) {
  console.error('[sitemap] failed', e)
  process.exit(0)
}