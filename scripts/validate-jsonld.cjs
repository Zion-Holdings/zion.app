#!/usr/bin/env node
const fetch = global.fetch || ((...args) => import('node-fetch').then(({default: f}) => f(...args)));

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.netlify.app';
const REQUIRED = [
  { path: '/jobs', anyOf: ['JobPosting'] },
  { path: '/products', anyOf: ['Product'] },
  { path: '/services/ai-seo-auditor', anyOf: ['FAQPage'] },
  { path: '/talent/ava-chen', anyOf: ['Person','Organization','SocialProfile'] }
];

async function getJsonLd(url) {
  const res = await fetch(url);
  const html = await res.text();
  const matches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const payloads = [];
  for (const m of matches) {
    try {
      const txt = m[1].trim();
      const obj = JSON.parse(txt);
      if (Array.isArray(obj)) payloads.push(...obj); else payloads.push(obj);
    } catch {}
  }
  return payloads;
}

(async function main(){
  const report = [];
  for (const req of REQUIRED) {
    const url = SITE_URL + req.path;
    const jsonld = await getJsonLd(url);
    const types = new Set();
    for (const obj of jsonld) {
      const t = obj['@type'];
      if (Array.isArray(t)) t.forEach((x)=>types.add(String(x))); else if (t) types.add(String(t));
    }
    const ok = req.anyOf.some((t)=>types.has(t));
    report.push({ url, requiredAnyOf: req.anyOf, foundTypes: Array.from(types), ok });
  }
  const missing = report.filter(r=>!r.ok);
  const out = { generatedAt: new Date().toISOString(), site: SITE_URL, report };
  console.log(JSON.stringify(out, null, 2));
  if (missing.length) process.exit(2);
})();