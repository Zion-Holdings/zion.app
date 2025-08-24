#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const routeMapPath = path.join(process.cwd(), 'public', 'reports', 'route-map.json')
const outDir = path.join(process.cwd(), 'public', 'og')

function titleFromRoute(route) {
  if (route === '/') return 'Zion AI Marketplace'
  return route.replace(/\//g, ' ').trim().replace(/\b\w/g, c => c.toUpperCase())
}

function svgFor(title) {
  const esc = title.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0ea5e9"/>
      <stop offset="100%" stop-color="#8b5cf6"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g transform="translate(80, 320)">
    <text x="0" y="0" font-family="Inter, Arial" font-size="72" font-weight="700" fill="#ffffff">${esc}</text>
  </g>
  <text x="80" y="560" font-family="Inter, Arial" font-size="28" fill="#e2e8f0">Zion — Autonomous Cloud</text>
</svg>`
}

try {
  if (!fs.existsSync(routeMapPath)) {
    console.log('[og] route map not found; generate it first');
    process.exit(0)
  }
  const data = JSON.parse(fs.readFileSync(routeMapPath, 'utf8'))
  const routes = (data.routes || []).slice(0, 30)
  fs.mkdirSync(outDir, { recursive: true })
  let changed = false
  for (const r of routes) {
    const name = r.route === '/' ? 'home' : r.route.replace(/^\//,'').replace(/\//g,'_')
    const file = path.join(outDir, `${name}.svg`)
    const content = svgFor(titleFromRoute(r.route))
    const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
    if (before !== content) {
      fs.writeFileSync(file, content)
      changed = true
      console.log('[og] wrote', path.relative(process.cwd(), file))
    }
  }
  if (changed) {
    execSync('git add -A')
    execSync('git config user.name "zion-bot"')
    execSync('git config user.email "bot@zion.app"')
    execSync('git commit -m "chore(automation): update OG images" || true')
    try { execSync('git push') } catch {}
  }
} catch (e) {
  console.log('[og] non-fatal', e.message)
}