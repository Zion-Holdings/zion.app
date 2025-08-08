#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const rp = path.join(process.cwd(), 'public', 'robots.txt');
if (!fs.existsSync(rp)) { fs.mkdirSync(path.dirname(rp), { recursive: true }); fs.writeFileSync(rp, 'User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n'); console.log('Created robots.txt'); } else { console.log('robots.txt exists'); }

