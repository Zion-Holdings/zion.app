const axios = require('axios');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function hasAccessibleName($, el) {
  const $el = $(el);
  const text = $el.text().trim();
  const aria = $el.attr('aria-label') || $el.attr('aria-labelledby');
  const title = $el.attr('title');
  return Boolean(text || aria || title);
}

(async function runA11yAudit() {
  const baseUrl = process.env.URL || process.env.DEPLOY_URL || process.env.SITE_URL || '';
  const fallbackBase = baseUrl && /^https?:\/\//.test(baseUrl) ? baseUrl.replace(/\/$/, '') : '';
  const siteBase = fallbackBase || 'https://zion.app';

  const pages = [
    '/',
    '/main/front',
    '/automation',
    '/site-health',
    '/newsroom'
  ];

  const pageReports = [];

  for (const p of pages) {
    const url = `${siteBase}${p}`;
    try {
      const res = await axios.get(url, { headers: { 'User-Agent': 'Zion-A11y-Auditor/1.0' }, timeout: 25000 });
      const $ = cheerio.load(res.data);

      const issues = [];

      // Missing lang attribute on <html>
      const htmlLang = $('html').attr('lang');
      if (!htmlLang) issues.push('html element is missing a lang attribute');

      // Images without alt
      const imgsWithoutAlt = $('img').filter((_, el) => !$(el).attr('alt')).length;
      if (imgsWithoutAlt > 0) issues.push(`${imgsWithoutAlt} <img> elements are missing alt attributes`);

      // Links with no text
      const linksNoText = $('a').filter((_, el) => !$(el).text().trim()).length;
      if (linksNoText > 0) issues.push(`${linksNoText} <a> elements have no text content`);

      // Buttons without accessible name
      const buttonsNoName = $('button').filter((_, el) => !hasAccessibleName($, el)).length;
      if (buttonsNoName > 0) issues.push(`${buttonsNoName} <button> elements lack an accessible name`);

      // Inputs without labels
      const inputsNoLabel = $('input:not([type="hidden"])').filter((_, el) => {
        const $el = $(el);
        const id = $el.attr('id');
        const byLabel = id ? $(`label[for="${id}"]`).length > 0 : false;
        const aria = $el.attr('aria-label') || $el.attr('aria-labelledby');
        return !(byLabel || aria);
      }).length;
      if (inputsNoLabel > 0) issues.push(`${inputsNoLabel} <input> elements lack a label or aria-label`);

      pageReports.push({ url, issues });
    } catch (e) {
      pageReports.push({ url, issues: [`Fetch failed: ${String(e.message || e)}`] });
    }
  }

  const totalIssues = pageReports.reduce((sum, r) => sum + r.issues.length, 0);

  const mdLines = [];
  mdLines.push(`# Accessibility Audit Report`);
  mdLines.push(``);
  mdLines.push(`- Site: ${siteBase}`);
  mdLines.push(`- Generated: ${new Date().toISOString()}`);
  mdLines.push(`- Pages audited: ${pageReports.length}`);
  mdLines.push(`- Total issues found: ${totalIssues}`);
  mdLines.push('');
  for (const r of pageReports) {
    mdLines.push(`## ${r.url}`);
    if (r.issues.length === 0) {
      mdLines.push(`- No issues found ✅`);
    } else {
      for (const issue of r.issues) mdLines.push(`- ${issue}`);
    }
    mdLines.push('');
  }

  const reportsDir = path.resolve(__dirname, '..', 'docs', 'reports');
  const reportPath = path.resolve(reportsDir, 'a11y-report.md');
  try { fs.mkdirSync(reportsDir, { recursive: true }); } catch {}
  fs.writeFileSync(reportPath, mdLines.join('\n'));
  console.log('A11y report written to', reportPath);
})();