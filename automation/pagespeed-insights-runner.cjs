#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function writeFile(filepath, content) {
  const dir = path.dirname(filepath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filepath, content, 'utf8');
}

const baseUrl = process.env.SITE_BASE_URL || process.env.URL || process.env.NETLIFY_BASE_URL || 'https://example.com';

const md = `# PageSpeed Insights (placeholder)\n\n- Generated: ${new Date().toISOString()}\n- Base URL: ${baseUrl}\n\nNote: Integrate Google PSI API with credentials to fetch real metrics.`;

writeFile(path.resolve(process.cwd(), 'docs/pagespeed-report.md'), md);
console.log('Wrote docs/pagespeed-report.md');