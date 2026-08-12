#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const outDir = path.join(repo, 'public');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function writeService(id) {
  const file = path.join(outDir, 'services', id, 'index.html');
  if (fs.existsSync(file)) return;
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${id.replace(/-/g,' ')} | Zion Tech Group</title><meta name="description" content="Service page for ${id.replace(/-/g,' ')} at Zion Tech Group."/></head><body><h1>${id.replace(/-/g,' ')}</h1><p>Service details for ${id.replace(/-/g,' ')}.</p></body></html>`);
}

function writeBlog(slug) {
  const file = path.join(outDir, 'blog', slug, 'index.html');
  if (fs.existsSync(file)) return;
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${slug.replace(/-/g,' ')} | Zion Tech Group</title><meta name="description" content="Blog post: ${slug.replace(/-/g,' ')}."/></head><body><h1>${slug.replace(/-/g,' ')}</h1><p>Blog post content for ${slug.replace(/-/g,' ')}.</p></body></html>`);
}

function scanAndWrite(dir, writer) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory() && e.name !== '[slug]' && e.name !== '[id]' && e.name !== 'stage') {
        writer(e.name);
      }
    }
  } catch (e) {
    console.warn('WARN: cannot read', dir, e.message);
  }
}

console.log('Generating public static HTML for dynamic routes...');
scanAndWrite(path.join(repo, 'app', 'services'), writeService);
scanAndWrite(path.join(repo, 'app', 'blog'), writeBlog);
console.log('Done.');
