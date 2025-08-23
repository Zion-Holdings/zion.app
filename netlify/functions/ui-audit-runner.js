// netlify/functions/ui-audit-runner.js
exports.handler = async function() {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');
  const cheerio = require('cheerio');

  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || '').replace(/\/$/, '');
  const nowIso = new Date().toISOString();

  function ensureDir(dirPath) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  async function fetchHtml(url) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch(url, { signal: controller.signal });
      clearTimeout(timeout);
      if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
      return await res.text();
    } catch (e) {
      clearTimeout(timeout);
      throw e;
    }
  }

  function analyze(html, url) {
    const $ = cheerio.load(html);
    const issues = [];

    $('img').each((_, el) => {
      const alt = $(el).attr('alt');
      if (typeof alt === 'undefined' || alt.trim() === '') {
        issues.push({ type: 'a11y', severity: 'medium', message: 'Image missing alt text', selector: 'img', url });
      }
    });

    $('a').each((_, el) => {
      const href = $(el).attr('href') || '';
      const text = $(el).text().trim();
      if (href === '#' || href.toLowerCase().startsWith('javascript:')) {
        issues.push({ type: 'ux', severity: 'low', message: 'Anchor has non-actionable href', selector: 'a', text, url });
      }
      if (!text && !$(el).find('img, svg').length) {
        issues.push({ type: 'a11y', severity: 'low', message: 'Anchor has no accessible name', selector: 'a', url });
      }
    });

    const h1s = $('h1');
    if (h1s.length === 0) issues.push({ type: 'semantics', severity: 'low', message: 'Missing h1 on page', selector: 'h1', url });

    const buttons = $('button');
    buttons.each((_, el) => {
      const text = $(el).text().trim();
      if (!text && !$(el).attr('aria-label')) {
        issues.push({ type: 'a11y', severity: 'low', message: 'Button has no accessible name', selector: 'button', url });
      }
    });

    return { issues, counts: { issues: issues.length, images: $('img').length, anchors: $('a').length, buttons: $('button').length } };
  }

  function writeReports(results) {
    const outDirJson = path.join(process.cwd(), 'public', 'automation');
    const outDirDocs = path.join(process.cwd(), 'docs', 'reports');
    ensureDir(outDirJson);
    ensureDir(outDirDocs);

    const jsonPath = path.join(outDirJson, 'ui-audit.json');
    fs.writeFileSync(jsonPath, JSON.stringify({ generatedAt: nowIso, baseUrl, pages: results }, null, 2));

    const mdPath = path.join(outDirDocs, 'ui-audit.md');
    const totalIssues = results.reduce((acc, r) => acc + r.analysis.counts.issues, 0);
    const lines = [];
    lines.push(`# UI Audit Report`);
    lines.push(`Generated: ${nowIso}`);
    lines.push(`Base URL: ${baseUrl || '(unknown)'}`);
    lines.push('');
    lines.push(`Total pages scanned: ${results.length}`);
    lines.push(`Total issues: ${totalIssues}`);
    lines.push('');
    for (const r of results) {
      lines.push(`## ${r.url}`);
      lines.push(`- Images: ${r.analysis.counts.images}`);
      lines.push(`- Links: ${r.analysis.counts.anchors}`);
      lines.push(`- Buttons: ${r.analysis.counts.buttons}`);
      lines.push(`- Issues: ${r.analysis.issues.length}`);
      for (const issue of r.analysis.issues.slice(0, 200)) {
        lines.push(`  - [${issue.severity}] ${issue.type}: ${issue.message}`);
      }
      lines.push('');
    }
    fs.writeFileSync(mdPath, lines.join('\n'));

    return { jsonPath, mdPath };
  }

  function gitSync(commitMessage) {
    try {
      execSync('git config user.name "zion-bot" && git config user.email "bot@zion.app"', { stdio: 'inherit', shell: true });
      execSync('git add -A', { stdio: 'inherit', shell: true });
      execSync(`git commit -m ${JSON.stringify(commitMessage)} || true`, { stdio: 'inherit', shell: true });
      execSync('git push origin main || true', { stdio: 'inherit', shell: true });
    } catch (e) {
      // Swallow errors to keep function successful
    }
  }

  try {
    const targets = [
      '/',
      '/automation',
      '/main/front',
      '/newsroom'
    ].filter(Boolean);

    const pages = [];
    for (const p of targets) {
      const url = baseUrl ? `${baseUrl}${p}` : `http://localhost:8888${p}`; // local dev fallback
      try {
        const html = await fetchHtml(url);
        const analysis = analyze(html, url);
        pages.push({ url, analysis });
      } catch (e) {
        pages.push({ url, error: String(e) });
      }
    }

    const { jsonPath, mdPath } = writeReports(pages);
    gitSync(`chore(ui-audit): ${pages.length} pages, ${nowIso} [ci skip]`);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ok: true, generatedAt: nowIso, report: { jsonPath, mdPath } })
    };
  } catch (e) {
    return { statusCode: 200, body: JSON.stringify({ ok: false, error: String(e) }) };
  }
};