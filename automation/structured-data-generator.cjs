#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

(function main() {
  const siteUrl = process.env.SITE_URL || process.env.URL || 'https://zion.app';
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      'https://github.com/Zion-Holdings',
    ],
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion — Autonomous Cloud Automations',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const pages = [
    { path: '/', name: 'Homepage' },
    { path: '/automation', name: 'Automation Hub' },
    { path: '/main/front', name: 'Front Systems Hub' },
    { path: '/newsroom', name: 'Newsroom' },
  ].map((p) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Zion — ${p.name}`,
    url: `${siteUrl}${p.path}`,
    isPartOf: { '@type': 'WebSite', url: siteUrl },
  }));

  const outDir = path.resolve('public/structured-data');
  ensureDir(outDir);

  fs.writeFileSync(path.join(outDir, 'organization.json'), JSON.stringify(org, null, 2));
  fs.writeFileSync(path.join(outDir, 'website.json'), JSON.stringify(webSite, null, 2));
  fs.writeFileSync(path.join(outDir, 'pages.json'), JSON.stringify(pages, null, 2));

  console.log('Structured data written to public/structured-data');
})();