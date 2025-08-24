'use strict';

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) { fs.mkdirSync(dirPath, { recursive: true }); }

(function main() {
  const siteUrl = (process.env.SITE_URL || process.env.URL || 'https://example.com').replace(/\/$/, '');
  const siteName = 'Zion — Autonomous Cloud Automations';
  const orgName = 'Zion';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': siteUrl + '/#organization',
        'name': orgName,
        'url': siteUrl,
        'logo': siteUrl + '/favicon.ico'
      },
      {
        '@type': 'WebSite',
        '@id': siteUrl + '/#website',
        'url': siteUrl,
        'name': siteName,
        'publisher': { '@id': siteUrl + '/#organization' },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': siteUrl + '/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  const outDir = path.resolve('public', 'seo');
  ensureDir(outDir);
  fs.writeFileSync(path.resolve(outDir, 'schema.json'), JSON.stringify(schema, null, 2));
})();