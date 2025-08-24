#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')

let sharp
try { sharp = require('sharp') } catch (e) {
  console.error('[images] sharp not installed. Install with: npm i sharp --no-save')
  process.exit(0)
}

const root = process.cwd()
const targetDir = path.join(root, 'public')
const exts = new Set(['.jpg', '.jpeg', '.png'])
let optimized = 0

function* walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else yield full
  }
}

function formatBytes(bytes) {
  const units = ['B','KB','MB','GB']
  let i = 0, n = bytes
  while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }
  return `${n.toFixed(1)} ${units[i]}`
}

for (const file of fs.existsSync(targetDir) ? walk(targetDir) : []) {
  const ext = path.extname(file).toLowerCase()
  if (!exts.has(ext)) continue
  try {
    const input = fs.readFileSync(file)
    const before = input.length
    let out
    if (ext === '.png') {
      out = sharp(input).png({ compressionLevel: 9, adaptiveFiltering: true })
    } else {
      out = sharp(input).jpeg({ quality: 78, mozjpeg: true })
    }
    const buf = out.toBufferSync()
    if (buf.length > 0 && buf.length < before * 0.98) { // at least 2% smaller
      fs.writeFileSync(file, buf)
      optimized++
      console.log(`[images] ${path.relative(root, file)}: ${formatBytes(before)} -> ${formatBytes(buf.length)}`)
    }
  } catch (e) {
    console.warn(`[images] skip ${file}: ${e.message}`)
  }
}

if (optimized > 0) {
  const run = (cmd) => require('child_process').execSync(cmd, { stdio: 'pipe' }).toString().trim()
  try {
    run('git add -A')
    run('git config user.name "zion-bot"')
    run('git config user.email "bot@zion.app"')
    run(`git commit -m "chore(automation): optimize ${optimized} images" || true`)
    try { run('git push') } catch {}
  } catch {}
  console.log(`[images] optimized ${optimized} assets`)
} else {
  console.log('[images] no changes')
}