#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function readJsonSafe(p) {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch { return null; }
}

function main() {
  const root = process.cwd();
  const navPath = path.join(root, 'data', 'navigation', 'navigation.json');
  const metaDir = path.join(root, 'data', 'page-metadata');
  const outDir = path.join(root, 'data', 'schema');
  fs.mkdirSync(outDir, { recursive: true });

  const nav = readJsonSafe(navPath) || { services: [], categories: [] };
  const siteUrl = 'https://ziontechgroup.com';

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: siteUrl,
    sameAs: [
      'https://github.com/Zion-Holdings',
    ],
    logo: `${siteUrl}/favicon.ico`,
  };

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion AI Marketplace',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Services',
    itemListElement: nav.services.map((s, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: `${siteUrl}${s.href}`,
      name: s.title,
    })),
  };

  fs.writeFileSync(path.join(outDir, 'organization.json'), JSON.stringify(organization, null, 2));
  fs.writeFileSync(path.join(outDir, 'website.json'), JSON.stringify(webSite, null, 2));
  fs.writeFileSync(path.join(outDir, 'services.json'), JSON.stringify(itemList, null, 2));

  console.log('Schema generated in data/schema');
}

if (require.main === module) {
  main();
}