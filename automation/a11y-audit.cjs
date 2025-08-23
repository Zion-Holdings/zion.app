#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function log(msg) {
  process.stdout.write(`[a11y-audit] ${msg}\n`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-a11y-audit' } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return await res.text();
}

function auditDocument(html, url) {
  const $ = cheerio.load(html);
  const issues = [];

  // Title present
  const title = $('head > title').text().trim();
  if (!title) issues.push({ type: 'meta', code: 'missing-title', message: 'Missing <title>', selector: 'head > title' });

  // Images alt attributes
  $('img').each((_, el) => {
    const src = $(el).attr('src') || '';
    const alt = $(el).attr('alt');
    if (typeof alt === 'undefined' || alt.trim() === '') {
      issues.push({ type: 'img', code: 'missing-alt', message: 'Image missing alt text', selector: $.root().find(el).get(0)?.name || 'img', context: { src } });
    }
  });

  // Links with accessible text
  $('a').each((_, el) => {
    const href = $(el).attr('href') || '';
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    const ariaLabel = $(el).attr('aria-label') || '';
    if (!text && !ariaLabel) {
      issues.push({ type: 'a', code: 'empty-link-text', message: 'Link has no accessible text', selector: 'a', context: { href } });
    }
  });

  // Heading order: warn if skipping levels frequently
  const headings = $('h1, h2, h3, h4, h5, h6').toArray().map(el => ({
    level: Number(el.tagName.replace('h', '')),
    text: $(el).text().trim().slice(0, 120)
  }));
  let last = 0;
  for (const h of headings) {
    if (last && h.level > last + 1) {
      issues.push({ type: 'heading', code: 'skipped-level', message: `Heading level jumped from h${last} to h${h.level}`, selector: `h${h.level}`, context: { text: h.text } });
    }
    last = h.level;
  }

  // Form controls with labels
  $('input, select, textarea').each((_, el) => {
    const id = $(el).attr('id');
    const ariaLabel = $(el).attr('aria-label');
    const labelled = id && $(`label[for="${id}"]`).length > 0;
    if (!labelled && !ariaLabel) {
      issues.push({ type: 'form', code: 'unlabeled-control', message: 'Form control without label or aria-label', selector: el.tagName, context: { id: id || null } });
    }
  });

  return { url, issues };
}

function renderHtmlReport(results) {
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);
  const sections = results.map(r => {
    const items = r.issues.map(i => `<li><code>${i.code}</code> — ${i.message}${i.context?.href ? ` — <small>${i.context.href}</small>` : ''}</li>`).join('\n');
    return `<section><h2>${r.url}</h2><ul>${items || '<li>No issues found</li>'}</ul></section>`;
  }).join('\n');
  return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>A11y Audit Report</title><style>body{font-family:system-ui,Segoe UI,Roboto,Inter,sans-serif;margin:24px}h1{margin:0 0 8px}h2{margin-top:24px}code{background:#f1f5f9;padding:2px 4px;border-radius:4px}</style></head><body><h1>A11y Audit Report</h1><p>Total issues: ${totalIssues}</p>${sections}</body></html>`;
}

async function main() {
  const base = process.env.CANONICAL_URL || process.env.SITE_URL || process.env.URL || 'https://ziontechgroup.com';
  const pages = Array.from(new Set([
    '/', '/automation', '/main/front', '/newsroom', '/site-health'
  ]));
  const targets = pages.map(p => `${base.replace(/\/$/, '')}${p}`);

  log(`Base: ${base}`);
  const results = [];
  for (const url of targets) {
    try {
      const html = await fetchHtml(url);
      results.push(auditDocument(html, url));
      log(`Audited: ${url}`);
    } catch (e) {
      results.push({ url, issues: [{ type: 'network', code: 'fetch-error', message: String(e) }] });
      log(`Failed: ${url} -> ${e.message || e}`);
    }
  }

  const outDir = path.join(__dirname, '..', 'public', 'reports', 'a11y');
  ensureDir(outDir);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const summary = { generatedAt: new Date().toISOString(), totalIssues: results.reduce((s, r) => s + r.issues.length, 0), pages: results.length };
  fs.writeFileSync(path.join(outDir, 'latest.json'), JSON.stringify({ ...summary, results }, null, 2));
  fs.writeFileSync(path.join(outDir, `${stamp}.json`), JSON.stringify({ ...summary, results }, null, 2));
  fs.writeFileSync(path.join(outDir, 'index.html'), renderHtmlReport(results));

  log(`Wrote reports to ${outDir}`);
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});