#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const outDir = path.join(repo, 'public');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

const commonHead = (title, description, canonical) => `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${title}</title><meta name="description" content="${description}"/><link rel="canonical" href="${canonical}"/><link rel="stylesheet" href="/styles.css"/><style>:root{color-scheme:dark}body{background:#020617;color:#e5e7eb;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,Apple Color Emoji,Segoe UI Emoji;margin:0}header{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid #334155;background:rgba(2,6,23,.8);backdrop-filter:blur(12px);position:sticky;top:0;z-index:50}header a{color:#34d399;text-decoration:none;font-weight:700}nav a{margin-left:16px;color:#cbd5e1;text-decoration:none}nav a:hover{color:#34d399}footer{border-top:1px solid #334155;padding:24px;text-align:center;color:#94a2b8}footer a{color:#34d399;margin:0 8px;text-decoration:none}.container{max-width:1100px;margin:0 auto;padding:24px}.section{padding:64px 0}.card{border:1px solid #334155;border-radius:12px;padding:18px;background:#0b1220;margin-top:16px}.btn{display:inline-block;margin-top:16px;padding:12px 20px;border-radius:8px;background:#2563eb;color:#fff;text-decoration:none;font-weight:600}.btn-secondary{background:#0ea5e9;margin-left:10px}.backlink{color:#93c5fd;text-decoration:none}</style></head><body><header><a href="/">Zion Tech Group</a><nav><a href="/services/">Services</a><a href="/pricing/">Pricing</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav></header><main>`;

const commonFoot = `</main><footer><div class="container"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a><a href="/contact/">Contact</a><p>© 2026 Zion Tech Group. All rights reserved.</p></div></footer></body></html>`;

function writeService(id) {
  const title = id.replace(/-/g,' ');
  const file = path.join(outDir, 'services', id, 'index.html');
  if (fs.existsSync(file)) return;
  ensureDir(path.dirname(file));
  const html = `${commonHead}<title>${title} | Zion Tech Group</title><meta name="description" content="Service page for ${title} at Zion Tech Group."/><link rel="canonical" href="https://ziontechgroup.com/services/${id}/"/></head><body><header><a href="/">Zion Tech Group</a><nav><a href="/services/">Services</a><a href="/pricing/">Pricing</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav></header><main><div class="container"><nav style="margin-top:16px"><a class="backlink" href="/services/">← Services</a></nav><div class="card"><h1 style="margin-top:8px">${title}</h1><p>Service details and implementation options for <strong>${title}</strong>. We provide measurable outcomes with ROI-first delivery.</p><div><a class="btn" href="/contact/">Request Proposal</a><a class="btn btn-secondary" href="/pricing/">View Pricing</a></div></div><div class="card"><h2>Related services</h2><p><a class="backlink" href="/services/?category=ai">AI services</a> · <a class="backlink" href="/services/?category=it">IT services</a> · <a class="backlink" href="/services/?category=security">Security services</a> · <a class="backlink" href="/services/?category=cloud">Cloud services</a></p></div></div></main><footer><div class="container"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a><a href="/contact/">Contact</a><p>© 2026 Zion Tech Group. All rights reserved.</p></div></footer></body></html>`;
  fs.writeFileSync(file, html);
}

function writeBlog(slug) {
  const title = slug.replace(/-/g,' ').replace(/2026/g,'').trim() || 'Blog';
  const file = path.join(outDir, 'blog', slug, 'index.html');
  if (fs.existsSync(file)) return;
  ensureDir(path.dirname(file));
  const html = `${commonHead}<title>${title} | Zion Tech Group</title><meta name="description" content="Insights and guides about ${title} from Zion Tech Group."/><link rel="canonical" href="https://ziontechgroup.com/blog/${slug}/"/></head><body><header><a href="/">Zion Tech Group</a><nav><a href="/services/">Services</a><a href="/pricing/">Pricing</a><a href="/about/">About</a><a href="/contact/">Contact</a></nav></header><main><div class="container"><nav style="margin-top:16px"><a class="backlink" href="/blog/">← Blog</a></nav><div class="card"><h1 style="margin-top:8px">${title}</h1><p>Expert perspective on <strong>${title}</strong>. Explore practical guidance, patterns, and implementation notes from the Zion Tech Group team.</p><div><a class="btn" href="/contact/">Talk to an Expert</a><a class="btn btn-secondary" href="/services/">Explore Services</a></div></div><div class="card"><h2>More insights</h2><p><a class="backlink" href="/blog/">All posts</a> · <a class="backlink" href="/services/">Services</a> · <a class="backlink" href="/pricing/">Pricing</a></p></div></div></main><footer><div class="container"><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a><a href="/cookies/">Cookies</a><a href="/contact/">Contact</a><p>© 2026 Zion Tech Group. All rights reserved.</p></div></footer></body></html>`;
  fs.writeFileSync(file, html);
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
