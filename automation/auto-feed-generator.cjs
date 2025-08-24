#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const siteUrl = (process.env.SITE_URL || process.env.NETLIFY_SITE_URL || 'https://zion.app').replace(/\/$/, '')
const blogDir = path.join(process.cwd(), 'pages', 'blog')
const outXml = path.join(process.cwd(), 'public', 'feed.xml')
const outJson = path.join(process.cwd(), 'public', 'feed.json')

function toTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

function entries() {
  if (!fs.existsSync(blogDir)) return []
  return fs.readdirSync(blogDir)
    .filter(n => n.endsWith('.tsx'))
    .map(n => n.replace(/\.tsx$/, ''))
    .filter(n => n !== 'index')
    .map(slug => ({ slug, url: `${siteUrl}/blog/${slug}`, title: toTitle(slug), date: new Date().toISOString() }))
}

const items = entries()

function xmlFeed(items) {
  const head = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Zion Blog</title><link>${siteUrl}/blog</link><description>Updates from Zion</description>`
  const tail = `</channel></rss>\n`
  const body = items.map(i => `<item><title>${i.title}</title><link>${i.url}</link><guid>${i.url}</guid><pubDate>${new Date(i.date).toUTCString()}</pubDate></item>`).join('')
  return head + body + tail
}

function jsonFeed(items) {
  return JSON.stringify({ version: 'https://jsonfeed.org/version/1', title: 'Zion Blog', home_page_url: `${siteUrl}/blog`, feed_url: `${siteUrl}/feed.json`, items: items.map(i => ({ id: i.url, url: i.url, title: i.title, date_published: i.date })) }, null, 2)
}

function writeIfChanged(file, content) {
  const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : ''
  if (before !== content) {
    fs.mkdirSync(path.dirname(file), { recursive: true })
    fs.writeFileSync(file, content)
    return true
  }
  return false
}

const changed = [
  writeIfChanged(outXml, xmlFeed(items)),
  writeIfChanged(outJson, jsonFeed(items)),
].some(Boolean)

if (changed) {
  try {
    execSync('git add -A')
    execSync('git config user.name "zion-bot"')
    execSync('git config user.email "bot@zion.app"')
    execSync('git commit -m "chore(automation): update blog feeds" || true')
    try { execSync('git push') } catch {}
  } catch {}
  console.log('[feed] updated')
} else {
  console.log('[feed] no changes')
}