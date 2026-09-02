#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'app');
const CAL = 'https://calendly.com/kleber-ziontechgroup/zion-tech-group-ai-it-discovery-1';

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

function extract(src, re, fallback) {
  const m = src.match(re);
  return m ? m[1].replace(/\s+/g, ' ').trim() : fallback;
}

function needsRewrite(src) {
  return (
    src.includes('<script type="application/ld+json">{') ||
    src.includes('BreadcrumbSchema') ||
    src.includes('<!DOCTYPE') ||
    /<<<<<<<|>>>>>>>|=======/.test(src) ||
    !src.includes('export default')
  );
}

function toIdent(title) {
  const cleaned = title.replace(/\|.*$/, '').trim() || 'Service';
  return cleaned;
}

let rewritten = 0;
for (const file of walk(ROOT)) {
  const src = fs.readFileSync(file, 'utf8');
  if (!needsRewrite(src)) {
    const next = src
      .replaceAll('https://calendly.com/kleber-ziontechgroup/consultation', CAL)
      .replaceAll('https://calendly.com/ziontechgroup/30min', CAL)
      .replaceAll('https://calendly.com/ziontechgroup/strategy-session', CAL);
    if (next !== src) fs.writeFileSync(file, next);
    continue;
  }

  const rel = path.relative(path.join(__dirname, '..', 'app'), path.dirname(file)).replace(/\\/g, '/');
  const fallbackTitle = rel.split('/').pop().replace(/-[0-9a-f]{6,}$/i, '').replace(/-/g, ' ');
  const title = toIdent(
    extract(src, /title:\s*['`]([^'`]+)['`]/, extract(src, /<h1[^>]*>([^<]+)<\/h1>/, fallbackTitle))
  );
  const description = extract(
    src,
    /description:\s*['`]([^'`]+)['`]/,
    `Zion Tech Group delivers ${title} with measurable outcomes.`
  );
  const slug = rel;
  const content = `export const metadata = {
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(description.slice(0, 160))},
  alternates: { canonical: ${JSON.stringify('https://ziontechgroup.com/' + slug + '/')} },
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
      <h1>${title.replace(/&/g, '&amp;').replace(/</g, '')}</h1>
      <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: 18 }}>
        ${description.replace(/&/g, '&amp;').replace(/</g, '').slice(0, 280)}
      </p>
      <ul style={{ color: '#cbd5e1', lineHeight: 1.9 }}>
        <li>Production implementation with monitoring and handover</li>
        <li>Integrations across CRM, billing, and operations tools</li>
        <li>Clear success criteria and a 30-day action plan</li>
      </ul>
      <p style={{ marginTop: 24 }}>
        <a href="/book/" style={{ display: 'inline-block', padding: '12px 18px', borderRadius: 12, background: '#7c3aed', color: '#fff', textDecoration: 'none', fontWeight: 700, marginRight: 8 }}>
          Book Discovery
        </a>
        <a href="/pricing/">Pricing</a>
      </p>
    </main>
  );
}
`;
  fs.writeFileSync(file, content);
  rewritten += 1;
}

console.log(`Rewrote ${rewritten} broken pages`);
