#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const root = process.cwd()
const robotsPath = path.join(root, 'public', 'robots.txt')
const siteUrl = (process.env.SITE_URL || process.env.NETLIFY_SITE_URL || 'https://zion.app').replace(/\/$/, '')
const sitemapLine = `Sitemap: ${siteUrl}/sitemap.xml\n`

let before = ''
if (fs.existsSync(robotsPath)) before = fs.readFileSync(robotsPath, 'utf8')

let content = before || 'User-agent: *\nAllow: /\n\n'
if (!content.includes('Sitemap:')) content += sitemapLine
else content = content.replace(/Sitemap:[^\n]*\n?/g, sitemapLine)

if (content !== before) {
  fs.mkdirSync(path.dirname(robotsPath), { recursive: true })
  fs.writeFileSync(robotsPath, content)
  try {
    execSync('git add -A')
    execSync('git config user.name "zion-bot"')
    execSync('git config user.email "bot@zion.app"')
    execSync('git commit -m "chore(automation): ensure robots.txt has sitemap" || true')
    try { execSync('git push') } catch {}
  } catch {}
  console.log('[robots] updated robots.txt')
} else {
  console.log('[robots] no changes')
}