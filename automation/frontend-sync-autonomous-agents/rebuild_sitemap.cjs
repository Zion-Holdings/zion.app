#!/usr/bin/env node
console.log('Autonomous: Rebuilding sitemap');
try { require('child_process').execSync('npm run sitemap', { stdio: 'inherit' }); } catch (e) { console.error('Sitemap rebuild failed:', e.message); process.exitCode = 1; }
