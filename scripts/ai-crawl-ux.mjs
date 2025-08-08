#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import https from 'https';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || '';
const BASE_URL = process.env.BASE_URL || 'https://ziontechgroup.com';
const LOCALES = (process.env.LOCALES || 'en').split(',');
const OUT_DIR = path.join(process.cwd(), 'data', 'reports', 'i18n-ux');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

function buildUrls(locale) {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return [
    `${BASE_URL}${prefix}/`,
    `${BASE_URL}${prefix}/community`,
    `${BASE_URL}${prefix}/about`,
    `${BASE_URL}${prefix}/contact`,
    `${BASE_URL}${prefix}/services`,
    `${BASE_URL}${prefix}/products`,
  ];
}

async function analyze(html, url, locale) {
  if (!OPENAI_API_KEY) return { summary: 'No OPENAI_API_KEY provided', issues: [] };
  const prompt = `You are auditing a localized web page for i18n SEO and UX. Given the HTML and URL, report:\n- html lang value\n- presence and correctness of hreflang alternates (list)\n- canonical URL\n- mixed-language text occurrences\n- obvious untranslated strings\n- recommendation fixes\nURL: ${url}\nLOCALE: ${locale}\nHTML:\n${html.slice(0, 20000)}`;
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }], temperature: 0 })
  });
  const json = await res.json();
  const content = json?.choices?.[0]?.message?.content || '';
  return { summary: content, issues: [] };
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const markdown = [];
  const csvRows = [
    'url,locale,html_lang,has_canonical,hreflang_count,has_xdefault,mixed_language_flags,key_issues'
  ];
  for (const locale of LOCALES) {
    const urls = buildUrls(locale);
    for (const url of urls) {
      try {
        const { status, body } = await fetchUrl(url);
        if (status !== 200) {
          markdown.push(`- ${url} (${locale}) -> status ${status}`);
          continue;
        }
        const analysis = await analyze(body, url, locale);
        const htmlLang = (body.match(/<html[^>]*lang="([^"]+)"/i) || [,''])[1];
        const canonical = (body.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || [,''])[1];
        const hreflangs = Array.from(body.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"/gi)).map(m => m[1]);
        const hasXDefault = hreflangs.includes('x-default');
        csvRows.push([
          url,
          locale,
          htmlLang || '',
          canonical ? 'yes' : 'no',
          String(hreflangs.length),
          hasXDefault ? 'yes' : 'no',
          analysis.summary.includes('mixed-language') ? 'yes' : 'no',
          JSON.stringify(analysis.summary).replaceAll(',', ';')
        ].join(','));
        markdown.push(`\n### ${url} (${locale})\n\n${analysis.summary}\n`);
      } catch (e) {
        markdown.push(`- ${url} (${locale}) -> error ${(e && e.message) || e}`);
      }
    }
  }
  fs.writeFileSync(path.join(OUT_DIR, `report-${Date.now()}.md`), markdown.join('\n'));
  fs.writeFileSync(path.join(OUT_DIR, `report-${Date.now()}.csv`), csvRows.join('\n'));
  console.log('✅ AI crawl UX report generated');
}

main().catch((e) => { console.error(e); process.exit(0); });