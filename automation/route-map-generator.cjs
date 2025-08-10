#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const pagesDir = path.join(process.cwd(), 'pages')
const ignore = new Set(['_app.tsx', '_document.tsx', 'api'])

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (e.name === 'api') continue
      yield* walk(full)
    } else {
      yield full
    }
  }
}

function routeFromFile(file) {
  const rel = path.relative(pagesDir, file).replace(/\\/g, '/')
  if (ignore.has(rel)) return null
  const noExt = rel.replace(/\.(tsx|ts|jsx|js|mdx)$/i, '')
  if (noExt.endsWith('/index')) return '/' + noExt.replace(/\/index$/, '')
  if (noExt === 'index') return '/'
  return '/' + noExt
}

const routes = []
for (const f of walk(pagesDir)) {
  const r = routeFromFile(f)
  if (!r) continue
  const stat = fs.statSync(f)
  routes.push({ route: r, bytes: stat.size })
}

routes.sort((a,b) => a.route.localeCompare(b.route))

const outPath = path.join(process.cwd(), 'public', 'reports', 'route-map.json')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
const json = JSON.stringify({ generatedAt: new Date().toISOString(), routes }, null, 2)
let before = null
if (fs.existsSync(outPath)) before = fs.readFileSync(outPath, 'utf8')
if (before !== json) {
  fs.writeFileSync(outPath, json)
  try {
    execSync('git add -A')
    execSync('git config user.name "zion-bot"')
    execSync('git config user.email "bot@zion.app"')
    execSync('git commit -m "chore(automation): update route map" || true')
    try { execSync('git push') } catch {}
  } catch {}
  console.log('[routes] updated')
} else {
  console.log('[routes] no changes')
}