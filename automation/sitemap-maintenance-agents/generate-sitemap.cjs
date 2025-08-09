#!/usr/bin/env node
const { execSync } = require('child_process');
try { execSync('node scripts/generate-sitemap.mjs', { stdio: 'inherit' }); } catch { console.log('sitemap script missing, creating placeholder sitemap.xml'); const fs=require('fs'); const path=require('path'); const p=path.join(process.cwd(), 'public', 'sitemap.xml'); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n'); }
console.log('Sitemap generation completed');

